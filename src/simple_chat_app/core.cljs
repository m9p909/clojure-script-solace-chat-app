(ns simple-chat-app.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [cljs.core.async :as async :refer [go]]
      ["mqtt" :as mqtt]
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

(def topic "lKtrzMTTCOJn7Wbk9Cqsf")
(def client
  (.connect mqtt "ws://test.mosquitto.org" (clj->js {:port 8080})))

(.on client "connect" (fn []
                        (.subscribe client topic #(println "logged in and subscribed"))))


(.on client "message" (fn [topic message]
                        (update-local-chat-data (json->clj message))))

(defn send-message [message]
  (.publish client topic (clj->json message)))

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
  (go (send-message chat-obj)))

(defn on-submit []
  (print @username ":" @current-message)
  (let [chat-obj (build-new-message @username user-id @current-message)]
    (post-to-broker chat-obj))
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
                    [:div.row.p-1.ms-auto.flex-column {
                                                       :class (when sent-by-current-user "text-end")
                                                       :key (str "chat-" idx)}
                     (when (not sent-by-current-user)
                       (str (get chat-obj :username) ": " ))
                     (get chat-obj :message)  ]))
        @chat-data)]
   [:form {:on-submit #((on-submit) (.preventDefault %)) :action "#"}
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
   [:button.form-control {:type "submit"} "Login"]]])


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
