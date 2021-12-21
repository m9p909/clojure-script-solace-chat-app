goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37434 = arguments.length;
var i__4865__auto___37435 = (0);
while(true){
if((i__4865__auto___37435 < len__4864__auto___37434)){
args__4870__auto__.push((arguments[i__4865__auto___37435]));

var G__37436 = (i__4865__auto___37435 + (1));
i__4865__auto___37435 = G__37436;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37211){
var G__37212 = cljs.core.first(seq37211);
var seq37211__$1 = cljs.core.next(seq37211);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37212,seq37211__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37215 = cljs.core.seq(sources);
var chunk__37216 = null;
var count__37217 = (0);
var i__37218 = (0);
while(true){
if((i__37218 < count__37217)){
var map__37223 = chunk__37216.cljs$core$IIndexed$_nth$arity$2(null,i__37218);
var map__37223__$1 = cljs.core.__destructure_map(map__37223);
var src = map__37223__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37225){var e_37437 = e37225;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37437);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37437.message)].join('')));
}

var G__37438 = seq__37215;
var G__37439 = chunk__37216;
var G__37440 = count__37217;
var G__37441 = (i__37218 + (1));
seq__37215 = G__37438;
chunk__37216 = G__37439;
count__37217 = G__37440;
i__37218 = G__37441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37215);
if(temp__5753__auto__){
var seq__37215__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37215__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37215__$1);
var G__37442 = cljs.core.chunk_rest(seq__37215__$1);
var G__37443 = c__4679__auto__;
var G__37444 = cljs.core.count(c__4679__auto__);
var G__37445 = (0);
seq__37215 = G__37442;
chunk__37216 = G__37443;
count__37217 = G__37444;
i__37218 = G__37445;
continue;
} else {
var map__37227 = cljs.core.first(seq__37215__$1);
var map__37227__$1 = cljs.core.__destructure_map(map__37227);
var src = map__37227__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37228){var e_37446 = e37228;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37446);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37446.message)].join('')));
}

var G__37447 = cljs.core.next(seq__37215__$1);
var G__37448 = null;
var G__37449 = (0);
var G__37450 = (0);
seq__37215 = G__37447;
chunk__37216 = G__37448;
count__37217 = G__37449;
i__37218 = G__37450;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37229 = cljs.core.seq(js_requires);
var chunk__37230 = null;
var count__37231 = (0);
var i__37232 = (0);
while(true){
if((i__37232 < count__37231)){
var js_ns = chunk__37230.cljs$core$IIndexed$_nth$arity$2(null,i__37232);
var require_str_37452 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37452);


var G__37453 = seq__37229;
var G__37454 = chunk__37230;
var G__37455 = count__37231;
var G__37456 = (i__37232 + (1));
seq__37229 = G__37453;
chunk__37230 = G__37454;
count__37231 = G__37455;
i__37232 = G__37456;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37229);
if(temp__5753__auto__){
var seq__37229__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37229__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37229__$1);
var G__37457 = cljs.core.chunk_rest(seq__37229__$1);
var G__37458 = c__4679__auto__;
var G__37459 = cljs.core.count(c__4679__auto__);
var G__37460 = (0);
seq__37229 = G__37457;
chunk__37230 = G__37458;
count__37231 = G__37459;
i__37232 = G__37460;
continue;
} else {
var js_ns = cljs.core.first(seq__37229__$1);
var require_str_37462 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37462);


var G__37463 = cljs.core.next(seq__37229__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__37229 = G__37463;
chunk__37230 = G__37464;
count__37231 = G__37465;
i__37232 = G__37466;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37234){
var map__37235 = p__37234;
var map__37235__$1 = cljs.core.__destructure_map(map__37235);
var msg = map__37235__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37236(s__37237){
return (new cljs.core.LazySeq(null,(function (){
var s__37237__$1 = s__37237;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37237__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37242 = cljs.core.first(xs__6308__auto__);
var map__37242__$1 = cljs.core.__destructure_map(map__37242);
var src = map__37242__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37242__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37242__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37237__$1,map__37242,map__37242__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37235,map__37235__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37236_$_iter__37238(s__37239){
return (new cljs.core.LazySeq(null,((function (s__37237__$1,map__37242,map__37242__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37235,map__37235__$1,msg,info,reload_info){
return (function (){
var s__37239__$1 = s__37239;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37239__$1);
if(temp__5753__auto____$1){
var s__37239__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37239__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37239__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37241 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37240 = (0);
while(true){
if((i__37240 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37240);
cljs.core.chunk_append(b__37241,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37469 = (i__37240 + (1));
i__37240 = G__37469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37241),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37236_$_iter__37238(cljs.core.chunk_rest(s__37239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37241),null);
}
} else {
var warning = cljs.core.first(s__37239__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37236_$_iter__37238(cljs.core.rest(s__37239__$2)));
}
} else {
return null;
}
break;
}
});})(s__37237__$1,map__37242,map__37242__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37235,map__37235__$1,msg,info,reload_info))
,null,null));
});})(s__37237__$1,map__37242,map__37242__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37235,map__37235__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37236(cljs.core.rest(s__37237__$1)));
} else {
var G__37470 = cljs.core.rest(s__37237__$1);
s__37237__$1 = G__37470;
continue;
}
} else {
var G__37471 = cljs.core.rest(s__37237__$1);
s__37237__$1 = G__37471;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37243_37472 = cljs.core.seq(warnings);
var chunk__37244_37473 = null;
var count__37245_37474 = (0);
var i__37246_37475 = (0);
while(true){
if((i__37246_37475 < count__37245_37474)){
var map__37249_37476 = chunk__37244_37473.cljs$core$IIndexed$_nth$arity$2(null,i__37246_37475);
var map__37249_37477__$1 = cljs.core.__destructure_map(map__37249_37476);
var w_37478 = map__37249_37477__$1;
var msg_37479__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249_37477__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249_37477__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249_37477__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37249_37477__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37482)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37480),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37481),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37479__$1)].join(''));


var G__37483 = seq__37243_37472;
var G__37484 = chunk__37244_37473;
var G__37485 = count__37245_37474;
var G__37486 = (i__37246_37475 + (1));
seq__37243_37472 = G__37483;
chunk__37244_37473 = G__37484;
count__37245_37474 = G__37485;
i__37246_37475 = G__37486;
continue;
} else {
var temp__5753__auto___37487 = cljs.core.seq(seq__37243_37472);
if(temp__5753__auto___37487){
var seq__37243_37488__$1 = temp__5753__auto___37487;
if(cljs.core.chunked_seq_QMARK_(seq__37243_37488__$1)){
var c__4679__auto___37489 = cljs.core.chunk_first(seq__37243_37488__$1);
var G__37490 = cljs.core.chunk_rest(seq__37243_37488__$1);
var G__37491 = c__4679__auto___37489;
var G__37492 = cljs.core.count(c__4679__auto___37489);
var G__37493 = (0);
seq__37243_37472 = G__37490;
chunk__37244_37473 = G__37491;
count__37245_37474 = G__37492;
i__37246_37475 = G__37493;
continue;
} else {
var map__37250_37494 = cljs.core.first(seq__37243_37488__$1);
var map__37250_37495__$1 = cljs.core.__destructure_map(map__37250_37494);
var w_37496 = map__37250_37495__$1;
var msg_37497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37250_37495__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37250_37495__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37250_37495__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37250_37495__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37500)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37498),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37499),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37497__$1)].join(''));


var G__37501 = cljs.core.next(seq__37243_37488__$1);
var G__37502 = null;
var G__37503 = (0);
var G__37504 = (0);
seq__37243_37472 = G__37501;
chunk__37244_37473 = G__37502;
count__37245_37474 = G__37503;
i__37246_37475 = G__37504;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37233_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37233_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37251){
var map__37252 = p__37251;
var map__37252__$1 = cljs.core.__destructure_map(map__37252);
var msg = map__37252__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37253 = cljs.core.seq(updates);
var chunk__37255 = null;
var count__37256 = (0);
var i__37257 = (0);
while(true){
if((i__37257 < count__37256)){
var path = chunk__37255.cljs$core$IIndexed$_nth$arity$2(null,i__37257);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37291_37505 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37295_37506 = null;
var count__37296_37507 = (0);
var i__37297_37508 = (0);
while(true){
if((i__37297_37508 < count__37296_37507)){
var node_37509 = chunk__37295_37506.cljs$core$IIndexed$_nth$arity$2(null,i__37297_37508);
if(cljs.core.not(node_37509.shadow$old)){
var path_match_37510 = shadow.cljs.devtools.client.browser.match_paths(node_37509.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37510)){
var new_link_37511 = (function (){var G__37317 = node_37509.cloneNode(true);
G__37317.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37510),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37317;
})();
(node_37509.shadow$old = true);

(new_link_37511.onload = ((function (seq__37291_37505,chunk__37295_37506,count__37296_37507,i__37297_37508,seq__37253,chunk__37255,count__37256,i__37257,new_link_37511,path_match_37510,node_37509,path,map__37252,map__37252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37509);
});})(seq__37291_37505,chunk__37295_37506,count__37296_37507,i__37297_37508,seq__37253,chunk__37255,count__37256,i__37257,new_link_37511,path_match_37510,node_37509,path,map__37252,map__37252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37510], 0));

goog.dom.insertSiblingAfter(new_link_37511,node_37509);


var G__37512 = seq__37291_37505;
var G__37513 = chunk__37295_37506;
var G__37514 = count__37296_37507;
var G__37515 = (i__37297_37508 + (1));
seq__37291_37505 = G__37512;
chunk__37295_37506 = G__37513;
count__37296_37507 = G__37514;
i__37297_37508 = G__37515;
continue;
} else {
var G__37516 = seq__37291_37505;
var G__37517 = chunk__37295_37506;
var G__37518 = count__37296_37507;
var G__37519 = (i__37297_37508 + (1));
seq__37291_37505 = G__37516;
chunk__37295_37506 = G__37517;
count__37296_37507 = G__37518;
i__37297_37508 = G__37519;
continue;
}
} else {
var G__37520 = seq__37291_37505;
var G__37521 = chunk__37295_37506;
var G__37522 = count__37296_37507;
var G__37523 = (i__37297_37508 + (1));
seq__37291_37505 = G__37520;
chunk__37295_37506 = G__37521;
count__37296_37507 = G__37522;
i__37297_37508 = G__37523;
continue;
}
} else {
var temp__5753__auto___37524 = cljs.core.seq(seq__37291_37505);
if(temp__5753__auto___37524){
var seq__37291_37525__$1 = temp__5753__auto___37524;
if(cljs.core.chunked_seq_QMARK_(seq__37291_37525__$1)){
var c__4679__auto___37526 = cljs.core.chunk_first(seq__37291_37525__$1);
var G__37527 = cljs.core.chunk_rest(seq__37291_37525__$1);
var G__37528 = c__4679__auto___37526;
var G__37529 = cljs.core.count(c__4679__auto___37526);
var G__37530 = (0);
seq__37291_37505 = G__37527;
chunk__37295_37506 = G__37528;
count__37296_37507 = G__37529;
i__37297_37508 = G__37530;
continue;
} else {
var node_37531 = cljs.core.first(seq__37291_37525__$1);
if(cljs.core.not(node_37531.shadow$old)){
var path_match_37532 = shadow.cljs.devtools.client.browser.match_paths(node_37531.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37532)){
var new_link_37533 = (function (){var G__37328 = node_37531.cloneNode(true);
G__37328.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37532),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37328;
})();
(node_37531.shadow$old = true);

(new_link_37533.onload = ((function (seq__37291_37505,chunk__37295_37506,count__37296_37507,i__37297_37508,seq__37253,chunk__37255,count__37256,i__37257,new_link_37533,path_match_37532,node_37531,seq__37291_37525__$1,temp__5753__auto___37524,path,map__37252,map__37252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37531);
});})(seq__37291_37505,chunk__37295_37506,count__37296_37507,i__37297_37508,seq__37253,chunk__37255,count__37256,i__37257,new_link_37533,path_match_37532,node_37531,seq__37291_37525__$1,temp__5753__auto___37524,path,map__37252,map__37252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37532], 0));

goog.dom.insertSiblingAfter(new_link_37533,node_37531);


var G__37534 = cljs.core.next(seq__37291_37525__$1);
var G__37535 = null;
var G__37536 = (0);
var G__37537 = (0);
seq__37291_37505 = G__37534;
chunk__37295_37506 = G__37535;
count__37296_37507 = G__37536;
i__37297_37508 = G__37537;
continue;
} else {
var G__37538 = cljs.core.next(seq__37291_37525__$1);
var G__37539 = null;
var G__37540 = (0);
var G__37541 = (0);
seq__37291_37505 = G__37538;
chunk__37295_37506 = G__37539;
count__37296_37507 = G__37540;
i__37297_37508 = G__37541;
continue;
}
} else {
var G__37542 = cljs.core.next(seq__37291_37525__$1);
var G__37543 = null;
var G__37544 = (0);
var G__37545 = (0);
seq__37291_37505 = G__37542;
chunk__37295_37506 = G__37543;
count__37296_37507 = G__37544;
i__37297_37508 = G__37545;
continue;
}
}
} else {
}
}
break;
}


var G__37546 = seq__37253;
var G__37547 = chunk__37255;
var G__37548 = count__37256;
var G__37549 = (i__37257 + (1));
seq__37253 = G__37546;
chunk__37255 = G__37547;
count__37256 = G__37548;
i__37257 = G__37549;
continue;
} else {
var G__37550 = seq__37253;
var G__37551 = chunk__37255;
var G__37552 = count__37256;
var G__37553 = (i__37257 + (1));
seq__37253 = G__37550;
chunk__37255 = G__37551;
count__37256 = G__37552;
i__37257 = G__37553;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37253);
if(temp__5753__auto__){
var seq__37253__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37253__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37253__$1);
var G__37554 = cljs.core.chunk_rest(seq__37253__$1);
var G__37555 = c__4679__auto__;
var G__37556 = cljs.core.count(c__4679__auto__);
var G__37557 = (0);
seq__37253 = G__37554;
chunk__37255 = G__37555;
count__37256 = G__37556;
i__37257 = G__37557;
continue;
} else {
var path = cljs.core.first(seq__37253__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37336_37559 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37340_37560 = null;
var count__37341_37561 = (0);
var i__37342_37562 = (0);
while(true){
if((i__37342_37562 < count__37341_37561)){
var node_37563 = chunk__37340_37560.cljs$core$IIndexed$_nth$arity$2(null,i__37342_37562);
if(cljs.core.not(node_37563.shadow$old)){
var path_match_37564 = shadow.cljs.devtools.client.browser.match_paths(node_37563.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37564)){
var new_link_37565 = (function (){var G__37369 = node_37563.cloneNode(true);
G__37369.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37564),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37369;
})();
(node_37563.shadow$old = true);

(new_link_37565.onload = ((function (seq__37336_37559,chunk__37340_37560,count__37341_37561,i__37342_37562,seq__37253,chunk__37255,count__37256,i__37257,new_link_37565,path_match_37564,node_37563,path,seq__37253__$1,temp__5753__auto__,map__37252,map__37252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37563);
});})(seq__37336_37559,chunk__37340_37560,count__37341_37561,i__37342_37562,seq__37253,chunk__37255,count__37256,i__37257,new_link_37565,path_match_37564,node_37563,path,seq__37253__$1,temp__5753__auto__,map__37252,map__37252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37564], 0));

goog.dom.insertSiblingAfter(new_link_37565,node_37563);


var G__37570 = seq__37336_37559;
var G__37571 = chunk__37340_37560;
var G__37572 = count__37341_37561;
var G__37573 = (i__37342_37562 + (1));
seq__37336_37559 = G__37570;
chunk__37340_37560 = G__37571;
count__37341_37561 = G__37572;
i__37342_37562 = G__37573;
continue;
} else {
var G__37574 = seq__37336_37559;
var G__37575 = chunk__37340_37560;
var G__37576 = count__37341_37561;
var G__37577 = (i__37342_37562 + (1));
seq__37336_37559 = G__37574;
chunk__37340_37560 = G__37575;
count__37341_37561 = G__37576;
i__37342_37562 = G__37577;
continue;
}
} else {
var G__37578 = seq__37336_37559;
var G__37579 = chunk__37340_37560;
var G__37580 = count__37341_37561;
var G__37581 = (i__37342_37562 + (1));
seq__37336_37559 = G__37578;
chunk__37340_37560 = G__37579;
count__37341_37561 = G__37580;
i__37342_37562 = G__37581;
continue;
}
} else {
var temp__5753__auto___37582__$1 = cljs.core.seq(seq__37336_37559);
if(temp__5753__auto___37582__$1){
var seq__37336_37583__$1 = temp__5753__auto___37582__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37336_37583__$1)){
var c__4679__auto___37584 = cljs.core.chunk_first(seq__37336_37583__$1);
var G__37585 = cljs.core.chunk_rest(seq__37336_37583__$1);
var G__37586 = c__4679__auto___37584;
var G__37587 = cljs.core.count(c__4679__auto___37584);
var G__37588 = (0);
seq__37336_37559 = G__37585;
chunk__37340_37560 = G__37586;
count__37341_37561 = G__37587;
i__37342_37562 = G__37588;
continue;
} else {
var node_37589 = cljs.core.first(seq__37336_37583__$1);
if(cljs.core.not(node_37589.shadow$old)){
var path_match_37590 = shadow.cljs.devtools.client.browser.match_paths(node_37589.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37590)){
var new_link_37591 = (function (){var G__37377 = node_37589.cloneNode(true);
G__37377.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37590),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37377;
})();
(node_37589.shadow$old = true);

(new_link_37591.onload = ((function (seq__37336_37559,chunk__37340_37560,count__37341_37561,i__37342_37562,seq__37253,chunk__37255,count__37256,i__37257,new_link_37591,path_match_37590,node_37589,seq__37336_37583__$1,temp__5753__auto___37582__$1,path,seq__37253__$1,temp__5753__auto__,map__37252,map__37252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37589);
});})(seq__37336_37559,chunk__37340_37560,count__37341_37561,i__37342_37562,seq__37253,chunk__37255,count__37256,i__37257,new_link_37591,path_match_37590,node_37589,seq__37336_37583__$1,temp__5753__auto___37582__$1,path,seq__37253__$1,temp__5753__auto__,map__37252,map__37252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37590], 0));

goog.dom.insertSiblingAfter(new_link_37591,node_37589);


var G__37592 = cljs.core.next(seq__37336_37583__$1);
var G__37593 = null;
var G__37594 = (0);
var G__37595 = (0);
seq__37336_37559 = G__37592;
chunk__37340_37560 = G__37593;
count__37341_37561 = G__37594;
i__37342_37562 = G__37595;
continue;
} else {
var G__37596 = cljs.core.next(seq__37336_37583__$1);
var G__37597 = null;
var G__37598 = (0);
var G__37599 = (0);
seq__37336_37559 = G__37596;
chunk__37340_37560 = G__37597;
count__37341_37561 = G__37598;
i__37342_37562 = G__37599;
continue;
}
} else {
var G__37600 = cljs.core.next(seq__37336_37583__$1);
var G__37601 = null;
var G__37602 = (0);
var G__37603 = (0);
seq__37336_37559 = G__37600;
chunk__37340_37560 = G__37601;
count__37341_37561 = G__37602;
i__37342_37562 = G__37603;
continue;
}
}
} else {
}
}
break;
}


var G__37604 = cljs.core.next(seq__37253__$1);
var G__37605 = null;
var G__37606 = (0);
var G__37607 = (0);
seq__37253 = G__37604;
chunk__37255 = G__37605;
count__37256 = G__37606;
i__37257 = G__37607;
continue;
} else {
var G__37608 = cljs.core.next(seq__37253__$1);
var G__37609 = null;
var G__37610 = (0);
var G__37611 = (0);
seq__37253 = G__37608;
chunk__37255 = G__37609;
count__37256 = G__37610;
i__37257 = G__37611;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37384){
var map__37387 = p__37384;
var map__37387__$1 = cljs.core.__destructure_map(map__37387);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37409){
var map__37410 = p__37409;
var map__37410__$1 = cljs.core.__destructure_map(map__37410);
var _ = map__37410__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37414,done,error){
var map__37415 = p__37414;
var map__37415__$1 = cljs.core.__destructure_map(map__37415);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37415__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37417,done,error){
var map__37418 = p__37417;
var map__37418__$1 = cljs.core.__destructure_map(map__37418);
var msg = map__37418__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37418__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37418__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37418__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37420){
var map__37421 = p__37420;
var map__37421__$1 = cljs.core.__destructure_map(map__37421);
var src = map__37421__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37422 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37422) : done.call(null,G__37422));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37423){
var map__37424 = p__37423;
var map__37424__$1 = cljs.core.__destructure_map(map__37424);
var msg__$1 = map__37424__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37424__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37425){var ex = e37425;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37426){
var map__37427 = p__37426;
var map__37427__$1 = cljs.core.__destructure_map(map__37427);
var env = map__37427__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37427__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37428){
var map__37429 = p__37428;
var map__37429__$1 = cljs.core.__destructure_map(map__37429);
var msg = map__37429__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37430){
var map__37431 = p__37430;
var map__37431__$1 = cljs.core.__destructure_map(map__37431);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37432){
var map__37433 = p__37432;
var map__37433__$1 = cljs.core.__destructure_map(map__37433);
var svc = map__37433__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37433__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
