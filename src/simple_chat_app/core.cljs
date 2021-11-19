(ns simple-chat-app.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [cljs.core.async :as async :refer [go]]
      ["solclientjs/lib-browser/solclient" :as solace]
      ))
;; ------------------------
;; Utilities

(defn rand-str [len]
  (apply str (take len (repeatedly #(char (+ (rand 26) 65))))))


;; ------------------------
;; state
(def username (r/atom "")

)
(def user-id (rand-str 20))
(def page (r/atom :login-page))
(def current-message (r/atom ""))

(def chat-data (r/atom []))

(defn update-local-chat-data [chat-obj] (reset! chat-data (conj @chat-data chat-obj )))



;; --------------------------
;; Solace Messaging
;; This part is object oriented
(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn json->clj [string]
  (js->clj (.parse js/JSON string) :keywordize-keys true))

(def topic "jack/chat")
(def solace-credentials {
                          :username "name"
                          :password "pass"
                          :vpn "vpn"
                          :host "host"
                         })

(defn map-credentials-to-session-requirement [ credentials]
  {
   :url (:host credentials)
   :vpnName (:vpn credentials)
   :password (:password credentials)
   :userName (:username credentials)
   })

(def mapped-credentials (map-credentials-to-session-requirement solace-credentials))
(def session (atom nil))
(def session-ready (r/atom false))
(def session-event-codes (js->clj solace/SessionEventCode))

(defn connect []
  (reset! session
          (.createSession solace/SolclientFactory
                          (clj->js mapped-credentials)))
  (.on @session  0 (fn [event] (print "broker up") (reset! session-ready true)))
  (go (try
        (.connect @session)
        (catch js/Object e (print e)))))

(defn send-solace-message [message]
  (if (nil? @session)
    (print "no session found")
    (let [solace-message  (.createMessage solace/SolclientFactory)]
      (.setDestination solace-message (.createTopicDestination solace/SolclientFactory topic))
      (.setBinaryAttachment solace-message (clj->json message))
      (try
        (.send @session solace-message)
        (print "sent message")
        (catch js/Object e (print e))))))

(defn setup-sol-client-factory []
  (let [factory-props (new solace/SolclientFactoryProperties())]
    (set! (.-profile factory-props) solace/SolclientFactoryProfiles.version10_5)
    (.init solace/SolclientFactory factory-props)))

(setup-sol-client-factory)
(connect)

(defn on-message-receive [message-obj]
  (update-local-chat-data message-obj))

(defn subscribe-to-message []
  (try

  (.subscribe @session  (.createTopicDestination solace/SolclientFactory topic) true topic)
  (.on @session 28
       (fn [message]
         (on-message-receive (get (json->clj (str (.getBinaryAttachment message))) 0))))
  (catch :default e (print e))))
(def subscribed? (r/atom false))

(reset! subscribed? (if @subscribed?
                     true
                      (do (.on @session 0
                               #(subscribe-to-message))
                          true)))


(.addEventListener js/window "unload" #(.disconnect session))



;; --------------------------
;; Business
;;


(defn build-new-message [username user-id message]
  {
   :username username
   :user-id user-id
   :message message
   :timestamp (.now js/Date)
   })


(defn post-to-broker [chat-obj]
  (go (send-solace-message chat-obj)))

(defn send-message []
  (print @username ":" @current-message)
  (let [chat-obj (build-new-message @username user-id @current-message)]
    (post-to-broker [chat-obj]))
  (reset! current-message ""))


;; -------------------------
;; Views
;;

(defn chat-page []
  [:div
  [:h3 "username: "@username]
  [:div.border.container
   (map-indexed (fn [idx chat-obj]
                  (let [sent-by-current-user (= user-id (:user-id chat-obj))]
                  [:div.row.p-1.ms-auto.flex-column { :class (when sent-by-current-user "text-end")
                                 :key (str "chat-" idx)} (when (not sent-by-current-user) (str (get chat-obj :username) ": " ))(get chat-obj :message)  ]))
        @chat-data)]
   [:form {:on-submit #((send-message) (.preventDefault %)) :action "#"}
   [:input.form-control {:value @current-message :on-change #(reset! current-message (-> % .-target .-value))}]
   [:button.form-control {:type "submit"} "Send"]]]
  )


(defn login-page []
  [:div
   [:label "Username"]
   [:br]
   [:form {:on-submit #((reset! page :chat-page) (.preventDefault %))}
   [:input.form-control {:value @username
            :on-change #(reset! username (-> % .-target .-value))}]
   [:button.form-control {:type "submit" :disabled (not @session-ready)} "Login"]]])


(def page-map {
               :login-page login-page
               :chat-page chat-page
               })



(defn home-page []
  [:div.container
   [:h2 "a simple clojure-solace chat app"]
   [(get page-map @page)]])

;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
