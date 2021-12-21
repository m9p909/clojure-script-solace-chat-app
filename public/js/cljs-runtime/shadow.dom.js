goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34605 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34605(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34606 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34606(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33899 = coll;
var G__33900 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33899,G__33900) : shadow.dom.lazy_native_coll_seq.call(null,G__33899,G__33900));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33903 = arguments.length;
switch (G__33903) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33905 = arguments.length;
switch (G__33905) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33908 = arguments.length;
switch (G__33908) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33911 = arguments.length;
switch (G__33911) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33915 = arguments.length;
switch (G__33915) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33917 = arguments.length;
switch (G__33917) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33918){if((e33918 instanceof Object)){
var e = e33918;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33918;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33923 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33924 = null;
var count__33925 = (0);
var i__33926 = (0);
while(true){
if((i__33926 < count__33925)){
var el = chunk__33924.cljs$core$IIndexed$_nth$arity$2(null,i__33926);
var handler_34613__$1 = ((function (seq__33923,chunk__33924,count__33925,i__33926,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33923,chunk__33924,count__33925,i__33926,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34613__$1);


var G__34614 = seq__33923;
var G__34615 = chunk__33924;
var G__34616 = count__33925;
var G__34617 = (i__33926 + (1));
seq__33923 = G__34614;
chunk__33924 = G__34615;
count__33925 = G__34616;
i__33926 = G__34617;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33923);
if(temp__5753__auto__){
var seq__33923__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33923__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33923__$1);
var G__34618 = cljs.core.chunk_rest(seq__33923__$1);
var G__34619 = c__4679__auto__;
var G__34620 = cljs.core.count(c__4679__auto__);
var G__34621 = (0);
seq__33923 = G__34618;
chunk__33924 = G__34619;
count__33925 = G__34620;
i__33926 = G__34621;
continue;
} else {
var el = cljs.core.first(seq__33923__$1);
var handler_34622__$1 = ((function (seq__33923,chunk__33924,count__33925,i__33926,el,seq__33923__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33923,chunk__33924,count__33925,i__33926,el,seq__33923__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34622__$1);


var G__34623 = cljs.core.next(seq__33923__$1);
var G__34624 = null;
var G__34625 = (0);
var G__34626 = (0);
seq__33923 = G__34623;
chunk__33924 = G__34624;
count__33925 = G__34625;
i__33926 = G__34626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33933 = arguments.length;
switch (G__33933) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33937 = cljs.core.seq(events);
var chunk__33938 = null;
var count__33939 = (0);
var i__33940 = (0);
while(true){
if((i__33940 < count__33939)){
var vec__33953 = chunk__33938.cljs$core$IIndexed$_nth$arity$2(null,i__33940);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33953,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34628 = seq__33937;
var G__34629 = chunk__33938;
var G__34630 = count__33939;
var G__34631 = (i__33940 + (1));
seq__33937 = G__34628;
chunk__33938 = G__34629;
count__33939 = G__34630;
i__33940 = G__34631;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33937);
if(temp__5753__auto__){
var seq__33937__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33937__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33937__$1);
var G__34632 = cljs.core.chunk_rest(seq__33937__$1);
var G__34633 = c__4679__auto__;
var G__34634 = cljs.core.count(c__4679__auto__);
var G__34635 = (0);
seq__33937 = G__34632;
chunk__33938 = G__34633;
count__33939 = G__34634;
i__33940 = G__34635;
continue;
} else {
var vec__33963 = cljs.core.first(seq__33937__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34636 = cljs.core.next(seq__33937__$1);
var G__34637 = null;
var G__34638 = (0);
var G__34639 = (0);
seq__33937 = G__34636;
chunk__33938 = G__34637;
count__33939 = G__34638;
i__33940 = G__34639;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33968 = cljs.core.seq(styles);
var chunk__33969 = null;
var count__33970 = (0);
var i__33971 = (0);
while(true){
if((i__33971 < count__33970)){
var vec__33980 = chunk__33969.cljs$core$IIndexed$_nth$arity$2(null,i__33971);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34640 = seq__33968;
var G__34641 = chunk__33969;
var G__34642 = count__33970;
var G__34643 = (i__33971 + (1));
seq__33968 = G__34640;
chunk__33969 = G__34641;
count__33970 = G__34642;
i__33971 = G__34643;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33968);
if(temp__5753__auto__){
var seq__33968__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33968__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33968__$1);
var G__34644 = cljs.core.chunk_rest(seq__33968__$1);
var G__34645 = c__4679__auto__;
var G__34646 = cljs.core.count(c__4679__auto__);
var G__34647 = (0);
seq__33968 = G__34644;
chunk__33969 = G__34645;
count__33970 = G__34646;
i__33971 = G__34647;
continue;
} else {
var vec__33985 = cljs.core.first(seq__33968__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33985,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34648 = cljs.core.next(seq__33968__$1);
var G__34649 = null;
var G__34650 = (0);
var G__34651 = (0);
seq__33968 = G__34648;
chunk__33969 = G__34649;
count__33970 = G__34650;
i__33971 = G__34651;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33989_34652 = key;
var G__33989_34653__$1 = (((G__33989_34652 instanceof cljs.core.Keyword))?G__33989_34652.fqn:null);
switch (G__33989_34653__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34657 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34657,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34657,"aria-");
}
})())){
el.setAttribute(ks_34657,value);
} else {
(el[ks_34657] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33997){
var map__33998 = p__33997;
var map__33998__$1 = cljs.core.__destructure_map(map__33998);
var props = map__33998__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33998__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33999 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33999,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33999,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33999,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34005 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34005,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34005;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34013 = arguments.length;
switch (G__34013) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34020){
var vec__34021 = p__34020;
var seq__34022 = cljs.core.seq(vec__34021);
var first__34023 = cljs.core.first(seq__34022);
var seq__34022__$1 = cljs.core.next(seq__34022);
var nn = first__34023;
var first__34023__$1 = cljs.core.first(seq__34022__$1);
var seq__34022__$2 = cljs.core.next(seq__34022__$1);
var np = first__34023__$1;
var nc = seq__34022__$2;
var node = vec__34021;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34029 = nn;
var G__34030 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34029,G__34030) : create_fn.call(null,G__34029,G__34030));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34032 = nn;
var G__34033 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34032,G__34033) : create_fn.call(null,G__34032,G__34033));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34037 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34037,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34037,(1),null);
var seq__34040_34667 = cljs.core.seq(node_children);
var chunk__34041_34668 = null;
var count__34042_34669 = (0);
var i__34043_34670 = (0);
while(true){
if((i__34043_34670 < count__34042_34669)){
var child_struct_34672 = chunk__34041_34668.cljs$core$IIndexed$_nth$arity$2(null,i__34043_34670);
var children_34673 = shadow.dom.dom_node(child_struct_34672);
if(cljs.core.seq_QMARK_(children_34673)){
var seq__34085_34674 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34673));
var chunk__34087_34675 = null;
var count__34088_34676 = (0);
var i__34089_34677 = (0);
while(true){
if((i__34089_34677 < count__34088_34676)){
var child_34678 = chunk__34087_34675.cljs$core$IIndexed$_nth$arity$2(null,i__34089_34677);
if(cljs.core.truth_(child_34678)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34678);


var G__34679 = seq__34085_34674;
var G__34680 = chunk__34087_34675;
var G__34681 = count__34088_34676;
var G__34682 = (i__34089_34677 + (1));
seq__34085_34674 = G__34679;
chunk__34087_34675 = G__34680;
count__34088_34676 = G__34681;
i__34089_34677 = G__34682;
continue;
} else {
var G__34684 = seq__34085_34674;
var G__34685 = chunk__34087_34675;
var G__34686 = count__34088_34676;
var G__34687 = (i__34089_34677 + (1));
seq__34085_34674 = G__34684;
chunk__34087_34675 = G__34685;
count__34088_34676 = G__34686;
i__34089_34677 = G__34687;
continue;
}
} else {
var temp__5753__auto___34688 = cljs.core.seq(seq__34085_34674);
if(temp__5753__auto___34688){
var seq__34085_34689__$1 = temp__5753__auto___34688;
if(cljs.core.chunked_seq_QMARK_(seq__34085_34689__$1)){
var c__4679__auto___34690 = cljs.core.chunk_first(seq__34085_34689__$1);
var G__34691 = cljs.core.chunk_rest(seq__34085_34689__$1);
var G__34692 = c__4679__auto___34690;
var G__34693 = cljs.core.count(c__4679__auto___34690);
var G__34694 = (0);
seq__34085_34674 = G__34691;
chunk__34087_34675 = G__34692;
count__34088_34676 = G__34693;
i__34089_34677 = G__34694;
continue;
} else {
var child_34695 = cljs.core.first(seq__34085_34689__$1);
if(cljs.core.truth_(child_34695)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34695);


var G__34697 = cljs.core.next(seq__34085_34689__$1);
var G__34698 = null;
var G__34699 = (0);
var G__34700 = (0);
seq__34085_34674 = G__34697;
chunk__34087_34675 = G__34698;
count__34088_34676 = G__34699;
i__34089_34677 = G__34700;
continue;
} else {
var G__34701 = cljs.core.next(seq__34085_34689__$1);
var G__34702 = null;
var G__34703 = (0);
var G__34704 = (0);
seq__34085_34674 = G__34701;
chunk__34087_34675 = G__34702;
count__34088_34676 = G__34703;
i__34089_34677 = G__34704;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34673);
}


var G__34706 = seq__34040_34667;
var G__34707 = chunk__34041_34668;
var G__34708 = count__34042_34669;
var G__34709 = (i__34043_34670 + (1));
seq__34040_34667 = G__34706;
chunk__34041_34668 = G__34707;
count__34042_34669 = G__34708;
i__34043_34670 = G__34709;
continue;
} else {
var temp__5753__auto___34710 = cljs.core.seq(seq__34040_34667);
if(temp__5753__auto___34710){
var seq__34040_34711__$1 = temp__5753__auto___34710;
if(cljs.core.chunked_seq_QMARK_(seq__34040_34711__$1)){
var c__4679__auto___34712 = cljs.core.chunk_first(seq__34040_34711__$1);
var G__34713 = cljs.core.chunk_rest(seq__34040_34711__$1);
var G__34714 = c__4679__auto___34712;
var G__34715 = cljs.core.count(c__4679__auto___34712);
var G__34716 = (0);
seq__34040_34667 = G__34713;
chunk__34041_34668 = G__34714;
count__34042_34669 = G__34715;
i__34043_34670 = G__34716;
continue;
} else {
var child_struct_34717 = cljs.core.first(seq__34040_34711__$1);
var children_34718 = shadow.dom.dom_node(child_struct_34717);
if(cljs.core.seq_QMARK_(children_34718)){
var seq__34103_34719 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34718));
var chunk__34105_34720 = null;
var count__34106_34721 = (0);
var i__34107_34722 = (0);
while(true){
if((i__34107_34722 < count__34106_34721)){
var child_34723 = chunk__34105_34720.cljs$core$IIndexed$_nth$arity$2(null,i__34107_34722);
if(cljs.core.truth_(child_34723)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34723);


var G__34724 = seq__34103_34719;
var G__34725 = chunk__34105_34720;
var G__34726 = count__34106_34721;
var G__34727 = (i__34107_34722 + (1));
seq__34103_34719 = G__34724;
chunk__34105_34720 = G__34725;
count__34106_34721 = G__34726;
i__34107_34722 = G__34727;
continue;
} else {
var G__34728 = seq__34103_34719;
var G__34729 = chunk__34105_34720;
var G__34730 = count__34106_34721;
var G__34731 = (i__34107_34722 + (1));
seq__34103_34719 = G__34728;
chunk__34105_34720 = G__34729;
count__34106_34721 = G__34730;
i__34107_34722 = G__34731;
continue;
}
} else {
var temp__5753__auto___34732__$1 = cljs.core.seq(seq__34103_34719);
if(temp__5753__auto___34732__$1){
var seq__34103_34733__$1 = temp__5753__auto___34732__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34103_34733__$1)){
var c__4679__auto___34734 = cljs.core.chunk_first(seq__34103_34733__$1);
var G__34735 = cljs.core.chunk_rest(seq__34103_34733__$1);
var G__34736 = c__4679__auto___34734;
var G__34737 = cljs.core.count(c__4679__auto___34734);
var G__34738 = (0);
seq__34103_34719 = G__34735;
chunk__34105_34720 = G__34736;
count__34106_34721 = G__34737;
i__34107_34722 = G__34738;
continue;
} else {
var child_34739 = cljs.core.first(seq__34103_34733__$1);
if(cljs.core.truth_(child_34739)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34739);


var G__34740 = cljs.core.next(seq__34103_34733__$1);
var G__34741 = null;
var G__34742 = (0);
var G__34743 = (0);
seq__34103_34719 = G__34740;
chunk__34105_34720 = G__34741;
count__34106_34721 = G__34742;
i__34107_34722 = G__34743;
continue;
} else {
var G__34744 = cljs.core.next(seq__34103_34733__$1);
var G__34745 = null;
var G__34746 = (0);
var G__34747 = (0);
seq__34103_34719 = G__34744;
chunk__34105_34720 = G__34745;
count__34106_34721 = G__34746;
i__34107_34722 = G__34747;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34718);
}


var G__34748 = cljs.core.next(seq__34040_34711__$1);
var G__34749 = null;
var G__34750 = (0);
var G__34751 = (0);
seq__34040_34667 = G__34748;
chunk__34041_34668 = G__34749;
count__34042_34669 = G__34750;
i__34043_34670 = G__34751;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34137 = cljs.core.seq(node);
var chunk__34138 = null;
var count__34139 = (0);
var i__34140 = (0);
while(true){
if((i__34140 < count__34139)){
var n = chunk__34138.cljs$core$IIndexed$_nth$arity$2(null,i__34140);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34755 = seq__34137;
var G__34756 = chunk__34138;
var G__34757 = count__34139;
var G__34758 = (i__34140 + (1));
seq__34137 = G__34755;
chunk__34138 = G__34756;
count__34139 = G__34757;
i__34140 = G__34758;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34137);
if(temp__5753__auto__){
var seq__34137__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34137__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34137__$1);
var G__34759 = cljs.core.chunk_rest(seq__34137__$1);
var G__34760 = c__4679__auto__;
var G__34761 = cljs.core.count(c__4679__auto__);
var G__34762 = (0);
seq__34137 = G__34759;
chunk__34138 = G__34760;
count__34139 = G__34761;
i__34140 = G__34762;
continue;
} else {
var n = cljs.core.first(seq__34137__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34763 = cljs.core.next(seq__34137__$1);
var G__34764 = null;
var G__34765 = (0);
var G__34766 = (0);
seq__34137 = G__34763;
chunk__34138 = G__34764;
count__34139 = G__34765;
i__34140 = G__34766;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34158 = arguments.length;
switch (G__34158) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34162 = arguments.length;
switch (G__34162) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34166 = arguments.length;
switch (G__34166) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34774 = arguments.length;
var i__4865__auto___34775 = (0);
while(true){
if((i__4865__auto___34775 < len__4864__auto___34774)){
args__4870__auto__.push((arguments[i__4865__auto___34775]));

var G__34776 = (i__4865__auto___34775 + (1));
i__4865__auto___34775 = G__34776;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34168_34777 = cljs.core.seq(nodes);
var chunk__34169_34778 = null;
var count__34170_34779 = (0);
var i__34171_34780 = (0);
while(true){
if((i__34171_34780 < count__34170_34779)){
var node_34781 = chunk__34169_34778.cljs$core$IIndexed$_nth$arity$2(null,i__34171_34780);
fragment.appendChild(shadow.dom._to_dom(node_34781));


var G__34782 = seq__34168_34777;
var G__34783 = chunk__34169_34778;
var G__34784 = count__34170_34779;
var G__34785 = (i__34171_34780 + (1));
seq__34168_34777 = G__34782;
chunk__34169_34778 = G__34783;
count__34170_34779 = G__34784;
i__34171_34780 = G__34785;
continue;
} else {
var temp__5753__auto___34786 = cljs.core.seq(seq__34168_34777);
if(temp__5753__auto___34786){
var seq__34168_34791__$1 = temp__5753__auto___34786;
if(cljs.core.chunked_seq_QMARK_(seq__34168_34791__$1)){
var c__4679__auto___34792 = cljs.core.chunk_first(seq__34168_34791__$1);
var G__34793 = cljs.core.chunk_rest(seq__34168_34791__$1);
var G__34794 = c__4679__auto___34792;
var G__34795 = cljs.core.count(c__4679__auto___34792);
var G__34796 = (0);
seq__34168_34777 = G__34793;
chunk__34169_34778 = G__34794;
count__34170_34779 = G__34795;
i__34171_34780 = G__34796;
continue;
} else {
var node_34797 = cljs.core.first(seq__34168_34791__$1);
fragment.appendChild(shadow.dom._to_dom(node_34797));


var G__34798 = cljs.core.next(seq__34168_34791__$1);
var G__34799 = null;
var G__34800 = (0);
var G__34801 = (0);
seq__34168_34777 = G__34798;
chunk__34169_34778 = G__34799;
count__34170_34779 = G__34800;
i__34171_34780 = G__34801;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34167){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34167));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34184_34802 = cljs.core.seq(scripts);
var chunk__34185_34803 = null;
var count__34186_34804 = (0);
var i__34187_34805 = (0);
while(true){
if((i__34187_34805 < count__34186_34804)){
var vec__34201_34806 = chunk__34185_34803.cljs$core$IIndexed$_nth$arity$2(null,i__34187_34805);
var script_tag_34807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201_34806,(0),null);
var script_body_34808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201_34806,(1),null);
eval(script_body_34808);


var G__34809 = seq__34184_34802;
var G__34810 = chunk__34185_34803;
var G__34811 = count__34186_34804;
var G__34812 = (i__34187_34805 + (1));
seq__34184_34802 = G__34809;
chunk__34185_34803 = G__34810;
count__34186_34804 = G__34811;
i__34187_34805 = G__34812;
continue;
} else {
var temp__5753__auto___34813 = cljs.core.seq(seq__34184_34802);
if(temp__5753__auto___34813){
var seq__34184_34814__$1 = temp__5753__auto___34813;
if(cljs.core.chunked_seq_QMARK_(seq__34184_34814__$1)){
var c__4679__auto___34815 = cljs.core.chunk_first(seq__34184_34814__$1);
var G__34816 = cljs.core.chunk_rest(seq__34184_34814__$1);
var G__34817 = c__4679__auto___34815;
var G__34818 = cljs.core.count(c__4679__auto___34815);
var G__34819 = (0);
seq__34184_34802 = G__34816;
chunk__34185_34803 = G__34817;
count__34186_34804 = G__34818;
i__34187_34805 = G__34819;
continue;
} else {
var vec__34206_34820 = cljs.core.first(seq__34184_34814__$1);
var script_tag_34821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34206_34820,(0),null);
var script_body_34822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34206_34820,(1),null);
eval(script_body_34822);


var G__34823 = cljs.core.next(seq__34184_34814__$1);
var G__34824 = null;
var G__34825 = (0);
var G__34826 = (0);
seq__34184_34802 = G__34823;
chunk__34185_34803 = G__34824;
count__34186_34804 = G__34825;
i__34187_34805 = G__34826;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34211){
var vec__34212 = p__34211;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34212,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34212,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34244 = arguments.length;
switch (G__34244) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34256 = cljs.core.seq(style_keys);
var chunk__34257 = null;
var count__34258 = (0);
var i__34259 = (0);
while(true){
if((i__34259 < count__34258)){
var it = chunk__34257.cljs$core$IIndexed$_nth$arity$2(null,i__34259);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34831 = seq__34256;
var G__34832 = chunk__34257;
var G__34833 = count__34258;
var G__34834 = (i__34259 + (1));
seq__34256 = G__34831;
chunk__34257 = G__34832;
count__34258 = G__34833;
i__34259 = G__34834;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34256);
if(temp__5753__auto__){
var seq__34256__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34256__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34256__$1);
var G__34835 = cljs.core.chunk_rest(seq__34256__$1);
var G__34836 = c__4679__auto__;
var G__34837 = cljs.core.count(c__4679__auto__);
var G__34838 = (0);
seq__34256 = G__34835;
chunk__34257 = G__34836;
count__34258 = G__34837;
i__34259 = G__34838;
continue;
} else {
var it = cljs.core.first(seq__34256__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34839 = cljs.core.next(seq__34256__$1);
var G__34840 = null;
var G__34841 = (0);
var G__34842 = (0);
seq__34256 = G__34839;
chunk__34257 = G__34840;
count__34258 = G__34841;
i__34259 = G__34842;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34276,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34287 = k34276;
var G__34287__$1 = (((G__34287 instanceof cljs.core.Keyword))?G__34287.fqn:null);
switch (G__34287__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34276,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34290){
var vec__34294 = p__34290;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34294,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34294,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34275){
var self__ = this;
var G__34275__$1 = this;
return (new cljs.core.RecordIter((0),G__34275__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34277,other34278){
var self__ = this;
var this34277__$1 = this;
return (((!((other34278 == null)))) && ((((this34277__$1.constructor === other34278.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34277__$1.x,other34278.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34277__$1.y,other34278.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34277__$1.__extmap,other34278.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34276){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34317 = k34276;
var G__34317__$1 = (((G__34317 instanceof cljs.core.Keyword))?G__34317.fqn:null);
switch (G__34317__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34276);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34275){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34319 = cljs.core.keyword_identical_QMARK_;
var expr__34320 = k__4511__auto__;
if(cljs.core.truth_((pred__34319.cljs$core$IFn$_invoke$arity$2 ? pred__34319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34320) : pred__34319.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34320)))){
return (new shadow.dom.Coordinate(G__34275,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34319.cljs$core$IFn$_invoke$arity$2 ? pred__34319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34320) : pred__34319.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34320)))){
return (new shadow.dom.Coordinate(self__.x,G__34275,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34275),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34275){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34275,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34281){
var extmap__4542__auto__ = (function (){var G__34322 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34281,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34281)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34322);
} else {
return G__34322;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34281),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34281),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34325,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34337 = k34325;
var G__34337__$1 = (((G__34337 instanceof cljs.core.Keyword))?G__34337.fqn:null);
switch (G__34337__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34325,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34353){
var vec__34354 = p__34353;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34354,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34354,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34324){
var self__ = this;
var G__34324__$1 = this;
return (new cljs.core.RecordIter((0),G__34324__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34326,other34327){
var self__ = this;
var this34326__$1 = this;
return (((!((other34327 == null)))) && ((((this34326__$1.constructor === other34327.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34326__$1.w,other34327.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34326__$1.h,other34327.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34326__$1.__extmap,other34327.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34325){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34363 = k34325;
var G__34363__$1 = (((G__34363 instanceof cljs.core.Keyword))?G__34363.fqn:null);
switch (G__34363__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34325);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34324){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34367 = cljs.core.keyword_identical_QMARK_;
var expr__34368 = k__4511__auto__;
if(cljs.core.truth_((pred__34367.cljs$core$IFn$_invoke$arity$2 ? pred__34367.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34368) : pred__34367.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34368)))){
return (new shadow.dom.Size(G__34324,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34367.cljs$core$IFn$_invoke$arity$2 ? pred__34367.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34368) : pred__34367.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34368)))){
return (new shadow.dom.Size(self__.w,G__34324,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34324),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34324){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34324,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34330){
var extmap__4542__auto__ = (function (){var G__34375 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34330,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34330)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34375);
} else {
return G__34375;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34330),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34330),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34861 = (i + (1));
var G__34862 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34861;
ret = G__34862;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34408){
var vec__34410 = p__34408;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34410,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34410,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34414 = arguments.length;
switch (G__34414) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34867 = ps;
var G__34868 = (i + (1));
el__$1 = G__34867;
i = G__34868;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34458 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34461_34875 = cljs.core.seq(props);
var chunk__34462_34876 = null;
var count__34463_34877 = (0);
var i__34464_34878 = (0);
while(true){
if((i__34464_34878 < count__34463_34877)){
var vec__34471_34879 = chunk__34462_34876.cljs$core$IIndexed$_nth$arity$2(null,i__34464_34878);
var k_34880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471_34879,(0),null);
var v_34881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471_34879,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34880);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34880),v_34881);


var G__34882 = seq__34461_34875;
var G__34883 = chunk__34462_34876;
var G__34884 = count__34463_34877;
var G__34885 = (i__34464_34878 + (1));
seq__34461_34875 = G__34882;
chunk__34462_34876 = G__34883;
count__34463_34877 = G__34884;
i__34464_34878 = G__34885;
continue;
} else {
var temp__5753__auto___34886 = cljs.core.seq(seq__34461_34875);
if(temp__5753__auto___34886){
var seq__34461_34887__$1 = temp__5753__auto___34886;
if(cljs.core.chunked_seq_QMARK_(seq__34461_34887__$1)){
var c__4679__auto___34888 = cljs.core.chunk_first(seq__34461_34887__$1);
var G__34889 = cljs.core.chunk_rest(seq__34461_34887__$1);
var G__34890 = c__4679__auto___34888;
var G__34891 = cljs.core.count(c__4679__auto___34888);
var G__34892 = (0);
seq__34461_34875 = G__34889;
chunk__34462_34876 = G__34890;
count__34463_34877 = G__34891;
i__34464_34878 = G__34892;
continue;
} else {
var vec__34474_34893 = cljs.core.first(seq__34461_34887__$1);
var k_34894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474_34893,(0),null);
var v_34895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474_34893,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34894);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34894),v_34895);


var G__34896 = cljs.core.next(seq__34461_34887__$1);
var G__34897 = null;
var G__34898 = (0);
var G__34899 = (0);
seq__34461_34875 = G__34896;
chunk__34462_34876 = G__34897;
count__34463_34877 = G__34898;
i__34464_34878 = G__34899;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34478 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(1),null);
var seq__34481_34903 = cljs.core.seq(node_children);
var chunk__34483_34904 = null;
var count__34484_34905 = (0);
var i__34485_34906 = (0);
while(true){
if((i__34485_34906 < count__34484_34905)){
var child_struct_34907 = chunk__34483_34904.cljs$core$IIndexed$_nth$arity$2(null,i__34485_34906);
if((!((child_struct_34907 == null)))){
if(typeof child_struct_34907 === 'string'){
var text_34908 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34908),child_struct_34907].join(''));
} else {
var children_34909 = shadow.dom.svg_node(child_struct_34907);
if(cljs.core.seq_QMARK_(children_34909)){
var seq__34515_34910 = cljs.core.seq(children_34909);
var chunk__34517_34911 = null;
var count__34518_34912 = (0);
var i__34519_34913 = (0);
while(true){
if((i__34519_34913 < count__34518_34912)){
var child_34914 = chunk__34517_34911.cljs$core$IIndexed$_nth$arity$2(null,i__34519_34913);
if(cljs.core.truth_(child_34914)){
node.appendChild(child_34914);


var G__34915 = seq__34515_34910;
var G__34916 = chunk__34517_34911;
var G__34917 = count__34518_34912;
var G__34918 = (i__34519_34913 + (1));
seq__34515_34910 = G__34915;
chunk__34517_34911 = G__34916;
count__34518_34912 = G__34917;
i__34519_34913 = G__34918;
continue;
} else {
var G__34919 = seq__34515_34910;
var G__34920 = chunk__34517_34911;
var G__34921 = count__34518_34912;
var G__34922 = (i__34519_34913 + (1));
seq__34515_34910 = G__34919;
chunk__34517_34911 = G__34920;
count__34518_34912 = G__34921;
i__34519_34913 = G__34922;
continue;
}
} else {
var temp__5753__auto___34923 = cljs.core.seq(seq__34515_34910);
if(temp__5753__auto___34923){
var seq__34515_34924__$1 = temp__5753__auto___34923;
if(cljs.core.chunked_seq_QMARK_(seq__34515_34924__$1)){
var c__4679__auto___34925 = cljs.core.chunk_first(seq__34515_34924__$1);
var G__34926 = cljs.core.chunk_rest(seq__34515_34924__$1);
var G__34927 = c__4679__auto___34925;
var G__34928 = cljs.core.count(c__4679__auto___34925);
var G__34929 = (0);
seq__34515_34910 = G__34926;
chunk__34517_34911 = G__34927;
count__34518_34912 = G__34928;
i__34519_34913 = G__34929;
continue;
} else {
var child_34930 = cljs.core.first(seq__34515_34924__$1);
if(cljs.core.truth_(child_34930)){
node.appendChild(child_34930);


var G__34931 = cljs.core.next(seq__34515_34924__$1);
var G__34932 = null;
var G__34933 = (0);
var G__34934 = (0);
seq__34515_34910 = G__34931;
chunk__34517_34911 = G__34932;
count__34518_34912 = G__34933;
i__34519_34913 = G__34934;
continue;
} else {
var G__34935 = cljs.core.next(seq__34515_34924__$1);
var G__34936 = null;
var G__34937 = (0);
var G__34938 = (0);
seq__34515_34910 = G__34935;
chunk__34517_34911 = G__34936;
count__34518_34912 = G__34937;
i__34519_34913 = G__34938;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34909);
}
}


var G__34939 = seq__34481_34903;
var G__34940 = chunk__34483_34904;
var G__34941 = count__34484_34905;
var G__34942 = (i__34485_34906 + (1));
seq__34481_34903 = G__34939;
chunk__34483_34904 = G__34940;
count__34484_34905 = G__34941;
i__34485_34906 = G__34942;
continue;
} else {
var G__34943 = seq__34481_34903;
var G__34944 = chunk__34483_34904;
var G__34945 = count__34484_34905;
var G__34946 = (i__34485_34906 + (1));
seq__34481_34903 = G__34943;
chunk__34483_34904 = G__34944;
count__34484_34905 = G__34945;
i__34485_34906 = G__34946;
continue;
}
} else {
var temp__5753__auto___34947 = cljs.core.seq(seq__34481_34903);
if(temp__5753__auto___34947){
var seq__34481_34948__$1 = temp__5753__auto___34947;
if(cljs.core.chunked_seq_QMARK_(seq__34481_34948__$1)){
var c__4679__auto___34949 = cljs.core.chunk_first(seq__34481_34948__$1);
var G__34950 = cljs.core.chunk_rest(seq__34481_34948__$1);
var G__34951 = c__4679__auto___34949;
var G__34952 = cljs.core.count(c__4679__auto___34949);
var G__34953 = (0);
seq__34481_34903 = G__34950;
chunk__34483_34904 = G__34951;
count__34484_34905 = G__34952;
i__34485_34906 = G__34953;
continue;
} else {
var child_struct_34954 = cljs.core.first(seq__34481_34948__$1);
if((!((child_struct_34954 == null)))){
if(typeof child_struct_34954 === 'string'){
var text_34955 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34955),child_struct_34954].join(''));
} else {
var children_34956 = shadow.dom.svg_node(child_struct_34954);
if(cljs.core.seq_QMARK_(children_34956)){
var seq__34526_34957 = cljs.core.seq(children_34956);
var chunk__34528_34958 = null;
var count__34529_34959 = (0);
var i__34530_34960 = (0);
while(true){
if((i__34530_34960 < count__34529_34959)){
var child_34961 = chunk__34528_34958.cljs$core$IIndexed$_nth$arity$2(null,i__34530_34960);
if(cljs.core.truth_(child_34961)){
node.appendChild(child_34961);


var G__34963 = seq__34526_34957;
var G__34964 = chunk__34528_34958;
var G__34965 = count__34529_34959;
var G__34966 = (i__34530_34960 + (1));
seq__34526_34957 = G__34963;
chunk__34528_34958 = G__34964;
count__34529_34959 = G__34965;
i__34530_34960 = G__34966;
continue;
} else {
var G__34970 = seq__34526_34957;
var G__34971 = chunk__34528_34958;
var G__34972 = count__34529_34959;
var G__34973 = (i__34530_34960 + (1));
seq__34526_34957 = G__34970;
chunk__34528_34958 = G__34971;
count__34529_34959 = G__34972;
i__34530_34960 = G__34973;
continue;
}
} else {
var temp__5753__auto___34974__$1 = cljs.core.seq(seq__34526_34957);
if(temp__5753__auto___34974__$1){
var seq__34526_34975__$1 = temp__5753__auto___34974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34526_34975__$1)){
var c__4679__auto___34976 = cljs.core.chunk_first(seq__34526_34975__$1);
var G__34977 = cljs.core.chunk_rest(seq__34526_34975__$1);
var G__34978 = c__4679__auto___34976;
var G__34979 = cljs.core.count(c__4679__auto___34976);
var G__34980 = (0);
seq__34526_34957 = G__34977;
chunk__34528_34958 = G__34978;
count__34529_34959 = G__34979;
i__34530_34960 = G__34980;
continue;
} else {
var child_34981 = cljs.core.first(seq__34526_34975__$1);
if(cljs.core.truth_(child_34981)){
node.appendChild(child_34981);


var G__34982 = cljs.core.next(seq__34526_34975__$1);
var G__34983 = null;
var G__34984 = (0);
var G__34985 = (0);
seq__34526_34957 = G__34982;
chunk__34528_34958 = G__34983;
count__34529_34959 = G__34984;
i__34530_34960 = G__34985;
continue;
} else {
var G__34986 = cljs.core.next(seq__34526_34975__$1);
var G__34987 = null;
var G__34988 = (0);
var G__34989 = (0);
seq__34526_34957 = G__34986;
chunk__34528_34958 = G__34987;
count__34529_34959 = G__34988;
i__34530_34960 = G__34989;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34956);
}
}


var G__34990 = cljs.core.next(seq__34481_34948__$1);
var G__34991 = null;
var G__34992 = (0);
var G__34993 = (0);
seq__34481_34903 = G__34990;
chunk__34483_34904 = G__34991;
count__34484_34905 = G__34992;
i__34485_34906 = G__34993;
continue;
} else {
var G__34994 = cljs.core.next(seq__34481_34948__$1);
var G__34995 = null;
var G__34996 = (0);
var G__34997 = (0);
seq__34481_34903 = G__34994;
chunk__34483_34904 = G__34995;
count__34484_34905 = G__34996;
i__34485_34906 = G__34997;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34998 = arguments.length;
var i__4865__auto___34999 = (0);
while(true){
if((i__4865__auto___34999 < len__4864__auto___34998)){
args__4870__auto__.push((arguments[i__4865__auto___34999]));

var G__35000 = (i__4865__auto___34999 + (1));
i__4865__auto___34999 = G__35000;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34553){
var G__34554 = cljs.core.first(seq34553);
var seq34553__$1 = cljs.core.next(seq34553);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34554,seq34553__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34564 = arguments.length;
switch (G__34564) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32390__auto___35004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_34575){
var state_val_34576 = (state_34575[(1)]);
if((state_val_34576 === (1))){
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34575__$1,(2),once_or_cleanup);
} else {
if((state_val_34576 === (2))){
var inst_34572 = (state_34575[(2)]);
var inst_34573 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34575__$1 = (function (){var statearr_34580 = state_34575;
(statearr_34580[(7)] = inst_34572);

return statearr_34580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34575__$1,inst_34573);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32298__auto__ = null;
var shadow$dom$state_machine__32298__auto____0 = (function (){
var statearr_34583 = [null,null,null,null,null,null,null,null];
(statearr_34583[(0)] = shadow$dom$state_machine__32298__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var shadow$dom$state_machine__32298__auto____1 = (function (state_34575){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_34575);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e34585){var ex__32301__auto__ = e34585;
var statearr_34587_35006 = state_34575;
(statearr_34587_35006[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_34575[(4)]))){
var statearr_34589_35007 = state_34575;
(statearr_34589_35007[(1)] = cljs.core.first((state_34575[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35008 = state_34575;
state_34575 = G__35008;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
shadow$dom$state_machine__32298__auto__ = function(state_34575){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32298__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32298__auto____1.call(this,state_34575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32298__auto____0;
shadow$dom$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32298__auto____1;
return shadow$dom$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_34591 = f__32391__auto__();
(statearr_34591[(6)] = c__32390__auto___35004);

return statearr_34591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
