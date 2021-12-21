goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27351 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._header[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._header["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_27351(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27352 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._has_body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._has_body["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_27352(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27353 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4551__auto__.call(null,value));
} else {
var m__4549__auto__ = (devtools.format._body["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4549__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_27353(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27190 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27190["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27191 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27191["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27192 = temp__5751__auto____$2;
return (o27192["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27193 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27193["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27194 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27194["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27195 = temp__5751__auto____$2;
return (o27195["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27211 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27211["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27212 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27212["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27213 = temp__5751__auto____$2;
return (o27213["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27219 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27219["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27220 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27220["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27221 = temp__5751__auto____$2;
return (o27221["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27222 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27222["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27223 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27223["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27224 = temp__5751__auto____$2;
return (o27224["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27230 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27230["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27231 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27231["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27232 = temp__5751__auto____$2;
return (o27232["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o27237 = temp__5751__auto__;
var temp__5751__auto____$1 = (o27237["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o27238 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o27238["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o27239 = temp__5751__auto____$2;
return (o27239["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27355 = arguments.length;
var i__4865__auto___27356 = (0);
while(true){
if((i__4865__auto___27356 < len__4864__auto___27355)){
args__4870__auto__.push((arguments[i__4865__auto___27356]));

var G__27357 = (i__4865__auto___27356 + (1));
i__4865__auto___27356 = G__27357;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27240){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27240));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27359 = arguments.length;
var i__4865__auto___27360 = (0);
while(true){
if((i__4865__auto___27360 < len__4864__auto___27359)){
args__4870__auto__.push((arguments[i__4865__auto___27360]));

var G__27361 = (i__4865__auto___27360 + (1));
i__4865__auto___27360 = G__27361;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27244){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27244));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27362 = arguments.length;
var i__4865__auto___27363 = (0);
while(true){
if((i__4865__auto___27363 < len__4864__auto___27362)){
args__4870__auto__.push((arguments[i__4865__auto___27363]));

var G__27364 = (i__4865__auto___27363 + (1));
i__4865__auto___27363 = G__27364;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27257){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27257));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27365 = arguments.length;
var i__4865__auto___27366 = (0);
while(true){
if((i__4865__auto___27366 < len__4864__auto___27365)){
args__4870__auto__.push((arguments[i__4865__auto___27366]));

var G__27367 = (i__4865__auto___27366 + (1));
i__4865__auto___27366 = G__27367;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27264){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27264));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27368 = arguments.length;
var i__4865__auto___27369 = (0);
while(true){
if((i__4865__auto___27369 < len__4864__auto___27368)){
args__4870__auto__.push((arguments[i__4865__auto___27369]));

var G__27370 = (i__4865__auto___27369 + (1));
i__4865__auto___27369 = G__27370;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27274){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27274));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27371 = arguments.length;
var i__4865__auto___27372 = (0);
while(true){
if((i__4865__auto___27372 < len__4864__auto___27371)){
args__4870__auto__.push((arguments[i__4865__auto___27372]));

var G__27373 = (i__4865__auto___27372 + (1));
i__4865__auto___27372 = G__27373;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27275){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27275));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27374 = arguments.length;
var i__4865__auto___27375 = (0);
while(true){
if((i__4865__auto___27375 < len__4864__auto___27374)){
args__4870__auto__.push((arguments[i__4865__auto___27375]));

var G__27376 = (i__4865__auto___27375 + (1));
i__4865__auto___27375 = G__27376;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27288){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27288));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27377 = arguments.length;
var i__4865__auto___27378 = (0);
while(true){
if((i__4865__auto___27378 < len__4864__auto___27377)){
args__4870__auto__.push((arguments[i__4865__auto___27378]));

var G__27379 = (i__4865__auto___27378 + (1));
i__4865__auto___27378 = G__27379;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27312){
var vec__27313 = p__27312;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27296_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27296_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27303){
var G__27304 = cljs.core.first(seq27303);
var seq27303__$1 = cljs.core.next(seq27303);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27304,seq27303__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27320 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27321 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27322 = (function (){var G__27323 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27324 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27325 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27323,G__27324,G__27325) : devtools.format.make_template_fn.call(null,G__27323,G__27324,G__27325));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27320,G__27321,G__27322) : devtools.format.make_template_fn.call(null,G__27320,G__27321,G__27322));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27381 = arguments.length;
var i__4865__auto___27382 = (0);
while(true){
if((i__4865__auto___27382 < len__4864__auto___27381)){
args__4870__auto__.push((arguments[i__4865__auto___27382]));

var G__27383 = (i__4865__auto___27382 + (1));
i__4865__auto___27382 = G__27383;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27332){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27332));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27386 = arguments.length;
var i__4865__auto___27387 = (0);
while(true){
if((i__4865__auto___27387 < len__4864__auto___27386)){
args__4870__auto__.push((arguments[i__4865__auto___27387]));

var G__27388 = (i__4865__auto___27387 + (1));
i__4865__auto___27387 = G__27388;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27343){
var G__27344 = cljs.core.first(seq27343);
var seq27343__$1 = cljs.core.next(seq27343);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27344,seq27343__$1);
}));


//# sourceMappingURL=devtools.format.js.map
