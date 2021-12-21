goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36531){
var map__36532 = p__36531;
var map__36532__$1 = cljs.core.__destructure_map(map__36532);
var m = map__36532__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36532__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36533_36736 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36534_36737 = null;
var count__36535_36738 = (0);
var i__36536_36739 = (0);
while(true){
if((i__36536_36739 < count__36535_36738)){
var f_36740 = chunk__36534_36737.cljs$core$IIndexed$_nth$arity$2(null,i__36536_36739);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36740], 0));


var G__36741 = seq__36533_36736;
var G__36742 = chunk__36534_36737;
var G__36743 = count__36535_36738;
var G__36744 = (i__36536_36739 + (1));
seq__36533_36736 = G__36741;
chunk__36534_36737 = G__36742;
count__36535_36738 = G__36743;
i__36536_36739 = G__36744;
continue;
} else {
var temp__5753__auto___36745 = cljs.core.seq(seq__36533_36736);
if(temp__5753__auto___36745){
var seq__36533_36746__$1 = temp__5753__auto___36745;
if(cljs.core.chunked_seq_QMARK_(seq__36533_36746__$1)){
var c__4679__auto___36747 = cljs.core.chunk_first(seq__36533_36746__$1);
var G__36748 = cljs.core.chunk_rest(seq__36533_36746__$1);
var G__36749 = c__4679__auto___36747;
var G__36750 = cljs.core.count(c__4679__auto___36747);
var G__36751 = (0);
seq__36533_36736 = G__36748;
chunk__36534_36737 = G__36749;
count__36535_36738 = G__36750;
i__36536_36739 = G__36751;
continue;
} else {
var f_36752 = cljs.core.first(seq__36533_36746__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36752], 0));


var G__36753 = cljs.core.next(seq__36533_36746__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__36533_36736 = G__36753;
chunk__36534_36737 = G__36754;
count__36535_36738 = G__36755;
i__36536_36739 = G__36756;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36757 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36757], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36757)))?cljs.core.second(arglists_36757):arglists_36757)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36539_36758 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36540_36759 = null;
var count__36541_36760 = (0);
var i__36542_36761 = (0);
while(true){
if((i__36542_36761 < count__36541_36760)){
var vec__36554_36762 = chunk__36540_36759.cljs$core$IIndexed$_nth$arity$2(null,i__36542_36761);
var name_36763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36554_36762,(0),null);
var map__36557_36764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36554_36762,(1),null);
var map__36557_36765__$1 = cljs.core.__destructure_map(map__36557_36764);
var doc_36766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557_36765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557_36765__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36763], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36767], 0));

if(cljs.core.truth_(doc_36766)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36766], 0));
} else {
}


var G__36768 = seq__36539_36758;
var G__36769 = chunk__36540_36759;
var G__36770 = count__36541_36760;
var G__36771 = (i__36542_36761 + (1));
seq__36539_36758 = G__36768;
chunk__36540_36759 = G__36769;
count__36541_36760 = G__36770;
i__36542_36761 = G__36771;
continue;
} else {
var temp__5753__auto___36772 = cljs.core.seq(seq__36539_36758);
if(temp__5753__auto___36772){
var seq__36539_36773__$1 = temp__5753__auto___36772;
if(cljs.core.chunked_seq_QMARK_(seq__36539_36773__$1)){
var c__4679__auto___36774 = cljs.core.chunk_first(seq__36539_36773__$1);
var G__36775 = cljs.core.chunk_rest(seq__36539_36773__$1);
var G__36776 = c__4679__auto___36774;
var G__36777 = cljs.core.count(c__4679__auto___36774);
var G__36778 = (0);
seq__36539_36758 = G__36775;
chunk__36540_36759 = G__36776;
count__36541_36760 = G__36777;
i__36542_36761 = G__36778;
continue;
} else {
var vec__36559_36779 = cljs.core.first(seq__36539_36773__$1);
var name_36780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36559_36779,(0),null);
var map__36562_36781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36559_36779,(1),null);
var map__36562_36782__$1 = cljs.core.__destructure_map(map__36562_36781);
var doc_36783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36562_36782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36562_36782__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36780], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36784], 0));

if(cljs.core.truth_(doc_36783)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36783], 0));
} else {
}


var G__36789 = cljs.core.next(seq__36539_36773__$1);
var G__36790 = null;
var G__36791 = (0);
var G__36792 = (0);
seq__36539_36758 = G__36789;
chunk__36540_36759 = G__36790;
count__36541_36760 = G__36791;
i__36542_36761 = G__36792;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36563 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36564 = null;
var count__36565 = (0);
var i__36566 = (0);
while(true){
if((i__36566 < count__36565)){
var role = chunk__36564.cljs$core$IIndexed$_nth$arity$2(null,i__36566);
var temp__5753__auto___36793__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36793__$1)){
var spec_36794 = temp__5753__auto___36793__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36794)], 0));
} else {
}


var G__36795 = seq__36563;
var G__36796 = chunk__36564;
var G__36797 = count__36565;
var G__36798 = (i__36566 + (1));
seq__36563 = G__36795;
chunk__36564 = G__36796;
count__36565 = G__36797;
i__36566 = G__36798;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36563);
if(temp__5753__auto____$1){
var seq__36563__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36563__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36563__$1);
var G__36805 = cljs.core.chunk_rest(seq__36563__$1);
var G__36806 = c__4679__auto__;
var G__36807 = cljs.core.count(c__4679__auto__);
var G__36808 = (0);
seq__36563 = G__36805;
chunk__36564 = G__36806;
count__36565 = G__36807;
i__36566 = G__36808;
continue;
} else {
var role = cljs.core.first(seq__36563__$1);
var temp__5753__auto___36811__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36811__$2)){
var spec_36812 = temp__5753__auto___36811__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36812)], 0));
} else {
}


var G__36814 = cljs.core.next(seq__36563__$1);
var G__36815 = null;
var G__36816 = (0);
var G__36817 = (0);
seq__36563 = G__36814;
chunk__36564 = G__36815;
count__36565 = G__36816;
i__36566 = G__36817;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36818 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36819 = cljs.core.ex_cause(t);
via = G__36818;
t = G__36819;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36575 = datafied_throwable;
var map__36575__$1 = cljs.core.__destructure_map(map__36575);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36575__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36576 = cljs.core.last(via);
var map__36576__$1 = cljs.core.__destructure_map(map__36576);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36576__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36576__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36577 = data;
var map__36577__$1 = cljs.core.__destructure_map(map__36577);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36578 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36578__$1 = cljs.core.__destructure_map(map__36578);
var top_data = map__36578__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36578__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36579 = phase;
var G__36579__$1 = (((G__36579 instanceof cljs.core.Keyword))?G__36579.fqn:null);
switch (G__36579__$1) {
case "read-source":
var map__36580 = data;
var map__36580__$1 = cljs.core.__destructure_map(map__36580);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36580__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36580__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36581 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36581__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36581,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36581);
var G__36581__$2 = (cljs.core.truth_((function (){var fexpr__36586 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36586.cljs$core$IFn$_invoke$arity$1 ? fexpr__36586.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36586.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36581__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36581__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36581__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36581__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36600 = top_data;
var G__36600__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36600,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36600);
var G__36600__$2 = (cljs.core.truth_((function (){var fexpr__36601 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36601.cljs$core$IFn$_invoke$arity$1 ? fexpr__36601.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36601.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36600__$1);
var G__36600__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36600__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36600__$2);
var G__36600__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36600__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36600__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36600__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36600__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36609 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36609,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36609,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36609,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36609,(3),null);
var G__36619 = top_data;
var G__36619__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36619);
var G__36619__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36619__$1);
var G__36619__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36619__$2);
var G__36619__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36619__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36619__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36619__$4;
}

break;
case "execution":
var vec__36651 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36651,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36651,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36651,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36651,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36574_SHARP_){
var or__4253__auto__ = (p1__36574_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__36654 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36654.cljs$core$IFn$_invoke$arity$1 ? fexpr__36654.cljs$core$IFn$_invoke$arity$1(p1__36574_SHARP_) : fexpr__36654.call(null,p1__36574_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__36655 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36655__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36655,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36655);
var G__36655__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36655__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36655__$1);
var G__36655__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36655__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36655__$2);
var G__36655__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36655__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36655__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36655__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36655__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36579__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36691){
var map__36692 = p__36691;
var map__36692__$1 = cljs.core.__destructure_map(map__36692);
var triage_data = map__36692__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36692__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36694 = phase;
var G__36694__$1 = (((G__36694 instanceof cljs.core.Keyword))?G__36694.fqn:null);
switch (G__36694__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36695 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36696 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36697 = loc;
var G__36698 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36700_36832 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36701_36833 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36702_36834 = true;
var _STAR_print_fn_STAR__temp_val__36703_36835 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36702_36834);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36703_36835);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36685_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36685_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36701_36833);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36700_36832);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36695,G__36696,G__36697,G__36698) : format.call(null,G__36695,G__36696,G__36697,G__36698));

break;
case "macroexpansion":
var G__36705 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36706 = cause_type;
var G__36707 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36708 = loc;
var G__36709 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36705,G__36706,G__36707,G__36708,G__36709) : format.call(null,G__36705,G__36706,G__36707,G__36708,G__36709));

break;
case "compile-syntax-check":
var G__36710 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36711 = cause_type;
var G__36712 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36713 = loc;
var G__36714 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36710,G__36711,G__36712,G__36713,G__36714) : format.call(null,G__36710,G__36711,G__36712,G__36713,G__36714));

break;
case "compilation":
var G__36715 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36716 = cause_type;
var G__36717 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36718 = loc;
var G__36719 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36715,G__36716,G__36717,G__36718,G__36719) : format.call(null,G__36715,G__36716,G__36717,G__36718,G__36719));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36721 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36722 = symbol;
var G__36723 = loc;
var G__36724 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36725_36837 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36726_36838 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36727_36839 = true;
var _STAR_print_fn_STAR__temp_val__36728_36840 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36727_36839);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36728_36840);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36686_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36686_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36726_36838);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36725_36837);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36721,G__36722,G__36723,G__36724) : format.call(null,G__36721,G__36722,G__36723,G__36724));
} else {
var G__36730 = "Execution error%s at %s(%s).\n%s\n";
var G__36731 = cause_type;
var G__36732 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36733 = loc;
var G__36734 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36730,G__36731,G__36732,G__36733,G__36734) : format.call(null,G__36730,G__36731,G__36732,G__36733,G__36734));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36694__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
