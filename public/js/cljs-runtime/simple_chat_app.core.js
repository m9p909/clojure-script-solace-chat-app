goog.provide('simple_chat_app.core');
var module$node_modules$mqtt$lib$connect$index=shadow.js.require("module$node_modules$mqtt$lib$connect$index", {});
simple_chat_app.core.rand_str = (function simple_chat_app$core$rand_str(len){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(len,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.char$((cljs.core.rand.cljs$core$IFn$_invoke$arity$1((26)) + (65)));
}))));
});
simple_chat_app.core.username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
simple_chat_app.core.user_id = simple_chat_app.core.rand_str((20));
simple_chat_app.core.page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login-page","login-page",2028706789));
simple_chat_app.core.current_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
simple_chat_app.core.chat_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
simple_chat_app.core.update_local_chat_data = (function simple_chat_app$core$update_local_chat_data(chat_obj){
return cljs.core.reset_BANG_(simple_chat_app.core.chat_data,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(simple_chat_app.core.chat_data),chat_obj));
});
simple_chat_app.core.clj__GT_json = (function simple_chat_app$core$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
simple_chat_app.core.json__GT_clj = (function simple_chat_app$core$json__GT_clj(string){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(string),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
simple_chat_app.core.topic = "lKtrzMTTCOJn7Wbk9Cqsf";
simple_chat_app.core.client = module$node_modules$mqtt$lib$connect$index.connect("ws://test.mosquitto.org",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(8080)], null)));
simple_chat_app.core.client.on("connect",(function (){
return simple_chat_app.core.client.subscribe(simple_chat_app.core.topic,(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["logged in and subscribed"], 0));
}));
}));
simple_chat_app.core.client.on("message",(function (topic,message){
return simple_chat_app.core.update_local_chat_data(simple_chat_app.core.json__GT_clj(message));
}));
simple_chat_app.core.send_message = (function simple_chat_app$core$send_message(message){
return simple_chat_app.core.client.publish(simple_chat_app.core.topic,simple_chat_app.core.clj__GT_json(message));
});
simple_chat_app.core.build_new_message = (function simple_chat_app$core$build_new_message(username,user_id,message){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now()], null);
});
simple_chat_app.core.post_to_broker = (function simple_chat_app$core$post_to_broker(chat_obj){
var c__32390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_39656){
var state_val_39657 = (state_39656[(1)]);
if((state_val_39657 === (1))){
var inst_39654 = simple_chat_app.core.send_message(chat_obj);
var state_39656__$1 = state_39656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39656__$1,inst_39654);
} else {
return null;
}
});
return (function() {
var simple_chat_app$core$post_to_broker_$_state_machine__32298__auto__ = null;
var simple_chat_app$core$post_to_broker_$_state_machine__32298__auto____0 = (function (){
var statearr_39658 = [null,null,null,null,null,null,null];
(statearr_39658[(0)] = simple_chat_app$core$post_to_broker_$_state_machine__32298__auto__);

(statearr_39658[(1)] = (1));

return statearr_39658;
});
var simple_chat_app$core$post_to_broker_$_state_machine__32298__auto____1 = (function (state_39656){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_39656);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e39659){var ex__32301__auto__ = e39659;
var statearr_39660_39671 = state_39656;
(statearr_39660_39671[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_39656[(4)]))){
var statearr_39661_39672 = state_39656;
(statearr_39661_39672[(1)] = cljs.core.first((state_39656[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39673 = state_39656;
state_39656 = G__39673;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
simple_chat_app$core$post_to_broker_$_state_machine__32298__auto__ = function(state_39656){
switch(arguments.length){
case 0:
return simple_chat_app$core$post_to_broker_$_state_machine__32298__auto____0.call(this);
case 1:
return simple_chat_app$core$post_to_broker_$_state_machine__32298__auto____1.call(this,state_39656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_chat_app$core$post_to_broker_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = simple_chat_app$core$post_to_broker_$_state_machine__32298__auto____0;
simple_chat_app$core$post_to_broker_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = simple_chat_app$core$post_to_broker_$_state_machine__32298__auto____1;
return simple_chat_app$core$post_to_broker_$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_39662 = f__32391__auto__();
(statearr_39662[(6)] = c__32390__auto__);

return statearr_39662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));

return c__32390__auto__;
});
simple_chat_app.core.on_submit = (function simple_chat_app$core$on_submit(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(simple_chat_app.core.username),":",cljs.core.deref(simple_chat_app.core.current_message)], 0));

var chat_obj_39674 = simple_chat_app.core.build_new_message(cljs.core.deref(simple_chat_app.core.username),simple_chat_app.core.user_id,cljs.core.deref(simple_chat_app.core.current_message));
simple_chat_app.core.post_to_broker(chat_obj_39674);

return cljs.core.reset_BANG_(simple_chat_app.core.current_message,"");
});
simple_chat_app.core.chat_page = (function simple_chat_app$core$chat_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"username: ",cljs.core.deref(simple_chat_app.core.username)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.container","div.border.container",-2093549253),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,chat_obj){
var sent_by_current_user = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(simple_chat_app.core.user_id,new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(chat_obj));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.p-1.ms-auto.flex-column","div.row.p-1.ms-auto.flex-column",-1756514511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((sent_by_current_user)?"text-end":null),new cljs.core.Keyword(null,"key","key",-1516042587),["chat-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),(((!(sent_by_current_user)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(chat_obj,new cljs.core.Keyword(null,"username","username",1605666410))),": "].join(''):null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(chat_obj,new cljs.core.Keyword(null,"message","message",-406056002))], null);
}),cljs.core.deref(simple_chat_app.core.chat_data))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__39663_SHARP_){
var G__39666 = p1__39663_SHARP_.preventDefault();
var fexpr__39665 = simple_chat_app.core.on_submit();
return (fexpr__39665.cljs$core$IFn$_invoke$arity$1 ? fexpr__39665.cljs$core$IFn$_invoke$arity$1(G__39666) : fexpr__39665.call(null,G__39666));
}),new cljs.core.Keyword(null,"action","action",-811238024),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(simple_chat_app.core.current_message),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39664_SHARP_){
return cljs.core.reset_BANG_(simple_chat_app.core.current_message,p1__39664_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.form-control","button.form-control",-1467236232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Send"], null)], null)], null);
});
simple_chat_app.core.login_page = (function simple_chat_app$core$login_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Username"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__39667_SHARP_){
var G__39670 = p1__39667_SHARP_.preventDefault();
var fexpr__39669 = cljs.core.reset_BANG_(simple_chat_app.core.page,new cljs.core.Keyword(null,"chat-page","chat-page",-1687104847));
return (fexpr__39669.cljs$core$IFn$_invoke$arity$1 ? fexpr__39669.cljs$core$IFn$_invoke$arity$1(G__39670) : fexpr__39669.call(null,G__39670));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(simple_chat_app.core.username),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39668_SHARP_){
return cljs.core.reset_BANG_(simple_chat_app.core.username,p1__39668_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.form-control","button.form-control",-1467236232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Login"], null)], null)], null);
});
simple_chat_app.core.page_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"login-page","login-page",2028706789),simple_chat_app.core.login_page,new cljs.core.Keyword(null,"chat-page","chat-page",-1687104847),simple_chat_app.core.chat_page], null);
simple_chat_app.core.home_page = (function simple_chat_app$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"a simple clojure-solace chat app"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(simple_chat_app.core.page_map,cljs.core.deref(simple_chat_app.core.page))], null)], null);
});
simple_chat_app.core.mount_root = (function simple_chat_app$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_chat_app.core.home_page], null),document.getElementById("app"));
});
simple_chat_app.core.init_BANG_ = (function simple_chat_app$core$init_BANG_(){
return simple_chat_app.core.mount_root();
});
goog.exportSymbol('simple_chat_app.core.init_BANG_', simple_chat_app.core.init_BANG_);

//# sourceMappingURL=simple_chat_app.core.js.map
