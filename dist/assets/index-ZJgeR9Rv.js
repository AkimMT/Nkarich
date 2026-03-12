function Kp(r, i) {
  for (var o = 0; o < i.length; o++) {
    const u = i[o];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const s in u)
        if (s !== "default" && !(s in r)) {
          const c = Object.getOwnPropertyDescriptor(u, s);
          c &&
            Object.defineProperty(
              r,
              s,
              c.get ? c : { enumerable: !0, get: () => u[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) u(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function u(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = o(s);
    fetch(s.href, c);
  }
})();
function Yp(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var vs = { exports: {} },
  Qi = {},
  xs = { exports: {} },
  Oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rf;
function Qp() {
  if (Rf) return Oe;
  Rf = 1;
  var r = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function w(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (y && C[y]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    D = {};
  function F(C, b, me) {
    ((this.props = C),
      (this.context = b),
      (this.refs = D),
      (this.updater = me || k));
  }
  ((F.prototype.isReactComponent = {}),
    (F.prototype.setState = function (C, b) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, C, b, "setState");
    }),
    (F.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    }));
  function Y() {}
  Y.prototype = F.prototype;
  function $(C, b, me) {
    ((this.props = C),
      (this.context = b),
      (this.refs = D),
      (this.updater = me || k));
  }
  var Q = ($.prototype = new Y());
  ((Q.constructor = $), L(Q, F.prototype), (Q.isPureReactComponent = !0));
  var re = Array.isArray,
    ue = Object.prototype.hasOwnProperty,
    ke = { current: null },
    O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(C, b, me) {
    var xe,
      ve = {},
      Le = null,
      Fe = null;
    if (b != null)
      for (xe in (b.ref !== void 0 && (Fe = b.ref),
      b.key !== void 0 && (Le = "" + b.key),
      b))
        ue.call(b, xe) && !O.hasOwnProperty(xe) && (ve[xe] = b[xe]);
    var _e = arguments.length - 2;
    if (_e === 1) ve.children = me;
    else if (1 < _e) {
      for (var He = Array(_e), gt = 0; gt < _e; gt++)
        He[gt] = arguments[gt + 2];
      ve.children = He;
    }
    if (C && C.defaultProps)
      for (xe in ((_e = C.defaultProps), _e))
        ve[xe] === void 0 && (ve[xe] = _e[xe]);
    return {
      $$typeof: r,
      type: C,
      key: Le,
      ref: Fe,
      props: ve,
      _owner: ke.current,
    };
  }
  function ee(C, b) {
    return {
      $$typeof: r,
      type: C.type,
      key: b,
      ref: C.ref,
      props: C.props,
      _owner: C._owner,
    };
  }
  function ce(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function je(C) {
    var b = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (me) {
        return b[me];
      })
    );
  }
  var pe = /\/+/g;
  function de(C, b) {
    return typeof C == "object" && C !== null && C.key != null
      ? je("" + C.key)
      : b.toString(36);
  }
  function ie(C, b, me, xe, ve) {
    var Le = typeof C;
    (Le === "undefined" || Le === "boolean") && (C = null);
    var Fe = !1;
    if (C === null) Fe = !0;
    else
      switch (Le) {
        case "string":
        case "number":
          Fe = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case r:
            case i:
              Fe = !0;
          }
      }
    if (Fe)
      return (
        (Fe = C),
        (ve = ve(Fe)),
        (C = xe === "" ? "." + de(Fe, 0) : xe),
        re(ve)
          ? ((me = ""),
            C != null && (me = C.replace(pe, "$&/") + "/"),
            ie(ve, b, me, "", function (gt) {
              return gt;
            }))
          : ve != null &&
            (ce(ve) &&
              (ve = ee(
                ve,
                me +
                  (!ve.key || (Fe && Fe.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(pe, "$&/") + "/") +
                  C,
              )),
            b.push(ve)),
        1
      );
    if (((Fe = 0), (xe = xe === "" ? "." : xe + ":"), re(C)))
      for (var _e = 0; _e < C.length; _e++) {
        Le = C[_e];
        var He = xe + de(Le, _e);
        Fe += ie(Le, b, me, He, ve);
      }
    else if (((He = w(C)), typeof He == "function"))
      for (C = He.call(C), _e = 0; !(Le = C.next()).done; )
        ((Le = Le.value),
          (He = xe + de(Le, _e++)),
          (Fe += ie(Le, b, me, He, ve)));
    else if (Le === "object")
      throw (
        (b = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (b === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : b) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Fe;
  }
  function Re(C, b, me) {
    if (C == null) return C;
    var xe = [],
      ve = 0;
    return (
      ie(C, xe, "", "", function (Le) {
        return b.call(me, Le, ve++);
      }),
      xe
    );
  }
  function he(C) {
    if (C._status === -1) {
      var b = C._result;
      ((b = b()),
        b.then(
          function (me) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = me));
          },
          function (me) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = me));
          },
        ),
        C._status === -1 && ((C._status = 0), (C._result = b)));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var ge = { current: null },
    I = { transition: null },
    J = {
      ReactCurrentDispatcher: ge,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: ke,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Oe.Children = {
      map: Re,
      forEach: function (C, b, me) {
        Re(
          C,
          function () {
            b.apply(this, arguments);
          },
          me,
        );
      },
      count: function (C) {
        var b = 0;
        return (
          Re(C, function () {
            b++;
          }),
          b
        );
      },
      toArray: function (C) {
        return (
          Re(C, function (b) {
            return b;
          }) || []
        );
      },
      only: function (C) {
        if (!ce(C))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return C;
      },
    }),
    (Oe.Component = F),
    (Oe.Fragment = o),
    (Oe.Profiler = s),
    (Oe.PureComponent = $),
    (Oe.StrictMode = u),
    (Oe.Suspense = m),
    (Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (Oe.act = W),
    (Oe.cloneElement = function (C, b, me) {
      if (C == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            C +
            ".",
        );
      var xe = L({}, C.props),
        ve = C.key,
        Le = C.ref,
        Fe = C._owner;
      if (b != null) {
        if (
          (b.ref !== void 0 && ((Le = b.ref), (Fe = ke.current)),
          b.key !== void 0 && (ve = "" + b.key),
          C.type && C.type.defaultProps)
        )
          var _e = C.type.defaultProps;
        for (He in b)
          ue.call(b, He) &&
            !O.hasOwnProperty(He) &&
            (xe[He] = b[He] === void 0 && _e !== void 0 ? _e[He] : b[He]);
      }
      var He = arguments.length - 2;
      if (He === 1) xe.children = me;
      else if (1 < He) {
        _e = Array(He);
        for (var gt = 0; gt < He; gt++) _e[gt] = arguments[gt + 2];
        xe.children = _e;
      }
      return {
        $$typeof: r,
        type: C.type,
        key: ve,
        ref: Le,
        props: xe,
        _owner: Fe,
      };
    }),
    (Oe.createContext = function (C) {
      return (
        (C = {
          $$typeof: d,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: c, _context: C }),
        (C.Consumer = C)
      );
    }),
    (Oe.createElement = q),
    (Oe.createFactory = function (C) {
      var b = q.bind(null, C);
      return ((b.type = C), b);
    }),
    (Oe.createRef = function () {
      return { current: null };
    }),
    (Oe.forwardRef = function (C) {
      return { $$typeof: h, render: C };
    }),
    (Oe.isValidElement = ce),
    (Oe.lazy = function (C) {
      return { $$typeof: v, _payload: { _status: -1, _result: C }, _init: he };
    }),
    (Oe.memo = function (C, b) {
      return { $$typeof: g, type: C, compare: b === void 0 ? null : b };
    }),
    (Oe.startTransition = function (C) {
      var b = I.transition;
      I.transition = {};
      try {
        C();
      } finally {
        I.transition = b;
      }
    }),
    (Oe.unstable_act = W),
    (Oe.useCallback = function (C, b) {
      return ge.current.useCallback(C, b);
    }),
    (Oe.useContext = function (C) {
      return ge.current.useContext(C);
    }),
    (Oe.useDebugValue = function () {}),
    (Oe.useDeferredValue = function (C) {
      return ge.current.useDeferredValue(C);
    }),
    (Oe.useEffect = function (C, b) {
      return ge.current.useEffect(C, b);
    }),
    (Oe.useId = function () {
      return ge.current.useId();
    }),
    (Oe.useImperativeHandle = function (C, b, me) {
      return ge.current.useImperativeHandle(C, b, me);
    }),
    (Oe.useInsertionEffect = function (C, b) {
      return ge.current.useInsertionEffect(C, b);
    }),
    (Oe.useLayoutEffect = function (C, b) {
      return ge.current.useLayoutEffect(C, b);
    }),
    (Oe.useMemo = function (C, b) {
      return ge.current.useMemo(C, b);
    }),
    (Oe.useReducer = function (C, b, me) {
      return ge.current.useReducer(C, b, me);
    }),
    (Oe.useRef = function (C) {
      return ge.current.useRef(C);
    }),
    (Oe.useState = function (C) {
      return ge.current.useState(C);
    }),
    (Oe.useSyncExternalStore = function (C, b, me) {
      return ge.current.useSyncExternalStore(C, b, me);
    }),
    (Oe.useTransition = function () {
      return ge.current.useTransition();
    }),
    (Oe.version = "18.3.1"),
    Oe
  );
}
var Nf;
function Do() {
  return (Nf || ((Nf = 1), (xs.exports = Qp())), xs.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf;
function Jp() {
  if (Lf) return Qi;
  Lf = 1;
  var r = Do(),
    i = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, m, g) {
    var v,
      y = {},
      w = null,
      k = null;
    (g !== void 0 && (w = "" + g),
      m.key !== void 0 && (w = "" + m.key),
      m.ref !== void 0 && (k = m.ref));
    for (v in m) u.call(m, v) && !c.hasOwnProperty(v) && (y[v] = m[v]);
    if (h && h.defaultProps)
      for (v in ((m = h.defaultProps), m)) y[v] === void 0 && (y[v] = m[v]);
    return {
      $$typeof: i,
      type: h,
      key: w,
      ref: k,
      props: y,
      _owner: s.current,
    };
  }
  return ((Qi.Fragment = o), (Qi.jsx = d), (Qi.jsxs = d), Qi);
}
var Pf;
function Gp() {
  return (Pf || ((Pf = 1), (vs.exports = Jp())), vs.exports);
}
var z = Gp(),
  ko = {},
  ws = { exports: {} },
  Pt = {},
  Ss = { exports: {} },
  ks = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jf;
function Xp() {
  return (
    jf ||
      ((jf = 1),
      (function (r) {
        function i(I, J) {
          var W = I.length;
          I.push(J);
          e: for (; 0 < W; ) {
            var C = (W - 1) >>> 1,
              b = I[C];
            if (0 < s(b, J)) ((I[C] = J), (I[W] = b), (W = C));
            else break e;
          }
        }
        function o(I) {
          return I.length === 0 ? null : I[0];
        }
        function u(I) {
          if (I.length === 0) return null;
          var J = I[0],
            W = I.pop();
          if (W !== J) {
            I[0] = W;
            e: for (var C = 0, b = I.length, me = b >>> 1; C < me; ) {
              var xe = 2 * (C + 1) - 1,
                ve = I[xe],
                Le = xe + 1,
                Fe = I[Le];
              if (0 > s(ve, W))
                Le < b && 0 > s(Fe, ve)
                  ? ((I[C] = Fe), (I[Le] = W), (C = Le))
                  : ((I[C] = ve), (I[xe] = W), (C = xe));
              else if (Le < b && 0 > s(Fe, W))
                ((I[C] = Fe), (I[Le] = W), (C = Le));
              else break e;
            }
          }
          return J;
        }
        function s(I, J) {
          var W = I.sortIndex - J.sortIndex;
          return W !== 0 ? W : I.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          r.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          r.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          g = [],
          v = 1,
          y = null,
          w = 3,
          k = !1,
          L = !1,
          D = !1,
          F = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Q(I) {
          for (var J = o(g); J !== null; ) {
            if (J.callback === null) u(g);
            else if (J.startTime <= I)
              (u(g), (J.sortIndex = J.expirationTime), i(m, J));
            else break;
            J = o(g);
          }
        }
        function re(I) {
          if (((D = !1), Q(I), !L))
            if (o(m) !== null) ((L = !0), he(ue));
            else {
              var J = o(g);
              J !== null && ge(re, J.startTime - I);
            }
        }
        function ue(I, J) {
          ((L = !1), D && ((D = !1), Y(q), (q = -1)), (k = !0));
          var W = w;
          try {
            for (
              Q(J), y = o(m);
              y !== null && (!(y.expirationTime > J) || (I && !je()));
            ) {
              var C = y.callback;
              if (typeof C == "function") {
                ((y.callback = null), (w = y.priorityLevel));
                var b = C(y.expirationTime <= J);
                ((J = r.unstable_now()),
                  typeof b == "function"
                    ? (y.callback = b)
                    : y === o(m) && u(m),
                  Q(J));
              } else u(m);
              y = o(m);
            }
            if (y !== null) var me = !0;
            else {
              var xe = o(g);
              (xe !== null && ge(re, xe.startTime - J), (me = !1));
            }
            return me;
          } finally {
            ((y = null), (w = W), (k = !1));
          }
        }
        var ke = !1,
          O = null,
          q = -1,
          ee = 5,
          ce = -1;
        function je() {
          return !(r.unstable_now() - ce < ee);
        }
        function pe() {
          if (O !== null) {
            var I = r.unstable_now();
            ce = I;
            var J = !0;
            try {
              J = O(!0, I);
            } finally {
              J ? de() : ((ke = !1), (O = null));
            }
          } else ke = !1;
        }
        var de;
        if (typeof $ == "function")
          de = function () {
            $(pe);
          };
        else if (typeof MessageChannel < "u") {
          var ie = new MessageChannel(),
            Re = ie.port2;
          ((ie.port1.onmessage = pe),
            (de = function () {
              Re.postMessage(null);
            }));
        } else
          de = function () {
            F(pe, 0);
          };
        function he(I) {
          ((O = I), ke || ((ke = !0), de()));
        }
        function ge(I, J) {
          q = F(function () {
            I(r.unstable_now());
          }, J);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            L || k || ((L = !0), he(ue));
          }),
          (r.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ee = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (r.unstable_next = function (I) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = w;
            }
            var W = w;
            w = J;
            try {
              return I();
            } finally {
              w = W;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (I, J) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var W = w;
            w = I;
            try {
              return J();
            } finally {
              w = W;
            }
          }),
          (r.unstable_scheduleCallback = function (I, J, W) {
            var C = r.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? C + W : C))
                : (W = C),
              I)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = W + b),
              (I = {
                id: v++,
                callback: J,
                priorityLevel: I,
                startTime: W,
                expirationTime: b,
                sortIndex: -1,
              }),
              W > C
                ? ((I.sortIndex = W),
                  i(g, I),
                  o(m) === null &&
                    I === o(g) &&
                    (D ? (Y(q), (q = -1)) : (D = !0), ge(re, W - C)))
                : ((I.sortIndex = b), i(m, I), L || k || ((L = !0), he(ue))),
              I
            );
          }),
          (r.unstable_shouldYield = je),
          (r.unstable_wrapCallback = function (I) {
            var J = w;
            return function () {
              var W = w;
              w = J;
              try {
                return I.apply(this, arguments);
              } finally {
                w = W;
              }
            };
          }));
      })(ks)),
    ks
  );
}
var Of;
function Zp() {
  return (Of || ((Of = 1), (Ss.exports = Xp())), Ss.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf;
function qp() {
  if (Mf) return Pt;
  Mf = 1;
  var r = Do(),
    i = Zp();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var u = new Set(),
    s = {};
  function c(e, t) {
    (d(e, t), d(e + "Capture", t));
  }
  function d(e, t) {
    for (s[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    y = {};
  function w(e) {
    return m.call(y, e)
      ? !0
      : m.call(v, e)
        ? !1
        : g.test(e)
          ? (y[e] = !0)
          : ((v[e] = !0), !1);
  }
  function k(e, t, n, l) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function L(e, t, n, l) {
    if (t === null || typeof t > "u" || k(e, t, n, l)) return !0;
    if (l) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function D(e, t, n, l, a, f, p) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = p));
  }
  var F = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      F[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      F[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        F[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      F[e] = new D(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        F[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      F[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      F[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      F[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      F[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Y = /[\-:]([a-z])/g;
  function $(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Y, $);
      F[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Y, $);
        F[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Y, $);
      F[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      F[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (F.xlinkHref = new D(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      F[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function Q(e, t, n, l) {
    var a = F.hasOwnProperty(t) ? F[t] : null;
    (a !== null
      ? a.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (L(t, n, a, l) && (n = null),
      l || a === null
        ? w(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : a.mustUseProperty
          ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
          : ((t = a.attributeName),
            (l = a.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
                l ? e.setAttributeNS(l, t, n) : e.setAttribute(t, n))));
  }
  var re = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ue = Symbol.for("react.element"),
    ke = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    ee = Symbol.for("react.profiler"),
    ce = Symbol.for("react.provider"),
    je = Symbol.for("react.context"),
    pe = Symbol.for("react.forward_ref"),
    de = Symbol.for("react.suspense"),
    ie = Symbol.for("react.suspense_list"),
    Re = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    ge = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    C;
  function b(e) {
    if (C === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        C = (t && t[1]) || "";
      }
    return (
      `
` +
      C +
      e
    );
  }
  var me = !1;
  function xe(e, t) {
    if (!e || me) return "";
    me = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (T) {
            var l = T;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (T) {
            l = T;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (T) {
          l = T;
        }
        e();
      }
    } catch (T) {
      if (T && l && typeof T.stack == "string") {
        for (
          var a = T.stack.split(`
`),
            f = l.stack.split(`
`),
            p = a.length - 1,
            x = f.length - 1;
          1 <= p && 0 <= x && a[p] !== f[x];
        )
          x--;
        for (; 1 <= p && 0 <= x; p--, x--)
          if (a[p] !== f[x]) {
            if (p !== 1 || x !== 1)
              do
                if ((p--, x--, 0 > x || a[p] !== f[x])) {
                  var E =
                    `
` + a[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      E.includes("<anonymous>") &&
                      (E = E.replace("<anonymous>", e.displayName)),
                    E
                  );
                }
              while (1 <= p && 0 <= x);
            break;
          }
      }
    } finally {
      ((me = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? b(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return b(e.type);
      case 16:
        return b("Lazy");
      case 13:
        return b("Suspense");
      case 19:
        return b("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = xe(e.type, !1)), e);
      case 11:
        return ((e = xe(e.type.render, !1)), e);
      case 1:
        return ((e = xe(e.type, !0)), e);
      default:
        return "";
    }
  }
  function Le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case ke:
        return "Portal";
      case ee:
        return "Profiler";
      case q:
        return "StrictMode";
      case de:
        return "Suspense";
      case ie:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case je:
          return (e.displayName || "Context") + ".Consumer";
        case ce:
          return (e._context.displayName || "Context") + ".Provider";
        case pe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Re:
          return (
            (t = e.displayName || null),
            t !== null ? t : Le(e.type) || "Memo"
          );
        case he:
          ((t = e._payload), (e = e._init));
          try {
            return Le(e(t));
          } catch {}
      }
    return null;
  }
  function Fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Le(t);
      case 8:
        return t === q ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function _e(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function He(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function gt(e) {
    var t = He(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var a = n.get,
        f = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (p) {
            ((l = "" + p), f.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (p) {
            l = "" + p;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Pr(e) {
    e._valueTracker || (e._valueTracker = gt(e));
  }
  function nt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = He(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Yt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function jr(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function hl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    ((n = _e(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function en(e, t) {
    ((t = t.checked), t != null && Q(e, "checked", t, !1));
  }
  function ai(e, t) {
    en(e, t);
    var n = _e(t.value),
      l = t.type;
    if (n != null)
      l === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Or(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Or(e, t.type, _e(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function pl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Or(e, t, n) {
    (t !== "number" || Yt(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var rr = Array.isArray;
  function Nn(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + _e(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          ((e[a].selected = !0), l && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function si(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ml(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (rr(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: _e(n) };
  }
  function tn(e, t) {
    var n = _e(t.value),
      l = _e(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      l != null && (e.defaultValue = "" + l));
  }
  function Ln(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ui(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ir(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ui(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var St,
    Dt = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, l, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, l, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          St = St || document.createElement("div"),
            St.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = St.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Pn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var lr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ci = ["Webkit", "ms", "Moz", "O"];
  Object.keys(lr).forEach(function (e) {
    ci.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lr[t] = lr[e]));
    });
  });
  function gl(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (lr.hasOwnProperty(e) && lr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function bt(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var l = n.indexOf("--") === 0,
          a = gl(n, t[n], l);
        (n === "float" && (n = "cssFloat"),
          l ? e.setProperty(n, a) : (e[n] = a));
      }
  }
  var yl = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Mr(e, t) {
    if (t) {
      if (yl[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function _r(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var fi = null;
  function Tr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var jn = null,
    hn = null,
    nn = null;
  function vl(e) {
    if ((e = Ti(e))) {
      if (typeof jn != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = bl(t)), jn(e.stateNode, e.type, t));
    }
  }
  function di(e) {
    hn ? (nn ? nn.push(e) : (nn = [e])) : (hn = e);
  }
  function xl() {
    if (hn) {
      var e = hn,
        t = nn;
      if (((nn = hn = null), vl(e), t)) for (e = 0; e < t.length; e++) vl(t[e]);
    }
  }
  function hi(e, t) {
    return e(t);
  }
  function or() {}
  var On = !1;
  function pi(e, t, n) {
    if (On) return e(t, n);
    On = !0;
    try {
      return hi(e, t, n);
    } finally {
      ((On = !1), (hn !== null || nn !== null) && (or(), xl()));
    }
  }
  function ar(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = bl(n);
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var mi = !1;
  if (h)
    try {
      var S = {};
      (Object.defineProperty(S, "passive", {
        get: function () {
          mi = !0;
        },
      }),
        window.addEventListener("test", S, S),
        window.removeEventListener("test", S, S));
    } catch {
      mi = !1;
    }
  function N(e, t, n, l, a, f, p, x, E) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (H) {
      this.onError(H);
    }
  }
  var _ = !1,
    A = null,
    K = !1,
    ae = null,
    ye = {
      onError: function (e) {
        ((_ = !0), (A = e));
      },
    };
  function X(e, t, n, l, a, f, p, x, E) {
    ((_ = !1), (A = null), N.apply(ye, arguments));
  }
  function te(e, t, n, l, a, f, p, x, E) {
    if ((X.apply(this, arguments), _)) {
      if (_) {
        var T = A;
        ((_ = !1), (A = null));
      } else throw Error(o(198));
      K || ((K = !0), (ae = T));
    }
  }
  function le(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ne(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function fe(e) {
    if (le(e) !== e) throw Error(o(188));
  }
  function Pe(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = le(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var f = a.alternate;
      if (f === null) {
        if (((l = a.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === f.child) {
        for (f = a.child; f; ) {
          if (f === n) return (fe(a), e);
          if (f === l) return (fe(a), t);
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) ((n = a), (l = f));
      else {
        for (var p = !1, x = a.child; x; ) {
          if (x === n) {
            ((p = !0), (n = a), (l = f));
            break;
          }
          if (x === l) {
            ((p = !0), (l = a), (n = f));
            break;
          }
          x = x.sibling;
        }
        if (!p) {
          for (x = f.child; x; ) {
            if (x === n) {
              ((p = !0), (n = f), (l = a));
              break;
            }
            if (x === l) {
              ((p = !0), (l = f), (n = a));
              break;
            }
            x = x.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function Te(e) {
    return ((e = Pe(e)), e !== null ? qe(e) : null);
  }
  function qe(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = qe(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Xe = i.unstable_scheduleCallback,
    lt = i.unstable_cancelCallback,
    Ie = i.unstable_shouldYield,
    kt = i.unstable_requestPaint,
    $e = i.unstable_now,
    sr = i.unstable_getCurrentPriorityLevel,
    Ft = i.unstable_ImmediatePriority,
    jt = i.unstable_UserBlockingPriority,
    Mn = i.unstable_NormalPriority,
    ur = i.unstable_LowPriority,
    rn = i.unstable_IdlePriority,
    pn = null,
    yt = null;
  function ze(e) {
    if (yt && typeof yt.onCommitFiberRoot == "function")
      try {
        yt.onCommitFiberRoot(pn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ae = Math.clz32 ? Math.clz32 : Ke,
    _n = Math.log,
    mn = Math.LN2;
  function Ke(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((_n(e) / mn) | 0)) | 0);
  }
  var gn = 64,
    cr = 4194304;
  function fr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function wl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      a = e.suspendedLanes,
      f = e.pingedLanes,
      p = n & 268435455;
    if (p !== 0) {
      var x = p & ~a;
      x !== 0 ? (l = fr(x)) : ((f &= p), f !== 0 && (l = fr(f)));
    } else ((p = n & ~a), p !== 0 ? (l = fr(p)) : f !== 0 && (l = fr(f)));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & a) === 0 &&
      ((a = l & -l), (f = t & -t), a >= f || (a === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        ((n = 31 - Ae(t)), (a = 1 << n), (l |= e[n]), (t &= ~a));
    return l;
  }
  function fh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dh(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        a = e.expirationTimes,
        f = e.pendingLanes;
      0 < f;
    ) {
      var p = 31 - Ae(f),
        x = 1 << p,
        E = a[p];
      (E === -1
        ? ((x & n) === 0 || (x & l) !== 0) && (a[p] = fh(x, t))
        : E <= t && (e.expiredLanes |= x),
        (f &= ~x));
    }
  }
  function $o(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function tu() {
    var e = gn;
    return ((gn <<= 1), (gn & 4194240) === 0 && (gn = 64), e);
  }
  function Uo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function gi(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ae(t)),
      (e[t] = n));
  }
  function hh(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - Ae(n),
        f = 1 << a;
      ((t[a] = 0), (l[a] = -1), (e[a] = -1), (n &= ~f));
    }
  }
  function Ao(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Ae(n),
        a = 1 << l;
      ((a & t) | (e[l] & t) && (e[l] |= t), (n &= ~a));
    }
  }
  var Ue = 0;
  function nu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ru,
    Ho,
    iu,
    lu,
    ou,
    Bo = !1,
    Sl = [],
    Tn = null,
    zn = null,
    Dn = null,
    yi = new Map(),
    vi = new Map(),
    bn = [],
    ph =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function au(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        zn = null;
        break;
      case "mouseover":
      case "mouseout":
        Dn = null;
        break;
      case "pointerover":
      case "pointerout":
        yi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vi.delete(t.pointerId);
    }
  }
  function xi(e, t, n, l, a, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [a],
        }),
        t !== null && ((t = Ti(t)), t !== null && Ho(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function mh(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return ((Tn = xi(Tn, e, t, n, l, a)), !0);
      case "dragenter":
        return ((zn = xi(zn, e, t, n, l, a)), !0);
      case "mouseover":
        return ((Dn = xi(Dn, e, t, n, l, a)), !0);
      case "pointerover":
        var f = a.pointerId;
        return (yi.set(f, xi(yi.get(f) || null, e, t, n, l, a)), !0);
      case "gotpointercapture":
        return (
          (f = a.pointerId),
          vi.set(f, xi(vi.get(f) || null, e, t, n, l, a)),
          !0
        );
    }
    return !1;
  }
  function su(e) {
    var t = dr(e.target);
    if (t !== null) {
      var n = le(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ne(n)), t !== null)) {
            ((e.blockedOn = t),
              ou(e.priority, function () {
                iu(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function kl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((fi = l), n.target.dispatchEvent(l), (fi = null));
      } else return ((t = Ti(n)), t !== null && Ho(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function uu(e, t, n) {
    kl(e) && n.delete(t);
  }
  function gh() {
    ((Bo = !1),
      Tn !== null && kl(Tn) && (Tn = null),
      zn !== null && kl(zn) && (zn = null),
      Dn !== null && kl(Dn) && (Dn = null),
      yi.forEach(uu),
      vi.forEach(uu));
  }
  function wi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Bo ||
        ((Bo = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, gh)));
  }
  function Si(e) {
    function t(a) {
      return wi(a, e);
    }
    if (0 < Sl.length) {
      wi(Sl[0], e);
      for (var n = 1; n < Sl.length; n++) {
        var l = Sl[n];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      Tn !== null && wi(Tn, e),
        zn !== null && wi(zn, e),
        Dn !== null && wi(Dn, e),
        yi.forEach(t),
        vi.forEach(t),
        n = 0;
      n < bn.length;
      n++
    )
      ((l = bn[n]), l.blockedOn === e && (l.blockedOn = null));
    for (; 0 < bn.length && ((n = bn[0]), n.blockedOn === null); )
      (su(n), n.blockedOn === null && bn.shift());
  }
  var zr = re.ReactCurrentBatchConfig,
    El = !0;
  function yh(e, t, n, l) {
    var a = Ue,
      f = zr.transition;
    zr.transition = null;
    try {
      ((Ue = 1), Vo(e, t, n, l));
    } finally {
      ((Ue = a), (zr.transition = f));
    }
  }
  function vh(e, t, n, l) {
    var a = Ue,
      f = zr.transition;
    zr.transition = null;
    try {
      ((Ue = 4), Vo(e, t, n, l));
    } finally {
      ((Ue = a), (zr.transition = f));
    }
  }
  function Vo(e, t, n, l) {
    if (El) {
      var a = Wo(e, t, n, l);
      if (a === null) (sa(e, t, l, Cl, n), au(e, l));
      else if (mh(a, e, t, n, l)) l.stopPropagation();
      else if ((au(e, l), t & 4 && -1 < ph.indexOf(e))) {
        for (; a !== null; ) {
          var f = Ti(a);
          if (
            (f !== null && ru(f),
            (f = Wo(e, t, n, l)),
            f === null && sa(e, t, l, Cl, n),
            f === a)
          )
            break;
          a = f;
        }
        a !== null && l.stopPropagation();
      } else sa(e, t, l, null, n);
    }
  }
  var Cl = null;
  function Wo(e, t, n, l) {
    if (((Cl = null), (e = Tr(l)), (e = dr(e)), e !== null))
      if (((t = le(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ne(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Cl = e), null);
  }
  function cu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (sr()) {
          case Ft:
            return 1;
          case jt:
            return 4;
          case Mn:
          case ur:
            return 16;
          case rn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Fn = null,
    Ko = null,
    Rl = null;
  function fu() {
    if (Rl) return Rl;
    var e,
      t = Ko,
      n = t.length,
      l,
      a = "value" in Fn ? Fn.value : Fn.textContent,
      f = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++);
    var p = n - e;
    for (l = 1; l <= p && t[n - l] === a[f - l]; l++);
    return (Rl = a.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Nl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ll() {
    return !0;
  }
  function du() {
    return !1;
  }
  function Ot(e) {
    function t(n, l, a, f, p) {
      ((this._reactName = n),
        (this._targetInst = a),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = p),
        (this.currentTarget = null));
      for (var x in e)
        e.hasOwnProperty(x) && ((n = e[x]), (this[x] = n ? n(f) : f[x]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Ll
          : du),
        (this.isPropagationStopped = du),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ll));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ll));
        },
        persist: function () {},
        isPersistent: Ll,
      }),
      t
    );
  }
  var Dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yo = Ot(Dr),
    ki = W({}, Dr, { view: 0, detail: 0 }),
    xh = Ot(ki),
    Qo,
    Jo,
    Ei,
    Pl = W({}, ki, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Xo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ei &&
              (Ei && e.type === "mousemove"
                ? ((Qo = e.screenX - Ei.screenX), (Jo = e.screenY - Ei.screenY))
                : (Jo = Qo = 0),
              (Ei = e)),
            Qo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Jo;
      },
    }),
    hu = Ot(Pl),
    wh = W({}, Pl, { dataTransfer: 0 }),
    Sh = Ot(wh),
    kh = W({}, ki, { relatedTarget: 0 }),
    Go = Ot(kh),
    Eh = W({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ch = Ot(Eh),
    Rh = W({}, Dr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Nh = Ot(Rh),
    Lh = W({}, Dr, { data: 0 }),
    pu = Ot(Lh),
    Ph = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    jh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Oh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Oh[e])
        ? !!t[e]
        : !1;
  }
  function Xo() {
    return Mh;
  }
  var _h = W({}, ki, {
      key: function (e) {
        if (e.key) {
          var t = Ph[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Nl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? jh[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xo,
      charCode: function (e) {
        return e.type === "keypress" ? Nl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Nl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Th = Ot(_h),
    zh = W({}, Pl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    mu = Ot(zh),
    Dh = W({}, ki, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xo,
    }),
    bh = Ot(Dh),
    Fh = W({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ih = Ot(Fh),
    $h = W({}, Pl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Uh = Ot($h),
    Ah = [9, 13, 27, 32],
    Zo = h && "CompositionEvent" in window,
    Ci = null;
  h && "documentMode" in document && (Ci = document.documentMode);
  var Hh = h && "TextEvent" in window && !Ci,
    gu = h && (!Zo || (Ci && 8 < Ci && 11 >= Ci)),
    yu = " ",
    vu = !1;
  function xu(e, t) {
    switch (e) {
      case "keyup":
        return Ah.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wu(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var br = !1;
  function Bh(e, t) {
    switch (e) {
      case "compositionend":
        return wu(t);
      case "keypress":
        return t.which !== 32 ? null : ((vu = !0), yu);
      case "textInput":
        return ((e = t.data), e === yu && vu ? null : e);
      default:
        return null;
    }
  }
  function Vh(e, t) {
    if (br)
      return e === "compositionend" || (!Zo && xu(e, t))
        ? ((e = fu()), (Rl = Ko = Fn = null), (br = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wh[e.type] : t === "textarea";
  }
  function ku(e, t, n, l) {
    (di(l),
      (t = Tl(t, "onChange")),
      0 < t.length &&
        ((n = new Yo("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var Ri = null,
    Ni = null;
  function Kh(e) {
    Uu(e, 0);
  }
  function jl(e) {
    var t = Ar(e);
    if (nt(t)) return e;
  }
  function Yh(e, t) {
    if (e === "change") return t;
  }
  var Eu = !1;
  if (h) {
    var qo;
    if (h) {
      var ea = "oninput" in document;
      if (!ea) {
        var Cu = document.createElement("div");
        (Cu.setAttribute("oninput", "return;"),
          (ea = typeof Cu.oninput == "function"));
      }
      qo = ea;
    } else qo = !1;
    Eu = qo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ru() {
    Ri && (Ri.detachEvent("onpropertychange", Nu), (Ni = Ri = null));
  }
  function Nu(e) {
    if (e.propertyName === "value" && jl(Ni)) {
      var t = [];
      (ku(t, Ni, e, Tr(e)), pi(Kh, t));
    }
  }
  function Qh(e, t, n) {
    e === "focusin"
      ? (Ru(), (Ri = t), (Ni = n), Ri.attachEvent("onpropertychange", Nu))
      : e === "focusout" && Ru();
  }
  function Jh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return jl(Ni);
  }
  function Gh(e, t) {
    if (e === "click") return jl(t);
  }
  function Xh(e, t) {
    if (e === "input" || e === "change") return jl(t);
  }
  function Zh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Qt = typeof Object.is == "function" ? Object.is : Zh;
  function Li(e, t) {
    if (Qt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!m.call(t, a) || !Qt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Lu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pu(e, t) {
    var n = Lu(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Lu(n);
    }
  }
  function ju(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ju(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ou() {
    for (var e = window, t = Yt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Yt(e.document);
    }
    return t;
  }
  function ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function qh(e) {
    var t = Ou(),
      n = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ju(n.ownerDocument.documentElement, n)
    ) {
      if (l !== null && ta(n)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = n.textContent.length,
            f = Math.min(l.start, a);
          ((l = l.end === void 0 ? f : Math.min(l.end, a)),
            !e.extend && f > l && ((a = l), (l = f), (f = a)),
            (a = Pu(n, f)));
          var p = Pu(n, l);
          a &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            f > l
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var ep = h && "documentMode" in document && 11 >= document.documentMode,
    Fr = null,
    na = null,
    Pi = null,
    ra = !1;
  function Mu(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ra ||
      Fr == null ||
      Fr !== Yt(l) ||
      ((l = Fr),
      "selectionStart" in l && ta(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Pi && Li(Pi, l)) ||
        ((Pi = l),
        (l = Tl(na, "onSelect")),
        0 < l.length &&
          ((t = new Yo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Fr))));
  }
  function Ol(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ir = {
      animationend: Ol("Animation", "AnimationEnd"),
      animationiteration: Ol("Animation", "AnimationIteration"),
      animationstart: Ol("Animation", "AnimationStart"),
      transitionend: Ol("Transition", "TransitionEnd"),
    },
    ia = {},
    _u = {};
  h &&
    ((_u = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ir.animationend.animation,
      delete Ir.animationiteration.animation,
      delete Ir.animationstart.animation),
    "TransitionEvent" in window || delete Ir.transitionend.transition);
  function Ml(e) {
    if (ia[e]) return ia[e];
    if (!Ir[e]) return e;
    var t = Ir[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in _u) return (ia[e] = t[n]);
    return e;
  }
  var Tu = Ml("animationend"),
    zu = Ml("animationiteration"),
    Du = Ml("animationstart"),
    bu = Ml("transitionend"),
    Fu = new Map(),
    Iu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function In(e, t) {
    (Fu.set(e, t), c(t, [e]));
  }
  for (var la = 0; la < Iu.length; la++) {
    var oa = Iu[la],
      tp = oa.toLowerCase(),
      np = oa[0].toUpperCase() + oa.slice(1);
    In(tp, "on" + np);
  }
  (In(Tu, "onAnimationEnd"),
    In(zu, "onAnimationIteration"),
    In(Du, "onAnimationStart"),
    In("dblclick", "onDoubleClick"),
    In("focusin", "onFocus"),
    In("focusout", "onBlur"),
    In(bu, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ji =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    rp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ji),
    );
  function $u(e, t, n) {
    var l = e.type || "unknown-event";
    ((e.currentTarget = n), te(l, t, void 0, e), (e.currentTarget = null));
  }
  function Uu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        a = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var x = l[p],
              E = x.instance,
              T = x.currentTarget;
            if (((x = x.listener), E !== f && a.isPropagationStopped()))
              break e;
            ($u(a, x, T), (f = E));
          }
        else
          for (p = 0; p < l.length; p++) {
            if (
              ((x = l[p]),
              (E = x.instance),
              (T = x.currentTarget),
              (x = x.listener),
              E !== f && a.isPropagationStopped())
            )
              break e;
            ($u(a, x, T), (f = E));
          }
      }
    }
    if (K) throw ((e = ae), (K = !1), (ae = null), e);
  }
  function Ve(e, t) {
    var n = t[pa];
    n === void 0 && (n = t[pa] = new Set());
    var l = e + "__bubble";
    n.has(l) || (Au(t, e, 2, !1), n.add(l));
  }
  function aa(e, t, n) {
    var l = 0;
    (t && (l |= 4), Au(n, e, l, t));
  }
  var _l = "_reactListening" + Math.random().toString(36).slice(2);
  function Oi(e) {
    if (!e[_l]) {
      ((e[_l] = !0),
        u.forEach(function (n) {
          n !== "selectionchange" && (rp.has(n) || aa(n, !1, e), aa(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_l] || ((t[_l] = !0), aa("selectionchange", !1, t));
    }
  }
  function Au(e, t, n, l) {
    switch (cu(t)) {
      case 1:
        var a = yh;
        break;
      case 4:
        a = vh;
        break;
      default:
        a = Vo;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !mi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      l
        ? a !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : a !== void 0
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function sa(e, t, n, l, a) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var x = l.stateNode.containerInfo;
          if (x === a || (x.nodeType === 8 && x.parentNode === a)) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var E = p.tag;
              if (
                (E === 3 || E === 4) &&
                ((E = p.stateNode.containerInfo),
                E === a || (E.nodeType === 8 && E.parentNode === a))
              )
                return;
              p = p.return;
            }
          for (; x !== null; ) {
            if (((p = dr(x)), p === null)) return;
            if (((E = p.tag), E === 5 || E === 6)) {
              l = f = p;
              continue e;
            }
            x = x.parentNode;
          }
        }
        l = l.return;
      }
    pi(function () {
      var T = f,
        H = Tr(n),
        B = [];
      e: {
        var U = Fu.get(e);
        if (U !== void 0) {
          var G = Yo,
            ne = e;
          switch (e) {
            case "keypress":
              if (Nl(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = Th;
              break;
            case "focusin":
              ((ne = "focus"), (G = Go));
              break;
            case "focusout":
              ((ne = "blur"), (G = Go));
              break;
            case "beforeblur":
            case "afterblur":
              G = Go;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Sh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = bh;
              break;
            case Tu:
            case zu:
            case Du:
              G = Ch;
              break;
            case bu:
              G = Ih;
              break;
            case "scroll":
              G = xh;
              break;
            case "wheel":
              G = Uh;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Nh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = mu;
          }
          var oe = (t & 4) !== 0,
            Ze = !oe && e === "scroll",
            P = oe ? (U !== null ? U + "Capture" : null) : U;
          oe = [];
          for (var R = T, M; R !== null; ) {
            M = R;
            var V = M.stateNode;
            if (
              (M.tag === 5 &&
                V !== null &&
                ((M = V),
                P !== null &&
                  ((V = ar(R, P)), V != null && oe.push(Mi(R, V, M)))),
              Ze)
            )
              break;
            R = R.return;
          }
          0 < oe.length &&
            ((U = new G(U, ne, null, n, H)),
            B.push({ event: U, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (G = e === "mouseout" || e === "pointerout"),
            U &&
              n !== fi &&
              (ne = n.relatedTarget || n.fromElement) &&
              (dr(ne) || ne[yn]))
          )
            break e;
          if (
            (G || U) &&
            ((U =
              H.window === H
                ? H
                : (U = H.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            G
              ? ((ne = n.relatedTarget || n.toElement),
                (G = T),
                (ne = ne ? dr(ne) : null),
                ne !== null &&
                  ((Ze = le(ne)),
                  ne !== Ze || (ne.tag !== 5 && ne.tag !== 6)) &&
                  (ne = null))
              : ((G = null), (ne = T)),
            G !== ne)
          ) {
            if (
              ((oe = hu),
              (V = "onMouseLeave"),
              (P = "onMouseEnter"),
              (R = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((oe = mu),
                (V = "onPointerLeave"),
                (P = "onPointerEnter"),
                (R = "pointer")),
              (Ze = G == null ? U : Ar(G)),
              (M = ne == null ? U : Ar(ne)),
              (U = new oe(V, R + "leave", G, n, H)),
              (U.target = Ze),
              (U.relatedTarget = M),
              (V = null),
              dr(H) === T &&
                ((oe = new oe(P, R + "enter", ne, n, H)),
                (oe.target = M),
                (oe.relatedTarget = Ze),
                (V = oe)),
              (Ze = V),
              G && ne)
            )
              t: {
                for (oe = G, P = ne, R = 0, M = oe; M; M = $r(M)) R++;
                for (M = 0, V = P; V; V = $r(V)) M++;
                for (; 0 < R - M; ) ((oe = $r(oe)), R--);
                for (; 0 < M - R; ) ((P = $r(P)), M--);
                for (; R--; ) {
                  if (oe === P || (P !== null && oe === P.alternate)) break t;
                  ((oe = $r(oe)), (P = $r(P)));
                }
                oe = null;
              }
            else oe = null;
            (G !== null && Hu(B, U, G, oe, !1),
              ne !== null && Ze !== null && Hu(B, Ze, ne, oe, !0));
          }
        }
        e: {
          if (
            ((U = T ? Ar(T) : window),
            (G = U.nodeName && U.nodeName.toLowerCase()),
            G === "select" || (G === "input" && U.type === "file"))
          )
            var se = Yh;
          else if (Su(U))
            if (Eu) se = Xh;
            else {
              se = Jh;
              var we = Qh;
            }
          else
            (G = U.nodeName) &&
              G.toLowerCase() === "input" &&
              (U.type === "checkbox" || U.type === "radio") &&
              (se = Gh);
          if (se && (se = se(e, T))) {
            ku(B, se, n, H);
            break e;
          }
          (we && we(e, U, T),
            e === "focusout" &&
              (we = U._wrapperState) &&
              we.controlled &&
              U.type === "number" &&
              Or(U, "number", U.value));
        }
        switch (((we = T ? Ar(T) : window), e)) {
          case "focusin":
            (Su(we) || we.contentEditable === "true") &&
              ((Fr = we), (na = T), (Pi = null));
            break;
          case "focusout":
            Pi = na = Fr = null;
            break;
          case "mousedown":
            ra = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ra = !1), Mu(B, n, H));
            break;
          case "selectionchange":
            if (ep) break;
          case "keydown":
          case "keyup":
            Mu(B, n, H);
        }
        var Se;
        if (Zo)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          br
            ? xu(e, n) && (Ee = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ee = "onCompositionStart");
        (Ee &&
          (gu &&
            n.locale !== "ko" &&
            (br || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && br && (Se = fu())
              : ((Fn = H),
                (Ko = "value" in Fn ? Fn.value : Fn.textContent),
                (br = !0))),
          (we = Tl(T, Ee)),
          0 < we.length &&
            ((Ee = new pu(Ee, e, null, n, H)),
            B.push({ event: Ee, listeners: we }),
            Se
              ? (Ee.data = Se)
              : ((Se = wu(n)), Se !== null && (Ee.data = Se)))),
          (Se = Hh ? Bh(e, n) : Vh(e, n)) &&
            ((T = Tl(T, "onBeforeInput")),
            0 < T.length &&
              ((H = new pu("onBeforeInput", "beforeinput", null, n, H)),
              B.push({ event: H, listeners: T }),
              (H.data = Se))));
      }
      Uu(B, t);
    });
  }
  function Mi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Tl(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e,
        f = a.stateNode;
      (a.tag === 5 &&
        f !== null &&
        ((a = f),
        (f = ar(e, n)),
        f != null && l.unshift(Mi(e, f, a)),
        (f = ar(e, t)),
        f != null && l.push(Mi(e, f, a))),
        (e = e.return));
    }
    return l;
  }
  function $r(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Hu(e, t, n, l, a) {
    for (var f = t._reactName, p = []; n !== null && n !== l; ) {
      var x = n,
        E = x.alternate,
        T = x.stateNode;
      if (E !== null && E === l) break;
      (x.tag === 5 &&
        T !== null &&
        ((x = T),
        a
          ? ((E = ar(n, f)), E != null && p.unshift(Mi(n, E, x)))
          : a || ((E = ar(n, f)), E != null && p.push(Mi(n, E, x)))),
        (n = n.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var ip = /\r\n?/g,
    lp = /\u0000|\uFFFD/g;
  function Bu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ip,
        `
`,
      )
      .replace(lp, "");
  }
  function zl(e, t, n) {
    if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(o(425));
  }
  function Dl() {}
  var ua = null,
    ca = null;
  function fa(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var da = typeof setTimeout == "function" ? setTimeout : void 0,
    op = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vu = typeof Promise == "function" ? Promise : void 0,
    ap =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vu < "u"
          ? function (e) {
              return Vu.resolve(null).then(e).catch(sp);
            }
          : da;
  function sp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ha(e, t) {
    var n = t,
      l = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && a.nodeType === 8))
        if (((n = a.data), n === "/$")) {
          if (l === 0) {
            (e.removeChild(a), Si(t));
            return;
          }
          l--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
      n = a;
    } while (n);
    Si(t);
  }
  function $n(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Wu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Ur = Math.random().toString(36).slice(2),
    ln = "__reactFiber$" + Ur,
    _i = "__reactProps$" + Ur,
    yn = "__reactContainer$" + Ur,
    pa = "__reactEvents$" + Ur,
    up = "__reactListeners$" + Ur,
    cp = "__reactHandles$" + Ur;
  function dr(e) {
    var t = e[ln];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[yn] || n[ln])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Wu(e); e !== null; ) {
            if ((n = e[ln])) return n;
            e = Wu(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ti(e) {
    return (
      (e = e[ln] || e[yn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ar(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function bl(e) {
    return e[_i] || null;
  }
  var ma = [],
    Hr = -1;
  function Un(e) {
    return { current: e };
  }
  function We(e) {
    0 > Hr || ((e.current = ma[Hr]), (ma[Hr] = null), Hr--);
  }
  function Be(e, t) {
    (Hr++, (ma[Hr] = e.current), (e.current = t));
  }
  var An = {},
    ft = Un(An),
    Et = Un(!1),
    hr = An;
  function Br(e, t) {
    var n = e.type.contextTypes;
    if (!n) return An;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      f;
    for (f in n) a[f] = t[f];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function Ct(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Fl() {
    (We(Et), We(ft));
  }
  function Ku(e, t, n) {
    if (ft.current !== An) throw Error(o(168));
    (Be(ft, t), Be(Et, n));
  }
  function Yu(e, t, n) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
      return n;
    l = l.getChildContext();
    for (var a in l) if (!(a in t)) throw Error(o(108, Fe(e) || "Unknown", a));
    return W({}, n, l);
  }
  function Il(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        An),
      (hr = ft.current),
      Be(ft, e),
      Be(Et, Et.current),
      !0
    );
  }
  function Qu(e, t, n) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    (n
      ? ((e = Yu(e, t, hr)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        We(Et),
        We(ft),
        Be(ft, e))
      : We(Et),
      Be(Et, n));
  }
  var vn = null,
    $l = !1,
    ga = !1;
  function Ju(e) {
    vn === null ? (vn = [e]) : vn.push(e);
  }
  function fp(e) {
    (($l = !0), Ju(e));
  }
  function Hn() {
    if (!ga && vn !== null) {
      ga = !0;
      var e = 0,
        t = Ue;
      try {
        var n = vn;
        for (Ue = 1; e < n.length; e++) {
          var l = n[e];
          do l = l(!0);
          while (l !== null);
        }
        ((vn = null), ($l = !1));
      } catch (a) {
        throw (vn !== null && (vn = vn.slice(e + 1)), Xe(Ft, Hn), a);
      } finally {
        ((Ue = t), (ga = !1));
      }
    }
    return null;
  }
  var Vr = [],
    Wr = 0,
    Ul = null,
    Al = 0,
    It = [],
    $t = 0,
    pr = null,
    xn = 1,
    wn = "";
  function mr(e, t) {
    ((Vr[Wr++] = Al), (Vr[Wr++] = Ul), (Ul = e), (Al = t));
  }
  function Gu(e, t, n) {
    ((It[$t++] = xn), (It[$t++] = wn), (It[$t++] = pr), (pr = e));
    var l = xn;
    e = wn;
    var a = 32 - Ae(l) - 1;
    ((l &= ~(1 << a)), (n += 1));
    var f = 32 - Ae(t) + a;
    if (30 < f) {
      var p = a - (a % 5);
      ((f = (l & ((1 << p) - 1)).toString(32)),
        (l >>= p),
        (a -= p),
        (xn = (1 << (32 - Ae(t) + a)) | (n << a) | l),
        (wn = f + e));
    } else ((xn = (1 << f) | (n << a) | l), (wn = e));
  }
  function ya(e) {
    e.return !== null && (mr(e, 1), Gu(e, 1, 0));
  }
  function va(e) {
    for (; e === Ul; )
      ((Ul = Vr[--Wr]), (Vr[Wr] = null), (Al = Vr[--Wr]), (Vr[Wr] = null));
    for (; e === pr; )
      ((pr = It[--$t]),
        (It[$t] = null),
        (wn = It[--$t]),
        (It[$t] = null),
        (xn = It[--$t]),
        (It[$t] = null));
  }
  var Mt = null,
    _t = null,
    Ye = !1,
    Jt = null;
  function Xu(e, t) {
    var n = Bt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Zu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Mt = e), (_t = $n(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Mt = e), (_t = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = pr !== null ? { id: xn, overflow: wn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Bt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Mt = e),
              (_t = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function xa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function wa(e) {
    if (Ye) {
      var t = _t;
      if (t) {
        var n = t;
        if (!Zu(e, t)) {
          if (xa(e)) throw Error(o(418));
          t = $n(n.nextSibling);
          var l = Mt;
          t && Zu(e, t)
            ? Xu(l, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (Mt = e));
        }
      } else {
        if (xa(e)) throw Error(o(418));
        ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (Mt = e));
      }
    }
  }
  function qu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Mt = e;
  }
  function Hl(e) {
    if (e !== Mt) return !1;
    if (!Ye) return (qu(e), (Ye = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !fa(e.type, e.memoizedProps))),
      t && (t = _t))
    ) {
      if (xa(e)) throw (ec(), Error(o(418)));
      for (; t; ) (Xu(e, t), (t = $n(t.nextSibling)));
    }
    if ((qu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                _t = $n(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        _t = null;
      }
    } else _t = Mt ? $n(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ec() {
    for (var e = _t; e; ) e = $n(e.nextSibling);
  }
  function Kr() {
    ((_t = Mt = null), (Ye = !1));
  }
  function Sa(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
  }
  var dp = re.ReactCurrentBatchConfig;
  function zi(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var l = n.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var a = l,
          f = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === f
          ? t.ref
          : ((t = function (p) {
              var x = a.refs;
              p === null ? delete x[f] : (x[f] = p);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Bl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function tc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function nc(e) {
    function t(P, R) {
      if (e) {
        var M = P.deletions;
        M === null ? ((P.deletions = [R]), (P.flags |= 16)) : M.push(R);
      }
    }
    function n(P, R) {
      if (!e) return null;
      for (; R !== null; ) (t(P, R), (R = R.sibling));
      return null;
    }
    function l(P, R) {
      for (P = new Map(); R !== null; )
        (R.key !== null ? P.set(R.key, R) : P.set(R.index, R), (R = R.sibling));
      return P;
    }
    function a(P, R) {
      return ((P = Gn(P, R)), (P.index = 0), (P.sibling = null), P);
    }
    function f(P, R, M) {
      return (
        (P.index = M),
        e
          ? ((M = P.alternate),
            M !== null
              ? ((M = M.index), M < R ? ((P.flags |= 2), R) : M)
              : ((P.flags |= 2), R))
          : ((P.flags |= 1048576), R)
      );
    }
    function p(P) {
      return (e && P.alternate === null && (P.flags |= 2), P);
    }
    function x(P, R, M, V) {
      return R === null || R.tag !== 6
        ? ((R = ds(M, P.mode, V)), (R.return = P), R)
        : ((R = a(R, M)), (R.return = P), R);
    }
    function E(P, R, M, V) {
      var se = M.type;
      return se === O
        ? H(P, R, M.props.children, V, M.key)
        : R !== null &&
            (R.elementType === se ||
              (typeof se == "object" &&
                se !== null &&
                se.$$typeof === he &&
                tc(se) === R.type))
          ? ((V = a(R, M.props)), (V.ref = zi(P, R, M)), (V.return = P), V)
          : ((V = po(M.type, M.key, M.props, null, P.mode, V)),
            (V.ref = zi(P, R, M)),
            (V.return = P),
            V);
    }
    function T(P, R, M, V) {
      return R === null ||
        R.tag !== 4 ||
        R.stateNode.containerInfo !== M.containerInfo ||
        R.stateNode.implementation !== M.implementation
        ? ((R = hs(M, P.mode, V)), (R.return = P), R)
        : ((R = a(R, M.children || [])), (R.return = P), R);
    }
    function H(P, R, M, V, se) {
      return R === null || R.tag !== 7
        ? ((R = Er(M, P.mode, V, se)), (R.return = P), R)
        : ((R = a(R, M)), (R.return = P), R);
    }
    function B(P, R, M) {
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return ((R = ds("" + R, P.mode, M)), (R.return = P), R);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ue:
            return (
              (M = po(R.type, R.key, R.props, null, P.mode, M)),
              (M.ref = zi(P, null, R)),
              (M.return = P),
              M
            );
          case ke:
            return ((R = hs(R, P.mode, M)), (R.return = P), R);
          case he:
            var V = R._init;
            return B(P, V(R._payload), M);
        }
        if (rr(R) || J(R))
          return ((R = Er(R, P.mode, M, null)), (R.return = P), R);
        Bl(P, R);
      }
      return null;
    }
    function U(P, R, M, V) {
      var se = R !== null ? R.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return se !== null ? null : x(P, R, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ue:
            return M.key === se ? E(P, R, M, V) : null;
          case ke:
            return M.key === se ? T(P, R, M, V) : null;
          case he:
            return ((se = M._init), U(P, R, se(M._payload), V));
        }
        if (rr(M) || J(M)) return se !== null ? null : H(P, R, M, V, null);
        Bl(P, M);
      }
      return null;
    }
    function G(P, R, M, V, se) {
      if ((typeof V == "string" && V !== "") || typeof V == "number")
        return ((P = P.get(M) || null), x(R, P, "" + V, se));
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case ue:
            return (
              (P = P.get(V.key === null ? M : V.key) || null),
              E(R, P, V, se)
            );
          case ke:
            return (
              (P = P.get(V.key === null ? M : V.key) || null),
              T(R, P, V, se)
            );
          case he:
            var we = V._init;
            return G(P, R, M, we(V._payload), se);
        }
        if (rr(V) || J(V))
          return ((P = P.get(M) || null), H(R, P, V, se, null));
        Bl(R, V);
      }
      return null;
    }
    function ne(P, R, M, V) {
      for (
        var se = null, we = null, Se = R, Ee = (R = 0), st = null;
        Se !== null && Ee < M.length;
        Ee++
      ) {
        Se.index > Ee ? ((st = Se), (Se = null)) : (st = Se.sibling);
        var be = U(P, Se, M[Ee], V);
        if (be === null) {
          Se === null && (Se = st);
          break;
        }
        (e && Se && be.alternate === null && t(P, Se),
          (R = f(be, R, Ee)),
          we === null ? (se = be) : (we.sibling = be),
          (we = be),
          (Se = st));
      }
      if (Ee === M.length) return (n(P, Se), Ye && mr(P, Ee), se);
      if (Se === null) {
        for (; Ee < M.length; Ee++)
          ((Se = B(P, M[Ee], V)),
            Se !== null &&
              ((R = f(Se, R, Ee)),
              we === null ? (se = Se) : (we.sibling = Se),
              (we = Se)));
        return (Ye && mr(P, Ee), se);
      }
      for (Se = l(P, Se); Ee < M.length; Ee++)
        ((st = G(Se, P, Ee, M[Ee], V)),
          st !== null &&
            (e &&
              st.alternate !== null &&
              Se.delete(st.key === null ? Ee : st.key),
            (R = f(st, R, Ee)),
            we === null ? (se = st) : (we.sibling = st),
            (we = st)));
      return (
        e &&
          Se.forEach(function (Xn) {
            return t(P, Xn);
          }),
        Ye && mr(P, Ee),
        se
      );
    }
    function oe(P, R, M, V) {
      var se = J(M);
      if (typeof se != "function") throw Error(o(150));
      if (((M = se.call(M)), M == null)) throw Error(o(151));
      for (
        var we = (se = null), Se = R, Ee = (R = 0), st = null, be = M.next();
        Se !== null && !be.done;
        Ee++, be = M.next()
      ) {
        Se.index > Ee ? ((st = Se), (Se = null)) : (st = Se.sibling);
        var Xn = U(P, Se, be.value, V);
        if (Xn === null) {
          Se === null && (Se = st);
          break;
        }
        (e && Se && Xn.alternate === null && t(P, Se),
          (R = f(Xn, R, Ee)),
          we === null ? (se = Xn) : (we.sibling = Xn),
          (we = Xn),
          (Se = st));
      }
      if (be.done) return (n(P, Se), Ye && mr(P, Ee), se);
      if (Se === null) {
        for (; !be.done; Ee++, be = M.next())
          ((be = B(P, be.value, V)),
            be !== null &&
              ((R = f(be, R, Ee)),
              we === null ? (se = be) : (we.sibling = be),
              (we = be)));
        return (Ye && mr(P, Ee), se);
      }
      for (Se = l(P, Se); !be.done; Ee++, be = M.next())
        ((be = G(Se, P, Ee, be.value, V)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              Se.delete(be.key === null ? Ee : be.key),
            (R = f(be, R, Ee)),
            we === null ? (se = be) : (we.sibling = be),
            (we = be)));
      return (
        e &&
          Se.forEach(function (Wp) {
            return t(P, Wp);
          }),
        Ye && mr(P, Ee),
        se
      );
    }
    function Ze(P, R, M, V) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === O &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case ue:
            e: {
              for (var se = M.key, we = R; we !== null; ) {
                if (we.key === se) {
                  if (((se = M.type), se === O)) {
                    if (we.tag === 7) {
                      (n(P, we.sibling),
                        (R = a(we, M.props.children)),
                        (R.return = P),
                        (P = R));
                      break e;
                    }
                  } else if (
                    we.elementType === se ||
                    (typeof se == "object" &&
                      se !== null &&
                      se.$$typeof === he &&
                      tc(se) === we.type)
                  ) {
                    (n(P, we.sibling),
                      (R = a(we, M.props)),
                      (R.ref = zi(P, we, M)),
                      (R.return = P),
                      (P = R));
                    break e;
                  }
                  n(P, we);
                  break;
                } else t(P, we);
                we = we.sibling;
              }
              M.type === O
                ? ((R = Er(M.props.children, P.mode, V, M.key)),
                  (R.return = P),
                  (P = R))
                : ((V = po(M.type, M.key, M.props, null, P.mode, V)),
                  (V.ref = zi(P, R, M)),
                  (V.return = P),
                  (P = V));
            }
            return p(P);
          case ke:
            e: {
              for (we = M.key; R !== null; ) {
                if (R.key === we)
                  if (
                    R.tag === 4 &&
                    R.stateNode.containerInfo === M.containerInfo &&
                    R.stateNode.implementation === M.implementation
                  ) {
                    (n(P, R.sibling),
                      (R = a(R, M.children || [])),
                      (R.return = P),
                      (P = R));
                    break e;
                  } else {
                    n(P, R);
                    break;
                  }
                else t(P, R);
                R = R.sibling;
              }
              ((R = hs(M, P.mode, V)), (R.return = P), (P = R));
            }
            return p(P);
          case he:
            return ((we = M._init), Ze(P, R, we(M._payload), V));
        }
        if (rr(M)) return ne(P, R, M, V);
        if (J(M)) return oe(P, R, M, V);
        Bl(P, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number"
        ? ((M = "" + M),
          R !== null && R.tag === 6
            ? (n(P, R.sibling), (R = a(R, M)), (R.return = P), (P = R))
            : (n(P, R), (R = ds(M, P.mode, V)), (R.return = P), (P = R)),
          p(P))
        : n(P, R);
    }
    return Ze;
  }
  var Yr = nc(!0),
    rc = nc(!1),
    Vl = Un(null),
    Wl = null,
    Qr = null,
    ka = null;
  function Ea() {
    ka = Qr = Wl = null;
  }
  function Ca(e) {
    var t = Vl.current;
    (We(Vl), (e._currentValue = t));
  }
  function Ra(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Jr(e, t) {
    ((Wl = e),
      (ka = Qr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Rt = !0), (e.firstContext = null)));
  }
  function Ut(e) {
    var t = e._currentValue;
    if (ka !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Qr === null)) {
        if (Wl === null) throw Error(o(308));
        ((Qr = e), (Wl.dependencies = { lanes: 0, firstContext: e }));
      } else Qr = Qr.next = e;
    return t;
  }
  var gr = null;
  function Na(e) {
    gr === null ? (gr = [e]) : gr.push(e);
  }
  function ic(e, t, n, l) {
    var a = t.interleaved;
    return (
      a === null ? ((n.next = n), Na(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      Sn(e, l)
    );
  }
  function Sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bn = !1;
  function La(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function lc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function kn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (De & 2) !== 0)) {
      var a = l.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t),
        Sn(e, n)
      );
    }
    return (
      (a = l.interleaved),
      a === null ? ((t.next = t), Na(l)) : ((t.next = a.next), (a.next = t)),
      (l.interleaved = t),
      Sn(e, n)
    );
  }
  function Kl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Ao(e, n));
    }
  }
  function oc(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var a = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (f === null ? (a = f = p) : (f = f.next = p), (n = n.next));
        } while (n !== null);
        f === null ? (a = f = t) : (f = f.next = t);
      } else a = f = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: f,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Yl(e, t, n, l) {
    var a = e.updateQueue;
    Bn = !1;
    var f = a.firstBaseUpdate,
      p = a.lastBaseUpdate,
      x = a.shared.pending;
    if (x !== null) {
      a.shared.pending = null;
      var E = x,
        T = E.next;
      ((E.next = null), p === null ? (f = T) : (p.next = T), (p = E));
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (x = H.lastBaseUpdate),
        x !== p &&
          (x === null ? (H.firstBaseUpdate = T) : (x.next = T),
          (H.lastBaseUpdate = E)));
    }
    if (f !== null) {
      var B = a.baseState;
      ((p = 0), (H = T = E = null), (x = f));
      do {
        var U = x.lane,
          G = x.eventTime;
        if ((l & U) === U) {
          H !== null &&
            (H = H.next =
              {
                eventTime: G,
                lane: 0,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null,
              });
          e: {
            var ne = e,
              oe = x;
            switch (((U = t), (G = n), oe.tag)) {
              case 1:
                if (((ne = oe.payload), typeof ne == "function")) {
                  B = ne.call(G, B, U);
                  break e;
                }
                B = ne;
                break e;
              case 3:
                ne.flags = (ne.flags & -65537) | 128;
              case 0:
                if (
                  ((ne = oe.payload),
                  (U = typeof ne == "function" ? ne.call(G, B, U) : ne),
                  U == null)
                )
                  break e;
                B = W({}, B, U);
                break e;
              case 2:
                Bn = !0;
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64),
            (U = a.effects),
            U === null ? (a.effects = [x]) : U.push(x));
        } else
          ((G = {
            eventTime: G,
            lane: U,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            H === null ? ((T = H = G), (E = B)) : (H = H.next = G),
            (p |= U));
        if (((x = x.next), x === null)) {
          if (((x = a.shared.pending), x === null)) break;
          ((U = x),
            (x = U.next),
            (U.next = null),
            (a.lastBaseUpdate = U),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (H === null && (E = B),
        (a.baseState = E),
        (a.firstBaseUpdate = T),
        (a.lastBaseUpdate = H),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((p |= a.lane), (a = a.next));
        while (a !== t);
      } else f === null && (a.shared.lanes = 0);
      ((xr |= p), (e.lanes = p), (e.memoizedState = B));
    }
  }
  function ac(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          a = l.callback;
        if (a !== null) {
          if (((l.callback = null), (l = n), typeof a != "function"))
            throw Error(o(191, a));
          a.call(l);
        }
      }
  }
  var Di = {},
    on = Un(Di),
    bi = Un(Di),
    Fi = Un(Di);
  function yr(e) {
    if (e === Di) throw Error(o(174));
    return e;
  }
  function Pa(e, t) {
    switch ((Be(Fi, t), Be(bi, e), Be(on, Di), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ir(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ir(t, e)));
    }
    (We(on), Be(on, t));
  }
  function Gr() {
    (We(on), We(bi), We(Fi));
  }
  function sc(e) {
    yr(Fi.current);
    var t = yr(on.current),
      n = ir(t, e.type);
    t !== n && (Be(bi, e), Be(on, n));
  }
  function ja(e) {
    bi.current === e && (We(on), We(bi));
  }
  var Qe = Un(0);
  function Ql(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Oa = [];
  function Ma() {
    for (var e = 0; e < Oa.length; e++)
      Oa[e]._workInProgressVersionPrimary = null;
    Oa.length = 0;
  }
  var Jl = re.ReactCurrentDispatcher,
    _a = re.ReactCurrentBatchConfig,
    vr = 0,
    Je = null,
    rt = null,
    ot = null,
    Gl = !1,
    Ii = !1,
    $i = 0,
    hp = 0;
  function dt() {
    throw Error(o(321));
  }
  function Ta(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Qt(e[n], t[n])) return !1;
    return !0;
  }
  function za(e, t, n, l, a, f) {
    if (
      ((vr = f),
      (Je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Jl.current = e === null || e.memoizedState === null ? yp : vp),
      (e = n(l, a)),
      Ii)
    ) {
      f = 0;
      do {
        if (((Ii = !1), ($i = 0), 25 <= f)) throw Error(o(301));
        ((f += 1),
          (ot = rt = null),
          (t.updateQueue = null),
          (Jl.current = xp),
          (e = n(l, a)));
      } while (Ii);
    }
    if (
      ((Jl.current = ql),
      (t = rt !== null && rt.next !== null),
      (vr = 0),
      (ot = rt = Je = null),
      (Gl = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Da() {
    var e = $i !== 0;
    return (($i = 0), e);
  }
  function an() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ot === null ? (Je.memoizedState = ot = e) : (ot = ot.next = e), ot);
  }
  function At() {
    if (rt === null) {
      var e = Je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var t = ot === null ? Je.memoizedState : ot.next;
    if (t !== null) ((ot = t), (rt = e));
    else {
      if (e === null) throw Error(o(310));
      ((rt = e),
        (e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null,
        }),
        ot === null ? (Je.memoizedState = ot = e) : (ot = ot.next = e));
    }
    return ot;
  }
  function Ui(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ba(e) {
    var t = At(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = rt,
      a = l.baseQueue,
      f = n.pending;
    if (f !== null) {
      if (a !== null) {
        var p = a.next;
        ((a.next = f.next), (f.next = p));
      }
      ((l.baseQueue = a = f), (n.pending = null));
    }
    if (a !== null) {
      ((f = a.next), (l = l.baseState));
      var x = (p = null),
        E = null,
        T = f;
      do {
        var H = T.lane;
        if ((vr & H) === H)
          (E !== null &&
            (E = E.next =
              {
                lane: 0,
                action: T.action,
                hasEagerState: T.hasEagerState,
                eagerState: T.eagerState,
                next: null,
              }),
            (l = T.hasEagerState ? T.eagerState : e(l, T.action)));
        else {
          var B = {
            lane: H,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          };
          (E === null ? ((x = E = B), (p = l)) : (E = E.next = B),
            (Je.lanes |= H),
            (xr |= H));
        }
        T = T.next;
      } while (T !== null && T !== f);
      (E === null ? (p = l) : (E.next = x),
        Qt(l, t.memoizedState) || (Rt = !0),
        (t.memoizedState = l),
        (t.baseState = p),
        (t.baseQueue = E),
        (n.lastRenderedState = l));
    }
    if (((e = n.interleaved), e !== null)) {
      a = e;
      do ((f = a.lane), (Je.lanes |= f), (xr |= f), (a = a.next));
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Fa(e) {
    var t = At(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      a = n.pending,
      f = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var p = (a = a.next);
      do ((f = e(f, p.action)), (p = p.next));
      while (p !== a);
      (Qt(f, t.memoizedState) || (Rt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (n.lastRenderedState = f));
    }
    return [f, l];
  }
  function uc() {}
  function cc(e, t) {
    var n = Je,
      l = At(),
      a = t(),
      f = !Qt(l.memoizedState, a);
    if (
      (f && ((l.memoizedState = a), (Rt = !0)),
      (l = l.queue),
      Ia(hc.bind(null, n, l, e), [e]),
      l.getSnapshot !== t || f || (ot !== null && ot.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Ai(9, dc.bind(null, n, l, a, t), void 0, null),
        at === null)
      )
        throw Error(o(349));
      (vr & 30) !== 0 || fc(n, t, a);
    }
    return a;
  }
  function fc(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Je.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function dc(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), pc(t) && mc(e));
  }
  function hc(e, t, n) {
    return n(function () {
      pc(t) && mc(e);
    });
  }
  function pc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Qt(e, n);
    } catch {
      return !0;
    }
  }
  function mc(e) {
    var t = Sn(e, 1);
    t !== null && qt(t, e, 1, -1);
  }
  function gc(e) {
    var t = an();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ui,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = gp.bind(null, Je, e)),
      [t.memoizedState, e]
    );
  }
  function Ai(e, t, n, l) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: l, next: null }),
      (t = Je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function yc() {
    return At().memoizedState;
  }
  function Xl(e, t, n, l) {
    var a = an();
    ((Je.flags |= e),
      (a.memoizedState = Ai(1 | t, n, void 0, l === void 0 ? null : l)));
  }
  function Zl(e, t, n, l) {
    var a = At();
    l = l === void 0 ? null : l;
    var f = void 0;
    if (rt !== null) {
      var p = rt.memoizedState;
      if (((f = p.destroy), l !== null && Ta(l, p.deps))) {
        a.memoizedState = Ai(t, n, f, l);
        return;
      }
    }
    ((Je.flags |= e), (a.memoizedState = Ai(1 | t, n, f, l)));
  }
  function vc(e, t) {
    return Xl(8390656, 8, e, t);
  }
  function Ia(e, t) {
    return Zl(2048, 8, e, t);
  }
  function xc(e, t) {
    return Zl(4, 2, e, t);
  }
  function wc(e, t) {
    return Zl(4, 4, e, t);
  }
  function Sc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function kc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Zl(4, 4, Sc.bind(null, t, e), n)
    );
  }
  function $a() {}
  function Ec(e, t) {
    var n = At();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Ta(t, l[1])
      ? l[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Cc(e, t) {
    var n = At();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return l !== null && t !== null && Ta(t, l[1])
      ? l[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Rc(e, t, n) {
    return (vr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = n))
      : (Qt(n, t) ||
          ((n = tu()), (Je.lanes |= n), (xr |= n), (e.baseState = !0)),
        t);
  }
  function pp(e, t) {
    var n = Ue;
    ((Ue = n !== 0 && 4 > n ? n : 4), e(!0));
    var l = _a.transition;
    _a.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Ue = n), (_a.transition = l));
    }
  }
  function Nc() {
    return At().memoizedState;
  }
  function mp(e, t, n) {
    var l = Qn(e);
    if (
      ((n = {
        lane: l,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Lc(e))
    )
      Pc(t, n);
    else if (((n = ic(e, t, n, l)), n !== null)) {
      var a = xt();
      (qt(n, e, l, a), jc(n, t, l));
    }
  }
  function gp(e, t, n) {
    var l = Qn(e),
      a = {
        lane: l,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Lc(e)) Pc(t, a);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var p = t.lastRenderedState,
            x = f(p, n);
          if (((a.hasEagerState = !0), (a.eagerState = x), Qt(x, p))) {
            var E = t.interleaved;
            (E === null
              ? ((a.next = a), Na(t))
              : ((a.next = E.next), (E.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((n = ic(e, t, a, l)),
        n !== null && ((a = xt()), qt(n, e, l, a), jc(n, t, l)));
    }
  }
  function Lc(e) {
    var t = e.alternate;
    return e === Je || (t !== null && t === Je);
  }
  function Pc(e, t) {
    Ii = Gl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function jc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Ao(e, n));
    }
  }
  var ql = {
      readContext: Ut,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useInsertionEffect: dt,
      useLayoutEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useMutableSource: dt,
      useSyncExternalStore: dt,
      useId: dt,
      unstable_isNewReconciler: !1,
    },
    yp = {
      readContext: Ut,
      useCallback: function (e, t) {
        return ((an().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ut,
      useEffect: vc,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Xl(4194308, 4, Sc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Xl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Xl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = an();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var l = an();
        return (
          (t = n !== void 0 ? n(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = mp.bind(null, Je, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = an();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: gc,
      useDebugValue: $a,
      useDeferredValue: function (e) {
        return (an().memoizedState = e);
      },
      useTransition: function () {
        var e = gc(!1),
          t = e[0];
        return ((e = pp.bind(null, e[1])), (an().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var l = Je,
          a = an();
        if (Ye) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), at === null)) throw Error(o(349));
          (vr & 30) !== 0 || fc(l, t, n);
        }
        a.memoizedState = n;
        var f = { value: n, getSnapshot: t };
        return (
          (a.queue = f),
          vc(hc.bind(null, l, f, e), [e]),
          (l.flags |= 2048),
          Ai(9, dc.bind(null, l, f, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = an(),
          t = at.identifierPrefix;
        if (Ye) {
          var n = wn,
            l = xn;
          ((n = (l & ~(1 << (32 - Ae(l) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = $i++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = hp++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    vp = {
      readContext: Ut,
      useCallback: Ec,
      useContext: Ut,
      useEffect: Ia,
      useImperativeHandle: kc,
      useInsertionEffect: xc,
      useLayoutEffect: wc,
      useMemo: Cc,
      useReducer: ba,
      useRef: yc,
      useState: function () {
        return ba(Ui);
      },
      useDebugValue: $a,
      useDeferredValue: function (e) {
        var t = At();
        return Rc(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = ba(Ui)[0],
          t = At().memoizedState;
        return [e, t];
      },
      useMutableSource: uc,
      useSyncExternalStore: cc,
      useId: Nc,
      unstable_isNewReconciler: !1,
    },
    xp = {
      readContext: Ut,
      useCallback: Ec,
      useContext: Ut,
      useEffect: Ia,
      useImperativeHandle: kc,
      useInsertionEffect: xc,
      useLayoutEffect: wc,
      useMemo: Cc,
      useReducer: Fa,
      useRef: yc,
      useState: function () {
        return Fa(Ui);
      },
      useDebugValue: $a,
      useDeferredValue: function (e) {
        var t = At();
        return rt === null ? (t.memoizedState = e) : Rc(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = Fa(Ui)[0],
          t = At().memoizedState;
        return [e, t];
      },
      useMutableSource: uc,
      useSyncExternalStore: cc,
      useId: Nc,
      unstable_isNewReconciler: !1,
    };
  function Gt(e, t) {
    if (e && e.defaultProps) {
      ((t = W({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ua(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var eo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? le(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = xt(),
        a = Qn(e),
        f = kn(l, a);
      ((f.payload = t),
        n != null && (f.callback = n),
        (t = Vn(e, f, a)),
        t !== null && (qt(t, e, a, l), Kl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = xt(),
        a = Qn(e),
        f = kn(l, a);
      ((f.tag = 1),
        (f.payload = t),
        n != null && (f.callback = n),
        (t = Vn(e, f, a)),
        t !== null && (qt(t, e, a, l), Kl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = xt(),
        l = Qn(e),
        a = kn(n, l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Vn(e, a, l)),
        t !== null && (qt(t, e, l, n), Kl(t, e, l)));
    },
  };
  function Oc(e, t, n, l, a, f, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, f, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Li(n, l) || !Li(a, f)
          : !0
    );
  }
  function Mc(e, t, n) {
    var l = !1,
      a = An,
      f = t.contextType;
    return (
      typeof f == "object" && f !== null
        ? (f = Ut(f))
        : ((a = Ct(t) ? hr : ft.current),
          (l = t.contextTypes),
          (f = (l = l != null) ? Br(e, a) : An)),
      (t = new t(n, f)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = eo),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function _c(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && eo.enqueueReplaceState(t, t.state, null));
  }
  function Aa(e, t, n, l) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), La(e));
    var f = t.contextType;
    (typeof f == "object" && f !== null
      ? (a.context = Ut(f))
      : ((f = Ct(t) ? hr : ft.current), (a.context = Br(e, f))),
      (a.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == "function" && (Ua(e, t, f, n), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && eo.enqueueReplaceState(a, a.state, null),
        Yl(e, n, a, l),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Xr(e, t) {
    try {
      var n = "",
        l = t;
      do ((n += ve(l)), (l = l.return));
      while (l);
      var a = n;
    } catch (f) {
      a =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Ha(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ba(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var wp = typeof WeakMap == "function" ? WeakMap : Map;
  function Tc(e, t, n) {
    ((n = kn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var l = t.value;
    return (
      (n.callback = function () {
        (ao || ((ao = !0), (is = l)), Ba(e, t));
      }),
      n
    );
  }
  function zc(e, t, n) {
    ((n = kn(-1, n)), (n.tag = 3));
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var a = t.value;
      ((n.payload = function () {
        return l(a);
      }),
        (n.callback = function () {
          Ba(e, t);
        }));
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ba(e, t),
            typeof l != "function" &&
              (Kn === null ? (Kn = new Set([this])) : Kn.add(this)));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      n
    );
  }
  function Dc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new wp();
      var a = new Set();
      l.set(t, a);
    } else ((a = l.get(t)), a === void 0 && ((a = new Set()), l.set(t, a)));
    a.has(n) || (a.add(n), (e = zp.bind(null, e, t, n)), t.then(e, e));
  }
  function bc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fc(e, t, n, l, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = kn(-1, 1)), (t.tag = 2), Vn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Sp = re.ReactCurrentOwner,
    Rt = !1;
  function vt(e, t, n, l) {
    t.child = e === null ? rc(t, null, n, l) : Yr(t, e.child, n, l);
  }
  function Ic(e, t, n, l, a) {
    n = n.render;
    var f = t.ref;
    return (
      Jr(t, a),
      (l = za(e, t, n, l, f, a)),
      (n = Da()),
      e !== null && !Rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          En(e, t, a))
        : (Ye && n && ya(t), (t.flags |= 1), vt(e, t, l, a), t.child)
    );
  }
  function $c(e, t, n, l, a) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" &&
        !fs(f) &&
        f.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Uc(e, t, f, l, a))
        : ((e = po(n.type, null, l, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), (e.lanes & a) === 0)) {
      var p = f.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Li), n(p, l) && e.ref === t.ref)
      )
        return En(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = Gn(f, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Uc(e, t, n, l, a) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Li(f, l) && e.ref === t.ref)
        if (((Rt = !1), (t.pendingProps = l = f), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (Rt = !0);
        else return ((t.lanes = e.lanes), En(e, t, a));
    }
    return Va(e, t, n, l, a);
  }
  function Ac(e, t, n) {
    var l = t.pendingProps,
      a = l.children,
      f = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Be(qr, Tt),
          (Tt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Be(qr, Tt),
            (Tt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = f !== null ? f.baseLanes : n),
          Be(qr, Tt),
          (Tt |= l));
      }
    else
      (f !== null ? ((l = f.baseLanes | n), (t.memoizedState = null)) : (l = n),
        Be(qr, Tt),
        (Tt |= l));
    return (vt(e, t, a, n), t.child);
  }
  function Hc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Va(e, t, n, l, a) {
    var f = Ct(n) ? hr : ft.current;
    return (
      (f = Br(t, f)),
      Jr(t, a),
      (n = za(e, t, n, l, f, a)),
      (l = Da()),
      e !== null && !Rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          En(e, t, a))
        : (Ye && l && ya(t), (t.flags |= 1), vt(e, t, n, a), t.child)
    );
  }
  function Bc(e, t, n, l, a) {
    if (Ct(n)) {
      var f = !0;
      Il(t);
    } else f = !1;
    if ((Jr(t, a), t.stateNode === null))
      (no(e, t), Mc(t, n, l), Aa(t, n, l, a), (l = !0));
    else if (e === null) {
      var p = t.stateNode,
        x = t.memoizedProps;
      p.props = x;
      var E = p.context,
        T = n.contextType;
      typeof T == "object" && T !== null
        ? (T = Ut(T))
        : ((T = Ct(n) ? hr : ft.current), (T = Br(t, T)));
      var H = n.getDerivedStateFromProps,
        B =
          typeof H == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      (B ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((x !== l || E !== T) && _c(t, p, l, T)),
        (Bn = !1));
      var U = t.memoizedState;
      ((p.state = U),
        Yl(t, l, p, a),
        (E = t.memoizedState),
        x !== l || U !== E || Et.current || Bn
          ? (typeof H == "function" && (Ua(t, n, H, l), (E = t.memoizedState)),
            (x = Bn || Oc(t, n, x, l, U, E, T))
              ? (B ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = E)),
            (p.props = l),
            (p.state = E),
            (p.context = T),
            (l = x))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((p = t.stateNode),
        lc(e, t),
        (x = t.memoizedProps),
        (T = t.type === t.elementType ? x : Gt(t.type, x)),
        (p.props = T),
        (B = t.pendingProps),
        (U = p.context),
        (E = n.contextType),
        typeof E == "object" && E !== null
          ? (E = Ut(E))
          : ((E = Ct(n) ? hr : ft.current), (E = Br(t, E))));
      var G = n.getDerivedStateFromProps;
      ((H =
        typeof G == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((x !== B || U !== E) && _c(t, p, l, E)),
        (Bn = !1),
        (U = t.memoizedState),
        (p.state = U),
        Yl(t, l, p, a));
      var ne = t.memoizedState;
      x !== B || U !== ne || Et.current || Bn
        ? (typeof G == "function" && (Ua(t, n, G, l), (ne = t.memoizedState)),
          (T = Bn || Oc(t, n, T, l, U, ne, E) || !1)
            ? (H ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(l, ne, E),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(l, ne, E)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (x === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = ne)),
          (p.props = l),
          (p.state = ne),
          (p.context = E),
          (l = T))
        : (typeof p.componentDidUpdate != "function" ||
            (x === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return Wa(e, t, n, l, f, a);
  }
  function Wa(e, t, n, l, a, f) {
    Hc(e, t);
    var p = (t.flags & 128) !== 0;
    if (!l && !p) return (a && Qu(t, n, !1), En(e, t, f));
    ((l = t.stateNode), (Sp.current = t));
    var x =
      p && typeof n.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = Yr(t, e.child, null, f)), (t.child = Yr(t, null, x, f)))
        : vt(e, t, x, f),
      (t.memoizedState = l.state),
      a && Qu(t, n, !0),
      t.child
    );
  }
  function Vc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ku(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ku(e, t.context, !1),
      Pa(e, t.containerInfo));
  }
  function Wc(e, t, n, l, a) {
    return (Kr(), Sa(a), (t.flags |= 256), vt(e, t, n, l), t.child);
  }
  var Ka = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ya(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Kc(e, t, n) {
    var l = t.pendingProps,
      a = Qe.current,
      f = !1,
      p = (t.flags & 128) !== 0,
      x;
    if (
      ((x = p) ||
        (x = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      x
        ? ((f = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      Be(Qe, a & 1),
      e === null)
    )
      return (
        wa(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((p = l.children),
            (e = l.fallback),
            f
              ? ((l = t.mode),
                (f = t.child),
                (p = { mode: "hidden", children: p }),
                (l & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = p))
                  : (f = mo(p, l, 0, null)),
                (e = Er(e, l, n, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Ya(n)),
                (t.memoizedState = Ka),
                e)
              : Qa(t, p))
      );
    if (((a = e.memoizedState), a !== null && ((x = a.dehydrated), x !== null)))
      return kp(e, t, p, l, x, a, n);
    if (f) {
      ((f = l.fallback), (p = t.mode), (a = e.child), (x = a.sibling));
      var E = { mode: "hidden", children: l.children };
      return (
        (p & 1) === 0 && t.child !== a
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = E),
            (t.deletions = null))
          : ((l = Gn(a, E)), (l.subtreeFlags = a.subtreeFlags & 14680064)),
        x !== null ? (f = Gn(x, f)) : ((f = Er(f, p, n, null)), (f.flags |= 2)),
        (f.return = t),
        (l.return = t),
        (l.sibling = f),
        (t.child = l),
        (l = f),
        (f = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? Ya(n)
            : {
                baseLanes: p.baseLanes | n,
                cachePool: null,
                transitions: p.transitions,
              }),
        (f.memoizedState = p),
        (f.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ka),
        l
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (l = Gn(f, { mode: "visible", children: l.children })),
      (t.mode & 1) === 0 && (l.lanes = n),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Qa(e, t) {
    return (
      (t = mo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function to(e, t, n, l) {
    return (
      l !== null && Sa(l),
      Yr(t, e.child, null, n),
      (e = Qa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function kp(e, t, n, l, a, f, p) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Ha(Error(o(422)))), to(e, t, p, l))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((f = l.fallback),
            (a = t.mode),
            (l = mo({ mode: "visible", children: l.children }, a, 0, null)),
            (f = Er(f, a, p, null)),
            (f.flags |= 2),
            (l.return = t),
            (f.return = t),
            (l.sibling = f),
            (t.child = l),
            (t.mode & 1) !== 0 && Yr(t, e.child, null, p),
            (t.child.memoizedState = Ya(p)),
            (t.memoizedState = Ka),
            f);
    if ((t.mode & 1) === 0) return to(e, t, p, null);
    if (a.data === "$!") {
      if (((l = a.nextSibling && a.nextSibling.dataset), l)) var x = l.dgst;
      return (
        (l = x),
        (f = Error(o(419))),
        (l = Ha(f, l, void 0)),
        to(e, t, p, l)
      );
    }
    if (((x = (p & e.childLanes) !== 0), Rt || x)) {
      if (((l = at), l !== null)) {
        switch (p & -p) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        ((a = (a & (l.suspendedLanes | p)) !== 0 ? 0 : a),
          a !== 0 &&
            a !== f.retryLane &&
            ((f.retryLane = a), Sn(e, a), qt(l, e, a, -1)));
      }
      return (cs(), (l = Ha(Error(o(421)))), to(e, t, p, l));
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Dp.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = f.treeContext),
        (_t = $n(a.nextSibling)),
        (Mt = t),
        (Ye = !0),
        (Jt = null),
        e !== null &&
          ((It[$t++] = xn),
          (It[$t++] = wn),
          (It[$t++] = pr),
          (xn = e.id),
          (wn = e.overflow),
          (pr = t)),
        (t = Qa(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Yc(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Ra(e.return, t, n));
  }
  function Ja(e, t, n, l, a) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: a,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = n),
        (f.tailMode = a));
  }
  function Qc(e, t, n) {
    var l = t.pendingProps,
      a = l.revealOrder,
      f = l.tail;
    if ((vt(e, t, l.children, n), (l = Qe.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Yc(e, n, t);
          else if (e.tag === 19) Yc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    if ((Be(Qe, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (n = t.child, a = null; n !== null; )
            ((e = n.alternate),
              e !== null && Ql(e) === null && (a = n),
              (n = n.sibling));
          ((n = a),
            n === null
              ? ((a = t.child), (t.child = null))
              : ((a = n.sibling), (n.sibling = null)),
            Ja(t, !1, a, n, f));
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Ql(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
          }
          Ja(t, !0, n, null, f);
          break;
        case "together":
          Ja(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function no(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function En(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (xr |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Gn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Ep(e, t, n) {
    switch (t.tag) {
      case 3:
        (Vc(t), Kr());
        break;
      case 5:
        sc(t);
        break;
      case 1:
        Ct(t.type) && Il(t);
        break;
      case 4:
        Pa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          a = t.memoizedProps.value;
        (Be(Vl, l._currentValue), (l._currentValue = a));
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Be(Qe, Qe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Kc(e, t, n)
              : (Be(Qe, Qe.current & 1),
                (e = En(e, t, n)),
                e !== null ? e.sibling : null);
        Be(Qe, Qe.current & 1);
        break;
      case 19:
        if (((l = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return Qc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Be(Qe, Qe.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ac(e, t, n));
    }
    return En(e, t, n);
  }
  var Jc, Ga, Gc, Xc;
  ((Jc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Ga = function () {}),
    (Gc = function (e, t, n, l) {
      var a = e.memoizedProps;
      if (a !== l) {
        ((e = t.stateNode), yr(on.current));
        var f = null;
        switch (n) {
          case "input":
            ((a = jr(e, a)), (l = jr(e, l)), (f = []));
            break;
          case "select":
            ((a = W({}, a, { value: void 0 })),
              (l = W({}, l, { value: void 0 })),
              (f = []));
            break;
          case "textarea":
            ((a = si(e, a)), (l = si(e, l)), (f = []));
            break;
          default:
            typeof a.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = Dl);
        }
        Mr(n, l);
        var p;
        n = null;
        for (T in a)
          if (!l.hasOwnProperty(T) && a.hasOwnProperty(T) && a[T] != null)
            if (T === "style") {
              var x = a[T];
              for (p in x) x.hasOwnProperty(p) && (n || (n = {}), (n[p] = ""));
            } else
              T !== "dangerouslySetInnerHTML" &&
                T !== "children" &&
                T !== "suppressContentEditableWarning" &&
                T !== "suppressHydrationWarning" &&
                T !== "autoFocus" &&
                (s.hasOwnProperty(T)
                  ? f || (f = [])
                  : (f = f || []).push(T, null));
        for (T in l) {
          var E = l[T];
          if (
            ((x = a != null ? a[T] : void 0),
            l.hasOwnProperty(T) && E !== x && (E != null || x != null))
          )
            if (T === "style")
              if (x) {
                for (p in x)
                  !x.hasOwnProperty(p) ||
                    (E && E.hasOwnProperty(p)) ||
                    (n || (n = {}), (n[p] = ""));
                for (p in E)
                  E.hasOwnProperty(p) &&
                    x[p] !== E[p] &&
                    (n || (n = {}), (n[p] = E[p]));
              } else (n || (f || (f = []), f.push(T, n)), (n = E));
            else
              T === "dangerouslySetInnerHTML"
                ? ((E = E ? E.__html : void 0),
                  (x = x ? x.__html : void 0),
                  E != null && x !== E && (f = f || []).push(T, E))
                : T === "children"
                  ? (typeof E != "string" && typeof E != "number") ||
                    (f = f || []).push(T, "" + E)
                  : T !== "suppressContentEditableWarning" &&
                    T !== "suppressHydrationWarning" &&
                    (s.hasOwnProperty(T)
                      ? (E != null && T === "onScroll" && Ve("scroll", e),
                        f || x === E || (f = []))
                      : (f = f || []).push(T, E));
        }
        n && (f = f || []).push("style", n);
        var T = f;
        (t.updateQueue = T) && (t.flags |= 4);
      }
    }),
    (Xc = function (e, t, n, l) {
      n !== l && (t.flags |= 4);
    }));
  function Hi(e, t) {
    if (!Ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function ht(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        ((n |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags & 14680064),
          (l |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((n |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags),
          (l |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function Cp(e, t, n) {
    var l = t.pendingProps;
    switch ((va(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ht(t), null);
      case 1:
        return (Ct(t.type) && Fl(), ht(t), null);
      case 3:
        return (
          (l = t.stateNode),
          Gr(),
          We(Et),
          We(ft),
          Ma(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Hl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Jt !== null && (as(Jt), (Jt = null)))),
          Ga(e, t),
          ht(t),
          null
        );
      case 5:
        ja(t);
        var a = yr(Fi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Gc(e, t, n, l, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (ht(t), null);
          }
          if (((e = yr(on.current)), Hl(t))) {
            ((l = t.stateNode), (n = t.type));
            var f = t.memoizedProps;
            switch (((l[ln] = t), (l[_i] = f), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Ve("cancel", l), Ve("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", l);
                break;
              case "video":
              case "audio":
                for (a = 0; a < ji.length; a++) Ve(ji[a], l);
                break;
              case "source":
                Ve("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (Ve("error", l), Ve("load", l));
                break;
              case "details":
                Ve("toggle", l);
                break;
              case "input":
                (hl(l, f), Ve("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!f.multiple }),
                  Ve("invalid", l));
                break;
              case "textarea":
                (ml(l, f), Ve("invalid", l));
            }
            (Mr(n, f), (a = null));
            for (var p in f)
              if (f.hasOwnProperty(p)) {
                var x = f[p];
                p === "children"
                  ? typeof x == "string"
                    ? l.textContent !== x &&
                      (f.suppressHydrationWarning !== !0 &&
                        zl(l.textContent, x, e),
                      (a = ["children", x]))
                    : typeof x == "number" &&
                      l.textContent !== "" + x &&
                      (f.suppressHydrationWarning !== !0 &&
                        zl(l.textContent, x, e),
                      (a = ["children", "" + x]))
                  : s.hasOwnProperty(p) &&
                    x != null &&
                    p === "onScroll" &&
                    Ve("scroll", l);
              }
            switch (n) {
              case "input":
                (Pr(l), pl(l, f, !0));
                break;
              case "textarea":
                (Pr(l), Ln(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (l.onclick = Dl);
            }
            ((l = a), (t.updateQueue = l), l !== null && (t.flags |= 4));
          } else {
            ((p = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ui(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                    ? (e = p.createElement(n, { is: l.is }))
                    : ((e = p.createElement(n)),
                      n === "select" &&
                        ((p = e),
                        l.multiple
                          ? (p.multiple = !0)
                          : l.size && (p.size = l.size)))
                : (e = p.createElementNS(e, n)),
              (e[ln] = t),
              (e[_i] = l),
              Jc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((p = _r(n, l)), n)) {
                case "dialog":
                  (Ve("cancel", e), Ve("close", e), (a = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Ve("load", e), (a = l));
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < ji.length; a++) Ve(ji[a], e);
                  a = l;
                  break;
                case "source":
                  (Ve("error", e), (a = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (Ve("error", e), Ve("load", e), (a = l));
                  break;
                case "details":
                  (Ve("toggle", e), (a = l));
                  break;
                case "input":
                  (hl(e, l), (a = jr(e, l)), Ve("invalid", e));
                  break;
                case "option":
                  a = l;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!l.multiple }),
                    (a = W({}, l, { value: void 0 })),
                    Ve("invalid", e));
                  break;
                case "textarea":
                  (ml(e, l), (a = si(e, l)), Ve("invalid", e));
                  break;
                default:
                  a = l;
              }
              (Mr(n, a), (x = a));
              for (f in x)
                if (x.hasOwnProperty(f)) {
                  var E = x[f];
                  f === "style"
                    ? bt(e, E)
                    : f === "dangerouslySetInnerHTML"
                      ? ((E = E ? E.__html : void 0), E != null && Dt(e, E))
                      : f === "children"
                        ? typeof E == "string"
                          ? (n !== "textarea" || E !== "") && Pn(e, E)
                          : typeof E == "number" && Pn(e, "" + E)
                        : f !== "suppressContentEditableWarning" &&
                          f !== "suppressHydrationWarning" &&
                          f !== "autoFocus" &&
                          (s.hasOwnProperty(f)
                            ? E != null && f === "onScroll" && Ve("scroll", e)
                            : E != null && Q(e, f, E, p));
                }
              switch (n) {
                case "input":
                  (Pr(e), pl(e, l, !1));
                  break;
                case "textarea":
                  (Pr(e), Ln(e));
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + _e(l.value));
                  break;
                case "select":
                  ((e.multiple = !!l.multiple),
                    (f = l.value),
                    f != null
                      ? Nn(e, !!l.multiple, f, !1)
                      : l.defaultValue != null &&
                        Nn(e, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Dl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (ht(t), null);
      case 6:
        if (e && t.stateNode != null) Xc(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = yr(Fi.current)), yr(on.current), Hl(t))) {
            if (
              ((l = t.stateNode),
              (n = t.memoizedProps),
              (l[ln] = t),
              (f = l.nodeValue !== n) && ((e = Mt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  zl(l.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    zl(l.nodeValue, n, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else
            ((l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l)),
              (l[ln] = t),
              (t.stateNode = l));
        }
        return (ht(t), null);
      case 13:
        if (
          (We(Qe),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ye && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ec(), Kr(), (t.flags |= 98560), (f = !1));
          else if (((f = Hl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(o(318));
              if (
                ((f = t.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(o(317));
              f[ln] = t;
            } else
              (Kr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ht(t), (f = !1));
          } else (Jt !== null && (as(Jt), (Jt = null)), (f = !0));
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Qe.current & 1) !== 0
                  ? it === 0 && (it = 3)
                  : cs())),
            t.updateQueue !== null && (t.flags |= 4),
            ht(t),
            null);
      case 4:
        return (
          Gr(),
          Ga(e, t),
          e === null && Oi(t.stateNode.containerInfo),
          ht(t),
          null
        );
      case 10:
        return (Ca(t.type._context), ht(t), null);
      case 17:
        return (Ct(t.type) && Fl(), ht(t), null);
      case 19:
        if ((We(Qe), (f = t.memoizedState), f === null)) return (ht(t), null);
        if (((l = (t.flags & 128) !== 0), (p = f.rendering), p === null))
          if (l) Hi(f, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = Ql(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      Hi(f, !1),
                      l = p.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = n,
                      n = t.child;
                    n !== null;
                  )
                    ((f = n),
                      (e = l),
                      (f.flags &= 14680066),
                      (p = f.alternate),
                      p === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = p.childLanes),
                          (f.lanes = p.lanes),
                          (f.child = p.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = p.memoizedProps),
                          (f.memoizedState = p.memoizedState),
                          (f.updateQueue = p.updateQueue),
                          (f.type = p.type),
                          (e = p.dependencies),
                          (f.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (Be(Qe, (Qe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            f.tail !== null &&
              $e() > ei &&
              ((t.flags |= 128), (l = !0), Hi(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Ql(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Hi(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !p.alternate &&
                  !Ye)
              )
                return (ht(t), null);
            } else
              2 * $e() - f.renderingStartTime > ei &&
                n !== 1073741824 &&
                ((t.flags |= 128), (l = !0), Hi(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((n = f.last),
              n !== null ? (n.sibling = p) : (t.child = p),
              (f.last = p));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = $e()),
            (t.sibling = null),
            (n = Qe.current),
            Be(Qe, l ? (n & 1) | 2 : n & 1),
            t)
          : (ht(t), null);
      case 22:
      case 23:
        return (
          us(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
            ? (Tt & 1073741824) !== 0 &&
              (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ht(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Rp(e, t) {
    switch ((va(t), t.tag)) {
      case 1:
        return (
          Ct(t.type) && Fl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gr(),
          We(Et),
          We(ft),
          Ma(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (ja(t), null);
      case 13:
        if (
          (We(Qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Kr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (We(Qe), null);
      case 4:
        return (Gr(), null);
      case 10:
        return (Ca(t.type._context), null);
      case 22:
      case 23:
        return (us(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ro = !1,
    pt = !1,
    Np = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
  function Zr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Ge(e, t, l);
        }
      else n.current = null;
  }
  function Xa(e, t, n) {
    try {
      n();
    } catch (l) {
      Ge(e, t, l);
    }
  }
  var Zc = !1;
  function Lp(e, t) {
    if (((ua = El), (e = Ou()), ta(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, f.nodeType);
            } catch {
              n = null;
              break e;
            }
            var p = 0,
              x = -1,
              E = -1,
              T = 0,
              H = 0,
              B = e,
              U = null;
            t: for (;;) {
              for (
                var G;
                B !== n || (a !== 0 && B.nodeType !== 3) || (x = p + a),
                  B !== f || (l !== 0 && B.nodeType !== 3) || (E = p + l),
                  B.nodeType === 3 && (p += B.nodeValue.length),
                  (G = B.firstChild) !== null;
              )
                ((U = B), (B = G));
              for (;;) {
                if (B === e) break t;
                if (
                  (U === n && ++T === a && (x = p),
                  U === f && ++H === l && (E = p),
                  (G = B.nextSibling) !== null)
                )
                  break;
                ((B = U), (U = B.parentNode));
              }
              B = G;
            }
            n = x === -1 || E === -1 ? null : { start: x, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ca = { focusedElem: e, selectionRange: n }, El = !1, Z = t;
      Z !== null;
    )
      if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (Z = e));
      else
        for (; Z !== null; ) {
          t = Z;
          try {
            var ne = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ne !== null) {
                    var oe = ne.memoizedProps,
                      Ze = ne.memoizedState,
                      P = t.stateNode,
                      R = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? oe : Gt(t.type, oe),
                        Ze,
                      );
                    P.__reactInternalSnapshotBeforeUpdate = R;
                  }
                  break;
                case 3:
                  var M = t.stateNode.containerInfo;
                  M.nodeType === 1
                    ? (M.textContent = "")
                    : M.nodeType === 9 &&
                      M.documentElement &&
                      M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (V) {
            Ge(t, t.return, V);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Z = e));
            break;
          }
          Z = t.return;
        }
    return ((ne = Zc), (Zc = !1), ne);
  }
  function Bi(e, t, n) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var a = (l = l.next);
      do {
        if ((a.tag & e) === e) {
          var f = a.destroy;
          ((a.destroy = void 0), f !== void 0 && Xa(t, n, f));
        }
        a = a.next;
      } while (a !== l);
    }
  }
  function io(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var l = n.create;
          n.destroy = l();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Za(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function qc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), qc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[ln],
          delete t[_i],
          delete t[pa],
          delete t[up],
          delete t[cp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ef(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function tf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ef(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function qa(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Dl)));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (qa(e, t, n), e = e.sibling; e !== null; )
        (qa(e, t, n), (e = e.sibling));
  }
  function es(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (es(e, t, n), e = e.sibling; e !== null; )
        (es(e, t, n), (e = e.sibling));
  }
  var ut = null,
    Xt = !1;
  function Wn(e, t, n) {
    for (n = n.child; n !== null; ) (nf(e, t, n), (n = n.sibling));
  }
  function nf(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(pn, n);
      } catch {}
    switch (n.tag) {
      case 5:
        pt || Zr(n, t);
      case 6:
        var l = ut,
          a = Xt;
        ((ut = null),
          Wn(e, t, n),
          (ut = l),
          (Xt = a),
          ut !== null &&
            (Xt
              ? ((e = ut),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ut.removeChild(n.stateNode)));
        break;
      case 18:
        ut !== null &&
          (Xt
            ? ((e = ut),
              (n = n.stateNode),
              e.nodeType === 8
                ? ha(e.parentNode, n)
                : e.nodeType === 1 && ha(e, n),
              Si(e))
            : ha(ut, n.stateNode));
        break;
      case 4:
        ((l = ut),
          (a = Xt),
          (ut = n.stateNode.containerInfo),
          (Xt = !0),
          Wn(e, t, n),
          (ut = l),
          (Xt = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !pt &&
          ((l = n.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          a = l = l.next;
          do {
            var f = a,
              p = f.destroy;
            ((f = f.tag),
              p !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Xa(n, t, p),
              (a = a.next));
          } while (a !== l);
        }
        Wn(e, t, n);
        break;
      case 1:
        if (
          !pt &&
          (Zr(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            ((l.props = n.memoizedProps),
              (l.state = n.memoizedState),
              l.componentWillUnmount());
          } catch (x) {
            Ge(n, t, x);
          }
        Wn(e, t, n);
        break;
      case 21:
        Wn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((pt = (l = pt) || n.memoizedState !== null), Wn(e, t, n), (pt = l))
          : Wn(e, t, n);
        break;
      default:
        Wn(e, t, n);
    }
  }
  function rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Np()),
        t.forEach(function (l) {
          var a = bp.bind(null, e, l);
          n.has(l) || (n.add(l), l.then(a, a));
        }));
    }
  }
  function Zt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l];
        try {
          var f = e,
            p = t,
            x = p;
          e: for (; x !== null; ) {
            switch (x.tag) {
              case 5:
                ((ut = x.stateNode), (Xt = !1));
                break e;
              case 3:
                ((ut = x.stateNode.containerInfo), (Xt = !0));
                break e;
              case 4:
                ((ut = x.stateNode.containerInfo), (Xt = !0));
                break e;
            }
            x = x.return;
          }
          if (ut === null) throw Error(o(160));
          (nf(f, p, a), (ut = null), (Xt = !1));
          var E = a.alternate;
          (E !== null && (E.return = null), (a.return = null));
        } catch (T) {
          Ge(a, t, T);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (lf(t, e), (t = t.sibling));
  }
  function lf(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Zt(t, e), sn(e), l & 4)) {
          try {
            (Bi(3, e, e.return), io(3, e));
          } catch (oe) {
            Ge(e, e.return, oe);
          }
          try {
            Bi(5, e, e.return);
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        }
        break;
      case 1:
        (Zt(t, e), sn(e), l & 512 && n !== null && Zr(n, n.return));
        break;
      case 5:
        if (
          (Zt(t, e),
          sn(e),
          l & 512 && n !== null && Zr(n, n.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            Pn(a, "");
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        }
        if (l & 4 && ((a = e.stateNode), a != null)) {
          var f = e.memoizedProps,
            p = n !== null ? n.memoizedProps : f,
            x = e.type,
            E = e.updateQueue;
          if (((e.updateQueue = null), E !== null))
            try {
              (x === "input" &&
                f.type === "radio" &&
                f.name != null &&
                en(a, f),
                _r(x, p));
              var T = _r(x, f);
              for (p = 0; p < E.length; p += 2) {
                var H = E[p],
                  B = E[p + 1];
                H === "style"
                  ? bt(a, B)
                  : H === "dangerouslySetInnerHTML"
                    ? Dt(a, B)
                    : H === "children"
                      ? Pn(a, B)
                      : Q(a, H, B, T);
              }
              switch (x) {
                case "input":
                  ai(a, f);
                  break;
                case "textarea":
                  tn(a, f);
                  break;
                case "select":
                  var U = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!f.multiple;
                  var G = f.value;
                  G != null
                    ? Nn(a, !!f.multiple, G, !1)
                    : U !== !!f.multiple &&
                      (f.defaultValue != null
                        ? Nn(a, !!f.multiple, f.defaultValue, !0)
                        : Nn(a, !!f.multiple, f.multiple ? [] : "", !1));
              }
              a[_i] = f;
            } catch (oe) {
              Ge(e, e.return, oe);
            }
        }
        break;
      case 6:
        if ((Zt(t, e), sn(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((a = e.stateNode), (f = e.memoizedProps));
          try {
            a.nodeValue = f;
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (
          (Zt(t, e), sn(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Si(t.containerInfo);
          } catch (oe) {
            Ge(e, e.return, oe);
          }
        break;
      case 4:
        (Zt(t, e), sn(e));
        break;
      case 13:
        (Zt(t, e),
          sn(e),
          (a = e.child),
          a.flags & 8192 &&
            ((f = a.memoizedState !== null),
            (a.stateNode.isHidden = f),
            !f ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (rs = $e())),
          l & 4 && rf(e));
        break;
      case 22:
        if (
          ((H = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((pt = (T = pt) || H), Zt(t, e), (pt = T)) : Zt(t, e),
          sn(e),
          l & 8192)
        ) {
          if (
            ((T = e.memoizedState !== null),
            (e.stateNode.isHidden = T) && !H && (e.mode & 1) !== 0)
          )
            for (Z = e, H = e.child; H !== null; ) {
              for (B = Z = H; Z !== null; ) {
                switch (((U = Z), (G = U.child), U.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bi(4, U, U.return);
                    break;
                  case 1:
                    Zr(U, U.return);
                    var ne = U.stateNode;
                    if (typeof ne.componentWillUnmount == "function") {
                      ((l = U), (n = U.return));
                      try {
                        ((t = l),
                          (ne.props = t.memoizedProps),
                          (ne.state = t.memoizedState),
                          ne.componentWillUnmount());
                      } catch (oe) {
                        Ge(l, n, oe);
                      }
                    }
                    break;
                  case 5:
                    Zr(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      sf(B);
                      continue;
                    }
                }
                G !== null ? ((G.return = U), (Z = G)) : sf(B);
              }
              H = H.sibling;
            }
          e: for (H = null, B = e; ; ) {
            if (B.tag === 5) {
              if (H === null) {
                H = B;
                try {
                  ((a = B.stateNode),
                    T
                      ? ((f = a.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"))
                      : ((x = B.stateNode),
                        (E = B.memoizedProps.style),
                        (p =
                          E != null && E.hasOwnProperty("display")
                            ? E.display
                            : null),
                        (x.style.display = gl("display", p))));
                } catch (oe) {
                  Ge(e, e.return, oe);
                }
              }
            } else if (B.tag === 6) {
              if (H === null)
                try {
                  B.stateNode.nodeValue = T ? "" : B.memoizedProps;
                } catch (oe) {
                  Ge(e, e.return, oe);
                }
            } else if (
              ((B.tag !== 22 && B.tag !== 23) ||
                B.memoizedState === null ||
                B === e) &&
              B.child !== null
            ) {
              ((B.child.return = B), (B = B.child));
              continue;
            }
            if (B === e) break e;
            for (; B.sibling === null; ) {
              if (B.return === null || B.return === e) break e;
              (H === B && (H = null), (B = B.return));
            }
            (H === B && (H = null),
              (B.sibling.return = B.return),
              (B = B.sibling));
          }
        }
        break;
      case 19:
        (Zt(t, e), sn(e), l & 4 && rf(e));
        break;
      case 21:
        break;
      default:
        (Zt(t, e), sn(e));
    }
  }
  function sn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ef(n)) {
              var l = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var a = l.stateNode;
            l.flags & 32 && (Pn(a, ""), (l.flags &= -33));
            var f = tf(e);
            es(e, f, a);
            break;
          case 3:
          case 4:
            var p = l.stateNode.containerInfo,
              x = tf(e);
            qa(e, x, p);
            break;
          default:
            throw Error(o(161));
        }
      } catch (E) {
        Ge(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pp(e, t, n) {
    ((Z = e), of(e));
  }
  function of(e, t, n) {
    for (var l = (e.mode & 1) !== 0; Z !== null; ) {
      var a = Z,
        f = a.child;
      if (a.tag === 22 && l) {
        var p = a.memoizedState !== null || ro;
        if (!p) {
          var x = a.alternate,
            E = (x !== null && x.memoizedState !== null) || pt;
          x = ro;
          var T = pt;
          if (((ro = p), (pt = E) && !T))
            for (Z = a; Z !== null; )
              ((p = Z),
                (E = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? uf(a)
                  : E !== null
                    ? ((E.return = p), (Z = E))
                    : uf(a));
          for (; f !== null; ) ((Z = f), of(f), (f = f.sibling));
          ((Z = a), (ro = x), (pt = T));
        }
        af(e);
      } else
        (a.subtreeFlags & 8772) !== 0 && f !== null
          ? ((f.return = a), (Z = f))
          : af(e);
    }
  }
  function af(e) {
    for (; Z !== null; ) {
      var t = Z;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                pt || io(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !pt)
                  if (n === null) l.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Gt(t.type, n.memoizedProps);
                    l.componentDidUpdate(
                      a,
                      n.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var f = t.updateQueue;
                f !== null && ac(t, f, l);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ac(t, p, n);
                }
                break;
              case 5:
                var x = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = x;
                  var E = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      E.autoFocus && n.focus();
                      break;
                    case "img":
                      E.src && (n.src = E.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var T = t.alternate;
                  if (T !== null) {
                    var H = T.memoizedState;
                    if (H !== null) {
                      var B = H.dehydrated;
                      B !== null && Si(B);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          pt || (t.flags & 512 && Za(t));
        } catch (U) {
          Ge(t, t.return, U);
        }
      }
      if (t === e) {
        Z = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (Z = n));
        break;
      }
      Z = t.return;
    }
  }
  function sf(e) {
    for (; Z !== null; ) {
      var t = Z;
      if (t === e) {
        Z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Z = n));
        break;
      }
      Z = t.return;
    }
  }
  function uf(e) {
    for (; Z !== null; ) {
      var t = Z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              io(4, t);
            } catch (E) {
              Ge(t, n, E);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var a = t.return;
              try {
                l.componentDidMount();
              } catch (E) {
                Ge(t, a, E);
              }
            }
            var f = t.return;
            try {
              Za(t);
            } catch (E) {
              Ge(t, f, E);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Za(t);
            } catch (E) {
              Ge(t, p, E);
            }
        }
      } catch (E) {
        Ge(t, t.return, E);
      }
      if (t === e) {
        Z = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        ((x.return = t.return), (Z = x));
        break;
      }
      Z = t.return;
    }
  }
  var jp = Math.ceil,
    lo = re.ReactCurrentDispatcher,
    ts = re.ReactCurrentOwner,
    Ht = re.ReactCurrentBatchConfig,
    De = 0,
    at = null,
    et = null,
    ct = 0,
    Tt = 0,
    qr = Un(0),
    it = 0,
    Vi = null,
    xr = 0,
    oo = 0,
    ns = 0,
    Wi = null,
    Nt = null,
    rs = 0,
    ei = 1 / 0,
    Cn = null,
    ao = !1,
    is = null,
    Kn = null,
    so = !1,
    Yn = null,
    uo = 0,
    Ki = 0,
    ls = null,
    co = -1,
    fo = 0;
  function xt() {
    return (De & 6) !== 0 ? $e() : co !== -1 ? co : (co = $e());
  }
  function Qn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (De & 2) !== 0 && ct !== 0
        ? ct & -ct
        : dp.transition !== null
          ? (fo === 0 && (fo = tu()), fo)
          : ((e = Ue),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : cu(e.type))),
            e);
  }
  function qt(e, t, n, l) {
    if (50 < Ki) throw ((Ki = 0), (ls = null), Error(o(185)));
    (gi(e, n, l),
      ((De & 2) === 0 || e !== at) &&
        (e === at && ((De & 2) === 0 && (oo |= n), it === 4 && Jn(e, ct)),
        Lt(e, l),
        n === 1 &&
          De === 0 &&
          (t.mode & 1) === 0 &&
          ((ei = $e() + 500), $l && Hn())));
  }
  function Lt(e, t) {
    var n = e.callbackNode;
    dh(e, t);
    var l = wl(e, e === at ? ct : 0);
    if (l === 0)
      (n !== null && lt(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((n != null && lt(n), t === 1))
        (e.tag === 0 ? fp(ff.bind(null, e)) : Ju(ff.bind(null, e)),
          ap(function () {
            (De & 6) === 0 && Hn();
          }),
          (n = null));
      else {
        switch (nu(l)) {
          case 1:
            n = Ft;
            break;
          case 4:
            n = jt;
            break;
          case 16:
            n = Mn;
            break;
          case 536870912:
            n = rn;
            break;
          default:
            n = Mn;
        }
        n = xf(n, cf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function cf(e, t) {
    if (((co = -1), (fo = 0), (De & 6) !== 0)) throw Error(o(327));
    var n = e.callbackNode;
    if (ti() && e.callbackNode !== n) return null;
    var l = wl(e, e === at ? ct : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = ho(e, l);
    else {
      t = l;
      var a = De;
      De |= 2;
      var f = hf();
      (at !== e || ct !== t) && ((Cn = null), (ei = $e() + 500), Sr(e, t));
      do
        try {
          _p();
          break;
        } catch (x) {
          df(e, x);
        }
      while (!0);
      (Ea(),
        (lo.current = f),
        (De = a),
        et !== null ? (t = 0) : ((at = null), (ct = 0), (t = it)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = $o(e)), a !== 0 && ((l = a), (t = os(e, a)))),
        t === 1)
      )
        throw ((n = Vi), Sr(e, 0), Jn(e, l), Lt(e, $e()), n);
      if (t === 6) Jn(e, l);
      else {
        if (
          ((a = e.current.alternate),
          (l & 30) === 0 &&
            !Op(a) &&
            ((t = ho(e, l)),
            t === 2 && ((f = $o(e)), f !== 0 && ((l = f), (t = os(e, f)))),
            t === 1))
        )
          throw ((n = Vi), Sr(e, 0), Jn(e, l), Lt(e, $e()), n);
        switch (((e.finishedWork = a), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            kr(e, Nt, Cn);
            break;
          case 3:
            if (
              (Jn(e, l),
              (l & 130023424) === l && ((t = rs + 500 - $e()), 10 < t))
            ) {
              if (wl(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & l) !== l)) {
                (xt(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = da(kr.bind(null, e, Nt, Cn), t);
              break;
            }
            kr(e, Nt, Cn);
            break;
          case 4:
            if ((Jn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, a = -1; 0 < l; ) {
              var p = 31 - Ae(l);
              ((f = 1 << p), (p = t[p]), p > a && (a = p), (l &= ~f));
            }
            if (
              ((l = a),
              (l = $e() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * jp(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = da(kr.bind(null, e, Nt, Cn), l);
              break;
            }
            kr(e, Nt, Cn);
            break;
          case 5:
            kr(e, Nt, Cn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return (Lt(e, $e()), e.callbackNode === n ? cf.bind(null, e) : null);
  }
  function os(e, t) {
    var n = Wi;
    return (
      e.current.memoizedState.isDehydrated && (Sr(e, t).flags |= 256),
      (e = ho(e, t)),
      e !== 2 && ((t = Nt), (Nt = n), t !== null && as(t)),
      e
    );
  }
  function as(e) {
    Nt === null ? (Nt = e) : Nt.push.apply(Nt, e);
  }
  function Op(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var l = 0; l < n.length; l++) {
            var a = n[l],
              f = a.getSnapshot;
            a = a.value;
            try {
              if (!Qt(f(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Jn(e, t) {
    for (
      t &= ~ns,
        t &= ~oo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Ae(t),
        l = 1 << n;
      ((e[n] = -1), (t &= ~l));
    }
  }
  function ff(e) {
    if ((De & 6) !== 0) throw Error(o(327));
    ti();
    var t = wl(e, 0);
    if ((t & 1) === 0) return (Lt(e, $e()), null);
    var n = ho(e, t);
    if (e.tag !== 0 && n === 2) {
      var l = $o(e);
      l !== 0 && ((t = l), (n = os(e, l)));
    }
    if (n === 1) throw ((n = Vi), Sr(e, 0), Jn(e, t), Lt(e, $e()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      kr(e, Nt, Cn),
      Lt(e, $e()),
      null
    );
  }
  function ss(e, t) {
    var n = De;
    De |= 1;
    try {
      return e(t);
    } finally {
      ((De = n), De === 0 && ((ei = $e() + 500), $l && Hn()));
    }
  }
  function wr(e) {
    Yn !== null && Yn.tag === 0 && (De & 6) === 0 && ti();
    var t = De;
    De |= 1;
    var n = Ht.transition,
      l = Ue;
    try {
      if (((Ht.transition = null), (Ue = 1), e)) return e();
    } finally {
      ((Ue = l), (Ht.transition = n), (De = t), (De & 6) === 0 && Hn());
    }
  }
  function us() {
    ((Tt = qr.current), We(qr));
  }
  function Sr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), op(n)), et !== null))
      for (n = et.return; n !== null; ) {
        var l = n;
        switch ((va(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && Fl());
            break;
          case 3:
            (Gr(), We(Et), We(ft), Ma());
            break;
          case 5:
            ja(l);
            break;
          case 4:
            Gr();
            break;
          case 13:
            We(Qe);
            break;
          case 19:
            We(Qe);
            break;
          case 10:
            Ca(l.type._context);
            break;
          case 22:
          case 23:
            us();
        }
        n = n.return;
      }
    if (
      ((at = e),
      (et = e = Gn(e.current, null)),
      (ct = Tt = t),
      (it = 0),
      (Vi = null),
      (ns = oo = xr = 0),
      (Nt = Wi = null),
      gr !== null)
    ) {
      for (t = 0; t < gr.length; t++)
        if (((n = gr[t]), (l = n.interleaved), l !== null)) {
          n.interleaved = null;
          var a = l.next,
            f = n.pending;
          if (f !== null) {
            var p = f.next;
            ((f.next = a), (l.next = p));
          }
          n.pending = l;
        }
      gr = null;
    }
    return e;
  }
  function df(e, t) {
    do {
      var n = et;
      try {
        if ((Ea(), (Jl.current = ql), Gl)) {
          for (var l = Je.memoizedState; l !== null; ) {
            var a = l.queue;
            (a !== null && (a.pending = null), (l = l.next));
          }
          Gl = !1;
        }
        if (
          ((vr = 0),
          (ot = rt = Je = null),
          (Ii = !1),
          ($i = 0),
          (ts.current = null),
          n === null || n.return === null)
        ) {
          ((it = 1), (Vi = t), (et = null));
          break;
        }
        e: {
          var f = e,
            p = n.return,
            x = n,
            E = t;
          if (
            ((t = ct),
            (x.flags |= 32768),
            E !== null && typeof E == "object" && typeof E.then == "function")
          ) {
            var T = E,
              H = x,
              B = H.tag;
            if ((H.mode & 1) === 0 && (B === 0 || B === 11 || B === 15)) {
              var U = H.alternate;
              U
                ? ((H.updateQueue = U.updateQueue),
                  (H.memoizedState = U.memoizedState),
                  (H.lanes = U.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var G = bc(p);
            if (G !== null) {
              ((G.flags &= -257),
                Fc(G, p, x, f, t),
                G.mode & 1 && Dc(f, T, t),
                (t = G),
                (E = T));
              var ne = t.updateQueue;
              if (ne === null) {
                var oe = new Set();
                (oe.add(E), (t.updateQueue = oe));
              } else ne.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Dc(f, T, t), cs());
                break e;
              }
              E = Error(o(426));
            }
          } else if (Ye && x.mode & 1) {
            var Ze = bc(p);
            if (Ze !== null) {
              ((Ze.flags & 65536) === 0 && (Ze.flags |= 256),
                Fc(Ze, p, x, f, t),
                Sa(Xr(E, x)));
              break e;
            }
          }
          ((f = E = Xr(E, x)),
            it !== 4 && (it = 2),
            Wi === null ? (Wi = [f]) : Wi.push(f),
            (f = p));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                var P = Tc(f, E, t);
                oc(f, P);
                break e;
              case 1:
                x = E;
                var R = f.type,
                  M = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof R.getDerivedStateFromError == "function" ||
                    (M !== null &&
                      typeof M.componentDidCatch == "function" &&
                      (Kn === null || !Kn.has(M))))
                ) {
                  ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                  var V = zc(f, x, t);
                  oc(f, V);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        mf(n);
      } catch (se) {
        ((t = se), et === n && n !== null && (et = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function hf() {
    var e = lo.current;
    return ((lo.current = ql), e === null ? ql : e);
  }
  function cs() {
    ((it === 0 || it === 3 || it === 2) && (it = 4),
      at === null ||
        ((xr & 268435455) === 0 && (oo & 268435455) === 0) ||
        Jn(at, ct));
  }
  function ho(e, t) {
    var n = De;
    De |= 2;
    var l = hf();
    (at !== e || ct !== t) && ((Cn = null), Sr(e, t));
    do
      try {
        Mp();
        break;
      } catch (a) {
        df(e, a);
      }
    while (!0);
    if ((Ea(), (De = n), (lo.current = l), et !== null)) throw Error(o(261));
    return ((at = null), (ct = 0), it);
  }
  function Mp() {
    for (; et !== null; ) pf(et);
  }
  function _p() {
    for (; et !== null && !Ie(); ) pf(et);
  }
  function pf(e) {
    var t = vf(e.alternate, e, Tt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? mf(e) : (et = t),
      (ts.current = null));
  }
  function mf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Cp(n, t, Tt)), n !== null)) {
          et = n;
          return;
        }
      } else {
        if (((n = Rp(n, t)), n !== null)) {
          ((n.flags &= 32767), (et = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((it = 6), (et = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function kr(e, t, n) {
    var l = Ue,
      a = Ht.transition;
    try {
      ((Ht.transition = null), (Ue = 1), Tp(e, t, n, l));
    } finally {
      ((Ht.transition = a), (Ue = l));
    }
    return null;
  }
  function Tp(e, t, n, l) {
    do ti();
    while (Yn !== null);
    if ((De & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var f = n.lanes | n.childLanes;
    if (
      (hh(e, f),
      e === at && ((et = at = null), (ct = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        so ||
        ((so = !0),
        xf(Mn, function () {
          return (ti(), null);
        })),
      (f = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = Ht.transition), (Ht.transition = null));
      var p = Ue;
      Ue = 1;
      var x = De;
      ((De |= 4),
        (ts.current = null),
        Lp(e, n),
        lf(n, e),
        qh(ca),
        (El = !!ua),
        (ca = ua = null),
        (e.current = n),
        Pp(n),
        kt(),
        (De = x),
        (Ue = p),
        (Ht.transition = f));
    } else e.current = n;
    if (
      (so && ((so = !1), (Yn = e), (uo = a)),
      (f = e.pendingLanes),
      f === 0 && (Kn = null),
      ze(n.stateNode),
      Lt(e, $e()),
      t !== null)
    )
      for (l = e.onRecoverableError, n = 0; n < t.length; n++)
        ((a = t[n]), l(a.value, { componentStack: a.stack, digest: a.digest }));
    if (ao) throw ((ao = !1), (e = is), (is = null), e);
    return (
      (uo & 1) !== 0 && e.tag !== 0 && ti(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === ls ? Ki++ : ((Ki = 0), (ls = e))) : (Ki = 0),
      Hn(),
      null
    );
  }
  function ti() {
    if (Yn !== null) {
      var e = nu(uo),
        t = Ht.transition,
        n = Ue;
      try {
        if (((Ht.transition = null), (Ue = 16 > e ? 16 : e), Yn === null))
          var l = !1;
        else {
          if (((e = Yn), (Yn = null), (uo = 0), (De & 6) !== 0))
            throw Error(o(331));
          var a = De;
          for (De |= 4, Z = e.current; Z !== null; ) {
            var f = Z,
              p = f.child;
            if ((Z.flags & 16) !== 0) {
              var x = f.deletions;
              if (x !== null) {
                for (var E = 0; E < x.length; E++) {
                  var T = x[E];
                  for (Z = T; Z !== null; ) {
                    var H = Z;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bi(8, H, f);
                    }
                    var B = H.child;
                    if (B !== null) ((B.return = H), (Z = B));
                    else
                      for (; Z !== null; ) {
                        H = Z;
                        var U = H.sibling,
                          G = H.return;
                        if ((qc(H), H === T)) {
                          Z = null;
                          break;
                        }
                        if (U !== null) {
                          ((U.return = G), (Z = U));
                          break;
                        }
                        Z = G;
                      }
                  }
                }
                var ne = f.alternate;
                if (ne !== null) {
                  var oe = ne.child;
                  if (oe !== null) {
                    ne.child = null;
                    do {
                      var Ze = oe.sibling;
                      ((oe.sibling = null), (oe = Ze));
                    } while (oe !== null);
                  }
                }
                Z = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && p !== null)
              ((p.return = f), (Z = p));
            else
              e: for (; Z !== null; ) {
                if (((f = Z), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(9, f, f.return);
                  }
                var P = f.sibling;
                if (P !== null) {
                  ((P.return = f.return), (Z = P));
                  break e;
                }
                Z = f.return;
              }
          }
          var R = e.current;
          for (Z = R; Z !== null; ) {
            p = Z;
            var M = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && M !== null)
              ((M.return = p), (Z = M));
            else
              e: for (p = R; Z !== null; ) {
                if (((x = Z), (x.flags & 2048) !== 0))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        io(9, x);
                    }
                  } catch (se) {
                    Ge(x, x.return, se);
                  }
                if (x === p) {
                  Z = null;
                  break e;
                }
                var V = x.sibling;
                if (V !== null) {
                  ((V.return = x.return), (Z = V));
                  break e;
                }
                Z = x.return;
              }
          }
          if (
            ((De = a),
            Hn(),
            yt && typeof yt.onPostCommitFiberRoot == "function")
          )
            try {
              yt.onPostCommitFiberRoot(pn, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((Ue = n), (Ht.transition = t));
      }
    }
    return !1;
  }
  function gf(e, t, n) {
    ((t = Xr(n, t)),
      (t = Tc(e, t, 1)),
      (e = Vn(e, t, 1)),
      (t = xt()),
      e !== null && (gi(e, 1, t), Lt(e, t)));
  }
  function Ge(e, t, n) {
    if (e.tag === 3) gf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Kn === null || !Kn.has(l)))
          ) {
            ((e = Xr(n, e)),
              (e = zc(t, e, 1)),
              (t = Vn(t, e, 1)),
              (e = xt()),
              t !== null && (gi(t, 1, e), Lt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function zp(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (t = xt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      at === e &&
        (ct & n) === n &&
        (it === 4 || (it === 3 && (ct & 130023424) === ct && 500 > $e() - rs)
          ? Sr(e, 0)
          : (ns |= n)),
      Lt(e, t));
  }
  function yf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = cr), (cr <<= 1), (cr & 130023424) === 0 && (cr = 4194304)));
    var n = xt();
    ((e = Sn(e, t)), e !== null && (gi(e, t, n), Lt(e, n)));
  }
  function Dp(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), yf(e, n));
  }
  function bp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(t), yf(e, n));
  }
  var vf;
  vf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Et.current) Rt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Rt = !1), Ep(e, t, n));
        Rt = (e.flags & 131072) !== 0;
      }
    else ((Rt = !1), Ye && (t.flags & 1048576) !== 0 && Gu(t, Al, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        (no(e, t), (e = t.pendingProps));
        var a = Br(t, ft.current);
        (Jr(t, n), (a = za(null, t, l, e, a, n)));
        var f = Da();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ct(l) ? ((f = !0), Il(t)) : (f = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              La(t),
              (a.updater = eo),
              (t.stateNode = a),
              (a._reactInternals = t),
              Aa(t, l, e, n),
              (t = Wa(null, t, l, !0, f, n)))
            : ((t.tag = 0), Ye && f && ya(t), vt(null, t, a, n), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (no(e, t),
            (e = t.pendingProps),
            (a = l._init),
            (l = a(l._payload)),
            (t.type = l),
            (a = t.tag = Ip(l)),
            (e = Gt(l, e)),
            a)
          ) {
            case 0:
              t = Va(null, t, l, e, n);
              break e;
            case 1:
              t = Bc(null, t, l, e, n);
              break e;
            case 11:
              t = Ic(null, t, l, e, n);
              break e;
            case 14:
              t = $c(null, t, l, Gt(l.type, e), n);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Gt(l, a)),
          Va(e, t, l, a, n)
        );
      case 1:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Gt(l, a)),
          Bc(e, t, l, a, n)
        );
      case 3:
        e: {
          if ((Vc(t), e === null)) throw Error(o(387));
          ((l = t.pendingProps),
            (f = t.memoizedState),
            (a = f.element),
            lc(e, t),
            Yl(t, l, null, n));
          var p = t.memoizedState;
          if (((l = p.element), f.isDehydrated))
            if (
              ((f = {
                element: l,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              ((a = Xr(Error(o(423)), t)), (t = Wc(e, t, l, n, a)));
              break e;
            } else if (l !== a) {
              ((a = Xr(Error(o(424)), t)), (t = Wc(e, t, l, n, a)));
              break e;
            } else
              for (
                _t = $n(t.stateNode.containerInfo.firstChild),
                  Mt = t,
                  Ye = !0,
                  Jt = null,
                  n = rc(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Kr(), l === a)) {
              t = En(e, t, n);
              break e;
            }
            vt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          sc(t),
          e === null && wa(t),
          (l = t.type),
          (a = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (p = a.children),
          fa(l, a) ? (p = null) : f !== null && fa(l, f) && (t.flags |= 32),
          Hc(e, t),
          vt(e, t, p, n),
          t.child
        );
      case 6:
        return (e === null && wa(t), null);
      case 13:
        return Kc(e, t, n);
      case 4:
        return (
          Pa(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Yr(t, null, l, n)) : vt(e, t, l, n),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Gt(l, a)),
          Ic(e, t, l, a, n)
        );
      case 7:
        return (vt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (vt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (vt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (a = t.pendingProps),
            (f = t.memoizedProps),
            (p = a.value),
            Be(Vl, l._currentValue),
            (l._currentValue = p),
            f !== null)
          )
            if (Qt(f.value, p)) {
              if (f.children === a.children && !Et.current) {
                t = En(e, t, n);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var x = f.dependencies;
                if (x !== null) {
                  p = f.child;
                  for (var E = x.firstContext; E !== null; ) {
                    if (E.context === l) {
                      if (f.tag === 1) {
                        ((E = kn(-1, n & -n)), (E.tag = 2));
                        var T = f.updateQueue;
                        if (T !== null) {
                          T = T.shared;
                          var H = T.pending;
                          (H === null
                            ? (E.next = E)
                            : ((E.next = H.next), (H.next = E)),
                            (T.pending = E));
                        }
                      }
                      ((f.lanes |= n),
                        (E = f.alternate),
                        E !== null && (E.lanes |= n),
                        Ra(f.return, n, t),
                        (x.lanes |= n));
                      break;
                    }
                    E = E.next;
                  }
                } else if (f.tag === 10) p = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((p = f.return), p === null)) throw Error(o(341));
                  ((p.lanes |= n),
                    (x = p.alternate),
                    x !== null && (x.lanes |= n),
                    Ra(p, n, t),
                    (p = f.sibling));
                } else p = f.child;
                if (p !== null) p.return = f;
                else
                  for (p = f; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((f = p.sibling), f !== null)) {
                      ((f.return = p.return), (p = f));
                      break;
                    }
                    p = p.return;
                  }
                f = p;
              }
          (vt(e, t, a.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (l = t.pendingProps.children),
          Jr(t, n),
          (a = Ut(a)),
          (l = l(a)),
          (t.flags |= 1),
          vt(e, t, l, n),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (a = Gt(l, t.pendingProps)),
          (a = Gt(l.type, a)),
          $c(e, t, l, a, n)
        );
      case 15:
        return Uc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : Gt(l, a)),
          no(e, t),
          (t.tag = 1),
          Ct(l) ? ((e = !0), Il(t)) : (e = !1),
          Jr(t, n),
          Mc(t, l, a),
          Aa(t, l, a, n),
          Wa(null, t, l, !0, e, n)
        );
      case 19:
        return Qc(e, t, n);
      case 22:
        return Ac(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function xf(e, t) {
    return Xe(e, t);
  }
  function Fp(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Bt(e, t, n, l) {
    return new Fp(e, t, n, l);
  }
  function fs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ip(e) {
    if (typeof e == "function") return fs(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === pe)) return 11;
      if (e === Re) return 14;
    }
    return 2;
  }
  function Gn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Bt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function po(e, t, n, l, a, f) {
    var p = 2;
    if (((l = e), typeof e == "function")) fs(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case O:
          return Er(n.children, a, f, t);
        case q:
          ((p = 8), (a |= 8));
          break;
        case ee:
          return (
            (e = Bt(12, n, t, a | 2)),
            (e.elementType = ee),
            (e.lanes = f),
            e
          );
        case de:
          return (
            (e = Bt(13, n, t, a)),
            (e.elementType = de),
            (e.lanes = f),
            e
          );
        case ie:
          return (
            (e = Bt(19, n, t, a)),
            (e.elementType = ie),
            (e.lanes = f),
            e
          );
        case ge:
          return mo(n, a, f, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ce:
                p = 10;
                break e;
              case je:
                p = 9;
                break e;
              case pe:
                p = 11;
                break e;
              case Re:
                p = 14;
                break e;
              case he:
                ((p = 16), (l = null));
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Bt(p, n, t, a)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = f),
      t
    );
  }
  function Er(e, t, n, l) {
    return ((e = Bt(7, e, l, t)), (e.lanes = n), e);
  }
  function mo(e, t, n, l) {
    return (
      (e = Bt(22, e, l, t)),
      (e.elementType = ge),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ds(e, t, n) {
    return ((e = Bt(6, e, null, t)), (e.lanes = n), e);
  }
  function hs(e, t, n) {
    return (
      (t = Bt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function $p(e, t, n, l, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Uo(0)),
      (this.expirationTimes = Uo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Uo(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ps(e, t, n, l, a, f, p, x, E) {
    return (
      (e = new $p(e, t, n, x, E)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = Bt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: l,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      La(f),
      e
    );
  }
  function Up(e, t, n) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ke,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function wf(e) {
    if (!e) return An;
    e = e._reactInternals;
    e: {
      if (le(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ct(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ct(n)) return Yu(e, n, t);
    }
    return t;
  }
  function Sf(e, t, n, l, a, f, p, x, E) {
    return (
      (e = ps(n, l, !0, e, a, f, p, x, E)),
      (e.context = wf(null)),
      (n = e.current),
      (l = xt()),
      (a = Qn(n)),
      (f = kn(l, a)),
      (f.callback = t ?? null),
      Vn(n, f, a),
      (e.current.lanes = a),
      gi(e, a, l),
      Lt(e, l),
      e
    );
  }
  function go(e, t, n, l) {
    var a = t.current,
      f = xt(),
      p = Qn(a);
    return (
      (n = wf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = kn(f, p)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = Vn(a, t, p)),
      e !== null && (qt(e, a, p, f), Kl(e, a, p)),
      p
    );
  }
  function yo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function kf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ms(e, t) {
    (kf(e, t), (e = e.alternate) && kf(e, t));
  }
  function Ap() {
    return null;
  }
  var Ef =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function gs(e) {
    this._internalRoot = e;
  }
  ((vo.prototype.render = gs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      go(e, t, null, null);
    }),
    (vo.prototype.unmount = gs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (wr(function () {
            go(null, e, null, null);
          }),
            (t[yn] = null));
        }
      }));
  function vo(e) {
    this._internalRoot = e;
  }
  vo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = lu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++);
      (bn.splice(n, 0, e), n === 0 && su(e));
    }
  };
  function ys(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function xo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Cf() {}
  function Hp(e, t, n, l, a) {
    if (a) {
      if (typeof l == "function") {
        var f = l;
        l = function () {
          var T = yo(p);
          f.call(T);
        };
      }
      var p = Sf(t, l, e, 0, null, !1, !1, "", Cf);
      return (
        (e._reactRootContainer = p),
        (e[yn] = p.current),
        Oi(e.nodeType === 8 ? e.parentNode : e),
        wr(),
        p
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof l == "function") {
      var x = l;
      l = function () {
        var T = yo(E);
        x.call(T);
      };
    }
    var E = ps(e, 0, !1, null, null, !1, !1, "", Cf);
    return (
      (e._reactRootContainer = E),
      (e[yn] = E.current),
      Oi(e.nodeType === 8 ? e.parentNode : e),
      wr(function () {
        go(t, E, n, l);
      }),
      E
    );
  }
  function wo(e, t, n, l, a) {
    var f = n._reactRootContainer;
    if (f) {
      var p = f;
      if (typeof a == "function") {
        var x = a;
        a = function () {
          var E = yo(p);
          x.call(E);
        };
      }
      go(t, p, e, a);
    } else p = Hp(n, t, e, a, l);
    return yo(p);
  }
  ((ru = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fr(t.pendingLanes);
          n !== 0 &&
            (Ao(t, n | 1),
            Lt(t, $e()),
            (De & 6) === 0 && ((ei = $e() + 500), Hn()));
        }
        break;
      case 13:
        (wr(function () {
          var l = Sn(e, 1);
          if (l !== null) {
            var a = xt();
            qt(l, e, 1, a);
          }
        }),
          ms(e, 1));
    }
  }),
    (Ho = function (e) {
      if (e.tag === 13) {
        var t = Sn(e, 134217728);
        if (t !== null) {
          var n = xt();
          qt(t, e, 134217728, n);
        }
        ms(e, 134217728);
      }
    }),
    (iu = function (e) {
      if (e.tag === 13) {
        var t = Qn(e),
          n = Sn(e, t);
        if (n !== null) {
          var l = xt();
          qt(n, e, t, l);
        }
        ms(e, t);
      }
    }),
    (lu = function () {
      return Ue;
    }),
    (ou = function (e, t) {
      var n = Ue;
      try {
        return ((Ue = e), t());
      } finally {
        Ue = n;
      }
    }),
    (jn = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ai(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = bl(l);
                if (!a) throw Error(o(90));
                (nt(l), ai(l, a));
              }
            }
          }
          break;
        case "textarea":
          tn(e, n);
          break;
        case "select":
          ((t = n.value), t != null && Nn(e, !!n.multiple, t, !1));
      }
    }),
    (hi = ss),
    (or = wr));
  var Bp = { usingClientEntryPoint: !1, Events: [Ti, Ar, bl, di, xl, ss] },
    Yi = {
      findFiberByHostInstance: dr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Vp = {
      bundleType: Yi.bundleType,
      version: Yi.version,
      rendererPackageName: Yi.rendererPackageName,
      rendererConfig: Yi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: re.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Te(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Yi.findFiberByHostInstance || Ap,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var So = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!So.isDisabled && So.supportsFiber)
      try {
        ((pn = So.inject(Vp)), (yt = So));
      } catch {}
  }
  return (
    (Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bp),
    (Pt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ys(t)) throw Error(o(200));
      return Up(e, t, null, n);
    }),
    (Pt.createRoot = function (e, t) {
      if (!ys(e)) throw Error(o(299));
      var n = !1,
        l = "",
        a = Ef;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = ps(e, 1, !1, null, null, n, !1, l, a)),
        (e[yn] = t.current),
        Oi(e.nodeType === 8 ? e.parentNode : e),
        new gs(t)
      );
    }),
    (Pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return ((e = Te(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Pt.flushSync = function (e) {
      return wr(e);
    }),
    (Pt.hydrate = function (e, t, n) {
      if (!xo(t)) throw Error(o(200));
      return wo(null, e, t, !0, n);
    }),
    (Pt.hydrateRoot = function (e, t, n) {
      if (!ys(e)) throw Error(o(405));
      var l = (n != null && n.hydratedSources) || null,
        a = !1,
        f = "",
        p = Ef;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (f = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError)),
        (t = Sf(t, null, e, 1, n ?? null, a, !1, f, p)),
        (e[yn] = t.current),
        Oi(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          ((n = l[e]),
            (a = n._getVersion),
            (a = a(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, a])
              : t.mutableSourceEagerHydrationData.push(n, a));
      return new vo(t);
    }),
    (Pt.render = function (e, t, n) {
      if (!xo(t)) throw Error(o(200));
      return wo(null, e, t, !1, n);
    }),
    (Pt.unmountComponentAtNode = function (e) {
      if (!xo(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (wr(function () {
            wo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[yn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Pt.unstable_batchedUpdates = ss),
    (Pt.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
      if (!xo(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return wo(e, t, n, !1, l);
    }),
    (Pt.version = "18.3.1-next-f1338f8080-20240426"),
    Pt
  );
}
var _f;
function em() {
  if (_f) return ws.exports;
  _f = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return (r(), (ws.exports = qp()), ws.exports);
}
var Tf;
function tm() {
  if (Tf) return ko;
  Tf = 1;
  var r = em();
  return ((ko.createRoot = r.createRoot), (ko.hydrateRoot = r.hydrateRoot), ko);
}
var nm = tm(),
  j = Do();
const rm = Yp(j),
  im = Kp({ __proto__: null, default: rm }, [j]);
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Ld = (r) => {
    throw TypeError(r);
  },
  lm = (r, i, o) => i.has(r) || Ld("Cannot " + o),
  Es = (r, i, o) => (
    lm(r, i, "read from private field"),
    o ? o.call(r) : i.get(r)
  ),
  om = (r, i, o) =>
    i.has(r)
      ? Ld("Cannot add the same private member more than once")
      : i instanceof WeakSet
        ? i.add(r)
        : i.set(r, o),
  zf = "popstate";
function am(r = {}) {
  function i(u, s) {
    let { pathname: c, search: d, hash: h } = u.location;
    return il(
      "",
      { pathname: c, search: d, hash: h },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function o(u, s) {
    return typeof s == "string" ? s : fn(s);
  }
  return um(i, o, null, r);
}
function Me(r, i) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(i);
}
function tt(r, i) {
  if (!r) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function sm() {
  return Math.random().toString(36).substring(2, 10);
}
function Df(r, i) {
  return { usr: r.state, key: r.key, idx: i };
}
function il(r, i, o = null, u) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? tr(i) : i),
    state: o,
    key: (i && i.key) || u || sm(),
  };
}
function fn({ pathname: r = "/", search: i = "", hash: o = "" }) {
  return (
    i && i !== "?" && (r += i.charAt(0) === "?" ? i : "?" + i),
    o && o !== "#" && (r += o.charAt(0) === "#" ? o : "#" + o),
    r
  );
}
function tr(r) {
  let i = {};
  if (r) {
    let o = r.indexOf("#");
    o >= 0 && ((i.hash = r.substring(o)), (r = r.substring(0, o)));
    let u = r.indexOf("?");
    (u >= 0 && ((i.search = r.substring(u)), (r = r.substring(0, u))),
      r && (i.pathname = r));
  }
  return i;
}
function um(r, i, o, u = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = u,
    d = s.history,
    h = "POP",
    m = null,
    g = v();
  g == null && ((g = 0), d.replaceState({ ...d.state, idx: g }, ""));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function y() {
    h = "POP";
    let F = v(),
      Y = F == null ? null : F - g;
    ((g = F), m && m({ action: h, location: D.location, delta: Y }));
  }
  function w(F, Y) {
    h = "PUSH";
    let $ = il(D.location, F, Y);
    g = v() + 1;
    let Q = Df($, g),
      re = D.createHref($);
    try {
      d.pushState(Q, "", re);
    } catch (ue) {
      if (ue instanceof DOMException && ue.name === "DataCloneError") throw ue;
      s.location.assign(re);
    }
    c && m && m({ action: h, location: D.location, delta: 1 });
  }
  function k(F, Y) {
    h = "REPLACE";
    let $ = il(D.location, F, Y);
    g = v();
    let Q = Df($, g),
      re = D.createHref($);
    (d.replaceState(Q, "", re),
      c && m && m({ action: h, location: D.location, delta: 0 }));
  }
  function L(F) {
    return Pd(F);
  }
  let D = {
    get action() {
      return h;
    },
    get location() {
      return r(s, d);
    },
    listen(F) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(zf, y),
        (m = F),
        () => {
          (s.removeEventListener(zf, y), (m = null));
        }
      );
    },
    createHref(F) {
      return i(s, F);
    },
    createURL: L,
    encodeLocation(F) {
      let Y = L(F);
      return { pathname: Y.pathname, search: Y.search, hash: Y.hash };
    },
    push: w,
    replace: k,
    go(F) {
      return d.go(F);
    },
  };
  return D;
}
function Pd(r, i = !1) {
  let o = "http://localhost";
  (typeof window < "u" &&
    (o =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Me(o, "No window.location.(origin|href) available to create URL"));
  let u = typeof r == "string" ? r : fn(r);
  return (
    (u = u.replace(/ $/, "%20")),
    !i && u.startsWith("//") && (u = o + u),
    new URL(u, o)
  );
}
var qi,
  bf = class {
    constructor(r) {
      if ((om(this, qi, new Map()), r)) for (let [i, o] of r) this.set(i, o);
    }
    get(r) {
      if (Es(this, qi).has(r)) return Es(this, qi).get(r);
      if (r.defaultValue !== void 0) return r.defaultValue;
      throw new Error("No value found for context");
    }
    set(r, i) {
      Es(this, qi).set(r, i);
    }
  };
qi = new WeakMap();
var cm = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function fm(r) {
  return cm.has(r);
}
var dm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function hm(r) {
  return dm.has(r);
}
function pm(r) {
  return r.index === !0;
}
function ll(r, i, o = [], u = {}, s = !1) {
  return r.map((c, d) => {
    let h = [...o, String(d)],
      m = typeof c.id == "string" ? c.id : h.join("-");
    if (
      (Me(
        c.index !== !0 || !c.children,
        "Cannot specify children on an index route",
      ),
      Me(
        s || !u[m],
        `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`,
      ),
      pm(c))
    ) {
      let g = { ...c, id: m };
      return ((u[m] = Ff(g, i(g))), g);
    } else {
      let g = { ...c, id: m, children: void 0 };
      return (
        (u[m] = Ff(g, i(g))),
        c.children && (g.children = ll(c.children, i, h, u, s)),
        g
      );
    }
  });
}
function Ff(r, i) {
  return Object.assign(r, {
    ...i,
    ...(typeof i.lazy == "object" && i.lazy != null
      ? { lazy: { ...r.lazy, ...i.lazy } }
      : {}),
  });
}
function Zn(r, i, o = "/") {
  return el(r, i, o, !1);
}
function el(r, i, o, u) {
  let s = typeof i == "string" ? tr(i) : i,
    c = Wt(s.pathname || "/", o);
  if (c == null) return null;
  let d = jd(r);
  gm(d);
  let h = null;
  for (let m = 0; h == null && m < d.length; ++m) {
    let g = Lm(c);
    h = Rm(d[m], g, u);
  }
  return h;
}
function mm(r, i) {
  let { route: o, pathname: u, params: s } = r;
  return {
    id: o.id,
    pathname: u,
    params: s,
    data: i[o.id],
    loaderData: i[o.id],
    handle: o.handle,
  };
}
function jd(r, i = [], o = [], u = "", s = !1) {
  let c = (d, h, m = s, g) => {
    let v = {
      relativePath: g === void 0 ? d.path || "" : g,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(u) && m) return;
      (Me(
        v.relativePath.startsWith(u),
        `Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (v.relativePath = v.relativePath.slice(u.length)));
    }
    let y = cn([u, v.relativePath]),
      w = o.concat(v);
    (d.children &&
      d.children.length > 0 &&
      (Me(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`,
      ),
      jd(d.children, i, w, y, m)),
      !(d.path == null && !d.index) &&
        i.push({ path: y, score: Em(y, d.index), routesMeta: w }));
  };
  return (
    r.forEach((d, h) => {
      var m;
      if (d.path === "" || !((m = d.path) != null && m.includes("?"))) c(d, h);
      else for (let g of Od(d.path)) c(d, h, !0, g);
    }),
    i
  );
}
function Od(r) {
  let i = r.split("/");
  if (i.length === 0) return [];
  let [o, ...u] = i,
    s = o.endsWith("?"),
    c = o.replace(/\?$/, "");
  if (u.length === 0) return s ? [c, ""] : [c];
  let d = Od(u.join("/")),
    h = [];
  return (
    h.push(...d.map((m) => (m === "" ? c : [c, m].join("/")))),
    s && h.push(...d),
    h.map((m) => (r.startsWith("/") && m === "" ? "/" : m))
  );
}
function gm(r) {
  r.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : Cm(
          i.routesMeta.map((u) => u.childrenIndex),
          o.routesMeta.map((u) => u.childrenIndex),
        ),
  );
}
var ym = /^:[\w-]+$/,
  vm = 3,
  xm = 2,
  wm = 1,
  Sm = 10,
  km = -2,
  If = (r) => r === "*";
function Em(r, i) {
  let o = r.split("/"),
    u = o.length;
  return (
    o.some(If) && (u += km),
    i && (u += xm),
    o
      .filter((s) => !If(s))
      .reduce((s, c) => s + (ym.test(c) ? vm : c === "" ? wm : Sm), u)
  );
}
function Cm(r, i) {
  return r.length === i.length && r.slice(0, -1).every((u, s) => u === i[s])
    ? r[r.length - 1] - i[i.length - 1]
    : 0;
}
function Rm(r, i, o = !1) {
  let { routesMeta: u } = r,
    s = {},
    c = "/",
    d = [];
  for (let h = 0; h < u.length; ++h) {
    let m = u[h],
      g = h === u.length - 1,
      v = c === "/" ? i : i.slice(c.length) || "/",
      y = Oo(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: g },
        v,
      ),
      w = m.route;
    if (
      (!y &&
        g &&
        o &&
        !u[u.length - 1].route.index &&
        (y = Oo(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          v,
        )),
      !y)
    )
      return null;
    (Object.assign(s, y.params),
      d.push({
        params: s,
        pathname: cn([c, y.pathname]),
        pathnameBase: Om(cn([c, y.pathnameBase])),
        route: w,
      }),
      y.pathnameBase !== "/" && (c = cn([c, y.pathnameBase])));
  }
  return d;
}
function Oo(r, i) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, u] = Nm(r.path, r.caseSensitive, r.end),
    s = i.match(o);
  if (!s) return null;
  let c = s[0],
    d = c.replace(/(.)\/+$/, "$1"),
    h = s.slice(1);
  return {
    params: u.reduce((g, { paramName: v, isOptional: y }, w) => {
      if (v === "*") {
        let L = h[w] || "";
        d = c.slice(0, c.length - L.length).replace(/(.)\/+$/, "$1");
      }
      const k = h[w];
      return (
        y && !k ? (g[v] = void 0) : (g[v] = (k || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: r,
  };
}
function Nm(r, i = !1, o = !0) {
  tt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`,
  );
  let u = [],
    s =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, m) => (
            u.push({ paramName: h, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    r.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (s += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (s += "\\/*$")
        : r !== "" && r !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, i ? void 0 : "i"), u]
  );
}
function Lm(r) {
  try {
    return r
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      tt(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
      ),
      r
    );
  }
}
function Wt(r, i) {
  if (i === "/") return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith("/") ? i.length - 1 : i.length,
    u = r.charAt(o);
  return u && u !== "/" ? null : r.slice(o) || "/";
}
function Pm({ basename: r, pathname: i }) {
  return i === "/" ? r : cn([r, i]);
}
var Md = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hs = (r) => Md.test(r);
function jm(r, i = "/") {
  let {
      pathname: o,
      search: u = "",
      hash: s = "",
    } = typeof r == "string" ? tr(r) : r,
    c;
  return (
    o
      ? ((o = o.replace(/\/\/+/g, "/")),
        o.startsWith("/") ? (c = $f(o.substring(1), "/")) : (c = $f(o, i)))
      : (c = i),
    { pathname: c, search: Mm(u), hash: _m(s) }
  );
}
function $f(r, i) {
  let o = i.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((s) => {
      s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Cs(r, i, o, u) {
  return `Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function _d(r) {
  return r.filter(
    (i, o) => o === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function Bs(r) {
  let i = _d(r);
  return i.map((o, u) => (u === i.length - 1 ? o.pathname : o.pathnameBase));
}
function Vs(r, i, o, u = !1) {
  let s;
  typeof r == "string"
    ? (s = tr(r))
    : ((s = { ...r }),
      Me(
        !s.pathname || !s.pathname.includes("?"),
        Cs("?", "pathname", "search", s),
      ),
      Me(
        !s.pathname || !s.pathname.includes("#"),
        Cs("#", "pathname", "hash", s),
      ),
      Me(!s.search || !s.search.includes("#"), Cs("#", "search", "hash", s)));
  let c = r === "" || s.pathname === "",
    d = c ? "/" : s.pathname,
    h;
  if (d == null) h = o;
  else {
    let y = i.length - 1;
    if (!u && d.startsWith("..")) {
      let w = d.split("/");
      for (; w[0] === ".."; ) (w.shift(), (y -= 1));
      s.pathname = w.join("/");
    }
    h = y >= 0 ? i[y] : "/";
  }
  let m = jm(s, h),
    g = d && d !== "/" && d.endsWith("/"),
    v = (c || d === ".") && o.endsWith("/");
  return (!m.pathname.endsWith("/") && (g || v) && (m.pathname += "/"), m);
}
var cn = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Om = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Mm = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  _m = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r),
  sl = class {
    constructor(r, i, o, u = !1) {
      ((this.status = r),
        (this.statusText = i || ""),
        (this.internal = u),
        o instanceof Error
          ? ((this.data = o.toString()), (this.error = o))
          : (this.data = o));
    }
  };
function ol(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
function ul(r) {
  return (
    r
      .map((i) => i.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var Td =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function zd(r, i) {
  let o = r;
  if (typeof o != "string" || !Md.test(o))
    return { absoluteURL: void 0, isExternal: !1, to: o };
  let u = o,
    s = !1;
  if (Td)
    try {
      let c = new URL(window.location.href),
        d = o.startsWith("//") ? new URL(c.protocol + o) : new URL(o),
        h = Wt(d.pathname, i);
      d.origin === c.origin && h != null
        ? (o = h + d.search + d.hash)
        : (s = !0);
    } catch {
      tt(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: u, isExternal: s, to: o };
}
var er = Symbol("Uninstrumented");
function Tm(r, i) {
  let o = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: [],
  };
  r.forEach((s) =>
    s({
      id: i.id,
      index: i.index,
      path: i.path,
      instrument(c) {
        let d = Object.keys(o);
        for (let h of d) c[h] && o[h].push(c[h]);
      },
    }),
  );
  let u = {};
  if (typeof i.lazy == "function" && o.lazy.length > 0) {
    let s = ri(o.lazy, i.lazy, () => {});
    s && (u.lazy = s);
  }
  if (typeof i.lazy == "object") {
    let s = i.lazy;
    ["middleware", "loader", "action"].forEach((c) => {
      let d = s[c],
        h = o[`lazy.${c}`];
      if (typeof d == "function" && h.length > 0) {
        let m = ri(h, d, () => {});
        m && (u.lazy = Object.assign(u.lazy || {}, { [c]: m }));
      }
    });
  }
  return (
    ["loader", "action"].forEach((s) => {
      let c = i[s];
      if (typeof c == "function" && o[s].length > 0) {
        let d = c[er] ?? c,
          h = ri(o[s], d, (...m) => Uf(m[0]));
        h &&
          (s === "loader" && d.hydrate === !0 && (h.hydrate = !0),
          (h[er] = d),
          (u[s] = h));
      }
    }),
    i.middleware &&
      i.middleware.length > 0 &&
      o.middleware.length > 0 &&
      (u.middleware = i.middleware.map((s) => {
        let c = s[er] ?? s,
          d = ri(o.middleware, c, (...h) => Uf(h[0]));
        return d ? ((d[er] = c), d) : s;
      })),
    u
  );
}
function zm(r, i) {
  let o = { navigate: [], fetch: [] };
  if (
    (i.forEach((u) =>
      u({
        instrument(s) {
          let c = Object.keys(s);
          for (let d of c) s[d] && o[d].push(s[d]);
        },
      }),
    ),
    o.navigate.length > 0)
  ) {
    let u = r.navigate[er] ?? r.navigate,
      s = ri(o.navigate, u, (...c) => {
        let [d, h] = c;
        return {
          to:
            typeof d == "number" || typeof d == "string" ? d : d ? fn(d) : ".",
          ...Af(r, h ?? {}),
        };
      });
    s && ((s[er] = u), (r.navigate = s));
  }
  if (o.fetch.length > 0) {
    let u = r.fetch[er] ?? r.fetch,
      s = ri(o.fetch, u, (...c) => {
        let [d, , h, m] = c;
        return { href: h ?? ".", fetcherKey: d, ...Af(r, m ?? {}) };
      });
    s && ((s[er] = u), (r.fetch = s));
  }
  return r;
}
function ri(r, i, o) {
  return r.length === 0
    ? null
    : async (...u) => {
        let s = await Dd(r, o(...u), () => i(...u), r.length - 1);
        if (s.type === "error") throw s.value;
        return s.value;
      };
}
async function Dd(r, i, o, u) {
  let s = r[u],
    c;
  if (s) {
    let d,
      h = async () => (
        d
          ? console.error(
              "You cannot call instrumented handlers more than once",
            )
          : (d = Dd(r, i, o, u - 1)),
        (c = await d),
        Me(c, "Expected a result"),
        c.type === "error" && c.value instanceof Error
          ? { status: "error", error: c.value }
          : { status: "success", error: void 0 }
      );
    try {
      await s(h, i);
    } catch (m) {
      console.error("An instrumentation function threw an error:", m);
    }
    (d || (await h()), await d);
  } else
    try {
      c = { type: "success", value: await o() };
    } catch (d) {
      c = { type: "error", value: d };
    }
  return (
    c || {
      type: "error",
      value: new Error("No result assigned in instrumentation chain."),
    }
  );
}
function Uf(r) {
  let { request: i, context: o, params: u, unstable_pattern: s } = r;
  return {
    request: Dm(i),
    params: { ...u },
    unstable_pattern: s,
    context: bm(o),
  };
}
function Af(r, i) {
  return {
    currentUrl: fn(r.state.location),
    ...("formMethod" in i ? { formMethod: i.formMethod } : {}),
    ...("formEncType" in i ? { formEncType: i.formEncType } : {}),
    ...("formData" in i ? { formData: i.formData } : {}),
    ...("body" in i ? { body: i.body } : {}),
  };
}
function Dm(r) {
  return {
    method: r.method,
    url: r.url,
    headers: { get: (...i) => r.headers.get(...i) },
  };
}
function bm(r) {
  if (Im(r)) {
    let i = { ...r };
    return (Object.freeze(i), i);
  } else return { get: (i) => r.get(i) };
}
var Fm = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Im(r) {
  if (r === null || typeof r != "object") return !1;
  const i = Object.getPrototypeOf(r);
  return (
    i === Object.prototype ||
    i === null ||
    Object.getOwnPropertyNames(i).sort().join("\0") === Fm
  );
}
var bd = ["POST", "PUT", "PATCH", "DELETE"],
  $m = new Set(bd),
  Um = ["GET", ...bd],
  Am = new Set(Um),
  Fd = new Set([301, 302, 303, 307, 308]),
  Hm = new Set([307, 308]),
  Rs = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Bm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ji = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Vm = (r) => ({ hasErrorBoundary: !!r.hasErrorBoundary }),
  Id = "remix-router-transitions",
  $d = Symbol("ResetLoaderData");
function Wm(r) {
  const i = r.window ? r.window : typeof window < "u" ? window : void 0,
    o =
      typeof i < "u" &&
      typeof i.document < "u" &&
      typeof i.document.createElement < "u";
  Me(
    r.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let u = r.hydrationRouteProperties || [],
    s = r.mapRouteProperties || Vm,
    c = s;
  if (r.unstable_instrumentations) {
    let S = r.unstable_instrumentations;
    c = (N) => ({ ...s(N), ...Tm(S.map((_) => _.route).filter(Boolean), N) });
  }
  let d = {},
    h = ll(r.routes, c, void 0, d),
    m,
    g = r.basename || "/";
  g.startsWith("/") || (g = `/${g}`);
  let v = r.dataStrategy || Gm,
    y = { ...r.future },
    w = null,
    k = new Set(),
    L = null,
    D = null,
    F = null,
    Y = r.hydrationData != null,
    $ = Zn(h, r.history.location, g),
    Q = !1,
    re = null,
    ue;
  if ($ == null && !r.patchRoutesOnNavigation) {
    let S = Vt(404, { pathname: r.history.location.pathname }),
      { matches: N, route: _ } = Eo(h);
    ((ue = !0), ($ = N), (re = { [_.id]: S }));
  } else if (
    ($ &&
      !r.hydrationData &&
      or($, h, r.history.location.pathname).active &&
      ($ = null),
    $)
  )
    if ($.some((S) => S.route.lazy)) ue = !1;
    else if (!$.some((S) => Ws(S.route))) ue = !0;
    else {
      let S = r.hydrationData ? r.hydrationData.loaderData : null,
        N = r.hydrationData ? r.hydrationData.errors : null;
      if (N) {
        let _ = $.findIndex((A) => N[A.route.id] !== void 0);
        ue = $.slice(0, _ + 1).every((A) => !Ds(A.route, S, N));
      } else ue = $.every((_) => !Ds(_.route, S, N));
    }
  else {
    ((ue = !1), ($ = []));
    let S = or(null, h, r.history.location.pathname);
    S.active && S.matches && ((Q = !0), ($ = S.matches));
  }
  let ke,
    O = {
      historyAction: r.history.action,
      location: r.history.location,
      matches: $,
      initialized: ue,
      navigation: Rs,
      restoreScrollPosition: r.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (r.hydrationData && r.hydrationData.loaderData) || {},
      actionData: (r.hydrationData && r.hydrationData.actionData) || null,
      errors: (r.hydrationData && r.hydrationData.errors) || re,
      fetchers: new Map(),
      blockers: new Map(),
    },
    q = "POP",
    ee = null,
    ce = !1,
    je,
    pe = !1,
    de = new Map(),
    ie = null,
    Re = !1,
    he = !1,
    ge = new Set(),
    I = new Map(),
    J = 0,
    W = -1,
    C = new Map(),
    b = new Set(),
    me = new Map(),
    xe = new Map(),
    ve = new Set(),
    Le = new Map(),
    Fe,
    _e = null;
  function He() {
    if (
      ((w = r.history.listen(({ action: S, location: N, delta: _ }) => {
        if (Fe) {
          (Fe(), (Fe = void 0));
          return;
        }
        tt(
          Le.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let A = hn({
          currentLocation: O.location,
          nextLocation: N,
          historyAction: S,
        });
        if (A && _ != null) {
          let K = new Promise((ae) => {
            Fe = ae;
          });
          (r.history.go(_ * -1),
            jn(A, {
              state: "blocked",
              location: N,
              proceed() {
                (jn(A, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  K.then(() => r.history.go(_)));
              },
              reset() {
                let ae = new Map(O.blockers);
                (ae.set(A, Ji), nt({ blockers: ae }));
              },
            }),
            ee == null || ee.resolve(),
            (ee = null));
          return;
        }
        return en(S, N);
      })),
      o)
    ) {
      pg(i, de);
      let S = () => mg(i, de);
      (i.addEventListener("pagehide", S),
        (ie = () => i.removeEventListener("pagehide", S)));
    }
    return (
      O.initialized || en("POP", O.location, { initialHydration: !0 }),
      ke
    );
  }
  function gt() {
    (w && w(),
      ie && ie(),
      k.clear(),
      je && je.abort(),
      O.fetchers.forEach((S, N) => ci(N)),
      O.blockers.forEach((S, N) => Tr(N)));
  }
  function Pr(S) {
    return (k.add(S), () => k.delete(S));
  }
  function nt(S, N = {}) {
    (S.matches &&
      (S.matches = S.matches.map((K) => {
        let ae = d[K.route.id],
          ye = K.route;
        return ye.element !== ae.element ||
          ye.errorElement !== ae.errorElement ||
          ye.hydrateFallbackElement !== ae.hydrateFallbackElement
          ? { ...K, route: ae }
          : K;
      })),
      (O = { ...O, ...S }));
    let _ = [],
      A = [];
    (O.fetchers.forEach((K, ae) => {
      K.state === "idle" && (ve.has(ae) ? _.push(ae) : A.push(ae));
    }),
      ve.forEach((K) => {
        !O.fetchers.has(K) && !I.has(K) && _.push(K);
      }),
      [...k].forEach((K) =>
        K(O, {
          deletedFetchers: _,
          newErrors: S.errors ?? null,
          viewTransitionOpts: N.viewTransitionOpts,
          flushSync: N.flushSync === !0,
        }),
      ),
      _.forEach((K) => ci(K)),
      A.forEach((K) => O.fetchers.delete(K)));
  }
  function Yt(S, N, { flushSync: _ } = {}) {
    var Ne, fe;
    let A =
        O.actionData != null &&
        O.navigation.formMethod != null &&
        mt(O.navigation.formMethod) &&
        O.navigation.state === "loading" &&
        ((Ne = S.state) == null ? void 0 : Ne._isRedirect) !== !0,
      K;
    N.actionData
      ? Object.keys(N.actionData).length > 0
        ? (K = N.actionData)
        : (K = null)
      : A
        ? (K = O.actionData)
        : (K = null);
    let ae = N.loaderData
        ? Xf(O.loaderData, N.loaderData, N.matches || [], N.errors)
        : O.loaderData,
      ye = O.blockers;
    ye.size > 0 && ((ye = new Map(ye)), ye.forEach((Pe, Te) => ye.set(Te, Ji)));
    let X = Re ? !1 : hi(S, N.matches || O.matches),
      te =
        ce === !0 ||
        (O.navigation.formMethod != null &&
          mt(O.navigation.formMethod) &&
          ((fe = S.state) == null ? void 0 : fe._isRedirect) !== !0);
    (m && ((h = m), (m = void 0)),
      Re ||
        q === "POP" ||
        (q === "PUSH"
          ? r.history.push(S, S.state)
          : q === "REPLACE" && r.history.replace(S, S.state)));
    let le;
    if (q === "POP") {
      let Pe = de.get(O.location.pathname);
      Pe && Pe.has(S.pathname)
        ? (le = { currentLocation: O.location, nextLocation: S })
        : de.has(S.pathname) &&
          (le = { currentLocation: S, nextLocation: O.location });
    } else if (pe) {
      let Pe = de.get(O.location.pathname);
      (Pe
        ? Pe.add(S.pathname)
        : ((Pe = new Set([S.pathname])), de.set(O.location.pathname, Pe)),
        (le = { currentLocation: O.location, nextLocation: S }));
    }
    (nt(
      {
        ...N,
        actionData: K,
        loaderData: ae,
        historyAction: q,
        location: S,
        initialized: !0,
        navigation: Rs,
        revalidation: "idle",
        restoreScrollPosition: X,
        preventScrollReset: te,
        blockers: ye,
      },
      { viewTransitionOpts: le, flushSync: _ === !0 },
    ),
      (q = "POP"),
      (ce = !1),
      (pe = !1),
      (Re = !1),
      (he = !1),
      ee == null || ee.resolve(),
      (ee = null),
      _e == null || _e.resolve(),
      (_e = null));
  }
  async function jr(S, N) {
    if ((ee == null || ee.resolve(), (ee = null), typeof S == "number")) {
      ee || (ee = td());
      let Te = ee.promise;
      return (r.history.go(S), Te);
    }
    let _ = zs(
        O.location,
        O.matches,
        g,
        S,
        N == null ? void 0 : N.fromRouteId,
        N == null ? void 0 : N.relative,
      ),
      { path: A, submission: K, error: ae } = Hf(!1, _, N),
      ye = O.location,
      X = il(O.location, A, N && N.state);
    X = { ...X, ...r.history.encodeLocation(X) };
    let te = N && N.replace != null ? N.replace : void 0,
      le = "PUSH";
    te === !0
      ? (le = "REPLACE")
      : te === !1 ||
        (K != null &&
          mt(K.formMethod) &&
          K.formAction === O.location.pathname + O.location.search &&
          (le = "REPLACE"));
    let Ne =
        N && "preventScrollReset" in N ? N.preventScrollReset === !0 : void 0,
      fe = (N && N.flushSync) === !0,
      Pe = hn({ currentLocation: ye, nextLocation: X, historyAction: le });
    if (Pe) {
      jn(Pe, {
        state: "blocked",
        location: X,
        proceed() {
          (jn(Pe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: X,
          }),
            jr(S, N));
        },
        reset() {
          let Te = new Map(O.blockers);
          (Te.set(Pe, Ji), nt({ blockers: Te }));
        },
      });
      return;
    }
    await en(le, X, {
      submission: K,
      pendingError: ae,
      preventScrollReset: Ne,
      replace: N && N.replace,
      enableViewTransition: N && N.viewTransition,
      flushSync: fe,
      callSiteDefaultShouldRevalidate: N && N.unstable_defaultShouldRevalidate,
    });
  }
  function hl() {
    (_e || (_e = td()), ir(), nt({ revalidation: "loading" }));
    let S = _e.promise;
    return O.navigation.state === "submitting"
      ? S
      : O.navigation.state === "idle"
        ? (en(O.historyAction, O.location, {
            startUninterruptedRevalidation: !0,
          }),
          S)
        : (en(q || O.historyAction, O.navigation.location, {
            overrideNavigation: O.navigation,
            enableViewTransition: pe === !0,
          }),
          S);
  }
  async function en(S, N, _) {
    (je && je.abort(),
      (je = null),
      (q = S),
      (Re = (_ && _.startUninterruptedRevalidation) === !0),
      xl(O.location, O.matches),
      (ce = (_ && _.preventScrollReset) === !0),
      (pe = (_ && _.enableViewTransition) === !0));
    let A = m || h,
      K = _ && _.overrideNavigation,
      ae =
        _ != null &&
        _.initialHydration &&
        O.matches &&
        O.matches.length > 0 &&
        !Q
          ? O.matches
          : Zn(A, N, g),
      ye = (_ && _.flushSync) === !0;
    if (
      ae &&
      O.initialized &&
      !he &&
      ig(O.location, N) &&
      !(_ && _.submission && mt(_.submission.formMethod))
    ) {
      Yt(N, { matches: ae }, { flushSync: ye });
      return;
    }
    let X = or(ae, A, N.pathname);
    if ((X.active && X.matches && (ae = X.matches), !ae)) {
      let { error: Xe, notFoundMatches: lt, route: Ie } = nn(N.pathname);
      Yt(
        N,
        { matches: lt, loaderData: {}, errors: { [Ie.id]: Xe } },
        { flushSync: ye },
      );
      return;
    }
    je = new AbortController();
    let te = ni(r.history, N, je.signal, _ && _.submission),
      le = r.getContext ? await r.getContext() : new bf(),
      Ne;
    if (_ && _.pendingError)
      Ne = [qn(ae).route.id, { type: "error", error: _.pendingError }];
    else if (_ && _.submission && mt(_.submission.formMethod)) {
      let Xe = await ai(
        te,
        N,
        _.submission,
        ae,
        le,
        X.active,
        _ && _.initialHydration === !0,
        { replace: _.replace, flushSync: ye },
      );
      if (Xe.shortCircuited) return;
      if (Xe.pendingActionResult) {
        let [lt, Ie] = Xe.pendingActionResult;
        if (zt(Ie) && ol(Ie.error) && Ie.error.status === 404) {
          ((je = null),
            Yt(N, {
              matches: Xe.matches,
              loaderData: {},
              errors: { [lt]: Ie.error },
            }));
          return;
        }
      }
      ((ae = Xe.matches || ae),
        (Ne = Xe.pendingActionResult),
        (K = Ns(N, _.submission)),
        (ye = !1),
        (X.active = !1),
        (te = ni(r.history, te.url, te.signal)));
    }
    let {
      shortCircuited: fe,
      matches: Pe,
      loaderData: Te,
      errors: qe,
    } = await pl(
      te,
      N,
      ae,
      le,
      X.active,
      K,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      ye,
      Ne,
      _ && _.callSiteDefaultShouldRevalidate,
    );
    fe ||
      ((je = null),
      Yt(N, { matches: Pe || ae, ...Zf(Ne), loaderData: Te, errors: qe }));
  }
  async function ai(S, N, _, A, K, ae, ye, X = {}) {
    ir();
    let te = dg(N, _);
    if ((nt({ navigation: te }, { flushSync: X.flushSync === !0 }), ae)) {
      let fe = await On(A, N.pathname, S.signal);
      if (fe.type === "aborted") return { shortCircuited: !0 };
      if (fe.type === "error") {
        if (fe.partialMatches.length === 0) {
          let { matches: Te, route: qe } = Eo(h);
          return {
            matches: Te,
            pendingActionResult: [qe.id, { type: "error", error: fe.error }],
          };
        }
        let Pe = qn(fe.partialMatches).route.id;
        return {
          matches: fe.partialMatches,
          pendingActionResult: [Pe, { type: "error", error: fe.error }],
        };
      } else if (fe.matches) A = fe.matches;
      else {
        let { notFoundMatches: Pe, error: Te, route: qe } = nn(N.pathname);
        return {
          matches: Pe,
          pendingActionResult: [qe.id, { type: "error", error: Te }],
        };
      }
    }
    let le,
      Ne = Lo(A, N);
    if (!Ne.route.action && !Ne.route.lazy)
      le = {
        type: "error",
        error: Vt(405, {
          method: S.method,
          pathname: N.pathname,
          routeId: Ne.route.id,
        }),
      };
    else {
      let fe = ii(c, d, S, A, Ne, ye ? [] : u, K),
        Pe = await Ln(S, fe, K, null);
      if (((le = Pe[Ne.route.id]), !le)) {
        for (let Te of A)
          if (Pe[Te.route.id]) {
            le = Pe[Te.route.id];
            break;
          }
      }
      if (S.signal.aborted) return { shortCircuited: !0 };
    }
    if (Rr(le)) {
      let fe;
      return (
        X && X.replace != null
          ? (fe = X.replace)
          : (fe =
              Qf(
                le.response.headers.get("Location"),
                new URL(S.url),
                g,
                r.history,
              ) ===
              O.location.pathname + O.location.search),
        await tn(S, le, !0, { submission: _, replace: fe }),
        { shortCircuited: !0 }
      );
    }
    if (zt(le)) {
      let fe = qn(A, Ne.route.id);
      return (
        (X && X.replace) !== !0 && (q = "PUSH"),
        { matches: A, pendingActionResult: [fe.route.id, le, Ne.route.id] }
      );
    }
    return { matches: A, pendingActionResult: [Ne.route.id, le] };
  }
  async function pl(S, N, _, A, K, ae, ye, X, te, le, Ne, fe, Pe) {
    let Te = ae || Ns(N, ye),
      qe = ye || X || ed(Te),
      Xe = !Re && !le;
    if (K) {
      if (Xe) {
        let Ae = Or(fe);
        nt(
          { navigation: Te, ...(Ae !== void 0 ? { actionData: Ae } : {}) },
          { flushSync: Ne },
        );
      }
      let ze = await On(_, N.pathname, S.signal);
      if (ze.type === "aborted") return { shortCircuited: !0 };
      if (ze.type === "error") {
        if (ze.partialMatches.length === 0) {
          let { matches: _n, route: mn } = Eo(h);
          return { matches: _n, loaderData: {}, errors: { [mn.id]: ze.error } };
        }
        let Ae = qn(ze.partialMatches).route.id;
        return {
          matches: ze.partialMatches,
          loaderData: {},
          errors: { [Ae]: ze.error },
        };
      } else if (ze.matches) _ = ze.matches;
      else {
        let { error: Ae, notFoundMatches: _n, route: mn } = nn(N.pathname);
        return { matches: _n, loaderData: {}, errors: { [mn.id]: Ae } };
      }
    }
    let lt = m || h,
      { dsMatches: Ie, revalidatingFetchers: kt } = Bf(
        S,
        A,
        c,
        d,
        r.history,
        O,
        _,
        qe,
        N,
        le ? [] : u,
        le === !0,
        he,
        ge,
        ve,
        me,
        b,
        lt,
        g,
        r.patchRoutesOnNavigation != null,
        fe,
        Pe,
      );
    if (
      ((W = ++J),
      !r.dataStrategy &&
        !Ie.some((ze) => ze.shouldLoad) &&
        !Ie.some(
          (ze) => ze.route.middleware && ze.route.middleware.length > 0,
        ) &&
        kt.length === 0)
    ) {
      let ze = Mr();
      return (
        Yt(
          N,
          {
            matches: _,
            loaderData: {},
            errors: fe && zt(fe[1]) ? { [fe[0]]: fe[1].error } : null,
            ...Zf(fe),
            ...(ze ? { fetchers: new Map(O.fetchers) } : {}),
          },
          { flushSync: Ne },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Xe) {
      let ze = {};
      if (!K) {
        ze.navigation = Te;
        let Ae = Or(fe);
        Ae !== void 0 && (ze.actionData = Ae);
      }
      (kt.length > 0 && (ze.fetchers = rr(kt)), nt(ze, { flushSync: Ne }));
    }
    kt.forEach((ze) => {
      (bt(ze.key), ze.controller && I.set(ze.key, ze.controller));
    });
    let $e = () => kt.forEach((ze) => bt(ze.key));
    je && je.signal.addEventListener("abort", $e);
    let { loaderResults: sr, fetcherResults: Ft } = await ui(Ie, kt, S, A);
    if (S.signal.aborted) return { shortCircuited: !0 };
    (je && je.signal.removeEventListener("abort", $e),
      kt.forEach((ze) => I.delete(ze.key)));
    let jt = Co(sr);
    if (jt)
      return (
        await tn(S, jt.result, !0, { replace: te }),
        { shortCircuited: !0 }
      );
    if (((jt = Co(Ft)), jt))
      return (
        b.add(jt.key),
        await tn(S, jt.result, !0, { replace: te }),
        { shortCircuited: !0 }
      );
    let { loaderData: Mn, errors: ur } = Gf(O, _, sr, fe, kt, Ft);
    le && O.errors && (ur = { ...O.errors, ...ur });
    let rn = Mr(),
      pn = _r(W),
      yt = rn || pn || kt.length > 0;
    return {
      matches: _,
      loaderData: Mn,
      errors: ur,
      ...(yt ? { fetchers: new Map(O.fetchers) } : {}),
    };
  }
  function Or(S) {
    if (S && !zt(S[1])) return { [S[0]]: S[1].data };
    if (O.actionData)
      return Object.keys(O.actionData).length === 0 ? null : O.actionData;
  }
  function rr(S) {
    return (
      S.forEach((N) => {
        let _ = O.fetchers.get(N.key),
          A = Gi(void 0, _ ? _.data : void 0);
        O.fetchers.set(N.key, A);
      }),
      new Map(O.fetchers)
    );
  }
  async function Nn(S, N, _, A) {
    bt(S);
    let K = (A && A.flushSync) === !0,
      ae = m || h,
      ye = zs(O.location, O.matches, g, _, N, A == null ? void 0 : A.relative),
      X = Zn(ae, ye, g),
      te = or(X, ae, ye);
    if ((te.active && te.matches && (X = te.matches), !X)) {
      Dt(S, N, Vt(404, { pathname: ye }), { flushSync: K });
      return;
    }
    let { path: le, submission: Ne, error: fe } = Hf(!0, ye, A);
    if (fe) {
      Dt(S, N, fe, { flushSync: K });
      return;
    }
    let Pe = r.getContext ? await r.getContext() : new bf(),
      Te = (A && A.preventScrollReset) === !0;
    if (Ne && mt(Ne.formMethod)) {
      await si(
        S,
        N,
        le,
        X,
        Pe,
        te.active,
        K,
        Te,
        Ne,
        A && A.unstable_defaultShouldRevalidate,
      );
      return;
    }
    (me.set(S, { routeId: N, path: le }),
      await ml(S, N, le, X, Pe, te.active, K, Te, Ne));
  }
  async function si(S, N, _, A, K, ae, ye, X, te, le) {
    (ir(), me.delete(S));
    let Ne = O.fetchers.get(S);
    St(S, hg(te, Ne), { flushSync: ye });
    let fe = new AbortController(),
      Pe = ni(r.history, _, fe.signal, te);
    if (ae) {
      let Ke = await On(A, new URL(Pe.url).pathname, Pe.signal, S);
      if (Ke.type === "aborted") return;
      if (Ke.type === "error") {
        Dt(S, N, Ke.error, { flushSync: ye });
        return;
      } else if (Ke.matches) A = Ke.matches;
      else {
        Dt(S, N, Vt(404, { pathname: _ }), { flushSync: ye });
        return;
      }
    }
    let Te = Lo(A, _);
    if (!Te.route.action && !Te.route.lazy) {
      let Ke = Vt(405, { method: te.formMethod, pathname: _, routeId: N });
      Dt(S, N, Ke, { flushSync: ye });
      return;
    }
    I.set(S, fe);
    let qe = J,
      Xe = ii(c, d, Pe, A, Te, u, K),
      lt = await Ln(Pe, Xe, K, S),
      Ie = lt[Te.route.id];
    if (!Ie) {
      for (let Ke of Xe)
        if (lt[Ke.route.id]) {
          Ie = lt[Ke.route.id];
          break;
        }
    }
    if (Pe.signal.aborted) {
      I.get(S) === fe && I.delete(S);
      return;
    }
    if (ve.has(S)) {
      if (Rr(Ie) || zt(Ie)) {
        St(S, Rn(void 0));
        return;
      }
    } else {
      if (Rr(Ie))
        if ((I.delete(S), W > qe)) {
          St(S, Rn(void 0));
          return;
        } else
          return (
            b.add(S),
            St(S, Gi(te)),
            tn(Pe, Ie, !1, { fetcherSubmission: te, preventScrollReset: X })
          );
      if (zt(Ie)) {
        Dt(S, N, Ie.error);
        return;
      }
    }
    let kt = O.navigation.location || O.location,
      $e = ni(r.history, kt, fe.signal),
      sr = m || h,
      Ft =
        O.navigation.state !== "idle"
          ? Zn(sr, O.navigation.location, g)
          : O.matches;
    Me(Ft, "Didn't find any matches after fetcher action");
    let jt = ++J;
    C.set(S, jt);
    let Mn = Gi(te, Ie.data);
    O.fetchers.set(S, Mn);
    let { dsMatches: ur, revalidatingFetchers: rn } = Bf(
      $e,
      K,
      c,
      d,
      r.history,
      O,
      Ft,
      te,
      kt,
      u,
      !1,
      he,
      ge,
      ve,
      me,
      b,
      sr,
      g,
      r.patchRoutesOnNavigation != null,
      [Te.route.id, Ie],
      le,
    );
    (rn
      .filter((Ke) => Ke.key !== S)
      .forEach((Ke) => {
        let gn = Ke.key,
          cr = O.fetchers.get(gn),
          fr = Gi(void 0, cr ? cr.data : void 0);
        (O.fetchers.set(gn, fr),
          bt(gn),
          Ke.controller && I.set(gn, Ke.controller));
      }),
      nt({ fetchers: new Map(O.fetchers) }));
    let pn = () => rn.forEach((Ke) => bt(Ke.key));
    fe.signal.addEventListener("abort", pn);
    let { loaderResults: yt, fetcherResults: ze } = await ui(ur, rn, $e, K);
    if (fe.signal.aborted) return;
    if (
      (fe.signal.removeEventListener("abort", pn),
      C.delete(S),
      I.delete(S),
      rn.forEach((Ke) => I.delete(Ke.key)),
      O.fetchers.has(S))
    ) {
      let Ke = Rn(Ie.data);
      O.fetchers.set(S, Ke);
    }
    let Ae = Co(yt);
    if (Ae) return tn($e, Ae.result, !1, { preventScrollReset: X });
    if (((Ae = Co(ze)), Ae))
      return (b.add(Ae.key), tn($e, Ae.result, !1, { preventScrollReset: X }));
    let { loaderData: _n, errors: mn } = Gf(O, Ft, yt, void 0, rn, ze);
    (_r(jt),
      O.navigation.state === "loading" && jt > W
        ? (Me(q, "Expected pending action"),
          je && je.abort(),
          Yt(O.navigation.location, {
            matches: Ft,
            loaderData: _n,
            errors: mn,
            fetchers: new Map(O.fetchers),
          }))
        : (nt({
            errors: mn,
            loaderData: Xf(O.loaderData, _n, Ft, mn),
            fetchers: new Map(O.fetchers),
          }),
          (he = !1)));
  }
  async function ml(S, N, _, A, K, ae, ye, X, te) {
    let le = O.fetchers.get(S);
    St(S, Gi(te, le ? le.data : void 0), { flushSync: ye });
    let Ne = new AbortController(),
      fe = ni(r.history, _, Ne.signal);
    if (ae) {
      let Ie = await On(A, new URL(fe.url).pathname, fe.signal, S);
      if (Ie.type === "aborted") return;
      if (Ie.type === "error") {
        Dt(S, N, Ie.error, { flushSync: ye });
        return;
      } else if (Ie.matches) A = Ie.matches;
      else {
        Dt(S, N, Vt(404, { pathname: _ }), { flushSync: ye });
        return;
      }
    }
    let Pe = Lo(A, _);
    I.set(S, Ne);
    let Te = J,
      qe = ii(c, d, fe, A, Pe, u, K),
      lt = (await Ln(fe, qe, K, S))[Pe.route.id];
    if ((I.get(S) === Ne && I.delete(S), !fe.signal.aborted)) {
      if (ve.has(S)) {
        St(S, Rn(void 0));
        return;
      }
      if (Rr(lt))
        if (W > Te) {
          St(S, Rn(void 0));
          return;
        } else {
          (b.add(S), await tn(fe, lt, !1, { preventScrollReset: X }));
          return;
        }
      if (zt(lt)) {
        Dt(S, N, lt.error);
        return;
      }
      St(S, Rn(lt.data));
    }
  }
  async function tn(
    S,
    N,
    _,
    {
      submission: A,
      fetcherSubmission: K,
      preventScrollReset: ae,
      replace: ye,
    } = {},
  ) {
    (_ || (ee == null || ee.resolve(), (ee = null)),
      N.response.headers.has("X-Remix-Revalidate") && (he = !0));
    let X = N.response.headers.get("Location");
    (Me(X, "Expected a Location header on the redirect Response"),
      (X = Qf(X, new URL(S.url), g, r.history)));
    let te = il(O.location, X, { _isRedirect: !0 });
    if (o) {
      let qe = !1;
      if (N.response.headers.has("X-Remix-Reload-Document")) qe = !0;
      else if (Hs(X)) {
        const Xe = Pd(X, !0);
        qe = Xe.origin !== i.location.origin || Wt(Xe.pathname, g) == null;
      }
      if (qe) {
        ye ? i.location.replace(X) : i.location.assign(X);
        return;
      }
    }
    je = null;
    let le =
        ye === !0 || N.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: Ne, formAction: fe, formEncType: Pe } = O.navigation;
    !A && !K && Ne && fe && Pe && (A = ed(O.navigation));
    let Te = A || K;
    if (Hm.has(N.response.status) && Te && mt(Te.formMethod))
      await en(le, te, {
        submission: { ...Te, formAction: X },
        preventScrollReset: ae || ce,
        enableViewTransition: _ ? pe : void 0,
      });
    else {
      let qe = Ns(te, A);
      await en(le, te, {
        overrideNavigation: qe,
        fetcherSubmission: K,
        preventScrollReset: ae || ce,
        enableViewTransition: _ ? pe : void 0,
      });
    }
  }
  async function Ln(S, N, _, A) {
    var ye;
    let K,
      ae = {};
    try {
      K = await Zm(v, S, N, A, _, !1);
    } catch (X) {
      return (
        N.filter((te) => te.shouldLoad).forEach((te) => {
          ae[te.route.id] = { type: "error", error: X };
        }),
        ae
      );
    }
    if (S.signal.aborted) return ae;
    if (!mt(S.method))
      for (let X of N) {
        if (((ye = K[X.route.id]) == null ? void 0 : ye.type) === "error")
          break;
        !K.hasOwnProperty(X.route.id) &&
          !O.loaderData.hasOwnProperty(X.route.id) &&
          (!O.errors || !O.errors.hasOwnProperty(X.route.id)) &&
          X.shouldCallHandler() &&
          (K[X.route.id] = {
            type: "error",
            result: new Error(
              `No result returned from dataStrategy for route ${X.route.id}`,
            ),
          });
      }
    for (let [X, te] of Object.entries(K))
      if (sg(te)) {
        let le = te.result;
        ae[X] = { type: "redirect", response: ng(le, S, X, N, g) };
      } else ae[X] = await tg(te);
    return ae;
  }
  async function ui(S, N, _, A) {
    let K = Ln(_, S, A, null),
      ae = Promise.all(
        N.map(async (te) => {
          if (te.matches && te.match && te.request && te.controller) {
            let Ne = (await Ln(te.request, te.matches, A, te.key))[
              te.match.route.id
            ];
            return { [te.key]: Ne };
          } else
            return Promise.resolve({
              [te.key]: {
                type: "error",
                error: Vt(404, { pathname: te.path }),
              },
            });
        }),
      ),
      ye = await K,
      X = (await ae).reduce((te, le) => Object.assign(te, le), {});
    return { loaderResults: ye, fetcherResults: X };
  }
  function ir() {
    ((he = !0),
      me.forEach((S, N) => {
        (I.has(N) && ge.add(N), bt(N));
      }));
  }
  function St(S, N, _ = {}) {
    (O.fetchers.set(S, N),
      nt(
        { fetchers: new Map(O.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      ));
  }
  function Dt(S, N, _, A = {}) {
    let K = qn(O.matches, N);
    (ci(S),
      nt(
        { errors: { [K.route.id]: _ }, fetchers: new Map(O.fetchers) },
        { flushSync: (A && A.flushSync) === !0 },
      ));
  }
  function Pn(S) {
    return (
      xe.set(S, (xe.get(S) || 0) + 1),
      ve.has(S) && ve.delete(S),
      O.fetchers.get(S) || Bm
    );
  }
  function lr(S, N) {
    (bt(S, N == null ? void 0 : N.reason), St(S, Rn(null)));
  }
  function ci(S) {
    let N = O.fetchers.get(S);
    (I.has(S) && !(N && N.state === "loading" && C.has(S)) && bt(S),
      me.delete(S),
      C.delete(S),
      b.delete(S),
      ve.delete(S),
      ge.delete(S),
      O.fetchers.delete(S));
  }
  function gl(S) {
    let N = (xe.get(S) || 0) - 1;
    (N <= 0 ? (xe.delete(S), ve.add(S)) : xe.set(S, N),
      nt({ fetchers: new Map(O.fetchers) }));
  }
  function bt(S, N) {
    let _ = I.get(S);
    _ && (_.abort(N), I.delete(S));
  }
  function yl(S) {
    for (let N of S) {
      let _ = Pn(N),
        A = Rn(_.data);
      O.fetchers.set(N, A);
    }
  }
  function Mr() {
    let S = [],
      N = !1;
    for (let _ of b) {
      let A = O.fetchers.get(_);
      (Me(A, `Expected fetcher: ${_}`),
        A.state === "loading" && (b.delete(_), S.push(_), (N = !0)));
    }
    return (yl(S), N);
  }
  function _r(S) {
    let N = [];
    for (let [_, A] of C)
      if (A < S) {
        let K = O.fetchers.get(_);
        (Me(K, `Expected fetcher: ${_}`),
          K.state === "loading" && (bt(_), C.delete(_), N.push(_)));
      }
    return (yl(N), N.length > 0);
  }
  function fi(S, N) {
    let _ = O.blockers.get(S) || Ji;
    return (Le.get(S) !== N && Le.set(S, N), _);
  }
  function Tr(S) {
    (O.blockers.delete(S), Le.delete(S));
  }
  function jn(S, N) {
    let _ = O.blockers.get(S) || Ji;
    Me(
      (_.state === "unblocked" && N.state === "blocked") ||
        (_.state === "blocked" && N.state === "blocked") ||
        (_.state === "blocked" && N.state === "proceeding") ||
        (_.state === "blocked" && N.state === "unblocked") ||
        (_.state === "proceeding" && N.state === "unblocked"),
      `Invalid blocker state transition: ${_.state} -> ${N.state}`,
    );
    let A = new Map(O.blockers);
    (A.set(S, N), nt({ blockers: A }));
  }
  function hn({ currentLocation: S, nextLocation: N, historyAction: _ }) {
    if (Le.size === 0) return;
    Le.size > 1 && tt(!1, "A router only supports one blocker at a time");
    let A = Array.from(Le.entries()),
      [K, ae] = A[A.length - 1],
      ye = O.blockers.get(K);
    if (
      !(ye && ye.state === "proceeding") &&
      ae({ currentLocation: S, nextLocation: N, historyAction: _ })
    )
      return K;
  }
  function nn(S) {
    let N = Vt(404, { pathname: S }),
      _ = m || h,
      { matches: A, route: K } = Eo(_);
    return { notFoundMatches: A, route: K, error: N };
  }
  function vl(S, N, _) {
    if (((L = S), (F = N), (D = _ || null), !Y && O.navigation === Rs)) {
      Y = !0;
      let A = hi(O.location, O.matches);
      A != null && nt({ restoreScrollPosition: A });
    }
    return () => {
      ((L = null), (F = null), (D = null));
    };
  }
  function di(S, N) {
    return (
      (D &&
        D(
          S,
          N.map((A) => mm(A, O.loaderData)),
        )) ||
      S.key
    );
  }
  function xl(S, N) {
    if (L && F) {
      let _ = di(S, N);
      L[_] = F();
    }
  }
  function hi(S, N) {
    if (L) {
      let _ = di(S, N),
        A = L[_];
      if (typeof A == "number") return A;
    }
    return null;
  }
  function or(S, N, _) {
    if (r.patchRoutesOnNavigation)
      if (S) {
        if (Object.keys(S[0].params).length > 0)
          return { active: !0, matches: el(N, _, g, !0) };
      } else return { active: !0, matches: el(N, _, g, !0) || [] };
    return { active: !1, matches: null };
  }
  async function On(S, N, _, A) {
    if (!r.patchRoutesOnNavigation) return { type: "success", matches: S };
    let K = S;
    for (;;) {
      let ae = m == null,
        ye = m || h,
        X = d;
      try {
        await r.patchRoutesOnNavigation({
          signal: _,
          path: N,
          matches: K,
          fetcherKey: A,
          patch: (Ne, fe) => {
            _.aborted || Vf(Ne, fe, ye, X, c, !1);
          },
        });
      } catch (Ne) {
        return { type: "error", error: Ne, partialMatches: K };
      } finally {
        ae && !_.aborted && (h = [...h]);
      }
      if (_.aborted) return { type: "aborted" };
      let te = Zn(ye, N, g),
        le = null;
      if (te) {
        if (Object.keys(te[0].params).length === 0)
          return { type: "success", matches: te };
        if (
          ((le = el(ye, N, g, !0)),
          !(le && K.length < le.length && pi(K, le.slice(0, K.length))))
        )
          return { type: "success", matches: te };
      }
      if ((le || (le = el(ye, N, g, !0)), !le || pi(K, le)))
        return { type: "success", matches: null };
      K = le;
    }
  }
  function pi(S, N) {
    return (
      S.length === N.length && S.every((_, A) => _.route.id === N[A].route.id)
    );
  }
  function ar(S) {
    ((d = {}), (m = ll(S, c, void 0, d)));
  }
  function mi(S, N, _ = !1) {
    let A = m == null;
    (Vf(S, N, m || h, d, c, _), A && ((h = [...h]), nt({})));
  }
  return (
    (ke = {
      get basename() {
        return g;
      },
      get future() {
        return y;
      },
      get state() {
        return O;
      },
      get routes() {
        return h;
      },
      get window() {
        return i;
      },
      initialize: He,
      subscribe: Pr,
      enableScrollRestoration: vl,
      navigate: jr,
      fetch: Nn,
      revalidate: hl,
      createHref: (S) => r.history.createHref(S),
      encodeLocation: (S) => r.history.encodeLocation(S),
      getFetcher: Pn,
      resetFetcher: lr,
      deleteFetcher: gl,
      dispose: gt,
      getBlocker: fi,
      deleteBlocker: Tr,
      patchRoutes: mi,
      _internalFetchControllers: I,
      _internalSetRoutes: ar,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(S) {
        nt(S);
      },
    }),
    r.unstable_instrumentations &&
      (ke = zm(
        ke,
        r.unstable_instrumentations.map((S) => S.router).filter(Boolean),
      )),
    ke
  );
}
function Km(r) {
  return (
    r != null &&
    (("formData" in r && r.formData != null) ||
      ("body" in r && r.body !== void 0))
  );
}
function zs(r, i, o, u, s, c) {
  let d, h;
  if (s) {
    d = [];
    for (let g of i)
      if ((d.push(g), g.route.id === s)) {
        h = g;
        break;
      }
  } else ((d = i), (h = i[i.length - 1]));
  let m = Vs(u || ".", Bs(d), Wt(r.pathname, o) || r.pathname, c === "path");
  if (
    (u == null && ((m.search = r.search), (m.hash = r.hash)),
    (u == null || u === "" || u === ".") && h)
  ) {
    let g = Ys(m.search);
    if (h.route.index && !g)
      m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
    else if (!h.route.index && g) {
      let v = new URLSearchParams(m.search),
        y = v.getAll("index");
      (v.delete("index"),
        y.filter((k) => k).forEach((k) => v.append("index", k)));
      let w = v.toString();
      m.search = w ? `?${w}` : "";
    }
  }
  return (
    o !== "/" && (m.pathname = Pm({ basename: o, pathname: m.pathname })),
    fn(m)
  );
}
function Hf(r, i, o) {
  if (!o || !Km(o)) return { path: i };
  if (o.formMethod && !fg(o.formMethod))
    return { path: i, error: Vt(405, { method: o.formMethod }) };
  let u = () => ({ path: i, error: Vt(400, { type: "invalid-body" }) }),
    c = (o.formMethod || "get").toUpperCase(),
    d = Wd(i);
  if (o.body !== void 0) {
    if (o.formEncType === "text/plain") {
      if (!mt(c)) return u();
      let y =
        typeof o.body == "string"
          ? o.body
          : o.body instanceof FormData || o.body instanceof URLSearchParams
            ? Array.from(o.body.entries()).reduce(
                (w, [k, L]) => `${w}${k}=${L}
`,
                "",
              )
            : String(o.body);
      return {
        path: i,
        submission: {
          formMethod: c,
          formAction: d,
          formEncType: o.formEncType,
          formData: void 0,
          json: void 0,
          text: y,
        },
      };
    } else if (o.formEncType === "application/json") {
      if (!mt(c)) return u();
      try {
        let y = typeof o.body == "string" ? JSON.parse(o.body) : o.body;
        return {
          path: i,
          submission: {
            formMethod: c,
            formAction: d,
            formEncType: o.formEncType,
            formData: void 0,
            json: y,
            text: void 0,
          },
        };
      } catch {
        return u();
      }
    }
  }
  Me(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let h, m;
  if (o.formData) ((h = Fs(o.formData)), (m = o.formData));
  else if (o.body instanceof FormData) ((h = Fs(o.body)), (m = o.body));
  else if (o.body instanceof URLSearchParams) ((h = o.body), (m = Jf(h)));
  else if (o.body == null) ((h = new URLSearchParams()), (m = new FormData()));
  else
    try {
      ((h = new URLSearchParams(o.body)), (m = Jf(h)));
    } catch {
      return u();
    }
  let g = {
    formMethod: c,
    formAction: d,
    formEncType: (o && o.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (mt(g.formMethod)) return { path: i, submission: g };
  let v = tr(i);
  return (
    r && v.search && Ys(v.search) && h.append("index", ""),
    (v.search = `?${h}`),
    { path: fn(v), submission: g }
  );
}
function Bf(r, i, o, u, s, c, d, h, m, g, v, y, w, k, L, D, F, Y, $, Q, re) {
  var Re;
  let ue = Q ? (zt(Q[1]) ? Q[1].error : Q[1].data) : void 0,
    ke = s.createURL(c.location),
    O = s.createURL(m),
    q;
  if (v && c.errors) {
    let he = Object.keys(c.errors)[0];
    q = d.findIndex((ge) => ge.route.id === he);
  } else if (Q && zt(Q[1])) {
    let he = Q[0];
    q = d.findIndex((ge) => ge.route.id === he) - 1;
  }
  let ee = Q ? Q[1].statusCode : void 0,
    ce = ee && ee >= 400,
    je = {
      currentUrl: ke,
      currentParams: ((Re = c.matches[0]) == null ? void 0 : Re.params) || {},
      nextUrl: O,
      nextParams: d[0].params,
      ...h,
      actionResult: ue,
      actionStatus: ee,
    },
    pe = ul(d),
    de = d.map((he, ge) => {
      let { route: I } = he,
        J = null;
      if (
        (q != null && ge > q
          ? (J = !1)
          : I.lazy
            ? (J = !0)
            : Ws(I)
              ? v
                ? (J = Ds(I, c.loaderData, c.errors))
                : Ym(c.loaderData, c.matches[ge], he) && (J = !0)
              : (J = !1),
        J !== null)
      )
        return bs(o, u, r, pe, he, g, i, J);
      let W = !1;
      typeof re == "boolean"
        ? (W = re)
        : ce
          ? (W = !1)
          : (y ||
              ke.pathname + ke.search === O.pathname + O.search ||
              ke.search !== O.search ||
              Qm(c.matches[ge], he)) &&
            (W = !0);
      let C = { ...je, defaultShouldRevalidate: W },
        b = tl(he, C);
      return bs(o, u, r, pe, he, g, i, b, C, re);
    }),
    ie = [];
  return (
    L.forEach((he, ge) => {
      if (v || !d.some((ve) => ve.route.id === he.routeId) || k.has(ge)) return;
      let I = c.fetchers.get(ge),
        J = I && I.state !== "idle" && I.data === void 0,
        W = Zn(F, he.path, Y);
      if (!W) {
        if ($ && J) return;
        ie.push({
          key: ge,
          routeId: he.routeId,
          path: he.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (D.has(ge)) return;
      let C = Lo(W, he.path),
        b = new AbortController(),
        me = ni(s, he.path, b.signal),
        xe = null;
      if (w.has(ge)) (w.delete(ge), (xe = ii(o, u, me, W, C, g, i)));
      else if (J) y && (xe = ii(o, u, me, W, C, g, i));
      else {
        let ve;
        typeof re == "boolean" ? (ve = re) : ce ? (ve = !1) : (ve = y);
        let Le = { ...je, defaultShouldRevalidate: ve };
        tl(C, Le) && (xe = ii(o, u, me, W, C, g, i, Le));
      }
      xe &&
        ie.push({
          key: ge,
          routeId: he.routeId,
          path: he.path,
          matches: xe,
          match: C,
          request: me,
          controller: b,
        });
    }),
    { dsMatches: de, revalidatingFetchers: ie }
  );
}
function Ws(r) {
  return r.loader != null || (r.middleware != null && r.middleware.length > 0);
}
function Ds(r, i, o) {
  if (r.lazy) return !0;
  if (!Ws(r)) return !1;
  let u = i != null && r.id in i,
    s = o != null && o[r.id] !== void 0;
  return !u && s
    ? !1
    : typeof r.loader == "function" && r.loader.hydrate === !0
      ? !0
      : !u && !s;
}
function Ym(r, i, o) {
  let u = !i || o.route.id !== i.route.id,
    s = !r.hasOwnProperty(o.route.id);
  return u || s;
}
function Qm(r, i) {
  let o = r.route.path;
  return (
    r.pathname !== i.pathname ||
    (o != null && o.endsWith("*") && r.params["*"] !== i.params["*"])
  );
}
function tl(r, i) {
  if (r.route.shouldRevalidate) {
    let o = r.route.shouldRevalidate(i);
    if (typeof o == "boolean") return o;
  }
  return i.defaultShouldRevalidate;
}
function Vf(r, i, o, u, s, c) {
  let d;
  if (r) {
    let g = u[r];
    (Me(g, `No route found to patch children into: routeId = ${r}`),
      g.children || (g.children = []),
      (d = g.children));
  } else d = o;
  let h = [],
    m = [];
  if (
    (i.forEach((g) => {
      let v = d.find((y) => Ud(g, y));
      v ? m.push({ existingRoute: v, newRoute: g }) : h.push(g);
    }),
    h.length > 0)
  ) {
    let g = ll(
      h,
      s,
      [r || "_", "patch", String((d == null ? void 0 : d.length) || "0")],
      u,
    );
    d.push(...g);
  }
  if (c && m.length > 0)
    for (let g = 0; g < m.length; g++) {
      let { existingRoute: v, newRoute: y } = m[g],
        w = v,
        [k] = ll([y], s, [], {}, !0);
      Object.assign(w, {
        element: k.element ? k.element : w.element,
        errorElement: k.errorElement ? k.errorElement : w.errorElement,
        hydrateFallbackElement: k.hydrateFallbackElement
          ? k.hydrateFallbackElement
          : w.hydrateFallbackElement,
      });
    }
}
function Ud(r, i) {
  return "id" in r && "id" in i && r.id === i.id
    ? !0
    : r.index === i.index &&
        r.path === i.path &&
        r.caseSensitive === i.caseSensitive
      ? (!r.children || r.children.length === 0) &&
        (!i.children || i.children.length === 0)
        ? !0
        : r.children.every((o, u) => {
            var s;
            return (s = i.children) == null ? void 0 : s.some((c) => Ud(o, c));
          })
      : !1;
}
var Wf = new WeakMap(),
  Ad = ({ key: r, route: i, manifest: o, mapRouteProperties: u }) => {
    let s = o[i.id];
    if (
      (Me(s, "No route found in manifest"),
      !s.lazy || typeof s.lazy != "object")
    )
      return;
    let c = s.lazy[r];
    if (!c) return;
    let d = Wf.get(s);
    d || ((d = {}), Wf.set(s, d));
    let h = d[r];
    if (h) return h;
    let m = (async () => {
      let g = fm(r),
        y = s[r] !== void 0 && r !== "hasErrorBoundary";
      if (g)
        (tt(
          !g,
          "Route property " +
            r +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (d[r] = Promise.resolve()));
      else if (y)
        tt(
          !1,
          `Route "${s.id}" has a static property "${r}" defined. The lazy property will be ignored.`,
        );
      else {
        let w = await c();
        w != null && (Object.assign(s, { [r]: w }), Object.assign(s, u(s)));
      }
      typeof s.lazy == "object" &&
        ((s.lazy[r] = void 0),
        Object.values(s.lazy).every((w) => w === void 0) && (s.lazy = void 0));
    })();
    return ((d[r] = m), m);
  },
  Kf = new WeakMap();
function Jm(r, i, o, u, s) {
  let c = o[r.id];
  if ((Me(c, "No route found in manifest"), !r.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof r.lazy == "function") {
    let v = Kf.get(c);
    if (v) return { lazyRoutePromise: v, lazyHandlerPromise: v };
    let y = (async () => {
      Me(typeof r.lazy == "function", "No lazy route function found");
      let w = await r.lazy(),
        k = {};
      for (let L in w) {
        let D = w[L];
        if (D === void 0) continue;
        let F = hm(L),
          $ = c[L] !== void 0 && L !== "hasErrorBoundary";
        F
          ? tt(
              !F,
              "Route property " +
                L +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : $
            ? tt(
                !$,
                `Route "${c.id}" has a static property "${L}" defined but its lazy function is also returning a value for this property. The lazy route property "${L}" will be ignored.`,
              )
            : (k[L] = D);
      }
      (Object.assign(c, k), Object.assign(c, { ...u(c), lazy: void 0 }));
    })();
    return (
      Kf.set(c, y),
      y.catch(() => {}),
      { lazyRoutePromise: y, lazyHandlerPromise: y }
    );
  }
  let d = Object.keys(r.lazy),
    h = [],
    m;
  for (let v of d) {
    if (s && s.includes(v)) continue;
    let y = Ad({ key: v, route: r, manifest: o, mapRouteProperties: u });
    y && (h.push(y), v === i && (m = y));
  }
  let g = h.length > 0 ? Promise.all(h).then(() => {}) : void 0;
  return (
    g == null || g.catch(() => {}),
    m == null || m.catch(() => {}),
    { lazyRoutePromise: g, lazyHandlerPromise: m }
  );
}
async function Yf(r) {
  let i = r.matches.filter((s) => s.shouldLoad),
    o = {};
  return (
    (await Promise.all(i.map((s) => s.resolve()))).forEach((s, c) => {
      o[i[c].route.id] = s;
    }),
    o
  );
}
async function Gm(r) {
  return r.matches.some((i) => i.route.middleware) ? Hd(r, () => Yf(r)) : Yf(r);
}
function Hd(r, i) {
  return Xm(
    r,
    i,
    (u) => {
      if (cg(u)) throw u;
      return u;
    },
    og,
    o,
  );
  function o(u, s, c) {
    if (c)
      return Promise.resolve(
        Object.assign(c.value, { [s]: { type: "error", result: u } }),
      );
    {
      let { matches: d } = r,
        h = Math.min(
          Math.max(
            d.findIndex((g) => g.route.id === s),
            0,
          ),
          Math.max(
            d.findIndex((g) => g.shouldCallHandler()),
            0,
          ),
        ),
        m = qn(d, d[h].route.id).route.id;
      return Promise.resolve({ [m]: { type: "error", result: u } });
    }
  }
}
async function Xm(r, i, o, u, s) {
  let {
      matches: c,
      request: d,
      params: h,
      context: m,
      unstable_pattern: g,
    } = r,
    v = c.flatMap((w) =>
      w.route.middleware ? w.route.middleware.map((k) => [w.route.id, k]) : [],
    );
  return await Bd(
    { request: d, params: h, context: m, unstable_pattern: g },
    v,
    i,
    o,
    u,
    s,
  );
}
async function Bd(r, i, o, u, s, c, d = 0) {
  let { request: h } = r;
  if (h.signal.aborted)
    throw h.signal.reason ?? new Error(`Request aborted: ${h.method} ${h.url}`);
  let m = i[d];
  if (!m) return await o();
  let [g, v] = m,
    y,
    w = async () => {
      if (y) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((y = { value: await Bd(r, i, o, u, s, c, d + 1) }), y.value);
      } catch (k) {
        return ((y = { value: await c(k, g, y) }), y.value);
      }
    };
  try {
    let k = await v(r, w),
      L = k != null ? u(k) : void 0;
    return s(L)
      ? L
      : y
        ? (L ?? y.value)
        : ((y = { value: await w() }), y.value);
  } catch (k) {
    return await c(k, g, y);
  }
}
function Vd(r, i, o, u, s) {
  let c = Ad({
      key: "middleware",
      route: u.route,
      manifest: i,
      mapRouteProperties: r,
    }),
    d = Jm(u.route, mt(o.method) ? "action" : "loader", i, r, s);
  return {
    middleware: c,
    route: d.lazyRoutePromise,
    handler: d.lazyHandlerPromise,
  };
}
function bs(r, i, o, u, s, c, d, h, m = null, g) {
  let v = !1,
    y = Vd(r, i, o, s, c);
  return {
    ...s,
    _lazyPromises: y,
    shouldLoad: h,
    shouldRevalidateArgs: m,
    shouldCallHandler(w) {
      return (
        (v = !0),
        m
          ? typeof g == "boolean"
            ? tl(s, { ...m, defaultShouldRevalidate: g })
            : typeof w == "boolean"
              ? tl(s, { ...m, defaultShouldRevalidate: w })
              : tl(s, m)
          : h
      );
    },
    resolve(w) {
      let { lazy: k, loader: L, middleware: D } = s.route,
        F = v || h || (w && !mt(o.method) && (k || L)),
        Y = D && D.length > 0 && !L && !k;
      return F && (mt(o.method) || !Y)
        ? qm({
            request: o,
            unstable_pattern: u,
            match: s,
            lazyHandlerPromise: y == null ? void 0 : y.handler,
            lazyRoutePromise: y == null ? void 0 : y.route,
            handlerOverride: w,
            scopedContext: d,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function ii(r, i, o, u, s, c, d, h = null) {
  return u.map((m) =>
    m.route.id !== s.route.id
      ? {
          ...m,
          shouldLoad: !1,
          shouldRevalidateArgs: h,
          shouldCallHandler: () => !1,
          _lazyPromises: Vd(r, i, o, m, c),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : bs(r, i, o, ul(u), m, c, d, !0, h),
  );
}
async function Zm(r, i, o, u, s, c) {
  o.some((g) => {
    var v;
    return (v = g._lazyPromises) == null ? void 0 : v.middleware;
  }) &&
    (await Promise.all(
      o.map((g) => {
        var v;
        return (v = g._lazyPromises) == null ? void 0 : v.middleware;
      }),
    ));
  let d = {
      request: i,
      unstable_pattern: ul(o),
      params: o[0].params,
      context: s,
      matches: o,
    },
    m = await r({
      ...d,
      fetcherKey: u,
      runClientMiddleware: (g) => {
        let v = d;
        return Hd(v, () =>
          g({
            ...v,
            fetcherKey: u,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler",
              );
            },
          }),
        );
      },
    });
  try {
    await Promise.all(
      o.flatMap((g) => {
        var v, y;
        return [
          (v = g._lazyPromises) == null ? void 0 : v.handler,
          (y = g._lazyPromises) == null ? void 0 : y.route,
        ];
      }),
    );
  } catch {}
  return m;
}
async function qm({
  request: r,
  unstable_pattern: i,
  match: o,
  lazyHandlerPromise: u,
  lazyRoutePromise: s,
  handlerOverride: c,
  scopedContext: d,
}) {
  let h,
    m,
    g = mt(r.method),
    v = g ? "action" : "loader",
    y = (w) => {
      let k,
        L = new Promise((Y, $) => (k = $));
      ((m = () => k()), r.signal.addEventListener("abort", m));
      let D = (Y) =>
          typeof w != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${o.route.id}]`,
                ),
              )
            : w(
                {
                  request: r,
                  unstable_pattern: i,
                  params: o.params,
                  context: d,
                },
                ...(Y !== void 0 ? [Y] : []),
              ),
        F = (async () => {
          try {
            return { type: "data", result: await (c ? c(($) => D($)) : D()) };
          } catch (Y) {
            return { type: "error", result: Y };
          }
        })();
      return Promise.race([F, L]);
    };
  try {
    let w = g ? o.route.action : o.route.loader;
    if (u || s)
      if (w) {
        let k,
          [L] = await Promise.all([
            y(w).catch((D) => {
              k = D;
            }),
            u,
            s,
          ]);
        if (k !== void 0) throw k;
        h = L;
      } else {
        await u;
        let k = g ? o.route.action : o.route.loader;
        if (k) [h] = await Promise.all([y(k), s]);
        else if (v === "action") {
          let L = new URL(r.url),
            D = L.pathname + L.search;
          throw Vt(405, { method: r.method, pathname: D, routeId: o.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (w) h = await y(w);
    else {
      let k = new URL(r.url),
        L = k.pathname + k.search;
      throw Vt(404, { pathname: L });
    }
  } catch (w) {
    return { type: "error", result: w };
  } finally {
    m && r.signal.removeEventListener("abort", m);
  }
  return h;
}
async function eg(r) {
  let i = r.headers.get("Content-Type");
  return i && /\bapplication\/json\b/.test(i)
    ? r.body == null
      ? null
      : r.json()
    : r.text();
}
async function tg(r) {
  var u, s, c, d, h;
  let { result: i, type: o } = r;
  if (Ks(i)) {
    let m;
    try {
      m = await eg(i);
    } catch (g) {
      return { type: "error", error: g };
    }
    return o === "error"
      ? {
          type: "error",
          error: new sl(i.status, i.statusText, m),
          statusCode: i.status,
          headers: i.headers,
        }
      : { type: "data", data: m, statusCode: i.status, headers: i.headers };
  }
  return o === "error"
    ? qf(i)
      ? i.data instanceof Error
        ? {
            type: "error",
            error: i.data,
            statusCode: (u = i.init) == null ? void 0 : u.status,
            headers:
              (s = i.init) != null && s.headers
                ? new Headers(i.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: lg(i),
            statusCode: ol(i) ? i.status : void 0,
            headers:
              (c = i.init) != null && c.headers
                ? new Headers(i.init.headers)
                : void 0,
          }
      : { type: "error", error: i, statusCode: ol(i) ? i.status : void 0 }
    : qf(i)
      ? {
          type: "data",
          data: i.data,
          statusCode: (d = i.init) == null ? void 0 : d.status,
          headers:
            (h = i.init) != null && h.headers
              ? new Headers(i.init.headers)
              : void 0,
        }
      : { type: "data", data: i };
}
function ng(r, i, o, u, s) {
  let c = r.headers.get("Location");
  if (
    (Me(
      c,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Hs(c))
  ) {
    let d = u.slice(0, u.findIndex((h) => h.route.id === o) + 1);
    ((c = zs(new URL(i.url), d, s, c)), r.headers.set("Location", c));
  }
  return r;
}
function Qf(r, i, o, u) {
  let s = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    "javascript:",
  ];
  if (Hs(r)) {
    let c = r,
      d = c.startsWith("//") ? new URL(i.protocol + c) : new URL(c);
    if (s.includes(d.protocol)) throw new Error("Invalid redirect location");
    let h = Wt(d.pathname, o) != null;
    if (d.origin === i.origin && h) return d.pathname + d.search + d.hash;
  }
  try {
    let c = u.createURL(r);
    if (s.includes(c.protocol)) throw new Error("Invalid redirect location");
  } catch {}
  return r;
}
function ni(r, i, o, u) {
  let s = r.createURL(Wd(i)).toString(),
    c = { signal: o };
  if (u && mt(u.formMethod)) {
    let { formMethod: d, formEncType: h } = u;
    ((c.method = d.toUpperCase()),
      h === "application/json"
        ? ((c.headers = new Headers({ "Content-Type": h })),
          (c.body = JSON.stringify(u.json)))
        : h === "text/plain"
          ? (c.body = u.text)
          : h === "application/x-www-form-urlencoded" && u.formData
            ? (c.body = Fs(u.formData))
            : (c.body = u.formData));
  }
  return new Request(s, c);
}
function Fs(r) {
  let i = new URLSearchParams();
  for (let [o, u] of r.entries())
    i.append(o, typeof u == "string" ? u : u.name);
  return i;
}
function Jf(r) {
  let i = new FormData();
  for (let [o, u] of r.entries()) i.append(o, u);
  return i;
}
function rg(r, i, o, u = !1, s = !1) {
  let c = {},
    d = null,
    h,
    m = !1,
    g = {},
    v = o && zt(o[1]) ? o[1].error : void 0;
  return (
    r.forEach((y) => {
      if (!(y.route.id in i)) return;
      let w = y.route.id,
        k = i[w];
      if (
        (Me(!Rr(k), "Cannot handle redirect results in processLoaderData"),
        zt(k))
      ) {
        let L = k.error;
        if ((v !== void 0 && ((L = v), (v = void 0)), (d = d || {}), s))
          d[w] = L;
        else {
          let D = qn(r, w);
          d[D.route.id] == null && (d[D.route.id] = L);
        }
        (u || (c[w] = $d),
          m || ((m = !0), (h = ol(k.error) ? k.error.status : 500)),
          k.headers && (g[w] = k.headers));
      } else
        ((c[w] = k.data),
          k.statusCode && k.statusCode !== 200 && !m && (h = k.statusCode),
          k.headers && (g[w] = k.headers));
    }),
    v !== void 0 && o && ((d = { [o[0]]: v }), o[2] && (c[o[2]] = void 0)),
    { loaderData: c, errors: d, statusCode: h || 200, loaderHeaders: g }
  );
}
function Gf(r, i, o, u, s, c) {
  let { loaderData: d, errors: h } = rg(i, o, u);
  return (
    s
      .filter((m) => !m.matches || m.matches.some((g) => g.shouldLoad))
      .forEach((m) => {
        let { key: g, match: v, controller: y } = m;
        if (y && y.signal.aborted) return;
        let w = c[g];
        if ((Me(w, "Did not find corresponding fetcher result"), zt(w))) {
          let k = qn(r.matches, v == null ? void 0 : v.route.id);
          ((h && h[k.route.id]) || (h = { ...h, [k.route.id]: w.error }),
            r.fetchers.delete(g));
        } else if (Rr(w)) Me(!1, "Unhandled fetcher revalidation redirect");
        else {
          let k = Rn(w.data);
          r.fetchers.set(g, k);
        }
      }),
    { loaderData: d, errors: h }
  );
}
function Xf(r, i, o, u) {
  let s = Object.entries(i)
    .filter(([, c]) => c !== $d)
    .reduce((c, [d, h]) => ((c[d] = h), c), {});
  for (let c of o) {
    let d = c.route.id;
    if (
      (!i.hasOwnProperty(d) &&
        r.hasOwnProperty(d) &&
        c.route.loader &&
        (s[d] = r[d]),
      u && u.hasOwnProperty(d))
    )
      break;
  }
  return s;
}
function Zf(r) {
  return r
    ? zt(r[1])
      ? { actionData: {} }
      : { actionData: { [r[0]]: r[1].data } }
    : {};
}
function qn(r, i) {
  return (
    (i ? r.slice(0, r.findIndex((u) => u.route.id === i) + 1) : [...r])
      .reverse()
      .find((u) => u.route.hasErrorBoundary === !0) || r[0]
  );
}
function Eo(r) {
  let i =
    r.length === 1
      ? r[0]
      : r.find((o) => o.index || !o.path || o.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: i }],
    route: i,
  };
}
function Vt(
  r,
  { pathname: i, routeId: o, method: u, type: s, message: c } = {},
) {
  let d = "Unknown Server Error",
    h = "Unknown @remix-run/router error";
  return (
    r === 400
      ? ((d = "Bad Request"),
        u && i && o
          ? (h = `You made a ${u} request to "${i}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`)
          : s === "invalid-body" && (h = "Unable to encode submission body"))
      : r === 403
        ? ((d = "Forbidden"), (h = `Route "${o}" does not match URL "${i}"`))
        : r === 404
          ? ((d = "Not Found"), (h = `No route matches URL "${i}"`))
          : r === 405 &&
            ((d = "Method Not Allowed"),
            u && i && o
              ? (h = `You made a ${u.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`)
              : u && (h = `Invalid request method "${u.toUpperCase()}"`)),
    new sl(r || 500, d, new Error(h), !0)
  );
}
function Co(r) {
  let i = Object.entries(r);
  for (let o = i.length - 1; o >= 0; o--) {
    let [u, s] = i[o];
    if (Rr(s)) return { key: u, result: s };
  }
}
function Wd(r) {
  let i = typeof r == "string" ? tr(r) : r;
  return fn({ ...i, hash: "" });
}
function ig(r, i) {
  return r.pathname !== i.pathname || r.search !== i.search
    ? !1
    : r.hash === ""
      ? i.hash !== ""
      : r.hash === i.hash
        ? !0
        : i.hash !== "";
}
function lg(r) {
  var i, o;
  return new sl(
    ((i = r.init) == null ? void 0 : i.status) ?? 500,
    ((o = r.init) == null ? void 0 : o.statusText) ?? "Internal Server Error",
    r.data,
  );
}
function og(r) {
  return (
    r != null &&
    typeof r == "object" &&
    Object.entries(r).every(([i, o]) => typeof i == "string" && ag(o))
  );
}
function ag(r) {
  return (
    r != null &&
    typeof r == "object" &&
    "type" in r &&
    "result" in r &&
    (r.type === "data" || r.type === "error")
  );
}
function sg(r) {
  return Ks(r.result) && Fd.has(r.result.status);
}
function zt(r) {
  return r.type === "error";
}
function Rr(r) {
  return (r && r.type) === "redirect";
}
function qf(r) {
  return (
    typeof r == "object" &&
    r != null &&
    "type" in r &&
    "data" in r &&
    "init" in r &&
    r.type === "DataWithResponseInit"
  );
}
function Ks(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.headers == "object" &&
    typeof r.body < "u"
  );
}
function ug(r) {
  return Fd.has(r);
}
function cg(r) {
  return Ks(r) && ug(r.status) && r.headers.has("Location");
}
function fg(r) {
  return Am.has(r.toUpperCase());
}
function mt(r) {
  return $m.has(r.toUpperCase());
}
function Ys(r) {
  return new URLSearchParams(r).getAll("index").some((i) => i === "");
}
function Lo(r, i) {
  let o = typeof i == "string" ? tr(i).search : i.search;
  if (r[r.length - 1].route.index && Ys(o || "")) return r[r.length - 1];
  let u = _d(r);
  return u[u.length - 1];
}
function ed(r) {
  let {
    formMethod: i,
    formAction: o,
    formEncType: u,
    text: s,
    formData: c,
    json: d,
  } = r;
  if (!(!i || !o || !u)) {
    if (s != null)
      return {
        formMethod: i,
        formAction: o,
        formEncType: u,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (c != null)
      return {
        formMethod: i,
        formAction: o,
        formEncType: u,
        formData: c,
        json: void 0,
        text: void 0,
      };
    if (d !== void 0)
      return {
        formMethod: i,
        formAction: o,
        formEncType: u,
        formData: void 0,
        json: d,
        text: void 0,
      };
  }
}
function Ns(r, i) {
  return i
    ? {
        state: "loading",
        location: r,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
      }
    : {
        state: "loading",
        location: r,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function dg(r, i) {
  return {
    state: "submitting",
    location: r,
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
  };
}
function Gi(r, i) {
  return r
    ? {
        state: "loading",
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
        data: i,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: i,
      };
}
function hg(r, i) {
  return {
    state: "submitting",
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
    data: i ? i.data : void 0,
  };
}
function Rn(r) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: r,
  };
}
function pg(r, i) {
  try {
    let o = r.sessionStorage.getItem(Id);
    if (o) {
      let u = JSON.parse(o);
      for (let [s, c] of Object.entries(u || {}))
        c && Array.isArray(c) && i.set(s, new Set(c || []));
    }
  } catch {}
}
function mg(r, i) {
  if (i.size > 0) {
    let o = {};
    for (let [u, s] of i) o[u] = [...s];
    try {
      r.sessionStorage.setItem(Id, JSON.stringify(o));
    } catch (u) {
      tt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${u}).`,
      );
    }
  }
}
function td() {
  let r,
    i,
    o = new Promise((u, s) => {
      ((r = async (c) => {
        u(c);
        try {
          await o;
        } catch {}
      }),
        (i = async (c) => {
          s(c);
          try {
            await o;
          } catch {}
        }));
    });
  return { promise: o, resolve: r, reject: i };
}
var Lr = j.createContext(null);
Lr.displayName = "DataRouter";
var cl = j.createContext(null);
cl.displayName = "DataRouterState";
var Kd = j.createContext(!1);
function gg() {
  return j.useContext(Kd);
}
var Qs = j.createContext({ isTransitioning: !1 });
Qs.displayName = "ViewTransition";
var Yd = j.createContext(new Map());
Yd.displayName = "Fetchers";
var yg = j.createContext(null);
yg.displayName = "Await";
var Kt = j.createContext(null);
Kt.displayName = "Navigation";
var bo = j.createContext(null);
bo.displayName = "Location";
var dn = j.createContext({ outlet: null, matches: [], isDataRoute: !1 });
dn.displayName = "Route";
var Js = j.createContext(null);
Js.displayName = "RouteError";
var Qd = "REACT_ROUTER_ERROR",
  vg = "REDIRECT",
  xg = "ROUTE_ERROR_RESPONSE";
function wg(r) {
  if (r.startsWith(`${Qd}:${vg}:{`))
    try {
      let i = JSON.parse(r.slice(28));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string" &&
        typeof i.location == "string" &&
        typeof i.reloadDocument == "boolean" &&
        typeof i.replace == "boolean"
      )
        return i;
    } catch {}
}
function Sg(r) {
  if (r.startsWith(`${Qd}:${xg}:{`))
    try {
      let i = JSON.parse(r.slice(40));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string"
      )
        return new sl(i.status, i.statusText, i.data);
    } catch {}
}
function kg(r, { relative: i } = {}) {
  Me(
    fl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: o, navigator: u } = j.useContext(Kt),
    { hash: s, pathname: c, search: d } = dl(r, { relative: i }),
    h = c;
  return (
    o !== "/" && (h = c === "/" ? o : cn([o, c])),
    u.createHref({ pathname: h, search: d, hash: s })
  );
}
function fl() {
  return j.useContext(bo) != null;
}
function nr() {
  return (
    Me(
      fl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    j.useContext(bo).location
  );
}
var Jd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Gd(r) {
  j.useContext(Kt).static || j.useLayoutEffect(r);
}
function Eg() {
  let { isDataRoute: r } = j.useContext(dn);
  return r ? Ig() : Cg();
}
function Cg() {
  Me(
    fl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let r = j.useContext(Lr),
    { basename: i, navigator: o } = j.useContext(Kt),
    { matches: u } = j.useContext(dn),
    { pathname: s } = nr(),
    c = JSON.stringify(Bs(u)),
    d = j.useRef(!1);
  return (
    Gd(() => {
      d.current = !0;
    }),
    j.useCallback(
      (m, g = {}) => {
        if ((tt(d.current, Jd), !d.current)) return;
        if (typeof m == "number") {
          o.go(m);
          return;
        }
        let v = Vs(m, JSON.parse(c), s, g.relative === "path");
        (r == null &&
          i !== "/" &&
          (v.pathname = v.pathname === "/" ? i : cn([i, v.pathname])),
          (g.replace ? o.replace : o.push)(v, g.state, g));
      },
      [i, o, c, s, r],
    )
  );
}
var Rg = j.createContext(null);
function Ng(r) {
  let i = j.useContext(dn).outlet;
  return j.useMemo(
    () => i && j.createElement(Rg.Provider, { value: r }, i),
    [i, r],
  );
}
function dl(r, { relative: i } = {}) {
  let { matches: o } = j.useContext(dn),
    { pathname: u } = nr(),
    s = JSON.stringify(Bs(o));
  return j.useMemo(() => Vs(r, JSON.parse(s), u, i === "path"), [r, s, u, i]);
}
function Lg(r, i, o, u, s) {
  Me(
    fl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: c } = j.useContext(Kt),
    { matches: d } = j.useContext(dn),
    h = d[d.length - 1],
    m = h ? h.params : {},
    g = h ? h.pathname : "/",
    v = h ? h.pathnameBase : "/",
    y = h && h.route;
  {
    let $ = (y && y.path) || "";
    Zd(
      g,
      !y || $.endsWith("*") || $.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$ === "/" ? "*" : `${$}/*`}">.`,
    );
  }
  let w = nr(),
    k;
  k = w;
  let L = k.pathname || "/",
    D = L;
  if (v !== "/") {
    let $ = v.replace(/^\//, "").split("/");
    D = "/" + L.replace(/^\//, "").split("/").slice($.length).join("/");
  }
  let F = Zn(r, { pathname: D });
  return (
    tt(
      y || F != null,
      `No routes matched location "${k.pathname}${k.search}${k.hash}" `,
    ),
    tt(
      F == null ||
        F[F.length - 1].route.element !== void 0 ||
        F[F.length - 1].route.Component !== void 0 ||
        F[F.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    _g(
      F &&
        F.map(($) =>
          Object.assign({}, $, {
            params: Object.assign({}, m, $.params),
            pathname: cn([
              v,
              c.encodeLocation
                ? c.encodeLocation(
                    $.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                  ).pathname
                : $.pathname,
            ]),
            pathnameBase:
              $.pathnameBase === "/"
                ? v
                : cn([
                    v,
                    c.encodeLocation
                      ? c.encodeLocation(
                          $.pathnameBase
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23"),
                        ).pathname
                      : $.pathnameBase,
                  ]),
          }),
        ),
      d,
      o,
      u,
      s,
    )
  );
}
function Pg() {
  let r = Fg(),
    i = ol(r)
      ? `${r.status} ${r.statusText}`
      : r instanceof Error
        ? r.message
        : JSON.stringify(r),
    o = r instanceof Error ? r.stack : null,
    u = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: u },
    c = { padding: "2px 4px", backgroundColor: u },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", r),
    (d = j.createElement(
      j.Fragment,
      null,
      j.createElement("p", null, "💿 Hey developer 👋"),
      j.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        j.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        j.createElement("code", { style: c }, "errorElement"),
        " prop on your route.",
      ),
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement("h2", null, "Unexpected Application Error!"),
      j.createElement("h3", { style: { fontStyle: "italic" } }, i),
      o ? j.createElement("pre", { style: s }, o) : null,
      d,
    )
  );
}
var jg = j.createElement(Pg, null),
  Xd = class extends j.Component {
    constructor(r) {
      (super(r),
        (this.state = {
          location: r.location,
          revalidation: r.revalidation,
          error: r.error,
        }));
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, i) {
      return i.location !== r.location ||
        (i.revalidation !== "idle" && r.revalidation === "idle")
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : i.error,
            location: i.location,
            revalidation: r.revalidation || i.revalidation,
          };
    }
    componentDidCatch(r, i) {
      this.props.onError
        ? this.props.onError(r, i)
        : console.error(
            "React Router caught the following error during render",
            r,
          );
    }
    render() {
      let r = this.state.error;
      if (
        this.context &&
        typeof r == "object" &&
        r &&
        "digest" in r &&
        typeof r.digest == "string"
      ) {
        const o = Sg(r.digest);
        o && (r = o);
      }
      let i =
        r !== void 0
          ? j.createElement(
              dn.Provider,
              { value: this.props.routeContext },
              j.createElement(Js.Provider, {
                value: r,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? j.createElement(Og, { error: r }, i) : i;
    }
  };
Xd.contextType = Kd;
var Ls = new WeakMap();
function Og({ children: r, error: i }) {
  let { basename: o } = j.useContext(Kt);
  if (
    typeof i == "object" &&
    i &&
    "digest" in i &&
    typeof i.digest == "string"
  ) {
    let u = wg(i.digest);
    if (u) {
      let s = Ls.get(i);
      if (s) throw s;
      let c = zd(u.location, o);
      if (Td && !Ls.get(i))
        if (c.isExternal || u.reloadDocument)
          window.location.href = c.absoluteURL || c.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(c.to, {
              replace: u.replace,
            }),
          );
          throw (Ls.set(i, d), d);
        }
      return j.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${c.absoluteURL || c.to}`,
      });
    }
  }
  return r;
}
function Mg({ routeContext: r, match: i, children: o }) {
  let u = j.useContext(Lr);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = i.route.id),
    j.createElement(dn.Provider, { value: r }, o)
  );
}
function _g(r, i = [], o = null, u = null, s = null) {
  if (r == null) {
    if (!o) return null;
    if (o.errors) r = o.matches;
    else if (i.length === 0 && !o.initialized && o.matches.length > 0)
      r = o.matches;
    else return null;
  }
  let c = r,
    d = o == null ? void 0 : o.errors;
  if (d != null) {
    let v = c.findIndex(
      (y) => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0,
    );
    (Me(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (c = c.slice(0, Math.min(c.length, v + 1))));
  }
  let h = !1,
    m = -1;
  if (o)
    for (let v = 0; v < c.length; v++) {
      let y = c[v];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = v),
        y.route.id)
      ) {
        let { loaderData: w, errors: k } = o,
          L =
            y.route.loader &&
            !w.hasOwnProperty(y.route.id) &&
            (!k || k[y.route.id] === void 0);
        if (y.route.lazy || L) {
          ((h = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  let g =
    o && u
      ? (v, y) => {
          var w, k;
          u(v, {
            location: o.location,
            params:
              ((k = (w = o.matches) == null ? void 0 : w[0]) == null
                ? void 0
                : k.params) ?? {},
            unstable_pattern: ul(o.matches),
            errorInfo: y,
          });
        }
      : void 0;
  return c.reduceRight((v, y, w) => {
    let k,
      L = !1,
      D = null,
      F = null;
    o &&
      ((k = d && y.route.id ? d[y.route.id] : void 0),
      (D = y.route.errorElement || jg),
      h &&
        (m < 0 && w === 0
          ? (Zd(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (L = !0),
            (F = null))
          : m === w &&
            ((L = !0), (F = y.route.hydrateFallbackElement || null))));
    let Y = i.concat(c.slice(0, w + 1)),
      $ = () => {
        let Q;
        return (
          k
            ? (Q = D)
            : L
              ? (Q = F)
              : y.route.Component
                ? (Q = j.createElement(y.route.Component, null))
                : y.route.element
                  ? (Q = y.route.element)
                  : (Q = v),
          j.createElement(Mg, {
            match: y,
            routeContext: { outlet: v, matches: Y, isDataRoute: o != null },
            children: Q,
          })
        );
      };
    return o && (y.route.ErrorBoundary || y.route.errorElement || w === 0)
      ? j.createElement(Xd, {
          location: o.location,
          revalidation: o.revalidation,
          component: D,
          error: k,
          children: $(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
          onError: g,
        })
      : $();
  }, null);
}
function Gs(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tg(r) {
  let i = j.useContext(Lr);
  return (Me(i, Gs(r)), i);
}
function zg(r) {
  let i = j.useContext(cl);
  return (Me(i, Gs(r)), i);
}
function Dg(r) {
  let i = j.useContext(dn);
  return (Me(i, Gs(r)), i);
}
function Xs(r) {
  let i = Dg(r),
    o = i.matches[i.matches.length - 1];
  return (
    Me(
      o.route.id,
      `${r} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function bg() {
  return Xs("useRouteId");
}
function Fg() {
  var u;
  let r = j.useContext(Js),
    i = zg("useRouteError"),
    o = Xs("useRouteError");
  return r !== void 0 ? r : (u = i.errors) == null ? void 0 : u[o];
}
function Ig() {
  let { router: r } = Tg("useNavigate"),
    i = Xs("useNavigate"),
    o = j.useRef(!1);
  return (
    Gd(() => {
      o.current = !0;
    }),
    j.useCallback(
      async (s, c = {}) => {
        (tt(o.current, Jd),
          o.current &&
            (typeof s == "number"
              ? await r.navigate(s)
              : await r.navigate(s, { fromRouteId: i, ...c })));
      },
      [r, i],
    )
  );
}
var nd = {};
function Zd(r, i, o) {
  !i && !nd[r] && ((nd[r] = !0), tt(!1, o));
}
var rd = {};
function id(r, i) {
  !r && !rd[i] && ((rd[i] = !0), console.warn(i));
}
var $g = "useOptimistic",
  ld = im[$g],
  Ug = () => {};
function Ag(r) {
  return ld ? ld(r) : [r, Ug];
}
function Hg(r) {
  let i = {
    hasErrorBoundary:
      r.hasErrorBoundary || r.ErrorBoundary != null || r.errorElement != null,
  };
  return (
    r.Component &&
      (r.element &&
        tt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(i, {
        element: j.createElement(r.Component),
        Component: void 0,
      })),
    r.HydrateFallback &&
      (r.hydrateFallbackElement &&
        tt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(i, {
        hydrateFallbackElement: j.createElement(r.HydrateFallback),
        HydrateFallback: void 0,
      })),
    r.ErrorBoundary &&
      (r.errorElement &&
        tt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(i, {
        errorElement: j.createElement(r.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    i
  );
}
var Bg = ["HydrateFallback", "hydrateFallbackElement"],
  Vg = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((r, i) => {
          ((this.resolve = (o) => {
            this.status === "pending" && ((this.status = "resolved"), r(o));
          }),
            (this.reject = (o) => {
              this.status === "pending" && ((this.status = "rejected"), i(o));
            }));
        })));
    }
  };
function Wg({
  router: r,
  flushSync: i,
  onError: o,
  unstable_useTransitions: u,
}) {
  u = gg() || u;
  let [c, d] = j.useState(r.state),
    [h, m] = Ag(c),
    [g, v] = j.useState(),
    [y, w] = j.useState({ isTransitioning: !1 }),
    [k, L] = j.useState(),
    [D, F] = j.useState(),
    [Y, $] = j.useState(),
    Q = j.useRef(new Map()),
    re = j.useCallback(
      (
        q,
        {
          deletedFetchers: ee,
          newErrors: ce,
          flushSync: je,
          viewTransitionOpts: pe,
        },
      ) => {
        (ce &&
          o &&
          Object.values(ce).forEach((ie) => {
            var Re;
            return o(ie, {
              location: q.location,
              params: ((Re = q.matches[0]) == null ? void 0 : Re.params) ?? {},
              unstable_pattern: ul(q.matches),
            });
          }),
          q.fetchers.forEach((ie, Re) => {
            ie.data !== void 0 && Q.current.set(Re, ie.data);
          }),
          ee.forEach((ie) => Q.current.delete(ie)),
          id(
            je === !1 || i != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let de =
          r.window != null &&
          r.window.document != null &&
          typeof r.window.document.startViewTransition == "function";
        if (
          (id(
            pe == null || de,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !pe || !de)
        ) {
          i && je
            ? i(() => d(q))
            : u === !1
              ? d(q)
              : j.startTransition(() => {
                  (u === !0 && m((ie) => od(ie, q)), d(q));
                });
          return;
        }
        if (i && je) {
          i(() => {
            (D && (k == null || k.resolve(), D.skipTransition()),
              w({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: pe.currentLocation,
                nextLocation: pe.nextLocation,
              }));
          });
          let ie = r.window.document.startViewTransition(() => {
            i(() => d(q));
          });
          (ie.finished.finally(() => {
            i(() => {
              (L(void 0), F(void 0), v(void 0), w({ isTransitioning: !1 }));
            });
          }),
            i(() => F(ie)));
          return;
        }
        D
          ? (k == null || k.resolve(),
            D.skipTransition(),
            $({
              state: q,
              currentLocation: pe.currentLocation,
              nextLocation: pe.nextLocation,
            }))
          : (v(q),
            w({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: pe.currentLocation,
              nextLocation: pe.nextLocation,
            }));
      },
      [r.window, i, D, k, u, m, o],
    );
  (j.useLayoutEffect(() => r.subscribe(re), [r, re]),
    j.useEffect(() => {
      y.isTransitioning && !y.flushSync && L(new Vg());
    }, [y]),
    j.useEffect(() => {
      if (k && g && r.window) {
        let q = g,
          ee = k.promise,
          ce = r.window.document.startViewTransition(async () => {
            (u === !1
              ? d(q)
              : j.startTransition(() => {
                  (u === !0 && m((je) => od(je, q)), d(q));
                }),
              await ee);
          });
        (ce.finished.finally(() => {
          (L(void 0), F(void 0), v(void 0), w({ isTransitioning: !1 }));
        }),
          F(ce));
      }
    }, [g, k, r.window, u, m]),
    j.useEffect(() => {
      k && g && h.location.key === g.location.key && k.resolve();
    }, [k, D, h.location, g]),
    j.useEffect(() => {
      !y.isTransitioning &&
        Y &&
        (v(Y.state),
        w({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: Y.currentLocation,
          nextLocation: Y.nextLocation,
        }),
        $(void 0));
    }, [y.isTransitioning, Y]));
  let ue = j.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (q) => r.navigate(q),
        push: (q, ee, ce) =>
          r.navigate(q, {
            state: ee,
            preventScrollReset: ce == null ? void 0 : ce.preventScrollReset,
          }),
        replace: (q, ee, ce) =>
          r.navigate(q, {
            replace: !0,
            state: ee,
            preventScrollReset: ce == null ? void 0 : ce.preventScrollReset,
          }),
      }),
      [r],
    ),
    ke = r.basename || "/",
    O = j.useMemo(
      () => ({
        router: r,
        navigator: ue,
        static: !1,
        basename: ke,
        onError: o,
      }),
      [r, ue, ke, o],
    );
  return j.createElement(
    j.Fragment,
    null,
    j.createElement(
      Lr.Provider,
      { value: O },
      j.createElement(
        cl.Provider,
        { value: h },
        j.createElement(
          Yd.Provider,
          { value: Q.current },
          j.createElement(
            Qs.Provider,
            { value: y },
            j.createElement(
              Jg,
              {
                basename: ke,
                location: h.location,
                navigationType: h.historyAction,
                navigator: ue,
                unstable_useTransitions: u,
              },
              j.createElement(Kg, {
                routes: r.routes,
                future: r.future,
                state: h,
                onError: o,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function od(r, i) {
  return {
    ...r,
    navigation: i.navigation.state !== "idle" ? i.navigation : r.navigation,
    revalidation: i.revalidation !== "idle" ? i.revalidation : r.revalidation,
    actionData:
      i.navigation.state !== "submitting" ? i.actionData : r.actionData,
    fetchers: i.fetchers,
  };
}
var Kg = j.memo(Yg);
function Yg({ routes: r, future: i, state: o, onError: u }) {
  return Lg(r, void 0, o, u, i);
}
function Qg(r) {
  return Ng(r.context);
}
function Jg({
  basename: r = "/",
  children: i = null,
  location: o,
  navigationType: u = "POP",
  navigator: s,
  static: c = !1,
  unstable_useTransitions: d,
}) {
  Me(
    !fl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let h = r.replace(/^\/*/, "/"),
    m = j.useMemo(
      () => ({
        basename: h,
        navigator: s,
        static: c,
        unstable_useTransitions: d,
        future: {},
      }),
      [h, s, c, d],
    );
  typeof o == "string" && (o = tr(o));
  let {
      pathname: g = "/",
      search: v = "",
      hash: y = "",
      state: w = null,
      key: k = "default",
    } = o,
    L = j.useMemo(() => {
      let D = Wt(g, h);
      return D == null
        ? null
        : {
            location: { pathname: D, search: v, hash: y, state: w, key: k },
            navigationType: u,
          };
    }, [h, g, v, y, w, k, u]);
  return (
    tt(
      L != null,
      `<Router basename="${h}"> is not able to match the URL "${g}${v}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    L == null
      ? null
      : j.createElement(
          Kt.Provider,
          { value: m },
          j.createElement(bo.Provider, { children: i, value: L }),
        )
  );
}
var Po = "get",
  jo = "application/x-www-form-urlencoded";
function Fo(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Gg(r) {
  return Fo(r) && r.tagName.toLowerCase() === "button";
}
function Xg(r) {
  return Fo(r) && r.tagName.toLowerCase() === "form";
}
function Zg(r) {
  return Fo(r) && r.tagName.toLowerCase() === "input";
}
function qg(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function ey(r, i) {
  return r.button === 0 && (!i || i === "_self") && !qg(r);
}
var Ro = null;
function ty() {
  if (Ro === null)
    try {
      (new FormData(document.createElement("form"), 0), (Ro = !1));
    } catch {
      Ro = !0;
    }
  return Ro;
}
var ny = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ps(r) {
  return r != null && !ny.has(r)
    ? (tt(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jo}"`,
      ),
      null)
    : r;
}
function ry(r, i) {
  let o, u, s, c, d;
  if (Xg(r)) {
    let h = r.getAttribute("action");
    ((u = h ? Wt(h, i) : null),
      (o = r.getAttribute("method") || Po),
      (s = Ps(r.getAttribute("enctype")) || jo),
      (c = new FormData(r)));
  } else if (Gg(r) || (Zg(r) && (r.type === "submit" || r.type === "image"))) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = r.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((u = m ? Wt(m, i) : null),
      (o = r.getAttribute("formmethod") || h.getAttribute("method") || Po),
      (s =
        Ps(r.getAttribute("formenctype")) ||
        Ps(h.getAttribute("enctype")) ||
        jo),
      (c = new FormData(h, r)),
      !ty())
    ) {
      let { name: g, type: v, value: y } = r;
      if (v === "image") {
        let w = g ? `${g}.` : "";
        (c.append(`${w}x`, "0"), c.append(`${w}y`, "0"));
      } else g && c.append(g, y);
    }
  } else {
    if (Fo(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((o = Po), (u = null), (s = jo), (d = r));
  }
  return (
    c && s === "text/plain" && ((d = c), (c = void 0)),
    { action: u, method: o.toLowerCase(), encType: s, formData: c, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Zs(r, i) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(i);
}
function iy(r, i, o, u) {
  let s =
    typeof r == "string"
      ? new URL(
          r,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : r;
  return (
    o
      ? s.pathname.endsWith("/")
        ? (s.pathname = `${s.pathname}_.${u}`)
        : (s.pathname = `${s.pathname}.${u}`)
      : s.pathname === "/"
        ? (s.pathname = `_root.${u}`)
        : i && Wt(s.pathname, i) === "/"
          ? (s.pathname = `${i.replace(/\/$/, "")}/_root.${u}`)
          : (s.pathname = `${s.pathname.replace(/\/$/, "")}.${u}`),
    s
  );
}
async function ly(r, i) {
  if (r.id in i) return i[r.id];
  try {
    let o = await import(r.module);
    return ((i[r.id] = o), o);
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${r.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function oy(r) {
  return r == null
    ? !1
    : r.href == null
      ? r.rel === "preload" &&
        typeof r.imageSrcSet == "string" &&
        typeof r.imageSizes == "string"
      : typeof r.rel == "string" && typeof r.href == "string";
}
async function ay(r, i, o) {
  let u = await Promise.all(
    r.map(async (s) => {
      let c = i.routes[s.route.id];
      if (c) {
        let d = await ly(c, o);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return fy(
    u
      .flat(1)
      .filter(oy)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function ad(r, i, o, u, s, c) {
  let d = (m, g) => (o[g] ? m.route.id !== o[g].route.id : !0),
    h = (m, g) => {
      var v;
      return (
        o[g].pathname !== m.pathname ||
        (((v = o[g].route.path) == null ? void 0 : v.endsWith("*")) &&
          o[g].params["*"] !== m.params["*"])
      );
    };
  return c === "assets"
    ? i.filter((m, g) => d(m, g) || h(m, g))
    : c === "data"
      ? i.filter((m, g) => {
          var y;
          let v = u.routes[m.route.id];
          if (!v || !v.hasLoader) return !1;
          if (d(m, g) || h(m, g)) return !0;
          if (m.route.shouldRevalidate) {
            let w = m.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: ((y = o[0]) == null ? void 0 : y.params) || {},
              nextUrl: new URL(r, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof w == "boolean") return w;
          }
          return !0;
        })
      : [];
}
function sy(r, i, { includeHydrateFallback: o } = {}) {
  return uy(
    r
      .map((u) => {
        let s = i.routes[u.route.id];
        if (!s) return [];
        let c = [s.module];
        return (
          s.clientActionModule && (c = c.concat(s.clientActionModule)),
          s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)),
          o &&
            s.hydrateFallbackModule &&
            (c = c.concat(s.hydrateFallbackModule)),
          s.imports && (c = c.concat(s.imports)),
          c
        );
      })
      .flat(1),
  );
}
function uy(r) {
  return [...new Set(r)];
}
function cy(r) {
  let i = {},
    o = Object.keys(r).sort();
  for (let u of o) i[u] = r[u];
  return i;
}
function fy(r, i) {
  let o = new Set();
  return (
    new Set(i),
    r.reduce((u, s) => {
      let c = JSON.stringify(cy(s));
      return (o.has(c) || (o.add(c), u.push({ key: c, link: s })), u);
    }, [])
  );
}
function qd() {
  let r = j.useContext(Lr);
  return (
    Zs(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    r
  );
}
function dy() {
  let r = j.useContext(cl);
  return (
    Zs(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    r
  );
}
var qs = j.createContext(void 0);
qs.displayName = "FrameworkContext";
function eh() {
  let r = j.useContext(qs);
  return (
    Zs(r, "You must render this element inside a <HydratedRouter> element"),
    r
  );
}
function hy(r, i) {
  let o = j.useContext(qs),
    [u, s] = j.useState(!1),
    [c, d] = j.useState(!1),
    {
      onFocus: h,
      onBlur: m,
      onMouseEnter: g,
      onMouseLeave: v,
      onTouchStart: y,
    } = i,
    w = j.useRef(null);
  (j.useEffect(() => {
    if ((r === "render" && d(!0), r === "viewport")) {
      let D = (Y) => {
          Y.forEach(($) => {
            d($.isIntersecting);
          });
        },
        F = new IntersectionObserver(D, { threshold: 0.5 });
      return (
        w.current && F.observe(w.current),
        () => {
          F.disconnect();
        }
      );
    }
  }, [r]),
    j.useEffect(() => {
      if (u) {
        let D = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(D);
        };
      }
    }, [u]));
  let k = () => {
      s(!0);
    },
    L = () => {
      (s(!1), d(!1));
    };
  return o
    ? r !== "intent"
      ? [c, w, {}]
      : [
          c,
          w,
          {
            onFocus: Xi(h, k),
            onBlur: Xi(m, L),
            onMouseEnter: Xi(g, k),
            onMouseLeave: Xi(v, L),
            onTouchStart: Xi(y, k),
          },
        ]
    : [!1, w, {}];
}
function Xi(r, i) {
  return (o) => {
    (r && r(o), o.defaultPrevented || i(o));
  };
}
function py({ page: r, ...i }) {
  let { router: o } = qd(),
    u = j.useMemo(() => Zn(o.routes, r, o.basename), [o.routes, r, o.basename]);
  return u ? j.createElement(gy, { page: r, matches: u, ...i }) : null;
}
function my(r) {
  let { manifest: i, routeModules: o } = eh(),
    [u, s] = j.useState([]);
  return (
    j.useEffect(() => {
      let c = !1;
      return (
        ay(r, i, o).then((d) => {
          c || s(d);
        }),
        () => {
          c = !0;
        }
      );
    }, [r, i, o]),
    u
  );
}
function gy({ page: r, matches: i, ...o }) {
  let u = nr(),
    { future: s, manifest: c, routeModules: d } = eh(),
    { basename: h } = qd(),
    { loaderData: m, matches: g } = dy(),
    v = j.useMemo(() => ad(r, i, g, c, u, "data"), [r, i, g, c, u]),
    y = j.useMemo(() => ad(r, i, g, c, u, "assets"), [r, i, g, c, u]),
    w = j.useMemo(() => {
      if (r === u.pathname + u.search + u.hash) return [];
      let D = new Set(),
        F = !1;
      if (
        (i.forEach(($) => {
          var re;
          let Q = c.routes[$.route.id];
          !Q ||
            !Q.hasLoader ||
            ((!v.some((ue) => ue.route.id === $.route.id) &&
              $.route.id in m &&
              (re = d[$.route.id]) != null &&
              re.shouldRevalidate) ||
            Q.hasClientLoader
              ? (F = !0)
              : D.add($.route.id));
        }),
        D.size === 0)
      )
        return [];
      let Y = iy(r, h, s.unstable_trailingSlashAwareDataRequests, "data");
      return (
        F &&
          D.size > 0 &&
          Y.searchParams.set(
            "_routes",
            i
              .filter(($) => D.has($.route.id))
              .map(($) => $.route.id)
              .join(","),
          ),
        [Y.pathname + Y.search]
      );
    }, [h, s.unstable_trailingSlashAwareDataRequests, m, u, c, v, i, r, d]),
    k = j.useMemo(() => sy(y, c), [y, c]),
    L = my(y);
  return j.createElement(
    j.Fragment,
    null,
    w.map((D) =>
      j.createElement("link", {
        key: D,
        rel: "prefetch",
        as: "fetch",
        href: D,
        ...o,
      }),
    ),
    k.map((D) =>
      j.createElement("link", { key: D, rel: "modulepreload", href: D, ...o }),
    ),
    L.map(({ key: D, link: F }) =>
      j.createElement("link", {
        key: D,
        nonce: o.nonce,
        ...F,
        crossOrigin: F.crossOrigin ?? o.crossOrigin,
      }),
    ),
  );
}
function yy(...r) {
  return (i) => {
    r.forEach((o) => {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var vy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  vy && (window.__reactRouterVersion = "7.13.0");
} catch {}
function xy(r, i) {
  return Wm({
    basename: i == null ? void 0 : i.basename,
    getContext: i == null ? void 0 : i.getContext,
    future: i == null ? void 0 : i.future,
    history: am({ window: i == null ? void 0 : i.window }),
    hydrationData: wy(),
    routes: r,
    mapRouteProperties: Hg,
    hydrationRouteProperties: Bg,
    dataStrategy: i == null ? void 0 : i.dataStrategy,
    patchRoutesOnNavigation: i == null ? void 0 : i.patchRoutesOnNavigation,
    window: i == null ? void 0 : i.window,
    unstable_instrumentations: i == null ? void 0 : i.unstable_instrumentations,
  }).initialize();
}
function wy() {
  let r = window == null ? void 0 : window.__staticRouterHydrationData;
  return (r && r.errors && (r = { ...r, errors: Sy(r.errors) }), r);
}
function Sy(r) {
  if (!r) return null;
  let i = Object.entries(r),
    o = {};
  for (let [u, s] of i)
    if (s && s.__type === "RouteErrorResponse")
      o[u] = new sl(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let c = window[s.__subType];
        if (typeof c == "function")
          try {
            let d = new c(s.message);
            ((d.stack = ""), (o[u] = d));
          } catch {}
      }
      if (o[u] == null) {
        let c = new Error(s.message);
        ((c.stack = ""), (o[u] = c));
      }
    } else o[u] = s;
  return o;
}
var th = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  li = j.forwardRef(function (
    {
      onClick: i,
      discover: o = "render",
      prefetch: u = "none",
      relative: s,
      reloadDocument: c,
      replace: d,
      state: h,
      target: m,
      to: g,
      preventScrollReset: v,
      viewTransition: y,
      unstable_defaultShouldRevalidate: w,
      ...k
    },
    L,
  ) {
    let { basename: D, unstable_useTransitions: F } = j.useContext(Kt),
      Y = typeof g == "string" && th.test(g),
      $ = zd(g, D);
    g = $.to;
    let Q = kg(g, { relative: s }),
      [re, ue, ke] = hy(u, k),
      O = Ry(g, {
        replace: d,
        state: h,
        target: m,
        preventScrollReset: v,
        relative: s,
        viewTransition: y,
        unstable_defaultShouldRevalidate: w,
        unstable_useTransitions: F,
      });
    function q(ce) {
      (i && i(ce), ce.defaultPrevented || O(ce));
    }
    let ee = j.createElement("a", {
      ...k,
      ...ke,
      href: $.absoluteURL || Q,
      onClick: $.isExternal || c ? i : q,
      ref: yy(L, ue),
      target: m,
      "data-discover": !Y && o === "render" ? "true" : void 0,
    });
    return re && !Y
      ? j.createElement(j.Fragment, null, ee, j.createElement(py, { page: Q }))
      : ee;
  });
li.displayName = "Link";
var ky = j.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: o = !1,
    className: u = "",
    end: s = !1,
    style: c,
    to: d,
    viewTransition: h,
    children: m,
    ...g
  },
  v,
) {
  let y = dl(d, { relative: g.relative }),
    w = nr(),
    k = j.useContext(cl),
    { navigator: L, basename: D } = j.useContext(Kt),
    F = k != null && Oy(y) && h === !0,
    Y = L.encodeLocation ? L.encodeLocation(y).pathname : y.pathname,
    $ = w.pathname,
    Q =
      k && k.navigation && k.navigation.location
        ? k.navigation.location.pathname
        : null;
  (o ||
    (($ = $.toLowerCase()),
    (Q = Q ? Q.toLowerCase() : null),
    (Y = Y.toLowerCase())),
    Q && D && (Q = Wt(Q, D) || Q));
  const re = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
  let ue = $ === Y || (!s && $.startsWith(Y) && $.charAt(re) === "/"),
    ke =
      Q != null &&
      (Q === Y || (!s && Q.startsWith(Y) && Q.charAt(Y.length) === "/")),
    O = { isActive: ue, isPending: ke, isTransitioning: F },
    q = ue ? i : void 0,
    ee;
  typeof u == "function"
    ? (ee = u(O))
    : (ee = [
        u,
        ue ? "active" : null,
        ke ? "pending" : null,
        F ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ce = typeof c == "function" ? c(O) : c;
  return j.createElement(
    li,
    {
      ...g,
      "aria-current": q,
      className: ee,
      ref: v,
      style: ce,
      to: d,
      viewTransition: h,
    },
    typeof m == "function" ? m(O) : m,
  );
});
ky.displayName = "NavLink";
var Ey = j.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: i,
      navigate: o,
      reloadDocument: u,
      replace: s,
      state: c,
      method: d = Po,
      action: h,
      onSubmit: m,
      relative: g,
      preventScrollReset: v,
      viewTransition: y,
      unstable_defaultShouldRevalidate: w,
      ...k
    },
    L,
  ) => {
    let { unstable_useTransitions: D } = j.useContext(Kt),
      F = Py(),
      Y = jy(h, { relative: g }),
      $ = d.toLowerCase() === "get" ? "get" : "post",
      Q = typeof h == "string" && th.test(h),
      re = (ue) => {
        if ((m && m(ue), ue.defaultPrevented)) return;
        ue.preventDefault();
        let ke = ue.nativeEvent.submitter,
          O = (ke == null ? void 0 : ke.getAttribute("formmethod")) || d,
          q = () =>
            F(ke || ue.currentTarget, {
              fetcherKey: i,
              method: O,
              navigate: o,
              replace: s,
              state: c,
              relative: g,
              preventScrollReset: v,
              viewTransition: y,
              unstable_defaultShouldRevalidate: w,
            });
        D && o !== !1 ? j.startTransition(() => q()) : q();
      };
    return j.createElement("form", {
      ref: L,
      method: $,
      action: Y,
      onSubmit: u ? m : re,
      ...k,
      "data-discover": !Q && r === "render" ? "true" : void 0,
    });
  },
);
Ey.displayName = "Form";
function Cy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function nh(r) {
  let i = j.useContext(Lr);
  return (Me(i, Cy(r)), i);
}
function Ry(
  r,
  {
    target: i,
    replace: o,
    state: u,
    preventScrollReset: s,
    relative: c,
    viewTransition: d,
    unstable_defaultShouldRevalidate: h,
    unstable_useTransitions: m,
  } = {},
) {
  let g = Eg(),
    v = nr(),
    y = dl(r, { relative: c });
  return j.useCallback(
    (w) => {
      if (ey(w, i)) {
        w.preventDefault();
        let k = o !== void 0 ? o : fn(v) === fn(y),
          L = () =>
            g(r, {
              replace: k,
              state: u,
              preventScrollReset: s,
              relative: c,
              viewTransition: d,
              unstable_defaultShouldRevalidate: h,
            });
        m ? j.startTransition(() => L()) : L();
      }
    },
    [v, g, y, o, u, i, r, s, c, d, h, m],
  );
}
var Ny = 0,
  Ly = () => `__${String(++Ny)}__`;
function Py() {
  let { router: r } = nh("useSubmit"),
    { basename: i } = j.useContext(Kt),
    o = bg(),
    u = r.fetch,
    s = r.navigate;
  return j.useCallback(
    async (c, d = {}) => {
      let { action: h, method: m, encType: g, formData: v, body: y } = ry(c, i);
      if (d.navigate === !1) {
        let w = d.fetcherKey || Ly();
        await u(w, o, d.action || h, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: y,
          formMethod: d.method || m,
          formEncType: d.encType || g,
          flushSync: d.flushSync,
        });
      } else
        await s(d.action || h, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: y,
          formMethod: d.method || m,
          formEncType: d.encType || g,
          replace: d.replace,
          state: d.state,
          fromRouteId: o,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [u, s, i, o],
  );
}
function jy(r, { relative: i } = {}) {
  let { basename: o } = j.useContext(Kt),
    u = j.useContext(dn);
  Me(u, "useFormAction must be used inside a RouteContext");
  let [s] = u.matches.slice(-1),
    c = { ...dl(r || ".", { relative: i }) },
    d = nr();
  if (r == null) {
    c.search = d.search;
    let h = new URLSearchParams(c.search),
      m = h.getAll("index");
    if (m.some((v) => v === "")) {
      (h.delete("index"),
        m.filter((y) => y).forEach((y) => h.append("index", y)));
      let v = h.toString();
      c.search = v ? `?${v}` : "";
    }
  }
  return (
    (!r || r === ".") &&
      s.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (c.pathname = c.pathname === "/" ? o : cn([o, c.pathname])),
    fn(c)
  );
}
function Oy(r, { relative: i } = {}) {
  let o = j.useContext(Qs);
  Me(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: u } = nh("useViewTransitionState"),
    s = dl(r, { relative: i });
  if (!o.isTransitioning) return !1;
  let c = Wt(o.currentLocation.pathname, u) || o.currentLocation.pathname,
    d = Wt(o.nextLocation.pathname, u) || o.nextLocation.pathname;
  return Oo(s.pathname, d) != null || Oo(s.pathname, c) != null;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const My = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _y = (r) =>
    r.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, o, u) =>
      u ? u.toUpperCase() : o.toLowerCase(),
    ),
  sd = (r) => {
    const i = _y(r);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  rh = (...r) =>
    r
      .filter((i, o, u) => !!i && i.trim() !== "" && u.indexOf(i) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ty = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = j.forwardRef(
  (
    {
      color: r = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: u,
      className: s = "",
      children: c,
      iconNode: d,
      ...h
    },
    m,
  ) =>
    j.createElement(
      "svg",
      {
        ref: m,
        ...Ty,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: u ? (Number(o) * 24) / Number(i) : o,
        className: rh("lucide", s),
        ...h,
      },
      [
        ...d.map(([g, v]) => j.createElement(g, v)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eu = (r, i) => {
  const o = j.forwardRef(({ className: u, ...s }, c) =>
    j.createElement(zy, {
      ref: c,
      iconNode: i,
      className: rh(`lucide-${My(sd(r))}`, `lucide-${r}`, u),
      ...s,
    }),
  );
  return ((o.displayName = sd(r)), o);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  ud = eu("globe", Dy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  Fy = eu("menu", by);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iy = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  $y = eu("x", Iy),
  Ce = (r) => typeof r == "string",
  Zi = () => {
    let r, i;
    const o = new Promise((u, s) => {
      ((r = u), (i = s));
    });
    return ((o.resolve = r), (o.reject = i), o);
  },
  cd = (r) => (r == null ? "" : "" + r),
  Uy = (r, i, o) => {
    r.forEach((u) => {
      i[u] && (o[u] = i[u]);
    });
  },
  Ay = /###/g,
  fd = (r) => (r && r.indexOf("###") > -1 ? r.replace(Ay, ".") : r),
  dd = (r) => !r || Ce(r),
  nl = (r, i, o) => {
    const u = Ce(i) ? i.split(".") : i;
    let s = 0;
    for (; s < u.length - 1; ) {
      if (dd(r)) return {};
      const c = fd(u[s]);
      (!r[c] && o && (r[c] = new o()),
        Object.prototype.hasOwnProperty.call(r, c) ? (r = r[c]) : (r = {}),
        ++s);
    }
    return dd(r) ? {} : { obj: r, k: fd(u[s]) };
  },
  hd = (r, i, o) => {
    const { obj: u, k: s } = nl(r, i, Object);
    if (u !== void 0 || i.length === 1) {
      u[s] = o;
      return;
    }
    let c = i[i.length - 1],
      d = i.slice(0, i.length - 1),
      h = nl(r, d, Object);
    for (; h.obj === void 0 && d.length; )
      ((c = `${d[d.length - 1]}.${c}`),
        (d = d.slice(0, d.length - 1)),
        (h = nl(r, d, Object)),
        h != null &&
          h.obj &&
          typeof h.obj[`${h.k}.${c}`] < "u" &&
          (h.obj = void 0));
    h.obj[`${h.k}.${c}`] = o;
  },
  Hy = (r, i, o, u) => {
    const { obj: s, k: c } = nl(r, i, Object);
    ((s[c] = s[c] || []), s[c].push(o));
  },
  Mo = (r, i) => {
    const { obj: o, k: u } = nl(r, i);
    if (o && Object.prototype.hasOwnProperty.call(o, u)) return o[u];
  },
  By = (r, i, o) => {
    const u = Mo(r, o);
    return u !== void 0 ? u : Mo(i, o);
  },
  ih = (r, i, o) => {
    for (const u in i)
      u !== "__proto__" &&
        u !== "constructor" &&
        (u in r
          ? Ce(r[u]) ||
            r[u] instanceof String ||
            Ce(i[u]) ||
            i[u] instanceof String
            ? o && (r[u] = i[u])
            : ih(r[u], i[u], o)
          : (r[u] = i[u]));
    return r;
  },
  Cr = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Vy = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const Wy = (r) => (Ce(r) ? r.replace(/[&<>"'\/]/g, (i) => Vy[i]) : r);
class Ky {
  constructor(i) {
    ((this.capacity = i),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
  }
  getRegExp(i) {
    const o = this.regExpMap.get(i);
    if (o !== void 0) return o;
    const u = new RegExp(i);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(i, u),
      this.regExpQueue.push(i),
      u
    );
  }
}
const Yy = [" ", ",", "?", "!", ";"],
  Qy = new Ky(20),
  Jy = (r, i, o) => {
    ((i = i || ""), (o = o || ""));
    const u = Yy.filter((d) => i.indexOf(d) < 0 && o.indexOf(d) < 0);
    if (u.length === 0) return !0;
    const s = Qy.getRegExp(
      `(${u.map((d) => (d === "?" ? "\\?" : d)).join("|")})`,
    );
    let c = !s.test(r);
    if (!c) {
      const d = r.indexOf(o);
      d > 0 && !s.test(r.substring(0, d)) && (c = !0);
    }
    return c;
  },
  Is = (r, i, o = ".") => {
    if (!r) return;
    if (r[i]) return Object.prototype.hasOwnProperty.call(r, i) ? r[i] : void 0;
    const u = i.split(o);
    let s = r;
    for (let c = 0; c < u.length; ) {
      if (!s || typeof s != "object") return;
      let d,
        h = "";
      for (let m = c; m < u.length; ++m)
        if ((m !== c && (h += o), (h += u[m]), (d = s[h]), d !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof d) > -1 &&
            m < u.length - 1
          )
            continue;
          c += m - c + 1;
          break;
        }
      s = d;
    }
    return s;
  },
  al = (r) => (r == null ? void 0 : r.replace(/_/g, "-")),
  Gy = {
    type: "logger",
    log(r) {
      this.output("log", r);
    },
    warn(r) {
      this.output("warn", r);
    },
    error(r) {
      this.output("error", r);
    },
    output(r, i) {
      var o, u;
      (u =
        (o = console == null ? void 0 : console[r]) == null
          ? void 0
          : o.apply) == null || u.call(o, console, i);
    },
  };
class _o {
  constructor(i, o = {}) {
    this.init(i, o);
  }
  init(i, o = {}) {
    ((this.prefix = o.prefix || "i18next:"),
      (this.logger = i || Gy),
      (this.options = o),
      (this.debug = o.debug));
  }
  log(...i) {
    return this.forward(i, "log", "", !0);
  }
  warn(...i) {
    return this.forward(i, "warn", "", !0);
  }
  error(...i) {
    return this.forward(i, "error", "");
  }
  deprecate(...i) {
    return this.forward(i, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(i, o, u, s) {
    return s && !this.debug
      ? null
      : (Ce(i[0]) && (i[0] = `${u}${this.prefix} ${i[0]}`), this.logger[o](i));
  }
  create(i) {
    return new _o(this.logger, {
      prefix: `${this.prefix}:${i}:`,
      ...this.options,
    });
  }
  clone(i) {
    return (
      (i = i || this.options),
      (i.prefix = i.prefix || this.prefix),
      new _o(this.logger, i)
    );
  }
}
var un = new _o();
class Io {
  constructor() {
    this.observers = {};
  }
  on(i, o) {
    return (
      i.split(" ").forEach((u) => {
        this.observers[u] || (this.observers[u] = new Map());
        const s = this.observers[u].get(o) || 0;
        this.observers[u].set(o, s + 1);
      }),
      this
    );
  }
  off(i, o) {
    if (this.observers[i]) {
      if (!o) {
        delete this.observers[i];
        return;
      }
      this.observers[i].delete(o);
    }
  }
  emit(i, ...o) {
    (this.observers[i] &&
      Array.from(this.observers[i].entries()).forEach(([s, c]) => {
        for (let d = 0; d < c; d++) s(...o);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([s, c]) => {
          for (let d = 0; d < c; d++) s.apply(s, [i, ...o]);
        }));
  }
}
class pd extends Io {
  constructor(i, o = { ns: ["translation"], defaultNS: "translation" }) {
    (super(),
      (this.data = i || {}),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(i) {
    this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
  }
  removeNamespaces(i) {
    const o = this.options.ns.indexOf(i);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(i, o, u, s = {}) {
    var g, v;
    const c =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      d =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let h;
    i.indexOf(".") > -1
      ? (h = i.split("."))
      : ((h = [i, o]),
        u &&
          (Array.isArray(u)
            ? h.push(...u)
            : Ce(u) && c
              ? h.push(...u.split(c))
              : h.push(u)));
    const m = Mo(this.data, h);
    return (
      !m &&
        !o &&
        !u &&
        i.indexOf(".") > -1 &&
        ((i = h[0]), (o = h[1]), (u = h.slice(2).join("."))),
      m || !d || !Ce(u)
        ? m
        : Is(
            (v = (g = this.data) == null ? void 0 : g[i]) == null
              ? void 0
              : v[o],
            u,
            c,
          )
    );
  }
  addResource(i, o, u, s, c = { silent: !1 }) {
    const d =
      c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let h = [i, o];
    (u && (h = h.concat(d ? u.split(d) : u)),
      i.indexOf(".") > -1 && ((h = i.split(".")), (s = o), (o = h[1])),
      this.addNamespaces(o),
      hd(this.data, h, s),
      c.silent || this.emit("added", i, o, u, s));
  }
  addResources(i, o, u, s = { silent: !1 }) {
    for (const c in u)
      (Ce(u[c]) || Array.isArray(u[c])) &&
        this.addResource(i, o, c, u[c], { silent: !0 });
    s.silent || this.emit("added", i, o, u);
  }
  addResourceBundle(i, o, u, s, c, d = { silent: !1, skipCopy: !1 }) {
    let h = [i, o];
    (i.indexOf(".") > -1 && ((h = i.split(".")), (s = u), (u = o), (o = h[1])),
      this.addNamespaces(o));
    let m = Mo(this.data, h) || {};
    (d.skipCopy || (u = JSON.parse(JSON.stringify(u))),
      s ? ih(m, u, c) : (m = { ...m, ...u }),
      hd(this.data, h, m),
      d.silent || this.emit("added", i, o, u));
  }
  removeResourceBundle(i, o) {
    (this.hasResourceBundle(i, o) && delete this.data[i][o],
      this.removeNamespaces(o),
      this.emit("removed", i, o));
  }
  hasResourceBundle(i, o) {
    return this.getResource(i, o) !== void 0;
  }
  getResourceBundle(i, o) {
    return (o || (o = this.options.defaultNS), this.getResource(i, o));
  }
  getDataByLanguage(i) {
    return this.data[i];
  }
  hasLanguageSomeTranslations(i) {
    const o = this.getDataByLanguage(i);
    return !!((o && Object.keys(o)) || []).find(
      (s) => o[s] && Object.keys(o[s]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var lh = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, i, o, u, s) {
    return (
      r.forEach((c) => {
        var d;
        i =
          ((d = this.processors[c]) == null ? void 0 : d.process(i, o, u, s)) ??
          i;
      }),
      i
    );
  },
};
const oh = Symbol("i18next/PATH_KEY");
function Xy() {
  const r = [],
    i = Object.create(null);
  let o;
  return (
    (i.get = (u, s) => {
      var c;
      return (
        (c = o == null ? void 0 : o.revoke) == null || c.call(o),
        s === oh ? r : (r.push(s), (o = Proxy.revocable(u, i)), o.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), i).proxy
  );
}
function $s(r, i) {
  const { [oh]: o } = r(Xy()),
    u = (i == null ? void 0 : i.keySeparator) ?? ".",
    s = (i == null ? void 0 : i.nsSeparator) ?? ":";
  if (o.length > 1 && s) {
    const c = i == null ? void 0 : i.ns;
    if ((c ? (Array.isArray(c) ? c : [c]) : []).includes(o[0]))
      return `${o[0]}${s}${o.slice(1).join(u)}`;
  }
  return o.join(u);
}
const md = {},
  js = (r) => !Ce(r) && typeof r != "boolean" && typeof r != "number";
class To extends Io {
  constructor(i, o = {}) {
    (super(),
      Uy(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        i,
        this,
      ),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = un.create("translator")));
  }
  changeLanguage(i) {
    i && (this.language = i);
  }
  exists(i, o = { interpolation: {} }) {
    const u = { ...o };
    if (i == null) return !1;
    const s = this.resolve(i, u);
    if ((s == null ? void 0 : s.res) === void 0) return !1;
    const c = js(s.res);
    return !(u.returnObjects === !1 && c);
  }
  extractFromKey(i, o) {
    let u = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const s =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let c = o.ns || this.options.defaultNS || [];
    const d = u && i.indexOf(u) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !o.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !o.nsSeparator &&
        !Jy(i, u, s);
    if (d && !h) {
      const m = i.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return { key: i, namespaces: Ce(c) ? [c] : c };
      const g = i.split(u);
      ((u !== s || (u === s && this.options.ns.indexOf(g[0]) > -1)) &&
        (c = g.shift()),
        (i = g.join(s)));
    }
    return { key: i, namespaces: Ce(c) ? [c] : c };
  }
  translate(i, o, u) {
    let s = typeof o == "object" ? { ...o } : o;
    if (
      (typeof s != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (s = this.options.overloadTranslationOptionHandler(arguments)),
      typeof s == "object" && (s = { ...s }),
      s || (s = {}),
      i == null)
    )
      return "";
    (typeof i == "function" && (i = $s(i, { ...this.options, ...s })),
      Array.isArray(i) || (i = [String(i)]));
    const c =
        s.returnDetails !== void 0
          ? s.returnDetails
          : this.options.returnDetails,
      d =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      { key: h, namespaces: m } = this.extractFromKey(i[i.length - 1], s),
      g = m[m.length - 1];
    let v = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    v === void 0 && (v = ":");
    const y = s.lng || this.language,
      w = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((y == null ? void 0 : y.toLowerCase()) === "cimode")
      return w
        ? c
          ? {
              res: `${g}${v}${h}`,
              usedKey: h,
              exactUsedKey: h,
              usedLng: y,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(s),
            }
          : `${g}${v}${h}`
        : c
          ? {
              res: h,
              usedKey: h,
              exactUsedKey: h,
              usedLng: y,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(s),
            }
          : h;
    const k = this.resolve(i, s);
    let L = k == null ? void 0 : k.res;
    const D = (k == null ? void 0 : k.usedKey) || h,
      F = (k == null ? void 0 : k.exactUsedKey) || h,
      Y = ["[object Number]", "[object Function]", "[object RegExp]"],
      $ = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays,
      Q = !this.i18nFormat || this.i18nFormat.handleAsObject,
      re = s.count !== void 0 && !Ce(s.count),
      ue = To.hasDefaultValue(s),
      ke = re ? this.pluralResolver.getSuffix(y, s.count, s) : "",
      O =
        s.ordinal && re
          ? this.pluralResolver.getSuffix(y, s.count, { ordinal: !1 })
          : "",
      q = re && !s.ordinal && s.count === 0,
      ee =
        (q && s[`defaultValue${this.options.pluralSeparator}zero`]) ||
        s[`defaultValue${ke}`] ||
        s[`defaultValue${O}`] ||
        s.defaultValue;
    let ce = L;
    Q && !L && ue && (ce = ee);
    const je = js(ce),
      pe = Object.prototype.toString.apply(ce);
    if (Q && ce && je && Y.indexOf(pe) < 0 && !(Ce($) && Array.isArray(ce))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const de = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(D, ce, { ...s, ns: m })
          : `key '${h} (${this.language})' returned an object instead of string.`;
        return c
          ? ((k.res = de), (k.usedParams = this.getUsedParamsDetails(s)), k)
          : de;
      }
      if (d) {
        const de = Array.isArray(ce),
          ie = de ? [] : {},
          Re = de ? F : D;
        for (const he in ce)
          if (Object.prototype.hasOwnProperty.call(ce, he)) {
            const ge = `${Re}${d}${he}`;
            (ue && !L
              ? (ie[he] = this.translate(ge, {
                  ...s,
                  defaultValue: js(ee) ? ee[he] : void 0,
                  joinArrays: !1,
                  ns: m,
                }))
              : (ie[he] = this.translate(ge, { ...s, joinArrays: !1, ns: m })),
              ie[he] === ge && (ie[he] = ce[he]));
          }
        L = ie;
      }
    } else if (Q && Ce($) && Array.isArray(L))
      ((L = L.join($)), L && (L = this.extendTranslation(L, i, s, u)));
    else {
      let de = !1,
        ie = !1;
      (!this.isValidLookup(L) && ue && ((de = !0), (L = ee)),
        this.isValidLookup(L) || ((ie = !0), (L = h)));
      const he =
          (s.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          ie
            ? void 0
            : L,
        ge = ue && ee !== L && this.options.updateMissing;
      if (ie || de || ge) {
        if (
          (this.logger.log(
            ge ? "updateKey" : "missingKey",
            y,
            g,
            h,
            ge ? ee : L,
          ),
          d)
        ) {
          const C = this.resolve(h, { ...s, keySeparator: !1 });
          C &&
            C.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let I = [];
        const J = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          s.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && J && J[0])
          for (let C = 0; C < J.length; C++) I.push(J[C]);
        else
          this.options.saveMissingTo === "all"
            ? (I = this.languageUtils.toResolveHierarchy(
                s.lng || this.language,
              ))
            : I.push(s.lng || this.language);
        const W = (C, b, me) => {
          var ve;
          const xe = ue && me !== L ? me : he;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(C, g, b, xe, ge, s)
            : (ve = this.backendConnector) != null &&
              ve.saveMissing &&
              this.backendConnector.saveMissing(C, g, b, xe, ge, s),
            this.emit("missingKey", C, g, b, L));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && re
            ? I.forEach((C) => {
                const b = this.pluralResolver.getSuffixes(C, s);
                (q &&
                  s[`defaultValue${this.options.pluralSeparator}zero`] &&
                  b.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  b.push(`${this.options.pluralSeparator}zero`),
                  b.forEach((me) => {
                    W([C], h + me, s[`defaultValue${me}`] || ee);
                  }));
              })
            : W(I, h, ee));
      }
      ((L = this.extendTranslation(L, i, s, k, u)),
        ie &&
          L === h &&
          this.options.appendNamespaceToMissingKey &&
          (L = `${g}${v}${h}`),
        (ie || de) &&
          this.options.parseMissingKeyHandler &&
          (L = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${g}${v}${h}` : h,
            de ? L : void 0,
            s,
          )));
    }
    return c
      ? ((k.res = L), (k.usedParams = this.getUsedParamsDetails(s)), k)
      : L;
  }
  extendTranslation(i, o, u, s, c) {
    var m, g;
    if ((m = this.i18nFormat) != null && m.parse)
      i = this.i18nFormat.parse(
        i,
        { ...this.options.interpolation.defaultVariables, ...u },
        u.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s },
      );
    else if (!u.skipInterpolation) {
      u.interpolation &&
        this.interpolator.init({
          ...u,
          interpolation: { ...this.options.interpolation, ...u.interpolation },
        });
      const v =
        Ce(i) &&
        (((g = u == null ? void 0 : u.interpolation) == null
          ? void 0
          : g.skipOnVariables) !== void 0
          ? u.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let y;
      if (v) {
        const k = i.match(this.interpolator.nestingRegexp);
        y = k && k.length;
      }
      let w = u.replace && !Ce(u.replace) ? u.replace : u;
      if (
        (this.options.interpolation.defaultVariables &&
          (w = { ...this.options.interpolation.defaultVariables, ...w }),
        (i = this.interpolator.interpolate(
          i,
          w,
          u.lng || this.language || s.usedLng,
          u,
        )),
        v)
      ) {
        const k = i.match(this.interpolator.nestingRegexp),
          L = k && k.length;
        y < L && (u.nest = !1);
      }
      (!u.lng && s && s.res && (u.lng = this.language || s.usedLng),
        u.nest !== !1 &&
          (i = this.interpolator.nest(
            i,
            (...k) =>
              (c == null ? void 0 : c[0]) === k[0] && !u.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${k[0]} in key: ${o[0]}`,
                  ),
                  null)
                : this.translate(...k, o),
            u,
          )),
        u.interpolation && this.interpolator.reset());
    }
    const d = u.postProcess || this.options.postProcess,
      h = Ce(d) ? [d] : d;
    return (
      i != null &&
        h != null &&
        h.length &&
        u.applyPostProcessor !== !1 &&
        (i = lh.handle(
          h,
          i,
          o,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
                  usedParams: this.getUsedParamsDetails(u),
                },
                ...u,
              }
            : u,
          this,
        )),
      i
    );
  }
  resolve(i, o = {}) {
    let u, s, c, d, h;
    return (
      Ce(i) && (i = [i]),
      i.forEach((m) => {
        if (this.isValidLookup(u)) return;
        const g = this.extractFromKey(m, o),
          v = g.key;
        s = v;
        let y = g.namespaces;
        this.options.fallbackNS && (y = y.concat(this.options.fallbackNS));
        const w = o.count !== void 0 && !Ce(o.count),
          k = w && !o.ordinal && o.count === 0,
          L =
            o.context !== void 0 &&
            (Ce(o.context) || typeof o.context == "number") &&
            o.context !== "",
          D = o.lngs
            ? o.lngs
            : this.languageUtils.toResolveHierarchy(
                o.lng || this.language,
                o.fallbackLng,
              );
        y.forEach((F) => {
          var Y, $;
          this.isValidLookup(u) ||
            ((h = F),
            !md[`${D[0]}-${F}`] &&
              (Y = this.utils) != null &&
              Y.hasLoadedNamespace &&
              !(($ = this.utils) != null && $.hasLoadedNamespace(h)) &&
              ((md[`${D[0]}-${F}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${D.join(", ")}" won't get resolved as namespace "${h}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            D.forEach((Q) => {
              var ke;
              if (this.isValidLookup(u)) return;
              d = Q;
              const re = [v];
              if ((ke = this.i18nFormat) != null && ke.addLookupKeys)
                this.i18nFormat.addLookupKeys(re, v, Q, F, o);
              else {
                let O;
                w && (O = this.pluralResolver.getSuffix(Q, o.count, o));
                const q = `${this.options.pluralSeparator}zero`,
                  ee = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (w &&
                    (o.ordinal &&
                      O.indexOf(ee) === 0 &&
                      re.push(v + O.replace(ee, this.options.pluralSeparator)),
                    re.push(v + O),
                    k && re.push(v + q)),
                  L)
                ) {
                  const ce = `${v}${this.options.contextSeparator || "_"}${o.context}`;
                  (re.push(ce),
                    w &&
                      (o.ordinal &&
                        O.indexOf(ee) === 0 &&
                        re.push(
                          ce + O.replace(ee, this.options.pluralSeparator),
                        ),
                      re.push(ce + O),
                      k && re.push(ce + q)));
                }
              }
              let ue;
              for (; (ue = re.pop()); )
                this.isValidLookup(u) ||
                  ((c = ue), (u = this.getResource(Q, F, ue, o)));
            }));
        });
      }),
      { res: u, usedKey: s, exactUsedKey: c, usedLng: d, usedNS: h }
    );
  }
  isValidLookup(i) {
    return (
      i !== void 0 &&
      !(!this.options.returnNull && i === null) &&
      !(!this.options.returnEmptyString && i === "")
    );
  }
  getResource(i, o, u, s = {}) {
    var c;
    return (c = this.i18nFormat) != null && c.getResource
      ? this.i18nFormat.getResource(i, o, u, s)
      : this.resourceStore.getResource(i, o, u, s);
  }
  getUsedParamsDetails(i = {}) {
    const o = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      u = i.replace && !Ce(i.replace);
    let s = u ? i.replace : i;
    if (
      (u && typeof i.count < "u" && (s.count = i.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !u)
    ) {
      s = { ...s };
      for (const c of o) delete s[c];
    }
    return s;
  }
  static hasDefaultValue(i) {
    const o = "defaultValue";
    for (const u in i)
      if (
        Object.prototype.hasOwnProperty.call(i, u) &&
        o === u.substring(0, o.length) &&
        i[u] !== void 0
      )
        return !0;
    return !1;
  }
}
class gd {
  constructor(i) {
    ((this.options = i),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = un.create("languageUtils")));
  }
  getScriptPartFromCode(i) {
    if (((i = al(i)), !i || i.indexOf("-") < 0)) return null;
    const o = i.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(i) {
    if (((i = al(i)), !i || i.indexOf("-") < 0)) return i;
    const o = i.split("-");
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(i) {
    if (Ce(i) && i.indexOf("-") > -1) {
      let o;
      try {
        o = Intl.getCanonicalLocales(i)[0];
      } catch {}
      return (
        o && this.options.lowerCaseLng && (o = o.toLowerCase()),
        o || (this.options.lowerCaseLng ? i.toLowerCase() : i)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? i.toLowerCase()
      : i;
  }
  isSupportedCode(i) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (i = this.getLanguagePartFromCode(i)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(i) > -1
    );
  }
  getBestMatchFromCodes(i) {
    if (!i) return null;
    let o;
    return (
      i.forEach((u) => {
        if (o) return;
        const s = this.formatLanguageCode(u);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (o = s);
      }),
      !o &&
        this.options.supportedLngs &&
        i.forEach((u) => {
          if (o) return;
          const s = this.getScriptPartFromCode(u);
          if (this.isSupportedCode(s)) return (o = s);
          const c = this.getLanguagePartFromCode(u);
          if (this.isSupportedCode(c)) return (o = c);
          o = this.options.supportedLngs.find((d) => {
            if (d === c) return d;
            if (
              !(d.indexOf("-") < 0 && c.indexOf("-") < 0) &&
              ((d.indexOf("-") > 0 &&
                c.indexOf("-") < 0 &&
                d.substring(0, d.indexOf("-")) === c) ||
                (d.indexOf(c) === 0 && c.length > 1))
            )
              return d;
          });
        }),
      o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]),
      o
    );
  }
  getFallbackCodes(i, o) {
    if (!i) return [];
    if (
      (typeof i == "function" && (i = i(o)),
      Ce(i) && (i = [i]),
      Array.isArray(i))
    )
      return i;
    if (!o) return i.default || [];
    let u = i[o];
    return (
      u || (u = i[this.getScriptPartFromCode(o)]),
      u || (u = i[this.formatLanguageCode(o)]),
      u || (u = i[this.getLanguagePartFromCode(o)]),
      u || (u = i.default),
      u || []
    );
  }
  toResolveHierarchy(i, o) {
    const u = this.getFallbackCodes(
        (o === !1 ? [] : o) || this.options.fallbackLng || [],
        i,
      ),
      s = [],
      c = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? s.push(d)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${d}`,
              ));
      };
    return (
      Ce(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            c(this.formatLanguageCode(i)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            c(this.getScriptPartFromCode(i)),
          this.options.load !== "currentOnly" &&
            c(this.getLanguagePartFromCode(i)))
        : Ce(i) && c(this.formatLanguageCode(i)),
      u.forEach((d) => {
        s.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      s
    );
  }
}
const yd = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  vd = {
    select: (r) => (r === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class Zy {
  constructor(i, o = {}) {
    ((this.languageUtils = i),
      (this.options = o),
      (this.logger = un.create("pluralResolver")),
      (this.pluralRulesCache = {}));
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(i, o = {}) {
    const u = al(i === "dev" ? "en" : i),
      s = o.ordinal ? "ordinal" : "cardinal",
      c = JSON.stringify({ cleanedCode: u, type: s });
    if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
    let d;
    try {
      d = new Intl.PluralRules(u, { type: s });
    } catch {
      if (typeof Intl > "u")
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"),
          vd
        );
      if (!i.match(/-|_/)) return vd;
      const m = this.languageUtils.getLanguagePartFromCode(i);
      d = this.getRule(m, o);
    }
    return ((this.pluralRulesCache[c] = d), d);
  }
  needsPlural(i, o = {}) {
    let u = this.getRule(i, o);
    return (
      u || (u = this.getRule("dev", o)),
      (u == null ? void 0 : u.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(i, o, u = {}) {
    return this.getSuffixes(i, u).map((s) => `${o}${s}`);
  }
  getSuffixes(i, o = {}) {
    let u = this.getRule(i, o);
    return (
      u || (u = this.getRule("dev", o)),
      u
        ? u
            .resolvedOptions()
            .pluralCategories.sort((s, c) => yd[s] - yd[c])
            .map(
              (s) =>
                `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`,
            )
        : []
    );
  }
  getSuffix(i, o, u = {}) {
    const s = this.getRule(i, u);
    return s
      ? `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(o)}`
      : (this.logger.warn(`no plural rule found for: ${i}`),
        this.getSuffix("dev", o, u));
  }
}
const xd = (r, i, o, u = ".", s = !0) => {
    let c = By(r, i, o);
    return (
      !c &&
        s &&
        Ce(o) &&
        ((c = Is(r, o, u)), c === void 0 && (c = Is(i, o, u))),
      c
    );
  },
  Os = (r) => r.replace(/\$/g, "$$$$");
class wd {
  constructor(i = {}) {
    var o;
    ((this.logger = un.create("interpolator")),
      (this.options = i),
      (this.format =
        ((o = i == null ? void 0 : i.interpolation) == null
          ? void 0
          : o.format) || ((u) => u)),
      this.init(i));
  }
  init(i = {}) {
    i.interpolation || (i.interpolation = { escapeValue: !0 });
    const {
      escape: o,
      escapeValue: u,
      useRawValueToEscape: s,
      prefix: c,
      prefixEscaped: d,
      suffix: h,
      suffixEscaped: m,
      formatSeparator: g,
      unescapeSuffix: v,
      unescapePrefix: y,
      nestingPrefix: w,
      nestingPrefixEscaped: k,
      nestingSuffix: L,
      nestingSuffixEscaped: D,
      nestingOptionsSeparator: F,
      maxReplaces: Y,
      alwaysFormat: $,
    } = i.interpolation;
    ((this.escape = o !== void 0 ? o : Wy),
      (this.escapeValue = u !== void 0 ? u : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = c ? Cr(c) : d || "{{"),
      (this.suffix = h ? Cr(h) : m || "}}"),
      (this.formatSeparator = g || ","),
      (this.unescapePrefix = v ? "" : y || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : v || ""),
      (this.nestingPrefix = w ? Cr(w) : k || Cr("$t(")),
      (this.nestingSuffix = L ? Cr(L) : D || Cr(")")),
      (this.nestingOptionsSeparator = F || ","),
      (this.maxReplaces = Y || 1e3),
      (this.alwaysFormat = $ !== void 0 ? $ : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const i = (o, u) =>
      (o == null ? void 0 : o.source) === u
        ? ((o.lastIndex = 0), o)
        : new RegExp(u, "g");
    ((this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = i(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = i(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
      )));
  }
  interpolate(i, o, u, s) {
    var k;
    let c, d, h;
    const m =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      g = (L) => {
        if (L.indexOf(this.formatSeparator) < 0) {
          const $ = xd(
            o,
            m,
            L,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format($, void 0, u, { ...s, ...o, interpolationkey: L })
            : $;
        }
        const D = L.split(this.formatSeparator),
          F = D.shift().trim(),
          Y = D.join(this.formatSeparator).trim();
        return this.format(
          xd(
            o,
            m,
            F,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          Y,
          u,
          { ...s, ...o, interpolationkey: F },
        );
      };
    this.resetRegExp();
    const v =
        (s == null ? void 0 : s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      y =
        ((k = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : k.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (L) => Os(L) },
        {
          regex: this.regexp,
          safeValue: (L) => (this.escapeValue ? Os(this.escape(L)) : Os(L)),
        },
      ].forEach((L) => {
        for (h = 0; (c = L.regex.exec(i)); ) {
          const D = c[1].trim();
          if (((d = g(D)), d === void 0))
            if (typeof v == "function") {
              const Y = v(i, c, s);
              d = Ce(Y) ? Y : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, D)) d = "";
            else if (y) {
              d = c[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${D} for interpolating ${i}`,
              ),
                (d = ""));
          else !Ce(d) && !this.useRawValueToEscape && (d = cd(d));
          const F = L.safeValue(d);
          if (
            ((i = i.replace(c[0], F)),
            y
              ? ((L.regex.lastIndex += d.length),
                (L.regex.lastIndex -= c[0].length))
              : (L.regex.lastIndex = 0),
            h++,
            h >= this.maxReplaces)
          )
            break;
        }
      }),
      i
    );
  }
  nest(i, o, u = {}) {
    let s, c, d;
    const h = (m, g) => {
      const v = this.nestingOptionsSeparator;
      if (m.indexOf(v) < 0) return m;
      const y = m.split(new RegExp(`${Cr(v)}[ ]*{`));
      let w = `{${y[1]}`;
      ((m = y[0]), (w = this.interpolate(w, d)));
      const k = w.match(/'/g),
        L = w.match(/"/g);
      ((((k == null ? void 0 : k.length) ?? 0) % 2 === 0 && !L) ||
        ((L == null ? void 0 : L.length) ?? 0) % 2 !== 0) &&
        (w = w.replace(/'/g, '"'));
      try {
        ((d = JSON.parse(w)), g && (d = { ...g, ...d }));
      } catch (D) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${m}`,
            D,
          ),
          `${m}${v}${w}`
        );
      }
      return (
        d.defaultValue &&
          d.defaultValue.indexOf(this.prefix) > -1 &&
          delete d.defaultValue,
        m
      );
    };
    for (; (s = this.nestingRegexp.exec(i)); ) {
      let m = [];
      ((d = { ...u }),
        (d = d.replace && !Ce(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue);
      const g = /{.*}/.test(s[1])
        ? s[1].lastIndexOf("}") + 1
        : s[1].indexOf(this.formatSeparator);
      if (
        (g !== -1 &&
          ((m = s[1]
            .slice(g)
            .split(this.formatSeparator)
            .map((v) => v.trim())
            .filter(Boolean)),
          (s[1] = s[1].slice(0, g))),
        (c = o(h.call(this, s[1].trim(), d), d)),
        c && s[0] === i && !Ce(c))
      )
        return c;
      (Ce(c) || (c = cd(c)),
        c ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${i}`),
          (c = "")),
        m.length &&
          (c = m.reduce(
            (v, y) =>
              this.format(v, y, u.lng, { ...u, interpolationkey: s[1].trim() }),
            c.trim(),
          )),
        (i = i.replace(s[0], c)),
        (this.regexp.lastIndex = 0));
    }
    return i;
  }
}
const qy = (r) => {
    let i = r.toLowerCase().trim();
    const o = {};
    if (r.indexOf("(") > -1) {
      const u = r.split("(");
      i = u[0].toLowerCase().trim();
      const s = u[1].substring(0, u[1].length - 1);
      i === "currency" && s.indexOf(":") < 0
        ? o.currency || (o.currency = s.trim())
        : i === "relativetime" && s.indexOf(":") < 0
          ? o.range || (o.range = s.trim())
          : s.split(";").forEach((d) => {
              if (d) {
                const [h, ...m] = d.split(":"),
                  g = m
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  v = h.trim();
                (o[v] || (o[v] = g),
                  g === "false" && (o[v] = !1),
                  g === "true" && (o[v] = !0),
                  isNaN(g) || (o[v] = parseInt(g, 10)));
              }
            });
    }
    return { formatName: i, formatOptions: o };
  },
  Sd = (r) => {
    const i = {};
    return (o, u, s) => {
      let c = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (c = { ...c, [s.interpolationkey]: void 0 });
      const d = u + JSON.stringify(c);
      let h = i[d];
      return (h || ((h = r(al(u), s)), (i[d] = h)), h(o));
    };
  },
  ev = (r) => (i, o, u) => r(al(o), u)(i);
class tv {
  constructor(i = {}) {
    ((this.logger = un.create("formatter")), (this.options = i), this.init(i));
  }
  init(i, o = { interpolation: {} }) {
    this.formatSeparator = o.interpolation.formatSeparator || ",";
    const u = o.cacheInBuiltFormats ? Sd : ev;
    this.formats = {
      number: u((s, c) => {
        const d = new Intl.NumberFormat(s, { ...c });
        return (h) => d.format(h);
      }),
      currency: u((s, c) => {
        const d = new Intl.NumberFormat(s, { ...c, style: "currency" });
        return (h) => d.format(h);
      }),
      datetime: u((s, c) => {
        const d = new Intl.DateTimeFormat(s, { ...c });
        return (h) => d.format(h);
      }),
      relativetime: u((s, c) => {
        const d = new Intl.RelativeTimeFormat(s, { ...c });
        return (h) => d.format(h, c.range || "day");
      }),
      list: u((s, c) => {
        const d = new Intl.ListFormat(s, { ...c });
        return (h) => d.format(h);
      }),
    };
  }
  add(i, o) {
    this.formats[i.toLowerCase().trim()] = o;
  }
  addCached(i, o) {
    this.formats[i.toLowerCase().trim()] = Sd(o);
  }
  format(i, o, u, s = {}) {
    const c = o.split(this.formatSeparator);
    if (
      c.length > 1 &&
      c[0].indexOf("(") > 1 &&
      c[0].indexOf(")") < 0 &&
      c.find((h) => h.indexOf(")") > -1)
    ) {
      const h = c.findIndex((m) => m.indexOf(")") > -1);
      c[0] = [c[0], ...c.splice(1, h)].join(this.formatSeparator);
    }
    return c.reduce((h, m) => {
      var y;
      const { formatName: g, formatOptions: v } = qy(m);
      if (this.formats[g]) {
        let w = h;
        try {
          const k =
              ((y = s == null ? void 0 : s.formatParams) == null
                ? void 0
                : y[s.interpolationkey]) || {},
            L = k.locale || k.lng || s.locale || s.lng || u;
          w = this.formats[g](h, L, { ...v, ...s, ...k });
        } catch (k) {
          this.logger.warn(k);
        }
        return w;
      } else this.logger.warn(`there was no format function for ${g}`);
      return h;
    }, i);
  }
}
const nv = (r, i) => {
  r.pending[i] !== void 0 && (delete r.pending[i], r.pendingCount--);
};
class rv extends Io {
  constructor(i, o, u, s = {}) {
    var c, d;
    (super(),
      (this.backend = i),
      (this.store = o),
      (this.services = u),
      (this.languageUtils = u.languageUtils),
      (this.options = s),
      (this.logger = un.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (d = (c = this.backend) == null ? void 0 : c.init) == null ||
        d.call(c, u, s.backend, s));
  }
  queueLoad(i, o, u, s) {
    const c = {},
      d = {},
      h = {},
      m = {};
    return (
      i.forEach((g) => {
        let v = !0;
        (o.forEach((y) => {
          const w = `${g}|${y}`;
          !u.reload && this.store.hasResourceBundle(g, y)
            ? (this.state[w] = 2)
            : this.state[w] < 0 ||
              (this.state[w] === 1
                ? d[w] === void 0 && (d[w] = !0)
                : ((this.state[w] = 1),
                  (v = !1),
                  d[w] === void 0 && (d[w] = !0),
                  c[w] === void 0 && (c[w] = !0),
                  m[y] === void 0 && (m[y] = !0)));
        }),
          v || (h[g] = !0));
      }),
      (Object.keys(c).length || Object.keys(d).length) &&
        this.queue.push({
          pending: d,
          pendingCount: Object.keys(d).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(c),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(h),
        toLoadNamespaces: Object.keys(m),
      }
    );
  }
  loaded(i, o, u) {
    const s = i.split("|"),
      c = s[0],
      d = s[1];
    (o && this.emit("failedLoading", c, d, o),
      !o &&
        u &&
        this.store.addResourceBundle(c, d, u, void 0, void 0, { skipCopy: !0 }),
      (this.state[i] = o ? -1 : 2),
      o && u && (this.state[i] = 0));
    const h = {};
    (this.queue.forEach((m) => {
      (Hy(m.loaded, [c], d),
        nv(m, i),
        o && m.errors.push(o),
        m.pendingCount === 0 &&
          !m.done &&
          (Object.keys(m.loaded).forEach((g) => {
            h[g] || (h[g] = {});
            const v = m.loaded[g];
            v.length &&
              v.forEach((y) => {
                h[g][y] === void 0 && (h[g][y] = !0);
              });
          }),
          (m.done = !0),
          m.errors.length ? m.callback(m.errors) : m.callback()));
    }),
      this.emit("loaded", h),
      (this.queue = this.queue.filter((m) => !m.done)));
  }
  read(i, o, u, s = 0, c = this.retryTimeout, d) {
    if (!i.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: i,
        ns: o,
        fcName: u,
        tried: s,
        wait: c,
        callback: d,
      });
      return;
    }
    this.readingCalls++;
    const h = (g, v) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const y = this.waitingReads.shift();
          this.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
        }
        if (g && v && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, i, o, u, s + 1, c * 2, d);
          }, c);
          return;
        }
        d(g, v);
      },
      m = this.backend[u].bind(this.backend);
    if (m.length === 2) {
      try {
        const g = m(i, o);
        g && typeof g.then == "function"
          ? g.then((v) => h(null, v)).catch(h)
          : h(null, g);
      } catch (g) {
        h(g);
      }
      return;
    }
    return m(i, o, h);
  }
  prepareLoading(i, o, u = {}, s) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        s && s()
      );
    (Ce(i) && (i = this.languageUtils.toResolveHierarchy(i)),
      Ce(o) && (o = [o]));
    const c = this.queueLoad(i, o, u, s);
    if (!c.toLoad.length) return (c.pending.length || s(), null);
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(i, o, u) {
    this.prepareLoading(i, o, {}, u);
  }
  reload(i, o, u) {
    this.prepareLoading(i, o, { reload: !0 }, u);
  }
  loadOne(i, o = "") {
    const u = i.split("|"),
      s = u[0],
      c = u[1];
    this.read(s, c, "read", void 0, void 0, (d, h) => {
      (d &&
        this.logger.warn(
          `${o}loading namespace ${c} for language ${s} failed`,
          d,
        ),
        !d &&
          h &&
          this.logger.log(`${o}loaded namespace ${c} for language ${s}`, h),
        this.loaded(i, d, h));
    });
  }
  saveMissing(i, o, u, s, c, d = {}, h = () => {}) {
    var m, g, v, y, w;
    if (
      (g = (m = this.services) == null ? void 0 : m.utils) != null &&
      g.hasLoadedNamespace &&
      !(
        (y = (v = this.services) == null ? void 0 : v.utils) != null &&
        y.hasLoadedNamespace(o)
      )
    ) {
      this.logger.warn(
        `did not save key "${u}" as the namespace "${o}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(u == null || u === "")) {
      if ((w = this.backend) != null && w.create) {
        const k = { ...d, isUpdate: c },
          L = this.backend.create.bind(this.backend);
        if (L.length < 6)
          try {
            let D;
            (L.length === 5 ? (D = L(i, o, u, s, k)) : (D = L(i, o, u, s)),
              D && typeof D.then == "function"
                ? D.then((F) => h(null, F)).catch(h)
                : h(null, D));
          } catch (D) {
            h(D);
          }
        else L(i, o, u, s, h, k);
      }
      !i || !i[0] || this.store.addResource(i[0], o, u, s);
    }
  }
}
const Ms = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (r) => {
      let i = {};
      if (
        (typeof r[1] == "object" && (i = r[1]),
        Ce(r[1]) && (i.defaultValue = r[1]),
        Ce(r[2]) && (i.tDescription = r[2]),
        typeof r[2] == "object" || typeof r[3] == "object")
      ) {
        const o = r[3] || r[2];
        Object.keys(o).forEach((u) => {
          i[u] = o[u];
        });
      }
      return i;
    },
    interpolation: {
      escapeValue: !0,
      format: (r) => r,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  kd = (r) => {
    var i, o;
    return (
      Ce(r.ns) && (r.ns = [r.ns]),
      Ce(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]),
      Ce(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]),
      ((o = (i = r.supportedLngs) == null ? void 0 : i.indexOf) == null
        ? void 0
        : o.call(i, "cimode")) < 0 &&
        (r.supportedLngs = r.supportedLngs.concat(["cimode"])),
      typeof r.initImmediate == "boolean" && (r.initAsync = r.initImmediate),
      r
    );
  },
  No = () => {},
  iv = (r) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((o) => {
      typeof r[o] == "function" && (r[o] = r[o].bind(r));
    });
  },
  ah = "__i18next_supportNoticeShown",
  lv = () => typeof globalThis < "u" && !!globalThis[ah],
  ov = () => {
    typeof globalThis < "u" && (globalThis[ah] = !0);
  },
  av = (r) => {
    var i, o, u, s, c, d, h, m, g, v, y, w, k;
    return !!(
      ((u =
        (o =
          (i = r == null ? void 0 : r.modules) == null ? void 0 : i.backend) ==
        null
          ? void 0
          : o.name) == null
        ? void 0
        : u.indexOf("Locize")) > 0 ||
      ((h =
        (d =
          (c =
            (s = r == null ? void 0 : r.modules) == null
              ? void 0
              : s.backend) == null
            ? void 0
            : c.constructor) == null
          ? void 0
          : d.name) == null
        ? void 0
        : h.indexOf("Locize")) > 0 ||
      ((g =
        (m = r == null ? void 0 : r.options) == null ? void 0 : m.backend) !=
        null &&
        g.backends &&
        r.options.backend.backends.some((L) => {
          var D, F, Y;
          return (
            ((D = L == null ? void 0 : L.name) == null
              ? void 0
              : D.indexOf("Locize")) > 0 ||
            ((Y =
              (F = L == null ? void 0 : L.constructor) == null
                ? void 0
                : F.name) == null
              ? void 0
              : Y.indexOf("Locize")) > 0
          );
        })) ||
      ((y =
        (v = r == null ? void 0 : r.options) == null ? void 0 : v.backend) !=
        null &&
        y.projectId) ||
      ((k =
        (w = r == null ? void 0 : r.options) == null ? void 0 : w.backend) !=
        null &&
        k.backendOptions &&
        r.options.backend.backendOptions.some((L) =>
          L == null ? void 0 : L.projectId,
        ))
    );
  };
class rl extends Io {
  constructor(i = {}, o) {
    if (
      (super(),
      (this.options = kd(i)),
      (this.services = {}),
      (this.logger = un),
      (this.modules = { external: [] }),
      iv(this),
      o && !this.isInitialized && !i.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(i, o), this);
      setTimeout(() => {
        this.init(i, o);
      }, 0);
    }
  }
  init(i = {}, o) {
    ((this.isInitializing = !0),
      typeof i == "function" && ((o = i), (i = {})),
      i.defaultNS == null &&
        i.ns &&
        (Ce(i.ns)
          ? (i.defaultNS = i.ns)
          : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0])));
    const u = Ms();
    ((this.options = { ...u, ...this.options, ...kd(i) }),
      (this.options.interpolation = {
        ...u.interpolation,
        ...this.options.interpolation,
      }),
      i.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = i.keySeparator),
      i.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = i.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != "function" &&
        (this.options.overloadTranslationOptionHandler =
          u.overloadTranslationOptionHandler),
      this.options.showSupportNotice !== !1 &&
        !av(this) &&
        !lv() &&
        (typeof console < "u" &&
          typeof console.info < "u" &&
          console.info(
            "🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙",
          ),
        ov()));
    const s = (g) => (g ? (typeof g == "function" ? new g() : g) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? un.init(s(this.modules.logger), this.options)
        : un.init(null, this.options);
      let g;
      this.modules.formatter ? (g = this.modules.formatter) : (g = tv);
      const v = new gd(this.options);
      this.store = new pd(this.options.resources, this.options);
      const y = this.services;
      ((y.logger = un),
        (y.resourceStore = this.store),
        (y.languageUtils = v),
        (y.pluralResolver = new Zy(v, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== u.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
          ),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === u.interpolation.format) &&
          ((y.formatter = s(g)),
          y.formatter.init && y.formatter.init(y, this.options),
          (this.options.interpolation.format = y.formatter.format.bind(
            y.formatter,
          ))),
        (y.interpolator = new wd(this.options)),
        (y.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (y.backendConnector = new rv(
          s(this.modules.backend),
          y.resourceStore,
          y,
          this.options,
        )),
        y.backendConnector.on("*", (k, ...L) => {
          this.emit(k, ...L);
        }),
        this.modules.languageDetector &&
          ((y.languageDetector = s(this.modules.languageDetector)),
          y.languageDetector.init &&
            y.languageDetector.init(y, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((y.i18nFormat = s(this.modules.i18nFormat)),
          y.i18nFormat.init && y.i18nFormat.init(this)),
        (this.translator = new To(this.services, this.options)),
        this.translator.on("*", (k, ...L) => {
          this.emit(k, ...L);
        }),
        this.modules.external.forEach((k) => {
          k.init && k.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      o || (o = No),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const g = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((g) => {
        this[g] = (...v) => this.store[g](...v);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((g) => {
        this[g] = (...v) => (this.store[g](...v), this);
      }));
    const h = Zi(),
      m = () => {
        const g = (v, y) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            h.resolve(y),
            o(v, y));
        };
        if (this.languages && !this.isInitialized)
          return g(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, g);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? m()
        : setTimeout(m, 0),
      h
    );
  }
  loadResources(i, o = No) {
    var c, d;
    let u = o;
    const s = Ce(i) ? i : this.language;
    if (
      (typeof i == "function" && (u = i),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (s == null ? void 0 : s.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return u();
      const h = [],
        m = (g) => {
          if (!g || g === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(g).forEach((y) => {
            y !== "cimode" && h.indexOf(y) < 0 && h.push(y);
          });
        };
      (s
        ? m(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((v) => m(v)),
        (d = (c = this.options.preload) == null ? void 0 : c.forEach) == null ||
          d.call(c, (g) => m(g)),
        this.services.backendConnector.load(h, this.options.ns, (g) => {
          (!g &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            u(g));
        }));
    } else u(null);
  }
  reloadResources(i, o, u) {
    const s = Zi();
    return (
      typeof i == "function" && ((u = i), (i = void 0)),
      typeof o == "function" && ((u = o), (o = void 0)),
      i || (i = this.languages),
      o || (o = this.options.ns),
      u || (u = No),
      this.services.backendConnector.reload(i, o, (c) => {
        (s.resolve(), u(c));
      }),
      s
    );
  }
  use(i) {
    if (!i)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!i.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      i.type === "backend" && (this.modules.backend = i),
      (i.type === "logger" || (i.log && i.warn && i.error)) &&
        (this.modules.logger = i),
      i.type === "languageDetector" && (this.modules.languageDetector = i),
      i.type === "i18nFormat" && (this.modules.i18nFormat = i),
      i.type === "postProcessor" && lh.addPostProcessor(i),
      i.type === "formatter" && (this.modules.formatter = i),
      i.type === "3rdParty" && this.modules.external.push(i),
      this
    );
  }
  setResolvedLanguage(i) {
    if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1)) {
      for (let o = 0; o < this.languages.length; o++) {
        const u = this.languages[o];
        if (
          !(["cimode", "dev"].indexOf(u) > -1) &&
          this.store.hasLanguageSomeTranslations(u)
        ) {
          this.resolvedLanguage = u;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(i) < 0 &&
        this.store.hasLanguageSomeTranslations(i) &&
        ((this.resolvedLanguage = i), this.languages.unshift(i));
    }
  }
  changeLanguage(i, o) {
    this.isLanguageChangingTo = i;
    const u = Zi();
    this.emit("languageChanging", i);
    const s = (h) => {
        ((this.language = h),
          (this.languages = this.services.languageUtils.toResolveHierarchy(h)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(h));
      },
      c = (h, m) => {
        (m
          ? this.isLanguageChangingTo === i &&
            (s(m),
            this.translator.changeLanguage(m),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", m),
            this.logger.log("languageChanged", m))
          : (this.isLanguageChangingTo = void 0),
          u.resolve((...g) => this.t(...g)),
          o && o(h, (...g) => this.t(...g)));
      },
      d = (h) => {
        var v, y;
        !i && !h && this.services.languageDetector && (h = []);
        const m = Ce(h) ? h : h && h[0],
          g = this.store.hasLanguageSomeTranslations(m)
            ? m
            : this.services.languageUtils.getBestMatchFromCodes(
                Ce(h) ? [h] : h,
              );
        (g &&
          (this.language || s(g),
          this.translator.language || this.translator.changeLanguage(g),
          (y =
            (v = this.services.languageDetector) == null
              ? void 0
              : v.cacheUserLanguage) == null || y.call(v, g)),
          this.loadResources(g, (w) => {
            c(w, g);
          }));
      };
    return (
      !i &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? d(this.services.languageDetector.detect())
        : !i &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(d)
            : this.services.languageDetector.detect(d)
          : d(i),
      u
    );
  }
  getFixedT(i, o, u) {
    const s = (c, d, ...h) => {
      let m;
      (typeof d != "object"
        ? (m = this.options.overloadTranslationOptionHandler([c, d].concat(h)))
        : (m = { ...d }),
        (m.lng = m.lng || s.lng),
        (m.lngs = m.lngs || s.lngs),
        (m.ns = m.ns || s.ns),
        m.keyPrefix !== "" && (m.keyPrefix = m.keyPrefix || u || s.keyPrefix));
      const g = this.options.keySeparator || ".";
      let v;
      return (
        m.keyPrefix && Array.isArray(c)
          ? (v = c.map(
              (y) => (
                typeof y == "function" &&
                  (y = $s(y, { ...this.options, ...d })),
                `${m.keyPrefix}${g}${y}`
              ),
            ))
          : (typeof c == "function" && (c = $s(c, { ...this.options, ...d })),
            (v = m.keyPrefix ? `${m.keyPrefix}${g}${c}` : c)),
        this.t(v, m)
      );
    };
    return (
      Ce(i) ? (s.lng = i) : (s.lngs = i),
      (s.ns = o),
      (s.keyPrefix = u),
      s
    );
  }
  t(...i) {
    var o;
    return (o = this.translator) == null ? void 0 : o.translate(...i);
  }
  exists(...i) {
    var o;
    return (o = this.translator) == null ? void 0 : o.exists(...i);
  }
  setDefaultNamespace(i) {
    this.options.defaultNS = i;
  }
  hasLoadedNamespace(i, o = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const u = o.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (u.toLowerCase() === "cimode") return !0;
    const d = (h, m) => {
      const g = this.services.backendConnector.state[`${h}|${m}`];
      return g === -1 || g === 0 || g === 2;
    };
    if (o.precheck) {
      const h = o.precheck(this, d);
      if (h !== void 0) return h;
    }
    return !!(
      this.hasResourceBundle(u, i) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(u, i) && (!s || d(c, i)))
    );
  }
  loadNamespaces(i, o) {
    const u = Zi();
    return this.options.ns
      ? (Ce(i) && (i = [i]),
        i.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          (u.resolve(), o && o(s));
        }),
        u)
      : (o && o(), Promise.resolve());
  }
  loadLanguages(i, o) {
    const u = Zi();
    Ce(i) && (i = [i]);
    const s = this.options.preload || [],
      c = i.filter(
        (d) =>
          s.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d),
      );
    return c.length
      ? ((this.options.preload = s.concat(c)),
        this.loadResources((d) => {
          (u.resolve(), o && o(d));
        }),
        u)
      : (o && o(), Promise.resolve());
  }
  dir(i) {
    var s, c;
    if (
      (i ||
        (i =
          this.resolvedLanguage ||
          (((s = this.languages) == null ? void 0 : s.length) > 0
            ? this.languages[0]
            : this.language)),
      !i)
    )
      return "rtl";
    try {
      const d = new Intl.Locale(i);
      if (d && d.getTextInfo) {
        const h = d.getTextInfo();
        if (h && h.direction) return h.direction;
      }
    } catch {}
    const o = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      u =
        ((c = this.services) == null ? void 0 : c.languageUtils) ||
        new gd(Ms());
    return i.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : o.indexOf(u.getLanguagePartFromCode(i)) > -1 ||
          i.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
  }
  static createInstance(i = {}, o) {
    const u = new rl(i, o);
    return ((u.createInstance = rl.createInstance), u);
  }
  cloneInstance(i = {}, o = No) {
    const u = i.forkResourceStore;
    u && delete i.forkResourceStore;
    const s = { ...this.options, ...i, isClone: !0 },
      c = new rl(s);
    if (
      ((i.debug !== void 0 || i.prefix !== void 0) &&
        (c.logger = c.logger.clone(i)),
      ["store", "services", "language"].forEach((h) => {
        c[h] = this[h];
      }),
      (c.services = { ...this.services }),
      (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      u)
    ) {
      const h = Object.keys(this.store.data).reduce(
        (m, g) => (
          (m[g] = { ...this.store.data[g] }),
          (m[g] = Object.keys(m[g]).reduce(
            (v, y) => ((v[y] = { ...m[g][y] }), v),
            m[g],
          )),
          m
        ),
        {},
      );
      ((c.store = new pd(h, s)), (c.services.resourceStore = c.store));
    }
    if (i.interpolation) {
      const m = {
          ...Ms().interpolation,
          ...this.options.interpolation,
          ...i.interpolation,
        },
        g = { ...s, interpolation: m };
      c.services.interpolator = new wd(g);
    }
    return (
      (c.translator = new To(c.services, s)),
      c.translator.on("*", (h, ...m) => {
        c.emit(h, ...m);
      }),
      c.init(s, o),
      (c.translator.options = s),
      (c.translator.backendConnector.services.utils = {
        hasLoadedNamespace: c.hasLoadedNamespace.bind(c),
      }),
      c
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const wt = rl.createInstance();
wt.createInstance;
wt.dir;
wt.init;
wt.loadResources;
wt.reloadResources;
wt.use;
wt.changeLanguage;
wt.getFixedT;
wt.t;
wt.exists;
wt.setDefaultNamespace;
wt.hasLoadedNamespace;
wt.loadNamespaces;
wt.loadLanguages;
const sv = (r, i, o, u) => {
    var c, d, h, m;
    const s = [o, { code: i, ...(u || {}) }];
    if (
      (d = (c = r == null ? void 0 : r.services) == null ? void 0 : c.logger) !=
        null &&
      d.forward
    )
      return r.services.logger.forward(s, "warn", "react-i18next::", !0);
    (Nr(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (m = (h = r == null ? void 0 : r.services) == null ? void 0 : h.logger) !=
        null && m.warn
        ? r.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s));
  },
  Ed = {},
  sh = (r, i, o, u) => {
    (Nr(o) && Ed[o]) || (Nr(o) && (Ed[o] = new Date()), sv(r, i, o, u));
  },
  uh = (r, i) => () => {
    if (r.isInitialized) i();
    else {
      const o = () => {
        (setTimeout(() => {
          r.off("initialized", o);
        }, 0),
          i());
      };
      r.on("initialized", o);
    }
  },
  Us = (r, i, o) => {
    r.loadNamespaces(i, uh(r, o));
  },
  Cd = (r, i, o, u) => {
    if (
      (Nr(o) && (o = [o]),
      r.options.preload && r.options.preload.indexOf(i) > -1)
    )
      return Us(r, o, u);
    (o.forEach((s) => {
      r.options.ns.indexOf(s) < 0 && r.options.ns.push(s);
    }),
      r.loadLanguages(i, uh(r, u)));
  },
  uv = (r, i, o = {}) =>
    !i.languages || !i.languages.length
      ? (sh(i, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: i.languages,
        }),
        !0)
      : i.hasLoadedNamespace(r, {
          lng: o.lng,
          precheck: (u, s) => {
            if (
              o.bindI18n &&
              o.bindI18n.indexOf("languageChanging") > -1 &&
              u.services.backendConnector.backend &&
              u.isLanguageChangingTo &&
              !s(u.isLanguageChangingTo, r)
            )
              return !1;
          },
        }),
  Nr = (r) => typeof r == "string",
  cv = (r) => typeof r == "object" && r !== null,
  fv =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  dv = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  hv = (r) => dv[r],
  pv = (r) => r.replace(fv, hv);
let As = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: pv,
  transDefaultProps: void 0,
};
const mv = (r = {}) => {
    As = { ...As, ...r };
  },
  gv = () => As;
let ch;
const yv = (r) => {
    ch = r;
  },
  vv = () => ch,
  xv = {
    type: "3rdParty",
    init(r) {
      (mv(r.options.react), yv(r));
    },
  },
  wv = j.createContext();
class Sv {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(i) {
    i.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var _s = { exports: {} },
  Ts = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd;
function kv() {
  if (Rd) return Ts;
  Rd = 1;
  var r = Do();
  function i(y, w) {
    return (y === w && (y !== 0 || 1 / y === 1 / w)) || (y !== y && w !== w);
  }
  var o = typeof Object.is == "function" ? Object.is : i,
    u = r.useState,
    s = r.useEffect,
    c = r.useLayoutEffect,
    d = r.useDebugValue;
  function h(y, w) {
    var k = w(),
      L = u({ inst: { value: k, getSnapshot: w } }),
      D = L[0].inst,
      F = L[1];
    return (
      c(
        function () {
          ((D.value = k), (D.getSnapshot = w), m(D) && F({ inst: D }));
        },
        [y, k, w],
      ),
      s(
        function () {
          return (
            m(D) && F({ inst: D }),
            y(function () {
              m(D) && F({ inst: D });
            })
          );
        },
        [y],
      ),
      d(k),
      k
    );
  }
  function m(y) {
    var w = y.getSnapshot;
    y = y.value;
    try {
      var k = w();
      return !o(y, k);
    } catch {
      return !0;
    }
  }
  function g(y, w) {
    return w();
  }
  var v =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? g
      : h;
  return (
    (Ts.useSyncExternalStore =
      r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : v),
    Ts
  );
}
var Nd;
function Ev() {
  return (Nd || ((Nd = 1), (_s.exports = kv())), _s.exports);
}
var Cv = Ev();
const Rv = (r, i) =>
    Nr(i)
      ? i
      : cv(i) && Nr(i.defaultValue)
        ? i.defaultValue
        : Array.isArray(r)
          ? r[r.length - 1]
          : r,
  Nv = { t: Rv, ready: !1 },
  Lv = () => () => {},
  oi = (r, i = {}) => {
    var ee, ce, je;
    const { i18n: o } = i,
      { i18n: u, defaultNS: s } = j.useContext(wv) || {},
      c = o || u || vv();
    (c && !c.reportNamespaces && (c.reportNamespaces = new Sv()),
      c ||
        sh(
          c,
          "NO_I18NEXT_INSTANCE",
          "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
        ));
    const d = j.useMemo(() => {
        var pe;
        return {
          ...gv(),
          ...((pe = c == null ? void 0 : c.options) == null
            ? void 0
            : pe.react),
          ...i,
        };
      }, [c, i]),
      { useSuspense: h, keyPrefix: m } = d,
      g =
        s ||
        ((ee = c == null ? void 0 : c.options) == null ? void 0 : ee.defaultNS),
      v = Nr(g) ? [g] : g || ["translation"],
      y = j.useMemo(() => v, v);
    (je =
      (ce = c == null ? void 0 : c.reportNamespaces) == null
        ? void 0
        : ce.addUsedNamespaces) == null || je.call(ce, y);
    const w = j.useRef(0),
      k = j.useCallback(
        (pe) => {
          if (!c) return Lv;
          const { bindI18n: de, bindI18nStore: ie } = d,
            Re = () => {
              ((w.current += 1), pe());
            };
          return (
            de && c.on(de, Re),
            ie && c.store.on(ie, Re),
            () => {
              (de && de.split(" ").forEach((he) => c.off(he, Re)),
                ie && ie.split(" ").forEach((he) => c.store.off(he, Re)));
            }
          );
        },
        [c, d],
      ),
      L = j.useRef(),
      D = j.useCallback(() => {
        if (!c) return Nv;
        const pe =
            !!(c.isInitialized || c.initializedStoreOnce) &&
            y.every((I) => uv(I, c, d)),
          de = i.lng || c.language,
          ie = w.current,
          Re = L.current;
        if (
          Re &&
          Re.ready === pe &&
          Re.lng === de &&
          Re.keyPrefix === m &&
          Re.revision === ie
        )
          return Re;
        const ge = {
          t: c.getFixedT(de, d.nsMode === "fallback" ? y : y[0], m),
          ready: pe,
          lng: de,
          keyPrefix: m,
          revision: ie,
        };
        return ((L.current = ge), ge);
      }, [c, y, m, d, i.lng]),
      [F, Y] = j.useState(0),
      { t: $, ready: Q } = Cv.useSyncExternalStore(k, D, D);
    j.useEffect(() => {
      if (c && !Q && !h) {
        const pe = () => Y((de) => de + 1);
        i.lng ? Cd(c, i.lng, y, pe) : Us(c, y, pe);
      }
    }, [c, i.lng, y, Q, h, F]);
    const re = c || {},
      ue = j.useRef(null),
      ke = j.useRef(),
      O = (pe) => {
        const de = Object.getOwnPropertyDescriptors(pe);
        de.__original && delete de.__original;
        const ie = Object.create(Object.getPrototypeOf(pe), de);
        if (!Object.prototype.hasOwnProperty.call(ie, "__original"))
          try {
            Object.defineProperty(ie, "__original", {
              value: pe,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
        return ie;
      },
      q = j.useMemo(() => {
        const pe = re,
          de = pe == null ? void 0 : pe.language;
        let ie = pe;
        pe &&
          (ue.current && ue.current.__original === pe
            ? ke.current !== de
              ? ((ie = O(pe)), (ue.current = ie), (ke.current = de))
              : (ie = ue.current)
            : ((ie = O(pe)), (ue.current = ie), (ke.current = de)));
        const Re = [$, ie, Q];
        return ((Re.t = $), (Re.i18n = ie), (Re.ready = Q), Re);
      }, [$, re, Q, re.resolvedLanguage, re.language, re.languages]);
    if (c && h && !Q)
      throw new Promise((pe) => {
        const de = () => pe();
        i.lng ? Cd(c, i.lng, y, de) : Us(c, y, de);
      });
    return q;
  };
function Pv() {
  const r = nr(),
    [i, o] = j.useState(!1),
    [u, s] = j.useState(!1),
    { t: c, i18n: d } = oi(),
    h = d.language.toUpperCase(),
    m = [
      { path: "/", label: c("nav.home") },
      { path: "/about", label: c("nav.about") },
      { path: "/exhibitions", label: c("nav.exhibitions") },
      { path: "/blog", label: c("nav.blog") },
      { path: "/contacts", label: c("nav.contacts") },
    ],
    g = [
      { code: "ru", label: "Русский" },
      { code: "en", label: "English" },
    ],
    v = (w) => {
      (d.changeLanguage(w), s(!1));
    },
    y = () => {
      o(!1);
    };
  return z.jsxs("div", {
    className: "min-h-screen bg-white text-black",
    children: [
      z.jsx("header", {
        className: "border-b border-gray-200",
        children: z.jsxs("nav", {
          className: "max-w-7xl mx-auto px-6 py-6 md:py-8",
          children: [
            z.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                z.jsx(li, {
                  to: "/",
                  className: "text-xl md:text-2xl tracking-tight",
                  children: c("nav.brand"),
                }),
                z.jsxs("div", {
                  className: "hidden md:flex items-center gap-8",
                  children: [
                    z.jsx("ul", {
                      className: "flex gap-8",
                      children: m.map((w) =>
                        z.jsx(
                          "li",
                          {
                            children: z.jsx(li, {
                              to: w.path,
                              className: `text-sm tracking-wide transition-colors ${r.pathname === w.path ? "text-black" : "text-gray-400 hover:text-black"}`,
                              children: w.label,
                            }),
                          },
                          w.path,
                        ),
                      ),
                    }),
                    z.jsxs("div", {
                      className: "relative",
                      children: [
                        z.jsxs("button", {
                          onClick: () => s(!u),
                          className:
                            "flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors",
                          "aria-label": "Change language",
                          children: [
                            z.jsx(ud, { size: 16 }),
                            z.jsx("span", { children: h }),
                          ],
                        }),
                        u &&
                          z.jsxs(z.Fragment, {
                            children: [
                              z.jsx("div", {
                                className: "fixed inset-0 z-10",
                                onClick: () => s(!1),
                              }),
                              z.jsx("div", {
                                className:
                                  "absolute right-0 top-full mt-2 bg-white border border-gray-200 shadow-sm z-20 min-w-[140px]",
                                children: g.map((w) =>
                                  z.jsx(
                                    "button",
                                    {
                                      onClick: () => v(w.code),
                                      className: `block w-full text-left px-4 py-3 text-sm transition-colors ${d.language === w.code ? "text-black bg-gray-50" : "text-gray-600 hover:bg-gray-50"}`,
                                      children: w.label,
                                    },
                                    w.code,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                z.jsx("button", {
                  onClick: () => o(!i),
                  className: "md:hidden p-2 -mr-2",
                  "aria-label": "Toggle menu",
                  children: i
                    ? z.jsx($y, { size: 24 })
                    : z.jsx(Fy, { size: 24 }),
                }),
              ],
            }),
            i &&
              z.jsxs("div", {
                className: "md:hidden pt-6 pb-4",
                children: [
                  z.jsx("ul", {
                    className: "space-y-4 mb-6",
                    children: m.map((w) =>
                      z.jsx(
                        "li",
                        {
                          children: z.jsx(li, {
                            to: w.path,
                            onClick: y,
                            className: `block text-lg tracking-wide transition-colors ${r.pathname === w.path ? "text-black" : "text-gray-400"}`,
                            children: w.label,
                          }),
                        },
                        w.path,
                      ),
                    ),
                  }),
                  z.jsxs("div", {
                    className: "pt-4 border-t border-gray-200",
                    children: [
                      z.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-gray-400 mb-3",
                        children: [
                          z.jsx(ud, { size: 16 }),
                          z.jsx("span", { children: c("nav.language") }),
                        ],
                      }),
                      z.jsx("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: g.map((w) =>
                          z.jsx(
                            "button",
                            {
                              onClick: () => {
                                (v(w.code), y());
                              },
                              className: `px-4 py-2 text-sm border transition-colors ${d.language === w.code ? "border-black bg-black text-white" : "border-gray-200 text-gray-600 hover:border-black"}`,
                              children: w.label,
                            },
                            w.code,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
      z.jsx("main", { children: z.jsx(Qg, {}) }),
      z.jsx("footer", {
        className: "border-t border-gray-200 mt-32",
        children: z.jsx("div", {
          className: "max-w-7xl mx-auto px-6 py-12",
          children: z.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400",
            children: [
              z.jsx("p", { children: c("nav.footer") }),
              z.jsx("p", { children: c("nav.footerSub") }),
            ],
          }),
        }),
      }),
    ],
  });
}
const jv =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function zo(r) {
  const [i, o] = j.useState(!1),
    u = () => {
      o(!0);
    },
    { src: s, alt: c, style: d, className: h, ...m } = r;
  return i
    ? z.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${h ?? ""}`,
        style: d,
        children: z.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: z.jsx("img", {
            src: jv,
            alt: "Error loading image",
            ...m,
            "data-original-url": s,
          }),
        }),
      })
    : z.jsx("img", {
        src: s,
        alt: c,
        className: h,
        style: d,
        ...m,
        onError: u,
      });
}
function Ov() {
  const { t: r } = oi(),
    i = [
      {
        title: r("home.works.0.title"),
        year: r("home.works.0.year"),
        medium: r("home.works.0.medium"),
        image:
          "https://images.unsplash.com/photo-1580136608079-72029d0de130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBwYWludGluZyUyMGFydHdvcmt8ZW58MXx8fHwxNzczMDUxMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: r("home.works.1.title"),
        year: r("home.works.1.year"),
        medium: r("home.works.1.medium"),
        image:
          "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc3Mjk2NjQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: r("home.works.2.title"),
        year: r("home.works.2.year"),
        medium: r("home.works.2.medium"),
        image:
          "https://images.unsplash.com/photo-1580136607993-fd598cf5c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzczMDUxMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ];
  return z.jsxs("div", {
    children: [
      z.jsx("section", {
        className: "max-w-7xl mx-auto px-6 py-16 md:py-32",
        children: z.jsxs("div", {
          className:
            "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center",
          children: [
            z.jsxs("div", {
              children: [
                z.jsx("h1", {
                  className: "text-4xl md:text-6xl mb-6 tracking-tight",
                  children: r("home.hero.title"),
                }),
                z.jsx("p", {
                  className:
                    "text-base md:text-lg text-gray-400 mb-8 leading-relaxed",
                  children: r("home.hero.description"),
                }),
                z.jsx(li, {
                  to: "/exhibitions",
                  className:
                    "inline-block border border-black px-6 md:px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors",
                  children: r("home.hero.cta"),
                }),
              ],
            }),
            z.jsx("div", {
              className: "aspect-square",
              children: z.jsx(zo, {
                src: "https://images.unsplash.com/photo-1635141849017-c531949fb5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc3MzAzNzkxMXww&ixlib=rb-4.1.0&q=80&w=1080",
                alt: r("home.hero.imageAlt"),
                className: "w-full h-full object-cover",
              }),
            }),
          ],
        }),
      }),
      z.jsxs("section", {
        className: "max-w-7xl mx-auto px-6 py-12 md:py-24",
        children: [
          z.jsx("h2", {
            className: "text-3xl md:text-4xl mb-12 md:mb-16 tracking-tight",
            children: r("home.featured.title"),
          }),
          z.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
            children: i.map((o, u) =>
              z.jsxs(
                "div",
                {
                  className: "group cursor-pointer",
                  children: [
                    z.jsx("div", {
                      className: "aspect-[3/4] mb-4 overflow-hidden",
                      children: z.jsx(zo, {
                        src: o.image,
                        alt: o.title,
                        className:
                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                      }),
                    }),
                    z.jsx("h3", {
                      className: "text-lg mb-1",
                      children: o.title,
                    }),
                    z.jsxs("p", {
                      className: "text-sm text-gray-400",
                      children: [o.year, " · ", o.medium],
                    }),
                  ],
                },
                u,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Mv() {
  const { t: r } = oi();
  return z.jsx("div", {
    className: "max-w-7xl mx-auto px-6 py-16 md:py-24",
    children: z.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16",
      children: [
        z.jsxs("div", {
          children: [
            z.jsx("h1", {
              className: "text-4xl md:text-5xl mb-6 md:mb-8 tracking-tight",
              children: r("about.title"),
            }),
            z.jsxs("div", {
              className: "space-y-6 text-gray-600 leading-relaxed",
              children: [
                z.jsx("p", { children: r("about.bio.0") }),
                z.jsx("p", { children: r("about.bio.1") }),
                z.jsx("p", { children: r("about.bio.2") }),
              ],
            }),
            z.jsxs("div", {
              className: "mt-12 space-y-6",
              children: [
                z.jsxs("div", {
                  children: [
                    z.jsx("h3", {
                      className:
                        "text-sm uppercase tracking-wider text-gray-400 mb-2",
                      children: r("about.education.label"),
                    }),
                    z.jsxs("p", {
                      className: "text-gray-600",
                      children: [
                        r("about.education.ba"),
                        z.jsx("br", {}),
                        r("about.education.ma"),
                      ],
                    }),
                  ],
                }),
                z.jsxs("div", {
                  children: [
                    z.jsx("h3", {
                      className:
                        "text-sm uppercase tracking-wider text-gray-400 mb-2",
                      children: r("about.recognition.label"),
                    }),
                    z.jsxs("p", {
                      className: "text-gray-600",
                      children: [
                        r("about.recognition.0"),
                        z.jsx("br", {}),
                        r("about.recognition.1"),
                        z.jsx("br", {}),
                        r("about.recognition.2"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        z.jsxs("div", {
          className: "space-y-8",
          children: [
            z.jsx("div", {
              className: "aspect-[3/4]",
              children: z.jsx(zo, {
                src: "https://images.unsplash.com/photo-1628586431263-44040b966252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMDM3OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: r("about.imageAlt"),
                className: "w-full h-full object-cover",
              }),
            }),
            z.jsx("p", {
              className: "text-sm text-gray-400 italic",
              children: r("about.imageCaption"),
            }),
          ],
        }),
      ],
    }),
  });
}
function _v() {
  const { t: r } = oi(),
    i = [
      {
        title: r("exhibitions.items.0.title"),
        type: r("exhibitions.items.0.type"),
        venue: r("exhibitions.items.0.venue"),
        date: r("exhibitions.items.0.date"),
        status: r("exhibitions.items.0.status"),
        image:
          "https://images.unsplash.com/photo-1723974591057-ccadada1f283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc3MzAyMDEyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: r("exhibitions.items.1.title"),
        type: r("exhibitions.items.1.type"),
        venue: r("exhibitions.items.1.venue"),
        date: r("exhibitions.items.1.date"),
        status: r("exhibitions.items.1.status"),
        image:
          "https://images.unsplash.com/photo-1635141849017-c531949fb5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc3MzAzNzkxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: r("exhibitions.items.2.title"),
        type: r("exhibitions.items.2.type"),
        venue: r("exhibitions.items.2.venue"),
        date: r("exhibitions.items.2.date"),
        status: r("exhibitions.items.2.status"),
        image:
          "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc3Mjk2NjQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: r("exhibitions.items.3.title"),
        type: r("exhibitions.items.3.type"),
        venue: r("exhibitions.items.3.venue"),
        date: r("exhibitions.items.3.date"),
        status: r("exhibitions.items.3.status"),
        image:
          "https://images.unsplash.com/photo-1580136608079-72029d0de130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBwYWludGluZyUyMGFydHdvcmt8ZW58MXx8fHwxNzczMDUxMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: r("exhibitions.items.4.title"),
        type: r("exhibitions.items.4.type"),
        venue: r("exhibitions.items.4.venue"),
        date: r("exhibitions.items.4.date"),
        status: r("exhibitions.items.4.status"),
        image:
          "https://images.unsplash.com/photo-1580136607993-fd598cf5c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzczMDUxMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ];
  return z.jsxs("div", {
    className: "max-w-7xl mx-auto px-6 py-16 md:py-24",
    children: [
      z.jsx("h1", {
        className: "text-4xl md:text-5xl mb-4 tracking-tight",
        children: r("exhibitions.title"),
      }),
      z.jsx("p", {
        className: "text-gray-400 mb-12 md:mb-16",
        children: r("exhibitions.subtitle"),
      }),
      z.jsx("div", {
        className: "space-y-16 md:space-y-24",
        children: i.map((o, u) =>
          z.jsxs(
            "div",
            {
              className:
                "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start",
              children: [
                z.jsx("div", {
                  className: u % 2 === 0 ? "order-1" : "order-1 lg:order-2",
                  children: z.jsx("div", {
                    className: "aspect-[4/3]",
                    children: z.jsx(zo, {
                      src: o.image,
                      alt: o.title,
                      className: "w-full h-full object-cover",
                    }),
                  }),
                }),
                z.jsx("div", {
                  className: u % 2 === 0 ? "order-2" : "order-2 lg:order-1",
                  children: z.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      o.status === r("exhibitions.currentLabel") &&
                        z.jsx("span", {
                          className:
                            "inline-block text-xs uppercase tracking-wider border border-black px-3 py-1",
                          children: r("exhibitions.currentLabel"),
                        }),
                      z.jsx("h2", {
                        className: "text-2xl md:text-3xl tracking-tight",
                        children: o.title,
                      }),
                      z.jsxs("div", {
                        className: "text-gray-600 space-y-1",
                        children: [
                          z.jsx("p", {
                            className:
                              "text-sm uppercase tracking-wider text-gray-400",
                            children: o.type,
                          }),
                          z.jsx("p", { children: o.venue }),
                          z.jsx("p", { children: o.date }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            },
            u,
          ),
        ),
      }),
    ],
  });
}
function Tv() {
  const { t: r } = oi();
  return z.jsxs("div", {
    className: "max-w-4xl mx-auto px-6 py-16 md:py-24",
    children: [
      z.jsx("h1", {
        className: "text-4xl md:text-5xl mb-12 md:mb-16 tracking-tight",
        children: r("contacts.title"),
      }),
      z.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16",
        children: [
          z.jsxs("div", {
            children: [
              z.jsx("h2", {
                className: "text-xl md:text-2xl mb-6 md:mb-8 tracking-tight",
                children: r("contacts.form.heading"),
              }),
              z.jsxs("form", {
                className: "space-y-6",
                children: [
                  z.jsxs("div", {
                    children: [
                      z.jsx("label", {
                        htmlFor: "name",
                        className:
                          "block text-sm uppercase tracking-wider text-gray-400 mb-2",
                        children: r("contacts.form.name"),
                      }),
                      z.jsx("input", {
                        type: "text",
                        id: "name",
                        className:
                          "w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors",
                      }),
                    ],
                  }),
                  z.jsxs("div", {
                    children: [
                      z.jsx("label", {
                        htmlFor: "email",
                        className:
                          "block text-sm uppercase tracking-wider text-gray-400 mb-2",
                        children: r("contacts.form.email"),
                      }),
                      z.jsx("input", {
                        type: "email",
                        id: "email",
                        className:
                          "w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors",
                      }),
                    ],
                  }),
                  z.jsxs("div", {
                    children: [
                      z.jsx("label", {
                        htmlFor: "subject",
                        className:
                          "block text-sm uppercase tracking-wider text-gray-400 mb-2",
                        children: r("contacts.form.subject"),
                      }),
                      z.jsx("input", {
                        type: "text",
                        id: "subject",
                        className:
                          "w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors",
                      }),
                    ],
                  }),
                  z.jsxs("div", {
                    children: [
                      z.jsx("label", {
                        htmlFor: "message",
                        className:
                          "block text-sm uppercase tracking-wider text-gray-400 mb-2",
                        children: r("contacts.form.message"),
                      }),
                      z.jsx("textarea", {
                        id: "message",
                        rows: 6,
                        className:
                          "w-full border border-gray-300 p-4 focus:border-black focus:outline-none transition-colors resize-none",
                      }),
                    ],
                  }),
                  z.jsx("button", {
                    type: "submit",
                    className:
                      "border border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors",
                    children: r("contacts.form.submit"),
                  }),
                ],
              }),
            ],
          }),
          z.jsxs("div", {
            className: "space-y-12",
            children: [
              z.jsxs("div", {
                children: [
                  z.jsx("h3", {
                    className:
                      "text-sm uppercase tracking-wider text-gray-400 mb-4",
                    children: r("contacts.info.locationLabel"),
                  }),
                  z.jsxs("p", {
                    className: "text-gray-600",
                    children: [
                      r("contacts.info.address.0"),
                      z.jsx("br", {}),
                      r("contacts.info.address.1"),
                      z.jsx("br", {}),
                      r("contacts.info.address.2"),
                      z.jsx("br", {}),
                      r("contacts.info.address.3"),
                    ],
                  }),
                ],
              }),
              z.jsxs("div", {
                children: [
                  z.jsx("h3", {
                    className:
                      "text-sm uppercase tracking-wider text-gray-400 mb-4",
                    children: r("contacts.info.emailLabel"),
                  }),
                  z.jsx("a", {
                    href: "mailto:info@nkarich.uz",
                    className:
                      "text-gray-600 hover:text-black transition-colors",
                    children: "info@nkarich.uz",
                  }),
                ],
              }),
              z.jsxs("div", {
                children: [
                  z.jsx("h3", {
                    className:
                      "text-sm uppercase tracking-wider text-gray-400 mb-4",
                    children: r("contacts.info.followLabel"),
                  }),
                  z.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      z.jsx("a", {
                        href: "https://www.instagram.com/nkarich_",
                        className:
                          "block text-gray-600 hover:text-black transition-colors",
                        children: "Instagram",
                      }),
                      z.jsx("a", {
                        href: "https://t.me/nkarich",
                        className:
                          "block text-gray-600 hover:text-black transition-colors",
                        children: "Telegram",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function zv() {
  const { t: r } = oi(),
    i = [
      {
        title: r("blog.posts.0.title"),
        date: r("blog.posts.0.date"),
        excerpt: r("blog.posts.0.excerpt"),
        category: r("blog.posts.0.category"),
      },
      {
        title: r("blog.posts.1.title"),
        date: r("blog.posts.1.date"),
        excerpt: r("blog.posts.1.excerpt"),
        category: r("blog.posts.1.category"),
      },
      {
        title: r("blog.posts.2.title"),
        date: r("blog.posts.2.date"),
        excerpt: r("blog.posts.2.excerpt"),
        category: r("blog.posts.2.category"),
      },
      {
        title: r("blog.posts.3.title"),
        date: r("blog.posts.3.date"),
        excerpt: r("blog.posts.3.excerpt"),
        category: r("blog.posts.3.category"),
      },
      {
        title: r("blog.posts.4.title"),
        date: r("blog.posts.4.date"),
        excerpt: r("blog.posts.4.excerpt"),
        category: r("blog.posts.4.category"),
      },
      {
        title: r("blog.posts.5.title"),
        date: r("blog.posts.5.date"),
        excerpt: r("blog.posts.5.excerpt"),
        category: r("blog.posts.5.category"),
      },
    ];
  return z.jsxs("div", {
    className: "max-w-4xl mx-auto px-6 py-16 md:py-24",
    children: [
      z.jsx("h1", {
        className: "text-4xl md:text-5xl mb-4 tracking-tight",
        children: r("blog.title"),
      }),
      z.jsx("p", {
        className: "text-gray-400 mb-12 md:mb-16",
        children: r("blog.subtitle"),
      }),
      z.jsx("div", {
        className: "space-y-12 md:space-y-16",
        children: i.map((o, u) =>
          z.jsx(
            "article",
            {
              className:
                "border-b border-gray-200 pb-12 md:pb-16 last:border-b-0",
              children: z.jsxs("div", {
                className: "space-y-4",
                children: [
                  z.jsxs("div", {
                    className: "flex items-center gap-4 text-sm",
                    children: [
                      z.jsx("span", {
                        className: "text-gray-400",
                        children: o.date,
                      }),
                      z.jsx("span", {
                        className: "text-gray-300",
                        children: "·",
                      }),
                      z.jsx("span", {
                        className: "text-gray-400 uppercase tracking-wider",
                        children: o.category,
                      }),
                    ],
                  }),
                  z.jsx("h2", {
                    className:
                      "text-2xl md:text-3xl tracking-tight hover:text-gray-600 cursor-pointer transition-colors",
                    children: o.title,
                  }),
                  z.jsx("p", {
                    className:
                      "text-gray-600 leading-relaxed text-base md:text-lg",
                    children: o.excerpt,
                  }),
                  z.jsx("button", {
                    className:
                      "text-sm uppercase tracking-wider hover:text-gray-600 transition-colors",
                    children: r("blog.readMore"),
                  }),
                ],
              }),
            },
            u,
          ),
        ),
      }),
    ],
  });
}
const Dv = xy([
  {
    path: "/",
    Component: Pv,
    children: [
      { index: !0, Component: Ov },
      { path: "about", Component: Mv },
      { path: "exhibitions", Component: _v },
      { path: "contacts", Component: Tv },
      { path: "blog", Component: zv },
    ],
  },
]);
function bv() {
  return z.jsx(Wg, { router: Dv });
}
const Fv = {
    hero: {
      title: "Exploring Form Through Color",
      description:
        "Contemporary abstract paintings that investigate the relationship between emotion, color, and spatial awareness.",
      cta: "View Exhibitions",
      imageAlt: "Abstract painting",
    },
    featured: { title: "Featured Works" },
    works: {
      0: { title: "Chromatic Horizon", year: "2026", medium: "Oil on canvas" },
      1: {
        title: "Urban Fragments",
        year: "2025",
        medium: "Acrylic on canvas",
      },
      2: { title: "Silent Spaces", year: "2025", medium: "Mixed media" },
    },
  },
  Iv = {
    title: "About the Nkarich",
    imageAlt: "Artist studio",
    imageCaption: "In the studio, 2026",
    bio: {
      0: "Nkarich is a contemporary abstract painter based in Tashkent, Uzbekistan. Her work explores the intersection of color theory, emotional resonance, and spatial relationships through bold, expressive compositions.",
      1: "Born in 1997, Nkarich received her Bachelor's degree from the National Institute of Painting and Design named after Kamoliddin Behzod in 2020. Her practice is rooted in the belief that abstract forms can communicate universal human experiences beyond the constraints of representational imagery.",
      2: "Her paintings have been exhibited internationally in galleries across Tashkent, Almaty, Moscow, Saint-Petersbourg and many more. Nkarich's work is held in several private collections and has been featured in numerous art publications.",
    },
    education: {
      label: "Education",
      ba: "BA of Art, Kamoliddin Bekhzod Institute (2018)",
      ma: "MA of Art, Kamoliddin Bekhzod Institute (2020)",
    },
    recognition: {
      0: "Pollock-Krasner Foundation Grant (2022)",
      1: "New York Foundation for the Arts Fellowship (2019)",
      2: "Emerging Artist Award, Contemporary Art Fair (2015)",
      label: "Recognition",
    },
  },
  $v = {
    brand: "Nkarich Studio",
    home: "Home",
    about: "About",
    exhibitions: "Exhibitions",
    blog: "Blog",
    contacts: "Contacts",
    language: "Language",
    footer: "© 2026 Nkarich Studio. All rights reserved.",
    footerSub: "Contemporary Artist & Painter",
  },
  Uv = {
    title: "Exhibitions",
    subtitle: "Selected solo and group exhibitions",
    currentLabel: "Current",
    items: {
      0: {
        title: "Monochrome Dreams",
        type: "Solo Exhibition",
        venue: "Gallery Modern, New York",
        date: "March - May 2026",
        status: "Current",
      },
      1: {
        title: "Fragmented Realities",
        type: "Group Exhibition",
        venue: "Contemporary Art Space, Berlin",
        date: "November 2025 - January 2026",
        status: "Past",
      },
      2: {
        title: "Color Theory",
        type: "Solo Exhibition",
        venue: "Whitespace Gallery, London",
        date: "June - August 2025",
        status: "Past",
      },
      3: {
        title: "Between Lines",
        type: "Group Exhibition",
        venue: "Tokyo Art Fair",
        date: "March 2025",
        status: "Past",
      },
      4: {
        title: "Silence and Space",
        type: "Solo Exhibition",
        venue: "Mitchell Contemporary, New York",
        date: "September - November 2024",
        status: "Past",
      },
    },
  },
  Av = {
    title: "Blog",
    subtitle: "Thoughts on art, process, and inspiration",
    readMore: "Read More →",
    posts: {
      0: {
        title: "On the Nature of Color",
        date: "March 2, 2026",
        category: "Theory",
        excerpt:
          "Exploring how color functions as both a physical phenomenon and an emotional language in abstract painting.",
      },
      1: {
        title: "Studio Notes: Working with Large Canvases",
        date: "February 15, 2026",
        category: "Process",
        excerpt:
          "Reflections on the physical and conceptual challenges of scaling up, and how size transforms the viewer's relationship to the work.",
      },
      2: {
        title: "Minimalism and Maximalism",
        date: "January 28, 2026",
        category: "Philosophy",
        excerpt:
          "Finding the balance between restraint and abundance, and why both approaches are essential to my practice.",
      },
      3: {
        title: "Inspiration: The Light of Winter",
        date: "January 10, 2026",
        category: "Inspiration",
        excerpt:
          "How the unique quality of winter light in New York has influenced my recent color choices and compositional decisions.",
      },
      4: {
        title: "The Role of Intuition",
        date: "December 20, 2025",
        category: "Process",
        excerpt:
          "Why I've learned to trust spontaneous decisions in the studio and the importance of letting go of control.",
      },
      5: {
        title: "Visiting the Rothko Chapel",
        date: "November 30, 2025",
        category: "Reflection",
        excerpt:
          "Thoughts on experiencing Mark Rothko's late work in Houston and its profound impact on my understanding of space and silence.",
      },
    },
  },
  Hv = {
    title: "Contact",
    form: {
      heading: "Get in Touch",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
    },
    info: {
      locationLabel: "Studio Location",
      address: {
        0: "Shota Rustaveli str.",
        1: "Building 77, Studio 312",
        2: "Tashkent",
        3: "Uzbekistan",
      },
      emailLabel: "Email",
      followLabel: "Follow",
    },
  },
  Bv = {
    home: Fv,
    about: Iv,
    nav: $v,
    exhibitions: Uv,
    blog: Av,
    contacts: Hv,
  },
  Vv = {
    hero: {
      title: "Исследование формы через цвет",
      description:
        "Современные абстрактные картины, исследующие взаимосвязь между эмоцией, цветом и пространственным восприятием.",
      cta: "Смотреть выставки",
      imageAlt: "Абстрактная картина",
    },
    featured: { title: "Избранные работы" },
    works: {
      0: {
        title: "Хроматический горизонт",
        year: "2026",
        medium: "Масло на холсте",
      },
      1: {
        title: "Городские фрагменты",
        year: "2025",
        medium: "Акрил на холсте",
      },
      2: {
        title: "Тихие пространства",
        year: "2025",
        medium: "Смешанная техника",
      },
    },
  },
  Wv = {
    title: "О Nkarich",
    imageAlt: "Студия художника",
    imageCaption: "В студии, 2026",
    bio: {
      0: "Nkarich — современный абстрактный художник из Ташкента, Узбекистан. Её работы исследуют пересечение теории цвета, эмоционального резонанса и пространственных отношений через смелые выразительные композиции.",
      1: "Родившись в 1997 году, Nkarich получила степень бакалавра в Национальном институте живописи и дизайна имени Камолиддина Бехзода в 2020 году. Её практика основана на убеждении, что абстрактные формы могут передавать универсальный человеческий опыт.",
      2: "Её картины экспонировались на международных выставках в галереях Ташкента, Алматы, Москвы, Санкт-Петербурга и многих других городов. Работы Nkarich хранятся в нескольких частных коллекциях и были представлены во многих художественных изданиях.",
    },
    education: {
      label: "Образование",
      ba: "Бакалавр искусств, Институт Камолиддина Бехзода (2018)",
      ma: "Магистр искусств, Институт Камолиддина Бехзода (2020)",
    },
    recognition: {
      0: "Грант фонда Поллока-Краснера (2022)",
      1: "Стипендия Нью-Йоркского фонда искусств (2019)",
      2: "Награда молодого художника, Contemporary Art Fair (2015)",
      label: "Достижения",
    },
  },
  Kv = {
    brand: "Студия Nkarich",
    home: "Главная",
    about: "О нас",
    exhibitions: "Выставки",
    blog: "Блог",
    contacts: "Контакты",
    language: "Язык",
    footer: "© 2026 Студия Nkarich. Все права защищены.",
    footerSub: "Современный художник и живописец",
  },
  Yv = {
    title: "Выставки",
    subtitle: "Избранные сольные и групповые выставки",
    currentLabel: "Текущая",
    items: {
      0: {
        title: "Монохромные мечты",
        type: "Сольная выставка",
        venue: "Gallery Modern, Нью-Йорк",
        date: "Март - Май 2026",
        status: "Текущая",
      },
      1: {
        title: "Фрагментированные реальности",
        type: "Групповая выставка",
        venue: "Contemporary Art Space, Берлин",
        date: "Ноябрь 2025 - Январь 2026",
        status: "Прошедшая",
      },
      2: {
        title: "Теория цвета",
        type: "Сольная выставка",
        venue: "Whitespace Gallery, Лондон",
        date: "Июнь - Август 2025",
        status: "Прошедшая",
      },
      3: {
        title: "Между строк",
        type: "Групповая выставка",
        venue: "Tokyo Art Fair",
        date: "Март 2025",
        status: "Прошедшая",
      },
      4: {
        title: "Тишина и пространство",
        type: "Сольная выставка",
        venue: "Mitchell Contemporary, Нью-Йорк",
        date: "Сентябрь - Ноябрь 2024",
        status: "Прошедшая",
      },
    },
  },
  Qv = {
    title: "Блог",
    subtitle: "Мысли об искусстве, процессе и вдохновении",
    readMore: "Читать далее →",
    posts: {
      0: {
        title: "О природе цвета",
        date: "2 марта 2026",
        category: "Теория",
        excerpt:
          "Исследование того, как цвет функционирует одновременно как физическое явление и эмоциональный язык в абстрактной живописи.",
      },
      1: {
        title: "Заметки из студии: работа с большими холстами",
        date: "15 февраля 2026",
        category: "Процесс",
        excerpt:
          "Размышления о физических и концептуальных трудностях масштабирования и о том, как размер меняет отношение зрителя к работе.",
      },
      2: {
        title: "Минимализм и максимализм",
        date: "28 января 2026",
        category: "Философия",
        excerpt:
          "Поиск баланса между сдержанностью и изобилием, и почему оба подхода необходимы в моей практике.",
      },
      3: {
        title: "Вдохновение: зимний свет",
        date: "10 января 2026",
        category: "Вдохновение",
        excerpt:
          "Как особое качество зимнего света в Нью-Йорке повлияло на мой выбор цветов и композиционные решения.",
      },
      4: {
        title: "Роль интуиции",
        date: "20 декабря 2025",
        category: "Процесс",
        excerpt:
          "Почему я научилась доверять спонтанным решениям в студии и как важно уметь отпускать контроль.",
      },
      5: {
        title: "Посещение часовни Ротко",
        date: "30 ноября 2025",
        category: "Размышление",
        excerpt:
          "Мысли о знакомстве с поздними работами Марка Ротко в Хьюстоне и их глубоком влиянии на моё понимание пространства и тишины.",
      },
    },
  },
  Jv = {
    title: "Контакты",
    form: {
      heading: "Связаться",
      name: "Имя",
      email: "Эл. почта",
      subject: "Тема",
      message: "Сообщение",
      submit: "Отправить",
    },
    info: {
      locationLabel: "Адрес студии",
      address: {
        0: "ул. Шота Руставели",
        1: "Здание 77, Студия 312",
        2: "Ташкент",
        3: "Узбекистан",
      },
      emailLabel: "Эл. почта",
      followLabel: "Соцсети",
    },
  },
  Gv = {
    home: Vv,
    about: Wv,
    nav: Kv,
    exhibitions: Yv,
    blog: Qv,
    contacts: Jv,
  };
wt.use(xv).init({
  resources: { en: { translation: Bv }, ru: { translation: Gv } },
  lng: "ru",
  fallbackLng: "ru",
});
nm.createRoot(document.getElementById("root")).render(z.jsx(bv, {}));
