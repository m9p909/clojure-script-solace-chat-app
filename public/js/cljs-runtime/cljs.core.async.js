goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32455 = arguments.length;
switch (G__32455) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32460 = (function (f,blockable,meta32461){
this.f = f;
this.blockable = blockable;
this.meta32461 = meta32461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32462,meta32461__$1){
var self__ = this;
var _32462__$1 = this;
return (new cljs.core.async.t_cljs$core$async32460(self__.f,self__.blockable,meta32461__$1));
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32462){
var self__ = this;
var _32462__$1 = this;
return self__.meta32461;
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32461","meta32461",365758644,null)], null);
}));

(cljs.core.async.t_cljs$core$async32460.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32460");

(cljs.core.async.t_cljs$core$async32460.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32460");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32460.
 */
cljs.core.async.__GT_t_cljs$core$async32460 = (function cljs$core$async$__GT_t_cljs$core$async32460(f__$1,blockable__$1,meta32461){
return (new cljs.core.async.t_cljs$core$async32460(f__$1,blockable__$1,meta32461));
});

}

return (new cljs.core.async.t_cljs$core$async32460(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32465 = arguments.length;
switch (G__32465) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32467 = arguments.length;
switch (G__32467) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32469 = arguments.length;
switch (G__32469) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33919 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33919) : fn1.call(null,val_33919));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33919) : fn1.call(null,val_33919));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32471 = arguments.length;
switch (G__32471) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___33921 = n;
var x_33922 = (0);
while(true){
if((x_33922 < n__4741__auto___33921)){
(a[x_33922] = x_33922);

var G__33927 = (x_33922 + (1));
x_33922 = G__33927;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32472 = (function (flag,meta32473){
this.flag = flag;
this.meta32473 = meta32473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32474,meta32473__$1){
var self__ = this;
var _32474__$1 = this;
return (new cljs.core.async.t_cljs$core$async32472(self__.flag,meta32473__$1));
}));

(cljs.core.async.t_cljs$core$async32472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32474){
var self__ = this;
var _32474__$1 = this;
return self__.meta32473;
}));

(cljs.core.async.t_cljs$core$async32472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32473","meta32473",1551241935,null)], null);
}));

(cljs.core.async.t_cljs$core$async32472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32472");

(cljs.core.async.t_cljs$core$async32472.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32472.
 */
cljs.core.async.__GT_t_cljs$core$async32472 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32472(flag__$1,meta32473){
return (new cljs.core.async.t_cljs$core$async32472(flag__$1,meta32473));
});

}

return (new cljs.core.async.t_cljs$core$async32472(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32475 = (function (flag,cb,meta32476){
this.flag = flag;
this.cb = cb;
this.meta32476 = meta32476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32477,meta32476__$1){
var self__ = this;
var _32477__$1 = this;
return (new cljs.core.async.t_cljs$core$async32475(self__.flag,self__.cb,meta32476__$1));
}));

(cljs.core.async.t_cljs$core$async32475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32477){
var self__ = this;
var _32477__$1 = this;
return self__.meta32476;
}));

(cljs.core.async.t_cljs$core$async32475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32476","meta32476",664766650,null)], null);
}));

(cljs.core.async.t_cljs$core$async32475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32475");

(cljs.core.async.t_cljs$core$async32475.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32475.
 */
cljs.core.async.__GT_t_cljs$core$async32475 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32475(flag__$1,cb__$1,meta32476){
return (new cljs.core.async.t_cljs$core$async32475(flag__$1,cb__$1,meta32476));
});

}

return (new cljs.core.async.t_cljs$core$async32475(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32478_SHARP_){
var G__32480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32478_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32480) : fret.call(null,G__32480));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32479_SHARP_){
var G__32481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32479_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32481) : fret.call(null,G__32481));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33928 = (i + (1));
i = G__33928;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33930 = arguments.length;
var i__4865__auto___33931 = (0);
while(true){
if((i__4865__auto___33931 < len__4864__auto___33930)){
args__4870__auto__.push((arguments[i__4865__auto___33931]));

var G__33932 = (i__4865__auto___33931 + (1));
i__4865__auto___33931 = G__33932;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32484){
var map__32485 = p__32484;
var map__32485__$1 = cljs.core.__destructure_map(map__32485);
var opts = map__32485__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32482){
var G__32483 = cljs.core.first(seq32482);
var seq32482__$1 = cljs.core.next(seq32482);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32483,seq32482__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32487 = arguments.length;
switch (G__32487) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32390__auto___33935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32511){
var state_val_32512 = (state_32511[(1)]);
if((state_val_32512 === (7))){
var inst_32507 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32513_33936 = state_32511__$1;
(statearr_32513_33936[(2)] = inst_32507);

(statearr_32513_33936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (1))){
var state_32511__$1 = state_32511;
var statearr_32514_33941 = state_32511__$1;
(statearr_32514_33941[(2)] = null);

(statearr_32514_33941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (4))){
var inst_32490 = (state_32511[(7)]);
var inst_32490__$1 = (state_32511[(2)]);
var inst_32491 = (inst_32490__$1 == null);
var state_32511__$1 = (function (){var statearr_32515 = state_32511;
(statearr_32515[(7)] = inst_32490__$1);

return statearr_32515;
})();
if(cljs.core.truth_(inst_32491)){
var statearr_32516_33945 = state_32511__$1;
(statearr_32516_33945[(1)] = (5));

} else {
var statearr_32517_33946 = state_32511__$1;
(statearr_32517_33946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (13))){
var state_32511__$1 = state_32511;
var statearr_32518_33947 = state_32511__$1;
(statearr_32518_33947[(2)] = null);

(statearr_32518_33947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (6))){
var inst_32490 = (state_32511[(7)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32511__$1,(11),to,inst_32490);
} else {
if((state_val_32512 === (3))){
var inst_32509 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32511__$1,inst_32509);
} else {
if((state_val_32512 === (12))){
var state_32511__$1 = state_32511;
var statearr_32519_33951 = state_32511__$1;
(statearr_32519_33951[(2)] = null);

(statearr_32519_33951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (2))){
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32511__$1,(4),from);
} else {
if((state_val_32512 === (11))){
var inst_32500 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
if(cljs.core.truth_(inst_32500)){
var statearr_32520_33952 = state_32511__$1;
(statearr_32520_33952[(1)] = (12));

} else {
var statearr_32521_33956 = state_32511__$1;
(statearr_32521_33956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (9))){
var state_32511__$1 = state_32511;
var statearr_32522_33957 = state_32511__$1;
(statearr_32522_33957[(2)] = null);

(statearr_32522_33957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (5))){
var state_32511__$1 = state_32511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32523_33958 = state_32511__$1;
(statearr_32523_33958[(1)] = (8));

} else {
var statearr_32524_33959 = state_32511__$1;
(statearr_32524_33959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (14))){
var inst_32505 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32525_33960 = state_32511__$1;
(statearr_32525_33960[(2)] = inst_32505);

(statearr_32525_33960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (10))){
var inst_32497 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32526_33961 = state_32511__$1;
(statearr_32526_33961[(2)] = inst_32497);

(statearr_32526_33961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (8))){
var inst_32494 = cljs.core.async.close_BANG_(to);
var state_32511__$1 = state_32511;
var statearr_32527_33962 = state_32511__$1;
(statearr_32527_33962[(2)] = inst_32494);

(statearr_32527_33962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_32528 = [null,null,null,null,null,null,null,null];
(statearr_32528[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_32528[(1)] = (1));

return statearr_32528;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_32511){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32511);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32529){var ex__32301__auto__ = e32529;
var statearr_32530_33966 = state_32511;
(statearr_32530_33966[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32511[(4)]))){
var statearr_32531_33967 = state_32511;
(statearr_32531_33967[(1)] = cljs.core.first((state_32511[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33972 = state_32511;
state_32511 = G__33972;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_32511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_32511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32532 = f__32391__auto__();
(statearr_32532[(6)] = c__32390__auto___33935);

return statearr_32532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32533){
var vec__32534 = p__32533;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32534,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32534,(1),null);
var job = vec__32534;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32390__auto___33976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32541){
var state_val_32542 = (state_32541[(1)]);
if((state_val_32542 === (1))){
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32541__$1,(2),res,v);
} else {
if((state_val_32542 === (2))){
var inst_32538 = (state_32541[(2)]);
var inst_32539 = cljs.core.async.close_BANG_(res);
var state_32541__$1 = (function (){var statearr_32543 = state_32541;
(statearr_32543[(7)] = inst_32538);

return statearr_32543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32541__$1,inst_32539);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0 = (function (){
var statearr_32544 = [null,null,null,null,null,null,null,null];
(statearr_32544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__);

(statearr_32544[(1)] = (1));

return statearr_32544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1 = (function (state_32541){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32541);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32545){var ex__32301__auto__ = e32545;
var statearr_32546_33983 = state_32541;
(statearr_32546_33983[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32541[(4)]))){
var statearr_32547_33984 = state_32541;
(statearr_32547_33984[(1)] = cljs.core.first((state_32541[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33988 = state_32541;
state_32541 = G__33988;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = function(state_32541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1.call(this,state_32541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32548 = f__32391__auto__();
(statearr_32548[(6)] = c__32390__auto___33976);

return statearr_32548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32549){
var vec__32550 = p__32549;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32550,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32550,(1),null);
var job = vec__32550;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33990 = n;
var __33991 = (0);
while(true){
if((__33991 < n__4741__auto___33990)){
var G__32553_33992 = type;
var G__32553_33993__$1 = (((G__32553_33992 instanceof cljs.core.Keyword))?G__32553_33992.fqn:null);
switch (G__32553_33993__$1) {
case "compute":
var c__32390__auto___33995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33991,c__32390__auto___33995,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async){
return (function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = ((function (__33991,c__32390__auto___33995,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async){
return (function (state_32566){
var state_val_32567 = (state_32566[(1)]);
if((state_val_32567 === (1))){
var state_32566__$1 = state_32566;
var statearr_32568_33996 = state_32566__$1;
(statearr_32568_33996[(2)] = null);

(statearr_32568_33996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (2))){
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32566__$1,(4),jobs);
} else {
if((state_val_32567 === (3))){
var inst_32564 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32566__$1,inst_32564);
} else {
if((state_val_32567 === (4))){
var inst_32556 = (state_32566[(2)]);
var inst_32557 = process(inst_32556);
var state_32566__$1 = state_32566;
if(cljs.core.truth_(inst_32557)){
var statearr_32569_34002 = state_32566__$1;
(statearr_32569_34002[(1)] = (5));

} else {
var statearr_32570_34003 = state_32566__$1;
(statearr_32570_34003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (5))){
var state_32566__$1 = state_32566;
var statearr_32571_34004 = state_32566__$1;
(statearr_32571_34004[(2)] = null);

(statearr_32571_34004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (6))){
var state_32566__$1 = state_32566;
var statearr_32572_34006 = state_32566__$1;
(statearr_32572_34006[(2)] = null);

(statearr_32572_34006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (7))){
var inst_32562 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32573_34007 = state_32566__$1;
(statearr_32573_34007[(2)] = inst_32562);

(statearr_32573_34007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33991,c__32390__auto___33995,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async))
;
return ((function (__33991,switch__32297__auto__,c__32390__auto___33995,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0 = (function (){
var statearr_32574 = [null,null,null,null,null,null,null];
(statearr_32574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__);

(statearr_32574[(1)] = (1));

return statearr_32574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1 = (function (state_32566){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32566);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32575){var ex__32301__auto__ = e32575;
var statearr_32576_34008 = state_32566;
(statearr_32576_34008[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32566[(4)]))){
var statearr_32577_34009 = state_32566;
(statearr_32577_34009[(1)] = cljs.core.first((state_32566[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34010 = state_32566;
state_32566 = G__34010;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = function(state_32566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1.call(this,state_32566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__;
})()
;})(__33991,switch__32297__auto__,c__32390__auto___33995,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async))
})();
var state__32392__auto__ = (function (){var statearr_32578 = f__32391__auto__();
(statearr_32578[(6)] = c__32390__auto___33995);

return statearr_32578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
});})(__33991,c__32390__auto___33995,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async))
);


break;
case "async":
var c__32390__auto___34012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33991,c__32390__auto___34012,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async){
return (function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = ((function (__33991,c__32390__auto___34012,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async){
return (function (state_32591){
var state_val_32592 = (state_32591[(1)]);
if((state_val_32592 === (1))){
var state_32591__$1 = state_32591;
var statearr_32593_34014 = state_32591__$1;
(statearr_32593_34014[(2)] = null);

(statearr_32593_34014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (2))){
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32591__$1,(4),jobs);
} else {
if((state_val_32592 === (3))){
var inst_32589 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32591__$1,inst_32589);
} else {
if((state_val_32592 === (4))){
var inst_32581 = (state_32591[(2)]);
var inst_32582 = async(inst_32581);
var state_32591__$1 = state_32591;
if(cljs.core.truth_(inst_32582)){
var statearr_32594_34015 = state_32591__$1;
(statearr_32594_34015[(1)] = (5));

} else {
var statearr_32595_34016 = state_32591__$1;
(statearr_32595_34016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (5))){
var state_32591__$1 = state_32591;
var statearr_32596_34017 = state_32591__$1;
(statearr_32596_34017[(2)] = null);

(statearr_32596_34017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (6))){
var state_32591__$1 = state_32591;
var statearr_32597_34018 = state_32591__$1;
(statearr_32597_34018[(2)] = null);

(statearr_32597_34018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (7))){
var inst_32587 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32598_34019 = state_32591__$1;
(statearr_32598_34019[(2)] = inst_32587);

(statearr_32598_34019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33991,c__32390__auto___34012,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async))
;
return ((function (__33991,switch__32297__auto__,c__32390__auto___34012,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0 = (function (){
var statearr_32599 = [null,null,null,null,null,null,null];
(statearr_32599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__);

(statearr_32599[(1)] = (1));

return statearr_32599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1 = (function (state_32591){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32591);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32600){var ex__32301__auto__ = e32600;
var statearr_32601_34024 = state_32591;
(statearr_32601_34024[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32591[(4)]))){
var statearr_32602_34025 = state_32591;
(statearr_32602_34025[(1)] = cljs.core.first((state_32591[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34026 = state_32591;
state_32591 = G__34026;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = function(state_32591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1.call(this,state_32591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__;
})()
;})(__33991,switch__32297__auto__,c__32390__auto___34012,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async))
})();
var state__32392__auto__ = (function (){var statearr_32603 = f__32391__auto__();
(statearr_32603[(6)] = c__32390__auto___34012);

return statearr_32603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
});})(__33991,c__32390__auto___34012,G__32553_33992,G__32553_33993__$1,n__4741__auto___33990,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32553_33993__$1)].join('')));

}

var G__34027 = (__33991 + (1));
__33991 = G__34027;
continue;
} else {
}
break;
}

var c__32390__auto___34028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32625){
var state_val_32626 = (state_32625[(1)]);
if((state_val_32626 === (7))){
var inst_32621 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32627_34031 = state_32625__$1;
(statearr_32627_34031[(2)] = inst_32621);

(statearr_32627_34031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (1))){
var state_32625__$1 = state_32625;
var statearr_32628_34034 = state_32625__$1;
(statearr_32628_34034[(2)] = null);

(statearr_32628_34034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (4))){
var inst_32606 = (state_32625[(7)]);
var inst_32606__$1 = (state_32625[(2)]);
var inst_32607 = (inst_32606__$1 == null);
var state_32625__$1 = (function (){var statearr_32629 = state_32625;
(statearr_32629[(7)] = inst_32606__$1);

return statearr_32629;
})();
if(cljs.core.truth_(inst_32607)){
var statearr_32630_34035 = state_32625__$1;
(statearr_32630_34035[(1)] = (5));

} else {
var statearr_32631_34036 = state_32625__$1;
(statearr_32631_34036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (6))){
var inst_32606 = (state_32625[(7)]);
var inst_32611 = (state_32625[(8)]);
var inst_32611__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32613 = [inst_32606,inst_32611__$1];
var inst_32614 = (new cljs.core.PersistentVector(null,2,(5),inst_32612,inst_32613,null));
var state_32625__$1 = (function (){var statearr_32632 = state_32625;
(statearr_32632[(8)] = inst_32611__$1);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32625__$1,(8),jobs,inst_32614);
} else {
if((state_val_32626 === (3))){
var inst_32623 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32625__$1,inst_32623);
} else {
if((state_val_32626 === (2))){
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32625__$1,(4),from);
} else {
if((state_val_32626 === (9))){
var inst_32618 = (state_32625[(2)]);
var state_32625__$1 = (function (){var statearr_32633 = state_32625;
(statearr_32633[(9)] = inst_32618);

return statearr_32633;
})();
var statearr_32634_34050 = state_32625__$1;
(statearr_32634_34050[(2)] = null);

(statearr_32634_34050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (5))){
var inst_32609 = cljs.core.async.close_BANG_(jobs);
var state_32625__$1 = state_32625;
var statearr_32635_34051 = state_32625__$1;
(statearr_32635_34051[(2)] = inst_32609);

(statearr_32635_34051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (8))){
var inst_32611 = (state_32625[(8)]);
var inst_32616 = (state_32625[(2)]);
var state_32625__$1 = (function (){var statearr_32636 = state_32625;
(statearr_32636[(10)] = inst_32616);

return statearr_32636;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32625__$1,(9),results,inst_32611);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0 = (function (){
var statearr_32637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__);

(statearr_32637[(1)] = (1));

return statearr_32637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1 = (function (state_32625){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32625);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32638){var ex__32301__auto__ = e32638;
var statearr_32639_34052 = state_32625;
(statearr_32639_34052[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32625[(4)]))){
var statearr_32640_34053 = state_32625;
(statearr_32640_34053[(1)] = cljs.core.first((state_32625[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34054 = state_32625;
state_32625 = G__34054;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32641 = f__32391__auto__();
(statearr_32641[(6)] = c__32390__auto___34028);

return statearr_32641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


var c__32390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (7))){
var inst_32675 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32681_34055 = state_32679__$1;
(statearr_32681_34055[(2)] = inst_32675);

(statearr_32681_34055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (20))){
var state_32679__$1 = state_32679;
var statearr_32682_34056 = state_32679__$1;
(statearr_32682_34056[(2)] = null);

(statearr_32682_34056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (1))){
var state_32679__$1 = state_32679;
var statearr_32683_34057 = state_32679__$1;
(statearr_32683_34057[(2)] = null);

(statearr_32683_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32644 = (state_32679[(7)]);
var inst_32644__$1 = (state_32679[(2)]);
var inst_32645 = (inst_32644__$1 == null);
var state_32679__$1 = (function (){var statearr_32684 = state_32679;
(statearr_32684[(7)] = inst_32644__$1);

return statearr_32684;
})();
if(cljs.core.truth_(inst_32645)){
var statearr_32685_34058 = state_32679__$1;
(statearr_32685_34058[(1)] = (5));

} else {
var statearr_32686_34059 = state_32679__$1;
(statearr_32686_34059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (15))){
var inst_32657 = (state_32679[(8)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32679__$1,(18),to,inst_32657);
} else {
if((state_val_32680 === (21))){
var inst_32670 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32687_34060 = state_32679__$1;
(statearr_32687_34060[(2)] = inst_32670);

(statearr_32687_34060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (13))){
var inst_32672 = (state_32679[(2)]);
var state_32679__$1 = (function (){var statearr_32688 = state_32679;
(statearr_32688[(9)] = inst_32672);

return statearr_32688;
})();
var statearr_32689_34061 = state_32679__$1;
(statearr_32689_34061[(2)] = null);

(statearr_32689_34061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (6))){
var inst_32644 = (state_32679[(7)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32679__$1,(11),inst_32644);
} else {
if((state_val_32680 === (17))){
var inst_32665 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32665)){
var statearr_32690_34062 = state_32679__$1;
(statearr_32690_34062[(1)] = (19));

} else {
var statearr_32691_34063 = state_32679__$1;
(statearr_32691_34063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (3))){
var inst_32677 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32679__$1,inst_32677);
} else {
if((state_val_32680 === (12))){
var inst_32654 = (state_32679[(10)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32679__$1,(14),inst_32654);
} else {
if((state_val_32680 === (2))){
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32679__$1,(4),results);
} else {
if((state_val_32680 === (19))){
var state_32679__$1 = state_32679;
var statearr_32692_34070 = state_32679__$1;
(statearr_32692_34070[(2)] = null);

(statearr_32692_34070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (11))){
var inst_32654 = (state_32679[(2)]);
var state_32679__$1 = (function (){var statearr_32693 = state_32679;
(statearr_32693[(10)] = inst_32654);

return statearr_32693;
})();
var statearr_32694_34071 = state_32679__$1;
(statearr_32694_34071[(2)] = null);

(statearr_32694_34071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (9))){
var state_32679__$1 = state_32679;
var statearr_32695_34072 = state_32679__$1;
(statearr_32695_34072[(2)] = null);

(statearr_32695_34072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (5))){
var state_32679__$1 = state_32679;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32696_34073 = state_32679__$1;
(statearr_32696_34073[(1)] = (8));

} else {
var statearr_32697_34074 = state_32679__$1;
(statearr_32697_34074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (14))){
var inst_32657 = (state_32679[(8)]);
var inst_32659 = (state_32679[(11)]);
var inst_32657__$1 = (state_32679[(2)]);
var inst_32658 = (inst_32657__$1 == null);
var inst_32659__$1 = cljs.core.not(inst_32658);
var state_32679__$1 = (function (){var statearr_32698 = state_32679;
(statearr_32698[(8)] = inst_32657__$1);

(statearr_32698[(11)] = inst_32659__$1);

return statearr_32698;
})();
if(inst_32659__$1){
var statearr_32699_34075 = state_32679__$1;
(statearr_32699_34075[(1)] = (15));

} else {
var statearr_32700_34076 = state_32679__$1;
(statearr_32700_34076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (16))){
var inst_32659 = (state_32679[(11)]);
var state_32679__$1 = state_32679;
var statearr_32701_34077 = state_32679__$1;
(statearr_32701_34077[(2)] = inst_32659);

(statearr_32701_34077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (10))){
var inst_32651 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32702_34078 = state_32679__$1;
(statearr_32702_34078[(2)] = inst_32651);

(statearr_32702_34078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (18))){
var inst_32662 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32703_34079 = state_32679__$1;
(statearr_32703_34079[(2)] = inst_32662);

(statearr_32703_34079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (8))){
var inst_32648 = cljs.core.async.close_BANG_(to);
var state_32679__$1 = state_32679;
var statearr_32704_34080 = state_32679__$1;
(statearr_32704_34080[(2)] = inst_32648);

(statearr_32704_34080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0 = (function (){
var statearr_32705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__);

(statearr_32705[(1)] = (1));

return statearr_32705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1 = (function (state_32679){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32679);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32706){var ex__32301__auto__ = e32706;
var statearr_32707_34081 = state_32679;
(statearr_32707_34081[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32679[(4)]))){
var statearr_32708_34082 = state_32679;
(statearr_32708_34082[(1)] = cljs.core.first((state_32679[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34083 = state_32679;
state_32679 = G__34083;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32709 = f__32391__auto__();
(statearr_32709[(6)] = c__32390__auto__);

return statearr_32709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));

return c__32390__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32711 = arguments.length;
switch (G__32711) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32713 = arguments.length;
switch (G__32713) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32715 = arguments.length;
switch (G__32715) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32390__auto___34093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32741){
var state_val_32742 = (state_32741[(1)]);
if((state_val_32742 === (7))){
var inst_32737 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32743_34094 = state_32741__$1;
(statearr_32743_34094[(2)] = inst_32737);

(statearr_32743_34094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (1))){
var state_32741__$1 = state_32741;
var statearr_32744_34095 = state_32741__$1;
(statearr_32744_34095[(2)] = null);

(statearr_32744_34095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (4))){
var inst_32718 = (state_32741[(7)]);
var inst_32718__$1 = (state_32741[(2)]);
var inst_32719 = (inst_32718__$1 == null);
var state_32741__$1 = (function (){var statearr_32745 = state_32741;
(statearr_32745[(7)] = inst_32718__$1);

return statearr_32745;
})();
if(cljs.core.truth_(inst_32719)){
var statearr_32746_34096 = state_32741__$1;
(statearr_32746_34096[(1)] = (5));

} else {
var statearr_32747_34097 = state_32741__$1;
(statearr_32747_34097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (13))){
var state_32741__$1 = state_32741;
var statearr_32748_34098 = state_32741__$1;
(statearr_32748_34098[(2)] = null);

(statearr_32748_34098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (6))){
var inst_32718 = (state_32741[(7)]);
var inst_32724 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32718) : p.call(null,inst_32718));
var state_32741__$1 = state_32741;
if(cljs.core.truth_(inst_32724)){
var statearr_32749_34099 = state_32741__$1;
(statearr_32749_34099[(1)] = (9));

} else {
var statearr_32750_34100 = state_32741__$1;
(statearr_32750_34100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (3))){
var inst_32739 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32741__$1,inst_32739);
} else {
if((state_val_32742 === (12))){
var state_32741__$1 = state_32741;
var statearr_32751_34101 = state_32741__$1;
(statearr_32751_34101[(2)] = null);

(statearr_32751_34101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (2))){
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32741__$1,(4),ch);
} else {
if((state_val_32742 === (11))){
var inst_32718 = (state_32741[(7)]);
var inst_32728 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32741__$1,(8),inst_32728,inst_32718);
} else {
if((state_val_32742 === (9))){
var state_32741__$1 = state_32741;
var statearr_32752_34102 = state_32741__$1;
(statearr_32752_34102[(2)] = tc);

(statearr_32752_34102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (5))){
var inst_32721 = cljs.core.async.close_BANG_(tc);
var inst_32722 = cljs.core.async.close_BANG_(fc);
var state_32741__$1 = (function (){var statearr_32753 = state_32741;
(statearr_32753[(8)] = inst_32721);

return statearr_32753;
})();
var statearr_32754_34109 = state_32741__$1;
(statearr_32754_34109[(2)] = inst_32722);

(statearr_32754_34109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (14))){
var inst_32735 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32755_34110 = state_32741__$1;
(statearr_32755_34110[(2)] = inst_32735);

(statearr_32755_34110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (10))){
var state_32741__$1 = state_32741;
var statearr_32756_34111 = state_32741__$1;
(statearr_32756_34111[(2)] = fc);

(statearr_32756_34111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (8))){
var inst_32730 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
if(cljs.core.truth_(inst_32730)){
var statearr_32757_34112 = state_32741__$1;
(statearr_32757_34112[(1)] = (12));

} else {
var statearr_32758_34113 = state_32741__$1;
(statearr_32758_34113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_32759 = [null,null,null,null,null,null,null,null,null];
(statearr_32759[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_32759[(1)] = (1));

return statearr_32759;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_32741){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32741);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32760){var ex__32301__auto__ = e32760;
var statearr_32761_34114 = state_32741;
(statearr_32761_34114[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32741[(4)]))){
var statearr_32762_34115 = state_32741;
(statearr_32762_34115[(1)] = cljs.core.first((state_32741[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34116 = state_32741;
state_32741 = G__34116;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_32741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_32741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32763 = f__32391__auto__();
(statearr_32763[(6)] = c__32390__auto___34093);

return statearr_32763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32785){
var state_val_32786 = (state_32785[(1)]);
if((state_val_32786 === (7))){
var inst_32781 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32787_34117 = state_32785__$1;
(statearr_32787_34117[(2)] = inst_32781);

(statearr_32787_34117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (1))){
var inst_32764 = init;
var inst_32765 = inst_32764;
var state_32785__$1 = (function (){var statearr_32788 = state_32785;
(statearr_32788[(7)] = inst_32765);

return statearr_32788;
})();
var statearr_32789_34118 = state_32785__$1;
(statearr_32789_34118[(2)] = null);

(statearr_32789_34118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (4))){
var inst_32768 = (state_32785[(8)]);
var inst_32768__$1 = (state_32785[(2)]);
var inst_32769 = (inst_32768__$1 == null);
var state_32785__$1 = (function (){var statearr_32790 = state_32785;
(statearr_32790[(8)] = inst_32768__$1);

return statearr_32790;
})();
if(cljs.core.truth_(inst_32769)){
var statearr_32791_34119 = state_32785__$1;
(statearr_32791_34119[(1)] = (5));

} else {
var statearr_32792_34120 = state_32785__$1;
(statearr_32792_34120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (6))){
var inst_32768 = (state_32785[(8)]);
var inst_32772 = (state_32785[(9)]);
var inst_32765 = (state_32785[(7)]);
var inst_32772__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32765,inst_32768) : f.call(null,inst_32765,inst_32768));
var inst_32773 = cljs.core.reduced_QMARK_(inst_32772__$1);
var state_32785__$1 = (function (){var statearr_32793 = state_32785;
(statearr_32793[(9)] = inst_32772__$1);

return statearr_32793;
})();
if(inst_32773){
var statearr_32794_34121 = state_32785__$1;
(statearr_32794_34121[(1)] = (8));

} else {
var statearr_32795_34122 = state_32785__$1;
(statearr_32795_34122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (3))){
var inst_32783 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32785__$1,inst_32783);
} else {
if((state_val_32786 === (2))){
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32785__$1,(4),ch);
} else {
if((state_val_32786 === (9))){
var inst_32772 = (state_32785[(9)]);
var inst_32765 = inst_32772;
var state_32785__$1 = (function (){var statearr_32796 = state_32785;
(statearr_32796[(7)] = inst_32765);

return statearr_32796;
})();
var statearr_32797_34123 = state_32785__$1;
(statearr_32797_34123[(2)] = null);

(statearr_32797_34123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (5))){
var inst_32765 = (state_32785[(7)]);
var state_32785__$1 = state_32785;
var statearr_32798_34124 = state_32785__$1;
(statearr_32798_34124[(2)] = inst_32765);

(statearr_32798_34124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (10))){
var inst_32779 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32799_34125 = state_32785__$1;
(statearr_32799_34125[(2)] = inst_32779);

(statearr_32799_34125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (8))){
var inst_32772 = (state_32785[(9)]);
var inst_32775 = cljs.core.deref(inst_32772);
var state_32785__$1 = state_32785;
var statearr_32800_34126 = state_32785__$1;
(statearr_32800_34126[(2)] = inst_32775);

(statearr_32800_34126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32298__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32298__auto____0 = (function (){
var statearr_32801 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32801[(0)] = cljs$core$async$reduce_$_state_machine__32298__auto__);

(statearr_32801[(1)] = (1));

return statearr_32801;
});
var cljs$core$async$reduce_$_state_machine__32298__auto____1 = (function (state_32785){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32785);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32802){var ex__32301__auto__ = e32802;
var statearr_32803_34127 = state_32785;
(statearr_32803_34127[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32785[(4)]))){
var statearr_32804_34128 = state_32785;
(statearr_32804_34128[(1)] = cljs.core.first((state_32785[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34129 = state_32785;
state_32785 = G__34129;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32298__auto__ = function(state_32785){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32298__auto____1.call(this,state_32785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32298__auto____0;
cljs$core$async$reduce_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32298__auto____1;
return cljs$core$async$reduce_$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32805 = f__32391__auto__();
(statearr_32805[(6)] = c__32390__auto__);

return statearr_32805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));

return c__32390__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32811){
var state_val_32812 = (state_32811[(1)]);
if((state_val_32812 === (1))){
var inst_32806 = cljs.core.async.reduce(f__$1,init,ch);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32811__$1,(2),inst_32806);
} else {
if((state_val_32812 === (2))){
var inst_32808 = (state_32811[(2)]);
var inst_32809 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32808) : f__$1.call(null,inst_32808));
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32811__$1,inst_32809);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32298__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32298__auto____0 = (function (){
var statearr_32813 = [null,null,null,null,null,null,null];
(statearr_32813[(0)] = cljs$core$async$transduce_$_state_machine__32298__auto__);

(statearr_32813[(1)] = (1));

return statearr_32813;
});
var cljs$core$async$transduce_$_state_machine__32298__auto____1 = (function (state_32811){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32811);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32814){var ex__32301__auto__ = e32814;
var statearr_32815_34130 = state_32811;
(statearr_32815_34130[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32811[(4)]))){
var statearr_32816_34131 = state_32811;
(statearr_32816_34131[(1)] = cljs.core.first((state_32811[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34132 = state_32811;
state_32811 = G__34132;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32298__auto__ = function(state_32811){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32298__auto____1.call(this,state_32811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32298__auto____0;
cljs$core$async$transduce_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32298__auto____1;
return cljs$core$async$transduce_$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32817 = f__32391__auto__();
(statearr_32817[(6)] = c__32390__auto__);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));

return c__32390__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32819 = arguments.length;
switch (G__32819) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_32844){
var state_val_32845 = (state_32844[(1)]);
if((state_val_32845 === (7))){
var inst_32826 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32846_34134 = state_32844__$1;
(statearr_32846_34134[(2)] = inst_32826);

(statearr_32846_34134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (1))){
var inst_32820 = cljs.core.seq(coll);
var inst_32821 = inst_32820;
var state_32844__$1 = (function (){var statearr_32847 = state_32844;
(statearr_32847[(7)] = inst_32821);

return statearr_32847;
})();
var statearr_32848_34135 = state_32844__$1;
(statearr_32848_34135[(2)] = null);

(statearr_32848_34135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (4))){
var inst_32821 = (state_32844[(7)]);
var inst_32824 = cljs.core.first(inst_32821);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32844__$1,(7),ch,inst_32824);
} else {
if((state_val_32845 === (13))){
var inst_32838 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32849_34141 = state_32844__$1;
(statearr_32849_34141[(2)] = inst_32838);

(statearr_32849_34141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (6))){
var inst_32829 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
if(cljs.core.truth_(inst_32829)){
var statearr_32850_34142 = state_32844__$1;
(statearr_32850_34142[(1)] = (8));

} else {
var statearr_32851_34143 = state_32844__$1;
(statearr_32851_34143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (3))){
var inst_32842 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32844__$1,inst_32842);
} else {
if((state_val_32845 === (12))){
var state_32844__$1 = state_32844;
var statearr_32852_34144 = state_32844__$1;
(statearr_32852_34144[(2)] = null);

(statearr_32852_34144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (2))){
var inst_32821 = (state_32844[(7)]);
var state_32844__$1 = state_32844;
if(cljs.core.truth_(inst_32821)){
var statearr_32853_34145 = state_32844__$1;
(statearr_32853_34145[(1)] = (4));

} else {
var statearr_32854_34146 = state_32844__$1;
(statearr_32854_34146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (11))){
var inst_32835 = cljs.core.async.close_BANG_(ch);
var state_32844__$1 = state_32844;
var statearr_32855_34147 = state_32844__$1;
(statearr_32855_34147[(2)] = inst_32835);

(statearr_32855_34147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (9))){
var state_32844__$1 = state_32844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32856_34148 = state_32844__$1;
(statearr_32856_34148[(1)] = (11));

} else {
var statearr_32857_34149 = state_32844__$1;
(statearr_32857_34149[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (5))){
var inst_32821 = (state_32844[(7)]);
var state_32844__$1 = state_32844;
var statearr_32858_34150 = state_32844__$1;
(statearr_32858_34150[(2)] = inst_32821);

(statearr_32858_34150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (10))){
var inst_32840 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32859_34151 = state_32844__$1;
(statearr_32859_34151[(2)] = inst_32840);

(statearr_32859_34151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (8))){
var inst_32821 = (state_32844[(7)]);
var inst_32831 = cljs.core.next(inst_32821);
var inst_32821__$1 = inst_32831;
var state_32844__$1 = (function (){var statearr_32860 = state_32844;
(statearr_32860[(7)] = inst_32821__$1);

return statearr_32860;
})();
var statearr_32861_34152 = state_32844__$1;
(statearr_32861_34152[(2)] = null);

(statearr_32861_34152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_32862 = [null,null,null,null,null,null,null,null];
(statearr_32862[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_32862[(1)] = (1));

return statearr_32862;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_32844){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_32844);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e32863){var ex__32301__auto__ = e32863;
var statearr_32864_34153 = state_32844;
(statearr_32864_34153[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_32844[(4)]))){
var statearr_32865_34154 = state_32844;
(statearr_32865_34154[(1)] = cljs.core.first((state_32844[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34155 = state_32844;
state_32844 = G__34155;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_32844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_32844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_32866 = f__32391__auto__();
(statearr_32866[(6)] = c__32390__auto__);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));

return c__32390__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34159 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34159(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34160 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34160(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34163 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34163(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34164 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34164(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32869 = (function (ch,cs,meta32870){
this.ch = ch;
this.cs = cs;
this.meta32870 = meta32870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32871,meta32870__$1){
var self__ = this;
var _32871__$1 = this;
return (new cljs.core.async.t_cljs$core$async32869(self__.ch,self__.cs,meta32870__$1));
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32871){
var self__ = this;
var _32871__$1 = this;
return self__.meta32870;
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32870","meta32870",-646618605,null)], null);
}));

(cljs.core.async.t_cljs$core$async32869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32869");

(cljs.core.async.t_cljs$core$async32869.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32869.
 */
cljs.core.async.__GT_t_cljs$core$async32869 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32869(ch__$1,cs__$1,meta32870){
return (new cljs.core.async.t_cljs$core$async32869(ch__$1,cs__$1,meta32870));
});

}

return (new cljs.core.async.t_cljs$core$async32869(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32390__auto___34172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33004){
var state_val_33005 = (state_33004[(1)]);
if((state_val_33005 === (7))){
var inst_33000 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33006_34173 = state_33004__$1;
(statearr_33006_34173[(2)] = inst_33000);

(statearr_33006_34173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (20))){
var inst_32905 = (state_33004[(7)]);
var inst_32917 = cljs.core.first(inst_32905);
var inst_32918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32917,(0),null);
var inst_32919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32917,(1),null);
var state_33004__$1 = (function (){var statearr_33007 = state_33004;
(statearr_33007[(8)] = inst_32918);

return statearr_33007;
})();
if(cljs.core.truth_(inst_32919)){
var statearr_33008_34174 = state_33004__$1;
(statearr_33008_34174[(1)] = (22));

} else {
var statearr_33009_34175 = state_33004__$1;
(statearr_33009_34175[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (27))){
var inst_32947 = (state_33004[(9)]);
var inst_32949 = (state_33004[(10)]);
var inst_32954 = (state_33004[(11)]);
var inst_32874 = (state_33004[(12)]);
var inst_32954__$1 = cljs.core._nth(inst_32947,inst_32949);
var inst_32955 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32954__$1,inst_32874,done);
var state_33004__$1 = (function (){var statearr_33010 = state_33004;
(statearr_33010[(11)] = inst_32954__$1);

return statearr_33010;
})();
if(cljs.core.truth_(inst_32955)){
var statearr_33011_34176 = state_33004__$1;
(statearr_33011_34176[(1)] = (30));

} else {
var statearr_33012_34177 = state_33004__$1;
(statearr_33012_34177[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (1))){
var state_33004__$1 = state_33004;
var statearr_33013_34178 = state_33004__$1;
(statearr_33013_34178[(2)] = null);

(statearr_33013_34178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (24))){
var inst_32905 = (state_33004[(7)]);
var inst_32924 = (state_33004[(2)]);
var inst_32925 = cljs.core.next(inst_32905);
var inst_32883 = inst_32925;
var inst_32884 = null;
var inst_32885 = (0);
var inst_32886 = (0);
var state_33004__$1 = (function (){var statearr_33014 = state_33004;
(statearr_33014[(13)] = inst_32885);

(statearr_33014[(14)] = inst_32924);

(statearr_33014[(15)] = inst_32883);

(statearr_33014[(16)] = inst_32886);

(statearr_33014[(17)] = inst_32884);

return statearr_33014;
})();
var statearr_33015_34179 = state_33004__$1;
(statearr_33015_34179[(2)] = null);

(statearr_33015_34179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (39))){
var state_33004__$1 = state_33004;
var statearr_33019_34180 = state_33004__$1;
(statearr_33019_34180[(2)] = null);

(statearr_33019_34180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (4))){
var inst_32874 = (state_33004[(12)]);
var inst_32874__$1 = (state_33004[(2)]);
var inst_32875 = (inst_32874__$1 == null);
var state_33004__$1 = (function (){var statearr_33020 = state_33004;
(statearr_33020[(12)] = inst_32874__$1);

return statearr_33020;
})();
if(cljs.core.truth_(inst_32875)){
var statearr_33021_34181 = state_33004__$1;
(statearr_33021_34181[(1)] = (5));

} else {
var statearr_33022_34182 = state_33004__$1;
(statearr_33022_34182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (15))){
var inst_32885 = (state_33004[(13)]);
var inst_32883 = (state_33004[(15)]);
var inst_32886 = (state_33004[(16)]);
var inst_32884 = (state_33004[(17)]);
var inst_32901 = (state_33004[(2)]);
var inst_32902 = (inst_32886 + (1));
var tmp33016 = inst_32885;
var tmp33017 = inst_32883;
var tmp33018 = inst_32884;
var inst_32883__$1 = tmp33017;
var inst_32884__$1 = tmp33018;
var inst_32885__$1 = tmp33016;
var inst_32886__$1 = inst_32902;
var state_33004__$1 = (function (){var statearr_33023 = state_33004;
(statearr_33023[(13)] = inst_32885__$1);

(statearr_33023[(15)] = inst_32883__$1);

(statearr_33023[(16)] = inst_32886__$1);

(statearr_33023[(18)] = inst_32901);

(statearr_33023[(17)] = inst_32884__$1);

return statearr_33023;
})();
var statearr_33024_34183 = state_33004__$1;
(statearr_33024_34183[(2)] = null);

(statearr_33024_34183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (21))){
var inst_32928 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33028_34188 = state_33004__$1;
(statearr_33028_34188[(2)] = inst_32928);

(statearr_33028_34188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (31))){
var inst_32954 = (state_33004[(11)]);
var inst_32958 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32954);
var state_33004__$1 = state_33004;
var statearr_33029_34189 = state_33004__$1;
(statearr_33029_34189[(2)] = inst_32958);

(statearr_33029_34189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (32))){
var inst_32947 = (state_33004[(9)]);
var inst_32948 = (state_33004[(19)]);
var inst_32949 = (state_33004[(10)]);
var inst_32946 = (state_33004[(20)]);
var inst_32960 = (state_33004[(2)]);
var inst_32961 = (inst_32949 + (1));
var tmp33025 = inst_32947;
var tmp33026 = inst_32948;
var tmp33027 = inst_32946;
var inst_32946__$1 = tmp33027;
var inst_32947__$1 = tmp33025;
var inst_32948__$1 = tmp33026;
var inst_32949__$1 = inst_32961;
var state_33004__$1 = (function (){var statearr_33030 = state_33004;
(statearr_33030[(9)] = inst_32947__$1);

(statearr_33030[(19)] = inst_32948__$1);

(statearr_33030[(10)] = inst_32949__$1);

(statearr_33030[(21)] = inst_32960);

(statearr_33030[(20)] = inst_32946__$1);

return statearr_33030;
})();
var statearr_33031_34193 = state_33004__$1;
(statearr_33031_34193[(2)] = null);

(statearr_33031_34193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (40))){
var inst_32973 = (state_33004[(22)]);
var inst_32977 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32973);
var state_33004__$1 = state_33004;
var statearr_33032_34194 = state_33004__$1;
(statearr_33032_34194[(2)] = inst_32977);

(statearr_33032_34194[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (33))){
var inst_32964 = (state_33004[(23)]);
var inst_32966 = cljs.core.chunked_seq_QMARK_(inst_32964);
var state_33004__$1 = state_33004;
if(inst_32966){
var statearr_33033_34198 = state_33004__$1;
(statearr_33033_34198[(1)] = (36));

} else {
var statearr_33034_34199 = state_33004__$1;
(statearr_33034_34199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (13))){
var inst_32895 = (state_33004[(24)]);
var inst_32898 = cljs.core.async.close_BANG_(inst_32895);
var state_33004__$1 = state_33004;
var statearr_33035_34200 = state_33004__$1;
(statearr_33035_34200[(2)] = inst_32898);

(statearr_33035_34200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (22))){
var inst_32918 = (state_33004[(8)]);
var inst_32921 = cljs.core.async.close_BANG_(inst_32918);
var state_33004__$1 = state_33004;
var statearr_33036_34204 = state_33004__$1;
(statearr_33036_34204[(2)] = inst_32921);

(statearr_33036_34204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (36))){
var inst_32964 = (state_33004[(23)]);
var inst_32968 = cljs.core.chunk_first(inst_32964);
var inst_32969 = cljs.core.chunk_rest(inst_32964);
var inst_32970 = cljs.core.count(inst_32968);
var inst_32946 = inst_32969;
var inst_32947 = inst_32968;
var inst_32948 = inst_32970;
var inst_32949 = (0);
var state_33004__$1 = (function (){var statearr_33037 = state_33004;
(statearr_33037[(9)] = inst_32947);

(statearr_33037[(19)] = inst_32948);

(statearr_33037[(10)] = inst_32949);

(statearr_33037[(20)] = inst_32946);

return statearr_33037;
})();
var statearr_33038_34205 = state_33004__$1;
(statearr_33038_34205[(2)] = null);

(statearr_33038_34205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (41))){
var inst_32964 = (state_33004[(23)]);
var inst_32979 = (state_33004[(2)]);
var inst_32980 = cljs.core.next(inst_32964);
var inst_32946 = inst_32980;
var inst_32947 = null;
var inst_32948 = (0);
var inst_32949 = (0);
var state_33004__$1 = (function (){var statearr_33039 = state_33004;
(statearr_33039[(9)] = inst_32947);

(statearr_33039[(19)] = inst_32948);

(statearr_33039[(10)] = inst_32949);

(statearr_33039[(25)] = inst_32979);

(statearr_33039[(20)] = inst_32946);

return statearr_33039;
})();
var statearr_33040_34209 = state_33004__$1;
(statearr_33040_34209[(2)] = null);

(statearr_33040_34209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (43))){
var state_33004__$1 = state_33004;
var statearr_33041_34210 = state_33004__$1;
(statearr_33041_34210[(2)] = null);

(statearr_33041_34210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (29))){
var inst_32988 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33042_34215 = state_33004__$1;
(statearr_33042_34215[(2)] = inst_32988);

(statearr_33042_34215[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (44))){
var inst_32997 = (state_33004[(2)]);
var state_33004__$1 = (function (){var statearr_33043 = state_33004;
(statearr_33043[(26)] = inst_32997);

return statearr_33043;
})();
var statearr_33044_34216 = state_33004__$1;
(statearr_33044_34216[(2)] = null);

(statearr_33044_34216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (6))){
var inst_32938 = (state_33004[(27)]);
var inst_32937 = cljs.core.deref(cs);
var inst_32938__$1 = cljs.core.keys(inst_32937);
var inst_32939 = cljs.core.count(inst_32938__$1);
var inst_32940 = cljs.core.reset_BANG_(dctr,inst_32939);
var inst_32945 = cljs.core.seq(inst_32938__$1);
var inst_32946 = inst_32945;
var inst_32947 = null;
var inst_32948 = (0);
var inst_32949 = (0);
var state_33004__$1 = (function (){var statearr_33045 = state_33004;
(statearr_33045[(27)] = inst_32938__$1);

(statearr_33045[(9)] = inst_32947);

(statearr_33045[(19)] = inst_32948);

(statearr_33045[(10)] = inst_32949);

(statearr_33045[(20)] = inst_32946);

(statearr_33045[(28)] = inst_32940);

return statearr_33045;
})();
var statearr_33046_34217 = state_33004__$1;
(statearr_33046_34217[(2)] = null);

(statearr_33046_34217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (28))){
var inst_32964 = (state_33004[(23)]);
var inst_32946 = (state_33004[(20)]);
var inst_32964__$1 = cljs.core.seq(inst_32946);
var state_33004__$1 = (function (){var statearr_33047 = state_33004;
(statearr_33047[(23)] = inst_32964__$1);

return statearr_33047;
})();
if(inst_32964__$1){
var statearr_33048_34218 = state_33004__$1;
(statearr_33048_34218[(1)] = (33));

} else {
var statearr_33049_34219 = state_33004__$1;
(statearr_33049_34219[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (25))){
var inst_32948 = (state_33004[(19)]);
var inst_32949 = (state_33004[(10)]);
var inst_32951 = (inst_32949 < inst_32948);
var inst_32952 = inst_32951;
var state_33004__$1 = state_33004;
if(cljs.core.truth_(inst_32952)){
var statearr_33050_34220 = state_33004__$1;
(statearr_33050_34220[(1)] = (27));

} else {
var statearr_33051_34221 = state_33004__$1;
(statearr_33051_34221[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (34))){
var state_33004__$1 = state_33004;
var statearr_33052_34222 = state_33004__$1;
(statearr_33052_34222[(2)] = null);

(statearr_33052_34222[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (17))){
var state_33004__$1 = state_33004;
var statearr_33053_34223 = state_33004__$1;
(statearr_33053_34223[(2)] = null);

(statearr_33053_34223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (3))){
var inst_33002 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33004__$1,inst_33002);
} else {
if((state_val_33005 === (12))){
var inst_32933 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33054_34224 = state_33004__$1;
(statearr_33054_34224[(2)] = inst_32933);

(statearr_33054_34224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (2))){
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33004__$1,(4),ch);
} else {
if((state_val_33005 === (23))){
var state_33004__$1 = state_33004;
var statearr_33055_34225 = state_33004__$1;
(statearr_33055_34225[(2)] = null);

(statearr_33055_34225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (35))){
var inst_32986 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33056_34226 = state_33004__$1;
(statearr_33056_34226[(2)] = inst_32986);

(statearr_33056_34226[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (19))){
var inst_32905 = (state_33004[(7)]);
var inst_32909 = cljs.core.chunk_first(inst_32905);
var inst_32910 = cljs.core.chunk_rest(inst_32905);
var inst_32911 = cljs.core.count(inst_32909);
var inst_32883 = inst_32910;
var inst_32884 = inst_32909;
var inst_32885 = inst_32911;
var inst_32886 = (0);
var state_33004__$1 = (function (){var statearr_33057 = state_33004;
(statearr_33057[(13)] = inst_32885);

(statearr_33057[(15)] = inst_32883);

(statearr_33057[(16)] = inst_32886);

(statearr_33057[(17)] = inst_32884);

return statearr_33057;
})();
var statearr_33058_34227 = state_33004__$1;
(statearr_33058_34227[(2)] = null);

(statearr_33058_34227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (11))){
var inst_32883 = (state_33004[(15)]);
var inst_32905 = (state_33004[(7)]);
var inst_32905__$1 = cljs.core.seq(inst_32883);
var state_33004__$1 = (function (){var statearr_33059 = state_33004;
(statearr_33059[(7)] = inst_32905__$1);

return statearr_33059;
})();
if(inst_32905__$1){
var statearr_33060_34228 = state_33004__$1;
(statearr_33060_34228[(1)] = (16));

} else {
var statearr_33061_34229 = state_33004__$1;
(statearr_33061_34229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (9))){
var inst_32935 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33062_34230 = state_33004__$1;
(statearr_33062_34230[(2)] = inst_32935);

(statearr_33062_34230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (5))){
var inst_32881 = cljs.core.deref(cs);
var inst_32882 = cljs.core.seq(inst_32881);
var inst_32883 = inst_32882;
var inst_32884 = null;
var inst_32885 = (0);
var inst_32886 = (0);
var state_33004__$1 = (function (){var statearr_33063 = state_33004;
(statearr_33063[(13)] = inst_32885);

(statearr_33063[(15)] = inst_32883);

(statearr_33063[(16)] = inst_32886);

(statearr_33063[(17)] = inst_32884);

return statearr_33063;
})();
var statearr_33064_34231 = state_33004__$1;
(statearr_33064_34231[(2)] = null);

(statearr_33064_34231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (14))){
var state_33004__$1 = state_33004;
var statearr_33065_34232 = state_33004__$1;
(statearr_33065_34232[(2)] = null);

(statearr_33065_34232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (45))){
var inst_32994 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33066_34233 = state_33004__$1;
(statearr_33066_34233[(2)] = inst_32994);

(statearr_33066_34233[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (26))){
var inst_32938 = (state_33004[(27)]);
var inst_32990 = (state_33004[(2)]);
var inst_32991 = cljs.core.seq(inst_32938);
var state_33004__$1 = (function (){var statearr_33067 = state_33004;
(statearr_33067[(29)] = inst_32990);

return statearr_33067;
})();
if(inst_32991){
var statearr_33068_34234 = state_33004__$1;
(statearr_33068_34234[(1)] = (42));

} else {
var statearr_33069_34235 = state_33004__$1;
(statearr_33069_34235[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (16))){
var inst_32905 = (state_33004[(7)]);
var inst_32907 = cljs.core.chunked_seq_QMARK_(inst_32905);
var state_33004__$1 = state_33004;
if(inst_32907){
var statearr_33070_34236 = state_33004__$1;
(statearr_33070_34236[(1)] = (19));

} else {
var statearr_33071_34237 = state_33004__$1;
(statearr_33071_34237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (38))){
var inst_32983 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33072_34238 = state_33004__$1;
(statearr_33072_34238[(2)] = inst_32983);

(statearr_33072_34238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (30))){
var state_33004__$1 = state_33004;
var statearr_33073_34239 = state_33004__$1;
(statearr_33073_34239[(2)] = null);

(statearr_33073_34239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (10))){
var inst_32886 = (state_33004[(16)]);
var inst_32884 = (state_33004[(17)]);
var inst_32894 = cljs.core._nth(inst_32884,inst_32886);
var inst_32895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32894,(0),null);
var inst_32896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32894,(1),null);
var state_33004__$1 = (function (){var statearr_33074 = state_33004;
(statearr_33074[(24)] = inst_32895);

return statearr_33074;
})();
if(cljs.core.truth_(inst_32896)){
var statearr_33075_34240 = state_33004__$1;
(statearr_33075_34240[(1)] = (13));

} else {
var statearr_33076_34241 = state_33004__$1;
(statearr_33076_34241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (18))){
var inst_32931 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33077_34243 = state_33004__$1;
(statearr_33077_34243[(2)] = inst_32931);

(statearr_33077_34243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (42))){
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33004__$1,(45),dchan);
} else {
if((state_val_33005 === (37))){
var inst_32964 = (state_33004[(23)]);
var inst_32973 = (state_33004[(22)]);
var inst_32874 = (state_33004[(12)]);
var inst_32973__$1 = cljs.core.first(inst_32964);
var inst_32974 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32973__$1,inst_32874,done);
var state_33004__$1 = (function (){var statearr_33078 = state_33004;
(statearr_33078[(22)] = inst_32973__$1);

return statearr_33078;
})();
if(cljs.core.truth_(inst_32974)){
var statearr_33079_34245 = state_33004__$1;
(statearr_33079_34245[(1)] = (39));

} else {
var statearr_33080_34246 = state_33004__$1;
(statearr_33080_34246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (8))){
var inst_32885 = (state_33004[(13)]);
var inst_32886 = (state_33004[(16)]);
var inst_32888 = (inst_32886 < inst_32885);
var inst_32889 = inst_32888;
var state_33004__$1 = state_33004;
if(cljs.core.truth_(inst_32889)){
var statearr_33081_34247 = state_33004__$1;
(statearr_33081_34247[(1)] = (10));

} else {
var statearr_33082_34248 = state_33004__$1;
(statearr_33082_34248[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32298__auto__ = null;
var cljs$core$async$mult_$_state_machine__32298__auto____0 = (function (){
var statearr_33083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33083[(0)] = cljs$core$async$mult_$_state_machine__32298__auto__);

(statearr_33083[(1)] = (1));

return statearr_33083;
});
var cljs$core$async$mult_$_state_machine__32298__auto____1 = (function (state_33004){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33004);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33084){var ex__32301__auto__ = e33084;
var statearr_33085_34249 = state_33004;
(statearr_33085_34249[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33004[(4)]))){
var statearr_33086_34250 = state_33004;
(statearr_33086_34250[(1)] = cljs.core.first((state_33004[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34251 = state_33004;
state_33004 = G__34251;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32298__auto__ = function(state_33004){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32298__auto____1.call(this,state_33004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32298__auto____0;
cljs$core$async$mult_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32298__auto____1;
return cljs$core$async$mult_$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33087 = f__32391__auto__();
(statearr_33087[(6)] = c__32390__auto___34172);

return statearr_33087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33089 = arguments.length;
switch (G__33089) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34253 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34253(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34254 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34254(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34255 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34255(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34260 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34260(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34261 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34261(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34262 = arguments.length;
var i__4865__auto___34263 = (0);
while(true){
if((i__4865__auto___34263 < len__4864__auto___34262)){
args__4870__auto__.push((arguments[i__4865__auto___34263]));

var G__34264 = (i__4865__auto___34263 + (1));
i__4865__auto___34263 = G__34264;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33094){
var map__33095 = p__33094;
var map__33095__$1 = cljs.core.__destructure_map(map__33095);
var opts = map__33095__$1;
var statearr_33096_34265 = state;
(statearr_33096_34265[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33097_34266 = state;
(statearr_33097_34266[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33098_34267 = state;
(statearr_33098_34267[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33090){
var G__33091 = cljs.core.first(seq33090);
var seq33090__$1 = cljs.core.next(seq33090);
var G__33092 = cljs.core.first(seq33090__$1);
var seq33090__$2 = cljs.core.next(seq33090__$1);
var G__33093 = cljs.core.first(seq33090__$2);
var seq33090__$3 = cljs.core.next(seq33090__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33091,G__33092,G__33093,seq33090__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33099 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33100){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33100 = meta33100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33101,meta33100__$1){
var self__ = this;
var _33101__$1 = this;
return (new cljs.core.async.t_cljs$core$async33099(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33100__$1));
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33101){
var self__ = this;
var _33101__$1 = this;
return self__.meta33100;
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33100","meta33100",-1885946385,null)], null);
}));

(cljs.core.async.t_cljs$core$async33099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33099");

(cljs.core.async.t_cljs$core$async33099.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33099.
 */
cljs.core.async.__GT_t_cljs$core$async33099 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33099(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33100){
return (new cljs.core.async.t_cljs$core$async33099(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33100));
});

}

return (new cljs.core.async.t_cljs$core$async33099(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32390__auto___34268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33169){
var state_val_33170 = (state_33169[(1)]);
if((state_val_33170 === (7))){
var inst_33129 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
if(cljs.core.truth_(inst_33129)){
var statearr_33171_34269 = state_33169__$1;
(statearr_33171_34269[(1)] = (8));

} else {
var statearr_33172_34270 = state_33169__$1;
(statearr_33172_34270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (20))){
var inst_33122 = (state_33169[(7)]);
var state_33169__$1 = state_33169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33169__$1,(23),out,inst_33122);
} else {
if((state_val_33170 === (1))){
var inst_33105 = calc_state();
var inst_33106 = cljs.core.__destructure_map(inst_33105);
var inst_33107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33106,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33106,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33106,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33110 = inst_33105;
var state_33169__$1 = (function (){var statearr_33173 = state_33169;
(statearr_33173[(8)] = inst_33109);

(statearr_33173[(9)] = inst_33107);

(statearr_33173[(10)] = inst_33108);

(statearr_33173[(11)] = inst_33110);

return statearr_33173;
})();
var statearr_33174_34271 = state_33169__$1;
(statearr_33174_34271[(2)] = null);

(statearr_33174_34271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (24))){
var inst_33113 = (state_33169[(12)]);
var inst_33110 = inst_33113;
var state_33169__$1 = (function (){var statearr_33175 = state_33169;
(statearr_33175[(11)] = inst_33110);

return statearr_33175;
})();
var statearr_33176_34272 = state_33169__$1;
(statearr_33176_34272[(2)] = null);

(statearr_33176_34272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (4))){
var inst_33124 = (state_33169[(13)]);
var inst_33122 = (state_33169[(7)]);
var inst_33121 = (state_33169[(2)]);
var inst_33122__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33121,(0),null);
var inst_33123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33121,(1),null);
var inst_33124__$1 = (inst_33122__$1 == null);
var state_33169__$1 = (function (){var statearr_33177 = state_33169;
(statearr_33177[(13)] = inst_33124__$1);

(statearr_33177[(14)] = inst_33123);

(statearr_33177[(7)] = inst_33122__$1);

return statearr_33177;
})();
if(cljs.core.truth_(inst_33124__$1)){
var statearr_33178_34273 = state_33169__$1;
(statearr_33178_34273[(1)] = (5));

} else {
var statearr_33179_34274 = state_33169__$1;
(statearr_33179_34274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (15))){
var inst_33114 = (state_33169[(15)]);
var inst_33143 = (state_33169[(16)]);
var inst_33143__$1 = cljs.core.empty_QMARK_(inst_33114);
var state_33169__$1 = (function (){var statearr_33180 = state_33169;
(statearr_33180[(16)] = inst_33143__$1);

return statearr_33180;
})();
if(inst_33143__$1){
var statearr_33181_34279 = state_33169__$1;
(statearr_33181_34279[(1)] = (17));

} else {
var statearr_33182_34280 = state_33169__$1;
(statearr_33182_34280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (21))){
var inst_33113 = (state_33169[(12)]);
var inst_33110 = inst_33113;
var state_33169__$1 = (function (){var statearr_33183 = state_33169;
(statearr_33183[(11)] = inst_33110);

return statearr_33183;
})();
var statearr_33184_34282 = state_33169__$1;
(statearr_33184_34282[(2)] = null);

(statearr_33184_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (13))){
var inst_33136 = (state_33169[(2)]);
var inst_33137 = calc_state();
var inst_33110 = inst_33137;
var state_33169__$1 = (function (){var statearr_33185 = state_33169;
(statearr_33185[(17)] = inst_33136);

(statearr_33185[(11)] = inst_33110);

return statearr_33185;
})();
var statearr_33186_34283 = state_33169__$1;
(statearr_33186_34283[(2)] = null);

(statearr_33186_34283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (22))){
var inst_33163 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
var statearr_33187_34284 = state_33169__$1;
(statearr_33187_34284[(2)] = inst_33163);

(statearr_33187_34284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (6))){
var inst_33123 = (state_33169[(14)]);
var inst_33127 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33123,change);
var state_33169__$1 = state_33169;
var statearr_33188_34285 = state_33169__$1;
(statearr_33188_34285[(2)] = inst_33127);

(statearr_33188_34285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (25))){
var state_33169__$1 = state_33169;
var statearr_33189_34286 = state_33169__$1;
(statearr_33189_34286[(2)] = null);

(statearr_33189_34286[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (17))){
var inst_33115 = (state_33169[(18)]);
var inst_33123 = (state_33169[(14)]);
var inst_33145 = (inst_33115.cljs$core$IFn$_invoke$arity$1 ? inst_33115.cljs$core$IFn$_invoke$arity$1(inst_33123) : inst_33115.call(null,inst_33123));
var inst_33146 = cljs.core.not(inst_33145);
var state_33169__$1 = state_33169;
var statearr_33190_34288 = state_33169__$1;
(statearr_33190_34288[(2)] = inst_33146);

(statearr_33190_34288[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (3))){
var inst_33167 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33169__$1,inst_33167);
} else {
if((state_val_33170 === (12))){
var state_33169__$1 = state_33169;
var statearr_33191_34289 = state_33169__$1;
(statearr_33191_34289[(2)] = null);

(statearr_33191_34289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (2))){
var inst_33113 = (state_33169[(12)]);
var inst_33110 = (state_33169[(11)]);
var inst_33113__$1 = cljs.core.__destructure_map(inst_33110);
var inst_33114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33113__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33113__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33113__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33169__$1 = (function (){var statearr_33192 = state_33169;
(statearr_33192[(15)] = inst_33114);

(statearr_33192[(18)] = inst_33115);

(statearr_33192[(12)] = inst_33113__$1);

return statearr_33192;
})();
return cljs.core.async.ioc_alts_BANG_(state_33169__$1,(4),inst_33116);
} else {
if((state_val_33170 === (23))){
var inst_33154 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
if(cljs.core.truth_(inst_33154)){
var statearr_33193_34291 = state_33169__$1;
(statearr_33193_34291[(1)] = (24));

} else {
var statearr_33194_34292 = state_33169__$1;
(statearr_33194_34292[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (19))){
var inst_33149 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
var statearr_33195_34293 = state_33169__$1;
(statearr_33195_34293[(2)] = inst_33149);

(statearr_33195_34293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (11))){
var inst_33123 = (state_33169[(14)]);
var inst_33133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33123);
var state_33169__$1 = state_33169;
var statearr_33196_34297 = state_33169__$1;
(statearr_33196_34297[(2)] = inst_33133);

(statearr_33196_34297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (9))){
var inst_33114 = (state_33169[(15)]);
var inst_33140 = (state_33169[(19)]);
var inst_33123 = (state_33169[(14)]);
var inst_33140__$1 = (inst_33114.cljs$core$IFn$_invoke$arity$1 ? inst_33114.cljs$core$IFn$_invoke$arity$1(inst_33123) : inst_33114.call(null,inst_33123));
var state_33169__$1 = (function (){var statearr_33197 = state_33169;
(statearr_33197[(19)] = inst_33140__$1);

return statearr_33197;
})();
if(cljs.core.truth_(inst_33140__$1)){
var statearr_33198_34298 = state_33169__$1;
(statearr_33198_34298[(1)] = (14));

} else {
var statearr_33199_34299 = state_33169__$1;
(statearr_33199_34299[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (5))){
var inst_33124 = (state_33169[(13)]);
var state_33169__$1 = state_33169;
var statearr_33200_34300 = state_33169__$1;
(statearr_33200_34300[(2)] = inst_33124);

(statearr_33200_34300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (14))){
var inst_33140 = (state_33169[(19)]);
var state_33169__$1 = state_33169;
var statearr_33201_34301 = state_33169__$1;
(statearr_33201_34301[(2)] = inst_33140);

(statearr_33201_34301[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (26))){
var inst_33159 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
var statearr_33202_34302 = state_33169__$1;
(statearr_33202_34302[(2)] = inst_33159);

(statearr_33202_34302[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (16))){
var inst_33151 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
if(cljs.core.truth_(inst_33151)){
var statearr_33203_34303 = state_33169__$1;
(statearr_33203_34303[(1)] = (20));

} else {
var statearr_33204_34304 = state_33169__$1;
(statearr_33204_34304[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (10))){
var inst_33165 = (state_33169[(2)]);
var state_33169__$1 = state_33169;
var statearr_33205_34305 = state_33169__$1;
(statearr_33205_34305[(2)] = inst_33165);

(statearr_33205_34305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (18))){
var inst_33143 = (state_33169[(16)]);
var state_33169__$1 = state_33169;
var statearr_33206_34306 = state_33169__$1;
(statearr_33206_34306[(2)] = inst_33143);

(statearr_33206_34306[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33170 === (8))){
var inst_33122 = (state_33169[(7)]);
var inst_33131 = (inst_33122 == null);
var state_33169__$1 = state_33169;
if(cljs.core.truth_(inst_33131)){
var statearr_33207_34307 = state_33169__$1;
(statearr_33207_34307[(1)] = (11));

} else {
var statearr_33208_34308 = state_33169__$1;
(statearr_33208_34308[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32298__auto__ = null;
var cljs$core$async$mix_$_state_machine__32298__auto____0 = (function (){
var statearr_33209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33209[(0)] = cljs$core$async$mix_$_state_machine__32298__auto__);

(statearr_33209[(1)] = (1));

return statearr_33209;
});
var cljs$core$async$mix_$_state_machine__32298__auto____1 = (function (state_33169){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33169);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33210){var ex__32301__auto__ = e33210;
var statearr_33211_34309 = state_33169;
(statearr_33211_34309[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33169[(4)]))){
var statearr_33212_34310 = state_33169;
(statearr_33212_34310[(1)] = cljs.core.first((state_33169[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34311 = state_33169;
state_33169 = G__34311;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32298__auto__ = function(state_33169){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32298__auto____1.call(this,state_33169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32298__auto____0;
cljs$core$async$mix_$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32298__auto____1;
return cljs$core$async$mix_$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33213 = f__32391__auto__();
(statearr_33213[(6)] = c__32390__auto___34268);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34312 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34312(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34313 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34313(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34314 = (function() {
var G__34315 = null;
var G__34315__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34315__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34315 = function(p,v){
switch(arguments.length){
case 1:
return G__34315__1.call(this,p);
case 2:
return G__34315__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34315.cljs$core$IFn$_invoke$arity$1 = G__34315__1;
G__34315.cljs$core$IFn$_invoke$arity$2 = G__34315__2;
return G__34315;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33215 = arguments.length;
switch (G__33215) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34314(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34314(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33218 = arguments.length;
switch (G__33218) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33216_SHARP_){
if(cljs.core.truth_((p1__33216_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33216_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33216_SHARP_.call(null,topic)))){
return p1__33216_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33216_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33219 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33220){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33220 = meta33220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33221,meta33220__$1){
var self__ = this;
var _33221__$1 = this;
return (new cljs.core.async.t_cljs$core$async33219(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33220__$1));
}));

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33221){
var self__ = this;
var _33221__$1 = this;
return self__.meta33220;
}));

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33220","meta33220",595336880,null)], null);
}));

(cljs.core.async.t_cljs$core$async33219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33219");

(cljs.core.async.t_cljs$core$async33219.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33219.
 */
cljs.core.async.__GT_t_cljs$core$async33219 = (function cljs$core$async$__GT_t_cljs$core$async33219(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33220){
return (new cljs.core.async.t_cljs$core$async33219(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33220));
});

}

return (new cljs.core.async.t_cljs$core$async33219(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32390__auto___34323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33293){
var state_val_33294 = (state_33293[(1)]);
if((state_val_33294 === (7))){
var inst_33289 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33295_34328 = state_33293__$1;
(statearr_33295_34328[(2)] = inst_33289);

(statearr_33295_34328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (20))){
var state_33293__$1 = state_33293;
var statearr_33296_34329 = state_33293__$1;
(statearr_33296_34329[(2)] = null);

(statearr_33296_34329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (1))){
var state_33293__$1 = state_33293;
var statearr_33297_34331 = state_33293__$1;
(statearr_33297_34331[(2)] = null);

(statearr_33297_34331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (24))){
var inst_33272 = (state_33293[(7)]);
var inst_33281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33272);
var state_33293__$1 = state_33293;
var statearr_33298_34332 = state_33293__$1;
(statearr_33298_34332[(2)] = inst_33281);

(statearr_33298_34332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (4))){
var inst_33224 = (state_33293[(8)]);
var inst_33224__$1 = (state_33293[(2)]);
var inst_33225 = (inst_33224__$1 == null);
var state_33293__$1 = (function (){var statearr_33299 = state_33293;
(statearr_33299[(8)] = inst_33224__$1);

return statearr_33299;
})();
if(cljs.core.truth_(inst_33225)){
var statearr_33300_34333 = state_33293__$1;
(statearr_33300_34333[(1)] = (5));

} else {
var statearr_33301_34334 = state_33293__$1;
(statearr_33301_34334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (15))){
var inst_33266 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33302_34335 = state_33293__$1;
(statearr_33302_34335[(2)] = inst_33266);

(statearr_33302_34335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (21))){
var inst_33286 = (state_33293[(2)]);
var state_33293__$1 = (function (){var statearr_33303 = state_33293;
(statearr_33303[(9)] = inst_33286);

return statearr_33303;
})();
var statearr_33304_34336 = state_33293__$1;
(statearr_33304_34336[(2)] = null);

(statearr_33304_34336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (13))){
var inst_33248 = (state_33293[(10)]);
var inst_33250 = cljs.core.chunked_seq_QMARK_(inst_33248);
var state_33293__$1 = state_33293;
if(inst_33250){
var statearr_33305_34338 = state_33293__$1;
(statearr_33305_34338[(1)] = (16));

} else {
var statearr_33306_34339 = state_33293__$1;
(statearr_33306_34339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (22))){
var inst_33278 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
if(cljs.core.truth_(inst_33278)){
var statearr_33307_34340 = state_33293__$1;
(statearr_33307_34340[(1)] = (23));

} else {
var statearr_33308_34341 = state_33293__$1;
(statearr_33308_34341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (6))){
var inst_33274 = (state_33293[(11)]);
var inst_33224 = (state_33293[(8)]);
var inst_33272 = (state_33293[(7)]);
var inst_33272__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33224) : topic_fn.call(null,inst_33224));
var inst_33273 = cljs.core.deref(mults);
var inst_33274__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33273,inst_33272__$1);
var state_33293__$1 = (function (){var statearr_33309 = state_33293;
(statearr_33309[(11)] = inst_33274__$1);

(statearr_33309[(7)] = inst_33272__$1);

return statearr_33309;
})();
if(cljs.core.truth_(inst_33274__$1)){
var statearr_33310_34342 = state_33293__$1;
(statearr_33310_34342[(1)] = (19));

} else {
var statearr_33311_34343 = state_33293__$1;
(statearr_33311_34343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (25))){
var inst_33283 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33312_34344 = state_33293__$1;
(statearr_33312_34344[(2)] = inst_33283);

(statearr_33312_34344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (17))){
var inst_33248 = (state_33293[(10)]);
var inst_33257 = cljs.core.first(inst_33248);
var inst_33258 = cljs.core.async.muxch_STAR_(inst_33257);
var inst_33259 = cljs.core.async.close_BANG_(inst_33258);
var inst_33260 = cljs.core.next(inst_33248);
var inst_33234 = inst_33260;
var inst_33235 = null;
var inst_33236 = (0);
var inst_33237 = (0);
var state_33293__$1 = (function (){var statearr_33313 = state_33293;
(statearr_33313[(12)] = inst_33236);

(statearr_33313[(13)] = inst_33259);

(statearr_33313[(14)] = inst_33237);

(statearr_33313[(15)] = inst_33235);

(statearr_33313[(16)] = inst_33234);

return statearr_33313;
})();
var statearr_33314_34345 = state_33293__$1;
(statearr_33314_34345[(2)] = null);

(statearr_33314_34345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (3))){
var inst_33291 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33293__$1,inst_33291);
} else {
if((state_val_33294 === (12))){
var inst_33268 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33315_34346 = state_33293__$1;
(statearr_33315_34346[(2)] = inst_33268);

(statearr_33315_34346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (2))){
var state_33293__$1 = state_33293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33293__$1,(4),ch);
} else {
if((state_val_33294 === (23))){
var state_33293__$1 = state_33293;
var statearr_33316_34347 = state_33293__$1;
(statearr_33316_34347[(2)] = null);

(statearr_33316_34347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (19))){
var inst_33274 = (state_33293[(11)]);
var inst_33224 = (state_33293[(8)]);
var inst_33276 = cljs.core.async.muxch_STAR_(inst_33274);
var state_33293__$1 = state_33293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33293__$1,(22),inst_33276,inst_33224);
} else {
if((state_val_33294 === (11))){
var inst_33248 = (state_33293[(10)]);
var inst_33234 = (state_33293[(16)]);
var inst_33248__$1 = cljs.core.seq(inst_33234);
var state_33293__$1 = (function (){var statearr_33317 = state_33293;
(statearr_33317[(10)] = inst_33248__$1);

return statearr_33317;
})();
if(inst_33248__$1){
var statearr_33318_34348 = state_33293__$1;
(statearr_33318_34348[(1)] = (13));

} else {
var statearr_33319_34349 = state_33293__$1;
(statearr_33319_34349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (9))){
var inst_33270 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33320_34350 = state_33293__$1;
(statearr_33320_34350[(2)] = inst_33270);

(statearr_33320_34350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (5))){
var inst_33231 = cljs.core.deref(mults);
var inst_33232 = cljs.core.vals(inst_33231);
var inst_33233 = cljs.core.seq(inst_33232);
var inst_33234 = inst_33233;
var inst_33235 = null;
var inst_33236 = (0);
var inst_33237 = (0);
var state_33293__$1 = (function (){var statearr_33321 = state_33293;
(statearr_33321[(12)] = inst_33236);

(statearr_33321[(14)] = inst_33237);

(statearr_33321[(15)] = inst_33235);

(statearr_33321[(16)] = inst_33234);

return statearr_33321;
})();
var statearr_33322_34351 = state_33293__$1;
(statearr_33322_34351[(2)] = null);

(statearr_33322_34351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (14))){
var state_33293__$1 = state_33293;
var statearr_33326_34352 = state_33293__$1;
(statearr_33326_34352[(2)] = null);

(statearr_33326_34352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (16))){
var inst_33248 = (state_33293[(10)]);
var inst_33252 = cljs.core.chunk_first(inst_33248);
var inst_33253 = cljs.core.chunk_rest(inst_33248);
var inst_33254 = cljs.core.count(inst_33252);
var inst_33234 = inst_33253;
var inst_33235 = inst_33252;
var inst_33236 = inst_33254;
var inst_33237 = (0);
var state_33293__$1 = (function (){var statearr_33327 = state_33293;
(statearr_33327[(12)] = inst_33236);

(statearr_33327[(14)] = inst_33237);

(statearr_33327[(15)] = inst_33235);

(statearr_33327[(16)] = inst_33234);

return statearr_33327;
})();
var statearr_33328_34357 = state_33293__$1;
(statearr_33328_34357[(2)] = null);

(statearr_33328_34357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (10))){
var inst_33236 = (state_33293[(12)]);
var inst_33237 = (state_33293[(14)]);
var inst_33235 = (state_33293[(15)]);
var inst_33234 = (state_33293[(16)]);
var inst_33242 = cljs.core._nth(inst_33235,inst_33237);
var inst_33243 = cljs.core.async.muxch_STAR_(inst_33242);
var inst_33244 = cljs.core.async.close_BANG_(inst_33243);
var inst_33245 = (inst_33237 + (1));
var tmp33323 = inst_33236;
var tmp33324 = inst_33235;
var tmp33325 = inst_33234;
var inst_33234__$1 = tmp33325;
var inst_33235__$1 = tmp33324;
var inst_33236__$1 = tmp33323;
var inst_33237__$1 = inst_33245;
var state_33293__$1 = (function (){var statearr_33329 = state_33293;
(statearr_33329[(12)] = inst_33236__$1);

(statearr_33329[(14)] = inst_33237__$1);

(statearr_33329[(15)] = inst_33235__$1);

(statearr_33329[(16)] = inst_33234__$1);

(statearr_33329[(17)] = inst_33244);

return statearr_33329;
})();
var statearr_33330_34358 = state_33293__$1;
(statearr_33330_34358[(2)] = null);

(statearr_33330_34358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (18))){
var inst_33263 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33331_34359 = state_33293__$1;
(statearr_33331_34359[(2)] = inst_33263);

(statearr_33331_34359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (8))){
var inst_33236 = (state_33293[(12)]);
var inst_33237 = (state_33293[(14)]);
var inst_33239 = (inst_33237 < inst_33236);
var inst_33240 = inst_33239;
var state_33293__$1 = state_33293;
if(cljs.core.truth_(inst_33240)){
var statearr_33332_34360 = state_33293__$1;
(statearr_33332_34360[(1)] = (10));

} else {
var statearr_33333_34361 = state_33293__$1;
(statearr_33333_34361[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33334[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33334[(1)] = (1));

return statearr_33334;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33293){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33293);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33335){var ex__32301__auto__ = e33335;
var statearr_33336_34362 = state_33293;
(statearr_33336_34362[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33293[(4)]))){
var statearr_33337_34364 = state_33293;
(statearr_33337_34364[(1)] = cljs.core.first((state_33293[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34365 = state_33293;
state_33293 = G__34365;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33338 = f__32391__auto__();
(statearr_33338[(6)] = c__32390__auto___34323);

return statearr_33338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33340 = arguments.length;
switch (G__33340) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33342 = arguments.length;
switch (G__33342) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33344 = arguments.length;
switch (G__33344) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32390__auto___34372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33387){
var state_val_33388 = (state_33387[(1)]);
if((state_val_33388 === (7))){
var state_33387__$1 = state_33387;
var statearr_33389_34373 = state_33387__$1;
(statearr_33389_34373[(2)] = null);

(statearr_33389_34373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (1))){
var state_33387__$1 = state_33387;
var statearr_33390_34374 = state_33387__$1;
(statearr_33390_34374[(2)] = null);

(statearr_33390_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (4))){
var inst_33347 = (state_33387[(7)]);
var inst_33348 = (state_33387[(8)]);
var inst_33350 = (inst_33348 < inst_33347);
var state_33387__$1 = state_33387;
if(cljs.core.truth_(inst_33350)){
var statearr_33391_34376 = state_33387__$1;
(statearr_33391_34376[(1)] = (6));

} else {
var statearr_33392_34377 = state_33387__$1;
(statearr_33392_34377[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (15))){
var inst_33373 = (state_33387[(9)]);
var inst_33378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33373);
var state_33387__$1 = state_33387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33387__$1,(17),out,inst_33378);
} else {
if((state_val_33388 === (13))){
var inst_33373 = (state_33387[(9)]);
var inst_33373__$1 = (state_33387[(2)]);
var inst_33374 = cljs.core.some(cljs.core.nil_QMARK_,inst_33373__$1);
var state_33387__$1 = (function (){var statearr_33393 = state_33387;
(statearr_33393[(9)] = inst_33373__$1);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33374)){
var statearr_33394_34378 = state_33387__$1;
(statearr_33394_34378[(1)] = (14));

} else {
var statearr_33395_34379 = state_33387__$1;
(statearr_33395_34379[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (6))){
var state_33387__$1 = state_33387;
var statearr_33396_34380 = state_33387__$1;
(statearr_33396_34380[(2)] = null);

(statearr_33396_34380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (17))){
var inst_33380 = (state_33387[(2)]);
var state_33387__$1 = (function (){var statearr_33398 = state_33387;
(statearr_33398[(10)] = inst_33380);

return statearr_33398;
})();
var statearr_33399_34381 = state_33387__$1;
(statearr_33399_34381[(2)] = null);

(statearr_33399_34381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (3))){
var inst_33385 = (state_33387[(2)]);
var state_33387__$1 = state_33387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33387__$1,inst_33385);
} else {
if((state_val_33388 === (12))){
var _ = (function (){var statearr_33400 = state_33387;
(statearr_33400[(4)] = cljs.core.rest((state_33387[(4)])));

return statearr_33400;
})();
var state_33387__$1 = state_33387;
var ex33397 = (state_33387__$1[(2)]);
var statearr_33401_34382 = state_33387__$1;
(statearr_33401_34382[(5)] = ex33397);


if((ex33397 instanceof Object)){
var statearr_33402_34383 = state_33387__$1;
(statearr_33402_34383[(1)] = (11));

(statearr_33402_34383[(5)] = null);

} else {
throw ex33397;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (2))){
var inst_33346 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33347 = cnt;
var inst_33348 = (0);
var state_33387__$1 = (function (){var statearr_33403 = state_33387;
(statearr_33403[(7)] = inst_33347);

(statearr_33403[(11)] = inst_33346);

(statearr_33403[(8)] = inst_33348);

return statearr_33403;
})();
var statearr_33404_34384 = state_33387__$1;
(statearr_33404_34384[(2)] = null);

(statearr_33404_34384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (11))){
var inst_33352 = (state_33387[(2)]);
var inst_33353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33387__$1 = (function (){var statearr_33405 = state_33387;
(statearr_33405[(12)] = inst_33352);

return statearr_33405;
})();
var statearr_33406_34385 = state_33387__$1;
(statearr_33406_34385[(2)] = inst_33353);

(statearr_33406_34385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (9))){
var inst_33348 = (state_33387[(8)]);
var _ = (function (){var statearr_33407 = state_33387;
(statearr_33407[(4)] = cljs.core.cons((12),(state_33387[(4)])));

return statearr_33407;
})();
var inst_33359 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33348) : chs__$1.call(null,inst_33348));
var inst_33360 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33348) : done.call(null,inst_33348));
var inst_33361 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33359,inst_33360);
var ___$1 = (function (){var statearr_33408 = state_33387;
(statearr_33408[(4)] = cljs.core.rest((state_33387[(4)])));

return statearr_33408;
})();
var state_33387__$1 = state_33387;
var statearr_33409_34386 = state_33387__$1;
(statearr_33409_34386[(2)] = inst_33361);

(statearr_33409_34386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (5))){
var inst_33371 = (state_33387[(2)]);
var state_33387__$1 = (function (){var statearr_33410 = state_33387;
(statearr_33410[(13)] = inst_33371);

return statearr_33410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33387__$1,(13),dchan);
} else {
if((state_val_33388 === (14))){
var inst_33376 = cljs.core.async.close_BANG_(out);
var state_33387__$1 = state_33387;
var statearr_33411_34387 = state_33387__$1;
(statearr_33411_34387[(2)] = inst_33376);

(statearr_33411_34387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (16))){
var inst_33383 = (state_33387[(2)]);
var state_33387__$1 = state_33387;
var statearr_33412_34388 = state_33387__$1;
(statearr_33412_34388[(2)] = inst_33383);

(statearr_33412_34388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (10))){
var inst_33348 = (state_33387[(8)]);
var inst_33364 = (state_33387[(2)]);
var inst_33365 = (inst_33348 + (1));
var inst_33348__$1 = inst_33365;
var state_33387__$1 = (function (){var statearr_33413 = state_33387;
(statearr_33413[(14)] = inst_33364);

(statearr_33413[(8)] = inst_33348__$1);

return statearr_33413;
})();
var statearr_33414_34389 = state_33387__$1;
(statearr_33414_34389[(2)] = null);

(statearr_33414_34389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (8))){
var inst_33369 = (state_33387[(2)]);
var state_33387__$1 = state_33387;
var statearr_33415_34390 = state_33387__$1;
(statearr_33415_34390[(2)] = inst_33369);

(statearr_33415_34390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33416[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33416[(1)] = (1));

return statearr_33416;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33387){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33387);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33417){var ex__32301__auto__ = e33417;
var statearr_33418_34391 = state_33387;
(statearr_33418_34391[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33387[(4)]))){
var statearr_33419_34392 = state_33387;
(statearr_33419_34392[(1)] = cljs.core.first((state_33387[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34393 = state_33387;
state_33387 = G__34393;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33420 = f__32391__auto__();
(statearr_33420[(6)] = c__32390__auto___34372);

return statearr_33420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33423 = arguments.length;
switch (G__33423) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32390__auto___34395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33455){
var state_val_33456 = (state_33455[(1)]);
if((state_val_33456 === (7))){
var inst_33435 = (state_33455[(7)]);
var inst_33434 = (state_33455[(8)]);
var inst_33434__$1 = (state_33455[(2)]);
var inst_33435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33434__$1,(0),null);
var inst_33436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33434__$1,(1),null);
var inst_33437 = (inst_33435__$1 == null);
var state_33455__$1 = (function (){var statearr_33457 = state_33455;
(statearr_33457[(9)] = inst_33436);

(statearr_33457[(7)] = inst_33435__$1);

(statearr_33457[(8)] = inst_33434__$1);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33437)){
var statearr_33458_34396 = state_33455__$1;
(statearr_33458_34396[(1)] = (8));

} else {
var statearr_33459_34397 = state_33455__$1;
(statearr_33459_34397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (1))){
var inst_33424 = cljs.core.vec(chs);
var inst_33425 = inst_33424;
var state_33455__$1 = (function (){var statearr_33460 = state_33455;
(statearr_33460[(10)] = inst_33425);

return statearr_33460;
})();
var statearr_33461_34398 = state_33455__$1;
(statearr_33461_34398[(2)] = null);

(statearr_33461_34398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (4))){
var inst_33425 = (state_33455[(10)]);
var state_33455__$1 = state_33455;
return cljs.core.async.ioc_alts_BANG_(state_33455__$1,(7),inst_33425);
} else {
if((state_val_33456 === (6))){
var inst_33451 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33462_34399 = state_33455__$1;
(statearr_33462_34399[(2)] = inst_33451);

(statearr_33462_34399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (3))){
var inst_33453 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33455__$1,inst_33453);
} else {
if((state_val_33456 === (2))){
var inst_33425 = (state_33455[(10)]);
var inst_33427 = cljs.core.count(inst_33425);
var inst_33428 = (inst_33427 > (0));
var state_33455__$1 = state_33455;
if(cljs.core.truth_(inst_33428)){
var statearr_33464_34401 = state_33455__$1;
(statearr_33464_34401[(1)] = (4));

} else {
var statearr_33465_34405 = state_33455__$1;
(statearr_33465_34405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (11))){
var inst_33425 = (state_33455[(10)]);
var inst_33444 = (state_33455[(2)]);
var tmp33463 = inst_33425;
var inst_33425__$1 = tmp33463;
var state_33455__$1 = (function (){var statearr_33466 = state_33455;
(statearr_33466[(10)] = inst_33425__$1);

(statearr_33466[(11)] = inst_33444);

return statearr_33466;
})();
var statearr_33467_34406 = state_33455__$1;
(statearr_33467_34406[(2)] = null);

(statearr_33467_34406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (9))){
var inst_33435 = (state_33455[(7)]);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33455__$1,(11),out,inst_33435);
} else {
if((state_val_33456 === (5))){
var inst_33449 = cljs.core.async.close_BANG_(out);
var state_33455__$1 = state_33455;
var statearr_33468_34407 = state_33455__$1;
(statearr_33468_34407[(2)] = inst_33449);

(statearr_33468_34407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (10))){
var inst_33447 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33469_34409 = state_33455__$1;
(statearr_33469_34409[(2)] = inst_33447);

(statearr_33469_34409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (8))){
var inst_33436 = (state_33455[(9)]);
var inst_33425 = (state_33455[(10)]);
var inst_33435 = (state_33455[(7)]);
var inst_33434 = (state_33455[(8)]);
var inst_33439 = (function (){var cs = inst_33425;
var vec__33430 = inst_33434;
var v = inst_33435;
var c = inst_33436;
return (function (p1__33421_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33421_SHARP_);
});
})();
var inst_33440 = cljs.core.filterv(inst_33439,inst_33425);
var inst_33425__$1 = inst_33440;
var state_33455__$1 = (function (){var statearr_33470 = state_33455;
(statearr_33470[(10)] = inst_33425__$1);

return statearr_33470;
})();
var statearr_33471_34415 = state_33455__$1;
(statearr_33471_34415[(2)] = null);

(statearr_33471_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33472[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33472[(1)] = (1));

return statearr_33472;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33455){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33455);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33473){var ex__32301__auto__ = e33473;
var statearr_33474_34416 = state_33455;
(statearr_33474_34416[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33455[(4)]))){
var statearr_33475_34417 = state_33455;
(statearr_33475_34417[(1)] = cljs.core.first((state_33455[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34418 = state_33455;
state_33455 = G__34418;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33476 = f__32391__auto__();
(statearr_33476[(6)] = c__32390__auto___34395);

return statearr_33476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33478 = arguments.length;
switch (G__33478) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32390__auto___34420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33502){
var state_val_33503 = (state_33502[(1)]);
if((state_val_33503 === (7))){
var inst_33484 = (state_33502[(7)]);
var inst_33484__$1 = (state_33502[(2)]);
var inst_33485 = (inst_33484__$1 == null);
var inst_33486 = cljs.core.not(inst_33485);
var state_33502__$1 = (function (){var statearr_33504 = state_33502;
(statearr_33504[(7)] = inst_33484__$1);

return statearr_33504;
})();
if(inst_33486){
var statearr_33505_34421 = state_33502__$1;
(statearr_33505_34421[(1)] = (8));

} else {
var statearr_33506_34422 = state_33502__$1;
(statearr_33506_34422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (1))){
var inst_33479 = (0);
var state_33502__$1 = (function (){var statearr_33507 = state_33502;
(statearr_33507[(8)] = inst_33479);

return statearr_33507;
})();
var statearr_33508_34423 = state_33502__$1;
(statearr_33508_34423[(2)] = null);

(statearr_33508_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (4))){
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33502__$1,(7),ch);
} else {
if((state_val_33503 === (6))){
var inst_33497 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33509_34424 = state_33502__$1;
(statearr_33509_34424[(2)] = inst_33497);

(statearr_33509_34424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (3))){
var inst_33499 = (state_33502[(2)]);
var inst_33500 = cljs.core.async.close_BANG_(out);
var state_33502__$1 = (function (){var statearr_33510 = state_33502;
(statearr_33510[(9)] = inst_33499);

return statearr_33510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33502__$1,inst_33500);
} else {
if((state_val_33503 === (2))){
var inst_33479 = (state_33502[(8)]);
var inst_33481 = (inst_33479 < n);
var state_33502__$1 = state_33502;
if(cljs.core.truth_(inst_33481)){
var statearr_33511_34425 = state_33502__$1;
(statearr_33511_34425[(1)] = (4));

} else {
var statearr_33512_34426 = state_33502__$1;
(statearr_33512_34426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (11))){
var inst_33479 = (state_33502[(8)]);
var inst_33489 = (state_33502[(2)]);
var inst_33490 = (inst_33479 + (1));
var inst_33479__$1 = inst_33490;
var state_33502__$1 = (function (){var statearr_33513 = state_33502;
(statearr_33513[(8)] = inst_33479__$1);

(statearr_33513[(10)] = inst_33489);

return statearr_33513;
})();
var statearr_33514_34427 = state_33502__$1;
(statearr_33514_34427[(2)] = null);

(statearr_33514_34427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (9))){
var state_33502__$1 = state_33502;
var statearr_33515_34428 = state_33502__$1;
(statearr_33515_34428[(2)] = null);

(statearr_33515_34428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (5))){
var state_33502__$1 = state_33502;
var statearr_33516_34429 = state_33502__$1;
(statearr_33516_34429[(2)] = null);

(statearr_33516_34429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (10))){
var inst_33494 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33517_34430 = state_33502__$1;
(statearr_33517_34430[(2)] = inst_33494);

(statearr_33517_34430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (8))){
var inst_33484 = (state_33502[(7)]);
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33502__$1,(11),out,inst_33484);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33518[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33518[(1)] = (1));

return statearr_33518;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33502){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33502);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33519){var ex__32301__auto__ = e33519;
var statearr_33520_34431 = state_33502;
(statearr_33520_34431[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33502[(4)]))){
var statearr_33521_34432 = state_33502;
(statearr_33521_34432[(1)] = cljs.core.first((state_33502[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34433 = state_33502;
state_33502 = G__34433;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33522 = f__32391__auto__();
(statearr_33522[(6)] = c__32390__auto___34420);

return statearr_33522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33524 = (function (f,ch,meta33525){
this.f = f;
this.ch = ch;
this.meta33525 = meta33525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33526,meta33525__$1){
var self__ = this;
var _33526__$1 = this;
return (new cljs.core.async.t_cljs$core$async33524(self__.f,self__.ch,meta33525__$1));
}));

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33526){
var self__ = this;
var _33526__$1 = this;
return self__.meta33525;
}));

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33527 = (function (f,ch,meta33525,_,fn1,meta33528){
this.f = f;
this.ch = ch;
this.meta33525 = meta33525;
this._ = _;
this.fn1 = fn1;
this.meta33528 = meta33528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33529,meta33528__$1){
var self__ = this;
var _33529__$1 = this;
return (new cljs.core.async.t_cljs$core$async33527(self__.f,self__.ch,self__.meta33525,self__._,self__.fn1,meta33528__$1));
}));

(cljs.core.async.t_cljs$core$async33527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33529){
var self__ = this;
var _33529__$1 = this;
return self__.meta33528;
}));

(cljs.core.async.t_cljs$core$async33527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33523_SHARP_){
var G__33530 = (((p1__33523_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33523_SHARP_) : self__.f.call(null,p1__33523_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33530) : f1.call(null,G__33530));
});
}));

(cljs.core.async.t_cljs$core$async33527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33525","meta33525",2016074115,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33524","cljs.core.async/t_cljs$core$async33524",-968426316,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33528","meta33528",-252017492,null)], null);
}));

(cljs.core.async.t_cljs$core$async33527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33527");

(cljs.core.async.t_cljs$core$async33527.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33527.
 */
cljs.core.async.__GT_t_cljs$core$async33527 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33527(f__$1,ch__$1,meta33525__$1,___$2,fn1__$1,meta33528){
return (new cljs.core.async.t_cljs$core$async33527(f__$1,ch__$1,meta33525__$1,___$2,fn1__$1,meta33528));
});

}

return (new cljs.core.async.t_cljs$core$async33527(self__.f,self__.ch,self__.meta33525,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33531 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33531) : self__.f.call(null,G__33531));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33525","meta33525",2016074115,null)], null);
}));

(cljs.core.async.t_cljs$core$async33524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33524");

(cljs.core.async.t_cljs$core$async33524.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33524.
 */
cljs.core.async.__GT_t_cljs$core$async33524 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33524(f__$1,ch__$1,meta33525){
return (new cljs.core.async.t_cljs$core$async33524(f__$1,ch__$1,meta33525));
});

}

return (new cljs.core.async.t_cljs$core$async33524(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33532 = (function (f,ch,meta33533){
this.f = f;
this.ch = ch;
this.meta33533 = meta33533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33534,meta33533__$1){
var self__ = this;
var _33534__$1 = this;
return (new cljs.core.async.t_cljs$core$async33532(self__.f,self__.ch,meta33533__$1));
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33534){
var self__ = this;
var _33534__$1 = this;
return self__.meta33533;
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33533","meta33533",1693187954,null)], null);
}));

(cljs.core.async.t_cljs$core$async33532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33532");

(cljs.core.async.t_cljs$core$async33532.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33532.
 */
cljs.core.async.__GT_t_cljs$core$async33532 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33532(f__$1,ch__$1,meta33533){
return (new cljs.core.async.t_cljs$core$async33532(f__$1,ch__$1,meta33533));
});

}

return (new cljs.core.async.t_cljs$core$async33532(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33535 = (function (p,ch,meta33536){
this.p = p;
this.ch = ch;
this.meta33536 = meta33536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33537,meta33536__$1){
var self__ = this;
var _33537__$1 = this;
return (new cljs.core.async.t_cljs$core$async33535(self__.p,self__.ch,meta33536__$1));
}));

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33537){
var self__ = this;
var _33537__$1 = this;
return self__.meta33536;
}));

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33536","meta33536",1328999137,null)], null);
}));

(cljs.core.async.t_cljs$core$async33535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33535");

(cljs.core.async.t_cljs$core$async33535.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33535.
 */
cljs.core.async.__GT_t_cljs$core$async33535 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33535(p__$1,ch__$1,meta33536){
return (new cljs.core.async.t_cljs$core$async33535(p__$1,ch__$1,meta33536));
});

}

return (new cljs.core.async.t_cljs$core$async33535(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33539 = arguments.length;
switch (G__33539) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32390__auto___34435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33560){
var state_val_33561 = (state_33560[(1)]);
if((state_val_33561 === (7))){
var inst_33556 = (state_33560[(2)]);
var state_33560__$1 = state_33560;
var statearr_33562_34436 = state_33560__$1;
(statearr_33562_34436[(2)] = inst_33556);

(statearr_33562_34436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (1))){
var state_33560__$1 = state_33560;
var statearr_33563_34437 = state_33560__$1;
(statearr_33563_34437[(2)] = null);

(statearr_33563_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (4))){
var inst_33542 = (state_33560[(7)]);
var inst_33542__$1 = (state_33560[(2)]);
var inst_33543 = (inst_33542__$1 == null);
var state_33560__$1 = (function (){var statearr_33564 = state_33560;
(statearr_33564[(7)] = inst_33542__$1);

return statearr_33564;
})();
if(cljs.core.truth_(inst_33543)){
var statearr_33565_34438 = state_33560__$1;
(statearr_33565_34438[(1)] = (5));

} else {
var statearr_33566_34439 = state_33560__$1;
(statearr_33566_34439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (6))){
var inst_33542 = (state_33560[(7)]);
var inst_33547 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33542) : p.call(null,inst_33542));
var state_33560__$1 = state_33560;
if(cljs.core.truth_(inst_33547)){
var statearr_33567_34440 = state_33560__$1;
(statearr_33567_34440[(1)] = (8));

} else {
var statearr_33568_34441 = state_33560__$1;
(statearr_33568_34441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (3))){
var inst_33558 = (state_33560[(2)]);
var state_33560__$1 = state_33560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33560__$1,inst_33558);
} else {
if((state_val_33561 === (2))){
var state_33560__$1 = state_33560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33560__$1,(4),ch);
} else {
if((state_val_33561 === (11))){
var inst_33550 = (state_33560[(2)]);
var state_33560__$1 = state_33560;
var statearr_33569_34442 = state_33560__$1;
(statearr_33569_34442[(2)] = inst_33550);

(statearr_33569_34442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (9))){
var state_33560__$1 = state_33560;
var statearr_33570_34443 = state_33560__$1;
(statearr_33570_34443[(2)] = null);

(statearr_33570_34443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (5))){
var inst_33545 = cljs.core.async.close_BANG_(out);
var state_33560__$1 = state_33560;
var statearr_33571_34444 = state_33560__$1;
(statearr_33571_34444[(2)] = inst_33545);

(statearr_33571_34444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (10))){
var inst_33553 = (state_33560[(2)]);
var state_33560__$1 = (function (){var statearr_33572 = state_33560;
(statearr_33572[(8)] = inst_33553);

return statearr_33572;
})();
var statearr_33573_34445 = state_33560__$1;
(statearr_33573_34445[(2)] = null);

(statearr_33573_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (8))){
var inst_33542 = (state_33560[(7)]);
var state_33560__$1 = state_33560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33560__$1,(11),out,inst_33542);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33574 = [null,null,null,null,null,null,null,null,null];
(statearr_33574[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33574[(1)] = (1));

return statearr_33574;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33560){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33560);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33575){var ex__32301__auto__ = e33575;
var statearr_33576_34446 = state_33560;
(statearr_33576_34446[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33560[(4)]))){
var statearr_33577_34447 = state_33560;
(statearr_33577_34447[(1)] = cljs.core.first((state_33560[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34448 = state_33560;
state_33560 = G__34448;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33578 = f__32391__auto__();
(statearr_33578[(6)] = c__32390__auto___34435);

return statearr_33578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33580 = arguments.length;
switch (G__33580) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33642){
var state_val_33643 = (state_33642[(1)]);
if((state_val_33643 === (7))){
var inst_33638 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33644_34450 = state_33642__$1;
(statearr_33644_34450[(2)] = inst_33638);

(statearr_33644_34450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (20))){
var inst_33608 = (state_33642[(7)]);
var inst_33619 = (state_33642[(2)]);
var inst_33620 = cljs.core.next(inst_33608);
var inst_33594 = inst_33620;
var inst_33595 = null;
var inst_33596 = (0);
var inst_33597 = (0);
var state_33642__$1 = (function (){var statearr_33645 = state_33642;
(statearr_33645[(8)] = inst_33619);

(statearr_33645[(9)] = inst_33596);

(statearr_33645[(10)] = inst_33595);

(statearr_33645[(11)] = inst_33594);

(statearr_33645[(12)] = inst_33597);

return statearr_33645;
})();
var statearr_33646_34451 = state_33642__$1;
(statearr_33646_34451[(2)] = null);

(statearr_33646_34451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (1))){
var state_33642__$1 = state_33642;
var statearr_33647_34452 = state_33642__$1;
(statearr_33647_34452[(2)] = null);

(statearr_33647_34452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (4))){
var inst_33583 = (state_33642[(13)]);
var inst_33583__$1 = (state_33642[(2)]);
var inst_33584 = (inst_33583__$1 == null);
var state_33642__$1 = (function (){var statearr_33648 = state_33642;
(statearr_33648[(13)] = inst_33583__$1);

return statearr_33648;
})();
if(cljs.core.truth_(inst_33584)){
var statearr_33649_34453 = state_33642__$1;
(statearr_33649_34453[(1)] = (5));

} else {
var statearr_33650_34454 = state_33642__$1;
(statearr_33650_34454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (15))){
var state_33642__$1 = state_33642;
var statearr_33654_34455 = state_33642__$1;
(statearr_33654_34455[(2)] = null);

(statearr_33654_34455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (21))){
var state_33642__$1 = state_33642;
var statearr_33655_34456 = state_33642__$1;
(statearr_33655_34456[(2)] = null);

(statearr_33655_34456[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (13))){
var inst_33596 = (state_33642[(9)]);
var inst_33595 = (state_33642[(10)]);
var inst_33594 = (state_33642[(11)]);
var inst_33597 = (state_33642[(12)]);
var inst_33604 = (state_33642[(2)]);
var inst_33605 = (inst_33597 + (1));
var tmp33651 = inst_33596;
var tmp33652 = inst_33595;
var tmp33653 = inst_33594;
var inst_33594__$1 = tmp33653;
var inst_33595__$1 = tmp33652;
var inst_33596__$1 = tmp33651;
var inst_33597__$1 = inst_33605;
var state_33642__$1 = (function (){var statearr_33656 = state_33642;
(statearr_33656[(9)] = inst_33596__$1);

(statearr_33656[(10)] = inst_33595__$1);

(statearr_33656[(11)] = inst_33594__$1);

(statearr_33656[(14)] = inst_33604);

(statearr_33656[(12)] = inst_33597__$1);

return statearr_33656;
})();
var statearr_33657_34457 = state_33642__$1;
(statearr_33657_34457[(2)] = null);

(statearr_33657_34457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (22))){
var state_33642__$1 = state_33642;
var statearr_33658_34487 = state_33642__$1;
(statearr_33658_34487[(2)] = null);

(statearr_33658_34487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (6))){
var inst_33583 = (state_33642[(13)]);
var inst_33592 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33583) : f.call(null,inst_33583));
var inst_33593 = cljs.core.seq(inst_33592);
var inst_33594 = inst_33593;
var inst_33595 = null;
var inst_33596 = (0);
var inst_33597 = (0);
var state_33642__$1 = (function (){var statearr_33659 = state_33642;
(statearr_33659[(9)] = inst_33596);

(statearr_33659[(10)] = inst_33595);

(statearr_33659[(11)] = inst_33594);

(statearr_33659[(12)] = inst_33597);

return statearr_33659;
})();
var statearr_33660_34494 = state_33642__$1;
(statearr_33660_34494[(2)] = null);

(statearr_33660_34494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (17))){
var inst_33608 = (state_33642[(7)]);
var inst_33612 = cljs.core.chunk_first(inst_33608);
var inst_33613 = cljs.core.chunk_rest(inst_33608);
var inst_33614 = cljs.core.count(inst_33612);
var inst_33594 = inst_33613;
var inst_33595 = inst_33612;
var inst_33596 = inst_33614;
var inst_33597 = (0);
var state_33642__$1 = (function (){var statearr_33661 = state_33642;
(statearr_33661[(9)] = inst_33596);

(statearr_33661[(10)] = inst_33595);

(statearr_33661[(11)] = inst_33594);

(statearr_33661[(12)] = inst_33597);

return statearr_33661;
})();
var statearr_33662_34495 = state_33642__$1;
(statearr_33662_34495[(2)] = null);

(statearr_33662_34495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (3))){
var inst_33640 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33642__$1,inst_33640);
} else {
if((state_val_33643 === (12))){
var inst_33628 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33663_34496 = state_33642__$1;
(statearr_33663_34496[(2)] = inst_33628);

(statearr_33663_34496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (2))){
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33642__$1,(4),in$);
} else {
if((state_val_33643 === (23))){
var inst_33636 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33664_34497 = state_33642__$1;
(statearr_33664_34497[(2)] = inst_33636);

(statearr_33664_34497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (19))){
var inst_33623 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33665_34498 = state_33642__$1;
(statearr_33665_34498[(2)] = inst_33623);

(statearr_33665_34498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (11))){
var inst_33594 = (state_33642[(11)]);
var inst_33608 = (state_33642[(7)]);
var inst_33608__$1 = cljs.core.seq(inst_33594);
var state_33642__$1 = (function (){var statearr_33666 = state_33642;
(statearr_33666[(7)] = inst_33608__$1);

return statearr_33666;
})();
if(inst_33608__$1){
var statearr_33667_34499 = state_33642__$1;
(statearr_33667_34499[(1)] = (14));

} else {
var statearr_33668_34500 = state_33642__$1;
(statearr_33668_34500[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (9))){
var inst_33630 = (state_33642[(2)]);
var inst_33631 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33642__$1 = (function (){var statearr_33669 = state_33642;
(statearr_33669[(15)] = inst_33630);

return statearr_33669;
})();
if(cljs.core.truth_(inst_33631)){
var statearr_33670_34501 = state_33642__$1;
(statearr_33670_34501[(1)] = (21));

} else {
var statearr_33671_34502 = state_33642__$1;
(statearr_33671_34502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (5))){
var inst_33586 = cljs.core.async.close_BANG_(out);
var state_33642__$1 = state_33642;
var statearr_33672_34503 = state_33642__$1;
(statearr_33672_34503[(2)] = inst_33586);

(statearr_33672_34503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (14))){
var inst_33608 = (state_33642[(7)]);
var inst_33610 = cljs.core.chunked_seq_QMARK_(inst_33608);
var state_33642__$1 = state_33642;
if(inst_33610){
var statearr_33673_34504 = state_33642__$1;
(statearr_33673_34504[(1)] = (17));

} else {
var statearr_33674_34505 = state_33642__$1;
(statearr_33674_34505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (16))){
var inst_33626 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33675_34506 = state_33642__$1;
(statearr_33675_34506[(2)] = inst_33626);

(statearr_33675_34506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (10))){
var inst_33595 = (state_33642[(10)]);
var inst_33597 = (state_33642[(12)]);
var inst_33602 = cljs.core._nth(inst_33595,inst_33597);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33642__$1,(13),out,inst_33602);
} else {
if((state_val_33643 === (18))){
var inst_33608 = (state_33642[(7)]);
var inst_33617 = cljs.core.first(inst_33608);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33642__$1,(20),out,inst_33617);
} else {
if((state_val_33643 === (8))){
var inst_33596 = (state_33642[(9)]);
var inst_33597 = (state_33642[(12)]);
var inst_33599 = (inst_33597 < inst_33596);
var inst_33600 = inst_33599;
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33600)){
var statearr_33676_34513 = state_33642__$1;
(statearr_33676_34513[(1)] = (10));

} else {
var statearr_33677_34514 = state_33642__$1;
(statearr_33677_34514[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32298__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32298__auto____0 = (function (){
var statearr_33678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33678[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32298__auto__);

(statearr_33678[(1)] = (1));

return statearr_33678;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32298__auto____1 = (function (state_33642){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33642);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33679){var ex__32301__auto__ = e33679;
var statearr_33680_34521 = state_33642;
(statearr_33680_34521[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33642[(4)]))){
var statearr_33681_34522 = state_33642;
(statearr_33681_34522[(1)] = cljs.core.first((state_33642[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34523 = state_33642;
state_33642 = G__34523;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32298__auto__ = function(state_33642){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32298__auto____1.call(this,state_33642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32298__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32298__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33682 = f__32391__auto__();
(statearr_33682[(6)] = c__32390__auto__);

return statearr_33682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));

return c__32390__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33684 = arguments.length;
switch (G__33684) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33686 = arguments.length;
switch (G__33686) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33688 = arguments.length;
switch (G__33688) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32390__auto___34533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33712){
var state_val_33713 = (state_33712[(1)]);
if((state_val_33713 === (7))){
var inst_33707 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
var statearr_33714_34534 = state_33712__$1;
(statearr_33714_34534[(2)] = inst_33707);

(statearr_33714_34534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (1))){
var inst_33689 = null;
var state_33712__$1 = (function (){var statearr_33715 = state_33712;
(statearr_33715[(7)] = inst_33689);

return statearr_33715;
})();
var statearr_33716_34535 = state_33712__$1;
(statearr_33716_34535[(2)] = null);

(statearr_33716_34535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (4))){
var inst_33692 = (state_33712[(8)]);
var inst_33692__$1 = (state_33712[(2)]);
var inst_33693 = (inst_33692__$1 == null);
var inst_33694 = cljs.core.not(inst_33693);
var state_33712__$1 = (function (){var statearr_33717 = state_33712;
(statearr_33717[(8)] = inst_33692__$1);

return statearr_33717;
})();
if(inst_33694){
var statearr_33718_34536 = state_33712__$1;
(statearr_33718_34536[(1)] = (5));

} else {
var statearr_33719_34537 = state_33712__$1;
(statearr_33719_34537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (6))){
var state_33712__$1 = state_33712;
var statearr_33720_34538 = state_33712__$1;
(statearr_33720_34538[(2)] = null);

(statearr_33720_34538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (3))){
var inst_33709 = (state_33712[(2)]);
var inst_33710 = cljs.core.async.close_BANG_(out);
var state_33712__$1 = (function (){var statearr_33721 = state_33712;
(statearr_33721[(9)] = inst_33709);

return statearr_33721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33712__$1,inst_33710);
} else {
if((state_val_33713 === (2))){
var state_33712__$1 = state_33712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33712__$1,(4),ch);
} else {
if((state_val_33713 === (11))){
var inst_33692 = (state_33712[(8)]);
var inst_33701 = (state_33712[(2)]);
var inst_33689 = inst_33692;
var state_33712__$1 = (function (){var statearr_33722 = state_33712;
(statearr_33722[(7)] = inst_33689);

(statearr_33722[(10)] = inst_33701);

return statearr_33722;
})();
var statearr_33723_34539 = state_33712__$1;
(statearr_33723_34539[(2)] = null);

(statearr_33723_34539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (9))){
var inst_33692 = (state_33712[(8)]);
var state_33712__$1 = state_33712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33712__$1,(11),out,inst_33692);
} else {
if((state_val_33713 === (5))){
var inst_33689 = (state_33712[(7)]);
var inst_33692 = (state_33712[(8)]);
var inst_33696 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33692,inst_33689);
var state_33712__$1 = state_33712;
if(inst_33696){
var statearr_33725_34540 = state_33712__$1;
(statearr_33725_34540[(1)] = (8));

} else {
var statearr_33726_34541 = state_33712__$1;
(statearr_33726_34541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (10))){
var inst_33704 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
var statearr_33727_34542 = state_33712__$1;
(statearr_33727_34542[(2)] = inst_33704);

(statearr_33727_34542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (8))){
var inst_33689 = (state_33712[(7)]);
var tmp33724 = inst_33689;
var inst_33689__$1 = tmp33724;
var state_33712__$1 = (function (){var statearr_33728 = state_33712;
(statearr_33728[(7)] = inst_33689__$1);

return statearr_33728;
})();
var statearr_33729_34543 = state_33712__$1;
(statearr_33729_34543[(2)] = null);

(statearr_33729_34543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33730[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33730[(1)] = (1));

return statearr_33730;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33712){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33712);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33731){var ex__32301__auto__ = e33731;
var statearr_33732_34544 = state_33712;
(statearr_33732_34544[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33712[(4)]))){
var statearr_33733_34545 = state_33712;
(statearr_33733_34545[(1)] = cljs.core.first((state_33712[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34546 = state_33712;
state_33712 = G__34546;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33734 = f__32391__auto__();
(statearr_33734[(6)] = c__32390__auto___34533);

return statearr_33734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33736 = arguments.length;
switch (G__33736) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32390__auto___34548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33774){
var state_val_33775 = (state_33774[(1)]);
if((state_val_33775 === (7))){
var inst_33770 = (state_33774[(2)]);
var state_33774__$1 = state_33774;
var statearr_33776_34549 = state_33774__$1;
(statearr_33776_34549[(2)] = inst_33770);

(statearr_33776_34549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (1))){
var inst_33737 = (new Array(n));
var inst_33738 = inst_33737;
var inst_33739 = (0);
var state_33774__$1 = (function (){var statearr_33777 = state_33774;
(statearr_33777[(7)] = inst_33738);

(statearr_33777[(8)] = inst_33739);

return statearr_33777;
})();
var statearr_33778_34550 = state_33774__$1;
(statearr_33778_34550[(2)] = null);

(statearr_33778_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (4))){
var inst_33742 = (state_33774[(9)]);
var inst_33742__$1 = (state_33774[(2)]);
var inst_33743 = (inst_33742__$1 == null);
var inst_33744 = cljs.core.not(inst_33743);
var state_33774__$1 = (function (){var statearr_33779 = state_33774;
(statearr_33779[(9)] = inst_33742__$1);

return statearr_33779;
})();
if(inst_33744){
var statearr_33780_34551 = state_33774__$1;
(statearr_33780_34551[(1)] = (5));

} else {
var statearr_33781_34552 = state_33774__$1;
(statearr_33781_34552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (15))){
var inst_33764 = (state_33774[(2)]);
var state_33774__$1 = state_33774;
var statearr_33782_34555 = state_33774__$1;
(statearr_33782_34555[(2)] = inst_33764);

(statearr_33782_34555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (13))){
var state_33774__$1 = state_33774;
var statearr_33783_34556 = state_33774__$1;
(statearr_33783_34556[(2)] = null);

(statearr_33783_34556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (6))){
var inst_33739 = (state_33774[(8)]);
var inst_33760 = (inst_33739 > (0));
var state_33774__$1 = state_33774;
if(cljs.core.truth_(inst_33760)){
var statearr_33784_34557 = state_33774__$1;
(statearr_33784_34557[(1)] = (12));

} else {
var statearr_33785_34558 = state_33774__$1;
(statearr_33785_34558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (3))){
var inst_33772 = (state_33774[(2)]);
var state_33774__$1 = state_33774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33774__$1,inst_33772);
} else {
if((state_val_33775 === (12))){
var inst_33738 = (state_33774[(7)]);
var inst_33762 = cljs.core.vec(inst_33738);
var state_33774__$1 = state_33774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33774__$1,(15),out,inst_33762);
} else {
if((state_val_33775 === (2))){
var state_33774__$1 = state_33774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33774__$1,(4),ch);
} else {
if((state_val_33775 === (11))){
var inst_33754 = (state_33774[(2)]);
var inst_33755 = (new Array(n));
var inst_33738 = inst_33755;
var inst_33739 = (0);
var state_33774__$1 = (function (){var statearr_33786 = state_33774;
(statearr_33786[(7)] = inst_33738);

(statearr_33786[(10)] = inst_33754);

(statearr_33786[(8)] = inst_33739);

return statearr_33786;
})();
var statearr_33787_34559 = state_33774__$1;
(statearr_33787_34559[(2)] = null);

(statearr_33787_34559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (9))){
var inst_33738 = (state_33774[(7)]);
var inst_33752 = cljs.core.vec(inst_33738);
var state_33774__$1 = state_33774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33774__$1,(11),out,inst_33752);
} else {
if((state_val_33775 === (5))){
var inst_33738 = (state_33774[(7)]);
var inst_33742 = (state_33774[(9)]);
var inst_33739 = (state_33774[(8)]);
var inst_33747 = (state_33774[(11)]);
var inst_33746 = (inst_33738[inst_33739] = inst_33742);
var inst_33747__$1 = (inst_33739 + (1));
var inst_33748 = (inst_33747__$1 < n);
var state_33774__$1 = (function (){var statearr_33788 = state_33774;
(statearr_33788[(12)] = inst_33746);

(statearr_33788[(11)] = inst_33747__$1);

return statearr_33788;
})();
if(cljs.core.truth_(inst_33748)){
var statearr_33789_34560 = state_33774__$1;
(statearr_33789_34560[(1)] = (8));

} else {
var statearr_33790_34562 = state_33774__$1;
(statearr_33790_34562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (14))){
var inst_33767 = (state_33774[(2)]);
var inst_33768 = cljs.core.async.close_BANG_(out);
var state_33774__$1 = (function (){var statearr_33792 = state_33774;
(statearr_33792[(13)] = inst_33767);

return statearr_33792;
})();
var statearr_33793_34563 = state_33774__$1;
(statearr_33793_34563[(2)] = inst_33768);

(statearr_33793_34563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (10))){
var inst_33758 = (state_33774[(2)]);
var state_33774__$1 = state_33774;
var statearr_33794_34565 = state_33774__$1;
(statearr_33794_34565[(2)] = inst_33758);

(statearr_33794_34565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33775 === (8))){
var inst_33738 = (state_33774[(7)]);
var inst_33747 = (state_33774[(11)]);
var tmp33791 = inst_33738;
var inst_33738__$1 = tmp33791;
var inst_33739 = inst_33747;
var state_33774__$1 = (function (){var statearr_33795 = state_33774;
(statearr_33795[(7)] = inst_33738__$1);

(statearr_33795[(8)] = inst_33739);

return statearr_33795;
})();
var statearr_33796_34566 = state_33774__$1;
(statearr_33796_34566[(2)] = null);

(statearr_33796_34566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33797[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33797[(1)] = (1));

return statearr_33797;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33774){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33774);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33798){var ex__32301__auto__ = e33798;
var statearr_33799_34567 = state_33774;
(statearr_33799_34567[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33774[(4)]))){
var statearr_33800_34568 = state_33774;
(statearr_33800_34568[(1)] = cljs.core.first((state_33774[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34569 = state_33774;
state_33774 = G__34569;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33801 = f__32391__auto__();
(statearr_33801[(6)] = c__32390__auto___34548);

return statearr_33801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33803 = arguments.length;
switch (G__33803) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32390__auto___34577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32391__auto__ = (function (){var switch__32297__auto__ = (function (state_33848){
var state_val_33849 = (state_33848[(1)]);
if((state_val_33849 === (7))){
var inst_33844 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33850_34578 = state_33848__$1;
(statearr_33850_34578[(2)] = inst_33844);

(statearr_33850_34578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (1))){
var inst_33804 = [];
var inst_33805 = inst_33804;
var inst_33806 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33848__$1 = (function (){var statearr_33851 = state_33848;
(statearr_33851[(7)] = inst_33806);

(statearr_33851[(8)] = inst_33805);

return statearr_33851;
})();
var statearr_33852_34579 = state_33848__$1;
(statearr_33852_34579[(2)] = null);

(statearr_33852_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (4))){
var inst_33809 = (state_33848[(9)]);
var inst_33809__$1 = (state_33848[(2)]);
var inst_33810 = (inst_33809__$1 == null);
var inst_33811 = cljs.core.not(inst_33810);
var state_33848__$1 = (function (){var statearr_33853 = state_33848;
(statearr_33853[(9)] = inst_33809__$1);

return statearr_33853;
})();
if(inst_33811){
var statearr_33854_34581 = state_33848__$1;
(statearr_33854_34581[(1)] = (5));

} else {
var statearr_33855_34582 = state_33848__$1;
(statearr_33855_34582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (15))){
var inst_33805 = (state_33848[(8)]);
var inst_33836 = cljs.core.vec(inst_33805);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33848__$1,(18),out,inst_33836);
} else {
if((state_val_33849 === (13))){
var inst_33831 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33856_34584 = state_33848__$1;
(statearr_33856_34584[(2)] = inst_33831);

(statearr_33856_34584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (6))){
var inst_33805 = (state_33848[(8)]);
var inst_33833 = inst_33805.length;
var inst_33834 = (inst_33833 > (0));
var state_33848__$1 = state_33848;
if(cljs.core.truth_(inst_33834)){
var statearr_33857_34586 = state_33848__$1;
(statearr_33857_34586[(1)] = (15));

} else {
var statearr_33858_34588 = state_33848__$1;
(statearr_33858_34588[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (17))){
var inst_33841 = (state_33848[(2)]);
var inst_33842 = cljs.core.async.close_BANG_(out);
var state_33848__$1 = (function (){var statearr_33859 = state_33848;
(statearr_33859[(10)] = inst_33841);

return statearr_33859;
})();
var statearr_33860_34590 = state_33848__$1;
(statearr_33860_34590[(2)] = inst_33842);

(statearr_33860_34590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (3))){
var inst_33846 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33848__$1,inst_33846);
} else {
if((state_val_33849 === (12))){
var inst_33805 = (state_33848[(8)]);
var inst_33824 = cljs.core.vec(inst_33805);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33848__$1,(14),out,inst_33824);
} else {
if((state_val_33849 === (2))){
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33848__$1,(4),ch);
} else {
if((state_val_33849 === (11))){
var inst_33805 = (state_33848[(8)]);
var inst_33813 = (state_33848[(11)]);
var inst_33809 = (state_33848[(9)]);
var inst_33821 = inst_33805.push(inst_33809);
var tmp33861 = inst_33805;
var inst_33805__$1 = tmp33861;
var inst_33806 = inst_33813;
var state_33848__$1 = (function (){var statearr_33862 = state_33848;
(statearr_33862[(7)] = inst_33806);

(statearr_33862[(12)] = inst_33821);

(statearr_33862[(8)] = inst_33805__$1);

return statearr_33862;
})();
var statearr_33863_34592 = state_33848__$1;
(statearr_33863_34592[(2)] = null);

(statearr_33863_34592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (9))){
var inst_33806 = (state_33848[(7)]);
var inst_33817 = cljs.core.keyword_identical_QMARK_(inst_33806,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33848__$1 = state_33848;
var statearr_33864_34593 = state_33848__$1;
(statearr_33864_34593[(2)] = inst_33817);

(statearr_33864_34593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (5))){
var inst_33806 = (state_33848[(7)]);
var inst_33813 = (state_33848[(11)]);
var inst_33809 = (state_33848[(9)]);
var inst_33814 = (state_33848[(13)]);
var inst_33813__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33809) : f.call(null,inst_33809));
var inst_33814__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33813__$1,inst_33806);
var state_33848__$1 = (function (){var statearr_33865 = state_33848;
(statearr_33865[(11)] = inst_33813__$1);

(statearr_33865[(13)] = inst_33814__$1);

return statearr_33865;
})();
if(inst_33814__$1){
var statearr_33866_34594 = state_33848__$1;
(statearr_33866_34594[(1)] = (8));

} else {
var statearr_33867_34595 = state_33848__$1;
(statearr_33867_34595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (14))){
var inst_33813 = (state_33848[(11)]);
var inst_33809 = (state_33848[(9)]);
var inst_33826 = (state_33848[(2)]);
var inst_33827 = [];
var inst_33828 = inst_33827.push(inst_33809);
var inst_33805 = inst_33827;
var inst_33806 = inst_33813;
var state_33848__$1 = (function (){var statearr_33868 = state_33848;
(statearr_33868[(14)] = inst_33826);

(statearr_33868[(7)] = inst_33806);

(statearr_33868[(8)] = inst_33805);

(statearr_33868[(15)] = inst_33828);

return statearr_33868;
})();
var statearr_33869_34596 = state_33848__$1;
(statearr_33869_34596[(2)] = null);

(statearr_33869_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (16))){
var state_33848__$1 = state_33848;
var statearr_33870_34597 = state_33848__$1;
(statearr_33870_34597[(2)] = null);

(statearr_33870_34597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (10))){
var inst_33819 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
if(cljs.core.truth_(inst_33819)){
var statearr_33871_34598 = state_33848__$1;
(statearr_33871_34598[(1)] = (11));

} else {
var statearr_33872_34599 = state_33848__$1;
(statearr_33872_34599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (18))){
var inst_33838 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33873_34600 = state_33848__$1;
(statearr_33873_34600[(2)] = inst_33838);

(statearr_33873_34600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (8))){
var inst_33814 = (state_33848[(13)]);
var state_33848__$1 = state_33848;
var statearr_33874_34601 = state_33848__$1;
(statearr_33874_34601[(2)] = inst_33814);

(statearr_33874_34601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32298__auto__ = null;
var cljs$core$async$state_machine__32298__auto____0 = (function (){
var statearr_33875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33875[(0)] = cljs$core$async$state_machine__32298__auto__);

(statearr_33875[(1)] = (1));

return statearr_33875;
});
var cljs$core$async$state_machine__32298__auto____1 = (function (state_33848){
while(true){
var ret_value__32299__auto__ = (function (){try{while(true){
var result__32300__auto__ = switch__32297__auto__(state_33848);
if(cljs.core.keyword_identical_QMARK_(result__32300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32300__auto__;
}
break;
}
}catch (e33876){var ex__32301__auto__ = e33876;
var statearr_33877_34602 = state_33848;
(statearr_33877_34602[(2)] = ex__32301__auto__);


if(cljs.core.seq((state_33848[(4)]))){
var statearr_33878_34603 = state_33848;
(statearr_33878_34603[(1)] = cljs.core.first((state_33848[(4)])));

} else {
throw ex__32301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34604 = state_33848;
state_33848 = G__34604;
continue;
} else {
return ret_value__32299__auto__;
}
break;
}
});
cljs$core$async$state_machine__32298__auto__ = function(state_33848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32298__auto____1.call(this,state_33848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32298__auto____0;
cljs$core$async$state_machine__32298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32298__auto____1;
return cljs$core$async$state_machine__32298__auto__;
})()
})();
var state__32392__auto__ = (function (){var statearr_33879 = f__32391__auto__();
(statearr_33879[(6)] = c__32390__auto___34577);

return statearr_33879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32392__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
