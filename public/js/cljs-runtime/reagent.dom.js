goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37948 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37949 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37949);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37952 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37953 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37953);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37952);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37948);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37957 = arguments.length;
switch (G__37957) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37961 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37967_37988 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37968_37989 = null;
var count__37969_37990 = (0);
var i__37970_37991 = (0);
while(true){
if((i__37970_37991 < count__37969_37990)){
var vec__37979_37992 = chunk__37968_37989.cljs$core$IIndexed$_nth$arity$2(null,i__37970_37991);
var container_37993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37979_37992,(0),null);
var comp_37994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37979_37992,(1),null);
reagent.dom.re_render_component(comp_37994,container_37993);


var G__37995 = seq__37967_37988;
var G__37996 = chunk__37968_37989;
var G__37997 = count__37969_37990;
var G__37998 = (i__37970_37991 + (1));
seq__37967_37988 = G__37995;
chunk__37968_37989 = G__37996;
count__37969_37990 = G__37997;
i__37970_37991 = G__37998;
continue;
} else {
var temp__5753__auto___37999 = cljs.core.seq(seq__37967_37988);
if(temp__5753__auto___37999){
var seq__37967_38000__$1 = temp__5753__auto___37999;
if(cljs.core.chunked_seq_QMARK_(seq__37967_38000__$1)){
var c__4679__auto___38001 = cljs.core.chunk_first(seq__37967_38000__$1);
var G__38002 = cljs.core.chunk_rest(seq__37967_38000__$1);
var G__38003 = c__4679__auto___38001;
var G__38004 = cljs.core.count(c__4679__auto___38001);
var G__38005 = (0);
seq__37967_37988 = G__38002;
chunk__37968_37989 = G__38003;
count__37969_37990 = G__38004;
i__37970_37991 = G__38005;
continue;
} else {
var vec__37984_38006 = cljs.core.first(seq__37967_38000__$1);
var container_38007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984_38006,(0),null);
var comp_38008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984_38006,(1),null);
reagent.dom.re_render_component(comp_38008,container_38007);


var G__38009 = cljs.core.next(seq__37967_38000__$1);
var G__38010 = null;
var G__38011 = (0);
var G__38012 = (0);
seq__37967_37988 = G__38009;
chunk__37968_37989 = G__38010;
count__37969_37990 = G__38011;
i__37970_37991 = G__38012;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
