!function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var i = {};
    e.m = t,
    e.c = i,
    e.i = function(t) {
        return t
    }
    ,
    e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(i, "a", i),
        i
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 31)
}([function(t, e) {
    t.exports = jQuery
}
, function(t, e) {
    t.exports = prestashop
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , r = i(0)
      , s = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r)
      , a = function() {
        function t(e) {
            n(this, t),
            this.el = e
        }
        return o(t, [{
            key: "init",
            value: function() {
                this.el.on("show.bs.dropdown", function(t, e) {
                    e ? (0,
                    s.default)("#" + e).find(".dropdown-menu").first().stop(!0, !0).slideDown() : (0,
                    s.default)(t.target).find(".dropdown-menu").first().stop(!0, !0).slideDown()
                }),
                this.el.on("hide.bs.dropdown", function(t, e) {
                    e ? (0,
                    s.default)("#" + e).find(".dropdown-menu").first().stop(!0, !0).slideUp() : (0,
                    s.default)(t.target).find(".dropdown-menu").first().stop(!0, !0).slideUp()
                }),
                this.el.find("select.link").each(function(t, e) {
                    (0,
                    s.default)(e).on("change", function(t) {
                        window.location = (0,
                        s.default)(this).val()
                    })
                })
            }
        }]),
        t
    }();
    e.default = a,
    t.exports = e.default
}
, function(t, e, i) {
    "use strict";
    var n, o;
    !function(t) {
        function e(t) {
            var e = t.length
              , n = i.type(t);
            return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var i = function t(e, i) {
                return new t.fn.init(e,i)
            };
            i.isWindow = function(t) {
                return t && t === t.window
            }
            ,
            i.type = function(t) {
                return t ? "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t : t + ""
            }
            ,
            i.isArray = Array.isArray || function(t) {
                return "array" === i.type(t)
            }
            ,
            i.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t))
                    return !1;
                try {
                    if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (t) {
                    return !1
                }
                for (e in t)
                    ;
                return void 0 === e || r.call(t, e)
            }
            ,
            i.each = function(t, i, n) {
                var o = 0
                  , r = t.length
                  , s = e(t);
                if (n) {
                    if (s)
                        for (; o < r && !1 !== i.apply(t[o], n); o++)
                            ;
                    else
                        for (o in t)
                            if (t.hasOwnProperty(o) && !1 === i.apply(t[o], n))
                                break
                } else if (s)
                    for (; o < r && !1 !== i.call(t[o], o, t[o]); o++)
                        ;
                else
                    for (o in t)
                        if (t.hasOwnProperty(o) && !1 === i.call(t[o], o, t[o]))
                            break;
                return t
            }
            ,
            i.data = function(t, e, o) {
                if (void 0 === o) {
                    var r = t[i.expando]
                      , s = r && n[r];
                    if (void 0 === e)
                        return s;
                    if (s && e in s)
                        return s[e]
                } else if (void 0 !== e) {
                    var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {},
                    n[a][e] = o,
                    o
                }
            }
            ,
            i.removeData = function(t, e) {
                var o = t[i.expando]
                  , r = o && n[o];
                r && (e ? i.each(e, function(t, e) {
                    delete r[e]
                }) : delete n[o])
            }
            ,
            i.extend = function() {
                var t, e, n, o, r, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
                for ("boolean" == typeof a && (u = a,
                a = arguments[l] || {},
                l++),
                "object" != typeof a && "function" !== i.type(a) && (a = {}),
                l === c && (a = this,
                l--); l < c; l++)
                    if (r = arguments[l])
                        for (o in r)
                            r.hasOwnProperty(o) && (t = a[o],
                            n = r[o],
                            a !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1,
                            s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {},
                            a[o] = i.extend(u, s, n)) : void 0 !== n && (a[o] = n)));
                return a
            }
            ,
            i.queue = function(t, n, o) {
                if (t) {
                    n = (n || "fx") + "queue";
                    var r = i.data(t, n);
                    return o ? (!r || i.isArray(o) ? r = i.data(t, n, function(t, i) {
                        var n = i || [];
                        return t && (e(Object(t)) ? function(t, e) {
                            for (var i = +e.length, n = 0, o = t.length; n < i; )
                                t[o++] = e[n++];
                            if (i !== i)
                                for (; void 0 !== e[n]; )
                                    t[o++] = e[n++];
                            t.length = o
                        }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)),
                        n
                    }(o)) : r.push(o),
                    r) : r || []
                }
            }
            ,
            i.dequeue = function(t, e) {
                i.each(t.nodeType ? [t] : t, function(t, n) {
                    e = e || "fx";
                    var o = i.queue(n, e)
                      , r = o.shift();
                    "inprogress" === r && (r = o.shift()),
                    r && ("fx" === e && o.unshift("inprogress"),
                    r.call(n, function() {
                        i.dequeue(n, e)
                    }))
                })
            }
            ,
            i.fn = i.prototype = {
                init: function(t) {
                    if (t.nodeType)
                        return this[0] = t,
                        this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    var t = this[0]
                      , e = function(t) {
                        for (var e = t.offsetParent; e && "html" !== e.nodeName.toLowerCase() && e.style && "static" === e.style.position; )
                            e = e.offsetParent;
                        return e || document
                    }(t)
                      , n = this.offset()
                      , o = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0,
                    n.left -= parseFloat(t.style.marginLeft) || 0,
                    e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0,
                    o.left += parseFloat(e.style.borderLeftWidth) || 0),
                    {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(),
            i.uuid = 0;
            for (var o = {}, r = o.hasOwnProperty, s = o.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++)
                o["[object " + a[l] + "]"] = a[l].toLowerCase();
            i.fn.init.prototype = i.fn,
            t.Velocity = {
                Utilities: i
            }
        }
    }(window),
    function(r) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = r() : (n = r,
        void 0 !== (o = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = o))
    }(function() {
        return function(t, e, i, n) {
            function o(t) {
                for (var e = -1, i = t ? t.length : 0, n = []; ++e < i; ) {
                    var o = t[e];
                    o && n.push(o)
                }
                return n
            }
            function r(t) {
                return S.isWrapped(t) ? t = y.call(t) : S.isNode(t) && (t = [t]),
                t
            }
            function s(t) {
                var e = h.data(t, "velocity");
                return null === e ? n : e
            }
            function a(t, e) {
                var i = s(t);
                i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - e + i.delayBegin,
                i.delayPaused = !0,
                clearTimeout(i.delayTimer.setTimeout))
            }
            function l(t, e) {
                var i = s(t);
                i && i.delayTimer && i.delayPaused && (i.delayPaused = !1,
                i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
            }
            function c(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }
            function u(t, i, n, o) {
                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                function s(t, e) {
                    return 3 * e - 6 * t
                }
                function a(t) {
                    return 3 * t
                }
                function l(t, e, i) {
                    return ((r(e, i) * t + s(e, i)) * t + a(e)) * t
                }
                function c(t, e, i) {
                    return 3 * r(e, i) * t * t + 2 * s(e, i) * t + a(e)
                }
                function u(e, i) {
                    for (var o = 0; o < m; ++o) {
                        var r = c(i, t, n);
                        if (0 === r)
                            return i;
                        i -= (l(i, t, n) - e) / r
                    }
                    return i
                }
                function d() {
                    for (var e = 0; e < b; ++e)
                        _[e] = l(e * S, t, n)
                }
                function f(e, i, o) {
                    var r, s, a = 0;
                    do {
                        s = i + (o - i) / 2,
                        r = l(s, t, n) - e,
                        r > 0 ? o = s : i = s
                    } while (Math.abs(r) > v && ++a < y);return s
                }
                function p(e) {
                    for (var i = 0, o = 1, r = b - 1; o !== r && _[o] <= e; ++o)
                        i += S;
                    --o;
                    var s = (e - _[o]) / (_[o + 1] - _[o])
                      , a = i + s * S
                      , l = c(a, t, n);
                    return l >= g ? u(e, a) : 0 === l ? a : f(e, i, i + S)
                }
                function h() {
                    x = !0,
                    t === i && n === o || d()
                }
                var m = 4
                  , g = .001
                  , v = 1e-7
                  , y = 10
                  , b = 11
                  , S = 1 / (b - 1)
                  , w = "Float32Array"in e;
                if (4 !== arguments.length)
                    return !1;
                for (var T = 0; T < 4; ++T)
                    if ("number" != typeof arguments[T] || isNaN(arguments[T]) || !isFinite(arguments[T]))
                        return !1;
                t = Math.min(t, 1),
                n = Math.min(n, 1),
                t = Math.max(t, 0),
                n = Math.max(n, 0);
                var _ = w ? new Float32Array(b) : new Array(b)
                  , x = !1
                  , O = function(e) {
                    return x || h(),
                    t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), i, o)
                };
                O.getControlPoints = function() {
                    return [{
                        x: t,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                }
                ;
                var C = "generateBezier(" + [t, i, n, o] + ")";
                return O.toString = function() {
                    return C
                }
                ,
                O
            }
            function d(t, e) {
                var i = t;
                return S.isString(t) ? x.Easings[t] || (i = !1) : i = S.isArray(t) && 1 === t.length ? c.apply(null, t) : S.isArray(t) && 2 === t.length ? O.apply(null, t.concat([e])) : !(!S.isArray(t) || 4 !== t.length) && u.apply(null, t),
                !1 === i && (i = x.Easings[x.defaults.easing] ? x.defaults.easing : _),
                i
            }
            function f(t) {
                if (t) {
                    var e = x.timestamp && !0 !== t ? t : v.now()
                      , i = x.State.calls.length;
                    i > 1e4 && (x.State.calls = o(x.State.calls),
                    i = x.State.calls.length);
                    for (var r = 0; r < i; r++)
                        if (x.State.calls[r]) {
                            var a = x.State.calls[r]
                              , l = a[0]
                              , c = a[2]
                              , u = a[3]
                              , d = !!u
                              , g = null
                              , y = a[5]
                              , b = a[6];
                            if (u || (u = x.State.calls[r][3] = e - 16),
                            y) {
                                if (!0 !== y.resume)
                                    continue;
                                u = a[3] = Math.round(e - b - 16),
                                a[5] = null
                            }
                            b = a[6] = e - u;
                            for (var w = Math.min(b / c.duration, 1), T = 0, _ = l.length; T < _; T++) {
                                var O = l[T]
                                  , E = O.element;
                                if (s(E)) {
                                    var A = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var I = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            h.each(I, function(t, e) {
                                                C.setPropertyValue(E, "display", e)
                                            })
                                        }
                                        C.setPropertyValue(E, "display", c.display)
                                    }
                                    c.visibility !== n && "hidden" !== c.visibility && C.setPropertyValue(E, "visibility", c.visibility);
                                    for (var D in O)
                                        if (O.hasOwnProperty(D) && "element" !== D) {
                                            var P, M = O[D], N = S.isString(M.easing) ? x.Easings[M.easing] : M.easing;
                                            if (S.isString(M.pattern)) {
                                                var $ = 1 === w ? function(t, e, i) {
                                                    var n = M.endValue[e];
                                                    return i ? Math.round(n) : n
                                                }
                                                : function(t, e, i) {
                                                    var n = M.startValue[e]
                                                      , o = M.endValue[e] - n
                                                      , r = n + o * N(w, c, o);
                                                    return i ? Math.round(r) : r
                                                }
                                                ;
                                                P = M.pattern.replace(/{(\d+)(!)?}/g, $)
                                            } else if (1 === w)
                                                P = M.endValue;
                                            else {
                                                var L = M.endValue - M.startValue;
                                                P = M.startValue + L * N(w, c, L)
                                            }
                                            if (!d && P === M.currentValue)
                                                continue;
                                            if (M.currentValue = P,
                                            "tween" === D)
                                                g = P;
                                            else {
                                                var R;
                                                if (C.Hooks.registered[D]) {
                                                    R = C.Hooks.getRoot(D);
                                                    var H = s(E).rootPropertyValueCache[R];
                                                    H && (M.rootPropertyValue = H)
                                                }
                                                var j = C.setPropertyValue(E, D, M.currentValue + (m < 9 && 0 === parseFloat(P) ? "" : M.unitType), M.rootPropertyValue, M.scrollData);
                                                C.Hooks.registered[D] && (C.Normalizations.registered[R] ? s(E).rootPropertyValueCache[R] = C.Normalizations.registered[R]("extract", null, j[1]) : s(E).rootPropertyValueCache[R] = j[1]),
                                                "transform" === j[0] && (A = !0)
                                            }
                                        }
                                    c.mobileHA && s(E).transformCache.translate3d === n && (s(E).transformCache.translate3d = "(0px, 0px, 0px)",
                                    A = !0),
                                    A && C.flushTransformCache(E)
                                }
                            }
                            c.display !== n && "none" !== c.display && (x.State.calls[r][2].display = !1),
                            c.visibility !== n && "hidden" !== c.visibility && (x.State.calls[r][2].visibility = !1),
                            c.progress && c.progress.call(a[1], a[1], w, Math.max(0, u + c.duration - e), u, g),
                            1 === w && p(r)
                        }
                }
                x.State.isTicking && k(f)
            }
            function p(t, e) {
                if (!x.State.calls[t])
                    return !1;
                for (var i = x.State.calls[t][0], o = x.State.calls[t][1], r = x.State.calls[t][2], a = x.State.calls[t][4], l = !1, c = 0, u = i.length; c < u; c++) {
                    var d = i[c].element;
                    e || r.loop || ("none" === r.display && C.setPropertyValue(d, "display", r.display),
                    "hidden" === r.visibility && C.setPropertyValue(d, "visibility", r.visibility));
                    var f = s(d);
                    if (!0 !== r.loop && (h.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && f) {
                        f.isAnimating = !1,
                        f.rootPropertyValueCache = {};
                        var p = !1;
                        h.each(C.Lists.transforms3D, function(t, e) {
                            var i = /^scale/.test(e) ? 1 : 0
                              , o = f.transformCache[e];
                            f.transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (p = !0,
                            delete f.transformCache[e])
                        }),
                        r.mobileHA && (p = !0,
                        delete f.transformCache.translate3d),
                        p && C.flushTransformCache(d),
                        C.Values.removeClass(d, "velocity-animating")
                    }
                    if (!e && r.complete && !r.loop && c === u - 1)
                        try {
                            r.complete.call(o, o)
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 1)
                        }
                    a && !0 !== r.loop && a(o),
                    f && !0 === r.loop && !e && (h.each(f.tweensContainer, function(t, e) {
                        if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 == 0) {
                            var i = e.startValue;
                            e.startValue = e.endValue,
                            e.endValue = i
                        }
                        /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0,
                        e.startValue = 100)
                    }),
                    x(d, "reverse", {
                        loop: !0,
                        delay: r.delay
                    })),
                    !1 !== r.queue && h.dequeue(d, r.queue)
                }
                x.State.calls[t] = !1;
                for (var m = 0, g = x.State.calls.length; m < g; m++)
                    if (!1 !== x.State.calls[m]) {
                        l = !0;
                        break
                    }
                !1 === l && (x.State.isTicking = !1,
                delete x.State.calls,
                x.State.calls = [])
            }
            var h, m = function() {
                if (i.documentMode)
                    return i.documentMode;
                for (var t = 7; t > 4; t--) {
                    var e = i.createElement("div");
                    if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e",
                    e.getElementsByTagName("span").length)
                        return e = null,
                        t
                }
                return n
            }(), g = function() {
                var t = 0;
                return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                    var i, n = (new Date).getTime();
                    return i = Math.max(0, 16 - (n - t)),
                    t = n + i,
                    setTimeout(function() {
                        e(n + i)
                    }, i)
                }
            }(), v = function() {
                var t = e.performance || {};
                if ("function" != typeof t.now) {
                    var i = t.timing && t.timing.navigationStart ? t.timing.navigationStart : (new Date).getTime();
                    t.now = function() {
                        return (new Date).getTime() - i
                    }
                }
                return t
            }(), y = function() {
                var t = Array.prototype.slice;
                try {
                    return t.call(i.documentElement),
                    t
                } catch (e) {
                    return function(e, i) {
                        var n = this.length;
                        if ("number" != typeof e && (e = 0),
                        "number" != typeof i && (i = n),
                        this.slice)
                            return t.call(this, e, i);
                        var o, r = [], s = e >= 0 ? e : Math.max(0, n + e), a = i < 0 ? n + i : Math.min(i, n), l = a - s;
                        if (l > 0)
                            if (r = new Array(l),
                            this.charAt)
                                for (o = 0; o < l; o++)
                                    r[o] = this.charAt(s + o);
                            else
                                for (o = 0; o < l; o++)
                                    r[o] = this[s + o];
                        return r
                    }
                }
            }(), b = function() {
                return Array.prototype.includes ? function(t, e) {
                    return t.includes(e)
                }
                : Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e) >= 0
                }
                : function(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e)
                            return !0;
                    return !1
                }
            }, S = {
                isNumber: function(t) {
                    return "number" == typeof t
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isArray: Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
                ,
                isFunction: function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                },
                isNode: function(t) {
                    return t && t.nodeType
                },
                isWrapped: function(t) {
                    return t && t !== e && S.isNumber(t.length) && !S.isString(t) && !S.isFunction(t) && !S.isNode(t) && (0 === t.length || S.isNode(t[0]))
                },
                isSVG: function(t) {
                    return e.SVGElement && t instanceof e.SVGElement
                },
                isEmptyObject: function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e))
                            return !1;
                    return !0
                }
            }, w = !1;
            if (t.fn && t.fn.jquery ? (h = t,
            w = !0) : h = e.Velocity.Utilities,
            m <= 8 && !w)
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (m <= 7)
                return void (jQuery.fn.velocity = jQuery.fn.animate);
            var T = 400
              , _ = "swing"
              , x = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: e.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: h,
                Redirects: {},
                Easings: {},
                Promise: e.Promise,
                defaults: {
                    queue: "",
                    duration: T,
                    easing: _,
                    begin: n,
                    complete: n,
                    progress: n,
                    display: n,
                    visibility: n,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function(t) {
                    h.data(t, "velocity", {
                        isSVG: S.isSVG(t),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 0
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function(t) {
                    var e = (new Date).getTime();
                    h.each(x.State.calls, function(e, i) {
                        if (i) {
                            if (t !== n && (i[2].queue !== t || !1 === i[2].queue))
                                return !0;
                            i[5] = {
                                resume: !1
                            }
                        }
                    }),
                    h.each(x.State.delayedElements, function(t, i) {
                        i && a(i, e)
                    })
                },
                resumeAll: function(t) {
                    var e = (new Date).getTime();
                    h.each(x.State.calls, function(e, i) {
                        if (i) {
                            if (t !== n && (i[2].queue !== t || !1 === i[2].queue))
                                return !0;
                            i[5] && (i[5].resume = !0)
                        }
                    }),
                    h.each(x.State.delayedElements, function(t, i) {
                        i && l(i, e)
                    })
                }
            };
            e.pageYOffset !== n ? (x.State.scrollAnchor = e,
            x.State.scrollPropertyLeft = "pageXOffset",
            x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body,
            x.State.scrollPropertyLeft = "scrollLeft",
            x.State.scrollPropertyTop = "scrollTop");
            var O = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }
                function e(e, i, n) {
                    var o = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: o.v,
                        dv: t(o)
                    }
                }
                function i(i, n) {
                    var o = {
                        dx: i.v,
                        dv: t(i)
                    }
                      , r = e(i, .5 * n, o)
                      , s = e(i, .5 * n, r)
                      , a = e(i, n, s)
                      , l = 1 / 6 * (o.dx + 2 * (r.dx + s.dx) + a.dx)
                      , c = 1 / 6 * (o.dv + 2 * (r.dv + s.dv) + a.dv);
                    return i.x = i.x + l * n,
                    i.v = i.v + c * n,
                    i
                }
                return function t(e, n, o) {
                    var r, s, a, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    }, c = [0], u = 0;
                    for (e = parseFloat(e) || 500,
                    n = parseFloat(n) || 20,
                    o = o || null,
                    l.tension = e,
                    l.friction = n,
                    r = null !== o,
                    r ? (u = t(e, n),
                    s = u / o * .016) : s = .016; ; )
                        if (a = i(a || l, s),
                        c.push(1 + a.x),
                        u += 16,
                        !(Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4))
                            break;
                    return r ? function(t) {
                        return c[t * (c.length - 1) | 0]
                    }
                    : u
                }
            }();
            x.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            },
            h.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(t, e) {
                x.Easings[e[0]] = u.apply(null, e[1])
            });
            var C = x.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < C.Lists.colors.length; t++) {
                            var e = "color" === C.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            C.Hooks.templates[C.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i, n, o;
                        if (m)
                            for (i in C.Hooks.templates)
                                if (C.Hooks.templates.hasOwnProperty(i)) {
                                    n = C.Hooks.templates[i],
                                    o = n[0].split(" ");
                                    var r = n[1].match(C.RegEx.valueSplit);
                                    "Color" === o[0] && (o.push(o.shift()),
                                    r.push(r.shift()),
                                    C.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                                }
                        for (i in C.Hooks.templates)
                            if (C.Hooks.templates.hasOwnProperty(i)) {
                                n = C.Hooks.templates[i],
                                o = n[0].split(" ");
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        var a = i + o[s]
                                          , l = s;
                                        C.Hooks.registered[a] = [i, l]
                                    }
                            }
                    },
                    getRoot: function(t) {
                        var e = C.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    getUnit: function(t, e) {
                        var i = (t.substr(e || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return i && b(C.Lists.units, i) ? i : ""
                    },
                    fixColors: function(t) {
                        return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(t, e, i) {
                            return C.Lists.colorNames.hasOwnProperty(i) ? (e || "rgba(") + C.Lists.colorNames[i] + (e ? "" : ",1)") : e + i
                        })
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return C.RegEx.valueUnwrap.test(e) && (e = e.match(C.RegEx.valueUnwrap)[1]),
                        C.Values.isCSSNullValue(e) && (e = C.Hooks.templates[t][1]),
                        e
                    },
                    extractValue: function(t, e) {
                        var i = C.Hooks.registered[t];
                        if (i) {
                            var n = i[0]
                              , o = i[1];
                            return e = C.Hooks.cleanRootPropertyValue(n, e),
                            e.toString().match(C.RegEx.valueSplit)[o]
                        }
                        return e
                    },
                    injectValue: function(t, e, i) {
                        var n = C.Hooks.registered[t];
                        if (n) {
                            var o, r = n[0], s = n[1];
                            return i = C.Hooks.cleanRootPropertyValue(r, i),
                            o = i.toString().match(C.RegEx.valueSplit),
                            o[s] = e,
                            o.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return C.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(C.RegEx.valueUnwrap),
                                n = n ? n[1].replace(/,(\s+)?/g, " ") : i),
                                n;
                            case "inject":
                                return "rect(" + i + ")"
                            }
                        },
                        blur: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return x.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = o ? o[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(t, e, i) {
                            if (m <= 8)
                                switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1,
                                    parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                }
                            else
                                switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return i
                                }
                        }
                    },
                    register: function() {
                        function t(t, e, i) {
                            if ("border-box" === C.getPropertyValue(e, "boxSizing").toString().toLowerCase() === (i || !1)) {
                                var n, o, r = 0, s = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"], a = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                                for (n = 0; n < a.length; n++)
                                    o = parseFloat(C.getPropertyValue(e, a[n])),
                                    isNaN(o) || (r += o);
                                return i ? -r : r
                            }
                            return 0
                        }
                        function e(e, i) {
                            return function(n, o, r) {
                                switch (n) {
                                case "name":
                                    return e;
                                case "extract":
                                    return parseFloat(r) + t(e, o, i);
                                case "inject":
                                    return parseFloat(r) - t(e, o, i) + "px"
                                }
                            }
                        }
                        m && !(m > 9) || x.State.isGingerbread || (C.Lists.transformsBase = C.Lists.transformsBase.concat(C.Lists.transforms3D));
                        for (var i = 0; i < C.Lists.transformsBase.length; i++)
                            !function() {
                                var t = C.Lists.transformsBase[i];
                                C.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return s(i) === n || s(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : s(i).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var r = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                            break;
                                        case "scal":
                                        case "scale":
                                            x.State.isAndroid && s(i).transformCache[t] === n && o < 1 && (o = 1),
                                            r = !/(\d)$/i.test(o);
                                            break;
                                        case "skew":
                                        case "rotate":
                                            r = !/(deg|\d)$/i.test(o)
                                        }
                                        return r || (s(i).transformCache[t] = "(" + o + ")"),
                                        s(i).transformCache[t]
                                    }
                                }
                            }();
                        for (var o = 0; o < C.Lists.colors.length; o++)
                            !function() {
                                var t = C.Lists.colors[o];
                                C.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var r;
                                        if (C.RegEx.wrappedValueAlreadyExtracted.test(o))
                                            r = o;
                                        else {
                                            var s, a = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? s = a[o] !== n ? a[o] : a.black : C.RegEx.isHex.test(o) ? s = "rgb(" + C.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = a.black),
                                            r = (s || o).toString().match(C.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!m || m > 8) && 3 === r.split(" ").length && (r += " 1"),
                                        r;
                                    case "inject":
                                        return /^rgb/.test(o) ? o : (m <= 8 ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"),
                                        (m <= 8 ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                    }
                                }
                            }();
                        C.Normalizations.registered.innerWidth = e("width", !0),
                        C.Normalizations.registered.innerHeight = e("height", !0),
                        C.Normalizations.registered.outerWidth = e("width"),
                        C.Normalizations.registered.outerHeight = e("height")
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (m || x.State.isAndroid && !x.State.isChrome) && (e += "|transform"),
                        new RegExp("^(" + e + ")$","i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (x.State.prefixMatches[t])
                            return [x.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; i < n; i++) {
                            var o;
                            if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                return t.toUpperCase()
                            }),
                            S.isString(x.State.prefixElement.style[o]))
                                return x.State.prefixMatches[t] = o,
                                [o, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(i, function(t, e, i, n) {
                            return e + e + i + i + n + n
                        }),
                        e = n.exec(t),
                        e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.add(e);
                            else if (S.isString(t.className))
                                t.className += (t.className.length ? " " : "") + e;
                            else {
                                var i = t.getAttribute(m <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", i + (i ? " " : "") + e)
                            }
                    },
                    removeClass: function(t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.remove(e);
                            else if (S.isString(t.className))
                                t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)","gi"), " ");
                            else {
                                var i = t.getAttribute(m <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", i.replace(new RegExp("(^|s)" + e.split(" ").join("|") + "(s|$)","gi"), " "))
                            }
                    }
                },
                getPropertyValue: function(t, i, o, r) {
                    function a(t, i) {
                        var o = 0;
                        if (m <= 8)
                            o = h.css(t, i);
                        else {
                            var l = !1;
                            /^(width|height)$/.test(i) && 0 === C.getPropertyValue(t, "display") && (l = !0,
                            C.setPropertyValue(t, "display", C.Values.getDisplayType(t)));
                            var c = function() {
                                l && C.setPropertyValue(t, "display", "none")
                            };
                            if (!r) {
                                if ("height" === i && "border-box" !== C.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetHeight - (parseFloat(C.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingBottom")) || 0);
                                    return c(),
                                    u
                                }
                                if ("width" === i && "border-box" !== C.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var d = t.offsetWidth - (parseFloat(C.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(C.getPropertyValue(t, "paddingRight")) || 0);
                                    return c(),
                                    d
                                }
                            }
                            var f;
                            f = s(t) === n ? e.getComputedStyle(t, null) : s(t).computedStyle ? s(t).computedStyle : s(t).computedStyle = e.getComputedStyle(t, null),
                            "borderColor" === i && (i = "borderTopColor"),
                            o = 9 === m && "filter" === i ? f.getPropertyValue(i) : f[i],
                            "" !== o && null !== o || (o = t.style[i]),
                            c()
                        }
                        if ("auto" === o && /^(top|right|bottom|left)$/i.test(i)) {
                            var p = a(t, "position");
                            ("fixed" === p || "absolute" === p && /top|left/i.test(i)) && (o = h(t).position()[i] + "px")
                        }
                        return o
                    }
                    var l;
                    if (C.Hooks.registered[i]) {
                        var c = i
                          , u = C.Hooks.getRoot(c);
                        o === n && (o = C.getPropertyValue(t, C.Names.prefixCheck(u)[0])),
                        C.Normalizations.registered[u] && (o = C.Normalizations.registered[u]("extract", t, o)),
                        l = C.Hooks.extractValue(c, o)
                    } else if (C.Normalizations.registered[i]) {
                        var d, f;
                        d = C.Normalizations.registered[i]("name", t),
                        "transform" !== d && (f = a(t, C.Names.prefixCheck(d)[0]),
                        C.Values.isCSSNullValue(f) && C.Hooks.templates[i] && (f = C.Hooks.templates[i][1])),
                        l = C.Normalizations.registered[i]("extract", t, f)
                    }
                    if (!/^[\d-]/.test(l)) {
                        var p = s(t);
                        if (p && p.isSVG && C.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i))
                                try {
                                    l = t.getBBox()[i]
                                } catch (t) {
                                    l = 0
                                }
                            else
                                l = t.getAttribute(i);
                        else
                            l = a(t, C.Names.prefixCheck(i)[0])
                    }
                    return C.Values.isCSSNullValue(l) && (l = 0),
                    x.debug,
                    l
                },
                setPropertyValue: function(t, i, n, o, r) {
                    var a = i;
                    if ("scroll" === i)
                        r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? e.scrollTo(n, r.alternateValue) : e.scrollTo(r.alternateValue, n);
                    else if (C.Normalizations.registered[i] && "transform" === C.Normalizations.registered[i]("name", t))
                        C.Normalizations.registered[i]("inject", t, n),
                        a = "transform",
                        n = s(t).transformCache[i];
                    else {
                        if (C.Hooks.registered[i]) {
                            var l = i
                              , c = C.Hooks.getRoot(i);
                            o = o || C.getPropertyValue(t, c),
                            n = C.Hooks.injectValue(l, n, o),
                            i = c
                        }
                        if (C.Normalizations.registered[i] && (n = C.Normalizations.registered[i]("inject", t, n),
                        i = C.Normalizations.registered[i]("name", t)),
                        a = C.Names.prefixCheck(i)[0],
                        m <= 8)
                            try {
                                t.style[a] = n
                            } catch (t) {
                                x.debug
                            }
                        else {
                            var u = s(t);
                            u && u.isSVG && C.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[a] = n
                        }
                        x.debug
                    }
                    return [a, n]
                },
                flushTransformCache: function(t) {
                    var e = ""
                      , i = s(t);
                    if ((m || x.State.isAndroid && !x.State.isChrome) && i && i.isSVG) {
                        var n = function(e) {
                            return parseFloat(C.getPropertyValue(t, e))
                        }
                          , o = {
                            translate: [n("translateX"), n("translateY")],
                            skewX: [n("skewX")],
                            skewY: [n("skewY")],
                            scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                            rotate: [n("rotateZ"), 0, 0]
                        };
                        h.each(s(t).transformCache, function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"),
                            o[t] && (e += t + "(" + o[t].join(" ") + ") ",
                            delete o[t])
                        })
                    } else {
                        var r, a;
                        h.each(s(t).transformCache, function(i) {
                            if (r = s(t).transformCache[i],
                            "transformPerspective" === i)
                                return a = r,
                                !0;
                            9 === m && "rotateZ" === i && (i = "rotate"),
                            e += i + r + " "
                        }),
                        a && (e = "perspective" + a + " " + e)
                    }
                    C.setPropertyValue(t, "transform", e)
                }
            };
            C.Hooks.register(),
            C.Normalizations.register(),
            x.hook = function(t, e, i) {
                var o;
                return t = r(t),
                h.each(t, function(t, r) {
                    if (s(r) === n && x.init(r),
                    i === n)
                        o === n && (o = C.getPropertyValue(r, e));
                    else {
                        var a = C.setPropertyValue(r, e, i);
                        "transform" === a[0] && x.CSS.flushTransformCache(r),
                        o = a
                    }
                }),
                o
            }
            ;
            var E = function t() {
                function o() {
                    return m ? E.promise || null : g
                }
                function c(t, o) {
                    function r(r) {
                        var u, p;
                        if (l.begin && 0 === A)
                            try {
                                l.begin.call(y, y)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                        if ("scroll" === P) {
                            var m, g, v, T = /^x$/i.test(l.axis) ? "Left" : "Top", O = parseFloat(l.offset) || 0;
                            l.container ? S.isWrapped(l.container) || S.isNode(l.container) ? (l.container = l.container[0] || l.container,
                            m = l.container["scroll" + T],
                            v = m + h(t).position()[T.toLowerCase()] + O) : l.container = null : (m = x.State.scrollAnchor[x.State["scrollProperty" + T]],
                            g = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === T ? "Top" : "Left")]],
                            v = h(t).offset()[T.toLowerCase()] + O),
                            c = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: m,
                                    currentValue: m,
                                    endValue: v,
                                    unitType: "",
                                    easing: l.easing,
                                    scrollData: {
                                        container: l.container,
                                        direction: T,
                                        alternateValue: g
                                    }
                                },
                                element: t
                            },
                            x.debug
                        } else if ("reverse" === P) {
                            if (!(u = s(t)))
                                return;
                            if (!u.tweensContainer)
                                return void h.dequeue(t, l.queue);
                            "none" === u.opts.display && (u.opts.display = "auto"),
                            "hidden" === u.opts.visibility && (u.opts.visibility = "visible"),
                            u.opts.loop = !1,
                            u.opts.begin = null,
                            u.opts.complete = null,
                            _.easing || delete l.easing,
                            _.duration || delete l.duration,
                            l = h.extend({}, u.opts, l),
                            p = h.extend(!0, {}, u ? u.tweensContainer : null);
                            for (var I in p)
                                if (p.hasOwnProperty(I) && "element" !== I) {
                                    var D = p[I].startValue;
                                    p[I].startValue = p[I].currentValue = p[I].endValue,
                                    p[I].endValue = D,
                                    S.isEmptyObject(_) || (p[I].easing = l.easing),
                                    x.debug
                                }
                            c = p
                        } else if ("start" === P) {
                            u = s(t),
                            u && u.tweensContainer && !0 === u.isAnimating && (p = u.tweensContainer);
                            var M = function(o, r) {
                                var s, d = C.Hooks.getRoot(o), f = !1, m = r[0], g = r[1], v = r[2];
                                if (!(u && u.isSVG || "tween" === d || !1 !== C.Names.prefixCheck(d)[1] || C.Normalizations.registered[d] !== n))
                                    return void x.debug;
                                (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(o) && !v && 0 !== m && (v = 0),
                                l._cacheValues && p && p[o] ? (v === n && (v = p[o].endValue + p[o].unitType),
                                f = u.rootPropertyValueCache[d]) : C.Hooks.registered[o] ? v === n ? (f = C.getPropertyValue(t, d),
                                v = C.getPropertyValue(t, o, f)) : f = C.Hooks.templates[d][1] : v === n && (v = C.getPropertyValue(t, o));
                                var y, b, w, T = !1, _ = function(t, e) {
                                    var i, n;
                                    return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                        return i = t,
                                        ""
                                    }),
                                    i || (i = C.Values.getUnitType(t)),
                                    [n, i]
                                };
                                if (v !== m && S.isString(v) && S.isString(m)) {
                                    s = "";
                                    var O = 0
                                      , E = 0
                                      , k = []
                                      , A = []
                                      , I = 0
                                      , D = 0
                                      , P = 0;
                                    for (v = C.Hooks.fixColors(v),
                                    m = C.Hooks.fixColors(m); O < v.length && E < m.length; ) {
                                        var M = v[O]
                                          , N = m[E];
                                        if (/[\d\.-]/.test(M) && /[\d\.-]/.test(N)) {
                                            for (var $ = M, L = N, R = ".", j = "."; ++O < v.length; ) {
                                                if ((M = v[O]) === R)
                                                    R = "..";
                                                else if (!/\d/.test(M))
                                                    break;
                                                $ += M
                                            }
                                            for (; ++E < m.length; ) {
                                                if ((N = m[E]) === j)
                                                    j = "..";
                                                else if (!/\d/.test(N))
                                                    break;
                                                L += N
                                            }
                                            var B = C.Hooks.getUnit(v, O)
                                              , F = C.Hooks.getUnit(m, E);
                                            if (O += B.length,
                                            E += F.length,
                                            B === F)
                                                $ === L ? s += $ + B : (s += "{" + k.length + (D ? "!" : "") + "}" + B,
                                                k.push(parseFloat($)),
                                                A.push(parseFloat(L)));
                                            else {
                                                var W = parseFloat($)
                                                  , V = parseFloat(L);
                                                s += (I < 5 ? "calc" : "") + "(" + (W ? "{" + k.length + (D ? "!" : "") + "}" : "0") + B + " + " + (V ? "{" + (k.length + (W ? 1 : 0)) + (D ? "!" : "") + "}" : "0") + F + ")",
                                                W && (k.push(W),
                                                A.push(0)),
                                                V && (k.push(0),
                                                A.push(V))
                                            }
                                        } else {
                                            if (M !== N) {
                                                I = 0;
                                                break
                                            }
                                            s += M,
                                            O++,
                                            E++,
                                            0 === I && "c" === M || 1 === I && "a" === M || 2 === I && "l" === M || 3 === I && "c" === M || I >= 4 && "(" === M ? I++ : (I && I < 5 || I >= 4 && ")" === M && --I < 5) && (I = 0),
                                            0 === D && "r" === M || 1 === D && "g" === M || 2 === D && "b" === M || 3 === D && "a" === M || D >= 3 && "(" === M ? (3 === D && "a" === M && (P = 1),
                                            D++) : P && "," === M ? ++P > 3 && (D = P = 0) : (P && D < (P ? 5 : 4) || D >= (P ? 4 : 3) && ")" === M && --D < (P ? 5 : 4)) && (D = P = 0)
                                        }
                                    }
                                    O === v.length && E === m.length || (x.debug,
                                    s = n),
                                    s && (k.length ? (x.debug,
                                    v = k,
                                    m = A,
                                    b = w = "") : s = n)
                                }
                                s || (y = _(o, v),
                                v = y[0],
                                w = y[1],
                                y = _(o, m),
                                m = y[0].replace(/^([+-\/*])=/, function(t, e) {
                                    return T = e,
                                    ""
                                }),
                                b = y[1],
                                v = parseFloat(v) || 0,
                                m = parseFloat(m) || 0,
                                "%" === b && (/^(fontSize|lineHeight)$/.test(o) ? (m /= 100,
                                b = "em") : /^scale/.test(o) ? (m /= 100,
                                b = "") : /(Red|Green|Blue)$/i.test(o) && (m = m / 100 * 255,
                                b = "")));
                                if (/[\/*]/.test(T))
                                    b = w;
                                else if (w !== b && 0 !== v)
                                    if (0 === m)
                                        b = w;
                                    else {
                                        a = a || function() {
                                            var n = {
                                                myParent: t.parentNode || i.body,
                                                position: C.getPropertyValue(t, "position"),
                                                fontSize: C.getPropertyValue(t, "fontSize")
                                            }
                                              , o = n.position === H.lastPosition && n.myParent === H.lastParent
                                              , r = n.fontSize === H.lastFontSize;
                                            H.lastParent = n.myParent,
                                            H.lastPosition = n.position,
                                            H.lastFontSize = n.fontSize;
                                            var s = {};
                                            if (r && o)
                                                s.emToPx = H.lastEmToPx,
                                                s.percentToPxWidth = H.lastPercentToPxWidth,
                                                s.percentToPxHeight = H.lastPercentToPxHeight;
                                            else {
                                                var a = u && u.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                                x.init(a),
                                                n.myParent.appendChild(a),
                                                h.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                                    x.CSS.setPropertyValue(a, e, "hidden")
                                                }),
                                                x.CSS.setPropertyValue(a, "position", n.position),
                                                x.CSS.setPropertyValue(a, "fontSize", n.fontSize),
                                                x.CSS.setPropertyValue(a, "boxSizing", "content-box"),
                                                h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                                    x.CSS.setPropertyValue(a, e, "100%")
                                                }),
                                                x.CSS.setPropertyValue(a, "paddingLeft", "100em"),
                                                s.percentToPxWidth = H.lastPercentToPxWidth = (parseFloat(C.getPropertyValue(a, "width", null, !0)) || 1) / 100,
                                                s.percentToPxHeight = H.lastPercentToPxHeight = (parseFloat(C.getPropertyValue(a, "height", null, !0)) || 1) / 100,
                                                s.emToPx = H.lastEmToPx = (parseFloat(C.getPropertyValue(a, "paddingLeft")) || 1) / 100,
                                                n.myParent.removeChild(a)
                                            }
                                            return null === H.remToPx && (H.remToPx = parseFloat(C.getPropertyValue(i.body, "fontSize")) || 16),
                                            null === H.vwToPx && (H.vwToPx = parseFloat(e.innerWidth) / 100,
                                            H.vhToPx = parseFloat(e.innerHeight) / 100),
                                            s.remToPx = H.remToPx,
                                            s.vwToPx = H.vwToPx,
                                            s.vhToPx = H.vhToPx,
                                            x.debug,
                                            s
                                        }();
                                        var U = /margin|padding|left|right|width|text|word|letter/i.test(o) || /X$/.test(o) || "x" === o ? "x" : "y";
                                        switch (w) {
                                        case "%":
                                            v *= "x" === U ? a.percentToPxWidth : a.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= a[w + "ToPx"]
                                        }
                                        switch (b) {
                                        case "%":
                                            v *= 1 / ("x" === U ? a.percentToPxWidth : a.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= 1 / a[b + "ToPx"]
                                        }
                                    }
                                switch (T) {
                                case "+":
                                    m = v + m;
                                    break;
                                case "-":
                                    m = v - m;
                                    break;
                                case "*":
                                    m *= v;
                                    break;
                                case "/":
                                    m = v / m
                                }
                                c[o] = {
                                    rootPropertyValue: f,
                                    startValue: v,
                                    currentValue: v,
                                    endValue: m,
                                    unitType: b,
                                    easing: g
                                },
                                s && (c[o].pattern = s),
                                x.debug
                            };
                            for (var N in w)
                                if (w.hasOwnProperty(N)) {
                                    var $ = C.Names.camelCase(N)
                                      , L = function(e, i) {
                                        var n, r, s;
                                        return S.isFunction(e) && (e = e.call(t, o, k)),
                                        S.isArray(e) ? (n = e[0],
                                        !S.isArray(e[1]) && /^[\d-]/.test(e[1]) || S.isFunction(e[1]) || C.RegEx.isHex.test(e[1]) ? s = e[1] : S.isString(e[1]) && !C.RegEx.isHex.test(e[1]) && x.Easings[e[1]] || S.isArray(e[1]) ? (r = i ? e[1] : d(e[1], l.duration),
                                        s = e[2]) : s = e[1] || e[2]) : n = e,
                                        i || (r = r || l.easing),
                                        S.isFunction(n) && (n = n.call(t, o, k)),
                                        S.isFunction(s) && (s = s.call(t, o, k)),
                                        [n || 0, r, s]
                                    }(w[N]);
                                    if (b(C.Lists.colors, $)) {
                                        var R = L[0]
                                          , B = L[1]
                                          , F = L[2];
                                        if (C.RegEx.isHex.test(R)) {
                                            for (var W = ["Red", "Green", "Blue"], V = C.Values.hexToRgb(R), U = F ? C.Values.hexToRgb(F) : n, z = 0; z < W.length; z++) {
                                                var q = [V[z]];
                                                B && q.push(B),
                                                U !== n && q.push(U[z]),
                                                M($ + W[z], q)
                                            }
                                            continue
                                        }
                                    }
                                    M($, L)
                                }
                            c.element = t
                        }
                        c.element && (C.Values.addClass(t, "velocity-animating"),
                        j.push(c),
                        u = s(t),
                        u && ("" === l.queue && (u.tweensContainer = c,
                        u.opts = l),
                        u.isAnimating = !0),
                        A === k - 1 ? (x.State.calls.push([j, y, l, null, E.resolver, null, 0]),
                        !1 === x.State.isTicking && (x.State.isTicking = !0,
                        f())) : A++)
                    }
                    var a, l = h.extend({}, x.defaults, _), c = {};
                    switch (s(t) === n && x.init(t),
                    parseFloat(l.delay) && !1 !== l.queue && h.queue(t, l.queue, function(e) {
                        x.velocityQueueEntryFlag = !0;
                        var i = x.State.delayedElements.count++;
                        x.State.delayedElements[i] = t;
                        var n = function(t) {
                            return function() {
                                x.State.delayedElements[t] = !1,
                                e()
                            }
                        }(i);
                        s(t).delayBegin = (new Date).getTime(),
                        s(t).delay = parseFloat(l.delay),
                        s(t).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(l.delay)),
                            next: n
                        }
                    }),
                    l.duration.toString().toLowerCase()) {
                    case "fast":
                        l.duration = 200;
                        break;
                    case "normal":
                        l.duration = T;
                        break;
                    case "slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                    }
                    if (!1 !== x.mock && (!0 === x.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(x.mock) || 1,
                    l.delay *= parseFloat(x.mock) || 1)),
                    l.easing = d(l.easing, l.duration),
                    l.begin && !S.isFunction(l.begin) && (l.begin = null),
                    l.progress && !S.isFunction(l.progress) && (l.progress = null),
                    l.complete && !S.isFunction(l.complete) && (l.complete = null),
                    l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(),
                    "auto" === l.display && (l.display = x.CSS.Values.getDisplayType(t))),
                    l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()),
                    l.mobileHA = l.mobileHA && x.State.isMobile && !x.State.isGingerbread,
                    !1 === l.queue)
                        if (l.delay) {
                            var u = x.State.delayedElements.count++;
                            x.State.delayedElements[u] = t;
                            var p = function(t) {
                                return function() {
                                    x.State.delayedElements[t] = !1,
                                    r()
                                }
                            }(u);
                            s(t).delayBegin = (new Date).getTime(),
                            s(t).delay = parseFloat(l.delay),
                            s(t).delayTimer = {
                                setTimeout: setTimeout(r, parseFloat(l.delay)),
                                next: p
                            }
                        } else
                            r();
                    else
                        h.queue(t, l.queue, function(t, e) {
                            if (!0 === e)
                                return E.promise && E.resolver(y),
                                !0;
                            x.velocityQueueEntryFlag = !0,
                            r(t)
                        });
                    "" !== l.queue && "fx" !== l.queue || "inprogress" === h.queue(t)[0] || h.dequeue(t)
                }
                var u, m, g, v, y, w, _, O = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || S.isString(arguments[0].properties));
                S.isWrapped(this) ? (m = !1,
                v = 0,
                y = this,
                g = this) : (m = !0,
                v = 1,
                y = O ? arguments[0].elements || arguments[0].e : arguments[0]);
                var E = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (m && x.Promise && (E.promise = new x.Promise(function(t, e) {
                    E.resolver = t,
                    E.rejecter = e
                }
                )),
                O ? (w = arguments[0].properties || arguments[0].p,
                _ = arguments[0].options || arguments[0].o) : (w = arguments[v],
                _ = arguments[v + 1]),
                !(y = r(y)))
                    return void (E.promise && (w && _ && !1 === _.promiseRejectEmpty ? E.resolver() : E.rejecter()));
                var k = y.length
                  , A = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(w) && !h.isPlainObject(_)) {
                    var I = v + 1;
                    _ = {};
                    for (var D = I; D < arguments.length; D++)
                        S.isArray(arguments[D]) || !/^(fast|normal|slow)$/i.test(arguments[D]) && !/^\d/.test(arguments[D]) ? S.isString(arguments[D]) || S.isArray(arguments[D]) ? _.easing = arguments[D] : S.isFunction(arguments[D]) && (_.complete = arguments[D]) : _.duration = arguments[D]
                }
                var P;
                switch (w) {
                case "scroll":
                    P = "scroll";
                    break;
                case "reverse":
                    P = "reverse";
                    break;
                case "pause":
                    var M = (new Date).getTime();
                    return h.each(y, function(t, e) {
                        a(e, M)
                    }),
                    h.each(x.State.calls, function(t, e) {
                        var i = !1;
                        e && h.each(e[1], function(t, o) {
                            var r = _ === n ? "" : _;
                            return !0 !== r && e[2].queue !== r && (_ !== n || !1 !== e[2].queue) || (h.each(y, function(t, n) {
                                if (n === o)
                                    return e[5] = {
                                        resume: !1
                                    },
                                    i = !0,
                                    !1
                            }),
                            !i && void 0)
                        })
                    }),
                    o();
                case "resume":
                    return h.each(y, function(t, e) {
                        l(e, M)
                    }),
                    h.each(x.State.calls, function(t, e) {
                        var i = !1;
                        e && h.each(e[1], function(t, o) {
                            var r = _ === n ? "" : _;
                            return !0 !== r && e[2].queue !== r && (_ !== n || !1 !== e[2].queue) || (!e[5] || (h.each(y, function(t, n) {
                                if (n === o)
                                    return e[5].resume = !0,
                                    i = !0,
                                    !1
                            }),
                            !i && void 0))
                        })
                    }),
                    o();
                case "finish":
                case "finishAll":
                case "stop":
                    h.each(y, function(t, e) {
                        s(e) && s(e).delayTimer && (clearTimeout(s(e).delayTimer.setTimeout),
                        s(e).delayTimer.next && s(e).delayTimer.next(),
                        delete s(e).delayTimer),
                        "finishAll" !== w || !0 !== _ && !S.isString(_) || (h.each(h.queue(e, S.isString(_) ? _ : ""), function(t, e) {
                            S.isFunction(e) && e()
                        }),
                        h.queue(e, S.isString(_) ? _ : "", []))
                    });
                    var N = [];
                    return h.each(x.State.calls, function(t, e) {
                        e && h.each(e[1], function(i, o) {
                            var r = _ === n ? "" : _;
                            if (!0 !== r && e[2].queue !== r && (_ !== n || !1 !== e[2].queue))
                                return !0;
                            h.each(y, function(i, n) {
                                if (n === o)
                                    if ((!0 === _ || S.isString(_)) && (h.each(h.queue(n, S.isString(_) ? _ : ""), function(t, e) {
                                        S.isFunction(e) && e(null, !0)
                                    }),
                                    h.queue(n, S.isString(_) ? _ : "", [])),
                                    "stop" === w) {
                                        var a = s(n);
                                        a && a.tweensContainer && !1 !== r && h.each(a.tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }),
                                        N.push(t)
                                    } else
                                        "finish" !== w && "finishAll" !== w || (e[2].duration = 1)
                            })
                        })
                    }),
                    "stop" === w && (h.each(N, function(t, e) {
                        p(e, !0)
                    }),
                    E.promise && E.resolver(y)),
                    o();
                default:
                    if (!h.isPlainObject(w) || S.isEmptyObject(w)) {
                        if (S.isString(w) && x.Redirects[w]) {
                            u = h.extend({}, _);
                            var $ = u.duration
                              , L = u.delay || 0;
                            return !0 === u.backwards && (y = h.extend(!0, [], y).reverse()),
                            h.each(y, function(t, e) {
                                parseFloat(u.stagger) ? u.delay = L + parseFloat(u.stagger) * t : S.isFunction(u.stagger) && (u.delay = L + u.stagger.call(e, t, k)),
                                u.drag && (u.duration = parseFloat($) || (/^(callout|transition)/.test(w) ? 1e3 : T),
                                u.duration = Math.max(u.duration * (u.backwards ? 1 - t / k : (t + 1) / k), .75 * u.duration, 200)),
                                x.Redirects[w].call(e, e, u || {}, t, k, y, E.promise ? E : n)
                            }),
                            o()
                        }
                        var R = "Velocity: First argument (" + w + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return E.promise ? E.rejecter(new Error(R)) : e.console,
                        o()
                    }
                    P = "start"
                }
                var H = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }
                  , j = [];
                h.each(y, function(t, e) {
                    S.isNode(e) && c(e, t)
                }),
                u = h.extend({}, x.defaults, _),
                u.loop = parseInt(u.loop, 10);
                var B = 2 * u.loop - 1;
                if (u.loop)
                    for (var F = 0; F < B; F++) {
                        var W = {
                            delay: u.delay,
                            progress: u.progress
                        };
                        F === B - 1 && (W.display = u.display,
                        W.visibility = u.visibility,
                        W.complete = u.complete),
                        t(y, "reverse", W)
                    }
                return o()
            };
            x = h.extend(E, x),
            x.animate = E;
            var k = e.requestAnimationFrame || g;
            if (!x.State.isMobile && i.hidden !== n) {
                var A = function() {
                    i.hidden ? (k = function(t) {
                        return setTimeout(function() {
                            t(!0)
                        }, 16)
                    }
                    ,
                    f()) : k = e.requestAnimationFrame || g
                };
                A(),
                i.addEventListener("visibilitychange", A)
            }
            return t.Velocity = x,
            t !== e && (t.fn.velocity = E,
            t.fn.velocity.defaults = x.defaults),
            h.each(["Down", "Up"], function(t, e) {
                x.Redirects["slide" + e] = function(t, i, o, r, s, a) {
                    var l = h.extend({}, i)
                      , c = l.begin
                      , u = l.complete
                      , d = {}
                      , f = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                    l.display === n && (l.display = "Down" === e ? "inline" === x.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"),
                    l.begin = function() {
                        0 === o && c && c.call(s, s);
                        for (var i in f)
                            if (f.hasOwnProperty(i)) {
                                d[i] = t.style[i];
                                var n = C.getPropertyValue(t, i);
                                f[i] = "Down" === e ? [n, 0] : [0, n]
                            }
                        d.overflow = t.style.overflow,
                        t.style.overflow = "hidden"
                    }
                    ,
                    l.complete = function() {
                        for (var e in d)
                            d.hasOwnProperty(e) && (t.style[e] = d[e]);
                        o === r - 1 && (u && u.call(s, s),
                        a && a.resolver(s))
                    }
                    ,
                    x(t, f, l)
                }
            }),
            h.each(["In", "Out"], function(t, e) {
                x.Redirects["fade" + e] = function(t, i, o, r, s, a) {
                    var l = h.extend({}, i)
                      , c = l.complete
                      , u = {
                        opacity: "In" === e ? 1 : 0
                    };
                    0 !== o && (l.begin = null),
                    l.complete = o !== r - 1 ? null : function() {
                        c && c.call(s, s),
                        a && a.resolver(s)
                    }
                    ,
                    l.display === n && (l.display = "In" === e ? "auto" : "none"),
                    x(this, u, l)
                }
            }),
            x
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o() {
        $(".products-carousel .products").each(function() {
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            })
        })
    }
    function r() {
        $(document).on("click", ".modal-toggle", function(t) {
            $(this).next(".modal-wrap").modal()
        }),
        $(document).on("click", ".modal-wrap .close", function(t) {
            $(this).closest(".modal-wrap").modal("hide")
        })
    }
    function s() {
        g.default.responsive.mobile || $("html").UItoTop({
            easingType: "easeOutQuart",
            containerClass: "ui-to-top fl-outicons-chevron1"
        })
    }
    i(30),
    i(24),
    i(26),
    i(23),
    i(27),
    i(22),
    i(7),
    i(15),
    i(20),
    i(21),
    i(6);
    var a = i(2)
      , l = n(a)
      , c = i(9)
      , u = n(c)
      , d = i(11)
      , f = n(d)
      , p = i(14)
      , h = n(p)
      , m = i(1)
      , g = n(m)
      , v = i(25)
      , y = n(v);
    i(16),
    i(18),
    i(19),
    i(17),
    i(8),
    i(12),
    i(10),
    i(13);
    for (var b in y.default.prototype)
        g.default[b] = y.default.prototype[b];
    $(document).ready(function() {
        var t = $(".js-dropdown")
          , e = new u.default
          , i = $('.js-top-menu ul[data-depth="0"]')
          , n = new l.default(t)
          , a = new h.default(i)
          , c = new f.default;
        n.init(),
        e.init(),
        a.init(),
        c.init();
        var d = $(".stick-up");
        d.length && $("body").width() > 1199 && (d.wrap('<div class="stickUpTop"><div class="stickUpHolder">'),
        $(".stickUpTop").tmStickUp()),
        o(),
        r(),
        s(),
        $("#cms").find("#testimonials").slick({
            infinite: !1,
            slidesToShow: 1,
            arrows: !1,
            dots: !0,
            slidesToScroll: 1
        }),
        $(document).on("click", "#back_to_top", function(t) {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    }),
    function(t) {
        t.fn.tmStickUp = function(e) {
            function i() {
                var e, i = !1;
                l.on("scroll", function() {
                    r = t(this).scrollTop(),
                    h = r > p ? "down" : "up",
                    p = r;
                    var l = n.correctionSelector.outerHeight(!0);
                    f = parseInt(a.scrollTop()),
                    e = c - l + 250 < f,
                    e && !i ? (s.addClass("isStuck"),
                    s.css({
                        position: "fixed",
                        top: l
                    }),
                    o.css({
                        height: u
                    }),
                    i = !0) : !e && i && (s.css({
                        top: -70
                    }),
                    setTimeout(function() {
                        s.removeClass("isStuck"),
                        s.css({
                            position: "relative",
                            top: 0
                        }),
                        o.css({
                            height: 0
                        })
                    }, 100),
                    i = !1)
                }).trigger("scroll")
            }
            var n = {
                correctionSelector: t(".correctionSelector")
            };
            t.extend(n, e);
            var o, r, s = t(this), a = t(window), l = t(document), c = 0, u = 0, d = 0, f = 0, p = 0, h = "";
            !function() {
                c = parseInt(s.offset().top),
                d = parseInt(s.css("margin-top")),
                u = parseInt(s.outerHeight(!0)),
                t('<div class="pseudoStickyBlock"></div>').insertAfter(s),
                o = t(".pseudoStickyBlock"),
                o.css({
                    position: "relative",
                    display: "block"
                }),
                i()
            }()
        }
    }(jQuery)
}
, function(t, e) {}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o() {
        s.default.each((0,
        s.default)(c), function(t, e) {
            (0,
            s.default)(e).TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "touchspin-up",
                verticaldownclass: "touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin js-increase-product-quantity",
                buttonup_class: "btn btn-touchspin js-touchspin js-decrease-product-quantity",
                min: parseInt((0,
                s.default)(e).attr("min"), 10),
                max: 1e6
            });
            var i = (0,
            s.default)(".js-cart-line-product-quantity");
            i.width(8 * (i.val().length + 1) + "px")
        })
    }
    var r = i(0)
      , s = n(r)
      , a = i(1)
      , l = n(a);
    l.default.cart = l.default.cart || {},
    l.default.cart.active_inputs = null;
    var c = 'input[name="product-quantity-spin"]';
    (0,
    s.default)(document).ready(function() {
        function t(t) {
            return "on.startupspin" === t || "on.startdownspin" === t
        }
        function e(t) {
            return "on.startupspin" === t
        }
        function i(t) {
            var e = t.parents(".bootstrap-touchspin").find(p);
            return e.is(":focus") ? null : e
        }
        function n(t) {
            var e = t.split("-")
              , i = void 0
              , n = void 0
              , o = "";
            for (i = 0; i < e.length; i++)
                n = e[i],
                0 !== i && (n = n.substring(0, 1).toUpperCase() + n.substring(1)),
                o += n;
            return o
        }
        function r(o, r) {
            if (!t(r))
                return {
                    url: o.attr("href"),
                    type: n(o.data("link-action"))
                };
            var s = i(o);
            if (s) {
                return e(r) ? {
                    url: s.data("up-url"),
                    type: "increaseProductQuantity"
                } : {
                    url: s.data("down-url"),
                    type: "decreaseProductQuantity"
                }
            }
        }
        function a(t, e, i) {
            return g(),
            s.default.ajax({
                url: t,
                method: "POST",
                data: e,
                dataType: "json",
                beforeSend: function(t) {
                    h.push(t)
                }
            }).then(function(t) {
                i.val(t.quantity);
                var e;
                e = i && i.dataset ? i.dataset : t,
                l.default.emit("updateCart", {
                    reason: e
                })
            }).fail(function(t) {
                l.default.emit("handleError", {
                    eventType: "updateProductQuantityInCart",
                    resp: t
                })
            })
        }
        function u(t) {
            return {
                ajax: "1",
                qty: Math.abs(t),
                action: "update",
                op: d(t)
            }
        }
        function d(t) {
            return t > 0 ? "up" : "down"
        }
        function f(t) {
            var e = (0,
            s.default)(t.currentTarget)
              , i = e.data("update-url")
              , n = e.attr("value")
              , o = e.val();
            if (o != parseInt(o) || o < 0 || isNaN(o))
                return void e.val(n);
            var r = o - n;
            if (0 != r) {
                a(i, u(r), e)
            }
        }
        var p = ".js-cart-line-product-quantity"
          , h = [];
        l.default.on("updateCart", function() {
            (0,
            s.default)(".quickview").modal("hide")
        }),
        l.default.on("updatedCart", function() {
            o()
        }),
        o();
        var m = (0,
        s.default)("body");
        (0,
        s.default)(document).on("keyup change", ".js-cart-line-product-quantity", function(t) {
            var e = (0,
            s.default)(".js-cart-line-product-quantity");
            e.width(8 * (e.val().length + 1) + "px")
        });
        var g = function() {
            for (var t; h.length > 0; )
                t = h.pop(),
                t.abort()
        }
          , v = function(t) {
            return (0,
            s.default)(t.parents(".bootstrap-touchspin").find("input"))
        }
          , y = function(t) {
            t.preventDefault();
            var e = (0,
            s.default)(t.currentTarget)
              , i = t.currentTarget.dataset
              , n = r(e, t.namespace)
              , o = {
                ajax: "1",
                action: "update"
            };
            void 0 !== n && (g(),
            s.default.ajax({
                url: n.url,
                method: "POST",
                data: o,
                dataType: "json",
                beforeSend: function(t) {
                    h.push(t)
                }
            }).then(function(t) {
                v(e).val(t.quantity),
                l.default.emit("updateCart", {
                    reason: i
                })
            }).fail(function(t) {
                l.default.emit("handleError", {
                    eventType: "updateProductInCart",
                    resp: t,
                    cartAction: n.type
                })
            }))
        };
        m.on("click", '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', y),
        m.on("touchspin.on.startdownspin", c, y),
        m.on("touchspin.on.startupspin", c, y),
        m.on("focusout", p, function(t) {
            f(t)
        }),
        m.on("keyup", p, function(t) {
            13 == t.keyCode && f(t)
        }),
        m.on("click", ".js-discount .code", function(t) {
            t.stopPropagation();
            var e = (0,
            s.default)(t.currentTarget);
            return (0,
            s.default)("[name=discount_name]").val(e.text()),
            !1
        })
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o() {
        0 !== (0,
        s.default)(".js-cancel-address").length && (0,
        s.default)(".checkout-step:not(.js-current-step) .step-title").addClass("not-allowed"),
        (0,
        s.default)(".js-terms a").on("click", function(t) {
            t.preventDefault();
            var e = (0,
            s.default)(t.target).attr("href");
            e && (e += "?content_only=1",
            s.default.get(e, function(t) {
                (0,
                s.default)("#modal").find(".js-modal-content").html((0,
                s.default)(t).find(".page-cms").contents())
            }).fail(function(t) {
                l.default.emit("handleError", {
                    eventType: "clickTerms",
                    resp: t
                })
            })),
            (0,
            s.default)("#modal").modal("show")
        }),
        (0,
        s.default)(".js-gift-checkbox").on("click", function(t) {
            (0,
            s.default)("#gift").collapse("toggle")
        })
    }
    var r = i(0)
      , s = n(r)
      , a = i(1)
      , l = n(a);
    (0,
    s.default)(document).ready(function() {
        1 === (0,
        s.default)("body#checkout").length && o(),
        l.default.on("updatedDeliveryForm", function(t) {
            void 0 !== t.deliveryOption && 0 !== t.deliveryOption.length && ((0,
            s.default)(".carrier-extra-content").hide(),
            t.deliveryOption.next(".carrier-extra-content").slideDown())
        })
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = i(1)
      , r = n(o)
      , s = i(0)
      , a = n(s);
    r.default.blockcart = r.default.blockcart || {},
    r.default.blockcart.showModal = function(t) {
        function e() {
            return (0,
            a.default)("#blockcart-modal")
        }
        var i = e();
        i.length && i.remove(),
        (0,
        a.default)("body").append(t),
        i = e(),
        i.modal("show").on("hidden.bs.modal", function(t) {
            r.default.emit("updateProduct", {
                reason: t.currentTarget.dataset
            })
        })
    }
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , r = i(0)
      , s = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r)
      , a = function() {
        function t() {
            n(this, t)
        }
        return o(t, [{
            key: "init",
            value: function() {
                this.parentFocus(),
                this.togglePasswordVisibility()
            }
        }, {
            key: "parentFocus",
            value: function() {
                (0,
                s.default)(".js-child-focus").focus(function() {
                    (0,
                    s.default)(this).closest(".js-parent-focus").addClass("focus")
                }),
                (0,
                s.default)(".js-child-focus").focusout(function() {
                    (0,
                    s.default)(this).closest(".js-parent-focus").removeClass("focus")
                })
            }
        }, {
            key: "togglePasswordVisibility",
            value: function() {
                (0,
                s.default)('button[data-action="show-password"]').on("click", function() {
                    var t = (0,
                    s.default)(this).closest(".input-group").children("input.js-visible-password");
                    "password" === t.attr("type") ? (t.attr("type", "text"),
                    (0,
                    s.default)(this).text((0,
                    s.default)(this).data("textHide"))) : (t.attr("type", "password"),
                    (0,
                    s.default)(this).text((0,
                    s.default)(this).data("textShow")))
                })
            }
        }]),
        t
    }();
    e.default = a,
    t.exports = e.default
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        var i = t.find(".slick-slide").length
          , n = e - 1
          , o = e + 1;
        n < 0 && (n = i - 1),
        o === i && (o = 0),
        t.find(".slick-prev").css("background-image", "url('" + t.find(".slick-slide").eq(n).find("img")[0].src + "')"),
        t.find(".slick-next").css("background-image", "url('" + t.find(".slick-slide").eq(o).find("img")[0].src + "')")
    }
    $(document).ready(function() {
        var t = $(".homeslider-container .homeslider");
        t.on("init", function() {
            n(t, 0)
        }),
        t.on("beforeChange", function(e, i, o, r) {
            n(t, r)
        }),
        t.slick({
            speed: 500,
            fade: !0,
            cssEase: "linear",
            autoplay: !0
        })
    })
}
, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , r = i(0)
      , s = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r);
    i(3);
    var a = function() {
        function t() {
            n(this, t)
        }
        return o(t, [{
            key: "init",
            value: function() {
                (0,
                s.default)("body").on("click", ".js-modal-thumb", function(t) {
                    (0,
                    s.default)(".js-modal-thumb").hasClass("selected") && (0,
                    s.default)(".js-modal-thumb").removeClass("selected"),
                    (0,
                    s.default)(t.currentTarget).addClass("selected"),
                    (0,
                    s.default)(".js-modal-product-cover").attr("src", (0,
                    s.default)(t.target).data("image-large-src")),
                    (0,
                    s.default)(".js-modal-product-cover").attr("title", (0,
                    s.default)(t.target).attr("title")),
                    (0,
                    s.default)(".js-modal-product-cover").attr("alt", (0,
                    s.default)(t.target).attr("alt"))
                }).on("click", "aside#thumbnails", function(t) {
                    "thumbnails" == t.target.id && (0,
                    s.default)("#product-modal").modal("hide")
                }),
                (0,
                s.default)(document).on("shown.bs.modal", "#product-modal", function(t) {
                    setTimeout(function() {
                        (0,
                        s.default)("#product").find(".modal-dialog .js-modal-product-images").slick({
                            infinite: !1,
                            vertical: !0,
                            slidesToShow: 5,
                            verticalSwiping: !0,
                            slidesToScroll: 1,
                            swipeToSlide: !0,
                            draggable: !1,
                            prevArrow: '<i class="fl-outicons-chevron1 arrow-up js-arrow-up"></i>',
                            nextArrow: '<i class="fl-outicons-chevron2 arrow-down js-arrow-down"></i>'
                        })
                    }, 900)
                }),
                (0,
                s.default)(document).on("hidden.bs.modal", "#product-modal", function(t) {
                    (0,
                    s.default)("#product").find("#main .js-modal-product-images.slick-slider").slick("unslick")
                })
            }
        }]),
        t
    }();
    e.default = a,
    t.exports = e.default
}
, function(t, e, i) {
    "use strict";
    function n() {
        c.default.responsive.mobile && !u ? (s("enable"),
        u = !0) : c.default.responsive.mobile || (s("disable"),
        u = !1)
    }
    function o() {
        f.off(),
        f.removeClass("active"),
        $(".menu > li > ul, .menu > li > ul.is-simplemenu ul, .menu > li > div.is-megamenu").removeClass("menu-mobile").parent().find(".menu-mobile-grover").remove(),
        $(".menu").removeAttr("style"),
        d.superfish("init"),
        $(".menu > li > ul").addClass("submenu-container clearfix"),
        $(".top-level-menu-li-span").each(function() {
            $(this).parent().children().length > 1 && $(this).addClass("sf-with-ul")
        })
    }
    function r() {
        var t = null !== document.ontouchstart ? "click" : "touchstart";
        d.superfish("destroy"),
        $(".menu").removeAttr("style"),
        f.on(t, function(t) {
            return $(this).toggleClass("active").parent().find("ul.menu").stop().slideToggle("medium"),
            !1
        }),
        $(".menu > li > ul, .menu > li > div.is-megamenu, .menu > li > ul.is-simplemenu ul, .is-megamenu ul.content > li > ul").addClass("menu-mobile clearfix").parent().prepend('<span class="menu-mobile-grover"></span>'),
        $(".menu .menu-mobile-grover").on(t, function(t) {
            var e = $(this).next().next(".menu-mobile");
            return e.is(":hidden") ? (e.slideDown(),
            $(this).addClass("active")) : (e.slideUp(),
            $(this).removeClass("active")),
            !1
        }),
        $(".default-menu > ul:first > li > a, .block_content > ul:first > li > a").on(t, function(t) {
            var e = $(this).prev().offset()
              , i = e.left - t.pageX;
            if ($(this).parent("li").find("ul").length && i >= 0 && i <= 20) {
                t.preventDefault();
                var n = $(this).next(".menu-mobile")
                  , o = $(this).prev();
                n.is(":hidden") ? (n.slideDown(),
                o.addClass("active")) : (n.slideUp(),
                o.removeClass("active"))
            }
        }),
        $(".top-level-menu-li-span").each(function() {
            $(this).parent().children().length > 1 && $(this).removeClass("sf-with-ul")
        }),
        $(document).mouseup(function(t) {
            0 === $(".default-menu").has(t.target).length && u && (d.slideUp(),
            f.removeClass("active"))
        })
    }
    function s(t) {
        "enable" === t ? r() : o()
    }
    function a() {
        $(".menu div.is-megamenu > div").each(function() {
            var t = 1;
            $(this).children(".megamenu-col").each(function(e, i) {
                t % 3 == 0 && $(this).addClass("first-in-line-sm"),
                t++
            })
        })
    }
    var l = i(1)
      , c = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(l)
      , u = !1
      , d = $("ul.menu")
      , f = $(".default-menu .menu-title");
    $(document).ready(function() {
        d = $("ul.menu"),
        f = $(".default-menu .menu-title"),
        a(),
        n(),
        $(window).resize(n)
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        var e = t;
        "undefined" != typeof contentOnly && contentOnly && (TMPRODUCTZOOMER_ZOOM_TYPE = "lens",
        TMPRODUCTZOOMER_ZOOM_SHOW_LENS = !0),
        "inner" === TMPRODUCTZOOMER_ZOOM_TYPE && (TMPRODUCTZOOMER_ZOOM_SCROLL = !1,
        TMPRODUCTZOOMER_ZOOM_LEVEL = 1),
        "lens" === TMPRODUCTZOOMER_ZOOM_TYPE && (TMPRODUCTZOOMER_ZOOM_BORDER_SIZE = TMPRODUCTZOOMER_ZOOM_LENS_BORDER_SIZE,
        TMPRODUCTZOOMER_ZOOM_BORDER_COLOR = TMPRODUCTZOOMER_ZOOM_LENS_BORDER_COLOR),
        $(".images-container .product-cover img").ezPlus({
            attrBigImageSrc: e,
            zoomType: TMPRODUCTZOOMER_ZOOM_TYPE,
            responsive: TMPRODUCTZOOMER_ZOOM_RESPONSIVE,
            cursor: TMPRODUCTZOOMER_ZOOM_CURSOR,
            easing: TMPRODUCTZOOMER_ZOOM_EASING,
            easingAmount: TMPRODUCTZOOMER_ZOOM_EASING_AMOUNT,
            scrollZoom: TMPRODUCTZOOMER_ZOOM_SCROLL,
            zoomLevel: TMPRODUCTZOOMER_ZOOM_LEVEL,
            minZoomLevel: TMPRODUCTZOOMER_ZOOM_MIN_LEVEL,
            maxZoomLevel: TMPRODUCTZOOMER_ZOOM_MAX_LEVEL,
            scrollZoomIncrement: TMPRODUCTZOOMER_ZOOM_SCROLL_INCREMENT,
            zoomWindowFadeIn: TMPRODUCTZOOMER_ZOOM_WINDOW_FADE_IN,
            zoomWindowFadeOut: TMPRODUCTZOOMER_ZOOM_WINDOW_FADE_OUT,
            zoomWindowWidth: TMPRODUCTZOOMER_ZOOM_WINDOW_WIDTH,
            zoomWindowHeight: TMPRODUCTZOOMER_ZOOM_WINDOW_HEIGHT,
            zoomWindowOffsetX: TMPRODUCTZOOMER_ZOOM_WINDOW_OFFSET_X,
            zoomWindowOffsetY: TMPRODUCTZOOMER_ZOOM_WINDOW_OFFSET_Y,
            zoomWindowPosition: TMPRODUCTZOOMER_ZOOM_WINDOW_POSITION,
            zoomWindowBgColour: TMPRODUCTZOOMER_ZOOM_WINDOW_BG_COLOUR,
            borderSize: TMPRODUCTZOOMER_ZOOM_BORDER_SIZE,
            borderColour: TMPRODUCTZOOMER_ZOOM_BORDER_COLOR,
            showLens: TMPRODUCTZOOMER_ZOOM_SHOW_LENS,
            lensSize: TMPRODUCTZOOMER_ZOOM_LENS_SIZE,
            lensFadeIn: TMPRODUCTZOOMER_ZOOM_FADE_IN,
            lensFadeOut: TMPRODUCTZOOMER_ZOOM_FADE_OUT,
            lensOpacity: TMPRODUCTZOOMER_ZOOM_LENS_OPACITY,
            lensShape: TMPRODUCTZOOMER_ZOOM_LENS_SHAPE,
            lensColour: TMPRODUCTZOOMER_ZOOM_LENS_COLOUR,
            lensBorderSize: TMPRODUCTZOOMER_ZOOM_LENS_BORDER_SIZE,
            lensBorderColour: TMPRODUCTZOOMER_ZOOM_LENS_BORDER_COLOR,
            containLensZoom: TMPRODUCTZOOMER_ZOOM_CONTAIN_LENS_ZOOM,
            tint: TMPRODUCTZOOMER_ZOOM_TINT,
            tintColour: TMPRODUCTZOOMER_ZOOM_TINT_COLOUR,
            tintOpacity: TMPRODUCTZOOMER_ZOOM_TINT_OPACITY,
            zoomTintFadeIn: TMPRODUCTZOOMER_ZOOM_WINDOW_TINT_FADE_IN,
            zoomTintFadeOut: TMPRODUCTZOOMER_ZOOM_WINDOW_TINT_FADE_OUT,
            respond: [{
                range: "1-767",
                zoomType: "lens"
            }]
        })
    }
    function o(t) {
        n(t)
    }
    $(document).ready(function() {
        if ("undefined" == typeof TMPRODUCTZOOMER_LIVE_MODE || !TMPRODUCTZOOMER_LIVE_MODE || TMPRODUCTZOOMER_IS_MOBILE)
            return !1;
        var t = $(".images-container")
          , e = $(this);
        n($(".thumb-container img.selected:visible", t).attr("data-image-large-src")),
        $(".thumb-container img.selected:visible", t).addClass("fancy"),
        TMPRODUCTZOOMER_IMAGE_CHANGE_EVENT && e.on("mouseenter", ".images-container .thumb-container img", function() {
            $(this).hasClass("fancy") || ($(".images-container .thumb-container img").removeClass("fancy"),
            $(this).trigger("click").addClass("fancy"),
            o($(this).attr("data-image-large-src")))
        }),
        e.on("click", ".images-container .thumb-container img", function() {
            $(".images-container .thumb-container img").removeClass("fancy"),
            $(this).addClass("fancy"),
            o($(this).attr("data-image-large-src"))
        }),
        TMPRODUCTZOOMER_FANCY_BOX && e.on("click", ".images-container .thumb-container img.fancy, .images-container .product-cover img", function() {
            $(".images-container .layer").trigger("click")
        }),
        e.on("ajaxComplete", function(t, e, i) {
            i.data.indexOf("action=productrefresh") && setTimeout(function() {
                o($(".thumb-container img.selected:visible").attr("data-image-large-src")),
                $(".thumb-container img.selected:visible").addClass("fancy")
            }, 300)
        })
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i),
            n && t(e, n),
            e
        }
    }()
      , a = function(t, e, i) {
        for (var n = !0; n; ) {
            var o = t
              , r = e
              , s = i;
            n = !1,
            null === o && (o = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(o, r);
            if (void 0 !== a) {
                if ("value"in a)
                    return a.value;
                var l = a.get;
                if (void 0 === l)
                    return;
                return l.call(s)
            }
            var c = Object.getPrototypeOf(o);
            if (null === c)
                return;
            t = c,
            e = r,
            i = s,
            n = !0,
            a = c = void 0
        }
    }
      , l = i(0)
      , c = n(l)
      , u = i(2)
      , d = n(u)
      , f = function(t) {
        function e() {
            o(this, e),
            a(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
        }
        return r(e, t),
        s(e, [{
            key: "init",
            value: function() {
                var t = this
                  , i = void 0;
                this.el.find("li").hover(function(e) {
                    t.el.parent().hasClass("mobile") || (i !== (0,
                    c.default)(e.currentTarget).attr("id") && (0 === (0,
                    c.default)(e.target).data("depth") && (0,
                    c.default)("#" + i + " .js-sub-menu").hide(),
                    i = (0,
                    c.default)(e.currentTarget).attr("id")),
                    i && 0 === (0,
                    c.default)(e.target).data("depth") && (0,
                    c.default)("#" + i + " .js-sub-menu").show().css({
                        top: (0,
                        c.default)("#" + i).height() + (0,
                        c.default)("#" + i).position().top
                    }))
                }),
                (0,
                c.default)("#menu-icon").on("click", function() {
                    (0,
                    c.default)("#mobile_top_menu_wrapper").slideToggle()
                }),
                (0,
                c.default)(document).mouseup(function(t) {
                    var e = (0,
                    c.default)("#mobile_top_menu_wrapper")
                      , i = (0,
                    c.default)("#menu-icon");
                    0 === e.has(t.target).length && 0 === i.has(t.target).length && (0,
                    c.default)("#mobile_top_menu_wrapper").slideUp()
                }),
                (0,
                c.default)(".js-top-menu").mouseleave(function() {
                    t.el.parent().hasClass("mobile") || (0,
                    c.default)("#" + i + " .js-sub-menu").hide()
                }),
                this.el.on("click", function(e) {
                    t.el.parent().hasClass("mobile") || e.stopPropagation()
                }),
                prestashop.on("responsive update", function(t) {
                    (0,
                    c.default)(".js-sub-menu").removeAttr("style")
                }),
                a(Object.getPrototypeOf(e.prototype), "init", this).call(this)
            }
        }, {
            key: "toggleMobileMenu",
            value: function() {}
        }]),
        e
    }(d.default);
    e.default = f,
    t.exports = e.default
}
, function(t, e, i) {
    "use strict";
    function n() {
        (0,
        s.default)("#order-return-form table thead input[type=checkbox]").on("click", function() {
            var t = (0,
            s.default)(this).prop("checked");
            (0,
            s.default)("#order-return-form table tbody input[type=checkbox]").each(function(e, i) {
                (0,
                s.default)(i).prop("checked", t)
            })
        })
    }
    function o() {
        (0,
        s.default)("body#order-detail") && n()
    }
    var r = i(0)
      , s = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(r);
    (0,
    s.default)(document).ready(o)
}
, function(t, e, i) {
    "use strict";
    !function(t) {
        var e = 0
          , i = function(e, i) {
            this.options = i,
            this.$elementFilestyle = [],
            this.$element = t(e)
        };
        i.prototype = {
            clear: function() {
                this.$element.val(""),
                this.$elementFilestyle.find(":text").val(""),
                this.$elementFilestyle.find(".badge").remove()
            },
            destroy: function() {
                this.$element.removeAttr("style").removeData("filestyle"),
                this.$elementFilestyle.remove()
            },
            disabled: function(t) {
                if (!0 === t)
                    this.options.disabled || (this.$element.attr("disabled", "true"),
                    this.$elementFilestyle.find("label").attr("disabled", "true"),
                    this.options.disabled = !0);
                else {
                    if (!1 !== t)
                        return this.options.disabled;
                    this.options.disabled && (this.$element.removeAttr("disabled"),
                    this.$elementFilestyle.find("label").removeAttr("disabled"),
                    this.options.disabled = !1)
                }
            },
            buttonBefore: function(t) {
                if (!0 === t)
                    this.options.buttonBefore || (this.options.buttonBefore = !0,
                    this.options.input && (this.$elementFilestyle.remove(),
                    this.constructor(),
                    this.pushNameFiles()));
                else {
                    if (!1 !== t)
                        return this.options.buttonBefore;
                    this.options.buttonBefore && (this.options.buttonBefore = !1,
                    this.options.input && (this.$elementFilestyle.remove(),
                    this.constructor(),
                    this.pushNameFiles()))
                }
            },
            icon: function(t) {
                if (!0 === t)
                    this.options.icon || (this.options.icon = !0,
                    this.$elementFilestyle.find("label").prepend(this.htmlIcon()));
                else {
                    if (!1 !== t)
                        return this.options.icon;
                    this.options.icon && (this.options.icon = !1,
                    this.$elementFilestyle.find(".icon-span-filestyle").remove())
                }
            },
            input: function(t) {
                if (!0 === t)
                    this.options.input || (this.options.input = !0,
                    this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()),
                    this.$elementFilestyle.find(".badge").remove(),
                    this.pushNameFiles(),
                    this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
                else {
                    if (!1 !== t)
                        return this.options.input;
                    if (this.options.input) {
                        this.options.input = !1,
                        this.$elementFilestyle.find(":text").remove();
                        var e = this.pushNameFiles();
                        e.length > 0 && this.options.badge && this.$elementFilestyle.find("label").append(' <span class="badge">' + e.length + "</span>"),
                        this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                    }
                }
            },
            size: function(t) {
                if (void 0 === t)
                    return this.options.size;
                var e = this.$elementFilestyle.find("label")
                  , i = this.$elementFilestyle.find("input");
                e.removeClass("btn-lg btn-sm"),
                i.removeClass("input-lg input-sm"),
                "nr" != t && (e.addClass("btn-" + t),
                i.addClass("input-" + t))
            },
            placeholder: function(t) {
                if (void 0 === t)
                    return this.options.placeholder;
                this.options.placeholder = t,
                this.$elementFilestyle.find("input").attr("placeholder", t)
            },
            buttonText: function(t) {
                if (void 0 === t)
                    return this.options.buttonText;
                this.options.buttonText = t,
                this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)
            },
            buttonName: function(t) {
                if (void 0 === t)
                    return this.options.buttonName;
                this.options.buttonName = t,
                this.$elementFilestyle.find("label").attr({
                    class: "btn " + this.options.buttonName
                })
            },
            iconName: function(t) {
                if (void 0 === t)
                    return this.options.iconName;
                this.$elementFilestyle.find(".icon-span-filestyle").attr({
                    class: "icon-span-filestyle " + this.options.iconName
                })
            },
            htmlIcon: function() {
                return this.options.icon ? '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ' : ""
            },
            htmlInput: function() {
                return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ' : ""
            },
            pushNameFiles: function() {
                var t = ""
                  , e = [];
                void 0 === this.$element[0].files ? e[0] = {
                    name: this.$element[0] && this.$element[0].value
                } : e = this.$element[0].files;
                for (var i = 0; i < e.length; i++)
                    t += e[i].name.split("\\").pop() + ", ";
                return "" !== t ? this.$elementFilestyle.find(":text").val(t.replace(/\, $/g, "")) : this.$elementFilestyle.find(":text").val(""),
                e
            },
            constructor: function() {
                var i = this
                  , n = ""
                  , o = i.$element.attr("id")
                  , r = "";
                "" !== o && o || (o = "filestyle-" + e,
                i.$element.attr({
                    id: o
                }),
                e++),
                r = '<span class="group-span-filestyle ' + (i.options.input ? "input-group-btn" : "") + '"><label for="' + o + '" class="btn ' + i.options.buttonName + " " + ("nr" == i.options.size ? "" : "btn-" + i.options.size) + '" ' + (i.options.disabled ? 'disabled="true"' : "") + ">" + i.htmlIcon() + '<span class="buttonText">' + i.options.buttonText + "</span></label></span>",
                n = i.options.buttonBefore ? r + i.htmlInput() : i.htmlInput() + r,
                i.$elementFilestyle = t('<div class="bootstrap-filestyle input-group">' + n + "</div>"),
                i.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function(t) {
                    if (13 === t.keyCode || 32 === t.charCode)
                        return i.$elementFilestyle.find("label").click(),
                        !1
                }),
                i.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(i.$elementFilestyle),
                i.options.disabled && i.$element.attr("disabled", "true"),
                i.$element.change(function() {
                    var t = i.pushNameFiles();
                    0 == i.options.input && i.options.badge ? 0 == i.$elementFilestyle.find(".badge").length ? i.$elementFilestyle.find("label").append(' <span class="badge">' + t.length + "</span>") : 0 == t.length ? i.$elementFilestyle.find(".badge").remove() : i.$elementFilestyle.find(".badge").html(t.length) : i.$elementFilestyle.find(".badge").remove()
                }),
                window.navigator.userAgent.search(/firefox/i) > -1 && i.$elementFilestyle.find("label").click(function() {
                    return i.$element.click(),
                    !1
                })
            }
        };
        var n = t.fn.filestyle;
        t.fn.filestyle = function(e, n) {
            var o = ""
              , r = this.each(function() {
                if ("file" === t(this).attr("type")) {
                    var r = t(this)
                      , s = r.data("filestyle")
                      , a = t.extend({}, t.fn.filestyle.defaults, e, "object" == typeof e && e);
                    s || (r.data("filestyle", s = new i(this,a)),
                    s.constructor()),
                    "string" == typeof e && (o = s[e](n))
                }
            });
            return void 0 !== typeof o ? o : r
        }
        ,
        t.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1,
            placeholder: ""
        },
        t.fn.filestyle.noConflict = function() {
            return t.fn.filestyle = n,
            this
        }
        ,
        t(function() {
            t(".filestyle").each(function() {
                var e = t(this)
                  , i = {
                    input: "false" !== e.attr("data-input"),
                    icon: "false" !== e.attr("data-icon"),
                    buttonBefore: "true" === e.attr("data-buttonBefore"),
                    disabled: "true" === e.attr("data-disabled"),
                    size: e.attr("data-size"),
                    buttonText: e.attr("data-buttonText"),
                    buttonName: e.attr("data-buttonName"),
                    iconName: e.attr("data-iconName"),
                    badge: "false" !== e.attr("data-badge"),
                    placeholder: e.attr("data-placeholder")
                };
                e.filestyle(i)
            })
        })
    }(window.jQuery)
}
, function(t, e, i) {
    "use strict";
    jQuery.extend(jQuery.easing, {
        easeInQuad: function(t, e, i, n, o) {
            return n * (e /= o) * e + i
        },
        easeOutQuad: function(t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, o) {
            return n * (e /= o) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, o) {
            return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
        },
        easeInExpo: function(t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, o) {
            return e == o ? i + n : n * (1 - Math.pow(2, -10 * e / o)) + i
        },
        easeInOutExpo: function(t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
        },
        easeInCirc: function(t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, o) {
            var r = 1.70158
              , s = 0
              , a = n;
            if (0 == e)
                return i;
            if (1 == (e /= o))
                return i + n;
            if (s || (s = .3 * o),
            a < Math.abs(n)) {
                a = n;
                var r = s / 4
            } else
                var r = s / (2 * Math.PI) * Math.asin(n / a);
            return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) + i
        },
        easeOutElastic: function(t, e, i, n, o) {
            var r = 1.70158
              , s = 0
              , a = n;
            if (0 == e)
                return i;
            if (1 == (e /= o))
                return i + n;
            if (s || (s = .3 * o),
            a < Math.abs(n)) {
                a = n;
                var r = s / 4
            } else
                var r = s / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / s) + n + i
        },
        easeInOutElastic: function(t, e, i, n, o) {
            var r = 1.70158
              , s = 0
              , a = n;
            if (0 == e)
                return i;
            if (2 == (e /= o / 2))
                return i + n;
            if (s || (s = o * (.3 * 1.5)),
            a < Math.abs(n)) {
                a = n;
                var r = s / 4
            } else
                var r = s / (2 * Math.PI) * Math.asin(n / a);
            return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, o, r) {
            return void 0 == r && (r = 1.70158),
            n * (e /= o) * e * ((r + 1) * e - r) + i
        },
        easeOutBack: function(t, e, i, n, o, r) {
            return void 0 == r && (r = 1.70158),
            n * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, o, r) {
            return void 0 == r && (r = 1.70158),
            (e /= o / 2) < 1 ? n / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : n / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i
        },
        easeInBounce: function(t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
        },
        easeOutBounce: function(t, e, i, n, o) {
            return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, o) {
            return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
        }
    })
}
, function(t, e, i) {
    "use strict";
    !function(t) {
        t.fn.scrollbox = function(e) {
            var i = {
                linear: !1,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: !0,
                onMouseOverPause: !0,
                paused: !1,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: !0,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: !1
            };
            return e = t.extend(i, e),
            e.scrollOffset = "vertical" === e.direction ? "scrollTop" : "scrollLeft",
            e.queue && (e.queue = t("#" + e.queue)),
            this.each(function() {
                var i, n, o, r, s, a, l, c, u, d = t(this), f = null, p = null, h = !1, m = 0, g = 0;
                e.onMouseOverPause && (d.bind("mouseover", function() {
                    h = !0
                }),
                d.bind("mouseout", function() {
                    h = !1
                })),
                i = d.children(e.listElement + ":first-child"),
                !1 === e.infiniteLoop && 0 === e.switchAmount && (e.switchAmount = i.children().length),
                a = function() {
                    if (!h) {
                        var o, s, a, l, c;
                        if (o = i.children(e.listItemElement + ":first-child"),
                        l = "auto" !== e.distance ? e.distance : "vertical" === e.direction ? o.outerHeight(!0) : o.outerWidth(!0),
                        e.linear ? a = Math.min(d[0][e.scrollOffset] + e.step, l) : (c = Math.max(3, parseInt(.3 * (l - d[0][e.scrollOffset]), 10)),
                        a = Math.min(d[0][e.scrollOffset] + c, l)),
                        d[0][e.scrollOffset] = a,
                        a >= l) {
                            for (s = 0; s < e.switchItems; s++)
                                e.queue && e.queue.find(e.listItemElement).length > 0 ? (i.append(e.queue.find(e.listItemElement)[0]),
                                i.children(e.listItemElement + ":first-child").remove()) : i.append(i.children(e.listItemElement + ":first-child")),
                                ++m;
                            if (d[0][e.scrollOffset] = 0,
                            clearInterval(f),
                            f = null,
                            t.isFunction(e.afterForward) && e.afterForward.call(d, {
                                switchCount: m,
                                currentFirstChild: i.children(e.listItemElement + ":first-child")
                            }),
                            e.triggerStackable && 0 !== g)
                                return void n();
                            if (!1 === e.infiniteLoop && m >= e.switchAmount)
                                return;
                            e.autoPlay && (p = setTimeout(r, 1e3 * e.delay))
                        }
                    }
                }
                ,
                l = function() {
                    if (!h) {
                        var o, s, a, l, c;
                        if (0 === d[0][e.scrollOffset]) {
                            for (s = 0; s < e.switchItems; s++)
                                i.children(e.listItemElement + ":last-child").insertBefore(i.children(e.listItemElement + ":first-child"));
                            o = i.children(e.listItemElement + ":first-child"),
                            l = "auto" !== e.distance ? e.distance : "vertical" === e.direction ? o.height() : o.width(),
                            d[0][e.scrollOffset] = l
                        }
                        if (e.linear ? a = Math.max(d[0][e.scrollOffset] - e.step, 0) : (c = Math.max(3, parseInt(.3 * d[0][e.scrollOffset], 10)),
                        a = Math.max(d[0][e.scrollOffset] - c, 0)),
                        d[0][e.scrollOffset] = a,
                        0 === a) {
                            if (--m,
                            clearInterval(f),
                            f = null,
                            t.isFunction(e.afterBackward) && e.afterBackward.call(d, {
                                switchCount: m,
                                currentFirstChild: i.children(e.listItemElement + ":first-child")
                            }),
                            e.triggerStackable && 0 !== g)
                                return void n();
                            e.autoPlay && (p = setTimeout(r, 1e3 * e.delay))
                        }
                    }
                }
                ,
                n = function() {
                    0 !== g && (g > 0 ? (g--,
                    p = setTimeout(r, 0)) : (g++,
                    p = setTimeout(o, 0)))
                }
                ,
                r = function() {
                    clearInterval(f),
                    f = setInterval(a, e.speed)
                }
                ,
                o = function() {
                    clearInterval(f),
                    f = setInterval(l, e.speed)
                }
                ,
                c = function() {
                    e.autoPlay = !0,
                    h = !1,
                    clearInterval(f),
                    f = setInterval(a, e.speed)
                }
                ,
                u = function() {
                    h = !0
                }
                ,
                s = function(t) {
                    e.delay = t || e.delay,
                    clearTimeout(p),
                    e.autoPlay && (p = setTimeout(r, 1e3 * e.delay))
                }
                ,
                e.autoPlay && (p = setTimeout(r, 1e3 * e.startDelay)),
                d.bind("resetClock", function(t) {
                    s(t)
                }),
                d.bind("forward", function() {
                    e.triggerStackable ? null !== f ? g++ : r() : (clearTimeout(p),
                    r())
                }),
                d.bind("backward", function() {
                    e.triggerStackable ? null !== f ? g-- : o() : (clearTimeout(p),
                    o())
                }),
                d.bind("pauseHover", function() {
                    u()
                }),
                d.bind("forwardHover", function() {
                    c()
                }),
                d.bind("speedUp", function(t, i) {
                    "undefined" === i && (i = Math.max(1, parseInt(e.speed / 2, 10))),
                    e.speed = i
                }),
                d.bind("speedDown", function(t, i) {
                    "undefined" === i && (i = 2 * e.speed),
                    e.speed = i
                }),
                d.bind("updateConfig", function(i, n) {
                    e = t.extend(e, n)
                })
            })
        }
    }(jQuery)
}
, function(t, e, i) {
    "use strict";
    !function(t) {
        t.fn.UItoTop = function(e) {
            var i = {
                text: "",
                min: 500,
                scrollSpeed: 800,
                containerID: "ui-to-top",
                containerClass: "ui-to-top fa fa-angle-up",
                easingType: "easeIn"
            }
              , n = t.extend(i, e)
              , o = "#" + n.containerID;
            t("body").append('<a href="#" id="' + n.containerID + '" class="' + n.containerClass + '" >' + n.text + "</a>"),
            t(o).click(function() {
                return t("html, body").stop().animate({
                    scrollTop: 0
                }, n.scrollSpeed, n.easingType),
                !1
            }),
            t(window).scroll(function() {
                var e = t(window).scrollTop();
                void 0 === document.body.style.maxHeight && t(o).css({
                    position: "absolute",
                    top: t(window).scrollTop() + t(window).height() - 50
                }),
                e > n.min ? t(o).stop(!0, !0).addClass("active") : t(o).removeClass("active")
            })
        }
    }(jQuery)
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        (0,
        s.default)("#search_filters").replaceWith(t.rendered_facets),
        (0,
        s.default)("#js-active-search-filters").replaceWith(t.rendered_active_filters),
        (0,
        s.default)("#js-product-list-top").replaceWith(t.rendered_products_top),
        (0,
        s.default)("#js-product-list").replaceWith(t.rendered_products),
        (0,
        s.default)("#js-product-list-bottom").replaceWith(t.rendered_products_bottom)
    }
    var r = i(0)
      , s = n(r)
      , a = i(1)
      , l = n(a);
    i(3),
    (0,
    s.default)(document).ready(function() {
        l.default.on("clickQuickView", function(e) {
            var i = {
                action: "quickview",
                id_product: e.dataset.idProduct,
                id_product_attribute: e.dataset.idProductAttribute
            };
            s.default.post(l.default.urls.pages.product, i, null, "json").then(function(e) {
                (0,
                s.default)("body").append(e.quickview_html);
                var i = (0,
                s.default)("#quickview-modal-" + e.product.id + "-" + e.product.id_product_attribute);
                i.modal("show"),
                t(i),
                i.on("hidden.bs.modal", function() {
                    i.remove()
                })
            }).fail(function(t) {
                l.default.emit("handleError", {
                    eventType: "clickQuickView",
                    resp: t
                })
            })
        });
        var t = function(t) {
            var e = t.find(".js-qv-product-images");
            (0,
            s.default)(".js-thumb").on("click", function(t) {
                (0,
                s.default)(".js-thumb").hasClass("selected") && (0,
                s.default)(".js-thumb").removeClass("selected"),
                (0,
                s.default)(t.currentTarget).addClass("selected"),
                (0,
                s.default)(".js-qv-product-cover").attr("src", (0,
                s.default)(t.target).data("image-large-src"))
            }),
            setTimeout(function() {
                e.slick({
                    slidesToShow: 5,
                    infinite: !1,
                    slidesToScroll: 1,
                    arrows: !1,
                    vertical: !0,
                    draggable: !1
                })
            }, 300),
            t.find("#quantity_wanted").TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "touchspin-up",
                verticaldownclass: "touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: 1,
                max: 1e6
            })
        };
        (0,
        s.default)("body").on("click", "#search_filter_toggler", function() {
            (0,
            s.default)("#search_filters_wrapper").addClass("active")
        }),
        (0,
        s.default)("#search_filter_controls .clear").on("click", function() {
            (0,
            s.default)("#search_filters_wrapper").removeClass("active")
        }),
        (0,
        s.default)("#search_filter_controls .ok").on("click", function() {
            (0,
            s.default)("#search_filters_wrapper").removeClass("active")
        });
        var e = function(t) {
            if (void 0 !== t.target.dataset.searchUrl)
                return t.target.dataset.searchUrl;
            if (void 0 === (0,
            s.default)(t.target).parent()[0].dataset.searchUrl)
                throw new Error("Can not parse search URL");
            return (0,
            s.default)(t.target).parent()[0].dataset.searchUrl
        };
        (0,
        s.default)("body").on("change", "#search_filters input[data-search-url]", function(t) {
            l.default.emit("updateFacets", e(t))
        }),
        (0,
        s.default)("body").on("click", ".js-search-filters-clear-all", function(t) {
            l.default.emit("updateFacets", e(t))
        }),
        (0,
        s.default)("body").on("click", ".js-search-link", function(t) {
            t.preventDefault(),
            l.default.emit("updateFacets", (0,
            s.default)(t.target).closest("a").get(0).href)
        }),
        (0,
        s.default)("body").on("change", "#search_filters select", function(t) {
            var e = (0,
            s.default)(t.target).closest("form");
            l.default.emit("updateFacets", "?" + e.serialize())
        }),
        l.default.on("updateProductList", function(t) {
            o(t)
        })
    })
}
, function(t, e, i) {
    "use strict";
    var n = i(0)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(n);
    (0,
    o.default)(document).ready(function() {
        function t() {
            (0,
            o.default)(".js-thumb").on("click", function(t) {
                (0,
                o.default)(".js-modal-product-cover").attr("src", (0,
                o.default)(t.target).data("image-large-src")),
                (0,
                o.default)(".selected").removeClass("selected"),
                (0,
                o.default)(t.target).addClass("selected"),
                (0,
                o.default)(".js-qv-product-cover").prop("src", (0,
                o.default)(t.currentTarget).data("image-large-src"))
            })
        }
        function e() {
            (0,
            o.default)(".page-content .js-qv-product-images").slick({
                slidesToShow: 5,
                infinite: !1,
                slidesToScroll: 1,
                arrows: !1,
                vertical: !0,
                draggable: !1
            })
        }
        function i() {
            (0,
            o.default)(".js-file-input").on("change", function(t) {
                var e = void 0
                  , i = void 0;
                (e = (0,
                o.default)(t.currentTarget)[0]) && (i = e.files[0]) && (0,
                o.default)(e).prev().text(i.name)
            })
        }
        function n(t, e) {
            var i = e.find(".js-qv-product-images");
            if (i.length) {
                var n = i.find(".thumb-container")
                  , o = i.find("img.selected").parent().index() + t;
                if (o === n.length ? o = 0 : o < 0 && (o = n.length - 1),
                !n.eq(o).hasClass("slick-active")) {
                    var r = o < 5 ? o : o - 4;
                    i.slick("slickGoTo", r)
                }
                n.eq(o).find("img").trigger("click")
            }
        }
        !function() {
            var t = (0,
            o.default)("#quantity_wanted");
            t.TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "touchspin-up",
                verticaldownclass: "touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: parseInt(t.attr("min"), 10),
                max: 1e6
            }),
            (0,
            o.default)(document).on("keyup change", "#quantity_wanted", function(t) {
                var e = (0,
                o.default)("#quantity_wanted")
                  , i = (0,
                o.default)(".product-refresh");
                return (0,
                o.default)(t.currentTarget).trigger("touchspin.stopspin"),
                i.trigger("click", {
                    eventType: "updatedProductQuantity"
                }),
                e.width(8 * (e.val().length + 1) + "px"),
                t.preventDefault(),
                !1
            })
        }(),
        i(),
        t(),
        e(),
        prestashop.on("updatedProduct", function(n) {
            if (i(),
            t(),
            n && n.product_minimal_quantity) {
                var r = parseInt(n.product_minimal_quantity, 10);
                (0,
                o.default)("#quantity_wanted").trigger("touchspin.updatesettings", {
                    min: r
                })
            }
            e();
            var s = (0,
            o.default)(".quickview .js-qv-product-images");
            s.length && s.slick({
                slidesToShow: 5,
                infinite: !1,
                slidesToScroll: 1,
                arrows: !1,
                vertical: !0,
                draggable: !1
            }),
            (0,
            o.default)((0,
            o.default)(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade"),
            (0,
            o.default)(".js-product-images-modal").replaceWith(n.product_images_modal)
        }),
        (0,
        o.default)(document).on("click", "#prev-img", function(t) {
            n(-1, (0,
            o.default)(this).closest(".images-container"))
        }),
        (0,
        o.default)(document).on("click", "#next-img", function(t) {
            n(1, (0,
            o.default)(this).closest(".images-container"))
        }),
        (0,
        o.default)(document).on("swipeleft", ".images-container", function(t) {
            n(1, (0,
            o.default)(this))
        }),
        (0,
        o.default)(document).on("swiperight", ".images-container", function(t) {
            n(-1, (0,
            o.default)(this))
        })
    })
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        var i = e.children().detach();
        e.empty().append(t.children().detach()),
        t.append(i)
    }
    function r() {
        c.default.responsive.mobile ? (0,
        a.default)("*[id^='_desktop_']").each(function(t, e) {
            var i = (0,
            a.default)("#" + e.id.replace("_desktop_", "_mobile_"));
            i.length && o((0,
            a.default)(e), i)
        }) : (0,
        a.default)("*[id^='_mobile_']").each(function(t, e) {
            var i = (0,
            a.default)("#" + e.id.replace("_mobile_", "_desktop_"));
            i.length && o((0,
            a.default)(e), i)
        }),
        c.default.emit("responsive update", {
            mobile: c.default.responsive.mobile
        })
    }
    var s = i(0)
      , a = n(s)
      , l = i(1)
      , c = n(l);
    c.default.responsive = c.default.responsive || {},
    c.default.responsive.current_width = window.innerWidth,
    c.default.responsive.min_width = 992,
    c.default.responsive.mobile = c.default.responsive.current_width < c.default.responsive.min_width,
    (0,
    a.default)(window).on("resize", function() {
        var t = c.default.responsive.current_width
          , e = c.default.responsive.min_width
          , i = window.innerWidth
          , n = t >= e && i < e || t < e && i >= e;
        c.default.responsive.current_width = i,
        c.default.responsive.mobile = c.default.responsive.current_width < c.default.responsive.min_width,
        n && r()
    }),
    (0,
    a.default)(document).ready(function() {
        c.default.responsive.mobile && r()
    })
}
, function(t, e, i) {
    "use strict";
    !function(t) {
        function e(t, e) {
            return t + ".touchspin_" + e
        }
        function i(i, n) {
            return t.map(i, function(t) {
                return e(t, n)
            })
        }
        var n = 0;
        t.fn.TouchSpin = function(e) {
            if ("destroy" === e)
                return void this.each(function() {
                    var e = t(this)
                      , n = e.data();
                    t(document).off(i(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], n.spinnerid).join(" "))
                });
            var o = {
                min: 0,
                max: 100,
                initval: "",
                replacementval: "",
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: "round",
                stepintervaldelay: 500,
                verticalbuttons: !1,
                verticalupclass: "glyphicon glyphicon-chevron-up",
                verticaldownclass: "glyphicon glyphicon-chevron-down",
                prefix: "",
                postfix: "",
                prefix_extraclass: "",
                postfix_extraclass: "",
                booster: !0,
                boostat: 10,
                maxboostedstep: !1,
                mousewheel: !0,
                buttondown_class: "btn btn-default",
                buttonup_class: "btn btn-default",
                buttondown_txt: "-",
                buttonup_txt: "+"
            }
              , r = {
                min: "min",
                max: "max",
                initval: "init-val",
                replacementval: "replacement-val",
                step: "step",
                decimals: "decimals",
                stepinterval: "step-interval",
                verticalbuttons: "vertical-buttons",
                verticalupclass: "vertical-up-class",
                verticaldownclass: "vertical-down-class",
                forcestepdivisibility: "force-step-divisibility",
                stepintervaldelay: "step-interval-delay",
                prefix: "prefix",
                postfix: "postfix",
                prefix_extraclass: "prefix-extra-class",
                postfix_extraclass: "postfix-extra-class",
                booster: "booster",
                boostat: "boostat",
                maxboostedstep: "max-boosted-step",
                mousewheel: "mouse-wheel",
                buttondown_class: "button-down-class",
                buttonup_class: "button-up-class",
                buttondown_txt: "button-down-txt",
                buttonup_txt: "button-up-txt"
            };
            return this.each(function() {
                function s() {
                    "" !== C.initval && "" === N.val() && N.val(C.initval)
                }
                function a(t) {
                    u(t),
                    b();
                    var e = k.input.val();
                    "" !== e && (e = Number(k.input.val()),
                    k.input.val(e.toFixed(C.decimals)))
                }
                function l() {
                    C = t.extend({}, o, $, c(), e)
                }
                function c() {
                    var e = {};
                    return t.each(r, function(t, i) {
                        var n = "bts-" + i;
                        N.is("[data-" + n + "]") && (e[t] = N.data(n))
                    }),
                    e
                }
                function u(e) {
                    C = t.extend({}, C, e)
                }
                function d() {
                    var t = N.val()
                      , e = N.parent();
                    "" !== t && (t = Number(t).toFixed(C.decimals)),
                    N.data("initvalue", t).val(t),
                    N.addClass("form-control"),
                    e.hasClass("input-group") ? f(e) : p()
                }
                function f(e) {
                    e.addClass("bootstrap-touchspin");
                    var i, n, o = N.prev(), r = N.next(), s = '<span class="input-group-addon bootstrap-touchspin-prefix">' + C.prefix + "</span>", a = '<span class="input-group-addon bootstrap-touchspin-postfix">' + C.postfix + "</span>";
                    o.hasClass("input-group-btn") ? (i = '<button class="' + C.buttondown_class + ' bootstrap-touchspin-down" type="button">' + C.buttondown_txt + "</button>",
                    o.append(i)) : (i = '<span class="input-group-btn"><button class="' + C.buttondown_class + ' bootstrap-touchspin-down" type="button">' + C.buttondown_txt + "</button></span>",
                    t(i).insertBefore(N)),
                    r.hasClass("input-group-btn") ? (n = '<button class="' + C.buttonup_class + ' bootstrap-touchspin-up" type="button">' + C.buttonup_txt + "</button>",
                    r.prepend(n)) : (n = '<span class="input-group-btn"><button class="' + C.buttonup_class + ' bootstrap-touchspin-up" type="button">' + C.buttonup_txt + "</button></span>",
                    t(n).insertAfter(N)),
                    t(s).insertBefore(N),
                    t(a).insertAfter(N),
                    E = e
                }
                function p() {
                    var e;
                    e = C.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + C.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + C.postfix + '</span><span class="input-group-btn-vertical"><button class="' + C.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + C.verticalupclass + '"></i></button><button class="' + C.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + C.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + C.buttondown_class + ' bootstrap-touchspin-down" type="button">' + C.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + C.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + C.postfix + '</span><span class="input-group-btn"><button class="' + C.buttonup_class + ' bootstrap-touchspin-up" type="button">' + C.buttonup_txt + "</button></span></div>",
                    E = t(e).insertBefore(N),
                    t(".bootstrap-touchspin-prefix", E).after(N),
                    N.hasClass("input-sm") ? E.addClass("input-group-sm") : N.hasClass("input-lg") && E.addClass("input-group-lg")
                }
                function h() {
                    k = {
                        down: t(".bootstrap-touchspin-down", E),
                        up: t(".bootstrap-touchspin-up", E),
                        input: t("input", E),
                        prefix: t(".bootstrap-touchspin-prefix", E).addClass(C.prefix_extraclass),
                        postfix: t(".bootstrap-touchspin-postfix", E).addClass(C.postfix_extraclass)
                    }
                }
                function m() {
                    "" === C.prefix && k.prefix.hide(),
                    "" === C.postfix && k.postfix.hide()
                }
                function g() {
                    N.on("keydown", function(t) {
                        var e = t.keyCode || t.which;
                        38 === e ? ("up" !== R && (w(),
                        x()),
                        t.preventDefault()) : 40 === e && ("down" !== R && (T(),
                        _()),
                        t.preventDefault())
                    }),
                    N.on("keyup", function(t) {
                        var e = t.keyCode || t.which;
                        38 === e ? O() : 40 === e && O()
                    }),
                    N.on("blur", function() {
                        b()
                    }),
                    k.down.on("keydown", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("down" !== R && (T(),
                        _()),
                        t.preventDefault())
                    }),
                    k.down.on("keyup", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || O()
                    }),
                    k.up.on("keydown", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("up" !== R && (w(),
                        x()),
                        t.preventDefault())
                    }),
                    k.up.on("keyup", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || O()
                    }),
                    k.down.on("mousedown.touchspin", function(t) {
                        k.down.off("touchstart.touchspin"),
                        N.is(":disabled") || (T(),
                        _(),
                        t.preventDefault(),
                        t.stopPropagation())
                    }),
                    k.down.on("touchstart.touchspin", function(t) {
                        k.down.off("mousedown.touchspin"),
                        N.is(":disabled") || (T(),
                        _(),
                        t.preventDefault(),
                        t.stopPropagation())
                    }),
                    k.up.on("mousedown.touchspin", function(t) {
                        k.up.off("touchstart.touchspin"),
                        N.is(":disabled") || (w(),
                        x(),
                        t.preventDefault(),
                        t.stopPropagation())
                    }),
                    k.up.on("touchstart.touchspin", function(t) {
                        k.up.off("mousedown.touchspin"),
                        N.is(":disabled") || (w(),
                        x(),
                        t.preventDefault(),
                        t.stopPropagation())
                    }),
                    k.up.on("mouseout touchleave touchend touchcancel", function(t) {
                        R && (t.stopPropagation(),
                        O())
                    }),
                    k.down.on("mouseout touchleave touchend touchcancel", function(t) {
                        R && (t.stopPropagation(),
                        O())
                    }),
                    k.down.on("mousemove touchmove", function(t) {
                        R && (t.stopPropagation(),
                        t.preventDefault())
                    }),
                    k.up.on("mousemove touchmove", function(t) {
                        R && (t.stopPropagation(),
                        t.preventDefault())
                    }),
                    t(document).on(i(["mouseup", "touchend", "touchcancel"], n).join(" "), function(t) {
                        R && (t.preventDefault(),
                        O())
                    }),
                    t(document).on(i(["mousemove", "touchmove", "scroll", "scrollstart"], n).join(" "), function(t) {
                        R && (t.preventDefault(),
                        O())
                    }),
                    N.on("mousewheel DOMMouseScroll", function(t) {
                        if (C.mousewheel && N.is(":focus")) {
                            var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                            t.stopPropagation(),
                            t.preventDefault(),
                            e < 0 ? T() : w()
                        }
                    })
                }
                function v() {
                    N.on("touchspin.uponce", function() {
                        O(),
                        w()
                    }),
                    N.on("touchspin.downonce", function() {
                        O(),
                        T()
                    }),
                    N.on("touchspin.startupspin", function() {
                        x()
                    }),
                    N.on("touchspin.startdownspin", function() {
                        _()
                    }),
                    N.on("touchspin.stopspin", function() {
                        O()
                    }),
                    N.on("touchspin.updatesettings", function(t, e) {
                        a(e)
                    })
                }
                function y(t) {
                    switch (C.forcestepdivisibility) {
                    case "round":
                        return (Math.round(t / C.step) * C.step).toFixed(C.decimals);
                    case "floor":
                        return (Math.floor(t / C.step) * C.step).toFixed(C.decimals);
                    case "ceil":
                        return (Math.ceil(t / C.step) * C.step).toFixed(C.decimals);
                    default:
                        return t
                    }
                }
                function b() {
                    var t, e, i;
                    if ("" === (t = N.val()))
                        return void ("" !== C.replacementval && (N.val(C.replacementval),
                        N.trigger("change")));
                    C.decimals > 0 && "." === t || (e = parseFloat(t),
                    isNaN(e) && (e = "" !== C.replacementval ? C.replacementval : 0),
                    i = e,
                    e.toString() !== t && (i = e),
                    e < C.min && (i = C.min),
                    e > C.max && (i = C.max),
                    i = y(i),
                    Number(t).toString() !== i.toString() && (N.val(i),
                    N.trigger("change")))
                }
                function S() {
                    if (C.booster) {
                        var t = Math.pow(2, Math.floor(L / C.boostat)) * C.step;
                        return C.maxboostedstep && t > C.maxboostedstep && (t = C.maxboostedstep,
                        A = Math.round(A / t) * t),
                        Math.max(C.step, t)
                    }
                    return C.step
                }
                function w() {
                    b(),
                    A = parseFloat(k.input.val()),
                    isNaN(A) && (A = 0);
                    var t = A
                      , e = S();
                    A += e,
                    A > C.max && (A = C.max,
                    N.trigger("touchspin.on.max"),
                    O()),
                    k.input.val(Number(A).toFixed(C.decimals)),
                    t !== A && N.trigger("change")
                }
                function T() {
                    b(),
                    A = parseFloat(k.input.val()),
                    isNaN(A) && (A = 0);
                    var t = A
                      , e = S();
                    A -= e,
                    A < C.min && (A = C.min,
                    N.trigger("touchspin.on.min"),
                    O()),
                    k.input.val(A.toFixed(C.decimals)),
                    t !== A && N.trigger("change")
                }
                function _() {
                    O(),
                    L = 0,
                    R = "down",
                    N.trigger("touchspin.on.startspin"),
                    N.trigger("touchspin.on.startdownspin"),
                    P = setTimeout(function() {
                        I = setInterval(function() {
                            L++,
                            T()
                        }, C.stepinterval)
                    }, C.stepintervaldelay)
                }
                function x() {
                    O(),
                    L = 0,
                    R = "up",
                    N.trigger("touchspin.on.startspin"),
                    N.trigger("touchspin.on.startupspin"),
                    M = setTimeout(function() {
                        D = setInterval(function() {
                            L++,
                            w()
                        }, C.stepinterval)
                    }, C.stepintervaldelay)
                }
                function O() {
                    switch (clearTimeout(P),
                    clearTimeout(M),
                    clearInterval(I),
                    clearInterval(D),
                    R) {
                    case "up":
                        N.trigger("touchspin.on.stopupspin"),
                        N.trigger("touchspin.on.stopspin");
                        break;
                    case "down":
                        N.trigger("touchspin.on.stopdownspin"),
                        N.trigger("touchspin.on.stopspin")
                    }
                    L = 0,
                    R = !1
                }
                var C, E, k, A, I, D, P, M, N = t(this), $ = N.data(), L = 0, R = !1;
                !function() {
                    N.data("alreadyinitialized") || (N.data("alreadyinitialized", !0),
                    n += 1,
                    N.data("spinnerid", n),
                    N.is("input") && (l(),
                    s(),
                    b(),
                    d(),
                    h(),
                    m(),
                    g(),
                    v(),
                    k.input.css("display", "block")))
                }()
            })
        }
    }(jQuery)
}
, function(t, e, i) {
    "use strict";
    if ("undefined" == typeof jQuery)
        throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    +function(t) {
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(jQuery),
    function() {
        function t(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function e(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , r = function(t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }
            function i(t) {
                return (t[0] || t).nodeType
            }
            function n() {
                return {
                    bindType: s.end,
                    delegateType: s.end,
                    handle: function(e) {
                        if (t(e.target).is(this))
                            return e.handleObj.handler.apply(this, arguments)
                    }
                }
            }
            function o() {
                if (window.QUnit)
                    return !1;
                var t = document.createElement("bootstrap");
                for (var e in a)
                    if (void 0 !== t.style[e])
                        return {
                            end: a[e]
                        };
                return !1
            }
            function r(e) {
                var i = this
                  , n = !1;
                return t(this).one(l.TRANSITION_END, function() {
                    n = !0
                }),
                setTimeout(function() {
                    n || l.triggerTransitionEnd(i)
                }, e),
                this
            }
            var s = !1
              , a = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            }
              , l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));return t
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    return e || (e = t.getAttribute("href") || "",
                    e = /^#[a-z]/i.test(e) ? e : null),
                    e
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(e) {
                    t(e).trigger(s.end)
                },
                supportsTransitionEnd: function() {
                    return Boolean(s)
                },
                typeCheckConfig: function(t, n, o) {
                    for (var r in o)
                        if (o.hasOwnProperty(r)) {
                            var s = o[r]
                              , a = n[r]
                              , l = a && i(a) ? "element" : e(a);
                            if (!new RegExp(s).test(l))
                                throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".')
                        }
                }
            };
            return function() {
                s = o(),
                t.fn.emulateTransitionEnd = r,
                l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = n())
            }(),
            l
        }(jQuery)
          , s = (function(t) {
            var e = "alert"
              , n = "bs.alert"
              , s = "." + n
              , a = t.fn[e]
              , l = {
                DISMISS: '[data-dismiss="alert"]'
            }
              , c = {
                CLOSE: "close" + s,
                CLOSED: "closed" + s,
                CLICK_DATA_API: "click" + s + ".data-api"
            }
              , u = {
                ALERT: "alert",
                FADE: "fade",
                SHOW: "show"
            }
              , d = function() {
                function e(t) {
                    i(this, e),
                    this._element = t
                }
                return e.prototype.close = function(t) {
                    t = t || this._element;
                    var e = this._getRootElement(t);
                    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                }
                ,
                e.prototype.dispose = function() {
                    t.removeData(this._element, n),
                    this._element = null
                }
                ,
                e.prototype._getRootElement = function(e) {
                    var i = r.getSelectorFromElement(e)
                      , n = !1;
                    return i && (n = t(i)[0]),
                    n || (n = t(e).closest("." + u.ALERT)[0]),
                    n
                }
                ,
                e.prototype._triggerCloseEvent = function(e) {
                    var i = t.Event(c.CLOSE);
                    return t(e).trigger(i),
                    i
                }
                ,
                e.prototype._removeElement = function(e) {
                    var i = this;
                    return t(e).removeClass(u.SHOW),
                    r.supportsTransitionEnd() && t(e).hasClass(u.FADE) ? void t(e).one(r.TRANSITION_END, function(t) {
                        return i._destroyElement(e, t)
                    }).emulateTransitionEnd(150) : void this._destroyElement(e)
                }
                ,
                e.prototype._destroyElement = function(e) {
                    t(e).detach().trigger(c.CLOSED).remove()
                }
                ,
                e._jQueryInterface = function(i) {
                    return this.each(function() {
                        var o = t(this)
                          , r = o.data(n);
                        r || (r = new e(this),
                        o.data(n, r)),
                        "close" === i && r[i](this)
                    })
                }
                ,
                e._handleDismiss = function(t) {
                    return function(e) {
                        e && e.preventDefault(),
                        t.close(this)
                    }
                }
                ,
                o(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }]),
                e
            }();
            t(document).on(c.CLICK_DATA_API, l.DISMISS, d._handleDismiss(new d)),
            t.fn[e] = d._jQueryInterface,
            t.fn[e].Constructor = d,
            t.fn[e].noConflict = function() {
                return t.fn[e] = a,
                d._jQueryInterface
            }
        }(jQuery),
        function(t) {
            var e = "button"
              , n = "bs.button"
              , r = "." + n
              , s = ".data-api"
              , a = t.fn[e]
              , l = {
                ACTIVE: "active",
                BUTTON: "btn",
                FOCUS: "focus"
            }
              , c = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            }
              , u = {
                CLICK_DATA_API: "click" + r + s,
                FOCUS_BLUR_DATA_API: "focus" + r + s + " blur" + r + s
            }
              , d = function() {
                function e(t) {
                    i(this, e),
                    this._element = t
                }
                return e.prototype.toggle = function() {
                    var e = !0
                      , i = t(this._element).closest(c.DATA_TOGGLE)[0];
                    if (i) {
                        var n = t(this._element).find(c.INPUT)[0];
                        if (n) {
                            if ("radio" === n.type)
                                if (n.checked && t(this._element).hasClass(l.ACTIVE))
                                    e = !1;
                                else {
                                    var o = t(i).find(c.ACTIVE)[0];
                                    o && t(o).removeClass(l.ACTIVE)
                                }
                            e && (n.checked = !t(this._element).hasClass(l.ACTIVE),
                            t(n).trigger("change")),
                            n.focus()
                        }
                    }
                    this._element.setAttribute("aria-pressed", !t(this._element).hasClass(l.ACTIVE)),
                    e && t(this._element).toggleClass(l.ACTIVE)
                }
                ,
                e.prototype.dispose = function() {
                    t.removeData(this._element, n),
                    this._element = null
                }
                ,
                e._jQueryInterface = function(i) {
                    return this.each(function() {
                        var o = t(this).data(n);
                        o || (o = new e(this),
                        t(this).data(n, o)),
                        "toggle" === i && o[i]()
                    })
                }
                ,
                o(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }]),
                e
            }();
            t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                e.preventDefault();
                var i = e.target;
                t(i).hasClass(l.BUTTON) || (i = t(i).closest(c.BUTTON)),
                d._jQueryInterface.call(t(i), "toggle")
            }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                var i = t(e.target).closest(c.BUTTON)[0];
                t(i).toggleClass(l.FOCUS, /^focus(in)?$/.test(e.type))
            }),
            t.fn[e] = d._jQueryInterface,
            t.fn[e].Constructor = d,
            t.fn[e].noConflict = function() {
                return t.fn[e] = a,
                d._jQueryInterface
            }
        }(jQuery),
        function(t) {
            var e = "carousel"
              , s = "bs.carousel"
              , a = "." + s
              , l = ".data-api"
              , c = t.fn[e]
              , u = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            }
              , d = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }
              , f = {
                NEXT: "next",
                PREV: "prev",
                LEFT: "left",
                RIGHT: "right"
            }
              , p = {
                SLIDE: "slide" + a,
                SLID: "slid" + a,
                KEYDOWN: "keydown" + a,
                MOUSEENTER: "mouseenter" + a,
                MOUSELEAVE: "mouseleave" + a,
                LOAD_DATA_API: "load" + a + l,
                CLICK_DATA_API: "click" + a + l
            }
              , h = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item"
            }
              , m = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }
              , g = function() {
                function l(e, n) {
                    i(this, l),
                    this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this._config = this._getConfig(n),
                    this._element = t(e)[0],
                    this._indicatorsElement = t(this._element).find(m.INDICATORS)[0],
                    this._addEventListeners()
                }
                return l.prototype.next = function() {
                    if (this._isSliding)
                        throw new Error("Carousel is sliding");
                    this._slide(f.NEXT)
                }
                ,
                l.prototype.nextWhenVisible = function() {
                    document.hidden || this.next()
                }
                ,
                l.prototype.prev = function() {
                    if (this._isSliding)
                        throw new Error("Carousel is sliding");
                    this._slide(f.PREVIOUS)
                }
                ,
                l.prototype.pause = function(e) {
                    e || (this._isPaused = !0),
                    t(this._element).find(m.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element),
                    this.cycle(!0)),
                    clearInterval(this._interval),
                    this._interval = null
                }
                ,
                l.prototype.cycle = function(t) {
                    t || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval),
                    this._interval = null),
                    this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                ,
                l.prototype.to = function(e) {
                    var i = this;
                    this._activeElement = t(this._element).find(m.ACTIVE_ITEM)[0];
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) {
                        if (this._isSliding)
                            return void t(this._element).one(p.SLID, function() {
                                return i.to(e)
                            });
                        if (n === e)
                            return this.pause(),
                            void this.cycle();
                        var o = e > n ? f.NEXT : f.PREVIOUS;
                        this._slide(o, this._items[e])
                    }
                }
                ,
                l.prototype.dispose = function() {
                    t(this._element).off(a),
                    t.removeData(this._element, s),
                    this._items = null,
                    this._config = null,
                    this._element = null,
                    this._interval = null,
                    this._isPaused = null,
                    this._isSliding = null,
                    this._activeElement = null,
                    this._indicatorsElement = null
                }
                ,
                l.prototype._getConfig = function(i) {
                    return i = t.extend({}, u, i),
                    r.typeCheckConfig(e, i, d),
                    i
                }
                ,
                l.prototype._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && t(this._element).on(p.KEYDOWN, function(t) {
                        return e._keydown(t)
                    }),
                    "hover" !== this._config.pause || "ontouchstart"in document.documentElement || t(this._element).on(p.MOUSEENTER, function(t) {
                        return e.pause(t)
                    }).on(p.MOUSELEAVE, function(t) {
                        return e.cycle(t)
                    })
                }
                ,
                l.prototype._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                        case 37:
                            t.preventDefault(),
                            this.prev();
                            break;
                        case 39:
                            t.preventDefault(),
                            this.next();
                            break;
                        default:
                            return
                        }
                }
                ,
                l.prototype._getItemIndex = function(e) {
                    return this._items = t.makeArray(t(e).parent().find(m.ITEM)),
                    this._items.indexOf(e)
                }
                ,
                l.prototype._getItemByDirection = function(t, e) {
                    var i = t === f.NEXT
                      , n = t === f.PREVIOUS
                      , o = this._getItemIndex(e)
                      , r = this._items.length - 1;
                    if ((n && 0 === o || i && o === r) && !this._config.wrap)
                        return e;
                    var s = t === f.PREVIOUS ? -1 : 1
                      , a = (o + s) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }
                ,
                l.prototype._triggerSlideEvent = function(e, i) {
                    var n = t.Event(p.SLIDE, {
                        relatedTarget: e,
                        direction: i
                    });
                    return t(this._element).trigger(n),
                    n
                }
                ,
                l.prototype._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        t(this._indicatorsElement).find(m.ACTIVE).removeClass(h.ACTIVE);
                        var i = this._indicatorsElement.children[this._getItemIndex(e)];
                        i && t(i).addClass(h.ACTIVE)
                    }
                }
                ,
                l.prototype._slide = function(e, i) {
                    var n = this
                      , o = t(this._element).find(m.ACTIVE_ITEM)[0]
                      , s = i || o && this._getItemByDirection(e, o)
                      , a = Boolean(this._interval)
                      , l = void 0
                      , c = void 0
                      , u = void 0;
                    if (e === f.NEXT ? (l = h.LEFT,
                    c = h.NEXT,
                    u = f.LEFT) : (l = h.RIGHT,
                    c = h.PREV,
                    u = f.RIGHT),
                    s && t(s).hasClass(h.ACTIVE))
                        return void (this._isSliding = !1);
                    if (!this._triggerSlideEvent(s, u).isDefaultPrevented() && o && s) {
                        this._isSliding = !0,
                        a && this.pause(),
                        this._setActiveIndicatorElement(s);
                        var d = t.Event(p.SLID, {
                            relatedTarget: s,
                            direction: u
                        });
                        r.supportsTransitionEnd() && t(this._element).hasClass(h.SLIDE) ? (t(s).addClass(c),
                        r.reflow(s),
                        t(o).addClass(l),
                        t(s).addClass(l),
                        t(o).one(r.TRANSITION_END, function() {
                            t(s).removeClass(l + " " + c).addClass(h.ACTIVE),
                            t(o).removeClass(h.ACTIVE + " " + c + " " + l),
                            n._isSliding = !1,
                            setTimeout(function() {
                                return t(n._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(600)) : (t(o).removeClass(h.ACTIVE),
                        t(s).addClass(h.ACTIVE),
                        this._isSliding = !1,
                        t(this._element).trigger(d)),
                        a && this.cycle()
                    }
                }
                ,
                l._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(s)
                          , o = t.extend({}, u, t(this).data());
                        "object" === (void 0 === e ? "undefined" : n(e)) && t.extend(o, e);
                        var r = "string" == typeof e ? e : o.slide;
                        if (i || (i = new l(this,o),
                        t(this).data(s, i)),
                        "number" == typeof e)
                            i.to(e);
                        else if ("string" == typeof r) {
                            if (void 0 === i[r])
                                throw new Error('No method named "' + r + '"');
                            i[r]()
                        } else
                            o.interval && (i.pause(),
                            i.cycle())
                    })
                }
                ,
                l._dataApiClickHandler = function(e) {
                    var i = r.getSelectorFromElement(this);
                    if (i) {
                        var n = t(i)[0];
                        if (n && t(n).hasClass(h.CAROUSEL)) {
                            var o = t.extend({}, t(n).data(), t(this).data())
                              , a = this.getAttribute("data-slide-to");
                            a && (o.interval = !1),
                            l._jQueryInterface.call(t(n), o),
                            a && t(n).data(s).to(a),
                            e.preventDefault()
                        }
                    }
                }
                ,
                o(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return u
                    }
                }]),
                l
            }();
            t(document).on(p.CLICK_DATA_API, m.DATA_SLIDE, g._dataApiClickHandler),
            t(window).on(p.LOAD_DATA_API, function() {
                t(m.DATA_RIDE).each(function() {
                    var e = t(this);
                    g._jQueryInterface.call(e, e.data())
                })
            }),
            t.fn[e] = g._jQueryInterface,
            t.fn[e].Constructor = g,
            t.fn[e].noConflict = function() {
                return t.fn[e] = c,
                g._jQueryInterface
            }
        }(jQuery),
        function(t) {
            var e = "collapse"
              , s = "bs.collapse"
              , a = "." + s
              , l = t.fn[e]
              , c = {
                toggle: !0,
                parent: ""
            }
              , u = {
                toggle: "boolean",
                parent: "string"
            }
              , d = {
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                CLICK_DATA_API: "click" + a + ".data-api"
            }
              , f = {
                SHOW: "show",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            }
              , p = {
                WIDTH: "width",
                HEIGHT: "height"
            }
              , h = {
                ACTIVES: ".card > .show, .card > .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            }
              , m = function() {
                function a(e, n) {
                    i(this, a),
                    this._isTransitioning = !1,
                    this._element = e,
                    this._config = this._getConfig(n),
                    this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')),
                    this._parent = this._config.parent ? this._getParent() : null,
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle()
                }
                return a.prototype.toggle = function() {
                    t(this._element).hasClass(f.SHOW) ? this.hide() : this.show()
                }
                ,
                a.prototype.show = function() {
                    var e = this;
                    if (this._isTransitioning)
                        throw new Error("Collapse is transitioning");
                    if (!t(this._element).hasClass(f.SHOW)) {
                        var i = void 0
                          , n = void 0;
                        if (this._parent && (i = t.makeArray(t(this._parent).find(h.ACTIVES)),
                        i.length || (i = null)),
                        !(i && (n = t(i).data(s)) && n._isTransitioning)) {
                            var o = t.Event(d.SHOW);
                            if (t(this._element).trigger(o),
                            !o.isDefaultPrevented()) {
                                i && (a._jQueryInterface.call(t(i), "hide"),
                                n || t(i).data(s, null));
                                var l = this._getDimension();
                                t(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING),
                                this._element.style[l] = 0,
                                this._element.setAttribute("aria-expanded", !0),
                                this._triggerArray.length && t(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                                var c = function() {
                                    t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.SHOW),
                                    e._element.style[l] = "",
                                    e.setTransitioning(!1),
                                    t(e._element).trigger(d.SHOWN)
                                };
                                if (!r.supportsTransitionEnd())
                                    return void c();
                                var u = l[0].toUpperCase() + l.slice(1)
                                  , p = "scroll" + u;
                                t(this._element).one(r.TRANSITION_END, c).emulateTransitionEnd(600),
                                this._element.style[l] = this._element[p] + "px"
                            }
                        }
                    }
                }
                ,
                a.prototype.hide = function() {
                    var e = this;
                    if (this._isTransitioning)
                        throw new Error("Collapse is transitioning");
                    if (t(this._element).hasClass(f.SHOW)) {
                        var i = t.Event(d.HIDE);
                        if (t(this._element).trigger(i),
                        !i.isDefaultPrevented()) {
                            var n = this._getDimension()
                              , o = n === p.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[n] = this._element[o] + "px",
                            r.reflow(this._element),
                            t(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.SHOW),
                            this._element.setAttribute("aria-expanded", !1),
                            this._triggerArray.length && t(this._triggerArray).addClass(f.COLLAPSED).attr("aria-expanded", !1),
                            this.setTransitioning(!0);
                            var s = function() {
                                e.setTransitioning(!1),
                                t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(d.HIDDEN)
                            };
                            return this._element.style[n] = "",
                            r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(600) : void s()
                        }
                    }
                }
                ,
                a.prototype.setTransitioning = function(t) {
                    this._isTransitioning = t
                }
                ,
                a.prototype.dispose = function() {
                    t.removeData(this._element, s),
                    this._config = null,
                    this._parent = null,
                    this._element = null,
                    this._triggerArray = null,
                    this._isTransitioning = null
                }
                ,
                a.prototype._getConfig = function(i) {
                    return i = t.extend({}, c, i),
                    i.toggle = Boolean(i.toggle),
                    r.typeCheckConfig(e, i, u),
                    i
                }
                ,
                a.prototype._getDimension = function() {
                    return t(this._element).hasClass(p.WIDTH) ? p.WIDTH : p.HEIGHT
                }
                ,
                a.prototype._getParent = function() {
                    var e = this
                      , i = t(this._config.parent)[0]
                      , n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return t(i).find(n).each(function(t, i) {
                        e._addAriaAndCollapsedClass(a._getTargetFromElement(i), [i])
                    }),
                    i
                }
                ,
                a.prototype._addAriaAndCollapsedClass = function(e, i) {
                    if (e) {
                        var n = t(e).hasClass(f.SHOW);
                        e.setAttribute("aria-expanded", n),
                        i.length && t(i).toggleClass(f.COLLAPSED, !n).attr("aria-expanded", n)
                    }
                }
                ,
                a._getTargetFromElement = function(e) {
                    var i = r.getSelectorFromElement(e);
                    return i ? t(i)[0] : null
                }
                ,
                a._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this)
                          , o = i.data(s)
                          , r = t.extend({}, c, i.data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
                        if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
                        o || (o = new a(this,r),
                        i.data(s, o)),
                        "string" == typeof e) {
                            if (void 0 === o[e])
                                throw new Error('No method named "' + e + '"');
                            o[e]()
                        }
                    })
                }
                ,
                o(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }]),
                a
            }();
            t(document).on(d.CLICK_DATA_API, h.DATA_TOGGLE, function(e) {
                e.preventDefault();
                var i = m._getTargetFromElement(this)
                  , n = t(i).data(s)
                  , o = n ? "toggle" : t(this).data();
                m._jQueryInterface.call(t(i), o)
            }),
            t.fn[e] = m._jQueryInterface,
            t.fn[e].Constructor = m,
            t.fn[e].noConflict = function() {
                return t.fn[e] = l,
                m._jQueryInterface
            }
        }(jQuery),
        function(t) {
            var e = "dropdown"
              , n = "bs.dropdown"
              , s = "." + n
              , a = ".data-api"
              , l = t.fn[e]
              , c = {
                HIDE: "hide" + s,
                HIDDEN: "hidden" + s,
                SHOW: "show" + s,
                SHOWN: "shown" + s,
                CLICK: "click" + s,
                CLICK_DATA_API: "click" + s + a,
                FOCUSIN_DATA_API: "focusin" + s + a,
                KEYDOWN_DATA_API: "keydown" + s + a
            }
              , u = {
                BACKDROP: "dropdown-backdrop",
                DISABLED: "disabled",
                SHOW: "show"
            }
              , d = {
                BACKDROP: ".dropdown-backdrop",
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                ROLE_MENU: '[role="menu"]',
                ROLE_LISTBOX: '[role="listbox"]',
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
            }
              , f = function() {
                function e(t) {
                    i(this, e),
                    this._element = t,
                    this._addEventListeners()
                }
                return e.prototype.toggle = function() {
                    if (this.disabled || t(this).hasClass(u.DISABLED))
                        return !1;
                    var i = e._getParentFromElement(this)
                      , n = t(i).hasClass(u.SHOW);
                    if (e._clearMenus(),
                    n)
                        return !1;
                    if ("ontouchstart"in document.documentElement && !t(i).closest(d.NAVBAR_NAV).length) {
                        var o = document.createElement("div");
                        o.className = u.BACKDROP,
                        t(o).insertBefore(this),
                        t(o).on("click", e._clearMenus)
                    }
                    var r = {
                        relatedTarget: this
                    }
                      , s = t.Event(c.SHOW, r);
                    return t(i).trigger(s),
                    !s.isDefaultPrevented() && (this.focus(),
                    this.setAttribute("aria-expanded", !0),
                    t(i).toggleClass(u.SHOW),
                    t(i).trigger(t.Event(c.SHOWN, r)),
                    !1)
                }
                ,
                e.prototype.dispose = function() {
                    t.removeData(this._element, n),
                    t(this._element).off(s),
                    this._element = null
                }
                ,
                e.prototype._addEventListeners = function() {
                    t(this._element).on(c.CLICK, this.toggle)
                }
                ,
                e._jQueryInterface = function(i) {
                    return this.each(function() {
                        var o = t(this).data(n);
                        if (o || (o = new e(this),
                        t(this).data(n, o)),
                        "string" == typeof i) {
                            if (void 0 === o[i])
                                throw new Error('No method named "' + i + '"');
                            o[i].call(this)
                        }
                    })
                }
                ,
                e._clearMenus = function(i) {
                    if (!i || 3 !== i.which) {
                        var n = t(d.BACKDROP)[0];
                        n && n.parentNode.removeChild(n);
                        for (var o = t.makeArray(t(d.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                            var s = e._getParentFromElement(o[r])
                              , a = {
                                relatedTarget: o[r]
                            };
                            if (t(s).hasClass(u.SHOW) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "focusin" === i.type) && t.contains(s, i.target))) {
                                var l = t.Event(c.HIDE, a);
                                t(s).trigger(l),
                                l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"),
                                t(s).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN, a)))
                            }
                        }
                    }
                }
                ,
                e._getParentFromElement = function(e) {
                    var i = void 0
                      , n = r.getSelectorFromElement(e);
                    return n && (i = t(n)[0]),
                    i || e.parentNode
                }
                ,
                e._dataApiKeydownHandler = function(i) {
                    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName) && (i.preventDefault(),
                    i.stopPropagation(),
                    !this.disabled && !t(this).hasClass(u.DISABLED))) {
                        var n = e._getParentFromElement(this)
                          , o = t(n).hasClass(u.SHOW);
                        if (!o && 27 !== i.which || o && 27 === i.which) {
                            if (27 === i.which) {
                                var r = t(n).find(d.DATA_TOGGLE)[0];
                                t(r).trigger("focus")
                            }
                            return void t(this).trigger("click")
                        }
                        var s = t(n).find(d.VISIBLE_ITEMS).get();
                        if (s.length) {
                            var a = s.indexOf(i.target);
                            38 === i.which && a > 0 && a--,
                            40 === i.which && a < s.length - 1 && a++,
                            a < 0 && (a = 0),
                            s[a].focus()
                        }
                    }
                }
                ,
                o(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }]),
                e
            }();
            t(document).on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, f._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.ROLE_MENU, f._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.ROLE_LISTBOX, f._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.FOCUSIN_DATA_API, f._clearMenus).on(c.CLICK_DATA_API, d.DATA_TOGGLE, f.prototype.toggle).on(c.CLICK_DATA_API, d.FORM_CHILD, function(t) {
                t.stopPropagation()
            }),
            t.fn[e] = f._jQueryInterface,
            t.fn[e].Constructor = f,
            t.fn[e].noConflict = function() {
                return t.fn[e] = l,
                f._jQueryInterface
            }
        }(jQuery),
        function(t) {
            var e = "modal"
              , s = "bs.modal"
              , a = "." + s
              , l = t.fn[e]
              , c = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            }
              , u = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            }
              , d = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                FOCUSIN: "focusin" + a,
                RESIZE: "resize" + a,
                CLICK_DISMISS: "click.dismiss" + a,
                KEYDOWN_DISMISS: "keydown.dismiss" + a,
                MOUSEUP_DISMISS: "mouseup.dismiss" + a,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
                CLICK_DATA_API: "click" + a + ".data-api"
            }
              , f = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            }
              , p = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            }
              , h = function() {
                function l(e, n) {
                    i(this, l),
                    this._config = this._getConfig(n),
                    this._element = e,
                    this._dialog = t(e).find(p.DIALOG)[0],
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._isTransitioning = !1,
                    this._originalBodyPadding = 0,
                    this._scrollbarWidth = 0
                }
                return l.prototype.toggle = function(t) {
                    return this._isShown ? this.hide() : this.show(t)
                }
                ,
                l.prototype.show = function(e) {
                    var i = this;
                    if (this._isTransitioning)
                        throw new Error("Modal is transitioning");
                    r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) && (this._isTransitioning = !0);
                    var n = t.Event(d.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(n),
                    this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    t(document.body).addClass(f.OPEN),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(d.CLICK_DISMISS, p.DATA_DISMISS, function(t) {
                        return i.hide(t)
                    }),
                    t(this._dialog).on(d.MOUSEDOWN_DISMISS, function() {
                        t(i._element).one(d.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return i._showElement(e)
                    }))
                }
                ,
                l.prototype.hide = function(e) {
                    var i = this;
                    if (e && e.preventDefault(),
                    this._isTransitioning)
                        throw new Error("Modal is transitioning");
                    var n = r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
                    n && (this._isTransitioning = !0);
                    var o = t.Event(d.HIDE);
                    t(this._element).trigger(o),
                    this._isShown && !o.isDefaultPrevented() && (this._isShown = !1,
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(d.FOCUSIN),
                    t(this._element).removeClass(f.SHOW),
                    t(this._element).off(d.CLICK_DISMISS),
                    t(this._dialog).off(d.MOUSEDOWN_DISMISS),
                    n ? t(this._element).one(r.TRANSITION_END, function(t) {
                        return i._hideModal(t)
                    }).emulateTransitionEnd(300) : this._hideModal())
                }
                ,
                l.prototype.dispose = function() {
                    t.removeData(this._element, s),
                    t(window, document, this._element, this._backdrop).off(a),
                    this._config = null,
                    this._element = null,
                    this._dialog = null,
                    this._backdrop = null,
                    this._isShown = null,
                    this._isBodyOverflowing = null,
                    this._ignoreBackdropClick = null,
                    this._originalBodyPadding = null,
                    this._scrollbarWidth = null
                }
                ,
                l.prototype._getConfig = function(i) {
                    return i = t.extend({}, c, i),
                    r.typeCheckConfig(e, i, u),
                    i
                }
                ,
                l.prototype._showElement = function(e) {
                    var i = this
                      , n = r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                    this._element.style.display = "block",
                    this._element.removeAttribute("aria-hidden"),
                    this._element.scrollTop = 0,
                    n && r.reflow(this._element),
                    t(this._element).addClass(f.SHOW),
                    this._config.focus && this._enforceFocus();
                    var o = t.Event(d.SHOWN, {
                        relatedTarget: e
                    })
                      , s = function() {
                        i._config.focus && i._element.focus(),
                        i._isTransitioning = !1,
                        t(i._element).trigger(o)
                    };
                    n ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                }
                ,
                l.prototype._enforceFocus = function() {
                    var e = this;
                    t(document).off(d.FOCUSIN).on(d.FOCUSIN, function(i) {
                        document === i.target || e._element === i.target || t(e._element).has(i.target).length || e._element.focus()
                    })
                }
                ,
                l.prototype._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? t(this._element).on(d.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && e.hide()
                    }) : this._isShown || t(this._element).off(d.KEYDOWN_DISMISS)
                }
                ,
                l.prototype._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? t(window).on(d.RESIZE, function(t) {
                        return e._handleUpdate(t)
                    }) : t(window).off(d.RESIZE)
                }
                ,
                l.prototype._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none",
                    this._element.setAttribute("aria-hidden", "true"),
                    this._isTransitioning = !1,
                    this._showBackdrop(function() {
                        t(document.body).removeClass(f.OPEN),
                        e._resetAdjustments(),
                        e._resetScrollbar(),
                        t(e._element).trigger(d.HIDDEN)
                    })
                }
                ,
                l.prototype._removeBackdrop = function() {
                    this._backdrop && (t(this._backdrop).remove(),
                    this._backdrop = null)
                }
                ,
                l.prototype._showBackdrop = function(e) {
                    var i = this
                      , n = t(this._element).hasClass(f.FADE) ? f.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var o = r.supportsTransitionEnd() && n;
                        if (this._backdrop = document.createElement("div"),
                        this._backdrop.className = f.BACKDROP,
                        n && t(this._backdrop).addClass(n),
                        t(this._backdrop).appendTo(document.body),
                        t(this._element).on(d.CLICK_DISMISS, function(t) {
                            return i._ignoreBackdropClick ? void (i._ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
                        }),
                        o && r.reflow(this._backdrop),
                        t(this._backdrop).addClass(f.SHOW),
                        !e)
                            return;
                        if (!o)
                            return void e();
                        t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(f.SHOW);
                        var s = function() {
                            i._removeBackdrop(),
                            e && e()
                        };
                        r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                    } else
                        e && e()
                }
                ,
                l.prototype._handleUpdate = function() {
                    this._adjustDialog()
                }
                ,
                l.prototype._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                    this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
                ,
                l.prototype._resetAdjustments = function() {
                    this._element.style.paddingLeft = "",
                    this._element.style.paddingRight = ""
                }
                ,
                l.prototype._checkScrollbar = function() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth,
                    this._scrollbarWidth = this._getScrollbarWidth()
                }
                ,
                l.prototype._setScrollbar = function() {
                    var e = parseInt(t(p.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "",
                    this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                }
                ,
                l.prototype._resetScrollbar = function() {
                    document.body.style.paddingRight = this._originalBodyPadding
                }
                ,
                l.prototype._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = f.SCROLLBAR_MEASURER,
                    document.body.appendChild(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return document.body.removeChild(t),
                    e
                }
                ,
                l._jQueryInterface = function(e, i) {
                    return this.each(function() {
                        var o = t(this).data(s)
                          , r = t.extend({}, l.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
                        if (o || (o = new l(this,r),
                        t(this).data(s, o)),
                        "string" == typeof e) {
                            if (void 0 === o[e])
                                throw new Error('No method named "' + e + '"');
                            o[e](i)
                        } else
                            r.show && o.show(i)
                    })
                }
                ,
                o(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }]),
                l
            }();
            t(document).on(d.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
                var i = this
                  , n = void 0
                  , o = r.getSelectorFromElement(this);
                o && (n = t(o)[0]);
                var a = t(n).data(s) ? "toggle" : t.extend({}, t(n).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(n).one(d.SHOW, function(e) {
                    e.isDefaultPrevented() || l.one(d.HIDDEN, function() {
                        t(i).is(":visible") && i.focus()
                    })
                });
                h._jQueryInterface.call(t(n), a, this)
            }),
            t.fn[e] = h._jQueryInterface,
            t.fn[e].Constructor = h,
            t.fn[e].noConflict = function() {
                return t.fn[e] = l,
                h._jQueryInterface
            }
        }(jQuery),
        function(t) {
            var e = "scrollspy"
              , s = "bs.scrollspy"
              , a = "." + s
              , l = t.fn[e]
              , c = {
                offset: 10,
                method: "auto",
                target: ""
            }
              , u = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            }
              , d = {
                ACTIVATE: "activate" + a,
                SCROLL: "scroll" + a,
                LOAD_DATA_API: "load" + a + ".data-api"
            }
              , f = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                NAV_LINK: "nav-link",
                NAV: "nav",
                ACTIVE: "active"
            }
              , p = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                LIST_ITEM: ".list-item",
                LI: "li",
                LI_DROPDOWN: "li.dropdown",
                NAV_LINKS: ".nav-link",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }
              , h = {
                OFFSET: "offset",
                POSITION: "position"
            }
              , m = function() {
                function l(e, n) {
                    var o = this;
                    i(this, l),
                    this._element = e,
                    this._scrollElement = "BODY" === e.tagName ? window : e,
                    this._config = this._getConfig(n),
                    this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.DROPDOWN_ITEMS,
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    t(this._scrollElement).on(d.SCROLL, function(t) {
                        return o._process(t)
                    }),
                    this.refresh(),
                    this._process()
                }
                return l.prototype.refresh = function() {
                    var e = this
                      , i = this._scrollElement !== this._scrollElement.window ? h.POSITION : h.OFFSET
                      , n = "auto" === this._config.method ? i : this._config.method
                      , o = n === h.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight(),
                    t.makeArray(t(this._selector)).map(function(e) {
                        var i = void 0
                          , s = r.getSelectorFromElement(e);
                        return s && (i = t(s)[0]),
                        i && (i.offsetWidth || i.offsetHeight) ? [t(i)[n]().top + o, s] : null
                    }).filter(function(t) {
                        return t
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).forEach(function(t) {
                        e._offsets.push(t[0]),
                        e._targets.push(t[1])
                    })
                }
                ,
                l.prototype.dispose = function() {
                    t.removeData(this._element, s),
                    t(this._scrollElement).off(a),
                    this._element = null,
                    this._scrollElement = null,
                    this._config = null,
                    this._selector = null,
                    this._offsets = null,
                    this._targets = null,
                    this._activeTarget = null,
                    this._scrollHeight = null
                }
                ,
                l.prototype._getConfig = function(i) {
                    if (i = t.extend({}, c, i),
                    "string" != typeof i.target) {
                        var n = t(i.target).attr("id");
                        n || (n = r.getUID(e),
                        t(i.target).attr("id", n)),
                        i.target = "#" + n
                    }
                    return r.typeCheckConfig(e, i, u),
                    i
                }
                ,
                l.prototype._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                ,
                l.prototype._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                ,
                l.prototype._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                }
                ,
                l.prototype._process = function() {
                    var t = this._getScrollTop() + this._config.offset
                      , e = this._getScrollHeight()
                      , i = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(),
                    t >= i) {
                        var n = this._targets[this._targets.length - 1];
                        return void (this._activeTarget !== n && this._activate(n))
                    }
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var o = this._offsets.length; o--; ) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
                ,
                l.prototype._activate = function(e) {
                    this._activeTarget = e,
                    this._clear();
                    var i = this._selector.split(",");
                    i = i.map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    });
                    var n = t(i.join(","));
                    n.hasClass(f.DROPDOWN_ITEM) ? (n.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(f.ACTIVE),
                    n.addClass(f.ACTIVE)) : n.parents(p.LI).find("> " + p.NAV_LINKS).addClass(f.ACTIVE),
                    t(this._scrollElement).trigger(d.ACTIVATE, {
                        relatedTarget: e
                    })
                }
                ,
                l.prototype._clear = function() {
                    t(this._selector).filter(p.ACTIVE).removeClass(f.ACTIVE)
                }
                ,
                l._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(s)
                          , o = "object" === (void 0 === e ? "undefined" : n(e)) && e;
                        if (i || (i = new l(this,o),
                        t(this).data(s, i)),
                        "string" == typeof e) {
                            if (void 0 === i[e])
                                throw new Error('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }
                ,
                o(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }]),
                l
            }();
            t(window).on(d.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(p.DATA_SPY)), i = e.length; i--; ) {
                    var n = t(e[i]);
                    m._jQueryInterface.call(n, n.data())
                }
            }),
            t.fn[e] = m._jQueryInterface,
            t.fn[e].Constructor = m,
            t.fn[e].noConflict = function() {
                return t.fn[e] = l,
                m._jQueryInterface
            }
        }(jQuery),
        function(t) {
            var e = "tab"
              , n = "bs.tab"
              , s = "." + n
              , a = t.fn[e]
              , l = {
                HIDE: "hide" + s,
                HIDDEN: "hidden" + s,
                SHOW: "show" + s,
                SHOWN: "shown" + s,
                CLICK_DATA_API: "click" + s + ".data-api"
            }
              , c = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                DISABLED: "disabled",
                FADE: "fade",
                SHOW: "show"
            }
              , u = {
                A: "a",
                LI: "li",
                DROPDOWN: ".dropdown",
                LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                FADE_CHILD: "> .nav-item .fade, > .fade",
                ACTIVE: ".active",
                ACTIVE_CHILD: "> .nav-item > .active, > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            }
              , d = function() {
                function e(t) {
                    i(this, e),
                    this._element = t
                }
                return e.prototype.show = function() {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(c.ACTIVE) || t(this._element).hasClass(c.DISABLED))) {
                        var i = void 0
                          , n = void 0
                          , o = t(this._element).closest(u.LIST)[0]
                          , s = r.getSelectorFromElement(this._element);
                        o && (n = t.makeArray(t(o).find(u.ACTIVE)),
                        n = n[n.length - 1]);
                        var a = t.Event(l.HIDE, {
                            relatedTarget: this._element
                        })
                          , d = t.Event(l.SHOW, {
                            relatedTarget: n
                        });
                        if (n && t(n).trigger(a),
                        t(this._element).trigger(d),
                        !d.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            s && (i = t(s)[0]),
                            this._activate(this._element, o);
                            var f = function() {
                                var i = t.Event(l.HIDDEN, {
                                    relatedTarget: e._element
                                })
                                  , o = t.Event(l.SHOWN, {
                                    relatedTarget: n
                                });
                                t(n).trigger(i),
                                t(e._element).trigger(o)
                            };
                            i ? this._activate(i, i.parentNode, f) : f()
                        }
                    }
                }
                ,
                e.prototype.dispose = function() {
                    t.removeClass(this._element, n),
                    this._element = null
                }
                ,
                e.prototype._activate = function(e, i, n) {
                    var o = this
                      , s = t(i).find(u.ACTIVE_CHILD)[0]
                      , a = n && r.supportsTransitionEnd() && (s && t(s).hasClass(c.FADE) || Boolean(t(i).find(u.FADE_CHILD)[0]))
                      , l = function() {
                        return o._transitionComplete(e, s, a, n)
                    };
                    s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(150) : l(),
                    s && t(s).removeClass(c.SHOW)
                }
                ,
                e.prototype._transitionComplete = function(e, i, n, o) {
                    if (i) {
                        t(i).removeClass(c.ACTIVE);
                        var s = t(i.parentNode).find(u.DROPDOWN_ACTIVE_CHILD)[0];
                        s && t(s).removeClass(c.ACTIVE),
                        i.setAttribute("aria-expanded", !1)
                    }
                    if (t(e).addClass(c.ACTIVE),
                    e.setAttribute("aria-expanded", !0),
                    n ? (r.reflow(e),
                    t(e).addClass(c.SHOW)) : t(e).removeClass(c.FADE),
                    e.parentNode && t(e.parentNode).hasClass(c.DROPDOWN_MENU)) {
                        var a = t(e).closest(u.DROPDOWN)[0];
                        a && t(a).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE),
                        e.setAttribute("aria-expanded", !0)
                    }
                    o && o()
                }
                ,
                e._jQueryInterface = function(i) {
                    return this.each(function() {
                        var o = t(this)
                          , r = o.data(n);
                        if (r || (r = new e(this),
                        o.data(n, r)),
                        "string" == typeof i) {
                            if (void 0 === r[i])
                                throw new Error('No method named "' + i + '"');
                            r[i]()
                        }
                    })
                }
                ,
                o(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }]),
                e
            }();
            t(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function(e) {
                e.preventDefault(),
                d._jQueryInterface.call(t(this), "show")
            }),
            t.fn[e] = d._jQueryInterface,
            t.fn[e].Constructor = d,
            t.fn[e].noConflict = function() {
                return t.fn[e] = a,
                d._jQueryInterface
            }
        }(jQuery),
        function(t) {
            if ("undefined" == typeof Tether)
                throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var e = "tooltip"
              , s = "bs.tooltip"
              , a = "." + s
              , l = t.fn[e]
              , c = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: "0 0",
                constraints: [],
                container: !1
            }
              , u = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "string",
                constraints: "array",
                container: "(string|element|boolean)"
            }
              , d = {
                TOP: "bottom center",
                RIGHT: "middle left",
                BOTTOM: "top center",
                LEFT: "middle right"
            }
              , f = {
                SHOW: "show",
                OUT: "out"
            }
              , p = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                INSERTED: "inserted" + a,
                CLICK: "click" + a,
                FOCUSIN: "focusin" + a,
                FOCUSOUT: "focusout" + a,
                MOUSEENTER: "mouseenter" + a,
                MOUSELEAVE: "mouseleave" + a
            }
              , h = {
                FADE: "fade",
                SHOW: "show"
            }
              , m = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner"
            }
              , g = {
                element: !1,
                enabled: !1
            }
              , v = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            }
              , y = function() {
                function l(t, e) {
                    i(this, l),
                    this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._isTransitioning = !1,
                    this._tether = null,
                    this.element = t,
                    this.config = this._getConfig(e),
                    this.tip = null,
                    this._setListeners()
                }
                return l.prototype.enable = function() {
                    this._isEnabled = !0
                }
                ,
                l.prototype.disable = function() {
                    this._isEnabled = !1
                }
                ,
                l.prototype.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }
                ,
                l.prototype.toggle = function(e) {
                    if (e) {
                        var i = this.constructor.DATA_KEY
                          , n = t(e.currentTarget).data(i);
                        n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        t(e.currentTarget).data(i, n)),
                        n._activeTrigger.click = !n._activeTrigger.click,
                        n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (t(this.getTipElement()).hasClass(h.SHOW))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }
                ,
                l.prototype.dispose = function() {
                    clearTimeout(this._timeout),
                    this.cleanupTether(),
                    t.removeData(this.element, this.constructor.DATA_KEY),
                    t(this.element).off(this.constructor.EVENT_KEY),
                    t(this.element).closest(".modal").off("hide.bs.modal"),
                    this.tip && t(this.tip).remove(),
                    this._isEnabled = null,
                    this._timeout = null,
                    this._hoverState = null,
                    this._activeTrigger = null,
                    this._tether = null,
                    this.element = null,
                    this.config = null,
                    this.tip = null
                }
                ,
                l.prototype.show = function() {
                    var e = this;
                    if ("none" === t(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var i = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        if (this._isTransitioning)
                            throw new Error("Tooltip is transitioning");
                        t(this.element).trigger(i);
                        var n = t.contains(this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !n)
                            return;
                        var o = this.getTipElement()
                          , s = r.getUID(this.constructor.NAME);
                        o.setAttribute("id", s),
                        this.element.setAttribute("aria-describedby", s),
                        this.setContent(),
                        this.config.animation && t(o).addClass(h.FADE);
                        var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                          , c = this._getAttachment(a)
                          , u = !1 === this.config.container ? document.body : t(this.config.container);
                        t(o).data(this.constructor.DATA_KEY, this).appendTo(u),
                        t(this.element).trigger(this.constructor.Event.INSERTED),
                        this._tether = new Tether({
                            attachment: c,
                            element: o,
                            target: this.element,
                            classes: g,
                            classPrefix: "bs-tether",
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: !1
                        }),
                        r.reflow(o),
                        this._tether.position(),
                        t(o).addClass(h.SHOW);
                        var d = function() {
                            var i = e._hoverState;
                            e._hoverState = null,
                            e._isTransitioning = !1,
                            t(e.element).trigger(e.constructor.Event.SHOWN),
                            i === f.OUT && e._leave(null, e)
                        };
                        if (r.supportsTransitionEnd() && t(this.tip).hasClass(h.FADE))
                            return this._isTransitioning = !0,
                            void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(l._TRANSITION_DURATION);
                        d()
                    }
                }
                ,
                l.prototype.hide = function(e) {
                    var i = this
                      , n = this.getTipElement()
                      , o = t.Event(this.constructor.Event.HIDE);
                    if (this._isTransitioning)
                        throw new Error("Tooltip is transitioning");
                    var s = function() {
                        i._hoverState !== f.SHOW && n.parentNode && n.parentNode.removeChild(n),
                        i.element.removeAttribute("aria-describedby"),
                        t(i.element).trigger(i.constructor.Event.HIDDEN),
                        i._isTransitioning = !1,
                        i.cleanupTether(),
                        e && e()
                    };
                    t(this.element).trigger(o),
                    o.isDefaultPrevented() || (t(n).removeClass(h.SHOW),
                    this._activeTrigger[v.CLICK] = !1,
                    this._activeTrigger[v.FOCUS] = !1,
                    this._activeTrigger[v.HOVER] = !1,
                    r.supportsTransitionEnd() && t(this.tip).hasClass(h.FADE) ? (this._isTransitioning = !0,
                    t(n).one(r.TRANSITION_END, s).emulateTransitionEnd(150)) : s(),
                    this._hoverState = "")
                }
                ,
                l.prototype.isWithContent = function() {
                    return Boolean(this.getTitle())
                }
                ,
                l.prototype.getTipElement = function() {
                    return this.tip = this.tip || t(this.config.template)[0]
                }
                ,
                l.prototype.setContent = function() {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(m.TOOLTIP_INNER), this.getTitle()),
                    e.removeClass(h.FADE + " " + h.SHOW),
                    this.cleanupTether()
                }
                ,
                l.prototype.setElementContent = function(e, i) {
                    var o = this.config.html;
                    "object" === (void 0 === i ? "undefined" : n(i)) && (i.nodeType || i.jquery) ? o ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()) : e[o ? "html" : "text"](i)
                }
                ,
                l.prototype.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                    t
                }
                ,
                l.prototype.cleanupTether = function() {
                    this._tether && this._tether.destroy()
                }
                ,
                l.prototype._getAttachment = function(t) {
                    return d[t.toUpperCase()]
                }
                ,
                l.prototype._setListeners = function() {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function(i) {
                        if ("click" === i)
                            t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                        else if (i !== v.MANUAL) {
                            var n = i === v.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                              , o = i === v.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(n, e.config.selector, function(t) {
                                return e._enter(t)
                            }).on(o, e.config.selector, function(t) {
                                return e._leave(t)
                            })
                        }
                        t(e.element).closest(".modal").on("hide.bs.modal", function() {
                            return e.hide()
                        })
                    }),
                    this.config.selector ? this.config = t.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }
                ,
                l.prototype._fixTitle = function() {
                    var t = n(this.element.getAttribute("data-original-title"));
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                    this.element.setAttribute("title", ""))
                }
                ,
                l.prototype._enter = function(e, i) {
                    var n = this.constructor.DATA_KEY;
                    return i = i || t(e.currentTarget).data(n),
                    i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    t(e.currentTarget).data(n, i)),
                    e && (i._activeTrigger["focusin" === e.type ? v.FOCUS : v.HOVER] = !0),
                    t(i.getTipElement()).hasClass(h.SHOW) || i._hoverState === f.SHOW ? void (i._hoverState = f.SHOW) : (clearTimeout(i._timeout),
                    i._hoverState = f.SHOW,
                    i.config.delay && i.config.delay.show ? void (i._timeout = setTimeout(function() {
                        i._hoverState === f.SHOW && i.show()
                    }, i.config.delay.show)) : void i.show())
                }
                ,
                l.prototype._leave = function(e, i) {
                    var n = this.constructor.DATA_KEY;
                    if (i = i || t(e.currentTarget).data(n),
                    i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    t(e.currentTarget).data(n, i)),
                    e && (i._activeTrigger["focusout" === e.type ? v.FOCUS : v.HOVER] = !1),
                    !i._isWithActiveTrigger())
                        return clearTimeout(i._timeout),
                        i._hoverState = f.OUT,
                        i.config.delay && i.config.delay.hide ? void (i._timeout = setTimeout(function() {
                            i._hoverState === f.OUT && i.hide()
                        }, i.config.delay.hide)) : void i.hide()
                }
                ,
                l.prototype._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t])
                            return !0;
                    return !1
                }
                ,
                l.prototype._getConfig = function(i) {
                    return i = t.extend({}, this.constructor.Default, t(this.element).data(), i),
                    i.delay && "number" == typeof i.delay && (i.delay = {
                        show: i.delay,
                        hide: i.delay
                    }),
                    r.typeCheckConfig(e, i, this.constructor.DefaultType),
                    i
                }
                ,
                l.prototype._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }
                ,
                l._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(s)
                          , o = "object" === (void 0 === e ? "undefined" : n(e)) && e;
                        if ((i || !/dispose|hide/.test(e)) && (i || (i = new l(this,o),
                        t(this).data(s, i)),
                        "string" == typeof e)) {
                            if (void 0 === i[e])
                                throw new Error('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }
                ,
                o(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return e
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return s
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return u
                    }
                }]),
                l
            }();
            return t.fn[e] = y._jQueryInterface,
            t.fn[e].Constructor = y,
            t.fn[e].noConflict = function() {
                return t.fn[e] = l,
                y._jQueryInterface
            }
            ,
            y
        }(jQuery));
        !function(r) {
            var a = "popover"
              , l = "bs.popover"
              , c = "." + l
              , u = r.fn[a]
              , d = r.extend({}, s.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            })
              , f = r.extend({}, s.DefaultType, {
                content: "(string|element|function)"
            })
              , p = {
                FADE: "fade",
                SHOW: "show"
            }
              , h = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            }
              , m = {
                HIDE: "hide" + c,
                HIDDEN: "hidden" + c,
                SHOW: "show" + c,
                SHOWN: "shown" + c,
                INSERTED: "inserted" + c,
                CLICK: "click" + c,
                FOCUSIN: "focusin" + c,
                FOCUSOUT: "focusout" + c,
                MOUSEENTER: "mouseenter" + c,
                MOUSELEAVE: "mouseleave" + c
            }
              , g = function(s) {
                function u() {
                    return i(this, u),
                    t(this, s.apply(this, arguments))
                }
                return e(u, s),
                u.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }
                ,
                u.prototype.getTipElement = function() {
                    return this.tip = this.tip || r(this.config.template)[0]
                }
                ,
                u.prototype.setContent = function() {
                    var t = r(this.getTipElement());
                    this.setElementContent(t.find(h.TITLE), this.getTitle()),
                    this.setElementContent(t.find(h.CONTENT), this._getContent()),
                    t.removeClass(p.FADE + " " + p.SHOW),
                    this.cleanupTether()
                }
                ,
                u.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }
                ,
                u._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = r(this).data(l)
                          , i = "object" === (void 0 === t ? "undefined" : n(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this,i),
                        r(this).data(l, e)),
                        "string" == typeof t)) {
                            if (void 0 === e[t])
                                throw new Error('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }
                ,
                o(u, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return d
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return l
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return m
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return c
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return f
                    }
                }]),
                u
            }(s);
            r.fn[a] = g._jQueryInterface,
            r.fn[a].Constructor = g,
            r.fn[a].noConflict = function() {
                return r.fn[a] = u,
                g._jQueryInterface
            }
        }(jQuery)
    }()
}
, function(t, e, i) {
    "use strict";
    function n() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function o(t) {
        return "function" == typeof t
    }
    function r(t) {
        return "number" == typeof t
    }
    function s(t) {
        return "object" == typeof t && null !== t
    }
    function a(t) {
        return void 0 === t
    }
    t.exports = n,
    n.EventEmitter = n,
    n.prototype._events = void 0,
    n.prototype._maxListeners = void 0,
    n.defaultMaxListeners = 10,
    n.prototype.setMaxListeners = function(t) {
        if (!r(t) || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
        return this._maxListeners = t,
        this
    }
    ,
    n.prototype.emit = function(t) {
        var e, i, n, r, l, c;
        if (this._events || (this._events = {}),
        "error" === t && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1])instanceof Error)
                throw e;
            var u = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw u.context = e,
            u
        }
        if (i = this._events[t],
        a(i))
            return !1;
        if (o(i))
            switch (arguments.length) {
            case 1:
                i.call(this);
                break;
            case 2:
                i.call(this, arguments[1]);
                break;
            case 3:
                i.call(this, arguments[1], arguments[2]);
                break;
            default:
                r = Array.prototype.slice.call(arguments, 1),
                i.apply(this, r)
            }
        else if (s(i))
            for (r = Array.prototype.slice.call(arguments, 1),
            c = i.slice(),
            n = c.length,
            l = 0; l < n; l++)
                c[l].apply(this, r);
        return !0
    }
    ,
    n.prototype.addListener = function(t, e) {
        var i;
        if (!o(e))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", t, o(e.listener) ? e.listener : e),
        this._events[t] ? s(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
        s(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[t].length > i && (this._events[t].warned = !0,
        console.trace),
        this
    }
    ,
    n.prototype.on = n.prototype.addListener,
    n.prototype.once = function(t, e) {
        function i() {
            this.removeListener(t, i),
            n || (n = !0,
            e.apply(this, arguments))
        }
        if (!o(e))
            throw TypeError("listener must be a function");
        var n = !1;
        return i.listener = e,
        this.on(t, i),
        this
    }
    ,
    n.prototype.removeListener = function(t, e) {
        var i, n, r, a;
        if (!o(e))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
            return this;
        if (i = this._events[t],
        r = i.length,
        n = -1,
        i === e || o(i.listener) && i.listener === e)
            delete this._events[t],
            this._events.removeListener && this.emit("removeListener", t, e);
        else if (s(i)) {
            for (a = r; a-- > 0; )
                if (i[a] === e || i[a].listener && i[a].listener === e) {
                    n = a;
                    break
                }
            if (n < 0)
                return this;
            1 === i.length ? (i.length = 0,
            delete this._events[t]) : i.splice(n, 1),
            this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }
    ,
    n.prototype.removeAllListeners = function(t) {
        var e, i;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
            this;
        if (0 === arguments.length) {
            for (e in this._events)
                "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (i = this._events[t],
        o(i))
            this.removeListener(t, i);
        else if (i)
            for (; i.length; )
                this.removeListener(t, i[i.length - 1]);
        return delete this._events[t],
        this
    }
    ,
    n.prototype.listeners = function(t) {
        return this._events && this._events[t] ? o(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }
    ,
    n.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (o(e))
                return 1;
            if (e)
                return e.length
        }
        return 0
    }
    ,
    n.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}
, function(t, e, i) {
    "use strict";
    var n, n;
    !function(e) {
        t.exports = e()
    }(function() {
        return function t(e, i, o) {
            function r(a, l) {
                if (!i[a]) {
                    if (!e[a]) {
                        var c = "function" == typeof n && n;
                        if (!l && c)
                            return n(a, !0);
                        if (s)
                            return s(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND",
                        u
                    }
                    var d = i[a] = {
                        exports: {}
                    };
                    e[a][0].call(d.exports, function(t) {
                        var i = e[a][1][t];
                        return r(i || t)
                    }, d, d.exports, t, e, i, o)
                }
                return i[a].exports
            }
            for (var s = "function" == typeof n && n, a = 0; a < o.length; a++)
                r(o[a]);
            return r
        }({
            1: [function(t, e, i) {
                e.exports = function(t) {
                    var e, i, n, o = -1;
                    if (t.lines.length > 1 && "flex-start" === t.style.alignContent)
                        for (e = 0; n = t.lines[++o]; )
                            n.crossStart = e,
                            e += n.cross;
                    else if (t.lines.length > 1 && "flex-end" === t.style.alignContent)
                        for (e = t.flexStyle.crossSpace; n = t.lines[++o]; )
                            n.crossStart = e,
                            e += n.cross;
                    else if (t.lines.length > 1 && "center" === t.style.alignContent)
                        for (e = t.flexStyle.crossSpace / 2; n = t.lines[++o]; )
                            n.crossStart = e,
                            e += n.cross;
                    else if (t.lines.length > 1 && "space-between" === t.style.alignContent)
                        for (i = t.flexStyle.crossSpace / (t.lines.length - 1),
                        e = 0; n = t.lines[++o]; )
                            n.crossStart = e,
                            e += n.cross + i;
                    else if (t.lines.length > 1 && "space-around" === t.style.alignContent)
                        for (i = 2 * t.flexStyle.crossSpace / (2 * t.lines.length),
                        e = i / 2; n = t.lines[++o]; )
                            n.crossStart = e,
                            e += n.cross + i;
                    else
                        for (i = t.flexStyle.crossSpace / t.lines.length,
                        e = t.flexStyle.crossInnerBefore; n = t.lines[++o]; )
                            n.crossStart = e,
                            n.cross += i,
                            e += n.cross
                }
            }
            , {}],
            2: [function(t, e, i) {
                e.exports = function(t) {
                    for (var e, i = -1; line = t.lines[++i]; )
                        for (e = -1; child = line.children[++e]; ) {
                            var n = child.style.alignSelf;
                            "auto" === n && (n = t.style.alignItems),
                            "flex-start" === n ? child.flexStyle.crossStart = line.crossStart : "flex-end" === n ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === n ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart,
                            child.flexStyle.crossOuter = line.cross,
                            child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter)
                        }
                }
            }
            , {}],
            3: [function(t, e, i) {
                e.exports = function(t, e) {
                    var i = "row" === e || "row-reverse" === e
                      , n = t.mainAxis;
                    if (n) {
                        i && "inline" === n || !i && "block" === n || (t.flexStyle = {
                            main: t.flexStyle.cross,
                            cross: t.flexStyle.main,
                            mainOffset: t.flexStyle.crossOffset,
                            crossOffset: t.flexStyle.mainOffset,
                            mainBefore: t.flexStyle.crossBefore,
                            mainAfter: t.flexStyle.crossAfter,
                            crossBefore: t.flexStyle.mainBefore,
                            crossAfter: t.flexStyle.mainAfter,
                            mainInnerBefore: t.flexStyle.crossInnerBefore,
                            mainInnerAfter: t.flexStyle.crossInnerAfter,
                            crossInnerBefore: t.flexStyle.mainInnerBefore,
                            crossInnerAfter: t.flexStyle.mainInnerAfter,
                            mainBorderBefore: t.flexStyle.crossBorderBefore,
                            mainBorderAfter: t.flexStyle.crossBorderAfter,
                            crossBorderBefore: t.flexStyle.mainBorderBefore,
                            crossBorderAfter: t.flexStyle.mainBorderAfter
                        })
                    } else
                        t.flexStyle = i ? {
                            main: t.style.width,
                            cross: t.style.height,
                            mainOffset: t.style.offsetWidth,
                            crossOffset: t.style.offsetHeight,
                            mainBefore: t.style.marginLeft,
                            mainAfter: t.style.marginRight,
                            crossBefore: t.style.marginTop,
                            crossAfter: t.style.marginBottom,
                            mainInnerBefore: t.style.paddingLeft,
                            mainInnerAfter: t.style.paddingRight,
                            crossInnerBefore: t.style.paddingTop,
                            crossInnerAfter: t.style.paddingBottom,
                            mainBorderBefore: t.style.borderLeftWidth,
                            mainBorderAfter: t.style.borderRightWidth,
                            crossBorderBefore: t.style.borderTopWidth,
                            crossBorderAfter: t.style.borderBottomWidth
                        } : {
                            main: t.style.height,
                            cross: t.style.width,
                            mainOffset: t.style.offsetHeight,
                            crossOffset: t.style.offsetWidth,
                            mainBefore: t.style.marginTop,
                            mainAfter: t.style.marginBottom,
                            crossBefore: t.style.marginLeft,
                            crossAfter: t.style.marginRight,
                            mainInnerBefore: t.style.paddingTop,
                            mainInnerAfter: t.style.paddingBottom,
                            crossInnerBefore: t.style.paddingLeft,
                            crossInnerAfter: t.style.paddingRight,
                            mainBorderBefore: t.style.borderTopWidth,
                            mainBorderAfter: t.style.borderBottomWidth,
                            crossBorderBefore: t.style.borderLeftWidth,
                            crossBorderAfter: t.style.borderRightWidth
                        },
                        "content-box" === t.style.boxSizing && ("number" == typeof t.flexStyle.main && (t.flexStyle.main += t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter),
                        "number" == typeof t.flexStyle.cross && (t.flexStyle.cross += t.flexStyle.crossInnerBefore + t.flexStyle.crossInnerAfter + t.flexStyle.crossBorderBefore + t.flexStyle.crossBorderAfter));
                    t.mainAxis = i ? "inline" : "block",
                    t.crossAxis = i ? "block" : "inline",
                    "number" == typeof t.style.flexBasis && (t.flexStyle.main = t.style.flexBasis + t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter),
                    t.flexStyle.mainOuter = t.flexStyle.main,
                    t.flexStyle.crossOuter = t.flexStyle.cross,
                    "auto" === t.flexStyle.mainOuter && (t.flexStyle.mainOuter = t.flexStyle.mainOffset),
                    "auto" === t.flexStyle.crossOuter && (t.flexStyle.crossOuter = t.flexStyle.crossOffset),
                    "number" == typeof t.flexStyle.mainBefore && (t.flexStyle.mainOuter += t.flexStyle.mainBefore),
                    "number" == typeof t.flexStyle.mainAfter && (t.flexStyle.mainOuter += t.flexStyle.mainAfter),
                    "number" == typeof t.flexStyle.crossBefore && (t.flexStyle.crossOuter += t.flexStyle.crossBefore),
                    "number" == typeof t.flexStyle.crossAfter && (t.flexStyle.crossOuter += t.flexStyle.crossAfter)
                }
            }
            , {}],
            4: [function(t, e, i) {
                var n = t("../reduce");
                e.exports = function(t) {
                    if (t.mainSpace > 0) {
                        var e = n(t.children, function(t, e) {
                            return t + parseFloat(e.style.flexGrow)
                        }, 0);
                        e > 0 && (t.main = n(t.children, function(i, n) {
                            return "auto" === n.flexStyle.main ? n.flexStyle.main = n.flexStyle.mainOffset + parseFloat(n.style.flexGrow) / e * t.mainSpace : n.flexStyle.main += parseFloat(n.style.flexGrow) / e * t.mainSpace,
                            n.flexStyle.mainOuter = n.flexStyle.main + n.flexStyle.mainBefore + n.flexStyle.mainAfter,
                            i + n.flexStyle.mainOuter
                        }, 0),
                        t.mainSpace = 0)
                    }
                }
            }
            , {
                "../reduce": 12
            }],
            5: [function(t, e, i) {
                var n = t("../reduce");
                e.exports = function(t) {
                    if (t.mainSpace < 0) {
                        var e = n(t.children, function(t, e) {
                            return t + parseFloat(e.style.flexShrink)
                        }, 0);
                        e > 0 && (t.main = n(t.children, function(i, n) {
                            return n.flexStyle.main += parseFloat(n.style.flexShrink) / e * t.mainSpace,
                            n.flexStyle.mainOuter = n.flexStyle.main + n.flexStyle.mainBefore + n.flexStyle.mainAfter,
                            i + n.flexStyle.mainOuter
                        }, 0),
                        t.mainSpace = 0)
                    }
                }
            }
            , {
                "../reduce": 12
            }],
            6: [function(t, e, i) {
                var n = t("../reduce");
                e.exports = function(t) {
                    var e;
                    t.lines = [e = {
                        main: 0,
                        cross: 0,
                        children: []
                    }];
                    for (var i, o = -1; i = t.children[++o]; )
                        "nowrap" === t.style.flexWrap || 0 === e.children.length || "auto" === t.flexStyle.main || t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter >= e.main + i.flexStyle.mainOuter ? (e.main += i.flexStyle.mainOuter,
                        e.cross = Math.max(e.cross, i.flexStyle.crossOuter)) : t.lines.push(e = {
                            main: i.flexStyle.mainOuter,
                            cross: i.flexStyle.crossOuter,
                            children: []
                        }),
                        e.children.push(i);
                    t.flexStyle.mainLines = n(t.lines, function(t, e) {
                        return Math.max(t, e.main)
                    }, 0),
                    t.flexStyle.crossLines = n(t.lines, function(t, e) {
                        return t + e.cross
                    }, 0),
                    "auto" === t.flexStyle.main && (t.flexStyle.main = Math.max(t.flexStyle.mainOffset, t.flexStyle.mainLines + t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter)),
                    "auto" === t.flexStyle.cross && (t.flexStyle.cross = Math.max(t.flexStyle.crossOffset, t.flexStyle.crossLines + t.flexStyle.crossInnerBefore + t.flexStyle.crossInnerAfter + t.flexStyle.crossBorderBefore + t.flexStyle.crossBorderAfter)),
                    t.flexStyle.crossSpace = t.flexStyle.cross - t.flexStyle.crossInnerBefore - t.flexStyle.crossInnerAfter - t.flexStyle.crossBorderBefore - t.flexStyle.crossBorderAfter - t.flexStyle.crossLines,
                    t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter,
                    t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter
                }
            }
            , {
                "../reduce": 12
            }],
            7: [function(t, e, i) {
                function n(e) {
                    for (var i, n = -1; i = e.children[++n]; )
                        t("./flex-direction")(i, e.style.flexDirection);
                    t("./flex-direction")(e, e.style.flexDirection),
                    t("./order")(e),
                    t("./flexbox-lines")(e),
                    t("./align-content")(e),
                    n = -1;
                    for (var o; o = e.lines[++n]; )
                        o.mainSpace = e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter - o.main,
                        t("./flex-grow")(o),
                        t("./flex-shrink")(o),
                        t("./margin-main")(o),
                        t("./margin-cross")(o),
                        t("./justify-content")(o, e.style.justifyContent, e);
                    t("./align-items")(e)
                }
                e.exports = n
            }
            , {
                "./align-content": 1,
                "./align-items": 2,
                "./flex-direction": 3,
                "./flex-grow": 4,
                "./flex-shrink": 5,
                "./flexbox-lines": 6,
                "./justify-content": 8,
                "./margin-cross": 9,
                "./margin-main": 10,
                "./order": 11
            }],
            8: [function(t, e, i) {
                e.exports = function(t, e, i) {
                    var n, o, r, s = i.flexStyle.mainInnerBefore, a = -1;
                    if ("flex-end" === e)
                        for (n = t.mainSpace,
                        n += s; r = t.children[++a]; )
                            r.flexStyle.mainStart = n,
                            n += r.flexStyle.mainOuter;
                    else if ("center" === e)
                        for (n = t.mainSpace / 2,
                        n += s; r = t.children[++a]; )
                            r.flexStyle.mainStart = n,
                            n += r.flexStyle.mainOuter;
                    else if ("space-between" === e)
                        for (o = t.mainSpace / (t.children.length - 1),
                        n = 0,
                        n += s; r = t.children[++a]; )
                            r.flexStyle.mainStart = n,
                            n += r.flexStyle.mainOuter + o;
                    else if ("space-around" === e)
                        for (o = 2 * t.mainSpace / (2 * t.children.length),
                        n = o / 2,
                        n += s; r = t.children[++a]; )
                            r.flexStyle.mainStart = n,
                            n += r.flexStyle.mainOuter + o;
                    else
                        for (n = 0,
                        n += s; r = t.children[++a]; )
                            r.flexStyle.mainStart = n,
                            n += r.flexStyle.mainOuter
                }
            }
            , {}],
            9: [function(t, e, i) {
                e.exports = function(t) {
                    for (var e, i = -1; e = t.children[++i]; ) {
                        var n = 0;
                        "auto" === e.flexStyle.crossBefore && ++n,
                        "auto" === e.flexStyle.crossAfter && ++n;
                        var o = t.cross - e.flexStyle.crossOuter;
                        "auto" === e.flexStyle.crossBefore && (e.flexStyle.crossBefore = o / n),
                        "auto" === e.flexStyle.crossAfter && (e.flexStyle.crossAfter = o / n),
                        "auto" === e.flexStyle.cross ? e.flexStyle.crossOuter = e.flexStyle.crossOffset + e.flexStyle.crossBefore + e.flexStyle.crossAfter : e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter
                    }
                }
            }
            , {}],
            10: [function(t, e, i) {
                e.exports = function(t) {
                    for (var e, i = 0, n = -1; e = t.children[++n]; )
                        "auto" === e.flexStyle.mainBefore && ++i,
                        "auto" === e.flexStyle.mainAfter && ++i;
                    if (i > 0) {
                        for (n = -1; e = t.children[++n]; )
                            "auto" === e.flexStyle.mainBefore && (e.flexStyle.mainBefore = t.mainSpace / i),
                            "auto" === e.flexStyle.mainAfter && (e.flexStyle.mainAfter = t.mainSpace / i),
                            "auto" === e.flexStyle.main ? e.flexStyle.mainOuter = e.flexStyle.mainOffset + e.flexStyle.mainBefore + e.flexStyle.mainAfter : e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter;
                        t.mainSpace = 0
                    }
                }
            }
            , {}],
            11: [function(t, e, i) {
                var n = /^(column|row)-reverse$/;
                e.exports = function(t) {
                    t.children.sort(function(t, e) {
                        return t.style.order - e.style.order || t.index - e.index
                    }),
                    n.test(t.style.flexDirection) && t.children.reverse()
                }
            }
            , {}],
            12: [function(t, e, i) {
                function n(t, e, i) {
                    for (var n = t.length, o = -1; ++o < n; )
                        o in t && (i = e(i, t[o], o));
                    return i
                }
                e.exports = n
            }
            , {}],
            13: [function(t, e, i) {
                function n(t) {
                    a(s(t))
                }
                var o = t("./read")
                  , r = t("./write")
                  , s = t("./readAll")
                  , a = t("./writeAll");
                e.exports = n,
                e.exports.read = o,
                e.exports.write = r,
                e.exports.readAll = s,
                e.exports.writeAll = a
            }
            , {
                "./read": 15,
                "./readAll": 16,
                "./write": 17,
                "./writeAll": 18
            }],
            14: [function(t, e, i) {
                function n(t, e) {
                    var i = String(t).match(r);
                    if (!i)
                        return t;
                    var n = i[1]
                      , s = i[2];
                    return "px" === s ? 1 * n : "cm" === s ? .3937 * n * 96 : "in" === s ? 96 * n : "mm" === s ? .3937 * n * 96 / 10 : "pc" === s ? 12 * n * 96 / 72 : "pt" === s ? 96 * n / 72 : "rem" === s ? 16 * n : o(t, e)
                }
                function o(t, e) {
                    s.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + t + "!important",
                    e.parentNode.insertBefore(s, e.nextSibling);
                    var i = s.offsetWidth;
                    return e.parentNode.removeChild(s),
                    i
                }
                e.exports = n;
                var r = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/
                  , s = document.createElement("div")
            }
            , {}],
            15: [function(t, e, i) {
                function n(t) {
                    var e = {
                        alignContent: "stretch",
                        alignItems: "stretch",
                        alignSelf: "auto",
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        boxSizing: "content-box",
                        display: "inline",
                        flexBasis: "auto",
                        flexDirection: "row",
                        flexGrow: 0,
                        flexShrink: 1,
                        flexWrap: "nowrap",
                        justifyContent: "flex-start",
                        height: "auto",
                        marginTop: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingRight: 0,
                        paddingLeft: 0,
                        paddingBottom: 0,
                        maxHeight: "none",
                        maxWidth: "none",
                        minHeight: 0,
                        minWidth: 0,
                        order: 0,
                        position: "static",
                        width: "auto"
                    };
                    if (t instanceof Element) {
                        var i = t.hasAttribute("data-style")
                          , n = i ? t.getAttribute("data-style") : t.getAttribute("style") || "";
                        i || t.setAttribute("data-style", n),
                        s(e, window.getComputedStyle && getComputedStyle(t) || {}),
                        o(e, t.currentStyle || {}),
                        r(e, n);
                        for (var a in e)
                            e[a] = l(e[a], t);
                        var c = t.getBoundingClientRect();
                        e.offsetHeight = c.height || t.offsetHeight,
                        e.offsetWidth = c.width || t.offsetWidth
                    }
                    return {
                        element: t,
                        style: e
                    }
                }
                function o(t, e) {
                    for (var i in t) {
                        if (i in e)
                            t[i] = e[i];
                        else {
                            var n = i.replace(/[A-Z]/g, "-$&").toLowerCase();
                            n in e && (t[i] = e[n])
                        }
                    }
                    "-js-display"in e && (t.display = e["-js-display"])
                }
                function r(t, e) {
                    for (var i; i = a.exec(e); ) {
                        t[i[1].toLowerCase().replace(/-[a-z]/g, function(t) {
                            return t.slice(1).toUpperCase()
                        })] = i[2]
                    }
                }
                function s(t, e) {
                    for (var i in t) {
                        i in e && !/^(alignSelf|height|width)$/.test(i) && (t[i] = e[i])
                    }
                }
                e.exports = n;
                var a = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g
                  , l = t("./getComputedLength")
            }
            , {
                "./getComputedLength": 14
            }],
            16: [function(t, e, i) {
                function n(t) {
                    var e = [];
                    return o(t, e),
                    e
                }
                function o(t, e) {
                    for (var i, n = r(t), a = [], l = -1; i = t.childNodes[++l]; ) {
                        var c = 3 === i.nodeType && !/^\s*$/.test(i.nodeValue);
                        if (n && c) {
                            var u = i;
                            i = t.insertBefore(document.createElement("flex-item"), u),
                            i.appendChild(u)
                        }
                        if (i instanceof Element) {
                            var d = o(i, e);
                            if (n) {
                                var f = i.style;
                                f.display = "inline-block",
                                f.position = "absolute",
                                d.style = s(i).style,
                                a.push(d)
                            }
                        }
                    }
                    var p = {
                        element: t,
                        children: a
                    };
                    return n && (p.style = s(t).style,
                    e.push(p)),
                    p
                }
                function r(t) {
                    var e = t instanceof Element
                      , i = e && t.getAttribute("data-style")
                      , n = e && t.currentStyle && t.currentStyle["-js-display"];
                    return a.test(i) || l.test(n)
                }
                e.exports = n;
                var s = t("../read")
                  , a = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i
                  , l = /^(inline-)?flex$/i
            }
            , {
                "../read": 15
            }],
            17: [function(t, e, i) {
                function n(t) {
                    r(t);
                    var e = t.element.style
                      , i = "inline" === t.mainAxis ? ["main", "cross"] : ["cross", "main"];
                    e.boxSizing = "content-box",
                    e.display = "block",
                    e.position = "relative",
                    e.width = o(t.flexStyle[i[0]] - t.flexStyle[i[0] + "InnerBefore"] - t.flexStyle[i[0] + "InnerAfter"] - t.flexStyle[i[0] + "BorderBefore"] - t.flexStyle[i[0] + "BorderAfter"]),
                    e.height = o(t.flexStyle[i[1]] - t.flexStyle[i[1] + "InnerBefore"] - t.flexStyle[i[1] + "InnerAfter"] - t.flexStyle[i[1] + "BorderBefore"] - t.flexStyle[i[1] + "BorderAfter"]);
                    for (var n, s = -1; n = t.children[++s]; ) {
                        var a = n.element.style
                          , l = "inline" === n.mainAxis ? ["main", "cross"] : ["cross", "main"];
                        a.boxSizing = "content-box",
                        a.display = "block",
                        a.position = "absolute",
                        "auto" !== n.flexStyle[l[0]] && (a.width = o(n.flexStyle[l[0]] - n.flexStyle[l[0] + "InnerBefore"] - n.flexStyle[l[0] + "InnerAfter"] - n.flexStyle[l[0] + "BorderBefore"] - n.flexStyle[l[0] + "BorderAfter"])),
                        "auto" !== n.flexStyle[l[1]] && (a.height = o(n.flexStyle[l[1]] - n.flexStyle[l[1] + "InnerBefore"] - n.flexStyle[l[1] + "InnerAfter"] - n.flexStyle[l[1] + "BorderBefore"] - n.flexStyle[l[1] + "BorderAfter"])),
                        a.top = o(n.flexStyle[l[1] + "Start"]),
                        a.left = o(n.flexStyle[l[0] + "Start"]),
                        a.marginTop = o(n.flexStyle[l[1] + "Before"]),
                        a.marginRight = o(n.flexStyle[l[0] + "After"]),
                        a.marginBottom = o(n.flexStyle[l[1] + "After"]),
                        a.marginLeft = o(n.flexStyle[l[0] + "Before"])
                    }
                }
                function o(t) {
                    return "string" == typeof t ? t : Math.max(t, 0) + "px"
                }
                e.exports = n;
                var r = t("../flexbox")
            }
            , {
                "../flexbox": 7
            }],
            18: [function(t, e, i) {
                function n(t) {
                    for (var e, i = -1; e = t[++i]; )
                        o(e)
                }
                e.exports = n;
                var o = t("../write")
            }
            , {
                "../write": 17
            }]
        }, {}, [13])(13)
    })
}
, function(t, e, i) {
    "use strict";
    var n, o, r;
    !function(s) {
        o = [i(0)],
        n = s,
        void 0 !== (r = "function" == typeof n ? n.apply(e, o) : n) && (t.exports = r)
    }(function(t) {
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                },
                r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                },
                t.extend(r, r.initials),
                r.activeBreakpoint = null,
                r.animType = null,
                r.animProp = null,
                r.breakpoints = [],
                r.breakpointSettings = [],
                r.cssTransitions = !1,
                r.focussed = !1,
                r.interrupted = !1,
                r.hidden = "hidden",
                r.paused = !0,
                r.positionProp = null,
                r.respondTo = null,
                r.rowCount = 1,
                r.shouldClick = !0,
                r.$slider = t(e),
                r.$slidesCache = null,
                r.transformType = null,
                r.transitionType = null,
                r.visibilityChange = "visibilitychange",
                r.windowWidth = 0,
                r.windowTimer = null,
                o = t(e).data("slick") || {},
                r.options = t.extend({}, r.defaults, n, o),
                r.currentSlide = r.options.initialSlide,
                r.originalSettings = r.options,
                void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
                r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
                r.visibilityChange = "webkitvisibilitychange"),
                r.autoPlay = t.proxy(r.autoPlay, r),
                r.autoPlayClear = t.proxy(r.autoPlayClear, r),
                r.autoPlayIterator = t.proxy(r.autoPlayIterator, r),
                r.changeSlide = t.proxy(r.changeSlide, r),
                r.clickHandler = t.proxy(r.clickHandler, r),
                r.selectHandler = t.proxy(r.selectHandler, r),
                r.setPosition = t.proxy(r.setPosition, r),
                r.swipeHandler = t.proxy(r.swipeHandler, r),
                r.dragHandler = t.proxy(r.dragHandler, r),
                r.keyHandler = t.proxy(r.keyHandler, r),
                r.instanceUid = i++,
                r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                r.registerBreakpoints(),
                r.init(!0)
            }
            var i = 0;
            return e
        }(),
        e.prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }
        ,
        e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var o = this;
            if ("boolean" == typeof i)
                n = i,
                i = null;
            else if (i < 0 || i >= o.slideCount)
                return !1;
            o.unload(),
            "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack),
            o.$slides = o.$slideTrack.children(this.options.slide),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }),
            o.$slidesCache = o.$slides,
            o.reinit()
        }
        ,
        e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }
        ,
        e.prototype.animateSlide = function(e, i) {
            var n = {}
              , o = this;
            o.animateHeight(),
            !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
            !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
            t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(t) {
                    t = Math.ceil(t),
                    !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)",
                    o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)",
                    o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(),
            e = Math.ceil(e),
            !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)",
            o.$slideTrack.css(n),
            i && setTimeout(function() {
                o.disableTransition(),
                i.call()
            }, o.options.speed))
        }
        ,
        e.prototype.getNavTarget = function() {
            var e = this
              , i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)),
            i
        }
        ,
        e.prototype.asNavFor = function(e) {
            var i = this
              , n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }
        ,
        e.prototype.applyTransition = function(t) {
            var e = this
              , i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
            !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }
        ,
        e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(),
            t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }
        ,
        e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }
        ,
        e.prototype.autoPlayIterator = function() {
            var t = this
              , e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
            t.currentSlide - 1 == 0 && (t.direction = 1))),
            t.slideHandler(e))
        }
        ,
        e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
            e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
            e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }
        ,
        e.prototype.buildDots = function() {
            var e, i, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"),
                i = t("<ul />").addClass(n.options.dotsClass),
                e = 0; e <= n.getDotCount(); e += 1)
                    i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots),
                n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }
        ,
        e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
            e.slideCount = e.$slides.length,
            e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }),
            e.$slider.addClass("slick-slider"),
            e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
            e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
            e.$slideTrack.css("opacity", 0),
            !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
            t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
            e.setupInfinite(),
            e.buildArrows(),
            e.buildDots(),
            e.updateDots(),
            e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
            !0 === e.options.draggable && e.$list.addClass("draggable")
        }
        ,
        e.prototype.buildRows = function() {
            var t, e, i, n, o, r, s, a = this;
            if (n = document.createDocumentFragment(),
            r = a.$slider.children(),
            a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows,
                o = Math.ceil(r.length / s),
                t = 0; t < o; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = t * s + (e * a.options.slidesPerRow + i);
                            r.get(u) && c.appendChild(r.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n),
                a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }
        ,
        e.prototype.checkResponsive = function(e, i) {
            var n, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
            s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                o = null;
                for (n in s.breakpoints)
                    s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o,
                "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
                !0 === e && (s.currentSlide = s.options.initialSlide),
                s.refresh(e)),
                a = o) : (s.activeBreakpoint = o,
                "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
                !0 === e && (s.currentSlide = s.options.initialSlide),
                s.refresh(e)),
                a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
                s.options = s.originalSettings,
                !0 === e && (s.currentSlide = s.options.initialSlide),
                s.refresh(e),
                a = o),
                e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }
        ,
        e.prototype.changeSlide = function(e, i) {
            var n, o, r, s = this, a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(),
            a.is("li") || (a = a.closest("li")),
            r = s.slideCount % s.options.slidesToScroll != 0,
            n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
            e.data.message) {
            case "previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
                s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? s.options.slidesToScroll : n,
                s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, i),
                a.children().trigger("focus");
                break;
            default:
                return
            }
        }
        ,
        e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(),
            i = 0,
            t > e[e.length - 1])
                t = e[e.length - 1];
            else
                for (var o in e) {
                    if (t < e[o]) {
                        t = i;
                        break
                    }
                    i = e[o]
                }
            return t
        }
        ,
        e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
            e.$slider.off("focus.slick blur.slick"),
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
            e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
            e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
            e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
            e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
            e.$list.off("click.slick", e.clickHandler),
            t(document).off(e.visibilityChange, e.visibility),
            e.cleanUpSlideEvents(),
            !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
            t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
            t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
            t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
            t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
            t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }
        ,
        e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
            e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(),
            t.removeAttr("style"),
            e.$slider.empty().append(t))
        }
        ,
        e.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(),
            t.stopPropagation(),
            t.preventDefault())
        }
        ,
        e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(),
            i.touchObject = {},
            i.cleanUpEvents(),
            t(".slick-cloned", i.$slider).detach(),
            i.$dots && i.$dots.remove(),
            i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
            i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
            i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
            i.cleanUpRows(),
            i.$slider.removeClass("slick-slider"),
            i.$slider.removeClass("slick-initialized"),
            i.$slider.removeClass("slick-dotted"),
            i.unslicked = !0,
            e || i.$slider.trigger("destroy", [i])
        }
        ,
        e.prototype.disableTransition = function(t) {
            var e = this
              , i = {};
            i[e.transitionType] = "",
            !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }
        ,
        e.prototype.fadeSlide = function(t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }),
            i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
            i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }),
            e && setTimeout(function() {
                i.disableTransition(t),
                e.call()
            }, i.options.speed))
        }
        ,
        e.prototype.fadeSlideOut = function(t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t),
            e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }
        ,
        e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides,
            e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(t).appendTo(e.$slideTrack),
            e.reinit())
        }
        ,
        e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"),
                    e.autoPlay())
                }, 0)
            })
        }
        ,
        e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }
        ,
        e.prototype.getDotCount = function() {
            var t = this
              , e = 0
              , i = 0
              , n = 0;
            if (!0 === t.options.infinite)
                for (; e < t.slideCount; )
                    ++n,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode)
                n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount; )
                    ++n,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else
                n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }
        ,
        e.prototype.getLeft = function(t) {
            var e, i, n, o = this, r = 0;
            return o.slideOffset = 0,
            i = o.$slides.first().outerHeight(!0),
            !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
            r = i * o.options.slidesToShow * -1),
            o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1,
            r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
            r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth,
            r = (t + o.options.slidesToShow - o.slideCount) * i),
            o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
            r = 0),
            !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
            o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
            e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r,
            !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow),
            e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
            !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1),
            e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
            e += (o.$list.width() - n.outerWidth()) / 2)),
            e
        }
        ,
        e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            return this.options[t]
        }
        ,
        e.prototype.getNavigableIndexes = function() {
            var t, e = this, i = 0, n = 0, o = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
            n = -1 * e.options.slidesToScroll,
            t = 2 * e.slideCount); i < t; )
                o.push(i),
                i = n + e.options.slidesToScroll,
                n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }
        ,
        e.prototype.getSlick = function() {
            return this
        }
        ,
        e.prototype.getSlideCount = function() {
            var e, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0,
            !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, r) {
                if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * n.swipeLeft)
                    return e = r,
                    !1
            }),
            Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }
        ,
        e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }
        ,
        e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
            i.buildRows(),
            i.buildOut(),
            i.setProps(),
            i.startLoad(),
            i.loadSlider(),
            i.initializeEvents(),
            i.updateArrows(),
            i.updateDots(),
            i.checkResponsive(!0),
            i.focusHandler()),
            e && i.$slider.trigger("init", [i]),
            !0 === i.options.accessibility && i.initADA(),
            i.options.autoplay && (i.paused = !1,
            i.autoPlay())
        }
        ,
        e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }),
            e.$slideTrack.attr("role", "listbox"),
            e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }),
            null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
            e.activateADA()
        }
        ,
        e.prototype.initArrowEvents = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide),
            t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }
        ,
        e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide),
            !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
            e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }
        ,
        e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(),
            e.initDotEvents(),
            e.initSlideEvents(),
            e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler),
            e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler),
            e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler),
            e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler),
            e.$list.on("click.slick", e.clickHandler),
            t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
            !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
            t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
            t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
            t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
            t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
            t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }
        ,
        e.prototype.initUI = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
            t.$nextArrow.show()),
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }
        ,
        e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }
        ,
        e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this)
                      , i = t(this).attr("data-lazy")
                      , n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }),
                            s.$slider.trigger("lazyLoaded", [s, e, i])
                        })
                    }
                    ,
                    n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        s.$slider.trigger("lazyLoadError", [s, e, i])
                    }
                    ,
                    n.src = i
                })
            }
            var i, n, o, r, s = this;
            !0 === s.options.centerMode ? !0 === s.options.infinite ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1),
            r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
            r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
            r = Math.ceil(o + s.options.slidesToShow),
            !0 === s.options.fade && (o > 0 && o--,
            r <= s.slideCount && r++)),
            i = s.$slider.find(".slick-slide").slice(o, r),
            e(i),
            s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"),
            e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
            e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow),
            e(n))
        }
        ,
        e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(),
            t.$slideTrack.css({
                opacity: 1
            }),
            t.$slider.removeClass("slick-loading"),
            t.initUI(),
            "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }
        ,
        e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }
        ,
        e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(),
            t.setPosition()
        }
        ,
        e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(),
            t.paused = !0
        }
        ,
        e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(),
            t.options.autoplay = !0,
            t.paused = !1,
            t.focussed = !1,
            t.interrupted = !1
        }
        ,
        e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]),
            e.animating = !1,
            e.setPosition(),
            e.swipeLeft = null,
            e.options.autoplay && e.autoPlay(),
            !0 === e.options.accessibility && e.initADA())
        }
        ,
        e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }
        ,
        e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }
        ,
        e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, o, r = this, s = t("img[data-lazy]", r.$slider);
            s.length ? (i = s.first(),
            n = i.attr("data-lazy"),
            o = document.createElement("img"),
            o.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"),
                !0 === r.options.adaptiveHeight && r.setPosition(),
                r.$slider.trigger("lazyLoaded", [r, i, n]),
                r.progressiveLazyLoad()
            }
            ,
            o.onerror = function() {
                e < 3 ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                r.$slider.trigger("lazyLoadError", [r, i, n]),
                r.progressiveLazyLoad())
            }
            ,
            o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
        }
        ,
        e.prototype.refresh = function(e) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow,
            !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
            o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
            i = o.currentSlide,
            o.destroy(!0),
            t.extend(o, o.initials, {
                currentSlide: i
            }),
            o.init(),
            e || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }
        ,
        e.prototype.registerBreakpoints = function() {
            var e, i, n, o = this, r = o.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in r)
                    if (n = o.breakpoints.length - 1,
                    i = r[e].breakpoint,
                    r.hasOwnProperty(e)) {
                        for (; n >= 0; )
                            o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1),
                            n--;
                        o.breakpoints.push(i),
                        o.breakpointSettings[i] = r[e].settings
                    }
                o.breakpoints.sort(function(t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }
        ,
        e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
            e.slideCount = e.$slides.length,
            e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
            e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
            e.registerBreakpoints(),
            e.setProps(),
            e.setupInfinite(),
            e.buildArrows(),
            e.updateArrows(),
            e.initArrowEvents(),
            e.buildDots(),
            e.updateDots(),
            e.initDotEvents(),
            e.cleanUpSlideEvents(),
            e.initSlideEvents(),
            e.checkResponsive(!1, !0),
            !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
            e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
            e.setPosition(),
            e.focusHandler(),
            e.paused = !e.options.autoplay,
            e.autoPlay(),
            e.$slider.trigger("reInit", [e])
        }
        ,
        e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
            e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(),
                e.checkResponsive(),
                e.unslicked || e.setPosition()
            }, 50))
        }
        ,
        e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            if ("boolean" == typeof t ? (e = t,
            t = !0 === e ? 0 : n.slideCount - 1) : t = !0 === e ? --t : t,
            n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
                return !1;
            n.unload(),
            !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
            n.$slides = n.$slideTrack.children(this.options.slide),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            n.$slidesCache = n.$slides,
            n.reinit()
        }
        ,
        e.prototype.setCSS = function(t) {
            var e, i, n = this, o = {};
            !0 === n.options.rtl && (t = -t),
            e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px",
            i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px",
            o[n.positionProp] = t,
            !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {},
            !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")",
            n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)",
            n.$slideTrack.css(o)))
        }
        ,
        e.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
            !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })),
            t.listWidth = t.$list.width(),
            t.listHeight = t.$list.height(),
            !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
            t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
            t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }
        ,
        e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, o) {
                e = i.slideWidth * n * -1,
                !0 === i.options.rtl ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }),
            i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }
        ,
        e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }
        ,
        e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, o, r, s = this, a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0],
            a = arguments[1],
            r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0],
            o = arguments[1],
            a = arguments[2],
            "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
            "single" === r)
                s.options[n] = o;
            else if ("multiple" === r)
                t.each(n, function(t, e) {
                    s.options[t] = e
                });
            else if ("responsive" === r)
                for (i in o)
                    if ("array" !== t.type(s.options.responsive))
                        s.options.responsive = [o[i]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0; )
                            s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1),
                            e--;
                        s.options.responsive.push(o[i])
                    }
            a && (s.unload(),
            s.reinit())
        }
        ,
        e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(),
            t.setHeight(),
            !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
            t.$slider.trigger("setPosition", [t])
        }
        ,
        e.prototype.setProps = function() {
            var t = this
              , e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left",
            "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
            void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
            t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
            void 0 !== e.OTransform && (t.animType = "OTransform",
            t.transformType = "-o-transform",
            t.transitionType = "OTransition",
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
            void 0 !== e.MozTransform && (t.animType = "MozTransform",
            t.transformType = "-moz-transform",
            t.transitionType = "MozTransition",
            void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
            void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
            t.transformType = "-webkit-transform",
            t.transitionType = "webkitTransition",
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
            void 0 !== e.msTransform && (t.animType = "msTransform",
            t.transformType = "-ms-transform",
            t.transitionType = "msTransition",
            void 0 === e.msTransform && (t.animType = !1)),
            void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
            t.transformType = "transform",
            t.transitionType = "transition"),
            t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }
        ,
        e.prototype.setSlideClasses = function(t) {
            var e, i, n, o, r = this;
            i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
            r.$slides.eq(t).addClass("slick-current"),
            !0 === r.options.centerMode ? (e = Math.floor(r.options.slidesToShow / 2),
            !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t,
            i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
            n = !0 === r.options.infinite ? r.options.slidesToShow + t : t,
            r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
            "ondemand" === r.options.lazyLoad && r.lazyLoad()
        }
        ,
        e.prototype.setupInfinite = function() {
            var e, i, n, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1),
            !0 === o.options.infinite && !1 === o.options.fade && (i = null,
            o.slideCount > o.options.slidesToShow)) {
                for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
                e = o.slideCount; e > o.slideCount - n; e -= 1)
                    i = e - 1,
                    t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n; e += 1)
                    i = e,
                    t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }
        ,
        e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(),
            e.interrupted = t
        }
        ,
        e.prototype.selectHandler = function(e) {
            var i = this
              , n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
              , o = parseInt(n.attr("data-slick-index"));
            if (o || (o = 0),
            i.slideCount <= i.options.slidesToShow)
                return i.setSlideClasses(o),
                void i.asNavFor(o);
            i.slideHandler(o)
        }
        ,
        e.prototype.slideHandler = function(t, e, i) {
            var n, o, r, s, a, l = null, c = this;
            if (e = e || !1,
            (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) {
                if (!1 === e && c.asNavFor(t),
                n = t,
                l = c.getLeft(n),
                s = c.getLeft(c.currentSlide),
                c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
                !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                    return void (!1 === c.options.fade && (n = c.currentSlide,
                    !0 !== i ? c.animateSlide(s, function() {
                        c.postSlide(n)
                    }) : c.postSlide(n)));
                if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                    return void (!1 === c.options.fade && (n = c.currentSlide,
                    !0 !== i ? c.animateSlide(s, function() {
                        c.postSlide(n)
                    }) : c.postSlide(n)));
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                r = c.currentSlide,
                c.currentSlide = o,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (a = c.getNavTarget(),
                a = a.slick("getSlick"),
                a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== i ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function() {
                        c.postSlide(o)
                    })) : c.postSlide(o),
                    void c.animateHeight();
                !0 !== i ? c.animateSlide(l, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }
        ,
        e.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
            t.$nextArrow.hide()),
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
            t.$slider.addClass("slick-loading")
        }
        ,
        e.prototype.swipeDirection = function() {
            var t, e, i, n, o = this;
            return t = o.touchObject.startX - o.touchObject.curX,
            e = o.touchObject.startY - o.touchObject.curY,
            i = Math.atan2(e, t),
            n = Math.round(180 * i / Math.PI),
            n < 0 && (n = 360 - Math.abs(n)),
            n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }
        ,
        e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1,
            n.interrupted = !1,
            n.shouldClick = !(n.touchObject.swipeLength > 10),
            void 0 === n.touchObject.curX)
                return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
            n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                    n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                    n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e),
                n.touchObject = {},
                n.$slider.trigger("swipe", [n, i]))
            } else
                n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
                n.touchObject = {})
        }
        ,
        e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
                switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
                e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
                }
        }
        ,
        e.prototype.swipeMove = function(t) {
            var e, i, n, o, r, s = this;
            return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
            !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide),
            s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
            s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
            s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
            !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
            "vertical" !== (i = s.swipeDirection()) ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(),
            o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
            !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
            n = s.touchObject.swipeLength,
            s.touchObject.edgeHit = !1,
            !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction,
            s.touchObject.edgeHit = !0),
            !1 === s.options.vertical ? s.swipeLeft = e + n * o : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * o,
            !0 === s.options.verticalSwiping && (s.swipeLeft = e + n * o),
            !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null,
            !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }
        ,
        e.prototype.swipeStart = function(t) {
            var e, i = this;
            if (i.interrupted = !0,
            1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
                return i.touchObject = {},
                !1;
            void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
            i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
            i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
            i.dragging = !0
        }
        ,
        e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.appendTo(t.$slideTrack),
            t.reinit())
        }
        ,
        e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(),
            e.$dots && e.$dots.remove(),
            e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
            e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
            e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }
        ,
        e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]),
            e.destroy()
        }
        ,
        e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2),
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
            t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
            t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
            t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }
        ,
        e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
            t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }
        ,
        e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }
        ,
        t.fn.slick = function() {
            var t, i, n = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = n.length;
            for (t = 0; t < s; t++)
                if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t],o) : i = n[t].slick[o].apply(n[t].slick, r),
                void 0 !== i)
                    return i;
            return n
        }
    })
}
, function(t, e, i) {
    "use strict";
    var n, o;
    !function(r, s) {
        n = s,
        void 0 !== (o = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = o)
    }(0, function(t, e, i) {
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t) {
            var e = t.getBoundingClientRect()
              , i = {};
            for (var n in e)
                i[n] = e[n];
            if (t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView.frameElement;
                if (r) {
                    var s = o(r);
                    i.top += s.top,
                    i.bottom += s.top,
                    i.left += s.left,
                    i.right += s.left
                }
            }
            return i
        }
        function r(t) {
            var e = getComputedStyle(t) || {}
              , i = e.position
              , n = [];
            if ("fixed" === i)
                return [t];
            for (var o = t; (o = o.parentNode) && o && 1 === o.nodeType; ) {
                var r = void 0;
                try {
                    r = getComputedStyle(o)
                } catch (t) {}
                if (void 0 === r || null === r)
                    return n.push(o),
                    n;
                var s = r
                  , a = s.overflow
                  , l = s.overflowX;
                /(auto|scroll|overlay)/.test(a + s.overflowY + l) && ("absolute" !== i || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(o)
            }
            return n.push(t.ownerDocument.body),
            t.ownerDocument !== document && n.push(t.ownerDocument.defaultView),
            n
        }
        function s() {
            O && document.body.removeChild(O),
            O = null
        }
        function a(t) {
            var e = void 0;
            t === document ? (e = document,
            t = document.documentElement) : e = t.ownerDocument;
            var i = e.documentElement
              , n = o(t)
              , r = k();
            return n.top -= r.top,
            n.left -= r.left,
            void 0 === n.width && (n.width = document.body.scrollWidth - n.left - n.right),
            void 0 === n.height && (n.height = document.body.scrollHeight - n.top - n.bottom),
            n.top = n.top - i.clientTop,
            n.left = n.left - i.clientLeft,
            n.right = e.body.clientWidth - n.width - n.left,
            n.bottom = e.body.clientHeight - n.height - n.top,
            n
        }
        function l(t) {
            return t.offsetParent || document.documentElement
        }
        function c() {
            if (A)
                return A;
            var t = document.createElement("div");
            t.style.width = "100%",
            t.style.height = "200px";
            var e = document.createElement("div");
            u(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }),
            e.appendChild(t),
            document.body.appendChild(e);
            var i = t.offsetWidth;
            e.style.overflow = "scroll";
            var n = t.offsetWidth;
            i === n && (n = e.clientWidth),
            document.body.removeChild(e);
            var o = i - n;
            return A = {
                width: o,
                height: o
            }
        }
        function u() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , e = [];
            return Array.prototype.push.apply(e, arguments),
            e.slice(1).forEach(function(e) {
                if (e)
                    for (var i in e)
                        ({}).hasOwnProperty.call(e, i) && (t[i] = e[i])
            }),
            t
        }
        function d(t, e) {
            if (void 0 !== t.classList)
                e.split(" ").forEach(function(e) {
                    e.trim() && t.classList.remove(e)
                });
            else {
                var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)","gi")
                  , n = h(t).replace(i, " ");
                m(t, n)
            }
        }
        function f(t, e) {
            if (void 0 !== t.classList)
                e.split(" ").forEach(function(e) {
                    e.trim() && t.classList.add(e)
                });
            else {
                d(t, e);
                var i = h(t) + " " + e;
                m(t, i)
            }
        }
        function p(t, e) {
            if (void 0 !== t.classList)
                return t.classList.contains(e);
            var i = h(t);
            return new RegExp("(^| )" + e + "( |$)","gi").test(i)
        }
        function h(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
        }
        function m(t, e) {
            t.setAttribute("class", e)
        }
        function g(t, e, i) {
            i.forEach(function(i) {
                -1 === e.indexOf(i) && p(t, i) && d(t, i)
            }),
            e.forEach(function(e) {
                p(t, e) || f(t, e)
            })
        }
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function v(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function y(t, e) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + i >= e && e >= t - i
        }
        function b() {
            return "object" == typeof performance && "function" == typeof performance.now ? performance.now() : +new Date
        }
        function S() {
            for (var t = {
                top: 0,
                left: 0
            }, e = arguments.length, i = Array(e), n = 0; n < e; n++)
                i[n] = arguments[n];
            return i.forEach(function(e) {
                var i = e.top
                  , n = e.left;
                "string" == typeof i && (i = parseFloat(i, 10)),
                "string" == typeof n && (n = parseFloat(n, 10)),
                t.top += i,
                t.left += n
            }),
            t
        }
        function w(t, e) {
            return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width),
            "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height),
            t
        }
        function T(t, e) {
            return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
            e === document && (e = e.documentElement),
            void 0 !== e.nodeType && function() {
                var t = e
                  , i = a(e)
                  , n = i
                  , o = getComputedStyle(e);
                if (e = [n.left, n.top, i.width + n.left, i.height + n.top],
                t.ownerDocument !== document) {
                    var r = t.ownerDocument.defaultView;
                    e[0] += r.pageXOffset,
                    e[1] += r.pageYOffset,
                    e[2] += r.pageXOffset,
                    e[3] += r.pageYOffset
                }
                G.forEach(function(t, i) {
                    t = t[0].toUpperCase() + t.substr(1),
                    "Top" === t || "Left" === t ? e[i] += parseFloat(o["border" + t + "Width"]) : e[i] -= parseFloat(o["border" + t + "Width"])
                })
            }(),
            e
        }
        var _ = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , x = void 0;
        void 0 === x && (x = {
            modules: []
        });
        var O = null
          , C = function() {
            var t = 0;
            return function() {
                return ++t
            }
        }()
          , E = {}
          , k = function() {
            var t = O;
            t && document.body.contains(t) || (t = document.createElement("div"),
            t.setAttribute("data-tether-id", C()),
            u(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }),
            document.body.appendChild(t),
            O = t);
            var e = t.getAttribute("data-tether-id");
            return void 0 === E[e] && (E[e] = o(t),
            D(function() {
                delete E[e]
            })),
            E[e]
        }
          , A = null
          , I = []
          , D = function(t) {
            I.push(t)
        }
          , P = function() {
            for (var t = void 0; t = I.pop(); )
                t()
        }
          , M = function() {
            function t() {
                n(this, t)
            }
            return _(t, [{
                key: "on",
                value: function(t, e, i) {
                    var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    void 0 === this.bindings && (this.bindings = {}),
                    void 0 === this.bindings[t] && (this.bindings[t] = []),
                    this.bindings[t].push({
                        handler: e,
                        ctx: i,
                        once: n
                    })
                }
            }, {
                key: "once",
                value: function(t, e, i) {
                    this.on(t, e, i, !0)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                        if (void 0 === e)
                            delete this.bindings[t];
                        else
                            for (var i = 0; i < this.bindings[t].length; )
                                this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : ++i
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if (void 0 !== this.bindings && this.bindings[t]) {
                        for (var e = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                            n[o - 1] = arguments[o];
                        for (; e < this.bindings[t].length; ) {
                            var r = this.bindings[t][e]
                              , s = r.handler
                              , a = r.ctx
                              , l = r.once
                              , c = a;
                            void 0 === c && (c = this),
                            s.apply(c, n),
                            l ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]),
            t
        }();
        x.Utils = {
            getActualBoundingClientRect: o,
            getScrollParents: r,
            getBounds: a,
            getOffsetParent: l,
            extend: u,
            addClass: f,
            removeClass: d,
            hasClass: p,
            updateClasses: g,
            defer: D,
            flush: P,
            uniqueId: C,
            Evented: M,
            getScrollBarSize: c,
            removeUtilElements: s
        };
        var N = function() {
            function t(t, e) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !e || i.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0,
                    r = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , _ = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , $ = function(t, e, i) {
            for (var n = !0; n; ) {
                var o = t
                  , r = e
                  , s = i;
                n = !1,
                null === o && (o = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(o, r);
                if (void 0 !== a) {
                    if ("value"in a)
                        return a.value;
                    var l = a.get;
                    if (void 0 === l)
                        return;
                    return l.call(s)
                }
                var c = Object.getPrototypeOf(o);
                if (null === c)
                    return;
                t = c,
                e = r,
                i = s,
                n = !0,
                a = c = void 0
            }
        };
        if (void 0 === x)
            throw new Error("You must include the utils.js file before tether.js");
        var L = x.Utils
          , r = L.getScrollParents
          , a = L.getBounds
          , l = L.getOffsetParent
          , u = L.extend
          , f = L.addClass
          , d = L.removeClass
          , g = L.updateClasses
          , D = L.defer
          , P = L.flush
          , c = L.getScrollBarSize
          , s = L.removeUtilElements
          , R = function() {
            if ("undefined" == typeof document)
                return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < e.length; ++i) {
                var n = e[i];
                if (void 0 !== t.style[n])
                    return n
            }
        }()
          , H = []
          , j = function() {
            H.forEach(function(t) {
                t.position(!1)
            }),
            P()
        };
        !function() {
            var t = null
              , e = null
              , i = null
              , n = function n() {
                if (void 0 !== e && e > 16)
                    return e = Math.min(e - 16, 250),
                    void (i = setTimeout(n, 250));
                void 0 !== t && b() - t < 10 || (null != i && (clearTimeout(i),
                i = null),
                t = b(),
                j(),
                e = b() - t)
            };
            "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
                window.addEventListener(t, n)
            })
        }();
        var B = {
            center: "center",
            left: "right",
            right: "left"
        }
          , F = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        }
          , W = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        }
          , V = function(t, e) {
            var i = t.left
              , n = t.top;
            return "auto" === i && (i = B[e.left]),
            "auto" === n && (n = F[e.top]),
            {
                left: i,
                top: n
            }
        }
          , U = function(t) {
            var e = t.left
              , i = t.top;
            return void 0 !== W[t.left] && (e = W[t.left]),
            void 0 !== W[t.top] && (i = W[t.top]),
            {
                left: e,
                top: i
            }
        }
          , z = function(t) {
            var e = t.split(" ")
              , i = N(e, 2);
            return {
                top: i[0],
                left: i[1]
            }
        }
          , q = z
          , Z = function(t) {
            function e(t) {
                var i = this;
                n(this, e),
                $(Object.getPrototypeOf(e.prototype), "constructor", this).call(this),
                this.position = this.position.bind(this),
                H.push(this),
                this.history = [],
                this.setOptions(t, !1),
                x.modules.forEach(function(t) {
                    void 0 !== t.initialize && t.initialize.call(i)
                }),
                this.position()
            }
            return v(e, t),
            _(e, [{
                key: "getClass",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
                      , e = this.options.classes;
                    return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this
                      , i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1]
                      , n = {
                        offset: "0 0",
                        targetOffset: "0 0",
                        targetAttachment: "auto auto",
                        classPrefix: "tether"
                    };
                    this.options = u(n, t);
                    var o = this.options
                      , s = o.element
                      , a = o.target
                      , l = o.targetModifier;
                    if (this.element = s,
                    this.target = a,
                    this.targetModifier = l,
                    "viewport" === this.target ? (this.target = document.body,
                    this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body,
                    this.targetModifier = "scroll-handle"),
                    ["element", "target"].forEach(function(t) {
                        if (void 0 === e[t])
                            throw new Error("Tether Error: Both element and target must be defined");
                        void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                    }),
                    f(this.element, this.getClass("element")),
                    !1 !== this.options.addTargetClasses && f(this.target, this.getClass("target")),
                    !this.options.attachment)
                        throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = q(this.options.targetAttachment),
                    this.attachment = q(this.options.attachment),
                    this.offset = z(this.options.offset),
                    this.targetOffset = z(this.options.targetOffset),
                    void 0 !== this.scrollParents && this.disable(),
                    "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target),
                    !1 !== this.options.enabled && this.enable(i)
                }
            }, {
                key: "getTargetBounds",
                value: function() {
                    if (void 0 === this.targetModifier)
                        return a(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body)
                            return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                        var t = a(this.target)
                          , e = {
                            height: t.height,
                            width: t.width,
                            top: t.top,
                            left: t.left
                        };
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)),
                        e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))),
                        e.height = Math.min(innerHeight, e.height),
                        e.height -= 2,
                        e.width = Math.min(e.width, t.width - (pageXOffset - t.left)),
                        e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))),
                        e.width = Math.min(innerWidth, e.width),
                        e.width -= 2,
                        e.top < pageYOffset && (e.top = pageYOffset),
                        e.left < pageXOffset && (e.left = pageXOffset),
                        e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0
                          , i = this.target;
                        i === document.body ? (i = document.documentElement,
                        t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(i);
                        var n = getComputedStyle(i)
                          , o = i.scrollWidth > i.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body
                          , r = 0;
                        o && (r = 15);
                        var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r
                          , e = {
                            width: 15,
                            height: .975 * s * (s / i.scrollHeight),
                            left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                        }
                          , l = 0;
                        s < 408 && this.target === document.body && (l = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58),
                        this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var c = this.target.scrollTop / (i.scrollHeight - s);
                        return e.top = c * (s - e.height - l) + t.top + parseFloat(n.borderTopWidth),
                        this.target === document.body && (e.height = Math.max(e.height, 24)),
                        e
                    }
                }
            }, {
                key: "clearCache",
                value: function() {
                    this._cache = {}
                }
            }, {
                key: "cache",
                value: function(t, e) {
                    return void 0 === this._cache && (this._cache = {}),
                    void 0 === this._cache[t] && (this._cache[t] = e.call(this)),
                    this._cache[t]
                }
            }, {
                key: "enable",
                value: function() {
                    var t = this
                      , e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    !1 !== this.options.addTargetClasses && f(this.target, this.getClass("enabled")),
                    f(this.element, this.getClass("enabled")),
                    this.enabled = !0,
                    this.scrollParents.forEach(function(e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }),
                    e && this.position()
                }
            }, {
                key: "disable",
                value: function() {
                    var t = this;
                    d(this.target, this.getClass("enabled")),
                    d(this.element, this.getClass("enabled")),
                    this.enabled = !1,
                    void 0 !== this.scrollParents && this.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.disable(),
                    H.forEach(function(e, i) {
                        e === t && H.splice(i, 1)
                    }),
                    0 === H.length && s()
                }
            }, {
                key: "updateAttachClasses",
                value: function(t, e) {
                    var i = this;
                    t = t || this.attachment,
                    e = e || this.targetAttachment;
                    var n = ["left", "top", "bottom", "right", "middle", "center"];
                    void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length),
                    void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                    var o = this._addAttachClasses;
                    t.top && o.push(this.getClass("element-attached") + "-" + t.top),
                    t.left && o.push(this.getClass("element-attached") + "-" + t.left),
                    e.top && o.push(this.getClass("target-attached") + "-" + e.top),
                    e.left && o.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    n.forEach(function(t) {
                        r.push(i.getClass("element-attached") + "-" + t),
                        r.push(i.getClass("target-attached") + "-" + t)
                    }),
                    D(function() {
                        void 0 !== i._addAttachClasses && (g(i.element, i._addAttachClasses, r),
                        !1 !== i.options.addTargetClasses && g(i.target, i._addAttachClasses, r),
                        delete i._addAttachClasses)
                    })
                }
            }, {
                key: "position",
                value: function() {
                    var t = this
                      , e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var i = V(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, i);
                        var n = this.cache("element-bounds", function() {
                            return a(t.element)
                        })
                          , o = n.width
                          , r = n.height;
                        if (0 === o && 0 === r && void 0 !== this.lastSize) {
                            var s = this.lastSize;
                            o = s.width,
                            r = s.height
                        } else
                            this.lastSize = {
                                width: o,
                                height: r
                            };
                        var u = this.cache("target-bounds", function() {
                            return t.getTargetBounds()
                        })
                          , d = u
                          , f = w(U(this.attachment), {
                            width: o,
                            height: r
                        })
                          , p = w(U(i), d)
                          , h = w(this.offset, {
                            width: o,
                            height: r
                        })
                          , m = w(this.targetOffset, d);
                        f = S(f, h),
                        p = S(p, m);
                        for (var g = u.left + p.left - f.left, v = u.top + p.top - f.top, y = 0; y < x.modules.length; ++y) {
                            var b = x.modules[y]
                              , T = b.position.call(this, {
                                left: g,
                                top: v,
                                targetAttachment: i,
                                targetPos: u,
                                elementPos: n,
                                offset: f,
                                targetOffset: p,
                                manualOffset: h,
                                manualTargetOffset: m,
                                scrollbarSize: E,
                                attachment: this.attachment
                            });
                            if (!1 === T)
                                return !1;
                            void 0 !== T && "object" == typeof T && (v = T.top,
                            g = T.left)
                        }
                        var _ = {
                            page: {
                                top: v,
                                left: g
                            },
                            viewport: {
                                top: v - pageYOffset,
                                bottom: pageYOffset - v - r + innerHeight,
                                left: g - pageXOffset,
                                right: pageXOffset - g - o + innerWidth
                            }
                        }
                          , O = this.target.ownerDocument
                          , C = O.defaultView
                          , E = void 0;
                        return C.innerHeight > O.documentElement.clientHeight && (E = this.cache("scrollbar-size", c),
                        _.viewport.bottom -= E.height),
                        C.innerWidth > O.documentElement.clientWidth && (E = this.cache("scrollbar-size", c),
                        _.viewport.right -= E.width),
                        -1 !== ["", "static"].indexOf(O.body.style.position) && -1 !== ["", "static"].indexOf(O.body.parentElement.style.position) || (_.page.bottom = O.body.scrollHeight - v - r,
                        _.page.right = O.body.scrollWidth - g - o),
                        void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() {
                            var e = t.cache("target-offsetparent", function() {
                                return l(t.target)
                            })
                              , i = t.cache("target-offsetparent-bounds", function() {
                                return a(e)
                            })
                              , n = getComputedStyle(e)
                              , o = i
                              , r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                            }),
                            i.right = O.body.scrollWidth - i.left - o.width + r.right,
                            i.bottom = O.body.scrollHeight - i.top - o.height + r.bottom,
                            _.page.top >= i.top + r.top && _.page.bottom >= i.bottom && _.page.left >= i.left + r.left && _.page.right >= i.right) {
                                var s = e.scrollTop
                                  , c = e.scrollLeft;
                                _.offset = {
                                    top: _.page.top - i.top + s - r.top,
                                    left: _.page.left - i.left + c - r.left
                                }
                            }
                        }(),
                        this.move(_),
                        this.history.unshift(_),
                        this.history.length > 3 && this.history.pop(),
                        e && P(),
                        !0
                    }
                }
            }, {
                key: "move",
                value: function(t) {
                    var e = this;
                    if (void 0 !== this.element.parentNode) {
                        var i = {};
                        for (var n in t) {
                            i[n] = {};
                            for (var o in t[n]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var a = this.history[s];
                                    if (void 0 !== a[n] && !y(a[n][o], t[n][o])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (i[n][o] = !0)
                            }
                        }
                        var c = {
                            top: "",
                            left: "",
                            right: "",
                            bottom: ""
                        }
                          , d = function(t, i) {
                            if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                var n = void 0
                                  , o = void 0;
                                t.top ? (c.top = 0,
                                n = i.top) : (c.bottom = 0,
                                n = -i.bottom),
                                t.left ? (c.left = 0,
                                o = i.left) : (c.right = 0,
                                o = -i.right),
                                window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (o = Math.round(o),
                                n = Math.round(n))),
                                c[R] = "translateX(" + o + "px) translateY(" + n + "px)",
                                "msTransform" !== R && (c[R] += " translateZ(0)")
                            } else
                                t.top ? c.top = i.top + "px" : c.bottom = i.bottom + "px",
                                t.left ? c.left = i.left + "px" : c.right = i.right + "px"
                        }
                          , f = !1;
                        if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (c.position = "absolute",
                        d(i.page, t.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (c.position = "fixed",
                        d(i.viewport, t.viewport)) : void 0 !== i.offset && i.offset.top && i.offset.left ? function() {
                            c.position = "absolute";
                            var n = e.cache("target-offsetparent", function() {
                                return l(e.target)
                            });
                            l(e.element) !== n && D(function() {
                                e.element.parentNode.removeChild(e.element),
                                n.appendChild(e.element)
                            }),
                            d(i.offset, t.offset),
                            f = !0
                        }() : (c.position = "absolute",
                        d({
                            top: !0,
                            left: !0
                        }, t.page)),
                        !f)
                            if (this.options.bodyElement)
                                this.element.parentNode !== this.options.bodyElement && this.options.bodyElement.appendChild(this.element);
                            else {
                                for (var p = !0, h = this.element.parentNode; h && 1 === h.nodeType && "BODY" !== h.tagName; ) {
                                    if ("static" !== getComputedStyle(h).position) {
                                        p = !1;
                                        break
                                    }
                                    h = h.parentNode
                                }
                                p || (this.element.parentNode.removeChild(this.element),
                                this.element.ownerDocument.body.appendChild(this.element))
                            }
                        var m = {}
                          , g = !1;
                        for (var o in c) {
                            var v = c[o];
                            this.element.style[o] !== v && (g = !0,
                            m[o] = v)
                        }
                        g && D(function() {
                            u(e.element.style, m),
                            e.trigger("repositioned")
                        })
                    }
                }
            }]),
            e
        }(M);
        Z.modules = [],
        x.position = j;
        var Q = u(Z, x)
          , N = function() {
            function t(t, e) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !e || i.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0,
                    r = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , L = x.Utils
          , a = L.getBounds
          , u = L.extend
          , g = L.updateClasses
          , D = L.defer
          , G = ["left", "top", "right", "bottom"];
        x.modules.push({
            position: function(t) {
                var e = this
                  , i = t.top
                  , n = t.left
                  , o = t.targetAttachment;
                if (!this.options.constraints)
                    return !0;
                var r = this.cache("element-bounds", function() {
                    return a(e.element)
                })
                  , s = r.height
                  , l = r.width;
                if (0 === l && 0 === s && void 0 !== this.lastSize) {
                    var c = this.lastSize;
                    l = c.width,
                    s = c.height
                }
                var d = this.cache("target-bounds", function() {
                    return e.getTargetBounds()
                })
                  , f = d.height
                  , p = d.width
                  , h = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(t) {
                    var e = t.outOfBoundsClass
                      , i = t.pinnedClass;
                    e && h.push(e),
                    i && h.push(i)
                }),
                h.forEach(function(t) {
                    ["left", "top", "right", "bottom"].forEach(function(e) {
                        h.push(t + "-" + e)
                    })
                });
                var m = []
                  , v = u({}, o)
                  , y = u({}, this.attachment);
                return this.options.constraints.forEach(function(t) {
                    var r = t.to
                      , a = t.attachment
                      , c = t.pin;
                    void 0 === a && (a = "");
                    var u = void 0
                      , d = void 0;
                    if (a.indexOf(" ") >= 0) {
                        var h = a.split(" ")
                          , g = N(h, 2);
                        d = g[0],
                        u = g[1]
                    } else
                        u = d = a;
                    var b = T(e, r);
                    "target" !== d && "both" !== d || (i < b[1] && "top" === v.top && (i += f,
                    v.top = "bottom"),
                    i + s > b[3] && "bottom" === v.top && (i -= f,
                    v.top = "top")),
                    "together" === d && ("top" === v.top && ("bottom" === y.top && i < b[1] ? (i += f,
                    v.top = "bottom",
                    i += s,
                    y.top = "top") : "top" === y.top && i + s > b[3] && i - (s - f) >= b[1] && (i -= s - f,
                    v.top = "bottom",
                    y.top = "bottom")),
                    "bottom" === v.top && ("top" === y.top && i + s > b[3] ? (i -= f,
                    v.top = "top",
                    i -= s,
                    y.top = "bottom") : "bottom" === y.top && i < b[1] && i + (2 * s - f) <= b[3] && (i += s - f,
                    v.top = "top",
                    y.top = "top")),
                    "middle" === v.top && (i + s > b[3] && "top" === y.top ? (i -= s,
                    y.top = "bottom") : i < b[1] && "bottom" === y.top && (i += s,
                    y.top = "top"))),
                    "target" !== u && "both" !== u || (n < b[0] && "left" === v.left && (n += p,
                    v.left = "right"),
                    n + l > b[2] && "right" === v.left && (n -= p,
                    v.left = "left")),
                    "together" === u && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p,
                    v.left = "right",
                    n += l,
                    y.left = "left") : "left" === y.left && (n += p,
                    v.left = "right",
                    n -= l,
                    y.left = "right") : n + l > b[2] && "right" === v.left ? "left" === y.left ? (n -= p,
                    v.left = "left",
                    n -= l,
                    y.left = "right") : "right" === y.left && (n -= p,
                    v.left = "left",
                    n += l,
                    y.left = "left") : "center" === v.left && (n + l > b[2] && "left" === y.left ? (n -= l,
                    y.left = "right") : n < b[0] && "right" === y.left && (n += l,
                    y.left = "left"))),
                    "element" !== d && "both" !== d || (i < b[1] && "bottom" === y.top && (i += s,
                    y.top = "top"),
                    i + s > b[3] && "top" === y.top && (i -= s,
                    y.top = "bottom")),
                    "element" !== u && "both" !== u || (n < b[0] && ("right" === y.left ? (n += l,
                    y.left = "left") : "center" === y.left && (n += l / 2,
                    y.left = "left")),
                    n + l > b[2] && ("left" === y.left ? (n -= l,
                    y.left = "right") : "center" === y.left && (n -= l / 2,
                    y.left = "right"))),
                    "string" == typeof c ? c = c.split(",").map(function(t) {
                        return t.trim()
                    }) : !0 === c && (c = ["top", "left", "right", "bottom"]),
                    c = c || [];
                    var S = []
                      , w = [];
                    i < b[1] && (c.indexOf("top") >= 0 ? (i = b[1],
                    S.push("top")) : w.push("top")),
                    i + s > b[3] && (c.indexOf("bottom") >= 0 ? (i = b[3] - s,
                    S.push("bottom")) : w.push("bottom")),
                    n < b[0] && (c.indexOf("left") >= 0 ? (n = b[0],
                    S.push("left")) : w.push("left")),
                    n + l > b[2] && (c.indexOf("right") >= 0 ? (n = b[2] - l,
                    S.push("right")) : w.push("right")),
                    S.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"),
                        m.push(t),
                        S.forEach(function(e) {
                            m.push(t + "-" + e)
                        })
                    }(),
                    w.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"),
                        m.push(t),
                        w.forEach(function(e) {
                            m.push(t + "-" + e)
                        })
                    }(),
                    (S.indexOf("left") >= 0 || S.indexOf("right") >= 0) && (y.left = v.left = !1),
                    (S.indexOf("top") >= 0 || S.indexOf("bottom") >= 0) && (y.top = v.top = !1),
                    v.top === o.top && v.left === o.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v),
                    e.trigger("update", {
                        attachment: y,
                        targetAttachment: v
                    }))
                }),
                D(function() {
                    !1 !== e.options.addTargetClasses && g(e.target, m, h),
                    g(e.element, m, h)
                }),
                {
                    top: i,
                    left: n
                }
            }
        });
        var L = x.Utils
          , a = L.getBounds
          , g = L.updateClasses
          , D = L.defer;
        x.modules.push({
            position: function(t) {
                var e = this
                  , i = t.top
                  , n = t.left
                  , o = this.cache("element-bounds", function() {
                    return a(e.element)
                })
                  , r = o.height
                  , s = o.width
                  , l = this.getTargetBounds()
                  , c = i + r
                  , u = n + s
                  , d = [];
                i <= l.bottom && c >= l.top && ["left", "right"].forEach(function(t) {
                    var e = l[t];
                    e !== n && e !== u || d.push(t)
                }),
                n <= l.right && u >= l.left && ["top", "bottom"].forEach(function(t) {
                    var e = l[t];
                    e !== i && e !== c || d.push(t)
                });
                var f = []
                  , p = []
                  , h = ["left", "top", "right", "bottom"];
                return f.push(this.getClass("abutted")),
                h.forEach(function(t) {
                    f.push(e.getClass("abutted") + "-" + t)
                }),
                d.length && p.push(this.getClass("abutted")),
                d.forEach(function(t) {
                    p.push(e.getClass("abutted") + "-" + t)
                }),
                D(function() {
                    !1 !== e.options.addTargetClasses && g(e.target, p, f),
                    g(e.element, p, f)
                }),
                !0
            }
        });
        var N = function() {
            function t(t, e) {
                var i = []
                  , n = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                    !e || i.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0,
                    r = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return x.modules.push({
            position: function(t) {
                var e = t.top
                  , i = t.left;
                if (this.options.shift) {
                    var n = this.options.shift;
                    "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                        top: e,
                        left: i
                    }));
                    var o = void 0
                      , r = void 0;
                    if ("string" == typeof n) {
                        n = n.split(" "),
                        n[1] = n[1] || n[0];
                        var s = n
                          , a = N(s, 2);
                        o = a[0],
                        r = a[1],
                        o = parseFloat(o, 10),
                        r = parseFloat(r, 10)
                    } else
                        o = n.top,
                        r = n.left;
                    return e += o,
                    i += r,
                    {
                        top: e,
                        left: i
                    }
                }
            }
        }),
        Q
    })
}
, function(t, e, i) {
    "use strict";
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, i) {
    (function(e) {
        t.exports = e.Tether = i(28)
    }
    ).call(e, i(29))
}
, function(t, e, i) {
    i(4),
    t.exports = i(5)
}
]);
