"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* ! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  'object' === (typeof module === "undefined" ? "undefined" : _typeof(module)) && 'object' === _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error('jQuery requires a window with a document');
    return b(a);
  } : b(a);
}('undefined' !== typeof window ? window : void 0, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = '2.1.1',
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: '',
    length: 0,
    toArray: function toArray() {
      return d.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a, b) {
      return n.each(this, a, b);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ('boolean' === typeof g && (j = g, g = arguments[h] || {}, h++), 'object' === _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }

    return g;
  }, n.extend({
    expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return 'function' === n.type(a);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(a) {
      return null != a && a === a.window;
    },
    isNumeric: function isNumeric(a) {
      return !n.isArray(a) && a - parseFloat(a) >= 0;
    },
    isPlainObject: function isPlainObject(a) {
      return 'object' !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf') ? !1 : !0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    type: function type(a) {
      return null == a ? a + '' : 'object' === _typeof(a) || 'function' === typeof a ? h[i.call(a)] || 'object' : _typeof(a);
    },
    globalEval: function globalEval(a) {
      var b,
          c = eval;
      a = n.trim(a), a && (1 === a.indexOf('use strict') ? (b = l.createElement('script'), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function camelCase(a) {
      return a.replace(p, 'ms-').replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = s(a);

      if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? '' : (a + '').replace(o, '');
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, 'string' === typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    },
    merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }

      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
      if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }
      return e.apply([], i);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, e, f;
      return 'string' === typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    },
    now: Date.now,
    support: k
  }), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
    h['[object ' + b + ']'] = b.toLowerCase();
  });

  function s(a) {
    var b = a.length,
        c = n.type(a);
    return 'function' === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' === typeof b && b > 0 && b - 1 in a;
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = 'sizzle' + -new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = gb(),
        z = gb(),
        A = gb(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 'undefined',
        D = 1 << 31,
        E = {}.hasOwnProperty,
        F = [],
        G = F.pop,
        H = F.push,
        I = F.push,
        J = F.slice,
        K = F.indexOf || function (a) {
      for (var _b2 = 0, _c = this.length; _c > _b2; _b2++) {
        if (this[_b2] === a) return _b2;
      }

      return -1;
    },
        L = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        M = '[\\x20\\t\\r\\n\\f]',
        N = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        O = N.replace('w', 'w#'),
        P = '\\[' + M + '*(' + N + ')(?:' + M + '*([*^$|!~]?=)' + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + '))|)' + M + '*\\]',
        Q = ':(' + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ')*)|.*)\\)|)',
        R = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
        S = new RegExp('^' + M + '*,' + M + '*'),
        T = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
        U = new RegExp('=' + M + "*([^\\]'\"]*?)" + M + '*\\]', 'g'),
        V = new RegExp(Q),
        W = new RegExp('^' + O + '$'),
        X = {
      ID: new RegExp('^#(' + N + ')'),
      CLASS: new RegExp('^\\.(' + N + ')'),
      TAG: new RegExp('^(' + N.replace('w', 'w*') + ')'),
      ATTR: new RegExp('^' + P),
      PSEUDO: new RegExp('^' + Q),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + L + ')$', 'i'),
      needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
    },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ab = /[+~]/,
        bb = /'|\\/g,
        cb = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
        db = function db(a, b, c) {
      var d = '0x' + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    };

    try {
      I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
    } catch (eb) {
      I = {
        apply: F.length ? function (a, b) {
          H.apply(a, J.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || 'string' !== typeof a) return d;
      if (1 !== (k = b.nodeType) && 9 !== k) return [];

      if (p && !e) {
        if (f = _.exec(a)) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;
            if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
          if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d;
        }

        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 9 === k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute('id')) ? s = r.replace(bb, '\\$&') : b.setAttribute('id', s), s = "[id='" + s + "'] ", l = o.length;

            while (l--) {
              o[l] = s + qb(o[l]);
            }

            w = ab.test(a) && ob(b.parentNode) || b, x = o.join(',');
          }

          if (x) try {
            return I.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute('id');
          }
        }
      }

      return i(a.replace(R, '$1'), b, d, e);
    }

    function gb() {
      var a = [];

      function b(c, e) {
        return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
      }

      return b;
    }

    function hb(a) {
      return a[u] = !0, a;
    }

    function ib(a) {
      var b = n.createElement('div');

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function jb(a, b) {
      var c = a.split('|'),
          e = a.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function kb(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function lb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return 'input' === c && b.type === a;
      };
    }

    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ('input' === c || 'button' === c) && b.type === a;
      };
    }

    function nb(a) {
      return hb(function (b) {
        return b = +b, hb(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function ob(a) {
      return a && _typeof(a.getElementsByTagName) !== C && a;
    }

    c = fb.support = {}, f = fb.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? 'HTML' !== b.nodeName : !1;
    }, m = fb.setDocument = function (a) {
      var b,
          e = a ? a.ownerDocument || a : v,
          g = e.defaultView;
      return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener('unload', function () {
        m();
      }, !1) : g.attachEvent && g.attachEvent('onunload', function () {
        m();
      })), c.attributes = ib(function (a) {
        return a.className = 'i', !a.getAttribute('className');
      }), c.getElementsByTagName = ib(function (a) {
        return a.appendChild(e.createComment('')), !a.getElementsByTagName('*').length;
      }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = 'i', 2 === a.getElementsByClassName('i').length;
      }), c.getById = ib(function (a) {
        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if (_typeof(b.getElementById) !== C && p) {
          var _c2 = b.getElementById(a);

          return _c2 && _c2.parentNode ? [_c2] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          return a.getAttribute('id') === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          var c = _typeof(a.getAttributeNode) !== C && a.getAttributeNode('id');
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return _typeof(b.getElementsByTagName) !== C ? b.getElementsByTagName(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ('*' === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return _typeof(b.getElementsByClassName) !== C && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push('[*^$]=' + M + "*(?:''|\"\")"), a.querySelectorAll('[selected]').length || q.push('\\[' + M + '*(?:value|' + L + ')'), a.querySelectorAll(':checked').length || q.push(':checked');
      }), ib(function (a) {
        var b = e.createElement('input');
        b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push('name' + M + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
        c.disconnectedMatch = s.call(a, 'div'), s.call(a, "[s!='']:x"), r.push('!=', Q);
      }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            f = a.parentNode,
            g = b.parentNode,
            h = [a],
            i = [b];
        if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
        if (f === g) return kb(a, b);
        c = a;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          i.unshift(c);
        }

        while (h[d] === i[d]) {
          d++;
        }

        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, e) : n;
    }, fb.matches = function (a, b) {
      return fb(a, null, null, b);
    }, fb.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var _d = s.call(a, b);

        if (_d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return _d;
      } catch (e) {}
      return fb(b, n, null, [a]).length > 0;
    }, fb.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fb.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fb.error = function (a) {
      throw new Error('Syntax error, unrecognized expression: ' + a);
    }, fb.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = fb.getText = function (a) {
      var b,
          c = '',
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ('string' === typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = fb.selectors = {
      cacheLength: 50,
      createPseudo: hb,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || '').replace(cb, db), '~=' === a[2] && (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] && fb.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(cb, db).toLowerCase();
          return '*' === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + ' '];
          return b || (b = new RegExp('(^|' + M + ')' + a + '(' + M + '|$)')) && y(a, function (a) {
            return b.test('string' === typeof a.className && a.className || _typeof(a.getAttribute) !== C && a.getAttribute('class') || '');
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fb.attr(d, a);
            return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b ? c && e.slice(-c.length) === c : '~=' === b ? (' ' + e + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = 'nth' !== a.slice(0, 3),
              g = 'last' !== a.slice(-4),
              h = 'of-type' === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? 'nextSibling' : 'previousSibling',
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;

            if (q) {
              if (f) {
                while (p) {
                  l = b;

                  while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }

                  o = p = 'only' === a && !o && 'nextSibling';
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];

                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];
                    break;
                  }
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              }

              return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error('unsupported pseudo: ' + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, '', b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: hb(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, '$1'));
          return d[u] ? hb(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop();
          };
        }),
        has: hb(function (a) {
          return function (b) {
            return fb(a, b).length > 0;
          };
        }),
        contains: hb(function (a) {
          return function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: hb(function (a) {
          return W.test(a || '') || fb.error('unsupported lang: ' + a), a = a.replace(cb, db).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang')) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + '-');
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Z.test(a.nodeName);
        },
        input: function input(a) {
          return Y.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && 'button' === a.type || 'button' === b;
        },
        text: function text(a) {
          var b;
          return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
        },
        first: nb(function () {
          return [0];
        }),
        last: nb(function (a, b) {
          return [b - 1];
        }),
        eq: nb(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: nb(function (a, b) {
          for (var _c3 = 0; b > _c3; _c3 += 2) {
            a.push(_c3);
          }

          return a;
        }),
        odd: nb(function (a, b) {
          for (var _c4 = 1; b > _c4; _c4 += 2) {
            a.push(_c4);
          }

          return a;
        }),
        lt: nb(function (a, b, c) {
          for (var _d2 = 0 > c ? c + b : c; --_d2 >= 0;) {
            a.push(_d2);
          }

          return a;
        }),
        gt: nb(function (a, b, c) {
          for (var _d3 = 0 > c ? c + b : c; ++_d3 < b;) {
            a.push(_d3);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = lb(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = mb(b);
    }

    function pb() {}

    pb.prototype = d.filters = d.pseudos, d.setFilters = new pb(), g = fb.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + ' '];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, ' ')
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
    };

    function qb(a) {
      for (var b = 0, c = a.length, d = ''; c > b; b++) {
        d += a[b].value;
      }

      return d;
    }

    function rb(a, b, c) {
      var d = b.dir,
          e = c && 'parentNode' === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
            if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function sb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function tb(a, b, c) {
      for (var _d4 = 0, _e = b.length; _e > _d4; _d4++) {
        fb(a, b[_d4], c);
      }

      return c;
    }

    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }

      return g;
    }

    function vb(a, b, c, d, e, f) {
      return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || tb(b || '*', h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ub(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = ub(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
      });
    }

    function wb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = rb(function (a) {
        return a === b;
      }, h, !0), l = rb(function (a) {
        return K.call(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }

            return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
              value: ' ' === a[i - 2].type ? '*' : ''
            })).replace(R, '$1'), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
          }

          m.push(c);
        }
      }

      return sb(m);
    }

    function xb(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = '0',
            r = _f && [],
            s = [],
            t = j,
            u = _f || e && d.find.TAG('*', k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;

        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;

            while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = v);
          }

          c && ((l = !o && l) && p--, _f && r.push(l));
        }

        if (p += q, c && q !== p) {
          m = 0;

          while (o = b[m++]) {
            o(r, s, g, h);
          }

          if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = G.call(i));
            }
            s = ub(s);
          }

          I.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
        }

        return k && (w = v, j = t), r;
      };

      return c ? hb(f) : f;
    }

    return h = fb.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + ' '];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, xb(e, d)), f.selector = a;
      }

      return f;
    }, i = fb.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = 'function' === typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = X.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
    }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement('div'));
    }), ib(function (a) {
      return a.innerHTML = "<a href='#'></a>", '#' === a.firstChild.getAttribute('href');
    }) || jb('type|href|height|width', function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ib(function (a) {
      return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' === a.firstChild.getAttribute('value');
    }) || jb('value', function (a, b, c) {
      return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ib(function (a) {
      return null == a.getAttribute('disabled');
    }) || jb(L, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fb;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[':'] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ('string' === typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;
      if ('string' !== typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));

      for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }

      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + ' ' + a : a, d;
    },
    filter: function filter(a) {
      return this.pushStack(x(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(x(this, a || [], !0));
    },
    is: function is(a) {
      return !!x(this, 'string' === typeof a && u.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var y,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = n.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;

    if ('string' === typeof a) {
      if (c = '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);

      if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
          n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }
        return this;
      }

      return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? 'undefined' !== typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/,
      C = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.extend({
    dir: function dir(a, b, c) {
      var d = [],
          e = void 0 !== c;

      while ((a = a[b]) && 9 !== a.nodeType) {
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      }

      return d;
    },
    sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }

      return c;
    }
  }), n.fn.extend({
    has: function has(a) {
      var b = n(a, this),
          c = b.length;
      return this.filter(function () {
        for (var _a = 0; c > _a; _a++) {
          if (n.contains(this, b[_a])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || 'string' !== typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.unique(f) : f);
    },
    index: function index(a) {
      return a ? 'string' === typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {
      ;
    }

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return n.dir(a, 'parentNode');
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return n.dir(a, 'parentNode', c);
    },
    next: function next(a) {
      return D(a, 'nextSibling');
    },
    prev: function prev(a) {
      return D(a, 'previousSibling');
    },
    nextAll: function nextAll(a) {
      return n.dir(a, 'nextSibling');
    },
    prevAll: function prevAll(a) {
      return n.dir(a, 'previousSibling');
    },
    nextUntil: function nextUntil(a, b, c) {
      return n.dir(a, 'nextSibling', c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return n.dir(a, 'previousSibling', c);
    },
    siblings: function siblings(a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return n.sibling(a.firstChild);
    },
    contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return 'Until' !== a.slice(-5) && (d = c), d && 'string' === typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var E = /\S+/g,
      F = {};

  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = 'string' === typeof a ? F[a] || G(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          b = !1;
          break;
        }
      }

      d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
    },
        k = {
      add: function add() {
        if (h) {
          var _c5 = h.length;
          !function g(b) {
            n.each(b, function (b, c) {
              var d = n.type(c);
              'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && g(c);
            });
          }(arguments), d ? f = h.length : b && (e = _c5, j(b));
        }

        return this;
      },
      remove: function remove() {
        return h && n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, h, c)) > -1) {
            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
      },
      empty: function empty() {
        return h = [], f = 0, this;
      },
      disable: function disable() {
        return h = i = b = void 0, this;
      },
      disabled: function disabled() {
        return !h;
      },
      lock: function lock() {
        return i = void 0, b || k.disable(), this;
      },
      locked: function locked() {
        return !i;
      },
      fireWith: function fireWith(a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
      },
      fire: function fire() {
        return k.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!c;
      }
    };

    return k;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [['resolve', 'done', n.Callbacks('once memory'), 'resolved'], ['reject', 'fail', n.Callbacks('once memory'), 'rejected'], ['notify', 'progress', n.Callbacks('memory')]],
          c = 'pending',
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + 'With'](this === e ? d : this, arguments), this;
        }, e[f[0] + 'With'] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready'))));
    }
  });

  function I() {
    l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready();
  }

  n.ready.promise = function (b) {
    return H || (H = n.Deferred(), 'complete' === l.readyState ? setTimeout(n.ready) : (l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))), H.promise(b);
  }, n.ready.promise();

  var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ('object' === n.type(c)) {
      e = !0;

      for (h in c) {
        n.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b3, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };

  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };

  function K() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function get() {
        return {};
      }
    }), this.expando = n.expando + Math.random();
  }

  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function key(a) {
      if (!K.accepts(a)) return 0;
      var b = {},
          c = a[this.expando];

      if (!c) {
        c = K.uid++;

        try {
          b[this.expando] = {
            value: c
          }, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, n.extend(a, b);
        }
      }

      return this.cache[c] || (this.cache[c] = {}), c;
    },
    set: function set(a, b, c) {
      var d,
          e = this.key(a),
          f = this.cache[e];
      if ('string' === typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
        f[d] = b[d];
      }
      return f;
    },
    get: function get(a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b];
    },
    access: function access(a, b, c) {
      var d;
      return void 0 === b || b && 'string' === typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function remove(a, b) {
      var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
      if (void 0 === b) this.cache[f] = {};else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;

        while (c--) {
          delete g[d[c]];
        }
      }
    },
    hasData: function hasData(a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    },
    discard: function discard(a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    }
  };
  var L = new K(),
      M = new K(),
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = 'data-' + b.replace(O, '-$1').toLowerCase(), c = a.getAttribute(d), 'string' === typeof c) {
      try {
        c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : +c + '' === c ? +c : N.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}

      M.set(a, b, c);
    } else c = void 0;
    return c;
  }

  n.extend({
    hasData: function hasData(a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function data(a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function removeData(a, b) {
      M.remove(a, b);
    },
    _data: function _data(a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function _removeData(a, b) {
      L.remove(a, b);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, 'hasDataAttrs'))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }

          L.set(f, 'hasDataAttrs', !0);
        }

        return e;
      }

      return 'object' === _typeof(a) ? this.each(function () {
        M.set(this, a);
      }) : J(this, function (b) {
        var c,
            d = n.camelCase(a);

        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c) return c;
          if (c = M.get(f, d), void 0 !== c) return c;
          if (c = P(f, d, void 0), void 0 !== c) return c;
        } else this.each(function () {
          var c = M.get(this, d);
          M.set(this, d, b), -1 !== a.indexOf('-') && void 0 !== c && M.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function removeData(a) {
      return this.each(function () {
        M.remove(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || 'fx') + 'queue', d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || 'fx';

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      'inprogress' === e && (e = c.shift(), d--), e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + 'queueHooks';
      return L.get(a, c) || L.access(a, c, {
        empty: n.Callbacks('once memory').add(function () {
          L.remove(a, [b + 'queue', c]);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return 'string' !== typeof a && (b = a, a = 'fx', c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || 'fx', []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      'string' !== typeof a && (b = a, a = void 0), a = a || 'fx';

      while (g--) {
        c = L.get(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  });

  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ['Top', 'Right', 'Bottom', 'Left'],
      S = function S(a, b) {
    return a = b || a, 'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a);
  },
      T = /^(?:checkbox|radio)$/i;

  !function () {
    var a = l.createDocumentFragment(),
        b = a.appendChild(l.createElement('div')),
        c = l.createElement('input');
    c.setAttribute('type', 'radio'), c.setAttribute('checked', 'checked'), c.setAttribute('name', 't'), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var U = 'undefined';
  k.focusinBubbles = 'onfocusin' in a;
  var V = /^key/,
      W = /^(?:mouse|pointer|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;

  function Z() {
    return !0;
  }

  function $() {
    return !1;
  }

  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.get(a);

      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return _typeof(n) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || '').match(E) || [''], j = b.length;

        while (j--) {
          h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join('.')
          }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.hasData(a) && L.get(a);

      if (r && (i = r.events)) {
        b = (b || '').match(E) || [''], j = b.length;

        while (j--) {
          if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), g = f = m.length;

            while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ('**' !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }

            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
      }
    },
    trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          m,
          o,
          p = [d || l],
          q = j.call(b, 'type') ? b.type : b,
          r = j.call(b, 'namespace') ? b.namespace.split('.') : [];

      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), k = q.indexOf(':') < 0 && 'on' + q, b = b[n.expando] ? b : new n.Event(q, 'object' === _typeof(b) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
            p.push(g), h = g;
          }

          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }

        f = 0;

        while ((g = p[f++]) && !b.isPropagationStopped()) {
          b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle'), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        }

        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (L.get(this, 'events') || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && (!a.button || 'click' !== a.type)) for (; i !== this; i = i.parentNode || this) {
        if (i.disabled !== !0 || 'click' !== a.type) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + ' ', void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;

      while (b--) {
        c = d[b], a[c] = f[c];
      }

      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function trigger() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function trigger() {
          return 'checkbox' === this.type && this.click && n.nodeName(this, 'input') ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    isDefaultPrevented: $,
    isPropagationStopped: $,
    isImmediatePropagationStopped: $,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), k.focusinBubbles || n.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d, e) {
      var f, g;

      if ('object' === _typeof(a)) {
        'string' !== typeof b && (c = c || b, b = void 0);

        for (g in a) {
          this.on(g, b, c, a[g], e);
        }

        return this;
      }

      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ('string' === typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;
      return 1 === e && (f = d, d = function d(a) {
        return n().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    },
    one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;

      if ('object' === _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return (b === !1 || 'function' === typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bb = /<([\w:]+)/,
      cb = /<|&#?\w+;/,
      db = /<(?:script|style|link)/i,
      eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fb = /^$|\/(?:java|ecma)script/i,
      gb = /^true\/(.*)/,
      hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ib = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', '']
  };
  ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;

  function jb(a, b) {
    return n.nodeName(a, 'table') && n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
  }

  function kb(a) {
    return a.type = (null !== a.getAttribute('type')) + '/' + a.type, a;
  }

  function lb(a) {
    var b = gb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute('type'), a;
  }

  function mb(a, b) {
    for (var _c6 = 0, _d5 = a.length; _d5 > _c6; _c6++) {
      L.set(a[_c6], 'globalEval', !b || L.get(b[_c6], 'globalEval'));
    }
  }

  function nb(a, b) {
    var c, d, e, f, g, h, i, j;

    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};

        for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }

      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
    }
  }

  function ob(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || '*') : a.querySelectorAll ? a.querySelectorAll(b || '*') : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }

  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    'input' === c && T.test(a.type) ? b.checked = a.checked : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
  }

  n.extend({
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) {
        pb(f[d], g[d]);
      }
      if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) {
        nb(f[d], g[d]);
      } else nb(a, h);
      return g = ob(h, 'script'), g.length > 0 && mb(g, !i && ob(a, 'script')), h;
    },
    buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
        if (e = a[m], e || 0 === e) if ('object' === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (cb.test(e)) {
          f = f || k.appendChild(b.createElement('div')), g = (bb.exec(e) || ['', ''])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, '<$1></$2>') + h[2], j = h[0];

          while (j--) {
            f = f.lastChild;
          }

          n.merge(l, f.childNodes), f = k.firstChild, f.textContent = '';
        } else l.push(b.createTextNode(e));
      }

      k.textContent = '', m = 0;

      while (e = l[m++]) {
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), 'script'), i && mb(f), c)) {
          j = 0;

          while (e = f[j++]) {
            fb.test(e.type || '') && c.push(e);
          }
        }
      }

      return k;
    },
    cleanData: function cleanData(a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events) for (d in b.events) {
            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          }
          L.cache[e] && delete L.cache[e];
        }

        delete M.cache[c[M.expando]];
      }
    }
  }), n.fn.extend({
    text: function text(a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var _b4 = jb(this, a);

          _b4.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var _b5 = jb(this, a);

          _b5.insertBefore(a, _b5.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function remove(a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, 'script')), c.parentNode.removeChild(c));
      }

      return this;
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = '');
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return J(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;

        if ('string' === typeof a && !db.test(a) && !ib[(bb.exec(a) || ['', ''])[1].toLowerCase()]) {
          a = a.replace(ab, '<$1></$2>');

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function detach(a) {
      return this.remove(a, !0);
    },
    domManip: function domManip(a, b) {
      a = e.apply([], a);
      var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
      if (q || l > 1 && 'string' === typeof p && !k.checkClone && eb.test(p)) return this.each(function (c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });

      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(ob(c, 'script'), kb), g = f.length; l > j; j++) {
          h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, 'script'))), b.call(this[j], h, j);
        }

        if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) {
          h = f[j], fb.test(h.type || '') && !L.access(h, 'globalEval') && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, '')));
        }
      }

      return this;
    }
  }), n.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
        c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      }

      return this.pushStack(d);
    };
  });
  var qb,
      rb = {};

  function sb(b, c) {
    var d,
        e = n(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], 'display');
    return e.detach(), f;
  }

  function tb(a) {
    var b = l,
        c = rb[a];
    return c || (c = sb(a, b), 'none' !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c;
  }

  var ub = /^margin/,
      vb = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'),
      wb = function wb(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null);
  };

  function xb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ('' !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + '' : g;
  }

  function yb(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  !function () {
    var b,
        c,
        d = l.documentElement,
        e = l.createElement('div'),
        f = l.createElement('div');

    if (f.style) {
      var _g = function _g() {
        f.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', f.innerHTML = '', d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = '1%' !== g.top, c = '4px' === g.width, d.removeChild(e);
      };

      f.style.backgroundClip = 'content-box', f.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' === f.style.backgroundClip, e.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', e.appendChild(f);
      a.getComputedStyle && n.extend(k, {
        pixelPosition: function pixelPosition() {
          return _g(), b;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == c && _g(), c;
        },
        reliableMarginRight: function reliableMarginRight() {
          var b,
              c = f.appendChild(l.createElement('div'));
          return c.style.cssText = f.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', c.style.marginRight = c.style.width = '0', f.style.width = '1px', d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b;
        }
      });
    }
  }(), n.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  };
  var zb = /^(none|table(?!-c[ea]).+)/,
      Ab = new RegExp('^(' + Q + ')(.*)$', 'i'),
      Bb = new RegExp('^([+-])=(' + Q + ')', 'i'),
      Cb = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
      Db = {
    letterSpacing: '0',
    fontWeight: '400'
  },
      Eb = ['Webkit', 'O', 'Moz', 'ms'];

  function Fb(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
        d = b,
        e = Eb.length;

    while (e--) {
      if (b = Eb[e] + c, b in a) return b;
    }

    return d;
  }

  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
  }

  function Hb(a, b, c, d, e) {
    for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      'margin' === c && (g += n.css(a, c + R[f], !0, e)), d ? ('content' === c && (g -= n.css(a, 'padding' + R[f], !0, e)), 'margin' !== c && (g -= n.css(a, 'border' + R[f] + 'Width', !0, e))) : (g += n.css(a, 'padding' + R[f], !0, e), 'padding' !== c && (g += n.css(a, 'border' + R[f] + 'Width', !0, e)));
    }

    return g;
  }

  function Ib(a, b, c) {
    var d = !0,
        e = 'width' === b ? a.offsetWidth : a.offsetHeight,
        f = wb(a),
        g = 'border-box' === n.css(a, 'boxSizing', !1, f);

    if (0 >= e || null == e) {
      if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }

    return e + Hb(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
  }

  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = L.get(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && S(d) && (f[g] = L.access(d, 'olddisplay', tb(d.nodeName)))) : (e = S(d), 'none' === c && e || L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
    }

    for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
    }

    return a;
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var _c7 = xb(a, 'opacity');

            return '' === _c7 ? '1' : _c7;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      'float': 'cssFloat'
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var _e2,
            _f2,
            _g2,
            _h = n.camelCase(b),
            _i = a.style;

        return b = n.cssProps[_h] || (n.cssProps[_h] = Fb(_i, _h)), _g2 = n.cssHooks[b] || n.cssHooks[_h], void 0 === c ? _g2 && 'get' in _g2 && void 0 !== (_e2 = _g2.get(a, !1, d)) ? _e2 : _i[b] : (_f2 = _typeof(c), 'string' === _f2 && (_e2 = Bb.exec(c)) && (c = (_e2[1] + 1) * _e2[2] + parseFloat(n.css(a, b)), _f2 = 'number'), null != c && c === c && ('number' !== _f2 || n.cssNumber[_h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (_i[b] = 'inherit'), _g2 && 'set' in _g2 && void 0 === (c = _g2.set(a, c, d)) || (_i[b] = c)), void 0);
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && 'get' in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), 'normal' === e && b in Db && (e = Db[b]), '' === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
    }
  }), n.each(['height', 'width'], function (a, b) {
    n.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? zb.test(n.css(a, 'display')) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
          return Ib(a, b, d);
        }) : Ib(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e = d && wb(a);
        return Gb(a, c, d ? Hb(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, e), e) : 0);
      }
    };
  }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, {
      display: 'inline-block'
    }, xb, [a, 'marginRight']) : void 0;
  }), n.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = 'string' === typeof c ? c.split(' ') : [c]; 4 > d; d++) {
          e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, ub.test(a) || (n.cssHooks[a + b].set = Gb);
  }), n.fn.extend({
    css: function css(a, b) {
      return J(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = wb(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return Jb(this, !0);
    },
    hide: function hide() {
      return Jb(this);
    },
    toggle: function toggle(a) {
      return 'boolean' === typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }

  n.Tween = Kb, Kb.prototype = {
    constructor: Kb,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? '' : 'px');
    },
    cur: function cur() {
      var a = Kb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = Kb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
    }
  }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
      },
      set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      }
    }
  }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }
  }, n.fx = Kb.prototype.init, n.fx.step = {};
  var Lb,
      Mb,
      Nb = /^(?:toggle|show|hide)$/,
      Ob = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'),
      Pb = /queueHooks$/,
      Qb = [Vb],
      Rb = {
    '*': [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = Ob.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? '' : 'px'),
          g = (n.cssNumber[a] || 'px' !== f && +d) && Ob.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;

      if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;

        do {
          h = h || '.5', g /= h, n.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }

      return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }]
  };

  function Sb() {
    return setTimeout(function () {
      Lb = void 0;
    }), Lb = n.now();
  }

  function Tb(a, b) {
    var c,
        d = 0,
        e = {
      height: a
    };

    for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = R[d], e['margin' + c] = e['padding' + c] = a;
    }

    return b && (e.opacity = e.width = a), e;
  }

  function Ub(a, b, c) {
    for (var d, e = (Rb[b] || []).concat(Rb['*']), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function Vb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && S(a),
        q = L.get(a, 'fxshow');
    c.queue || (h = n._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
      });
    })), 1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, 'display'), k = 'none' === j ? L.get(a, 'olddisplay') || tb(a.nodeName) : j, 'inline' === k && 'none' === n.css(a, 'float') && (o.display = 'inline-block')), c.overflow && (o.overflow = 'hidden', l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], Nb.exec(e)) {
        if (delete b[d], f = f || 'toggle' === e, e === (p ? 'hide' : 'show')) {
          if ('show' !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }

        m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }

    if (n.isEmptyObject(m)) 'inline' === ('none' === j ? tb(a.nodeName) : j) && (o.display = j);else {
      q ? 'hidden' in q && (p = q.hidden) : q = L.access(a, 'fxshow', {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;
        L.remove(a, 'fxshow');

        for (b in m) {
          n.style(a, b, m[b]);
        }
      });

      for (d in m) {
        g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
      }
    }
  }

  function Wb(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && 'expand' in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function Xb(a, b, c) {
    var d,
        e,
        f = 0,
        g = Qb.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {}
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: Lb || Sb(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }

        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (Wb(k, j.opts.specialEasing); g > f; f++) {
      if (d = Qb[f].call(j, a, k, j.opts)) return d;
    }

    return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(Xb, {
    tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');

      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
      }
    },
    prefilter: function prefilter(a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && 'object' === _typeof(a) ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : 'number' === typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(S).css('opacity', 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = Xb(this, n.extend({}, a), f);
        (e || L.get(this, 'finish')) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return 'string' !== typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
        var b = !0,
            e = null != a && a + 'queueHooks',
            f = n.timers,
            g = L.get(this);
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Pb.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || 'fx'), this.each(function () {
        var b,
            c = L.get(this),
            d = c[a + 'queue'],
            e = c[a + 'queueHooks'],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), n.each(['toggle', 'show', 'hide'], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || 'boolean' === typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: Tb('show'),
    slideUp: Tb('hide'),
    slideToggle: Tb('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;

    for (Lb = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }

    c.length || n.fx.stop(), Lb = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    clearInterval(Mb), Mb = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
      var d = setTimeout(b, a);

      c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a = l.createElement('input'),
        b = l.createElement('select'),
        c = b.appendChild(l.createElement('option'));
    a.type = 'checkbox', k.checkOn = '' !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement('input'), a.value = 't', a.type = 'radio', k.radioValue = 't' === a.value;
  }();
  var Yb,
      Zb,
      $b = n.expr.attrHandle;
  n.fn.extend({
    attr: function attr(a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c) : void n.removeAttr(a, b));
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!k.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
            var _c8 = a.value;
            return a.setAttribute('type', b), _c8 && (a.value = _c8), b;
          }
        }
      }
    }
  }), Zb = {
    set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $b[b] || n.find.attr;

    $b[b] = function (a, b, d) {
      var e, f;
      return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e;
    };
  });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          return a.hasAttribute('tabindex') || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }
  }), n.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
    n.propFix[this.toLowerCase()] = this;
  });
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 'string' === typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className));
      });
      if (h) for (b = (a || '').match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ac, ' ') : ' ')) {
          f = 0;

          while (e = b[f++]) {
            d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
          }

          g = n.trim(d), c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || 'string' === typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className));
      });
      if (h) for (b = (a || '').match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ac, ' ') : '')) {
          f = 0;

          while (e = b[f++]) {
            while (d.indexOf(' ' + e + ' ') >= 0) {
              d = d.replace(' ' + e + ' ', ' ');
            }
          }

          g = a ? n.trim(d) : '', c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return 'boolean' === typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ('string' === c) {
          var _b6,
              _d6 = 0,
              _e3 = n(this),
              _f3 = a.match(E) || [];

          while (_b6 = _f3[_d6++]) {
            _e3.hasClass(_b6) ? _e3.removeClass(_b6) : _e3.addClass(_b6);
          }
        } else (c === U || 'boolean' === c) && (this.className && L.set(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : L.get(this, '__className__') || '');
      });
    },
    hasClass: function hasClass(a) {
      for (var _b7 = ' ' + a + ' ', _c9 = 0, _d7 = this.length; _d7 > _c9; _c9++) {
        if (1 === this[_c9].nodeType && (' ' + this[_c9].className + ' ').replace(ac, ' ').indexOf(_b7) >= 0) return !0;
      }

      return !1;
    }
  });
  var bc = /\r/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = '' : 'number' === typeof e ? e += '' : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? '' : a + '';
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' === typeof c ? c.replace(bc, '') : null == c ? '' : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = n.find.attr(a, 'value');
          return null != b ? b : n.trim(n.text(a));
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          }

          return c || (a.selectedIndex = -1), f;
        }
      }
    }
  }), n.each(['radio', 'checkbox'], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
      }
    }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute('value') ? 'on' : a.value;
    });
  }), n.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
    }
  });
  var cc = n.now(),
      dc = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + '');
  }, n.parseXML = function (a) {
    var b, c;
    if (!a || 'string' !== typeof a) return null;

    try {
      c = new DOMParser(), b = c.parseFromString(a, 'text/xml');
    } catch (d) {
      b = void 0;
    }

    return (!b || b.getElementsByTagName('parsererror').length) && n.error('Invalid XML: ' + a), b;
  };
  var ec,
      fc,
      gc = /#.*$/,
      hc = /([?&])_=[^&]*/,
      ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      kc = /^(?:GET|HEAD)$/,
      lc = /^\/\//,
      mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      nc = {},
      oc = {},
      pc = '*/'.concat('*');

  try {
    fc = location.href;
  } catch (qc) {
    fc = l.createElement('a'), fc.href = '', fc = fc.href;
  }

  ec = mc.exec(fc.toLowerCase()) || [];

  function rc(a) {
    return function (b, c) {
      'string' !== typeof b && (c = b, b = '*');
      var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        '+' === d[0] ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function sc(a, b, c, d) {
    var e = {},
        f = a === oc;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return 'string' !== typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e['*'] && g('*');
  }

  function tc(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }

    return d && n.extend(!0, a, d), a;
  }

  function uc(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ('*' === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
    }

    if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + ' ' + i[0]]) {
          f = e;
          break;
        }

        g || (g = e);
      }

      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function vc(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ('*' === f) f = i;else if ('*' !== i && i !== f) {
        if (g = j[i + ' ' + f] || j['* ' + f], !g) for (e in j) {
          if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a['throws']) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: 'parsererror',
            error: g ? l : 'No conversion from ' + i + ' to ' + f
          };
        }
      }
    }

    return {
      state: 'success',
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: fc,
      type: 'GET',
      isLocal: jc.test(ec[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': pc,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': n.parseJSON,
        'text xml': n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
    },
    ajaxPrefilter: rc(nc),
    ajaxTransport: rc(oc),
    ajax: function ajax(a, b) {
      'object' === _typeof(a) && (b = a, a = void 0), b = b || {};
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks('once memory'),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = 'canceled',
          v = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === t) {
            if (!f) {
              f = {};

              while (b = ic.exec(e)) {
                f[b[1].toLowerCase()] = b[2];
              }
            }

            b = f[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? e : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || u;
          return c && c.abort(b), x(0, b), this;
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + '').replace(gc, '').replace(lc, ec[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ('http:' === h[1] ? '80' : '443')) === (ec[3] || ('http:' === ec[1] ? '80' : '443')))), k.data && k.processData && 'string' !== typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) return v;
      i = k.global, i && 0 === n.active++ && n.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, '$1_=' + cc++) : d + (dc.test(d) ? '&' : '?') + '_=' + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]), n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + pc + '; q=0.01' : '') : k.accepts['*']);

      for (j in k.headers) {
        v.setRequestHeader(j, k.headers[j]);
      }

      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = 'abort';

      for (j in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        v[j](k[j]);
      }

      if (c = sc(oc, k, b, v)) {
        v.readyState = 1, i && m.trigger('ajaxSend', [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort('timeout');
        }, k.timeout));

        try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, 'No Transport');

      function x(a, b, f, h) {
        var j,
            r,
            s,
            u,
            w,
            x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (n.lastModified[d] = w), w = v.getResponseHeader('etag'), w && (n.etag[d] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger('ajaxComplete', [v, k]), --n.active || n.event.trigger('ajaxStop')));
      }

      return v;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, 'json');
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, 'script');
    }
  }), n.each(['get', 'post'], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      });
    };
  }), n.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      'throws': !0
    });
  }, n.fn.extend({
    wrapAll: function wrapAll(a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;

        while (a.firstElementChild) {
          a = a.firstElementChild;
        }

        return a;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b));
      } : function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
      }).end();
    }
  }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  var wc = /%20/g,
      xc = /\[\]$/,
      yc = /\r?\n/g,
      zc = /^(?:submit|button|image|reset|file)$/i,
      Ac = /^(?:input|select|textarea|keygen)/i;

  function Bc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || xc.test(a) ? d(a, e) : Bc(a + '[' + ('object' === _typeof(e) ? b : '') + ']', e, c, d);
    });else if (c || 'object' !== n.type(b)) d(a, b);else for (e in b) {
      Bc(a + '[' + e + ']', b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Bc(c, a[c], b, e);
    }
    return d.join('&').replace(wc, '+');
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, 'elements');
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(':disabled') && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(yc, '\r\n')
          };
        }) : {
          name: b.name,
          value: c.replace(yc, '\r\n')
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {}
  };
  var Cc = 0,
      Dc = {},
      Ec = {
    0: 200,
    1223: 204
  },
      Fc = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on('unload', function () {
    for (var _a2 in Dc) {
      Dc[_a2]();
    }
  }), k.cors = !!Fc && 'withCredentials' in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
    var _b8;

    return k.cors || Fc && !a.crossDomain ? {
      send: function send(c, d) {
        var e,
            f = a.xhr(),
            g = ++Cc;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
          f[e] = a.xhrFields[e];
        }
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');

        for (e in c) {
          f.setRequestHeader(e, c[e]);
        }

        _b8 = function b(a) {
          return function () {
            _b8 && (delete Dc[g], _b8 = f.onload = f.onerror = null, 'abort' === a ? f.abort() : 'error' === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, 'string' === typeof f.responseText ? {
              text: f.responseText
            } : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = _b8(), f.onerror = _b8('error'), _b8 = Dc[g] = _b8('abort');

        try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (_b8) throw h;
        }
      },
      abort: function abort() {
        _b8 && _b8();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      'text script': function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter('script', function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
  }), n.ajaxTransport('script', function (a) {
    if (a.crossDomain) {
      var _b9, _c11;

      return {
        send: function send(d, e) {
          _b9 = n('<script>').prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on('load error', _c11 = function _c10(a) {
            _b9.remove(), _c11 = null, a && e('error' === a.type ? 404 : 200, a.type);
          }), l.head.appendChild(_b9[0]);
        },
        abort: function abort() {
          _c11 && _c11();
        }
      };
    }
  });
  var Gc = [],
      Hc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function jsonpCallback() {
      var a = Gc.pop() || n.expando + '_' + cc++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter('json jsonp', function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Hc.test(b.url) ? 'url' : 'string' === typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && Hc.test(b.data) && 'data');
    return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, '$1' + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
      return g || n.error(e + ' was not called'), g[0];
    }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), 'script') : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || 'string' !== typeof a) return null;
    'boolean' === typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a),
        e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  };
  var Ic = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ('string' !== typeof a && Ic) return Ic.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(' ');
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && 'object' === _typeof(b) && (e = 'POST'), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: 'html',
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  }, n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  var Jc = a.document.documentElement;

  function Kc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }

  n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, 'position'),
          l = n(a),
          m = {};
      'static' === k && (a.style.position = 'relative'), h = l.offset(), f = n.css(a, 'top'), i = n.css(a, 'left'), j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), 'using' in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = this[0],
          e = {
        top: 0,
        left: 0
      },
          f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e;
    },
    position: function position() {
      if (this[0]) {
        var _a3,
            _b10,
            _c12 = this[0],
            _d8 = {
          top: 0,
          left: 0
        };

        return 'fixed' === n.css(_c12, 'position') ? _b10 = _c12.getBoundingClientRect() : (_a3 = this.offsetParent(), _b10 = this.offset(), n.nodeName(_a3[0], 'html') || (_d8 = _a3.offset()), _d8.top += n.css(_a3[0], 'borderTopWidth', !0), _d8.left += n.css(_a3[0], 'borderLeftWidth', !0)), {
          top: _b10.top - _d8.top - n.css(_c12, 'marginTop', !0),
          left: _b10.left - _d8.left - n.css(_c12, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || Jc;

        while (a && !n.nodeName(a, 'html') && 'static' === n.css(a, 'position')) {
          a = a.offsetParent;
        }

        return a || Jc;
      });
    }
  }), n.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (b, c) {
    var d = 'pageYOffset' === c;

    n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Kc(b);
        return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
      }, b, e, arguments.length, null);
    };
  }), n.each(['top', 'left'], function (a, b) {
    n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
      return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + 'px' : c) : void 0;
    });
  }), n.each({
    Height: 'height',
    Width: 'width'
  }, function (a, b) {
    n.each({
      padding: 'inner' + a,
      content: b,
      '': 'outer' + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || 'boolean' !== typeof d),
            g = c || (d === !0 || e === !0 ? 'margin' : 'border');
        return J(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, 'function' === typeof define && define.amd && define('jquery', [], function () {
    return n;
  });
  var Lc = a.jQuery,
      Mc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
  }, _typeof(b) === U && (a.jQuery = a.$ = n), n;
});
"use strict";

window.neighborhoods = window.neighborhoods || [];
neighborhoods = neighborhoods.concat([{
  name: 'Financial District',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7029037,
    lng: -74.0173751
  }, {
    lat: 40.7015273,
    lng: -74.0160331
  }, {
    lat: 40.7008504,
    lng: -74.0151847
  }, {
    lat: 40.700977900000005,
    lng: -74.0150278
  }, {
    lat: 40.700610600000005,
    lng: -74.0142305
  }, {
    lat: 40.700077199999996,
    lng: -74.0143469
  }, {
    lat: 40.700087,
    lng: -74.0142119
  }, {
    lat: 40.7007264,
    lng: -74.0140372
  }, {
    lat: 40.7009973,
    lng: -74.0139283
  }, {
    lat: 40.7009537,
    lng: -74.0136271
  }, {
    lat: 40.7004358,
    lng: -74.01359450000001
  }, {
    lat: 40.70008740000001,
    lng: -74.0137392
  }, {
    lat: 40.700067700000005,
    lng: -74.0135862
  }, {
    lat: 40.7003019,
    lng: -74.0134668
  }, {
    lat: 40.7004922,
    lng: -74.0134715
  }, {
    lat: 40.700473499999994,
    lng: -74.0132807
  }, {
    lat: 40.6997809,
    lng: -74.0131317
  }, {
    lat: 40.699804,
    lng: -74.0129934
  }, {
    lat: 40.7004696,
    lng: -74.0130774
  }, {
    lat: 40.700477,
    lng: -74.012937
  }, {
    lat: 40.70008210000001,
    lng: -74.0126415
  }, {
    lat: 40.7001043,
    lng: -74.0124938
  }, {
    lat: 40.70058710000001,
    lng: -74.0125486
  }, {
    lat: 40.7005846,
    lng: -74.0123829
  }, {
    lat: 40.70002199999999,
    lng: -74.0120426
  }, {
    lat: 40.7000743,
    lng: -74.01186170000001
  }, {
    lat: 40.7006616,
    lng: -74.0112885
  }, {
    lat: 40.70080070000001,
    lng: -74.0113344
  }, {
    lat: 40.70088659999999,
    lng: -74.0110463
  }, {
    lat: 40.701069999999994,
    lng: -74.01108
  }, {
    lat: 40.70108100000001,
    lng: -74.0112191
  }, {
    lat: 40.701222,
    lng: -74.011251
  }, {
    lat: 40.701273699999994,
    lng: -74.0111111
  }, {
    lat: 40.70140520000001,
    lng: -74.0111485
  }, {
    lat: 40.7017807,
    lng: -74.0095765
  }, {
    lat: 40.7005241,
    lng: -74.0086191
  }, {
    lat: 40.7006603,
    lng: -74.008355
  }, {
    lat: 40.7008911,
    lng: -74.0085126
  }, {
    lat: 40.7013237,
    lng: -74.0075936
  }, {
    lat: 40.70154,
    lng: -74.0077349
  }, {
    lat: 40.70112760000001,
    lng: -74.0087175
  }, {
    lat: 40.701889300000005,
    lng: -74.009241
  }, {
    lat: 40.702863900000004,
    lng: -74.0076252
  }, {
    lat: 40.7030422,
    lng: -74.0075897
  }, {
    lat: 40.7035379,
    lng: -74.0067673
  }, {
    lat: 40.70242749999999,
    lng: -74.0055085
  }, {
    lat: 40.7025636,
    lng: -74.0053082
  }, {
    lat: 40.7027049,
    lng: -74.00544410000002
  }, {
    lat: 40.7027186,
    lng: -74.0050078
  }, {
    lat: 40.702847399999996,
    lng: -74.0050472
  }, {
    lat: 40.7028305,
    lng: -74.0056247
  }, {
    lat: 40.7036436,
    lng: -74.0065358
  }, {
    lat: 40.7039281,
    lng: -74.006133
  }, {
    lat: 40.703867,
    lng: -74.005996
  }, {
    lat: 40.70511340000001,
    lng: -74.0040607
  }, {
    lat: 40.7040693,
    lng: -74.0028676
  }, {
    lat: 40.7042141,
    lng: -74.0026037
  }, {
    lat: 40.7052788,
    lng: -74.0038236
  }, {
    lat: 40.7056079,
    lng: -74.0032963
  }, {
    lat: 40.7045442,
    lng: -74.0021314
  }, {
    lat: 40.7047119,
    lng: -74.0019244
  }, {
    lat: 40.705121,
    lng: -74.0023681
  }, {
    lat: 40.7054232,
    lng: -74.0026973
  }, {
    lat: 40.7055174,
    lng: -74.0025507
  }, {
    lat: 40.7053205,
    lng: -74.0020912
  }, {
    lat: 40.70478690000001,
    lng: -74.0014108
  }, {
    lat: 40.7054025,
    lng: -74.000502
  }, {
    lat: 40.7061658,
    lng: -74.0013672
  }, {
    lat: 40.7064173,
    lng: -74.0009737
  }, {
    lat: 40.7068196,
    lng: -74.0013885
  }, {
    lat: 40.7069232,
    lng: -74.0012311
  }, {
    lat: 40.7068367,
    lng: -74.0011631
  }, {
    lat: 40.7072977,
    lng: -74.0001957
  }, {
    lat: 40.707840000000004,
    lng: -73.9994
  }, {
    lat: 40.712134000000006,
    lng: -74.005197
  }, {
    lat: 40.711532,
    lng: -74.007965
  }, {
    lat: 40.7120545,
    lng: -74.0082154
  }, {
    lat: 40.714379,
    lng: -74.013442
  }, {
    lat: 40.7137189,
    lng: -74.0137119
  }, {
    lat: 40.71028,
    lng: -74.0146819
  }, {
    lat: 40.705107000000005,
    lng: -74.016613
  }, {
    lat: 40.705107000000005,
    lng: -74.017128
  }, {
    lat: 40.70398000000001,
    lng: -74.01768
  }, {
    lat: 40.7035395,
    lng: -74.0177153
  }, {
    lat: 40.7029037,
    lng: -74.0173751
  }],
  color: 'FF6666',
  center: {
    lat: 40.70707995,
    lng: -74.00855765
  },
  summary: "Comprised of offices and headquarters of many of the city's major financial institutions, including the <a target='_blank' href='https://en.wikipedia.org/wiki/New_York_Stock_Exchange'>New York Stock Exchange</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Federal_Reserve_Bank_of_New_York'>Federal Reserve Bank of New York</a>, the new <a target='_blank' href='https://en.wikipedia.org/wiki/World_Trade_Center'>World Trade Center</a> complex, along with the <a target='_blank' href='https://en.wikipedia.org/wiki/National_September_11_Memorial_%26_Museum'>National September 11 Memorial and Museum</a>. The Financial District, or <strong>FiDi</strong> for short, is rich in history, overlapping the boundaries of the <a target='_blank' href='https://en.wikipedia.org/wiki/New_Amsterdam'>New Amsterdam</a> settlement in the late 17th century. <a target='blank' href='https://en.wikipedia.org/wiki/Federal_Hall'>Federal Hall</a> is also located here, which is the site of the <a target='_blank' href='https://en.wikipedia.org/wiki/United_States_Capitol'>first US Capitol</a> and the inauguration of <a target='_blank' href='https://en.wikipedia.org/wiki/George_Washington'>George Washington</a> as the first President of the United States. During the day, the population of the Financial District area swells to about 300,000."
}, {
  name: 'Battery Park City',
  borough: 'Manhattan',
  coords: [{
    lat: 40.705107000000005,
    lng: -74.017128
  }, {
    lat: 40.705107000000005,
    lng: -74.016613
  }, {
    lat: 40.71028,
    lng: -74.0146819
  }, {
    lat: 40.7137189,
    lng: -74.0137119
  }, {
    lat: 40.714379,
    lng: -74.013442
  }, {
    lat: 40.718233,
    lng: -74.012665
  }, {
    lat: 40.718656,
    lng: -74.016784
  }, {
    lat: 40.712313,
    lng: -74.01785700000002
  }, {
    lat: 40.7080108,
    lng: -74.0188873
  }, {
    lat: 40.70781970000001,
    lng: -74.0182115
  }, {
    lat: 40.70713859999999,
    lng: -74.0184744
  }, {
    lat: 40.7071477,
    lng: -74.0187882
  }, {
    lat: 40.7070303,
    lng: -74.01900950000001
  }, {
    lat: 40.7069716,
    lng: -74.0191845
  }, {
    lat: 40.70600199999999,
    lng: -74.019381
  }, {
    lat: 40.7047334,
    lng: -74.0189518
  }, {
    lat: 40.70453010000001,
    lng: -74.0182652
  }, {
    lat: 40.7045444,
    lng: -74.0180721
  }, {
    lat: 40.70462369999999,
    lng: -74.0180077
  }, {
    lat: 40.7046532,
    lng: -74.0175356
  }, {
    lat: 40.7045525,
    lng: -74.0175571
  }, {
    lat: 40.70443160000001,
    lng: -74.0186729
  }, {
    lat: 40.70412350000001,
    lng: -74.0184797
  }, {
    lat: 40.704327,
    lng: -74.017514
  }, {
    lat: 40.705107000000005,
    lng: -74.017128
  }],
  color: '66FF99',
  center: {
    lat: 40.71138975000001,
    lng: -74.01602300000002
  },
  summary: "A <a taregt='_blank' href='https://en.wikipedia.org/wiki/Planned_community'>planned community</a> created by land reclamation on the Hudson River, using 1.2 million cubic yards (917,000 m<sup>3</sup>) of soil and rocks excavated during the construction of the <a taregt='_blank' href='https://en.wikipedia.org/wiki/World_Trade_Center'>World Trade Center</a>. The 9/11 terrorist attacks had a major impact on Battery Park City. The residents of lower Manhattan and particularly of Battery Park City were displaced for ten days. Upon return, the air in the area was still filled with toxic smoke from the World Trade Center fires that persisted until January 2002. The neighborhood, which is the site of the <a taregt='_blank' href='https://en.wikipedia.org/wiki/World_Financial_Center'>World Financial Center</a> along with numerous housing, commercial and retail buildings, is named after the adjacent <a href='https://en.wikipedia.org/wiki/Battery_Park_%28New_York%29'>Battery Park</a>."
}, {
  name: 'Two Bridges',
  borough: 'Manhattan',
  coords: [{
    lat: 40.707840000000004,
    lng: -73.9994
  }, {
    lat: 40.7080353,
    lng: -73.9990496
  }, {
    lat: 40.708348400000006,
    lng: -73.9983594
  }, {
    lat: 40.70854560000001,
    lng: -73.9978534
  }, {
    lat: 40.708751,
    lng: -73.997004
  }, {
    lat: 40.70914100000001,
    lng: -73.994257
  }, {
    lat: 40.7099307,
    lng: -73.9887371
  }, {
    lat: 40.709959000000005,
    lng: -73.9885038
  }, {
    lat: 40.7099325,
    lng: -73.9883711
  }, {
    lat: 40.7098461,
    lng: -73.9883423
  }, {
    lat: 40.709809,
    lng: -73.988647
  }, {
    lat: 40.7090604,
    lng: -73.9884921
  }, {
    lat: 40.7095153,
    lng: -73.984087
  }, {
    lat: 40.710344899999996,
    lng: -73.984215
  }, {
    lat: 40.7103449,
    lng: -73.984859
  }, {
    lat: 40.714444,
    lng: -73.985202
  }, {
    lat: 40.7134349,
    lng: -73.998077
  }, {
    lat: 40.710847,
    lng: -74.0007031
  }, {
    lat: 40.7094953,
    lng: -74.0016446
  }, {
    lat: 40.707840000000004,
    lng: -73.9994
  }],
  color: '33CCFF',
  center: {
    lat: 40.711142,
    lng: -73.9928658
  },
  summary: "Two Bridges, with its <a target='_blank' href='https://en.wikipedia.org/wiki/Tenement'>tenements</a> and a high concentration of <a target='_blank' href='https://en.wikipedia.org/wiki/Public_housing'>public housing</a> projects, including the <a target='_blank' href='https://en.wikipedia.org/wiki/LaGuardia_Houses'>LaGuardia Houses</a>, has traditionally been an immigrant neighborhood, previously populated by immigrants from Europe, more recently from Latin America, and now from China. The Two Bridges Historic District was listed in the <a target='_blank' href='https://en.wikipedia.org/wiki/National_Register_of_Historic_Places'>National Register of Historic Places</a> in September 2003."
}, {
  name: 'TriBeCa',
  borough: 'Manhattan',
  coords: [{
    lat: 40.714379,
    lng: -74.013442
  }, {
    lat: 40.7120545,
    lng: -74.0082154
  }, {
    lat: 40.71938800000001,
    lng: -74.00185
  }, {
    lat: 40.721925000000006,
    lng: -74.005476
  }, {
    lat: 40.7235918,
    lng: -74.007879
  }, {
    lat: 40.7257224,
    lng: -74.0110655
  }, {
    lat: 40.718233,
    lng: -74.012665
  }, {
    lat: 40.714379,
    lng: -74.013442
  }],
  color: 'FF9900',
  center: {
    lat: 40.71888845,
    lng: -74.00764600000002
  },
  summary: "The name is an <a target='_blank' href='https://en.wikipedia.org/wiki/Acronym'>acronym</a> based on the words \"Triangle below <a target='_blank' href='https://en.wikipedia.org/wiki/Canal_Street_(Manhattan)'>Canal Street</a>\". The neighborhood is home to the <a target='_blank' href='http://en.wikipedia.org/wiki/Tribeca_Film_Festival'>Tribeca Film Festival</a>. The was originally a Dutch farmland in the 17th century. Under British rule it was among the first residential neighborhoods developed on the island beyond the colonial boundaries, with residential development beginning in the late 18th century. By the mid-19th century the area transformed into a commercial center, with large numbers of store and loft buildings constructed along Broadway in the 1850s and 1860s. Tribeca suffered financially after the <a target='_blank' href='https://en.wikipedia.org/wiki/September_11,_2001_terrorist_attacks'>September 11, 2001 terrorist attacks</a>, but government grants and incentives helped the area rebound fairly quickly. The Tribeca Film Festival was established to help contribute to the long-term recovery of Lower Manhattan after 9/11. By the new millennium, Tribeca was among Manhattan's most desired neighborhoods, with many celebrity residents such as Bono, Justin Timberlake, Taylor Swift, Beyoncé and Jay-Z."
}, {
  name: 'Civic Center',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7120545,
    lng: -74.0082154
  }, {
    lat: 40.711532,
    lng: -74.007965
  }, {
    lat: 40.712134000000006,
    lng: -74.005197
  }, {
    lat: 40.7094953,
    lng: -74.0016446
  }, {
    lat: 40.710847,
    lng: -74.0007031
  }, {
    lat: 40.7134349,
    lng: -73.998077
  }, {
    lat: 40.7134881,
    lng: -73.99734910000001
  }, {
    lat: 40.713907,
    lng: -73.99743
  }, {
    lat: 40.7137446,
    lng: -73.9980052
  }, {
    lat: 40.713541,
    lng: -73.9986314
  }, {
    lat: 40.71435029999999,
    lng: -74.0004928
  }, {
    lat: 40.71507820000001,
    lng: -74.0006269
  }, {
    lat: 40.715306,
    lng: -74.000863
  }, {
    lat: 40.71684220000001,
    lng: -74.0040811
  }, {
    lat: 40.7120545,
    lng: -74.0082154
  }],
  color: 'FFFF33',
  center: {
    lat: 40.71316875000001,
    lng: -74.00278225
  },
  summary: "The Civic Center is the swath of downtown Manhattan that encompasses <a target='_blank' href='https://en.wikipedia.org/wiki/New_York_City_Hall'>City Hall</a>, the <a target='_blank' href='https://en.wikipedia.org/wiki/1_Police_Plaza'>NYPD headquarters</a> and the courts."
}, {
  name: 'Chinatown',
  borough: 'Manhattan',
  coords: [{
    lat: 40.71684220000001,
    lng: -74.0040811
  }, {
    lat: 40.715306,
    lng: -74.000863
  }, {
    lat: 40.71507820000001,
    lng: -74.0006269
  }, {
    lat: 40.71435029999999,
    lng: -74.0004928
  }, {
    lat: 40.713541,
    lng: -73.9986314
  }, {
    lat: 40.713907,
    lng: -73.99743
  }, {
    lat: 40.71275200000001,
    lng: -73.997215
  }, {
    lat: 40.71335400000001,
    lng: -73.99007
  }, {
    lat: 40.71459,
    lng: -73.990241
  }, {
    lat: 40.7176479,
    lng: -73.988696
  }, {
    lat: 40.71842800000001,
    lng: -73.99101
  }, {
    lat: 40.717453,
    lng: -73.99155
  }, {
    lat: 40.716330000000006,
    lng: -73.99217200000001
  }, {
    lat: 40.717306,
    lng: -73.99545600000002
  }, {
    lat: 40.71849300000001,
    lng: -73.994873
  }, {
    lat: 40.719063000000006,
    lng: -73.9965069
  }, {
    lat: 40.716851,
    lng: -73.997773
  }, {
    lat: 40.717274,
    lng: -73.999039
  }, {
    lat: 40.71938800000001,
    lng: -74.00185
  }, {
    lat: 40.71684220000001,
    lng: -74.0040811
  }],
  color: '33CC00',
  center: {
    lat: 40.71607000000001,
    lng: -73.99638855
  },
  summary: "Home to the largest enclave of <a target='_blank' href='https://en.wikipedia.org/wiki/Chinese_people'>Chinese people</a> in the Western Hemisphere, and is also one of the <a target='_blank' href='https://en.wikipedia.org/wiki/Overseas_Chinese'>oldest such enclaves</a> outside of Asia. Chinese immigrants originally came here to find work as &quot;cigar men&quot;, after <a target='_blank' href='https://en.wikipedia.org/wiki/Ah_Ken'>Ah Ken</a>, the first Chinese person to permanently live here, who had a successful cigar store on <a target='_blank' href='https://en.wikipedia.org/wiki/Park_Row_(Manhattan)'>Park Row</a>. The early days of Chinatown were dominated by Chinese &quot;<a target='_blank' href='https://en.wikipedia.org/wiki/Tong_(gang)'>tongs</a>&quot;, secret associations with political alliances and crime syndicates. After the <a target='_blank' href='https://en.wikipedia.org/wiki/Immigration_and_Nationality_Act_of_1965'>Immigration and Nationality Act of 1965</a> was enacted, Chinatown grew tremendously. Today it is home to some 47,000 residents, and is known for its lively food shopping, and availability of cheap knockoffs of designer apparel and watches."
}, {
  name: 'Little Italy',
  borough: 'Manhattan',
  coords: [{
    lat: 40.716851,
    lng: -73.997773
  }, {
    lat: 40.719063000000006,
    lng: -73.9965069
  }, {
    lat: 40.71849300000001,
    lng: -73.994873
  }, {
    lat: 40.7202985,
    lng: -73.9941428
  }, {
    lat: 40.721567,
    lng: -73.997902
  }, {
    lat: 40.721063,
    lng: -73.9982108
  }, {
    lat: 40.7184205,
    lng: -74.0005496
  }, {
    lat: 40.717274,
    lng: -73.999039
  }, {
    lat: 40.716851,
    lng: -73.997773
  }],
  color: 'FF9900',
  center: {
    lat: 40.719209,
    lng: -73.99734620000004
  },
  summary: "Once known for its large population of Italians. It has since been engulfed by Chinatown, and has essentially shrunk into a <a target='_blank' href='https://en.wikipedia.org/wiki/Mulberry_Street_(Manhattan)'>single street</a> which serves as a restaurant area but which has few Italian residents."
}, {
  name: 'Lower East Side',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7185499,
    lng: -73.9735973
  }, {
    lat: 40.7192662,
    lng: -73.9772276
  }, {
    lat: 40.7199006,
    lng: -73.9787509
  }, {
    lat: 40.7203152,
    lng: -73.9801451
  }, {
    lat: 40.7229979,
    lng: -73.988855
  }, {
    lat: 40.721631800000004,
    lng: -73.9893425
  }, {
    lat: 40.71842800000001,
    lng: -73.99101
  }, {
    lat: 40.7176479,
    lng: -73.988696
  }, {
    lat: 40.71459,
    lng: -73.990241
  }, {
    lat: 40.71335400000001,
    lng: -73.99007
  }, {
    lat: 40.713143,
    lng: -73.99255900000001
  }, {
    lat: 40.709743,
    lng: -73.991829
  }, {
    lat: 40.710052,
    lng: -73.989726
  }, {
    lat: 40.7098078,
    lng: -73.9896619
  }, {
    lat: 40.709959000000005,
    lng: -73.9885038
  }, {
    lat: 40.7099325,
    lng: -73.9883711
  }, {
    lat: 40.7098461,
    lng: -73.9883423
  }, {
    lat: 40.709809,
    lng: -73.988647
  }, {
    lat: 40.7090604,
    lng: -73.9884921
  }, {
    lat: 40.7098001,
    lng: -73.9812079
  }, {
    lat: 40.71012940000001,
    lng: -73.9812401
  }, {
    lat: 40.7102646,
    lng: -73.9803308
  }, {
    lat: 40.7103348,
    lng: -73.980194
  }, {
    lat: 40.7104781,
    lng: -73.9782494
  }, {
    lat: 40.710702700000006,
    lng: -73.9776351
  }, {
    lat: 40.7113369,
    lng: -73.9768786
  }, {
    lat: 40.7116864,
    lng: -73.976519
  }, {
    lat: 40.7150857,
    lng: -73.9748705
  }, {
    lat: 40.71693170000001,
    lng: -73.974132
  }, {
    lat: 40.7185499,
    lng: -73.9735973
  }],
  color: 'FF6666',
  center: {
    lat: 40.71602915,
    lng: -73.98307814999998
  },
  summary: "This area was originally home to the pre-Revolutionary farm of <a target='_blank' href='https://en.wikipedia.org/wiki/James_DeLancey_(politician)'>James Delancey</a>, and in response to the pressure of a growing city, the farm was confiscated shortly after the Revolution. The Lower East Side is traditionally an immigrant, <a target='_blank' href='https://en.wikipedia.org/wiki/Working_class'>working class</a> neighborhood, at one time home to <a target='_blank' href='https://en.wikipedia.org/wiki/Little_Germany,_Manhattan'>Little Germany</a> and a large Irish population. Since 2005 it has undergone rapid <a target='_blank' href='https://en.wikipedia.org/wiki/Gentrification'>gentrification</a>. This prompted the <a target='_blank' href='https://en.wikipedia.org/wiki/The_National_Trust_for_Historic_Preservation'>National Trust for Historic Preservation</a> to place the neighborhood on their list of <a href='https://en.wikipedia.org/wiki/America%27s_Most_Endangered_Places'>America's Most Endangered Places</a>. American Jews relate to the neighborhood in a particularly strong manner. In the late 20th century, the strong pull of the Lower East Side on the imagination of American Jews led to the preservation of a number of buildings associated with the Jewish immigrants. Today the Lower East Side offers a multicultural blend of trendy boutiques, cafés, night clubs, dive bars and Spanish bodegas. The <a target='_blank' href='https://en.wikipedia.org/wiki/East_Village,_Manhattan'>East Village</a> was once considered part of the Lower East Side but has grown into its own identity."
}, {
  name: 'Bowery',
  borough: 'Manhattan',
  coords: [{
    lat: 40.71842800000001,
    lng: -73.99101
  }, {
    lat: 40.721631800000004,
    lng: -73.9893425
  }, {
    lat: 40.7229979,
    lng: -73.988855
  }, {
    lat: 40.723145,
    lng: -73.988652
  }, {
    lat: 40.724933,
    lng: -73.987332
  }, {
    lat: 40.72684399999999,
    lng: -73.991806
  }, {
    lat: 40.725055,
    lng: -73.992439
  }, {
    lat: 40.722218000000005,
    lng: -73.993458
  }, {
    lat: 40.720193,
    lng: -73.994188
  }, {
    lat: 40.717306,
    lng: -73.99545600000002
  }, {
    lat: 40.716273,
    lng: -73.9921595
  }, {
    lat: 40.71842800000001,
    lng: -73.99101
  }],
  color: 'FFFF33',
  center: {
    lat: 40.7215585,
    lng: -73.99139400000001
  },
  summary: "As a street, the Bowery was known as Bowery Lane prior to 1807. From Houston to Delancey Streets serves as New York's principal market for restaurant equipment, and from Delancey to Grand for lamps. As of July 2005, <a target='_blank' href='https://en.wikipedia.org/wiki/Gentrification'>gentrification</a> is contributing to ongoing change along the Bowery."
}, {
  name: 'East Village',
  borough: 'Manhattan',
  coords: [{
    lat: 40.72049400000001,
    lng: -73.973054
  }, {
    lat: 40.72675490000001,
    lng: -73.9715517
  }, {
    lat: 40.7278648,
    lng: -73.9741962
  }, {
    lat: 40.7308119,
    lng: -73.9814865
  }, {
    lat: 40.7347627,
    lng: -73.9907186
  }, {
    lat: 40.73171390000001,
    lng: -73.991336
  }, {
    lat: 40.729958,
    lng: -73.992773
  }, {
    lat: 40.7254054,
    lng: -73.9967319
  }, {
    lat: 40.725055,
    lng: -73.9954319
  }, {
    lat: 40.724153199999996,
    lng: -73.9927523
  }, {
    lat: 40.7229979,
    lng: -73.988855
  }, {
    lat: 40.7199006,
    lng: -73.9787509
  }, {
    lat: 40.7192621,
    lng: -73.9772988
  }, {
    lat: 40.7185499,
    lng: -73.9735973
  }, {
    lat: 40.72049400000001,
    lng: -73.973054
  }],
  color: '33CC00',
  center: {
    lat: 40.7266563,
    lng: -73.98414179999997
  },
  summary: "Once generally considered to be part of the <a target='_blank' href='https://en.wikipedia.org/wiki/Lower_East_Side'>Lower East Side</a>, the East Village began to develop its own identity and culture in the late 1960s, when many artists, musicians, students and <a target='_blank' href='https://en.wikipedia.org/wiki/Hippie'>hippies</a> began to move into the area, attracted by cheap rents and the base of <a target='_blank' href='https://en.wikipedia.org/wiki/Beatniks'>Beatniks</a> who had lived there since the 1950s. The neighborhood has become a center of the <a target='_blank' href='https://en.wikipedia.org/wiki/Counterculture'>counterculture</a> in New York, and is known as the birthplace and historical home of many artistic movements, including <a target='_blank' href='https://en.wikipedia.org/wiki/Punk_rock'>punk rock</a>, and the <a target='_blank' href='https://en.wikipedia.org/wiki/Nuyorican'>Nuyorican</a> literary movement. It is still known for its diverse community, with vibrant nightlife and artistic sensibility, but in recent decades <a target='_blank' href='https://en.wikipedia.org/wiki/Gentrification'>gentrification</a> has somewhat changed the character of the neighborhood."
}, {
  name: 'Alphabet City',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7308119,
    lng: -73.9814865
  }, {
    lat: 40.7226165,
    lng: -73.9875915
  }, {
    lat: 40.7199006,
    lng: -73.9787509
  }, {
    lat: 40.727413,
    lng: -73.973172
  }, {
    lat: 40.7308119,
    lng: -73.9814865
  }],
  color: 'FF9966',
  center: {
    lat: 40.725356250000004,
    lng: -73.98038174999999
  },
  summary: "Sometimes known as Loisaida to the Spanish-speaking, until the early 19th century, much of what is now Alphabet City was an extensive <a target='_blank' href='https://en.wikipedia.org/wiki/Salt_marsh'>salt marsh</a>. Alphabet City became home to a <a target='_blank' href='https://en.wikipedia.org/wiki/Ethnic_succession_theory'>succession</a> of immigrant groups over the years. By the 1840s and 1850s, much of present-day Alphabet City had become known as &quot;<a target='_blank' href='https://en.wikipedia.org/wiki/Little_Germany,_New_York'>Little Germany</a>&quot;. By the middle of the 20th century, Alphabet City was again in transition, as thousands of <a target='_blank' href='https://en.wikipedia.org/wiki/Puerto_Rican_American'>Puerto Ricans</a> began to settle in the neighborhood, making it an important site for the development and strengthening of Puerto Rican cultural identity in New York. Avenues A through D became distinctly less <a target='_blank' href='https://en.wikipedia.org/wiki/Bohemianism'>bohemian</a> in the 21st century than they had been in earlier decades, and formerly abandoned buildings are now community gardens. <a target='_blank' href='https://en.wikipedia.org/wiki/C-Squat'>C-Squat</a> is the most famous example of a <a target='_blank' href='https://en.wikipedia.org/wiki/Squatting'>squat house</a>, where the abandoned building hosted many notable musicians, artists and activists. Today Alphabet City offers thriving nightlife, ethnic cuisine and high-end boutiques."
}, {
  name: 'NoLita',
  borough: 'Manhattan',
  coords: [{
    lat: 40.725055,
    lng: -73.9954319
  }, {
    lat: 40.72347,
    lng: -73.996807
  }, {
    lat: 40.722136,
    lng: -73.997451
  }, {
    lat: 40.721567,
    lng: -73.997902
  }, {
    lat: 40.7202985,
    lng: -73.9941428
  }, {
    lat: 40.724153199999996,
    lng: -73.9927523
  }, {
    lat: 40.725055,
    lng: -73.9954319
  }],
  color: '3366FF',
  center: {
    lat: 40.72267675,
    lng: -73.99532714999998
  },
  summary: "Long regarded as part of <a target='_blank' href='https://en.wikipedia.org/wiki/Little_Italy,_Manhattan'>Little Italy</a>, but has lost much of its recognizable Italian character in recent decades because of the migration of <a target='_blank' href='https://en.wikipedia.org/wiki/Italian-American'>Italian-Americans</a> out of Manhattan. In the 1990s, the neighborhood saw an influx of <a target='_blank' href='https://en.wikipedia.org/wiki/Yuppie'>yuppies</a> and an explosion of expensive retail boutiques, trendy restaurants and bars."
}, {
  name: 'SoHo',
  borough: 'Manhattan',
  coords: [{
    lat: 40.728332,
    lng: -74.002966
  }, {
    lat: 40.721925000000006,
    lng: -74.005476
  }, {
    lat: 40.7184205,
    lng: -74.0005496
  }, {
    lat: 40.721063,
    lng: -73.9982108
  }, {
    lat: 40.721567,
    lng: -73.997902
  }, {
    lat: 40.722136,
    lng: -73.997451
  }, {
    lat: 40.72347,
    lng: -73.996807
  }, {
    lat: 40.725055,
    lng: -73.9954319
  }, {
    lat: 40.7254054,
    lng: -73.9967319
  }, {
    lat: 40.728332,
    lng: -74.002966
  }],
  color: '33FFFF',
  center: {
    lat: 40.72337625,
    lng: -74.00045394999995
  },
  summary: "Notable for being the location of many artists' <a target='_blank' href='https://en.wikipedia.org/wiki/Loft'>lofts</a> and art galleries, and also, more recently, for the wide variety of stores and shops ranging from trendy boutiques to outlets of upscale national and international chain stores. The area's history is an archetypal example of inner-city regeneration and <a target='_blank' href='https://en.wikipedia.org/wiki/Gentrification'>gentrification</a>, encompassing <a target='_blank' href='https://en.wikipedia.org/wiki/Socio-economic'>socio-economic</a>, cultural, political and architectural developments. SoHo refers to the area being &quot;<strong>S</strong>outh <strong>o</strong>f <strong>Ho</strong>uston Street&quot;."
}, {
  name: 'Hudson Square',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7257224,
    lng: -74.0110655
  }, {
    lat: 40.721925000000006,
    lng: -74.005476
  }, {
    lat: 40.728332,
    lng: -74.002966
  }, {
    lat: 40.729129,
    lng: -74.01071200000001
  }, {
    lat: 40.7257224,
    lng: -74.0110655
  }],
  color: 'FF99FF',
  center: {
    lat: 40.725527,
    lng: -74.00701575
  }
}, {
  name: 'Greenwich Village',
  borough: 'Manhattan',
  coords: [{
    lat: 40.740998,
    lng: -74.00539
  }, {
    lat: 40.739454,
    lng: -74.006549
  }, {
    lat: 40.739388,
    lng: -74.010034
  }, {
    lat: 40.7387622,
    lng: -74.0100842
  }, {
    lat: 40.7378762,
    lng: -74.0099716
  }, {
    lat: 40.729129,
    lng: -74.01071200000001
  }, {
    lat: 40.728332,
    lng: -74.002966
  }, {
    lat: 40.7254054,
    lng: -73.9967319
  }, {
    lat: 40.73171390000001,
    lng: -73.991336
  }, {
    lat: 40.7347627,
    lng: -73.9907186
  }, {
    lat: 40.740998,
    lng: -74.00539
  }],
  color: 'FFFF66',
  center: {
    lat: 40.733201699999995,
    lng: -74.00071530000002
  },
  summary: "Often referred to as simply &quot;the Village&quot;, the area is one of New York's most famous neighborhoods and is largely residential. It was known in the late 19th to mid 20th centuries as an artists' haven, the <a target='_blank' href='https://en.wikipedia.org/wiki/Bohemianism'>bohemian</a> capital, and the East Coast birthplace of the <a target='_blank' href='https://en.wikipedia.org/wiki/Beat_Generation'>Beat movement</a>. What provided the initial attractive character of the community eventually contributed to its <a target='_blank' href='https://en.wikipedia.org/wiki/Gentrification'>gentrification</a> and commercialization. Greenwich Village has long been a popular neighborhood for numerous artists and other notable people. Many got their start in this area, notably <a target='_blank' href='https://en.wikipedia.org/wiki/Bob_Dylan'>Bob Dylan</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Jimi_Hendrix'>Jimi Hendrix</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Barbra_Streisand'>Barbra Streisand</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Simon_%26_Garfunkel'>Simon & Garfunkel</a>."
}, {
  name: 'Meatpacking District',
  borough: 'Manhattan',
  coords: [{
    lat: 40.742087,
    lng: -74.0082
  }, {
    lat: 40.742494,
    lng: -74.008833
  }, {
    lat: 40.740713,
    lng: -74.00923
  }, {
    lat: 40.739388,
    lng: -74.010034
  }, {
    lat: 40.739454,
    lng: -74.006549
  }, {
    lat: 40.740965,
    lng: -74.005369
  }, {
    lat: 40.742087,
    lng: -74.0082
  }],
  color: '66FF99',
  center: {
    lat: 40.740941,
    lng: -74.0077015
  },
  summary: "Until the 1990s, this area was primarily made up of buildings used for meat, poultry and dairy transactions. High-end <a target='_blank' href='https://en.wikipedia.org/wiki/Boutiques'>boutiques</a> catering to young professionals and <a target='_blank' href='https://en.wikipedia.org/wiki/Hipster_%28contemporary_subculture%29'>hipsters</a> began to open, and by 2003, only 35 of the 250 slaughterhouses and packing plants present a century earlier remained in the area. <a target='_blank' href='https://en.wikipedia.org/wiki/New_York_%28magazine%29'>New York magazine</a> named the Meatpacking District &quot;New York’s most fashionable neighborhood&quot; in 2004."
}, {
  name: 'Stuyvesant Town',
  borough: 'Manhattan',
  coords: [{
    lat: 40.731282400000005,
    lng: -73.9826129
  }, {
    lat: 40.7284621,
    lng: -73.9757361
  }, {
    lat: 40.731129,
    lng: -73.973719
  }, {
    lat: 40.732722,
    lng: -73.974255
  }, {
    lat: 40.73503,
    lng: -73.97994
  }, {
    lat: 40.731282400000005,
    lng: -73.9826129
  }],
  color: '66FFFF',
  center: {
    lat: 40.73174605,
    lng: -73.97816595
  },
  summary: "Stuy Town is a large private residential development, home to 8,757 apartments in 35 residential buildings. Prior to construction, the neighborhood contained eighteen city blocks, with public schools, churches, factories, private homes, apartments, small businesses, and even relatively new modern-style apartment buildings. As part of one of the city's many <a target='_blank' href='https://en.wikipedia.org/wiki/Urban_renewal'>urban renewal</a> projects, some 11,000 persons were forced to move from the neighborhood, championed by Parks Commissioner <a target='_blank' href='https://en.wikipedia.org/wiki/Robert_Moses'>Robert Moses</a>. To much controversy, Moses sought &quot;to induce insurance companies and savings banks to enter the field of large-scale <a target='_blank' href='https://en.wikipedia.org/wiki/Slum_clearance'>slum clearance</a>.&quot; Stuyvesant Town's <a target='_blank' href='https://en.wikipedia.org/wiki/Urban_planning'>planning</a> and design were met with haste as to how the project was approved and the lack of public participation. Combined with the sister Peter Cooper Village complex to the north, over 30,000 people live in the area."
}, {
  name: 'Peter Cooper Village',
  borough: 'Manhattan',
  coords: [{
    lat: 40.732722,
    lng: -73.974255
  }, {
    lat: 40.7352909,
    lng: -73.974788
  }, {
    lat: 40.73693,
    lng: -73.97869
  }, {
    lat: 40.73503,
    lng: -73.97994
  }, {
    lat: 40.732722,
    lng: -73.974255
  }],
  color: 'FFFF66',
  center: {
    lat: 40.734826,
    lng: -73.97709750000001
  },
  summary: "Paired with its sister Stuyvesant town, Peter Cooper Village is one of the most iconic and successful <a target='_blank' href='https://en.wikipedia.org/wiki/Post-war'>post-World War II</a> private housing communities. It is a large private residential development, with a sprawling collection of red brick apartment buildings. The site was constructed as part of a controversial urban renewal project championed by Parks Commissioner <a target='_blank' href='https://en.wikipedia.org/wiki/Robert_Moses'>Robert Moses</a>."
}, {
  name: 'Gramercy Park',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7339649,
    lng: -73.988921
  }, {
    lat: 40.731282400000005,
    lng: -73.9826129
  }, {
    lat: 40.73503,
    lng: -73.97994
  }, {
    lat: 40.73693,
    lng: -73.97869
  }, {
    lat: 40.74018000000001,
    lng: -73.9863699
  }, {
    lat: 40.73716,
    lng: -73.98861
  }, {
    lat: 40.7364563,
    lng: -73.9870658
  }, {
    lat: 40.7339649,
    lng: -73.988921
  }],
  color: '9999FF',
  center: {
    lat: 40.735731200000004,
    lng: -73.98380550000002
  },
  summary: "Home to a small, fenced-in private park of the same name, where only surrounding residents are allowed in. It was once in the middle of a swamp. Today it is considered a quiet and safe neighborhood. East 19th Street between Third Avenue and Irving is labeled &quot;Block Beautiful&quot; for its wide array of architecture and pristine aesthetic."
}, {
  name: 'Chelsea',
  borough: 'Manhattan',
  coords: [{
    lat: 40.757075,
    lng: -74.00494
  }, {
    lat: 40.753987,
    lng: -74.007128
  }, {
    lat: 40.750151,
    lng: -74.008545
  }, {
    lat: 40.7484759,
    lng: -74.0077079
  }, {
    lat: 40.742494,
    lng: -74.008833
  }, {
    lat: 40.742087,
    lng: -74.0082
  }, {
    lat: 40.737405,
    lng: -73.996893
  }, {
    lat: 40.7388316,
    lng: -73.9957989
  }, {
    lat: 40.7404776,
    lng: -73.994619
  }, {
    lat: 40.749858,
    lng: -73.98783800000001
  }, {
    lat: 40.757075,
    lng: -74.00494
  }],
  color: 'FF6666',
  center: {
    lat: 40.747240000000005,
    lng: -73.9983355
  },
  summary: "This neighborhood is primarily residential, with a mix of <a target='_blank' href='https://en.wikipedia.org/wiki/Tenements'>tenements</a>, apartment blocks, <a target='_blank' href='https://en.wikipedia.org/wiki/New_York_City_Housing_Authority'>city housing projects</a>, townhouses and renovated <a target='_blank' href='https://en.wikipedia.org/wiki/Rowhouse'>rowhouses</a>, and its many retail businesses reflect the ethnic and social diversity of the population. The western part of Chelsea has become a center of the New York art world, with many art galleries located in both new buildings and rehabilitated warehouses. Chelsea is also home to the <a target='_blank' href='https://en.wikipedia.org/wiki/Joyce_Theater'>Joyce Theater</a> - one of the city&#39;s premier modern dance emporiums. Chelsea has a large <a target='_blank' href='https://en.wikipedia.org/wiki/Gay_village'>gay population</a>, stereotyped as gym-toned &quot;Chelsea boys&quot;. The Chelsea Historic District was added to the <a target='_blank' href='https://en.wikipedia.org/wiki/United_States_National_Register_of_Historic_Places_listings'>National Register of Historic Places</a> in 1977, which includes the famed <a target='_blank' href='https://en.wikipedia.org/wiki/Hotel_Chelsea'>Hotel Chelsea</a>."
}, {
  name: 'Hudson Yards',
  borough: 'Manhattan',
  coords: [{
    lat: 40.757075,
    lng: -74.00494
  }, {
    lat: 40.753987,
    lng: -74.007128
  }, {
    lat: 40.7537888,
    lng: -74.0072031
  }, {
    lat: 40.7526022,
    lng: -74.0043063
  }, {
    lat: 40.7532931,
    lng: -74.003845
  }, {
    lat: 40.7509198,
    lng: -73.9981158
  }, {
    lat: 40.751505,
    lng: -73.9977724
  }, {
    lat: 40.7490992,
    lng: -73.9920218
  }, {
    lat: 40.7502696,
    lng: -73.9911206
  }, {
    lat: 40.7515375,
    lng: -73.993953
  }, {
    lat: 40.7522202,
    lng: -73.9934487
  }, {
    lat: 40.7553086,
    lng: -73.9912064
  }, {
    lat: 40.7579093,
    lng: -73.989302
  }, {
    lat: 40.7579782,
    lng: -73.9894635
  }, {
    lat: 40.7583723,
    lng: -73.9904076
  }, {
    lat: 40.7580229,
    lng: -73.9906758
  }, {
    lat: 40.757966,
    lng: -73.990531
  }, {
    lat: 40.7576571,
    lng: -73.990767
  }, {
    lat: 40.7578034,
    lng: -73.9911479
  }, {
    lat: 40.7584405,
    lng: -73.9926872
  }, {
    lat: 40.7596076,
    lng: -73.9955038
  }, {
    lat: 40.7603227,
    lng: -73.9950103
  }, {
    lat: 40.7625656,
    lng: -74.0003747
  }, {
    lat: 40.762013,
    lng: -74.0012116
  }, {
    lat: 40.7614279,
    lng: -74.0017695
  }, {
    lat: 40.7601602,
    lng: -73.9988083
  }, {
    lat: 40.7558204,
    lng: -74.0019411
  }, {
    lat: 40.757075,
    lng: -74.00494
  }],
  color: '3F5BA9',
  center: {
    lat: 40.755231,
    lng: -73.9975377
  },
  summary: ""
}, {
  name: 'Flatiron District',
  borough: 'Manhattan',
  coords: [{
    lat: 40.737405,
    lng: -73.996893
  }, {
    lat: 40.7360055,
    lng: -73.993612
  }, {
    lat: 40.7384944,
    lng: -73.9917682
  }, {
    lat: 40.73716,
    lng: -73.98861
  }, {
    lat: 40.74018,
    lng: -73.9863699
  }, {
    lat: 40.74292,
    lng: -73.99287
  }, {
    lat: 40.737405,
    lng: -73.996893
  }],
  color: '99FFFF',
  center: {
    lat: 40.740644,
    lng: -73.990231
  },
  summary: "Named after the famous <a target='_blank' href='https://en.wikipedia.org/wiki/Flatiron_Building'>Flatiron Building</a> at <a target='_blank' href='https://en.wikipedia.org/wiki/23rd_Street_%28Manhattan%29'>23rd Street</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Broadway_%28New_York_City%29'>Broadway</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Fifth_Avenue'>Fifth Avenue</a>, this neighborhood was once primarily commercial, with numerous small clothing and toy manufacturers, and was sometimes called the Toy District. The <a target='_blank' href='https://en.wikipedia.org/wiki/Toy_Center'>Toy Center</a> buildings at 23rd Street and Broadway date from this period, and the annual <a target='_blank' href='https://en.wikipedia.org/wiki/American_International_Toy_Fair'>American International Toy Fair</a> took place there beginning in 1903, except for 1945. When much of this business moved outside the U.S., the area began to be referred to as the Photo District."
}, {
  name: 'NoHo',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7254054,
    lng: -73.9967319
  }, {
    lat: 40.725055,
    lng: -73.9954319
  }, {
    lat: 40.724153199999996,
    lng: -73.9927523
  }, {
    lat: 40.729747,
    lng: -73.990821
  }, {
    lat: 40.730088,
    lng: -73.99273
  }, {
    lat: 40.7254054,
    lng: -73.9967319
  }],
  color: 'FFCCCC',
  center: {
    lat: 40.7271206,
    lng: -73.99377644999998
  },
  summary: "<strong>N</strong>orth <strong>o</strong>f <strong>Ho</strong>uston Street is primarily made up of loft apartments, which in turn makes it one of the most expensive and desirable neighborhoods in Manhattan. The NoHo Historic District, which comprises approximately 125 buildings, represents the period of New York City's commercial history from the early 1850s to the 1910s, when this section prospered as one of its major retail and wholesale dry goods centers."
}, {
  name: 'Union Square',
  borough: 'Manhattan',
  coords: [{
    lat: 40.733405000000005,
    lng: -73.989322
  }, {
    lat: 40.737145,
    lng: -73.986576
  }, {
    lat: 40.739096,
    lng: -73.991339
  }, {
    lat: 40.735356,
    lng: -73.994086
  }, {
    lat: 40.733405000000005,
    lng: -73.989322
  }],
  color: 'FFCCCC',
  center: {
    lat: 40.736250500000004,
    lng: -73.99033099999997
  },
  summary: "An important and historic intersection, with rich history of social and political activism. It is a frequent gathering point for radicals of all stripes to make speeches or demonstrate. Union Square was named a <a target='_blank' href='https://en.wikipedia.org/wiki/National_Historic_Landmark'>National Historic Landmark</a> in 1997. The neighborhood is also known for it's impressive sculpture of <a target='_blank' href='https://en.wikipedia.org/wiki/George_Washington'>George Washington</a>, and as the site for often social activity of famed pop artist <a target='_blank' href='https://en.wikipedia.org/wiki/Andy_Warhol'>Andy Warhol</a>."
}, {
  name: 'Kips Bay',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7388279,
    lng: -73.9831796
  }, {
    lat: 40.7352909,
    lng: -73.974788
  }, {
    lat: 40.7352584,
    lng: -73.9744145
  }, {
    lat: 40.734917,
    lng: -73.973569
  }, {
    lat: 40.7349902,
    lng: -73.9732525
  }, {
    lat: 40.7352259,
    lng: -73.9732793
  }, {
    lat: 40.7356974,
    lng: -73.9744487
  }, {
    lat: 40.7359901,
    lng: -73.9744809
  }, {
    lat: 40.7363803,
    lng: -73.9743415
  }, {
    lat: 40.7357299,
    lng: -73.9727536
  }, {
    lat: 40.73586,
    lng: -73.972496
  }, {
    lat: 40.7392345,
    lng: -73.9726248
  }, {
    lat: 40.7399821,
    lng: -73.9724423
  }, {
    lat: 40.7399901,
    lng: -73.9722974
  }, {
    lat: 40.7406851,
    lng: -73.9721391
  }, {
    lat: 40.7407806,
    lng: -73.9722531
  }, {
    lat: 40.742259,
    lng: -73.9719239
  }, {
    lat: 40.742665,
    lng: -73.9717378
  }, {
    lat: 40.7429896,
    lng: -73.9717019
  }, {
    lat: 40.7457333,
    lng: -73.9781495
  }, {
    lat: 40.7388279,
    lng: -73.9831796
  }],
  color: '33FF33',
  center: {
    lat: 40.74066450000001,
    lng: -73.97824094999999
  },
  summary: "Kips Bay was an inlet of the East River running from what is now 32nd Street to 37th Street. Kips Bay was the site of the <a target='_blank' href='https://en.wikipedia.org/wiki/Landing_at_Kip%27s_Bay'>Landing at Kip's Bay</a> (September 15, 1776), an episode of the <a target='_blank' href='https://en.wikipedia.org/wiki/American_Revolutionary_War'>American Revolutionary War</a> and part of the <a target='_blank' href='https://en.wikipedia.org/wiki/New_York_and_New_Jersey_campaign'>New York and New Jersey campaign</a>. About 4,000 <a target='_blank' href='https://en.wikipedia.org/wiki/British_Army'>British Army</a> troops under <a target='_blank' href='https://en.wikipedia.org/wiki/William_Howe,_5th_Viscount_Howe'>General William Howe</a> landed at Kips Bay on September 15, 1776, near what is now the foot of East 33rd Street. The neighborhood has been rebuilt in patches, so one can see both new high-rise structures often set back from the street, and a multitude of exposed party walls that were never meant to be seen in public. Broadway Alley lies between 26th and 27th Streets, between Lexington and 3rd Avenues, which is a nearly forgotten alley that reputedly is the last unpaved road in Manhattan."
}, {
  name: 'Stuyvesant Square',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7363911,
    lng: -73.9849631
  }, {
    lat: 40.7332774,
    lng: -73.9872323
  }, {
    lat: 40.7312824,
    lng: -73.9826129
  }, {
    lat: 40.7344562,
    lng: -73.9803765
  }, {
    lat: 40.7363911,
    lng: -73.9849631
  }],
  color: 'FF9900',
  center: {
    lat: 40.733675,
    lng: -73.983991
  }
}, {
  name: 'Midtown South Central',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7521332,
    lng: -73.9776672
  }, {
    lat: 40.7549599,
    lng: -73.98416
  }, {
    lat: 40.751175,
    lng: -73.986872
  }, {
    lat: 40.7479294,
    lng: -73.9892327
  }, {
    lat: 40.74292,
    lng: -73.99287
  }, {
    lat: 40.74018,
    lng: -73.9863699
  }, {
    lat: 40.7521332,
    lng: -73.9776672
  }],
  color: 'FF9900',
  center: {
    lat: 40.747609950000005,
    lng: -73.98531149999997
  },
  summary: "Home to two of New York's best attractions, including the world famous <a target='_blank' href='https://en.wikipedia.org/wiki/Empire_State_Building'>Empire State Building</a> (Fifth Ave and West 34th St) and <a target='_blank' href='https://en.wikipedia.org/wiki/Grand_Central_Terminal'>Grand Central Terminal</a> (42nd St and Park Ave). Koreatown and NoMad also reside in this area."
}, {
  name: 'Murray Hill',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7470536,
    lng: -73.9813904
  }, {
    lat: 40.7429896,
    lng: -73.9717019
  }, {
    lat: 40.7479801,
    lng: -73.9678965
  }, {
    lat: 40.7521332,
    lng: -73.9776672
  }, {
    lat: 40.7470536,
    lng: -73.9813904
  }],
  color: 'FF9966',
  center: {
    lat: 40.74804499999999,
    lng: -73.97578955
  },
  summary: "For much of the 20th century, this neighborhood was a quiet and rather formal place, with many wealthy older residents. Since the late 1990s, many upper-class young professionals in their twenties and thirties have begun to move into the area. On weekends, there is often a raucous restaurant-and-bar scene along Third Avenue. South of Murray Hill, blocks on <a target='_blank' href='https://en.wikipedia.org/wiki/Lexington_Avenue_%28Manhattan%29'>Lexington Avenue</a> around 28th Street are sometimes informally called &quot;Curry Hill&quot;, due to the current high concentration of <a target='_blank' href='https://en.wikipedia.org/wiki/Indian_cuisine'>Indian restaurants</a> and specialized grocery stores."
}, {
  name: 'Garment District',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7559735,
    lng: -73.9907405
  }, {
    lat: 40.7572215,
    lng: -73.9897903
  }, {
    lat: 40.7584405,
    lng: -73.9926872
  }, {
    lat: 40.7534261,
    lng: -73.9962921
  }, {
    lat: 40.749858,
    lng: -73.987838
  }, {
    lat: 40.7536452,
    lng: -73.9851025
  }, {
    lat: 40.7559735,
    lng: -73.9907405
  }],
  color: '99FFFF',
  center: {
    lat: 40.75414925,
    lng: -73.99069729999997
  },
  summary: "Also known as the Fashion District with its dense concentration of fashion-related uses. The Garment District has been known since the early 20th century as the center for fashion manufacturing and fashion design in the United States, and even the world. Less than one square mile in area, the neighborhood is home to the majority of New York's showrooms and to numerous major fashion labels, and caters to all aspects of the fashion process - from design and production to wholesale selling. In this area <a target='_blank' href='https://en.wikipedia.org/wiki/Seventh_Avenue_(Manhattan)'>7th Avenue</a> is commonly referred to as Fashion Avenue. No other city has a comparable concentration of fashion businesses and talent in a single district."
}, {
  name: 'Koreatown',
  borough: 'Manhattan',
  coords: [{
    lat: 40.751175,
    lng: -73.986872
  }, {
    lat: 40.7479294,
    lng: -73.9892327
  }, {
    lat: 40.7458672,
    lng: -73.9843348
  }, {
    lat: 40.749061,
    lng: -73.9820337
  }, {
    lat: 40.751175,
    lng: -73.986872
  }],
  color: '9999FF',
  center: {
    lat: 40.74892750000001,
    lng: -73.98651030000002
  }
}, {
  name: "Hell's Kitchen",
  borough: 'Manhattan',
  coords: [{
    lat: 40.7572215,
    lng: -73.9897903
  }, {
    lat: 40.7606997,
    lng: -73.9872371
  }, {
    lat: 40.7641859,
    lng: -73.9847265
  }, {
    lat: 40.7618209,
    lng: -73.979094
  }, {
    lat: 40.7656971,
    lng: -73.9762512
  }, {
    lat: 40.7678763,
    lng: -73.9814478
  }, {
    lat: 40.7680925,
    lng: -73.9813635
  }, {
    lat: 40.7683102,
    lng: -73.9814025
  }, {
    lat: 40.7684953,
    lng: -73.9815702
  }, {
    lat: 40.7686225,
    lng: -73.9818336
  }, {
    lat: 40.7686184,
    lng: -73.9822234
  }, {
    lat: 40.7689678,
    lng: -73.9822741
  }, {
    lat: 40.7698925,
    lng: -73.984314
  }, {
    lat: 40.7692016,
    lng: -73.9848297
  }, {
    lat: 40.7739025,
    lng: -73.9962536
  }, {
    lat: 40.7738225,
    lng: -73.9963635
  }, {
    lat: 40.7728525,
    lng: -73.9940436
  }, {
    lat: 40.7724925,
    lng: -73.9942836
  }, {
    lat: 40.7732925,
    lng: -73.9961236
  }, {
    lat: 40.7731625,
    lng: -73.9962536
  }, {
    lat: 40.7723825,
    lng: -73.9944136
  }, {
    lat: 40.7719425,
    lng: -73.9947736
  }, {
    lat: 40.7727725,
    lng: -73.9968736
  }, {
    lat: 40.7726525,
    lng: -73.9970536
  }, {
    lat: 40.7716925,
    lng: -73.9950136
  }, {
    lat: 40.7712725,
    lng: -73.9953136
  }, {
    lat: 40.7714325,
    lng: -73.9959536
  }, {
    lat: 40.7713025,
    lng: -73.9960236
  }, {
    lat: 40.7710325,
    lng: -73.9954636
  }, {
    lat: 40.7706125,
    lng: -73.9957836
  }, {
    lat: 40.7707025,
    lng: -73.9959135
  }, {
    lat: 40.7705225,
    lng: -73.9960836
  }, {
    lat: 40.7704325,
    lng: -73.9958736
  }, {
    lat: 40.7698725,
    lng: -73.9963635
  }, {
    lat: 40.7709219,
    lng: -73.9988631
  }, {
    lat: 40.7704994,
    lng: -73.9991738
  }, {
    lat: 40.7694425,
    lng: -73.9966636
  }, {
    lat: 40.7687525,
    lng: -73.9971136
  }, {
    lat: 40.7698719,
    lng: -73.9995529
  }, {
    lat: 40.769475,
    lng: -73.9998436
  }, {
    lat: 40.7680725,
    lng: -73.9965336
  }, {
    lat: 40.7672125,
    lng: -73.9972236
  }, {
    lat: 40.7685124,
    lng: -74.0004436
  }, {
    lat: 40.7681825,
    lng: -74.0007436
  }, {
    lat: 40.7668525,
    lng: -73.9974836
  }, {
    lat: 40.7660125,
    lng: -73.9980336
  }, {
    lat: 40.7674025,
    lng: -74.0013836
  }, {
    lat: 40.7669081,
    lng: -74.0017975
  }, {
    lat: 40.7654925,
    lng: -73.9984036
  }, {
    lat: 40.7646425,
    lng: -73.9989336
  }, {
    lat: 40.7659625,
    lng: -74.0021536
  }, {
    lat: 40.7655525,
    lng: -74.0024136
  }, {
    lat: 40.7654626,
    lng: -74.0022513
  }, {
    lat: 40.7651738,
    lng: -74.0024491
  }, {
    lat: 40.7649888,
    lng: -74.001872
  }, {
    lat: 40.7648801,
    lng: -74.0018839
  }, {
    lat: 40.7640375,
    lng: -73.9995295
  }, {
    lat: 40.7642663,
    lng: -73.9993931
  }, {
    lat: 40.7642025,
    lng: -73.9992136
  }, {
    lat: 40.7636225,
    lng: -73.9995136
  }, {
    lat: 40.7634225,
    lng: -74.0000536
  }, {
    lat: 40.7648025,
    lng: -74.0031235
  }, {
    lat: 40.7646624,
    lng: -74.0032736
  }, {
    lat: 40.7643725,
    lng: -74.0032036
  }, {
    lat: 40.7634125,
    lng: -74.0010236
  }, {
    lat: 40.7628681,
    lng: -74.0014146
  }, {
    lat: 40.7638391,
    lng: -74.0036526
  }, {
    lat: 40.7635925,
    lng: -74.0038336
  }, {
    lat: 40.7626268,
    lng: -74.001598
  }, {
    lat: 40.7617439,
    lng: -74.0022204
  }, {
    lat: 40.7627571,
    lng: -74.0045405
  }, {
    lat: 40.7625364,
    lng: -74.0046787
  }, {
    lat: 40.7615646,
    lng: -74.0023767
  }, {
    lat: 40.760991,
    lng: -74.0027569
  }, {
    lat: 40.7606868,
    lng: -74.0020027
  }, {
    lat: 40.757075,
    lng: -74.00494
  }, {
    lat: 40.7534261,
    lng: -73.9962921
  }, {
    lat: 40.7584405,
    lng: -73.9926872
  }, {
    lat: 40.7572215,
    lng: -73.9897903
  }],
  color: 'FF9966',
  center: {
    lat: 40.763664,
    lng: -73.99059550000004
  },
  summary: "Also known as <strong>Clinton</strong>, Hell's Kitchen was once a bastion of poor and working-class <a target='_blank' href='https://en.wikipedia.org/wiki/Irish_American'>Irish Americans</a>. The neighborhood has changed over the last three decades of the 20th century and into the new millennium because its proximity to <a target='_blank' href='https://en.wikipedia.org/wiki/Midtown_Manhattan'>Midtown</a>. It now provides transportation, hospital and warehouse infrastructure support to the Midtown business district. Its gritty reputation kept real estate prices below those of most other areas of Manhattan until the early 1990s. Since then, rent prices have increased enormously, and many famous entertainers have resided here, including <a target='_blank' href='https://en.wikipedia.org/wiki/Burt_Reynolds'>Burt Reynolds</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Bob_Hope'>Bob Hope</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/James_Dean'>James Dean</a>, and <a target='_blank' href='https://en.wikipedia.org/wiki/Jerry_Seinfeld'>Jerry Seinfeld</a>. The southern portion of the neighborhood is now the site of the new <a target='_blank' href='https://en.wikipedia.org/wiki/Hudson_Yards_(development)'>Hudson Yards development</a>, the largest private real estate development in the United States."
}, {
  name: 'Theater District',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7559735,
    lng: -73.9907405
  }, {
    lat: 40.7536452,
    lng: -73.9851025
  }, {
    lat: 40.7618209,
    lng: -73.979094
  }, {
    lat: 40.7641859,
    lng: -73.9847265
  }, {
    lat: 40.7622885,
    lng: -73.9861187
  }, {
    lat: 40.760131,
    lng: -73.987645
  }, {
    lat: 40.7559735,
    lng: -73.9907405
  }],
  color: 'FF99FF',
  center: {
    lat: 40.7589521,
    lng: -73.98498430000001
  },
  summary: "This district is where most <a target='_blank' href='https://en.wikipedia.org/wiki/Broadway_theatre'>Broadway theatres</a> are located, as well as many other theatres, movie theatres, restaurants, hotels and other places of entertainment. Theatre Row is the popular name for a section of <a target='_blank' href='https://en.wikipedia.org/wiki/42nd_Street_%28Manhattan%29'>42nd Street</a> in New York City, which is the location for a number of small theatres; it is also the name of a large theatre complex built in 2000 to house six theatres. At the southern end is the brightly illuminated hub, <a target='_blank' href='https://en.wikipedia.org/wiki/Times_Square'>Times Square</a>. It is a world-famous, major commercial intersection, iconified as &quot;The Crossroads of the World&quot;. Times Square is said to be one of the world's most visited tourist attraction, bringing in over 50 million visitors annually."
}, {
  name: 'Midtown Center',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7549599,
    lng: -73.98416
  }, {
    lat: 40.7507842,
    lng: -73.9744701
  }, {
    lat: 40.7616016,
    lng: -73.9665947
  }, {
    lat: 40.7656971,
    lng: -73.9762512
  }, {
    lat: 40.7549599,
    lng: -73.98416
  }],
  color: '66FF99',
  center: {
    lat: 40.75824065,
    lng: -73.97537734999997
  }
}, {
  name: 'Midtown East',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7507842,
    lng: -73.9744701
  }, {
    lat: 40.74798009999999,
    lng: -73.9678965
  }, {
    lat: 40.75483199999999,
    lng: -73.961985
  }, {
    lat: 40.754994,
    lng: -73.962672
  }, {
    lat: 40.75593700000001,
    lng: -73.964903
  }, {
    lat: 40.7597085,
    lng: -73.9620385
  }, {
    lat: 40.7616016,
    lng: -73.9665947
  }, {
    lat: 40.7507842,
    lng: -73.9744701
  }],
  color: '9999FF',
  center: {
    lat: 40.75479084999999,
    lng: -73.96822755000005
  }
}, {
  name: 'Sutton Place',
  borough: 'Manhattan',
  coords: [{
    lat: 40.75593700000001,
    lng: -73.964903
  }, {
    lat: 40.754994,
    lng: -73.962672
  }, {
    lat: 40.75483199999999,
    lng: -73.961985
  }, {
    lat: 40.755856,
    lng: -73.96063
  }, {
    lat: 40.75835920000001,
    lng: -73.958774
  }, {
    lat: 40.7597085,
    lng: -73.9620385
  }, {
    lat: 40.75593700000001,
    lng: -73.964903
  }],
  color: 'FFCC66',
  center: {
    lat: 40.75727025,
    lng: -73.9618385
  },
  summary: "Sutton Place is one of the most affluent streets. The luxury townhouses have been called home by many celebrities. Sutton Place encompasses two public parks overlooking the East River, which have undergone much controversy given the close proximity to <a target='_blank' href='https://en.wikipedia.org/wiki/FDR_Drive'>FDR Drive</a>, a major expressway along Manhattan's eastern edge. One of these parks is, in fact, cantilevered over the expressway. Sutton Place is present in much popular culture, being the famous <a target='_blank' href='https://en.wikipedia.org/wiki/Dead_End'>Dead End</a> of the 1935 play and 1937 movie of that name, and mentioned in the novel <a target='_blank' href='https://en.wikipedia.org/wiki/Catcher_in_the_Rye'>Catcher in the Rye</a> as the location of a &quot;swanky&quot; apartment."
}, {
  name: 'Upper East Side',
  borough: 'Manhattan',
  coords: [{
    lat: 40.764388999999994,
    lng: -73.973161
  }, {
    lat: 40.75835920000001,
    lng: -73.958774
  }, {
    lat: 40.7593996,
    lng: -73.9574719
  }, {
    lat: 40.76252,
    lng: -73.954149
  }, {
    lat: 40.76788299999999,
    lng: -73.9494069
  }, {
    lat: 40.770256,
    lng: -73.9473469
  }, {
    lat: 40.77192900000001,
    lng: -73.945674
  }, {
    lat: 40.773668,
    lng: -73.943807
  }, {
    lat: 40.775488,
    lng: -73.942412
  }, {
    lat: 40.7760729,
    lng: -73.941962
  }, {
    lat: 40.777129,
    lng: -73.942133
  }, {
    lat: 40.78042800000001,
    lng: -73.943764
  }, {
    lat: 40.7816789,
    lng: -73.943957
  }, {
    lat: 40.7828159,
    lng: -73.943571
  }, {
    lat: 40.7880309,
    lng: -73.955973
  }, {
    lat: 40.764388999999994,
    lng: -73.973161
  }],
  color: '33CCFF',
  center: {
    lat: 40.773195050000005,
    lng: -73.9575615
  },
  summary: "Once known as the &quot;Silk <a target='_blank' href='https://en.wikipedia.org/wiki/Stockings'>Stocking</a> District&quot;, it retains its position as one of the most affluent neighborhoods of New York City. The Upper East Side maintains one of the highest pricing per square foot in the United States. A 2002 report cited the average cost per square foot as $856; however, that price has noticed a substantial jump, increasing to almost as much as $1,200 per square foot as of 2006. The area is host to some of the most famous museums in the world. The string of museums along Fifth Avenue fronting Central Park has been dubbed &quot;<a target='_blank' href='https://en.wikipedia.org/wiki/Museum_Mile,_New_York'>Museum Mile</a>&quot;. It was once named &quot;Millionaire's Row.&quot;."
}, {
  name: 'Upper West Side',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8004849,
    lng: -73.9582524
  }, {
    lat: 40.805949,
    lng: -73.970861
  }, {
    lat: 40.793555,
    lng: -73.979727
  }, {
    lat: 40.791362,
    lng: -73.981401
  }, {
    lat: 40.78981790000001,
    lng: -73.982366
  }, {
    lat: 40.787869,
    lng: -73.983654
  }, {
    lat: 40.784733,
    lng: -73.985955
  }, {
    lat: 40.78182710000001,
    lng: -73.9879747
  }, {
    lat: 40.7815533,
    lng: -73.9881008
  }, {
    lat: 40.78014379999999,
    lng: -73.9890395
  }, {
    lat: 40.7798919,
    lng: -73.989018
  }, {
    lat: 40.7797653,
    lng: -73.99147000000002
  }, {
    lat: 40.7795832,
    lng: -73.9915712
  }, {
    lat: 40.7797087,
    lng: -73.9889108
  }, {
    lat: 40.777633,
    lng: -73.9904396
  }, {
    lat: 40.77758430000001,
    lng: -73.9909761
  }, {
    lat: 40.77547200000001,
    lng: -73.992451
  }, {
    lat: 40.7754826,
    lng: -73.9922447
  }, {
    lat: 40.7754201,
    lng: -73.9922423
  }, {
    lat: 40.775400700000006,
    lng: -73.9923662
  }, {
    lat: 40.7753375,
    lng: -73.9923458
  }, {
    lat: 40.7752923,
    lng: -73.9922191
  }, {
    lat: 40.7750963,
    lng: -73.99238420000002
  }, {
    lat: 40.7750051,
    lng: -73.99262850000001
  }, {
    lat: 40.7731891,
    lng: -73.993991
  }, {
    lat: 40.774131000000004,
    lng: -73.9961203
  }, {
    lat: 40.7739025,
    lng: -73.9962536
  }, {
    lat: 40.7692016,
    lng: -73.9848297
  }, {
    lat: 40.7698925,
    lng: -73.984314
  }, {
    lat: 40.76896779999999,
    lng: -73.9822741
  }, {
    lat: 40.7686184,
    lng: -73.9822234
  }, {
    lat: 40.76862249999999,
    lng: -73.9818336
  }, {
    lat: 40.7684953,
    lng: -73.9815702
  }, {
    lat: 40.8004849,
    lng: -73.9582524
  }],
  color: '33CC00',
  center: {
    lat: 40.78722215,
    lng: -73.97725300000002
  },
  summary: "Like the <a target='_blank' href='https://en.wikipedia.org/wiki/Upper_East_Side'>Upper East Side</a>, the Upper West Side is an upscale, primarily residential area, with many of its residents working in more commercial areas in <a target='_blank' href='https://en.wikipedia.org/wiki/Midtown_Manhattan'>Midtown</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Lower_Manhattan'>Lower Manhattan</a>. It has the reputation of being home to New York City's cultural and artistic workers, while the Upper East Side is traditionally perceived to be home to commercial and business types. Many landmarks and institutions are located here, including the <a target='_blank' href='https://en.wikipedia.org/wiki/Beacon_Theatre_%28New_York_City%29'>Beacon Theater</a>, the <a target='_blank' href='https://en.wikipedia.org/wiki/American_Museum_of_Natural_History'>American Museum of Natural History</a>, and the <a target='_blank' href='https://en.wikipedia.org/wiki/Lincoln_Center'>Lincoln Center</a>"
}, {
  name: 'East Harlem',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7880309,
    lng: -73.955973
  }, {
    lat: 40.7828159,
    lng: -73.943571
  }, {
    lat: 40.783888,
    lng: -73.942587
  }, {
    lat: 40.785123000000006,
    lng: -73.940012
  }, {
    lat: 40.7873,
    lng: -73.937995
  }, {
    lat: 40.789217,
    lng: -73.937094
  }, {
    lat: 40.79106900000001,
    lng: -73.93585
  }, {
    lat: 40.794416,
    lng: -73.930528
  }, {
    lat: 40.795260999999996,
    lng: -73.92967
  }, {
    lat: 40.797242,
    lng: -73.928854
  }, {
    lat: 40.799710999999995,
    lng: -73.928854
  }, {
    lat: 40.80120600000001,
    lng: -73.928983
  }, {
    lat: 40.80282999999999,
    lng: -73.929713
  }, {
    lat: 40.807508,
    lng: -73.933575
  }, {
    lat: 40.809424,
    lng: -73.934433
  }, {
    lat: 40.81501099999999,
    lng: -73.933918
  }, {
    lat: 40.81842100000001,
    lng: -73.933876
  }, {
    lat: 40.8058509,
    lng: -73.942845
  }, {
    lat: 40.805169,
    lng: -73.941232
  }, {
    lat: 40.8027159,
    lng: -73.943056
  }, {
    lat: 40.803399,
    lng: -73.944665
  }, {
    lat: 40.7880309,
    lng: -73.955973
  }],
  color: 'FF6666',
  center: {
    lat: 40.80061845,
    lng: -73.94241349999999
  },
  summary: "Also known as <strong>Spanish Harlem</strong> and <strong>El Barrio</strong>, East Harlem is one of largest Latino neighborhoods in New York City, known for its influence on <a target='_blank' href='https://en.wikipedia.org/wiki/Salsa_music'>salsa music</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Latin_freestyle'>Latin freestyle</a>. Until the late 19th century it was predominantly rural. In the 1870s Italians settled here in what became known as <strong>Italian Harlem</strong>. This included many crime syndicates such as the <a target='_blank' href='https://en.wikipedia.org/wiki/Black_Hand_(extortion)'>Black Hand</a> and eventually the <a target='_blank' href='https://en.wikipedia.org/wiki/Italian-American_Mafia'>Italian-American Mafia</a>. The <a target='_blank' href='https://en.wikipedia.org/wiki/Genovese_crime_family'>Genovese crime family</a>, one of the notorious <a target='_blank' href='https://en.wikipedia.org/wiki/Five_Families'>Five Families</a>, was formed in East Harlem. Following a plague of crime and poverty in the mid 20th century, much of East Harlem was leveled to make way for <a target='_blank' href='https://en.wikipedia.org/wiki/Public_housing_in_the_United_States'>public housing</a>, now the second-highest concentration in the country. Today the area is slowly succumbing to <a target='_blank' href='https://en.wikipedia.org/wiki/Gentrification'>gentrification</a>, with a growing number Chinese population."
}, {
  name: 'Carnegie Hill',
  borough: 'Manhattan',
  coords: [{
    lat: 40.78162,
    lng: -73.960661
  }, {
    lat: 40.7788253,
    lng: -73.9540413
  }, {
    lat: 40.785286,
    lng: -73.949411
  }, {
    lat: 40.7865185,
    lng: -73.9523569
  }, {
    lat: 40.7877776,
    lng: -73.951445
  }, {
    lat: 40.7893129,
    lng: -73.9550284
  }, {
    lat: 40.7880309,
    lng: -73.955973
  }, {
    lat: 40.78162,
    lng: -73.960661
  }],
  color: '009D57',
  center: {
    lat: 40.783921,
    lng: -73.954714
  }
}, {
  name: 'Morningside Heights',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8004849,
    lng: -73.9582524
  }, {
    lat: 40.810285300000004,
    lng: -73.9511487
  }, {
    lat: 40.811698,
    lng: -73.954604
  }, {
    lat: 40.81874599999999,
    lng: -73.9609119
  }, {
    lat: 40.816602,
    lng: -73.963315
  }, {
    lat: 40.805949,
    lng: -73.970861
  }, {
    lat: 40.8004849,
    lng: -73.9582524
  }],
  color: '33CCFF',
  center: {
    lat: 40.809615449999995,
    lng: -73.96100485
  },
  summary: "This neighborhood is chiefly known as the home of institutions such as <a target='_blank' href='https://en.wikipedia.org/wiki/Columbia_University'>Columbia University</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Teachers_College,_Columbia_University'>Teachers College</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Barnard_College'>Barnard College</a>, the <a target='_blank' href='https://en.wikipedia.org/wiki/Manhattan_School_of_Music'>Manhattan School of Music</a>, among others. The neighborhood has been referred to as a &quot;<a target='_blank' href='https://en.wikipedia.org/wiki/College_town'>college town</a>&quot; within New York City, the &quot;Academic Acropolis&quot;, the &quot;Acropolis of New York&quot;, and &quot;Bloomingdale Village&quot;. A famous restaurant in Morningside Heights is <a target='_blank' href='https://en.wikipedia.org/wiki/Tom%27s_Restaurant_%28Manhattan%29'>Tom's Restaurant</a>, on <a target='_blank' href='https://en.wikipedia.org/wiki/Broadway_%28New_York_City%29'>Broadway</a> at W. 112th St, as seen on the popular sitcom <a target='_blank' href='https://en.wikipedia.org/wiki/Seinfeld'>Seinfeld</a>."
}, {
  name: 'Harlem',
  borough: 'Manhattan',
  coords: [{
    lat: 40.803399,
    lng: -73.944665
  }, {
    lat: 40.8039431,
    lng: -73.94604950000002
  }, {
    lat: 40.80637060000001,
    lng: -73.9443061
  }, {
    lat: 40.8057216,
    lng: -73.942766
  }, {
    lat: 40.8167078,
    lng: -73.9347522
  }, {
    lat: 40.8179218,
    lng: -73.9338187
  }, {
    lat: 40.8187835,
    lng: -73.9338723
  }, {
    lat: 40.818828700000005,
    lng: -73.9337971
  }, {
    lat: 40.819716,
    lng: -73.9338132
  }, {
    lat: 40.8197456,
    lng: -73.93395
  }, {
    lat: 40.82169940000001,
    lng: -73.9340653
  }, {
    lat: 40.8242267,
    lng: -73.9342047
  }, {
    lat: 40.82456559999999,
    lng: -73.9343092
  }, {
    lat: 40.82609389999999,
    lng: -73.93436
  }, {
    lat: 40.8270397,
    lng: -73.9345074
  }, {
    lat: 40.827058,
    lng: -73.9344095
  }, {
    lat: 40.8280221,
    lng: -73.9345475
  }, {
    lat: 40.8345649,
    lng: -73.9501694
  }, {
    lat: 40.83245000000001,
    lng: -73.951403
  }, {
    lat: 40.827872,
    lng: -73.954707
  }, {
    lat: 40.827498,
    lng: -73.953677
  }, {
    lat: 40.81874599999999,
    lng: -73.9609119
  }, {
    lat: 40.811698,
    lng: -73.954604
  }, {
    lat: 40.810285300000004,
    lng: -73.9511487
  }, {
    lat: 40.8006619,
    lng: -73.9581195
  }, {
    lat: 40.7970072,
    lng: -73.9493431
  }, {
    lat: 40.803399,
    lng: -73.944665
  }],
  color: 'FFFF33',
  center: {
    lat: 40.81578605,
    lng: -73.94735449999996
  },
  summary: "Since the 1920s, Harlem has been a major <a target='_blank' href='https://en.wikipedia.org/wiki/African-American'>African-American</a> residential, cultural and business center. Originally a Dutch village, formally organized in 1658, it is named after the city of <a target='_blank' href='https://en.wikipedia.org/wiki/Haarlem'>Haarlem</a> in the <a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands'>Netherlands</a>. Harlem has been defined by a series of <a target='_blank' href='https://en.wikipedia.org/wiki/Boom-and-bust'>boom-and-bust</a> cycles, with significant ethnic shifts accompanying each cycle. Black residents began to arrive en masse in 1904, with numbers fed by the <a target='_blank' href='https://en.wikipedia.org/wiki/Great_Migration_%28African_American%29'>Great Migration</a>. In the 1920s and 1930s, the neighborhood was the focus of the &quot;<a target='_blank' href='https://en.wikipedia.org/wiki/Harlem_Renaissance'>Harlem Renaissance</a>&quot;, an explosion of artistic and intellectual works by the American black community. The world famous <a target='_blank' href='https://en.wikipedia.org/wiki/Apollo_Theater'>Apollo Theater</a> opened in 1934 in a former <a target='_blank' href='https://en.wikipedia.org/wiki/Burlesque_house'>burlesque house</a>. Crime was long a problem, beginning with the <a target='_blank' href='https://en.wikipedia.org/wiki/Italian_Mafia'>Italian Mafia</a> in the early 1900s. The Mafia and the local blacks engaged in <a target='_blank' href='https://en.wikipedia.org/wiki/Numbers_game'>numbers game</a> gambling. Police were <a target='_blank' href='https://en.wikipedia.org/wiki/Bribe'>bribed</a> to ignore the billions of dollars that were at play in the early 1950s. By this time the neighborhood was plagued with poverty and high mortality rates. The 1980s brought the <a target='_blank' href='https://en.wikipedia.org/wiki/Crack_epidemic'>crack epidemic</a> and with it violent crime. Under the <a target='_blank' href='https://en.wikipedia.org/wiki/David_Dinkins'>Dinkins</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Rudy_Giuliani'>Giuliani</a> mayoral administrations, crime finally was under control by the 1990s. Today it largely enjoys the safety found in the rest of Manhattan. Harlem is known for its exquisite <a target='_blank' href='https://en.wikipedia.org/wiki/Soul_food'>soul food</a>. As of 2019, for every supermarket in Central Harlem, there are 11 <a href='https://en.wikipedia.org/wiki/Convenience_store'>bodegas</a>."
}, {
  name: 'Sugar Hill',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8236477,
    lng: -73.943837
  }, {
    lat: 40.8293956,
    lng: -73.9396742
  }, {
    lat: 40.829631,
    lng: -73.9396635
  }, {
    lat: 40.830321,
    lng: -73.9401677
  }, {
    lat: 40.830827,
    lng: -73.941445
  }, {
    lat: 40.8314738,
    lng: -73.9430538
  }, {
    lat: 40.8252471,
    lng: -73.947635
  }, {
    lat: 40.8236477,
    lng: -73.943837
  }],
  color: '4186F0',
  center: {
    lat: 40.827595,
    lng: -73.943353
  }
}, {
  name: 'Manhattanville',
  borough: 'Manhattan',
  coords: [{
    lat: 40.821498,
    lng: -73.958643
  }, {
    lat: 40.81874599999999,
    lng: -73.9609119
  }, {
    lat: 40.811698,
    lng: -73.954604
  }, {
    lat: 40.8114702,
    lng: -73.9540956
  }, {
    lat: 40.810155,
    lng: -73.954986
  }, {
    lat: 40.809408,
    lng: -73.95548
  }, {
    lat: 40.8082383,
    lng: -73.952637
  }, {
    lat: 40.810285300000004,
    lng: -73.9511487
  }, {
    lat: 40.8121279,
    lng: -73.9497722
  }, {
    lat: 40.812981,
    lng: -73.951875
  }, {
    lat: 40.815758,
    lng: -73.949858
  }, {
    lat: 40.81603400000001,
    lng: -73.949815
  }, {
    lat: 40.8165539,
    lng: -73.950094
  }, {
    lat: 40.81743099999999,
    lng: -73.950158
  }, {
    lat: 40.8180071,
    lng: -73.9497716
  }, {
    lat: 40.821498,
    lng: -73.958643
  }],
  color: 'FFCCCC',
  center: {
    lat: 40.814868149999995,
    lng: -73.95534175
  },
  summary: "Throughout the 19th century, Manhattanville was a town that bustled around a wharf active with ferry and daily river conveyances. Situated near the famous Bloomingdale Road (today <a target='_blank' href='https://en.wikipedia.org/wiki/Broadway_(Manhattan)'>Broadway</a>), its hotels, houses of entertainment and post office made it an alluring destination of suburban retreat from the city. With the construction of road and railway viaducts over the valley in which the town sat, Manhattanville, increasingly absorbed into the growing city, became a marginalized industrial area. The neighborhood is now the site of a major planned expansion of <a target='_blank' href='https://en.wikipedia.org/wiki/Columbia_University'>Columbia University</a>, which has campuses in Morningside Heights to the south and <a target='_blank' href='https://en.wikipedia.org/wiki/Washington_Heights,_Manhattan'>Washington Heights</a> to the north."
}, {
  name: 'Hamilton Heights',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8240399,
    lng: -73.94469000000001
  }, {
    lat: 40.82624800000001,
    lng: -73.943145
  }, {
    lat: 40.830827,
    lng: -73.941445
  }, {
    lat: 40.83447900000001,
    lng: -73.950201
  }, {
    lat: 40.832547999999996,
    lng: -73.951339
  }, {
    lat: 40.82790390000001,
    lng: -73.954729
  }, {
    lat: 40.827498,
    lng: -73.953677
  }, {
    lat: 40.821498,
    lng: -73.958643
  }, {
    lat: 40.817333,
    lng: -73.948077
  }, {
    lat: 40.8240399,
    lng: -73.94469000000001
  }],
  color: 'CCCCFF',
  center: {
    lat: 40.825906,
    lng: -73.95004399999999
  },
  summary: "The community derives its name from Founding Father <a target='_blank' href='https://en.wikipedia.org/wiki/Alexander_Hamilton'>Alexander Hamilton</a>, who lived the last two years of his life in the area when it was still largely farmland. Most of the housing here dates from the extension of the elevated and subway lines at the end of the 19th and the start of the 20th Century. The brownstone revival of the 1960s and 1970s led to a new movement of middle-class blacks in the area. Latinos arrived in large numbers in the 1980s, with Dominicans making up the majority. Today the local population is changing again, with <a target='_blank' href='https://en.wikipedia.org/wiki/Hispanic'>Hispanics</a> constituting a majority of the population. Many actors, artists, teachers, and other professionals now reside in Hamilton Heights. Hamilton Heights is the home of <a target='_blank' href='https://en.wikipedia.org/wiki/City_College_of_New_York'>City College of New York</a> (CCNY), <a target='_blank' href='https://en.wikipedia.org/wiki/Dance_Theatre_of_Harlem'>Dance Theatre of Harlem</a>, and <a target='_blank' href='https://en.wikipedia.org/wiki/The_Harlem_School_of_the_Arts'>The Harlem School of the Arts</a>."
}, {
  name: 'Washington Heights',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8345649,
    lng: -73.9501694
  }, {
    lat: 40.8280221,
    lng: -73.9345475
  }, {
    lat: 40.8297571,
    lng: -73.9347479
  }, {
    lat: 40.8299143,
    lng: -73.9348267
  }, {
    lat: 40.8320548,
    lng: -73.9350753
  }, {
    lat: 40.8335906,
    lng: -73.9351147
  }, {
    lat: 40.83504,
    lng: -73.9349165
  }, {
    lat: 40.8354903,
    lng: -73.9347875
  }, {
    lat: 40.8359996,
    lng: -73.9344173
  }, {
    lat: 40.8365221,
    lng: -73.9342053
  }, {
    lat: 40.842483,
    lng: -73.930914
  }, {
    lat: 40.8443008,
    lng: -73.9302275
  }, {
    lat: 40.8453069,
    lng: -73.9296966
  }, {
    lat: 40.8471048,
    lng: -73.9284572
  }, {
    lat: 40.852839,
    lng: -73.9244879
  }, {
    lat: 40.8563528,
    lng: -73.9218038
  }, {
    lat: 40.8563487,
    lng: -73.9217331
  }, {
    lat: 40.8566449,
    lng: -73.9215015
  }, {
    lat: 40.8567139,
    lng: -73.9216819
  }, {
    lat: 40.8559318,
    lng: -73.9222017
  }, {
    lat: 40.8559831,
    lng: -73.9223973
  }, {
    lat: 40.856244,
    lng: -73.9223127
  }, {
    lat: 40.8566341,
    lng: -73.9223455
  }, {
    lat: 40.8568782,
    lng: -73.9220135
  }, {
    lat: 40.8570334,
    lng: -73.921895
  }, {
    lat: 40.8571232,
    lng: -73.9215621
  }, {
    lat: 40.8573547,
    lng: -73.9216049
  }, {
    lat: 40.8576003,
    lng: -73.9210738
  }, {
    lat: 40.857646,
    lng: -73.9208833
  }, {
    lat: 40.8577135,
    lng: -73.9208739
  }, {
    lat: 40.8577635,
    lng: -73.9209765
  }, {
    lat: 40.8579426,
    lng: -73.9208883
  }, {
    lat: 40.8579713,
    lng: -73.9207047
  }, {
    lat: 40.858079,
    lng: -73.9206344
  }, {
    lat: 40.8590505,
    lng: -73.9229679
  }, {
    lat: 40.8656429,
    lng: -73.9272454
  }, {
    lat: 40.8693677,
    lng: -73.9317889
  }, {
    lat: 40.869229,
    lng: -73.932588
  }, {
    lat: 40.8689939,
    lng: -73.9326204
  }, {
    lat: 40.86884,
    lng: -73.932331
  }, {
    lat: 40.8677888,
    lng: -73.9324
  }, {
    lat: 40.8674354,
    lng: -73.9325764
  }, {
    lat: 40.8674912,
    lng: -73.9328861
  }, {
    lat: 40.8672458,
    lng: -73.9329691
  }, {
    lat: 40.8671283,
    lng: -73.9327918
  }, {
    lat: 40.86455,
    lng: -73.934492
  }, {
    lat: 40.8624017,
    lng: -73.9362028
  }, {
    lat: 40.8570351,
    lng: -73.9400782
  }, {
    lat: 40.8538734,
    lng: -73.9419236
  }, {
    lat: 40.8526928,
    lng: -73.9430537
  }, {
    lat: 40.8523188,
    lng: -73.9435783
  }, {
    lat: 40.8522289,
    lng: -73.9439849
  }, {
    lat: 40.8518137,
    lng: -73.9449536
  }, {
    lat: 40.8514378,
    lng: -73.9454854
  }, {
    lat: 40.8512378,
    lng: -73.9457123
  }, {
    lat: 40.8512517,
    lng: -73.9461125
  }, {
    lat: 40.8511577,
    lng: -73.9462047
  }, {
    lat: 40.8510022,
    lng: -73.9461853
  }, {
    lat: 40.850959,
    lng: -73.9462431
  }, {
    lat: 40.8510268,
    lng: -73.9465089
  }, {
    lat: 40.8509434,
    lng: -73.9466219
  }, {
    lat: 40.8509703,
    lng: -73.946993
  }, {
    lat: 40.8504332,
    lng: -73.9471602
  }, {
    lat: 40.8503652,
    lng: -73.9470441
  }, {
    lat: 40.8502781,
    lng: -73.9470908
  }, {
    lat: 40.8499334,
    lng: -73.9470447
  }, {
    lat: 40.8489594,
    lng: -73.9466724
  }, {
    lat: 40.8485597,
    lng: -73.9467115
  }, {
    lat: 40.8482695,
    lng: -73.9466273
  }, {
    lat: 40.847223,
    lng: -73.946879
  }, {
    lat: 40.844139,
    lng: -73.946064
  }, {
    lat: 40.84008,
    lng: -73.9484669
  }, {
    lat: 40.8345649,
    lng: -73.9501694
  }],
  color: 'FF9966',
  center: {
    lat: 40.84035745,
    lng: -73.93931329999998
  },
  summary: "Manhattan's highest natural elevation, 265 ft (80.8 m) above sea level, at what was the location of <a target='_blank' href='https://en.wikipedia.org/wiki/Fort_Washington_(Manhattan)'>Fort Washington</a>. This played a critical role during the <a target='_blank' href='https://en.wikipedia.org/wiki/Battle_of_Fort_Washington'>Battle of Fort Washington</a>, which occurred on November 16, 1776, when the fort fell to the British at great cost to American forces. Over the years, the area has been home to Irish immigrants, European Jews escaping Nazism, and later many Greeks. The community was often referred to as the &quot;<a target='_blank' href='https://en.wikipedia.org/wiki/Astoria,_Queens'>Astoria of Manhattan</a>&quot;. In the 1980s, the area was severely affected by the <a target='_blank' href='https://en.wikipedia.org/wiki/Crack_Epidemic'>crack cocaine epidemic</a>, much of this attributed to the rampant gang activity of the time. In the 1980s, Washington Heights was the epicenter of the Dominican <a target='_blank' href='https://en.wikipedia.org/wiki/Diaspora'>diaspora</a> in the United States. By the 2000s, urban renewal began, along with white <a target='_blank' href='https://en.wikipedia.org/wiki/Gentrification'>gentrification</a>. Today, the majority of the population continues to be <a target='_blank' href='https://en.wikipedia.org/wiki/Dominican_Republic'>Dominican</a>."
}, {
  name: 'Fort George',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8471048,
    lng: -73.9284572
  }, {
    lat: 40.8507754,
    lng: -73.925845
  }, {
    lat: 40.852839,
    lng: -73.9244879
  }, {
    lat: 40.8553871,
    lng: -73.9225075
  }, {
    lat: 40.8563528,
    lng: -73.9218038
  }, {
    lat: 40.8563487,
    lng: -73.9217331
  }, {
    lat: 40.8566449,
    lng: -73.9215015
  }, {
    lat: 40.8567139,
    lng: -73.9216819
  }, {
    lat: 40.8559318,
    lng: -73.9222017
  }, {
    lat: 40.8559831,
    lng: -73.9223973
  }, {
    lat: 40.856244,
    lng: -73.9223127
  }, {
    lat: 40.8566341,
    lng: -73.9223455
  }, {
    lat: 40.8568782,
    lng: -73.9220135
  }, {
    lat: 40.8570334,
    lng: -73.921895
  }, {
    lat: 40.8571232,
    lng: -73.9215621
  }, {
    lat: 40.8573547,
    lng: -73.9216049
  }, {
    lat: 40.8576003,
    lng: -73.9210738
  }, {
    lat: 40.857646,
    lng: -73.9208833
  }, {
    lat: 40.8577135,
    lng: -73.9208739
  }, {
    lat: 40.8577635,
    lng: -73.9209765
  }, {
    lat: 40.8579426,
    lng: -73.9208883
  }, {
    lat: 40.8579713,
    lng: -73.9207047
  }, {
    lat: 40.858079,
    lng: -73.9206344
  }, {
    lat: 40.8582273,
    lng: -73.9209664
  }, {
    lat: 40.8590505,
    lng: -73.9229679
  }, {
    lat: 40.8656429,
    lng: -73.9272454
  }, {
    lat: 40.8693677,
    lng: -73.9317889
  }, {
    lat: 40.869229,
    lng: -73.932588
  }, {
    lat: 40.8689939,
    lng: -73.9326204
  }, {
    lat: 40.86884,
    lng: -73.932331
  }, {
    lat: 40.8677888,
    lng: -73.9324
  }, {
    lat: 40.8674354,
    lng: -73.9325764
  }, {
    lat: 40.8674912,
    lng: -73.9328861
  }, {
    lat: 40.8672458,
    lng: -73.9329691
  }, {
    lat: 40.8671283,
    lng: -73.9327918
  }, {
    lat: 40.86455,
    lng: -73.934492
  }, {
    lat: 40.8624017,
    lng: -73.9362028
  }, {
    lat: 40.8577968,
    lng: -73.9394737
  }, {
    lat: 40.8570351,
    lng: -73.9400782
  }, {
    lat: 40.8557215,
    lng: -73.9408865
  }, {
    lat: 40.8538734,
    lng: -73.9419236
  }, {
    lat: 40.8526928,
    lng: -73.9430537
  }, {
    lat: 40.8513655,
    lng: -73.9410314
  }, {
    lat: 40.8513498,
    lng: -73.9397712
  }, {
    lat: 40.8502255,
    lng: -73.9357481
  }, {
    lat: 40.8471048,
    lng: -73.9284572
  }],
  color: '33CC00',
  center: {
    lat: 40.85823625,
    lng: -73.93184405
  },
  summary: "Fort George was one of five forts in the state of <a target='_blank' href='https://en.wikipedia.org/wiki/New_York_(state)'>New York</a>. There were four evolutions of Fort George, last is located here. Briefly named Fort Clinton and finally Fort George, from 1895 to 1914 it was the site of the Fort George Amusement Park, and is now <a target='_blank' href='https://en.wikipedia.org/wiki/George_Washington_High_School_%28New_York_City%29'>George Washington High School</a>. Fort George is a sub-neighborhood of <a target='_blank' href='https://en.wikipedia.org/wiki/Washington_Heights,_Manhattan'>Washington Heights</a>, and shares much of it's overall history."
}, {
  name: 'Hudson Heights',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8463939,
    lng: -73.9429267
  }, {
    lat: 40.8446895,
    lng: -73.9388712
  }, {
    lat: 40.8473678,
    lng: -73.9380988
  }, {
    lat: 40.8484229,
    lng: -73.9376911
  }, {
    lat: 40.8502255,
    lng: -73.9357481
  }, {
    lat: 40.8542335,
    lng: -73.933657
  }, {
    lat: 40.8552885,
    lng: -73.9333781
  }, {
    lat: 40.8589563,
    lng: -73.9314898
  }, {
    lat: 40.8597677,
    lng: -73.9311894
  }, {
    lat: 40.859784,
    lng: -73.9322837
  }, {
    lat: 40.8584532,
    lng: -73.9329275
  }, {
    lat: 40.8587453,
    lng: -73.9341076
  }, {
    lat: 40.8594756,
    lng: -73.933936
  }, {
    lat: 40.859573,
    lng: -73.934923
  }, {
    lat: 40.8588914,
    lng: -73.9357813
  }, {
    lat: 40.8573983,
    lng: -73.9367255
  }, {
    lat: 40.8575768,
    lng: -73.9375194
  }, {
    lat: 40.8551424,
    lng: -73.939515
  }, {
    lat: 40.854834,
    lng: -73.9398583
  }, {
    lat: 40.8537466,
    lng: -73.9402875
  }, {
    lat: 40.8523833,
    lng: -73.9410385
  }, {
    lat: 40.8518314,
    lng: -73.9418109
  }, {
    lat: 40.8511173,
    lng: -73.9423259
  }, {
    lat: 40.8506466,
    lng: -73.9426263
  }, {
    lat: 40.8489585,
    lng: -73.9429053
  }, {
    lat: 40.8463939,
    lng: -73.9429267
  }],
  color: '0BA9CC',
  center: {
    lat: 40.854027,
    lng: -73.9388157
  }
}, {
  name: 'Inwood',
  borough: 'Manhattan',
  coords: [{
    lat: 40.858259399999994,
    lng: -73.9210493
  }, {
    lat: 40.8584178,
    lng: -73.9211343
  }, {
    lat: 40.85865340000001,
    lng: -73.9211067
  }, {
    lat: 40.858758,
    lng: -73.9212301
  }, {
    lat: 40.8588983,
    lng: -73.9212444
  }, {
    lat: 40.8591697,
    lng: -73.9217817
  }, {
    lat: 40.85941090000001,
    lng: -73.921927
  }, {
    lat: 40.8595949,
    lng: -73.921907
  }, {
    lat: 40.8603145,
    lng: -73.92144710000001
  }, {
    lat: 40.8602767,
    lng: -73.9213245
  }, {
    lat: 40.8593585,
    lng: -73.9207351
  }, {
    lat: 40.8588115,
    lng: -73.9194886
  }, {
    lat: 40.85966990000001,
    lng: -73.9186937
  }, {
    lat: 40.8601073,
    lng: -73.9183713
  }, {
    lat: 40.8602651,
    lng: -73.9183764
  }, {
    lat: 40.8608511,
    lng: -73.917864
  }, {
    lat: 40.8610477,
    lng: -73.9179095
  }, {
    lat: 40.86176330000001,
    lng: -73.9172183
  }, {
    lat: 40.8625836,
    lng: -73.9160198
  }, {
    lat: 40.862908999999995,
    lng: -73.9156741
  }, {
    lat: 40.862933,
    lng: -73.9155373
  }, {
    lat: 40.8632088,
    lng: -73.9153347
  }, {
    lat: 40.86326139999999,
    lng: -73.9154105
  }, {
    lat: 40.8634014,
    lng: -73.91544300000001
  }, {
    lat: 40.8637066,
    lng: -73.9151589
  }, {
    lat: 40.8640013,
    lng: -73.9151509
  }, {
    lat: 40.864104,
    lng: -73.91543660000002
  }, {
    lat: 40.864171500000005,
    lng: -73.9158048
  }, {
    lat: 40.86434729999999,
    lng: -73.9158923
  }, {
    lat: 40.864495999999995,
    lng: -73.9149973
  }, {
    lat: 40.86461099999999,
    lng: -73.9148609
  }, {
    lat: 40.86467319999999,
    lng: -73.9142524
  }, {
    lat: 40.864789,
    lng: -73.9139038
  }, {
    lat: 40.8665792,
    lng: -73.91251710000002
  }, {
    lat: 40.8666589,
    lng: -73.9126928
  }, {
    lat: 40.86772920000001,
    lng: -73.9118365
  }, {
    lat: 40.8686818,
    lng: -73.9113074
  }, {
    lat: 40.8691259,
    lng: -73.9110312
  }, {
    lat: 40.86927089999999,
    lng: -73.9111076
  }, {
    lat: 40.86944100000001,
    lng: -73.91143250000002
  }, {
    lat: 40.8695342,
    lng: -73.9114019
  }, {
    lat: 40.8695605,
    lng: -73.9113275
  }, {
    lat: 40.86943569999999,
    lng: -73.9109685
  }, {
    lat: 40.8702683,
    lng: -73.9107596
  }, {
    lat: 40.8710145,
    lng: -73.9106822
  }, {
    lat: 40.871501,
    lng: -73.9104009
  }, {
    lat: 40.8721623,
    lng: -73.9105457
  }, {
    lat: 40.873286,
    lng: -73.9114309
  }, {
    lat: 40.873572,
    lng: -73.9119351
  }, {
    lat: 40.8739392,
    lng: -73.912847
  }, {
    lat: 40.874714,
    lng: -73.915851
  }, {
    lat: 40.874360700000004,
    lng: -73.9171176
  }, {
    lat: 40.8737664,
    lng: -73.91830300000001
  }, {
    lat: 40.873448,
    lng: -73.9186409
  }, {
    lat: 40.873279700000005,
    lng: -73.9184156
  }, {
    lat: 40.8732361,
    lng: -73.9184532
  }, {
    lat: 40.8733969,
    lng: -73.918928
  }, {
    lat: 40.8736144,
    lng: -73.919156
  }, {
    lat: 40.8738742,
    lng: -73.9192526
  }, {
    lat: 40.87424519999999,
    lng: -73.9191611
  }, {
    lat: 40.87476229999999,
    lng: -73.9189032
  }, {
    lat: 40.875492,
    lng: -73.920743
  }, {
    lat: 40.87544330000001,
    lng: -73.9210274
  }, {
    lat: 40.8751999,
    lng: -73.9211883
  }, {
    lat: 40.8747659,
    lng: -73.9208948
  }, {
    lat: 40.8743157,
    lng: -73.9206763
  }, {
    lat: 40.873902,
    lng: -73.920057
  }, {
    lat: 40.87375599999999,
    lng: -73.9199444
  }, {
    lat: 40.8734153,
    lng: -73.9200115
  }, {
    lat: 40.8731679,
    lng: -73.9203026
  }, {
    lat: 40.8730543,
    lng: -73.9207438
  }, {
    lat: 40.87325500000001,
    lng: -73.9214842
  }, {
    lat: 40.87366670000001,
    lng: -73.9220797
  }, {
    lat: 40.874332300000006,
    lng: -73.9225435
  }, {
    lat: 40.8748316,
    lng: -73.9226694
  }, {
    lat: 40.8752958,
    lng: -73.9225917
  }, {
    lat: 40.8762182,
    lng: -73.9223316
  }, {
    lat: 40.8767599,
    lng: -73.9224336
  }, {
    lat: 40.87713130000001,
    lng: -73.9227716
  }, {
    lat: 40.87734240000001,
    lng: -73.92349
  }, {
    lat: 40.8775007,
    lng: -73.9247234
  }, {
    lat: 40.877166,
    lng: -73.9256246
  }, {
    lat: 40.8771365,
    lng: -73.926255
  }, {
    lat: 40.87726930000001,
    lng: -73.9264239
  }, {
    lat: 40.8773707,
    lng: -73.9264441
  }, {
    lat: 40.87761,
    lng: -73.9262712
  }, {
    lat: 40.8777153,
    lng: -73.9264404
  }, {
    lat: 40.8770905,
    lng: -73.9271218
  }, {
    lat: 40.8768268,
    lng: -73.9274959
  }, {
    lat: 40.8766767,
    lng: -73.9280525
  }, {
    lat: 40.8756624,
    lng: -73.9291817
  }, {
    lat: 40.8738045,
    lng: -73.9304102
  }, {
    lat: 40.87100170000001,
    lng: -73.93205730000001
  }, {
    lat: 40.8700385,
    lng: -73.9322262
  }, {
    lat: 40.869501299999996,
    lng: -73.9325078
  }, {
    lat: 40.8694141,
    lng: -73.9322475
  }, {
    lat: 40.869265,
    lng: -73.9323212
  }, {
    lat: 40.8693677,
    lng: -73.9317889
  }, {
    lat: 40.86564289999999,
    lng: -73.9272454
  }, {
    lat: 40.8590505,
    lng: -73.9229679
  }, {
    lat: 40.858259399999994,
    lng: -73.9210493
  }],
  color: 'FF9900',
  center: {
    lat: 40.86798734999999,
    lng: -73.92145434999998
  },
  summary: "Inwood is the northernmost neighborhood on the island of Manhattan, but not the northernmost neighborhood of the borough of Manhattan. That distinction is held by <a target='_blank' href='https://en.wikipedia.org/wiki/Marble_Hill,_Manhattan,_New_York'>Marble Hill</a>, situated just north of Inwood. Because of its water boundary on three sides, the hilly geography, and the limited local street connections, the neighborhood can feel somewhat physically detached from the rest of the borough. Inwood is moderately large in area for a Manhattan neighborhood, and its real estate is sharply divided between east and west. The area east of Broadway is more lower-income and industrial, with few parks and trees. <a target='_blank' href='https://en.wikipedia.org/wiki/Inwood_Hill_Park'>Inwood Hill Park</a>, on the Hudson River, is known for its its caves that were used by the <a target='_blank' href='https://en.wikipedia.org/wiki/Lenape'>Lenape</a> Native Americans. The park is home to Manhattan's last <a target='_blank' href='https://en.wikipedia.org/wiki/Old-growth_forest'>natural wooded area</a> and the last natural <a target='_blank' href='https://en.wikipedia.org/wiki/Salt_marsh'>salt marsh</a>. It is a goldmine for birdwatchers and animal lovers. <a target='_blank' href='https://en.wikipedia.org/wiki/Red-tailed_hawk'>Red-tailed hawks</a>, owls, <a target='_blank' href='https://en.wikipedia.org/wiki/Bald_eagle'>bald eagles</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Wild_turkey'>wild turkeys</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Opossum'>opossums</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Cottontail_rabbit'>cottontail rabbits</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Raccoon'>raccoons</a>, <a target='_blank' href='https://en.wikipedia.org/wiki/Southern_flying_squirrel'>flying squirrels</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Salamander'>salamanders</a> all can be found here."
}, {
  name: 'Turtle Bay',
  borough: 'Manhattan',
  coords: [{
    lat: 40.74798009999999,
    lng: -73.9678965
  }, {
    lat: 40.754751,
    lng: -73.962003
  }, {
    lat: 40.755222,
    lng: -73.961488
  }, {
    lat: 40.759042,
    lng: -73.970543
  }, {
    lat: 40.750817,
    lng: -73.976594
  }, {
    lat: 40.74730619999999,
    lng: -73.9684827
  }, {
    lat: 40.74798009999999,
    lng: -73.9678965
  }],
  color: 'CCCCFF',
  center: {
    lat: 40.753174099999995,
    lng: -73.969041
  }
}, {
  name: 'Manhattan Valley',
  borough: 'Manhattan',
  coords: [{
    lat: 40.8004849,
    lng: -73.9582524
  }, {
    lat: 40.8041458,
    lng: -73.9667382
  }, {
    lat: 40.802668,
    lng: -73.9677789
  }, {
    lat: 40.800329,
    lng: -73.968079
  }, {
    lat: 40.799224,
    lng: -73.968465
  }, {
    lat: 40.794611,
    lng: -73.971856
  }, {
    lat: 40.7916136,
    lng: -73.96474740000001
  }, {
    lat: 40.8004849,
    lng: -73.9582524
  }],
  color: 'FFCCFF',
  center: {
    lat: 40.797879699999996,
    lng: -73.9650542
  }
}, {
  name: 'Lincoln Square',
  borough: 'Manhattan',
  coords: [{
    lat: 40.781331099999996,
    lng: -73.988247
  }, {
    lat: 40.78014399999999,
    lng: -73.98904
  }, {
    lat: 40.779892,
    lng: -73.989018
  }, {
    lat: 40.779765000000005,
    lng: -73.99147000000002
  }, {
    lat: 40.779582999999995,
    lng: -73.991571
  }, {
    lat: 40.77970899999999,
    lng: -73.988911
  }, {
    lat: 40.777633,
    lng: -73.99044
  }, {
    lat: 40.777584,
    lng: -73.990976
  }, {
    lat: 40.77547200000001,
    lng: -73.992451
  }, {
    lat: 40.775483,
    lng: -73.992245
  }, {
    lat: 40.775420000000004,
    lng: -73.992242
  }, {
    lat: 40.775401,
    lng: -73.992366
  }, {
    lat: 40.775338,
    lng: -73.992346
  }, {
    lat: 40.775292,
    lng: -73.992219
  }, {
    lat: 40.775096,
    lng: -73.992384
  }, {
    lat: 40.775005,
    lng: -73.992629
  }, {
    lat: 40.773181,
    lng: -73.993932
  }, {
    lat: 40.774131000000004,
    lng: -73.99612
  }, {
    lat: 40.773902,
    lng: -73.996254
  }, {
    lat: 40.769202,
    lng: -73.98483
  }, {
    lat: 40.769892,
    lng: -73.984314
  }, {
    lat: 40.768968,
    lng: -73.982274
  }, {
    lat: 40.76861799999999,
    lng: -73.982223
  }, {
    lat: 40.768622,
    lng: -73.981834
  }, {
    lat: 40.76849500000001,
    lng: -73.98157
  }, {
    lat: 40.776203,
    lng: -73.97595
  }, {
    lat: 40.781331099999996,
    lng: -73.988247
  }],
  color: 'FF9900',
  center: {
    lat: 40.77491305,
    lng: -73.98610200000002
  }
}, {
  name: 'Lenox Hill',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7743502,
    lng: -73.9615346
  }, {
    lat: 40.7635276,
    lng: -73.969363
  }, {
    lat: 40.7588631,
    lng: -73.9581732
  }, {
    lat: 40.7593996,
    lng: -73.9574719
  }, {
    lat: 40.762374,
    lng: -73.95426
  }, {
    lat: 40.7664121,
    lng: -73.9506336
  }, {
    lat: 40.7688537,
    lng: -73.9485951
  }, {
    lat: 40.7743502,
    lng: -73.9615346
  }],
  color: 'FF9900',
  center: {
    lat: 40.76579410000001,
    lng: -73.96189730000003
  }
}, {
  name: 'Yorkville',
  borough: 'Manhattan',
  coords: [{
    lat: 40.770207000000006,
    lng: -73.947351
  }, {
    lat: 40.774107,
    lng: -73.943489
  }, {
    lat: 40.776219000000005,
    lng: -73.941944
  }, {
    lat: 40.777162,
    lng: -73.942072
  }, {
    lat: 40.780509,
    lng: -73.943832
  }, {
    lat: 40.78171100000001,
    lng: -73.943918
  }, {
    lat: 40.7828159,
    lng: -73.943617
  }, {
    lat: 40.785286,
    lng: -73.949411
  }, {
    lat: 40.7742689,
    lng: -73.957264
  }, {
    lat: 40.770207000000006,
    lng: -73.947351
  }],
  color: 'FFCCCC',
  center: {
    lat: 40.777746500000006,
    lng: -73.94960400000002
  }
}, {
  name: "Randall's Island",
  borough: 'Manhattan',
  coords: [{
    lat: 40.784376,
    lng: -73.936193
  }, {
    lat: 40.7830439,
    lng: -73.935163
  }, {
    lat: 40.78249100000001,
    lng: -73.931129
  }, {
    lat: 40.781094,
    lng: -73.928254
  }, {
    lat: 40.781126,
    lng: -73.927267
  }, {
    lat: 40.782329,
    lng: -73.9257219
  }, {
    lat: 40.782329,
    lng: -73.924434
  }, {
    lat: 40.783531,
    lng: -73.922803
  }, {
    lat: 40.78570800000001,
    lng: -73.92207400000001
  }, {
    lat: 40.78938,
    lng: -73.918469
  }, {
    lat: 40.789802,
    lng: -73.91851200000002
  }, {
    lat: 40.790452,
    lng: -73.917267
  }, {
    lat: 40.79045200000001,
    lng: -73.9165809
  }, {
    lat: 40.791427,
    lng: -73.916023
  }, {
    lat: 40.793864,
    lng: -73.913748
  }, {
    lat: 40.7945459,
    lng: -73.91379100000002
  }, {
    lat: 40.797112,
    lng: -73.915122
  }, {
    lat: 40.799289,
    lng: -73.920228
  }, {
    lat: 40.80143300000001,
    lng: -73.921902
  }, {
    lat: 40.80192099999999,
    lng: -73.92276
  }, {
    lat: 40.80208300000001,
    lng: -73.92555
  }, {
    lat: 40.798379000000004,
    lng: -73.927696
  }, {
    lat: 40.796625,
    lng: -73.927052
  }, {
    lat: 40.795001,
    lng: -73.927095
  }, {
    lat: 40.792856,
    lng: -73.928554
  }, {
    lat: 40.792174,
    lng: -73.928297
  }, {
    lat: 40.791817,
    lng: -73.927095
  }, {
    lat: 40.791037,
    lng: -73.928039
  }, {
    lat: 40.791459,
    lng: -73.929756
  }, {
    lat: 40.790842000000005,
    lng: -73.93121500000001
  }, {
    lat: 40.785741,
    lng: -73.935721
  }, {
    lat: 40.784376,
    lng: -73.936193
  }],
  color: '009900',
  center: {
    lat: 40.7915885,
    lng: -73.92497049999997
  }
}, {
  name: 'West Village',
  borough: 'Manhattan',
  coords: [{
    lat: 40.739454,
    lng: -74.006549
  }, {
    lat: 40.739388,
    lng: -74.010034
  }, {
    lat: 40.7387622,
    lng: -74.0100842
  }, {
    lat: 40.7378762,
    lng: -74.0099716
  }, {
    lat: 40.729129,
    lng: -74.01071200000001
  }, {
    lat: 40.728332,
    lng: -74.002966
  }, {
    lat: 40.731405,
    lng: -74.001228
  }, {
    lat: 40.737405,
    lng: -73.996893
  }, {
    lat: 40.740965,
    lng: -74.005369
  }, {
    lat: 40.739454,
    lng: -74.006549
  }],
  color: 'FF9900',
  center: {
    lat: 40.734648500000006,
    lng: -74.0038025
  },
  summary: "Primarily residential, with a multitude of small restaurants, shops and services. Known as &quot;Little Bohemia&quot; starting in 1916, West Village is the center of the <a target='_blank' href='https://en.wikipedia.org/wiki/Bohemianism'>bohemian</a> lifestyle on the West Side, with classic artist's lofts and new residential towers. The neighborhood is distinguished by streets that are &quot;off the grid&quot; — set at an angle to the other streets in Manhattan — sometimes confusing both tourists and city residents alike. These roads were laid out in an 18th century <a target='_blank' href='https://en.wikipedia.org/wiki/Grid_plan'>grid plan</a>, approximately parallel or perpendicular to the <a target='_blank' href='https://en.wikipedia.org/wiki/Hudson_River'>Hudson</a>, long before the <a target='_blank' href='https://en.wikipedia.org/wiki/Commissioners%27_Plan_of_1811'>Commissioners' Plan of 1811</a> which created the main street grid plan for later parts of the city."
}, {
  name: 'NoMad',
  borough: 'Manhattan',
  coords: [{
    lat: 40.744217,
    lng: -73.991902
  }, {
    lat: 40.742827,
    lng: -73.988609
  }, {
    lat: 40.743461,
    lng: -73.98818
  }, {
    lat: 40.742778,
    lng: -73.986581
  }, {
    lat: 40.742177,
    lng: -73.987032
  }, {
    lat: 40.7408113,
    lng: -73.9838505
  }, {
    lat: 40.7439079,
    lng: -73.9816131
  }, {
    lat: 40.7473183,
    lng: -73.9896814
  }, {
    lat: 40.744217,
    lng: -73.991902
  }],
  color: '0BA9CC',
  center: {
    lat: 40.7444367,
    lng: -73.98761049999996
  },
  summary: "NoMad's history shares much with <a target='_blank' href='https://en.wikipedia.org/wiki/Madison_Square_Park'>Madison Square Park</a> to the south, from which the neighborhood gets its name (<strong>No</strong>th of <strong>Mad</strong>ison Square Park). The park was once a military parade ground, and is still the starting point of the annual Veteran's Day Parade. Private brownstones and mansions appeared around the park starting in mid-19th century. Several <a target='_blank' href='https://en.wikipedia.org/wiki/Gentlemen%27s_club'>private social clubs</a> were located here, including the Manhattan Club which gave birth to the popular <a target='_blank' href='https://en.wikipedia.org/wiki/Manhattan_(cocktail)'>Manhattan cocktail</a>. Nearing the 20th century, businesses overtook the residential scene, giving way to the <a target='_blank' href='https://en.wikipedia.org/wiki/Tenderloin,_Manhattan'>Tenderloin red-light district</a>. The world's first <a target='_blank' href='https://en.wikipedia.org/wiki/Kinetoscope'>kintoscope</a> parlor opened in 1894 on 27th and Broadway. By the turn of 20th century, NoMad was home to <a target='_blank' href='https://en.wikipedia.org/wiki/Tin_Pan_Alley'>Tin Pan Alley</a>, where the most prominent American music publishers and songwriters conveined. NoMad features several cultural gems such as the New York Comedy Club and the <a target='_blank' href='https://en.wikipedia.org/wiki/Museum_of_Sex'>Museum of Sex</a>. The Evelyn hotel, a tribute to pop artist <a target='_blank' href='https://en.wikipedia.org/wiki/Andy_Warhol'>Andy Warhol</a>, is also located here."
}, {
  name: 'Tudor City',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7485659,
    lng: -73.973116
  }, {
    lat: 40.747574,
    lng: -73.970799
  }, {
    lat: 40.749573,
    lng: -73.969393
  }, {
    lat: 40.750508,
    lng: -73.971754
  }, {
    lat: 40.7485659,
    lng: -73.973116
  }],
  color: '990000',
  center: {
    lat: 40.749041000000005,
    lng: -73.97125449999999
  }
}, {
  name: 'Diamond District',
  borough: 'Manhattan',
  coords: [{
    lat: 40.757758,
    lng: -73.982066
  }, {
    lat: 40.756392000000005,
    lng: -73.978869
  }, {
    lat: 40.757034,
    lng: -73.978393
  }, {
    lat: 40.758375,
    lng: -73.98159
  }, {
    lat: 40.757758,
    lng: -73.982066
  }],
  color: '000099',
  center: {
    lat: 40.7573835,
    lng: -73.98022950000001
  },
  summary: "The area is one of the primary centers of the global diamond industry. It was created when dealers moved north from an earlier district near <a target='_blank' href='https://en.wikipedia.org/wiki/Canal_Street_%28Manhattan%29'>Canal Street</a> and the <a target='_blank' href='https://en.wikipedia.org/wiki/Bowery'>Bowery</a>, and from the <a target='_blank' href='https://en.wikipedia.org/wiki/Financial_District,_Manhattan'>Financial District</a>. It grew in importance when the <a target='_blank' href='https://en.wikipedia.org/wiki/Nazis'>German Nazis</a> invaded the <a target='_blank' href='https://en.wikipedia.org/wiki/Netherlands'>Netherlands</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Belgium'>Belgium</a>, forcing thousands of <a target='_blank' href='https://en.wikipedia.org/wiki/Orthodox_Jews'>Orthodox Jews</a> in the diamond business to flee to New York City. An estimated 90% of diamonds in the United States enter through this area. Total receipts for the value of a single day's trade on the block average $400 million."
}, {
  name: 'Roosevelt Island',
  borough: 'Manhattan',
  coords: [{
    lat: 40.750077,
    lng: -73.961518
  }, {
    lat: 40.749573,
    lng: -73.961658
  }, {
    lat: 40.749435000000005,
    lng: -73.961508
  }, {
    lat: 40.7495,
    lng: -73.961132
  }, {
    lat: 40.750045,
    lng: -73.960714
  }, {
    lat: 40.75087400000001,
    lng: -73.959534
  }, {
    lat: 40.75140999999999,
    lng: -73.959029
  }, {
    lat: 40.752182,
    lng: -73.957871
  }, {
    lat: 40.753206,
    lng: -73.956723
  }, {
    lat: 40.754791,
    lng: -73.955231
  }, {
    lat: 40.75487300000001,
    lng: -73.955038
  }, {
    lat: 40.7561729,
    lng: -73.953525
  }, {
    lat: 40.75750599999999,
    lng: -73.952259
  }, {
    lat: 40.758262,
    lng: -73.951938
  }, {
    lat: 40.7589929,
    lng: -73.951111
  }, {
    lat: 40.760131,
    lng: -73.950071
  }, {
    lat: 40.7607,
    lng: -73.94932
  }, {
    lat: 40.76245500000001,
    lng: -73.94785
  }, {
    lat: 40.7659,
    lng: -73.944835
  }, {
    lat: 40.7684349,
    lng: -73.9427429
  }, {
    lat: 40.769256000000006,
    lng: -73.941466
  }, {
    lat: 40.76946699999999,
    lng: -73.941101
  }, {
    lat: 40.77046690000001,
    lng: -73.940404
  }, {
    lat: 40.77088100000001,
    lng: -73.940211
  }, {
    lat: 40.772409,
    lng: -73.94030700000002
  }, {
    lat: 40.77294499999999,
    lng: -73.940018
  }, {
    lat: 40.773018,
    lng: -73.94030700000002
  }, {
    lat: 40.772538999999995,
    lng: -73.940629
  }, {
    lat: 40.77235199999999,
    lng: -73.941252
  }, {
    lat: 40.772068,
    lng: -73.942153
  }, {
    lat: 40.77176690000001,
    lng: -73.94247500000002
  }, {
    lat: 40.7708889,
    lng: -73.943312
  }, {
    lat: 40.77001200000001,
    lng: -73.944438
  }, {
    lat: 40.769784,
    lng: -73.944749
  }, {
    lat: 40.769134,
    lng: -73.9451349
  }, {
    lat: 40.768793,
    lng: -73.945286
  }, {
    lat: 40.768817,
    lng: -73.945575
  }, {
    lat: 40.76870399999999,
    lng: -73.945683
  }, {
    lat: 40.768687,
    lng: -73.945543
  }, {
    lat: 40.768387,
    lng: -73.945736
  }, {
    lat: 40.768167,
    lng: -73.946069
  }, {
    lat: 40.767574,
    lng: -73.946369
  }, {
    lat: 40.766266,
    lng: -73.947549
  }, {
    lat: 40.76425100000001,
    lng: -73.949084
  }, {
    lat: 40.764202000000004,
    lng: -73.94933
  }, {
    lat: 40.7634789,
    lng: -73.950157
  }, {
    lat: 40.76209699999999,
    lng: -73.951305
  }, {
    lat: 40.761699,
    lng: -73.951626
  }, {
    lat: 40.760878,
    lng: -73.952098
  }, {
    lat: 40.759976,
    lng: -73.952978
  }, {
    lat: 40.760049,
    lng: -73.953118
  }, {
    lat: 40.75981399999999,
    lng: -73.953407
  }, {
    lat: 40.759732,
    lng: -73.953332
  }, {
    lat: 40.759399,
    lng: -73.953729
  }, {
    lat: 40.759172,
    lng: -73.953944
  }, {
    lat: 40.757815,
    lng: -73.95507
  }, {
    lat: 40.75704300000001,
    lng: -73.955639
  }, {
    lat: 40.75662,
    lng: -73.956057
  }, {
    lat: 40.754499,
    lng: -73.958042
  }, {
    lat: 40.753605,
    lng: -73.958911
  }, {
    lat: 40.753564,
    lng: -73.959083
  }, {
    lat: 40.75302799999999,
    lng: -73.95948
  }, {
    lat: 40.751857,
    lng: -73.959984
  }, {
    lat: 40.7507189,
    lng: -73.961079
  }, {
    lat: 40.7505,
    lng: -73.961121
  }, {
    lat: 40.75039399999999,
    lng: -73.961207
  }, {
    lat: 40.7501589,
    lng: -73.961197
  }, {
    lat: 40.750077,
    lng: -73.961518
  }],
  color: '0000FF',
  center: {
    lat: 40.76122650000001,
    lng: -73.95083799999998
  }
}, {
  name: 'Marble Hill',
  borough: 'Manhattan',
  coords: [{
    lat: 40.874745999999995,
    lng: -73.91219600000001
  }, {
    lat: 40.874186,
    lng: -73.910855
  }, {
    lat: 40.873788999999995,
    lng: -73.910276
  }, {
    lat: 40.872815,
    lng: -73.909364
  }, {
    lat: 40.872247,
    lng: -73.90902
  }, {
    lat: 40.87352899999999,
    lng: -73.90769
  }, {
    lat: 40.876239,
    lng: -73.907111
  }, {
    lat: 40.877594,
    lng: -73.908044
  }, {
    lat: 40.878421,
    lng: -73.909321
  }, {
    lat: 40.879013,
    lng: -73.909353
  }, {
    lat: 40.879484,
    lng: -73.911166
  }, {
    lat: 40.878754,
    lng: -73.9117349
  }, {
    lat: 40.876588000000005,
    lng: -73.915147
  }, {
    lat: 40.875679,
    lng: -73.915554
  }, {
    lat: 40.874745999999995,
    lng: -73.91219600000001
  }],
  color: 'FFCC00',
  center: {
    lat: 40.8758655,
    lng: -73.91133249999996
  }
}, {
  name: 'Rose Hill',
  borough: 'Manhattan',
  coords: [{
    lat: 40.7388279,
    lng: -73.9831796
  }, {
    lat: 40.7444528,
    lng: -73.9790598
  }, {
    lat: 40.746493,
    lng: -73.9838824
  }, {
    lat: 40.7408642,
    lng: -73.9879922
  }, {
    lat: 40.7388279,
    lng: -73.9831796
  }],
  color: '666666',
  center: {
    lat: 40.742693,
    lng: -73.98347999999999
  }
}, {
  name: 'Restaurant Row',
  borough: 'Manhattan',
  coords: [{
    lat: 40.760667000000005,
    lng: -73.990992
  }, {
    lat: 40.759464,
    lng: -73.98815990000001
  }, {
    lat: 40.760131,
    lng: -73.987645
  }, {
    lat: 40.761301,
    lng: -73.99052000000002
  }, {
    lat: 40.760667000000005,
    lng: -73.990992
  }],
  color: 'FF9900',
  center: {
    lat: 40.760382500000006,
    lng: -73.98931849999997
  }
}, {
  name: 'Liberty Island',
  borough: 'Manhattan',
  coords: [{
    lat: 40.6904537,
    lng: -74.0471649
  }, {
    lat: 40.6903886,
    lng: -74.0472829
  }, {
    lat: 40.6900144,
    lng: -74.0469718
  }, {
    lat: 40.6897622,
    lng: -74.0475243
  }, {
    lat: 40.6899412,
    lng: -74.0476853
  }, {
    lat: 40.689880200000005,
    lng: -74.047814
  }, {
    lat: 40.6895792,
    lng: -74.0475619
  }, {
    lat: 40.6899087,
    lng: -74.0468752
  }, {
    lat: 40.6892985,
    lng: -74.0463603
  }, {
    lat: 40.6885623,
    lng: -74.0448958
  }, {
    lat: 40.6884809,
    lng: -74.0444613
  }, {
    lat: 40.688546,
    lng: -74.0440482
  }, {
    lat: 40.6887087,
    lng: -74.0437478
  }, {
    lat: 40.689139899999994,
    lng: -74.0436029
  }, {
    lat: 40.6895995,
    lng: -74.04356
  }, {
    lat: 40.6899534,
    lng: -74.0427715
  }, {
    lat: 40.6898883,
    lng: -74.0427017
  }, {
    lat: 40.6899249,
    lng: -74.0426373
  }, {
    lat: 40.6899981,
    lng: -74.04268560000001
  }, {
    lat: 40.6900592,
    lng: -74.0427393
  }, {
    lat: 40.690103900000004,
    lng: -74.0427983
  }, {
    lat: 40.6900754,
    lng: -74.0428573
  }, {
    lat: 40.6900022,
    lng: -74.0428036
  }, {
    lat: 40.6896565,
    lng: -74.0435869
  }, {
    lat: 40.69016489999999,
    lng: -74.0440106
  }, {
    lat: 40.6905066,
    lng: -74.0446544
  }, {
    lat: 40.6910801,
    lng: -74.0461242
  }, {
    lat: 40.6910882,
    lng: -74.0462261
  }, {
    lat: 40.69105570000001,
    lng: -74.0462583
  }, {
    lat: 40.691015,
    lng: -74.0472025
  }, {
    lat: 40.6908808,
    lng: -74.0473151
  }, {
    lat: 40.690742500000006,
    lng: -74.0473098
  }, {
    lat: 40.6906164,
    lng: -74.0471864
  }, {
    lat: 40.6904537,
    lng: -74.0471649
  }],
  color: '777777',
  center: {
    lat: 40.68978455,
    lng: -74.04522565000002
  }
}, {
  name: 'Ellis Island',
  borough: 'Manhattan',
  coords: [{
    lat: 40.6980148,
    lng: -74.0438175
  }, {
    lat: 40.6963961,
    lng: -74.0417361
  }, {
    lat: 40.697665,
    lng: -74.0399873
  }, {
    lat: 40.6991048,
    lng: -74.0418005
  }, {
    lat: 40.6994708,
    lng: -74.0413177
  }, {
    lat: 40.6980636,
    lng: -74.039408
  }, {
    lat: 40.6983239,
    lng: -74.0390754
  }, {
    lat: 40.6983239,
    lng: -74.0382814
  }, {
    lat: 40.6990153,
    lng: -74.0381634
  }, {
    lat: 40.6992919,
    lng: -74.0377772
  }, {
    lat: 40.700576999999996,
    lng: -74.0394616
  }, {
    lat: 40.7005201,
    lng: -74.0395689
  }, {
    lat: 40.7008942,
    lng: -74.0400195
  }, {
    lat: 40.7002435,
    lng: -74.0408778
  }, {
    lat: 40.700455,
    lng: -74.0411353
  }, {
    lat: 40.6989909,
    lng: -74.043088
  }, {
    lat: 40.6987469,
    lng: -74.0428519
  }, {
    lat: 40.6980148,
    lng: -74.0438175
  }],
  color: '7C3592',
  center: {
    lat: 40.699582,
    lng: -74.039916
  }
}, {
  name: 'Governors Island',
  borough: 'Manhattan',
  coords: [{
    lat: 40.6863332,
    lng: -74.0264797
  }, {
    lat: 40.685226699999994,
    lng: -74.0266943
  }, {
    lat: 40.68431549999999,
    lng: -74.0260935
  }, {
    lat: 40.6838599,
    lng: -74.0246773
  }, {
    lat: 40.6838925,
    lng: -74.023304
  }, {
    lat: 40.686853799999994,
    lng: -74.0170383
  }, {
    lat: 40.6872118,
    lng: -74.0159655
  }, {
    lat: 40.68717929999999,
    lng: -74.014678
  }, {
    lat: 40.6880253,
    lng: -74.013133
  }, {
    lat: 40.6891643,
    lng: -74.01223180000001
  }, {
    lat: 40.6911492,
    lng: -74.0123177
  }, {
    lat: 40.6928413,
    lng: -74.014163
  }, {
    lat: 40.6933619,
    lng: -74.0166092
  }, {
    lat: 40.6931342,
    lng: -74.018755
  }, {
    lat: 40.693166700000006,
    lng: -74.0196991
  }, {
    lat: 40.6917675,
    lng: -74.0205145
  }, {
    lat: 40.6863332,
    lng: -74.0264797
  }],
  color: '009D57',
  center: {
    lat: 40.6886109,
    lng: -74.01946305000001
  }
}]);
"use strict";

window.neighborhoods = window.neighborhoods || [];
neighborhoods = neighborhoods.concat([{
  name: 'Dumbo',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.7016692,
    lng: -73.991057
  }, {
    lat: 40.701309,
    lng: -73.9878379
  }, {
    lat: 40.7011054,
    lng: -73.9866653
  }, {
    lat: 40.700593,
    lng: -73.9853795
  }, {
    lat: 40.7005523,
    lng: -73.9848306
  }, {
    lat: 40.7043345,
    lng: -73.9845953
  }, {
    lat: 40.7044078,
    lng: -73.9864629
  }, {
    lat: 40.7046519,
    lng: -73.986423
  }, {
    lat: 40.7046519,
    lng: -73.9866513
  }, {
    lat: 40.7051645,
    lng: -73.9866252
  }, {
    lat: 40.7050793,
    lng: -73.9882187
  }, {
    lat: 40.7046481,
    lng: -73.9882562
  }, {
    lat: 40.704587,
    lng: -73.98846
  }, {
    lat: 40.7045969,
    lng: -73.9890341
  }, {
    lat: 40.7047094,
    lng: -73.9893741
  }, {
    lat: 40.704891,
    lng: -73.989623
  }, {
    lat: 40.704992,
    lng: -73.9901581
  }, {
    lat: 40.7047006,
    lng: -73.990448
  }, {
    lat: 40.7045098,
    lng: -73.9904348
  }, {
    lat: 40.7042883,
    lng: -73.9908313
  }, {
    lat: 40.704083,
    lng: -73.990906
  }, {
    lat: 40.7040341,
    lng: -73.9912014
  }, {
    lat: 40.704099,
    lng: -73.991765
  }, {
    lat: 40.7044698,
    lng: -73.9921352
  }, {
    lat: 40.7046901,
    lng: -73.9921406
  }, {
    lat: 40.704622,
    lng: -73.9936319
  }, {
    lat: 40.70444,
    lng: -73.99434
  }, {
    lat: 40.704119,
    lng: -73.9948026
  }, {
    lat: 40.7038305,
    lng: -73.9950506
  }, {
    lat: 40.7037577,
    lng: -73.9949312
  }, {
    lat: 40.7036442,
    lng: -73.9950209
  }, {
    lat: 40.7035653,
    lng: -73.9948478
  }, {
    lat: 40.7034376,
    lng: -73.9947016
  }, {
    lat: 40.7033172,
    lng: -73.9948246
  }, {
    lat: 40.7035684,
    lng: -73.995312
  }, {
    lat: 40.703286,
    lng: -73.995434
  }, {
    lat: 40.7030929,
    lng: -73.9949061
  }, {
    lat: 40.703123,
    lng: -73.994894
  }, {
    lat: 40.701903,
    lng: -73.992044
  }, {
    lat: 40.7016732,
    lng: -73.9917882
  }, {
    lat: 40.7016692,
    lng: -73.991057
  }],
  color: 'FF99FF',
  center: {
    lat: 40.70326,
    lng: -73.99089849999996
  },
  summary: "Dumbo (short for <b>D</b>own <b>U</b>nderneath the <b>M</b>anhattan <b>B</b>ridge <b>O</b>verpass) encompasses the area where the <a href='https://en.wikipedia.org/wiki/Manhattan_Bridge' target='_blank'>Manhattan</a> and <a href='https://en.wikipedia.org/wiki/Brooklyn_Bridge' target='_blank'>Brooklyn Bridges</a> meet in Brooklyn. Historically it has served as one of New York's premier manufacturing districts. Following the deindustrialization of New York, it began to attract young artists in the late 1970s, before being purchased in its entirety by <a href='https://en.wikipedia.org/wiki/David_Walentas' target='_blank'>David Walentas</a> and his company in the late 20th century. Since then, it has become one of the most expensive neighborhoods in Brooklyn and home to New York's largest concentration of technology <a href='https://en.wikipedia.org/wiki/Startup_company' target='_blank'>startups</a>. Many of the former industrial buildings still stand today as luxury residential lofts. The <a href='https://en.wikipedia.org/wiki/Belgian_block' target='_blank'>Belgian block</a> streets and abandoned street railways give the neighborhood a unique character compared to much of New York and a glimpse into its industrial past, while the <a href='https://en.wikipedia.org/wiki/Brooklyn_Bridge_Park' target='_blank'>Brooklyn Bridge Park</a> and <a href='https://en.wikipedia.org/wiki/Fulton_Ferry,_Brooklyn' target='_blank'>Fulton Ferry landing</a> offer stunning views of <a href='https://en.wikipedia.org/wiki/Lower_Manhattan' target='_blank'>Lower Manhattan</a>. Dumbo is home to <a href='https://en.wikipedia.org/wiki/Grimaldi's_Pizzeria' target='_blank'>Grimaldi's</a>, one of New York's most famous pizzerias, <a href='https://en.wikipedia.org/wiki/Jacques_Torres' target='_blank'>Jacques Torres</a>' chocolate factory, the <a href='https://en.wikipedia.org/wiki/Brooklyn_Ice_Cream_Factory' target='_blank'>Brooklyn Ice Cream Factory</a>, and <a href='https://en.wikipedia.org/wiki/Bargemusic' target='_blank'>Bargemusic</a>, a floating <a href='https://en.wikipedia.org/wiki/Classical_music' target='_blank'>classical music</a> venue. The Dumbo Historic District was designated on the <a href='https://en.wikipedia.org/wiki/National_Register_of_Historic_Places' target='_blank'>National Register of Historic Places</a> in 2000."
}, {
  name: 'Vinegar Hill',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.7054166,
    lng: -73.9863785
  }, {
    lat: 40.7044078,
    lng: -73.9864629
  }, {
    lat: 40.7043345,
    lng: -73.9845953
  }, {
    lat: 40.7005523,
    lng: -73.9848306
  }, {
    lat: 40.700593,
    lng: -73.9853795
  }, {
    lat: 40.6982464,
    lng: -73.9827098
  }, {
    lat: 40.698145,
    lng: -73.980328
  }, {
    lat: 40.7007723,
    lng: -73.9801664
  }, {
    lat: 40.701492,
    lng: -73.9806927
  }, {
    lat: 40.7019091,
    lng: -73.9805297
  }, {
    lat: 40.7018544,
    lng: -73.979884
  }, {
    lat: 40.7022698,
    lng: -73.9798049
  }, {
    lat: 40.7019454,
    lng: -73.9778657
  }, {
    lat: 40.7041709,
    lng: -73.9772139
  }, {
    lat: 40.704298,
    lng: -73.9779998
  }, {
    lat: 40.7050015,
    lng: -73.9785899
  }, {
    lat: 40.7055533,
    lng: -73.9784371
  }, {
    lat: 40.7056015,
    lng: -73.9786557
  }, {
    lat: 40.7054707,
    lng: -73.9786919
  }, {
    lat: 40.7055658,
    lng: -73.9792444
  }, {
    lat: 40.7059592,
    lng: -73.9790513
  }, {
    lat: 40.7059687,
    lng: -73.9791988
  }, {
    lat: 40.7057864,
    lng: -73.9792619
  }, {
    lat: 40.7057668,
    lng: -73.9795824
  }, {
    lat: 40.705916,
    lng: -73.9809396
  }, {
    lat: 40.7058077,
    lng: -73.9824094
  }, {
    lat: 40.705461,
    lng: -73.9824631
  }, {
    lat: 40.7054569,
    lng: -73.9833751
  }, {
    lat: 40.7056764,
    lng: -73.9835039
  }, {
    lat: 40.7054166,
    lng: -73.9863785
  }],
  color: 'FF9900',
  center: {
    lat: 40.701359,
    lng: -73.98439399999995
  },
  summary: "Vinegar Hill was originally settled by Canersee <a href='https://en.wikipedia.org/wiki/Native_Americans_in_the_United_States' target='_blank'>American Indians</a>, before the <a href='https://en.wikipedia.org/wiki/Dutch_people' target='_blank'>Dutch</a> arrived in the early 17th century. Eventually it become home to a large Irish-American population, giving it the nickname <b>Irishtown</b>, who worked at the Navy Yard and ran illegal <a href='https://en.wikipedia.org/wiki/Moonshine' target='_blank'>moonshine</a> distilleries. The Vinegar Hill name comes from the <a href='https://en.wikipedia.org/wiki/Battle_of_Vinegar_Hill' target='_blank'>Battle of Vinegar Hill</a>, a major conflict of the <a href='https://en.wikipedia.org/wiki/Irish_Rebellion_of_1798' target='_blank'>1798 Irish Rebellion</a>. Much of the area was leveled when the <a href='https://en.wikipedia.org/wiki/Manhattan_Bridge' target='_blank'>Manhattan Bridge</a> was constructed, and New York's industrial growth replaced many homes with factories. Following the <a href='https://en.wikipedia.org/wiki/World_War_I' target='_blank'>First World War</a>, it become a predominantly Lithuanian neighborhood, which continued through the 1960s. Just as with the neighboring <a href='https://en.wikipedia.org/wiki/Dumbo,_Brooklyn' target='_blank'>Dumbo</a>, the 1970s invited many young artists, and today the area is a relatively quiet residential neighborhood."
}, {
  name: 'Brooklyn Navy Yard',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.7046913,
    lng: -73.9763084
  }, {
    lat: 40.7030321,
    lng: -73.977113
  }, {
    lat: 40.7032273,
    lng: -73.9775207
  }, {
    lat: 40.7019454,
    lng: -73.9778657
  }, {
    lat: 40.7022698,
    lng: -73.9798049
  }, {
    lat: 40.7018544,
    lng: -73.979884
  }, {
    lat: 40.7019091,
    lng: -73.9805297
  }, {
    lat: 40.701492,
    lng: -73.9806927
  }, {
    lat: 40.7007723,
    lng: -73.9801664
  }, {
    lat: 40.698145,
    lng: -73.980328
  }, {
    lat: 40.697689,
    lng: -73.970912
  }, {
    lat: 40.697494,
    lng: -73.965547
  }, {
    lat: 40.698047,
    lng: -73.961728
  }, {
    lat: 40.698145,
    lng: -73.961692
  }, {
    lat: 40.699381,
    lng: -73.961091
  }, {
    lat: 40.704262,
    lng: -73.967357
  }, {
    lat: 40.706799,
    lng: -73.96873
  }, {
    lat: 40.7072411,
    lng: -73.9694044
  }, {
    lat: 40.7070174,
    lng: -73.9692595
  }, {
    lat: 40.7050899,
    lng: -73.9693078
  }, {
    lat: 40.7039471,
    lng: -73.9674893
  }, {
    lat: 40.7034429,
    lng: -73.9675161
  }, {
    lat: 40.7033371,
    lng: -73.9676127
  }, {
    lat: 40.7049638,
    lng: -73.9702305
  }, {
    lat: 40.7053257,
    lng: -73.9701822
  }, {
    lat: 40.7053745,
    lng: -73.9702627
  }, {
    lat: 40.7053867,
    lng: -73.9704934
  }, {
    lat: 40.7063464,
    lng: -73.9702895
  }, {
    lat: 40.7069564,
    lng: -73.9702734
  }, {
    lat: 40.7073143,
    lng: -73.9705363
  }, {
    lat: 40.7072614,
    lng: -73.970665
  }, {
    lat: 40.7090751,
    lng: -73.9723065
  }, {
    lat: 40.7088473,
    lng: -73.972784
  }, {
    lat: 40.7085261,
    lng: -73.9725157
  }, {
    lat: 40.7083797,
    lng: -73.972784
  }, {
    lat: 40.7072289,
    lng: -73.9717594
  }, {
    lat: 40.7073753,
    lng: -73.9714804
  }, {
    lat: 40.7069483,
    lng: -73.971062
  }, {
    lat: 40.706806,
    lng: -73.9709976
  }, {
    lat: 40.7058666,
    lng: -73.9711317
  }, {
    lat: 40.7057934,
    lng: -73.9712229
  }, {
    lat: 40.7079812,
    lng: -73.9742484
  }, {
    lat: 40.7077006,
    lng: -73.9746132
  }, {
    lat: 40.7062123,
    lng: -73.972564
  }, {
    lat: 40.7057324,
    lng: -73.9734009
  }, {
    lat: 40.705891,
    lng: -73.9737817
  }, {
    lat: 40.7058788,
    lng: -73.9738676
  }, {
    lat: 40.7062895,
    lng: -73.9744738
  }, {
    lat: 40.7061919,
    lng: -73.9745918
  }, {
    lat: 40.7060659,
    lng: -73.9744147
  }, {
    lat: 40.7059845,
    lng: -73.9743986
  }, {
    lat: 40.7056633,
    lng: -73.9738622
  }, {
    lat: 40.7053989,
    lng: -73.9735082
  }, {
    lat: 40.7052851,
    lng: -73.9734331
  }, {
    lat: 40.7038455,
    lng: -73.9710995
  }, {
    lat: 40.7036096,
    lng: -73.9709922
  }, {
    lat: 40.7037113,
    lng: -73.97118
  }, {
    lat: 40.7035201,
    lng: -73.9713517
  }, {
    lat: 40.7035201,
    lng: -73.9714589
  }, {
    lat: 40.7039797,
    lng: -73.9721671
  }, {
    lat: 40.7038414,
    lng: -73.9723333
  }, {
    lat: 40.7036218,
    lng: -73.9719954
  }, {
    lat: 40.7033127,
    lng: -73.9723602
  }, {
    lat: 40.7035039,
    lng: -73.9727035
  }, {
    lat: 40.7033575,
    lng: -73.9728376
  }, {
    lat: 40.7027718,
    lng: -73.9721563
  }, {
    lat: 40.7024912,
    lng: -73.9725747
  }, {
    lat: 40.7027312,
    lng: -73.9728698
  }, {
    lat: 40.7023977,
    lng: -73.9733258
  }, {
    lat: 40.7001203,
    lng: -73.9708259
  }, {
    lat: 40.7000064,
    lng: -73.9707938
  }, {
    lat: 40.6998803,
    lng: -73.9709654
  }, {
    lat: 40.6999169,
    lng: -73.9711424
  }, {
    lat: 40.7014339,
    lng: -73.9728483
  }, {
    lat: 40.7014095,
    lng: -73.9728966
  }, {
    lat: 40.7016697,
    lng: -73.9732131
  }, {
    lat: 40.7015152,
    lng: -73.9737496
  }, {
    lat: 40.7013119,
    lng: -73.9735457
  }, {
    lat: 40.7012265,
    lng: -73.9735028
  }, {
    lat: 40.7004619,
    lng: -73.972623
  }, {
    lat: 40.7001731,
    lng: -73.9724353
  }, {
    lat: 40.7000714,
    lng: -73.9725694
  }, {
    lat: 40.7002626,
    lng: -73.9729127
  }, {
    lat: 40.7010719,
    lng: -73.9737764
  }, {
    lat: 40.7010882,
    lng: -73.9739051
  }, {
    lat: 40.7012956,
    lng: -73.9741143
  }, {
    lat: 40.7011939,
    lng: -73.9743343
  }, {
    lat: 40.7010231,
    lng: -73.9744255
  }, {
    lat: 40.6995793,
    lng: -73.9753857
  }, {
    lat: 40.6995265,
    lng: -73.9755788
  }, {
    lat: 40.6996159,
    lng: -73.9757719
  }, {
    lat: 40.6997705,
    lng: -73.9757934
  }, {
    lat: 40.7015843,
    lng: -73.9745489
  }, {
    lat: 40.7019097,
    lng: -73.9754179
  }, {
    lat: 40.7017511,
    lng: -73.9755144
  }, {
    lat: 40.7019381,
    lng: -73.9760026
  }, {
    lat: 40.702963,
    lng: -73.9753106
  }, {
    lat: 40.7030728,
    lng: -73.9756003
  }, {
    lat: 40.7021903,
    lng: -73.9762011
  }, {
    lat: 40.702536,
    lng: -73.9766732
  }, {
    lat: 40.7028084,
    lng: -73.976936
  }, {
    lat: 40.7046059,
    lng: -73.9760133
  }, {
    lat: 40.7046913,
    lng: -73.9763084
  }],
  color: '0099FF',
  center: {
    lat: 40.701985,
    lng: -73.971399
  }
}, {
  name: 'Brooklyn Heights',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.703121,
    lng: -73.994896
  }, {
    lat: 40.701904,
    lng: -73.992043
  }, {
    lat: 40.70052,
    lng: -73.990479
  }, {
    lat: 40.69894,
    lng: -73.991188
  }, {
    lat: 40.696518,
    lng: -73.991058
  }, {
    lat: 40.693737,
    lng: -73.990219
  }, {
    lat: 40.689556,
    lng: -73.992279
  }, {
    lat: 40.691769,
    lng: -74.000435
  }, {
    lat: 40.703121,
    lng: -73.994896
  }],
  color: 'FFFF99',
  center: {
    lat: 40.6963385,
    lng: -73.99532699999997
  },
  summary: "Originally known as <b>Brooklyn Village</b>, Brooklyn Heights is an affluent residential neighborhood known for its architecture, specifically <a href='https://en.wikipedia.org/wiki/Brownstone' target='_blank'>brownstone</a> <a href='https://en.wikipedia.org/wiki/Rowhouses' target='_blank'>rowhouses</a> dating to before the <a href='https://en.wikipedia.org/wiki/American_Civil_War' target='_blank'>Civil War</a>. The neighborhood sits atop a <a href='https://en.wikipedia.org/wiki/Plateau' target='_blank'>plateau</a> with that rises abruptly from the shoreline, which was heavily fortified leading up to the <a href='https://en.wikipedia.org/wiki/American_Revolutionary_War' target='_blank'>Revolutionary War</a>. The area was mostly farmland until <a href='https://en.wikipedia.org/wiki/Robert_Fulton' target='_blank'>Robert Fulton</a>'s ferry company started offering regular service in 1814. Brooklyn Heights was billed as 'country retreat' for Manhattan merchants and bankers, leading to what became the first <a href='https://en.wikipedia.org/wiki/Commuter_town' target='_blank'>commuter suburb</a>. The construction of the <a href='https://en.wikipedia.org/wiki/Brooklyn_Queens_Expressway' target='_blank'>Brooklyn Queens Expressway</a> leveled many of the old rowhouses, and the <a href='https://en.wikipedia.org/wiki/Housing_Act_of_1949' target='_blank'>Housing Act of 1949</a> threatened to replace more of them with luxury apartment buildings. A deal was made between the community and City Hall to preserve most of the neighborhood, which remains largely untouched today. The <a href='https://en.wikipedia.org/wiki/Brooklyn_Heights_Promenade' target='_blank'>Brooklyn Heights Promenade</a> forms the western boundary, offering magnificent views of <a href='https://en.wikipedia.org/wiki/Lower_Manhattan' target='_blank'>Lower Manhattan</a> and the <a href='https://en.wikipedia.org/wiki/Statue_of_Liberty' target='_blank'>Statue of Liberty</a>. Many notable people have called Brooklyn Heights home, including <a href='https://en.wikipedia.org/wiki/H._P._Lovecraft' target='_blank'>H. P. Lovecraft</a>, <a href='https://en.wikipedia.org/wiki/Matt_Damon' target='_blank'>Matt Damon</a>, <a href='https://en.wikipedia.org/wiki/Bj%C3%B6rk' target='_blank'>Björk</a>, and <a href='https://en.wikipedia.org/wiki/Mary_Tyler_Moore' target='_blank'>Mary Tyler Moore</a>. The <a href='https://en.wikipedia.org/wiki/Brooklyn_Heights_Historic_District' target='_blank'>Brooklyn Heights Historic District</a> was added to the <a href='https://en.wikipedia.org/wiki/National_Register_of_Historic_Places' target='_blank'>National Register of Historic Places</a> in 1966."
}, {
  name: 'Fort Greene',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.698112,
    lng: -73.980309
  }, {
    lat: 40.697689,
    lng: -73.970909
  }, {
    lat: 40.681744,
    lng: -73.967651
  }, {
    lat: 40.683891,
    lng: -73.977234
  }, {
    lat: 40.688545,
    lng: -73.98056
  }, {
    lat: 40.68985,
    lng: -73.981232
  }, {
    lat: 40.689735,
    lng: -73.978416
  }, {
    lat: 40.693867,
    lng: -73.979042
  }, {
    lat: 40.694695,
    lng: -73.979942
  }, {
    lat: 40.698112,
    lng: -73.980309
  }],
  color: '666666',
  center: {
    lat: 40.689928,
    lng: -73.97444150000001
  }
}, {
  name: 'Clinton Hill',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6817284,
    lng: -73.9676822
  }, {
    lat: 40.6797353,
    lng: -73.9581599
  }, {
    lat: 40.680085,
    lng: -73.957908
  }, {
    lat: 40.698047,
    lng: -73.961728
  }, {
    lat: 40.697494,
    lng: -73.965547
  }, {
    lat: 40.697722,
    lng: -73.970912
  }, {
    lat: 40.6817284,
    lng: -73.9676822
  }],
  color: '990000',
  center: {
    lat: 40.6887895,
    lng: -73.9644735
  }
}, {
  name: 'Downtown Brooklyn',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.7016692,
    lng: -73.991057
  }, {
    lat: 40.7016732,
    lng: -73.9917882
  }, {
    lat: 40.700618,
    lng: -73.990481
  }, {
    lat: 40.698958,
    lng: -73.991339
  }, {
    lat: 40.69629,
    lng: -73.990953
  }, {
    lat: 40.69385,
    lng: -73.990138
  }, {
    lat: 40.6909464,
    lng: -73.9915826
  }, {
    lat: 40.690254,
    lng: -73.989576
  }, {
    lat: 40.6887003,
    lng: -73.9856276
  }, {
    lat: 40.687017,
    lng: -73.981336
  }, {
    lat: 40.686317,
    lng: -73.97893
  }, {
    lat: 40.6888389,
    lng: -73.9806707
  }, {
    lat: 40.689848,
    lng: -73.981229
  }, {
    lat: 40.689734,
    lng: -73.978418
  }, {
    lat: 40.69385,
    lng: -73.979019
  }, {
    lat: 40.694712,
    lng: -73.979985
  }, {
    lat: 40.698145,
    lng: -73.980328
  }, {
    lat: 40.6982464,
    lng: -73.9827098
  }, {
    lat: 40.700593,
    lng: -73.9853795
  }, {
    lat: 40.7011054,
    lng: -73.9866653
  }, {
    lat: 40.701309,
    lng: -73.9878379
  }, {
    lat: 40.7016692,
    lng: -73.991057
  }],
  color: '000099',
  center: {
    lat: 40.6954765,
    lng: -73.98662549999995
  }
}, {
  name: 'Columbia Street Waterfront',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.691734,
    lng: -74.000565
  }, {
    lat: 40.69128,
    lng: -73.998589
  }, {
    lat: 40.689915,
    lng: -73.998283
  }, {
    lat: 40.679371,
    lng: -74.003525
  }, {
    lat: 40.687763,
    lng: -74.008934
  }, {
    lat: 40.689556,
    lng: -74.003357
  }, {
    lat: 40.692192,
    lng: -74.001808
  }, {
    lat: 40.691734,
    lng: -74.000565
  }],
  color: '66FFFF',
  center: {
    lat: 40.685781500000004,
    lng: -74.00360850000004
  }
}, {
  name: 'Cobble Hill',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.691311,
    lng: -73.99855
  }, {
    lat: 40.689621,
    lng: -73.992287
  }, {
    lat: 40.683632,
    lng: -73.995155
  }, {
    lat: 40.685162,
    lng: -74.00061
  }, {
    lat: 40.689922,
    lng: -73.998253
  }, {
    lat: 40.691311,
    lng: -73.99855
  }],
  color: 'FF6666',
  center: {
    lat: 40.6874715,
    lng: -73.99644850000004
  }
}, {
  name: 'Carroll Gardens',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.686527,
    lng: -73.993874
  }, {
    lat: 40.684624,
    lng: -73.989128
  }, {
    lat: 40.676601,
    lng: -73.994621
  }, {
    lat: 40.677399,
    lng: -73.996361
  }, {
    lat: 40.672386,
    lng: -73.998756
  }, {
    lat: 40.675804,
    lng: -74.001053
  }, {
    lat: 40.677971,
    lng: -74.002426
  }, {
    lat: 40.679436,
    lng: -74.003525
  }, {
    lat: 40.685192,
    lng: -74.000648
  }, {
    lat: 40.683666,
    lng: -73.995132
  }, {
    lat: 40.686527,
    lng: -73.993874
  }],
  color: '996633',
  center: {
    lat: 40.6794565,
    lng: -73.99632650000001
  }
}, {
  name: 'Red Hook',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.686367,
    lng: -74.007988
  }, {
    lat: 40.686302,
    lng: -74.008545
  }, {
    lat: 40.68718,
    lng: -74.00898
  }, {
    lat: 40.684185,
    lng: -74.012627
  }, {
    lat: 40.680538,
    lng: -74.018723
  }, {
    lat: 40.679565,
    lng: -74.019531
  }, {
    lat: 40.67696,
    lng: -74.01992
  }, {
    lat: 40.675106,
    lng: -74.01915
  }, {
    lat: 40.673607,
    lng: -74.017433
  }, {
    lat: 40.672241,
    lng: -74.01889
  }, {
    lat: 40.671818,
    lng: -74.018204
  }, {
    lat: 40.673119,
    lng: -74.016487
  }, {
    lat: 40.671982,
    lng: -74.015068
  }, {
    lat: 40.670776,
    lng: -74.013695
  }, {
    lat: 40.670776,
    lng: -74.012238
  }, {
    lat: 40.669964,
    lng: -74.014168
  }, {
    lat: 40.669605,
    lng: -74.014168
  }, {
    lat: 40.670353,
    lng: -74.01181
  }, {
    lat: 40.668629,
    lng: -74.01104
  }, {
    lat: 40.665859,
    lng: -74.012238
  }, {
    lat: 40.66547,
    lng: -74.015587
  }, {
    lat: 40.664982,
    lng: -74.01606
  }, {
    lat: 40.665016,
    lng: -74.016487
  }, {
    lat: 40.671101,
    lng: -74.017471
  }, {
    lat: 40.671654,
    lng: -74.018936
  }, {
    lat: 40.671394,
    lng: -74.019066
  }, {
    lat: 40.671036,
    lng: -74.018677
  }, {
    lat: 40.665699,
    lng: -74.01799
  }, {
    lat: 40.664722,
    lng: -74.016701
  }, {
    lat: 40.661499,
    lng: -74.014
  }, {
    lat: 40.665112,
    lng: -74.004684
  }, {
    lat: 40.662994,
    lng: -74.001213
  }, {
    lat: 40.664558,
    lng: -73.999451
  }, {
    lat: 40.666546,
    lng: -74.002838
  }, {
    lat: 40.668888,
    lng: -73.999023
  }, {
    lat: 40.66687,
    lng: -73.995544
  }, {
    lat: 40.668823,
    lng: -73.996185
  }, {
    lat: 40.672501,
    lng: -73.998718
  }, {
    lat: 40.679501,
    lng: -74.003525
  }, {
    lat: 40.686367,
    lng: -74.007988
  }],
  color: 'FF99FF',
  center: {
    lat: 40.6743395,
    lng: -74.00773200000003
  }
}, {
  name: 'Boerum Hill',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.680801,
    lng: -73.981057
  }, {
    lat: 40.684999,
    lng: -73.978041
  }, {
    lat: 40.686317,
    lng: -73.97893
  }, {
    lat: 40.687017,
    lng: -73.981336
  }, {
    lat: 40.690254,
    lng: -73.989576
  }, {
    lat: 40.6909464,
    lng: -73.9915826
  }, {
    lat: 40.689652,
    lng: -73.992283
  }, {
    lat: 40.68578,
    lng: -73.994086
  }, {
    lat: 40.680801,
    lng: -73.981057
  }],
  color: '99FF99',
  center: {
    lat: 40.685527500000006,
    lng: -73.986065
  }
}, {
  name: 'Prospect Heights',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.674869,
    lng: -73.970636
  }, {
    lat: 40.674324,
    lng: -73.970507
  }, {
    lat: 40.674031,
    lng: -73.970658
  }, {
    lat: 40.67255,
    lng: -73.969907
  }, {
    lat: 40.672762,
    lng: -73.96898
  }, {
    lat: 40.672892,
    lng: -73.967736
  }, {
    lat: 40.67185,
    lng: -73.964345
  }, {
    lat: 40.670971,
    lng: -73.960998
  }, {
    lat: 40.6796369,
    lng: -73.9577039
  }, {
    lat: 40.6817284,
    lng: -73.9676822
  }, {
    lat: 40.683632,
    lng: -73.975993
  }, {
    lat: 40.683925,
    lng: -73.977259
  }, {
    lat: 40.674869,
    lng: -73.970636
  }],
  color: '999900',
  center: {
    lat: 40.6774485,
    lng: -73.96754099999998
  }
}, {
  name: 'Gowanus',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.68399,
    lng: -73.98954
  }, {
    lat: 40.680767,
    lng: -73.981041
  }, {
    lat: 40.665752,
    lng: -73.99292
  }, {
    lat: 40.66687,
    lng: -73.994812
  }, {
    lat: 40.668171,
    lng: -73.995888
  }, {
    lat: 40.669018,
    lng: -73.996101
  }, {
    lat: 40.67247,
    lng: -73.99868
  }, {
    lat: 40.677418,
    lng: -73.996315
  }, {
    lat: 40.676601,
    lng: -73.994644
  }, {
    lat: 40.68399,
    lng: -73.98954
  }],
  color: 'FF6600',
  center: {
    lat: 40.674870999999996,
    lng: -73.98986049999996
  }
}, {
  name: 'Park Slope',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.68499,
    lng: -73.978035
  }, {
    lat: 40.674911,
    lng: -73.970657
  }, {
    lat: 40.674065,
    lng: -73.970657
  }, {
    lat: 40.67263,
    lng: -73.969925
  }, {
    lat: 40.66114,
    lng: -73.979584
  }, {
    lat: 40.66119,
    lng: -73.980064
  }, {
    lat: 40.660957,
    lng: -73.980209
  }, {
    lat: 40.660805,
    lng: -73.980087
  }, {
    lat: 40.660686,
    lng: -73.980026
  }, {
    lat: 40.660538,
    lng: -73.980026
  }, {
    lat: 40.65892,
    lng: -73.981598
  }, {
    lat: 40.665749,
    lng: -73.992905
  }, {
    lat: 40.680832,
    lng: -73.98101
  }, {
    lat: 40.68499,
    lng: -73.978035
  }],
  color: '3366FF',
  center: {
    lat: 40.671955,
    lng: -73.98141499999997
  }
}, {
  name: 'Greenwood',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.668919,
    lng: -73.998947
  }, {
    lat: 40.666592,
    lng: -74.002701
  }, {
    lat: 40.66457,
    lng: -73.999458
  }, {
    lat: 40.662979,
    lng: -74.001289
  }, {
    lat: 40.665161,
    lng: -74.004631
  }, {
    lat: 40.66151,
    lng: -74.013969
  }, {
    lat: 40.660782,
    lng: -74.015511
  }, {
    lat: 40.659389,
    lng: -74.017418
  }, {
    lat: 40.645985,
    lng: -73.995079
  }, {
    lat: 40.647072,
    lng: -73.993927
  }, {
    lat: 40.644161,
    lng: -73.989059
  }, {
    lat: 40.64465,
    lng: -73.98822
  }, {
    lat: 40.64772,
    lng: -73.980339
  }, {
    lat: 40.655231,
    lng: -73.981758
  }, {
    lat: 40.656639,
    lng: -73.984039
  }, {
    lat: 40.658909,
    lng: -73.98159
  }, {
    lat: 40.66695,
    lng: -73.994911
  }, {
    lat: 40.66814,
    lng: -73.995842
  }, {
    lat: 40.666901,
    lng: -73.995583
  }, {
    lat: 40.668919,
    lng: -73.998947
  }],
  color: '009900',
  center: {
    lat: 40.65654,
    lng: -73.99887850000005
  }
}, {
  name: 'Williamsburg',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.725169,
    lng: -73.962053
  }, {
    lat: 40.722088,
    lng: -73.963151
  }, {
    lat: 40.717404,
    lng: -73.967271
  }, {
    lat: 40.709792,
    lng: -73.969932
  }, {
    lat: 40.70758,
    lng: -73.969932
  }, {
    lat: 40.706799,
    lng: -73.96873
  }, {
    lat: 40.704262,
    lng: -73.967357
  }, {
    lat: 40.699381,
    lng: -73.961091
  }, {
    lat: 40.698145,
    lng: -73.961692
  }, {
    lat: 40.700683,
    lng: -73.940406
  }, {
    lat: 40.701789,
    lng: -73.936715
  }, {
    lat: 40.703936,
    lng: -73.937659
  }, {
    lat: 40.704782,
    lng: -73.938861
  }, {
    lat: 40.711549,
    lng: -73.940234
  }, {
    lat: 40.714671,
    lng: -73.941779
  }, {
    lat: 40.716363,
    lng: -73.941779
  }, {
    lat: 40.7189,
    lng: -73.940063
  }, {
    lat: 40.722088,
    lng: -73.940835
  }, {
    lat: 40.720201,
    lng: -73.943753
  }, {
    lat: 40.7185666,
    lng: -73.9467986
  }, {
    lat: 40.7195668,
    lng: -73.9469259
  }, {
    lat: 40.7199952,
    lng: -73.9473832
  }, {
    lat: 40.7198951,
    lng: -73.9482897
  }, {
    lat: 40.7202803,
    lng: -73.9483217
  }, {
    lat: 40.7202539,
    lng: -73.9486861
  }, {
    lat: 40.7191927,
    lng: -73.9485567
  }, {
    lat: 40.7187986,
    lng: -73.9524081
  }, {
    lat: 40.7192663,
    lng: -73.952526
  }, {
    lat: 40.7214456,
    lng: -73.9560042
  }, {
    lat: 40.725169,
    lng: -73.962053
  }],
  color: '009900',
  center: {
    lat: 40.7116585,
    lng: -73.95332350000001
  },
  summary: ""
}, {
  name: 'Bedford - Stuyvesant',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.680085,
    lng: -73.957908
  }, {
    lat: 40.6797353,
    lng: -73.9581599
  }, {
    lat: 40.678653,
    lng: -73.952372
  }, {
    lat: 40.676863,
    lng: -73.919199
  }, {
    lat: 40.676,
    lng: -73.907905
  }, {
    lat: 40.678034,
    lng: -73.907522
  }, {
    lat: 40.679332,
    lng: -73.905201
  }, {
    lat: 40.6797184,
    lng: -73.9048432
  }, {
    lat: 40.700618,
    lng: -73.941436
  }, {
    lat: 40.698145,
    lng: -73.961692
  }, {
    lat: 40.698047,
    lng: -73.961728
  }, {
    lat: 40.680085,
    lng: -73.957908
  }],
  color: '66FFFF',
  center: {
    lat: 40.6856155,
    lng: -73.93340699999999
  }
}, {
  name: 'Crown Heights',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.680866,
    lng: -73.964131
  }, {
    lat: 40.663257,
    lng: -73.960783
  }, {
    lat: 40.664233,
    lng: -73.945506
  }, {
    lat: 40.663485,
    lng: -73.933532
  }, {
    lat: 40.663582,
    lng: -73.930786
  }, {
    lat: 40.668302,
    lng: -73.919971
  }, {
    lat: 40.6753087,
    lng: -73.9040142
  }, {
    lat: 40.67574,
    lng: -73.904021
  }, {
    lat: 40.6766817,
    lng: -73.9164623
  }, {
    lat: 40.678653,
    lng: -73.952372
  }, {
    lat: 40.680866,
    lng: -73.964131
  }],
  color: 'CCCCCC',
  center: {
    lat: 40.672062,
    lng: -73.9416655
  }
}, {
  name: 'Ocean Hill',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6785694,
    lng: -73.9163443
  }, {
    lat: 40.6766817,
    lng: -73.9164623
  }, {
    lat: 40.676,
    lng: -73.907905
  }, {
    lat: 40.67574,
    lng: -73.904021
  }, {
    lat: 40.6757053,
    lng: -73.9035018
  }, {
    lat: 40.6778615,
    lng: -73.9033838
  }, {
    lat: 40.678903,
    lng: -73.9036091
  }, {
    lat: 40.6797184,
    lng: -73.9048432
  }, {
    lat: 40.6872993,
    lng: -73.9180823
  }, {
    lat: 40.6785694,
    lng: -73.9163443
  }],
  color: 'F8971B',
  center: {
    lat: 40.678319,
    lng: -73.910808
  }
}, {
  name: 'Weeksville',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6624303,
    lng: -73.9373268
  }, {
    lat: 40.6626582,
    lng: -73.9330889
  }, {
    lat: 40.6631872,
    lng: -73.9316083
  }, {
    lat: 40.663582,
    lng: -73.930736
  }, {
    lat: 40.665861,
    lng: -73.925521
  }, {
    lat: 40.6671179,
    lng: -73.9227678
  }, {
    lat: 40.6788681,
    lng: -73.9216627
  }, {
    lat: 40.6796003,
    lng: -73.9348699
  }, {
    lat: 40.6788192,
    lng: -73.9356746
  }, {
    lat: 40.6777778,
    lng: -73.9358677
  }, {
    lat: 40.6632605,
    lng: -73.9372839
  }, {
    lat: 40.6630814,
    lng: -73.9373912
  }, {
    lat: 40.6624303,
    lng: -73.9373268
  }],
  color: 'FF6666',
  center: {
    lat: 40.673713,
    lng: -73.925115
  }
}, {
  name: 'Bushwick',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.700618,
    lng: -73.941436
  }, {
    lat: 40.6797184,
    lng: -73.9048432
  }, {
    lat: 40.681907,
    lng: -73.902891
  }, {
    lat: 40.682363,
    lng: -73.903062
  }, {
    lat: 40.684153,
    lng: -73.906109
  }, {
    lat: 40.686105,
    lng: -73.904479
  }, {
    lat: 40.686821,
    lng: -73.90538
  }, {
    lat: 40.689294,
    lng: -73.904006
  }, {
    lat: 40.6918,
    lng: -73.901732
  }, {
    lat: 40.693817,
    lng: -73.905594
  }, {
    lat: 40.695412,
    lng: -73.904006
  }, {
    lat: 40.699511,
    lng: -73.911449
  }, {
    lat: 40.700699,
    lng: -73.910311
  }, {
    lat: 40.701952,
    lng: -73.912393
  }, {
    lat: 40.703009,
    lng: -73.911363
  }, {
    lat: 40.709239,
    lng: -73.921809
  }, {
    lat: 40.705677,
    lng: -73.925825
  }, {
    lat: 40.702619,
    lng: -73.933786
  }, {
    lat: 40.700715,
    lng: -73.940288
  }, {
    lat: 40.700618,
    lng: -73.941436
  }],
  color: '333333',
  center: {
    lat: 40.694295499999996,
    lng: -73.921604
  }
}, {
  name: 'Bay Ridge',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.643852,
    lng: -74.031044
  }, {
    lat: 40.645153,
    lng: -74.033707
  }, {
    lat: 40.641312,
    lng: -74.037308
  }, {
    lat: 40.6404,
    lng: -74.036194
  }, {
    lat: 40.629784,
    lng: -74.041344
  }, {
    lat: 40.62392,
    lng: -74.041855
  }, {
    lat: 40.615387,
    lng: -74.040573
  }, {
    lat: 40.609001,
    lng: -74.036018
  }, {
    lat: 40.610172,
    lng: -74.032242
  }, {
    lat: 40.613564,
    lng: -74.02993
  }, {
    lat: 40.612976,
    lng: -74.028214
  }, {
    lat: 40.610237,
    lng: -74.029068
  }, {
    lat: 40.609848,
    lng: -74.027779
  }, {
    lat: 40.610306,
    lng: -74.02684
  }, {
    lat: 40.609653,
    lng: -74.024689
  }, {
    lat: 40.634212,
    lng: -74.014824
  }, {
    lat: 40.640694,
    lng: -74.025803
  }, {
    lat: 40.64193,
    lng: -74.026833
  }, {
    lat: 40.643852,
    lng: -74.031044
  }],
  color: 'FF9966',
  center: {
    lat: 40.627077,
    lng: -74.02833950000002
  }
}, {
  name: 'Sunset Park',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.645985,
    lng: -73.995064
  }, {
    lat: 40.631393,
    lng: -74.010353
  }, {
    lat: 40.634209,
    lng: -74.014847
  }, {
    lat: 40.64064,
    lng: -74.025726
  }, {
    lat: 40.64196,
    lng: -74.026802
  }, {
    lat: 40.645149,
    lng: -74.033707
  }, {
    lat: 40.659389,
    lng: -74.017418
  }, {
    lat: 40.645985,
    lng: -73.995064
  }],
  color: '0000FF',
  center: {
    lat: 40.645391000000004,
    lng: -74.0143855
  }
}, {
  name: 'Bensonhurst',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.612713,
    lng: -74.011543
  }, {
    lat: 40.601952,
    lng: -73.993736
  }, {
    lat: 40.607079,
    lng: -73.988266
  }, {
    lat: 40.608757,
    lng: -73.97303
  }, {
    lat: 40.624546,
    lng: -73.999237
  }, {
    lat: 40.612713,
    lng: -74.011543
  }],
  color: '666666',
  center: {
    lat: 40.613248999999996,
    lng: -73.99228649999998
  }
}, {
  name: 'Dyker Heights',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.606655,
    lng: -74.015495
  }, {
    lat: 40.607468,
    lng: -74.016998
  }, {
    lat: 40.624538,
    lng: -73.999237
  }, {
    lat: 40.634148,
    lng: -74.014809
  }, {
    lat: 40.609718,
    lng: -74.024673
  }, {
    lat: 40.610271,
    lng: -74.026825
  }, {
    lat: 40.609943,
    lng: -74.027763
  }, {
    lat: 40.610336,
    lng: -74.029053
  }, {
    lat: 40.613007,
    lng: -74.028282
  }, {
    lat: 40.613529,
    lng: -74.029869
  }, {
    lat: 40.610172,
    lng: -74.032227
  }, {
    lat: 40.609097,
    lng: -74.036011
  }, {
    lat: 40.608707,
    lng: -74.034981
  }, {
    lat: 40.607502,
    lng: -74.034203
  }, {
    lat: 40.605122,
    lng: -74.030815
  }, {
    lat: 40.604374,
    lng: -74.027893
  }, {
    lat: 40.603397,
    lng: -74.020775
  }, {
    lat: 40.602844,
    lng: -74.019417
  }, {
    lat: 40.606655,
    lng: -74.015495
  }],
  color: '66CCCC',
  center: {
    lat: 40.618496,
    lng: -74.01762400000001
  }
}, {
  name: 'Borough Park',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.647068,
    lng: -73.993904
  }, {
    lat: 40.644146,
    lng: -73.989082
  }, {
    lat: 40.644615,
    lng: -73.988243
  }, {
    lat: 40.647713,
    lng: -73.98037
  }, {
    lat: 40.630646,
    lng: -73.976997
  }, {
    lat: 40.629391,
    lng: -73.979744
  }, {
    lat: 40.621998,
    lng: -73.987144
  }, {
    lat: 40.619053,
    lng: -73.990112
  }, {
    lat: 40.631378,
    lng: -74.010353
  }, {
    lat: 40.647068,
    lng: -73.993904
  }],
  color: 'FFFF00',
  center: {
    lat: 40.633383,
    lng: -73.993675
  }
}, {
  name: 'Mapleton',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.630615,
    lng: -73.976997
  }, {
    lat: 40.629391,
    lng: -73.979721
  }, {
    lat: 40.619083,
    lng: -73.990067
  }, {
    lat: 40.608807,
    lng: -73.973053
  }, {
    lat: 40.630615,
    lng: -73.976997
  }],
  color: 'FF6666',
  center: {
    lat: 40.619710999999995,
    lng: -73.98156
  }
}, {
  name: 'Bath Beach',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.612659,
    lng: -74.011543
  }, {
    lat: 40.601952,
    lng: -73.993729
  }, {
    lat: 40.593891,
    lng: -74.002068
  }, {
    lat: 40.595161,
    lng: -74.002869
  }, {
    lat: 40.597549,
    lng: -74.005692
  }, {
    lat: 40.59827,
    lng: -74.006943
  }, {
    lat: 40.600079,
    lng: -74.009613
  }, {
    lat: 40.601139,
    lng: -74.011719
  }, {
    lat: 40.602188,
    lng: -74.014999
  }, {
    lat: 40.602531,
    lng: -74.016968
  }, {
    lat: 40.602421,
    lng: -74.018349
  }, {
    lat: 40.6026,
    lng: -74.019188
  }, {
    lat: 40.602852,
    lng: -74.019417
  }, {
    lat: 40.60667,
    lng: -74.015488
  }, {
    lat: 40.607471,
    lng: -74.01696
  }, {
    lat: 40.612659,
    lng: -74.011543
  }],
  color: '009900',
  center: {
    lat: 40.603275,
    lng: -74.006573
  }
}, {
  name: 'Windsor Terrace',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.656635,
    lng: -73.984032
  }, {
    lat: 40.660522,
    lng: -73.980003
  }, {
    lat: 40.660667,
    lng: -73.980003
  }, {
    lat: 40.660946,
    lng: -73.980194
  }, {
    lat: 40.66119,
    lng: -73.980064
  }, {
    lat: 40.661137,
    lng: -73.979584
  }, {
    lat: 40.6609,
    lng: -73.979492
  }, {
    lat: 40.658649,
    lng: -73.974754
  }, {
    lat: 40.658203,
    lng: -73.974144
  }, {
    lat: 40.651348,
    lng: -73.972191
  }, {
    lat: 40.651253,
    lng: -73.972488
  }, {
    lat: 40.650932,
    lng: -73.972633
  }, {
    lat: 40.650688,
    lng: -73.972298
  }, {
    lat: 40.650723,
    lng: -73.971947
  }, {
    lat: 40.648216,
    lng: -73.971313
  }, {
    lat: 40.647541,
    lng: -73.973198
  }, {
    lat: 40.64772,
    lng: -73.974678
  }, {
    lat: 40.647766,
    lng: -73.975273
  }, {
    lat: 40.647255,
    lng: -73.980263
  }, {
    lat: 40.655239,
    lng: -73.981766
  }, {
    lat: 40.656635,
    lng: -73.984032
  }],
  color: '990000',
  center: {
    lat: 40.6542225,
    lng: -73.97767250000004
  }
}, {
  name: 'Gravesend',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.593884,
    lng: -74.00206
  }, {
    lat: 40.591797,
    lng: -74.000984
  }, {
    lat: 40.590134,
    lng: -73.999184
  }, {
    lat: 40.589546,
    lng: -73.998756
  }, {
    lat: 40.589222,
    lng: -73.999619
  }, {
    lat: 40.588535,
    lng: -73.998924
  }, {
    lat: 40.588245,
    lng: -73.997681
  }, {
    lat: 40.589317,
    lng: -73.995537
  }, {
    lat: 40.588829,
    lng: -73.995155
  }, {
    lat: 40.58844,
    lng: -73.995407
  }, {
    lat: 40.587982,
    lng: -73.995499
  }, {
    lat: 40.586876,
    lng: -73.997894
  }, {
    lat: 40.586353,
    lng: -73.999619
  }, {
    lat: 40.585831,
    lng: -73.999832
  }, {
    lat: 40.585442,
    lng: -73.999268
  }, {
    lat: 40.584888,
    lng: -73.999184
  }, {
    lat: 40.584202,
    lng: -74.000557
  }, {
    lat: 40.582897,
    lng: -74.000687
  }, {
    lat: 40.582279,
    lng: -73.997429
  }, {
    lat: 40.58215,
    lng: -73.995064
  }, {
    lat: 40.582996,
    lng: -73.993561
  }, {
    lat: 40.584332,
    lng: -73.99086
  }, {
    lat: 40.581791,
    lng: -73.991936
  }, {
    lat: 40.581074,
    lng: -73.991844
  }, {
    lat: 40.58078,
    lng: -73.990341
  }, {
    lat: 40.579739,
    lng: -73.989746
  }, {
    lat: 40.580032,
    lng: -73.989273
  }, {
    lat: 40.579281,
    lng: -73.987946
  }, {
    lat: 40.579998,
    lng: -73.987297
  }, {
    lat: 40.580944,
    lng: -73.986694
  }, {
    lat: 40.58316,
    lng: -73.983994
  }, {
    lat: 40.582672,
    lng: -73.982796
  }, {
    lat: 40.58091,
    lng: -73.980858
  }, {
    lat: 40.580032,
    lng: -73.979744
  }, {
    lat: 40.580257,
    lng: -73.978287
  }, {
    lat: 40.581303,
    lng: -73.97657
  }, {
    lat: 40.582539,
    lng: -73.974983
  }, {
    lat: 40.58342,
    lng: -73.97065
  }, {
    lat: 40.583748,
    lng: -73.966743
  }, {
    lat: 40.593426,
    lng: -73.964554
  }, {
    lat: 40.609375,
    lng: -73.967575
  }, {
    lat: 40.607063,
    lng: -73.988266
  }, {
    lat: 40.600513,
    lng: -73.995171
  }, {
    lat: 40.593884,
    lng: -74.00206
  }],
  color: '9999FF',
  center: {
    lat: 40.594328000000004,
    lng: -73.98330700000002
  }
}, {
  name: 'Kensington &amp; Parkville',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.647255,
    lng: -73.980217
  }, {
    lat: 40.647778,
    lng: -73.975243
  }, {
    lat: 40.647499,
    lng: -73.973137
  }, {
    lat: 40.648247,
    lng: -73.971268
  }, {
    lat: 40.632339,
    lng: -73.96666
  }, {
    lat: 40.627586,
    lng: -73.976463
  }, {
    lat: 40.630905,
    lng: -73.977043
  }, {
    lat: 40.647255,
    lng: -73.980217
  }],
  color: '66CCCC',
  center: {
    lat: 40.6379165,
    lng: -73.97343849999999
  }
}, {
  name: 'Flatbush',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.645073,
    lng: -73.970346
  }, {
    lat: 40.644389,
    lng: -73.970132
  }, {
    lat: 40.64366,
    lng: -73.96991
  }, {
    lat: 40.63234,
    lng: -73.96664
  }, {
    lat: 40.62971,
    lng: -73.96605
  }, {
    lat: 40.62862,
    lng: -73.96576
  }, {
    lat: 40.62946,
    lng: -73.95717
  }, {
    lat: 40.6307,
    lng: -73.94533
  }, {
    lat: 40.6328778,
    lng: -73.9476224
  }, {
    lat: 40.6553859,
    lng: -73.9500691
  }, {
    lat: 40.6550282,
    lng: -73.9561262
  }, {
    lat: 40.655932,
    lng: -73.956292
  }, {
    lat: 40.655769,
    lng: -73.959768
  }, {
    lat: 40.6532049,
    lng: -73.9662443
  }, {
    lat: 40.6508402,
    lng: -73.9646693
  }, {
    lat: 40.64828,
    lng: -73.971248
  }, {
    lat: 40.64631,
    lng: -73.97071
  }, {
    lat: 40.645073,
    lng: -73.970346
  }],
  color: 'FF99FF',
  center: {
    lat: 40.642269,
    lng: -73.95897300000001
  }
}, {
  name: 'Midwood',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.627586,
    lng: -73.97644
  }, {
    lat: 40.632305,
    lng: -73.966675
  }, {
    lat: 40.628593,
    lng: -73.965797
  }, {
    lat: 40.630466,
    lng: -73.947472
  }, {
    lat: 40.629166,
    lng: -73.947319
  }, {
    lat: 40.61203,
    lng: -73.944038
  }, {
    lat: 40.60939,
    lng: -73.967575
  }, {
    lat: 40.608788,
    lng: -73.973068
  }, {
    lat: 40.627586,
    lng: -73.97644
  }],
  color: '009900',
  center: {
    lat: 40.6205465,
    lng: -73.960239
  }
}, {
  name: 'Sheepshead Bay',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.609425,
    lng: -73.967514
  }, {
    lat: 40.61203,
    lng: -73.944031
  }, {
    lat: 40.609211,
    lng: -73.943542
  }, {
    lat: 40.600945,
    lng: -73.934189
  }, {
    lat: 40.594681,
    lng: -73.933029
  }, {
    lat: 40.593899,
    lng: -73.932686
  }, {
    lat: 40.592545,
    lng: -73.931641
  }, {
    lat: 40.591877,
    lng: -73.93129
  }, {
    lat: 40.591015,
    lng: -73.931595
  }, {
    lat: 40.590363,
    lng: -73.931252
  }, {
    lat: 40.589272,
    lng: -73.931252
  }, {
    lat: 40.588684,
    lng: -73.930672
  }, {
    lat: 40.587509,
    lng: -73.929688
  }, {
    lat: 40.587364,
    lng: -73.930801
  }, {
    lat: 40.587086,
    lng: -73.930908
  }, {
    lat: 40.586971,
    lng: -73.931335
  }, {
    lat: 40.586796,
    lng: -73.93119
  }, {
    lat: 40.586781,
    lng: -73.930405
  }, {
    lat: 40.586994,
    lng: -73.928909
  }, {
    lat: 40.586845,
    lng: -73.928276
  }, {
    lat: 40.58593,
    lng: -73.928131
  }, {
    lat: 40.586124,
    lng: -73.927711
  }, {
    lat: 40.584946,
    lng: -73.925964
  }, {
    lat: 40.585228,
    lng: -73.928238
  }, {
    lat: 40.584373,
    lng: -73.926376
  }, {
    lat: 40.584259,
    lng: -73.927536
  }, {
    lat: 40.584366,
    lng: -73.930962
  }, {
    lat: 40.583111,
    lng: -73.930679
  }, {
    lat: 40.582874,
    lng: -73.930862
  }, {
    lat: 40.582767,
    lng: -73.931778
  }, {
    lat: 40.583153,
    lng: -73.932022
  }, {
    lat: 40.582897,
    lng: -73.932762
  }, {
    lat: 40.583111,
    lng: -73.934471
  }, {
    lat: 40.582932,
    lng: -73.934631
  }, {
    lat: 40.582966,
    lng: -73.934898
  }, {
    lat: 40.583134,
    lng: -73.934845
  }, {
    lat: 40.583118,
    lng: -73.935112
  }, {
    lat: 40.583191,
    lng: -73.936089
  }, {
    lat: 40.583248,
    lng: -73.936699
  }, {
    lat: 40.583332,
    lng: -73.93679
  }, {
    lat: 40.583412,
    lng: -73.937675
  }, {
    lat: 40.583225,
    lng: -73.938309
  }, {
    lat: 40.58316,
    lng: -73.939285
  }, {
    lat: 40.583363,
    lng: -73.939362
  }, {
    lat: 40.58337,
    lng: -73.941559
  }, {
    lat: 40.583576,
    lng: -73.941658
  }, {
    lat: 40.583439,
    lng: -73.944107
  }, {
    lat: 40.583492,
    lng: -73.947662
  }, {
    lat: 40.583363,
    lng: -73.949455
  }, {
    lat: 40.582127,
    lng: -73.949188
  }, {
    lat: 40.582165,
    lng: -73.949478
  }, {
    lat: 40.583347,
    lng: -73.949768
  }, {
    lat: 40.583191,
    lng: -73.951614
  }, {
    lat: 40.582954,
    lng: -73.953522
  }, {
    lat: 40.58271,
    lng: -73.955811
  }, {
    lat: 40.582474,
    lng: -73.957382
  }, {
    lat: 40.582588,
    lng: -73.95726
  }, {
    lat: 40.584824,
    lng: -73.957619
  }, {
    lat: 40.584919,
    lng: -73.957657
  }, {
    lat: 40.584583,
    lng: -73.960114
  }, {
    lat: 40.583992,
    lng: -73.96431
  }, {
    lat: 40.583748,
    lng: -73.966728
  }, {
    lat: 40.593426,
    lng: -73.964531
  }, {
    lat: 40.609425,
    lng: -73.967514
  }],
  color: '333333',
  center: {
    lat: 40.597078499999995,
    lng: -73.94673899999998
  }
}, {
  name: 'Prospect Lefferts Gardens',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.655215,
    lng: -73.952923
  }, {
    lat: 40.655525,
    lng: -73.947129
  }, {
    lat: 40.660254,
    lng: -73.947687
  }, {
    lat: 40.661751,
    lng: -73.947827
  }, {
    lat: 40.663297,
    lng: -73.947998
  }, {
    lat: 40.664054,
    lng: -73.948095
  }, {
    lat: 40.663257,
    lng: -73.960783
  }, {
    lat: 40.663306,
    lng: -73.962171
  }, {
    lat: 40.663192,
    lng: -73.962493
  }, {
    lat: 40.662589,
    lng: -73.963158
  }, {
    lat: 40.662215,
    lng: -73.963244
  }, {
    lat: 40.6540638,
    lng: -73.9617367
  }, {
    lat: 40.6548574,
    lng: -73.9597036
  }, {
    lat: 40.655215,
    lng: -73.952923
  }],
  color: '000099',
  center: {
    lat: 40.6534535,
    lng: -73.95520049999999
  }
}, {
  name: 'East Flatbush',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.630744,
    lng: -73.945284
  }, {
    lat: 40.631786,
    lng: -73.93816
  }, {
    lat: 40.632177,
    lng: -73.937645
  }, {
    lat: 40.63317,
    lng: -73.922582
  }, {
    lat: 40.635466,
    lng: -73.922861
  }, {
    lat: 40.637323,
    lng: -73.919277
  }, {
    lat: 40.642501,
    lng: -73.919835
  }, {
    lat: 40.6503479,
    lng: -73.9083343
  }, {
    lat: 40.665861,
    lng: -73.925521
  }, {
    lat: 40.663582,
    lng: -73.930736
  }, {
    lat: 40.663485,
    lng: -73.933568
  }, {
    lat: 40.664233,
    lng: -73.945434
  }, {
    lat: 40.664054,
    lng: -73.948095
  }, {
    lat: 40.655525,
    lng: -73.947129
  }, {
    lat: 40.6553859,
    lng: -73.9500691
  }, {
    lat: 40.6328778,
    lng: -73.9476224
  }, {
    lat: 40.630744,
    lng: -73.945284
  }],
  color: '339999',
  center: {
    lat: 40.6482945,
    lng: -73.93069500000001
  }
}, {
  name: 'Brownsville',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.665859,
    lng: -73.925522
  }, {
    lat: 40.666073,
    lng: -73.925713
  }, {
    lat: 40.668365,
    lng: -73.925522
  }, {
    lat: 40.668186,
    lng: -73.922585
  }, {
    lat: 40.670612,
    lng: -73.916725
  }, {
    lat: 40.672894,
    lng: -73.911079
  }, {
    lat: 40.675137,
    lng: -73.908073
  }, {
    lat: 40.675999,
    lng: -73.907906
  }, {
    lat: 40.675739,
    lng: -73.904022
  }, {
    lat: 40.66433,
    lng: -73.9011
  }, {
    lat: 40.658276,
    lng: -73.89962
  }, {
    lat: 40.656452,
    lng: -73.900223
  }, {
    lat: 40.655411,
    lng: -73.901077
  }, {
    lat: 40.650414,
    lng: -73.908463
  }, {
    lat: 40.665859,
    lng: -73.925522
  }],
  color: 'FF99FF',
  center: {
    lat: 40.6632065,
    lng: -73.9126665
  }
}, {
  name: 'Cypress Hills',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.691833,
    lng: -73.90168
  }, {
    lat: 40.688251,
    lng: -73.90052
  }, {
    lat: 40.688026,
    lng: -73.901169
  }, {
    lat: 40.68129,
    lng: -73.896576
  }, {
    lat: 40.682461,
    lng: -73.896149
  }, {
    lat: 40.684608,
    lng: -73.894386
  }, {
    lat: 40.682362,
    lng: -73.893143
  }, {
    lat: 40.68539,
    lng: -73.888252
  }, {
    lat: 40.68718,
    lng: -73.883957
  }, {
    lat: 40.689457,
    lng: -73.883316
  }, {
    lat: 40.690304,
    lng: -73.881516
  }, {
    lat: 40.69281,
    lng: -73.875206
  }, {
    lat: 40.693493,
    lng: -73.874771
  }, {
    lat: 40.695183,
    lng: -73.869026
  }, {
    lat: 40.690987,
    lng: -73.868164
  }, {
    lat: 40.685307,
    lng: -73.866753
  }, {
    lat: 40.68124,
    lng: -73.866043
  }, {
    lat: 40.681763,
    lng: -73.864067
  }, {
    lat: 40.678425,
    lng: -73.863251
  }, {
    lat: 40.678474,
    lng: -73.86216
  }, {
    lat: 40.673771,
    lng: -73.861
  }, {
    lat: 40.677807,
    lng: -73.872864
  }, {
    lat: 40.678261,
    lng: -73.873398
  }, {
    lat: 40.679417,
    lng: -73.87426
  }, {
    lat: 40.679417,
    lng: -73.87426
  }, {
    lat: 40.67992,
    lng: -73.875221
  }, {
    lat: 40.680019,
    lng: -73.876617
  }, {
    lat: 40.677074,
    lng: -73.887047
  }, {
    lat: 40.675755,
    lng: -73.89415
  }, {
    lat: 40.675365,
    lng: -73.899254
  }, {
    lat: 40.675751,
    lng: -73.904022
  }, {
    lat: 40.676003,
    lng: -73.907845
  }, {
    lat: 40.678024,
    lng: -73.907524
  }, {
    lat: 40.679333,
    lng: -73.905205
  }, {
    lat: 40.6819,
    lng: -73.902885
  }, {
    lat: 40.682369,
    lng: -73.903046
  }, {
    lat: 40.68417,
    lng: -73.906113
  }, {
    lat: 40.686104,
    lng: -73.904465
  }, {
    lat: 40.686836,
    lng: -73.90538
  }, {
    lat: 40.689285,
    lng: -73.904053
  }, {
    lat: 40.691833,
    lng: -73.90168
  }],
  color: 'FF6666',
  center: {
    lat: 40.684477,
    lng: -73.88442250000003
  }
}, {
  name: 'East New York',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.675755,
    lng: -73.904022
  }, {
    lat: 40.67535,
    lng: -73.899254
  }, {
    lat: 40.675755,
    lng: -73.894218
  }, {
    lat: 40.67709,
    lng: -73.886986
  }, {
    lat: 40.680019,
    lng: -73.87664
  }, {
    lat: 40.679939,
    lng: -73.875267
  }, {
    lat: 40.679466,
    lng: -73.874321
  }, {
    lat: 40.678196,
    lng: -73.87336
  }, {
    lat: 40.677807,
    lng: -73.872887
  }, {
    lat: 40.673756,
    lng: -73.861
  }, {
    lat: 40.670677,
    lng: -73.860268
  }, {
    lat: 40.671036,
    lng: -73.85759
  }, {
    lat: 40.662949,
    lng: -73.855591
  }, {
    lat: 40.66259,
    lng: -73.858315
  }, {
    lat: 40.659935,
    lng: -73.857735
  }, {
    lat: 40.658813,
    lng: -73.863983
  }, {
    lat: 40.657478,
    lng: -73.862991
  }, {
    lat: 40.656357,
    lng: -73.863167
  }, {
    lat: 40.65559,
    lng: -73.862564
  }, {
    lat: 40.655281,
    lng: -73.8619
  }, {
    lat: 40.655052,
    lng: -73.860443
  }, {
    lat: 40.654289,
    lng: -73.859734
  }, {
    lat: 40.653847,
    lng: -73.859322
  }, {
    lat: 40.651894,
    lng: -73.858383
  }, {
    lat: 40.651196,
    lng: -73.85714
  }, {
    lat: 40.650593,
    lng: -73.856682
  }, {
    lat: 40.649158,
    lng: -73.857094
  }, {
    lat: 40.646458,
    lng: -73.85791
  }, {
    lat: 40.645088,
    lng: -73.861511
  }, {
    lat: 40.647076,
    lng: -73.863403
  }, {
    lat: 40.648346,
    lng: -73.865547
  }, {
    lat: 40.646847,
    lng: -73.864349
  }, {
    lat: 40.645088,
    lng: -73.864174
  }, {
    lat: 40.644375,
    lng: -73.863319
  }, {
    lat: 40.643394,
    lng: -73.863876
  }, {
    lat: 40.642906,
    lng: -73.868462
  }, {
    lat: 40.643394,
    lng: -73.869713
  }, {
    lat: 40.644535,
    lng: -73.870094
  }, {
    lat: 40.645252,
    lng: -73.871124
  }, {
    lat: 40.645317,
    lng: -73.872246
  }, {
    lat: 40.646393,
    lng: -73.8731
  }, {
    lat: 40.646,
    lng: -73.873741
  }, {
    lat: 40.645416,
    lng: -73.873184
  }, {
    lat: 40.64473,
    lng: -73.87323
  }, {
    lat: 40.642517,
    lng: -73.872246
  }, {
    lat: 40.639458,
    lng: -73.869926
  }, {
    lat: 40.638317,
    lng: -73.869667
  }, {
    lat: 40.636265,
    lng: -73.872711
  }, {
    lat: 40.636036,
    lng: -73.87336
  }, {
    lat: 40.63633,
    lng: -73.87413
  }, {
    lat: 40.638771,
    lng: -73.876747
  }, {
    lat: 40.63887,
    lng: -73.87812
  }, {
    lat: 40.63903,
    lng: -73.878639
  }, {
    lat: 40.639717,
    lng: -73.878891
  }, {
    lat: 40.640221,
    lng: -73.879578
  }, {
    lat: 40.638821,
    lng: -73.881622
  }, {
    lat: 40.653488,
    lng: -73.897774
  }, {
    lat: 40.656826,
    lng: -73.898682
  }, {
    lat: 40.656487,
    lng: -73.9002
  }, {
    lat: 40.658276,
    lng: -73.899605
  }, {
    lat: 40.675755,
    lng: -73.904022
  }],
  color: '330033',
  center: {
    lat: 40.6580275,
    lng: -73.87980649999997
  }
}, {
  name: 'Greenpoint',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.7216891,
    lng: -73.9506805
  }, {
    lat: 40.7221692,
    lng: -73.9498974
  }, {
    lat: 40.7195668,
    lng: -73.9469259
  }, {
    lat: 40.7185666,
    lng: -73.9467986
  }, {
    lat: 40.720201,
    lng: -73.943753
  }, {
    lat: 40.722088,
    lng: -73.940835
  }, {
    lat: 40.7237467,
    lng: -73.9382246
  }, {
    lat: 40.7242342,
    lng: -73.9366792
  }, {
    lat: 40.724998,
    lng: -73.9325807
  }, {
    lat: 40.7261528,
    lng: -73.930392
  }, {
    lat: 40.727438,
    lng: -73.929341
  }, {
    lat: 40.728137,
    lng: -73.932087
  }, {
    lat: 40.72843,
    lng: -73.934298
  }, {
    lat: 40.729161,
    lng: -73.937151
  }, {
    lat: 40.729763,
    lng: -73.93816
  }, {
    lat: 40.73121,
    lng: -73.939898
  }, {
    lat: 40.733795,
    lng: -73.940992
  }, {
    lat: 40.734787,
    lng: -73.941615
  }, {
    lat: 40.735438,
    lng: -73.942387
  }, {
    lat: 40.736267,
    lng: -73.944533
  }, {
    lat: 40.735438,
    lng: -73.945091
  }, {
    lat: 40.73547,
    lng: -73.945262
  }, {
    lat: 40.735893,
    lng: -73.945348
  }, {
    lat: 40.736397,
    lng: -73.945005
  }, {
    lat: 40.736608,
    lng: -73.945584
  }, {
    lat: 40.736088,
    lng: -73.945906
  }, {
    lat: 40.736218,
    lng: -73.946207
  }, {
    lat: 40.735373,
    lng: -73.946722
  }, {
    lat: 40.734462,
    lng: -73.946614
  }, {
    lat: 40.734446,
    lng: -73.947086
  }, {
    lat: 40.735405,
    lng: -73.947215
  }, {
    lat: 40.736885,
    lng: -73.946357
  }, {
    lat: 40.738283,
    lng: -73.950305
  }, {
    lat: 40.738754,
    lng: -73.951979
  }, {
    lat: 40.739161,
    lng: -73.954682
  }, {
    lat: 40.738933,
    lng: -73.957086
  }, {
    lat: 40.737616,
    lng: -73.959167
  }, {
    lat: 40.735747,
    lng: -73.961163
  }, {
    lat: 40.733991,
    lng: -73.962321
  }, {
    lat: 40.732462,
    lng: -73.962128
  }, {
    lat: 40.731129,
    lng: -73.96142
  }, {
    lat: 40.728755,
    lng: -73.961034
  }, {
    lat: 40.72521,
    lng: -73.962042
  }, {
    lat: 40.7214456,
    lng: -73.9560042
  }, {
    lat: 40.7224611,
    lng: -73.9548933
  }, {
    lat: 40.7224453,
    lng: -73.9548041
  }, {
    lat: 40.7223846,
    lng: -73.9547863
  }, {
    lat: 40.7216305,
    lng: -73.9536294
  }, {
    lat: 40.7225342,
    lng: -73.9526755
  }, {
    lat: 40.7229413,
    lng: -73.9533411
  }, {
    lat: 40.7234985,
    lng: -73.9516462
  }, {
    lat: 40.7216891,
    lng: -73.9506805
  }],
  color: 'FFCC99',
  center: {
    lat: 40.726551,
    lng: -73.94448850000003
  }
}, {
  name: 'East Williamsburg',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.711549,
    lng: -73.940234
  }, {
    lat: 40.704782,
    lng: -73.938861
  }, {
    lat: 40.703936,
    lng: -73.937659
  }, {
    lat: 40.701724,
    lng: -73.936744
  }, {
    lat: 40.702635,
    lng: -73.933654
  }, {
    lat: 40.70566,
    lng: -73.925757
  }, {
    lat: 40.709239,
    lng: -73.921809
  }, {
    lat: 40.713923,
    lng: -73.92417
  }, {
    lat: 40.7150946,
    lng: -73.9245989
  }, {
    lat: 40.7158588,
    lng: -73.9243196
  }, {
    lat: 40.7162735,
    lng: -73.9230212
  }, {
    lat: 40.7173916,
    lng: -73.9234878
  }, {
    lat: 40.7179181,
    lng: -73.9245366
  }, {
    lat: 40.7168833,
    lng: -73.9290185
  }, {
    lat: 40.7177776,
    lng: -73.9290615
  }, {
    lat: 40.7176392,
    lng: -73.9283963
  }, {
    lat: 40.7183039,
    lng: -73.9248183
  }, {
    lat: 40.7194169,
    lng: -73.9244883
  }, {
    lat: 40.7202336,
    lng: -73.9247954
  }, {
    lat: 40.7200746,
    lng: -73.9255746
  }, {
    lat: 40.7246098,
    lng: -73.9276828
  }, {
    lat: 40.7257065,
    lng: -73.9277928
  }, {
    lat: 40.727438,
    lng: -73.929341
  }, {
    lat: 40.7261528,
    lng: -73.930392
  }, {
    lat: 40.724998,
    lng: -73.9325807
  }, {
    lat: 40.7242342,
    lng: -73.9366792
  }, {
    lat: 40.7237467,
    lng: -73.9382246
  }, {
    lat: 40.722088,
    lng: -73.940835
  }, {
    lat: 40.7189,
    lng: -73.940063
  }, {
    lat: 40.716363,
    lng: -73.941779
  }, {
    lat: 40.714671,
    lng: -73.941779
  }, {
    lat: 40.711549,
    lng: -73.940234
  }],
  color: '000099',
  center: {
    lat: 40.708231,
    lng: -73.93174350000004
  }
}, {
  name: 'Canarsie',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.655378,
    lng: -73.901124
  }, {
    lat: 40.642582000000004,
    lng: -73.919792
  }, {
    lat: 40.637339,
    lng: -73.919277
  }, {
    lat: 40.635466,
    lng: -73.922861
  }, {
    lat: 40.63317,
    lng: -73.922582
  }, {
    lat: 40.633137999999995,
    lng: -73.920286
  }, {
    lat: 40.6319,
    lng: -73.918719
  }, {
    lat: 40.63317,
    lng: -73.916402
  }, {
    lat: 40.632747,
    lng: -73.915844
  }, {
    lat: 40.626005,
    lng: -73.900738
  }, {
    lat: 40.625158,
    lng: -73.901253
  }, {
    lat: 40.6231386,
    lng: -73.896854
  }, {
    lat: 40.6227233,
    lng: -73.8965053
  }, {
    lat: 40.62277619999999,
    lng: -73.8949362
  }, {
    lat: 40.6227538,
    lng: -73.8941945
  }, {
    lat: 40.622938,
    lng: -73.8935448
  }, {
    lat: 40.623415400000006,
    lng: -73.8932383
  }, {
    lat: 40.6234888,
    lng: -73.8925247
  }, {
    lat: 40.6250075,
    lng: -73.8907732
  }, {
    lat: 40.6261516,
    lng: -73.8903737
  }, {
    lat: 40.62782,
    lng: -73.88817470000001
  }, {
    lat: 40.6284136,
    lng: -73.8872632
  }, {
    lat: 40.62836310000001,
    lng: -73.8868992
  }, {
    lat: 40.6285878,
    lng: -73.886257
  }, {
    lat: 40.6284834,
    lng: -73.885788
  }, {
    lat: 40.62886089999999,
    lng: -73.8850646
  }, {
    lat: 40.6275965,
    lng: -73.8837036
  }, {
    lat: 40.6283246,
    lng: -73.8825265
  }, {
    lat: 40.6295855,
    lng: -73.8839059
  }, {
    lat: 40.6299252,
    lng: -73.8833602
  }, {
    lat: 40.63014870000001,
    lng: -73.883728
  }, {
    lat: 40.63079090000001,
    lng: -73.8835623
  }, {
    lat: 40.6312612,
    lng: -73.8830593
  }, {
    lat: 40.631745900000006,
    lng: -73.8827827
  }, {
    lat: 40.6318358,
    lng: -73.8821437
  }, {
    lat: 40.632919,
    lng: -73.8802814
  }, {
    lat: 40.6345234,
    lng: -73.8782044
  }, {
    lat: 40.6358925,
    lng: -73.8769776
  }, {
    lat: 40.63635119999999,
    lng: -73.8771848
  }, {
    lat: 40.6374967,
    lng: -73.8784573
  }, {
    lat: 40.637964100000005,
    lng: -73.8782987
  }, {
    lat: 40.6383126,
    lng: -73.8784106
  }, {
    lat: 40.6384561,
    lng: -73.878849
  }, {
    lat: 40.63831969999999,
    lng: -73.8795113
  }, {
    lat: 40.639545,
    lng: -73.8806643
  }, {
    lat: 40.638902,
    lng: -73.88164
  }, {
    lat: 40.653653,
    lng: -73.89782
  }, {
    lat: 40.656843,
    lng: -73.898678
  }, {
    lat: 40.656485,
    lng: -73.90018
  }, {
    lat: 40.655378,
    lng: -73.901124
  }],
  color: 'FFCC00',
  center: {
    lat: 40.641422,
    lng: -73.902218
  }
}, {
  name: 'Flatlands',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.630436,
    lng: -73.947433
  }, {
    lat: 40.630695,
    lng: -73.945328
  }, {
    lat: 40.631786,
    lng: -73.938095
  }, {
    lat: 40.63221,
    lng: -73.937668
  }, {
    lat: 40.633156,
    lng: -73.9226
  }, {
    lat: 40.633137,
    lng: -73.920288
  }, {
    lat: 40.631931,
    lng: -73.918762
  }, {
    lat: 40.616119,
    lng: -73.917
  }, {
    lat: 40.611397,
    lng: -73.924316
  }, {
    lat: 40.621235,
    lng: -73.935394
  }, {
    lat: 40.617699,
    lng: -73.940842
  }, {
    lat: 40.61721,
    lng: -73.945023
  }, {
    lat: 40.629147,
    lng: -73.947304
  }, {
    lat: 40.630436,
    lng: -73.947433
  }],
  color: 'FF6600',
  center: {
    lat: 40.6222765,
    lng: -73.93221649999998
  }
}, {
  name: 'Marine Park',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.61721,
    lng: -73.944984
  }, {
    lat: 40.617729,
    lng: -73.940735
  }, {
    lat: 40.621216,
    lng: -73.93541
  }, {
    lat: 40.607288,
    lng: -73.919662
  }, {
    lat: 40.606686,
    lng: -73.920647
  }, {
    lat: 40.607502,
    lng: -73.921616
  }, {
    lat: 40.605808,
    lng: -73.924408
  }, {
    lat: 40.607288,
    lng: -73.92627
  }, {
    lat: 40.601639,
    lng: -73.934959
  }, {
    lat: 40.609211,
    lng: -73.943527
  }, {
    lat: 40.61721,
    lng: -73.944984
  }],
  color: 'FFFF99',
  center: {
    lat: 40.6114275,
    lng: -73.932323
  }
}, {
  name: 'Bergen Beach',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.619735,
    lng: -73.912947
  }, {
    lat: 40.61664,
    lng: -73.90945
  }, {
    lat: 40.616754,
    lng: -73.909235
  }, {
    lat: 40.617308,
    lng: -73.908463
  }, {
    lat: 40.61001,
    lng: -73.90048
  }, {
    lat: 40.609488999999996,
    lng: -73.900952
  }, {
    lat: 40.60802300000001,
    lng: -73.900609
  }, {
    lat: 40.60685,
    lng: -73.901038
  }, {
    lat: 40.60535099999999,
    lng: -73.900051
  }, {
    lat: 40.60561200000001,
    lng: -73.896489
  }, {
    lat: 40.607013,
    lng: -73.892584
  }, {
    lat: 40.60955400000001,
    lng: -73.892026
  }, {
    lat: 40.610825,
    lng: -73.88885
  }, {
    lat: 40.611281,
    lng: -73.888721
  }, {
    lat: 40.61352900000001,
    lng: -73.890138
  }, {
    lat: 40.61382199999999,
    lng: -73.890996
  }, {
    lat: 40.614409,
    lng: -73.893013
  }, {
    lat: 40.614082999999994,
    lng: -73.894086
  }, {
    lat: 40.614278,
    lng: -73.895674
  }, {
    lat: 40.615614,
    lng: -73.896403
  }, {
    lat: 40.617829,
    lng: -73.896618
  }, {
    lat: 40.619327999999996,
    lng: -73.89576
  }, {
    lat: 40.62134699999999,
    lng: -73.896532
  }, {
    lat: 40.621933,
    lng: -73.897948
  }, {
    lat: 40.621836,
    lng: -73.899837
  }, {
    lat: 40.621575,
    lng: -73.900695
  }, {
    lat: 40.622812999999994,
    lng: -73.901381
  }, {
    lat: 40.623302,
    lng: -73.902497
  }, {
    lat: 40.624311,
    lng: -73.902798
  }, {
    lat: 40.628187000000004,
    lng: -73.911552
  }, {
    lat: 40.630207000000006,
    lng: -73.915844
  }, {
    lat: 40.631347,
    lng: -73.917603
  }, {
    lat: 40.632031,
    lng: -73.916359
  }, {
    lat: 40.630826,
    lng: -73.914428
  }, {
    lat: 40.629458,
    lng: -73.911209
  }, {
    lat: 40.625158,
    lng: -73.901253
  }, {
    lat: 40.626005,
    lng: -73.900738
  }, {
    lat: 40.632812,
    lng: -73.915973
  }, {
    lat: 40.63317,
    lng: -73.916402
  }, {
    lat: 40.6319,
    lng: -73.918719
  }, {
    lat: 40.61940899999999,
    lng: -73.917303
  }, {
    lat: 40.619735,
    lng: -73.912947
  }],
  color: '009900',
  center: {
    lat: 40.6223715,
    lng: -73.89784250000002
  }
}, {
  name: 'Mill Basin',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.619408,
    lng: -73.917305
  }, {
    lat: 40.619736,
    lng: -73.912926
  }, {
    lat: 40.616638,
    lng: -73.90947
  }, {
    lat: 40.614162,
    lng: -73.906746
  }, {
    lat: 40.613155,
    lng: -73.905373
  }, {
    lat: 40.61208,
    lng: -73.904259
  }, {
    lat: 40.611038,
    lng: -73.903076
  }, {
    lat: 40.6105,
    lng: -73.90239
  }, {
    lat: 40.608593,
    lng: -73.902222
  }, {
    lat: 40.605759,
    lng: -73.902107
  }, {
    lat: 40.604961,
    lng: -73.905457
  }, {
    lat: 40.606411,
    lng: -73.906166
  }, {
    lat: 40.606346,
    lng: -73.906921
  }, {
    lat: 40.606411,
    lng: -73.908356
  }, {
    lat: 40.6068,
    lng: -73.90876
  }, {
    lat: 40.606461,
    lng: -73.909683
  }, {
    lat: 40.606117,
    lng: -73.910027
  }, {
    lat: 40.605255,
    lng: -73.90921
  }, {
    lat: 40.604145,
    lng: -73.908615
  }, {
    lat: 40.603512,
    lng: -73.911125
  }, {
    lat: 40.603966,
    lng: -73.913765
  }, {
    lat: 40.606979,
    lng: -73.916985
  }, {
    lat: 40.607159,
    lng: -73.916725
  }, {
    lat: 40.608845,
    lng: -73.916916
  }, {
    lat: 40.610516,
    lng: -73.916313
  }, {
    lat: 40.611507,
    lng: -73.914688
  }, {
    lat: 40.613953,
    lng: -73.915009
  }, {
    lat: 40.614605,
    lng: -73.913933
  }, {
    lat: 40.614899,
    lng: -73.91436
  }, {
    lat: 40.613495,
    lng: -73.916618
  }, {
    lat: 40.611771,
    lng: -73.915649
  }, {
    lat: 40.610077,
    lng: -73.918243
  }, {
    lat: 40.609619,
    lng: -73.917816
  }, {
    lat: 40.608788,
    lng: -73.918098
  }, {
    lat: 40.60791,
    lng: -73.91964
  }, {
    lat: 40.602959,
    lng: -73.914322
  }, {
    lat: 40.60268,
    lng: -73.914879
  }, {
    lat: 40.611397,
    lng: -73.924316
  }, {
    lat: 40.616119,
    lng: -73.916985
  }, {
    lat: 40.619408,
    lng: -73.917305
  }],
  color: 'FF99FF',
  center: {
    lat: 40.611208000000005,
    lng: -73.91321149999999
  }
}, {
  name: 'Sea Gate',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.581303,
    lng: -74.004082
  }, {
    lat: 40.571426,
    lng: -74.002357
  }, {
    lat: 40.573479,
    lng: -74.006866
  }, {
    lat: 40.573578,
    lng: -74.009102
  }, {
    lat: 40.574295,
    lng: -74.011414
  }, {
    lat: 40.575729,
    lng: -74.012489
  }, {
    lat: 40.577946,
    lng: -74.013046
  }, {
    lat: 40.579739,
    lng: -74.011543
  }, {
    lat: 40.580521,
    lng: -74.009399
  }, {
    lat: 40.580715,
    lng: -74.006653
  }, {
    lat: 40.581692,
    lng: -74.005753
  }, {
    lat: 40.581303,
    lng: -74.004082
  }],
  color: 'FF6666',
  center: {
    lat: 40.576559,
    lng: -74.00770150000005
  }
}, {
  name: 'Coney Island',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.581333,
    lng: -74.00399
  }, {
    lat: 40.571362,
    lng: -74.002319
  }, {
    lat: 40.570805,
    lng: -73.999702
  }, {
    lat: 40.570511,
    lng: -73.993095
  }, {
    lat: 40.571198,
    lng: -73.984764
  }, {
    lat: 40.572208,
    lng: -73.977982
  }, {
    lat: 40.573055,
    lng: -73.969917
  }, {
    lat: 40.573479,
    lng: -73.967728
  }, {
    lat: 40.575436,
    lng: -73.968674
  }, {
    lat: 40.583778,
    lng: -73.966782
  }, {
    lat: 40.58342,
    lng: -73.97052
  }, {
    lat: 40.582539,
    lng: -73.974808
  }, {
    lat: 40.581303,
    lng: -73.976357
  }, {
    lat: 40.580387,
    lng: -73.977982
  }, {
    lat: 40.579998,
    lng: -73.979744
  }, {
    lat: 40.582573,
    lng: -73.982834
  }, {
    lat: 40.583061,
    lng: -73.984077
  }, {
    lat: 40.580879,
    lng: -73.986565
  }, {
    lat: 40.579933,
    lng: -73.987129
  }, {
    lat: 40.579769,
    lng: -73.986824
  }, {
    lat: 40.579102,
    lng: -73.987488
  }, {
    lat: 40.578857,
    lng: -73.988457
  }, {
    lat: 40.579002,
    lng: -73.989273
  }, {
    lat: 40.579475,
    lng: -73.990623
  }, {
    lat: 40.579247,
    lng: -73.99176
  }, {
    lat: 40.580975,
    lng: -73.999443
  }, {
    lat: 40.581303,
    lng: -74.001289
  }, {
    lat: 40.581333,
    lng: -74.00399
  }],
  color: 'FFFF99',
  center: {
    lat: 40.5771445,
    lng: -73.98538599999995
  }
}, {
  name: 'Brighton Beach',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.574345,
    lng: -73.953354
  }, {
    lat: 40.579281,
    lng: -73.954338
  }, {
    lat: 40.581676,
    lng: -73.95507
  }, {
    lat: 40.582134,
    lng: -73.954941
  }, {
    lat: 40.582703,
    lng: -73.956055
  }, {
    lat: 40.582474,
    lng: -73.957237
  }, {
    lat: 40.584904,
    lng: -73.957642
  }, {
    lat: 40.583778,
    lng: -73.966766
  }, {
    lat: 40.575485,
    lng: -73.968674
  }, {
    lat: 40.573479,
    lng: -73.96769
  }, {
    lat: 40.573738,
    lng: -73.966698
  }, {
    lat: 40.573952,
    lng: -73.963417
  }, {
    lat: 40.57436,
    lng: -73.96228
  }, {
    lat: 40.574181,
    lng: -73.961288
  }, {
    lat: 40.574409,
    lng: -73.959702
  }, {
    lat: 40.57423,
    lng: -73.958992
  }, {
    lat: 40.57449,
    lng: -73.957947
  }, {
    lat: 40.574326,
    lng: -73.957024
  }, {
    lat: 40.57449,
    lng: -73.955757
  }, {
    lat: 40.574261,
    lng: -73.954422
  }, {
    lat: 40.574345,
    lng: -73.953354
  }],
  color: 'FF99FF',
  center: {
    lat: 40.5791915,
    lng: -73.96101399999998
  }
}, {
  name: 'Manhattan Beach',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.582722,
    lng: -73.955887
  }, {
    lat: 40.582996,
    lng: -73.953484
  }, {
    lat: 40.581936,
    lng: -73.953308
  }, {
    lat: 40.582249,
    lng: -73.949814
  }, {
    lat: 40.580929,
    lng: -73.942642
  }, {
    lat: 40.581059,
    lng: -73.932541
  }, {
    lat: 40.576202,
    lng: -73.931076
  }, {
    lat: 40.575665,
    lng: -73.931511
  }, {
    lat: 40.575615,
    lng: -73.934731
  }, {
    lat: 40.576019,
    lng: -73.935524
  }, {
    lat: 40.576118,
    lng: -73.935867
  }, {
    lat: 40.575531,
    lng: -73.93679
  }, {
    lat: 40.575352,
    lng: -73.942619
  }, {
    lat: 40.5756,
    lng: -73.943565
  }, {
    lat: 40.575077,
    lng: -73.946037
  }, {
    lat: 40.574345,
    lng: -73.953285
  }, {
    lat: 40.579296,
    lng: -73.954315
  }, {
    lat: 40.581676,
    lng: -73.955093
  }, {
    lat: 40.582184,
    lng: -73.954918
  }, {
    lat: 40.582722,
    lng: -73.955887
  }],
  color: '339999',
  center: {
    lat: 40.5786705,
    lng: -73.94348150000002
  }
}, {
  name: 'Gerritsen Beach',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.601704,
    lng: -73.934853
  }, {
    lat: 40.602745,
    lng: -73.933311
  }, {
    lat: 40.597694,
    lng: -73.927986
  }, {
    lat: 40.596684,
    lng: -73.929581
  }, {
    lat: 40.586483,
    lng: -73.918205
  }, {
    lat: 40.585766,
    lng: -73.919319
  }, {
    lat: 40.585571,
    lng: -73.921555
  }, {
    lat: 40.5858,
    lng: -73.922585
  }, {
    lat: 40.585472,
    lng: -73.924858
  }, {
    lat: 40.587723,
    lng: -73.927299
  }, {
    lat: 40.588634,
    lng: -73.927773
  }, {
    lat: 40.59111,
    lng: -73.924088
  }, {
    lat: 40.591309,
    lng: -73.92421
  }, {
    lat: 40.588799,
    lng: -73.928162
  }, {
    lat: 40.589252,
    lng: -73.928848
  }, {
    lat: 40.589222,
    lng: -73.929581
  }, {
    lat: 40.589745,
    lng: -73.930305
  }, {
    lat: 40.590397,
    lng: -73.930611
  }, {
    lat: 40.592091,
    lng: -73.930435
  }, {
    lat: 40.593166,
    lng: -73.929916
  }, {
    lat: 40.593685,
    lng: -73.929962
  }, {
    lat: 40.594501,
    lng: -73.930565
  }, {
    lat: 40.594372,
    lng: -73.931679
  }, {
    lat: 40.59473,
    lng: -73.932495
  }, {
    lat: 40.594566,
    lng: -73.932922
  }, {
    lat: 40.601051,
    lng: -73.934212
  }, {
    lat: 40.601704,
    lng: -73.934853
  }],
  color: 'FF99FF',
  center: {
    lat: 40.594108500000004,
    lng: -73.92652899999996
  }
}, {
  name: 'Ditmas Park',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.63234,
    lng: -73.966656
  }, {
    lat: 40.6343329,
    lng: -73.9626719
  }, {
    lat: 40.636378,
    lng: -73.95833
  }, {
    lat: 40.6448613,
    lng: -73.9599611
  }, {
    lat: 40.643774,
    lng: -73.9699529
  }, {
    lat: 40.63234,
    lng: -73.966656
  }],
  color: '999999',
  center: {
    lat: 40.642273,
    lng: -73.9647865
  }
}, {
  name: 'Prospect Park South',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.64828,
    lng: -73.971248
  }, {
    lat: 40.643774,
    lng: -73.9699529
  }, {
    lat: 40.6448613,
    lng: -73.9599611
  }, {
    lat: 40.6549062,
    lng: -73.961892
  }, {
    lat: 40.6532049,
    lng: -73.9662443
  }, {
    lat: 40.6508402,
    lng: -73.9646693
  }, {
    lat: 40.64828,
    lng: -73.971248
  }],
  color: 'DB4436',
  center: {
    lat: 40.6465705,
    lng: -73.9666555
  }
}, {
  name: 'West Midwood',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6343329,
    lng: -73.9626719
  }, {
    lat: 40.63234,
    lng: -73.966656
  }, {
    lat: 40.62862,
    lng: -73.96576
  }, {
    lat: 40.6290312,
    lng: -73.9616008
  }, {
    lat: 40.6324347,
    lng: -73.9623089
  }, {
    lat: 40.6343329,
    lng: -73.9626719
  }],
  color: 'B7DBAB',
  center: {
    lat: 40.6315596,
    lng: -73.9654609
  }
}, {
  name: 'Midwood Park',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6324347,
    lng: -73.9623089
  }, {
    lat: 40.6329232,
    lng: -73.9578242
  }, {
    lat: 40.636378,
    lng: -73.95833
  }, {
    lat: 40.6343329,
    lng: -73.9626719
  }, {
    lat: 40.6324347,
    lng: -73.9623089
  }],
  color: 'F8971B',
  center: {
    lat: 40.6340166,
    lng: -73.9623588
  }
}, {
  name: 'Fiske Terrace',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6329232,
    lng: -73.9578242
  }, {
    lat: 40.6324347,
    lng: -73.9623089
  }, {
    lat: 40.6290312,
    lng: -73.9616008
  }, {
    lat: 40.62946,
    lng: -73.95717
  }, {
    lat: 40.6329232,
    lng: -73.9578242
  }],
  color: '0BA9CC',
  center: {
    lat: 40.631287,
    lng: -73.9618777
  }
}, {
  name: 'Beverley Square West',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6439211,
    lng: -73.9687216
  }, {
    lat: 40.639639,
    lng: -73.9679169
  }, {
    lat: 40.6414137,
    lng: -73.9640116
  }, {
    lat: 40.6443689,
    lng: -73.9645588
  }, {
    lat: 40.6439211,
    lng: -73.9687216
  }],
  color: 'CDDC39',
  center: {
    lat: 40.64263,
    lng: -73.9678377
  }
}, {
  name: 'Beverley Square East',
  borough: 'Brooklyn',
  coords: [{
    lat: 40.6424017,
    lng: -73.9618341
  }, {
    lat: 40.644612,
    lng: -73.9621828
  }, {
    lat: 40.6443689,
    lng: -73.9645588
  }, {
    lat: 40.6414137,
    lng: -73.9640116
  }, {
    lat: 40.6424017,
    lng: -73.9618341
  }],
  color: 'F4B400',
  center: {
    lat: 40.643363,
    lng: -73.9651337
  }
}]);
"use strict";

window.neighborhoods = window.neighborhoods || [];
neighborhoods = neighborhoods.concat([{
  name: 'Long Island City',
  borough: 'Queens',
  color: 'FFFFFF',
  coords: [{
    lat: 40.74455840000001,
    lng: -73.9598751
  }, {
    lat: 40.742022,
    lng: -73.961641
  }, {
    lat: 40.741795,
    lng: -73.961212
  }, {
    lat: 40.741209,
    lng: -73.961298
  }, {
    lat: 40.741144,
    lng: -73.961856
  }, {
    lat: 40.740754,
    lng: -73.961985
  }, {
    lat: 40.74029900000001,
    lng: -73.961556
  }, {
    lat: 40.74007100000001,
    lng: -73.961641
  }, {
    lat: 40.740071,
    lng: -73.962156
  }, {
    lat: 40.739876,
    lng: -73.962457
  }, {
    lat: 40.73880299999999,
    lng: -73.9628
  }, {
    lat: 40.738283,
    lng: -73.96207
  }, {
    lat: 40.73812,
    lng: -73.96074
  }, {
    lat: 40.739616,
    lng: -73.956964
  }, {
    lat: 40.739811,
    lng: -73.953874
  }, {
    lat: 40.73945400000001,
    lng: -73.951857
  }, {
    lat: 40.737828,
    lng: -73.947093
  }, {
    lat: 40.737893,
    lng: -73.946578
  }, {
    lat: 40.738153,
    lng: -73.945291
  }, {
    lat: 40.738868,
    lng: -73.943359
  }, {
    lat: 40.738754,
    lng: -73.942838
  }, {
    lat: 40.737795,
    lng: -73.945459
  }, {
    lat: 40.737584,
    lng: -73.945695
  }, {
    lat: 40.737633,
    lng: -73.94591
  }, {
    lat: 40.737551,
    lng: -73.946038
  }, {
    lat: 40.736592,
    lng: -73.943249
  }, {
    lat: 40.735909,
    lng: -73.941639
  }, {
    lat: 40.735779,
    lng: -73.941618
  }, {
    lat: 40.734885000000006,
    lng: -73.940738
  }, {
    lat: 40.733795,
    lng: -73.940094
  }, {
    lat: 40.733388999999995,
    lng: -73.939987
  }, {
    lat: 40.734251,
    lng: -73.937927
  }, {
    lat: 40.734527,
    lng: -73.937498
  }, {
    lat: 40.73680300000001,
    lng: -73.931383
  }, {
    lat: 40.735584,
    lng: -73.925353
  }, {
    lat: 40.735649,
    lng: -73.92486
  }, {
    lat: 40.735047,
    lng: -73.92011700000002
  }, {
    lat: 40.735331300000006,
    lng: -73.9181671
  }, {
    lat: 40.73543800000001,
    lng: -73.91692
  }, {
    lat: 40.73680300000001,
    lng: -73.916384
  }, {
    lat: 40.736933,
    lng: -73.916985
  }, {
    lat: 40.74072199999999,
    lng: -73.915697
  }, {
    lat: 40.740478,
    lng: -73.914345
  }, {
    lat: 40.742331,
    lng: -73.913744
  }, {
    lat: 40.742152000000004,
    lng: -73.912371
  }, {
    lat: 40.745501,
    lng: -73.911706
  }, {
    lat: 40.745664,
    lng: -73.912951
  }, {
    lat: 40.748395,
    lng: -73.912393
  }, {
    lat: 40.748281,
    lng: -73.911406
  }, {
    lat: 40.74954900000001,
    lng: -73.91117
  }, {
    lat: 40.749419,
    lng: -73.909818
  }, {
    lat: 40.75068,
    lng: -73.90945
  }, {
    lat: 40.75302000000001,
    lng: -73.91041
  }, {
    lat: 40.75346,
    lng: -73.9135
  }, {
    lat: 40.75558,
    lng: -73.91172
  }, {
    lat: 40.75597,
    lng: -73.9126
  }, {
    lat: 40.75832,
    lng: -73.91065
  }, {
    lat: 40.75792,
    lng: -73.90986
  }, {
    lat: 40.76648,
    lng: -73.90301000000001
  }, {
    lat: 40.76742,
    lng: -73.90196600000002
  }, {
    lat: 40.76724000000001,
    lng: -73.90092
  }, {
    lat: 40.76624,
    lng: -73.89421
  }, {
    lat: 40.7659,
    lng: -73.8931
  }, {
    lat: 40.76686999999999,
    lng: -73.88769
  }, {
    lat: 40.76867000000001,
    lng: -73.88817
  }, {
    lat: 40.76903,
    lng: -73.88868
  }, {
    lat: 40.77306,
    lng: -73.88941
  }, {
    lat: 40.77385,
    lng: -73.89287
  }, {
    lat: 40.774,
    lng: -73.89329
  }, {
    lat: 40.77624,
    lng: -73.896473
  }, {
    lat: 40.77718,
    lng: -73.89532
  }, {
    lat: 40.77662999999999,
    lng: -73.89452
  }, {
    lat: 40.77747,
    lng: -73.89346
  }, {
    lat: 40.7772,
    lng: -73.89303
  }, {
    lat: 40.77754,
    lng: -73.89256
  }, {
    lat: 40.77783,
    lng: -73.8923
  }, {
    lat: 40.77851,
    lng: -73.89132
  }, {
    lat: 40.77875,
    lng: -73.89121
  }, {
    lat: 40.77903,
    lng: -73.89123
  }, {
    lat: 40.779579999999996,
    lng: -73.89171
  }, {
    lat: 40.779590000000006,
    lng: -73.8918
  }, {
    lat: 40.77942999999999,
    lng: -73.89225
  }, {
    lat: 40.77945700000001,
    lng: -73.892407
  }, {
    lat: 40.77953,
    lng: -73.89248
  }, {
    lat: 40.77971,
    lng: -73.89248
  }, {
    lat: 40.77998,
    lng: -73.89239
  }, {
    lat: 40.780736,
    lng: -73.891457
  }, {
    lat: 40.78179291174044,
    lng: -73.89304203640937
  }, {
    lat: 40.782470999999994,
    lng: -73.894059
  }, {
    lat: 40.782471,
    lng: -73.894193
  }, {
    lat: 40.78203577460256,
    lng: -73.89474259986525
  }, {
    lat: 40.78163,
    lng: -73.895255
  }, {
    lat: 40.78174800000001,
    lng: -73.895368
  }, {
    lat: 40.782072927101716,
    lng: -73.8950027639443
  }, {
    lat: 40.78228,
    lng: -73.89477
  }, {
    lat: 40.783263000000005,
    lng: -73.896242
  }, {
    lat: 40.78275000000001,
    lng: -73.89709
  }, {
    lat: 40.78282,
    lng: -73.89717
  }, {
    lat: 40.782474450811236,
    lng: -73.89781475342019
  }, {
    lat: 40.782,
    lng: -73.8987
  }, {
    lat: 40.78217,
    lng: -73.89944
  }, {
    lat: 40.78217000000001,
    lng: -73.90035
  }, {
    lat: 40.78207,
    lng: -73.90038
  }, {
    lat: 40.78185,
    lng: -73.90129
  }, {
    lat: 40.78122,
    lng: -73.90209
  }, {
    lat: 40.78101,
    lng: -73.90209
  }, {
    lat: 40.780370000000005,
    lng: -73.90232
  }, {
    lat: 40.78028,
    lng: -73.90247
  }, {
    lat: 40.78052,
    lng: -73.90267
  }, {
    lat: 40.7812,
    lng: -73.90247
  }, {
    lat: 40.78153,
    lng: -73.90222
  }, {
    lat: 40.781906,
    lng: -73.902118
  }, {
    lat: 40.78271899999999,
    lng: -73.901131
  }, {
    lat: 40.78273953446396,
    lng: -73.89967149342297
  }, {
    lat: 40.78275099999999,
    lng: -73.898856
  }, {
    lat: 40.782946,
    lng: -73.898556
  }, {
    lat: 40.784376,
    lng: -73.896753
  }, {
    lat: 40.785204,
    lng: -73.895827
  }, {
    lat: 40.78554599999999,
    lng: -73.896063
  }, {
    lat: 40.785658999999995,
    lng: -73.895892
  }, {
    lat: 40.786228,
    lng: -73.896407
  }, {
    lat: 40.786147,
    lng: -73.8966
  }, {
    lat: 40.786667,
    lng: -73.896922
  }, {
    lat: 40.786699,
    lng: -73.897007
  }, {
    lat: 40.78855099999999,
    lng: -73.899818
  }, {
    lat: 40.789022,
    lng: -73.900162
  }, {
    lat: 40.789412,
    lng: -73.90205
  }, {
    lat: 40.78951000000001,
    lng: -73.90205
  }, {
    lat: 40.789591,
    lng: -73.902372
  }, {
    lat: 40.789494,
    lng: -73.902544
  }, {
    lat: 40.790225,
    lng: -73.90651300000002
  }, {
    lat: 40.79038700000001,
    lng: -73.90677100000002
  }, {
    lat: 40.79093900000001,
    lng: -73.909753
  }, {
    lat: 40.790891,
    lng: -73.909882
  }, {
    lat: 40.790712,
    lng: -73.909946
  }, {
    lat: 40.790046,
    lng: -73.910955
  }, {
    lat: 40.78972100000001,
    lng: -73.910934
  }, {
    lat: 40.789753,
    lng: -73.911255
  }, {
    lat: 40.789607,
    lng: -73.911599
  }, {
    lat: 40.789737,
    lng: -73.91177
  }, {
    lat: 40.789526,
    lng: -73.912114
  }, {
    lat: 40.789396,
    lng: -73.911963
  }, {
    lat: 40.789104,
    lng: -73.912328
  }, {
    lat: 40.789022,
    lng: -73.912629
  }, {
    lat: 40.789266,
    lng: -73.912457
  }, {
    lat: 40.789396,
    lng: -73.91265
  }, {
    lat: 40.787739,
    lng: -73.914388
  }, {
    lat: 40.786438999999994,
    lng: -73.91559
  }, {
    lat: 40.786293,
    lng: -73.915461
  }, {
    lat: 40.786147,
    lng: -73.915568
  }, {
    lat: 40.786147,
    lng: -73.915804
  }, {
    lat: 40.7851926508452,
    lng: -73.91686459656289
  }, {
    lat: 40.78512299999999,
    lng: -73.916942
  }, {
    lat: 40.78488000000001,
    lng: -73.917092
  }, {
    lat: 40.784262,
    lng: -73.917242
  }, {
    lat: 40.78418099999999,
    lng: -73.917371
  }, {
    lat: 40.783986,
    lng: -73.918122
  }, {
    lat: 40.783856,
    lng: -73.918401
  }, {
    lat: 40.783385,
    lng: -73.919173
  }, {
    lat: 40.78264,
    lng: -73.91987
  }, {
    lat: 40.78015,
    lng: -73.92298
  }, {
    lat: 40.778738,
    lng: -73.924559
  }, {
    lat: 40.77835999999999,
    lng: -73.9261
  }, {
    lat: 40.778209999999994,
    lng: -73.92640000000002
  }, {
    lat: 40.77767,
    lng: -73.92712
  }, {
    lat: 40.77695,
    lng: -73.92833
  }, {
    lat: 40.776610000000005,
    lng: -73.9286
  }, {
    lat: 40.77628,
    lng: -73.92964
  }, {
    lat: 40.7762193,
    lng: -73.9297593
  }, {
    lat: 40.77643,
    lng: -73.93030000000002
  }, {
    lat: 40.77659,
    lng: -73.93064
  }, {
    lat: 40.7771,
    lng: -73.931
  }, {
    lat: 40.77728,
    lng: -73.93106
  }, {
    lat: 40.77749,
    lng: -73.93116
  }, {
    lat: 40.77783,
    lng: -73.93176
  }, {
    lat: 40.777910000000006,
    lng: -73.93222
  }, {
    lat: 40.77798,
    lng: -73.93238
  }, {
    lat: 40.778,
    lng: -73.93265
  }, {
    lat: 40.77805,
    lng: -73.93271
  }, {
    lat: 40.77788000000001,
    lng: -73.93275
  }, {
    lat: 40.77790000000001,
    lng: -73.93305
  }, {
    lat: 40.778,
    lng: -73.93322
  }, {
    lat: 40.77798,
    lng: -73.93338
  }, {
    lat: 40.77802,
    lng: -73.93345
  }, {
    lat: 40.77803,
    lng: -73.93383
  }, {
    lat: 40.778130000000004,
    lng: -73.93407
  }, {
    lat: 40.7781,
    lng: -73.93451
  }, {
    lat: 40.77805,
    lng: -73.93455
  }, {
    lat: 40.77799,
    lng: -73.93495
  }, {
    lat: 40.77792,
    lng: -73.93508
  }, {
    lat: 40.77721,
    lng: -73.93586
  }, {
    lat: 40.77719999999999,
    lng: -73.93602000000001
  }, {
    lat: 40.77684,
    lng: -73.93646
  }, {
    lat: 40.7766,
    lng: -73.93654
  }, {
    lat: 40.77495,
    lng: -73.93767000000001
  }, {
    lat: 40.7743019,
    lng: -73.9377737
  }, {
    lat: 40.77368,
    lng: -73.93782
  }, {
    lat: 40.77251,
    lng: -73.93744
  }, {
    lat: 40.77177999999999,
    lng: -73.9349
  }, {
    lat: 40.77162,
    lng: -73.93485
  }, {
    lat: 40.77152,
    lng: -73.93464
  }, {
    lat: 40.77136,
    lng: -73.93453
  }, {
    lat: 40.77127,
    lng: -73.93503
  }, {
    lat: 40.77056,
    lng: -73.93522
  }, {
    lat: 40.77046,
    lng: -73.93481
  }, {
    lat: 40.76994,
    lng: -73.93505
  }, {
    lat: 40.769450000000006,
    lng: -73.93576000000002
  }, {
    lat: 40.76962000000001,
    lng: -73.93627
  }, {
    lat: 40.76937,
    lng: -73.93664
  }, {
    lat: 40.76893,
    lng: -73.93685
  }, {
    lat: 40.76893,
    lng: -73.93769
  }, {
    lat: 40.76864,
    lng: -73.93837
  }, {
    lat: 40.767959999999995,
    lng: -73.93897
  }, {
    lat: 40.76824,
    lng: -73.93938
  }, {
    lat: 40.76811000000001,
    lng: -73.93951
  }, {
    lat: 40.76809000000001,
    lng: -73.93979
  }, {
    lat: 40.7678,
    lng: -73.94028
  }, {
    lat: 40.76754,
    lng: -73.94045
  }, {
    lat: 40.766920000000006,
    lng: -73.94144
  }, {
    lat: 40.76469,
    lng: -73.94344
  }, {
    lat: 40.76278,
    lng: -73.94477
  }, {
    lat: 40.75382,
    lng: -73.95208
  }, {
    lat: 40.751222999999996,
    lng: -73.95456
  }, {
    lat: 40.75076800000001,
    lng: -73.954861
  }, {
    lat: 40.750248,
    lng: -73.95456
  }, {
    lat: 40.749695,
    lng: -73.955032
  }, {
    lat: 40.750085000000006,
    lng: -73.955161
  }, {
    lat: 40.750118,
    lng: -73.955419
  }, {
    lat: 40.74911,
    lng: -73.956449
  }, {
    lat: 40.74846,
    lng: -73.954904
  }, {
    lat: 40.74810200000001,
    lng: -73.953144
  }, {
    lat: 40.747777,
    lng: -73.953316
  }, {
    lat: 40.748005000000006,
    lng: -73.954818
  }, {
    lat: 40.748915,
    lng: -73.957092
  }, {
    lat: 40.747094,
    lng: -73.958551
  }, {
    lat: 40.745989,
    lng: -73.959195
  }, {
    lat: 40.745339,
    lng: -73.959367
  }, {
    lat: 40.74455840000001,
    lng: -73.9598751
  }],
  center: {
    lat: 40.762164,
    lng: -73.92524500000002
  }
}, {
  name: 'Astoria',
  borough: 'Queens',
  color: 'CCCC00',
  coords: [{
    lat: 40.78264,
    lng: -73.91987
  }, {
    lat: 40.78137,
    lng: -73.92139
  }, {
    lat: 40.78139,
    lng: -73.92137
  }, {
    lat: 40.78015,
    lng: -73.92298
  }, {
    lat: 40.77947,
    lng: -73.92368
  }, {
    lat: 40.7787,
    lng: -73.92466
  }, {
    lat: 40.77836,
    lng: -73.9261
  }, {
    lat: 40.77821,
    lng: -73.9264
  }, {
    lat: 40.77767,
    lng: -73.92712
  }, {
    lat: 40.77695,
    lng: -73.92833
  }, {
    lat: 40.77661,
    lng: -73.9286
  }, {
    lat: 40.77628,
    lng: -73.92964
  }, {
    lat: 40.77614,
    lng: -73.92981
  }, {
    lat: 40.77617,
    lng: -73.92994
  }, {
    lat: 40.77628,
    lng: -73.9299
  }, {
    lat: 40.77635,
    lng: -73.93033
  }, {
    lat: 40.77643,
    lng: -73.9303
  }, {
    lat: 40.77659,
    lng: -73.93064
  }, {
    lat: 40.7771,
    lng: -73.931
  }, {
    lat: 40.77728,
    lng: -73.93106
  }, {
    lat: 40.77736,
    lng: -73.93102
  }, {
    lat: 40.77749,
    lng: -73.93108
  }, {
    lat: 40.77749,
    lng: -73.93116
  }, {
    lat: 40.77783,
    lng: -73.93176
  }, {
    lat: 40.77791,
    lng: -73.93222
  }, {
    lat: 40.77798,
    lng: -73.93238
  }, {
    lat: 40.778,
    lng: -73.93265
  }, {
    lat: 40.77805,
    lng: -73.93271
  }, {
    lat: 40.77788,
    lng: -73.93275
  }, {
    lat: 40.7779,
    lng: -73.93305
  }, {
    lat: 40.778,
    lng: -73.93322
  }, {
    lat: 40.77798,
    lng: -73.93338
  }, {
    lat: 40.77802,
    lng: -73.93345
  }, {
    lat: 40.77803,
    lng: -73.93383
  }, {
    lat: 40.77813,
    lng: -73.93407
  }, {
    lat: 40.7781,
    lng: -73.93451
  }, {
    lat: 40.77805,
    lng: -73.93455
  }, {
    lat: 40.77799,
    lng: -73.93495
  }, {
    lat: 40.77792,
    lng: -73.93508
  }, {
    lat: 40.77721,
    lng: -73.93586
  }, {
    lat: 40.7772,
    lng: -73.93602
  }, {
    lat: 40.77684,
    lng: -73.93646
  }, {
    lat: 40.7766,
    lng: -73.93654
  }, {
    lat: 40.77537,
    lng: -73.9374
  }, {
    lat: 40.77538,
    lng: -73.93744
  }, {
    lat: 40.77495,
    lng: -73.93767
  }, {
    lat: 40.7742,
    lng: -73.93781
  }, {
    lat: 40.77368,
    lng: -73.93782
  }, {
    lat: 40.77251,
    lng: -73.93744
  }, {
    lat: 40.77178,
    lng: -73.9349
  }, {
    lat: 40.77162,
    lng: -73.93485
  }, {
    lat: 40.77152,
    lng: -73.93464
  }, {
    lat: 40.77136,
    lng: -73.93453
  }, {
    lat: 40.77127,
    lng: -73.93503
  }, {
    lat: 40.77056,
    lng: -73.93522
  }, {
    lat: 40.77046,
    lng: -73.93481
  }, {
    lat: 40.76994,
    lng: -73.93505
  }, {
    lat: 40.76945,
    lng: -73.93576
  }, {
    lat: 40.76962,
    lng: -73.93627
  }, {
    lat: 40.76937,
    lng: -73.93664
  }, {
    lat: 40.76893,
    lng: -73.93685
  }, {
    lat: 40.76893,
    lng: -73.93769
  }, {
    lat: 40.76864,
    lng: -73.93837
  }, {
    lat: 40.76796,
    lng: -73.93897
  }, {
    lat: 40.76824,
    lng: -73.93938
  }, {
    lat: 40.76811,
    lng: -73.93951
  }, {
    lat: 40.76809,
    lng: -73.93979
  }, {
    lat: 40.7678,
    lng: -73.94028
  }, {
    lat: 40.76754,
    lng: -73.94045
  }, {
    lat: 40.76692,
    lng: -73.94144
  }, {
    lat: 40.7652,
    lng: -73.94294
  }, {
    lat: 40.76469,
    lng: -73.94344
  }, {
    lat: 40.76278,
    lng: -73.94477
  }, {
    lat: 40.760254,
    lng: -73.9375566
  }, {
    lat: 40.7535629,
    lng: -73.9233282
  }, {
    lat: 40.7523999,
    lng: -73.9243917
  }, {
    lat: 40.75374,
    lng: -73.91846
  }, {
    lat: 40.753887,
    lng: -73.917587
  }, {
    lat: 40.753922,
    lng: -73.916817
  }, {
    lat: 40.75387,
    lng: -73.91599
  }, {
    lat: 40.75346,
    lng: -73.9135
  }, {
    lat: 40.75558,
    lng: -73.91172
  }, {
    lat: 40.75597,
    lng: -73.9126
  }, {
    lat: 40.75832,
    lng: -73.91065
  }, {
    lat: 40.75792,
    lng: -73.90986
  }, {
    lat: 40.76648,
    lng: -73.90301
  }, {
    lat: 40.76742,
    lng: -73.901966
  }, {
    lat: 40.76724,
    lng: -73.90092
  }, {
    lat: 40.77385,
    lng: -73.89287
  }, {
    lat: 40.774,
    lng: -73.89329
  }, {
    lat: 40.77624,
    lng: -73.896473
  }, {
    lat: 40.77718,
    lng: -73.89532
  }, {
    lat: 40.77663,
    lng: -73.89452
  }, {
    lat: 40.77747,
    lng: -73.89346
  }, {
    lat: 40.7772,
    lng: -73.89303
  }, {
    lat: 40.77783,
    lng: -73.8923
  }, {
    lat: 40.77851,
    lng: -73.89132
  }, {
    lat: 40.77875,
    lng: -73.89121
  }, {
    lat: 40.77903,
    lng: -73.89123
  }, {
    lat: 40.77958,
    lng: -73.89171
  }, {
    lat: 40.77959,
    lng: -73.8918
  }, {
    lat: 40.77943,
    lng: -73.89225
  }, {
    lat: 40.779457,
    lng: -73.892407
  }, {
    lat: 40.77953,
    lng: -73.89248
  }, {
    lat: 40.77971,
    lng: -73.89248
  }, {
    lat: 40.77998,
    lng: -73.89239
  }, {
    lat: 40.780736,
    lng: -73.891457
  }, {
    lat: 40.782471,
    lng: -73.894059
  }, {
    lat: 40.782471,
    lng: -73.894193
  }, {
    lat: 40.78163,
    lng: -73.895255
  }, {
    lat: 40.781748,
    lng: -73.895368
  }, {
    lat: 40.78228,
    lng: -73.89477
  }, {
    lat: 40.783263,
    lng: -73.896242
  }, {
    lat: 40.78275,
    lng: -73.89709
  }, {
    lat: 40.78282,
    lng: -73.89717
  }, {
    lat: 40.782,
    lng: -73.8987
  }, {
    lat: 40.78217,
    lng: -73.89944
  }, {
    lat: 40.78217,
    lng: -73.90035
  }, {
    lat: 40.78207,
    lng: -73.90038
  }, {
    lat: 40.78185,
    lng: -73.90129
  }, {
    lat: 40.78122,
    lng: -73.90209
  }, {
    lat: 40.78101,
    lng: -73.90209
  }, {
    lat: 40.78037,
    lng: -73.90232
  }, {
    lat: 40.78028,
    lng: -73.90247
  }, {
    lat: 40.78052,
    lng: -73.90267
  }, {
    lat: 40.7812,
    lng: -73.90247
  }, {
    lat: 40.78153,
    lng: -73.90222
  }, {
    lat: 40.781906,
    lng: -73.902118
  }, {
    lat: 40.782719,
    lng: -73.901131
  }, {
    lat: 40.782751,
    lng: -73.898856
  }, {
    lat: 40.782946,
    lng: -73.898556
  }, {
    lat: 40.785204,
    lng: -73.895827
  }, {
    lat: 40.785546,
    lng: -73.896063
  }, {
    lat: 40.786147,
    lng: -73.8966
  }, {
    lat: 40.786667,
    lng: -73.896922
  }, {
    lat: 40.786699,
    lng: -73.897007
  }, {
    lat: 40.788551,
    lng: -73.899818
  }, {
    lat: 40.789022,
    lng: -73.900162
  }, {
    lat: 40.789412,
    lng: -73.90205
  }, {
    lat: 40.78951,
    lng: -73.90205
  }, {
    lat: 40.789591,
    lng: -73.902372
  }, {
    lat: 40.789494,
    lng: -73.902544
  }, {
    lat: 40.790225,
    lng: -73.906513
  }, {
    lat: 40.790387,
    lng: -73.906771
  }, {
    lat: 40.790939,
    lng: -73.909753
  }, {
    lat: 40.790891,
    lng: -73.909882
  }, {
    lat: 40.790712,
    lng: -73.909946
  }, {
    lat: 40.790046,
    lng: -73.910955
  }, {
    lat: 40.789721,
    lng: -73.910934
  }, {
    lat: 40.789753,
    lng: -73.911255
  }, {
    lat: 40.789607,
    lng: -73.911599
  }, {
    lat: 40.789737,
    lng: -73.91177
  }, {
    lat: 40.789526,
    lng: -73.912114
  }, {
    lat: 40.789396,
    lng: -73.911963
  }, {
    lat: 40.789104,
    lng: -73.912328
  }, {
    lat: 40.789022,
    lng: -73.912629
  }, {
    lat: 40.789266,
    lng: -73.912457
  }, {
    lat: 40.789396,
    lng: -73.91265
  }, {
    lat: 40.787739,
    lng: -73.914388
  }, {
    lat: 40.786439,
    lng: -73.91559
  }, {
    lat: 40.786293,
    lng: -73.915461
  }, {
    lat: 40.786147,
    lng: -73.915568
  }, {
    lat: 40.786147,
    lng: -73.915804
  }, {
    lat: 40.785193,
    lng: -73.916865
  }, {
    lat: 40.78488,
    lng: -73.917092
  }, {
    lat: 40.784262,
    lng: -73.917242
  }, {
    lat: 40.784181,
    lng: -73.917371
  }, {
    lat: 40.783986,
    lng: -73.918122
  }, {
    lat: 40.783385,
    lng: -73.919173
  }, {
    lat: 40.78264,
    lng: -73.91987
  }],
  center: {
    lat: 40.765785,
    lng: -73.92702300000002
  }
}, {
  name: 'Dutch Kills',
  borough: 'Queens',
  color: 'FF0000',
  coords: [{
    lat: 40.753792,
    lng: -73.952114
  }, {
    lat: 40.752621,
    lng: -73.949579
  }, {
    lat: 40.754003,
    lng: -73.948506
  }, {
    lat: 40.749655,
    lng: -73.938612
  }, {
    lat: 40.749573,
    lng: -73.938162
  }, {
    lat: 40.748932,
    lng: -73.937347
  }, {
    lat: 40.749378,
    lng: -73.936394
  }, {
    lat: 40.750881,
    lng: -73.934792
  }, {
    lat: 40.751644,
    lng: -73.933807
  }, {
    lat: 40.752003,
    lng: -73.932068
  }, {
    lat: 40.752117,
    lng: -73.925697
  }, {
    lat: 40.7523999,
    lng: -73.9243917
  }, {
    lat: 40.7535629,
    lng: -73.9233282
  }, {
    lat: 40.760254,
    lng: -73.9375566
  }, {
    lat: 40.76278,
    lng: -73.94477
  }, {
    lat: 40.753792,
    lng: -73.952114
  }],
  center: {
    lat: 40.757178,
    lng: -73.939393
  }
}, {
  name: "Hunter's Point",
  borough: 'Queens',
  color: '66CCFF',
  coords: [{
    lat: 40.753792,
    lng: -73.952114
  }, {
    lat: 40.751222999999996,
    lng: -73.95456
  }, {
    lat: 40.75076800000001,
    lng: -73.954861
  }, {
    lat: 40.750248,
    lng: -73.95456
  }, {
    lat: 40.749695,
    lng: -73.955032
  }, {
    lat: 40.750085000000006,
    lng: -73.955161
  }, {
    lat: 40.750118,
    lng: -73.955419
  }, {
    lat: 40.74911,
    lng: -73.956449
  }, {
    lat: 40.74846,
    lng: -73.954904
  }, {
    lat: 40.74810200000001,
    lng: -73.953144
  }, {
    lat: 40.747777,
    lng: -73.953316
  }, {
    lat: 40.748005000000006,
    lng: -73.954818
  }, {
    lat: 40.748915,
    lng: -73.957092
  }, {
    lat: 40.747094,
    lng: -73.958551
  }, {
    lat: 40.745989,
    lng: -73.959195
  }, {
    lat: 40.745339,
    lng: -73.959367
  }, {
    lat: 40.743258,
    lng: -73.960826
  }, {
    lat: 40.742022,
    lng: -73.961641
  }, {
    lat: 40.741795,
    lng: -73.961212
  }, {
    lat: 40.741209,
    lng: -73.961298
  }, {
    lat: 40.741144,
    lng: -73.961856
  }, {
    lat: 40.740754,
    lng: -73.961985
  }, {
    lat: 40.74029900000001,
    lng: -73.961556
  }, {
    lat: 40.74007100000001,
    lng: -73.961641
  }, {
    lat: 40.740071,
    lng: -73.962156
  }, {
    lat: 40.739876,
    lng: -73.962457
  }, {
    lat: 40.73880299999999,
    lng: -73.9628
  }, {
    lat: 40.738283,
    lng: -73.96207
  }, {
    lat: 40.73812,
    lng: -73.96074
  }, {
    lat: 40.739616,
    lng: -73.956964
  }, {
    lat: 40.739811,
    lng: -73.953874
  }, {
    lat: 40.73945400000001,
    lng: -73.951857
  }, {
    lat: 40.737828,
    lng: -73.947093
  }, {
    lat: 40.737893,
    lng: -73.946578
  }, {
    lat: 40.738153,
    lng: -73.945291
  }, {
    lat: 40.738868,
    lng: -73.943359
  }, {
    lat: 40.737925,
    lng: -73.938356
  }, {
    lat: 40.744932000000006,
    lng: -73.93694
  }, {
    lat: 40.745127,
    lng: -73.937884
  }, {
    lat: 40.74182700000001,
    lng: -73.946406
  }, {
    lat: 40.742323,
    lng: -73.949051
  }, {
    lat: 40.744347,
    lng: -73.948397
  }, {
    lat: 40.744330999999995,
    lng: -73.948215
  }, {
    lat: 40.745233,
    lng: -73.945833
  }, {
    lat: 40.744054,
    lng: -73.945146
  }, {
    lat: 40.744079000000006,
    lng: -73.944577
  }, {
    lat: 40.746233,
    lng: -73.9399
  }, {
    lat: 40.748216,
    lng: -73.936638
  }, {
    lat: 40.74834599999999,
    lng: -73.936713
  }, {
    lat: 40.749573,
    lng: -73.938162
  }, {
    lat: 40.749655,
    lng: -73.938612
  }, {
    lat: 40.754003,
    lng: -73.948506
  }, {
    lat: 40.752621,
    lng: -73.94957900000001
  }, {
    lat: 40.753792,
    lng: -73.952114
  }],
  center: {
    lat: 40.745915499999995,
    lng: -73.94971900000002
  }
}, {
  name: 'Blissville',
  borough: 'Queens',
  color: '006600',
  coords: [{
    lat: 40.738023,
    lng: -73.944794
  }, {
    lat: 40.737795,
    lng: -73.945459
  }, {
    lat: 40.737584,
    lng: -73.945695
  }, {
    lat: 40.737633,
    lng: -73.94591
  }, {
    lat: 40.737551,
    lng: -73.946038
  }, {
    lat: 40.736592,
    lng: -73.943249
  }, {
    lat: 40.735909,
    lng: -73.941639
  }, {
    lat: 40.735779,
    lng: -73.941618
  }, {
    lat: 40.734885000000006,
    lng: -73.940738
  }, {
    lat: 40.733795,
    lng: -73.940094
  }, {
    lat: 40.733388999999995,
    lng: -73.939987
  }, {
    lat: 40.734251,
    lng: -73.937927
  }, {
    lat: 40.734527,
    lng: -73.937498
  }, {
    lat: 40.73680300000001,
    lng: -73.931383
  }, {
    lat: 40.737421,
    lng: -73.934902
  }, {
    lat: 40.737925,
    lng: -73.938356
  }, {
    lat: 40.738754,
    lng: -73.942838
  }, {
    lat: 40.738023,
    lng: -73.944794
  }],
  center: {
    lat: 40.736071499999994,
    lng: -73.93871049999996
  }
}, {
  name: 'Sunnyside',
  borough: 'Queens',
  color: '999999',
  coords: [{
    lat: 40.748932,
    lng: -73.937347
  }, {
    lat: 40.749378,
    lng: -73.936394
  }, {
    lat: 40.750881,
    lng: -73.934792
  }, {
    lat: 40.751644,
    lng: -73.933807
  }, {
    lat: 40.752003,
    lng: -73.932068
  }, {
    lat: 40.752117,
    lng: -73.925697
  }, {
    lat: 40.753735,
    lng: -73.918518
  }, {
    lat: 40.753887,
    lng: -73.917587
  }, {
    lat: 40.753922,
    lng: -73.916817
  }, {
    lat: 40.753864,
    lng: -73.91597
  }, {
    lat: 40.753468,
    lng: -73.913528
  }, {
    lat: 40.752995,
    lng: -73.910416
  }, {
    lat: 40.750717,
    lng: -73.909477
  }, {
    lat: 40.749046,
    lng: -73.909943
  }, {
    lat: 40.748508,
    lng: -73.910179
  }, {
    lat: 40.74942,
    lng: -73.909821
  }, {
    lat: 40.74955,
    lng: -73.911171
  }, {
    lat: 40.74828,
    lng: -73.911407
  }, {
    lat: 40.748394,
    lng: -73.912392
  }, {
    lat: 40.745663,
    lng: -73.912949
  }, {
    lat: 40.745502,
    lng: -73.911705
  }, {
    lat: 40.742153,
    lng: -73.912369
  }, {
    lat: 40.742332,
    lng: -73.913742
  }, {
    lat: 40.740479,
    lng: -73.914345
  }, {
    lat: 40.740723,
    lng: -73.915695
  }, {
    lat: 40.736935,
    lng: -73.916985
  }, {
    lat: 40.736801,
    lng: -73.916382
  }, {
    lat: 40.735439,
    lng: -73.916924
  }, {
    lat: 40.735046,
    lng: -73.92012
  }, {
    lat: 40.735649,
    lng: -73.924858
  }, {
    lat: 40.735584,
    lng: -73.925354
  }, {
    lat: 40.73682,
    lng: -73.931404
  }, {
    lat: 40.737926,
    lng: -73.938332
  }, {
    lat: 40.74493,
    lng: -73.936943
  }, {
    lat: 40.745129,
    lng: -73.937881
  }, {
    lat: 40.746037,
    lng: -73.934319
  }, {
    lat: 40.748199,
    lng: -73.936623
  }, {
    lat: 40.748932,
    lng: -73.937347
  }],
  center: {
    lat: 40.744484,
    lng: -73.92390449999999
  }
}, {
  name: 'Sunnyside Gardens',
  borough: 'Queens',
  color: '6666FF',
  coords: [{
    lat: 40.74693,
    lng: -73.92082
  }, {
    lat: 40.74656,
    lng: -73.91753
  }, {
    lat: 40.74351,
    lng: -73.91812
  }, {
    lat: 40.74346,
    lng: -73.91779
  }, {
    lat: 40.74362,
    lng: -73.91775
  }, {
    lat: 40.74357,
    lng: -73.91721
  }, {
    lat: 40.74409,
    lng: -73.91711
  }, {
    lat: 40.74405,
    lng: -73.91669
  }, {
    lat: 40.74629,
    lng: -73.91625
  }, {
    lat: 40.74639,
    lng: -73.91716
  }, {
    lat: 40.746712,
    lng: -73.917099
  }, {
    lat: 40.74664,
    lng: -73.91617
  }, {
    lat: 40.74702,
    lng: -73.91611
  }, {
    lat: 40.74689000000001,
    lng: -73.91518
  }, {
    lat: 40.747988,
    lng: -73.914943
  }, {
    lat: 40.74794,
    lng: -73.91441
  }, {
    lat: 40.7487,
    lng: -73.91427000000002
  }, {
    lat: 40.74867,
    lng: -73.91387
  }, {
    lat: 40.74857,
    lng: -73.91389
  }, {
    lat: 40.748520000000006,
    lng: -73.91297000000002
  }, {
    lat: 40.74845,
    lng: -73.91299
  }, {
    lat: 40.748329999999996,
    lng: -73.91188
  }, {
    lat: 40.74864,
    lng: -73.91174
  }, {
    lat: 40.74867,
    lng: -73.91197
  }, {
    lat: 40.749930000000006,
    lng: -73.91168
  }, {
    lat: 40.75018,
    lng: -73.91357
  }, {
    lat: 40.75016,
    lng: -73.91456
  }, {
    lat: 40.75007,
    lng: -73.91535
  }, {
    lat: 40.74946,
    lng: -73.91547
  }, {
    lat: 40.749550000000006,
    lng: -73.91633
  }, {
    lat: 40.74924000000001,
    lng: -73.91642
  }, {
    lat: 40.74946,
    lng: -73.91832
  }, {
    lat: 40.74924000000001,
    lng: -73.91964
  }, {
    lat: 40.74886,
    lng: -73.91974
  }, {
    lat: 40.74894,
    lng: -73.9204
  }, {
    lat: 40.74693,
    lng: -73.92082
  }],
  center: {
    lat: 40.74682,
    lng: -73.91624999999999
  }
}, {
  name: 'Woodside',
  borough: 'Queens',
  color: '009900',
  coords: [{
    lat: 40.76648,
    lng: -73.90301000000001
  }, {
    lat: 40.75792,
    lng: -73.90986
  }, {
    lat: 40.75832,
    lng: -73.91065
  }, {
    lat: 40.75597,
    lng: -73.9126
  }, {
    lat: 40.75558,
    lng: -73.91172
  }, {
    lat: 40.75346,
    lng: -73.9135
  }, {
    lat: 40.75302000000001,
    lng: -73.91041
  }, {
    lat: 40.75068,
    lng: -73.90945
  }, {
    lat: 40.749419,
    lng: -73.909818
  }, {
    lat: 40.74954900000001,
    lng: -73.91117
  }, {
    lat: 40.748281,
    lng: -73.911406
  }, {
    lat: 40.748395,
    lng: -73.912393
  }, {
    lat: 40.745664,
    lng: -73.912951
  }, {
    lat: 40.745501,
    lng: -73.911706
  }, {
    lat: 40.742152000000004,
    lng: -73.912371
  }, {
    lat: 40.74163,
    lng: -73.90758
  }, {
    lat: 40.73829,
    lng: -73.90831
  }, {
    lat: 40.73662,
    lng: -73.90906
  }, {
    lat: 40.73659000000001,
    lng: -73.90773
  }, {
    lat: 40.73688,
    lng: -73.90672
  }, {
    lat: 40.73888,
    lng: -73.90181
  }, {
    lat: 40.73963,
    lng: -73.90033
  }, {
    lat: 40.744266,
    lng: -73.894497
  }, {
    lat: 40.74522,
    lng: -73.89434
  }, {
    lat: 40.7462,
    lng: -73.89447
  }, {
    lat: 40.7501,
    lng: -73.89692
  }, {
    lat: 40.75258000000001,
    lng: -73.89736
  }, {
    lat: 40.75484000000001,
    lng: -73.89874
  }, {
    lat: 40.75621,
    lng: -73.89938
  }, {
    lat: 40.75733,
    lng: -73.89964
  }, {
    lat: 40.757850000000005,
    lng: -73.89979
  }, {
    lat: 40.76321000000001,
    lng: -73.8964
  }, {
    lat: 40.76411,
    lng: -73.8952
  }, {
    lat: 40.765069999999994,
    lng: -73.89471
  }, {
    lat: 40.76564,
    lng: -73.89408000000002
  }, {
    lat: 40.7659,
    lng: -73.8931
  }, {
    lat: 40.76742,
    lng: -73.90196600000002
  }, {
    lat: 40.76648,
    lng: -73.90301000000001
  }],
  center: {
    lat: 40.752005000000004,
    lng: -73.9033
  }
}, {
  name: 'Maspeth',
  borough: 'Queens',
  color: '003366',
  coords: [{
    lat: 40.72787000000001,
    lng: -73.92867
  }, {
    lat: 40.72565,
    lng: -73.92656
  }, {
    lat: 40.72489,
    lng: -73.92558
  }, {
    lat: 40.72438,
    lng: -73.92468
  }, {
    lat: 40.72428,
    lng: -73.92416
  }, {
    lat: 40.72428,
    lng: -73.92287
  }, {
    lat: 40.72415000000001,
    lng: -73.92205
  }, {
    lat: 40.72369,
    lng: -73.92048
  }, {
    lat: 40.72312,
    lng: -73.92071
  }, {
    lat: 40.72345,
    lng: -73.92136
  }, {
    lat: 40.72368,
    lng: -73.92243
  }, {
    lat: 40.723580000000005,
    lng: -73.92451
  }, {
    lat: 40.72229,
    lng: -73.92518
  }, {
    lat: 40.72194,
    lng: -73.92483
  }, {
    lat: 40.721729999999994,
    lng: -73.9243
  }, {
    lat: 40.72088,
    lng: -73.92425
  }, {
    lat: 40.72003,
    lng: -73.9238
  }, {
    lat: 40.71966,
    lng: -73.92413
  }, {
    lat: 40.71885,
    lng: -73.92398
  }, {
    lat: 40.71865,
    lng: -73.9237
  }, {
    lat: 40.71813000000001,
    lng: -73.92346
  }, {
    lat: 40.71755,
    lng: -73.92282
  }, {
    lat: 40.71637,
    lng: -73.92219
  }, {
    lat: 40.716069999999995,
    lng: -73.92054
  }, {
    lat: 40.71576,
    lng: -73.92065
  }, {
    lat: 40.71608,
    lng: -73.92234
  }, {
    lat: 40.71579,
    lng: -73.92282
  }, {
    lat: 40.71564000000001,
    lng: -73.92348
  }, {
    lat: 40.71517,
    lng: -73.9241
  }, {
    lat: 40.71397000000001,
    lng: -73.92365
  }, {
    lat: 40.7135,
    lng: -73.9156826
  }, {
    lat: 40.71373,
    lng: -73.91528
  }, {
    lat: 40.71402,
    lng: -73.91489
  }, {
    lat: 40.714387,
    lng: -73.914235
  }, {
    lat: 40.713622,
    lng: -73.91284
  }, {
    lat: 40.71419,
    lng: -73.91227
  }, {
    lat: 40.71488,
    lng: -73.9135
  }, {
    lat: 40.715672,
    lng: -73.912368
  }, {
    lat: 40.716542,
    lng: -73.911499
  }, {
    lat: 40.71734699999999,
    lng: -73.910555
  }, {
    lat: 40.717827,
    lng: -73.909643
  }, {
    lat: 40.71757999999999,
    lng: -73.90941
  }, {
    lat: 40.71738,
    lng: -73.90768
  }, {
    lat: 40.716260000000005,
    lng: -73.90743
  }, {
    lat: 40.71698,
    lng: -73.90181
  }, {
    lat: 40.71691,
    lng: -73.90178
  }, {
    lat: 40.71753199999999,
    lng: -73.900534
  }, {
    lat: 40.717863,
    lng: -73.899858
  }, {
    lat: 40.718018,
    lng: -73.900046
  }, {
    lat: 40.718053999999995,
    lng: -73.900266
  }, {
    lat: 40.718720000000005,
    lng: -73.90017
  }, {
    lat: 40.71976,
    lng: -73.90052
  }, {
    lat: 40.720150000000004,
    lng: -73.89981
  }, {
    lat: 40.72008,
    lng: -73.89848
  }, {
    lat: 40.72042,
    lng: -73.89711
  }, {
    lat: 40.72155,
    lng: -73.8975
  }, {
    lat: 40.721270000000004,
    lng: -73.89981
  }, {
    lat: 40.72337,
    lng: -73.90003
  }, {
    lat: 40.72384,
    lng: -73.89921
  }, {
    lat: 40.72316,
    lng: -73.89831
  }, {
    lat: 40.72387,
    lng: -73.8958
  }, {
    lat: 40.72345,
    lng: -73.89559
  }, {
    lat: 40.72314,
    lng: -73.89434
  }, {
    lat: 40.72496,
    lng: -73.89029
  }, {
    lat: 40.724592,
    lng: -73.88623900000002
  }, {
    lat: 40.727827999999995,
    lng: -73.886257
  }, {
    lat: 40.727568,
    lng: -73.886837
  }, {
    lat: 40.728625,
    lng: -73.886837
  }, {
    lat: 40.728706,
    lng: -73.885656
  }, {
    lat: 40.730625,
    lng: -73.886343
  }, {
    lat: 40.73035999999999,
    lng: -73.88685
  }, {
    lat: 40.73015300000001,
    lng: -73.887545
  }, {
    lat: 40.733243,
    lng: -73.887888
  }, {
    lat: 40.734072000000005,
    lng: -73.888038
  }, {
    lat: 40.73408800000001,
    lng: -73.888532
  }, {
    lat: 40.734527,
    lng: -73.888532
  }, {
    lat: 40.735909,
    lng: -73.88939
  }, {
    lat: 40.736153,
    lng: -73.887609
  }, {
    lat: 40.73865700000001,
    lng: -73.887223
  }, {
    lat: 40.740819,
    lng: -73.89881
  }, {
    lat: 40.73963,
    lng: -73.90033
  }, {
    lat: 40.73828,
    lng: -73.90331
  }, {
    lat: 40.73659000000001,
    lng: -73.90773
  }, {
    lat: 40.73659000000001,
    lng: -73.90911
  }, {
    lat: 40.736160000000005,
    lng: -73.90919
  }, {
    lat: 40.73347,
    lng: -73.91061
  }, {
    lat: 40.732459999999996,
    lng: -73.90628
  }, {
    lat: 40.73564,
    lng: -73.90482
  }, {
    lat: 40.73399,
    lng: -73.90113
  }, {
    lat: 40.72891,
    lng: -73.90525
  }, {
    lat: 40.72856,
    lng: -73.90576
  }, {
    lat: 40.72995,
    lng: -73.90864
  }, {
    lat: 40.729989999999994,
    lng: -73.91177
  }, {
    lat: 40.72917,
    lng: -73.9122
  }, {
    lat: 40.72862,
    lng: -73.9122
  }, {
    lat: 40.72862,
    lng: -73.91499
  }, {
    lat: 40.72803,
    lng: -73.91503
  }, {
    lat: 40.72852,
    lng: -73.91795
  }, {
    lat: 40.73096,
    lng: -73.91752
  }, {
    lat: 40.73116,
    lng: -73.91834
  }, {
    lat: 40.73099,
    lng: -73.91868
  }, {
    lat: 40.73112,
    lng: -73.91932
  }, {
    lat: 40.733239999999995,
    lng: -73.91872
  }, {
    lat: 40.73324,
    lng: -73.91834
  }, {
    lat: 40.7347,
    lng: -73.91782000000002
  }, {
    lat: 40.7347,
    lng: -73.91838
  }, {
    lat: 40.735331300000006,
    lng: -73.9181671
  }, {
    lat: 40.73509,
    lng: -73.92001
  }, {
    lat: 40.73418,
    lng: -73.92267
  }, {
    lat: 40.73311,
    lng: -73.92452
  }, {
    lat: 40.73213,
    lng: -73.92524
  }, {
    lat: 40.72937000000001,
    lng: -73.92705
  }, {
    lat: 40.728429999999996,
    lng: -73.92799
  }, {
    lat: 40.72787000000001,
    lng: -73.92867
  }],
  center: {
    lat: 40.7271595,
    lng: -73.90716299999997
  }
}, {
  name: 'Ditmars',
  borough: 'Queens',
  color: '0066FF',
  coords: [{
    lat: 40.778559,
    lng: -73.925507
  }, {
    lat: 40.774399,
    lng: -73.922288
  }, {
    lat: 40.770727,
    lng: -73.917353
  }, {
    lat: 40.781159,
    lng: -73.904564
  }, {
    lat: 40.781906,
    lng: -73.902118
  }, {
    lat: 40.78271899999999,
    lng: -73.901131
  }, {
    lat: 40.78275099999999,
    lng: -73.898856
  }, {
    lat: 40.782946,
    lng: -73.898556
  }, {
    lat: 40.784376,
    lng: -73.896753
  }, {
    lat: 40.785204,
    lng: -73.895827
  }, {
    lat: 40.78554599999999,
    lng: -73.896063
  }, {
    lat: 40.785658999999995,
    lng: -73.895892
  }, {
    lat: 40.786228,
    lng: -73.896407
  }, {
    lat: 40.786147,
    lng: -73.8966
  }, {
    lat: 40.786667,
    lng: -73.896922
  }, {
    lat: 40.786699,
    lng: -73.897007
  }, {
    lat: 40.78855099999999,
    lng: -73.899818
  }, {
    lat: 40.789022,
    lng: -73.900162
  }, {
    lat: 40.789412,
    lng: -73.90205
  }, {
    lat: 40.78951000000001,
    lng: -73.90205
  }, {
    lat: 40.789591,
    lng: -73.902372
  }, {
    lat: 40.789494,
    lng: -73.902544
  }, {
    lat: 40.790225,
    lng: -73.90651300000002
  }, {
    lat: 40.79038700000001,
    lng: -73.90677100000002
  }, {
    lat: 40.79093900000001,
    lng: -73.909753
  }, {
    lat: 40.790891,
    lng: -73.909882
  }, {
    lat: 40.790712,
    lng: -73.909946
  }, {
    lat: 40.790046,
    lng: -73.910955
  }, {
    lat: 40.78972100000001,
    lng: -73.910934
  }, {
    lat: 40.789737,
    lng: -73.91110500000002
  }, {
    lat: 40.789753,
    lng: -73.911255
  }, {
    lat: 40.789607,
    lng: -73.911599
  }, {
    lat: 40.789737,
    lng: -73.91177
  }, {
    lat: 40.789526,
    lng: -73.912114
  }, {
    lat: 40.789396,
    lng: -73.911963
  }, {
    lat: 40.789104,
    lng: -73.912328
  }, {
    lat: 40.789022,
    lng: -73.912629
  }, {
    lat: 40.789266,
    lng: -73.912457
  }, {
    lat: 40.789396,
    lng: -73.91265
  }, {
    lat: 40.787739,
    lng: -73.914388
  }, {
    lat: 40.786438999999994,
    lng: -73.91559
  }, {
    lat: 40.786293,
    lng: -73.915461
  }, {
    lat: 40.786147,
    lng: -73.915568
  }, {
    lat: 40.786147,
    lng: -73.915804
  }, {
    lat: 40.78512299999999,
    lng: -73.916942
  }, {
    lat: 40.78488000000001,
    lng: -73.917092
  }, {
    lat: 40.784262,
    lng: -73.917242
  }, {
    lat: 40.78418099999999,
    lng: -73.917371
  }, {
    lat: 40.783986,
    lng: -73.918122
  }, {
    lat: 40.783856,
    lng: -73.918401
  }, {
    lat: 40.783385,
    lng: -73.919173
  }, {
    lat: 40.782605,
    lng: -73.919881
  }, {
    lat: 40.781809,
    lng: -73.920911
  }, {
    lat: 40.78046,
    lng: -73.922585
  }, {
    lat: 40.780216,
    lng: -73.922928
  }, {
    lat: 40.77956700000001,
    lng: -73.923615
  }, {
    lat: 40.778738,
    lng: -73.924559
  }, {
    lat: 40.778559,
    lng: -73.925507
  }],
  center: {
    lat: 40.780833,
    lng: -73.91066699999999
  }
}, {
  name: 'Astoria Heights',
  borough: 'Queens',
  color: '006666',
  coords: [{
    lat: 40.7659,
    lng: -73.8931
  }, {
    lat: 40.76686999999999,
    lng: -73.88769
  }, {
    lat: 40.76867000000001,
    lng: -73.88817
  }, {
    lat: 40.76903,
    lng: -73.88868
  }, {
    lat: 40.77306,
    lng: -73.88941
  }, {
    lat: 40.77385,
    lng: -73.89287
  }, {
    lat: 40.76724000000001,
    lng: -73.90092
  }, {
    lat: 40.7659,
    lng: -73.8931
  }],
  center: {
    lat: 40.769875,
    lng: -73.89430500000003
  }
}, {
  name: 'Steinway',
  borough: 'Queens',
  color: '003300',
  coords: [{
    lat: 40.77023,
    lng: -73.91641
  }, {
    lat: 40.76977,
    lng: -73.91347
  }, {
    lat: 40.76935,
    lng: -73.91027
  }, {
    lat: 40.76883,
    lng: -73.91091
  }, {
    lat: 40.76742,
    lng: -73.90196600000002
  }, {
    lat: 40.76724000000001,
    lng: -73.90092
  }, {
    lat: 40.77385,
    lng: -73.89287
  }, {
    lat: 40.774,
    lng: -73.89329
  }, {
    lat: 40.774260000000005,
    lng: -73.89371
  }, {
    lat: 40.77624,
    lng: -73.896473
  }, {
    lat: 40.77718,
    lng: -73.89532
  }, {
    lat: 40.77662999999999,
    lng: -73.89452
  }, {
    lat: 40.77747,
    lng: -73.89346
  }, {
    lat: 40.7772,
    lng: -73.89303
  }, {
    lat: 40.77754,
    lng: -73.89256
  }, {
    lat: 40.77783,
    lng: -73.8923
  }, {
    lat: 40.77851,
    lng: -73.89132
  }, {
    lat: 40.77875,
    lng: -73.89121
  }, {
    lat: 40.77903,
    lng: -73.89123
  }, {
    lat: 40.779579999999996,
    lng: -73.89171
  }, {
    lat: 40.779590000000006,
    lng: -73.8918
  }, {
    lat: 40.77942999999999,
    lng: -73.89225
  }, {
    lat: 40.77945700000001,
    lng: -73.892407
  }, {
    lat: 40.77953,
    lng: -73.89248
  }, {
    lat: 40.77971,
    lng: -73.89248
  }, {
    lat: 40.77998,
    lng: -73.89239
  }, {
    lat: 40.780736,
    lng: -73.891457
  }, {
    lat: 40.78178,
    lng: -73.89297
  }, {
    lat: 40.782470999999994,
    lng: -73.894059
  }, {
    lat: 40.782471,
    lng: -73.894193
  }, {
    lat: 40.78163,
    lng: -73.895255
  }, {
    lat: 40.78174800000001,
    lng: -73.895368
  }, {
    lat: 40.78228,
    lng: -73.89477
  }, {
    lat: 40.783263000000005,
    lng: -73.896242
  }, {
    lat: 40.78275000000001,
    lng: -73.89709
  }, {
    lat: 40.78282,
    lng: -73.89717
  }, {
    lat: 40.782,
    lng: -73.8987
  }, {
    lat: 40.78217,
    lng: -73.89944
  }, {
    lat: 40.78217000000001,
    lng: -73.90035
  }, {
    lat: 40.78207,
    lng: -73.90038
  }, {
    lat: 40.78185,
    lng: -73.90129
  }, {
    lat: 40.78122,
    lng: -73.90209
  }, {
    lat: 40.78101,
    lng: -73.90209
  }, {
    lat: 40.780370000000005,
    lng: -73.90232
  }, {
    lat: 40.78028,
    lng: -73.90247
  }, {
    lat: 40.78052,
    lng: -73.90267
  }, {
    lat: 40.7812,
    lng: -73.90247
  }, {
    lat: 40.78153,
    lng: -73.90222
  }, {
    lat: 40.781906,
    lng: -73.902118
  }, {
    lat: 40.781169999999996,
    lng: -73.90456
  }, {
    lat: 40.77074,
    lng: -73.91737
  }, {
    lat: 40.77023,
    lng: -73.91641
  }],
  center: {
    lat: 40.77525150000001,
    lng: -73.90429
  }
}, {
  name: 'Jackson Heights',
  borough: 'Queens',
  color: '33FFFF',
  coords: [{
    lat: 40.7659,
    lng: -73.8931
  }, {
    lat: 40.76562,
    lng: -73.89408000000002
  }, {
    lat: 40.764920000000004,
    lng: -73.89481
  }, {
    lat: 40.76414,
    lng: -73.89514
  }, {
    lat: 40.76385,
    lng: -73.89548
  }, {
    lat: 40.76321000000001,
    lng: -73.8964
  }, {
    lat: 40.75847,
    lng: -73.89964
  }, {
    lat: 40.75733,
    lng: -73.89964
  }, {
    lat: 40.75618,
    lng: -73.89941
  }, {
    lat: 40.75478,
    lng: -73.89872
  }, {
    lat: 40.75258000000001,
    lng: -73.89736
  }, {
    lat: 40.75007999999999,
    lng: -73.89692
  }, {
    lat: 40.74651,
    lng: -73.89465
  }, {
    lat: 40.749159,
    lng: -73.869367
  }, {
    lat: 40.75155,
    lng: -73.87081
  }, {
    lat: 40.75684,
    lng: -73.87364
  }, {
    lat: 40.7582,
    lng: -73.87444
  }, {
    lat: 40.76896,
    lng: -73.87638
  }, {
    lat: 40.76988,
    lng: -73.87599
  }, {
    lat: 40.77051,
    lng: -73.87604
  }, {
    lat: 40.77006,
    lng: -73.87928
  }, {
    lat: 40.76982,
    lng: -73.87992
  }, {
    lat: 40.76842,
    lng: -73.88246
  }, {
    lat: 40.767860000000006,
    lng: -73.88378
  }, {
    lat: 40.766859999999994,
    lng: -73.8877
  }, {
    lat: 40.7659,
    lng: -73.8931
  }],
  center: {
    lat: 40.75851,
    lng: -73.8845035
  }
}, {
  name: 'Ridgewood',
  borough: 'Queens',
  color: '333366',
  coords: [{
    lat: 40.70942999999999,
    lng: -73.92190000000001
  }, {
    lat: 40.70302000000001,
    lng: -73.91108
  }, {
    lat: 40.701910000000005,
    lng: -73.91215
  }, {
    lat: 40.70056,
    lng: -73.90988
  }, {
    lat: 40.69944,
    lng: -73.91104
  }, {
    lat: 40.69553,
    lng: -73.90393
  }, {
    lat: 40.69393,
    lng: -73.90551
  }, {
    lat: 40.6918,
    lng: -73.90164
  }, {
    lat: 40.69229000000001,
    lng: -73.9012
  }, {
    lat: 40.6961,
    lng: -73.8989
  }, {
    lat: 40.69729,
    lng: -73.89801
  }, {
    lat: 40.70162,
    lng: -73.89353
  }, {
    lat: 40.70274,
    lng: -73.89256
  }, {
    lat: 40.70486,
    lng: -73.89087000000002
  }, {
    lat: 40.70808,
    lng: -73.89005
  }, {
    lat: 40.70725,
    lng: -73.88872
  }, {
    lat: 40.70655000000001,
    lng: -73.88698000000001
  }, {
    lat: 40.70637000000001,
    lng: -73.8863
  }, {
    lat: 40.70623,
    lng: -73.88348
  }, {
    lat: 40.70666000000001,
    lng: -73.87713
  }, {
    lat: 40.71055,
    lng: -73.87889
  }, {
    lat: 40.71267,
    lng: -73.87999
  }, {
    lat: 40.71218,
    lng: -73.88505
  }, {
    lat: 40.71221,
    lng: -73.88634
  }, {
    lat: 40.71486000000001,
    lng: -73.88713
  }, {
    lat: 40.72321999999999,
    lng: -73.89413
  }, {
    lat: 40.72314,
    lng: -73.89434
  }, {
    lat: 40.72345,
    lng: -73.89559
  }, {
    lat: 40.72387,
    lng: -73.8958
  }, {
    lat: 40.72316,
    lng: -73.89831
  }, {
    lat: 40.72384,
    lng: -73.89921
  }, {
    lat: 40.72337,
    lng: -73.90003
  }, {
    lat: 40.721270000000004,
    lng: -73.89981
  }, {
    lat: 40.72155,
    lng: -73.8975
  }, {
    lat: 40.72042,
    lng: -73.89711
  }, {
    lat: 40.72008,
    lng: -73.89848
  }, {
    lat: 40.720150000000004,
    lng: -73.89981
  }, {
    lat: 40.71976,
    lng: -73.90052
  }, {
    lat: 40.718720000000005,
    lng: -73.90017
  }, {
    lat: 40.718053999999995,
    lng: -73.900266
  }, {
    lat: 40.718018,
    lng: -73.900046
  }, {
    lat: 40.717863,
    lng: -73.899858
  }, {
    lat: 40.71691,
    lng: -73.90178
  }, {
    lat: 40.71698,
    lng: -73.90181
  }, {
    lat: 40.716260000000005,
    lng: -73.90743
  }, {
    lat: 40.71738,
    lng: -73.90768
  }, {
    lat: 40.71757999999999,
    lng: -73.90941
  }, {
    lat: 40.717827,
    lng: -73.909643
  }, {
    lat: 40.71734699999999,
    lng: -73.910555
  }, {
    lat: 40.716542,
    lng: -73.911499
  }, {
    lat: 40.715672,
    lng: -73.912368
  }, {
    lat: 40.71488,
    lng: -73.9135
  }, {
    lat: 40.71419,
    lng: -73.91227
  }, {
    lat: 40.713622,
    lng: -73.91284
  }, {
    lat: 40.714403000000004,
    lng: -73.914224
  }, {
    lat: 40.71402,
    lng: -73.91489
  }, {
    lat: 40.71373,
    lng: -73.91528
  }, {
    lat: 40.71341,
    lng: -73.91589
  }, {
    lat: 40.712740000000004,
    lng: -73.91797
  }, {
    lat: 40.71202,
    lng: -73.91923
  }, {
    lat: 40.71175,
    lng: -73.9196
  }, {
    lat: 40.71138,
    lng: -73.91989
  }, {
    lat: 40.70942999999999,
    lng: -73.92190000000001
  }],
  center: {
    lat: 40.707835,
    lng: -73.89951499999995
  }
}, {
  name: 'Glendale',
  borough: 'Queens',
  color: 'FF0000',
  coords: [{
    lat: 40.6918,
    lng: -73.90164
  }, {
    lat: 40.688230000000004,
    lng: -73.90044
  }, {
    lat: 40.68797,
    lng: -73.90099
  }, {
    lat: 40.68138,
    lng: -73.89653
  }, {
    lat: 40.68216,
    lng: -73.89625
  }, {
    lat: 40.6846,
    lng: -73.89445
  }, {
    lat: 40.68249,
    lng: -73.89303
  }, {
    lat: 40.68538,
    lng: -73.88842
  }, {
    lat: 40.68719,
    lng: -73.88385
  }, {
    lat: 40.68948999999999,
    lng: -73.88333
  }, {
    lat: 40.69288999999999,
    lng: -73.87518
  }, {
    lat: 40.69329,
    lng: -73.87509
  }, {
    lat: 40.69513,
    lng: -73.869
  }, {
    lat: 40.69713000000001,
    lng: -73.8704
  }, {
    lat: 40.69873,
    lng: -73.869
  }, {
    lat: 40.700790000000005,
    lng: -73.86934
  }, {
    lat: 40.70109999999999,
    lng: -73.86894
  }, {
    lat: 40.701820000000005,
    lng: -73.86885
  }, {
    lat: 40.70227,
    lng: -73.86887
  }, {
    lat: 40.70234000000001,
    lng: -73.86885
  }, {
    lat: 40.70292,
    lng: -73.86791
  }, {
    lat: 40.70247,
    lng: -73.8664
  }, {
    lat: 40.70278,
    lng: -73.86477
  }, {
    lat: 40.70284000000001,
    lng: -73.86329
  }, {
    lat: 40.702630000000006,
    lng: -73.86153
  }, {
    lat: 40.702400000000004,
    lng: -73.86007
  }, {
    lat: 40.70258,
    lng: -73.85896
  }, {
    lat: 40.70278,
    lng: -73.85857
  }, {
    lat: 40.70131000000001,
    lng: -73.85889
  }, {
    lat: 40.70112,
    lng: -73.85718
  }, {
    lat: 40.70168999999999,
    lng: -73.85718
  }, {
    lat: 40.70187,
    lng: -73.85632
  }, {
    lat: 40.701910000000005,
    lng: -73.85531
  }, {
    lat: 40.70259999999999,
    lng: -73.85527
  }, {
    lat: 40.702389999999994,
    lng: -73.85239
  }, {
    lat: 40.70496,
    lng: -73.85473
  }, {
    lat: 40.70553,
    lng: -73.8543
  }, {
    lat: 40.70627,
    lng: -73.85443
  }, {
    lat: 40.706539,
    lng: -73.854568
  }, {
    lat: 40.705172,
    lng: -73.857915
  }, {
    lat: 40.705823,
    lng: -73.858001
  }, {
    lat: 40.706929,
    lng: -73.858859
  }, {
    lat: 40.7118,
    lng: -73.85948
  }, {
    lat: 40.713012,
    lng: -73.859417
  }, {
    lat: 40.710304,
    lng: -73.864748
  }, {
    lat: 40.710345,
    lng: -73.865429
  }, {
    lat: 40.70893,
    lng: -73.869928
  }, {
    lat: 40.70733,
    lng: -73.86911
  }, {
    lat: 40.706327,
    lng: -73.868898
  }, {
    lat: 40.705904,
    lng: -73.870893
  }, {
    lat: 40.706116,
    lng: -73.871022
  }, {
    lat: 40.70587,
    lng: -73.8719
  }, {
    lat: 40.706148,
    lng: -73.872031
  }, {
    lat: 40.705791000000005,
    lng: -73.873769
  }, {
    lat: 40.706165,
    lng: -73.873876
  }, {
    lat: 40.705547,
    lng: -73.87666600000001
  }, {
    lat: 40.70666000000001,
    lng: -73.87713
  }, {
    lat: 40.70623,
    lng: -73.88348
  }, {
    lat: 40.70637000000001,
    lng: -73.8863
  }, {
    lat: 40.70655000000001,
    lng: -73.88698000000001
  }, {
    lat: 40.70725,
    lng: -73.88872
  }, {
    lat: 40.70808,
    lng: -73.89005
  }, {
    lat: 40.70486,
    lng: -73.89087000000002
  }, {
    lat: 40.70162,
    lng: -73.89353
  }, {
    lat: 40.69729,
    lng: -73.89801
  }, {
    lat: 40.6961,
    lng: -73.8989
  }, {
    lat: 40.69229000000001,
    lng: -73.9012
  }, {
    lat: 40.6918,
    lng: -73.90164
  }],
  center: {
    lat: 40.697196,
    lng: -73.87701500000003
  }
}, {
  name: 'Middle Village',
  borough: 'Queens',
  color: '0099FF',
  coords: [{
    lat: 40.71486000000001,
    lng: -73.88713
  }, {
    lat: 40.71221,
    lng: -73.88634
  }, {
    lat: 40.71218,
    lng: -73.88505
  }, {
    lat: 40.71267,
    lng: -73.87999
  }, {
    lat: 40.71055,
    lng: -73.87889
  }, {
    lat: 40.70666000000001,
    lng: -73.87713
  }, {
    lat: 40.705547,
    lng: -73.87666600000001
  }, {
    lat: 40.706165,
    lng: -73.873876
  }, {
    lat: 40.705791000000005,
    lng: -73.873769
  }, {
    lat: 40.706148,
    lng: -73.872031
  }, {
    lat: 40.705888,
    lng: -73.871881
  }, {
    lat: 40.706116,
    lng: -73.871022
  }, {
    lat: 40.705904,
    lng: -73.870893
  }, {
    lat: 40.706327,
    lng: -73.868898
  }, {
    lat: 40.70728700000001,
    lng: -73.86907
  }, {
    lat: 40.70893,
    lng: -73.869928
  }, {
    lat: 40.710345,
    lng: -73.865429
  }, {
    lat: 40.710304,
    lng: -73.864748
  }, {
    lat: 40.713012,
    lng: -73.859417
  }, {
    lat: 40.713988,
    lng: -73.859589
  }, {
    lat: 40.714932,
    lng: -73.860018
  }, {
    lat: 40.718998,
    lng: -73.864352
  }, {
    lat: 40.724429,
    lng: -73.869245
  }, {
    lat: 40.726251,
    lng: -73.87036
  }, {
    lat: 40.72934,
    lng: -73.871433
  }, {
    lat: 40.730576,
    lng: -73.874909
  }, {
    lat: 40.73015300000001,
    lng: -73.87640800000001
  }, {
    lat: 40.728706,
    lng: -73.880185
  }, {
    lat: 40.728169,
    lng: -73.88497
  }, {
    lat: 40.727827999999995,
    lng: -73.886257
  }, {
    lat: 40.724592,
    lng: -73.88623900000002
  }, {
    lat: 40.72496,
    lng: -73.89029
  }, {
    lat: 40.72321999999999,
    lng: -73.89413
  }, {
    lat: 40.71486000000001,
    lng: -73.88713
  }],
  center: {
    lat: 40.718061500000005,
    lng: -73.87677350000001
  }
}, {
  name: 'Elmhurst',
  borough: 'Queens',
  color: 'CC33CC',
  coords: [{
    lat: 40.727568,
    lng: -73.886837
  }, {
    lat: 40.727827999999995,
    lng: -73.886257
  }, {
    lat: 40.728169,
    lng: -73.88497
  }, {
    lat: 40.728706,
    lng: -73.880185
  }, {
    lat: 40.73015300000001,
    lng: -73.87640800000001
  }, {
    lat: 40.730592,
    lng: -73.874799
  }, {
    lat: 40.733795,
    lng: -73.864309
  }, {
    lat: 40.736657,
    lng: -73.865829
  }, {
    lat: 40.740803,
    lng: -73.867546
  }, {
    lat: 40.741746000000006,
    lng: -73.867568
  }, {
    lat: 40.742299,
    lng: -73.867482
  }, {
    lat: 40.743469,
    lng: -73.867546
  }, {
    lat: 40.74768,
    lng: -73.868533
  }, {
    lat: 40.749159,
    lng: -73.86937
  }, {
    lat: 40.74651,
    lng: -73.89465
  }, {
    lat: 40.746152,
    lng: -73.894454
  }, {
    lat: 40.745225,
    lng: -73.894325
  }, {
    lat: 40.744266,
    lng: -73.894497
  }, {
    lat: 40.740819,
    lng: -73.89881
  }, {
    lat: 40.73865700000001,
    lng: -73.887223
  }, {
    lat: 40.736153,
    lng: -73.887609
  }, {
    lat: 40.735909,
    lng: -73.88939
  }, {
    lat: 40.734527,
    lng: -73.888532
  }, {
    lat: 40.73408800000001,
    lng: -73.888532
  }, {
    lat: 40.734072000000005,
    lng: -73.888038
  }, {
    lat: 40.733243,
    lng: -73.887888
  }, {
    lat: 40.73015300000001,
    lng: -73.887545
  }, {
    lat: 40.730365,
    lng: -73.886858
  }, {
    lat: 40.730625,
    lng: -73.886343
  }, {
    lat: 40.728706,
    lng: -73.885656
  }, {
    lat: 40.728625,
    lng: -73.886837
  }, {
    lat: 40.727568,
    lng: -73.886837
  }],
  center: {
    lat: 40.7383635,
    lng: -73.88155949999998
  }
}, {
  name: 'Rego Park',
  borough: 'Queens',
  color: '006600',
  coords: [{
    lat: 40.72934,
    lng: -73.871433
  }, {
    lat: 40.726251,
    lng: -73.87036
  }, {
    lat: 40.724429,
    lng: -73.869245
  }, {
    lat: 40.718998,
    lng: -73.864352
  }, {
    lat: 40.714932,
    lng: -73.860018
  }, {
    lat: 40.713988,
    lng: -73.859589
  }, {
    lat: 40.713012,
    lng: -73.859417
  }, {
    lat: 40.7118,
    lng: -73.85948
  }, {
    lat: 40.71134,
    lng: -73.85644
  }, {
    lat: 40.71372,
    lng: -73.856773
  }, {
    lat: 40.71394,
    lng: -73.856676
  }, {
    lat: 40.714078,
    lng: -73.856773
  }, {
    lat: 40.71712,
    lng: -73.85715
  }, {
    lat: 40.717298,
    lng: -73.857234
  }, {
    lat: 40.717477,
    lng: -73.857116
  }, {
    lat: 40.71781,
    lng: -73.85724
  }, {
    lat: 40.719689,
    lng: -73.857436
  }, {
    lat: 40.71986,
    lng: -73.856667
  }, {
    lat: 40.721494,
    lng: -73.857286
  }, {
    lat: 40.72361600000001,
    lng: -73.855916
  }, {
    lat: 40.72239,
    lng: -73.85254
  }, {
    lat: 40.72256,
    lng: -73.85205
  }, {
    lat: 40.722608,
    lng: -73.851625
  }, {
    lat: 40.722542999999995,
    lng: -73.851088
  }, {
    lat: 40.722608,
    lng: -73.849114
  }, {
    lat: 40.722933,
    lng: -73.847354
  }, {
    lat: 40.723501999999996,
    lng: -73.84847
  }, {
    lat: 40.7239968,
    lng: -73.8492805
  }, {
    lat: 40.724543,
    lng: -73.850015
  }, {
    lat: 40.72530700000001,
    lng: -73.850637
  }, {
    lat: 40.725698,
    lng: -73.85111
  }, {
    lat: 40.726543,
    lng: -73.852418
  }, {
    lat: 40.728592,
    lng: -73.85804
  }, {
    lat: 40.72896599999999,
    lng: -73.857804
  }, {
    lat: 40.729617,
    lng: -73.858148
  }, {
    lat: 40.730251,
    lng: -73.855852
  }, {
    lat: 40.73548,
    lng: -73.85859
  }, {
    lat: 40.733795,
    lng: -73.864309
  }, {
    lat: 40.730576,
    lng: -73.874909
  }, {
    lat: 40.72934,
    lng: -73.871433
  }],
  center: {
    lat: 40.72341,
    lng: -73.8611315
  }
}, {
  name: 'Forest Hills',
  borough: 'Queens',
  color: '000099',
  coords: [{
    lat: 40.711809,
    lng: -73.859546
  }, {
    lat: 40.706929,
    lng: -73.858859
  }, {
    lat: 40.705823,
    lng: -73.858001
  }, {
    lat: 40.705172,
    lng: -73.857915
  }, {
    lat: 40.706539,
    lng: -73.854568
  }, {
    lat: 40.708262999999995,
    lng: -73.848903
  }, {
    lat: 40.708198,
    lng: -73.846542
  }, {
    lat: 40.708198,
    lng: -73.845984
  }, {
    lat: 40.708784,
    lng: -73.843538
  }, {
    lat: 40.709955,
    lng: -73.841264
  }, {
    lat: 40.710638,
    lng: -73.837873
  }, {
    lat: 40.711874,
    lng: -73.83615700000001
  }, {
    lat: 40.714671,
    lng: -73.830835
  }, {
    lat: 40.715615,
    lng: -73.829891
  }, {
    lat: 40.71903,
    lng: -73.834526
  }, {
    lat: 40.71964800000001,
    lng: -73.834998
  }, {
    lat: 40.721274,
    lng: -73.835556
  }, {
    lat: 40.723681,
    lng: -73.837058
  }, {
    lat: 40.726446,
    lng: -73.838388
  }, {
    lat: 40.728527,
    lng: -73.839719
  }, {
    lat: 40.730121,
    lng: -73.841135
  }, {
    lat: 40.731096,
    lng: -73.842895
  }, {
    lat: 40.732917,
    lng: -73.844354
  }, {
    lat: 40.734251,
    lng: -73.845083
  }, {
    lat: 40.735616,
    lng: -73.845727
  }, {
    lat: 40.73708,
    lng: -73.84607
  }, {
    lat: 40.738738,
    lng: -73.846929
  }, {
    lat: 40.738445,
    lng: -73.848639
  }, {
    lat: 40.7380226,
    lng: -73.8497794
  }, {
    lat: 40.737015,
    lng: -73.853145
  }, {
    lat: 40.73548,
    lng: -73.85859
  }, {
    lat: 40.730251,
    lng: -73.855852
  }, {
    lat: 40.729617,
    lng: -73.858148
  }, {
    lat: 40.72896599999999,
    lng: -73.857804
  }, {
    lat: 40.728592,
    lng: -73.85804
  }, {
    lat: 40.726543,
    lng: -73.852418
  }, {
    lat: 40.725698,
    lng: -73.85111
  }, {
    lat: 40.72530700000001,
    lng: -73.850637
  }, {
    lat: 40.724543,
    lng: -73.850015
  }, {
    lat: 40.724023,
    lng: -73.84935
  }, {
    lat: 40.723501999999996,
    lng: -73.84847
  }, {
    lat: 40.722933,
    lng: -73.847354
  }, {
    lat: 40.722608,
    lng: -73.849114
  }, {
    lat: 40.722542999999995,
    lng: -73.851088
  }, {
    lat: 40.722608,
    lng: -73.851625
  }, {
    lat: 40.722592,
    lng: -73.85201100000002
  }, {
    lat: 40.722397,
    lng: -73.852547
  }, {
    lat: 40.72361600000001,
    lng: -73.855916
  }, {
    lat: 40.721494,
    lng: -73.857286
  }, {
    lat: 40.71986,
    lng: -73.856667
  }, {
    lat: 40.719689,
    lng: -73.857436
  }, {
    lat: 40.717827,
    lng: -73.857254
  }, {
    lat: 40.717477,
    lng: -73.857116
  }, {
    lat: 40.717298,
    lng: -73.857234
  }, {
    lat: 40.71716,
    lng: -73.857163
  }, {
    lat: 40.714078,
    lng: -73.856773
  }, {
    lat: 40.71394,
    lng: -73.856676
  }, {
    lat: 40.71372,
    lng: -73.856773
  }, {
    lat: 40.711341,
    lng: -73.85643900000001
  }, {
    lat: 40.711809,
    lng: -73.859546
  }],
  center: {
    lat: 40.721954999999994,
    lng: -73.8447185
  }
}, {
  name: 'Corona',
  borough: 'Queens',
  color: '333333',
  coords: [{
    lat: 40.74768,
    lng: -73.868533
  }, {
    lat: 40.743469,
    lng: -73.867546
  }, {
    lat: 40.740803,
    lng: -73.867546
  }, {
    lat: 40.736657,
    lng: -73.865829
  }, {
    lat: 40.733795,
    lng: -73.864309
  }, {
    lat: 40.73548,
    lng: -73.85859
  }, {
    lat: 40.737893,
    lng: -73.850055
  }, {
    lat: 40.738445,
    lng: -73.848639
  }, {
    lat: 40.739616000000005,
    lng: -73.846235
  }, {
    lat: 40.74072199999999,
    lng: -73.850141
  }, {
    lat: 40.75148299999999,
    lng: -73.855677
  }, {
    lat: 40.75002,
    lng: -73.860998
  }, {
    lat: 40.749159,
    lng: -73.869367
  }, {
    lat: 40.74768,
    lng: -73.868533
  }],
  center: {
    lat: 40.742639,
    lng: -73.857801
  }
}, {
  name: 'East Elmhurst',
  borough: 'Queens',
  color: 'FF0000',
  coords: [{
    lat: 40.77385,
    lng: -73.89287
  }, {
    lat: 40.76724000000001,
    lng: -73.90092
  }, {
    lat: 40.76624,
    lng: -73.89421
  }, {
    lat: 40.757850000000005,
    lng: -73.89979
  }, {
    lat: 40.76143,
    lng: -73.8664
  }, {
    lat: 40.76,
    lng: -73.85902
  }, {
    lat: 40.76276399999999,
    lng: -73.859668
  }, {
    lat: 40.76676199999999,
    lng: -73.862758
  }, {
    lat: 40.76695699999999,
    lng: -73.862457
  }, {
    lat: 40.76707,
    lng: -73.86177
  }, {
    lat: 40.76689,
    lng: -73.86106
  }, {
    lat: 40.76681,
    lng: -73.85968
  }, {
    lat: 40.76695,
    lng: -73.85878
  }, {
    lat: 40.76723,
    lng: -73.85833
  }, {
    lat: 40.76792,
    lng: -73.85772
  }, {
    lat: 40.76836,
    lng: -73.85741
  }, {
    lat: 40.76854,
    lng: -73.85714
  }, {
    lat: 40.76864,
    lng: -73.85688
  }, {
    lat: 40.76878,
    lng: -73.85687
  }, {
    lat: 40.76885,
    lng: -73.85678
  }, {
    lat: 40.768170000000005,
    lng: -73.85534
  }, {
    lat: 40.76805,
    lng: -73.85489
  }, {
    lat: 40.76708,
    lng: -73.85308
  }, {
    lat: 40.76683,
    lng: -73.85294
  }, {
    lat: 40.76654,
    lng: -73.85266
  }, {
    lat: 40.76624,
    lng: -73.85264
  }, {
    lat: 40.7658,
    lng: -73.85217
  }, {
    lat: 40.76547,
    lng: -73.85209
  }, {
    lat: 40.76507,
    lng: -73.8519
  }, {
    lat: 40.764920000000004,
    lng: -73.85171
  }, {
    lat: 40.764920000000004,
    lng: -73.85131
  }, {
    lat: 40.76528,
    lng: -73.8512
  }, {
    lat: 40.76558,
    lng: -73.85132
  }, {
    lat: 40.76601,
    lng: -73.85168
  }, {
    lat: 40.76703,
    lng: -73.85239
  }, {
    lat: 40.76745,
    lng: -73.85252
  }, {
    lat: 40.7703,
    lng: -73.85817
  }, {
    lat: 40.77079,
    lng: -73.85761
  }, {
    lat: 40.7702,
    lng: -73.85649
  }, {
    lat: 40.77205000000001,
    lng: -73.85478
  }, {
    lat: 40.78063,
    lng: -73.87278
  }, {
    lat: 40.78215,
    lng: -73.87153
  }, {
    lat: 40.78233999999999,
    lng: -73.8705
  }, {
    lat: 40.78367,
    lng: -73.86947000000002
  }, {
    lat: 40.7851,
    lng: -73.86988
  }, {
    lat: 40.78726,
    lng: -73.86819
  }, {
    lat: 40.78536,
    lng: -73.86982
  }, {
    lat: 40.78604,
    lng: -73.87128
  }, {
    lat: 40.78164,
    lng: -73.8749
  }, {
    lat: 40.78151,
    lng: -73.87514
  }, {
    lat: 40.78307,
    lng: -73.87831
  }, {
    lat: 40.78185,
    lng: -73.87934
  }, {
    lat: 40.78173999999999,
    lng: -73.87906
  }, {
    lat: 40.78088,
    lng: -73.87879
  }, {
    lat: 40.78065,
    lng: -73.87919
  }, {
    lat: 40.780699999999996,
    lng: -73.87969
  }, {
    lat: 40.78063,
    lng: -73.87992
  }, {
    lat: 40.78062,
    lng: -73.88123
  }, {
    lat: 40.7802,
    lng: -73.88449
  }, {
    lat: 40.78008,
    lng: -73.88486
  }, {
    lat: 40.77961,
    lng: -73.88501
  }, {
    lat: 40.7789,
    lng: -73.88501
  }, {
    lat: 40.7754,
    lng: -73.88421
  }, {
    lat: 40.77535,
    lng: -73.88473
  }, {
    lat: 40.77513,
    lng: -73.88486
  }, {
    lat: 40.77444,
    lng: -73.88454
  }, {
    lat: 40.77425,
    lng: -73.88413
  }, {
    lat: 40.77417,
    lng: -73.88413
  }, {
    lat: 40.77401999999999,
    lng: -73.88548
  }, {
    lat: 40.77451,
    lng: -73.88559
  }, {
    lat: 40.77443000000001,
    lng: -73.88574
  }, {
    lat: 40.77399,
    lng: -73.88561
  }, {
    lat: 40.7736,
    lng: -73.88956
  }, {
    lat: 40.773039999999995,
    lng: -73.88939
  }, {
    lat: 40.77385,
    lng: -73.89287
  }],
  center: {
    lat: 40.772555000000004,
    lng: -73.87606
  }
}, {
  name: 'North Corona',
  borough: 'Queens',
  color: '0099FF',
  coords: [{
    lat: 40.756781999999994,
    lng: -73.873665
  }, {
    lat: 40.75155,
    lng: -73.87081
  }, {
    lat: 40.749159,
    lng: -73.869367
  }, {
    lat: 40.74768,
    lng: -73.868533
  }, {
    lat: 40.744802,
    lng: -73.867782
  }, {
    lat: 40.750004000000004,
    lng: -73.850723
  }, {
    lat: 40.758392,
    lng: -73.855251
  }, {
    lat: 40.758261999999995,
    lng: -73.856174
  }, {
    lat: 40.75792,
    lng: -73.858577
  }, {
    lat: 40.75767599999999,
    lng: -73.8648
  }, {
    lat: 40.756781999999994,
    lng: -73.873665
  }],
  center: {
    lat: 40.751597000000004,
    lng: -73.86219400000004
  }
}, {
  name: 'Willets Point',
  borough: 'Queens',
  color: '00CC33',
  coords: [{
    lat: 40.764795,
    lng: -73.842394
  }, {
    lat: 40.764356,
    lng: -73.842866
  }, {
    lat: 40.763592,
    lng: -73.843017
  }, {
    lat: 40.763316,
    lng: -73.843703
  }, {
    lat: 40.762812000000004,
    lng: -73.844433
  }, {
    lat: 40.761496,
    lng: -73.84638500000001
  }, {
    lat: 40.755352,
    lng: -73.843231
  }, {
    lat: 40.755563,
    lng: -73.842416
  }, {
    lat: 40.756782,
    lng: -73.839262
  }, {
    lat: 40.756896,
    lng: -73.839304
  }, {
    lat: 40.758684,
    lng: -73.838532
  }, {
    lat: 40.759871,
    lng: -73.838017
  }, {
    lat: 40.761008,
    lng: -73.83737300000001
  }, {
    lat: 40.76107300000001,
    lng: -73.837073
  }, {
    lat: 40.761366,
    lng: -73.837159
  }, {
    lat: 40.761480000000006,
    lng: -73.837266
  }, {
    lat: 40.76209699999999,
    lng: -73.837438
  }, {
    lat: 40.762471,
    lng: -73.837202
  }, {
    lat: 40.764031,
    lng: -73.838017
  }, {
    lat: 40.764795,
    lng: -73.838639
  }, {
    lat: 40.764746,
    lng: -73.839025
  }, {
    lat: 40.76494099999999,
    lng: -73.839176
  }, {
    lat: 40.765234,
    lng: -73.839669
  }, {
    lat: 40.765299,
    lng: -73.840356
  }, {
    lat: 40.765348,
    lng: -73.840485
  }, {
    lat: 40.765347999999996,
    lng: -73.840656
  }, {
    lat: 40.764795,
    lng: -73.842394
  }],
  center: {
    lat: 40.76035,
    lng: -73.84172899999999
  }
}, {
  name: 'College Point',
  borough: 'Queens',
  color: 'CCCC00',
  coords: [{
    lat: 40.775465,
    lng: -73.8488
  }, {
    lat: 40.77542,
    lng: -73.84877
  }, {
    lat: 40.775,
    lng: -73.849
  }, {
    lat: 40.77472,
    lng: -73.84907
  }, {
    lat: 40.77437,
    lng: -73.84905
  }, {
    lat: 40.77371,
    lng: -73.84876
  }, {
    lat: 40.77354,
    lng: -73.84877
  }, {
    lat: 40.77287,
    lng: -73.84918
  }, {
    lat: 40.77231,
    lng: -73.84976
  }, {
    lat: 40.77211,
    lng: -73.8498
  }, {
    lat: 40.77174,
    lng: -73.84971
  }, {
    lat: 40.77152,
    lng: -73.84949
  }, {
    lat: 40.77145,
    lng: -73.84912
  }, {
    lat: 40.77137,
    lng: -73.84898
  }, {
    lat: 40.77065,
    lng: -73.84863
  }, {
    lat: 40.77033,
    lng: -73.84853
  }, {
    lat: 40.77014,
    lng: -73.84852
  }, {
    lat: 40.77002,
    lng: -73.84905
  }, {
    lat: 40.7701,
    lng: -73.8491
  }, {
    lat: 40.76999,
    lng: -73.84948
  }, {
    lat: 40.77004,
    lng: -73.84951
  }, {
    lat: 40.76995,
    lng: -73.8498
  }, {
    lat: 40.7699,
    lng: -73.84979
  }, {
    lat: 40.76993,
    lng: -73.8497
  }, {
    lat: 40.76982,
    lng: -73.84965
  }, {
    lat: 40.76979,
    lng: -73.84972
  }, {
    lat: 40.76966,
    lng: -73.84966
  }, {
    lat: 40.7697,
    lng: -73.84957
  }, {
    lat: 40.76959,
    lng: -73.84952
  }, {
    lat: 40.76955,
    lng: -73.8496
  }, {
    lat: 40.7695,
    lng: -73.84955
  }, {
    lat: 40.76972,
    lng: -73.84888
  }, {
    lat: 40.76994,
    lng: -73.84901
  }, {
    lat: 40.76999,
    lng: -73.84881
  }, {
    lat: 40.77,
    lng: -73.84858
  }, {
    lat: 40.76968,
    lng: -73.84851
  }, {
    lat: 40.76945,
    lng: -73.84861
  }, {
    lat: 40.76921,
    lng: -73.8489
  }, {
    lat: 40.76897,
    lng: -73.84892
  }, {
    lat: 40.76873,
    lng: -73.84877
  }, {
    lat: 40.76869,
    lng: -73.84869
  }, {
    lat: 40.76865,
    lng: -73.84826
  }, {
    lat: 40.76861,
    lng: -73.84818
  }, {
    lat: 40.76823,
    lng: -73.84806
  }, {
    lat: 40.76801,
    lng: -73.84851
  }, {
    lat: 40.76731,
    lng: -73.8479
  }, {
    lat: 40.76666,
    lng: -73.8475
  }, {
    lat: 40.76646,
    lng: -73.84733
  }, {
    lat: 40.76635,
    lng: -73.84708
  }, {
    lat: 40.76629,
    lng: -73.84618
  }, {
    lat: 40.76607,
    lng: -73.84597
  }, {
    lat: 40.7659,
    lng: -73.84587
  }, {
    lat: 40.76583,
    lng: -73.84575
  }, {
    lat: 40.76556,
    lng: -73.84522
  }, {
    lat: 40.76541,
    lng: -73.84474
  }, {
    lat: 40.76539,
    lng: -73.84455
  }, {
    lat: 40.76545,
    lng: -73.84389
  }, {
    lat: 40.76552,
    lng: -73.84385
  }, {
    lat: 40.76563,
    lng: -73.84389
  }, {
    lat: 40.76577,
    lng: -73.84379
  }, {
    lat: 40.76578,
    lng: -73.84367
  }, {
    lat: 40.76565,
    lng: -73.84365
  }, {
    lat: 40.76565,
    lng: -73.84357
  }, {
    lat: 40.76578,
    lng: -73.8434
  }, {
    lat: 40.76585,
    lng: -73.84317
  }, {
    lat: 40.76598,
    lng: -73.84307
  }, {
    lat: 40.76634,
    lng: -73.84306
  }, {
    lat: 40.7668,
    lng: -73.84282
  }, {
    lat: 40.76671,
    lng: -73.84276
  }, {
    lat: 40.76661,
    lng: -73.84276
  }, {
    lat: 40.76617,
    lng: -73.84289
  }, {
    lat: 40.76602,
    lng: -73.84289
  }, {
    lat: 40.76592,
    lng: -73.84286
  }, {
    lat: 40.76581,
    lng: -73.84273
  }, {
    lat: 40.7659,
    lng: -73.84226
  }, {
    lat: 40.76582,
    lng: -73.84223
  }, {
    lat: 40.76589,
    lng: -73.84196
  }, {
    lat: 40.76599,
    lng: -73.84198
  }, {
    lat: 40.766002,
    lng: -73.841906
  }, {
    lat: 40.76627,
    lng: -73.84032
  }, {
    lat: 40.76644,
    lng: -73.8402
  }, {
    lat: 40.76665,
    lng: -73.83994
  }, {
    lat: 40.76695,
    lng: -73.83984
  }, {
    lat: 40.76704,
    lng: -73.83971
  }, {
    lat: 40.76704,
    lng: -73.83963
  }, {
    lat: 40.7669,
    lng: -73.8395
  }, {
    lat: 40.76676,
    lng: -73.83968
  }, {
    lat: 40.76667,
    lng: -73.83972
  }, {
    lat: 40.76645,
    lng: -73.83973
  }, {
    lat: 40.76608,
    lng: -73.83956
  }, {
    lat: 40.76594,
    lng: -73.83913
  }, {
    lat: 40.76666,
    lng: -73.83868
  }, {
    lat: 40.7695152,
    lng: -73.8364476
  }, {
    lat: 40.771897,
    lng: -73.8326557
  }, {
    lat: 40.773761,
    lng: -73.8301429
  }, {
    lat: 40.776609,
    lng: -73.82796
  }, {
    lat: 40.78168,
    lng: -73.82516
  }, {
    lat: 40.7821,
    lng: -73.82497
  }, {
    lat: 40.78288,
    lng: -73.82477
  }, {
    lat: 40.78604,
    lng: -73.82418
  }, {
    lat: 40.78681,
    lng: -73.82396
  }, {
    lat: 40.78883,
    lng: -73.82349
  }, {
    lat: 40.79034,
    lng: -73.82295
  }, {
    lat: 40.79137,
    lng: -73.82316
  }, {
    lat: 40.79255,
    lng: -73.82365
  }, {
    lat: 40.7977,
    lng: -73.82699
  }, {
    lat: 40.79763,
    lng: -73.82714
  }, {
    lat: 40.7975,
    lng: -73.82722
  }, {
    lat: 40.79726,
    lng: -73.827
  }, {
    lat: 40.79705,
    lng: -73.827
  }, {
    lat: 40.7968,
    lng: -73.8274
  }, {
    lat: 40.79674,
    lng: -73.82801
  }, {
    lat: 40.79658,
    lng: -73.82865
  }, {
    lat: 40.79656,
    lng: -73.82903
  }, {
    lat: 40.79647,
    lng: -73.82915
  }, {
    lat: 40.79634,
    lng: -73.82923
  }, {
    lat: 40.79617,
    lng: -73.8291
  }, {
    lat: 40.79614,
    lng: -73.82891
  }, {
    lat: 40.79603,
    lng: -73.82881
  }, {
    lat: 40.79563,
    lng: -73.82875
  }, {
    lat: 40.79549,
    lng: -73.82849
  }, {
    lat: 40.795,
    lng: -73.8283
  }, {
    lat: 40.79471,
    lng: -73.82803
  }, {
    lat: 40.7944,
    lng: -73.8281
  }, {
    lat: 40.79421,
    lng: -73.82798
  }, {
    lat: 40.79383,
    lng: -73.82807
  }, {
    lat: 40.79326,
    lng: -73.82784
  }, {
    lat: 40.7925,
    lng: -73.82818
  }, {
    lat: 40.79137,
    lng: -73.82989
  }, {
    lat: 40.79154,
    lng: -73.8304
  }, {
    lat: 40.7915,
    lng: -73.83079
  }, {
    lat: 40.79103,
    lng: -73.83164
  }, {
    lat: 40.79066,
    lng: -73.83176
  }, {
    lat: 40.79008,
    lng: -73.83207
  }, {
    lat: 40.78989,
    lng: -73.83209
  }, {
    lat: 40.78907,
    lng: -73.83171
  }, {
    lat: 40.789031,
    lng: -73.831848
  }, {
    lat: 40.788929,
    lng: -73.831987
  }, {
    lat: 40.78868,
    lng: -73.83222
  }, {
    lat: 40.788519,
    lng: -73.832572
  }, {
    lat: 40.788442,
    lng: -73.832985
  }, {
    lat: 40.78835,
    lng: -73.83359
  }, {
    lat: 40.78826,
    lng: -73.8339
  }, {
    lat: 40.788417,
    lng: -73.83402
  }, {
    lat: 40.788771,
    lng: -73.833999
  }, {
    lat: 40.788941,
    lng: -73.834031
  }, {
    lat: 40.789047,
    lng: -73.834262
  }, {
    lat: 40.78908,
    lng: -73.83449
  }, {
    lat: 40.789002,
    lng: -73.834594
  }, {
    lat: 40.788892,
    lng: -73.834648
  }, {
    lat: 40.788892,
    lng: -73.83482
  }, {
    lat: 40.789104,
    lng: -73.835297
  }, {
    lat: 40.78923,
    lng: -73.83565
  }, {
    lat: 40.78918,
    lng: -73.83632
  }, {
    lat: 40.78929,
    lng: -73.83662
  }, {
    lat: 40.789225,
    lng: -73.836917
  }, {
    lat: 40.78916,
    lng: -73.837094
  }, {
    lat: 40.789177,
    lng: -73.837202
  }, {
    lat: 40.789254,
    lng: -73.837261
  }, {
    lat: 40.789534,
    lng: -73.837164
  }, {
    lat: 40.789688,
    lng: -73.837164
  }, {
    lat: 40.7898,
    lng: -73.83722
  }, {
    lat: 40.789952,
    lng: -73.837363
  }, {
    lat: 40.790034,
    lng: -73.837293
  }, {
    lat: 40.79014,
    lng: -73.83728
  }, {
    lat: 40.790294,
    lng: -73.837405
  }, {
    lat: 40.79042,
    lng: -73.83756
  }, {
    lat: 40.79116,
    lng: -73.8376
  }, {
    lat: 40.791455,
    lng: -73.837196
  }, {
    lat: 40.79171,
    lng: -73.83668
  }, {
    lat: 40.792032,
    lng: -73.83666
  }, {
    lat: 40.792276,
    lng: -73.836837
  }, {
    lat: 40.79256,
    lng: -73.83675
  }, {
    lat: 40.79659,
    lng: -73.83853
  }, {
    lat: 40.79662,
    lng: -73.83834
  }, {
    lat: 40.79675,
    lng: -73.83838
  }, {
    lat: 40.79706,
    lng: -73.83913
  }, {
    lat: 40.79691,
    lng: -73.83999
  }, {
    lat: 40.79761,
    lng: -73.84023
  }, {
    lat: 40.79779,
    lng: -73.83917
  }, {
    lat: 40.79789,
    lng: -73.83922
  }, {
    lat: 40.79766,
    lng: -73.84048
  }, {
    lat: 40.79686,
    lng: -73.84023
  }, {
    lat: 40.79679,
    lng: -73.84067
  }, {
    lat: 40.79624,
    lng: -73.84127
  }, {
    lat: 40.79608,
    lng: -73.84139
  }, {
    lat: 40.79605,
    lng: -73.84152
  }, {
    lat: 40.79597,
    lng: -73.84152
  }, {
    lat: 40.79569,
    lng: -73.84126
  }, {
    lat: 40.79534,
    lng: -73.84126
  }, {
    lat: 40.7951,
    lng: -73.84142
  }, {
    lat: 40.795,
    lng: -73.84138
  }, {
    lat: 40.79498,
    lng: -73.84145
  }, {
    lat: 40.795526,
    lng: -73.841906
  }, {
    lat: 40.79559,
    lng: -73.84196
  }, {
    lat: 40.79562,
    lng: -73.84213
  }, {
    lat: 40.79539,
    lng: -73.8429
  }, {
    lat: 40.79498,
    lng: -73.84279
  }, {
    lat: 40.7948,
    lng: -73.84454
  }, {
    lat: 40.79487,
    lng: -73.84468
  }, {
    lat: 40.79522,
    lng: -73.84492
  }, {
    lat: 40.79548,
    lng: -73.84537
  }, {
    lat: 40.79601,
    lng: -73.84558
  }, {
    lat: 40.79601,
    lng: -73.84597
  }, {
    lat: 40.79607,
    lng: -73.84634
  }, {
    lat: 40.79587,
    lng: -73.84773
  }, {
    lat: 40.79547,
    lng: -73.84871
  }, {
    lat: 40.79508,
    lng: -73.84893
  }, {
    lat: 40.79452,
    lng: -73.84882
  }, {
    lat: 40.79424,
    lng: -73.84912
  }, {
    lat: 40.79393,
    lng: -73.84911
  }, {
    lat: 40.7932,
    lng: -73.84878
  }, {
    lat: 40.79314,
    lng: -73.84908
  }, {
    lat: 40.79418,
    lng: -73.85216
  }, {
    lat: 40.7944,
    lng: -73.85244
  }, {
    lat: 40.79442,
    lng: -73.85268
  }, {
    lat: 40.79433,
    lng: -73.85284
  }, {
    lat: 40.79412,
    lng: -73.85359
  }, {
    lat: 40.79399,
    lng: -73.85372
  }, {
    lat: 40.79376,
    lng: -73.85378
  }, {
    lat: 40.79323,
    lng: -73.85368
  }, {
    lat: 40.79288,
    lng: -73.85371
  }, {
    lat: 40.79255,
    lng: -73.85384
  }, {
    lat: 40.79227,
    lng: -73.85379
  }, {
    lat: 40.79208,
    lng: -73.85366
  }, {
    lat: 40.79167,
    lng: -73.85312
  }, {
    lat: 40.79122,
    lng: -73.85272
  }, {
    lat: 40.79096,
    lng: -73.85286
  }, {
    lat: 40.7904,
    lng: -73.85438
  }, {
    lat: 40.79017,
    lng: -73.85455
  }, {
    lat: 40.78985,
    lng: -73.85458
  }, {
    lat: 40.7891,
    lng: -73.8548
  }, {
    lat: 40.78863,
    lng: -73.85487
  }, {
    lat: 40.78838,
    lng: -73.85471
  }, {
    lat: 40.78828,
    lng: -73.85443
  }, {
    lat: 40.78826,
    lng: -73.85416
  }, {
    lat: 40.78832,
    lng: -73.85326
  }, {
    lat: 40.78824,
    lng: -73.85295
  }, {
    lat: 40.78791,
    lng: -73.85339
  }, {
    lat: 40.78789,
    lng: -73.85358
  }, {
    lat: 40.78795,
    lng: -73.85382
  }, {
    lat: 40.78781,
    lng: -73.85402
  }, {
    lat: 40.78779,
    lng: -73.85517
  }, {
    lat: 40.78769,
    lng: -73.8554
  }, {
    lat: 40.78775,
    lng: -73.85597
  }, {
    lat: 40.78751,
    lng: -73.85625
  }, {
    lat: 40.78729,
    lng: -73.85622
  }, {
    lat: 40.78713,
    lng: -73.85632
  }, {
    lat: 40.78701,
    lng: -73.85655
  }, {
    lat: 40.78681,
    lng: -73.85667
  }, {
    lat: 40.78669,
    lng: -73.8569
  }, {
    lat: 40.78674,
    lng: -73.85713
  }, {
    lat: 40.78697,
    lng: -73.85754
  }, {
    lat: 40.78711,
    lng: -73.85812
  }, {
    lat: 40.78652,
    lng: -73.85883
  }, {
    lat: 40.7863,
    lng: -73.85862
  }, {
    lat: 40.78614,
    lng: -73.8587
  }, {
    lat: 40.78604,
    lng: -73.85906
  }, {
    lat: 40.78592,
    lng: -73.85906
  }, {
    lat: 40.78572,
    lng: -73.85924
  }, {
    lat: 40.78552,
    lng: -73.85912
  }, {
    lat: 40.78543,
    lng: -73.85919
  }, {
    lat: 40.78518,
    lng: -73.85909
  }, {
    lat: 40.78522,
    lng: -73.85863
  }, {
    lat: 40.78476,
    lng: -73.85795
  }, {
    lat: 40.78451,
    lng: -73.85779
  }, {
    lat: 40.78432,
    lng: -73.85779
  }, {
    lat: 40.78429,
    lng: -73.85812
  }, {
    lat: 40.78402,
    lng: -73.85815
  }, {
    lat: 40.78367,
    lng: -73.85798
  }, {
    lat: 40.78364,
    lng: -73.8578
  }, {
    lat: 40.78355,
    lng: -73.8577
  }, {
    lat: 40.78358,
    lng: -73.85753
  }, {
    lat: 40.78342,
    lng: -73.85735
  }, {
    lat: 40.78339,
    lng: -73.85715
  }, {
    lat: 40.78343,
    lng: -73.8569
  }, {
    lat: 40.78319,
    lng: -73.85652
  }, {
    lat: 40.78323,
    lng: -73.85638
  }, {
    lat: 40.78332,
    lng: -73.85638
  }, {
    lat: 40.78323,
    lng: -73.85615
  }, {
    lat: 40.7833,
    lng: -73.85608
  }, {
    lat: 40.78318,
    lng: -73.85598
  }, {
    lat: 40.7832,
    lng: -73.8559
  }, {
    lat: 40.78329,
    lng: -73.85588
  }, {
    lat: 40.78326,
    lng: -73.85579
  }, {
    lat: 40.78309,
    lng: -73.85573
  }, {
    lat: 40.78306,
    lng: -73.85556
  }, {
    lat: 40.78219,
    lng: -73.8555
  }, {
    lat: 40.78193,
    lng: -73.85538
  }, {
    lat: 40.78189,
    lng: -73.85502
  }, {
    lat: 40.78197,
    lng: -73.85327
  }, {
    lat: 40.78208,
    lng: -73.85311
  }, {
    lat: 40.78225,
    lng: -73.85311
  }, {
    lat: 40.78243,
    lng: -73.84939
  }, {
    lat: 40.78235,
    lng: -73.84925
  }, {
    lat: 40.78207,
    lng: -73.84923
  }, {
    lat: 40.78193,
    lng: -73.84956
  }, {
    lat: 40.78173,
    lng: -73.84955
  }, {
    lat: 40.78175,
    lng: -73.84928
  }, {
    lat: 40.78164,
    lng: -73.84921
  }, {
    lat: 40.78166,
    lng: -73.84984
  }, {
    lat: 40.78089,
    lng: -73.84988
  }, {
    lat: 40.78085,
    lng: -73.84982
  }, {
    lat: 40.78062,
    lng: -73.84985
  }, {
    lat: 40.78056,
    lng: -73.84947
  }, {
    lat: 40.78046,
    lng: -73.84946
  }, {
    lat: 40.78027,
    lng: -73.84952
  }, {
    lat: 40.78027,
    lng: -73.84972
  }, {
    lat: 40.78012,
    lng: -73.84972
  }, {
    lat: 40.78008,
    lng: -73.84956
  }, {
    lat: 40.78007,
    lng: -73.84985
  }, {
    lat: 40.77998,
    lng: -73.84984
  }, {
    lat: 40.77998,
    lng: -73.84959
  }, {
    lat: 40.77985,
    lng: -73.84959
  }, {
    lat: 40.77976,
    lng: -73.84977
  }, {
    lat: 40.77977,
    lng: -73.84986
  }, {
    lat: 40.77953,
    lng: -73.84984
  }, {
    lat: 40.7795,
    lng: -73.84968
  }, {
    lat: 40.77908,
    lng: -73.8497
  }, {
    lat: 40.77909,
    lng: -73.84993
  }, {
    lat: 40.77901,
    lng: -73.84999
  }, {
    lat: 40.77894,
    lng: -73.84996
  }, {
    lat: 40.7789,
    lng: -73.84941
  }, {
    lat: 40.77843,
    lng: -73.84943
  }, {
    lat: 40.7784,
    lng: -73.84947
  }, {
    lat: 40.77819,
    lng: -73.84939
  }, {
    lat: 40.7781,
    lng: -73.84919
  }, {
    lat: 40.77808,
    lng: -73.84896
  }, {
    lat: 40.77701,
    lng: -73.84911
  }, {
    lat: 40.77611,
    lng: -73.84914
  }, {
    lat: 40.77588,
    lng: -73.84908
  }, {
    lat: 40.775465,
    lng: -73.8488
  }],
  center: {
    lat: 40.781639999999996,
    lng: -73.841095
  }
}, {
  name: 'Malba',
  borough: 'Queens',
  color: '3399CC',
  coords: [{
    lat: 40.78462,
    lng: -73.83063
  }, {
    lat: 40.7846,
    lng: -73.82686
  }, {
    lat: 40.78520000000001,
    lng: -73.8243
  }, {
    lat: 40.78855,
    lng: -73.82357
  }, {
    lat: 40.79035,
    lng: -73.82293
  }, {
    lat: 40.79142,
    lng: -73.82317
  }, {
    lat: 40.79258,
    lng: -73.82362
  }, {
    lat: 40.79773000000001,
    lng: -73.82694
  }, {
    lat: 40.79771,
    lng: -73.82709
  }, {
    lat: 40.797560000000004,
    lng: -73.82722
  }, {
    lat: 40.79729,
    lng: -73.82701
  }, {
    lat: 40.79711,
    lng: -73.82701
  }, {
    lat: 40.79685,
    lng: -73.82735
  }, {
    lat: 40.79677000000001,
    lng: -73.82802
  }, {
    lat: 40.7966,
    lng: -73.82857
  }, {
    lat: 40.796589999999995,
    lng: -73.82905
  }, {
    lat: 40.79638,
    lng: -73.82922
  }, {
    lat: 40.7962,
    lng: -73.82911
  }, {
    lat: 40.796150000000004,
    lng: -73.82891
  }, {
    lat: 40.79603,
    lng: -73.82881
  }, {
    lat: 40.79563,
    lng: -73.82875000000001
  }, {
    lat: 40.7955,
    lng: -73.82849
  }, {
    lat: 40.79501,
    lng: -73.82831
  }, {
    lat: 40.79471,
    lng: -73.82803
  }, {
    lat: 40.7944,
    lng: -73.8281
  }, {
    lat: 40.79421,
    lng: -73.82798
  }, {
    lat: 40.79384000000001,
    lng: -73.82807
  }, {
    lat: 40.79326,
    lng: -73.82784
  }, {
    lat: 40.79251,
    lng: -73.82818
  }, {
    lat: 40.79137,
    lng: -73.82989
  }, {
    lat: 40.79155,
    lng: -73.8304
  }, {
    lat: 40.7915,
    lng: -73.83079
  }, {
    lat: 40.79104,
    lng: -73.83164
  }, {
    lat: 40.79067,
    lng: -73.83176
  }, {
    lat: 40.790090000000006,
    lng: -73.83207
  }, {
    lat: 40.78989,
    lng: -73.83209
  }, {
    lat: 40.78907,
    lng: -73.83172
  }, {
    lat: 40.78814,
    lng: -73.8313
  }, {
    lat: 40.78624,
    lng: -73.83087
  }, {
    lat: 40.78462,
    lng: -73.83063
  }],
  center: {
    lat: 40.79116500000001,
    lng: -73.82750999999996
  }
}, {
  name: 'Flushing',
  borough: 'Queens',
  color: '663366',
  coords: [{
    lat: 40.776609,
    lng: -73.82796
  }, {
    lat: 40.773761,
    lng: -73.8301429
  }, {
    lat: 40.771897,
    lng: -73.8326557
  }, {
    lat: 40.7695152,
    lng: -73.8364476
  }, {
    lat: 40.76666,
    lng: -73.83868
  }, {
    lat: 40.765949,
    lng: -73.839115
  }, {
    lat: 40.765689,
    lng: -73.838342
  }, {
    lat: 40.765136,
    lng: -73.837784
  }, {
    lat: 40.76304,
    lng: -73.836454
  }, {
    lat: 40.761203,
    lng: -73.836325
  }, {
    lat: 40.760228,
    lng: -73.836669
  }, {
    lat: 40.759806,
    lng: -73.836926
  }, {
    lat: 40.758879,
    lng: -73.837291
  }, {
    lat: 40.758505,
    lng: -73.837334
  }, {
    lat: 40.758375,
    lng: -73.837806
  }, {
    lat: 40.757173,
    lng: -73.838321
  }, {
    lat: 40.756864,
    lng: -73.838085
  }, {
    lat: 40.756002,
    lng: -73.838449
  }, {
    lat: 40.754653,
    lng: -73.838171
  }, {
    lat: 40.750882,
    lng: -73.835574
  }, {
    lat: 40.750752,
    lng: -73.834888
  }, {
    lat: 40.750947,
    lng: -73.834115
  }, {
    lat: 40.751045,
    lng: -73.832634
  }, {
    lat: 40.751045,
    lng: -73.832356
  }, {
    lat: 40.751386,
    lng: -73.832291
  }, {
    lat: 40.752069,
    lng: -73.830725
  }, {
    lat: 40.751191,
    lng: -73.828279
  }, {
    lat: 40.751841,
    lng: -73.826433
  }, {
    lat: 40.750996,
    lng: -73.825725
  }, {
    lat: 40.751857,
    lng: -73.824309
  }, {
    lat: 40.748622,
    lng: -73.821198
  }, {
    lat: 40.747387,
    lng: -73.817893
  }, {
    lat: 40.747159,
    lng: -73.81697
  }, {
    lat: 40.746477,
    lng: -73.815146
  }, {
    lat: 40.746672,
    lng: -73.814782
  }, {
    lat: 40.746103,
    lng: -73.8142175
  }, {
    lat: 40.7501264,
    lng: -73.8075409
  }, {
    lat: 40.7497586,
    lng: -73.802932
  }, {
    lat: 40.7504362,
    lng: -73.8029449
  }, {
    lat: 40.7512439,
    lng: -73.8035587
  }, {
    lat: 40.7523614,
    lng: -73.8041683
  }, {
    lat: 40.753434,
    lng: -73.8044546
  }, {
    lat: 40.7537587,
    lng: -73.8048554
  }, {
    lat: 40.76026,
    lng: -73.80394
  }, {
    lat: 40.76131,
    lng: -73.8095
  }, {
    lat: 40.761447,
    lng: -73.811066
  }, {
    lat: 40.75886,
    lng: -73.82072
  }, {
    lat: 40.76461,
    lng: -73.82351
  }, {
    lat: 40.77041,
    lng: -73.82467
  }, {
    lat: 40.774497,
    lng: -73.824695
  }, {
    lat: 40.776723,
    lng: -73.8242661
  }, {
    lat: 40.776609,
    lng: -73.82796
  }],
  center: {
    lat: 40.76408599999999,
    lng: -73.8302205
  }
}, {
  name: 'Linden Hill',
  borough: 'Queens',
  color: '33CCFF',
  coords: [{
    lat: 40.776853,
    lng: -73.821648
  }, {
    lat: 40.776723,
    lng: -73.8242661
  }, {
    lat: 40.776609,
    lng: -73.82796
  }, {
    lat: 40.773761,
    lng: -73.8301429
  }, {
    lat: 40.771897,
    lng: -73.8326557
  }, {
    lat: 40.7695152,
    lng: -73.8364476
  }, {
    lat: 40.76594,
    lng: -73.83913
  }, {
    lat: 40.765689,
    lng: -73.838342
  }, {
    lat: 40.765136,
    lng: -73.837784
  }, {
    lat: 40.76304,
    lng: -73.836454
  }, {
    lat: 40.762744,
    lng: -73.8331757
  }, {
    lat: 40.7640117,
    lng: -73.8281116
  }, {
    lat: 40.76461,
    lng: -73.82351
  }, {
    lat: 40.7653606,
    lng: -73.8173613
  }, {
    lat: 40.7651656,
    lng: -73.8136277
  }, {
    lat: 40.7646618,
    lng: -73.8110099
  }, {
    lat: 40.7753548,
    lng: -73.8095508
  }, {
    lat: 40.775699,
    lng: -73.814074
  }, {
    lat: 40.776561,
    lng: -73.818751
  }, {
    lat: 40.776853,
    lng: -73.821648
  }],
  center: {
    lat: 40.770516,
    lng: -73.823638
  }
}, {
  name: 'Whitestone',
  borough: 'Queens',
  color: '00CC33',
  coords: [{
    lat: 40.788160999999995,
    lng: -73.831304
  }, {
    lat: 40.784636,
    lng: -73.830639
  }, {
    lat: 40.781663,
    lng: -73.830639
  }, {
    lat: 40.78167899999999,
    lng: -73.824999
  }, {
    lat: 40.776609,
    lng: -73.82796
  }, {
    lat: 40.776853,
    lng: -73.82164800000001
  }, {
    lat: 40.776561,
    lng: -73.818751
  }, {
    lat: 40.775699,
    lng: -73.814074
  }, {
    lat: 40.774432,
    lng: -73.797916
  }, {
    lat: 40.773912,
    lng: -73.797337
  }, {
    lat: 40.773067,
    lng: -73.795731
  }, {
    lat: 40.773359,
    lng: -73.793456
  }, {
    lat: 40.77426899999999,
    lng: -73.791482
  }, {
    lat: 40.775959,
    lng: -73.785173
  }, {
    lat: 40.778380000000006,
    lng: -73.786522
  }, {
    lat: 40.777226999999996,
    lng: -73.790752
  }, {
    lat: 40.785253,
    lng: -73.792212
  }, {
    lat: 40.785968,
    lng: -73.79204
  }, {
    lat: 40.786455,
    lng: -73.792297
  }, {
    lat: 40.786244,
    lng: -73.793174
  }, {
    lat: 40.786439,
    lng: -73.793367
  }, {
    lat: 40.786049,
    lng: -73.794204
  }, {
    lat: 40.785903,
    lng: -73.795041
  }, {
    lat: 40.787040000000005,
    lng: -73.794676
  }, {
    lat: 40.788096,
    lng: -73.794912
  }, {
    lat: 40.788909,
    lng: -73.794354
  }, {
    lat: 40.789152,
    lng: -73.793839
  }, {
    lat: 40.791898,
    lng: -73.795062
  }, {
    lat: 40.79365200000001,
    lng: -73.794526
  }, {
    lat: 40.793864,
    lng: -73.79456900000001
  }, {
    lat: 40.794205,
    lng: -73.79429
  }, {
    lat: 40.794871,
    lng: -73.79456900000001
  }, {
    lat: 40.795634,
    lng: -73.79783
  }, {
    lat: 40.796089,
    lng: -73.798495
  }, {
    lat: 40.796284,
    lng: -73.799504
  }, {
    lat: 40.796284,
    lng: -73.800062
  }, {
    lat: 40.79654399999999,
    lng: -73.801027
  }, {
    lat: 40.796268,
    lng: -73.802508
  }, {
    lat: 40.79646300000001,
    lng: -73.802894
  }, {
    lat: 40.796755,
    lng: -73.802937
  }, {
    lat: 40.79668999999999,
    lng: -73.803473
  }, {
    lat: 40.796446,
    lng: -73.803516
  }, {
    lat: 40.796138000000006,
    lng: -73.805276
  }, {
    lat: 40.796381,
    lng: -73.805533
  }, {
    lat: 40.79654399999999,
    lng: -73.806199
  }, {
    lat: 40.796445999999996,
    lng: -73.806435
  }, {
    lat: 40.797259,
    lng: -73.810512
  }, {
    lat: 40.79740499999999,
    lng: -73.811799
  }, {
    lat: 40.798006,
    lng: -73.811713
  }, {
    lat: 40.79816799999999,
    lng: -73.812593
  }, {
    lat: 40.797372,
    lng: -73.812786
  }, {
    lat: 40.797242,
    lng: -73.813172
  }, {
    lat: 40.796999,
    lng: -73.813408
  }, {
    lat: 40.797112000000006,
    lng: -73.81358
  }, {
    lat: 40.798363,
    lng: -73.812808
  }, {
    lat: 40.79846100000001,
    lng: -73.813129
  }, {
    lat: 40.79746999999999,
    lng: -73.813602
  }, {
    lat: 40.798266,
    lng: -73.814975
  }, {
    lat: 40.798493,
    lng: -73.815704
  }, {
    lat: 40.798721,
    lng: -73.815962
  }, {
    lat: 40.799013,
    lng: -73.816455
  }, {
    lat: 40.79911,
    lng: -73.816949
  }, {
    lat: 40.800053,
    lng: -73.818666
  }, {
    lat: 40.800589,
    lng: -73.819374
  }, {
    lat: 40.800816,
    lng: -73.820082
  }, {
    lat: 40.800572,
    lng: -73.820833
  }, {
    lat: 40.79962999999999,
    lng: -73.822077
  }, {
    lat: 40.79886700000001,
    lng: -73.822721
  }, {
    lat: 40.798509,
    lng: -73.823472
  }, {
    lat: 40.798038,
    lng: -73.824159
  }, {
    lat: 40.797421,
    lng: -73.825038
  }, {
    lat: 40.79734,
    lng: -73.825575
  }, {
    lat: 40.797389,
    lng: -73.826154
  }, {
    lat: 40.79773,
    lng: -73.826476
  }, {
    lat: 40.79781100000001,
    lng: -73.826712
  }, {
    lat: 40.79771300000001,
    lng: -73.82712
  }, {
    lat: 40.797519,
    lng: -73.827249
  }, {
    lat: 40.797275,
    lng: -73.827013
  }, {
    lat: 40.79708,
    lng: -73.827055
  }, {
    lat: 40.796869,
    lng: -73.827377
  }, {
    lat: 40.79678800000001,
    lng: -73.828043
  }, {
    lat: 40.796609,
    lng: -73.828622
  }, {
    lat: 40.796609,
    lng: -73.829072
  }, {
    lat: 40.796333,
    lng: -73.829223
  }, {
    lat: 40.79617,
    lng: -73.829072
  }, {
    lat: 40.796138000000006,
    lng: -73.828901
  }, {
    lat: 40.795975,
    lng: -73.828815
  }, {
    lat: 40.795602,
    lng: -73.828794
  }, {
    lat: 40.795504,
    lng: -73.828493
  }, {
    lat: 40.795001,
    lng: -73.828321
  }, {
    lat: 40.794708,
    lng: -73.828043
  }, {
    lat: 40.794383,
    lng: -73.828171
  }, {
    lat: 40.794172,
    lng: -73.827978
  }, {
    lat: 40.793847,
    lng: -73.828128
  }, {
    lat: 40.793246,
    lng: -73.827828
  }, {
    lat: 40.792531,
    lng: -73.828214
  }, {
    lat: 40.79139399999999,
    lng: -73.829909
  }, {
    lat: 40.79158900000001,
    lng: -73.830317
  }, {
    lat: 40.791508,
    lng: -73.830811
  }, {
    lat: 40.79106900000001,
    lng: -73.831669
  }, {
    lat: 40.790679000000004,
    lng: -73.831776
  }, {
    lat: 40.790062,
    lng: -73.832119
  }, {
    lat: 40.789851000000006,
    lng: -73.832119
  }, {
    lat: 40.789055,
    lng: -73.83169
  }, {
    lat: 40.788160999999995,
    lng: -73.831304
  }],
  center: {
    lat: 40.7869415,
    lng: -73.80864600000001
  }
}, {
  name: 'Kew Gardens',
  borough: 'Queens',
  color: 'CCCC66',
  coords: [{
    lat: 40.711906,
    lng: -73.836071
  }, {
    lat: 40.710052,
    lng: -73.83414
  }, {
    lat: 40.70897899999999,
    lng: -73.835985
  }, {
    lat: 40.70966200000001,
    lng: -73.837573
  }, {
    lat: 40.708523,
    lng: -73.838517
  }, {
    lat: 40.707938,
    lng: -73.837187
  }, {
    lat: 40.706604,
    lng: -73.838131
  }, {
    lat: 40.706213999999996,
    lng: -73.838131
  }, {
    lat: 40.705823,
    lng: -73.838045
  }, {
    lat: 40.704262,
    lng: -73.837015
  }, {
    lat: 40.702244,
    lng: -73.836114
  }, {
    lat: 40.70000000000001,
    lng: -73.830792
  }, {
    lat: 40.70026,
    lng: -73.83002
  }, {
    lat: 40.700943,
    lng: -73.825857
  }, {
    lat: 40.701463999999994,
    lng: -73.824012
  }, {
    lat: 40.702147,
    lng: -73.820278
  }, {
    lat: 40.70257,
    lng: -73.816459
  }, {
    lat: 40.704652,
    lng: -73.817403
  }, {
    lat: 40.708849,
    lng: -73.819763
  }, {
    lat: 40.71041,
    lng: -73.821094
  }, {
    lat: 40.711386,
    lng: -73.82216600000001
  }, {
    lat: 40.712394,
    lng: -73.823282
  }, {
    lat: 40.71580999999999,
    lng: -73.826115
  }, {
    lat: 40.714574,
    lng: -73.830578
  }, {
    lat: 40.714639000000005,
    lng: -73.830878
  }, {
    lat: 40.711906,
    lng: -73.836071
  }],
  center: {
    lat: 40.707905,
    lng: -73.82748800000002
  }
}, {
  name: 'Kew Gardens Hills',
  borough: 'Queens',
  color: '7CCFA9',
  coords: [{
    lat: 40.7432679,
    lng: -73.8378594
  }, {
    lat: 40.7393058,
    lng: -73.8365814
  }, {
    lat: 40.7374524,
    lng: -73.8356802
  }, {
    lat: 40.7352087,
    lng: -73.8362381
  }, {
    lat: 40.7310136,
    lng: -73.834264
  }, {
    lat: 40.7300006,
    lng: -73.8331816
  }, {
    lat: 40.7263907,
    lng: -73.8306281
  }, {
    lat: 40.7258053,
    lng: -73.829684
  }, {
    lat: 40.7256264,
    lng: -73.8286969
  }, {
    lat: 40.7252687,
    lng: -73.8278601
  }, {
    lat: 40.7244719,
    lng: -73.8271305
  }, {
    lat: 40.7211869,
    lng: -73.8262079
  }, {
    lat: 40.7197558,
    lng: -73.8255856
  }, {
    lat: 40.7172837,
    lng: -73.8254139
  }, {
    lat: 40.7174139,
    lng: -73.8237188
  }, {
    lat: 40.7172837,
    lng: -73.8192556
  }, {
    lat: 40.7176741,
    lng: -73.8170883
  }, {
    lat: 40.7199184,
    lng: -73.8090632
  }, {
    lat: 40.7243743,
    lng: -73.810694
  }, {
    lat: 40.7262932,
    lng: -73.810651
  }, {
    lat: 40.728277,
    lng: -73.8148567
  }, {
    lat: 40.7286347,
    lng: -73.8151142
  }, {
    lat: 40.7371549,
    lng: -73.8146851
  }, {
    lat: 40.7389433,
    lng: -73.8151571
  }, {
    lat: 40.7426176,
    lng: -73.8268301
  }, {
    lat: 40.7434304,
    lng: -73.8360998
  }, {
    lat: 40.7432679,
    lng: -73.8378594
  }],
  center: {
    lat: 40.728447,
    lng: -73.822616
  }
}, {
  name: 'Beechhurst',
  borough: 'Queens',
  color: '336699',
  coords: [{
    lat: 40.785936,
    lng: -73.79974
  }, {
    lat: 40.78590299999999,
    lng: -73.79738000000002
  }, {
    lat: 40.786114,
    lng: -73.795706
  }, {
    lat: 40.78679700000001,
    lng: -73.793582
  }, {
    lat: 40.78821000000001,
    lng: -73.790535
  }, {
    lat: 40.789364,
    lng: -73.791736
  }, {
    lat: 40.789039,
    lng: -73.792251
  }, {
    lat: 40.78889199999999,
    lng: -73.792509
  }, {
    lat: 40.788746,
    lng: -73.792594
  }, {
    lat: 40.78876199999999,
    lng: -73.793067
  }, {
    lat: 40.788909,
    lng: -73.793517
  }, {
    lat: 40.78913599999999,
    lng: -73.793839
  }, {
    lat: 40.791833,
    lng: -73.795062
  }, {
    lat: 40.793669,
    lng: -73.794504
  }, {
    lat: 40.793896,
    lng: -73.79456900000001
  }, {
    lat: 40.794205,
    lng: -73.794268
  }, {
    lat: 40.794887,
    lng: -73.794547
  }, {
    lat: 40.79563400000001,
    lng: -73.797787
  }, {
    lat: 40.796073,
    lng: -73.798409
  }, {
    lat: 40.796299999999995,
    lng: -73.799461
  }, {
    lat: 40.796268,
    lng: -73.800019
  }, {
    lat: 40.796544,
    lng: -73.801049
  }, {
    lat: 40.796268,
    lng: -73.802486
  }, {
    lat: 40.796479,
    lng: -73.802873
  }, {
    lat: 40.79677100000001,
    lng: -73.802894
  }, {
    lat: 40.79668999999999,
    lng: -73.803495
  }, {
    lat: 40.796446,
    lng: -73.803495
  }, {
    lat: 40.796154,
    lng: -73.805297
  }, {
    lat: 40.796414,
    lng: -73.805533
  }, {
    lat: 40.796576,
    lng: -73.80622
  }, {
    lat: 40.796414,
    lng: -73.806435
  }, {
    lat: 40.796479,
    lng: -73.806649
  }, {
    lat: 40.79466,
    lng: -73.806907
  }, {
    lat: 40.78652,
    lng: -73.808001
  }, {
    lat: 40.785936,
    lng: -73.79974
  }],
  center: {
    lat: 40.791337,
    lng: -73.79926799999998
  }
}, {
  name: 'Bayside',
  borough: 'Queens',
  color: 'CCCCCC',
  coords: [{
    lat: 40.7670758906685,
    lng: -73.79033837907538
  }, {
    lat: 40.766957,
    lng: -73.790237
  }, {
    lat: 40.764096,
    lng: -73.78822
  }, {
    lat: 40.763186,
    lng: -73.78598900000001
  }, {
    lat: 40.762536,
    lng: -73.785474
  }, {
    lat: 40.761236,
    lng: -73.785216
  }, {
    lat: 40.75525499999999,
    lng: -73.782126
  }, {
    lat: 40.753369,
    lng: -73.780496
  }, {
    lat: 40.743289999999995,
    lng: -73.775861
  }, {
    lat: 40.743746,
    lng: -73.772728
  }, {
    lat: 40.744201,
    lng: -73.771612
  }, {
    lat: 40.745566,
    lng: -73.768651
  }, {
    lat: 40.747972,
    lng: -73.760197
  }, {
    lat: 40.74924,
    lng: -73.757364
  }, {
    lat: 40.750183,
    lng: -73.753159
  }, {
    lat: 40.751222999999996,
    lng: -73.748266
  }, {
    lat: 40.753629,
    lng: -73.744336
  }, {
    lat: 40.75821299999999,
    lng: -73.748435
  }, {
    lat: 40.759496999999996,
    lng: -73.750666
  }, {
    lat: 40.760846,
    lng: -73.754807
  }, {
    lat: 40.76130100000001,
    lng: -73.75573
  }, {
    lat: 40.76228122199666,
    lng: -73.75702476314976
  }, {
    lat: 40.762292,
    lng: -73.757039
  }, {
    lat: 40.763332000000005,
    lng: -73.751889
  }, {
    lat: 40.763771,
    lng: -73.752104
  }, {
    lat: 40.764681,
    lng: -73.753434
  }, {
    lat: 40.765038999999994,
    lng: -73.753778
  }, {
    lat: 40.76583500000001,
    lng: -73.754443
  }, {
    lat: 40.766242,
    lng: -73.754979
  }, {
    lat: 40.76650200000001,
    lng: -73.756009
  }, {
    lat: 40.766697,
    lng: -73.756631
  }, {
    lat: 40.767087,
    lng: -73.758026
  }, {
    lat: 40.767655,
    lng: -73.758777
  }, {
    lat: 40.768777,
    lng: -73.759249
  }, {
    lat: 40.76911799999999,
    lng: -73.759657
  }, {
    lat: 40.771003,
    lng: -73.761652
  }, {
    lat: 40.771702,
    lng: -73.762661
  }, {
    lat: 40.77285599999999,
    lng: -73.764249
  }, {
    lat: 40.77405799999999,
    lng: -73.765172
  }, {
    lat: 40.77496800000001,
    lng: -73.765923
  }, {
    lat: 40.77555300000001,
    lng: -73.766073
  }, {
    lat: 40.775878,
    lng: -73.76618
  }, {
    lat: 40.776804,
    lng: -73.76701700000001
  }, {
    lat: 40.77747,
    lng: -73.767296
  }, {
    lat: 40.777503,
    lng: -73.767468
  }, {
    lat: 40.779289999999996,
    lng: -73.768347
  }, {
    lat: 40.77968,
    lng: -73.767081
  }, {
    lat: 40.779827,
    lng: -73.767231
  }, {
    lat: 40.779453,
    lng: -73.768455
  }, {
    lat: 40.780623,
    lng: -73.769291
  }, {
    lat: 40.78268599999999,
    lng: -73.771373
  }, {
    lat: 40.783629,
    lng: -73.772017
  }, {
    lat: 40.784002,
    lng: -73.77266
  }, {
    lat: 40.786017,
    lng: -73.774246
  }, {
    lat: 40.78642299999999,
    lng: -73.77437500000002
  }, {
    lat: 40.78713,
    lng: -73.774997
  }, {
    lat: 40.787284,
    lng: -73.774912
  }, {
    lat: 40.78717,
    lng: -73.774568
  }, {
    lat: 40.786829,
    lng: -73.773914
  }, {
    lat: 40.786845,
    lng: -73.773678
  }, {
    lat: 40.787382,
    lng: -73.771897
  }, {
    lat: 40.787666,
    lng: -73.77156400000001
  }, {
    lat: 40.787958,
    lng: -73.771039
  }, {
    lat: 40.788283,
    lng: -73.770845
  }, {
    lat: 40.788511,
    lng: -73.770845
  }, {
    lat: 40.789688,
    lng: -73.771929
  }, {
    lat: 40.790184,
    lng: -73.772305
  }, {
    lat: 40.790306,
    lng: -73.772369
  }, {
    lat: 40.791061,
    lng: -73.772412
  }, {
    lat: 40.791419,
    lng: -73.772541
  }, {
    lat: 40.79167000000001,
    lng: -73.772841
  }, {
    lat: 40.792304,
    lng: -73.77356
  }, {
    lat: 40.792629000000005,
    lng: -73.773755
  }, {
    lat: 40.79297,
    lng: -73.773839
  }, {
    lat: 40.794327,
    lng: -73.77446100000002
  }, {
    lat: 40.795430999999994,
    lng: -73.775437
  }, {
    lat: 40.796227,
    lng: -73.776403
  }, {
    lat: 40.796438,
    lng: -73.776832
  }, {
    lat: 40.796706,
    lng: -73.777819
  }, {
    lat: 40.796698,
    lng: -73.778399
  }, {
    lat: 40.796625,
    lng: -73.779257
  }, {
    lat: 40.79656,
    lng: -73.779514
  }, {
    lat: 40.79620299999999,
    lng: -73.779825
  }, {
    lat: 40.795649999999995,
    lng: -73.781628
  }, {
    lat: 40.795456,
    lng: -73.781789
  }, {
    lat: 40.795001,
    lng: -73.781832
  }, {
    lat: 40.794951999999995,
    lng: -73.782336
  }, {
    lat: 40.795017,
    lng: -73.78269
  }, {
    lat: 40.795001,
    lng: -73.783184
  }, {
    lat: 40.794919,
    lng: -73.783291
  }, {
    lat: 40.794822,
    lng: -73.783302
  }, {
    lat: 40.794838,
    lng: -73.783217
  }, {
    lat: 40.794936,
    lng: -73.783046
  }, {
    lat: 40.794871,
    lng: -73.782187
  }, {
    lat: 40.794805999999994,
    lng: -73.781887
  }, {
    lat: 40.794773,
    lng: -73.78160800000002
  }, {
    lat: 40.794513,
    lng: -73.781158
  }, {
    lat: 40.794335,
    lng: -73.781136
  }, {
    lat: 40.794123,
    lng: -73.78087900000001
  }, {
    lat: 40.793604,
    lng: -73.780728
  }, {
    lat: 40.793279000000005,
    lng: -73.780793
  }, {
    lat: 40.79350600000001,
    lng: -73.781801
  }, {
    lat: 40.79336,
    lng: -73.781866
  }, {
    lat: 40.793116,
    lng: -73.780793
  }, {
    lat: 40.791557,
    lng: -73.781136
  }, {
    lat: 40.791102,
    lng: -73.78178
  }, {
    lat: 40.791362,
    lng: -73.782187
  }, {
    lat: 40.791183,
    lng: -73.782552
  }, {
    lat: 40.790842000000005,
    lng: -73.783175
  }, {
    lat: 40.790663,
    lng: -73.783668
  }, {
    lat: 40.790420000000005,
    lng: -73.784741
  }, {
    lat: 40.790306,
    lng: -73.785921
  }, {
    lat: 40.790355,
    lng: -73.786136
  }, {
    lat: 40.79032200000001,
    lng: -73.786694
  }, {
    lat: 40.79045200000001,
    lng: -73.789462
  }, {
    lat: 40.790306,
    lng: -73.789805
  }, {
    lat: 40.790355,
    lng: -73.79032
  }, {
    lat: 40.789883,
    lng: -73.791135
  }, {
    lat: 40.78939600000001,
    lng: -73.791693
  }, {
    lat: 40.788194,
    lng: -73.790535
  }, {
    lat: 40.786829,
    lng: -73.793517
  }, {
    lat: 40.786764,
    lng: -73.793753
  }, {
    lat: 40.786244,
    lng: -73.793174
  }, {
    lat: 40.786455,
    lng: -73.792297
  }, {
    lat: 40.785968,
    lng: -73.79204
  }, {
    lat: 40.785253,
    lng: -73.792212
  }, {
    lat: 40.777226999999996,
    lng: -73.790752
  }, {
    lat: 40.778364,
    lng: -73.78659
  }, {
    lat: 40.775959,
    lng: -73.785173
  }, {
    lat: 40.774952000000006,
    lng: -73.788693
  }, {
    lat: 40.77426899999999,
    lng: -73.791482
  }, {
    lat: 40.773359,
    lng: -73.793456
  }, {
    lat: 40.772969,
    lng: -73.795816
  }, {
    lat: 40.772677,
    lng: -73.795216
  }, {
    lat: 40.769524,
    lng: -73.792426
  }, {
    lat: 40.7670758906685,
    lng: -73.79033837907538
  }],
  center: {
    lat: 40.769998,
    lng: -73.77007600000002
  }
}, {
  name: 'Bay Terrace',
  borough: 'Queens',
  color: 'FF6633',
  coords: [{
    lat: 40.788259,
    lng: -73.790556
  }, {
    lat: 40.78663399999999,
    lng: -73.78841
  }, {
    lat: 40.785757,
    lng: -73.78738
  }, {
    lat: 40.784587,
    lng: -73.786307
  }, {
    lat: 40.783239,
    lng: -73.785556
  }, {
    lat: 40.782199,
    lng: -73.785192
  }, {
    lat: 40.77930700000001,
    lng: -73.784698
  }, {
    lat: 40.776154000000005,
    lng: -73.784569
  }, {
    lat: 40.77407399999999,
    lng: -73.784376
  }, {
    lat: 40.77340800000001,
    lng: -73.784312
  }, {
    lat: 40.773506000000005,
    lng: -73.783668
  }, {
    lat: 40.773668,
    lng: -73.783411
  }, {
    lat: 40.775196,
    lng: -73.78193
  }, {
    lat: 40.775504,
    lng: -73.781072
  }, {
    lat: 40.775732,
    lng: -73.779849
  }, {
    lat: 40.777015000000006,
    lng: -73.775536
  }, {
    lat: 40.778657,
    lng: -73.77590000000001
  }, {
    lat: 40.778949,
    lng: -73.775793
  }, {
    lat: 40.779193,
    lng: -73.774827
  }, {
    lat: 40.781581,
    lng: -73.770278
  }, {
    lat: 40.782621000000006,
    lng: -73.771373
  }, {
    lat: 40.783027,
    lng: -73.771609
  }, {
    lat: 40.783661,
    lng: -73.772124
  }, {
    lat: 40.78397,
    lng: -73.772617
  }, {
    lat: 40.785253,
    lng: -73.773733
  }, {
    lat: 40.78593599999999,
    lng: -73.774205
  }, {
    lat: 40.786748,
    lng: -73.775106
  }, {
    lat: 40.787836000000006,
    lng: -73.776673
  }, {
    lat: 40.788616000000005,
    lng: -73.778239
  }, {
    lat: 40.789169,
    lng: -73.77957
  }, {
    lat: 40.789851,
    lng: -73.781887
  }, {
    lat: 40.790501000000006,
    lng: -73.781715
  }, {
    lat: 40.790792999999994,
    lng: -73.782016
  }, {
    lat: 40.79064700000001,
    lng: -73.782638
  }, {
    lat: 40.790858,
    lng: -73.783153
  }, {
    lat: 40.790663,
    lng: -73.783625
  }, {
    lat: 40.79058200000001,
    lng: -73.784076
  }, {
    lat: 40.790420000000005,
    lng: -73.784784
  }, {
    lat: 40.790305999999994,
    lng: -73.785835
  }, {
    lat: 40.790338,
    lng: -73.786157
  }, {
    lat: 40.790306,
    lng: -73.786715
  }, {
    lat: 40.790420000000005,
    lng: -73.78944
  }, {
    lat: 40.790338,
    lng: -73.78976200000001
  }, {
    lat: 40.790338,
    lng: -73.790298
  }, {
    lat: 40.789786,
    lng: -73.791218
  }, {
    lat: 40.789364,
    lng: -73.79169
  }, {
    lat: 40.788259,
    lng: -73.790556
  }],
  center: {
    lat: 40.782133,
    lng: -73.78098399999999
  }
}, {
  name: 'Murray Hill',
  borough: 'Queens',
  color: 'CC6666',
  coords: [{
    lat: 40.76461,
    lng: -73.82351
  }, {
    lat: 40.758860000000006,
    lng: -73.82072
  }, {
    lat: 40.761447,
    lng: -73.811066
  }, {
    lat: 40.76131,
    lng: -73.8095
  }, {
    lat: 40.76026,
    lng: -73.80394
  }, {
    lat: 40.75967,
    lng: -73.80012
  }, {
    lat: 40.75774,
    lng: -73.79486
  }, {
    lat: 40.75768999999999,
    lng: -73.79444000000001
  }, {
    lat: 40.75777,
    lng: -73.79302
  }, {
    lat: 40.76151,
    lng: -73.79345
  }, {
    lat: 40.7695,
    lng: -73.7924
  }, {
    lat: 40.772677,
    lng: -73.795216
  }, {
    lat: 40.773067,
    lng: -73.795731
  }, {
    lat: 40.773912,
    lng: -73.797337
  }, {
    lat: 40.77303,
    lng: -73.79871
  }, {
    lat: 40.77168,
    lng: -73.80154000000002
  }, {
    lat: 40.77127,
    lng: -73.8027
  }, {
    lat: 40.77106,
    lng: -73.80446
  }, {
    lat: 40.77105,
    lng: -73.80504
  }, {
    lat: 40.77116000000001,
    lng: -73.80626
  }, {
    lat: 40.77158,
    lng: -73.80903
  }, {
    lat: 40.77162,
    lng: -73.811
  }, {
    lat: 40.77147,
    lng: -73.81727
  }, {
    lat: 40.77041,
    lng: -73.82467
  }, {
    lat: 40.76461,
    lng: -73.82351
  }],
  center: {
    lat: 40.765800999999996,
    lng: -73.808535
  }
}, {
  name: 'Auburndale',
  borough: 'Queens',
  color: '336699',
  coords: [{
    lat: 40.772644,
    lng: -73.795216
  }, {
    lat: 40.7695,
    lng: -73.7924
  }, {
    lat: 40.76151,
    lng: -73.79345
  }, {
    lat: 40.75777,
    lng: -73.79302
  }, {
    lat: 40.75768999999999,
    lng: -73.79444000000001
  }, {
    lat: 40.75774,
    lng: -73.79486
  }, {
    lat: 40.753564,
    lng: -73.794572
  }, {
    lat: 40.750671,
    lng: -73.794744
  }, {
    lat: 40.749403,
    lng: -73.797318
  }, {
    lat: 40.747582,
    lng: -73.79478000000002
  }, {
    lat: 40.745534,
    lng: -73.79452200000001
  }, {
    lat: 40.744558000000005,
    lng: -73.794615
  }, {
    lat: 40.744038,
    lng: -73.794744
  }, {
    lat: 40.741957,
    lng: -73.797018
  }, {
    lat: 40.741502000000004,
    lng: -73.797276
  }, {
    lat: 40.739974000000004,
    lng: -73.797276
  }, {
    lat: 40.738315,
    lng: -73.79616
  }, {
    lat: 40.74283499999999,
    lng: -73.77938
  }, {
    lat: 40.743323,
    lng: -73.775861
  }, {
    lat: 40.743811,
    lng: -73.772685
  }, {
    lat: 40.744266,
    lng: -73.771569
  }, {
    lat: 40.753337,
    lng: -73.775818
  }, {
    lat: 40.761171,
    lng: -73.778135
  }, {
    lat: 40.770792,
    lng: -73.783242
  }, {
    lat: 40.773554,
    lng: -73.784272
  }, {
    lat: 40.776154000000005,
    lng: -73.78453
  }, {
    lat: 40.774269000000004,
    lng: -73.791436
  }, {
    lat: 40.773359,
    lng: -73.793456
  }, {
    lat: 40.773067,
    lng: -73.795731
  }, {
    lat: 40.772644,
    lng: -73.795216
  }],
  center: {
    lat: 40.7572345,
    lng: -73.78444350000001
  }
}, {
  name: 'Queensboro Hill',
  borough: 'Queens',
  color: 'FFCC33',
  coords: [{
    lat: 40.739974000000004,
    lng: -73.797276
  }, {
    lat: 40.741502000000004,
    lng: -73.797276
  }, {
    lat: 40.741957,
    lng: -73.797018
  }, {
    lat: 40.74231499999999,
    lng: -73.799246
  }, {
    lat: 40.742315,
    lng: -73.79989
  }, {
    lat: 40.742234,
    lng: -73.804589
  }, {
    lat: 40.74203899999999,
    lng: -73.807636
  }, {
    lat: 40.742104,
    lng: -73.808537
  }, {
    lat: 40.743078999999994,
    lng: -73.814417
  }, {
    lat: 40.743583,
    lng: -73.816327
  }, {
    lat: 40.744136,
    lng: -73.817979
  }, {
    lat: 40.744704999999996,
    lng: -73.8177
  }, {
    lat: 40.744867,
    lng: -73.817893
  }, {
    lat: 40.74530599999999,
    lng: -73.819181
  }, {
    lat: 40.745599,
    lng: -73.819073
  }, {
    lat: 40.74611900000001,
    lng: -73.820833
  }, {
    lat: 40.745908,
    lng: -73.820983
  }, {
    lat: 40.746655,
    lng: -73.823257
  }, {
    lat: 40.747582,
    lng: -73.823193
  }, {
    lat: 40.747988,
    lng: -73.824245
  }, {
    lat: 40.748329999999996,
    lng: -73.825875
  }, {
    lat: 40.749403,
    lng: -73.825747
  }, {
    lat: 40.749972,
    lng: -73.827485
  }, {
    lat: 40.749663,
    lng: -73.828493
  }, {
    lat: 40.749224,
    lng: -73.829394
  }, {
    lat: 40.749094,
    lng: -73.83078900000001
  }, {
    lat: 40.748915,
    lng: -73.831154
  }, {
    lat: 40.748557,
    lng: -73.83139
  }, {
    lat: 40.74818400000001,
    lng: -73.831368
  }, {
    lat: 40.747956,
    lng: -73.832806
  }, {
    lat: 40.747647,
    lng: -73.833428
  }, {
    lat: 40.74727300000001,
    lng: -73.834158
  }, {
    lat: 40.746801999999995,
    lng: -73.834609
  }, {
    lat: 40.744916,
    lng: -73.835531
  }, {
    lat: 40.743143999999994,
    lng: -73.835982
  }, {
    lat: 40.743014,
    lng: -73.834973
  }, {
    lat: 40.742347,
    lng: -73.831647
  }, {
    lat: 40.74199,
    lng: -73.831454
  }, {
    lat: 40.738933,
    lng: -73.831454
  }, {
    lat: 40.73865700000001,
    lng: -73.831368
  }, {
    lat: 40.737568,
    lng: -73.830532
  }, {
    lat: 40.737161,
    lng: -73.829781
  }, {
    lat: 40.737015,
    lng: -73.828171
  }, {
    lat: 40.737551,
    lng: -73.827978
  }, {
    lat: 40.738462000000006,
    lng: -73.828
  }, {
    lat: 40.738592,
    lng: -73.826927
  }, {
    lat: 40.738868,
    lng: -73.82632600000001
  }, {
    lat: 40.739454,
    lng: -73.825618
  }, {
    lat: 40.739470000000004,
    lng: -73.824695
  }, {
    lat: 40.739697,
    lng: -73.824738
  }, {
    lat: 40.739714,
    lng: -73.824481
  }, {
    lat: 40.738754,
    lng: -73.820103
  }, {
    lat: 40.738364,
    lng: -73.816992
  }, {
    lat: 40.738445,
    lng: -73.816241
  }, {
    lat: 40.739128,
    lng: -73.815983
  }, {
    lat: 40.739063,
    lng: -73.815661
  }, {
    lat: 40.738673,
    lng: -73.813087
  }, {
    lat: 40.73812,
    lng: -73.798005
  }, {
    lat: 40.738315,
    lng: -73.79616
  }, {
    lat: 40.739974000000004,
    lng: -73.797276
  }],
  center: {
    lat: 40.7434935,
    lng: -73.81607099999997
  }
}, {
  name: 'Fresh Meadows',
  borough: 'Queens',
  color: '663366',
  coords: [{
    lat: 40.740331,
    lng: -73.788478
  }, {
    lat: 40.738706,
    lng: -73.787705
  }, {
    lat: 40.738413,
    lng: -73.788521
  }, {
    lat: 40.730608,
    lng: -73.784959
  }, {
    lat: 40.729893,
    lng: -73.787705
  }, {
    lat: 40.727421,
    lng: -73.78659
  }, {
    lat: 40.72921,
    lng: -73.78113900000001
  }, {
    lat: 40.730965999999995,
    lng: -73.774874
  }, {
    lat: 40.73177900000001,
    lng: -73.77011
  }, {
    lat: 40.734511,
    lng: -73.77199800000001
  }, {
    lat: 40.736267,
    lng: -73.772857
  }, {
    lat: 40.740234,
    lng: -73.774316
  }, {
    lat: 40.743323,
    lng: -73.775646
  }, {
    lat: 40.74283499999999,
    lng: -73.77938
  }, {
    lat: 40.740331,
    lng: -73.788478
  }],
  center: {
    lat: 40.735372,
    lng: -73.7793155
  }
}, {
  name: 'Utopia',
  borough: 'Queens',
  color: '33FFFF',
  coords: [{
    lat: 40.738283,
    lng: -73.79616
  }, {
    lat: 40.73812,
    lng: -73.798005
  }, {
    lat: 40.738218,
    lng: -73.801868
  }, {
    lat: 40.731584,
    lng: -73.802297
  }, {
    lat: 40.731291,
    lng: -73.793885
  }, {
    lat: 40.730056,
    lng: -73.793499
  }, {
    lat: 40.727259,
    lng: -73.792383
  }, {
    lat: 40.725698,
    lng: -73.791739
  }, {
    lat: 40.727421,
    lng: -73.78659
  }, {
    lat: 40.729893,
    lng: -73.787705
  }, {
    lat: 40.730608,
    lng: -73.784959
  }, {
    lat: 40.738413,
    lng: -73.788521
  }, {
    lat: 40.738706,
    lng: -73.787705
  }, {
    lat: 40.740331,
    lng: -73.788478
  }, {
    lat: 40.738283,
    lng: -73.79616
  }],
  center: {
    lat: 40.733014499999996,
    lng: -73.79360650000001
  }
}, {
  name: 'Pomonok',
  borough: 'Queens',
  color: '6666FF',
  coords: [{
    lat: 40.73912,
    lng: -73.815958
  }, {
    lat: 40.738763,
    lng: -73.816119
  }, {
    lat: 40.738519,
    lng: -73.815036
  }, {
    lat: 40.737161,
    lng: -73.814746
  }, {
    lat: 40.732039,
    lng: -73.814914
  }, {
    lat: 40.728635,
    lng: -73.815114
  }, {
    lat: 40.728277,
    lng: -73.814857
  }, {
    lat: 40.726293,
    lng: -73.810651
  }, {
    lat: 40.726803,
    lng: -73.810665
  }, {
    lat: 40.727129,
    lng: -73.81088
  }, {
    lat: 40.728104,
    lng: -73.802168
  }, {
    lat: 40.72921,
    lng: -73.802468
  }, {
    lat: 40.73825,
    lng: -73.80191
  }, {
    lat: 40.738673,
    lng: -73.813154
  }, {
    lat: 40.73912,
    lng: -73.815958
  }],
  center: {
    lat: 40.732701500000005,
    lng: -73.80901449999999
  }
}, {
  name: 'Hillcrest',
  borough: 'Queens',
  color: 'FF0000',
  coords: [{
    lat: 40.729275,
    lng: -73.802511
  }, {
    lat: 40.728104,
    lng: -73.802125
  }, {
    lat: 40.727584,
    lng: -73.807017
  }, {
    lat: 40.727129,
    lng: -73.81088
  }, {
    lat: 40.726803,
    lng: -73.810665
  }, {
    lat: 40.724374,
    lng: -73.810694
  }, {
    lat: 40.7199411,
    lng: -73.8091306
  }, {
    lat: 40.715842,
    lng: -73.807833
  }, {
    lat: 40.7162,
    lng: -73.803155
  }, {
    lat: 40.716818,
    lng: -73.799464
  }, {
    lat: 40.717957,
    lng: -73.795945
  }, {
    lat: 40.718802,
    lng: -73.793542
  }, {
    lat: 40.71916,
    lng: -73.791997
  }, {
    lat: 40.719193,
    lng: -73.790752
  }, {
    lat: 40.720201,
    lng: -73.79028
  }, {
    lat: 40.723649,
    lng: -73.790409
  }, {
    lat: 40.725698,
    lng: -73.791739
  }, {
    lat: 40.730056,
    lng: -73.793499
  }, {
    lat: 40.731291,
    lng: -73.793885
  }, {
    lat: 40.731584,
    lng: -73.802297
  }, {
    lat: 40.729275,
    lng: -73.802511
  }],
  center: {
    lat: 40.723713000000004,
    lng: -73.79965700000002
  }
}, {
  name: 'Briarwood',
  borough: 'Queens',
  color: '0099FF',
  coords: [{
    lat: 40.715891000000006,
    lng: -73.817829
  }, {
    lat: 40.716038,
    lng: -73.818301
  }, {
    lat: 40.716801999999994,
    lng: -73.820404
  }, {
    lat: 40.716947999999995,
    lng: -73.821755
  }, {
    lat: 40.71577700000001,
    lng: -73.82609
  }, {
    lat: 40.71223199999999,
    lng: -73.823064
  }, {
    lat: 40.710394,
    lng: -73.82109
  }, {
    lat: 40.708849,
    lng: -73.819781
  }, {
    lat: 40.704603,
    lng: -73.817378
  }, {
    lat: 40.70405,
    lng: -73.817078
  }, {
    lat: 40.704148,
    lng: -73.815232
  }, {
    lat: 40.707694,
    lng: -73.802765
  }, {
    lat: 40.708279000000005,
    lng: -73.80313
  }, {
    lat: 40.708831999999994,
    lng: -73.803752
  }, {
    lat: 40.70940199999999,
    lng: -73.804997
  }, {
    lat: 40.711207,
    lng: -73.806199
  }, {
    lat: 40.711386,
    lng: -73.806306
  }, {
    lat: 40.71307800000001,
    lng: -73.806671
  }, {
    lat: 40.71366299999999,
    lng: -73.80695
  }, {
    lat: 40.714525,
    lng: -73.807508
  }, {
    lat: 40.715842,
    lng: -73.807833
  }, {
    lat: 40.715891000000006,
    lng: -73.817829
  }],
  center: {
    lat: 40.710499,
    lng: -73.81442750000002
  }
}, {
  name: 'Jamaica Hills',
  borough: 'Queens',
  color: '999999',
  coords: [{
    lat: 40.715842,
    lng: -73.807833
  }, {
    lat: 40.714493,
    lng: -73.807508
  }, {
    lat: 40.71366299999999,
    lng: -73.80695
  }, {
    lat: 40.71307800000001,
    lng: -73.806671
  }, {
    lat: 40.711386,
    lng: -73.806306
  }, {
    lat: 40.70940199999999,
    lng: -73.804997
  }, {
    lat: 40.708831999999994,
    lng: -73.803752
  }, {
    lat: 40.708279000000005,
    lng: -73.80313
  }, {
    lat: 40.707694,
    lng: -73.802765
  }, {
    lat: 40.71002,
    lng: -73.794719
  }, {
    lat: 40.710638,
    lng: -73.793027
  }, {
    lat: 40.711988,
    lng: -73.793024
  }, {
    lat: 40.71340300000001,
    lng: -73.793624
  }, {
    lat: 40.714037000000005,
    lng: -73.793667
  }, {
    lat: 40.71628199999999,
    lng: -73.79238
  }, {
    lat: 40.717518,
    lng: -73.79223
  }, {
    lat: 40.718168,
    lng: -73.791929
  }, {
    lat: 40.71891600000001,
    lng: -73.790899
  }, {
    lat: 40.719193,
    lng: -73.790752
  }, {
    lat: 40.719176,
    lng: -73.792015
  }, {
    lat: 40.718786,
    lng: -73.79356
  }, {
    lat: 40.716802,
    lng: -73.799525
  }, {
    lat: 40.716184000000005,
    lng: -73.803173
  }, {
    lat: 40.715842,
    lng: -73.807833
  }],
  center: {
    lat: 40.7134435,
    lng: -73.79929249999998
  }
}, {
  name: 'Jamaica Estates',
  borough: 'Queens',
  color: '006600',
  coords: [{
    lat: 40.723649,
    lng: -73.79040900000001
  }, {
    lat: 40.720201,
    lng: -73.79028000000001
  }, {
    lat: 40.71891600000001,
    lng: -73.790899
  }, {
    lat: 40.718168,
    lng: -73.791929
  }, {
    lat: 40.717518,
    lng: -73.79223
  }, {
    lat: 40.71628199999999,
    lng: -73.79238
  }, {
    lat: 40.714037000000005,
    lng: -73.793667
  }, {
    lat: 40.71340300000001,
    lng: -73.793624
  }, {
    lat: 40.711988,
    lng: -73.793024
  }, {
    lat: 40.710638,
    lng: -73.793027
  }, {
    lat: 40.712199,
    lng: -73.789085
  }, {
    lat: 40.711809,
    lng: -73.787283
  }, {
    lat: 40.715062,
    lng: -73.773586
  }, {
    lat: 40.717274,
    lng: -73.767278
  }, {
    lat: 40.719778,
    lng: -73.762471
  }, {
    lat: 40.721014000000004,
    lng: -73.75951
  }, {
    lat: 40.724592,
    lng: -73.754317
  }, {
    lat: 40.726251,
    lng: -73.756592
  }, {
    lat: 40.725893,
    lng: -73.75852300000001
  }, {
    lat: 40.725828,
    lng: -73.760497
  }, {
    lat: 40.726412999999994,
    lng: -73.76466
  }, {
    lat: 40.726348,
    lng: -73.766205
  }, {
    lat: 40.725535,
    lng: -73.770754
  }, {
    lat: 40.724722,
    lng: -73.7732
  }, {
    lat: 40.723844,
    lng: -73.775217
  }, {
    lat: 40.722771,
    lng: -73.776505
  }, {
    lat: 40.721957,
    lng: -73.77680500000001
  }, {
    lat: 40.723226000000004,
    lng: -73.777921
  }, {
    lat: 40.723681,
    lng: -73.776762
  }, {
    lat: 40.724657,
    lng: -73.775904
  }, {
    lat: 40.725242,
    lng: -73.775131
  }, {
    lat: 40.73025100000001,
    lng: -73.777363
  }, {
    lat: 40.72921,
    lng: -73.78113900000001
  }, {
    lat: 40.72742100000001,
    lng: -73.786547
  }, {
    lat: 40.725698,
    lng: -73.791739
  }, {
    lat: 40.723649,
    lng: -73.79040900000001
  }],
  center: {
    lat: 40.720444500000006,
    lng: -73.77399200000002
  }
}, {
  name: 'Jamaica',
  borough: 'Queens',
  color: '660000',
  coords: [{
    lat: 40.698177,
    lng: -73.814313
  }, {
    lat: 40.68490100000001,
    lng: -73.806631
  }, {
    lat: 40.682883999999994,
    lng: -73.805773
  }, {
    lat: 40.68630099999999,
    lng: -73.793971
  }, {
    lat: 40.687765000000006,
    lng: -73.790323
  }, {
    lat: 40.688644,
    lng: -73.787062
  }, {
    lat: 40.688969,
    lng: -73.78573100000001
  }, {
    lat: 40.691637,
    lng: -73.779208
  }, {
    lat: 40.692191,
    lng: -73.77732
  }, {
    lat: 40.694338,
    lng: -73.777835
  }, {
    lat: 40.699967,
    lng: -73.773629
  }, {
    lat: 40.700585,
    lng: -73.77238500000001
  }, {
    lat: 40.705205,
    lng: -73.775088
  }, {
    lat: 40.706311,
    lng: -73.775088
  }, {
    lat: 40.70758,
    lng: -73.773801
  }, {
    lat: 40.70823099999999,
    lng: -73.771183
  }, {
    lat: 40.708686,
    lng: -73.770024
  }, {
    lat: 40.70966200000001,
    lng: -73.768522
  }, {
    lat: 40.709889999999994,
    lng: -73.768823
  }, {
    lat: 40.710345,
    lng: -73.768994
  }, {
    lat: 40.710638,
    lng: -73.770368
  }, {
    lat: 40.710866,
    lng: -73.770711
  }, {
    lat: 40.715062,
    lng: -73.773586
  }, {
    lat: 40.711809,
    lng: -73.787283
  }, {
    lat: 40.712199,
    lng: -73.789085
  }, {
    lat: 40.710052,
    lng: -73.794664
  }, {
    lat: 40.704131,
    lng: -73.81535
  }, {
    lat: 40.704196,
    lng: -73.817152
  }, {
    lat: 40.698177,
    lng: -73.814313
  }],
  center: {
    lat: 40.698972999999995,
    lng: -73.79283699999996
  }
}, {
  name: 'Richmond Hill',
  borough: 'Queens',
  color: '0000CC',
  coords: [{
    lat: 40.697469999999996,
    lng: -73.8489
  }, {
    lat: 40.69474,
    lng: -73.84769
  }, {
    lat: 40.68918,
    lng: -73.84499
  }, {
    lat: 40.691052,
    lng: -73.838339
  }, {
    lat: 40.688644,
    lng: -73.837223
  }, {
    lat: 40.688383,
    lng: -73.838124
  }, {
    lat: 40.684023,
    lng: -73.836064
  }, {
    lat: 40.683274,
    lng: -73.838725
  }, {
    lat: 40.68166,
    lng: -73.83784
  }, {
    lat: 40.68203,
    lng: -73.83692
  }, {
    lat: 40.68345000000001,
    lng: -73.83426
  }, {
    lat: 40.68381,
    lng: -73.83351
  }, {
    lat: 40.68538,
    lng: -73.82941
  }, {
    lat: 40.68561,
    lng: -73.82862
  }, {
    lat: 40.686020000000006,
    lng: -73.82482
  }, {
    lat: 40.68621000000001,
    lng: -73.82415
  }, {
    lat: 40.68955,
    lng: -73.81566
  }, {
    lat: 40.68979,
    lng: -73.81514
  }, {
    lat: 40.69121,
    lng: -73.81308
  }, {
    lat: 40.69142,
    lng: -73.81267
  }, {
    lat: 40.69189,
    lng: -73.81066
  }, {
    lat: 40.70258,
    lng: -73.81637
  }, {
    lat: 40.70213,
    lng: -73.82023
  }, {
    lat: 40.70146,
    lng: -73.82398000000002
  }, {
    lat: 40.70095,
    lng: -73.82572
  }, {
    lat: 40.7003,
    lng: -73.82997
  }, {
    lat: 40.70000000000001,
    lng: -73.83074000000002
  }, {
    lat: 40.70226,
    lng: -73.83608
  }, {
    lat: 40.70416000000001,
    lng: -73.83694
  }, {
    lat: 40.70295999999999,
    lng: -73.83911
  }, {
    lat: 40.70108,
    lng: -73.84149000000001
  }, {
    lat: 40.70087,
    lng: -73.84222
  }, {
    lat: 40.7005,
    lng: -73.84299
  }, {
    lat: 40.699310000000004,
    lng: -73.84503
  }, {
    lat: 40.69816,
    lng: -73.84947
  }, {
    lat: 40.697469999999996,
    lng: -73.8489
  }],
  center: {
    lat: 40.692910000000005,
    lng: -73.83006499999999
  }
}, {
  name: 'South Ozone Park',
  borough: 'Queens',
  color: '33CCFF',
  coords: [{
    lat: 40.69189,
    lng: -73.8107
  }, {
    lat: 40.69142,
    lng: -73.81267
  }, {
    lat: 40.69121,
    lng: -73.81308
  }, {
    lat: 40.68979,
    lng: -73.81514
  }, {
    lat: 40.68621000000001,
    lng: -73.82415
  }, {
    lat: 40.686020000000006,
    lng: -73.82482
  }, {
    lat: 40.68561,
    lng: -73.82862
  }, {
    lat: 40.68538,
    lng: -73.82941
  }, {
    lat: 40.68381,
    lng: -73.83351
  }, {
    lat: 40.68345000000001,
    lng: -73.83426
  }, {
    lat: 40.68203,
    lng: -73.83692
  }, {
    lat: 40.68167,
    lng: -73.83782
  }, {
    lat: 40.68153,
    lng: -73.83829
  }, {
    lat: 40.68109,
    lng: -73.8405
  }, {
    lat: 40.67635,
    lng: -73.83793
  }, {
    lat: 40.67242000000001,
    lng: -73.83613
  }, {
    lat: 40.66328,
    lng: -73.83166
  }, {
    lat: 40.66382000000001,
    lng: -73.82937
  }, {
    lat: 40.66325,
    lng: -73.8245
  }, {
    lat: 40.66304,
    lng: -73.82319
  }, {
    lat: 40.66337,
    lng: -73.82308
  }, {
    lat: 40.66236,
    lng: -73.81506
  }, {
    lat: 40.66276,
    lng: -73.81179
  }, {
    lat: 40.66127,
    lng: -73.81225
  }, {
    lat: 40.66044,
    lng: -73.80785
  }, {
    lat: 40.66123000000001,
    lng: -73.80557
  }, {
    lat: 40.66147999999999,
    lng: -73.80386
  }, {
    lat: 40.66219,
    lng: -73.80192
  }, {
    lat: 40.662310000000005,
    lng: -73.8013
  }, {
    lat: 40.66224,
    lng: -73.80014
  }, {
    lat: 40.66254,
    lng: -73.79926
  }, {
    lat: 40.66457,
    lng: -73.79684
  }, {
    lat: 40.66478,
    lng: -73.79598
  }, {
    lat: 40.66398,
    lng: -73.78993
  }, {
    lat: 40.66467999999999,
    lng: -73.78941000000002
  }, {
    lat: 40.66548,
    lng: -73.78956
  }, {
    lat: 40.66613,
    lng: -73.78931
  }, {
    lat: 40.67297,
    lng: -73.78793
  }, {
    lat: 40.67336,
    lng: -73.79034
  }, {
    lat: 40.674380000000006,
    lng: -73.80169
  }, {
    lat: 40.682883999999994,
    lng: -73.805773
  }, {
    lat: 40.68490100000001,
    lng: -73.806631
  }, {
    lat: 40.69189,
    lng: -73.8107
  }],
  center: {
    lat: 40.676165,
    lng: -73.81421499999999
  }
}, {
  name: 'Ozone Park',
  borough: 'Queens',
  color: 'CC6666',
  coords: [{
    lat: 40.688188,
    lng: -73.848817
  }, {
    lat: 40.683144000000006,
    lng: -73.866191
  }, {
    lat: 40.681387,
    lng: -73.86594
  }, {
    lat: 40.681777,
    lng: -73.863923
  }, {
    lat: 40.678392,
    lng: -73.863108
  }, {
    lat: 40.67849,
    lng: -73.862121
  }, {
    lat: 40.67403099999999,
    lng: -73.861048
  }, {
    lat: 40.672566,
    lng: -73.855769
  }, {
    lat: 40.67162199999999,
    lng: -73.853023
  }, {
    lat: 40.66836700000001,
    lng: -73.842251
  }, {
    lat: 40.666675000000005,
    lng: -73.835856
  }, {
    lat: 40.66582799999999,
    lng: -73.832852
  }, {
    lat: 40.67635,
    lng: -73.83793
  }, {
    lat: 40.68109,
    lng: -73.8405
  }, {
    lat: 40.68153,
    lng: -73.83829
  }, {
    lat: 40.68166,
    lng: -73.83784
  }, {
    lat: 40.683274,
    lng: -73.838725
  }, {
    lat: 40.684023,
    lng: -73.836064
  }, {
    lat: 40.688383,
    lng: -73.838124
  }, {
    lat: 40.688644,
    lng: -73.837223
  }, {
    lat: 40.691052,
    lng: -73.838339
  }, {
    lat: 40.688188,
    lng: -73.848817
  }],
  center: {
    lat: 40.678439999999995,
    lng: -73.84952150000004
  }
}, {
  name: 'Woodhaven',
  borough: 'Queens',
  color: 'CC33CC',
  coords: [{
    lat: 40.694114,
    lng: -73.868187
  }, {
    lat: 40.69394400000001,
    lng: -73.868638
  }, {
    lat: 40.692317,
    lng: -73.867721
  }, {
    lat: 40.69163900000001,
    lng: -73.867278
  }, {
    lat: 40.691304,
    lng: -73.867216
  }, {
    lat: 40.691182,
    lng: -73.86804
  }, {
    lat: 40.685292,
    lng: -73.866627
  }, {
    lat: 40.684250000000006,
    lng: -73.866498
  }, {
    lat: 40.683144000000006,
    lng: -73.866191
  }, {
    lat: 40.68918,
    lng: -73.84499
  }, {
    lat: 40.697469999999996,
    lng: -73.8489
  }, {
    lat: 40.69816,
    lng: -73.84947
  }, {
    lat: 40.699642,
    lng: -73.850619
  }, {
    lat: 40.700227000000005,
    lng: -73.850834
  }, {
    lat: 40.70048800000001,
    lng: -73.852808
  }, {
    lat: 40.700813,
    lng: -73.853967
  }, {
    lat: 40.70045499999999,
    lng: -73.854739
  }, {
    lat: 40.698275,
    lng: -73.853023
  }, {
    lat: 40.698243000000005,
    lng: -73.853838
  }, {
    lat: 40.697527,
    lng: -73.853967
  }, {
    lat: 40.697136,
    lng: -73.85667
  }, {
    lat: 40.695998,
    lng: -73.862507
  }, {
    lat: 40.694761,
    lng: -73.868601
  }, {
    lat: 40.694114,
    lng: -73.868187
  }],
  center: {
    lat: 40.691978500000005,
    lng: -73.85681399999999
  }
}, {
  name: 'Lindenwood',
  borough: 'Queens',
  color: '666633',
  coords: [{
    lat: 40.67403099999999,
    lng: -73.861048
  }, {
    lat: 40.670711,
    lng: -73.860232
  }, {
    lat: 40.67110199999999,
    lng: -73.8574
  }, {
    lat: 40.665503,
    lng: -73.856113
  }, {
    lat: 40.662931,
    lng: -73.855426
  }, {
    lat: 40.662541,
    lng: -73.85813
  }, {
    lat: 40.660066,
    lng: -73.857657
  }, {
    lat: 40.659741,
    lng: -73.859503
  }, {
    lat: 40.65710399999999,
    lng: -73.864352
  }, {
    lat: 40.65593199999999,
    lng: -73.863537
  }, {
    lat: 40.65489,
    lng: -73.86016
  }, {
    lat: 40.658350000000006,
    lng: -73.85535000000002
  }, {
    lat: 40.66145,
    lng: -73.85151
  }, {
    lat: 40.66273,
    lng: -73.84913
  }, {
    lat: 40.666,
    lng: -73.84151
  }, {
    lat: 40.668351,
    lng: -73.842158
  }, {
    lat: 40.672566,
    lng: -73.855769
  }, {
    lat: 40.67403099999999,
    lng: -73.861048
  }],
  center: {
    lat: 40.6644605,
    lng: -73.85293100000001
  }
}, {
  name: 'Howard Beach',
  borough: 'Queens',
  color: '009900',
  coords: [{
    lat: 40.66273,
    lng: -73.84913
  }, {
    lat: 40.66145,
    lng: -73.85151
  }, {
    lat: 40.658350000000006,
    lng: -73.85535000000002
  }, {
    lat: 40.65489,
    lng: -73.86016
  }, {
    lat: 40.65446000000001,
    lng: -73.85917
  }, {
    lat: 40.65394,
    lng: -73.85874
  }, {
    lat: 40.65321000000001,
    lng: -73.8584
  }, {
    lat: 40.652829999999994,
    lng: -73.85801
  }, {
    lat: 40.65274,
    lng: -73.85774
  }, {
    lat: 40.65296,
    lng: -73.85696
  }, {
    lat: 40.65282,
    lng: -73.85658
  }, {
    lat: 40.65207,
    lng: -73.85649
  }, {
    lat: 40.65142,
    lng: -73.8561
  }, {
    lat: 40.65085,
    lng: -73.85514
  }, {
    lat: 40.65089999999999,
    lng: -73.85477
  }, {
    lat: 40.65068999999999,
    lng: -73.85456
  }, {
    lat: 40.65048999999999,
    lng: -73.85359
  }, {
    lat: 40.65054,
    lng: -73.85216
  }, {
    lat: 40.65109000000001,
    lng: -73.8513
  }, {
    lat: 40.651469999999996,
    lng: -73.8501
  }, {
    lat: 40.65145,
    lng: -73.84967
  }, {
    lat: 40.65129,
    lng: -73.8493
  }, {
    lat: 40.65103,
    lng: -73.84945
  }, {
    lat: 40.65085,
    lng: -73.8499
  }, {
    lat: 40.650029999999994,
    lng: -73.85055
  }, {
    lat: 40.64912,
    lng: -73.85104
  }, {
    lat: 40.64898999999999,
    lng: -73.85153
  }, {
    lat: 40.64852,
    lng: -73.85205
  }, {
    lat: 40.64810000000001,
    lng: -73.85209
  }, {
    lat: 40.6467,
    lng: -73.85248
  }, {
    lat: 40.64619,
    lng: -73.85222
  }, {
    lat: 40.64554,
    lng: -73.85151
  }, {
    lat: 40.64438,
    lng: -73.84977
  }, {
    lat: 40.64429,
    lng: -73.84920000000001
  }, {
    lat: 40.64432,
    lng: -73.84812
  }, {
    lat: 40.64461000000001,
    lng: -73.84568
  }, {
    lat: 40.644659999999995,
    lng: -73.84458
  }, {
    lat: 40.64478,
    lng: -73.84392
  }, {
    lat: 40.64512,
    lng: -73.84093
  }, {
    lat: 40.64476,
    lng: -73.84031
  }, {
    lat: 40.64484,
    lng: -73.84008
  }, {
    lat: 40.6451,
    lng: -73.83973
  }, {
    lat: 40.64520000000001,
    lng: -73.83905
  }, {
    lat: 40.64523,
    lng: -73.83819
  }, {
    lat: 40.64549000000001,
    lng: -73.83711
  }, {
    lat: 40.64551,
    lng: -73.83572
  }, {
    lat: 40.66071,
    lng: -73.83947
  }, {
    lat: 40.661678,
    lng: -73.839905
  }, {
    lat: 40.662003,
    lng: -73.83954
  }, {
    lat: 40.66216599999999,
    lng: -73.839326
  }, {
    lat: 40.662231000000006,
    lng: -73.838468
  }, {
    lat: 40.66216599999999,
    lng: -73.838189
  }, {
    lat: 40.661547999999996,
    lng: -73.838038
  }, {
    lat: 40.661385,
    lng: -73.83894
  }, {
    lat: 40.660734000000005,
    lng: -73.838832
  }, {
    lat: 40.657364,
    lng: -73.838017
  }, {
    lat: 40.653832,
    lng: -73.837159
  }, {
    lat: 40.650218,
    lng: -73.836215
  }, {
    lat: 40.649371,
    lng: -73.836064
  }, {
    lat: 40.648166,
    lng: -73.835335
  }, {
    lat: 40.647922,
    lng: -73.834627
  }, {
    lat: 40.648004,
    lng: -73.832288
  }, {
    lat: 40.647987,
    lng: -73.831065
  }, {
    lat: 40.648378,
    lng: -73.830957
  }, {
    lat: 40.648785,
    lng: -73.831065
  }, {
    lat: 40.649029,
    lng: -73.830829
  }, {
    lat: 40.65165,
    lng: -73.831494
  }, {
    lat: 40.652888,
    lng: -73.831902
  }, {
    lat: 40.653083,
    lng: -73.832138
  }, {
    lat: 40.655541,
    lng: -73.832695
  }, {
    lat: 40.65756,
    lng: -73.83321
  }, {
    lat: 40.658048,
    lng: -73.83321
  }, {
    lat: 40.658341,
    lng: -73.831172
  }, {
    lat: 40.658097,
    lng: -73.830979
  }, {
    lat: 40.65782,
    lng: -73.832288
  }, {
    lat: 40.657201,
    lng: -73.832846
  }, {
    lat: 40.656534,
    lng: -73.832824
  }, {
    lat: 40.654874,
    lng: -73.832159
  }, {
    lat: 40.654109,
    lng: -73.83203
  }, {
    lat: 40.653295,
    lng: -73.831322
  }, {
    lat: 40.652676,
    lng: -73.831279
  }, {
    lat: 40.651618,
    lng: -73.830957
  }, {
    lat: 40.650397000000005,
    lng: -73.830056
  }, {
    lat: 40.648964,
    lng: -73.828254
  }, {
    lat: 40.648866,
    lng: -73.826687
  }, {
    lat: 40.648362,
    lng: -73.826387
  }, {
    lat: 40.655818,
    lng: -73.828382
  }, {
    lat: 40.657787000000006,
    lng: -73.829091
  }, {
    lat: 40.65860099999999,
    lng: -73.829627
  }, {
    lat: 40.65977300000001,
    lng: -73.82997
  }, {
    lat: 40.66582799999999,
    lng: -73.832852
  }, {
    lat: 40.66836700000001,
    lng: -73.842251
  }, {
    lat: 40.666,
    lng: -73.84151
  }, {
    lat: 40.66273,
    lng: -73.84913
  }],
  center: {
    lat: 40.6563285,
    lng: -73.84327350000001
  }
}, {
  name: 'Hamilton Beach',
  borough: 'Queens',
  color: '0066CC',
  coords: [{
    lat: 40.654027,
    lng: -73.832034
  }, {
    lat: 40.653311,
    lng: -73.831326
  }, {
    lat: 40.652676,
    lng: -73.831326
  }, {
    lat: 40.651536,
    lng: -73.830939
  }, {
    lat: 40.650332,
    lng: -73.83006
  }, {
    lat: 40.648948,
    lng: -73.828236
  }, {
    lat: 40.648866,
    lng: -73.826712
  }, {
    lat: 40.648362,
    lng: -73.826347
  }, {
    lat: 40.65611100000001,
    lng: -73.828472
  }, {
    lat: 40.657088,
    lng: -73.828751
  }, {
    lat: 40.656485,
    lng: -73.829394
  }, {
    lat: 40.65664799999999,
    lng: -73.829888
  }, {
    lat: 40.656029000000004,
    lng: -73.830939
  }, {
    lat: 40.65585,
    lng: -73.831218
  }, {
    lat: 40.65487400000001,
    lng: -73.831604
  }, {
    lat: 40.654402,
    lng: -73.832098
  }, {
    lat: 40.654027,
    lng: -73.832034
  }],
  center: {
    lat: 40.652725000000004,
    lng: -73.82922250000001
  }
}, {
  name: 'Hollis',
  borough: 'Queens',
  color: '333333',
  coords: [{
    lat: 40.710866,
    lng: -73.770711
  }, {
    lat: 40.710638,
    lng: -73.770368
  }, {
    lat: 40.710345,
    lng: -73.768994
  }, {
    lat: 40.709889999999994,
    lng: -73.768823
  }, {
    lat: 40.70966200000001,
    lng: -73.768522
  }, {
    lat: 40.709467,
    lng: -73.768179
  }, {
    lat: 40.705498,
    lng: -73.767063
  }, {
    lat: 40.70605100000001,
    lng: -73.764488
  }, {
    lat: 40.706604,
    lng: -73.764703
  }, {
    lat: 40.706897000000005,
    lng: -73.763458
  }, {
    lat: 40.708035,
    lng: -73.75839400000001
  }, {
    lat: 40.706148,
    lng: -73.757536
  }, {
    lat: 40.706148,
    lng: -73.75745
  }, {
    lat: 40.70331800000001,
    lng: -73.756206
  }, {
    lat: 40.704945,
    lng: -73.750155
  }, {
    lat: 40.713826,
    lng: -73.754017
  }, {
    lat: 40.721014000000004,
    lng: -73.75951
  }, {
    lat: 40.719778,
    lng: -73.762471
  }, {
    lat: 40.717274,
    lng: -73.767278
  }, {
    lat: 40.715062,
    lng: -73.773586
  }, {
    lat: 40.710866,
    lng: -73.770711
  }],
  center: {
    lat: 40.71216600000001,
    lng: -73.76187049999999
  }
}, {
  name: 'South Jamaica',
  borough: 'Queens',
  color: '999999',
  coords: [{
    lat: 40.674380000000006,
    lng: -73.80169
  }, {
    lat: 40.67336,
    lng: -73.79034
  }, {
    lat: 40.67297,
    lng: -73.78793
  }, {
    lat: 40.672371,
    lng: -73.785903
  }, {
    lat: 40.674715,
    lng: -73.784315
  }, {
    lat: 40.675202999999996,
    lng: -73.783886
  }, {
    lat: 40.679076,
    lng: -73.778436
  }, {
    lat: 40.679629,
    lng: -73.777148
  }, {
    lat: 40.680736,
    lng: -73.774101
  }, {
    lat: 40.681549,
    lng: -73.77217
  }, {
    lat: 40.683111,
    lng: -73.770067
  }, {
    lat: 40.68379500000001,
    lng: -73.769853
  }, {
    lat: 40.688383,
    lng: -73.776762
  }, {
    lat: 40.691637,
    lng: -73.779208
  }, {
    lat: 40.688969,
    lng: -73.78573100000001
  }, {
    lat: 40.687765000000006,
    lng: -73.790323
  }, {
    lat: 40.68630099999999,
    lng: -73.793971
  }, {
    lat: 40.682883999999994,
    lng: -73.805773
  }, {
    lat: 40.674380000000006,
    lng: -73.80169
  }],
  center: {
    lat: 40.682004,
    lng: -73.78781300000003
  }
}, {
  name: 'St. Albans',
  borough: 'Queens',
  color: '006666',
  coords: [{
    lat: 40.688383,
    lng: -73.776762
  }, {
    lat: 40.68379500000001,
    lng: -73.769853
  }, {
    lat: 40.683111,
    lng: -73.770067
  }, {
    lat: 40.681549,
    lng: -73.77217
  }, {
    lat: 40.680736,
    lng: -73.774101
  }, {
    lat: 40.673999,
    lng: -73.763029
  }, {
    lat: 40.676407,
    lng: -73.756978
  }, {
    lat: 40.676016000000004,
    lng: -73.756763
  }, {
    lat: 40.675886,
    lng: -73.755734
  }, {
    lat: 40.677676,
    lng: -73.754961
  }, {
    lat: 40.681971999999995,
    lng: -73.751957
  }, {
    lat: 40.68591,
    lng: -73.75024
  }, {
    lat: 40.687928,
    lng: -73.748395
  }, {
    lat: 40.689815,
    lng: -73.747193
  }, {
    lat: 40.693134,
    lng: -73.744833
  }, {
    lat: 40.704945,
    lng: -73.750155
  }, {
    lat: 40.70331800000001,
    lng: -73.756206
  }, {
    lat: 40.706148,
    lng: -73.75745
  }, {
    lat: 40.706148,
    lng: -73.757536
  }, {
    lat: 40.708035,
    lng: -73.75839400000001
  }, {
    lat: 40.706897000000005,
    lng: -73.763458
  }, {
    lat: 40.706604,
    lng: -73.764703
  }, {
    lat: 40.70605100000001,
    lng: -73.764488
  }, {
    lat: 40.705498,
    lng: -73.767063
  }, {
    lat: 40.709467,
    lng: -73.768179
  }, {
    lat: 40.70966200000001,
    lng: -73.768522
  }, {
    lat: 40.708686,
    lng: -73.770024
  }, {
    lat: 40.70823099999999,
    lng: -73.771183
  }, {
    lat: 40.70758,
    lng: -73.773801
  }, {
    lat: 40.706311,
    lng: -73.775088
  }, {
    lat: 40.705205,
    lng: -73.775088
  }, {
    lat: 40.700585,
    lng: -73.77238500000001
  }, {
    lat: 40.699967,
    lng: -73.773629
  }, {
    lat: 40.694338,
    lng: -73.777835
  }, {
    lat: 40.692191,
    lng: -73.77732
  }, {
    lat: 40.69167,
    lng: -73.779251
  }, {
    lat: 40.688383,
    lng: -73.776762
  }],
  center: {
    lat: 40.69183050000001,
    lng: -73.76204199999995
  }
}, {
  name: 'Laurelton',
  borough: 'Queens',
  color: '993399',
  coords: [{
    lat: 40.665763,
    lng: -73.74655
  }, {
    lat: 40.66547,
    lng: -73.742258
  }, {
    lat: 40.666056,
    lng: -73.74049900000001
  }, {
    lat: 40.666805,
    lng: -73.739597
  }, {
    lat: 40.667977,
    lng: -73.738524
  }, {
    lat: 40.673836,
    lng: -73.734533
  }, {
    lat: 40.678653,
    lng: -73.729898
  }, {
    lat: 40.679889,
    lng: -73.728911
  }, {
    lat: 40.683469,
    lng: -73.72663700000001
  }, {
    lat: 40.689815,
    lng: -73.747193
  }, {
    lat: 40.687928,
    lng: -73.748395
  }, {
    lat: 40.68591,
    lng: -73.75024
  }, {
    lat: 40.681971999999995,
    lng: -73.751957
  }, {
    lat: 40.677676,
    lng: -73.754961
  }, {
    lat: 40.676049,
    lng: -73.755691
  }, {
    lat: 40.67171999999999,
    lng: -73.756506
  }, {
    lat: 40.670092999999994,
    lng: -73.756334
  }, {
    lat: 40.667814,
    lng: -73.757064
  }, {
    lat: 40.66586100000001,
    lng: -73.757965
  }, {
    lat: 40.665763,
    lng: -73.74655
  }],
  center: {
    lat: 40.677642500000005,
    lng: -73.742301
  }
}, {
  name: 'Springfield Gardens',
  borough: 'Queens',
  color: '00CC33',
  coords: [{
    lat: 40.666414,
    lng: -73.789293
  }, {
    lat: 40.665535,
    lng: -73.789637
  }, {
    lat: 40.664722,
    lng: -73.789336
  }, {
    lat: 40.66393999999999,
    lng: -73.789894
  }, {
    lat: 40.663485,
    lng: -73.784315
  }, {
    lat: 40.661629,
    lng: -73.778779
  }, {
    lat: 40.66062,
    lng: -73.776505
  }, {
    lat: 40.659611,
    lng: -73.773672
  }, {
    lat: 40.654109,
    lng: -73.763845
  }, {
    lat: 40.657918,
    lng: -73.760068
  }, {
    lat: 40.659285,
    lng: -73.75981
  }, {
    lat: 40.65970800000001,
    lng: -73.760025
  }, {
    lat: 40.661466000000004,
    lng: -73.760926
  }, {
    lat: 40.66586100000001,
    lng: -73.757965
  }, {
    lat: 40.667391,
    lng: -73.771183
  }, {
    lat: 40.667521,
    lng: -73.775732
  }, {
    lat: 40.666414,
    lng: -73.789293
  }],
  center: {
    lat: 40.660815,
    lng: -73.77392950000001
  }
}, {
  name: 'Rochdale',
  borough: 'Queens',
  color: 'FFCC33',
  coords: [{
    lat: 40.679629,
    lng: -73.777148
  }, {
    lat: 40.679076,
    lng: -73.778436
  }, {
    lat: 40.675234999999994,
    lng: -73.784015
  }, {
    lat: 40.672371,
    lng: -73.785903
  }, {
    lat: 40.67297,
    lng: -73.78793
  }, {
    lat: 40.666414,
    lng: -73.789293
  }, {
    lat: 40.667521,
    lng: -73.775732
  }, {
    lat: 40.667391,
    lng: -73.771183
  }, {
    lat: 40.66586100000001,
    lng: -73.757965
  }, {
    lat: 40.667749,
    lng: -73.757064
  }, {
    lat: 40.670092999999994,
    lng: -73.756334
  }, {
    lat: 40.67171999999999,
    lng: -73.756506
  }, {
    lat: 40.675886,
    lng: -73.755734
  }, {
    lat: 40.676016000000004,
    lng: -73.756763
  }, {
    lat: 40.676407,
    lng: -73.756978
  }, {
    lat: 40.673999,
    lng: -73.763029
  }, {
    lat: 40.680736,
    lng: -73.774101
  }, {
    lat: 40.679629,
    lng: -73.777148
  }],
  center: {
    lat: 40.6732985,
    lng: -73.7725135
  }
}, {
  name: 'Oakland Gardens',
  borough: 'Queens',
  color: 'FFCC33',
  coords: [{
    lat: 40.745956,
    lng: -73.767799
  }, {
    lat: 40.744201,
    lng: -73.766941
  }, {
    lat: 40.74303,
    lng: -73.765396
  }, {
    lat: 40.736852,
    lng: -73.762306
  }, {
    lat: 40.73548600000001,
    lng: -73.762564
  }, {
    lat: 40.73816899999999,
    lng: -73.748517
  }, {
    lat: 40.735714,
    lng: -73.7465
  }, {
    lat: 40.733290999999994,
    lng: -73.745577
  }, {
    lat: 40.736267,
    lng: -73.742086
  }, {
    lat: 40.738413,
    lng: -73.74024100000001
  }, {
    lat: 40.738868,
    lng: -73.741271
  }, {
    lat: 40.740819,
    lng: -73.744018
  }, {
    lat: 40.739827,
    lng: -73.749912
  }, {
    lat: 40.74010400000001,
    lng: -73.751356
  }, {
    lat: 40.742445,
    lng: -73.753459
  }, {
    lat: 40.742998,
    lng: -73.75067
  }, {
    lat: 40.74332299999999,
    lng: -73.74788
  }, {
    lat: 40.742932999999994,
    lng: -73.74582
  }, {
    lat: 40.74332299999999,
    lng: -73.74479000000001
  }, {
    lat: 40.746997,
    lng: -73.746593
  }, {
    lat: 40.747517,
    lng: -73.74466100000001
  }, {
    lat: 40.747972,
    lng: -73.744876
  }, {
    lat: 40.748167,
    lng: -73.744061
  }, {
    lat: 40.751548,
    lng: -73.745563
  }, {
    lat: 40.75210100000001,
    lng: -73.746893
  }, {
    lat: 40.751191,
    lng: -73.748138
  }, {
    lat: 40.74924,
    lng: -73.75745
  }, {
    lat: 40.74794,
    lng: -73.76024
  }, {
    lat: 40.745956,
    lng: -73.767799
  }],
  center: {
    lat: 40.742696,
    lng: -73.75401999999997
  }
}, {
  name: 'Hollis Hills',
  borough: 'Queens',
  color: '003399',
  coords: [{
    lat: 40.73548600000001,
    lng: -73.762564
  }, {
    lat: 40.73530800000001,
    lng: -73.762747
  }, {
    lat: 40.73456,
    lng: -73.76523600000002
  }, {
    lat: 40.732934,
    lng: -73.763927
  }, {
    lat: 40.728657,
    lng: -73.759678
  }, {
    lat: 40.728104,
    lng: -73.758777
  }, {
    lat: 40.72786000000001,
    lng: -73.757876
  }, {
    lat: 40.727747,
    lng: -73.757103
  }, {
    lat: 40.727747,
    lng: -73.754228
  }, {
    lat: 40.727356,
    lng: -73.753692
  }, {
    lat: 40.729519,
    lng: -73.750065
  }, {
    lat: 40.733290999999994,
    lng: -73.745577
  }, {
    lat: 40.735714,
    lng: -73.7465
  }, {
    lat: 40.73816899999999,
    lng: -73.748517
  }, {
    lat: 40.73548600000001,
    lng: -73.762564
  }],
  center: {
    lat: 40.73276249999999,
    lng: -73.75540650000005
  }
}, {
  name: 'Queens Village',
  borough: 'Queens',
  color: '0099FF',
  coords: [{
    lat: 40.713826,
    lng: -73.754017
  }, {
    lat: 40.704945,
    lng: -73.750155
  }, {
    lat: 40.701594,
    lng: -73.748652
  }, {
    lat: 40.703546,
    lng: -73.741185
  }, {
    lat: 40.703448,
    lng: -73.740541
  }, {
    lat: 40.702049,
    lng: -73.740928
  }, {
    lat: 40.701789,
    lng: -73.734362
  }, {
    lat: 40.703286,
    lng: -73.73419
  }, {
    lat: 40.703123000000005,
    lng: -73.726079
  }, {
    lat: 40.709857,
    lng: -73.72637900000001
  }, {
    lat: 40.716737,
    lng: -73.728221
  }, {
    lat: 40.722169,
    lng: -73.730303
  }, {
    lat: 40.722494,
    lng: -73.729745
  }, {
    lat: 40.723389,
    lng: -73.727324
  }, {
    lat: 40.723876000000004,
    lng: -73.727452
  }, {
    lat: 40.72332299999999,
    lng: -73.729941
  }, {
    lat: 40.72755099999999,
    lng: -73.731443
  }, {
    lat: 40.73064099999999,
    lng: -73.745477
  }, {
    lat: 40.731617,
    lng: -73.746678
  }, {
    lat: 40.73233199999999,
    lng: -73.746718
  }, {
    lat: 40.729519,
    lng: -73.750065
  }, {
    lat: 40.727356,
    lng: -73.753692
  }, {
    lat: 40.726251,
    lng: -73.756592
  }, {
    lat: 40.724592,
    lng: -73.754317
  }, {
    lat: 40.721014000000004,
    lng: -73.75951
  }, {
    lat: 40.713826,
    lng: -73.754017
  }],
  center: {
    lat: 40.71696299999999,
    lng: -73.7427945
  }
}, {
  name: 'Cambria Heights',
  borough: 'Queens',
  color: '00CC33',
  coords: [{
    lat: 40.693134,
    lng: -73.744833
  }, {
    lat: 40.689815,
    lng: -73.747279
  }, {
    lat: 40.683469,
    lng: -73.726594
  }, {
    lat: 40.684869,
    lng: -73.726251
  }, {
    lat: 40.687147,
    lng: -73.72595
  }, {
    lat: 40.695119,
    lng: -73.726251
  }, {
    lat: 40.697429,
    lng: -73.725564
  }, {
    lat: 40.703123000000005,
    lng: -73.726079
  }, {
    lat: 40.703286,
    lng: -73.73419
  }, {
    lat: 40.701789,
    lng: -73.734362
  }, {
    lat: 40.702049,
    lng: -73.740928
  }, {
    lat: 40.703448,
    lng: -73.740541
  }, {
    lat: 40.703546,
    lng: -73.741185
  }, {
    lat: 40.701594,
    lng: -73.748652
  }, {
    lat: 40.693134,
    lng: -73.744833
  }],
  center: {
    lat: 40.6935075,
    lng: -73.73710800000003
  }
}, {
  name: 'Brookville',
  borough: 'Queens',
  color: '999999',
  coords: [{
    lat: 40.665926000000006,
    lng: -73.757965
  }, {
    lat: 40.661466000000004,
    lng: -73.760926
  }, {
    lat: 40.659285,
    lng: -73.75981
  }, {
    lat: 40.657918,
    lng: -73.760068
  }, {
    lat: 40.652448,
    lng: -73.748781
  }, {
    lat: 40.65209,
    lng: -73.743245
  }, {
    lat: 40.65616,
    lng: -73.743374
  }, {
    lat: 40.65612699999999,
    lng: -73.74479000000001
  }, {
    lat: 40.657494,
    lng: -73.745133
  }, {
    lat: 40.65756,
    lng: -73.748431
  }, {
    lat: 40.658992,
    lng: -73.747358
  }, {
    lat: 40.658894000000004,
    lng: -73.746972
  }, {
    lat: 40.660652,
    lng: -73.747015
  }, {
    lat: 40.663875,
    lng: -73.744783
  }, {
    lat: 40.663615,
    lng: -73.743968
  }, {
    lat: 40.665177,
    lng: -73.743024
  }, {
    lat: 40.66547,
    lng: -73.742258
  }, {
    lat: 40.665763,
    lng: -73.74655
  }, {
    lat: 40.665926000000006,
    lng: -73.757965
  }],
  center: {
    lat: 40.659008,
    lng: -73.75159199999996
  }
}, {
  name: 'Rosedale',
  borough: 'Queens',
  color: 'FFFF33',
  coords: [{
    lat: 40.679889,
    lng: -73.728911
  }, {
    lat: 40.678653,
    lng: -73.729898
  }, {
    lat: 40.673836,
    lng: -73.734533
  }, {
    lat: 40.668042,
    lng: -73.738396
  }, {
    lat: 40.666024,
    lng: -73.740456
  }, {
    lat: 40.665503,
    lng: -73.742258
  }, {
    lat: 40.665177,
    lng: -73.743024
  }, {
    lat: 40.663615,
    lng: -73.743968
  }, {
    lat: 40.663875,
    lng: -73.744783
  }, {
    lat: 40.660652,
    lng: -73.747015
  }, {
    lat: 40.658894000000004,
    lng: -73.746972
  }, {
    lat: 40.658992,
    lng: -73.747358
  }, {
    lat: 40.65756,
    lng: -73.748431
  }, {
    lat: 40.657494,
    lng: -73.745133
  }, {
    lat: 40.65612699999999,
    lng: -73.74479000000001
  }, {
    lat: 40.65616,
    lng: -73.743374
  }, {
    lat: 40.65209,
    lng: -73.743245
  }, {
    lat: 40.652448,
    lng: -73.748781
  }, {
    lat: 40.657918,
    lng: -73.760068
  }, {
    lat: 40.654109,
    lng: -73.763845
  }, {
    lat: 40.64564299999999,
    lng: -73.748738
  }, {
    lat: 40.644894,
    lng: -73.74951100000001
  }, {
    lat: 40.643689,
    lng: -73.747794
  }, {
    lat: 40.641833,
    lng: -73.746593
  }, {
    lat: 40.639944,
    lng: -73.746335
  }, {
    lat: 40.638023,
    lng: -73.746893
  }, {
    lat: 40.636883,
    lng: -73.746979
  }, {
    lat: 40.636395,
    lng: -73.746249
  }, {
    lat: 40.637730000000005,
    lng: -73.744533
  }, {
    lat: 40.638121,
    lng: -73.743717
  }, {
    lat: 40.63799,
    lng: -73.742902
  }, {
    lat: 40.637795,
    lng: -73.741657
  }, {
    lat: 40.637209,
    lng: -73.741185
  }, {
    lat: 40.636753000000006,
    lng: -73.741486
  }, {
    lat: 40.635222,
    lng: -73.742601
  }, {
    lat: 40.635027,
    lng: -73.741743
  }, {
    lat: 40.635385,
    lng: -73.739984
  }, {
    lat: 40.63808800000001,
    lng: -73.741185
  }, {
    lat: 40.639391,
    lng: -73.742086
  }, {
    lat: 40.642191,
    lng: -73.742129
  }, {
    lat: 40.647434,
    lng: -73.740756
  }, {
    lat: 40.64977799999999,
    lng: -73.734705
  }, {
    lat: 40.650234,
    lng: -73.730456
  }, {
    lat: 40.651992,
    lng: -73.724792
  }, {
    lat: 40.654042999999994,
    lng: -73.724834
  }, {
    lat: 40.655281,
    lng: -73.725392
  }, {
    lat: 40.655802,
    lng: -73.72595
  }, {
    lat: 40.658243,
    lng: -73.726208
  }, {
    lat: 40.658894000000004,
    lng: -73.725693
  }, {
    lat: 40.65948,
    lng: -73.726036
  }, {
    lat: 40.659838,
    lng: -73.72676600000001
  }, {
    lat: 40.660392,
    lng: -73.727195
  }, {
    lat: 40.663094,
    lng: -73.728225
  }, {
    lat: 40.663192,
    lng: -73.727753
  }, {
    lat: 40.664852,
    lng: -73.727832
  }, {
    lat: 40.66543800000001,
    lng: -73.728476
  }, {
    lat: 40.67159,
    lng: -73.727832
  }, {
    lat: 40.674064,
    lng: -73.727446
  }, {
    lat: 40.678002,
    lng: -73.725993
  }, {
    lat: 40.679857000000005,
    lng: -73.725607
  }, {
    lat: 40.683046,
    lng: -73.725993
  }, {
    lat: 40.683469,
    lng: -73.72663700000001
  }, {
    lat: 40.679889,
    lng: -73.728911
  }],
  center: {
    lat: 40.659248000000005,
    lng: -73.74431849999996
  }
}, {
  name: 'Douglaston',
  borough: 'Queens',
  color: '6666FF',
  coords: [{
    lat: 40.76375,
    lng: -73.75002
  }, {
    lat: 40.763,
    lng: -73.74925
  }, {
    lat: 40.76343,
    lng: -73.74843
  }, {
    lat: 40.76414,
    lng: -73.74618
  }, {
    lat: 40.76208,
    lng: -73.74491
  }, {
    lat: 40.7607,
    lng: -73.7445
  }, {
    lat: 40.76004,
    lng: -73.74395
  }, {
    lat: 40.75886,
    lng: -73.74262
  }, {
    lat: 40.7587,
    lng: -73.74262
  }, {
    lat: 40.75642,
    lng: -73.74096
  }, {
    lat: 40.756116,
    lng: -73.740642
  }, {
    lat: 40.753613,
    lng: -73.744365
  }, {
    lat: 40.752052,
    lng: -73.743131
  }, {
    lat: 40.750874,
    lng: -73.74194
  }, {
    lat: 40.749265,
    lng: -73.739558
  }, {
    lat: 40.747704,
    lng: -73.737391
  }, {
    lat: 40.745786,
    lng: -73.735471
  }, {
    lat: 40.742803,
    lng: -73.733497
  }, {
    lat: 40.743648,
    lng: -73.73213
  }, {
    lat: 40.746964,
    lng: -73.729212
  }, {
    lat: 40.749533,
    lng: -73.728268
  }, {
    lat: 40.751613,
    lng: -73.72698
  }, {
    lat: 40.753564,
    lng: -73.723676
  }, {
    lat: 40.754637,
    lng: -73.722474
  }, {
    lat: 40.756522,
    lng: -73.721401
  }, {
    lat: 40.758115,
    lng: -73.720157
  }, {
    lat: 40.759383,
    lng: -73.717496
  }, {
    lat: 40.759806,
    lng: -73.713891
  }, {
    lat: 40.76508,
    lng: -73.72255
  }, {
    lat: 40.7631309,
    lng: -73.7274447
  }, {
    lat: 40.7609191,
    lng: -73.7313458
  }, {
    lat: 40.7597134,
    lng: -73.7345988
  }, {
    lat: 40.7662588,
    lng: -73.7387503
  }, {
    lat: 40.7669129,
    lng: -73.7393618
  }, {
    lat: 40.7683512,
    lng: -73.7375378
  }, {
    lat: 40.7697976,
    lng: -73.7386536
  }, {
    lat: 40.7708051,
    lng: -73.7388253
  }, {
    lat: 40.7727714,
    lng: -73.740735
  }, {
    lat: 40.7734376,
    lng: -73.7417435
  }, {
    lat: 40.7726251,
    lng: -73.7434816
  }, {
    lat: 40.7771913,
    lng: -73.7453269
  }, {
    lat: 40.7780849,
    lng: -73.744254
  }, {
    lat: 40.7784424,
    lng: -73.7442111
  }, {
    lat: 40.78213,
    lng: -73.75013
  }, {
    lat: 40.78247,
    lng: -73.75017
  }, {
    lat: 40.78262,
    lng: -73.75092
  }, {
    lat: 40.7825,
    lng: -73.7515
  }, {
    lat: 40.782,
    lng: -73.75229
  }, {
    lat: 40.7814,
    lng: -73.75296
  }, {
    lat: 40.78062,
    lng: -73.75322
  }, {
    lat: 40.7793,
    lng: -73.7542
  }, {
    lat: 40.77812,
    lng: -73.75444
  }, {
    lat: 40.77764,
    lng: -73.75476
  }, {
    lat: 40.77625,
    lng: -73.7551
  }, {
    lat: 40.77514,
    lng: -73.75422
  }, {
    lat: 40.77404,
    lng: -73.75394
  }, {
    lat: 40.77283,
    lng: -73.75315
  }, {
    lat: 40.7723466,
    lng: -73.7535466
  }, {
    lat: 40.7717447,
    lng: -73.7545702
  }, {
    lat: 40.771635,
    lng: -73.7553833
  }, {
    lat: 40.7713888,
    lng: -73.7556266
  }, {
    lat: 40.77045,
    lng: -73.75528
  }, {
    lat: 40.76976,
    lng: -73.75487
  }, {
    lat: 40.76856,
    lng: -73.75487
  }, {
    lat: 40.76757,
    lng: -73.75508
  }, {
    lat: 40.76716,
    lng: -73.755
  }, {
    lat: 40.76687,
    lng: -73.75452
  }, {
    lat: 40.76666,
    lng: -73.75457
  }, {
    lat: 40.76451,
    lng: -73.75289
  }, {
    lat: 40.76375,
    lng: -73.75176
  }, {
    lat: 40.76347,
    lng: -73.75158
  }, {
    lat: 40.76375,
    lng: -73.75002
  }],
  center: {
    lat: 40.766847,
    lng: -73.731661
  }
}, {
  name: 'Little Neck',
  borough: 'Queens',
  color: 'FF0000',
  coords: [{
    lat: 40.7784424,
    lng: -73.7442111
  }, {
    lat: 40.7780849,
    lng: -73.744254
  }, {
    lat: 40.7771913,
    lng: -73.7453269
  }, {
    lat: 40.7726251,
    lng: -73.7434816
  }, {
    lat: 40.7734376,
    lng: -73.7417435
  }, {
    lat: 40.7727714,
    lng: -73.740735
  }, {
    lat: 40.7708051,
    lng: -73.7388253
  }, {
    lat: 40.7697976,
    lng: -73.7386536
  }, {
    lat: 40.7683512,
    lng: -73.7375378
  }, {
    lat: 40.7669129,
    lng: -73.7393618
  }, {
    lat: 40.7662588,
    lng: -73.7387503
  }, {
    lat: 40.7652004,
    lng: -73.7380583
  }, {
    lat: 40.7597134,
    lng: -73.7345988
  }, {
    lat: 40.7609191,
    lng: -73.7313458
  }, {
    lat: 40.7631309,
    lng: -73.7274447
  }, {
    lat: 40.76508,
    lng: -73.72255
  }, {
    lat: 40.76739,
    lng: -73.72624
  }, {
    lat: 40.77064,
    lng: -73.73186
  }, {
    lat: 40.7722676,
    lng: -73.7341475
  }, {
    lat: 40.77503,
    lng: -73.73875
  }, {
    lat: 40.77527,
    lng: -73.7389
  }, {
    lat: 40.77569,
    lng: -73.73983
  }, {
    lat: 40.7784424,
    lng: -73.7442111
  }],
  center: {
    lat: 40.76271150000001,
    lng: -73.7347105
  }
}, {
  name: 'Glen Oaks',
  borough: 'Queens',
  color: 'CCCC00',
  coords: [{
    lat: 40.759383,
    lng: -73.71749600000001
  }, {
    lat: 40.758115,
    lng: -73.720157
  }, {
    lat: 40.756522000000004,
    lng: -73.721401
  }, {
    lat: 40.754637,
    lng: -73.722474
  }, {
    lat: 40.753564,
    lng: -73.723676
  }, {
    lat: 40.751613000000006,
    lng: -73.72698
  }, {
    lat: 40.749533,
    lng: -73.728268
  }, {
    lat: 40.746964,
    lng: -73.729212
  }, {
    lat: 40.743648,
    lng: -73.73213
  }, {
    lat: 40.740754,
    lng: -73.72663700000001
  }, {
    lat: 40.743193,
    lng: -73.719298
  }, {
    lat: 40.744071,
    lng: -73.717621
  }, {
    lat: 40.752426,
    lng: -73.701868
  }, {
    lat: 40.759806,
    lng: -73.713891
  }, {
    lat: 40.759383,
    lng: -73.71749600000001
  }],
  center: {
    lat: 40.750280000000004,
    lng: -73.71699899999999
  }
}, {
  name: 'Bellerose',
  borough: 'Queens',
  color: '993399',
  coords: [{
    lat: 40.731617,
    lng: -73.746678
  }, {
    lat: 40.73064099999999,
    lng: -73.745477
  }, {
    lat: 40.72755099999999,
    lng: -73.731443
  }, {
    lat: 40.72332299999999,
    lng: -73.729941
  }, {
    lat: 40.723876000000004,
    lng: -73.727452
  }, {
    lat: 40.723389,
    lng: -73.727324
  }, {
    lat: 40.724202,
    lng: -73.725092
  }, {
    lat: 40.726347999999994,
    lng: -73.716938
  }, {
    lat: 40.727194,
    lng: -73.710501
  }, {
    lat: 40.73073899999999,
    lng: -73.710758
  }, {
    lat: 40.732234,
    lng: -73.711316
  }, {
    lat: 40.738153,
    lng: -73.714918
  }, {
    lat: 40.744071,
    lng: -73.717621
  }, {
    lat: 40.743177,
    lng: -73.719338
  }, {
    lat: 40.740770000000005,
    lng: -73.726655
  }, {
    lat: 40.743664,
    lng: -73.732127
  }, {
    lat: 40.742835,
    lng: -73.733436
  }, {
    lat: 40.740527,
    lng: -73.737792
  }, {
    lat: 40.739567,
    lng: -73.739294
  }, {
    lat: 40.738445000000006,
    lng: -73.740238
  }, {
    lat: 40.736446,
    lng: -73.741911
  }, {
    lat: 40.734365,
    lng: -73.744315
  }, {
    lat: 40.73233199999999,
    lng: -73.746718
  }, {
    lat: 40.731617,
    lng: -73.746678
  }],
  center: {
    lat: 40.73369699999999,
    lng: -73.7286095
  }
}, {
  name: 'Floral Park',
  borough: 'Queens',
  color: '009900',
  coords: [{
    lat: 40.727194,
    lng: -73.710501
  }, {
    lat: 40.728039,
    lng: -73.706982
  }, {
    lat: 40.739031,
    lng: -73.700452
  }, {
    lat: 40.752426,
    lng: -73.701868
  }, {
    lat: 40.744071,
    lng: -73.717621
  }, {
    lat: 40.738348,
    lng: -73.71505
  }, {
    lat: 40.732234,
    lng: -73.711316
  }, {
    lat: 40.73073899999999,
    lng: -73.710758
  }, {
    lat: 40.727194,
    lng: -73.710501
  }],
  center: {
    lat: 40.73981,
    lng: -73.70903650000002
  }
}, {
  name: 'Broad Channel',
  borough: 'Queens',
  color: '0000FF',
  coords: [{
    lat: 40.6137244,
    lng: -73.8216019
  }, {
    lat: 40.61297509999999,
    lng: -73.8210225
  }, {
    lat: 40.6128122,
    lng: -73.82143020000001
  }, {
    lat: 40.6123398,
    lng: -73.8208938
  }, {
    lat: 40.6111344,
    lng: -73.8202071
  }, {
    lat: 40.6107598,
    lng: -73.8198423
  }, {
    lat: 40.6088864,
    lng: -73.8196921
  }, {
    lat: 40.60823479999999,
    lng: -73.8205075
  }, {
    lat: 40.607795,
    lng: -73.8208294
  }, {
    lat: 40.6070619,
    lng: -73.8212371
  }, {
    lat: 40.606833900000005,
    lng: -73.8221169
  }, {
    lat: 40.606508000000005,
    lng: -73.8223529
  }, {
    lat: 40.60575870000001,
    lng: -73.8229752
  }, {
    lat: 40.6057098,
    lng: -73.8222456
  }, {
    lat: 40.6048627,
    lng: -73.822825
  }, {
    lat: 40.6036083,
    lng: -73.822782
  }, {
    lat: 40.602223499999994,
    lng: -73.8236189
  }, {
    lat: 40.6008387,
    lng: -73.82441280000002
  }, {
    lat: 40.6003499,
    lng: -73.8245201
  }, {
    lat: 40.6002359,
    lng: -73.82424120000002
  }, {
    lat: 40.60012179999999,
    lng: -73.8227606
  }, {
    lat: 40.60010549999999,
    lng: -73.8216662
  }, {
    lat: 40.5998937,
    lng: -73.8213229
  }, {
    lat: 40.599779700000006,
    lng: -73.8218594
  }, {
    lat: 40.6000404,
    lng: -73.823812
  }, {
    lat: 40.59981230000001,
    lng: -73.8238549
  }, {
    lat: 40.59964930000001,
    lng: -73.8225675
  }, {
    lat: 40.5994375,
    lng: -73.8225675
  }, {
    lat: 40.5993724,
    lng: -73.8222027
  }, {
    lat: 40.5990954,
    lng: -73.8222241
  }, {
    lat: 40.5990465,
    lng: -73.8219452
  }, {
    lat: 40.5974661,
    lng: -73.8219452
  }, {
    lat: 40.5974824,
    lng: -73.8209367
  }, {
    lat: 40.59655370000001,
    lng: -73.8209367
  }, {
    lat: 40.59629309999999,
    lng: -73.8204217
  }, {
    lat: 40.5965863,
    lng: -73.8202071
  }, {
    lat: 40.5972055,
    lng: -73.8197136
  }, {
    lat: 40.5973684,
    lng: -73.81915570000001
  }, {
    lat: 40.5986718,
    lng: -73.8190699
  }, {
    lat: 40.59911170000001,
    lng: -73.8188982
  }, {
    lat: 40.599942600000006,
    lng: -73.8188553
  }, {
    lat: 40.60020329999999,
    lng: -73.8185978
  }, {
    lat: 40.6016859,
    lng: -73.818233
  }, {
    lat: 40.6028751,
    lng: -73.8180614
  }, {
    lat: 40.603201,
    lng: -73.8181686
  }, {
    lat: 40.6034616,
    lng: -73.8184905
  }, {
    lat: 40.6035431,
    lng: -73.8188982
  }, {
    lat: 40.604211,
    lng: -73.8188767
  }, {
    lat: 40.6044391,
    lng: -73.8190699
  }, {
    lat: 40.604569399999995,
    lng: -73.8188982
  }, {
    lat: 40.6049441,
    lng: -73.8188553
  }, {
    lat: 40.6050907,
    lng: -73.8186622
  }, {
    lat: 40.6050419,
    lng: -73.8184261
  }, {
    lat: 40.60463459999999,
    lng: -73.8187051
  }, {
    lat: 40.6041459,
    lng: -73.8185978
  }, {
    lat: 40.60381999999999,
    lng: -73.8184905
  }, {
    lat: 40.60370600000001,
    lng: -73.8181043
  }, {
    lat: 40.603917800000005,
    lng: -73.8181686
  }, {
    lat: 40.6038689,
    lng: -73.8178253
  }, {
    lat: 40.6047649,
    lng: -73.8176322
  }, {
    lat: 40.604862700000005,
    lng: -73.8181472
  }, {
    lat: 40.605351399999996,
    lng: -73.8182545
  }, {
    lat: 40.6055469,
    lng: -73.8181472
  }, {
    lat: 40.6054491,
    lng: -73.8178039
  }, {
    lat: 40.6058238,
    lng: -73.8176537
  }, {
    lat: 40.6059542,
    lng: -73.8173532
  }, {
    lat: 40.6059542,
    lng: -73.8167953
  }, {
    lat: 40.6057098,
    lng: -73.8166237
  }, {
    lat: 40.605335100000005,
    lng: -73.8167524
  }, {
    lat: 40.6052537,
    lng: -73.8164735
  }, {
    lat: 40.6057424,
    lng: -73.8159156
  }, {
    lat: 40.6060845,
    lng: -73.815937
  }, {
    lat: 40.6061659,
    lng: -73.8161087
  }, {
    lat: 40.6068013,
    lng: -73.8156152
  }, {
    lat: 40.606899000000006,
    lng: -73.8152933
  }, {
    lat: 40.6070782,
    lng: -73.81510020000002
  }, {
    lat: 40.60860950000001,
    lng: -73.8158512
  }, {
    lat: 40.60976610000001,
    lng: -73.818233
  }, {
    lat: 40.611525400000005,
    lng: -73.8181901
  }, {
    lat: 40.615320700000005,
    lng: -73.8209367
  }, {
    lat: 40.6147669,
    lng: -73.8218379
  }, {
    lat: 40.6139199,
    lng: -73.8209581
  }, {
    lat: 40.6137244,
    lng: -73.8216019
  }],
  center: {
    lat: 40.6058069,
    lng: -73.81981014999997
  }
}, {
  name: 'Far Rockaway',
  borough: 'Queens',
  color: 'DB4436',
  coords: [{
    lat: 40.610466499999994,
    lng: -73.7545681
  }, {
    lat: 40.6102711,
    lng: -73.7546432
  }, {
    lat: 40.6101326,
    lng: -73.7552977
  }, {
    lat: 40.6102303,
    lng: -73.7556517
  }, {
    lat: 40.6100756,
    lng: -73.7559843
  }, {
    lat: 40.6101163,
    lng: -73.7569284
  }, {
    lat: 40.6101652,
    lng: -73.7578619
  }, {
    lat: 40.6102874,
    lng: -73.7594175
  }, {
    lat: 40.6100675,
    lng: -73.7595248
  }, {
    lat: 40.6101,
    lng: -73.7596858
  }, {
    lat: 40.6064347,
    lng: -73.7609732
  }, {
    lat: 40.6024434,
    lng: -73.7603831
  }, {
    lat: 40.6027122,
    lng: -73.7630117
  }, {
    lat: 40.6013111,
    lng: -73.7625718
  }, {
    lat: 40.600578,
    lng: -73.7620997
  }, {
    lat: 40.5995434,
    lng: -73.7612736
  }, {
    lat: 40.5989569,
    lng: -73.7617779
  }, {
    lat: 40.5982889,
    lng: -73.7625289
  }, {
    lat: 40.59782460000001,
    lng: -73.763355
  }, {
    lat: 40.5947696,
    lng: -73.7627757
  }, {
    lat: 40.5945823,
    lng: -73.7644064
  }, {
    lat: 40.5917797,
    lng: -73.76382710000001
  }, {
    lat: 40.591519000000005,
    lng: -73.7637788
  }, {
    lat: 40.5914864,
    lng: -73.7631297
  }, {
    lat: 40.591592299999995,
    lng: -73.7630117
  }, {
    lat: 40.5915923,
    lng: -73.7619066
  }, {
    lat: 40.5916738,
    lng: -73.7605119
  }, {
    lat: 40.591185,
    lng: -73.7602115
  }, {
    lat: 40.59103830000001,
    lng: -73.7596107
  }, {
    lat: 40.5906961,
    lng: -73.7569284
  }, {
    lat: 40.5906961,
    lng: -73.7543106
  }, {
    lat: 40.590745000000005,
    lng: -73.7532485
  }, {
    lat: 40.5910139,
    lng: -73.7525296
  }, {
    lat: 40.59166570000001,
    lng: -73.7517035
  }, {
    lat: 40.592016,
    lng: -73.75152110000002
  }, {
    lat: 40.5928714,
    lng: -73.7503517
  }, {
    lat: 40.5941505,
    lng: -73.74753
  }, {
    lat: 40.5947859,
    lng: -73.7457061
  }, {
    lat: 40.5948267,
    lng: -73.74426840000001
  }, {
    lat: 40.5947533,
    lng: -73.7439466
  }, {
    lat: 40.59493259999999,
    lng: -73.7428522
  }, {
    lat: 40.5949163,
    lng: -73.7425733
  }, {
    lat: 40.5947533,
    lng: -73.7418544
  }, {
    lat: 40.59480219999999,
    lng: -73.7415004
  }, {
    lat: 40.5946474,
    lng: -73.7411141
  }, {
    lat: 40.59464740000001,
    lng: -73.7403202
  }, {
    lat: 40.594500800000006,
    lng: -73.7396014
  }, {
    lat: 40.594590399999994,
    lng: -73.7381744
  }, {
    lat: 40.5945252,
    lng: -73.7376487
  }, {
    lat: 40.595959,
    lng: -73.7380886
  }, {
    lat: 40.5972136,
    lng: -73.7380779
  }, {
    lat: 40.5973032,
    lng: -73.7382281
  }, {
    lat: 40.5973765,
    lng: -73.73833540000001
  }, {
    lat: 40.5973114,
    lng: -73.7385714
  }, {
    lat: 40.59696919999999,
    lng: -73.7386787
  }, {
    lat: 40.596830700000005,
    lng: -73.7387967
  }, {
    lat: 40.5968063,
    lng: -73.73939750000001
  }, {
    lat: 40.5968959,
    lng: -73.7395155
  }, {
    lat: 40.5968959,
    lng: -73.7397623
  }, {
    lat: 40.5967656,
    lng: -73.7399232
  }, {
    lat: 40.59643150000001,
    lng: -73.739816
  }, {
    lat: 40.59613010000001,
    lng: -73.7401915
  }, {
    lat: 40.5961383,
    lng: -73.7407279
  }, {
    lat: 40.596219700000006,
    lng: -73.7408137
  }, {
    lat: 40.596439700000005,
    lng: -73.7407172
  }, {
    lat: 40.5966189,
    lng: -73.7407494
  }, {
    lat: 40.5967004,
    lng: -73.7410069
  }, {
    lat: 40.59663520000001,
    lng: -73.7420154
  }, {
    lat: 40.59700990000001,
    lng: -73.7418222
  }, {
    lat: 40.59681440000001,
    lng: -73.7414789
  }, {
    lat: 40.5969285,
    lng: -73.7410283
  }, {
    lat: 40.5967818,
    lng: -73.7404704
  }, {
    lat: 40.59657,
    lng: -73.7404919
  }, {
    lat: 40.5963745,
    lng: -73.7406421
  }, {
    lat: 40.59619529999999,
    lng: -73.7406206
  }, {
    lat: 40.5962605,
    lng: -73.7402344
  }, {
    lat: 40.596456,
    lng: -73.7400627
  }, {
    lat: 40.5966026,
    lng: -73.7402558
  }, {
    lat: 40.5968796,
    lng: -73.7402558
  }, {
    lat: 40.5970914,
    lng: -73.7401056
  }, {
    lat: 40.5972543,
    lng: -73.7395906
  }, {
    lat: 40.5971566,
    lng: -73.739419
  }, {
    lat: 40.5968959,
    lng: -73.7390113
  }, {
    lat: 40.5974336,
    lng: -73.7387538
  }, {
    lat: 40.59759650000001,
    lng: -73.7384748
  }, {
    lat: 40.597515,
    lng: -73.7382174
  }, {
    lat: 40.597792,
    lng: -73.738153
  }, {
    lat: 40.5978898,
    lng: -73.738389
  }, {
    lat: 40.6015392,
    lng: -73.7379599
  }, {
    lat: 40.6028426,
    lng: -73.7381744
  }, {
    lat: 40.6041133,
    lng: -73.7391615
  }, {
    lat: 40.60453690000001,
    lng: -73.7402773
  }, {
    lat: 40.60750180000001,
    lng: -73.7434959
  }, {
    lat: 40.607795,
    lng: -73.742981
  }, {
    lat: 40.6112484,
    lng: -73.7452126
  }, {
    lat: 40.6120629,
    lng: -73.7456417
  }, {
    lat: 40.61157419999999,
    lng: -73.7468433
  }, {
    lat: 40.6123235,
    lng: -73.7471867
  }, {
    lat: 40.6121932,
    lng: -73.74753
  }, {
    lat: 40.6125516,
    lng: -73.7479162
  }, {
    lat: 40.6120955,
    lng: -73.748045
  }, {
    lat: 40.6115091,
    lng: -73.7501478
  }, {
    lat: 40.6105643,
    lng: -73.7535381
  }, {
    lat: 40.610466499999994,
    lng: -73.7545681
  }],
  center: {
    lat: 40.60162385,
    lng: -73.75102755
  }
}, {
  name: 'Bayswater',
  borough: 'Queens',
  color: '0BA9CC',
  coords: [{
    lat: 40.5994538,
    lng: -73.7665844
  }, {
    lat: 40.6013111,
    lng: -73.7625718
  }, {
    lat: 40.6027122,
    lng: -73.7630117
  }, {
    lat: 40.6024434,
    lng: -73.7603831
  }, {
    lat: 40.6064347,
    lng: -73.7609732
  }, {
    lat: 40.6101,
    lng: -73.7596858
  }, {
    lat: 40.6107761,
    lng: -73.7595248
  }, {
    lat: 40.610824900000004,
    lng: -73.7599325
  }, {
    lat: 40.6090168,
    lng: -73.7615204
  }, {
    lat: 40.6091471,
    lng: -73.7617779
  }, {
    lat: 40.61079230000001,
    lng: -73.7602973
  }, {
    lat: 40.61176970000001,
    lng: -73.7617564
  }, {
    lat: 40.6113462,
    lng: -73.7623358
  }, {
    lat: 40.6115091,
    lng: -73.7630224
  }, {
    lat: 40.611786,
    lng: -73.7636018
  }, {
    lat: 40.61181860000001,
    lng: -73.7646961
  }, {
    lat: 40.6121118,
    lng: -73.7651682
  }, {
    lat: 40.6127796,
    lng: -73.765254
  }, {
    lat: 40.6135941,
    lng: -73.7651682
  }, {
    lat: 40.6137733,
    lng: -73.7654471
  }, {
    lat: 40.613691800000005,
    lng: -73.7658548
  }, {
    lat: 40.6139199,
    lng: -73.7664771
  }, {
    lat: 40.6141968,
    lng: -73.7669063
  }, {
    lat: 40.6142456,
    lng: -73.7673569
  }, {
    lat: 40.6142131,
    lng: -73.7681079
  }, {
    lat: 40.6141968,
    lng: -73.7693739
  }, {
    lat: 40.613985,
    lng: -73.7711334
  }, {
    lat: 40.61403390000001,
    lng: -73.771863
  }, {
    lat: 40.6138873,
    lng: -73.7723565
  }, {
    lat: 40.61422939999999,
    lng: -73.7719274
  }, {
    lat: 40.6140502,
    lng: -73.7724853
  }, {
    lat: 40.61372440000001,
    lng: -73.7730002
  }, {
    lat: 40.613691800000005,
    lng: -73.7734294
  }, {
    lat: 40.61305660000001,
    lng: -73.774116
  }, {
    lat: 40.6120955,
    lng: -73.7743092
  }, {
    lat: 40.6114602,
    lng: -73.7740088
  }, {
    lat: 40.611313599999995,
    lng: -73.7737298
  }, {
    lat: 40.6113462,
    lng: -73.7727642
  }, {
    lat: 40.6115091,
    lng: -73.77285
  }, {
    lat: 40.6115742,
    lng: -73.7724209
  }, {
    lat: 40.61108560000001,
    lng: -73.7719917
  }, {
    lat: 40.610580600000006,
    lng: -73.7719703
  }, {
    lat: 40.61043399999999,
    lng: -73.7713051
  }, {
    lat: 40.6100593,
    lng: -73.7706184
  }, {
    lat: 40.61028739999999,
    lng: -73.7705541
  }, {
    lat: 40.60979869999999,
    lng: -73.7692022
  }, {
    lat: 40.6094077,
    lng: -73.7688804
  }, {
    lat: 40.6090493,
    lng: -73.7689447
  }, {
    lat: 40.6085932,
    lng: -73.7692881
  }, {
    lat: 40.608071900000006,
    lng: -73.7694383
  }, {
    lat: 40.6077624,
    lng: -73.7699533
  }, {
    lat: 40.6074529,
    lng: -73.7697816
  }, {
    lat: 40.6066547,
    lng: -73.7700391
  }, {
    lat: 40.60592160000001,
    lng: -73.7698889
  }, {
    lat: 40.6057424,
    lng: -73.7702107
  }, {
    lat: 40.605384,
    lng: -73.7700391
  }, {
    lat: 40.604993,
    lng: -73.7705112
  }, {
    lat: 40.6051722,
    lng: -73.771069
  }, {
    lat: 40.605041899999996,
    lng: -73.7712407
  }, {
    lat: 40.604879,
    lng: -73.7708545
  }, {
    lat: 40.6032173,
    lng: -73.7704897
  }, {
    lat: 40.6029403,
    lng: -73.770833
  }, {
    lat: 40.6025982,
    lng: -73.770597
  }, {
    lat: 40.6013926,
    lng: -73.7712193
  }, {
    lat: 40.6002359,
    lng: -73.7712407
  }, {
    lat: 40.5996005,
    lng: -73.7713909
  }, {
    lat: 40.599062800000006,
    lng: -73.7714124
  }, {
    lat: 40.59886730000001,
    lng: -73.7712193
  }, {
    lat: 40.599062800000006,
    lng: -73.7708974
  }, {
    lat: 40.5991443,
    lng: -73.7702537
  }, {
    lat: 40.5986881,
    lng: -73.770082
  }, {
    lat: 40.5986229,
    lng: -73.7696314
  }, {
    lat: 40.598737,
    lng: -73.7695026
  }, {
    lat: 40.59873699999999,
    lng: -73.7691808
  }, {
    lat: 40.5981016,
    lng: -73.7680864
  }, {
    lat: 40.5981016,
    lng: -73.7678719
  }, {
    lat: 40.59777569999999,
    lng: -73.7680435
  }, {
    lat: 40.596179,
    lng: -73.7677431
  }, {
    lat: 40.5967981,
    lng: -73.767271
  }, {
    lat: 40.5980201,
    lng: -73.7670565
  }, {
    lat: 40.59841109999999,
    lng: -73.7666059
  }, {
    lat: 40.5986718,
    lng: -73.766005
  }, {
    lat: 40.5994538,
    lng: -73.7665844
  }],
  center: {
    lat: 40.6052123,
    lng: -73.76691700000003
  }
}, {
  name: 'Edgemere',
  borough: 'Queens',
  color: 'B29189',
  coords: [{
    lat: 40.5878201,
    lng: -73.7885785
  }, {
    lat: 40.58809709999999,
    lng: -73.7873554
  }, {
    lat: 40.5881134,
    lng: -73.7859607
  }, {
    lat: 40.5889933,
    lng: -73.7822485
  }, {
    lat: 40.589303,
    lng: -73.7811327
  }, {
    lat: 40.5892867,
    lng: -73.7801886
  }, {
    lat: 40.58982439999999,
    lng: -73.7779355
  }, {
    lat: 40.58988960000001,
    lng: -73.776691
  }, {
    lat: 40.5903947,
    lng: -73.77353670000001
  }, {
    lat: 40.5908346,
    lng: -73.7713695
  }, {
    lat: 40.5907369,
    lng: -73.7710476
  }, {
    lat: 40.5909813,
    lng: -73.7686014
  }, {
    lat: 40.5908835,
    lng: -73.7678289
  }, {
    lat: 40.591209400000004,
    lng: -73.7656617
  }, {
    lat: 40.5913724,
    lng: -73.7653399
  }, {
    lat: 40.591519000000005,
    lng: -73.7637788
  }, {
    lat: 40.5945823,
    lng: -73.7644064
  }, {
    lat: 40.5947696,
    lng: -73.7627757
  }, {
    lat: 40.59782460000001,
    lng: -73.763355
  }, {
    lat: 40.5982889,
    lng: -73.7625289
  }, {
    lat: 40.5989569,
    lng: -73.7617779
  }, {
    lat: 40.5995434,
    lng: -73.7612736
  }, {
    lat: 40.6013111,
    lng: -73.7625718
  }, {
    lat: 40.5994538,
    lng: -73.7665844
  }, {
    lat: 40.5986718,
    lng: -73.766005
  }, {
    lat: 40.59841109999999,
    lng: -73.7666059
  }, {
    lat: 40.5980201,
    lng: -73.7670565
  }, {
    lat: 40.5967981,
    lng: -73.767271
  }, {
    lat: 40.596179,
    lng: -73.7677431
  }, {
    lat: 40.59777569999999,
    lng: -73.7680435
  }, {
    lat: 40.5978572,
    lng: -73.7686014
  }, {
    lat: 40.5980038,
    lng: -73.7690306
  }, {
    lat: 40.598264500000006,
    lng: -73.7696099
  }, {
    lat: 40.59811789999999,
    lng: -73.7699962
  }, {
    lat: 40.598068999999995,
    lng: -73.7705112
  }, {
    lat: 40.5982156,
    lng: -73.771348
  }, {
    lat: 40.5980201,
    lng: -73.7716913
  }, {
    lat: 40.5978083,
    lng: -73.7730432
  }, {
    lat: 40.5981342,
    lng: -73.77353670000001
  }, {
    lat: 40.5985903,
    lng: -73.7741375
  }, {
    lat: 40.5992257,
    lng: -73.7742877
  }, {
    lat: 40.5998937,
    lng: -73.774159
  }, {
    lat: 40.60080609999999,
    lng: -73.7747383
  }, {
    lat: 40.60147409999999,
    lng: -73.7747383
  }, {
    lat: 40.6017184,
    lng: -73.7749314
  }, {
    lat: 40.6017184,
    lng: -73.7755537
  }, {
    lat: 40.6014089,
    lng: -73.7760043
  }, {
    lat: 40.60092010000001,
    lng: -73.7764549
  }, {
    lat: 40.5990302,
    lng: -73.7776351
  }, {
    lat: 40.598818400000006,
    lng: -73.7774849
  }, {
    lat: 40.5983622,
    lng: -73.778193
  }, {
    lat: 40.5981504,
    lng: -73.7782788
  }, {
    lat: 40.5979386,
    lng: -73.7789011
  }, {
    lat: 40.5969611,
    lng: -73.7801027
  }, {
    lat: 40.596733,
    lng: -73.7801671
  }, {
    lat: 40.598183,
    lng: -73.781991
  }, {
    lat: 40.5986718,
    lng: -73.7821841
  }, {
    lat: 40.5990302,
    lng: -73.7821627
  }, {
    lat: 40.5991932,
    lng: -73.7815619
  }, {
    lat: 40.5996819,
    lng: -73.7813687
  }, {
    lat: 40.59991,
    lng: -73.7807894
  }, {
    lat: 40.6001055,
    lng: -73.7808108
  }, {
    lat: 40.600578,
    lng: -73.7804461
  }, {
    lat: 40.60067579999999,
    lng: -73.7800169
  }, {
    lat: 40.600447700000004,
    lng: -73.7797594
  }, {
    lat: 40.6004151,
    lng: -73.7792444
  }, {
    lat: 40.6002685,
    lng: -73.77847190000001
  }, {
    lat: 40.6004314,
    lng: -73.7781715
  }, {
    lat: 40.600692,
    lng: -73.7781715
  }, {
    lat: 40.6008713,
    lng: -73.77780680000001
  }, {
    lat: 40.6009201,
    lng: -73.7776136
  }, {
    lat: 40.60134370000001,
    lng: -73.7775707
  }, {
    lat: 40.6015066,
    lng: -73.7772059
  }, {
    lat: 40.6019465,
    lng: -73.7768626
  }, {
    lat: 40.601881399999996,
    lng: -73.7765622
  }, {
    lat: 40.602142,
    lng: -73.7764549
  }, {
    lat: 40.602142,
    lng: -73.7767339
  }, {
    lat: 40.6029892,
    lng: -73.7762403
  }, {
    lat: 40.6036083,
    lng: -73.7756824
  }, {
    lat: 40.6040644,
    lng: -73.7756181
  }, {
    lat: 40.6040481,
    lng: -73.7759829
  }, {
    lat: 40.60453690000001,
    lng: -73.776412
  }, {
    lat: 40.6050745,
    lng: -73.776648
  }, {
    lat: 40.6053677,
    lng: -73.7766266
  }, {
    lat: 40.60559580000001,
    lng: -73.7761116
  }, {
    lat: 40.6060356,
    lng: -73.7756181
  }, {
    lat: 40.6066384,
    lng: -73.7754893
  }, {
    lat: 40.60673609999999,
    lng: -73.7752748
  }, {
    lat: 40.606361400000004,
    lng: -73.7751675
  }, {
    lat: 40.605905299999996,
    lng: -73.7752748
  }, {
    lat: 40.6055469,
    lng: -73.7754893
  }, {
    lat: 40.6043902,
    lng: -73.7756181
  }, {
    lat: 40.6041947,
    lng: -73.7755108
  }, {
    lat: 40.6042436,
    lng: -73.7748885
  }, {
    lat: 40.604879,
    lng: -73.7745452
  }, {
    lat: 40.6056935,
    lng: -73.7746096
  }, {
    lat: 40.60623110000001,
    lng: -73.774395
  }, {
    lat: 40.6076158,
    lng: -73.7744594
  }, {
    lat: 40.6083489,
    lng: -73.7749743
  }, {
    lat: 40.6083163,
    lng: -73.7743306
  }, {
    lat: 40.6087724,
    lng: -73.7742019
  }, {
    lat: 40.6097172,
    lng: -73.7752962
  }, {
    lat: 40.60978240000001,
    lng: -73.77619740000002
  }, {
    lat: 40.609749799999996,
    lng: -73.7768841
  }, {
    lat: 40.60978240000001,
    lng: -73.7787294
  }, {
    lat: 40.608186,
    lng: -73.78057480000001
  }, {
    lat: 40.607795,
    lng: -73.7808108
  }, {
    lat: 40.6074855,
    lng: -73.781476
  }, {
    lat: 40.6065569,
    lng: -73.782227
  }, {
    lat: 40.60657319999999,
    lng: -73.7824845
  }, {
    lat: 40.606394,
    lng: -73.7824845
  }, {
    lat: 40.6061985,
    lng: -73.7830853
  }, {
    lat: 40.6053514,
    lng: -73.7840295
  }, {
    lat: 40.6051722,
    lng: -73.7840509
  }, {
    lat: 40.6051396,
    lng: -73.7843513
  }, {
    lat: 40.6049604,
    lng: -73.7844157
  }, {
    lat: 40.604569399999995,
    lng: -73.7843084
  }, {
    lat: 40.6042273,
    lng: -73.7839222
  }, {
    lat: 40.6038363,
    lng: -73.7840509
  }, {
    lat: 40.6039015,
    lng: -73.7834287
  }, {
    lat: 40.60364080000001,
    lng: -73.783257
  }, {
    lat: 40.6025819,
    lng: -73.7836647
  }, {
    lat: 40.6021909,
    lng: -73.7836432
  }, {
    lat: 40.6017184,
    lng: -73.7846947
  }, {
    lat: 40.60162069999999,
    lng: -73.78533840000001
  }, {
    lat: 40.60122969999999,
    lng: -73.7857461
  }, {
    lat: 40.6008224,
    lng: -73.7856817
  }, {
    lat: 40.60043139999999,
    lng: -73.7859607
  }, {
    lat: 40.59991,
    lng: -73.7870336
  }, {
    lat: 40.5995353,
    lng: -73.78711940000001
  }, {
    lat: 40.5989162,
    lng: -73.7880635
  }, {
    lat: 40.59849260000001,
    lng: -73.788321
  }, {
    lat: 40.598183,
    lng: -73.7892222
  }, {
    lat: 40.5971403,
    lng: -73.78939390000001
  }, {
    lat: 40.5954458,
    lng: -73.7892652
  }, {
    lat: 40.5878201,
    lng: -73.7885785
  }],
  center: {
    lat: 40.59880125000001,
    lng: -73.77533374999996
  }
}, {
  name: 'Arverne',
  borough: 'Queens',
  color: 'A7B5D7',
  coords: [{
    lat: 40.5855917,
    lng: -73.8003803
  }, {
    lat: 40.585881,
    lng: -73.7991571
  }, {
    lat: 40.5859461,
    lng: -73.7985778
  }, {
    lat: 40.58612540000001,
    lng: -73.7981915
  }, {
    lat: 40.5864187,
    lng: -73.7966681
  }, {
    lat: 40.5863535,
    lng: -73.7962389
  }, {
    lat: 40.5869565,
    lng: -73.7943506
  }, {
    lat: 40.5868913,
    lng: -73.7938142
  }, {
    lat: 40.5873801,
    lng: -73.7921834
  }, {
    lat: 40.5874779,
    lng: -73.7914538
  }, {
    lat: 40.587363800000006,
    lng: -73.7912393
  }, {
    lat: 40.5875431,
    lng: -73.790853
  }, {
    lat: 40.587689700000006,
    lng: -73.7888789
  }, {
    lat: 40.5878201,
    lng: -73.7885785
  }, {
    lat: 40.5952014,
    lng: -73.7892222
  }, {
    lat: 40.59507109999999,
    lng: -73.7894583
  }, {
    lat: 40.5948755,
    lng: -73.7894797
  }, {
    lat: 40.5947778,
    lng: -73.7897587
  }, {
    lat: 40.594566,
    lng: -73.7907028
  }, {
    lat: 40.594957,
    lng: -73.7911534
  }, {
    lat: 40.59573910000001,
    lng: -73.791132
  }, {
    lat: 40.5970262,
    lng: -73.7912607
  }, {
    lat: 40.598068999999995,
    lng: -73.7906599
  }, {
    lat: 40.5986392,
    lng: -73.7903595
  }, {
    lat: 40.59863920000001,
    lng: -73.7905955
  }, {
    lat: 40.5992583,
    lng: -73.7905097
  }, {
    lat: 40.5992909,
    lng: -73.7900805
  }, {
    lat: 40.5998449,
    lng: -73.7895441
  }, {
    lat: 40.60100159999999,
    lng: -73.7877202
  }, {
    lat: 40.6023375,
    lng: -73.7872267
  }, {
    lat: 40.6025819,
    lng: -73.7866259
  }, {
    lat: 40.60300550000001,
    lng: -73.7861538
  }, {
    lat: 40.60370600000001,
    lng: -73.7868834
  }, {
    lat: 40.603347600000006,
    lng: -73.7877417
  }, {
    lat: 40.6024679,
    lng: -73.7891579
  }, {
    lat: 40.6022398,
    lng: -73.7892866
  }, {
    lat: 40.6014415,
    lng: -73.7904453
  }, {
    lat: 40.60100159999999,
    lng: -73.7908959
  }, {
    lat: 40.6009364,
    lng: -73.7914324
  }, {
    lat: 40.5999426,
    lng: -73.7928057
  }, {
    lat: 40.5999752,
    lng: -73.7933421
  }, {
    lat: 40.5996656,
    lng: -73.793664
  }, {
    lat: 40.59948640000001,
    lng: -73.7948871
  }, {
    lat: 40.5992909,
    lng: -73.7990284
  }, {
    lat: 40.59912799999999,
    lng: -73.8012385
  }, {
    lat: 40.598851,
    lng: -73.8020325
  }, {
    lat: 40.5989162,
    lng: -73.8028908
  }, {
    lat: 40.5980527,
    lng: -73.8037276
  }, {
    lat: 40.5976942,
    lng: -73.8046503
  }, {
    lat: 40.5971892,
    lng: -73.8051438
  }, {
    lat: 40.5965049,
    lng: -73.8048005
  }, {
    lat: 40.5952014,
    lng: -73.8036418
  }, {
    lat: 40.595103599999995,
    lng: -73.8032126
  }, {
    lat: 40.5948918,
    lng: -73.8033843
  }, {
    lat: 40.5945823,
    lng: -73.8030624
  }, {
    lat: 40.5943867,
    lng: -73.8025689
  }, {
    lat: 40.5925781,
    lng: -73.8023758
  }, {
    lat: 40.5926107,
    lng: -73.8030624
  }, {
    lat: 40.5930995,
    lng: -73.8040495
  }, {
    lat: 40.5943053,
    lng: -73.8040495
  }, {
    lat: 40.594957,
    lng: -73.8046074
  }, {
    lat: 40.595478400000005,
    lng: -73.8059378
  }, {
    lat: 40.5953155,
    lng: -73.8070965
  }, {
    lat: 40.5942727,
    lng: -73.8079548
  }, {
    lat: 40.593849,
    lng: -73.8077831
  }, {
    lat: 40.5934906,
    lng: -73.8080406
  }, {
    lat: 40.5918612,
    lng: -73.8041782
  }, {
    lat: 40.5912746,
    lng: -73.804307
  }, {
    lat: 40.59231739999999,
    lng: -73.8068819
  }, {
    lat: 40.5880482,
    lng: -73.8064098
  }, {
    lat: 40.588309,
    lng: -73.8043499
  }, {
    lat: 40.5890911,
    lng: -73.8010454
  }, {
    lat: 40.5855917,
    lng: -73.8003803
  }],
  center: {
    lat: 40.594648850000006,
    lng: -73.7970972
  }
}, {
  name: 'Hammels',
  borough: 'Queens',
  color: '62AF44',
  coords: [{
    lat: 40.5879831,
    lng: -73.81915570000001
  }, {
    lat: 40.5876735,
    lng: -73.8190269
  }, {
    lat: 40.5874616,
    lng: -73.8187909
  }, {
    lat: 40.5872987,
    lng: -73.8183188
  }, {
    lat: 40.587412699999994,
    lng: -73.8178897
  }, {
    lat: 40.5832899,
    lng: -73.8153791
  }, {
    lat: 40.5827195,
    lng: -73.8174605
  }, {
    lat: 40.5823121,
    lng: -73.817246
  }, {
    lat: 40.5825403,
    lng: -73.8163233
  }, {
    lat: 40.5829314,
    lng: -73.8151431
  }, {
    lat: 40.5832899,
    lng: -73.81392
  }, {
    lat: 40.5836647,
    lng: -73.8123536
  }, {
    lat: 40.58382770000001,
    lng: -73.811388
  }, {
    lat: 40.58369729999999,
    lng: -73.8107657
  }, {
    lat: 40.5840232,
    lng: -73.809607
  }, {
    lat: 40.584104700000005,
    lng: -73.8083625
  }, {
    lat: 40.5845447,
    lng: -73.8067746
  }, {
    lat: 40.5845773,
    lng: -73.8056374
  }, {
    lat: 40.5848054,
    lng: -73.8054442
  }, {
    lat: 40.5850988,
    lng: -73.8040495
  }, {
    lat: 40.5850173,
    lng: -73.8033414
  }, {
    lat: 40.5853758,
    lng: -73.8014746
  }, {
    lat: 40.5852943,
    lng: -73.8009167
  }, {
    lat: 40.5855917,
    lng: -73.8003803
  }, {
    lat: 40.5890911,
    lng: -73.8010454
  }, {
    lat: 40.588309,
    lng: -73.8043499
  }, {
    lat: 40.5880482,
    lng: -73.8064098
  }, {
    lat: 40.59231739999999,
    lng: -73.8068819
  }, {
    lat: 40.592847000000006,
    lng: -73.8079977
  }, {
    lat: 40.59323799999999,
    lng: -73.8088024
  }, {
    lat: 40.59344169999999,
    lng: -73.809371
  }, {
    lat: 40.593629099999994,
    lng: -73.8095427
  }, {
    lat: 40.5935395,
    lng: -73.8097358
  }, {
    lat: 40.59274919999999,
    lng: -73.8095105
  }, {
    lat: 40.59241519999999,
    lng: -73.8096499
  }, {
    lat: 40.59241519999999,
    lng: -73.80976800000002
  }, {
    lat: 40.5930995,
    lng: -73.8099289
  }, {
    lat: 40.5930751,
    lng: -73.8100576
  }, {
    lat: 40.5922522,
    lng: -73.8099074
  }, {
    lat: 40.5921789,
    lng: -73.8101435
  }, {
    lat: 40.59226040000001,
    lng: -73.8101757
  }, {
    lat: 40.5920893,
    lng: -73.8109159
  }, {
    lat: 40.59191009999999,
    lng: -73.81090520000001
  }, {
    lat: 40.591853,
    lng: -73.8110983
  }, {
    lat: 40.5918042,
    lng: -73.8113558
  }, {
    lat: 40.5928877,
    lng: -73.8114738
  }, {
    lat: 40.5928225,
    lng: -73.8115489
  }, {
    lat: 40.5920975,
    lng: -73.8115168
  }, {
    lat: 40.5918938,
    lng: -73.81172060000002
  }, {
    lat: 40.5917553,
    lng: -73.8116026
  }, {
    lat: 40.5916086,
    lng: -73.8116777
  }, {
    lat: 40.5915272,
    lng: -73.8119245
  }, {
    lat: 40.5913479,
    lng: -73.8121927
  }, {
    lat: 40.59125019999999,
    lng: -73.8131583
  }, {
    lat: 40.5908835,
    lng: -73.8135231
  }, {
    lat: 40.5906228,
    lng: -73.8142312
  }, {
    lat: 40.5906717,
    lng: -73.8144779
  }, {
    lat: 40.59063909999999,
    lng: -73.8147461
  }, {
    lat: 40.59033769999999,
    lng: -73.8150465
  }, {
    lat: 40.5900607,
    lng: -73.8151968
  }, {
    lat: 40.58963700000001,
    lng: -73.8159585
  }, {
    lat: 40.58958,
    lng: -73.8163233
  }, {
    lat: 40.589303,
    lng: -73.8168168
  }, {
    lat: 40.5893763,
    lng: -73.8171494
  }, {
    lat: 40.5892867,
    lng: -73.8173854
  }, {
    lat: 40.5893681,
    lng: -73.8174498
  }, {
    lat: 40.5892867,
    lng: -73.8176322
  }, {
    lat: 40.5889445,
    lng: -73.8174498
  }, {
    lat: 40.5884475,
    lng: -73.8183296
  }, {
    lat: 40.5882682,
    lng: -73.8188982
  }, {
    lat: 40.5879831,
    lng: -73.81915570000001
  }],
  center: {
    lat: 40.5879706,
    lng: -73.80976800000002
  }
}, {
  name: 'Seaside',
  borough: 'Queens',
  color: 'F8971B',
  coords: [{
    lat: 40.5875431,
    lng: -73.822825
  }, {
    lat: 40.5875431,
    lng: -73.8232327
  }, {
    lat: 40.5861906,
    lng: -73.8279104
  }, {
    lat: 40.5857669,
    lng: -73.8282752
  }, {
    lat: 40.5848869,
    lng: -73.8285327
  }, {
    lat: 40.583958,
    lng: -73.8318801
  }, {
    lat: 40.58232840000001,
    lng: -73.8310862
  }, {
    lat: 40.582230599999995,
    lng: -73.8314724
  }, {
    lat: 40.57890609999999,
    lng: -73.8296914
  }, {
    lat: 40.5793298,
    lng: -73.8285542
  }, {
    lat: 40.5793624,
    lng: -73.8278461
  }, {
    lat: 40.580160899999996,
    lng: -73.8255715
  }, {
    lat: 40.581758,
    lng: -73.8195848
  }, {
    lat: 40.5818558,
    lng: -73.8190484
  }, {
    lat: 40.5823121,
    lng: -73.817246
  }, {
    lat: 40.5827195,
    lng: -73.8174605
  }, {
    lat: 40.5832899,
    lng: -73.8153791
  }, {
    lat: 40.587412699999994,
    lng: -73.8178897
  }, {
    lat: 40.5872987,
    lng: -73.8183188
  }, {
    lat: 40.5874616,
    lng: -73.8187909
  }, {
    lat: 40.5876735,
    lng: -73.8190269
  }, {
    lat: 40.5879831,
    lng: -73.81915570000001
  }, {
    lat: 40.58677720000001,
    lng: -73.82143020000001
  }, {
    lat: 40.5875431,
    lng: -73.822825
  }],
  center: {
    lat: 40.58344459999999,
    lng: -73.8236296
  }
}, {
  name: 'Belle Harbor',
  borough: 'Queens',
  color: '0BA9CC',
  coords: [{
    lat: 40.582198,
    lng: -73.8485312
  }, {
    lat: 40.5821003,
    lng: -73.8505912
  }, {
    lat: 40.581383200000005,
    lng: -73.8528228
  }, {
    lat: 40.5773415,
    lng: -73.8606334
  }, {
    lat: 40.5694692,
    lng: -73.8561058
  }, {
    lat: 40.5696974,
    lng: -73.8553977
  }, {
    lat: 40.5701049,
    lng: -73.8548613
  }, {
    lat: 40.5719956,
    lng: -73.8497114
  }, {
    lat: 40.5742775,
    lng: -73.8440037
  }, {
    lat: 40.582198,
    lng: -73.8485312
  }],
  center: {
    lat: 40.575833599999996,
    lng: -73.85231855
  }
}, {
  name: 'Rockaway Park',
  borough: 'Queens',
  color: '777777',
  coords: [{
    lat: 40.5815951,
    lng: -73.8451838
  }, {
    lat: 40.582198,
    lng: -73.8485312
  }, {
    lat: 40.5742775,
    lng: -73.8440037
  }, {
    lat: 40.577097,
    lng: -73.8361716
  }, {
    lat: 40.5782705,
    lng: -73.8325453
  }, {
    lat: 40.57890609999999,
    lng: -73.8296914
  }, {
    lat: 40.582230599999995,
    lng: -73.8314724
  }, {
    lat: 40.58232840000001,
    lng: -73.8310862
  }, {
    lat: 40.583958,
    lng: -73.8318801
  }, {
    lat: 40.5828988,
    lng: -73.8358283
  }, {
    lat: 40.5827195,
    lng: -73.8386178
  }, {
    lat: 40.5825077,
    lng: -73.8389826
  }, {
    lat: 40.5818395,
    lng: -73.839283
  }, {
    lat: 40.5815951,
    lng: -73.8451838
  }],
  center: {
    lat: 40.57911775,
    lng: -73.83911130000001
  }
}, {
  name: 'Neponsit',
  borough: 'Queens',
  color: 'D698AD',
  coords: [{
    lat: 40.5673666,
    lng: -73.8624787
  }, {
    lat: 40.5676926,
    lng: -73.860805
  }, {
    lat: 40.5694692,
    lng: -73.8561058
  }, {
    lat: 40.5773415,
    lng: -73.8606334
  }, {
    lat: 40.5755487,
    lng: -73.8639379
  }, {
    lat: 40.5744567,
    lng: -73.86331560000002
  }, {
    lat: 40.57387,
    lng: -73.8635731
  }, {
    lat: 40.5733647,
    lng: -73.8653755
  }, {
    lat: 40.5731692,
    lng: -73.86526820000002
  }, {
    lat: 40.5727128,
    lng: -73.8666201
  }, {
    lat: 40.5671872,
    lng: -73.8634443
  }, {
    lat: 40.5671872,
    lng: -73.8628864
  }, {
    lat: 40.5673666,
    lng: -73.8624787
  }],
  center: {
    lat: 40.57226435,
    lng: -73.86136295
  }
}, {
  name: 'Roxbury',
  borough: 'Queens',
  color: '009D57',
  coords: [{
    lat: 40.5675948,
    lng: -73.8827133
  }, {
    lat: 40.5683609,
    lng: -73.88312100000002
  }, {
    lat: 40.5683446,
    lng: -73.8834858
  }, {
    lat: 40.5684994,
    lng: -73.8836038
  }, {
    lat: 40.56846680000001,
    lng: -73.8837755
  }, {
    lat: 40.568564599999995,
    lng: -73.8838398
  }, {
    lat: 40.568523899999995,
    lng: -73.8839364
  }, {
    lat: 40.568173400000006,
    lng: -73.8837326
  }, {
    lat: 40.5679534,
    lng: -73.8844621
  }, {
    lat: 40.5685157,
    lng: -73.8848913
  }, {
    lat: 40.568369,
    lng: -73.8868546
  }, {
    lat: 40.567407300000006,
    lng: -73.8861787
  }, {
    lat: 40.567301400000005,
    lng: -73.8866615
  }, {
    lat: 40.5674725,
    lng: -73.8866937
  }, {
    lat: 40.567439900000004,
    lng: -73.887037
  }, {
    lat: 40.5673421,
    lng: -73.8870907
  }, {
    lat: 40.5673584,
    lng: -73.88856050000001
  }, {
    lat: 40.56757850000001,
    lng: -73.8899338
  }, {
    lat: 40.5677089,
    lng: -73.8910925
  }, {
    lat: 40.5679208,
    lng: -73.8920045
  }, {
    lat: 40.5681082,
    lng: -73.8924766
  }, {
    lat: 40.5680675,
    lng: -73.8928628
  }, {
    lat: 40.56721989999999,
    lng: -73.8944829
  }, {
    lat: 40.5664374,
    lng: -73.89510510000001
  }, {
    lat: 40.5652801,
    lng: -73.8948691
  }, {
    lat: 40.5642776,
    lng: -73.8945258
  }, {
    lat: 40.5675948,
    lng: -73.8827133
  }],
  center: {
    lat: 40.5664211,
    lng: -73.8889092
  }
}, {
  name: 'Breezy Point',
  borough: 'Queens',
  color: '3F5BA9',
  coords: [{
    lat: 40.5650682,
    lng: -73.9113808
  }, {
    lat: 40.5630143,
    lng: -73.916316
  }, {
    lat: 40.56213400000001,
    lng: -73.9185476
  }, {
    lat: 40.5620036,
    lng: -73.9199638
  }, {
    lat: 40.5614493,
    lng: -73.9210367
  }, {
    lat: 40.56171020000001,
    lng: -73.9237833
  }, {
    lat: 40.56151450000001,
    lng: -73.9246416
  }, {
    lat: 40.5614819,
    lng: -73.9253712
  }, {
    lat: 40.5610907,
    lng: -73.925972
  }, {
    lat: 40.5610907,
    lng: -73.92657280000002
  }, {
    lat: 40.5587432,
    lng: -73.9277315
  }, {
    lat: 40.557145600000005,
    lng: -73.9318943
  }, {
    lat: 40.5553197,
    lng: -73.93133640000002
  }, {
    lat: 40.5547654,
    lng: -73.9335251
  }, {
    lat: 40.5539176,
    lng: -73.9338684
  }, {
    lat: 40.5521568,
    lng: -73.9329243
  }, {
    lat: 40.5518959,
    lng: -73.9338684
  }, {
    lat: 40.5497764,
    lng: -73.932538
  }, {
    lat: 40.5511133,
    lng: -73.9276457
  }, {
    lat: 40.55254810000001,
    lng: -73.9284611
  }, {
    lat: 40.55499360000001,
    lng: -73.921423
  }, {
    lat: 40.5558088,
    lng: -73.921423
  }, {
    lat: 40.5562,
    lng: -73.9094496
  }, {
    lat: 40.5602756,
    lng: -73.9094496
  }, {
    lat: 40.5602756,
    lng: -73.90872
  }, {
    lat: 40.5613189,
    lng: -73.90872
  }, {
    lat: 40.5650682,
    lng: -73.9113808
  }],
  center: {
    lat: 40.5574223,
    lng: -73.92129420000003
  }
}]);
"use strict";

window.neighborhoods = window.neighborhoods || [];
neighborhoods = neighborhoods.concat([{
  name: 'Port Morris',
  borough: 'Bronx',
  coords: [{
    lat: 40.8094243,
    lng: -73.9029694
  }, {
    lat: 40.8071424,
    lng: -73.9062524
  }, {
    lat: 40.803634100000004,
    lng: -73.9141917
  }, {
    lat: 40.8034392,
    lng: -73.9152646
  }, {
    lat: 40.8037803,
    lng: -73.9170027
  }, {
    lat: 40.80464930000001,
    lng: -73.9191055
  }, {
    lat: 40.807978799999994,
    lng: -73.9272809
  }, {
    lat: 40.8087259,
    lng: -73.9284611
  }, {
    lat: 40.810683,
    lng: -73.9309287
  }, {
    lat: 40.8112514,
    lng: -73.9313471
  }, {
    lat: 40.8118523,
    lng: -73.9315724
  }, {
    lat: 40.8116574,
    lng: -73.93262390000001
  }, {
    lat: 40.8109185,
    lng: -73.9325273
  }, {
    lat: 40.8107723,
    lng: -73.9327312
  }, {
    lat: 40.81063420000001,
    lng: -73.93262390000001
  }, {
    lat: 40.810415,
    lng: -73.9329135
  }, {
    lat: 40.81009829999999,
    lng: -73.93279550000001
  }, {
    lat: 40.810009,
    lng: -73.9324629
  }, {
    lat: 40.810057699999994,
    lng: -73.932302
  }, {
    lat: 40.8099602,
    lng: -73.9321947
  }, {
    lat: 40.80968409999999,
    lng: -73.932538
  }, {
    lat: 40.80926190000001,
    lng: -73.9325273
  }, {
    lat: 40.8090183,
    lng: -73.9323449
  }, {
    lat: 40.808855900000005,
    lng: -73.9324415
  }, {
    lat: 40.8078408,
    lng: -73.9316368
  }, {
    lat: 40.8076702,
    lng: -73.9315939
  }, {
    lat: 40.8075322,
    lng: -73.9314544
  }, {
    lat: 40.8074835,
    lng: -73.9313042
  }, {
    lat: 40.8068988,
    lng: -73.9307463
  }, {
    lat: 40.806647,
    lng: -73.9304674
  }, {
    lat: 40.8064927,
    lng: -73.9305747
  }, {
    lat: 40.80409699999999,
    lng: -73.9287078
  }, {
    lat: 40.8042676,
    lng: -73.9283109
  }, {
    lat: 40.8040645,
    lng: -73.9281714
  }, {
    lat: 40.8038777,
    lng: -73.92778520000002
  }, {
    lat: 40.803999600000004,
    lng: -73.9276564
  }, {
    lat: 40.8035285,
    lng: -73.9272809
  }, {
    lat: 40.8032849,
    lng: -73.9274418
  }, {
    lat: 40.8032037,
    lng: -73.9272916
  }, {
    lat: 40.8027164,
    lng: -73.9276242
  }, {
    lat: 40.802489,
    lng: -73.9270878
  }, {
    lat: 40.802407800000005,
    lng: -73.9266694
  }, {
    lat: 40.8024971,
    lng: -73.9259183
  }, {
    lat: 40.80252149999999,
    lng: -73.9234507
  }, {
    lat: 40.80241589999999,
    lng: -73.9229357
  }, {
    lat: 40.8018961,
    lng: -73.92202380000002
  }, {
    lat: 40.80137640000001,
    lng: -73.9213908
  }, {
    lat: 40.8009784,
    lng: -73.9211333
  }, {
    lat: 40.8000038,
    lng: -73.9205861
  }, {
    lat: 40.7997358,
    lng: -73.9203393
  }, {
    lat: 40.799281,
    lng: -73.9196205
  }, {
    lat: 40.7985581,
    lng: -73.9180005
  }, {
    lat: 40.7978028,
    lng: -73.9160049
  }, {
    lat: 40.7969662,
    lng: -73.9142561
  }, {
    lat: 40.7968038,
    lng: -73.9136982
  }, {
    lat: 40.796706300000004,
    lng: -73.9116168
  }, {
    lat: 40.7969419,
    lng: -73.9110053
  }, {
    lat: 40.7976485,
    lng: -73.9100611
  }, {
    lat: 40.7979165,
    lng: -73.9099109
  }, {
    lat: 40.7978434,
    lng: -73.9096963
  }, {
    lat: 40.7988587,
    lng: -73.908366
  }, {
    lat: 40.799126699999995,
    lng: -73.9082158
  }, {
    lat: 40.7992972,
    lng: -73.9084733
  }, {
    lat: 40.799410900000005,
    lng: -73.9083445
  }, {
    lat: 40.7992079,
    lng: -73.9079368
  }, {
    lat: 40.799281,
    lng: -73.9079154
  }, {
    lat: 40.7994191,
    lng: -73.9080334
  }, {
    lat: 40.7995165,
    lng: -73.9078939
  }, {
    lat: 40.7996059,
    lng: -73.9080334
  }, {
    lat: 40.7999713,
    lng: -73.9074647
  }, {
    lat: 40.8007997,
    lng: -73.9066708
  }, {
    lat: 40.8008647,
    lng: -73.9067781
  }, {
    lat: 40.80153070000001,
    lng: -73.9060807
  }, {
    lat: 40.8015632,
    lng: -73.90595200000001
  }, {
    lat: 40.80252149999999,
    lng: -73.9050615
  }, {
    lat: 40.803155,
    lng: -73.9045143
  }, {
    lat: 40.8039021,
    lng: -73.9034629
  }, {
    lat: 40.8038128,
    lng: -73.9033234
  }, {
    lat: 40.8039184,
    lng: -73.9031303
  }, {
    lat: 40.803829,
    lng: -73.9030015
  }, {
    lat: 40.80389400000001,
    lng: -73.9028943
  }, {
    lat: 40.8040239,
    lng: -73.9029908
  }, {
    lat: 40.8044706,
    lng: -73.9024973
  }, {
    lat: 40.80439750000001,
    lng: -73.9024007
  }, {
    lat: 40.8045437,
    lng: -73.9022183
  }, {
    lat: 40.8046168,
    lng: -73.902272
  }, {
    lat: 40.80494160000001,
    lng: -73.902154
  }, {
    lat: 40.8094243,
    lng: -73.9029694
  }],
  color: '93d7e8',
  center: {
    lat: 40.804279300000005,
    lng: -73.91753374999996
  }
}, {
  name: 'Mott Haven',
  borough: 'Bronx',
  coords: [{
    lat: 40.8094243,
    lng: -73.9029694
  }, {
    lat: 40.811292,
    lng: -73.9033341
  }, {
    lat: 40.811495,
    lng: -73.9034307
  }, {
    lat: 40.81206339999999,
    lng: -73.9040637
  }, {
    lat: 40.81229080000001,
    lng: -73.9044499
  }, {
    lat: 40.8136144,
    lng: -73.9109194
  }, {
    lat: 40.8149298,
    lng: -73.9149106
  }, {
    lat: 40.816066500000005,
    lng: -73.9176357
  }, {
    lat: 40.819273800000005,
    lng: -73.9299631
  }, {
    lat: 40.8195255,
    lng: -73.9323449
  }, {
    lat: 40.81811269999999,
    lng: -73.9323127
  }, {
    lat: 40.8180558,
    lng: -73.9320982
  }, {
    lat: 40.8179097,
    lng: -73.9320767
  }, {
    lat: 40.8173657,
    lng: -73.9322484
  }, {
    lat: 40.8173413,
    lng: -73.9321411
  }, {
    lat: 40.8169191,
    lng: -73.9321411
  }, {
    lat: 40.816708000000006,
    lng: -73.9322591
  }, {
    lat: 40.8149704,
    lng: -73.9322805
  }, {
    lat: 40.8149704,
    lng: -73.9316475
  }, {
    lat: 40.8146943,
    lng: -73.9317119
  }, {
    lat: 40.8147999,
    lng: -73.9318728
  }, {
    lat: 40.8146943,
    lng: -73.9319694
  }, {
    lat: 40.8146943,
    lng: -73.9322484
  }, {
    lat: 40.8136144,
    lng: -73.9323771
  }, {
    lat: 40.81346009999999,
    lng: -73.932023
  }, {
    lat: 40.813322,
    lng: -73.9321089
  }, {
    lat: 40.8134276,
    lng: -73.9323127
  }, {
    lat: 40.8117467,
    lng: -73.9325058
  }, {
    lat: 40.8116574,
    lng: -73.93262390000001
  }, {
    lat: 40.8109185,
    lng: -73.9325273
  }, {
    lat: 40.8107723,
    lng: -73.9327312
  }, {
    lat: 40.81063420000001,
    lng: -73.93262390000001
  }, {
    lat: 40.810415,
    lng: -73.9329135
  }, {
    lat: 40.81009829999999,
    lng: -73.93279550000001
  }, {
    lat: 40.810009,
    lng: -73.9324629
  }, {
    lat: 40.810057699999994,
    lng: -73.932302
  }, {
    lat: 40.8099602,
    lng: -73.9321947
  }, {
    lat: 40.80968409999999,
    lng: -73.932538
  }, {
    lat: 40.80926190000001,
    lng: -73.9325273
  }, {
    lat: 40.8090183,
    lng: -73.9323449
  }, {
    lat: 40.808855900000005,
    lng: -73.9324415
  }, {
    lat: 40.8078408,
    lng: -73.9316368
  }, {
    lat: 40.8076702,
    lng: -73.9315939
  }, {
    lat: 40.8075322,
    lng: -73.9314544
  }, {
    lat: 40.8074835,
    lng: -73.9313042
  }, {
    lat: 40.806647,
    lng: -73.9304674
  }, {
    lat: 40.8064927,
    lng: -73.9305747
  }, {
    lat: 40.80409699999999,
    lng: -73.9287078
  }, {
    lat: 40.8042676,
    lng: -73.9283109
  }, {
    lat: 40.8040645,
    lng: -73.9281714
  }, {
    lat: 40.8038777,
    lng: -73.92778520000002
  }, {
    lat: 40.803999600000004,
    lng: -73.9276564
  }, {
    lat: 40.8035285,
    lng: -73.9272809
  }, {
    lat: 40.8032849,
    lng: -73.9274418
  }, {
    lat: 40.8032037,
    lng: -73.9272916
  }, {
    lat: 40.8027164,
    lng: -73.9276242
  }, {
    lat: 40.802489,
    lng: -73.9270878
  }, {
    lat: 40.802407800000005,
    lng: -73.9266694
  }, {
    lat: 40.8024971,
    lng: -73.9259183
  }, {
    lat: 40.80252149999999,
    lng: -73.9234507
  }, {
    lat: 40.80241589999999,
    lng: -73.9229357
  }, {
    lat: 40.8018961,
    lng: -73.92202380000002
  }, {
    lat: 40.80137640000001,
    lng: -73.9213908
  }, {
    lat: 40.8000038,
    lng: -73.9205861
  }, {
    lat: 40.7997358,
    lng: -73.9203393
  }, {
    lat: 40.799281,
    lng: -73.9196205
  }, {
    lat: 40.7985175,
    lng: -73.9179146
  }, {
    lat: 40.7978028,
    lng: -73.9160049
  }, {
    lat: 40.7969662,
    lng: -73.9142561
  }, {
    lat: 40.7968038,
    lng: -73.9136982
  }, {
    lat: 40.796706300000004,
    lng: -73.9116168
  }, {
    lat: 40.7969419,
    lng: -73.9110053
  }, {
    lat: 40.7976485,
    lng: -73.9100611
  }, {
    lat: 40.7979165,
    lng: -73.9099109
  }, {
    lat: 40.7978434,
    lng: -73.9096963
  }, {
    lat: 40.7988587,
    lng: -73.908366
  }, {
    lat: 40.799126699999995,
    lng: -73.9082158
  }, {
    lat: 40.7992972,
    lng: -73.9084733
  }, {
    lat: 40.799410900000005,
    lng: -73.9083445
  }, {
    lat: 40.7992079,
    lng: -73.9079368
  }, {
    lat: 40.799281,
    lng: -73.9079154
  }, {
    lat: 40.7994191,
    lng: -73.9080334
  }, {
    lat: 40.7995165,
    lng: -73.9078939
  }, {
    lat: 40.7996059,
    lng: -73.9080334
  }, {
    lat: 40.7999713,
    lng: -73.9074647
  }, {
    lat: 40.8007997,
    lng: -73.9066708
  }, {
    lat: 40.8008647,
    lng: -73.9067781
  }, {
    lat: 40.80153070000001,
    lng: -73.9060807
  }, {
    lat: 40.8015632,
    lng: -73.90595200000001
  }, {
    lat: 40.803155,
    lng: -73.9045143
  }, {
    lat: 40.8039021,
    lng: -73.9034629
  }, {
    lat: 40.8038128,
    lng: -73.9033234
  }, {
    lat: 40.8039184,
    lng: -73.9031303
  }, {
    lat: 40.803829,
    lng: -73.9030015
  }, {
    lat: 40.80389400000001,
    lng: -73.9028943
  }, {
    lat: 40.8040239,
    lng: -73.9029908
  }, {
    lat: 40.8044706,
    lng: -73.9024973
  }, {
    lat: 40.80439750000001,
    lng: -73.9024007
  }, {
    lat: 40.8045437,
    lng: -73.9022183
  }, {
    lat: 40.8046168,
    lng: -73.902272
  }, {
    lat: 40.80494160000001,
    lng: -73.902154
  }, {
    lat: 40.8094243,
    lng: -73.9029694
  }],
  color: 'EE9C96',
  center: {
    lat: 40.808115900000004,
    lng: -73.91753374999996
  }
}, {
  name: 'Melrose',
  borough: 'Bronx',
  coords: [{
    lat: 40.81229080000001,
    lng: -73.9044499
  }, {
    lat: 40.820467300000004,
    lng: -73.90125270000001
  }, {
    lat: 40.8225295,
    lng: -73.9098573
  }, {
    lat: 40.8232277,
    lng: -73.9104366
  }, {
    lat: 40.8248677,
    lng: -73.9160371
  }, {
    lat: 40.82213980000001,
    lng: -73.9202857
  }, {
    lat: 40.8217014,
    lng: -73.9208007
  }, {
    lat: 40.8203536,
    lng: -73.9228392
  }, {
    lat: 40.81955790000001,
    lng: -73.9237189
  }, {
    lat: 40.8180152,
    lng: -73.9251995
  }, {
    lat: 40.816066500000005,
    lng: -73.9176357
  }, {
    lat: 40.8149298,
    lng: -73.9149106
  }, {
    lat: 40.8136144,
    lng: -73.9109194
  }, {
    lat: 40.81229080000001,
    lng: -73.9044499
  }],
  color: '000000',
  center: {
    lat: 40.81857925,
    lng: -73.91322609999997
  }
}, {
  name: 'Highbridge',
  borough: 'Bronx',
  coords: [{
    lat: 40.8281638,
    lng: -73.933053
  }, {
    lat: 40.8284398,
    lng: -73.9304566
  }, {
    lat: 40.8291218,
    lng: -73.9288473
  }, {
    lat: 40.8299173,
    lng: -73.9278173
  }, {
    lat: 40.8325313,
    lng: -73.9254355
  }, {
    lat: 40.8327748,
    lng: -73.9253068
  }, {
    lat: 40.8349665,
    lng: -73.9240623
  }, {
    lat: 40.83839199999999,
    lng: -73.9189768
  }, {
    lat: 40.845177400000004,
    lng: -73.9141059
  }, {
    lat: 40.8451612,
    lng: -73.916316
  }, {
    lat: 40.8447067,
    lng: -73.9240408
  }, {
    lat: 40.8448203,
    lng: -73.9256716
  }, {
    lat: 40.8453885,
    lng: -73.92803190000001
  }, {
    lat: 40.8447229,
    lng: -73.9285898
  }, {
    lat: 40.8432458,
    lng: -73.9291906
  }, {
    lat: 40.8427425,
    lng: -73.9292336
  }, {
    lat: 40.8423692,
    lng: -73.9296842
  }, {
    lat: 40.8420283,
    lng: -73.9296412
  }, {
    lat: 40.8405186,
    lng: -73.930521
  }, {
    lat: 40.840177700000005,
    lng: -73.9304352
  }, {
    lat: 40.8364439,
    lng: -73.9327741
  }, {
    lat: 40.8355835,
    lng: -73.933053
  }, {
    lat: 40.8338463,
    lng: -73.9334607
  }, {
    lat: 40.8333106,
    lng: -73.93343930000002
  }, {
    lat: 40.8326449,
    lng: -73.9336538
  }, {
    lat: 40.8305018,
    lng: -73.933332
  }, {
    lat: 40.8281638,
    lng: -73.933053
  }],
  color: '3F5BA9',
  center: {
    lat: 40.83677615,
    lng: -73.92387984999999
  }
}, {
  name: 'Hunts Point',
  borough: 'Bronx',
  coords: [{
    lat: 40.8133221,
    lng: -73.8717486
  }, {
    lat: 40.8140528,
    lng: -73.8729502
  }, {
    lat: 40.81432889999999,
    lng: -73.8740875
  }, {
    lat: 40.8151085,
    lng: -73.8757183
  }, {
    lat: 40.8153358,
    lng: -73.8767268
  }, {
    lat: 40.81561190000001,
    lng: -73.8769628
  }, {
    lat: 40.816180200000005,
    lng: -73.8789798
  }, {
    lat: 40.8166674,
    lng: -73.8797738
  }, {
    lat: 40.816781,
    lng: -73.8796021
  }, {
    lat: 40.819184400000005,
    lng: -73.8827349
  }, {
    lat: 40.8195254,
    lng: -73.8830139
  }, {
    lat: 40.8216525,
    lng: -73.8838722
  }, {
    lat: 40.82188,
    lng: -73.8843228
  }, {
    lat: 40.8227893,
    lng: -73.8846232
  }, {
    lat: 40.8224808,
    lng: -73.8870265
  }, {
    lat: 40.8202885,
    lng: -73.89013780000002
  }, {
    lat: 40.81376060000001,
    lng: -73.8968112
  }, {
    lat: 40.80944050000001,
    lng: -73.9029481
  }, {
    lat: 40.80495779999999,
    lng: -73.9021327
  }, {
    lat: 40.8047467,
    lng: -73.9019395
  }, {
    lat: 40.8049253,
    lng: -73.900695
  }, {
    lat: 40.8054612,
    lng: -73.8983347
  }, {
    lat: 40.8057048,
    lng: -73.8980557
  }, {
    lat: 40.8062083,
    lng: -73.8983132
  }, {
    lat: 40.806452,
    lng: -73.8982703
  }, {
    lat: 40.8065819,
    lng: -73.8973047
  }, {
    lat: 40.8064357,
    lng: -73.897133
  }, {
    lat: 40.80625710000001,
    lng: -73.8973691
  }, {
    lat: 40.80606220000001,
    lng: -73.8971759
  }, {
    lat: 40.8062571,
    lng: -73.8961245
  }, {
    lat: 40.8064032,
    lng: -73.8961889
  }, {
    lat: 40.8064195,
    lng: -73.896382
  }, {
    lat: 40.8066794,
    lng: -73.896382
  }, {
    lat: 40.8068581,
    lng: -73.8950946
  }, {
    lat: 40.8061759,
    lng: -73.8949229
  }, {
    lat: 40.8062733,
    lng: -73.8938715
  }, {
    lat: 40.806403200000005,
    lng: -73.8934423
  }, {
    lat: 40.8062733,
    lng: -73.8930561
  }, {
    lat: 40.806403200000005,
    lng: -73.8919617
  }, {
    lat: 40.805916,
    lng: -73.8916184
  }, {
    lat: 40.805851,
    lng: -73.8906314
  }, {
    lat: 40.805737300000004,
    lng: -73.8899662
  }, {
    lat: 40.8058348,
    lng: -73.8897945
  }, {
    lat: 40.8058998,
    lng: -73.8892581
  }, {
    lat: 40.80538,
    lng: -73.88942970000001
  }, {
    lat: 40.804795399999996,
    lng: -73.8887002
  }, {
    lat: 40.8048116,
    lng: -73.8884427
  }, {
    lat: 40.8049253,
    lng: -73.8879277
  }, {
    lat: 40.8041458,
    lng: -73.8873483
  }, {
    lat: 40.80395080000001,
    lng: -73.8873483
  }, {
    lat: 40.8031387,
    lng: -73.8861896
  }, {
    lat: 40.8025214,
    lng: -73.8856746
  }, {
    lat: 40.8023915,
    lng: -73.885224
  }, {
    lat: 40.8021154,
    lng: -73.8850738
  }, {
    lat: 40.8019206,
    lng: -73.883958
  }, {
    lat: 40.8021479,
    lng: -73.8837434
  }, {
    lat: 40.8025539,
    lng: -73.8807179
  }, {
    lat: 40.8027651,
    lng: -73.88016
  }, {
    lat: 40.8027651,
    lng: -73.8792373
  }, {
    lat: 40.8026027,
    lng: -73.8781644
  }, {
    lat: 40.801871799999994,
    lng: -73.8779499
  }, {
    lat: 40.80133579999999,
    lng: -73.8781215
  }, {
    lat: 40.80107590000001,
    lng: -73.8758899
  }, {
    lat: 40.8013845,
    lng: -73.8757826
  }, {
    lat: 40.8012546,
    lng: -73.8747527
  }, {
    lat: 40.800962199999994,
    lng: -73.8746454
  }, {
    lat: 40.8008485,
    lng: -73.8735081
  }, {
    lat: 40.8012059,
    lng: -73.8727357
  }, {
    lat: 40.80102720000001,
    lng: -73.8725855
  }, {
    lat: 40.800816,
    lng: -73.8726284
  }, {
    lat: 40.8008485,
    lng: -73.8728429
  }, {
    lat: 40.80024730000001,
    lng: -73.8729932
  }, {
    lat: 40.8001824,
    lng: -73.8723065
  }, {
    lat: 40.8007836,
    lng: -73.8722207
  }, {
    lat: 40.800816,
    lng: -73.8724567
  }, {
    lat: 40.8012384,
    lng: -73.8723709
  }, {
    lat: 40.8015795,
    lng: -73.8717486
  }, {
    lat: 40.8017419,
    lng: -73.8715769
  }, {
    lat: 40.8018556,
    lng: -73.87179150000001
  }, {
    lat: 40.80268389999999,
    lng: -73.8711692
  }, {
    lat: 40.8026027,
    lng: -73.8709332
  }, {
    lat: 40.8036584,
    lng: -73.8701607
  }, {
    lat: 40.80580230000001,
    lng: -73.8686372
  }, {
    lat: 40.8067118,
    lng: -73.868251
  }, {
    lat: 40.8133221,
    lng: -73.8717486
  }],
  color: 'F8971B',
  center: {
    lat: 40.81148585,
    lng: -73.88559955
  }
}, {
  name: 'Longwood',
  borough: 'Bronx',
  coords: [{
    lat: 40.82676750000001,
    lng: -73.8879061
  }, {
    lat: 40.8268486,
    lng: -73.8928199
  }, {
    lat: 40.8260043,
    lng: -73.895824
  }, {
    lat: 40.826052999999995,
    lng: -73.89709
  }, {
    lat: 40.8264752,
    lng: -73.8987637
  }, {
    lat: 40.820467300000004,
    lng: -73.90125270000001
  }, {
    lat: 40.81229080000001,
    lng: -73.9044499
  }, {
    lat: 40.811495,
    lng: -73.9034307
  }, {
    lat: 40.8094243,
    lng: -73.9029694
  }, {
    lat: 40.8137605,
    lng: -73.8968114
  }, {
    lat: 40.8202887,
    lng: -73.89013780000002
  }, {
    lat: 40.822481,
    lng: -73.8870263
  }, {
    lat: 40.8227895,
    lng: -73.884623
  }, {
    lat: 40.8231303,
    lng: -73.8847947
  }, {
    lat: 40.8234064,
    lng: -73.8852882
  }, {
    lat: 40.8242832,
    lng: -73.885417
  }, {
    lat: 40.825744500000006,
    lng: -73.8849449
  }, {
    lat: 40.8261342,
    lng: -73.8850522
  }, {
    lat: 40.82658889999999,
    lng: -73.8849664
  }, {
    lat: 40.8274007,
    lng: -73.8849878
  }, {
    lat: 40.827871599999995,
    lng: -73.8847733
  }, {
    lat: 40.8280177,
    lng: -73.884387
  }, {
    lat: 40.82824500000001,
    lng: -73.8841939
  }, {
    lat: 40.8281476,
    lng: -73.8852668
  }, {
    lat: 40.82676750000001,
    lng: -73.8879061
  }],
  color: '62AF44',
  center: {
    lat: 40.81883465000001,
    lng: -73.89432190000002
  }
}, {
  name: 'Morrisania',
  borough: 'Bronx',
  coords: [{
    lat: 40.8446093,
    lng: -73.9027333
  }, {
    lat: 40.8397069,
    lng: -73.9053726
  }, {
    lat: 40.8385381,
    lng: -73.90595200000001
  }, {
    lat: 40.8366225,
    lng: -73.9071965
  }, {
    lat: 40.8277904,
    lng: -73.9121317
  }, {
    lat: 40.8248677,
    lng: -73.9160371
  }, {
    lat: 40.8232277,
    lng: -73.9104366
  }, {
    lat: 40.8225295,
    lng: -73.9098573
  }, {
    lat: 40.820467300000004,
    lng: -73.90125270000001
  }, {
    lat: 40.8264752,
    lng: -73.8987637
  }, {
    lat: 40.8311188,
    lng: -73.8968539
  }, {
    lat: 40.833570300000005,
    lng: -73.89631750000001
  }, {
    lat: 40.8349665,
    lng: -73.8956308
  }, {
    lat: 40.8343821,
    lng: -73.8969398
  }, {
    lat: 40.83529120000001,
    lng: -73.900609
  }, {
    lat: 40.8354536,
    lng: -73.9012313
  }, {
    lat: 40.843911299999995,
    lng: -73.8963389
  }, {
    lat: 40.8446093,
    lng: -73.9027333
  }],
  color: '0BA9CC',
  center: {
    lat: 40.8325383,
    lng: -73.90583394999999
  }
}, {
  name: 'Foxhurst',
  borough: 'Bronx',
  coords: [{
    lat: 40.8354373,
    lng: -73.8951373
  }, {
    lat: 40.8349665,
    lng: -73.8956308
  }, {
    lat: 40.833570300000005,
    lng: -73.89631750000001
  }, {
    lat: 40.8311188,
    lng: -73.8968539
  }, {
    lat: 40.8264752,
    lng: -73.8987637
  }, {
    lat: 40.826052999999995,
    lng: -73.89709
  }, {
    lat: 40.8260043,
    lng: -73.895824
  }, {
    lat: 40.8268486,
    lng: -73.8928199
  }, {
    lat: 40.82676750000001,
    lng: -73.8879061
  }, {
    lat: 40.8281476,
    lng: -73.8852668
  }, {
    lat: 40.82821249999999,
    lng: -73.8859105
  }, {
    lat: 40.8293328,
    lng: -73.88749840000001
  }, {
    lat: 40.8301609,
    lng: -73.8898373
  }, {
    lat: 40.8301122,
    lng: -73.891747
  }, {
    lat: 40.8304693,
    lng: -73.8917041
  }, {
    lat: 40.83068039999999,
    lng: -73.89194010000001
  }, {
    lat: 40.834723,
    lng: -73.8936353
  }, {
    lat: 40.8354373,
    lng: -73.8951373
  }],
  color: '000000',
  center: {
    lat: 40.8307208,
    lng: -73.89201524999999
  }
}, {
  name: 'Crotona Park',
  borough: 'Bronx',
  coords: [{
    lat: 40.8393011,
    lng: -73.8865972
  }, {
    lat: 40.838181,
    lng: -73.8872194
  }, {
    lat: 40.8385543,
    lng: -73.8883781
  }, {
    lat: 40.8379537,
    lng: -73.8887429
  }, {
    lat: 40.83680100000001,
    lng: -73.8908458
  }, {
    lat: 40.8367036,
    lng: -73.8914466
  }, {
    lat: 40.83659,
    lng: -73.8933134
  }, {
    lat: 40.8362004,
    lng: -73.8943219
  }, {
    lat: 40.8354373,
    lng: -73.8951373
  }, {
    lat: 40.8349665,
    lng: -73.8956308
  }, {
    lat: 40.833570300000005,
    lng: -73.89631750000001
  }, {
    lat: 40.8311188,
    lng: -73.8968539
  }, {
    lat: 40.8264752,
    lng: -73.8987637
  }, {
    lat: 40.826052999999995,
    lng: -73.89709
  }, {
    lat: 40.8260043,
    lng: -73.895824
  }, {
    lat: 40.8268486,
    lng: -73.8928199
  }, {
    lat: 40.82676750000001,
    lng: -73.8879061
  }, {
    lat: 40.8281476,
    lng: -73.8852668
  }, {
    lat: 40.82824500000001,
    lng: -73.8841939
  }, {
    lat: 40.8290893,
    lng: -73.8836789
  }, {
    lat: 40.8294465,
    lng: -73.8837218
  }, {
    lat: 40.8297874,
    lng: -73.8840866
  }, {
    lat: 40.830031000000005,
    lng: -73.8843656
  }, {
    lat: 40.8306967,
    lng: -73.8842368
  }, {
    lat: 40.8312,
    lng: -73.8839793
  }, {
    lat: 40.8324988,
    lng: -73.8836145
  }, {
    lat: 40.83258,
    lng: -73.8832283
  }, {
    lat: 40.8323689,
    lng: -73.882885
  }, {
    lat: 40.8325313,
    lng: -73.8824773
  }, {
    lat: 40.83370020000001,
    lng: -73.8814044
  }, {
    lat: 40.8349665,
    lng: -73.8813829
  }, {
    lat: 40.8358432,
    lng: -73.881104
  }, {
    lat: 40.83646009999999,
    lng: -73.8807821
  }, {
    lat: 40.83733680000001,
    lng: -73.8802242
  }, {
    lat: 40.8374829,
    lng: -73.8806105
  }, {
    lat: 40.839366,
    lng: -73.8840222
  }, {
    lat: 40.8391387,
    lng: -73.8845158
  }, {
    lat: 40.8400965,
    lng: -73.8861465
  }, {
    lat: 40.8393011,
    lng: -73.8865972
  }],
  color: 'FFDD5E',
  center: {
    lat: 40.833050400000005,
    lng: -73.88949394999997
  }
}, {
  name: 'Morris Heights',
  borough: 'Bronx',
  coords: [{
    lat: 40.8561496,
    lng: -73.9177966
  }, {
    lat: 40.857878,
    lng: -73.9170992
  }, {
    lat: 40.858584,
    lng: -73.9166701
  }, {
    lat: 40.8588193,
    lng: -73.9175498
  }, {
    lat: 40.858754399999995,
    lng: -73.9177108
  }, {
    lat: 40.8585109,
    lng: -73.9179897
  }, {
    lat: 40.8581052,
    lng: -73.9183009
  }, {
    lat: 40.8571964,
    lng: -73.9192986
  }, {
    lat: 40.8566283,
    lng: -73.9197278
  }, {
    lat: 40.8561658,
    lng: -73.920114
  }, {
    lat: 40.8558412,
    lng: -73.9203072
  }, {
    lat: 40.8557195,
    lng: -73.9205861
  }, {
    lat: 40.8554841,
    lng: -73.9205003
  }, {
    lat: 40.8552732,
    lng: -73.9203393
  }, {
    lat: 40.8552732,
    lng: -73.9205003
  }, {
    lat: 40.85543549999999,
    lng: -73.9208007
  }, {
    lat: 40.8545428,
    lng: -73.9215088
  }, {
    lat: 40.8543399,
    lng: -73.9213586
  }, {
    lat: 40.8541695,
    lng: -73.9215517
  }, {
    lat: 40.8542669,
    lng: -73.9217663
  }, {
    lat: 40.8512724,
    lng: -73.923955
  }, {
    lat: 40.85114250000001,
    lng: -73.9238691
  }, {
    lat: 40.8505014,
    lng: -73.924309
  }, {
    lat: 40.8501768,
    lng: -73.9244163
  }, {
    lat: 40.8495032,
    lng: -73.9248562
  }, {
    lat: 40.847531100000005,
    lng: -73.9265513
  }, {
    lat: 40.8472795,
    lng: -73.9266801
  }, {
    lat: 40.8461027,
    lng: -73.927592
  }, {
    lat: 40.84603769999999,
    lng: -73.927753
  }, {
    lat: 40.845891699999996,
    lng: -73.927753
  }, {
    lat: 40.8453885,
    lng: -73.92803190000001
  }, {
    lat: 40.8448203,
    lng: -73.9256716
  }, {
    lat: 40.8447067,
    lng: -73.9240408
  }, {
    lat: 40.8451612,
    lng: -73.916316
  }, {
    lat: 40.845177400000004,
    lng: -73.9141059
  }, {
    lat: 40.8509072,
    lng: -73.909986
  }, {
    lat: 40.8538936,
    lng: -73.9073253
  }, {
    lat: 40.8538936,
    lng: -73.9080977
  }, {
    lat: 40.85378,
    lng: -73.9085484
  }, {
    lat: 40.8539748,
    lng: -73.909471
  }, {
    lat: 40.8545103,
    lng: -73.9100289
  }, {
    lat: 40.8548349,
    lng: -73.9111662
  }, {
    lat: 40.8542994,
    lng: -73.9119172
  }, {
    lat: 40.8537638,
    lng: -73.91217470000001
  }, {
    lat: 40.8538287,
    lng: -73.9138699
  }, {
    lat: 40.8542507,
    lng: -73.915565
  }, {
    lat: 40.8550297,
    lng: -73.9169598
  }, {
    lat: 40.8552082,
    lng: -73.9167666
  }, {
    lat: 40.85558150000001,
    lng: -73.9167237
  }, {
    lat: 40.8558412,
    lng: -73.9169598
  }, {
    lat: 40.8561496,
    lng: -73.9177966
  }],
  color: 'DB4436',
  center: {
    lat: 40.851763000000005,
    lng: -73.91767860000004
  }
}, {
  name: 'University Heights',
  borough: 'Bronx',
  coords: [{
    lat: 40.8590221,
    lng: -73.9171529
  }, {
    lat: 40.8588193,
    lng: -73.9175498
  }, {
    lat: 40.858584,
    lng: -73.9166701
  }, {
    lat: 40.8561496,
    lng: -73.9177966
  }, {
    lat: 40.8558412,
    lng: -73.9169598
  }, {
    lat: 40.85558150000001,
    lng: -73.9167237
  }, {
    lat: 40.8552082,
    lng: -73.9167666
  }, {
    lat: 40.8550297,
    lng: -73.9169598
  }, {
    lat: 40.8542507,
    lng: -73.915565
  }, {
    lat: 40.8538287,
    lng: -73.9138699
  }, {
    lat: 40.8537638,
    lng: -73.91217470000001
  }, {
    lat: 40.8542994,
    lng: -73.9119172
  }, {
    lat: 40.8548349,
    lng: -73.9111662
  }, {
    lat: 40.8546077,
    lng: -73.9100504
  }, {
    lat: 40.8539748,
    lng: -73.909471
  }, {
    lat: 40.85378,
    lng: -73.9085484
  }, {
    lat: 40.8538936,
    lng: -73.9080977
  }, {
    lat: 40.8538936,
    lng: -73.9073253
  }, {
    lat: 40.856084599999996,
    lng: -73.90530820000001
  }, {
    lat: 40.8617161,
    lng: -73.901875
  }, {
    lat: 40.8628034,
    lng: -73.9010382
  }, {
    lat: 40.8628034,
    lng: -73.9035702
  }, {
    lat: 40.8627709,
    lng: -73.9048791
  }, {
    lat: 40.862852,
    lng: -73.9081407
  }, {
    lat: 40.8627709,
    lng: -73.9089346
  }, {
    lat: 40.8625924,
    lng: -73.909471
  }, {
    lat: 40.8622841,
    lng: -73.90990020000001
  }, {
    lat: 40.8622354,
    lng: -73.9105654
  }, {
    lat: 40.8623814,
    lng: -73.9109945
  }, {
    lat: 40.8630792,
    lng: -73.9127326
  }, {
    lat: 40.8634362,
    lng: -73.9133978
  }, {
    lat: 40.862284100000004,
    lng: -73.9144492
  }, {
    lat: 40.86182970000001,
    lng: -73.9147925
  }, {
    lat: 40.861634900000006,
    lng: -73.91505
  }, {
    lat: 40.8610507,
    lng: -73.9155436
  }, {
    lat: 40.86048269999999,
    lng: -73.9158225
  }, {
    lat: 40.8598336,
    lng: -73.9164877
  }, {
    lat: 40.8590221,
    lng: -73.9171529
  }],
  color: '000000',
  center: {
    lat: 40.8586,
    lng: -73.9094174
  }
}, {
  name: 'Mount Hope',
  borough: 'Bronx',
  coords: [{
    lat: 40.8524004,
    lng: -73.9036345
  }, {
    lat: 40.8538936,
    lng: -73.9073253
  }, {
    lat: 40.8509072,
    lng: -73.909986
  }, {
    lat: 40.845177400000004,
    lng: -73.9141059
  }, {
    lat: 40.8451774,
    lng: -73.9115524
  }, {
    lat: 40.8446093,
    lng: -73.9027333
  }, {
    lat: 40.84921919999999,
    lng: -73.9000726
  }, {
    lat: 40.8493652,
    lng: -73.9008665
  }, {
    lat: 40.8500145,
    lng: -73.9007378
  }, {
    lat: 40.850469000000004,
    lng: -73.9009094
  }, {
    lat: 40.8524004,
    lng: -73.9036345
  }],
  color: '62AF44',
  center: {
    lat: 40.84925145,
    lng: -73.90708925000001
  }
}, {
  name: 'Tremont',
  borough: 'Bronx',
  coords: [{
    lat: 40.8562794,
    lng: -73.895545
  }, {
    lat: 40.84921919999999,
    lng: -73.9000726
  }, {
    lat: 40.8446093,
    lng: -73.9027333
  }, {
    lat: 40.843911299999995,
    lng: -73.8963389
  }, {
    lat: 40.84345679999999,
    lng: -73.8928413
  }, {
    lat: 40.8489757,
    lng: -73.8880992
  }, {
    lat: 40.8511831,
    lng: -73.8852453
  }, {
    lat: 40.85179990000001,
    lng: -73.8846874
  }, {
    lat: 40.8532119,
    lng: -73.8895583
  }, {
    lat: 40.8536177,
    lng: -73.8895369
  }, {
    lat: 40.8544454,
    lng: -73.89009480000001
  }, {
    lat: 40.8544454,
    lng: -73.8905883
  }, {
    lat: 40.85415330000001,
    lng: -73.8908458
  }, {
    lat: 40.8546402,
    lng: -73.8917685
  }, {
    lat: 40.8549972,
    lng: -73.8924766
  }, {
    lat: 40.855825,
    lng: -73.8943863
  }, {
    lat: 40.8562794,
    lng: -73.895545
  }],
  color: '795046',
  center: {
    lat: 40.849868099999995,
    lng: -73.89371034999999
  }
}, {
  name: 'Fordham Heights',
  borough: 'Bronx',
  coords: [{
    lat: 40.862494999999996,
    lng: -73.8968754
  }, {
    lat: 40.8621867,
    lng: -73.8994288
  }, {
    lat: 40.8628034,
    lng: -73.9010382
  }, {
    lat: 40.8617161,
    lng: -73.901875
  }, {
    lat: 40.856084599999996,
    lng: -73.90530820000001
  }, {
    lat: 40.8538936,
    lng: -73.9073253
  }, {
    lat: 40.8524004,
    lng: -73.9036345
  }, {
    lat: 40.850469000000004,
    lng: -73.9009094
  }, {
    lat: 40.8500145,
    lng: -73.9007378
  }, {
    lat: 40.8493652,
    lng: -73.9008665
  }, {
    lat: 40.84921919999999,
    lng: -73.9000726
  }, {
    lat: 40.8562794,
    lng: -73.895545
  }, {
    lat: 40.8599472,
    lng: -73.8931417
  }, {
    lat: 40.8616998,
    lng: -73.8912964
  }, {
    lat: 40.861927,
    lng: -73.8918543
  }, {
    lat: 40.86186210000001,
    lng: -73.8928628
  }, {
    lat: 40.8620893,
    lng: -73.894794
  }, {
    lat: 40.862494999999996,
    lng: -73.8968754
  }],
  color: '9FC3FF',
  center: {
    lat: 40.85601129999999,
    lng: -73.89931085
  }
}, {
  name: 'West Farms',
  borough: 'Bronx',
  coords: [{
    lat: 40.8483264,
    lng: -73.8831639
  }, {
    lat: 40.85110199999999,
    lng: -73.8822842
  }, {
    lat: 40.85179990000001,
    lng: -73.8846874
  }, {
    lat: 40.8511831,
    lng: -73.8852453
  }, {
    lat: 40.8489757,
    lng: -73.8880992
  }, {
    lat: 40.84345679999999,
    lng: -73.8928413
  }, {
    lat: 40.843262,
    lng: -73.8915539
  }, {
    lat: 40.8427588,
    lng: -73.89015910000002
  }, {
    lat: 40.839366,
    lng: -73.8840222
  }, {
    lat: 40.83733680000001,
    lng: -73.8802242
  }, {
    lat: 40.8368497,
    lng: -73.8787436
  }, {
    lat: 40.8365251,
    lng: -73.8768339
  }, {
    lat: 40.83636270000001,
    lng: -73.8737655
  }, {
    lat: 40.8408108,
    lng: -73.8725209
  }, {
    lat: 40.8420121,
    lng: -73.8758254
  }, {
    lat: 40.8426289,
    lng: -73.8781214
  }, {
    lat: 40.844057400000004,
    lng: -73.877306
  }, {
    lat: 40.8479044,
    lng: -73.8828421
  }, {
    lat: 40.8483264,
    lng: -73.8831639
  }],
  color: '009D57',
  center: {
    lat: 40.84408130000001,
    lng: -73.88268110000001
  }
}, {
  name: 'Belmont',
  borough: 'Bronx',
  coords: [{
    lat: 40.8600608,
    lng: -73.8911247
  }, {
    lat: 40.85757770000001,
    lng: -73.8911033
  }, {
    lat: 40.8566851,
    lng: -73.8910389
  }, {
    lat: 40.8544454,
    lng: -73.89009480000001
  }, {
    lat: 40.8536177,
    lng: -73.8895369
  }, {
    lat: 40.8532119,
    lng: -73.8895583
  }, {
    lat: 40.85179990000001,
    lng: -73.8846874
  }, {
    lat: 40.85110199999999,
    lng: -73.8822842
  }, {
    lat: 40.8568637,
    lng: -73.8806534
  }, {
    lat: 40.8582918,
    lng: -73.8810182
  }, {
    lat: 40.8575291,
    lng: -73.8817692
  }, {
    lat: 40.8579997,
    lng: -73.8833141
  }, {
    lat: 40.8584379,
    lng: -73.88500930000001
  }, {
    lat: 40.8616998,
    lng: -73.8912964
  }, {
    lat: 40.8605476,
    lng: -73.892498
  }, {
    lat: 40.8600608,
    lng: -73.8911247
  }],
  color: 'B7DBAB',
  center: {
    lat: 40.8564009,
    lng: -73.88657569999998
  }
}, {
  name: 'West Concourse',
  borough: 'Bronx',
  coords: [{
    lat: 40.8200694,
    lng: -73.9321518
  }, {
    lat: 40.8198015,
    lng: -73.9323556
  }, {
    lat: 40.8195255,
    lng: -73.9323449
  }, {
    lat: 40.819273800000005,
    lng: -73.9299631
  }, {
    lat: 40.818567400000006,
    lng: -73.9272702
  }, {
    lat: 40.820581,
    lng: -73.9263475
  }, {
    lat: 40.8219044,
    lng: -73.9251244
  }, {
    lat: 40.8226432,
    lng: -73.9247382
  }, {
    lat: 40.823861,
    lng: -73.9243519
  }, {
    lat: 40.8268892,
    lng: -73.9226246
  }, {
    lat: 40.8319712,
    lng: -73.9198673
  }, {
    lat: 40.833107600000005,
    lng: -73.9190304
  }, {
    lat: 40.8376046,
    lng: -73.9146852
  }, {
    lat: 40.838741,
    lng: -73.9137304
  }, {
    lat: 40.839877400000006,
    lng: -73.9131081
  }, {
    lat: 40.844666100000005,
    lng: -73.91137
  }, {
    lat: 40.8451612,
    lng: -73.9110053
  }, {
    lat: 40.845177400000004,
    lng: -73.9141059
  }, {
    lat: 40.83839199999999,
    lng: -73.9189768
  }, {
    lat: 40.8349665,
    lng: -73.9240623
  }, {
    lat: 40.8325313,
    lng: -73.9254355
  }, {
    lat: 40.8299173,
    lng: -73.9278173
  }, {
    lat: 40.8291218,
    lng: -73.9288473
  }, {
    lat: 40.8284398,
    lng: -73.9304566
  }, {
    lat: 40.8281638,
    lng: -73.933053
  }, {
    lat: 40.82774979999999,
    lng: -73.9330316
  }, {
    lat: 40.8277579,
    lng: -73.9329028
  }, {
    lat: 40.8245592,
    lng: -73.93254880000002
  }, {
    lat: 40.8245917,
    lng: -73.9318621
  }, {
    lat: 40.82412889999999,
    lng: -73.9318407
  }, {
    lat: 40.8241127,
    lng: -73.9325058
  }, {
    lat: 40.82357689999999,
    lng: -73.9324629
  }, {
    lat: 40.8234632,
    lng: -73.9323235
  }, {
    lat: 40.823300800000005,
    lng: -73.9324629
  }, {
    lat: 40.8225701,
    lng: -73.9323878
  }, {
    lat: 40.8225864,
    lng: -73.9316154
  }, {
    lat: 40.8222454,
    lng: -73.9315724
  }, {
    lat: 40.8221723,
    lng: -73.9323235
  }, {
    lat: 40.82158770000001,
    lng: -73.9323235
  }, {
    lat: 40.8215958,
    lng: -73.9316261
  }, {
    lat: 40.821384699999996,
    lng: -73.9316475
  }, {
    lat: 40.8213766,
    lng: -73.9321303
  }, {
    lat: 40.8209463,
    lng: -73.9323127
  }, {
    lat: 40.8205566,
    lng: -73.9322484
  }, {
    lat: 40.8205322,
    lng: -73.9323556
  }, {
    lat: 40.8200694,
    lng: -73.9321518
  }],
  color: 'F4B400',
  center: {
    lat: 40.83187240000001,
    lng: -73.92202914999996
  }
}, {
  name: 'Concourse Village',
  borough: 'Bronx',
  coords: [{
    lat: 40.8451612,
    lng: -73.9110053
  }, {
    lat: 40.844666100000005,
    lng: -73.91137
  }, {
    lat: 40.839877400000006,
    lng: -73.9131081
  }, {
    lat: 40.838741,
    lng: -73.9137304
  }, {
    lat: 40.833107600000005,
    lng: -73.9190304
  }, {
    lat: 40.8319712,
    lng: -73.9198673
  }, {
    lat: 40.823861,
    lng: -73.9243519
  }, {
    lat: 40.8219044,
    lng: -73.9251244
  }, {
    lat: 40.820581,
    lng: -73.9263475
  }, {
    lat: 40.818567400000006,
    lng: -73.9272702
  }, {
    lat: 40.8180152,
    lng: -73.9251995
  }, {
    lat: 40.8203536,
    lng: -73.9228392
  }, {
    lat: 40.8217014,
    lng: -73.9208007
  }, {
    lat: 40.82213980000001,
    lng: -73.9202857
  }, {
    lat: 40.8248677,
    lng: -73.9160371
  }, {
    lat: 40.8277904,
    lng: -73.9121317
  }, {
    lat: 40.8366225,
    lng: -73.9071965
  }, {
    lat: 40.8385381,
    lng: -73.90595200000001
  }, {
    lat: 40.8446093,
    lng: -73.9027333
  }, {
    lat: 40.8451612,
    lng: -73.9110053
  }],
  color: 'B29189',
  center: {
    lat: 40.8315882,
    lng: -73.91500174999999
  }
}, {
  name: 'Kingsbridge Heights',
  borough: 'Bronx',
  coords: [{
    lat: 40.8630792,
    lng: -73.9127326
  }, {
    lat: 40.8622354,
    lng: -73.9105654
  }, {
    lat: 40.8622841,
    lng: -73.90990020000001
  }, {
    lat: 40.8625924,
    lng: -73.909471
  }, {
    lat: 40.8627709,
    lng: -73.9089346
  }, {
    lat: 40.862852,
    lng: -73.9081407
  }, {
    lat: 40.8628034,
    lng: -73.9010382
  }, {
    lat: 40.8704138,
    lng: -73.8951159
  }, {
    lat: 40.871858,
    lng: -73.8920259
  }, {
    lat: 40.871760599999995,
    lng: -73.8910174
  }, {
    lat: 40.8718742,
    lng: -73.8903308
  }, {
    lat: 40.872296,
    lng: -73.8898373
  }, {
    lat: 40.8771473,
    lng: -73.8876271
  }, {
    lat: 40.8827283,
    lng: -73.8812542
  }, {
    lat: 40.8834421,
    lng: -73.8826919
  }, {
    lat: 40.8831663,
    lng: -73.8839364
  }, {
    lat: 40.883166300000006,
    lng: -73.8841939
  }, {
    lat: 40.8843668,
    lng: -73.8867474
  }, {
    lat: 40.8842857,
    lng: -73.8875628
  }, {
    lat: 40.8860377,
    lng: -73.8965964
  }, {
    lat: 40.8843019,
    lng: -73.8986564
  }, {
    lat: 40.8797432,
    lng: -73.9026046
  }, {
    lat: 40.878948199999996,
    lng: -73.9034414
  }, {
    lat: 40.878137,
    lng: -73.9039135
  }, {
    lat: 40.87565469999999,
    lng: -73.9048362
  }, {
    lat: 40.87330200000001,
    lng: -73.9060378
  }, {
    lat: 40.8735292,
    lng: -73.9071536
  }, {
    lat: 40.8729775,
    lng: -73.9078617
  }, {
    lat: 40.8710304,
    lng: -73.908999
  }, {
    lat: 40.86905079999999,
    lng: -73.909514
  }, {
    lat: 40.867022500000004,
    lng: -73.9103293
  }, {
    lat: 40.8655783,
    lng: -73.9111447
  }, {
    lat: 40.8655296,
    lng: -73.9114451
  }, {
    lat: 40.8639555,
    lng: -73.9128184
  }, {
    lat: 40.8636797,
    lng: -73.9123034
  }, {
    lat: 40.8630792,
    lng: -73.9127326
  }],
  color: 'F8971B',
  center: {
    lat: 40.87413655,
    lng: -73.89703629999997
  }
}, {
  name: 'Bedford Park',
  borough: 'Bronx',
  coords: [{
    lat: 40.8829068,
    lng: -73.8866186
  }, {
    lat: 40.8829879,
    lng: -73.8879061
  }, {
    lat: 40.880489499999996,
    lng: -73.8897514
  }, {
    lat: 40.8790942,
    lng: -73.8913393
  }, {
    lat: 40.8712251,
    lng: -73.8975406
  }, {
    lat: 40.87021910000001,
    lng: -73.8952446
  }, {
    lat: 40.8704138,
    lng: -73.8951159
  }, {
    lat: 40.87077080000001,
    lng: -73.8943219
  }, {
    lat: 40.8718093,
    lng: -73.8936353
  }, {
    lat: 40.86862889999999,
    lng: -73.8883138
  }, {
    lat: 40.8673146,
    lng: -73.8868761
  }, {
    lat: 40.8659515,
    lng: -73.8859105
  }, {
    lat: 40.8692293,
    lng: -73.880353
  }, {
    lat: 40.87031650000001,
    lng: -73.8808036
  }, {
    lat: 40.8764335,
    lng: -73.8828635
  }, {
    lat: 40.878283,
    lng: -73.8840437
  }, {
    lat: 40.8795647,
    lng: -73.8843656
  }, {
    lat: 40.88065170000001,
    lng: -73.8856316
  }, {
    lat: 40.8829068,
    lng: -73.8866186
  }],
  color: '7C3592',
  center: {
    lat: 40.874469700000006,
    lng: -73.88894679999999
  }
}, {
  name: 'Fordham North',
  borough: 'Bronx',
  coords: [{
    lat: 40.8654485,
    lng: -73.8867903
  }, {
    lat: 40.8659515,
    lng: -73.8859105
  }, {
    lat: 40.8673146,
    lng: -73.8868761
  }, {
    lat: 40.86862889999999,
    lng: -73.8883138
  }, {
    lat: 40.8714036,
    lng: -73.8929701
  }, {
    lat: 40.8704138,
    lng: -73.8951159
  }, {
    lat: 40.8628034,
    lng: -73.9010382
  }, {
    lat: 40.8621867,
    lng: -73.8994288
  }, {
    lat: 40.862494999999996,
    lng: -73.8968754
  }, {
    lat: 40.86186210000001,
    lng: -73.8928628
  }, {
    lat: 40.861927,
    lng: -73.8918543
  }, {
    lat: 40.8616998,
    lng: -73.8912964
  }, {
    lat: 40.862706,
    lng: -73.8900089
  }, {
    lat: 40.8654485,
    lng: -73.8867903
  }],
  color: '0BA9CC',
  center: {
    lat: 40.8665517,
    lng: -73.89347435000002
  }
}, {
  name: 'Norwood',
  borough: 'Bronx',
  coords: [{
    lat: 40.8871408,
    lng: -73.8780141
  }, {
    lat: 40.8827283,
    lng: -73.8812542
  }, {
    lat: 40.8798243,
    lng: -73.884666
  }, {
    lat: 40.8795647,
    lng: -73.8843656
  }, {
    lat: 40.878283,
    lng: -73.8840437
  }, {
    lat: 40.8764335,
    lng: -73.8828635
  }, {
    lat: 40.8692293,
    lng: -73.880353
  }, {
    lat: 40.86840180000001,
    lng: -73.8798809
  }, {
    lat: 40.870495,
    lng: -73.8762546
  }, {
    lat: 40.87151720000001,
    lng: -73.8752675
  }, {
    lat: 40.8761252,
    lng: -73.8720059
  }, {
    lat: 40.880489499999996,
    lng: -73.8700962
  }, {
    lat: 40.8806355,
    lng: -73.8708472
  }, {
    lat: 40.8804084,
    lng: -73.8716626
  }, {
    lat: 40.8801001,
    lng: -73.8747954
  }, {
    lat: 40.8816738,
    lng: -73.8746452
  }, {
    lat: 40.8823065,
    lng: -73.8779926
  }, {
    lat: 40.884366799999995,
    lng: -73.8774776
  }, {
    lat: 40.8871408,
    lng: -73.8780141
  }],
  color: '777777',
  center: {
    lat: 40.877771300000006,
    lng: -73.87738109999998
  }
}, {
  name: 'Kingsbridge',
  borough: 'Bronx',
  coords: [{
    lat: 40.8735292,
    lng: -73.9071536
  }, {
    lat: 40.87330200000001,
    lng: -73.9060378
  }, {
    lat: 40.878948199999996,
    lng: -73.9034414
  }, {
    lat: 40.8843019,
    lng: -73.8986564
  }, {
    lat: 40.8860377,
    lng: -73.8965964
  }, {
    lat: 40.8865893,
    lng: -73.8997078
  }, {
    lat: 40.8895092,
    lng: -73.8982701
  }, {
    lat: 40.8896714,
    lng: -73.8996005
  }, {
    lat: 40.889493,
    lng: -73.9001369
  }, {
    lat: 40.889071200000004,
    lng: -73.9006519
  }, {
    lat: 40.8889415,
    lng: -73.9009094
  }, {
    lat: 40.888973899999996,
    lng: -73.9012098
  }, {
    lat: 40.8892172,
    lng: -73.9018106
  }, {
    lat: 40.8891361,
    lng: -73.902626
  }, {
    lat: 40.8892172,
    lng: -73.9027977
  }, {
    lat: 40.8882602,
    lng: -73.9032912
  }, {
    lat: 40.88715710000001,
    lng: -73.9041281
  }, {
    lat: 40.8857133,
    lng: -73.9057589
  }, {
    lat: 40.8847237,
    lng: -73.9070678
  }, {
    lat: 40.8845777,
    lng: -73.9074326
  }, {
    lat: 40.883506999999994,
    lng: -73.90790460000001
  }, {
    lat: 40.8826634,
    lng: -73.9085484
  }, {
    lat: 40.8811709,
    lng: -73.9095354
  }, {
    lat: 40.8805544,
    lng: -73.9106083
  }, {
    lat: 40.8798405,
    lng: -73.911767
  }, {
    lat: 40.8791591,
    lng: -73.9101362
  }, {
    lat: 40.8778288,
    lng: -73.9084196
  }, {
    lat: 40.8760765,
    lng: -73.9071751
  }, {
    lat: 40.8735292,
    lng: -73.9071536
  }],
  color: '009D57',
  center: {
    lat: 40.8814867,
    lng: -73.90418169999998
  }
}, {
  name: 'Spuyten Duyvil',
  borough: 'Bronx',
  coords: [{
    lat: 40.8862324,
    lng: -73.9211011
  }, {
    lat: 40.88092749999999,
    lng: -73.9235044
  }, {
    lat: 40.8799541,
    lng: -73.924191
  }, {
    lat: 40.8789807,
    lng: -73.9250493
  }, {
    lat: 40.8788671,
    lng: -73.9248562
  }, {
    lat: 40.8790618,
    lng: -73.92446990000002
  }, {
    lat: 40.8789158,
    lng: -73.9232254
  }, {
    lat: 40.8789807,
    lng: -73.9227319
  }, {
    lat: 40.878737300000004,
    lng: -73.9223671
  }, {
    lat: 40.8786886,
    lng: -73.92219540000002
  }, {
    lat: 40.876757899999994,
    lng: -73.9200926
  }, {
    lat: 40.8761414,
    lng: -73.91921280000001
  }, {
    lat: 40.8758656,
    lng: -73.9182043
  }, {
    lat: 40.875752,
    lng: -73.9176893
  }, {
    lat: 40.8758656,
    lng: -73.9173675
  }, {
    lat: 40.875865600000004,
    lng: -73.9166594
  }, {
    lat: 40.87663630000001,
    lng: -73.9159727
  }, {
    lat: 40.87701760000001,
    lng: -73.9146852
  }, {
    lat: 40.87778010000001,
    lng: -73.9134193
  }, {
    lat: 40.879224,
    lng: -73.9126253
  }, {
    lat: 40.8798405,
    lng: -73.911767
  }, {
    lat: 40.8811709,
    lng: -73.9095354
  }, {
    lat: 40.88251739999999,
    lng: -73.9086556
  }, {
    lat: 40.882825700000005,
    lng: -73.9091492
  }, {
    lat: 40.8837017,
    lng: -73.9093208
  }, {
    lat: 40.88376660000001,
    lng: -73.9095569
  }, {
    lat: 40.88347460000001,
    lng: -73.9101577
  }, {
    lat: 40.8862324,
    lng: -73.9211011
  }],
  color: 'B29189',
  center: {
    lat: 40.880992199999994,
    lng: -73.91685244999996
  }
}, {
  name: 'Riverdale',
  borough: 'Bronx',
  coords: [{
    lat: 40.889055,
    lng: -73.9080548
  }, {
    lat: 40.889931,
    lng: -73.908248
  }, {
    lat: 40.8907583,
    lng: -73.9082265
  }, {
    lat: 40.8944241,
    lng: -73.9082265
  }, {
    lat: 40.89708420000001,
    lng: -73.9080334
  }, {
    lat: 40.8984628,
    lng: -73.90769
  }, {
    lat: 40.899711700000005,
    lng: -73.906703
  }, {
    lat: 40.900506400000005,
    lng: -73.9057159
  }, {
    lat: 40.900993,
    lng: -73.9045894
  }, {
    lat: 40.9017066,
    lng: -73.9046645
  }, {
    lat: 40.9016255,
    lng: -73.90601630000002
  }, {
    lat: 40.9033446,
    lng: -73.9109945
  }, {
    lat: 40.90336090000001,
    lng: -73.9115953
  }, {
    lat: 40.903993400000004,
    lng: -73.9146423
  }, {
    lat: 40.9029392,
    lng: -73.9150929
  }, {
    lat: 40.9028095,
    lng: -73.91505
  }, {
    lat: 40.9017715,
    lng: -73.9154363
  }, {
    lat: 40.9015931,
    lng: -73.9152002
  }, {
    lat: 40.8975059,
    lng: -73.9167666
  }, {
    lat: 40.8973113,
    lng: -73.9167237
  }, {
    lat: 40.89504050000001,
    lng: -73.9176035
  }, {
    lat: 40.8949594,
    lng: -73.917861
  }, {
    lat: 40.8947485,
    lng: -73.9179468
  }, {
    lat: 40.89453770000001,
    lng: -73.9178181
  }, {
    lat: 40.8862324,
    lng: -73.9211011
  }, {
    lat: 40.88347460000001,
    lng: -73.9101577
  }, {
    lat: 40.88376660000001,
    lng: -73.9095569
  }, {
    lat: 40.8837017,
    lng: -73.9093208
  }, {
    lat: 40.882825700000005,
    lng: -73.9091492
  }, {
    lat: 40.88251739999999,
    lng: -73.9086556
  }, {
    lat: 40.883506999999994,
    lng: -73.90790460000001
  }, {
    lat: 40.8845777,
    lng: -73.9074326
  }, {
    lat: 40.8860377,
    lng: -73.9069605
  }, {
    lat: 40.88738420000001,
    lng: -73.9071536
  }, {
    lat: 40.889055,
    lng: -73.9080548
  }],
  color: '3F5BA9',
  center: {
    lat: 40.8932554,
    lng: -73.91284525000003
  }
}, {
  name: 'Fieldston',
  borough: 'Bronx',
  coords: [{
    lat: 40.9012363,
    lng: -73.9028192
  }, {
    lat: 40.900993,
    lng: -73.9045894
  }, {
    lat: 40.900506400000005,
    lng: -73.9057159
  }, {
    lat: 40.899711700000005,
    lng: -73.906703
  }, {
    lat: 40.8984628,
    lng: -73.90769
  }, {
    lat: 40.89708420000001,
    lng: -73.9080334
  }, {
    lat: 40.8944241,
    lng: -73.9082265
  }, {
    lat: 40.889931,
    lng: -73.908248
  }, {
    lat: 40.889055,
    lng: -73.9080548
  }, {
    lat: 40.88738420000001,
    lng: -73.9071536
  }, {
    lat: 40.8860377,
    lng: -73.9069605
  }, {
    lat: 40.8845777,
    lng: -73.9074326
  }, {
    lat: 40.8847237,
    lng: -73.9070678
  }, {
    lat: 40.8857133,
    lng: -73.9057589
  }, {
    lat: 40.88715710000001,
    lng: -73.9041281
  }, {
    lat: 40.8882602,
    lng: -73.9032912
  }, {
    lat: 40.8892172,
    lng: -73.9027977
  }, {
    lat: 40.8891361,
    lng: -73.902626
  }, {
    lat: 40.8892172,
    lng: -73.9018106
  }, {
    lat: 40.888973899999996,
    lng: -73.9012098
  }, {
    lat: 40.8889415,
    lng: -73.9009094
  }, {
    lat: 40.889071200000004,
    lng: -73.9006519
  }, {
    lat: 40.889493,
    lng: -73.9001369
  }, {
    lat: 40.8896714,
    lng: -73.8996005
  }, {
    lat: 40.8895092,
    lng: -73.8982701
  }, {
    lat: 40.8916991,
    lng: -73.8972831
  }, {
    lat: 40.8926399,
    lng: -73.8968539
  }, {
    lat: 40.8938402,
    lng: -73.8964677
  }, {
    lat: 40.8990629,
    lng: -73.8971543
  }, {
    lat: 40.90027940000001,
    lng: -73.8970041
  }, {
    lat: 40.90083080000001,
    lng: -73.8989353
  }, {
    lat: 40.9010579,
    lng: -73.900094
  }, {
    lat: 40.9012038,
    lng: -73.9013171
  }, {
    lat: 40.9012363,
    lng: -73.9028192
  }],
  color: 'B7DBAB',
  center: {
    lat: 40.892907,
    lng: -73.90235785000004
  }
}, {
  name: 'North Riverdale',
  borough: 'Bronx',
  coords: [{
    lat: 40.9113397,
    lng: -73.8966179
  }, {
    lat: 40.9154584,
    lng: -73.91039370000001
  }, {
    lat: 40.9147936,
    lng: -73.9106297
  }, {
    lat: 40.91445310000001,
    lng: -73.911016
  }, {
    lat: 40.9133991,
    lng: -73.9117241
  }, {
    lat: 40.91268560000001,
    lng: -73.9114666
  }, {
    lat: 40.9080315,
    lng: -73.9127111
  }, {
    lat: 40.9078531,
    lng: -73.9131403
  }, {
    lat: 40.90752880000001,
    lng: -73.9129043
  }, {
    lat: 40.9042204,
    lng: -73.9141917
  }, {
    lat: 40.9041231,
    lng: -73.914578
  }, {
    lat: 40.903993400000004,
    lng: -73.9146423
  }, {
    lat: 40.90336090000001,
    lng: -73.9115953
  }, {
    lat: 40.9033446,
    lng: -73.9109945
  }, {
    lat: 40.9016255,
    lng: -73.90601630000002
  }, {
    lat: 40.9017066,
    lng: -73.9046645
  }, {
    lat: 40.900993,
    lng: -73.9045894
  }, {
    lat: 40.9012363,
    lng: -73.9028192
  }, {
    lat: 40.9012038,
    lng: -73.9013171
  }, {
    lat: 40.9010579,
    lng: -73.900094
  }, {
    lat: 40.90027940000001,
    lng: -73.8970041
  }, {
    lat: 40.9031987,
    lng: -73.8963604
  }, {
    lat: 40.9113397,
    lng: -73.8966179
  }],
  color: '777777',
  center: {
    lat: 40.907868900000004,
    lng: -73.90550135000001
  }
}, {
  name: 'Soundview',
  borough: 'Bronx',
  coords: [{
    lat: 40.8301933,
    lng: -73.8840437
  }, {
    lat: 40.82986859999999,
    lng: -73.8837862
  }, {
    lat: 40.8296575,
    lng: -73.8834214
  }, {
    lat: 40.8289919,
    lng: -73.8833356
  }, {
    lat: 40.82725460000001,
    lng: -73.8840222
  }, {
    lat: 40.82668629999999,
    lng: -73.8844085
  }, {
    lat: 40.825241199999994,
    lng: -73.8845587
  }, {
    lat: 40.8247378,
    lng: -73.8844514
  }, {
    lat: 40.8238123,
    lng: -73.8845372
  }, {
    lat: 40.823455100000004,
    lng: -73.8843012
  }, {
    lat: 40.8231141,
    lng: -73.8843441
  }, {
    lat: 40.8225945,
    lng: -73.8840437
  }, {
    lat: 40.8205972,
    lng: -73.8829494
  }, {
    lat: 40.8195579,
    lng: -73.8822842
  }, {
    lat: 40.8189571,
    lng: -73.8814259
  }, {
    lat: 40.8219937,
    lng: -73.858273
  }, {
    lat: 40.8241858,
    lng: -73.8587666
  }, {
    lat: 40.832839699999994,
    lng: -73.8627148
  }, {
    lat: 40.83389499999999,
    lng: -73.862865
  }, {
    lat: 40.8359569,
    lng: -73.8700747
  }, {
    lat: 40.83611919999999,
    lng: -73.8709116
  }, {
    lat: 40.83636270000001,
    lng: -73.8737655
  }, {
    lat: 40.8365251,
    lng: -73.8768339
  }, {
    lat: 40.8368497,
    lng: -73.8787436
  }, {
    lat: 40.83733680000001,
    lng: -73.8802242
  }, {
    lat: 40.836021800000005,
    lng: -73.8807607
  }, {
    lat: 40.834999,
    lng: -73.88116840000002
  }, {
    lat: 40.8335541,
    lng: -73.8812542
  }, {
    lat: 40.8324014,
    lng: -73.8822412
  }, {
    lat: 40.8320929,
    lng: -73.8827991
  }, {
    lat: 40.8320929,
    lng: -73.8832283
  }, {
    lat: 40.831962999999995,
    lng: -73.88344290000002
  }, {
    lat: 40.830924,
    lng: -73.883636
  }, {
    lat: 40.8301933,
    lng: -73.8840437
  }],
  color: '3F5BA9',
  center: {
    lat: 40.828146950000004,
    lng: -73.87141585
  }
}, {
  name: 'Clason Point',
  borough: 'Bronx',
  coords: [{
    lat: 40.8189571,
    lng: -73.8814259
  }, {
    lat: 40.8171221,
    lng: -73.8786364
  }, {
    lat: 40.81666739999999,
    lng: -73.877821
  }, {
    lat: 40.8147187,
    lng: -73.8714695
  }, {
    lat: 40.814393900000006,
    lng: -73.8707399
  }, {
    lat: 40.8104637,
    lng: -73.8676929
  }, {
    lat: 40.8103987,
    lng: -73.8659334
  }, {
    lat: 40.8099765,
    lng: -73.8619423
  }, {
    lat: 40.8094568,
    lng: -73.8605261
  }, {
    lat: 40.8089046,
    lng: -73.8598824
  }, {
    lat: 40.8064034,
    lng: -73.8594961
  }, {
    lat: 40.8058512,
    lng: -73.8592386
  }, {
    lat: 40.8043569,
    lng: -73.8557625
  }, {
    lat: 40.8044868,
    lng: -73.8515139
  }, {
    lat: 40.8044219,
    lng: -73.850956
  }, {
    lat: 40.8044543,
    lng: -73.8501406
  }, {
    lat: 40.80503910000001,
    lng: -73.8498831
  }, {
    lat: 40.8045843,
    lng: -73.8489819
  }, {
    lat: 40.80490910000001,
    lng: -73.8477373
  }, {
    lat: 40.8056238,
    lng: -73.8473511
  }, {
    lat: 40.8059811,
    lng: -73.8475657
  }, {
    lat: 40.806241,
    lng: -73.8484669
  }, {
    lat: 40.8069231,
    lng: -73.84842400000001
  }, {
    lat: 40.80744289999999,
    lng: -73.8485527
  }, {
    lat: 40.8078976,
    lng: -73.8496256
  }, {
    lat: 40.8092294,
    lng: -73.8501406
  }, {
    lat: 40.810821,
    lng: -73.8491535
  }, {
    lat: 40.8113732,
    lng: -73.8493681
  }, {
    lat: 40.812031,
    lng: -73.8491106
  }, {
    lat: 40.81241659999999,
    lng: -73.8492984
  }, {
    lat: 40.8127699,
    lng: -73.8496685
  }, {
    lat: 40.81312710000001,
    lng: -73.8504839
  }, {
    lat: 40.8135047,
    lng: -73.8509882
  }, {
    lat: 40.8136063,
    lng: -73.8513851
  }, {
    lat: 40.8138011,
    lng: -73.8524795
  }, {
    lat: 40.8135007,
    lng: -73.8533056
  }, {
    lat: 40.8135819,
    lng: -73.8539171
  }, {
    lat: 40.813793,
    lng: -73.8546038
  }, {
    lat: 40.814751099999995,
    lng: -73.8566208
  }, {
    lat: 40.8219937,
    lng: -73.858273
  }, {
    lat: 40.8189571,
    lng: -73.8814259
  }],
  color: '000000',
  center: {
    lat: 40.8131753,
    lng: -73.86438850000002
  }
}, {
  name: 'Parkchester',
  borough: 'Bronx',
  coords: [{
    lat: 40.841103,
    lng: -73.8645172
  }, {
    lat: 40.8399991,
    lng: -73.8639164
  }, {
    lat: 40.8346256,
    lng: -73.8630366
  }, {
    lat: 40.83389499999999,
    lng: -73.862865
  }, {
    lat: 40.833408,
    lng: -73.8614702
  }, {
    lat: 40.8335379,
    lng: -73.8612342
  }, {
    lat: 40.833619,
    lng: -73.860805
  }, {
    lat: 40.8334405,
    lng: -73.8604832
  }, {
    lat: 40.8332456,
    lng: -73.8603759
  }, {
    lat: 40.8341873,
    lng: -73.8516855
  }, {
    lat: 40.8350802,
    lng: -73.8519859
  }, {
    lat: 40.8424504,
    lng: -73.8533378
  }, {
    lat: 40.841314,
    lng: -73.86338
  }, {
    lat: 40.841103,
    lng: -73.8645172
  }],
  color: 'A61B4A',
  center: {
    lat: 40.837847999999994,
    lng: -73.85810135000003
  }
}, {
  name: 'Van Nest',
  borough: 'Bronx',
  coords: [{
    lat: 40.8520352,
    lng: -73.8686264
  }, {
    lat: 40.8518891,
    lng: -73.86864780000002
  }, {
    lat: 40.850891,
    lng: -73.8682508
  }, {
    lat: 40.8489108,
    lng: -73.8694847
  }, {
    lat: 40.8489189,
    lng: -73.8702464
  }, {
    lat: 40.8493003,
    lng: -73.8702464
  }, {
    lat: 40.8492922,
    lng: -73.870815
  }, {
    lat: 40.8495438,
    lng: -73.870815
  }, {
    lat: 40.8494951,
    lng: -73.8714695
  }, {
    lat: 40.8455508,
    lng: -73.871491
  }, {
    lat: 40.8436678,
    lng: -73.8718987
  }, {
    lat: 40.8433594,
    lng: -73.8727784
  }, {
    lat: 40.84301850000001,
    lng: -73.8734651
  }, {
    lat: 40.8421257,
    lng: -73.8742805
  }, {
    lat: 40.842353,
    lng: -73.8749456
  }, {
    lat: 40.84183350000001,
    lng: -73.8753104
  }, {
    lat: 40.8408108,
    lng: -73.8725209
  }, {
    lat: 40.839934199999995,
    lng: -73.8706112
  }, {
    lat: 40.8395933,
    lng: -73.8703108
  }, {
    lat: 40.8395608,
    lng: -73.8693881
  }, {
    lat: 40.840161499999994,
    lng: -73.8678861
  }, {
    lat: 40.841103,
    lng: -73.8645172
  }, {
    lat: 40.841314,
    lng: -73.86338
  }, {
    lat: 40.8424504,
    lng: -73.8533378
  }, {
    lat: 40.84253149999999,
    lng: -73.8538742
  }, {
    lat: 40.84374900000001,
    lng: -73.8574791
  }, {
    lat: 40.8452748,
    lng: -73.8586807
  }, {
    lat: 40.8480667,
    lng: -73.8602686
  }, {
    lat: 40.8483427,
    lng: -73.8606334
  }, {
    lat: 40.8505501,
    lng: -73.8661695
  }, {
    lat: 40.8520352,
    lng: -73.8686264
  }],
  color: '93D7E8',
  center: {
    lat: 40.845798,
    lng: -73.86432409999998
  }
}, {
  name: 'Castle Hill',
  borough: 'Bronx',
  coords: [{
    lat: 40.8105287,
    lng: -73.8469756
  }, {
    lat: 40.8106992,
    lng: -73.8461602
  }, {
    lat: 40.81085349999999,
    lng: -73.8461065
  }, {
    lat: 40.81120270000001,
    lng: -73.8460958
  }, {
    lat: 40.81164119999999,
    lng: -73.8458383
  }, {
    lat: 40.8118523,
    lng: -73.8455164
  }, {
    lat: 40.8118117,
    lng: -73.8453877
  }, {
    lat: 40.8118279,
    lng: -73.8452911
  }, {
    lat: 40.8119172,
    lng: -73.8451731
  }, {
    lat: 40.8127536,
    lng: -73.8449693
  }, {
    lat: 40.8135332,
    lng: -73.844347
  }, {
    lat: 40.8145563,
    lng: -73.8441324
  }, {
    lat: 40.815985399999995,
    lng: -73.8431883
  }, {
    lat: 40.8179828,
    lng: -73.8420939
  }, {
    lat: 40.818340000000006,
    lng: -73.8422227
  }, {
    lat: 40.8187947,
    lng: -73.8420296
  }, {
    lat: 40.8188759,
    lng: -73.8411927
  }, {
    lat: 40.8192981,
    lng: -73.8409138
  }, {
    lat: 40.81947670000001,
    lng: -73.8406777
  }, {
    lat: 40.81963910000001,
    lng: -73.8401628
  }, {
    lat: 40.8199314,
    lng: -73.8399696
  }, {
    lat: 40.820321099999994,
    lng: -73.840034
  }, {
    lat: 40.8216851,
    lng: -73.8397121
  }, {
    lat: 40.8239909,
    lng: -73.8406777
  }, {
    lat: 40.8249976,
    lng: -73.8412142
  }, {
    lat: 40.8277254,
    lng: -73.8424373
  }, {
    lat: 40.8291705,
    lng: -73.8429308
  }, {
    lat: 40.830031,
    lng: -73.8430166
  }, {
    lat: 40.830810299999996,
    lng: -73.8426733
  }, {
    lat: 40.83139479999999,
    lng: -73.8422441
  }, {
    lat: 40.83275859999999,
    lng: -73.8404202
  }, {
    lat: 40.833408,
    lng: -73.83977650000001
  }, {
    lat: 40.8339762,
    lng: -73.8394976
  }, {
    lat: 40.8349503,
    lng: -73.839519
  }, {
    lat: 40.8357458,
    lng: -73.8397121
  }, {
    lat: 40.8344308,
    lng: -73.8491964
  }, {
    lat: 40.8341873,
    lng: -73.8516855
  }, {
    lat: 40.8332456,
    lng: -73.8603759
  }, {
    lat: 40.832937199999996,
    lng: -73.8603759
  }, {
    lat: 40.8327099,
    lng: -73.8606334
  }, {
    lat: 40.8326449,
    lng: -73.8610625
  }, {
    lat: 40.83285599999999,
    lng: -73.8615131
  }, {
    lat: 40.83306699999999,
    lng: -73.861599
  }, {
    lat: 40.833408,
    lng: -73.8614702
  }, {
    lat: 40.8330021,
    lng: -73.8627362
  }, {
    lat: 40.832839699999994,
    lng: -73.8627148
  }, {
    lat: 40.8241858,
    lng: -73.8587666
  }, {
    lat: 40.8219937,
    lng: -73.858273
  }, {
    lat: 40.814751099999995,
    lng: -73.8566208
  }, {
    lat: 40.814166500000006,
    lng: -73.8554084
  }, {
    lat: 40.81437760000001,
    lng: -73.8553548
  }, {
    lat: 40.8144669,
    lng: -73.8552475
  }, {
    lat: 40.8140772,
    lng: -73.854754
  }, {
    lat: 40.8138336,
    lng: -73.8541961
  }, {
    lat: 40.81359809999999,
    lng: -73.8536167
  }, {
    lat: 40.81362250000001,
    lng: -73.8534665
  }, {
    lat: 40.8136793,
    lng: -73.8530052
  }, {
    lat: 40.8138417,
    lng: -73.8529193
  }, {
    lat: 40.8139554,
    lng: -73.8526511
  }, {
    lat: 40.8142315,
    lng: -73.8525867
  }, {
    lat: 40.81428019999999,
    lng: -73.8523936
  }, {
    lat: 40.81431270000001,
    lng: -73.8518357
  }, {
    lat: 40.814231500000005,
    lng: -73.8515246
  }, {
    lat: 40.8141097,
    lng: -73.8514173
  }, {
    lat: 40.8140203,
    lng: -73.8511169
  }, {
    lat: 40.81404469999999,
    lng: -73.8508058
  }, {
    lat: 40.8139554,
    lng: -73.8505912
  }, {
    lat: 40.8135413,
    lng: -73.850441
  }, {
    lat: 40.8134926,
    lng: -73.8501513
  }, {
    lat: 40.8134032,
    lng: -73.850044
  }, {
    lat: 40.812916,
    lng: -73.8487887
  }, {
    lat: 40.8125181,
    lng: -73.8482738
  }, {
    lat: 40.8123639,
    lng: -73.848145
  }, {
    lat: 40.8113813,
    lng: -73.8476944
  }, {
    lat: 40.8106667,
    lng: -73.8473618
  }, {
    lat: 40.8105287,
    lng: -73.8469756
  }],
  color: 'B7DBAB',
  center: {
    lat: 40.82313725,
    lng: -73.85111689999997
  }
}, {
  name: 'Unionport',
  borough: 'Bronx',
  coords: [{
    lat: 40.8277254,
    lng: -73.8424373
  }, {
    lat: 40.8291705,
    lng: -73.8429308
  }, {
    lat: 40.830031,
    lng: -73.8430166
  }, {
    lat: 40.83139479999999,
    lng: -73.8422441
  }, {
    lat: 40.833408,
    lng: -73.83977650000001
  }, {
    lat: 40.8339762,
    lng: -73.8394976
  }, {
    lat: 40.8349503,
    lng: -73.839519
  }, {
    lat: 40.8357458,
    lng: -73.8397121
  }, {
    lat: 40.8344308,
    lng: -73.8491964
  }, {
    lat: 40.8341873,
    lng: -73.8516855
  }, {
    lat: 40.8332456,
    lng: -73.8603759
  }, {
    lat: 40.832937199999996,
    lng: -73.8603759
  }, {
    lat: 40.8327099,
    lng: -73.8606334
  }, {
    lat: 40.8326449,
    lng: -73.8610625
  }, {
    lat: 40.83285599999999,
    lng: -73.8615131
  }, {
    lat: 40.83306699999999,
    lng: -73.861599
  }, {
    lat: 40.833408,
    lng: -73.8614702
  }, {
    lat: 40.8330021,
    lng: -73.8627362
  }, {
    lat: 40.832839699999994,
    lng: -73.8627148
  }, {
    lat: 40.8241858,
    lng: -73.8587666
  }, {
    lat: 40.8219937,
    lng: -73.858273
  }, {
    lat: 40.82431569999999,
    lng: -73.8409352
  }, {
    lat: 40.8277254,
    lng: -73.8424373
  }],
  color: 'EE9C96',
  center: {
    lat: 40.828869749999996,
    lng: -73.85111689999997
  }
}, {
  name: 'Westchester Square',
  borough: 'Bronx',
  coords: [{
    lat: 40.8424504,
    lng: -73.8533378
  }, {
    lat: 40.8350802,
    lng: -73.8519859
  }, {
    lat: 40.8341873,
    lng: -73.8516855
  }, {
    lat: 40.8357458,
    lng: -73.8397121
  }, {
    lat: 40.8362815,
    lng: -73.8397551
  }, {
    lat: 40.8383271,
    lng: -73.8399053
  }, {
    lat: 40.8387329,
    lng: -73.840034
  }, {
    lat: 40.8395121,
    lng: -73.8402271
  }, {
    lat: 40.8406647,
    lng: -73.8420296
  }, {
    lat: 40.841314,
    lng: -73.840785
  }, {
    lat: 40.8457456,
    lng: -73.8448191
  }, {
    lat: 40.845356,
    lng: -73.8449693
  }, {
    lat: 40.8430672,
    lng: -73.8480592
  }, {
    lat: 40.8424504,
    lng: -73.8533378
  }],
  color: '009D57',
  center: {
    lat: 40.839966450000006,
    lng: -73.84652495
  }
}, {
  name: 'Morris Park',
  borough: 'Bronx',
  coords: [{
    lat: 40.8508423,
    lng: -73.8621354
  }, {
    lat: 40.8487647,
    lng: -73.8617277
  }, {
    lat: 40.8483427,
    lng: -73.8606334
  }, {
    lat: 40.8480667,
    lng: -73.8602686
  }, {
    lat: 40.84374900000001,
    lng: -73.8574791
  }, {
    lat: 40.842937299999996,
    lng: -73.855226
  }, {
    lat: 40.84446319999999,
    lng: -73.84969
  }, {
    lat: 40.84524239999999,
    lng: -73.8480377
  }, {
    lat: 40.8460215,
    lng: -73.8468575
  }, {
    lat: 40.8466221,
    lng: -73.846128
  }, {
    lat: 40.84879709999999,
    lng: -73.8444328
  }, {
    lat: 40.8533905,
    lng: -73.8412786
  }, {
    lat: 40.854137099999996,
    lng: -73.840549
  }, {
    lat: 40.85473760000001,
    lng: -73.839798
  }, {
    lat: 40.8553381,
    lng: -73.8387251
  }, {
    lat: 40.8564741,
    lng: -73.8354421
  }, {
    lat: 40.857707600000005,
    lng: -73.843596
  }, {
    lat: 40.8580322,
    lng: -73.8464928
  }, {
    lat: 40.8580971,
    lng: -73.8493896
  }, {
    lat: 40.8575453,
    lng: -73.8564277
  }, {
    lat: 40.857383,
    lng: -73.8617277
  }, {
    lat: 40.85691229999999,
    lng: -73.8617063
  }, {
    lat: 40.8568961,
    lng: -73.8619852
  }, {
    lat: 40.8508423,
    lng: -73.8621354
  }],
  color: '777777',
  center: {
    lat: 40.8505172,
    lng: -73.84878875000004
  }
}, {
  name: 'Pelham Bay',
  borough: 'Bronx',
  coords: [{
    lat: 40.855971000000004,
    lng: -73.8319659
  }, {
    lat: 40.8560522,
    lng: -73.8328242
  }, {
    lat: 40.8547863,
    lng: -73.8342619
  }, {
    lat: 40.8537313,
    lng: -73.8350987
  }, {
    lat: 40.8524491,
    lng: -73.8357639
  }, {
    lat: 40.8510046,
    lng: -73.8361716
  }, {
    lat: 40.84680060000001,
    lng: -73.8365793
  }, {
    lat: 40.8453235,
    lng: -73.8368797
  }, {
    lat: 40.843440599999994,
    lng: -73.8375664
  }, {
    lat: 40.8435055,
    lng: -73.8328671
  }, {
    lat: 40.8438301,
    lng: -73.8304424
  }, {
    lat: 40.8447067,
    lng: -73.8275671
  }, {
    lat: 40.84524239999999,
    lng: -73.826344
  }, {
    lat: 40.845291100000004,
    lng: -73.8257647
  }, {
    lat: 40.845891699999996,
    lng: -73.8258505
  }, {
    lat: 40.8488134,
    lng: -73.8272667
  }, {
    lat: 40.8502417,
    lng: -73.8273525
  }, {
    lat: 40.853260600000006,
    lng: -73.8263226
  }, {
    lat: 40.8543967,
    lng: -73.82619380000001
  }, {
    lat: 40.8565878,
    lng: -73.8264728
  }, {
    lat: 40.855971000000004,
    lng: -73.8319659
  }],
  color: '3F5BA9',
  center: {
    lat: 40.8500142,
    lng: -73.83166555000003
  }
}, {
  name: 'Throggs Neck',
  borough: 'Bronx',
  coords: [{
    lat: 40.833619,
    lng: -73.8389611
  }, {
    lat: 40.8332862,
    lng: -73.8391435
  }, {
    lat: 40.8328235,
    lng: -73.8397014
  }, {
    lat: 40.8324988,
    lng: -73.8399589
  }, {
    lat: 40.8318332,
    lng: -73.8408065
  }, {
    lat: 40.83082100464161,
    lng: -73.84190634077625
  }, {
    lat: 40.8307372,
    lng: -73.8419974
  }, {
    lat: 40.829901099999994,
    lng: -73.84233
  }, {
    lat: 40.8294384,
    lng: -73.8424051
  }, {
    lat: 40.8291786,
    lng: -73.8424265
  }, {
    lat: 40.8279852,
    lng: -73.8420832
  }, {
    lat: 40.82777207813792,
    lng: -73.84190634077625
  }, {
    lat: 40.8276361,
    lng: -73.8417935
  }, {
    lat: 40.8265239,
    lng: -73.8412142
  }, {
    lat: 40.8259881,
    lng: -73.8410532
  }, {
    lat: 40.8258014,
    lng: -73.8409138
  }, {
    lat: 40.82453490000001,
    lng: -73.8402379
  }, {
    lat: 40.82434,
    lng: -73.8403022
  }, {
    lat: 40.8240071,
    lng: -73.8397551
  }, {
    lat: 40.82370679999999,
    lng: -73.8396692
  }, {
    lat: 40.8231466,
    lng: -73.8395405
  }, {
    lat: 40.8230491,
    lng: -73.83968
  }, {
    lat: 40.8229192,
    lng: -73.839637
  }, {
    lat: 40.8228705,
    lng: -73.8394761
  }, {
    lat: 40.822838,
    lng: -73.8392401
  }, {
    lat: 40.8226107,
    lng: -73.8390899
  }, {
    lat: 40.8224889,
    lng: -73.8391006
  }, {
    lat: 40.8221723,
    lng: -73.839004
  }, {
    lat: 40.8220261,
    lng: -73.8390362
  }, {
    lat: 40.821401,
    lng: -73.8389933
  }, {
    lat: 40.8198502,
    lng: -73.8391113
  }, {
    lat: 40.8197772,
    lng: -73.8390148
  }, {
    lat: 40.8197284,
    lng: -73.8388216
  }, {
    lat: 40.8195823,
    lng: -73.83871440000001
  }, {
    lat: 40.8190545,
    lng: -73.8388753
  }, {
    lat: 40.818957100000006,
    lng: -73.8392186
  }, {
    lat: 40.8185998,
    lng: -73.8394868
  }, {
    lat: 40.8179341,
    lng: -73.8400233
  }, {
    lat: 40.817235800000006,
    lng: -73.8402808
  }, {
    lat: 40.816846,
    lng: -73.8400662
  }, {
    lat: 40.8166349,
    lng: -73.84009840000002
  }, {
    lat: 40.8164238,
    lng: -73.83977650000001
  }, {
    lat: 40.8162533,
    lng: -73.83977650000001
  }, {
    lat: 40.8158717,
    lng: -73.8395298
  }, {
    lat: 40.815449400000006,
    lng: -73.83960490000001
  }, {
    lat: 40.8146862,
    lng: -73.8395298
  }, {
    lat: 40.8140041,
    lng: -73.83968
  }, {
    lat: 40.813452,
    lng: -73.8402164
  }, {
    lat: 40.81312710000001,
    lng: -73.840431
  }, {
    lat: 40.81251,
    lng: -73.8404632
  }, {
    lat: 40.81172240000001,
    lng: -73.8404953
  }, {
    lat: 40.8111864,
    lng: -73.8403881
  }, {
    lat: 40.81060990000001,
    lng: -73.8401091
  }, {
    lat: 40.8097654,
    lng: -73.8394332
  }, {
    lat: 40.8096192,
    lng: -73.8393474
  }, {
    lat: 40.80938369999999,
    lng: -73.8393688
  }, {
    lat: 40.8090832,
    lng: -73.8390577
  }, {
    lat: 40.8087746,
    lng: -73.8389075
  }, {
    lat: 40.8081575,
    lng: -73.8385534
  }, {
    lat: 40.807808300000005,
    lng: -73.838253
  }, {
    lat: 40.8068582,
    lng: -73.8380921
  }, {
    lat: 40.8063871,
    lng: -73.8376522
  }, {
    lat: 40.805973,
    lng: -73.8374484
  }, {
    lat: 40.80581870000001,
    lng: -73.8372123
  }, {
    lat: 40.8057212,
    lng: -73.8365042
  }, {
    lat: 40.8055507,
    lng: -73.8357425
  }, {
    lat: 40.8049173,
    lng: -73.834337
  }, {
    lat: 40.804966,
    lng: -73.8340688
  }, {
    lat: 40.8047629,
    lng: -73.8325989
  }, {
    lat: 40.8047386,
    lng: -73.8318586
  }, {
    lat: 40.804868500000005,
    lng: -73.8314617
  }, {
    lat: 40.8050878,
    lng: -73.8313329
  }, {
    lat: 40.8061354,
    lng: -73.8316333
  }, {
    lat: 40.806647,
    lng: -73.8315368
  }, {
    lat: 40.8069394,
    lng: -73.8319123
  }, {
    lat: 40.8075241,
    lng: -73.8320947
  }, {
    lat: 40.808060000000005,
    lng: -73.8321483
  }, {
    lat: 40.8092781,
    lng: -73.8318372
  }, {
    lat: 40.810090200000005,
    lng: -73.8311291
  }, {
    lat: 40.8107966,
    lng: -73.8302064
  }, {
    lat: 40.8111783,
    lng: -73.8293052
  }, {
    lat: 40.811381299999994,
    lng: -73.828522
  }, {
    lat: 40.81147060000001,
    lng: -73.827492
  }, {
    lat: 40.8113813,
    lng: -73.8272774
  }, {
    lat: 40.8112595,
    lng: -73.82619380000001
  }, {
    lat: 40.811381299999994,
    lng: -73.8260329
  }, {
    lat: 40.81181980000001,
    lng: -73.8250566
  }, {
    lat: 40.811901,
    lng: -73.8245952
  }, {
    lat: 40.81211210000001,
    lng: -73.8241446
  }, {
    lat: 40.81251,
    lng: -73.8226211
  }, {
    lat: 40.8127536,
    lng: -73.8217521
  }, {
    lat: 40.8128429,
    lng: -73.8212371
  }, {
    lat: 40.8129485,
    lng: -73.8211513
  }, {
    lat: 40.81300530000001,
    lng: -73.8206363
  }, {
    lat: 40.81294040000001,
    lng: -73.8204324
  }, {
    lat: 40.8128348,
    lng: -73.8204324
  }, {
    lat: 40.8128511,
    lng: -73.8200998
  }, {
    lat: 40.81307840000001,
    lng: -73.8200569
  }, {
    lat: 40.8133789,
    lng: -73.818748
  }, {
    lat: 40.813452,
    lng: -73.8181472
  }, {
    lat: 40.8135413,
    lng: -73.8179111
  }, {
    lat: 40.8135007,
    lng: -73.81769660000002
  }, {
    lat: 40.8136956,
    lng: -73.8168061
  }, {
    lat: 40.8138336,
    lng: -73.8162696
  }, {
    lat: 40.8137199,
    lng: -73.8159156
  }, {
    lat: 40.8134682,
    lng: -73.8157225
  }, {
    lat: 40.813525,
    lng: -73.8139522
  }, {
    lat: 40.8134438,
    lng: -73.81371620000002
  }, {
    lat: 40.8133301,
    lng: -73.8136518
  }, {
    lat: 40.8132977,
    lng: -73.8135445
  }, {
    lat: 40.8133545,
    lng: -73.813287
  }, {
    lat: 40.8130865,
    lng: -73.8126433
  }, {
    lat: 40.81296470000001,
    lng: -73.8118494
  }, {
    lat: 40.8129972,
    lng: -73.8117421
  }, {
    lat: 40.8129647,
    lng: -73.8113129
  }, {
    lat: 40.8128511,
    lng: -73.811034
  }, {
    lat: 40.812851099999996,
    lng: -73.8108838
  }, {
    lat: 40.8127536,
    lng: -73.81083010000002
  }, {
    lat: 40.812745500000005,
    lng: -73.81065850000002
  }, {
    lat: 40.81286729999999,
    lng: -73.8106263
  }, {
    lat: 40.812964699999995,
    lng: -73.810401
  }, {
    lat: 40.81294040000001,
    lng: -73.8100791
  }, {
    lat: 40.8125831,
    lng: -73.8092852
  }, {
    lat: 40.8120472,
    lng: -73.8085341
  }, {
    lat: 40.81164119999999,
    lng: -73.808105
  }, {
    lat: 40.8105043,
    lng: -73.8069248
  }, {
    lat: 40.8093756,
    lng: -73.8049936
  }, {
    lat: 40.808790900000005,
    lng: -73.8040924
  }, {
    lat: 40.8085473,
    lng: -73.8040066
  }, {
    lat: 40.8084661,
    lng: -73.8038242
  }, {
    lat: 40.8085148,
    lng: -73.8036954
  }, {
    lat: 40.8089371,
    lng: -73.8035452
  }, {
    lat: 40.8091482,
    lng: -73.8032019
  }, {
    lat: 40.8091726,
    lng: -73.802762
  }, {
    lat: 40.80909140000001,
    lng: -73.8022792
  }, {
    lat: 40.80897770000001,
    lng: -73.8018823
  }, {
    lat: 40.8086691,
    lng: -73.8013887
  }, {
    lat: 40.8080357,
    lng: -73.8002408
  }, {
    lat: 40.80683379999999,
    lng: -73.7984276
  }, {
    lat: 40.8065171,
    lng: -73.7977302
  }, {
    lat: 40.8062978,
    lng: -73.7970543
  }, {
    lat: 40.806297799999996,
    lng: -73.7966895
  }, {
    lat: 40.8062329,
    lng: -73.7964427
  }, {
    lat: 40.8060948,
    lng: -73.7965071
  }, {
    lat: 40.805916100000005,
    lng: -73.7960136
  }, {
    lat: 40.8061192,
    lng: -73.7958205
  }, {
    lat: 40.806021699999995,
    lng: -73.7956059
  }, {
    lat: 40.80549380000001,
    lng: -73.7949514
  }, {
    lat: 40.8050147,
    lng: -73.79465100000002
  }, {
    lat: 40.804787299999994,
    lng: -73.7939429
  }, {
    lat: 40.8043244,
    lng: -73.7937927
  }, {
    lat: 40.804105099999994,
    lng: -73.7928593
  }, {
    lat: 40.8039752,
    lng: -73.7923551
  }, {
    lat: 40.80389400000001,
    lng: -73.7921727
  }, {
    lat: 40.8040808,
    lng: -73.7918723
  }, {
    lat: 40.8041133,
    lng: -73.7908316
  }, {
    lat: 40.80468989999999,
    lng: -73.7902844
  }, {
    lat: 40.80514459999999,
    lng: -73.7900913
  }, {
    lat: 40.8055507,
    lng: -73.7900269
  }, {
    lat: 40.80594049999999,
    lng: -73.7901449
  }, {
    lat: 40.8063871,
    lng: -73.7904668
  }, {
    lat: 40.8065739,
    lng: -73.7907994
  }, {
    lat: 40.806712,
    lng: -73.7908101
  }, {
    lat: 40.8069231,
    lng: -73.7907565
  }, {
    lat: 40.80719919999999,
    lng: -73.79077790000001
  }, {
    lat: 40.80734540000001,
    lng: -73.7908852
  }, {
    lat: 40.8075403,
    lng: -73.7915182
  }, {
    lat: 40.8074185,
    lng: -73.791604
  }, {
    lat: 40.8072561,
    lng: -73.7912929
  }, {
    lat: 40.8070937,
    lng: -73.7912071
  }, {
    lat: 40.8068663,
    lng: -73.7914217
  }, {
    lat: 40.80680939999999,
    lng: -73.7922692
  }, {
    lat: 40.80956230000001,
    lng: -73.7985134
  }, {
    lat: 40.8095867,
    lng: -73.8000369
  }, {
    lat: 40.8101145,
    lng: -73.8014531
  }, {
    lat: 40.8105043,
    lng: -73.8012278
  }, {
    lat: 40.810618,
    lng: -73.8014853
  }, {
    lat: 40.810244499999996,
    lng: -73.802011
  }, {
    lat: 40.8101795,
    lng: -73.8021934
  }, {
    lat: 40.8102769,
    lng: -73.8024616
  }, {
    lat: 40.8104312,
    lng: -73.8026547
  }, {
    lat: 40.8108779,
    lng: -73.8030195
  }, {
    lat: 40.8115762,
    lng: -73.8033736
  }, {
    lat: 40.812120300000004,
    lng: -73.80391
  }, {
    lat: 40.8120715,
    lng: -73.804028
  }, {
    lat: 40.8121446,
    lng: -73.8040924
  }, {
    lat: 40.8119984,
    lng: -73.8044143
  }, {
    lat: 40.812104,
    lng: -73.8045967
  }, {
    lat: 40.8119984,
    lng: -73.8048542
  }, {
    lat: 40.8122258,
    lng: -73.8050473
  }, {
    lat: 40.8124532,
    lng: -73.8051009
  }, {
    lat: 40.8125181,
    lng: -73.8049293
  }, {
    lat: 40.8133626,
    lng: -73.8054013
  }, {
    lat: 40.813728000000005,
    lng: -73.8053584
  }, {
    lat: 40.8144507,
    lng: -73.805337
  }, {
    lat: 40.81455629999999,
    lng: -73.8054872
  }, {
    lat: 40.8147105,
    lng: -73.8054228
  }, {
    lat: 40.815092199999995,
    lng: -73.8058627
  }, {
    lat: 40.815214,
    lng: -73.8061309
  }, {
    lat: 40.815368199999995,
    lng: -73.8062596
  }, {
    lat: 40.81549,
    lng: -73.806603
  }, {
    lat: 40.816464399999994,
    lng: -73.8070321
  }, {
    lat: 40.816545600000005,
    lng: -73.8069999
  }, {
    lat: 40.8166512,
    lng: -73.8066459
  }, {
    lat: 40.8165862,
    lng: -73.8065064
  }, {
    lat: 40.8162939,
    lng: -73.8063455
  }, {
    lat: 40.8160665,
    lng: -73.80597
  }, {
    lat: 40.8156524,
    lng: -73.8051224
  }, {
    lat: 40.8150516,
    lng: -73.8045216
  }, {
    lat: 40.8147024,
    lng: -73.8043392
  }, {
    lat: 40.81451570000001,
    lng: -73.8039637
  }, {
    lat: 40.8142802,
    lng: -73.8038349
  }, {
    lat: 40.8138904,
    lng: -73.803395
  }, {
    lat: 40.8134926,
    lng: -73.803159
  }, {
    lat: 40.8131677,
    lng: -73.8031697
  }, {
    lat: 40.8129972,
    lng: -73.8032877
  }, {
    lat: 40.8130216,
    lng: -73.8034058
  }, {
    lat: 40.8128917,
    lng: -73.8035238
  }, {
    lat: 40.8128267,
    lng: -73.8033736
  }, {
    lat: 40.8126805,
    lng: -73.8034809
  }, {
    lat: 40.812575,
    lng: -73.8033199
  }, {
    lat: 40.8124694,
    lng: -73.8032234
  }, {
    lat: 40.81244509999999,
    lng: -73.8028908
  }, {
    lat: 40.8125912,
    lng: -73.8024187
  }, {
    lat: 40.8127861,
    lng: -73.8022363
  }, {
    lat: 40.8128917,
    lng: -73.8015282
  }, {
    lat: 40.8133383,
    lng: -73.8015711
  }, {
    lat: 40.813525000000006,
    lng: -73.801496
  }, {
    lat: 40.8139554,
    lng: -73.8007665
  }, {
    lat: 40.8139229,
    lng: -73.8006806
  }, {
    lat: 40.8140691,
    lng: -73.800509
  }, {
    lat: 40.814134,
    lng: -73.8004768
  }, {
    lat: 40.8145887,
    lng: -73.7999511
  }, {
    lat: 40.8146375,
    lng: -73.7998331
  }, {
    lat: 40.81470240000001,
    lng: -73.7998974
  }, {
    lat: 40.8155794,
    lng: -73.7991142
  }, {
    lat: 40.81562,
    lng: -73.7989426
  }, {
    lat: 40.8154738,
    lng: -73.7986207
  }, {
    lat: 40.81568490000001,
    lng: -73.7983203
  }, {
    lat: 40.8157905,
    lng: -73.7981486
  }, {
    lat: 40.8156118,
    lng: -73.7977517
  }, {
    lat: 40.81564430000001,
    lng: -73.7976229
  }, {
    lat: 40.8158879,
    lng: -73.7980628
  }, {
    lat: 40.8160341,
    lng: -73.7981057
  }, {
    lat: 40.8163751,
    lng: -73.7980843
  }, {
    lat: 40.8167811,
    lng: -73.7980843
  }, {
    lat: 40.8168704,
    lng: -73.7985134
  }, {
    lat: 40.817455,
    lng: -73.799994
  }, {
    lat: 40.817714800000005,
    lng: -73.8005304
  }, {
    lat: 40.8179584,
    lng: -73.8006485
  }, {
    lat: 40.8180883,
    lng: -73.8009059
  }, {
    lat: 40.8180477,
    lng: -73.8013029
  }, {
    lat: 40.8182345,
    lng: -73.8022256
  }, {
    lat: 40.8181533,
    lng: -73.8026762
  }, {
    lat: 40.8182832,
    lng: -73.8035882
  }, {
    lat: 40.8187216,
    lng: -73.8043177
  }, {
    lat: 40.8200126,
    lng: -73.8056588
  }, {
    lat: 40.820540400000006,
    lng: -73.80597
  }, {
    lat: 40.820922,
    lng: -73.8060772
  }, {
    lat: 40.82137660000001,
    lng: -73.80595920000002
  }, {
    lat: 40.8216121,
    lng: -73.80578760000002
  }, {
    lat: 40.822018,
    lng: -73.8060021
  }, {
    lat: 40.82244829999999,
    lng: -73.8060343
  }, {
    lat: 40.8228786,
    lng: -73.8064742
  }, {
    lat: 40.8235038,
    lng: -73.8068175
  }, {
    lat: 40.8239666,
    lng: -73.8068926
  }, {
    lat: 40.8243481,
    lng: -73.8068712
  }, {
    lat: 40.82494080000001,
    lng: -73.8069677
  }, {
    lat: 40.82554160000001,
    lng: -73.80759
  }, {
    lat: 40.8256309,
    lng: -73.8079011
  }, {
    lat: 40.8257039,
    lng: -73.8085127
  }, {
    lat: 40.8256228,
    lng: -73.8089633
  }, {
    lat: 40.8250463,
    lng: -73.8098645
  }, {
    lat: 40.824835300000004,
    lng: -73.8104117
  }, {
    lat: 40.8248271,
    lng: -73.8107228
  }, {
    lat: 40.8249976,
    lng: -73.8107657
  }, {
    lat: 40.82502199999999,
    lng: -73.8108838
  }, {
    lat: 40.82467290000001,
    lng: -73.8108408
  }, {
    lat: 40.8242182,
    lng: -73.8120532
  }, {
    lat: 40.8242426,
    lng: -73.8122785
  }, {
    lat: 40.8243725,
    lng: -73.8125038
  }, {
    lat: 40.8245511,
    lng: -73.8125682
  }, {
    lat: 40.8245592,
    lng: -73.8126647
  }, {
    lat: 40.8242913,
    lng: -73.8127935
  }, {
    lat: 40.8241614,
    lng: -73.8131154
  }, {
    lat: 40.8239341,
    lng: -73.8132548
  }, {
    lat: 40.823909699999994,
    lng: -73.8135552
  }, {
    lat: 40.8240802,
    lng: -73.81392
  }, {
    lat: 40.824266900000005,
    lng: -73.8140488
  }, {
    lat: 40.8244699,
    lng: -73.8140059
  }, {
    lat: 40.82459980000001,
    lng: -73.8137698
  }, {
    lat: 40.8247784,
    lng: -73.8138342
  }, {
    lat: 40.8250382,
    lng: -73.8130403
  }, {
    lat: 40.8251762,
    lng: -73.8131368
  }, {
    lat: 40.8252412,
    lng: -73.8134694
  }, {
    lat: 40.8252493,
    lng: -73.81388780000002
  }, {
    lat: 40.82535479999999,
    lng: -73.8139415
  }, {
    lat: 40.82550909999999,
    lng: -73.8137698
  }, {
    lat: 40.8256552,
    lng: -73.8138449
  }, {
    lat: 40.8256634,
    lng: -73.8139844
  }, {
    lat: 40.8259719,
    lng: -73.81420970000002
  }, {
    lat: 40.82608549999999,
    lng: -73.8139415
  }, {
    lat: 40.8262316,
    lng: -73.8140488
  }, {
    lat: 40.8264103,
    lng: -73.8137805
  }, {
    lat: 40.82675929999999,
    lng: -73.814038
  }, {
    lat: 40.8268405,
    lng: -73.8138235
  }, {
    lat: 40.827011,
    lng: -73.8138449
  }, {
    lat: 40.8271734,
    lng: -73.8134801
  }, {
    lat: 40.827425,
    lng: -73.8133299
  }, {
    lat: 40.8275631,
    lng: -73.8129652
  }, {
    lat: 40.8277417,
    lng: -73.8129008
  }, {
    lat: 40.8277823,
    lng: -73.8127613
  }, {
    lat: 40.8279852,
    lng: -73.8127398
  }, {
    lat: 40.8279933,
    lng: -73.8120854
  }, {
    lat: 40.8280664,
    lng: -73.8120103
  }, {
    lat: 40.8281476,
    lng: -73.8103259
  }, {
    lat: 40.82797709999999,
    lng: -73.8101435
  }, {
    lat: 40.8280664,
    lng: -73.8098752
  }, {
    lat: 40.82826120000001,
    lng: -73.809886
  }, {
    lat: 40.8283586,
    lng: -73.8115168
  }, {
    lat: 40.828245,
    lng: -73.8129759
  }, {
    lat: 40.828245,
    lng: -73.813169
  }, {
    lat: 40.8286509,
    lng: -73.8133621
  }, {
    lat: 40.82881329999999,
    lng: -73.8132548
  }, {
    lat: 40.8289269,
    lng: -73.8133407
  }, {
    lat: 40.828829500000005,
    lng: -73.8135338
  }, {
    lat: 40.8295764,
    lng: -73.8139629
  }, {
    lat: 40.8302258,
    lng: -73.8141346
  }, {
    lat: 40.8304693,
    lng: -73.814435
  }, {
    lat: 40.8316383,
    lng: -73.81542210000002
  }, {
    lat: 40.8320604,
    lng: -73.815465
  }, {
    lat: 40.8332943,
    lng: -73.8161087
  }, {
    lat: 40.8337002,
    lng: -73.8160229
  }, {
    lat: 40.8343821,
    lng: -73.8161087
  }, {
    lat: 40.8345931,
    lng: -73.8162374
  }, {
    lat: 40.8356484,
    lng: -73.8163233
  }, {
    lat: 40.835827,
    lng: -73.8161516
  }, {
    lat: 40.8359893,
    lng: -73.8163018
  }, {
    lat: 40.8344957,
    lng: -73.8224816
  }, {
    lat: 40.83439829999999,
    lng: -73.8231897
  }, {
    lat: 40.8364926,
    lng: -73.8249063
  }, {
    lat: 40.8350964,
    lng: -73.8250995
  }, {
    lat: 40.8342847,
    lng: -73.8259578
  }, {
    lat: 40.8329859,
    lng: -73.8285542
  }, {
    lat: 40.8320442,
    lng: -73.8300133
  }, {
    lat: 40.8301933,
    lng: -73.8330817
  }, {
    lat: 40.8297387,
    lng: -73.8347983
  }, {
    lat: 40.8293328,
    lng: -73.83782390000002
  }, {
    lat: 40.833619,
    lng: -73.8389611
  }],
  color: 'C6A4CF',
  center: {
    lat: 40.8201933,
    lng: -73.81622670000002
  }
}, {
  name: 'Schuylerville',
  borough: 'Bronx',
  coords: [{
    lat: 40.8388303,
    lng: -73.8255501
  }, {
    lat: 40.845291100000004,
    lng: -73.8257647
  }, {
    lat: 40.84524239999999,
    lng: -73.826344
  }, {
    lat: 40.8447067,
    lng: -73.8275671
  }, {
    lat: 40.8438301,
    lng: -73.8304424
  }, {
    lat: 40.8435055,
    lng: -73.8328671
  }, {
    lat: 40.843440599999994,
    lng: -73.8375664
  }, {
    lat: 40.84290490000001,
    lng: -73.8376737
  }, {
    lat: 40.841314,
    lng: -73.840785
  }, {
    lat: 40.8406647,
    lng: -73.8420296
  }, {
    lat: 40.8395121,
    lng: -73.8402271
  }, {
    lat: 40.8395284,
    lng: -73.8397121
  }, {
    lat: 40.8387654,
    lng: -73.8395619
  }, {
    lat: 40.838619300000005,
    lng: -73.8394117
  }, {
    lat: 40.8383271,
    lng: -73.8392615
  }, {
    lat: 40.83730429999999,
    lng: -73.8393044
  }, {
    lat: 40.8340574,
    lng: -73.8389826
  }, {
    lat: 40.833619,
    lng: -73.8389611
  }, {
    lat: 40.8293328,
    lng: -73.83782390000002
  }, {
    lat: 40.8297387,
    lng: -73.8347983
  }, {
    lat: 40.8301933,
    lng: -73.8330817
  }, {
    lat: 40.8329859,
    lng: -73.8285542
  }, {
    lat: 40.8342847,
    lng: -73.8259578
  }, {
    lat: 40.8350964,
    lng: -73.8250995
  }, {
    lat: 40.8364926,
    lng: -73.8249063
  }, {
    lat: 40.8388303,
    lng: -73.8255501
  }],
  color: '0BA9CC',
  center: {
    lat: 40.83731195,
    lng: -73.83346795
  }
}, {
  name: 'Country Club',
  borough: 'Bronx',
  coords: [{
    lat: 40.8475798,
    lng: -73.8160443
  }, {
    lat: 40.84772590000001,
    lng: -73.8161087
  }, {
    lat: 40.8476934,
    lng: -73.8163447
  }, {
    lat: 40.8485861,
    lng: -73.8163018
  }, {
    lat: 40.8480018,
    lng: -73.8201427
  }, {
    lat: 40.84853739999999,
    lng: -73.8205075
  }, {
    lat: 40.845875400000004,
    lng: -73.8254857
  }, {
    lat: 40.845891699999996,
    lng: -73.8258505
  }, {
    lat: 40.845291100000004,
    lng: -73.8257647
  }, {
    lat: 40.8388303,
    lng: -73.8255501
  }, {
    lat: 40.8364926,
    lng: -73.8249063
  }, {
    lat: 40.83439829999999,
    lng: -73.8231897
  }, {
    lat: 40.8344957,
    lng: -73.8224816
  }, {
    lat: 40.8359893,
    lng: -73.8163018
  }, {
    lat: 40.8370446,
    lng: -73.8166022
  }, {
    lat: 40.83785629999999,
    lng: -73.81655930000001
  }, {
    lat: 40.8385706,
    lng: -73.8161945
  }, {
    lat: 40.8387654,
    lng: -73.81598
  }, {
    lat: 40.83879780000001,
    lng: -73.8155937
  }, {
    lat: 40.8390251,
    lng: -73.8154435
  }, {
    lat: 40.8390251,
    lng: -73.8150573
  }, {
    lat: 40.8392849,
    lng: -73.8147569
  }, {
    lat: 40.840567300000004,
    lng: -73.81510020000002
  }, {
    lat: 40.84068090000001,
    lng: -73.8153577
  }, {
    lat: 40.8409407,
    lng: -73.8154006
  }, {
    lat: 40.84102180000001,
    lng: -73.815186
  }, {
    lat: 40.8412978,
    lng: -73.8152075
  }, {
    lat: 40.8412978,
    lng: -73.8155508
  }, {
    lat: 40.84196339999999,
    lng: -73.8158298
  }, {
    lat: 40.8422556,
    lng: -73.8156366
  }, {
    lat: 40.8424017,
    lng: -73.8158727
  }, {
    lat: 40.842612700000004,
    lng: -73.8159156
  }, {
    lat: 40.84287239999999,
    lng: -73.8163018
  }, {
    lat: 40.8430672,
    lng: -73.8163018
  }, {
    lat: 40.843538,
    lng: -73.8167739
  }, {
    lat: 40.84371649999999,
    lng: -73.816731
  }, {
    lat: 40.8437814,
    lng: -73.8169026
  }, {
    lat: 40.843684,
    lng: -73.8171816
  }, {
    lat: 40.844057400000004,
    lng: -73.8173532
  }, {
    lat: 40.8441223,
    lng: -73.8179111
  }, {
    lat: 40.8440412,
    lng: -73.818233
  }, {
    lat: 40.8442197,
    lng: -73.8181472
  }, {
    lat: 40.8444957,
    lng: -73.8180184
  }, {
    lat: 40.84451190000001,
    lng: -73.817246
  }, {
    lat: 40.844236,
    lng: -73.81688120000001
  }, {
    lat: 40.8442197,
    lng: -73.8165164
  }, {
    lat: 40.8440736,
    lng: -73.8162374
  }, {
    lat: 40.844154800000005,
    lng: -73.8160014
  }, {
    lat: 40.8443496,
    lng: -73.8161731
  }, {
    lat: 40.844381999999996,
    lng: -73.8157868
  }, {
    lat: 40.8446093,
    lng: -73.8160443
  }, {
    lat: 40.8446255,
    lng: -73.8155723
  }, {
    lat: 40.8442684,
    lng: -73.8154006
  }, {
    lat: 40.844057400000004,
    lng: -73.8150573
  }, {
    lat: 40.8436191,
    lng: -73.8148856
  }, {
    lat: 40.84348930000001,
    lng: -73.8145423
  }, {
    lat: 40.843684,
    lng: -73.8133192
  }, {
    lat: 40.844236,
    lng: -73.8132548
  }, {
    lat: 40.8444957,
    lng: -73.8134909
  }, {
    lat: 40.84460930000001,
    lng: -73.8139629
  }, {
    lat: 40.8447392,
    lng: -73.8140917
  }, {
    lat: 40.84508,
    lng: -73.8138986
  }, {
    lat: 40.8451287,
    lng: -73.8135552
  }, {
    lat: 40.84525860000001,
    lng: -73.8134265
  }, {
    lat: 40.8453398,
    lng: -73.8137484
  }, {
    lat: 40.8456157,
    lng: -73.81392
  }, {
    lat: 40.8461514,
    lng: -73.8132548
  }, {
    lat: 40.846265,
    lng: -73.8132763
  }, {
    lat: 40.8459566,
    lng: -73.8138127
  }, {
    lat: 40.845940399999996,
    lng: -73.8140488
  }, {
    lat: 40.846054,
    lng: -73.8141775
  }, {
    lat: 40.845729299999995,
    lng: -73.8146281
  }, {
    lat: 40.846200100000004,
    lng: -73.8144565
  }, {
    lat: 40.8463137,
    lng: -73.8146281
  }, {
    lat: 40.84658960000001,
    lng: -73.81510020000002
  }, {
    lat: 40.8463462,
    lng: -73.8155723
  }, {
    lat: 40.8463624,
    lng: -73.8158727
  }, {
    lat: 40.8466221,
    lng: -73.8160658
  }, {
    lat: 40.846914299999995,
    lng: -73.8161731
  }, {
    lat: 40.8475798,
    lng: -73.8160443
  }],
  color: '795046',
  center: {
    lat: 40.84149219999999,
    lng: -73.81955264999999
  }
}, {
  name: 'Pelham Gardens',
  borough: 'Bronx',
  coords: [{
    lat: 40.8712738,
    lng: -73.8499045
  }, {
    lat: 40.8659515,
    lng: -73.8500118
  }, {
    lat: 40.8657081,
    lng: -73.8500547
  }, {
    lat: 40.86525369999999,
    lng: -73.8500118
  }, {
    lat: 40.8629494,
    lng: -73.8520288
  }, {
    lat: 40.8599796,
    lng: -73.8545609
  }, {
    lat: 40.8596226,
    lng: -73.8546252
  }, {
    lat: 40.8575453,
    lng: -73.8564277
  }, {
    lat: 40.8580971,
    lng: -73.8493896
  }, {
    lat: 40.8580322,
    lng: -73.8464928
  }, {
    lat: 40.8564741,
    lng: -73.8354421
  }, {
    lat: 40.859152,
    lng: -73.8271379
  }, {
    lat: 40.8602393,
    lng: -73.8275671
  }, {
    lat: 40.8611481,
    lng: -73.8283396
  }, {
    lat: 40.862138,
    lng: -73.8292193
  }, {
    lat: 40.8626249,
    lng: -73.8314724
  }, {
    lat: 40.86655189999999,
    lng: -73.8386822
  }, {
    lat: 40.8716632,
    lng: -73.84859560000001
  }, {
    lat: 40.8712738,
    lng: -73.8499045
  }],
  color: '62AF44',
  center: {
    lat: 40.86406865,
    lng: -73.84178280000003
  }
}, {
  name: 'Bronxdale',
  borough: 'Bronx',
  coords: [{
    lat: 40.857285600000004,
    lng: -73.8709974
  }, {
    lat: 40.8567014,
    lng: -73.8709974
  }, {
    lat: 40.857172,
    lng: -73.8692808
  }, {
    lat: 40.85720450000001,
    lng: -73.8687658
  }, {
    lat: 40.857383,
    lng: -73.8617277
  }, {
    lat: 40.8575453,
    lng: -73.8564277
  }, {
    lat: 40.8593305,
    lng: -73.857286
  }, {
    lat: 40.86241389999999,
    lng: -73.857758
  }, {
    lat: 40.8645397,
    lng: -73.8588524
  }, {
    lat: 40.8654971,
    lng: -73.8595819
  }, {
    lat: 40.8655296,
    lng: -73.861599
  }, {
    lat: 40.8713712,
    lng: -73.8613844
  }, {
    lat: 40.8715334,
    lng: -73.8706112
  }, {
    lat: 40.8642963,
    lng: -73.8703537
  }, {
    lat: 40.8612455,
    lng: -73.8705683
  }, {
    lat: 40.857285600000004,
    lng: -73.8709974
  }],
  color: 'F8971B',
  center: {
    lat: 40.8641174,
    lng: -73.86371254999995
  }
}, {
  name: 'Allerton',
  borough: 'Bronx',
  coords: [{
    lat: 40.87829930000001,
    lng: -73.8700962
  }, {
    lat: 40.87661190000001,
    lng: -73.8706112
  }, {
    lat: 40.8758331,
    lng: -73.8703752
  }, {
    lat: 40.8752653,
    lng: -73.8702679
  }, {
    lat: 40.8740971,
    lng: -73.8703752
  }, {
    lat: 40.87215,
    lng: -73.8704181
  }, {
    lat: 40.8715334,
    lng: -73.8706112
  }, {
    lat: 40.8642963,
    lng: -73.8703537
  }, {
    lat: 40.8612455,
    lng: -73.8705683
  }, {
    lat: 40.857285600000004,
    lng: -73.8709974
  }, {
    lat: 40.8567014,
    lng: -73.8709974
  }, {
    lat: 40.857172,
    lng: -73.8692808
  }, {
    lat: 40.85720450000001,
    lng: -73.8687658
  }, {
    lat: 40.857383,
    lng: -73.8617277
  }, {
    lat: 40.8575453,
    lng: -73.8564277
  }, {
    lat: 40.8596226,
    lng: -73.8546252
  }, {
    lat: 40.8599796,
    lng: -73.8545609
  }, {
    lat: 40.86525369999999,
    lng: -73.8500118
  }, {
    lat: 40.8712738,
    lng: -73.8499045
  }, {
    lat: 40.8716632,
    lng: -73.84859560000001
  }, {
    lat: 40.877488,
    lng: -73.8668132
  }, {
    lat: 40.87829930000001,
    lng: -73.8700962
  }],
  color: 'E6EEA3',
  center: {
    lat: 40.86750035,
    lng: -73.85979650000002
  }
}, {
  name: 'Williamsbridge',
  borough: 'Bronx',
  coords: [{
    lat: 40.8868489,
    lng: -73.8654184
  }, {
    lat: 40.8854375,
    lng: -73.8662553
  }, {
    lat: 40.8849022,
    lng: -73.8662767
  }, {
    lat: 40.8842857,
    lng: -73.8660407
  }, {
    lat: 40.8786075,
    lng: -73.8688731
  }, {
    lat: 40.87852639999999,
    lng: -73.8692594
  }, {
    lat: 40.87810460000001,
    lng: -73.8694739
  }, {
    lat: 40.877488,
    lng: -73.8668132
  }, {
    lat: 40.87331830000001,
    lng: -73.8536596
  }, {
    lat: 40.8755086,
    lng: -73.8507414
  }, {
    lat: 40.8773583,
    lng: -73.8453984
  }, {
    lat: 40.8791105,
    lng: -73.8432312
  }, {
    lat: 40.881982,
    lng: -73.8500547
  }, {
    lat: 40.8868489,
    lng: -73.8654184
  }],
  color: 'EE9C96',
  center: {
    lat: 40.880083600000006,
    lng: -73.85635255
  }
}, {
  name: 'Olinville',
  borough: 'Bronx',
  coords: [{
    lat: 40.8715334,
    lng: -73.8706112
  }, {
    lat: 40.8714848,
    lng: -73.8671565
  }, {
    lat: 40.87609270000001,
    lng: -73.8670063
  }, {
    lat: 40.8764821,
    lng: -73.866663
  }, {
    lat: 40.8773258,
    lng: -73.8662982
  }, {
    lat: 40.8856809,
    lng: -73.8616419
  }, {
    lat: 40.8868489,
    lng: -73.8654184
  }, {
    lat: 40.8854375,
    lng: -73.8662553
  }, {
    lat: 40.8849022,
    lng: -73.8662767
  }, {
    lat: 40.8842857,
    lng: -73.8660407
  }, {
    lat: 40.8786075,
    lng: -73.8688731
  }, {
    lat: 40.87852639999999,
    lng: -73.8692594
  }, {
    lat: 40.87810460000001,
    lng: -73.8694739
  }, {
    lat: 40.87829930000001,
    lng: -73.8700962
  }, {
    lat: 40.87661190000001,
    lng: -73.8706112
  }, {
    lat: 40.8758331,
    lng: -73.8703752
  }, {
    lat: 40.8740971,
    lng: -73.8703752
  }, {
    lat: 40.87215,
    lng: -73.8704181
  }, {
    lat: 40.8715334,
    lng: -73.8706112
  }],
  color: 'DB4436',
  center: {
    lat: 40.87916685,
    lng: -73.86612654999999
  }
}, {
  name: 'Baychester',
  borough: 'Bronx',
  coords: [{
    lat: 40.8644261,
    lng: -73.8305283
  }, {
    lat: 40.87005690000001,
    lng: -73.8334036
  }, {
    lat: 40.8716795,
    lng: -73.8339829
  }, {
    lat: 40.8739024,
    lng: -73.8346052
  }, {
    lat: 40.8754113,
    lng: -73.8345194
  }, {
    lat: 40.8791105,
    lng: -73.8432312
  }, {
    lat: 40.8773583,
    lng: -73.8453984
  }, {
    lat: 40.8755086,
    lng: -73.8507414
  }, {
    lat: 40.87331830000001,
    lng: -73.8536596
  }, {
    lat: 40.8716632,
    lng: -73.84859560000001
  }, {
    lat: 40.8626249,
    lng: -73.8314724
  }, {
    lat: 40.862138,
    lng: -73.8292193
  }, {
    lat: 40.8644261,
    lng: -73.8305283
  }],
  color: 'A7B5D7',
  center: {
    lat: 40.870624250000006,
    lng: -73.84143945
  }
}, {
  name: 'Co-Op',
  borough: 'Bronx',
  coords: [{
    lat: 40.8800352,
    lng: -73.8322449
  }, {
    lat: 40.8789726,
    lng: -73.8331783
  }, {
    lat: 40.8781208,
    lng: -73.8337898
  }, {
    lat: 40.8768553,
    lng: -73.8343155
  }, {
    lat: 40.8754113,
    lng: -73.8345194
  }, {
    lat: 40.8739024,
    lng: -73.8346052
  }, {
    lat: 40.87005690000001,
    lng: -73.8334036
  }, {
    lat: 40.868491000000006,
    lng: -73.8326097
  }, {
    lat: 40.8690995,
    lng: -73.8305068
  }, {
    lat: 40.869350999999995,
    lng: -73.8294339
  }, {
    lat: 40.8695376,
    lng: -73.8277709
  }, {
    lat: 40.8694889,
    lng: -73.8261831
  }, {
    lat: 40.8692009,
    lng: -73.8242519
  }, {
    lat: 40.868848,
    lng: -73.8224012
  }, {
    lat: 40.8687141,
    lng: -73.8219103
  }, {
    lat: 40.8684464,
    lng: -73.8214892
  }, {
    lat: 40.8650996,
    lng: -73.8247454
  }, {
    lat: 40.8617242,
    lng: -73.8276315
  }, {
    lat: 40.862138,
    lng: -73.8292193
  }, {
    lat: 40.8602393,
    lng: -73.8275671
  }, {
    lat: 40.859152,
    lng: -73.8271379
  }, {
    lat: 40.86098580000001,
    lng: -73.8217199
  }, {
    lat: 40.8613428,
    lng: -73.820765
  }, {
    lat: 40.8615132,
    lng: -73.8203841
  }, {
    lat: 40.8617648,
    lng: -73.8199255
  }, {
    lat: 40.8624301,
    lng: -73.818984
  }, {
    lat: 40.8625113,
    lng: -73.8190699
  }, {
    lat: 40.8627384,
    lng: -73.8195205
  }, {
    lat: 40.8630549,
    lng: -73.8199818
  }, {
    lat: 40.86320909999999,
    lng: -73.8200247
  }, {
    lat: 40.865245599999994,
    lng: -73.8198423
  }, {
    lat: 40.8663247,
    lng: -73.8199174
  }, {
    lat: 40.8681259,
    lng: -73.8205934
  }, {
    lat: 40.8684099,
    lng: -73.8210547
  }, {
    lat: 40.86966739999999,
    lng: -73.8229215
  }, {
    lat: 40.870065,
    lng: -73.8232648
  }, {
    lat: 40.87024350000001,
    lng: -73.8232756
  }, {
    lat: 40.8705518,
    lng: -73.8235116
  }, {
    lat: 40.87193099999999,
    lng: -73.823694
  }, {
    lat: 40.8747217,
    lng: -73.823576
  }, {
    lat: 40.8750706,
    lng: -73.8236189
  }, {
    lat: 40.875192299999995,
    lng: -73.8233721
  }, {
    lat: 40.875387,
    lng: -73.8232756
  }, {
    lat: 40.8769932,
    lng: -73.822664
  }, {
    lat: 40.8773177,
    lng: -73.8226104
  }, {
    lat: 40.87752050000001,
    lng: -73.8224494
  }, {
    lat: 40.877877399999996,
    lng: -73.8222563
  }, {
    lat: 40.8780802,
    lng: -73.8222778
  }, {
    lat: 40.8780478,
    lng: -73.8221705
  }, {
    lat: 40.8782587,
    lng: -73.8220525
  }, {
    lat: 40.8784453,
    lng: -73.8221705
  }, {
    lat: 40.878567,
    lng: -73.8220096
  }, {
    lat: 40.8786724,
    lng: -73.822031
  }, {
    lat: 40.8786805,
    lng: -73.8217521
  }, {
    lat: 40.8791672,
    lng: -73.821516
  }, {
    lat: 40.879581,
    lng: -73.8214624
  }, {
    lat: 40.879873,
    lng: -73.8215804
  }, {
    lat: 40.8799379,
    lng: -73.82359740000001
  }, {
    lat: 40.878283,
    lng: -73.8288546
  }, {
    lat: 40.878283,
    lng: -73.8297987
  }, {
    lat: 40.8786237,
    lng: -73.83078580000002
  }, {
    lat: 40.8790942,
    lng: -73.83127930000002
  }, {
    lat: 40.8800352,
    lng: -73.8322449
  }],
  color: 'F8971B',
  center: {
    lat: 40.8695936,
    lng: -73.82679459999997
  }
}, {
  name: 'Eastchester',
  borough: 'Bronx',
  coords: [{
    lat: 40.88942,
    lng: -73.8166344
  }, {
    lat: 40.8910827,
    lng: -73.823061
  }, {
    lat: 40.8905798,
    lng: -73.8231897
  }, {
    lat: 40.8898174,
    lng: -73.8229752
  }, {
    lat: 40.889931,
    lng: -73.8223743
  }, {
    lat: 40.889493,
    lng: -73.8224602
  }, {
    lat: 40.8898661,
    lng: -73.8235545
  }, {
    lat: 40.8911476,
    lng: -73.8282108
  }, {
    lat: 40.8912936,
    lng: -73.828361
  }, {
    lat: 40.8925588,
    lng: -73.832202
  }, {
    lat: 40.8926237,
    lng: -73.8326097
  }, {
    lat: 40.8927534,
    lng: -73.8329315
  }, {
    lat: 40.8933536,
    lng: -73.8353133
  }, {
    lat: 40.8939375,
    lng: -73.8374162
  }, {
    lat: 40.8891199,
    lng: -73.83554940000002
  }, {
    lat: 40.88869809999999,
    lng: -73.83750200000001
  }, {
    lat: 40.8886008,
    lng: -73.8382745
  }, {
    lat: 40.8887144,
    lng: -73.8397121
  }, {
    lat: 40.8884386,
    lng: -73.8420081
  }, {
    lat: 40.8847075,
    lng: -73.8404417
  }, {
    lat: 40.882614800000006,
    lng: -73.839519
  }, {
    lat: 40.8759792,
    lng: -73.8358498
  }, {
    lat: 40.8754113,
    lng: -73.8345194
  }, {
    lat: 40.8768553,
    lng: -73.8343155
  }, {
    lat: 40.8781208,
    lng: -73.8337898
  }, {
    lat: 40.8800352,
    lng: -73.8322449
  }, {
    lat: 40.8786237,
    lng: -73.83078580000002
  }, {
    lat: 40.878283,
    lng: -73.8297987
  }, {
    lat: 40.878283,
    lng: -73.8288546
  }, {
    lat: 40.8799379,
    lng: -73.82359740000001
  }, {
    lat: 40.879873,
    lng: -73.8215804
  }, {
    lat: 40.88000280000001,
    lng: -73.8214624
  }, {
    lat: 40.8804003,
    lng: -73.8214946
  }, {
    lat: 40.8806842,
    lng: -73.8214195
  }, {
    lat: 40.8808221,
    lng: -73.8212049
  }, {
    lat: 40.88093560000001,
    lng: -73.8210976
  }, {
    lat: 40.8820794,
    lng: -73.820765
  }, {
    lat: 40.8830771,
    lng: -73.8205934
  }, {
    lat: 40.8836044,
    lng: -73.8203895
  }, {
    lat: 40.8844804,
    lng: -73.82036810000001
  }, {
    lat: 40.8849752,
    lng: -73.8204324
  }, {
    lat: 40.8858999,
    lng: -73.8206792
  }, {
    lat: 40.8861756,
    lng: -73.8208508
  }, {
    lat: 40.886857,
    lng: -73.8172352
  }, {
    lat: 40.88694619999999,
    lng: -73.81705280000001
  }, {
    lat: 40.887043500000004,
    lng: -73.8169992
  }, {
    lat: 40.88942,
    lng: -73.8166344
  }],
  color: '777777',
  center: {
    lat: 40.8846744,
    lng: -73.82932125000002
  }
}, {
  name: 'Edenwald',
  borough: 'Bronx',
  coords: [{
    lat: 40.889736299999996,
    lng: -73.8459134
  }, {
    lat: 40.8869786,
    lng: -73.8474154
  }, {
    lat: 40.882160500000005,
    lng: -73.850677
  }, {
    lat: 40.881982,
    lng: -73.8500547
  }, {
    lat: 40.8791105,
    lng: -73.8432312
  }, {
    lat: 40.88031099999999,
    lng: -73.8412786
  }, {
    lat: 40.88209560000001,
    lng: -73.8366437
  }, {
    lat: 40.8833123,
    lng: -73.8351846
  }, {
    lat: 40.8838153,
    lng: -73.8343906
  }, {
    lat: 40.8839937,
    lng: -73.8339615
  }, {
    lat: 40.8874815,
    lng: -73.8313007
  }, {
    lat: 40.8891199,
    lng: -73.8313437
  }, {
    lat: 40.892137,
    lng: -73.83095740000002
  }, {
    lat: 40.8925588,
    lng: -73.832202
  }, {
    lat: 40.8926237,
    lng: -73.8326097
  }, {
    lat: 40.8927534,
    lng: -73.8329315
  }, {
    lat: 40.8936456,
    lng: -73.8363433
  }, {
    lat: 40.8939375,
    lng: -73.8374162
  }, {
    lat: 40.8941159,
    lng: -73.8381457
  }, {
    lat: 40.89233169999999,
    lng: -73.8462567
  }, {
    lat: 40.889493,
    lng: -73.8452268
  }, {
    lat: 40.889736299999996,
    lng: -73.8459134
  }],
  color: '009D57',
  center: {
    lat: 40.8866132,
    lng: -73.8408172
  }
}, {
  name: 'Wakefield',
  borough: 'Bronx',
  coords: [{
    lat: 40.89333739999999,
    lng: -73.8618779
  }, {
    lat: 40.8868489,
    lng: -73.8654184
  }, {
    lat: 40.8856809,
    lng: -73.8616419
  }, {
    lat: 40.882160500000005,
    lng: -73.850677
  }, {
    lat: 40.8869786,
    lng: -73.8474154
  }, {
    lat: 40.889736299999996,
    lng: -73.8459134
  }, {
    lat: 40.889493,
    lng: -73.8452268
  }, {
    lat: 40.89233169999999,
    lng: -73.8462567
  }, {
    lat: 40.8941159,
    lng: -73.8381457
  }, {
    lat: 40.8941646,
    lng: -73.8384461
  }, {
    lat: 40.8978303,
    lng: -73.8398623
  }, {
    lat: 40.8978789,
    lng: -73.8396263
  }, {
    lat: 40.8987386,
    lng: -73.8392401
  }, {
    lat: 40.8991116,
    lng: -73.8391328
  }, {
    lat: 40.8995333,
    lng: -73.8392401
  }, {
    lat: 40.9014633,
    lng: -73.8406777
  }, {
    lat: 40.9016904,
    lng: -73.8408494
  }, {
    lat: 40.90315,
    lng: -73.8410425
  }, {
    lat: 40.9041718,
    lng: -73.8413644
  }, {
    lat: 40.904188,
    lng: -73.8448834
  }, {
    lat: 40.9046745,
    lng: -73.8450336
  }, {
    lat: 40.9055503,
    lng: -73.8448191
  }, {
    lat: 40.906053,
    lng: -73.8467288
  }, {
    lat: 40.9074963,
    lng: -73.850162
  }, {
    lat: 40.9064909,
    lng: -73.8510203
  }, {
    lat: 40.9074315,
    lng: -73.8535309
  }, {
    lat: 40.9102856,
    lng: -73.8511491
  }, {
    lat: 40.9103667,
    lng: -73.8516212
  }, {
    lat: 40.9101397,
    lng: -73.8516641
  }, {
    lat: 40.9099775,
    lng: -73.8519645
  }, {
    lat: 40.9097829,
    lng: -73.8522434
  }, {
    lat: 40.9097829,
    lng: -73.8525009
  }, {
    lat: 40.9100586,
    lng: -73.8525438
  }, {
    lat: 40.9103343,
    lng: -73.8525224
  }, {
    lat: 40.9104802,
    lng: -73.8528228
  }, {
    lat: 40.9103667,
    lng: -73.8530803
  }, {
    lat: 40.9101559,
    lng: -73.8533378
  }, {
    lat: 40.9096532,
    lng: -73.8535953
  }, {
    lat: 40.9091018,
    lng: -73.8544536
  }, {
    lat: 40.9086477,
    lng: -73.8548183
  }, {
    lat: 40.9082099,
    lng: -73.8550329
  }, {
    lat: 40.907788200000006,
    lng: -73.8548398
  }, {
    lat: 40.9078207,
    lng: -73.854239
  }, {
    lat: 40.9077396,
    lng: -73.8538742
  }, {
    lat: 40.90754499999999,
    lng: -73.8538742
  }, {
    lat: 40.9070585,
    lng: -73.854239
  }, {
    lat: 40.90689630000001,
    lng: -73.8551188
  }, {
    lat: 40.9063774,
    lng: -73.85546210000001
  }, {
    lat: 40.9061665,
    lng: -73.85595560000002
  }, {
    lat: 40.9062152,
    lng: -73.8567281
  }, {
    lat: 40.9059881,
    lng: -73.8569641
  }, {
    lat: 40.90548540000001,
    lng: -73.8565135
  }, {
    lat: 40.905469200000006,
    lng: -73.8560629
  }, {
    lat: 40.9052097,
    lng: -73.8560843
  }, {
    lat: 40.9050151,
    lng: -73.85644910000002
  }, {
    lat: 40.9049016,
    lng: -73.8567495
  }, {
    lat: 40.9050962,
    lng: -73.8570499
  }, {
    lat: 40.9051124,
    lng: -73.8573933
  }, {
    lat: 40.9046583,
    lng: -73.8576508
  }, {
    lat: 40.9044475,
    lng: -73.857522
  }, {
    lat: 40.9044799,
    lng: -73.8572216
  }, {
    lat: 40.9043177,
    lng: -73.8570499
  }, {
    lat: 40.9039447,
    lng: -73.8573289
  }, {
    lat: 40.9036528,
    lng: -73.857286
  }, {
    lat: 40.9029554,
    lng: -73.8575864
  }, {
    lat: 40.9025337,
    lng: -73.8578868
  }, {
    lat: 40.9026635,
    lng: -73.8581443
  }, {
    lat: 40.9023229,
    lng: -73.8584018
  }, {
    lat: 40.9020958,
    lng: -73.8582945
  }, {
    lat: 40.9019012,
    lng: -73.8586378
  }, {
    lat: 40.90196610000001,
    lng: -73.8588953
  }, {
    lat: 40.9025175,
    lng: -73.8592172
  }, {
    lat: 40.90256620000001,
    lng: -73.8594747
  }, {
    lat: 40.9024202,
    lng: -73.8597751
  }, {
    lat: 40.90196610000001,
    lng: -73.8597322
  }, {
    lat: 40.90175529999999,
    lng: -73.8595819
  }, {
    lat: 40.90149579999999,
    lng: -73.8590455
  }, {
    lat: 40.9013011,
    lng: -73.8591957
  }, {
    lat: 40.901366,
    lng: -73.8593459
  }, {
    lat: 40.90135790000001,
    lng: -73.8595176
  }, {
    lat: 40.9012363,
    lng: -73.8595498
  }, {
    lat: 40.901066,
    lng: -73.8594317
  }, {
    lat: 40.90097680000001,
    lng: -73.8591957
  }, {
    lat: 40.90049020000001,
    lng: -73.8595498
  }, {
    lat: 40.90109030000001,
    lng: -73.8615453
  }, {
    lat: 40.8964678,
    lng: -73.8628864
  }, {
    lat: 40.8954136,
    lng: -73.8635516
  }, {
    lat: 40.8952838,
    lng: -73.8635516
  }, {
    lat: 40.8945863,
    lng: -73.8613629
  }, {
    lat: 40.89333739999999,
    lng: -73.8618779
  }],
  color: '3F5BA9',
  center: {
    lat: 40.89632035,
    lng: -73.85178205
  }
}, {
  name: 'Woodlawn',
  borough: 'Bronx',
  coords: [{
    lat: 40.90298789999999,
    lng: -73.8679504
  }, {
    lat: 40.9023553,
    lng: -73.8682294
  }, {
    lat: 40.9016255,
    lng: -73.868916
  }, {
    lat: 40.9008632,
    lng: -73.86986020000002
  }, {
    lat: 40.900052300000006,
    lng: -73.8712978
  }, {
    lat: 40.8986737,
    lng: -73.8745165
  }, {
    lat: 40.8981222,
    lng: -73.8752675
  }, {
    lat: 40.8972139,
    lng: -73.87619020000001
  }, {
    lat: 40.896159700000005,
    lng: -73.8768768
  }, {
    lat: 40.895462200000004,
    lng: -73.8770914
  }, {
    lat: 40.8957542,
    lng: -73.8746023
  }, {
    lat: 40.8966463,
    lng: -73.8705039
  }, {
    lat: 40.8957704,
    lng: -73.8649893
  }, {
    lat: 40.8954136,
    lng: -73.8635516
  }, {
    lat: 40.8964678,
    lng: -73.8628864
  }, {
    lat: 40.90109030000001,
    lng: -73.8615453
  }, {
    lat: 40.90298789999999,
    lng: -73.8679504
  }],
  color: '795046',
  center: {
    lat: 40.89920074999999,
    lng: -73.86931834999996
  }
}, {
  name: 'North Brother',
  borough: 'Bronx',
  coords: [{
    lat: 40.80194490000001,
    lng: -73.8993108
  }, {
    lat: 40.80140070000001,
    lng: -73.8993645
  }, {
    lat: 40.80101090000001,
    lng: -73.8996005
  }, {
    lat: 40.8009378,
    lng: -73.8997293
  }, {
    lat: 40.8006698,
    lng: -73.8999975
  }, {
    lat: 40.8005967,
    lng: -73.9001369
  }, {
    lat: 40.8003449,
    lng: -73.9001048
  }, {
    lat: 40.79953280000001,
    lng: -73.9001691
  }, {
    lat: 40.7994515,
    lng: -73.9000297
  }, {
    lat: 40.7993784,
    lng: -73.9000082
  }, {
    lat: 40.7992566,
    lng: -73.9001799
  }, {
    lat: 40.7991592,
    lng: -73.9001799
  }, {
    lat: 40.7990861,
    lng: -73.9000297
  }, {
    lat: 40.7991185,
    lng: -73.8993967
  }, {
    lat: 40.799281,
    lng: -73.8991499
  }, {
    lat: 40.7993378,
    lng: -73.8989568
  }, {
    lat: 40.7992972,
    lng: -73.8987958
  }, {
    lat: 40.7992891,
    lng: -73.8986242
  }, {
    lat: 40.79943529999999,
    lng: -73.8985705
  }, {
    lat: 40.799516499999996,
    lng: -73.8984096
  }, {
    lat: 40.7995165,
    lng: -73.89808770000002
  }, {
    lat: 40.7998008,
    lng: -73.897444
  }, {
    lat: 40.8002312,
    lng: -73.8970149
  }, {
    lat: 40.8004424,
    lng: -73.8969612
  }, {
    lat: 40.80065350000001,
    lng: -73.8968003
  }, {
    lat: 40.8008241,
    lng: -73.8967896
  }, {
    lat: 40.8010515,
    lng: -73.8967359
  }, {
    lat: 40.8012464,
    lng: -73.8967252
  }, {
    lat: 40.8015713,
    lng: -73.8968325
  }, {
    lat: 40.801888,
    lng: -73.8972723
  }, {
    lat: 40.8020261,
    lng: -73.8973904
  }, {
    lat: 40.8021804,
    lng: -73.8979912
  }, {
    lat: 40.80218849999999,
    lng: -73.8981843
  }, {
    lat: 40.8022454,
    lng: -73.8982916
  }, {
    lat: 40.80216409999999,
    lng: -73.8986886
  }, {
    lat: 40.80194490000001,
    lng: -73.8993108
  }],
  color: '0BA9CC',
  center: {
    lat: 40.80066574999999,
    lng: -73.89845255
  }
}, {
  name: 'South Brother',
  borough: 'Bronx',
  coords: [{
    lat: 40.796820000000004,
    lng: -73.8986456
  }, {
    lat: 40.7967876,
    lng: -73.8988602
  }, {
    lat: 40.79669009999999,
    lng: -73.8988388
  }, {
    lat: 40.796552,
    lng: -73.8990855
  }, {
    lat: 40.7964302,
    lng: -73.8991392
  }, {
    lat: 40.7962434,
    lng: -73.8989997
  }, {
    lat: 40.796153999999994,
    lng: -73.8987529
  }, {
    lat: 40.79613779999999,
    lng: -73.8985491
  }, {
    lat: 40.7960809,
    lng: -73.8984525
  }, {
    lat: 40.7959022,
    lng: -73.8982487
  }, {
    lat: 40.7958616,
    lng: -73.8980663
  }, {
    lat: 40.7957479,
    lng: -73.89791610000002
  }, {
    lat: 40.7957073,
    lng: -73.8977766
  }, {
    lat: 40.7957236,
    lng: -73.8975942
  }, {
    lat: 40.7956748,
    lng: -73.8970041
  }, {
    lat: 40.79577230000001,
    lng: -73.8969076
  }, {
    lat: 40.7960241,
    lng: -73.8969076
  }, {
    lat: 40.7962353,
    lng: -73.8967574
  }, {
    lat: 40.7967713,
    lng: -73.8971651
  }, {
    lat: 40.79690130000001,
    lng: -73.8973689
  }, {
    lat: 40.7970962,
    lng: -73.897841
  }, {
    lat: 40.7970962,
    lng: -73.8980341
  }, {
    lat: 40.797015,
    lng: -73.8982809
  }, {
    lat: 40.7969094,
    lng: -73.8985169
  }, {
    lat: 40.796820000000004,
    lng: -73.8986456
  }],
  color: '0BA9CC',
  center: {
    lat: 40.7963855,
    lng: -73.8979483
  }
}, {
  name: 'Rikers Island',
  borough: 'Bronx',
  coords: [{
    lat: 40.795358099999994,
    lng: -73.8828421
  }, {
    lat: 40.7960078,
    lng: -73.8837433
  }, {
    lat: 40.7955693,
    lng: -73.8836789
  }, {
    lat: 40.7974698,
    lng: -73.8859749
  }, {
    lat: 40.7981358,
    lng: -73.8868761
  }, {
    lat: 40.7983795,
    lng: -73.8876915
  }, {
    lat: 40.798282,
    lng: -73.8882065
  }, {
    lat: 40.7987043,
    lng: -73.8882494
  }, {
    lat: 40.79867190000001,
    lng: -73.8886786
  }, {
    lat: 40.7981521,
    lng: -73.888464
  }, {
    lat: 40.7977947,
    lng: -73.8892794
  }, {
    lat: 40.7979246,
    lng: -73.8901806
  }, {
    lat: 40.7975023,
    lng: -73.8910818
  }, {
    lat: 40.7967876,
    lng: -73.8918114
  }, {
    lat: 40.7941884,
    lng: -73.8925838
  }, {
    lat: 40.7928239,
    lng: -73.8927984
  }, {
    lat: 40.7902571,
    lng: -73.8920689
  }, {
    lat: 40.7901271,
    lng: -73.8914251
  }, {
    lat: 40.7901921,
    lng: -73.8906527
  }, {
    lat: 40.78986720000001,
    lng: -73.8903093
  }, {
    lat: 40.78860000000001,
    lng: -73.8899231
  }, {
    lat: 40.7873003,
    lng: -73.8891935
  }, {
    lat: 40.7869104,
    lng: -73.8881636
  }, {
    lat: 40.7866829,
    lng: -73.8867474
  }, {
    lat: 40.786780400000005,
    lng: -73.885932
  }, {
    lat: 40.786650400000006,
    lng: -73.8852882
  }, {
    lat: 40.7862605,
    lng: -73.8838291
  }, {
    lat: 40.7863255,
    lng: -73.8831425
  }, {
    lat: 40.78583810000001,
    lng: -73.8814688
  }, {
    lat: 40.785383200000005,
    lng: -73.8787651
  }, {
    lat: 40.78548070000001,
    lng: -73.8781214
  }, {
    lat: 40.7858381,
    lng: -73.8763618
  }, {
    lat: 40.78587060000001,
    lng: -73.8749886
  }, {
    lat: 40.7857081,
    lng: -73.8740444
  }, {
    lat: 40.7858056,
    lng: -73.8730574
  }, {
    lat: 40.78687789999999,
    lng: -73.8714266
  }, {
    lat: 40.7873003,
    lng: -73.8713837
  }, {
    lat: 40.787820200000006,
    lng: -73.8708258
  }, {
    lat: 40.7900946,
    lng: -73.8712549
  }, {
    lat: 40.790712,
    lng: -73.871727
  }, {
    lat: 40.7915567,
    lng: -73.8730145
  }, {
    lat: 40.791816700000005,
    lng: -73.873744
  }, {
    lat: 40.79191410000001,
    lng: -73.8745165
  }, {
    lat: 40.792304,
    lng: -73.8749886
  }, {
    lat: 40.7931163,
    lng: -73.8758469
  }, {
    lat: 40.7946108,
    lng: -73.8784647
  }, {
    lat: 40.7948707,
    lng: -73.8795805
  }, {
    lat: 40.7950657,
    lng: -73.8816404
  }, {
    lat: 40.795358099999994,
    lng: -73.8828421
  }],
  color: 'CCCCCC',
  center: {
    lat: 40.792043750000005,
    lng: -73.88181210000005
  }
}, {
  name: 'City Island',
  borough: 'Bronx',
  coords: [{
    lat: 40.8569367,
    lng: -73.7918401
  }, {
    lat: 40.8568637,
    lng: -73.7917113
  }, {
    lat: 40.8562713,
    lng: -73.7920547
  }, {
    lat: 40.8560684,
    lng: -73.792398
  }, {
    lat: 40.8558006,
    lng: -73.792516
  }, {
    lat: 40.855687,
    lng: -73.7920654
  }, {
    lat: 40.8545915,
    lng: -73.7912178
  }, {
    lat: 40.8544373,
    lng: -73.7912607
  }, {
    lat: 40.85431560000001,
    lng: -73.7918723
  }, {
    lat: 40.8540884,
    lng: -73.7919044
  }, {
    lat: 40.8539261,
    lng: -73.7917542
  }, {
    lat: 40.85390170000001,
    lng: -73.791604
  }, {
    lat: 40.8539261,
    lng: -73.7913251
  }, {
    lat: 40.8537394,
    lng: -73.7913573
  }, {
    lat: 40.853317399999995,
    lng: -73.7910569
  }, {
    lat: 40.85317140000001,
    lng: -73.7909067
  }, {
    lat: 40.853147,
    lng: -73.790735
  }, {
    lat: 40.853203799999996,
    lng: -73.7904882
  }, {
    lat: 40.853033399999994,
    lng: -73.7904346
  }, {
    lat: 40.8527818,
    lng: -73.7914217
  }, {
    lat: 40.8520758,
    lng: -73.791132
  }, {
    lat: 40.85226250000001,
    lng: -73.7901664
  }, {
    lat: 40.8520352,
    lng: -73.7900698
  }, {
    lat: 40.852010899999996,
    lng: -73.7901771
  }, {
    lat: 40.85181609999999,
    lng: -73.7901986
  }, {
    lat: 40.8516132,
    lng: -73.7901235
  }, {
    lat: 40.8517106,
    lng: -73.7897265
  }, {
    lat: 40.8514915,
    lng: -73.7896514
  }, {
    lat: 40.85149150000001,
    lng: -73.7895548
  }, {
    lat: 40.851313,
    lng: -73.7895119
  }, {
    lat: 40.851175,
    lng: -73.7901556
  }, {
    lat: 40.8507855,
    lng: -73.7900484
  }, {
    lat: 40.85076920000001,
    lng: -73.7899518
  }, {
    lat: 40.8505258,
    lng: -73.7898552
  }, {
    lat: 40.8504527,
    lng: -73.7900376
  }, {
    lat: 40.850120000000004,
    lng: -73.7899089
  }, {
    lat: 40.8496087,
    lng: -73.7898445
  }, {
    lat: 40.849438299999996,
    lng: -73.7899196
  }, {
    lat: 40.84882149999999,
    lng: -73.7910354
  }, {
    lat: 40.84866730000001,
    lng: -73.7910891
  }, {
    lat: 40.84826149999999,
    lng: -73.7914431
  }, {
    lat: 40.84783949999999,
    lng: -73.7914646
  }, {
    lat: 40.8475717,
    lng: -73.7915611
  }, {
    lat: 40.846987299999995,
    lng: -73.7916362
  }, {
    lat: 40.84681690000001,
    lng: -73.7917328
  }, {
    lat: 40.84599719999999,
    lng: -73.79099250000002
  }, {
    lat: 40.8457293,
    lng: -73.7909389
  }, {
    lat: 40.8453154,
    lng: -73.7904346
  }, {
    lat: 40.844877100000005,
    lng: -73.7901771
  }, {
    lat: 40.844731,
    lng: -73.78988740000001
  }, {
    lat: 40.8445687,
    lng: -73.7898016
  }, {
    lat: 40.844292800000005,
    lng: -73.7897909
  }, {
    lat: 40.8440087,
    lng: -73.7895977
  }, {
    lat: 40.8436516,
    lng: -73.7896299
  }, {
    lat: 40.8435785,
    lng: -73.7898123
  }, {
    lat: 40.8430997,
    lng: -73.789587
  }, {
    lat: 40.8432052,
    lng: -73.7891793
  }, {
    lat: 40.8431078,
    lng: -73.7889647
  }, {
    lat: 40.84290490000001,
    lng: -73.7888789
  }, {
    lat: 40.8427263,
    lng: -73.7888682
  }, {
    lat: 40.8424909,
    lng: -73.7886536
  }, {
    lat: 40.842409800000006,
    lng: -73.7886429
  }, {
    lat: 40.84232860000001,
    lng: -73.7884498
  }, {
    lat: 40.8419715,
    lng: -73.7882781
  }, {
    lat: 40.8418497,
    lng: -73.7883532
  }, {
    lat: 40.841541299999996,
    lng: -73.7882996
  }, {
    lat: 40.841452,
    lng: -73.7882137
  }, {
    lat: 40.8414114,
    lng: -73.7879241
  }, {
    lat: 40.8413303,
    lng: -73.7878382
  }, {
    lat: 40.841103,
    lng: -73.7878919
  }, {
    lat: 40.840892,
    lng: -73.7878168
  }, {
    lat: 40.8408352,
    lng: -73.7876022
  }, {
    lat: 40.840567300000004,
    lng: -73.7875485
  }, {
    lat: 40.84053480000001,
    lng: -73.7876666
  }, {
    lat: 40.84011280000001,
    lng: -73.7874949
  }, {
    lat: 40.839991,
    lng: -73.7875164
  }, {
    lat: 40.8397232,
    lng: -73.7873554
  }, {
    lat: 40.8396988,
    lng: -73.7872374
  }, {
    lat: 40.8397394,
    lng: -73.7866688
  }, {
    lat: 40.8397232,
    lng: -73.7864864
  }, {
    lat: 40.83922799999999,
    lng: -73.7858534
  }, {
    lat: 40.838887099999994,
    lng: -73.7856817
  }, {
    lat: 40.8384488,
    lng: -73.7856066
  }, {
    lat: 40.8380186,
    lng: -73.78573540000001
  }, {
    lat: 40.83791310000001,
    lng: -73.78573540000001
  }, {
    lat: 40.8377589,
    lng: -73.7854564
  }, {
    lat: 40.837482900000005,
    lng: -73.7853599
  }, {
    lat: 40.8373774,
    lng: -73.7853491
  }, {
    lat: 40.8373449,
    lng: -73.7849092
  }, {
    lat: 40.8371663,
    lng: -73.7846947
  }, {
    lat: 40.83681730000001,
    lng: -73.7844694
  }, {
    lat: 40.836744200000005,
    lng: -73.7843728
  }, {
    lat: 40.8366712,
    lng: -73.7840617
  }, {
    lat: 40.8367199,
    lng: -73.7838042
  }, {
    lat: 40.83689849999999,
    lng: -73.783493
  }, {
    lat: 40.8368579,
    lng: -73.7833321
  }, {
    lat: 40.83637900000001,
    lng: -73.7830961
  }, {
    lat: 40.83637900000001,
    lng: -73.78286
  }, {
    lat: 40.8364764,
    lng: -73.7827528
  }, {
    lat: 40.8371501,
    lng: -73.78284930000001
  }, {
    lat: 40.8373692,
    lng: -73.7827098
  }, {
    lat: 40.8374098,
    lng: -73.7825596
  }, {
    lat: 40.8373205,
    lng: -73.7823987
  }, {
    lat: 40.83748289999999,
    lng: -73.7820554
  }, {
    lat: 40.8376777,
    lng: -73.7818837
  }, {
    lat: 40.8379212,
    lng: -73.7819052
  }, {
    lat: 40.83862739999999,
    lng: -73.7813795
  }, {
    lat: 40.8391712,
    lng: -73.7812293
  }, {
    lat: 40.8394959,
    lng: -73.7810898
  }, {
    lat: 40.8398124,
    lng: -73.7812293
  }, {
    lat: 40.8398936,
    lng: -73.7813902
  }, {
    lat: 40.8403969,
    lng: -73.7815726
  }, {
    lat: 40.8405348,
    lng: -73.78146530000001
  }, {
    lat: 40.8407215,
    lng: -73.7814546
  }, {
    lat: 40.841200400000005,
    lng: -73.7816799
  }, {
    lat: 40.841338400000005,
    lng: -73.7817979
  }, {
    lat: 40.8416468,
    lng: -73.7818086
  }, {
    lat: 40.8417605,
    lng: -73.7818944
  }, {
    lat: 40.8418092,
    lng: -73.7822163
  }, {
    lat: 40.84198769999999,
    lng: -73.7823021
  }, {
    lat: 40.8422556,
    lng: -73.7823236
  }, {
    lat: 40.842214999999996,
    lng: -73.7824523
  }, {
    lat: 40.842288,
    lng: -73.7824631
  }, {
    lat: 40.842328599999995,
    lng: -73.7823665
  }, {
    lat: 40.8424504,
    lng: -73.7824309
  }, {
    lat: 40.8423854,
    lng: -73.7827849
  }, {
    lat: 40.8425965,
    lng: -73.7829995
  }, {
    lat: 40.8430834,
    lng: -73.7832999
  }, {
    lat: 40.84369220000001,
    lng: -73.7835252
  }, {
    lat: 40.8442116,
    lng: -73.7830746
  }, {
    lat: 40.8443252,
    lng: -73.7831175
  }, {
    lat: 40.8444064,
    lng: -73.783375
  }, {
    lat: 40.84451190000001,
    lng: -73.7833214
  }, {
    lat: 40.8446986,
    lng: -73.7830102
  }, {
    lat: 40.8450476,
    lng: -73.7831712
  }, {
    lat: 40.8451369,
    lng: -73.7831926
  }, {
    lat: 40.8454615,
    lng: -73.7831283
  }, {
    lat: 40.8455427,
    lng: -73.7830853
  }, {
    lat: 40.84559140000001,
    lng: -73.782742
  }, {
    lat: 40.84574560000001,
    lng: -73.782506
  }, {
    lat: 40.8459566,
    lng: -73.7826133
  }, {
    lat: 40.8460053,
    lng: -73.7823772
  }, {
    lat: 40.84641919999999,
    lng: -73.782506
  }, {
    lat: 40.8464598,
    lng: -73.7822807
  }, {
    lat: 40.846549100000004,
    lng: -73.7823236
  }, {
    lat: 40.8465977,
    lng: -73.7821412
  }, {
    lat: 40.8467925,
    lng: -73.7821841
  }, {
    lat: 40.847247,
    lng: -73.781873
  }, {
    lat: 40.8472795,
    lng: -73.7815511
  }, {
    lat: 40.84759600000001,
    lng: -73.7814546
  }, {
    lat: 40.847977400000005,
    lng: -73.7815404
  }, {
    lat: 40.8480505,
    lng: -73.7816584
  }, {
    lat: 40.84791249999999,
    lng: -73.7824845
  }, {
    lat: 40.8480018,
    lng: -73.7826347
  }, {
    lat: 40.84814790000001,
    lng: -73.7826669
  }, {
    lat: 40.8482777,
    lng: -73.7825274
  }, {
    lat: 40.848513100000005,
    lng: -73.78178720000001
  }, {
    lat: 40.848578,
    lng: -73.7815189
  }, {
    lat: 40.8486998,
    lng: -73.7814867
  }, {
    lat: 40.84873220000001,
    lng: -73.7816048
  }, {
    lat: 40.8489513,
    lng: -73.7818193
  }, {
    lat: 40.84894320000001,
    lng: -73.781991
  }, {
    lat: 40.8493409,
    lng: -73.7824416
  }, {
    lat: 40.8490731,
    lng: -73.7830532
  }, {
    lat: 40.8492192,
    lng: -73.7831497
  }, {
    lat: 40.8491948,
    lng: -73.7833643
  }, {
    lat: 40.8492678,
    lng: -73.7835681
  }, {
    lat: 40.849422,
    lng: -73.7837291
  }, {
    lat: 40.8500794,
    lng: -73.7842441
  }, {
    lat: 40.8502093,
    lng: -73.7842977
  }, {
    lat: 40.85030660000001,
    lng: -73.784287
  }, {
    lat: 40.8504608,
    lng: -73.7840295
  }, {
    lat: 40.85060690000001,
    lng: -73.7840402
  }, {
    lat: 40.8508179,
    lng: -73.7844157
  }, {
    lat: 40.8509883,
    lng: -73.7845016
  }, {
    lat: 40.851102,
    lng: -73.7843513
  }, {
    lat: 40.85132109999999,
    lng: -73.7836432
  }, {
    lat: 40.8514185,
    lng: -73.7834609
  }, {
    lat: 40.8515727,
    lng: -73.7835896
  }, {
    lat: 40.8514753,
    lng: -73.7839651
  }, {
    lat: 40.85160510000001,
    lng: -73.784008
  }, {
    lat: 40.8515808,
    lng: -73.7842011
  }, {
    lat: 40.851621300000005,
    lng: -73.7843513
  }, {
    lat: 40.8517755,
    lng: -73.7844586
  }, {
    lat: 40.85167820000001,
    lng: -73.7850809
  }, {
    lat: 40.85167820000001,
    lng: -73.785274
  }, {
    lat: 40.8517999,
    lng: -73.7855852
  }, {
    lat: 40.8518486,
    lng: -73.7858641
  }, {
    lat: 40.8521326,
    lng: -73.7864113
  }, {
    lat: 40.8524735,
    lng: -73.7866259
  }, {
    lat: 40.8528711,
    lng: -73.7870228
  }, {
    lat: 40.8531714,
    lng: -73.7875807
  }, {
    lat: 40.853431,
    lng: -73.7878489
  }, {
    lat: 40.85360959999999,
    lng: -73.7879133
  }, {
    lat: 40.8537475,
    lng: -73.7878919
  }, {
    lat: 40.8539585,
    lng: -73.7872267
  }, {
    lat: 40.8540559,
    lng: -73.7871301
  }, {
    lat: 40.85416140000001,
    lng: -73.787173
  }, {
    lat: 40.8542101,
    lng: -73.7873232
  }, {
    lat: 40.8541695,
    lng: -73.7876987
  }, {
    lat: 40.8541046,
    lng: -73.78818150000001
  }, {
    lat: 40.8541614,
    lng: -73.7882996
  }, {
    lat: 40.8543237,
    lng: -73.7883854
  }, {
    lat: 40.8544454,
    lng: -73.7885141
  }, {
    lat: 40.8546889,
    lng: -73.7884176
  }, {
    lat: 40.854802500000005,
    lng: -73.7882888
  }, {
    lat: 40.854908,
    lng: -73.7882566
  }, {
    lat: 40.8551677,
    lng: -73.7883961
  }, {
    lat: 40.8553218,
    lng: -73.7884068
  }, {
    lat: 40.85565460000001,
    lng: -73.7883317
  }, {
    lat: 40.8557763,
    lng: -73.7884283
  }, {
    lat: 40.8562956,
    lng: -73.7885892
  }, {
    lat: 40.8562632,
    lng: -73.7887609
  }, {
    lat: 40.856393,
    lng: -73.7888682
  }, {
    lat: 40.8565634,
    lng: -73.78888960000002
  }, {
    lat: 40.85670950000001,
    lng: -73.7887716
  }, {
    lat: 40.8568069,
    lng: -73.7888145
  }, {
    lat: 40.8570909,
    lng: -73.7886643
  }, {
    lat: 40.85725320000001,
    lng: -73.7886536
  }, {
    lat: 40.8577076,
    lng: -73.7887394
  }, {
    lat: 40.8580322,
    lng: -73.7887394
  }, {
    lat: 40.8583243,
    lng: -73.7886751
  }, {
    lat: 40.8584298,
    lng: -73.7887716
  }, {
    lat: 40.858519,
    lng: -73.789115
  }, {
    lat: 40.8585677,
    lng: -73.7898445
  }, {
    lat: 40.858494699999994,
    lng: -73.7900591
  }, {
    lat: 40.85830810000001,
    lng: -73.7901235
  }, {
    lat: 40.8579104,
    lng: -73.7903702
  }, {
    lat: 40.8577725,
    lng: -73.7907887
  }, {
    lat: 40.8576183,
    lng: -73.7909389
  }, {
    lat: 40.8575128,
    lng: -73.790971
  }, {
    lat: 40.857358700000006,
    lng: -73.7912393
  }, {
    lat: 40.85734240000001,
    lng: -73.7914109
  }, {
    lat: 40.857383,
    lng: -73.7915826
  }, {
    lat: 40.857261300000005,
    lng: -73.7917328
  }, {
    lat: 40.8569367,
    lng: -73.7918401
  }],
  color: '0BA9CC',
  center: {
    lat: 40.84747335,
    lng: -73.7868029
  }
}, {
  name: 'High Island',
  borough: 'Bronx',
  coords: [{
    lat: 40.8588274,
    lng: -73.7870979
  }, {
    lat: 40.859168200000006,
    lng: -73.786701
  }, {
    lat: 40.8593629,
    lng: -73.7863576
  }, {
    lat: 40.859371100000004,
    lng: -73.786068
  }, {
    lat: 40.8592493,
    lng: -73.7857568
  }, {
    lat: 40.8590302,
    lng: -73.7856388
  }, {
    lat: 40.8589572,
    lng: -73.7854028
  }, {
    lat: 40.858786800000004,
    lng: -73.7852955
  }, {
    lat: 40.8587949,
    lng: -73.7851882
  }, {
    lat: 40.8591276,
    lng: -73.7847054
  }, {
    lat: 40.8596307,
    lng: -73.7845337
  }, {
    lat: 40.8597687,
    lng: -73.7843728
  }, {
    lat: 40.8599877,
    lng: -73.7843299
  }, {
    lat: 40.8601257,
    lng: -73.7844908
  }, {
    lat: 40.8604746,
    lng: -73.7845552
  }, {
    lat: 40.8605233,
    lng: -73.7846839
  }, {
    lat: 40.860450300000004,
    lng: -73.7848771
  }, {
    lat: 40.8605071,
    lng: -73.7850487
  }, {
    lat: 40.86048269999999,
    lng: -73.7851346
  }, {
    lat: 40.8603123,
    lng: -73.785274
  }, {
    lat: 40.860085100000006,
    lng: -73.7863147
  }, {
    lat: 40.8600932,
    lng: -73.78672240000002
  }, {
    lat: 40.8599959,
    lng: -73.7868941
  }, {
    lat: 40.85982550000001,
    lng: -73.7869263
  }, {
    lat: 40.8595171,
    lng: -73.7869155
  }, {
    lat: 40.8593143,
    lng: -73.7871516
  }, {
    lat: 40.8589734,
    lng: -73.7873876
  }, {
    lat: 40.8588274,
    lng: -73.7870979
  }],
  color: 'DB4436',
  center: {
    lat: 40.85965505,
    lng: -73.78585874999999
  }
}]);
"use strict";

window.neighborhoods = window.neighborhoods || [];
neighborhoods = neighborhoods.concat([{
  name: 'St. George',
  borough: 'Staten Island',
  coords: [{
    lat: 40.647336100000004,
    lng: -74.089458
  }, {
    lat: 40.6460662,
    lng: -74.0884495
  }, {
    lat: 40.644356699999996,
    lng: -74.0869045
  }, {
    lat: 40.6433472,
    lng: -74.0864754
  }, {
    lat: 40.6416702,
    lng: -74.0867114
  }, {
    lat: 40.6386254,
    lng: -74.0875697
  }, {
    lat: 40.6378601,
    lng: -74.0873337
  }, {
    lat: 40.6367366,
    lng: -74.0860677
  }, {
    lat: 40.6357107,
    lng: -74.0837073
  }, {
    lat: 40.6382998,
    lng: -74.0787721
  }, {
    lat: 40.6382672,
    lng: -74.0783858
  }, {
    lat: 40.6377298,
    lng: -74.0769053
  }, {
    lat: 40.6379578,
    lng: -74.0725493
  }, {
    lat: 40.6384137,
    lng: -74.0725708
  }, {
    lat: 40.6383974,
    lng: -74.072957
  }, {
    lat: 40.638592800000005,
    lng: -74.0729356
  }, {
    lat: 40.6386417,
    lng: -74.0731072
  }, {
    lat: 40.64049790000001,
    lng: -74.0730429
  }, {
    lat: 40.6405142,
    lng: -74.0727425
  }, {
    lat: 40.6407747,
    lng: -74.0728068
  }, {
    lat: 40.64103519999999,
    lng: -74.06997440000002
  }, {
    lat: 40.641312,
    lng: -74.06997440000002
  }, {
    lat: 40.6409864,
    lng: -74.0729141
  }, {
    lat: 40.6416051,
    lng: -74.0730429
  }, {
    lat: 40.6419959,
    lng: -74.070189
  }, {
    lat: 40.64219119999999,
    lng: -74.0702105
  }, {
    lat: 40.6418168,
    lng: -74.0731502
  }, {
    lat: 40.6421912,
    lng: -74.0731716
  }, {
    lat: 40.6425006,
    lng: -74.0703392
  }, {
    lat: 40.64271230000001,
    lng: -74.070425
  }, {
    lat: 40.6424843,
    lng: -74.07207730000002
  }, {
    lat: 40.6426634,
    lng: -74.0720987
  }, {
    lat: 40.642793700000006,
    lng: -74.07143350000001
  }, {
    lat: 40.64308669999999,
    lng: -74.0714765
  }, {
    lat: 40.6433147,
    lng: -74.0708756
  }, {
    lat: 40.6436892,
    lng: -74.0704894
  }, {
    lat: 40.6435426,
    lng: -74.0715623
  }, {
    lat: 40.64375429999999,
    lng: -74.0716696
  }, {
    lat: 40.6440636,
    lng: -74.0708756
  }, {
    lat: 40.644145,
    lng: -74.0711331
  }, {
    lat: 40.6439985,
    lng: -74.0718412
  }, {
    lat: 40.6441776,
    lng: -74.0719056
  }, {
    lat: 40.6445521,
    lng: -74.0711546
  }, {
    lat: 40.6447474,
    lng: -74.0713477
  }, {
    lat: 40.64437300000001,
    lng: -74.07207730000002
  }, {
    lat: 40.644519499999994,
    lng: -74.072206
  }, {
    lat: 40.64512190000001,
    lng: -74.07143350000001
  }, {
    lat: 40.64582200000001,
    lng: -74.0733862
  }, {
    lat: 40.6450079,
    lng: -74.0743089
  }, {
    lat: 40.6469779,
    lng: -74.07651900000002
  }, {
    lat: 40.648492,
    lng: -74.0797591
  }, {
    lat: 40.6482478,
    lng: -74.0806174
  }, {
    lat: 40.648606,
    lng: -74.0814543
  }, {
    lat: 40.6482641,
    lng: -74.0823126
  }, {
    lat: 40.6488665,
    lng: -74.0848875
  }, {
    lat: 40.64893159999999,
    lng: -74.08566000000002
  }, {
    lat: 40.64854090000001,
    lng: -74.0870333
  }, {
    lat: 40.647336100000004,
    lng: -74.089458
  }],
  color: 'F8971B',
  center: {
    lat: 40.642321149999994,
    lng: -74.07971620000001
  }
}, {
  name: 'New Brighton',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6455289,
    lng: -74.09465070000002
  }, {
    lat: 40.6454313,
    lng: -74.0961313
  }, {
    lat: 40.6454475,
    lng: -74.0986633
  }, {
    lat: 40.6450242,
    lng: -74.09853460000001
  }, {
    lat: 40.6449591,
    lng: -74.1002512
  }, {
    lat: 40.6456755,
    lng: -74.1027832
  }, {
    lat: 40.6455452,
    lng: -74.1088772
  }, {
    lat: 40.63056490000001,
    lng: -74.1056585
  }, {
    lat: 40.6292622,
    lng: -74.1133618
  }, {
    lat: 40.6289202,
    lng: -74.1162157
  }, {
    lat: 40.6289365,
    lng: -74.1184258
  }, {
    lat: 40.6278942,
    lng: -74.1212368
  }, {
    lat: 40.6266565,
    lng: -74.1203356
  }, {
    lat: 40.6247999,
    lng: -74.1177177
  }, {
    lat: 40.6232038,
    lng: -74.1135979
  }, {
    lat: 40.622422099999994,
    lng: -74.11261080000001
  }, {
    lat: 40.6209237,
    lng: -74.11033630000001
  }, {
    lat: 40.6196044,
    lng: -74.1073966
  }, {
    lat: 40.62027220000001,
    lng: -74.1066027
  }, {
    lat: 40.620646799999996,
    lng: -74.1067958
  }, {
    lat: 40.6212168,
    lng: -74.1053367
  }, {
    lat: 40.62147740000001,
    lng: -74.105401
  }, {
    lat: 40.6217055,
    lng: -74.1038346
  }, {
    lat: 40.6226664,
    lng: -74.1040921
  }, {
    lat: 40.62284549999999,
    lng: -74.1026974
  }, {
    lat: 40.6231387,
    lng: -74.1027617
  }, {
    lat: 40.6233016,
    lng: -74.1022682
  }, {
    lat: 40.6244579,
    lng: -74.1024184
  }, {
    lat: 40.6247348,
    lng: -74.1001654
  }, {
    lat: 40.6284153,
    lng: -74.1008091
  }, {
    lat: 40.6286759,
    lng: -74.0989423
  }, {
    lat: 40.629995,
    lng: -74.0992641
  }, {
    lat: 40.6300927,
    lng: -74.0981269
  }, {
    lat: 40.63163970000001,
    lng: -74.0984058
  }, {
    lat: 40.631835099999996,
    lng: -74.0979767
  }, {
    lat: 40.63193280000001,
    lng: -74.0971613
  }, {
    lat: 40.6339195,
    lng: -74.09729
  }, {
    lat: 40.63530360000001,
    lng: -74.0965176
  }, {
    lat: 40.6356456,
    lng: -74.0958738
  }, {
    lat: 40.6349291,
    lng: -74.0935993
  }, {
    lat: 40.63501049999999,
    lng: -74.0931487
  }, {
    lat: 40.6355805,
    lng: -74.0924621
  }, {
    lat: 40.6354828,
    lng: -74.0903378
  }, {
    lat: 40.635873600000004,
    lng: -74.0893722
  }, {
    lat: 40.6377136,
    lng: -74.0881276
  }, {
    lat: 40.6378601,
    lng: -74.0873337
  }, {
    lat: 40.6386254,
    lng: -74.0875697
  }, {
    lat: 40.6416702,
    lng: -74.0867114
  }, {
    lat: 40.6433472,
    lng: -74.0864754
  }, {
    lat: 40.644356699999996,
    lng: -74.0869045
  }, {
    lat: 40.647336100000004,
    lng: -74.089458
  }, {
    lat: 40.6465872,
    lng: -74.0914321
  }, {
    lat: 40.6455289,
    lng: -74.09465070000002
  }],
  color: '62AF44',
  center: {
    lat: 40.63347025,
    lng: -74.10385610000003
  }
}, {
  name: 'Stapleton',
  borough: 'Staten Island',
  coords: [{
    lat: 40.634082400000004,
    lng: -74.0787077
  }, {
    lat: 40.6322585,
    lng: -74.0793085
  }, {
    lat: 40.6288225,
    lng: -74.0830421
  }, {
    lat: 40.627877899999994,
    lng: -74.083643
  }, {
    lat: 40.6268519,
    lng: -74.0840936
  }, {
    lat: 40.6262493,
    lng: -74.084115
  }, {
    lat: 40.6247348,
    lng: -74.08495190000001
  }, {
    lat: 40.6205328,
    lng: -74.0857673
  }, {
    lat: 40.6180408,
    lng: -74.0861964
  }, {
    lat: 40.61716130000001,
    lng: -74.0865827
  }, {
    lat: 40.61587449999999,
    lng: -74.0874839
  }, {
    lat: 40.6151741,
    lng: -74.0878916
  }, {
    lat: 40.61449,
    lng: -74.0874624
  }, {
    lat: 40.6133172,
    lng: -74.0871835
  }, {
    lat: 40.6185131,
    lng: -74.0800595
  }, {
    lat: 40.6201745,
    lng: -74.0769482
  }, {
    lat: 40.62310610000001,
    lng: -74.0712833
  }, {
    lat: 40.6247348,
    lng: -74.0722919
  }, {
    lat: 40.6270799,
    lng: -74.0726995
  }, {
    lat: 40.62717760000001,
    lng: -74.0722704
  }, {
    lat: 40.6276988,
    lng: -74.0725279
  }, {
    lat: 40.6299624,
    lng: -74.0729356
  }, {
    lat: 40.628513,
    lng: -74.0682364
  }, {
    lat: 40.6288225,
    lng: -74.0680861
  }, {
    lat: 40.6303044,
    lng: -74.073
  }, {
    lat: 40.6321283,
    lng: -74.0733647
  }, {
    lat: 40.63247020000001,
    lng: -74.073236
  }, {
    lat: 40.634082400000004,
    lng: -74.0787077
  }],
  color: 'A61B4A',
  center: {
    lat: 40.6236998,
    lng: -74.07798885
  }
}, {
  name: 'Tompkinsville',
  borough: 'Staten Island',
  coords: [{
    lat: 40.63193280000001,
    lng: -74.0971613
  }, {
    lat: 40.630467200000005,
    lng: -74.089222
  }, {
    lat: 40.6302555,
    lng: -74.0889001
  }, {
    lat: 40.6310861,
    lng: -74.0880847
  }, {
    lat: 40.6282525,
    lng: -74.0834284
  }, {
    lat: 40.6288225,
    lng: -74.0830421
  }, {
    lat: 40.6322585,
    lng: -74.0793085
  }, {
    lat: 40.634082400000004,
    lng: -74.0787077
  }, {
    lat: 40.63247020000001,
    lng: -74.073236
  }, {
    lat: 40.63359379999999,
    lng: -74.0728927
  }, {
    lat: 40.636883100000006,
    lng: -74.0733862
  }, {
    lat: 40.6371274,
    lng: -74.0704894
  }, {
    lat: 40.63750189999999,
    lng: -74.0705109
  }, {
    lat: 40.6372251,
    lng: -74.0734506
  }, {
    lat: 40.637681,
    lng: -74.073472
  }, {
    lat: 40.637795,
    lng: -74.0725923
  }, {
    lat: 40.6379578,
    lng: -74.0725493
  }, {
    lat: 40.6377298,
    lng: -74.0769053
  }, {
    lat: 40.6382672,
    lng: -74.0783858
  }, {
    lat: 40.6382998,
    lng: -74.0787721
  }, {
    lat: 40.6357107,
    lng: -74.0837073
  }, {
    lat: 40.6367366,
    lng: -74.0860677
  }, {
    lat: 40.6378601,
    lng: -74.0873337
  }, {
    lat: 40.6377136,
    lng: -74.0881276
  }, {
    lat: 40.635873600000004,
    lng: -74.0893722
  }, {
    lat: 40.6354828,
    lng: -74.0903378
  }, {
    lat: 40.6355805,
    lng: -74.0924621
  }, {
    lat: 40.63501049999999,
    lng: -74.0931487
  }, {
    lat: 40.6349291,
    lng: -74.0935993
  }, {
    lat: 40.6356456,
    lng: -74.0958738
  }, {
    lat: 40.63530360000001,
    lng: -74.0965176
  }, {
    lat: 40.6339195,
    lng: -74.09729
  }, {
    lat: 40.63193280000001,
    lng: -74.0971613
  }],
  color: '777777',
  center: {
    lat: 40.63327615,
    lng: -74.08388969999999
  }
}, {
  name: 'Randall Manor',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6455452,
    lng: -74.1088772
  }, {
    lat: 40.63056490000001,
    lng: -74.1056585
  }, {
    lat: 40.6314443,
    lng: -74.0987921
  }, {
    lat: 40.631835099999996,
    lng: -74.0979767
  }, {
    lat: 40.63193280000001,
    lng: -74.0971613
  }, {
    lat: 40.6339195,
    lng: -74.09729
  }, {
    lat: 40.63530360000001,
    lng: -74.0965176
  }, {
    lat: 40.6356456,
    lng: -74.0958738
  }, {
    lat: 40.6349291,
    lng: -74.0935993
  }, {
    lat: 40.63501049999999,
    lng: -74.0931487
  }, {
    lat: 40.6355805,
    lng: -74.0924621
  }, {
    lat: 40.6364598,
    lng: -74.0933633
  }, {
    lat: 40.63805549999999,
    lng: -74.0938783
  }, {
    lat: 40.6404328,
    lng: -74.0943503
  }, {
    lat: 40.6407584,
    lng: -74.094758
  }, {
    lat: 40.6454313,
    lng: -74.0961313
  }, {
    lat: 40.6454475,
    lng: -74.0986633
  }, {
    lat: 40.6450242,
    lng: -74.09853460000001
  }, {
    lat: 40.6449591,
    lng: -74.1002512
  }, {
    lat: 40.6456755,
    lng: -74.1027832
  }, {
    lat: 40.6455452,
    lng: -74.1088772
  }],
  color: '4186F0',
  center: {
    lat: 40.6381202,
    lng: -74.10066964999999
  }
}, {
  name: 'Silver Lake',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6247348,
    lng: -74.1001654
  }, {
    lat: 40.6244579,
    lng: -74.1024184
  }, {
    lat: 40.6233016,
    lng: -74.1022682
  }, {
    lat: 40.6231387,
    lng: -74.1027617
  }, {
    lat: 40.62284549999999,
    lng: -74.1026974
  }, {
    lat: 40.6226664,
    lng: -74.1040921
  }, {
    lat: 40.6217055,
    lng: -74.1038346
  }, {
    lat: 40.62147740000001,
    lng: -74.105401
  }, {
    lat: 40.6212168,
    lng: -74.1053367
  }, {
    lat: 40.620646799999996,
    lng: -74.1067958
  }, {
    lat: 40.62027220000001,
    lng: -74.1066027
  }, {
    lat: 40.6196044,
    lng: -74.1073966
  }, {
    lat: 40.619034400000004,
    lng: -74.10606620000001
  }, {
    lat: 40.61859460000001,
    lng: -74.1054869
  }, {
    lat: 40.619246100000005,
    lng: -74.1042638
  }, {
    lat: 40.620093,
    lng: -74.103384
  }, {
    lat: 40.62115169999999,
    lng: -74.1018605
  }, {
    lat: 40.620760800000006,
    lng: -74.1000581
  }, {
    lat: 40.6203211,
    lng: -74.1002512
  }, {
    lat: 40.6196207,
    lng: -74.0996718
  }, {
    lat: 40.6187738,
    lng: -74.0977192
  }, {
    lat: 40.619637000000004,
    lng: -74.0946722
  }, {
    lat: 40.6203048,
    lng: -74.0938783
  }, {
    lat: 40.6197184,
    lng: -74.0909815
  }, {
    lat: 40.619457800000006,
    lng: -74.0901446
  }, {
    lat: 40.6203048,
    lng: -74.0894151
  }, {
    lat: 40.61716130000001,
    lng: -74.0865827
  }, {
    lat: 40.6180408,
    lng: -74.0861964
  }, {
    lat: 40.6247348,
    lng: -74.08495190000001
  }, {
    lat: 40.6262493,
    lng: -74.084115
  }, {
    lat: 40.6268519,
    lng: -74.0840936
  }, {
    lat: 40.6282525,
    lng: -74.0834284
  }, {
    lat: 40.6310861,
    lng: -74.0880847
  }, {
    lat: 40.6302555,
    lng: -74.0889001
  }, {
    lat: 40.630467200000005,
    lng: -74.089222
  }, {
    lat: 40.63193280000001,
    lng: -74.0971613
  }, {
    lat: 40.631835099999996,
    lng: -74.0979767
  }, {
    lat: 40.63163970000001,
    lng: -74.0984058
  }, {
    lat: 40.6300927,
    lng: -74.0981269
  }, {
    lat: 40.629995,
    lng: -74.0992641
  }, {
    lat: 40.6286759,
    lng: -74.0989423
  }, {
    lat: 40.6284153,
    lng: -74.1008091
  }, {
    lat: 40.6247348,
    lng: -74.1001654
  }],
  color: '7CCFA9',
  center: {
    lat: 40.624547050000004,
    lng: -74.09541250000001
  }
}, {
  name: 'West New Brighton',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6345383,
    lng: -74.11720280000002
  }, {
    lat: 40.6289202,
    lng: -74.1162157
  }, {
    lat: 40.6292622,
    lng: -74.1133618
  }, {
    lat: 40.6306138,
    lng: -74.1060448
  }, {
    lat: 40.63056490000001,
    lng: -74.1056585
  }, {
    lat: 40.6455452,
    lng: -74.1088772
  }, {
    lat: 40.6453173,
    lng: -74.11033630000001
  }, {
    lat: 40.64482890000001,
    lng: -74.1118383
  }, {
    lat: 40.6428751,
    lng: -74.1151857
  }, {
    lat: 40.6424192,
    lng: -74.1154003
  }, {
    lat: 40.6417679,
    lng: -74.1172457
  }, {
    lat: 40.6416377,
    lng: -74.1175461
  }, {
    lat: 40.6418656,
    lng: -74.1179752
  }, {
    lat: 40.64154,
    lng: -74.118576
  }, {
    lat: 40.6395861,
    lng: -74.1177177
  }, {
    lat: 40.636069,
    lng: -74.117589
  }, {
    lat: 40.6345383,
    lng: -74.11720280000002
  }],
  color: 'CDDC39',
  center: {
    lat: 40.6372327,
    lng: -74.11211724999998
  }
}, {
  name: 'Port Richmond',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6396186,
    lng: -74.1429734
  }, {
    lat: 40.63554789999999,
    lng: -74.1447973
  }, {
    lat: 40.6325354,
    lng: -74.1456342
  }, {
    lat: 40.6304347,
    lng: -74.1458058
  }, {
    lat: 40.62717760000001,
    lng: -74.1455269
  }, {
    lat: 40.6249139,
    lng: -74.1462564
  }, {
    lat: 40.624979,
    lng: -74.1440248
  }, {
    lat: 40.6242462,
    lng: -74.1384459
  }, {
    lat: 40.6242136,
    lng: -74.1377163
  }, {
    lat: 40.6243602,
    lng: -74.1369867
  }, {
    lat: 40.6262005,
    lng: -74.1340685
  }, {
    lat: 40.62637960000001,
    lng: -74.1336393
  }, {
    lat: 40.6263471,
    lng: -74.1307211
  }, {
    lat: 40.6274871,
    lng: -74.12213800000002
  }, {
    lat: 40.6289365,
    lng: -74.1184258
  }, {
    lat: 40.6289202,
    lng: -74.1162157
  }, {
    lat: 40.636069,
    lng: -74.117589
  }, {
    lat: 40.6395861,
    lng: -74.1177177
  }, {
    lat: 40.64154,
    lng: -74.118576
  }, {
    lat: 40.6426227,
    lng: -74.1188442
  }, {
    lat: 40.6420447,
    lng: -74.1210866
  }, {
    lat: 40.6411329,
    lng: -74.1205072
  }, {
    lat: 40.6410841,
    lng: -74.1207862
  }, {
    lat: 40.6415074,
    lng: -74.1215587
  }, {
    lat: 40.64136090000001,
    lng: -74.1228247
  }, {
    lat: 40.6402699,
    lng: -74.1237473
  }, {
    lat: 40.6401723,
    lng: -74.1243482
  }, {
    lat: 40.6402699,
    lng: -74.1247344
  }, {
    lat: 40.6400908,
    lng: -74.1256142
  }, {
    lat: 40.6403839,
    lng: -74.1266227
  }, {
    lat: 40.6401723,
    lng: -74.1281462
  }, {
    lat: 40.6403025,
    lng: -74.1282105
  }, {
    lat: 40.6402862,
    lng: -74.1288114
  }, {
    lat: 40.6405142,
    lng: -74.1291547
  }, {
    lat: 40.6403514,
    lng: -74.1292834
  }, {
    lat: 40.6413446,
    lng: -74.1314507
  }, {
    lat: 40.6415888,
    lng: -74.1312575
  }, {
    lat: 40.641621400000005,
    lng: -74.1314936
  }, {
    lat: 40.641979600000006,
    lng: -74.1314936
  }, {
    lat: 40.6419959,
    lng: -74.1324377
  }, {
    lat: 40.641572499999995,
    lng: -74.1324592
  }, {
    lat: 40.6414423,
    lng: -74.133296
  }, {
    lat: 40.6417516,
    lng: -74.1334891
  }, {
    lat: 40.64176789999999,
    lng: -74.1342831
  }, {
    lat: 40.6418982,
    lng: -74.1344118
  }, {
    lat: 40.64049790000001,
    lng: -74.1411495
  }, {
    lat: 40.6401397,
    lng: -74.1412139
  }, {
    lat: 40.6401397,
    lng: -74.1415572
  }, {
    lat: 40.6403839,
    lng: -74.1415787
  }, {
    lat: 40.64028619999999,
    lng: -74.1423082
  }, {
    lat: 40.6396675,
    lng: -74.1423082
  }, {
    lat: 40.63953719999999,
    lng: -74.1424799
  }, {
    lat: 40.6396186,
    lng: -74.1429734
  }],
  color: 'CCCCCC',
  center: {
    lat: 40.63341815,
    lng: -74.13123604999998
  }
}, {
  name: 'Elm Park',
  borough: 'Staten Island',
  coords: [{
    lat: 40.635433899999995,
    lng: -74.1456342
  }, {
    lat: 40.6311512,
    lng: -74.14692160000001
  }, {
    lat: 40.6302392,
    lng: -74.1420078
  }, {
    lat: 40.6296367,
    lng: -74.1405916
  }, {
    lat: 40.6310535,
    lng: -74.1389179
  }, {
    lat: 40.633317,
    lng: -74.1365576
  }, {
    lat: 40.64111659999999,
    lng: -74.131043
  }, {
    lat: 40.6413446,
    lng: -74.1314507
  }, {
    lat: 40.6415888,
    lng: -74.1312575
  }, {
    lat: 40.641621400000005,
    lng: -74.1314936
  }, {
    lat: 40.641979600000006,
    lng: -74.1314936
  }, {
    lat: 40.6419959,
    lng: -74.1324377
  }, {
    lat: 40.641572499999995,
    lng: -74.1324592
  }, {
    lat: 40.6414423,
    lng: -74.133296
  }, {
    lat: 40.6417516,
    lng: -74.1334891
  }, {
    lat: 40.64176789999999,
    lng: -74.1342831
  }, {
    lat: 40.6418982,
    lng: -74.1344118
  }, {
    lat: 40.64049790000001,
    lng: -74.1411495
  }, {
    lat: 40.6401397,
    lng: -74.1412139
  }, {
    lat: 40.6401397,
    lng: -74.1415572
  }, {
    lat: 40.6403839,
    lng: -74.1415787
  }, {
    lat: 40.64028619999999,
    lng: -74.1423082
  }, {
    lat: 40.6396675,
    lng: -74.1423082
  }, {
    lat: 40.63953719999999,
    lng: -74.1424799
  }, {
    lat: 40.6396186,
    lng: -74.1429734
  }, {
    lat: 40.635710700000004,
    lng: -74.1449261
  }, {
    lat: 40.635433899999995,
    lng: -74.1456342
  }],
  color: '0BA9CC',
  center: {
    lat: 40.6358163,
    lng: -74.13898230000001
  }
}, {
  name: 'Mariners Harbor',
  borough: 'Staten Island',
  coords: [{
    lat: 40.64118179999999,
    lng: -74.1716194
  }, {
    lat: 40.6333659,
    lng: -74.1713619
  }, {
    lat: 40.6335613,
    lng: -74.1662979
  }, {
    lat: 40.6288713,
    lng: -74.1664696
  }, {
    lat: 40.6273731,
    lng: -74.1665125
  }, {
    lat: 40.6268519,
    lng: -74.1643238
  }, {
    lat: 40.6260702,
    lng: -74.1566849
  }, {
    lat: 40.6249139,
    lng: -74.1462564
  }, {
    lat: 40.62717760000001,
    lng: -74.1455269
  }, {
    lat: 40.631020899999996,
    lng: -74.1457844
  }, {
    lat: 40.6311512,
    lng: -74.14692160000001
  }, {
    lat: 40.635433899999995,
    lng: -74.1456342
  }, {
    lat: 40.635710700000004,
    lng: -74.1449261
  }, {
    lat: 40.6396186,
    lng: -74.1429734
  }, {
    lat: 40.63991169999999,
    lng: -74.1431665
  }, {
    lat: 40.6398792,
    lng: -74.1435528
  }, {
    lat: 40.6388045,
    lng: -74.1437674
  }, {
    lat: 40.6388045,
    lng: -74.1441107
  }, {
    lat: 40.6394884,
    lng: -74.14496900000002
  }, {
    lat: 40.6388045,
    lng: -74.1490889
  }, {
    lat: 40.6379904,
    lng: -74.1494751
  }, {
    lat: 40.6385766,
    lng: -74.1504192
  }, {
    lat: 40.6384789,
    lng: -74.1513634
  }, {
    lat: 40.6378275,
    lng: -74.1512775
  }, {
    lat: 40.6376647,
    lng: -74.1527367
  }, {
    lat: 40.637046,
    lng: -74.1527796
  }, {
    lat: 40.6373065,
    lng: -74.1547537
  }, {
    lat: 40.637795,
    lng: -74.1547537
  }, {
    lat: 40.6379904,
    lng: -74.1559982
  }, {
    lat: 40.6382509,
    lng: -74.1590023
  }, {
    lat: 40.637795,
    lng: -74.1592598
  }, {
    lat: 40.6379252,
    lng: -74.159646
  }, {
    lat: 40.6387394,
    lng: -74.1597319
  }, {
    lat: 40.6385114,
    lng: -74.1604185
  }, {
    lat: 40.6388371,
    lng: -74.1622639
  }, {
    lat: 40.6406933,
    lng: -74.161706
  }, {
    lat: 40.6410515,
    lng: -74.163208
  }, {
    lat: 40.6398466,
    lng: -74.1634226
  }, {
    lat: 40.63991169999999,
    lng: -74.1639805
  }, {
    lat: 40.6406282,
    lng: -74.1651821
  }, {
    lat: 40.6412143,
    lng: -74.1651821
  }, {
    lat: 40.6418005,
    lng: -74.1674995
  }, {
    lat: 40.6421912,
    lng: -74.1690016
  }, {
    lat: 40.6418005,
    lng: -74.1715336
  }, {
    lat: 40.64118179999999,
    lng: -74.1716194
  }],
  color: 'DB4436',
  center: {
    lat: 40.633552550000005,
    lng: -74.1572964
  }
}, {
  name: 'Shooters Island',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6442753,
    lng: -74.1614485
  }, {
    lat: 40.6440799,
    lng: -74.161706
  }, {
    lat: 40.6440148,
    lng: -74.1613412
  }, {
    lat: 40.6438357,
    lng: -74.1612124
  }, {
    lat: 40.6435589,
    lng: -74.1613197
  }, {
    lat: 40.6429076,
    lng: -74.1613841
  }, {
    lat: 40.6418656,
    lng: -74.161191
  }, {
    lat: 40.6413771,
    lng: -74.1596675
  }, {
    lat: 40.64175159999999,
    lng: -74.1588521
  }, {
    lat: 40.64210979999999,
    lng: -74.1587234
  }, {
    lat: 40.6425657,
    lng: -74.15838
  }, {
    lat: 40.6426146,
    lng: -74.1581225
  }, {
    lat: 40.643298400000006,
    lng: -74.1576934
  }, {
    lat: 40.64385200000001,
    lng: -74.1581011
  }, {
    lat: 40.6442753,
    lng: -74.1614485
  }],
  color: '000000',
  center: {
    lat: 40.6428262,
    lng: -74.15969969999998
  }
}, {
  name: 'Arlington',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6377787,
    lng: -74.171555
  }, {
    lat: 40.6333659,
    lng: -74.1713619
  }, {
    lat: 40.6335613,
    lng: -74.1662979
  }, {
    lat: 40.6338544,
    lng: -74.1602683
  }, {
    lat: 40.6379578,
    lng: -74.1602039
  }, {
    lat: 40.6385114,
    lng: -74.1604185
  }, {
    lat: 40.6388371,
    lng: -74.1622639
  }, {
    lat: 40.6406933,
    lng: -74.161706
  }, {
    lat: 40.6410515,
    lng: -74.163208
  }, {
    lat: 40.6398466,
    lng: -74.1634226
  }, {
    lat: 40.63991169999999,
    lng: -74.1639805
  }, {
    lat: 40.6406282,
    lng: -74.1651821
  }, {
    lat: 40.6412143,
    lng: -74.1651821
  }, {
    lat: 40.6421912,
    lng: -74.1690016
  }, {
    lat: 40.6418005,
    lng: -74.1715336
  }, {
    lat: 40.64118179999999,
    lng: -74.1716194
  }, {
    lat: 40.6377787,
    lng: -74.171555
  }],
  color: '9FC3FF',
  center: {
    lat: 40.63777855,
    lng: -74.16591165
  }
}, {
  name: 'Port Ivory',
  borough: 'Staten Island',
  coords: [{
    lat: 40.637567,
    lng: -74.1937852
  }, {
    lat: 40.637420500000005,
    lng: -74.1936564
  }, {
    lat: 40.637273900000004,
    lng: -74.1939998
  }, {
    lat: 40.6374368,
    lng: -74.1945791
  }, {
    lat: 40.6372902,
    lng: -74.1946864
  }, {
    lat: 40.636419,
    lng: -74.1944715
  }, {
    lat: 40.635267,
    lng: -74.1956515
  }, {
    lat: 40.62877360000001,
    lng: -74.1836143
  }, {
    lat: 40.62968560000001,
    lng: -74.1825414
  }, {
    lat: 40.632616799999994,
    lng: -74.1746664
  }, {
    lat: 40.6333659,
    lng: -74.1713619
  }, {
    lat: 40.64118179999999,
    lng: -74.1716194
  }, {
    lat: 40.6418005,
    lng: -74.1715336
  }, {
    lat: 40.64193070000001,
    lng: -74.1717696
  }, {
    lat: 40.6421098,
    lng: -74.17164090000001
  }, {
    lat: 40.6425332,
    lng: -74.1718554
  }, {
    lat: 40.6429076,
    lng: -74.171319
  }, {
    lat: 40.6432007,
    lng: -74.171555
  }, {
    lat: 40.6429076,
    lng: -74.1719842
  }, {
    lat: 40.6427774,
    lng: -74.1725421
  }, {
    lat: 40.64302159999999,
    lng: -74.1726065
  }, {
    lat: 40.64328209999999,
    lng: -74.1723704
  }, {
    lat: 40.6434287,
    lng: -74.1723919
  }, {
    lat: 40.6434938,
    lng: -74.1729069
  }, {
    lat: 40.64385200000001,
    lng: -74.1730571
  }, {
    lat: 40.6440799,
    lng: -74.172864
  }, {
    lat: 40.64500790000001,
    lng: -74.1739798
  }, {
    lat: 40.6450405,
    lng: -74.1746664
  }, {
    lat: 40.6451708,
    lng: -74.1750097
  }, {
    lat: 40.6450894,
    lng: -74.1753316
  }, {
    lat: 40.64460090000001,
    lng: -74.1755247
  }, {
    lat: 40.64463349999999,
    lng: -74.1756964
  }, {
    lat: 40.6444218,
    lng: -74.1756964
  }, {
    lat: 40.64409619999999,
    lng: -74.1754818
  }, {
    lat: 40.643396100000004,
    lng: -74.1755247
  }, {
    lat: 40.6435101,
    lng: -74.176662
  }, {
    lat: 40.6429239,
    lng: -74.1767049
  }, {
    lat: 40.64310300000001,
    lng: -74.177177
  }, {
    lat: 40.6429239,
    lng: -74.1777349
  }, {
    lat: 40.642647100000005,
    lng: -74.1777992
  }, {
    lat: 40.6425006,
    lng: -74.1787648
  }, {
    lat: 40.6429728,
    lng: -74.1790867
  }, {
    lat: 40.6436892,
    lng: -74.1789794
  }, {
    lat: 40.6450894,
    lng: -74.1791081
  }, {
    lat: 40.645007899999996,
    lng: -74.1793442
  }, {
    lat: 40.6443567,
    lng: -74.1793656
  }, {
    lat: 40.644275300000004,
    lng: -74.1803956
  }, {
    lat: 40.6444707,
    lng: -74.1805029
  }, {
    lat: 40.64458460000001,
    lng: -74.1807818
  }, {
    lat: 40.6449103,
    lng: -74.1808033
  }, {
    lat: 40.644861399999996,
    lng: -74.1810179
  }, {
    lat: 40.64460090000001,
    lng: -74.1811681
  }, {
    lat: 40.64482890000001,
    lng: -74.1829491
  }, {
    lat: 40.64460090000001,
    lng: -74.1837001
  }, {
    lat: 40.6439497,
    lng: -74.1836357
  }, {
    lat: 40.6436078,
    lng: -74.1834211
  }, {
    lat: 40.64333100000001,
    lng: -74.1834641
  }, {
    lat: 40.6429076,
    lng: -74.1832709
  }, {
    lat: 40.643249600000004,
    lng: -74.1838717
  }, {
    lat: 40.6435263,
    lng: -74.1841078
  }, {
    lat: 40.6440311,
    lng: -74.1848159
  }, {
    lat: 40.6439497,
    lng: -74.1850305
  }, {
    lat: 40.6434449,
    lng: -74.1860819
  }, {
    lat: 40.6435915,
    lng: -74.1863179
  }, {
    lat: 40.637567,
    lng: -74.1937852
  }],
  color: '62AF44',
  center: {
    lat: 40.6369722,
    lng: -74.18348524999999
  }
}, {
  name: 'Old Place',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6261679,
    lng: -74.1791511
  }, {
    lat: 40.623155,
    lng: -74.17586800000001
  }, {
    lat: 40.6219986,
    lng: -74.1737652
  }, {
    lat: 40.6215589,
    lng: -74.17213440000002
  }, {
    lat: 40.6211354,
    lng: -74.168787
  }, {
    lat: 40.623041,
    lng: -74.1675854
  }, {
    lat: 40.6273731,
    lng: -74.1665125
  }, {
    lat: 40.6288713,
    lng: -74.1664696
  }, {
    lat: 40.6335613,
    lng: -74.1662979
  }, {
    lat: 40.6333659,
    lng: -74.1713619
  }, {
    lat: 40.632616799999994,
    lng: -74.1746664
  }, {
    lat: 40.62968560000001,
    lng: -74.1825414
  }, {
    lat: 40.62877360000001,
    lng: -74.1836143
  }, {
    lat: 40.6261679,
    lng: -74.1791511
  }],
  color: '777777',
  center: {
    lat: 40.62734835,
    lng: -74.17495610000003
  }
}, {
  name: 'Graniteville',
  borough: 'Staten Island',
  coords: [{
    lat: 40.612225800000004,
    lng: -74.1538095
  }, {
    lat: 40.6158745,
    lng: -74.1528225
  }, {
    lat: 40.6175685,
    lng: -74.1521358
  }, {
    lat: 40.621966,
    lng: -74.1477585
  }, {
    lat: 40.6249139,
    lng: -74.1462564
  }, {
    lat: 40.6268519,
    lng: -74.1643238
  }, {
    lat: 40.6273731,
    lng: -74.1665125
  }, {
    lat: 40.623041,
    lng: -74.1675854
  }, {
    lat: 40.6211354,
    lng: -74.168787
  }, {
    lat: 40.6187738,
    lng: -74.1631651
  }, {
    lat: 40.616786600000005,
    lng: -74.1598606
  }, {
    lat: 40.612225800000004,
    lng: -74.1538095
  }],
  color: '795046',
  center: {
    lat: 40.61979945,
    lng: -74.15752169999996
  }
}, {
  name: 'Westerleigh',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6094892,
    lng: -74.150033
  }, {
    lat: 40.612258399999995,
    lng: -74.1361284
  }, {
    lat: 40.6125516,
    lng: -74.1306353
  }, {
    lat: 40.612519,
    lng: -74.1298628
  }, {
    lat: 40.6131054,
    lng: -74.1225672
  }, {
    lat: 40.6145063,
    lng: -74.1225672
  }, {
    lat: 40.6169169,
    lng: -74.123683
  }, {
    lat: 40.6181548,
    lng: -74.1235542
  }, {
    lat: 40.6193275,
    lng: -74.1233826
  }, {
    lat: 40.623953,
    lng: -74.1247559
  }, {
    lat: 40.6252233,
    lng: -74.1247559
  }, {
    lat: 40.62707989999999,
    lng: -74.1251421
  }, {
    lat: 40.6263471,
    lng: -74.1307211
  }, {
    lat: 40.62637960000001,
    lng: -74.1336393
  }, {
    lat: 40.6262005,
    lng: -74.1340685
  }, {
    lat: 40.6243602,
    lng: -74.1369867
  }, {
    lat: 40.6242136,
    lng: -74.1377163
  }, {
    lat: 40.624979,
    lng: -74.1440248
  }, {
    lat: 40.6249139,
    lng: -74.1462564
  }, {
    lat: 40.621966,
    lng: -74.1477585
  }, {
    lat: 40.6175685,
    lng: -74.1521358
  }, {
    lat: 40.6158745,
    lng: -74.1528225
  }, {
    lat: 40.612225800000004,
    lng: -74.1538095
  }, {
    lat: 40.6094892,
    lng: -74.150033
  }],
  color: '9FC3FF',
  center: {
    lat: 40.61828455,
    lng: -74.13818834999995
  }
}, {
  name: 'Bloomfield',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6311512,
    lng: -74.2005873
  }, {
    lat: 40.629197,
    lng: -74.2010593
  }, {
    lat: 40.62506049999999,
    lng: -74.2014885
  }, {
    lat: 40.62506049999999,
    lng: -74.2008018
  }, {
    lat: 40.6240833,
    lng: -74.2010164
  }, {
    lat: 40.6233016,
    lng: -74.20140270000002
  }, {
    lat: 40.6222592,
    lng: -74.2012739
  }, {
    lat: 40.62193349999999,
    lng: -74.2015314
  }, {
    lat: 40.62020699999999,
    lng: -74.2011023
  }, {
    lat: 40.6193275,
    lng: -74.2008877
  }, {
    lat: 40.6185131,
    lng: -74.2009735
  }, {
    lat: 40.6169495,
    lng: -74.2007589
  }, {
    lat: 40.6166237,
    lng: -74.1985273
  }, {
    lat: 40.61607,
    lng: -74.1975403
  }, {
    lat: 40.61567899999999,
    lng: -74.1967249
  }, {
    lat: 40.615711600000004,
    lng: -74.1961241
  }, {
    lat: 40.614604,
    lng: -74.1961241
  }, {
    lat: 40.6135289,
    lng: -74.1955662
  }, {
    lat: 40.6122584,
    lng: -74.1956091
  }, {
    lat: 40.6106294,
    lng: -74.1967678
  }, {
    lat: 40.6092611,
    lng: -74.1980982
  }, {
    lat: 40.6075995,
    lng: -74.1985273
  }, {
    lat: 40.6069805,
    lng: -74.1984844
  }, {
    lat: 40.6066547,
    lng: -74.1978836
  }, {
    lat: 40.6052537,
    lng: -74.1968966
  }, {
    lat: 40.6031032,
    lng: -74.1959953
  }, {
    lat: 40.6017673,
    lng: -74.1962099
  }, {
    lat: 40.600692,
    lng: -74.1950512
  }, {
    lat: 40.6011808,
    lng: -74.1941929
  }, {
    lat: 40.602419000000005,
    lng: -74.1902876
  }, {
    lat: 40.6018976,
    lng: -74.1863394
  }, {
    lat: 40.6020606,
    lng: -74.18500900000001
  }, {
    lat: 40.60261450000001,
    lng: -74.1841507
  }, {
    lat: 40.599779700000006,
    lng: -74.1782713
  }, {
    lat: 40.6021909,
    lng: -74.1749668
  }, {
    lat: 40.6040481,
    lng: -74.1727781
  }, {
    lat: 40.605384,
    lng: -74.169817
  }, {
    lat: 40.6065895,
    lng: -74.1707611
  }, {
    lat: 40.6145714,
    lng: -74.1688728
  }, {
    lat: 40.6206957,
    lng: -74.1677141
  }, {
    lat: 40.6211354,
    lng: -74.168787
  }, {
    lat: 40.6219986,
    lng: -74.1737652
  }, {
    lat: 40.623155,
    lng: -74.17586800000001
  }, {
    lat: 40.6261679,
    lng: -74.1791511
  }, {
    lat: 40.62877360000001,
    lng: -74.1836143
  }, {
    lat: 40.635267,
    lng: -74.1956515
  }, {
    lat: 40.6354502,
    lng: -74.1959524
  }, {
    lat: 40.63489650000001,
    lng: -74.1962099
  }, {
    lat: 40.63391949999999,
    lng: -74.1973257
  }, {
    lat: 40.6333333,
    lng: -74.1974115
  }, {
    lat: 40.633170500000006,
    lng: -74.1984844
  }, {
    lat: 40.632747099999996,
    lng: -74.1986132
  }, {
    lat: 40.6311512,
    lng: -74.2005873
  }],
  color: '3F5BA9',
  center: {
    lat: 40.617614950000004,
    lng: -74.18462275000002
  }
}, {
  name: 'Bulls Head',
  borough: 'Staten Island',
  coords: [{
    lat: 40.60206060000001,
    lng: -74.1671991
  }, {
    lat: 40.596684100000004,
    lng: -74.1683149
  }, {
    lat: 40.5963908,
    lng: -74.1677999
  }, {
    lat: 40.59443559999999,
    lng: -74.1683149
  }, {
    lat: 40.593686100000006,
    lng: -74.1664267
  }, {
    lat: 40.5934906,
    lng: -74.1644096
  }, {
    lat: 40.5933928,
    lng: -74.1634655
  }, {
    lat: 40.5922522,
    lng: -74.1635942
  }, {
    lat: 40.59303440000001,
    lng: -74.1626501
  }, {
    lat: 40.5939142,
    lng: -74.162178
  }, {
    lat: 40.5951851,
    lng: -74.1618776
  }, {
    lat: 40.596684100000004,
    lng: -74.162221
  }, {
    lat: 40.5969122,
    lng: -74.1612768
  }, {
    lat: 40.5987044,
    lng: -74.1615772
  }, {
    lat: 40.59863920000001,
    lng: -74.1623926
  }, {
    lat: 40.6002685,
    lng: -74.16282180000002
  }, {
    lat: 40.60033359999999,
    lng: -74.162221
  }, {
    lat: 40.601637,
    lng: -74.1625214
  }, {
    lat: 40.6043739,
    lng: -74.1616201
  }, {
    lat: 40.6041459,
    lng: -74.1600752
  }, {
    lat: 40.60743660000001,
    lng: -74.158144
  }, {
    lat: 40.6078276,
    lng: -74.1584873
  }, {
    lat: 40.6094892,
    lng: -74.150033
  }, {
    lat: 40.612225800000004,
    lng: -74.1538095
  }, {
    lat: 40.616786600000005,
    lng: -74.1598606
  }, {
    lat: 40.6187738,
    lng: -74.1631651
  }, {
    lat: 40.6206957,
    lng: -74.1677141
  }, {
    lat: 40.6145714,
    lng: -74.1688728
  }, {
    lat: 40.6065895,
    lng: -74.1707611
  }, {
    lat: 40.605384,
    lng: -74.169817
  }, {
    lat: 40.6040481,
    lng: -74.1727781
  }, {
    lat: 40.6021909,
    lng: -74.1749668
  }, {
    lat: 40.60297289999999,
    lng: -74.1725636
  }, {
    lat: 40.6024841,
    lng: -74.1714478
  }, {
    lat: 40.60206060000001,
    lng: -74.1671991
  }],
  color: 'F8971B',
  center: {
    lat: 40.606473949999994,
    lng: -74.1624999
  }
}, {
  name: "Prall's Island",
  borough: 'Staten Island',
  coords: [{
    lat: 40.614278199999994,
    lng: -74.2017889
  }, {
    lat: 40.613757,
    lng: -74.2020464
  }, {
    lat: 40.6137244,
    lng: -74.2025614
  }, {
    lat: 40.6134638,
    lng: -74.202776
  }, {
    lat: 40.6125842,
    lng: -74.2025614
  }, {
    lat: 40.611281,
    lng: -74.202776
  }, {
    lat: 40.61001039999999,
    lng: -74.2028189
  }, {
    lat: 40.609815,
    lng: -74.2031193
  }, {
    lat: 40.6090656,
    lng: -74.2030334
  }, {
    lat: 40.6085769,
    lng: -74.203248
  }, {
    lat: 40.6064918,
    lng: -74.2024326
  }, {
    lat: 40.6061659,
    lng: -74.2024326
  }, {
    lat: 40.60460200000001,
    lng: -74.2014456
  }, {
    lat: 40.6040481,
    lng: -74.200716
  }, {
    lat: 40.6037223,
    lng: -74.2006731
  }, {
    lat: 40.6033965,
    lng: -74.2000294
  }, {
    lat: 40.6018325,
    lng: -74.1991282
  }, {
    lat: 40.60160440000001,
    lng: -74.1985703
  }, {
    lat: 40.60290770000001,
    lng: -74.1980124
  }, {
    lat: 40.603592,
    lng: -74.1983128
  }, {
    lat: 40.60421100000001,
    lng: -74.1990423
  }, {
    lat: 40.6051233,
    lng: -74.1994286
  }, {
    lat: 40.605775,
    lng: -74.2001581
  }, {
    lat: 40.6066221,
    lng: -74.2005444
  }, {
    lat: 40.608186,
    lng: -74.2006731
  }, {
    lat: 40.60988009999999,
    lng: -74.2000294
  }, {
    lat: 40.61248640000001,
    lng: -74.1984415
  }, {
    lat: 40.613366000000006,
    lng: -74.1983128
  }, {
    lat: 40.6139851,
    lng: -74.1983986
  }, {
    lat: 40.6141479,
    lng: -74.1988707
  }, {
    lat: 40.613757,
    lng: -74.2005873
  }, {
    lat: 40.614278199999994,
    lng: -74.2017889
  }],
  color: 'F4B400',
  center: {
    lat: 40.6079413,
    lng: -74.20063019999998
  }
}, {
  name: 'Meiers Corner',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6106783,
    lng: -74.1265798
  }, {
    lat: 40.6127471,
    lng: -74.12683730000002
  }, {
    lat: 40.6127308,
    lng: -74.1270947
  }, {
    lat: 40.6163794,
    lng: -74.1276097
  }, {
    lat: 40.616086200000005,
    lng: -74.1310859
  }, {
    lat: 40.6164772,
    lng: -74.1311502
  }, {
    lat: 40.61719380000001,
    lng: -74.1358495
  }, {
    lat: 40.6119978,
    lng: -74.13728710000001
  }, {
    lat: 40.6121444,
    lng: -74.1366434
  }, {
    lat: 40.6099779,
    lng: -74.1368151
  }, {
    lat: 40.6102548,
    lng: -74.132266
  }, {
    lat: 40.6106783,
    lng: -74.1265798
  }],
  color: '795046',
  center: {
    lat: 40.61358585000001,
    lng: -74.13193345000002
  }
}, {
  name: 'Castleton Corners',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6163631,
    lng: -74.1035128
  }, {
    lat: 40.61859460000001,
    lng: -74.1054869
  }, {
    lat: 40.619034400000004,
    lng: -74.10606620000001
  }, {
    lat: 40.6196044,
    lng: -74.1073966
  }, {
    lat: 40.6209237,
    lng: -74.11033630000001
  }, {
    lat: 40.622422099999994,
    lng: -74.11261080000001
  }, {
    lat: 40.6232038,
    lng: -74.1135979
  }, {
    lat: 40.6247999,
    lng: -74.1177177
  }, {
    lat: 40.6266565,
    lng: -74.1203356
  }, {
    lat: 40.6278942,
    lng: -74.1212368
  }, {
    lat: 40.6274871,
    lng: -74.12213800000002
  }, {
    lat: 40.62707989999999,
    lng: -74.1251421
  }, {
    lat: 40.6263471,
    lng: -74.1307211
  }, {
    lat: 40.6262982,
    lng: -74.13127900000002
  }, {
    lat: 40.62427869999999,
    lng: -74.1320515
  }, {
    lat: 40.6226827,
    lng: -74.1321373
  }, {
    lat: 40.6164772,
    lng: -74.1311502
  }, {
    lat: 40.616086200000005,
    lng: -74.1310859
  }, {
    lat: 40.6125516,
    lng: -74.1306353
  }, {
    lat: 40.612258399999995,
    lng: -74.1361284
  }, {
    lat: 40.6121444,
    lng: -74.1366434
  }, {
    lat: 40.6094892,
    lng: -74.150033
  }, {
    lat: 40.6083814,
    lng: -74.1482306
  }, {
    lat: 40.60756690000001,
    lng: -74.144454
  }, {
    lat: 40.6083163,
    lng: -74.1289186
  }, {
    lat: 40.609261100000005,
    lng: -74.1230822
  }, {
    lat: 40.61085750000001,
    lng: -74.1174603
  }, {
    lat: 40.6110856,
    lng: -74.1167736
  }, {
    lat: 40.6123561,
    lng: -74.11698820000001
  }, {
    lat: 40.6135289,
    lng: -74.1168165
  }, {
    lat: 40.6137896,
    lng: -74.1132545
  }, {
    lat: 40.615223,
    lng: -74.1062593
  }, {
    lat: 40.6163631,
    lng: -74.1035128
  }],
  color: '777777',
  center: {
    lat: 40.617730550000005,
    lng: -74.12677289999999
  }
}, {
  name: 'Clifton',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6147017,
    lng: -74.0772057
  }, {
    lat: 40.6145714,
    lng: -74.0762186
  }, {
    lat: 40.6170472,
    lng: -74.0745878
  }, {
    lat: 40.6185457,
    lng: -74.0721846
  }, {
    lat: 40.61971839999999,
    lng: -74.0712404
  }, {
    lat: 40.6207282,
    lng: -74.0712404
  }, {
    lat: 40.622161500000004,
    lng: -74.0717983
  }, {
    lat: 40.6226827,
    lng: -74.0708113
  }, {
    lat: 40.62310610000001,
    lng: -74.0712833
  }, {
    lat: 40.6247348,
    lng: -74.0722919
  }, {
    lat: 40.625874800000005,
    lng: -74.072485
  }, {
    lat: 40.6253211,
    lng: -74.0774202
  }, {
    lat: 40.6227804,
    lng: -74.0852737
  }, {
    lat: 40.6180408,
    lng: -74.0861964
  }, {
    lat: 40.61716130000001,
    lng: -74.0865827
  }, {
    lat: 40.6151741,
    lng: -74.0878916
  }, {
    lat: 40.61449,
    lng: -74.0874624
  }, {
    lat: 40.6133172,
    lng: -74.0871835
  }, {
    lat: 40.617796500000004,
    lng: -74.0811539
  }, {
    lat: 40.6147017,
    lng: -74.0772057
  }],
  color: '3F5BA9',
  center: {
    lat: 40.619596,
    lng: -74.07935144999999
  }
}, {
  name: 'Rosebank',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6214123,
    lng: -74.0700817
  }, {
    lat: 40.6226827,
    lng: -74.0708113
  }, {
    lat: 40.622161500000004,
    lng: -74.0717983
  }, {
    lat: 40.6207282,
    lng: -74.0712404
  }, {
    lat: 40.61971839999999,
    lng: -74.0712404
  }, {
    lat: 40.6185457,
    lng: -74.0721846
  }, {
    lat: 40.6170472,
    lng: -74.0745878
  }, {
    lat: 40.6145714,
    lng: -74.0762186
  }, {
    lat: 40.6078927,
    lng: -74.0802526
  }, {
    lat: 40.6062637,
    lng: -74.081583
  }, {
    lat: 40.6061008,
    lng: -74.0765619
  }, {
    lat: 40.6079253,
    lng: -74.0762186
  }, {
    lat: 40.6095543,
    lng: -74.0749741
  }, {
    lat: 40.6157442,
    lng: -74.0627861
  }, {
    lat: 40.61672149999999,
    lng: -74.0637732
  }, {
    lat: 40.61750330000001,
    lng: -74.0650177
  }, {
    lat: 40.617796500000004,
    lng: -74.0646744
  }, {
    lat: 40.6190669,
    lng: -74.0666056
  }, {
    lat: 40.620825999999994,
    lng: -74.0691376
  }, {
    lat: 40.6214123,
    lng: -74.0700817
  }],
  color: 'CDDC39',
  center: {
    lat: 40.614391749999996,
    lng: -74.07218454999997
  }
}, {
  name: 'Grymes Hill',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6104991,
    lng: -74.0978479
  }, {
    lat: 40.6105317,
    lng: -74.0950584
  }, {
    lat: 40.610271100000006,
    lng: -74.0934706
  }, {
    lat: 40.6090982,
    lng: -74.0904236
  }, {
    lat: 40.6100756,
    lng: -74.0893507
  }, {
    lat: 40.6133172,
    lng: -74.0871835
  }, {
    lat: 40.61449,
    lng: -74.0874624
  }, {
    lat: 40.6151741,
    lng: -74.0878916
  }, {
    lat: 40.61716130000001,
    lng: -74.0865827
  }, {
    lat: 40.6180408,
    lng: -74.0861964
  }, {
    lat: 40.6227804,
    lng: -74.0852737
  }, {
    lat: 40.6247348,
    lng: -74.08495190000001
  }, {
    lat: 40.6262493,
    lng: -74.084115
  }, {
    lat: 40.6268519,
    lng: -74.0840936
  }, {
    lat: 40.6282525,
    lng: -74.0834284
  }, {
    lat: 40.6310861,
    lng: -74.0880847
  }, {
    lat: 40.6302555,
    lng: -74.0889001
  }, {
    lat: 40.6299787,
    lng: -74.08939360000001
  }, {
    lat: 40.6260051,
    lng: -74.0919256
  }, {
    lat: 40.6196207,
    lng: -74.0996718
  }, {
    lat: 40.6203211,
    lng: -74.1002512
  }, {
    lat: 40.620760800000006,
    lng: -74.1000581
  }, {
    lat: 40.62115169999999,
    lng: -74.1018605
  }, {
    lat: 40.620093,
    lng: -74.103384
  }, {
    lat: 40.619246100000005,
    lng: -74.1042638
  }, {
    lat: 40.61859460000001,
    lng: -74.1054869
  }, {
    lat: 40.6163631,
    lng: -74.1035128
  }, {
    lat: 40.614604,
    lng: -74.1020536
  }, {
    lat: 40.61297509999999,
    lng: -74.0997791
  }, {
    lat: 40.6104991,
    lng: -74.0978479
  }],
  color: 'B29189',
  center: {
    lat: 40.62009215,
    lng: -74.09445764999998
  }
}, {
  name: 'Sunnyside',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6103037,
    lng: -74.1088343
  }, {
    lat: 40.61027109999999,
    lng: -74.1063023
  }, {
    lat: 40.6104991,
    lng: -74.0978479
  }, {
    lat: 40.61242130000001,
    lng: -74.09935000000002
  }, {
    lat: 40.6128448,
    lng: -74.0981054
  }, {
    lat: 40.6134638,
    lng: -74.0979767
  }, {
    lat: 40.6142456,
    lng: -74.097333
  }, {
    lat: 40.6154184,
    lng: -74.0972042
  }, {
    lat: 40.6187738,
    lng: -74.0977192
  }, {
    lat: 40.6196207,
    lng: -74.0996718
  }, {
    lat: 40.6203211,
    lng: -74.1002512
  }, {
    lat: 40.620760800000006,
    lng: -74.1000581
  }, {
    lat: 40.62115169999999,
    lng: -74.1018605
  }, {
    lat: 40.620093,
    lng: -74.103384
  }, {
    lat: 40.619246100000005,
    lng: -74.1042638
  }, {
    lat: 40.61859460000001,
    lng: -74.1054869
  }, {
    lat: 40.6163631,
    lng: -74.1035128
  }, {
    lat: 40.615223,
    lng: -74.1062593
  }, {
    lat: 40.6137896,
    lng: -74.1132545
  }, {
    lat: 40.6135289,
    lng: -74.1168165
  }, {
    lat: 40.6123561,
    lng: -74.11698820000001
  }, {
    lat: 40.6110856,
    lng: -74.1167736
  }, {
    lat: 40.611248399999994,
    lng: -74.1142416
  }, {
    lat: 40.6104014,
    lng: -74.1108084
  }, {
    lat: 40.6103037,
    lng: -74.1088343
  }],
  color: 'DB4436',
  center: {
    lat: 40.615711399999995,
    lng: -74.1070962
  }
}, {
  name: 'Park Hill',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6070131,
    lng: -74.0851879
  }, {
    lat: 40.6064918,
    lng: -74.0832353
  }, {
    lat: 40.6062637,
    lng: -74.081583
  }, {
    lat: 40.6078927,
    lng: -74.0802526
  }, {
    lat: 40.6145714,
    lng: -74.0762186
  }, {
    lat: 40.6147017,
    lng: -74.0772057
  }, {
    lat: 40.617796500000004,
    lng: -74.0811539
  }, {
    lat: 40.6133172,
    lng: -74.0871835
  }, {
    lat: 40.6100756,
    lng: -74.0893507
  }, {
    lat: 40.6090982,
    lng: -74.0904236
  }, {
    lat: 40.607681,
    lng: -74.0870976
  }, {
    lat: 40.6070131,
    lng: -74.0851879
  }],
  color: '009D57',
  center: {
    lat: 40.6120301,
    lng: -74.08332110000003
  }
}, {
  name: 'Shore Acres',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6136511,
    lng: -74.0610695
  }, {
    lat: 40.6145388,
    lng: -74.0616059
  }, {
    lat: 40.6157442,
    lng: -74.0627861
  }, {
    lat: 40.6095543,
    lng: -74.0749741
  }, {
    lat: 40.6079253,
    lng: -74.0762186
  }, {
    lat: 40.6061008,
    lng: -74.0765619
  }, {
    lat: 40.605905299999996,
    lng: -74.0748453
  }, {
    lat: 40.6053025,
    lng: -74.0723991
  }, {
    lat: 40.6034942,
    lng: -74.0678287
  }, {
    lat: 40.6020606,
    lng: -74.062829
  }, {
    lat: 40.6043739,
    lng: -74.06461
  }, {
    lat: 40.6063126,
    lng: -74.0603828
  }, {
    lat: 40.6073389,
    lng: -74.0611553
  }, {
    lat: 40.6084629,
    lng: -74.0583444
  }, {
    lat: 40.608984199999995,
    lng: -74.0573788
  }, {
    lat: 40.609619499999994,
    lng: -74.058044
  }, {
    lat: 40.6102222,
    lng: -74.058795
  }, {
    lat: 40.6108086,
    lng: -74.0591383
  }, {
    lat: 40.6110204,
    lng: -74.0589023
  }, {
    lat: 40.6118023,
    lng: -74.0595245
  }, {
    lat: 40.6118837,
    lng: -74.06027560000001
  }, {
    lat: 40.6123276,
    lng: -74.06059750000001
  }, {
    lat: 40.6130647,
    lng: -74.0606833
  }, {
    lat: 40.61304839999999,
    lng: -74.0608013
  }, {
    lat: 40.6136511,
    lng: -74.0610695
  }],
  color: 'B29189',
  center: {
    lat: 40.608902400000005,
    lng: -74.06697035000002
  }
}, {
  name: 'Arrochar',
  borough: 'Staten Island',
  coords: [{
    lat: 40.59551100000001,
    lng: -74.0838575
  }, {
    lat: 40.5902317,
    lng: -74.080596
  }, {
    lat: 40.5853432,
    lng: -74.0711546
  }, {
    lat: 40.588309,
    lng: -74.0687084
  }, {
    lat: 40.5916982,
    lng: -74.0651035
  }, {
    lat: 40.59303440000001,
    lng: -74.0633011
  }, {
    lat: 40.593881599999996,
    lng: -74.0629578
  }, {
    lat: 40.595348,
    lng: -74.0627861
  }, {
    lat: 40.596390799999995,
    lng: -74.0617561
  }, {
    lat: 40.5988999,
    lng: -74.0637732
  }, {
    lat: 40.5999426,
    lng: -74.0607262
  }, {
    lat: 40.60186509999999,
    lng: -74.0619707
  }, {
    lat: 40.6020606,
    lng: -74.062829
  }, {
    lat: 40.6034942,
    lng: -74.0678287
  }, {
    lat: 40.6053025,
    lng: -74.0723991
  }, {
    lat: 40.605905299999996,
    lng: -74.0748453
  }, {
    lat: 40.6061008,
    lng: -74.0765619
  }, {
    lat: 40.6061008,
    lng: -74.0778923
  }, {
    lat: 40.6046672,
    lng: -74.0779352
  }, {
    lat: 40.6012134,
    lng: -74.0764332
  }, {
    lat: 40.5997471,
    lng: -74.0771198
  }, {
    lat: 40.5984437,
    lng: -74.078536
  }, {
    lat: 40.5986718,
    lng: -74.0817547
  }, {
    lat: 40.59743360000001,
    lng: -74.0848017
  }, {
    lat: 40.5967493,
    lng: -74.0855312
  }, {
    lat: 40.5958694,
    lng: -74.08583160000002
  }, {
    lat: 40.59551100000001,
    lng: -74.0838575
  }],
  color: 'F4B400',
  center: {
    lat: 40.595721999999995,
    lng: -74.07327889999999
  }
}, {
  name: 'South Beach',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5943053,
    lng: -74.05931
  }, {
    lat: 40.596390799999995,
    lng: -74.0617561
  }, {
    lat: 40.595348,
    lng: -74.0627861
  }, {
    lat: 40.593881599999996,
    lng: -74.0629578
  }, {
    lat: 40.59303440000001,
    lng: -74.0633011
  }, {
    lat: 40.5916982,
    lng: -74.0651035
  }, {
    lat: 40.588309,
    lng: -74.0687084
  }, {
    lat: 40.5853432,
    lng: -74.0711546
  }, {
    lat: 40.5902317,
    lng: -74.080596
  }, {
    lat: 40.5920893,
    lng: -74.0817547
  }, {
    lat: 40.5911442,
    lng: -74.0829563
  }, {
    lat: 40.584723999999994,
    lng: -74.0884924
  }, {
    lat: 40.5783031,
    lng: -74.0758324
  }, {
    lat: 40.5801935,
    lng: -74.07402990000001
  }, {
    lat: 40.5821492,
    lng: -74.071455
  }, {
    lat: 40.5832573,
    lng: -74.0710258
  }, {
    lat: 40.5878201,
    lng: -74.0661764
  }, {
    lat: 40.5886023,
    lng: -74.0646744
  }, {
    lat: 40.5890259,
    lng: -74.064889
  }, {
    lat: 40.5920567,
    lng: -74.0622282
  }, {
    lat: 40.5943053,
    lng: -74.05931
  }],
  color: '4186F0',
  center: {
    lat: 40.58734695,
    lng: -74.07390120000002
  }
}, {
  name: 'Dongan Hills',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5865654,
    lng: -74.0920973
  }, {
    lat: 40.584723999999994,
    lng: -74.0884924
  }, {
    lat: 40.5911442,
    lng: -74.0829563
  }, {
    lat: 40.5920893,
    lng: -74.0817547
  }, {
    lat: 40.59551100000001,
    lng: -74.0838575
  }, {
    lat: 40.5958694,
    lng: -74.08583160000002
  }, {
    lat: 40.5961301,
    lng: -74.0888786
  }, {
    lat: 40.59613010000001,
    lng: -74.0898228
  }, {
    lat: 40.5970099,
    lng: -74.0933847
  }, {
    lat: 40.596456,
    lng: -74.0941143
  }, {
    lat: 40.59622790000001,
    lng: -74.0953159
  }, {
    lat: 40.5952177,
    lng: -74.0975904
  }, {
    lat: 40.593849,
    lng: -74.099865
  }, {
    lat: 40.5930995,
    lng: -74.1005945
  }, {
    lat: 40.59189380000001,
    lng: -74.1010237
  }, {
    lat: 40.5909161,
    lng: -74.100852
  }, {
    lat: 40.5865654,
    lng: -74.0920973
  }],
  color: 'A61B4A',
  center: {
    lat: 40.59086695,
    lng: -74.09138919999998
  }
}, {
  name: 'Concord',
  borough: 'Staten Island',
  coords: [{
    lat: 40.597792,
    lng: -74.0718412
  }, {
    lat: 40.6012786,
    lng: -74.0615845
  }, {
    lat: 40.60186509999999,
    lng: -74.0619707
  }, {
    lat: 40.6020606,
    lng: -74.062829
  }, {
    lat: 40.6034942,
    lng: -74.0678287
  }, {
    lat: 40.6053025,
    lng: -74.0723991
  }, {
    lat: 40.605905299999996,
    lng: -74.0748453
  }, {
    lat: 40.6061008,
    lng: -74.0765619
  }, {
    lat: 40.6061008,
    lng: -74.0778923
  }, {
    lat: 40.6062637,
    lng: -74.081583
  }, {
    lat: 40.6070131,
    lng: -74.0851879
  }, {
    lat: 40.6090982,
    lng: -74.0904236
  }, {
    lat: 40.60671980000001,
    lng: -74.09269810000002
  }, {
    lat: 40.6059379,
    lng: -74.092741
  }, {
    lat: 40.604178499999996,
    lng: -74.0924406
  }, {
    lat: 40.60111560000001,
    lng: -74.0928698
  }, {
    lat: 40.5993561,
    lng: -74.0916681
  }, {
    lat: 40.5985741,
    lng: -74.0917969
  }, {
    lat: 40.5974987,
    lng: -74.0926552
  }, {
    lat: 40.5970099,
    lng: -74.0933847
  }, {
    lat: 40.59613010000001,
    lng: -74.0898228
  }, {
    lat: 40.5961301,
    lng: -74.0888786
  }, {
    lat: 40.5958694,
    lng: -74.08583160000002
  }, {
    lat: 40.5967493,
    lng: -74.0855312
  }, {
    lat: 40.59743360000001,
    lng: -74.0848017
  }, {
    lat: 40.5986718,
    lng: -74.0817547
  }, {
    lat: 40.5984437,
    lng: -74.078536
  }, {
    lat: 40.5982808,
    lng: -74.0766907
  }, {
    lat: 40.5976291,
    lng: -74.0749741
  }, {
    lat: 40.5976291,
    lng: -74.0738153
  }, {
    lat: 40.597172900000004,
    lng: -74.0736008
  }, {
    lat: 40.597792,
    lng: -74.0718412
  }],
  color: '777777',
  center: {
    lat: 40.6024838,
    lng: -74.07748459999999
  }
}, {
  name: 'Grasmere',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6019302,
    lng: -74.0822268
  }, {
    lat: 40.60362450000001,
    lng: -74.0835571
  }, {
    lat: 40.6062637,
    lng: -74.081583
  }, {
    lat: 40.6070131,
    lng: -74.0851879
  }, {
    lat: 40.6090982,
    lng: -74.0904236
  }, {
    lat: 40.60671980000001,
    lng: -74.09269810000002
  }, {
    lat: 40.604178499999996,
    lng: -74.0924406
  }, {
    lat: 40.60111560000001,
    lng: -74.0928698
  }, {
    lat: 40.5993561,
    lng: -74.0916681
  }, {
    lat: 40.5985741,
    lng: -74.0917969
  }, {
    lat: 40.5970099,
    lng: -74.0933847
  }, {
    lat: 40.59613010000001,
    lng: -74.0898228
  }, {
    lat: 40.5961301,
    lng: -74.0888786
  }, {
    lat: 40.5958694,
    lng: -74.08583160000002
  }, {
    lat: 40.5967493,
    lng: -74.0855312
  }, {
    lat: 40.59743360000001,
    lng: -74.0848017
  }, {
    lat: 40.5986718,
    lng: -74.0817547
  }, {
    lat: 40.5998774,
    lng: -74.0811539
  }, {
    lat: 40.6007572,
    lng: -74.0812397
  }, {
    lat: 40.6019302,
    lng: -74.0822268
  }],
  color: '93D7E8',
  center: {
    lat: 40.6024838,
    lng: -74.0872693
  }
}, {
  name: 'Old Town',
  borough: 'Staten Island',
  coords: [{
    lat: 40.60088760000001,
    lng: -74.08971550000001
  }, {
    lat: 40.5993561,
    lng: -74.0916681
  }, {
    lat: 40.5985741,
    lng: -74.0917969
  }, {
    lat: 40.5970099,
    lng: -74.0933847
  }, {
    lat: 40.59613010000001,
    lng: -74.0898228
  }, {
    lat: 40.5961301,
    lng: -74.0888786
  }, {
    lat: 40.5958694,
    lng: -74.08583160000002
  }, {
    lat: 40.5967493,
    lng: -74.0855312
  }, {
    lat: 40.59743360000001,
    lng: -74.0848017
  }, {
    lat: 40.5986718,
    lng: -74.0817547
  }, {
    lat: 40.5998774,
    lng: -74.0811539
  }, {
    lat: 40.6007572,
    lng: -74.0812397
  }, {
    lat: 40.6019302,
    lng: -74.0822268
  }, {
    lat: 40.6018651,
    lng: -74.0842438
  }, {
    lat: 40.6011156,
    lng: -74.0871406
  }, {
    lat: 40.6011156,
    lng: -74.0882993
  }, {
    lat: 40.60088760000001,
    lng: -74.08971550000001
  }],
  color: '000000',
  center: {
    lat: 40.5988998,
    lng: -74.0872693
  }
}, {
  name: 'Todt Hill',
  borough: 'Staten Island',
  coords: [{
    lat: 40.60978240000001,
    lng: -74.1214085
  }, {
    lat: 40.60877240000001,
    lng: -74.1211939
  }, {
    lat: 40.60929370000001,
    lng: -74.1175032
  }, {
    lat: 40.6080556,
    lng: -74.1169024
  }, {
    lat: 40.6073714,
    lng: -74.1157866
  }, {
    lat: 40.604569399999995,
    lng: -74.1153145
  }, {
    lat: 40.6048301,
    lng: -74.1144133
  }, {
    lat: 40.6058075,
    lng: -74.1136408
  }, {
    lat: 40.6063289,
    lng: -74.1131687
  }, {
    lat: 40.6070456,
    lng: -74.1132116
  }, {
    lat: 40.60841400000001,
    lng: -74.1123962
  }, {
    lat: 40.6089027,
    lng: -74.112525
  }, {
    lat: 40.608805,
    lng: -74.1090059
  }, {
    lat: 40.6077298,
    lng: -74.1095209
  }, {
    lat: 40.6072411,
    lng: -74.1035986
  }, {
    lat: 40.6061659,
    lng: -74.1035557
  }, {
    lat: 40.605905299999996,
    lng: -74.1045856
  }, {
    lat: 40.6054817,
    lng: -74.10428520000002
  }, {
    lat: 40.605188500000004,
    lng: -74.1051435
  }, {
    lat: 40.60531879999999,
    lng: -74.1061735
  }, {
    lat: 40.605514299999996,
    lng: -74.1092634
  }, {
    lat: 40.6050582,
    lng: -74.1106367
  }, {
    lat: 40.6046346,
    lng: -74.110465
  }, {
    lat: 40.6040481,
    lng: -74.1133833
  }, {
    lat: 40.60303809999999,
    lng: -74.1129971
  }, {
    lat: 40.602256100000005,
    lng: -74.1150141
  }, {
    lat: 40.600626899999995,
    lng: -74.1134691
  }, {
    lat: 40.5996819,
    lng: -74.1153145
  }, {
    lat: 40.5988021,
    lng: -74.1146278
  }, {
    lat: 40.5991606,
    lng: -74.1138554
  }, {
    lat: 40.5991606,
    lng: -74.11243920000001
  }, {
    lat: 40.5982156,
    lng: -74.1112804
  }, {
    lat: 40.5971077,
    lng: -74.1114092
  }, {
    lat: 40.5961953,
    lng: -74.1108084
  }, {
    lat: 40.5956087,
    lng: -74.1119242
  }, {
    lat: 40.596684100000004,
    lng: -74.112525
  }, {
    lat: 40.5962279,
    lng: -74.1132545
  }, {
    lat: 40.5969448,
    lng: -74.1154432
  }, {
    lat: 40.595836799999994,
    lng: -74.1154861
  }, {
    lat: 40.5951525,
    lng: -74.1139841
  }, {
    lat: 40.594012,
    lng: -74.1137695
  }, {
    lat: 40.5936209,
    lng: -74.11304
  }, {
    lat: 40.5944682,
    lng: -74.112525
  }, {
    lat: 40.5937513,
    lng: -74.1121387
  }, {
    lat: 40.5935883,
    lng: -74.1115808
  }, {
    lat: 40.59192639999999,
    lng: -74.1119242
  }, {
    lat: 40.59140489999999,
    lng: -74.1106796
  }, {
    lat: 40.5893192,
    lng: -74.1113663
  }, {
    lat: 40.58863490000001,
    lng: -74.1112804
  }, {
    lat: 40.5891237,
    lng: -74.1120529
  }, {
    lat: 40.5891889,
    lng: -74.112525
  }, {
    lat: 40.58821120000001,
    lng: -74.1128254
  }, {
    lat: 40.587266099999994,
    lng: -74.1117954
  }, {
    lat: 40.5863861,
    lng: -74.1103792
  }, {
    lat: 40.5809432,
    lng: -74.1138554
  }, {
    lat: 40.5800958,
    lng: -74.1139841
  }, {
    lat: 40.5819536,
    lng: -74.1108084
  }, {
    lat: 40.5827684,
    lng: -74.108963
  }, {
    lat: 40.5891889,
    lng: -74.1015816
  }, {
    lat: 40.5900362,
    lng: -74.1008949
  }, {
    lat: 40.5909161,
    lng: -74.100852
  }, {
    lat: 40.59189380000001,
    lng: -74.1010237
  }, {
    lat: 40.5930995,
    lng: -74.1005945
  }, {
    lat: 40.593849,
    lng: -74.099865
  }, {
    lat: 40.5952177,
    lng: -74.0975904
  }, {
    lat: 40.59622790000001,
    lng: -74.0953159
  }, {
    lat: 40.596456,
    lng: -74.0941143
  }, {
    lat: 40.5970099,
    lng: -74.0933847
  }, {
    lat: 40.5985741,
    lng: -74.0917969
  }, {
    lat: 40.5993561,
    lng: -74.0916681
  }, {
    lat: 40.60111560000001,
    lng: -74.0928698
  }, {
    lat: 40.604178499999996,
    lng: -74.0924406
  }, {
    lat: 40.60671980000001,
    lng: -74.09269810000002
  }, {
    lat: 40.6090982,
    lng: -74.0904236
  }, {
    lat: 40.610271100000006,
    lng: -74.0934706
  }, {
    lat: 40.6105317,
    lng: -74.0950584
  }, {
    lat: 40.6104014,
    lng: -74.1108084
  }, {
    lat: 40.611248399999994,
    lng: -74.1142416
  }, {
    lat: 40.6110856,
    lng: -74.1167736
  }, {
    lat: 40.60978240000001,
    lng: -74.1214085
  }],
  color: '4186F0',
  center: {
    lat: 40.5956721,
    lng: -74.10591605000002
  }
}, {
  name: 'Manor Heights',
  borough: 'Staten Island',
  coords: [{
    lat: 40.59876959999999,
    lng: -74.1309357
  }, {
    lat: 40.5981179,
    lng: -74.1250992
  }, {
    lat: 40.60072459999999,
    lng: -74.1207218
  }, {
    lat: 40.6011808,
    lng: -74.1205931
  }, {
    lat: 40.6012134,
    lng: -74.1195631
  }, {
    lat: 40.5983134,
    lng: -74.1193914
  }, {
    lat: 40.5982808,
    lng: -74.1177607
  }, {
    lat: 40.5989977,
    lng: -74.1177607
  }, {
    lat: 40.5989977,
    lng: -74.1167307
  }, {
    lat: 40.6023864,
    lng: -74.1166019
  }, {
    lat: 40.6040481,
    lng: -74.1153145
  }, {
    lat: 40.604569399999995,
    lng: -74.1153145
  }, {
    lat: 40.6073714,
    lng: -74.1157866
  }, {
    lat: 40.6080556,
    lng: -74.1169024
  }, {
    lat: 40.60929370000001,
    lng: -74.1175032
  }, {
    lat: 40.60877240000001,
    lng: -74.1211939
  }, {
    lat: 40.60978240000001,
    lng: -74.1214085
  }, {
    lat: 40.6083163,
    lng: -74.1289186
  }, {
    lat: 40.6081534,
    lng: -74.1321373
  }, {
    lat: 40.59876959999999,
    lng: -74.1309357
  }],
  color: '009D57',
  center: {
    lat: 40.60395015,
    lng: -74.12372590000001
  }
}, {
  name: 'Willowbrook',
  borough: 'Staten Island',
  coords: [{
    lat: 40.6056121,
    lng: -74.1543245
  }, {
    lat: 40.60388519999999,
    lng: -74.1542387
  }, {
    lat: 40.6023212,
    lng: -74.1546679
  }, {
    lat: 40.6011156,
    lng: -74.1543245
  }, {
    lat: 40.5997471,
    lng: -74.1544962
  }, {
    lat: 40.5962279,
    lng: -74.1536379
  }, {
    lat: 40.5952503,
    lng: -74.1529512
  }, {
    lat: 40.59215450000001,
    lng: -74.1474152
  }, {
    lat: 40.5935883,
    lng: -74.1462994
  }, {
    lat: 40.5926759,
    lng: -74.1445827
  }, {
    lat: 40.5918612,
    lng: -74.1451406
  }, {
    lat: 40.591600500000006,
    lng: -74.1439819
  }, {
    lat: 40.593555800000004,
    lng: -74.1417074
  }, {
    lat: 40.5931973,
    lng: -74.1407633
  }, {
    lat: 40.59391419999999,
    lng: -74.1376305
  }, {
    lat: 40.5938165,
    lng: -74.1369867
  }, {
    lat: 40.59270850000001,
    lng: -74.1370296
  }, {
    lat: 40.59264329999999,
    lng: -74.1359568
  }, {
    lat: 40.594566,
    lng: -74.1351414
  }, {
    lat: 40.59632560000001,
    lng: -74.1337681
  }, {
    lat: 40.59876959999999,
    lng: -74.1309357
  }, {
    lat: 40.6081534,
    lng: -74.1321373
  }, {
    lat: 40.60756690000001,
    lng: -74.144454
  }, {
    lat: 40.6083814,
    lng: -74.1482306
  }, {
    lat: 40.6094892,
    lng: -74.150033
  }, {
    lat: 40.60880499999999,
    lng: -74.1537237
  }, {
    lat: 40.60730629999999,
    lng: -74.1533804
  }, {
    lat: 40.6056121,
    lng: -74.1543245
  }],
  color: 'D698AD',
  center: {
    lat: 40.600544850000006,
    lng: -74.14280180000003
  }
}, {
  name: 'New Springville',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5889607,
    lng: -74.1675854
  }, {
    lat: 40.584789099999995,
    lng: -74.1604185
  }, {
    lat: 40.5805195,
    lng: -74.1524792
  }, {
    lat: 40.58602760000001,
    lng: -74.1461706
  }, {
    lat: 40.5885045,
    lng: -74.1457415
  }, {
    lat: 40.5886675,
    lng: -74.1420937
  }, {
    lat: 40.58928670000001,
    lng: -74.1422224
  }, {
    lat: 40.5899059,
    lng: -74.1442394
  }, {
    lat: 40.5898081,
    lng: -74.1453981
  }, {
    lat: 40.595673899999994,
    lng: -74.1550541
  }, {
    lat: 40.5965537,
    lng: -74.1592598
  }, {
    lat: 40.5963908,
    lng: -74.1605902
  }, {
    lat: 40.59573910000001,
    lng: -74.160676
  }, {
    lat: 40.59573910000001,
    lng: -74.161191
  }, {
    lat: 40.59547839999999,
    lng: -74.161191
  }, {
    lat: 40.5954458,
    lng: -74.1618776
  }, {
    lat: 40.5951851,
    lng: -74.1618776
  }, {
    lat: 40.59303440000001,
    lng: -74.1626501
  }, {
    lat: 40.5922522,
    lng: -74.1635942
  }, {
    lat: 40.5907206,
    lng: -74.1662979
  }, {
    lat: 40.5889607,
    lng: -74.1675854
  }],
  color: 'CCCCCC',
  center: {
    lat: 40.5885366,
    lng: -74.15483955000002
  }
}, {
  name: 'Heartland Village',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5860928,
    lng: -74.1686583
  }, {
    lat: 40.5794439,
    lng: -74.1694736
  }, {
    lat: 40.572631300000005,
    lng: -74.1699457
  }, {
    lat: 40.570773200000005,
    lng: -74.169817
  }, {
    lat: 40.5805195,
    lng: -74.1524792
  }, {
    lat: 40.5889607,
    lng: -74.1675854
  }, {
    lat: 40.5860928,
    lng: -74.1686583
  }],
  color: '0BA9CC',
  center: {
    lat: 40.57986695,
    lng: -74.16121245
  }
}, {
  name: 'Travis-Chelsea',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5986066,
    lng: -74.1969824
  }, {
    lat: 40.5967818,
    lng: -74.1978407
  }, {
    lat: 40.5951199,
    lng: -74.1986132
  }, {
    lat: 40.594044600000004,
    lng: -74.1999006
  }, {
    lat: 40.591470099999995,
    lng: -74.202261
  }, {
    lat: 40.590720600000004,
    lng: -74.2024326
  }, {
    lat: 40.590688,
    lng: -74.2029905
  }, {
    lat: 40.5899059,
    lng: -74.2037201
  }, {
    lat: 40.5900688,
    lng: -74.2041922
  }, {
    lat: 40.58912370000001,
    lng: -74.2045784
  }, {
    lat: 40.58873260000001,
    lng: -74.204278
  }, {
    lat: 40.58798310000001,
    lng: -74.2048359
  }, {
    lat: 40.587592,
    lng: -74.2043209
  }, {
    lat: 40.5857343,
    lng: -74.2041922
  }, {
    lat: 40.5854736,
    lng: -74.2045355
  }, {
    lat: 40.5843003,
    lng: -74.2046642
  }, {
    lat: 40.58371360000001,
    lng: -74.2043638
  }, {
    lat: 40.582442500000006,
    lng: -74.2049646
  }, {
    lat: 40.5811062,
    lng: -74.2051363
  }, {
    lat: 40.5811062,
    lng: -74.2056942
  }, {
    lat: 40.57993280000001,
    lng: -74.2061234
  }, {
    lat: 40.5796068,
    lng: -74.2058659
  }, {
    lat: 40.5804217,
    lng: -74.2030764
  }, {
    lat: 40.5799002,
    lng: -74.20140270000002
  }, {
    lat: 40.5797372,
    lng: -74.19908520000001
  }, {
    lat: 40.5799654,
    lng: -74.19745450000002
  }, {
    lat: 40.5798024,
    lng: -74.1955662
  }, {
    lat: 40.5793135,
    lng: -74.194665
  }, {
    lat: 40.578824600000004,
    lng: -74.1935062
  }, {
    lat: 40.5777489,
    lng: -74.1924763
  }, {
    lat: 40.5774556,
    lng: -74.191618
  }, {
    lat: 40.5776186,
    lng: -74.190073
  }, {
    lat: 40.5783357,
    lng: -74.1878843
  }, {
    lat: 40.5784008,
    lng: -74.1862535
  }, {
    lat: 40.5779445,
    lng: -74.1853094
  }, {
    lat: 40.5780097,
    lng: -74.1840649
  }, {
    lat: 40.5778141,
    lng: -74.1828203
  }, {
    lat: 40.5780749,
    lng: -74.1815758
  }, {
    lat: 40.5790853,
    lng: -74.1803312
  }, {
    lat: 40.5800632,
    lng: -74.179945
  }, {
    lat: 40.5808128,
    lng: -74.1801596
  }, {
    lat: 40.583615800000004,
    lng: -74.1825199
  }, {
    lat: 40.584723999999994,
    lng: -74.1832066
  }, {
    lat: 40.58615799999999,
    lng: -74.1830349
  }, {
    lat: 40.587429,
    lng: -74.1815329
  }, {
    lat: 40.5882438,
    lng: -74.18046
  }, {
    lat: 40.5900362,
    lng: -74.1838074
  }, {
    lat: 40.5929692,
    lng: -74.1832066
  }, {
    lat: 40.59687960000001,
    lng: -74.1793442
  }, {
    lat: 40.5975313,
    lng: -74.1803312
  }, {
    lat: 40.5979223,
    lng: -74.179945
  }, {
    lat: 40.5982482,
    lng: -74.1803312
  }, {
    lat: 40.599779700000006,
    lng: -74.1782713
  }, {
    lat: 40.60261450000001,
    lng: -74.1841507
  }, {
    lat: 40.6020606,
    lng: -74.18500900000001
  }, {
    lat: 40.6018976,
    lng: -74.1863394
  }, {
    lat: 40.602419000000005,
    lng: -74.1902876
  }, {
    lat: 40.6011808,
    lng: -74.1941929
  }, {
    lat: 40.600692,
    lng: -74.1950512
  }, {
    lat: 40.6017673,
    lng: -74.1962099
  }, {
    lat: 40.60085500000001,
    lng: -74.1970253
  }, {
    lat: 40.6005291,
    lng: -74.1967678
  }, {
    lat: 40.600138099999995,
    lng: -74.1971111
  }, {
    lat: 40.5986066,
    lng: -74.1969824
  }],
  color: 'EE9C96',
  center: {
    lat: 40.590035050000004,
    lng: -74.19219735000001
  }
}, {
  name: 'Midland Beach',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5746197,
    lng: -74.1056157
  }, {
    lat: 40.5669916,
    lng: -74.0906811
  }, {
    lat: 40.567350299999994,
    lng: -74.0899086
  }, {
    lat: 40.566959000000004,
    lng: -74.089222
  }, {
    lat: 40.5680023,
    lng: -74.0886211
  }, {
    lat: 40.5690454,
    lng: -74.0872908
  }, {
    lat: 40.568915000000004,
    lng: -74.0868616
  }, {
    lat: 40.569762600000004,
    lng: -74.0863895
  }, {
    lat: 40.5746197,
    lng: -74.08106800000002
  }, {
    lat: 40.5759562,
    lng: -74.0788364
  }, {
    lat: 40.5782379,
    lng: -74.07630440000001
  }, {
    lat: 40.5783031,
    lng: -74.0758324
  }, {
    lat: 40.584723999999994,
    lng: -74.0884924
  }, {
    lat: 40.5865654,
    lng: -74.0920973
  }, {
    lat: 40.5857995,
    lng: -74.09269810000002
  }, {
    lat: 40.5790527,
    lng: -74.1011524
  }, {
    lat: 40.5746197,
    lng: -74.1056157
  }],
  color: '795046',
  center: {
    lat: 40.576762200000005,
    lng: -74.09072404999995
  }
}, {
  name: 'Grant City',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5792809,
    lng: -74.1147995
  }, {
    lat: 40.5743915,
    lng: -74.1058302
  }, {
    lat: 40.5746197,
    lng: -74.1056157
  }, {
    lat: 40.5790527,
    lng: -74.1011524
  }, {
    lat: 40.5857995,
    lng: -74.09269810000002
  }, {
    lat: 40.5865654,
    lng: -74.0920973
  }, {
    lat: 40.5909161,
    lng: -74.100852
  }, {
    lat: 40.5900362,
    lng: -74.1008949
  }, {
    lat: 40.5891889,
    lng: -74.1015816
  }, {
    lat: 40.5827684,
    lng: -74.108963
  }, {
    lat: 40.5819536,
    lng: -74.1108084
  }, {
    lat: 40.5800958,
    lng: -74.1139841
  }, {
    lat: 40.5792809,
    lng: -74.1147995
  }],
  color: '62AF44',
  center: {
    lat: 40.5826538,
    lng: -74.10344839999999
  }
}, {
  name: 'New Dorp',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5763147,
    lng: -74.1270304
  }, {
    lat: 40.5759073,
    lng: -74.1254854
  }, {
    lat: 40.57580949999999,
    lng: -74.1236186
  }, {
    lat: 40.575728,
    lng: -74.1229963
  }, {
    lat: 40.5749294,
    lng: -74.1216874
  }, {
    lat: 40.57471749999999,
    lng: -74.1218376
  }, {
    lat: 40.5743264,
    lng: -74.1218591
  }, {
    lat: 40.57277800000001,
    lng: -74.1213012
  }, {
    lat: 40.5721097,
    lng: -74.1214085
  }, {
    lat: 40.57140890000001,
    lng: -74.1200352
  }, {
    lat: 40.56810010000001,
    lng: -74.1233182
  }, {
    lat: 40.5638621,
    lng: -74.1164079
  }, {
    lat: 40.5665354,
    lng: -74.1137687
  }, {
    lat: 40.564318500000006,
    lng: -74.1101424
  }, {
    lat: 40.558971400000004,
    lng: -74.1000796
  }, {
    lat: 40.5591834,
    lng: -74.0996718
  }, {
    lat: 40.559053,
    lng: -74.0992641
  }, {
    lat: 40.5594116,
    lng: -74.0988135
  }, {
    lat: 40.559362699999994,
    lng: -74.0984273
  }, {
    lat: 40.5623785,
    lng: -74.0966249
  }, {
    lat: 40.5630632,
    lng: -74.095788
  }, {
    lat: 40.5633077,
    lng: -74.0952301
  }, {
    lat: 40.568817200000005,
    lng: -74.106667
  }, {
    lat: 40.569078000000005,
    lng: -74.1064739
  }, {
    lat: 40.5699093,
    lng: -74.1081047
  }, {
    lat: 40.5739515,
    lng: -74.1043067
  }, {
    lat: 40.5746197,
    lng: -74.1056157
  }, {
    lat: 40.5743915,
    lng: -74.1058302
  }, {
    lat: 40.5792809,
    lng: -74.1147995
  }, {
    lat: 40.578466,
    lng: -74.1156363
  }, {
    lat: 40.5782868,
    lng: -74.1170311
  }, {
    lat: 40.5777978,
    lng: -74.117589
  }, {
    lat: 40.57815639999999,
    lng: -74.1181684
  }, {
    lat: 40.580698700000006,
    lng: -74.1188121
  }, {
    lat: 40.5810899,
    lng: -74.1191125
  }, {
    lat: 40.5806173,
    lng: -74.1207647
  }, {
    lat: 40.5786616,
    lng: -74.1233182
  }, {
    lat: 40.5793461,
    lng: -74.1242838
  }, {
    lat: 40.5778304,
    lng: -74.1246486
  }, {
    lat: 40.5787431,
    lng: -74.1267729
  }, {
    lat: 40.5774882,
    lng: -74.1272664
  }, {
    lat: 40.5763147,
    lng: -74.1270304
  }],
  color: 'F8971B',
  center: {
    lat: 40.57003065000001,
    lng: -74.11124825000002
  }
}, {
  name: 'Lighthouse Hill',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5789224,
    lng: -74.1364288
  }, {
    lat: 40.57859640000001,
    lng: -74.1369867
  }, {
    lat: 40.5783031,
    lng: -74.1368151
  }, {
    lat: 40.5766733,
    lng: -74.143424
  }, {
    lat: 40.576054,
    lng: -74.1435099
  }, {
    lat: 40.5743589,
    lng: -74.1429949
  }, {
    lat: 40.5741308,
    lng: -74.1446257
  }, {
    lat: 40.572044500000004,
    lng: -74.1441965
  }, {
    lat: 40.573381,
    lng: -74.1331244
  }, {
    lat: 40.57468490000001,
    lng: -74.129262
  }, {
    lat: 40.5759073,
    lng: -74.1254854
  }, {
    lat: 40.5763147,
    lng: -74.1270304
  }, {
    lat: 40.5774882,
    lng: -74.1272664
  }, {
    lat: 40.5787431,
    lng: -74.1267729
  }, {
    lat: 40.5799328,
    lng: -74.1274595
  }, {
    lat: 40.5815951,
    lng: -74.1290903
  }, {
    lat: 40.582801,
    lng: -74.1304207
  }, {
    lat: 40.5821492,
    lng: -74.1315365
  }, {
    lat: 40.5823447,
    lng: -74.1331244
  }, {
    lat: 40.58113879999999,
    lng: -74.1349268
  }, {
    lat: 40.5789224,
    lng: -74.1364288
  }],
  color: '777777',
  center: {
    lat: 40.577422750000004,
    lng: -74.13505555
  }
}, {
  name: 'Oakwood',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5654268,
    lng: -74.1259575
  }, {
    lat: 40.5620036,
    lng: -74.1300774
  }, {
    lat: 40.56171020000001,
    lng: -74.1295624
  }, {
    lat: 40.5610581,
    lng: -74.129734
  }, {
    lat: 40.5582542,
    lng: -74.1289616
  }, {
    lat: 40.5573738,
    lng: -74.1273737
  }, {
    lat: 40.5575694,
    lng: -74.1270304
  }, {
    lat: 40.5554827,
    lng: -74.1239405
  }, {
    lat: 40.5551566,
    lng: -74.1241121
  }, {
    lat: 40.5524176,
    lng: -74.1187048
  }, {
    lat: 40.5520916,
    lng: -74.1186619
  }, {
    lat: 40.5520916,
    lng: -74.1180611
  }, {
    lat: 40.55140680000001,
    lng: -74.1189623
  }, {
    lat: 40.5480807,
    lng: -74.1147566
  }, {
    lat: 40.5481133,
    lng: -74.1132975
  }, {
    lat: 40.547754600000005,
    lng: -74.1128254
  }, {
    lat: 40.55153719999999,
    lng: -74.1103792
  }, {
    lat: 40.5535915,
    lng: -74.1084051
  }, {
    lat: 40.5541784,
    lng: -74.1075897
  }, {
    lat: 40.554211,
    lng: -74.1065168
  }, {
    lat: 40.5536893,
    lng: -74.1062593
  }, {
    lat: 40.553135000000005,
    lng: -74.1051435
  }, {
    lat: 40.5557435,
    lng: -74.10346980000001
  }, {
    lat: 40.5560696,
    lng: -74.1026115
  }, {
    lat: 40.5558088,
    lng: -74.101882
  }, {
    lat: 40.5567869,
    lng: -74.1016674
  }, {
    lat: 40.5583846,
    lng: -74.1006374
  }, {
    lat: 40.558971400000004,
    lng: -74.1000796
  }, {
    lat: 40.564318500000006,
    lng: -74.1101424
  }, {
    lat: 40.5665354,
    lng: -74.1137687
  }, {
    lat: 40.5638621,
    lng: -74.1164079
  }, {
    lat: 40.56810010000001,
    lng: -74.1233182
  }, {
    lat: 40.5654268,
    lng: -74.1259575
  }],
  color: '009D57',
  center: {
    lat: 40.55792735000001,
    lng: -74.11507849999998
  }
}, {
  name: 'Richmondtown',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5697626,
    lng: -74.1443682
  }, {
    lat: 40.5652964,
    lng: -74.1347122
  }, {
    lat: 40.56477480000001,
    lng: -74.132266
  }, {
    lat: 40.5642858,
    lng: -74.13089280000001
  }, {
    lat: 40.5627861,
    lng: -74.1306782
  }, {
    lat: 40.5620036,
    lng: -74.1300774
  }, {
    lat: 40.5654268,
    lng: -74.1259575
  }, {
    lat: 40.56810010000001,
    lng: -74.1233182
  }, {
    lat: 40.57140890000001,
    lng: -74.1200352
  }, {
    lat: 40.5721097,
    lng: -74.1214085
  }, {
    lat: 40.57277800000001,
    lng: -74.1213012
  }, {
    lat: 40.5743264,
    lng: -74.1218591
  }, {
    lat: 40.5749294,
    lng: -74.1216874
  }, {
    lat: 40.575728,
    lng: -74.1229963
  }, {
    lat: 40.5759073,
    lng: -74.1254854
  }, {
    lat: 40.573381,
    lng: -74.1331244
  }, {
    lat: 40.572044500000004,
    lng: -74.1441965
  }, {
    lat: 40.5704798,
    lng: -74.143939
  }, {
    lat: 40.5697626,
    lng: -74.1443682
  }],
  color: '3F5BA9',
  center: {
    lat: 40.56895545,
    lng: -74.1322017
  }
}, {
  name: 'Bay Terrace',
  borough: 'Staten Island',
  coords: [{
    lat: 40.56487260000001,
    lng: -74.1481447
  }, {
    lat: 40.55955829999999,
    lng: -74.1421795
  }, {
    lat: 40.5587758,
    lng: -74.139905
  }, {
    lat: 40.5570804,
    lng: -74.1414928
  }, {
    lat: 40.5544719,
    lng: -74.1447544
  }, {
    lat: 40.5524176,
    lng: -74.1438103
  }, {
    lat: 40.5531024,
    lng: -74.1423941
  }, {
    lat: 40.5494829,
    lng: -74.1375017
  }, {
    lat: 40.55153719999999,
    lng: -74.1339827
  }, {
    lat: 40.553330700000004,
    lng: -74.1320944
  }, {
    lat: 40.5541458,
    lng: -74.1307211
  }, {
    lat: 40.5573738,
    lng: -74.1273737
  }, {
    lat: 40.5582542,
    lng: -74.1289616
  }, {
    lat: 40.5610581,
    lng: -74.129734
  }, {
    lat: 40.56171020000001,
    lng: -74.1295624
  }, {
    lat: 40.5620036,
    lng: -74.1300774
  }, {
    lat: 40.5627861,
    lng: -74.1306782
  }, {
    lat: 40.5642858,
    lng: -74.13089280000001
  }, {
    lat: 40.56477480000001,
    lng: -74.132266
  }, {
    lat: 40.5652964,
    lng: -74.1347122
  }, {
    lat: 40.5674807,
    lng: -74.1393042
  }, {
    lat: 40.5655572,
    lng: -74.1414499
  }, {
    lat: 40.5660462,
    lng: -74.142437
  }, {
    lat: 40.5658832,
    lng: -74.1441107
  }, {
    lat: 40.5649052,
    lng: -74.1450548
  }, {
    lat: 40.5657202,
    lng: -74.1463852
  }, {
    lat: 40.56487260000001,
    lng: -74.1481447
  }],
  color: 'C6A4CF',
  center: {
    lat: 40.558481799999996,
    lng: -74.1377592
  }
}, {
  name: 'Great Kills',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5677741,
    lng: -74.1518784
  }, {
    lat: 40.56549199999999,
    lng: -74.1547108
  }, {
    lat: 40.5636989,
    lng: -74.1558695
  }, {
    lat: 40.56252520000001,
    lng: -74.1571999
  }, {
    lat: 40.5608299,
    lng: -74.1627359
  }, {
    lat: 40.5526459,
    lng: -74.1599464
  }, {
    lat: 40.5500699,
    lng: -74.1604185
  }, {
    lat: 40.54814590000001,
    lng: -74.1599464
  }, {
    lat: 40.54684149999999,
    lng: -74.1590452
  }, {
    lat: 40.545895800000004,
    lng: -74.1587877
  }, {
    lat: 40.5384928,
    lng: -74.1514921
  }, {
    lat: 40.5354922,
    lng: -74.1461706
  }, {
    lat: 40.5358183,
    lng: -74.1453981
  }, {
    lat: 40.5359814,
    lng: -74.144454
  }, {
    lat: 40.5368946,
    lng: -74.1441965
  }, {
    lat: 40.53722080000001,
    lng: -74.1435099
  }, {
    lat: 40.5371882,
    lng: -74.1416216
  }, {
    lat: 40.537840499999994,
    lng: -74.1422653
  }, {
    lat: 40.5384928,
    lng: -74.1416645
  }, {
    lat: 40.5391124,
    lng: -74.1422653
  }, {
    lat: 40.5404496,
    lng: -74.1417933
  }, {
    lat: 40.541167099999996,
    lng: -74.142437
  }, {
    lat: 40.5422759,
    lng: -74.1422224
  }, {
    lat: 40.542308500000004,
    lng: -74.1415787
  }, {
    lat: 40.54345,
    lng: -74.1402483
  }, {
    lat: 40.543971799999994,
    lng: -74.1399479
  }, {
    lat: 40.544950099999994,
    lng: -74.1387463
  }, {
    lat: 40.5459284,
    lng: -74.1379738
  }, {
    lat: 40.5455697,
    lng: -74.1375446
  }, {
    lat: 40.5459936,
    lng: -74.1370726
  }, {
    lat: 40.548178500000006,
    lng: -74.1390896
  }, {
    lat: 40.5494829,
    lng: -74.1375017
  }, {
    lat: 40.5531024,
    lng: -74.1423941
  }, {
    lat: 40.5524176,
    lng: -74.1438103
  }, {
    lat: 40.5544719,
    lng: -74.1447544
  }, {
    lat: 40.5570804,
    lng: -74.1414928
  }, {
    lat: 40.5587758,
    lng: -74.139905
  }, {
    lat: 40.55955829999999,
    lng: -74.1421795
  }, {
    lat: 40.56487260000001,
    lng: -74.1481447
  }, {
    lat: 40.566698200000005,
    lng: -74.1503334
  }, {
    lat: 40.5677741,
    lng: -74.1518784
  }],
  color: '9FC3FF',
  center: {
    lat: 40.55163315,
    lng: -74.14990425000002
  }
}, {
  name: 'Eltingville',
  borough: 'Staten Island',
  coords: [{
    lat: 40.561090699999994,
    lng: -74.1697741
  }, {
    lat: 40.560243,
    lng: -74.1697311
  }, {
    lat: 40.5478198,
    lng: -74.1669416
  }, {
    lat: 40.5473959,
    lng: -74.166255
  }, {
    lat: 40.5445914,
    lng: -74.1654825
  }, {
    lat: 40.53617710000001,
    lng: -74.1574144
  }, {
    lat: 40.5327524,
    lng: -74.1512346
  }, {
    lat: 40.5325567,
    lng: -74.1507196
  }, {
    lat: 40.5335026,
    lng: -74.1497326
  }, {
    lat: 40.5339918,
    lng: -74.1497326
  }, {
    lat: 40.5352313,
    lng: -74.1473293
  }, {
    lat: 40.5354922,
    lng: -74.1461706
  }, {
    lat: 40.5384928,
    lng: -74.1514921
  }, {
    lat: 40.545895800000004,
    lng: -74.1587877
  }, {
    lat: 40.54684149999999,
    lng: -74.1590452
  }, {
    lat: 40.54814590000001,
    lng: -74.1599464
  }, {
    lat: 40.5500699,
    lng: -74.1604185
  }, {
    lat: 40.5526459,
    lng: -74.1599464
  }, {
    lat: 40.5608299,
    lng: -74.1627359
  }, {
    lat: 40.5603082,
    lng: -74.1638088
  }, {
    lat: 40.560080000000006,
    lng: -74.1649675
  }, {
    lat: 40.561090699999994,
    lng: -74.1697741
  }],
  color: '777777',
  center: {
    lat: 40.5468237,
    lng: -74.15797235000002
  }
}, {
  name: 'Arden Heights',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5572434,
    lng: -74.2049646
  }, {
    lat: 40.5562652,
    lng: -74.20346260000001
  }, {
    lat: 40.5472002,
    lng: -74.1993427
  }, {
    lat: 40.5432869,
    lng: -74.1973257
  }, {
    lat: 40.5350029,
    lng: -74.1933346
  }, {
    lat: 40.536144500000006,
    lng: -74.1909742
  }, {
    lat: 40.5378079,
    lng: -74.1886568
  }, {
    lat: 40.5482764,
    lng: -74.1796446
  }, {
    lat: 40.5600148,
    lng: -74.173336
  }, {
    lat: 40.5614493,
    lng: -74.1716623
  }, {
    lat: 40.5627861,
    lng: -74.1745806
  }, {
    lat: 40.56317730000001,
    lng: -74.176383
  }, {
    lat: 40.56395969999999,
    lng: -74.1777134
  }, {
    lat: 40.5655246,
    lng: -74.1821337
  }, {
    lat: 40.5653616,
    lng: -74.18372150000002
  }, {
    lat: 40.5645792,
    lng: -74.1852236
  }, {
    lat: 40.5634381,
    lng: -74.1898584
  }, {
    lat: 40.5625904,
    lng: -74.1908026
  }, {
    lat: 40.56246000000001,
    lng: -74.1914034
  }, {
    lat: 40.562623,
    lng: -74.1925621
  }, {
    lat: 40.56624180000001,
    lng: -74.1935492
  }, {
    lat: 40.5605364,
    lng: -74.1993856
  }, {
    lat: 40.5586128,
    lng: -74.2018747
  }, {
    lat: 40.5572434,
    lng: -74.2049646
  }],
  color: '7C3592',
  center: {
    lat: 40.550622350000005,
    lng: -74.18831345000001
  }
}, {
  name: 'Annadale',
  borough: 'Staten Island',
  coords: [{
    lat: 40.519280200000004,
    lng: -74.1776276
  }, {
    lat: 40.5214007,
    lng: -74.1753531
  }, {
    lat: 40.5233906,
    lng: -74.17213440000002
  }, {
    lat: 40.523586400000006,
    lng: -74.1709328
  }, {
    lat: 40.52303179999999,
    lng: -74.1701603
  }, {
    lat: 40.5273377,
    lng: -74.1623497
  }, {
    lat: 40.527044200000006,
    lng: -74.1616201
  }, {
    lat: 40.527729199999996,
    lng: -74.1604185
  }, {
    lat: 40.5273051,
    lng: -74.1595602
  }, {
    lat: 40.528707700000005,
    lng: -74.157629
  }, {
    lat: 40.5290339,
    lng: -74.1566849
  }, {
    lat: 40.52887080000001,
    lng: -74.1563416
  }, {
    lat: 40.5302408,
    lng: -74.155097
  }, {
    lat: 40.530143,
    lng: -74.1544962
  }, {
    lat: 40.532067399999995,
    lng: -74.1526508
  }, {
    lat: 40.53216530000001,
    lng: -74.15200710000002
  }, {
    lat: 40.5327524,
    lng: -74.1512346
  }, {
    lat: 40.53617710000001,
    lng: -74.1574144
  }, {
    lat: 40.5445914,
    lng: -74.1654825
  }, {
    lat: 40.5473959,
    lng: -74.166255
  }, {
    lat: 40.5478198,
    lng: -74.1669416
  }, {
    lat: 40.560243,
    lng: -74.1697311
  }, {
    lat: 40.561090699999994,
    lng: -74.1697741
  }, {
    lat: 40.5614493,
    lng: -74.1716623
  }, {
    lat: 40.5600148,
    lng: -74.173336
  }, {
    lat: 40.5482764,
    lng: -74.1796446
  }, {
    lat: 40.5378079,
    lng: -74.1886568
  }, {
    lat: 40.5340245,
    lng: -74.1862106
  }, {
    lat: 40.5273704,
    lng: -74.1808462
  }, {
    lat: 40.5247281,
    lng: -74.1795158
  }, {
    lat: 40.5229013,
    lng: -74.1795588
  }, {
    lat: 40.51986740000001,
    lng: -74.1782284
  }, {
    lat: 40.519280200000004,
    lng: -74.1776276
  }],
  color: 'E6EEA3',
  center: {
    lat: 40.54036475,
    lng: -74.16994569999997
  }
}, {
  name: 'Huguenot',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5340245,
    lng: -74.1862106
  }, {
    lat: 40.5378079,
    lng: -74.1886568
  }, {
    lat: 40.5468415,
    lng: -74.180975
  }, {
    lat: 40.5502003,
    lng: -74.1876268
  }, {
    lat: 40.5486351,
    lng: -74.1887856
  }, {
    lat: 40.5432869,
    lng: -74.1973257
  }, {
    lat: 40.5350029,
    lng: -74.1933346
  }, {
    lat: 40.5319043,
    lng: -74.1917896
  }, {
    lat: 40.5331112,
    lng: -74.1896009
  }, {
    lat: 40.5340245,
    lng: -74.1862106
  }],
  color: 'DB4436',
  center: {
    lat: 40.541052300000004,
    lng: -74.18915034999998
  }
}, {
  name: "Prince's Bay",
  borough: 'Staten Island',
  coords: [{
    lat: 40.520193600000006,
    lng: -74.1828632
  }, {
    lat: 40.5207808,
    lng: -74.1811466
  }, {
    lat: 40.5205851,
    lng: -74.1798162
  }, {
    lat: 40.5199979,
    lng: -74.1792583
  }, {
    lat: 40.51986740000001,
    lng: -74.1782284
  }, {
    lat: 40.5229013,
    lng: -74.1795588
  }, {
    lat: 40.5247281,
    lng: -74.1795158
  }, {
    lat: 40.5273704,
    lng: -74.1808462
  }, {
    lat: 40.5340245,
    lng: -74.1862106
  }, {
    lat: 40.5331112,
    lng: -74.1896009
  }, {
    lat: 40.5319043,
    lng: -74.1917896
  }, {
    lat: 40.53108889999999,
    lng: -74.1934204
  }, {
    lat: 40.52903390000001,
    lng: -74.1978836
  }, {
    lat: 40.5273377,
    lng: -74.2005873
  }, {
    lat: 40.5268811,
    lng: -74.20118810000001
  }, {
    lat: 40.5262613,
    lng: -74.2015314
  }, {
    lat: 40.5259024,
    lng: -74.202776
  }, {
    lat: 40.52521740000001,
    lng: -74.2076683
  }, {
    lat: 40.5254458,
    lng: -74.2092133
  }, {
    lat: 40.5246629,
    lng: -74.21032910000001
  }, {
    lat: 40.52430400000001,
    lng: -74.2119598
  }, {
    lat: 40.5241083,
    lng: -74.2141485
  }, {
    lat: 40.5212049,
    lng: -74.2136335
  }, {
    lat: 40.5132771,
    lng: -74.2111444
  }, {
    lat: 40.5105691,
    lng: -74.2100286
  }, {
    lat: 40.5116132,
    lng: -74.2083549
  }, {
    lat: 40.5123636,
    lng: -74.205308
  }, {
    lat: 40.5122657,
    lng: -74.2048788
  }, {
    lat: 40.5130814,
    lng: -74.2006731
  }, {
    lat: 40.512885600000004,
    lng: -74.2001152
  }, {
    lat: 40.5113848,
    lng: -74.1996002
  }, {
    lat: 40.510928,
    lng: -74.1979694
  }, {
    lat: 40.509883900000005,
    lng: -74.1967678
  }, {
    lat: 40.5098186,
    lng: -74.1954803
  }, {
    lat: 40.510699599999995,
    lng: -74.1940212
  }, {
    lat: 40.5128204,
    lng: -74.1922617
  }, {
    lat: 40.5134076,
    lng: -74.1913176
  }, {
    lat: 40.5154305,
    lng: -74.1896439
  }, {
    lat: 40.5154305,
    lng: -74.1891718
  }, {
    lat: 40.5180078,
    lng: -74.1867256
  }, {
    lat: 40.51950850000001,
    lng: -74.1848373
  }, {
    lat: 40.520193600000006,
    lng: -74.1828632
  }],
  color: '0BA9CC',
  center: {
    lat: 40.52192155,
    lng: -74.19618844999997
  }
}, {
  name: 'Woodrow',
  borough: 'Staten Island',
  coords: [{
    lat: 40.52828370000001,
    lng: -74.2167664
  }, {
    lat: 40.5264244,
    lng: -74.2157792
  }, {
    lat: 40.52399410000001,
    lng: -74.2156076
  }, {
    lat: 40.5241083,
    lng: -74.2141485
  }, {
    lat: 40.52430400000001,
    lng: -74.2119598
  }, {
    lat: 40.5246629,
    lng: -74.21032910000001
  }, {
    lat: 40.5254458,
    lng: -74.2092133
  }, {
    lat: 40.52521740000001,
    lng: -74.2076683
  }, {
    lat: 40.5259024,
    lng: -74.202776
  }, {
    lat: 40.5262613,
    lng: -74.2015314
  }, {
    lat: 40.5268811,
    lng: -74.20118810000001
  }, {
    lat: 40.52903390000001,
    lng: -74.1978836
  }, {
    lat: 40.5319043,
    lng: -74.1917896
  }, {
    lat: 40.5350029,
    lng: -74.1933346
  }, {
    lat: 40.5432869,
    lng: -74.1973257
  }, {
    lat: 40.5428956,
    lng: -74.2002869
  }, {
    lat: 40.542243299999996,
    lng: -74.2028618
  }, {
    lat: 40.5417215,
    lng: -74.2079687
  }, {
    lat: 40.5413302,
    lng: -74.2121744
  }, {
    lat: 40.541428,
    lng: -74.2147923
  }, {
    lat: 40.54110190000001,
    lng: -74.2177963
  }, {
    lat: 40.5389168,
    lng: -74.2176676
  }, {
    lat: 40.5376774,
    lng: -74.21775340000002
  }, {
    lat: 40.5352313,
    lng: -74.2183113
  }, {
    lat: 40.5325241,
    lng: -74.2181826
  }, {
    lat: 40.52828370000001,
    lng: -74.2167664
  }],
  color: '62AF44',
  center: {
    lat: 40.533640500000004,
    lng: -74.20505044999999
  }
}, {
  name: 'Rossville',
  borough: 'Staten Island',
  coords: [{
    lat: 40.553135000000005,
    lng: -74.2177963
  }, {
    lat: 40.5525481,
    lng: -74.2186975
  }, {
    lat: 40.5503634,
    lng: -74.22131540000001
  }, {
    lat: 40.54110190000001,
    lng: -74.2177963
  }, {
    lat: 40.541428,
    lng: -74.2147923
  }, {
    lat: 40.5412323,
    lng: -74.2124319
  }, {
    lat: 40.542243299999996,
    lng: -74.2028618
  }, {
    lat: 40.5428956,
    lng: -74.2002869
  }, {
    lat: 40.5432869,
    lng: -74.1973257
  }, {
    lat: 40.5472002,
    lng: -74.1993427
  }, {
    lat: 40.5562652,
    lng: -74.20346260000001
  }, {
    lat: 40.5572434,
    lng: -74.2049646
  }, {
    lat: 40.55825420000001,
    lng: -74.2060804
  }, {
    lat: 40.55822150000001,
    lng: -74.2071962
  }, {
    lat: 40.55724339999999,
    lng: -74.2118311
  }, {
    lat: 40.557765100000005,
    lng: -74.2122173
  }, {
    lat: 40.5570152,
    lng: -74.2127752
  }, {
    lat: 40.556363,
    lng: -74.213376
  }, {
    lat: 40.5563304,
    lng: -74.2142773
  }, {
    lat: 40.5559718,
    lng: -74.2143202
  }, {
    lat: 40.5560044,
    lng: -74.2153931
  }, {
    lat: 40.555580500000005,
    lng: -74.2158651
  }, {
    lat: 40.55463490000001,
    lng: -74.2183542
  }, {
    lat: 40.553950199999996,
    lng: -74.217968
  }, {
    lat: 40.553135000000005,
    lng: -74.2177963
  }],
  color: 'F8971B',
  center: {
    lat: 40.54967805000001,
    lng: -74.20932054999997
  }
}, {
  name: 'Pleasant Plains',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5266527,
    lng: -74.2234612
  }, {
    lat: 40.52609820000001,
    lng: -74.2259073
  }, {
    lat: 40.5259351,
    lng: -74.2278814
  }, {
    lat: 40.5185298,
    lng: -74.2251778
  }, {
    lat: 40.50897030000001,
    lng: -74.22148700000001
  }, {
    lat: 40.5052179,
    lng: -74.22148700000001
  }, {
    lat: 40.5029011,
    lng: -74.2189121
  }, {
    lat: 40.5033253,
    lng: -74.2174101
  }, {
    lat: 40.5061315,
    lng: -74.21509270000001
  }, {
    lat: 40.50655569999999,
    lng: -74.2143631
  }, {
    lat: 40.5065557,
    lng: -74.2135906
  }, {
    lat: 40.50733880000001,
    lng: -74.2127323
  }, {
    lat: 40.5105691,
    lng: -74.2100286
  }, {
    lat: 40.5132771,
    lng: -74.2111444
  }, {
    lat: 40.5212049,
    lng: -74.2136335
  }, {
    lat: 40.5241083,
    lng: -74.2141485
  }, {
    lat: 40.52399410000001,
    lng: -74.2156076
  }, {
    lat: 40.5264244,
    lng: -74.2157792
  }, {
    lat: 40.52828370000001,
    lng: -74.2167664
  }, {
    lat: 40.5266527,
    lng: -74.2234612
  }],
  color: 'EE9C96',
  center: {
    lat: 40.5155924,
    lng: -74.218955
  }
}, {
  name: 'Richmond Valley',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5249891,
    lng: -74.2438889
  }, {
    lat: 40.5245324,
    lng: -74.2432022
  }, {
    lat: 40.5233254,
    lng: -74.2427301
  }, {
    lat: 40.522901299999994,
    lng: -74.242816
  }, {
    lat: 40.52234669999999,
    lng: -74.2426014
  }, {
    lat: 40.521172299999996,
    lng: -74.2432451
  }, {
    lat: 40.52107440000001,
    lng: -74.24242970000002
  }, {
    lat: 40.52107440000001,
    lng: -74.2410135
  }, {
    lat: 40.5203241,
    lng: -74.24015520000002
  }, {
    lat: 40.5202262,
    lng: -74.2390394
  }, {
    lat: 40.5196716,
    lng: -74.237237
  }, {
    lat: 40.519573799999996,
    lng: -74.2348337
  }, {
    lat: 40.517388,
    lng: -74.2343187
  }, {
    lat: 40.5167355,
    lng: -74.2332888
  }, {
    lat: 40.515919800000006,
    lng: -74.232688
  }, {
    lat: 40.5139949,
    lng: -74.232173
  }, {
    lat: 40.5077304,
    lng: -74.2300701
  }, {
    lat: 40.5021832,
    lng: -74.2282677
  }, {
    lat: 40.5021832,
    lng: -74.2266798
  }, {
    lat: 40.5016937,
    lng: -74.2248774
  }, {
    lat: 40.502444200000006,
    lng: -74.2228603
  }, {
    lat: 40.502379,
    lng: -74.2217016
  }, {
    lat: 40.5027053,
    lng: -74.2209721
  }, {
    lat: 40.5027053,
    lng: -74.219985
  }, {
    lat: 40.5029011,
    lng: -74.2189121
  }, {
    lat: 40.5052179,
    lng: -74.22148700000001
  }, {
    lat: 40.50897030000001,
    lng: -74.22148700000001
  }, {
    lat: 40.5185298,
    lng: -74.2251778
  }, {
    lat: 40.5259351,
    lng: -74.2278814
  }, {
    lat: 40.5249891,
    lng: -74.2438889
  }],
  color: '7CCFA9',
  center: {
    lat: 40.5138144,
    lng: -74.2314005
  }
}, {
  name: 'Tottenville',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5166702,
    lng: -74.2465925
  }, {
    lat: 40.5162461,
    lng: -74.2460775
  }, {
    lat: 40.5159198,
    lng: -74.2466784
  }, {
    lat: 40.51582200000001,
    lng: -74.247365
  }, {
    lat: 40.516605,
    lng: -74.2481375
  }, {
    lat: 40.51539780000001,
    lng: -74.2502832
  }, {
    lat: 40.5150716,
    lng: -74.2500257
  }, {
    lat: 40.5143538,
    lng: -74.2512274
  }, {
    lat: 40.5137339,
    lng: -74.2522573
  }, {
    lat: 40.51324449999999,
    lng: -74.2517853
  }, {
    lat: 40.512331,
    lng: -74.2532015
  }, {
    lat: 40.5112216,
    lng: -74.25302980000001
  }, {
    lat: 40.5096555,
    lng: -74.2535019
  }, {
    lat: 40.5084808,
    lng: -74.2547035
  }, {
    lat: 40.50844819999999,
    lng: -74.2553043
  }, {
    lat: 40.5076977,
    lng: -74.2557764
  }, {
    lat: 40.5066536,
    lng: -74.2555189
  }, {
    lat: 40.5041737,
    lng: -74.2556906
  }, {
    lat: 40.5034232,
    lng: -74.2551327
  }, {
    lat: 40.5011063,
    lng: -74.2537594
  }, {
    lat: 40.4999968,
    lng: -74.2533731
  }, {
    lat: 40.498854599999994,
    lng: -74.251399
  }, {
    lat: 40.497842999999996,
    lng: -74.2508841
  }, {
    lat: 40.4966355,
    lng: -74.2495108
  }, {
    lat: 40.49604810000001,
    lng: -74.2483521
  }, {
    lat: 40.496146,
    lng: -74.2467642
  }, {
    lat: 40.4973534,
    lng: -74.2451763
  }, {
    lat: 40.49758190000001,
    lng: -74.2435884
  }, {
    lat: 40.497484,
    lng: -74.2423868
  }, {
    lat: 40.4976472,
    lng: -74.2411423
  }, {
    lat: 40.4975166,
    lng: -74.2398119
  }, {
    lat: 40.4987893,
    lng: -74.2387819
  }, {
    lat: 40.499083,
    lng: -74.237709
  }, {
    lat: 40.4999315,
    lng: -74.2369366
  }, {
    lat: 40.5006821,
    lng: -74.2351341
  }, {
    lat: 40.5006821,
    lng: -74.2333746
  }, {
    lat: 40.5016937,
    lng: -74.2320442
  }, {
    lat: 40.5018242,
    lng: -74.2302847
  }, {
    lat: 40.502052600000006,
    lng: -74.2295122
  }, {
    lat: 40.5021832,
    lng: -74.2282677
  }, {
    lat: 40.5077304,
    lng: -74.2300701
  }, {
    lat: 40.515919800000006,
    lng: -74.232688
  }, {
    lat: 40.5167355,
    lng: -74.2332888
  }, {
    lat: 40.517388,
    lng: -74.2343187
  }, {
    lat: 40.519573799999996,
    lng: -74.2348337
  }, {
    lat: 40.5196716,
    lng: -74.237237
  }, {
    lat: 40.5198021,
    lng: -74.2385674
  }, {
    lat: 40.5200631,
    lng: -74.2401123
  }, {
    lat: 40.519639,
    lng: -74.2401981
  }, {
    lat: 40.5195412,
    lng: -74.2409277
  }, {
    lat: 40.5198674,
    lng: -74.2410994
  }, {
    lat: 40.5206503,
    lng: -74.2411852
  }, {
    lat: 40.5206503,
    lng: -74.2419147
  }, {
    lat: 40.5199,
    lng: -74.2418289
  }, {
    lat: 40.51941070000001,
    lng: -74.2415285
  }, {
    lat: 40.5188561,
    lng: -74.2419147
  }, {
    lat: 40.5183341,
    lng: -74.2426443
  }, {
    lat: 40.5184319,
    lng: -74.243803
  }, {
    lat: 40.518888700000005,
    lng: -74.2444038
  }, {
    lat: 40.518170899999994,
    lng: -74.2450905
  }, {
    lat: 40.518301400000006,
    lng: -74.24582
  }, {
    lat: 40.517453200000006,
    lng: -74.2450905
  }, {
    lat: 40.5166702,
    lng: -74.2465925
  }],
  color: '3F5BA9',
  center: {
    lat: 40.508349200000005,
    lng: -74.24202205
  }
}, {
  name: 'Charleston',
  borough: 'Staten Island',
  coords: [{
    lat: 40.543254299999994,
    lng: -74.2478371
  }, {
    lat: 40.5422759,
    lng: -74.2463779
  }, {
    lat: 40.5415911,
    lng: -74.2463779
  }, {
    lat: 40.541004,
    lng: -74.2457771
  }, {
    lat: 40.539242900000005,
    lng: -74.2453051
  }, {
    lat: 40.5388515,
    lng: -74.2448759
  }, {
    lat: 40.5390472,
    lng: -74.24453260000001
  }, {
    lat: 40.5386558,
    lng: -74.2444038
  }, {
    lat: 40.5377426,
    lng: -74.2455626
  }, {
    lat: 40.5367642,
    lng: -74.24582
  }, {
    lat: 40.5363728,
    lng: -74.2450905
  }, {
    lat: 40.53634019999999,
    lng: -74.2438459
  }, {
    lat: 40.5358836,
    lng: -74.2435884
  }, {
    lat: 40.5354269,
    lng: -74.2426872
  }, {
    lat: 40.5349703,
    lng: -74.2426443
  }, {
    lat: 40.53464420000001,
    lng: -74.2420864
  }, {
    lat: 40.53366570000001,
    lng: -74.2420006
  }, {
    lat: 40.53347000000001,
    lng: -74.2423868
  }, {
    lat: 40.5326219,
    lng: -74.2421722
  }, {
    lat: 40.5325241,
    lng: -74.2416573
  }, {
    lat: 40.5313172,
    lng: -74.2413998
  }, {
    lat: 40.5258046,
    lng: -74.2434597
  }, {
    lat: 40.5249891,
    lng: -74.2438889
  }, {
    lat: 40.5245324,
    lng: -74.2432022
  }, {
    lat: 40.5233254,
    lng: -74.2427301
  }, {
    lat: 40.522901299999994,
    lng: -74.242816
  }, {
    lat: 40.52234669999999,
    lng: -74.2426014
  }, {
    lat: 40.521172299999996,
    lng: -74.2432451
  }, {
    lat: 40.52107440000001,
    lng: -74.24242970000002
  }, {
    lat: 40.52107440000001,
    lng: -74.2410135
  }, {
    lat: 40.5203241,
    lng: -74.24015520000002
  }, {
    lat: 40.5202262,
    lng: -74.2390394
  }, {
    lat: 40.5196716,
    lng: -74.237237
  }, {
    lat: 40.519573799999996,
    lng: -74.2348337
  }, {
    lat: 40.517388,
    lng: -74.2343187
  }, {
    lat: 40.5167355,
    lng: -74.2332888
  }, {
    lat: 40.515919800000006,
    lng: -74.232688
  }, {
    lat: 40.5021832,
    lng: -74.2282677
  }, {
    lat: 40.5021832,
    lng: -74.2266798
  }, {
    lat: 40.5016937,
    lng: -74.2248774
  }, {
    lat: 40.502444200000006,
    lng: -74.2228603
  }, {
    lat: 40.502379,
    lng: -74.2217016
  }, {
    lat: 40.5027053,
    lng: -74.2209721
  }, {
    lat: 40.5027053,
    lng: -74.219985
  }, {
    lat: 40.5029011,
    lng: -74.2189121
  }, {
    lat: 40.5033253,
    lng: -74.2174101
  }, {
    lat: 40.5061315,
    lng: -74.21509270000001
  }, {
    lat: 40.50655569999999,
    lng: -74.2143631
  }, {
    lat: 40.5065557,
    lng: -74.2135906
  }, {
    lat: 40.50733880000001,
    lng: -74.2127323
  }, {
    lat: 40.5105691,
    lng: -74.2100286
  }, {
    lat: 40.5132771,
    lng: -74.2111444
  }, {
    lat: 40.5212049,
    lng: -74.2136335
  }, {
    lat: 40.5241083,
    lng: -74.2141485
  }, {
    lat: 40.52399410000001,
    lng: -74.2156076
  }, {
    lat: 40.5264244,
    lng: -74.2157792
  }, {
    lat: 40.52828370000001,
    lng: -74.2167664
  }, {
    lat: 40.5325241,
    lng: -74.2181826
  }, {
    lat: 40.5352313,
    lng: -74.2183113
  }, {
    lat: 40.5389168,
    lng: -74.2176676
  }, {
    lat: 40.54110190000001,
    lng: -74.2177963
  }, {
    lat: 40.5503634,
    lng: -74.22131540000001
  }, {
    lat: 40.5525481,
    lng: -74.2186975
  }, {
    lat: 40.553135000000005,
    lng: -74.2177963
  }, {
    lat: 40.55463490000001,
    lng: -74.2183542
  }, {
    lat: 40.5548632,
    lng: -74.2186975
  }, {
    lat: 40.5546023,
    lng: -74.2195988
  }, {
    lat: 40.5550588,
    lng: -74.2205
  }, {
    lat: 40.55499360000001,
    lng: -74.2215729
  }, {
    lat: 40.5554501,
    lng: -74.2231178
  }, {
    lat: 40.555874,
    lng: -74.2231178
  }, {
    lat: 40.5563957,
    lng: -74.2262077
  }, {
    lat: 40.5561022,
    lng: -74.2264652
  }, {
    lat: 40.55603700000001,
    lng: -74.2281389
  }, {
    lat: 40.55512399999999,
    lng: -74.2307997
  }, {
    lat: 40.55430890000001,
    lng: -74.2317009
  }, {
    lat: 40.5530046,
    lng: -74.2327309
  }, {
    lat: 40.5524829,
    lng: -74.2340612
  }, {
    lat: 40.5531024,
    lng: -74.2349195
  }, {
    lat: 40.55271110000001,
    lng: -74.2358637
  }, {
    lat: 40.55225459999999,
    lng: -74.2363787
  }, {
    lat: 40.5517329,
    lng: -74.2364645
  }, {
    lat: 40.551472,
    lng: -74.2358637
  }, {
    lat: 40.5505916,
    lng: -74.2364216
  }, {
    lat: 40.5502655,
    lng: -74.2375803
  }, {
    lat: 40.5494177,
    lng: -74.2381811
  }, {
    lat: 40.5491242,
    lng: -74.2388248
  }, {
    lat: 40.5485698,
    lng: -74.2392969
  }, {
    lat: 40.5473959,
    lng: -74.2408419
  }, {
    lat: 40.5473959,
    lng: -74.2414427
  }, {
    lat: 40.5467437,
    lng: -74.2425156
  }, {
    lat: 40.5476242,
    lng: -74.2436743
  }, {
    lat: 40.545537100000004,
    lng: -74.2462063
  }, {
    lat: 40.543254299999994,
    lng: -74.2478371
  }],
  color: 'CCCCCC',
  center: {
    lat: 40.5290447,
    lng: -74.22893284999998
  }
}, {
  name: 'Hoffman Island',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5778141,
    lng: -74.0548897
  }, {
    lat: 40.5771296,
    lng: -74.0540314
  }, {
    lat: 40.5776512,
    lng: -74.053216
  }, {
    lat: 40.579965400000006,
    lng: -74.0530443
  }, {
    lat: 40.5805521,
    lng: -74.0537739
  }, {
    lat: 40.5799654,
    lng: -74.0548038
  }, {
    lat: 40.5796068,
    lng: -74.0546751
  }, {
    lat: 40.5778141,
    lng: -74.0548897
  }],
  color: '62AF44',
  center: {
    lat: 40.57884085,
    lng: -74.053967
  }
}, {
  name: 'Swinburn Island',
  borough: 'Staten Island',
  coords: [{
    lat: 40.5667634,
    lng: -74.0509844
  }, {
    lat: 40.56663300000001,
    lng: -74.0510917
  }, {
    lat: 40.566307,
    lng: -74.0505981
  }, {
    lat: 40.5658832,
    lng: -74.0507269
  }, {
    lat: 40.565345300000004,
    lng: -74.0499544
  }, {
    lat: 40.5654105,
    lng: -74.0493107
  }, {
    lat: 40.5659647,
    lng: -74.0494394
  }, {
    lat: 40.5664048,
    lng: -74.0500402
  }, {
    lat: 40.5664374,
    lng: -74.0505552
  }, {
    lat: 40.5667634,
    lng: -74.0509844
  }],
  color: 'DB4436',
  center: {
    lat: 40.56605435,
    lng: -74.0502012
  }
}]);
"use strict";

var boroughs = {
  manhattan: {
    lat: 40.7829821,
    lng: -73.958588,
    alternate_names: []
  },
  brooklyn: {
    lat: 40.645244,
    lng: -73.9449975,
    alternate_names: ['bk', 'bklyn']
  },
  queens: {
    lat: 40.6801849,
    lng: -73.8739386,
    alternate_names: []
  },
  bronx: {
    lat: 40.8504989,
    lng: -73.84934,
    alternate_names: ['the bronx']
  },
  staten_island: {
    lat: 40.5758196,
    lng: -74.1547149,
    alternate_names: ['staten island', 'si']
  }
};
"use strict";

$(function () {
  $('.borough-select').on('click', function (e) {
    if (!$(this).hasClass('hidden') && Zoner.filteredState) {
      $(document).trigger('reset');
    } else {
      $(document).trigger('reset', {
        skipZoneRest: true
      });
      Zoner.showBorough($(this).data('url'));
    }
  });
  $(document).on('reset', function () {
    $('.borough-select').removeClass('hidden');
  });
});
"use strict";

if (window.console) {
  console.log('.__                       .__  .__  __                                   ');
  console.log('|  |   ____   ____ _____  |  | |__|/  |_ ___.__.      ____ ___.__. ____  ');
  console.log('|  |  /  _ \\_/ ___\\\\__  \\ |  | |  \\   __<   |  |     /    <   |  |/ ___\\ ');
  console.log('|  |_(  <_> )  \\___ / __ \\|  |_|  ||  |  \\___  |    |   |  \\___  \\  \\___ ');
  console.log('|____/\\____/ \\___  >____  /____/__||__|  / ____| /\\ |___|  / ____|\\___  >');
  console.log('                 \\/     \\/               \\/      \\/      \\/\\/         \\/ ');
  console.log('                                  copyright (c) 2014-2019 MusikAnimal    ');
}
"use strict";

$(document).ready(function () {
  $('#show_hide_zones').on('click', function () {
    $(this).find('img').toggleClass('hidden');
    Zoner.toggleZones();
  });
  $('#mylocation').on('click', function () {
    $('#address').val('Fetching location...');
    var timeout1 = setTimeout(function () {
      $('#address').val('Still working...');
    }, 5000);
    var timeout2 = setTimeout(function () {
      $('#address').val('');
      lnycAlert('Error fetching location');
    }, 10000);
    $.when(getCurrentPosition()).pipe(setCurrentPosition).done(function (results, status) {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      var match = results[0];
      var abbrAddress = Zoner.getFormattedAddress(match);
      $('#address').val(abbrAddress);
      var latLng = getLatLng(match.geometry.location.lat(), match.geometry.location.lng());
      Zoner.showInfoAndZoom(latLng.lat(), latLng.lng(), true);
    });
  }); // Listeners

  $(document).on('reset', function () {
    $('#show_hide_zones').find('img').removeClass('hidden');
  });
  $('.variation-btn').on('click', function () {
    $('.variation-btn').removeClass('selected');
    $('.variation-btn[data-variation=' + this.dataset.variation + ']').addClass('selected');
    $('body').removeClass('show-mobile-menu');
    var style = $(this).data('variation');
    setStyle(style);
    window.localStorage.setItem('lnyc-variation', style);
  });
  $('.mobile-infowindow').on('click', '.mobile-infowindow--close', function () {
    $(document).trigger('reset');
  });
  $('.mobile-hamburger-btn').on('click', function (e) {
    $('body').toggleClass('show-mobile-menu');

    if ($('body').hasClass('show-mobile-menu')) {
      e.stopPropagation();
      $('.content-wrapper').one('click', function () {
        $('body').removeClass('show-mobile-menu');
      });
    }
  });
});
"use strict";

$(function () {
  var $address = $('#address');
  $('#canvas').on('click', function () {
    $address.blur();
  });
  $('#find_address').submit(function (e) {
    e.preventDefault();

    if ($address.val() === '') {
      return lnycAlert('Please provide a search query!');
    }

    $address.blur();
    $(document).trigger('reset', {
      skipClearForm: true
    });
    var address = $address.val(),
        query = address.toLowerCase().replace(/_/g, ' ');

    for (var borough in boroughs) {
      if (query === borough || boroughs[borough].alternate_names.indexOf(query) !== -1) {
        return Zoner.showBorough(borough);
      }

      var neighborhood = neighborhoods.filter(function (n) {
        return n.name.toLowerCase() === query;
      })[0];

      if (neighborhood) {
        return Zoner.showNeighborhood(query);
      }
    }

    if (!stableConnection) return lnycAlert('You are offline! Please check your internet connection and try again.');
    var gc = new google.maps.Geocoder();
    gc.geocode({
      'address': query
    }, function (results) {
      var locality = results[0];

      if (locality && !Zoner.isInNYC(locality)) {
        locality = $.grep(results, function (result) {
          return Zoner.isInNYC(result);
        })[0];
      }

      if (!locality) {
        return lnycAlert('Address not found within city limits!\nCheck the spelling or try including the name of the borough.');
      }

      var abbrAddress = Zoner.getFormattedAddress(locality);
      $address.val(abbrAddress);
      var lat = locality.geometry.location.lat();
      var lng = locality.geometry.location.lng();
      Zoner.showInfoAndZoom(lat, lng);
      Zoner.filteredState = abbrAddress;
      updateHistory();
    });
  });
  $('#reset_address').on('click', function () {
    $(document).trigger('reset');
  });
  $(document).on('reset', function (e) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!opts.skipClearForm) {
      $address.val('');
    }

    if (!opts.skipZoneReset) {
      Zoner.reset();
    }

    if (Zoner.highlightedPoly) {
      unhighlight(Zoner.highlightedPoly);
      Zoner.highlightedPoly = null;
    }
  });
});
"use strict";

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-55357845-1', 'auto');
ga('send', 'pageview');
var openedInfo = new google.maps.InfoWindow(),
    polyIsVisible = true,
    isMobile = false,
    stableConnection = true,
    reconnectTimeout,
    reconnectInterval = 3;
$(function () {
  initMap();
  addMainListeners();
});

function getCurrentPosition(options) {
  var deferred = $.Deferred();
  navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, options);
  return deferred.promise();
}

function setCurrentPosition(position) {
  var deferred = $.Deferred();
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  var latlng = getLatLng(lat, lng);
  var geoCoder = new google.maps.Geocoder();
  geoCoder.geocode({
    location: latlng
  }, deferred.resolve);
  return deferred.promise();
}

function setupShareLinks(name) {
  $('#share-modal .share-modal--name').text(name || 'locality.nyc');
  $('#share_url_input').val(document.URL);
  $('.copy-url').text('Copy');
  $('.copy-url').on('click', function (e) {
    $('#share_url_input').select();
    document.execCommand('copy');
    $(e.target).text('Copied!');
  });
  $('.facebook-share-link').prop('href', "https://www.facebook.com/sharer.php?u=".concat(encodeURIComponent(document.URL)));
  $('.twitter-share-link').prop('href', "https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(document.URL), "&text=Check out \"").concat(name, "\" on locality.nyc"));
  $('.linkedin-share-link').prop('href', "https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(document.URL), "&title=\"").concat(name, "\" on locality.nyc&summary=Exploring the neighborhoods of New York City&source=locality.nyc"));
}

function addMainListeners() {
  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      $('.modal').removeClass('show');
      $('body').removeClass('show-mobile-menu').removeClass('show-modal');

      if ($(document.activeElement).is('body')) {
        $(document).trigger('reset');
      } else {
        $(document.activeElement).blur();
      }
    }
  });
  $('body').on('click', '.modal-link', function (e) {
    e.preventDefault();
    $('body').removeClass('show-mobile-menu').addClass('show-modal');
    var targetId = $(e.target).data('target');
    $('#' + targetId).addClass('show');

    if ('share-modal' === targetId) {
      setupShareLinks($(e.target).data('name'));
    }
  });
  $('.modal-close').on('click', function () {
    $('.modal').removeClass('show');
    $('body').removeClass('show-modal');
  });
  $('#offline_notice').on('click', function () {
    lnycAlert('You are offline! locality.nyc uses Google Maps which may be cached on your device, however search functionality will not work while you are offline.');
  });
  setTimeout(checkNetwork, 5000);
}

function checkNetwork() {
  if (typeof Connection !== 'undefined' && navigator.connection) {
    updateConnectivityState([Connection.UNKNOWN, Connection.CELL, Connection.NONE].indexOf(navigator.connection.type) === -1);
  } else {
    updateConnectivityState(navigator.onLine);
  }
}

function updateConnectivityState(state) {
  if (state) {
    if (!stableConnection) {
      stableConnection = true;
      $('#offline_notice').removeClass('active');
    }

    setTimeout(checkNetwork, 5000);
  } else {
    if (stableConnection) {
      stableConnection = false;
      reconnectInterval = 0;
      $('#offline_notice').addClass('active');
    }

    if (reconnectInterval < 5) {
      reconnectInterval++;
    }

    setTimeout(checkNetwork, reconnectInterval * 1000);
  }
}
"use strict";

function initMap() {
  var style = window.localStorage.getItem('lnyc-variation') || 'pale_dawn';
  $('.variation-btn[data-variation=' + style + ']').addClass('selected');
  $('#map_style--' + style).prop('checked', true);
  var zoom = 11,
      lat = 40.7033127,
      lng = -73.979681,
      zone = undefined;

  if (!!document.location.hash) {
    var parts = document.location.hash.substr(1).split(',');
    lat = parseFloat(parts[0]) || lat;
    lng = parseFloat(parts[1]) || lng;
    zoom = parseInt((parts[2] || '').replace('z', ''), 10) || zoom;
    zone = parts[3];
  }

  var mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    disableDefaultUI: true,
    // streetViewControl: true,
    styles: defaultStyles.concat(mapStyles[style]),
    zoom: zoom
  };
  window.map = new google.maps.Map($('#canvas')[0], mapOptions); // restrict boundaries

  var allowedBounds = new google.maps.LatLngBounds(new google.maps.LatLng(40.3518381, -74.3515920), new google.maps.LatLng(40.9071533, -73.7153225));
  google.maps.event.addListener(map, 'dragend', function () {
    if (allowedBounds.contains(map.getCenter())) {
      updateHistory();
      return;
    }

    var c = map.getCenter();
    var x = c.lng();
    var y = c.lat();
    var maxX = allowedBounds.getNorthEast().lng();
    var maxY = allowedBounds.getNorthEast().lat();
    var minX = allowedBounds.getSouthWest().lng();
    var minY = allowedBounds.getSouthWest().lat();
    if (x < minX) x = minX;
    if (x > maxX) x = maxX;
    if (y < minY) y = minY;
    if (y > maxY) y = maxY;
    map.setCenter(new google.maps.LatLng(y, x));
    updateHistory();
  });
  addListeners();
  Zoner.plot();
  $(window).on('load', function () {
    if (zone) {
      if (Object.keys(boroughs).indexOf(zone) !== -1) {
        Zoner.showBorough(zone, lat, lng, zoom);
      } else {
        neighborhoods.forEach(function (neighborhood) {
          if (neighborhood.name.toLowerCase().replace(/ /g, '_') === zone) {
            return Zoner.showNeighborhood(zone); // , lat, lng, zoom);
          }
        });
        $('#address').val(decodeURIComponent(zone));
        $('#find_address').trigger('submit');
      }
    }
  });
}

function addListeners() {
  // Limit the zoom level
  google.maps.event.addListener(map, 'zoom_changed', function () {
    if (map.getZoom() < 10) map.setZoom(10);
    updateHistory();
  });
  $('#zoom_out').on('click', function () {
    if (map.getZoom() === 10) return false;
    map.setZoom(map.getZoom() - 1);
  });
  $('#zoom_in').on('click', function () {
    map.setZoom(map.getZoom() + 1);
  });
  $(document).on('reset', function () {
    openedInfo.close();
    $('.mobile-infowindow').removeClass('show'); // $('.mobile-infowindow').html('');
  });
}

function updateHistory(filter) {
  var lat = Number(map.getCenter().lat()).toFixed(7),
      lng = Number(map.getCenter().lng()).toFixed(7),
      fragment = '#' + lat + ',' + lng + ',' + map.getZoom() + 'z';
  filter = filter || Zoner.filteredState;

  if (filter) {
    fragment += ',' + filter;
  }

  history.replaceState(null, document.title, fragment);
}

function createMarker(latlng, content) {
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  }); // google.maps.event.addListener(marker, "click", function() {

  openedInfo.close();
  openedInfo = new google.maps.InfoWindow({
    content: content
  });
  openedInfo.open(map, marker); // });

  return marker;
}

function getLatLng(lat, lng) {
  var latLng;

  if (typeof lat === 'number') {
    latLng = new google.maps.LatLng(lat, lng);
  } else {
    latLng = lat;
  }

  return latLng;
}

function highlight(poly) {
  poly.setOptions({
    strokeWeight: 3.0,
    strokeColor: 'white',
    strokeOpacity: 1
  });
}

function setCenter(lat, lng, zoom) {
  var latLng = getLatLng(lat, lng);
  map.setCenter(latLng);
  map.setZoom(zoom || 15); // if (detectMobile()) {
  //   const offset = ($(window).height() / 2) - (($('nav').outerHeight() + $('.mobile-infowindow').outerHeight()) / 2);
  //   map.panBy(0, offset);
  // }
}

function setStyle(variation) {
  var styles = [];

  if (variation) {
    styles = defaultStyles.concat(mapStyles[variation]);
  }

  map.setOptions({
    styles: styles
  });
}

function setUserCoords() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    map.setCenter(new google.maps.LatLng(lat, lng));
    map.setZoom(11);
  });
}

function unhighlight(poly) {
  poly.setOptions({
    strokeWeight: 2.0,
    strokeColor: 'black',
    strokeOpacity: 0.25
  });
}

google.maps.Map.prototype.markers = [];

google.maps.Map.prototype.addMarker = function (marker) {
  this.markers[this.markers.length] = marker;
};

google.maps.Map.prototype.getMarkers = function () {
  return this.markers;
};

google.maps.Map.prototype.clearMarkers = function () {
  if (infowindow) {
    infowindow.close();
  }

  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].set_map(null);
  }
};

google.maps.Polygon.prototype.getBounds = function () {
  var bounds = new google.maps.LatLngBounds();
  var paths = this.getPaths();
  var path;

  for (var i = 0; i < paths.getLength(); i++) {
    path = paths.getAt(i);

    for (var ii = 0; ii < path.getLength(); ii++) {
      bounds.extend(path.getAt(ii));
    }
  }

  return bounds;
};

var mapStyles = {
  fuse: [{
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'lightness': 65
    }, {
      'visibility': 'on'
    }]
  }, {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'lightness': 51
    }, {
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road.highway',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road.arterial',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'lightness': 30
    }, {
      'visibility': 'on'
    }]
  }, {
    'featureType': 'road.local',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'lightness': 40
    }, {
      'visibility': 'on'
    }]
  }, {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'transit',
    'elementType': 'geometry.fill',
    'stylers': [{
      'visibility': 'on'
    }]
  }, {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [{
      'hue': '#ffff00'
    }, {
      'lightness': -25
    }, {
      'saturation': -97
    }]
  }, {
    'featureType': 'water',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'on'
    }, {
      'lightness': -25
    }, {
      'saturation': -100
    }]
  }],
  just_retro: [{
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#b1ab85'
    }]
  }, {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#8cc0c3'
    }]
  }, {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#cde6cf'
    }]
  }, {
    'featureType': 'landscape.man_made',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#efede8'
    }]
  }],
  greyscale: [{
    'featureType': 'all',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'gamma': 0.5
    }]
  }],
  old_map: [{
    'featureType': 'poi',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'water',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'transit',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'landscape',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road.highway',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'road.local',
    'stylers': [{
      'visibility': 'on'
    }]
  }, {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [{
      'visibility': 'on'
    }]
  }, {
    'featureType': 'water',
    'stylers': [{
      'color': '#abbaa4'
    }]
  }, {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#3f518c'
    }]
  }, {
    'featureType': 'road.highway',
    'stylers': [{
      'color': '#ad9b8d'
    }]
  }],
  pale_dawn: [{
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [{
      'color': '#f2e5d4'
    }]
  }, {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#c5dac6'
    }]
  }, {
    'featureType': 'poi.park',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'on'
    }, {
      'lightness': 20
    }]
  }, {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [{
      'lightness': 20
    }]
  }, {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#c5c6c6'
    }]
  }, {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#e4d7c6'
    }]
  }, {
    'featureType': 'road.local',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#fbfaf7'
    }]
  }, {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'on'
    }, {
      'color': '#acbcc9'
    }]
  }],
  retro: [{
    'featureType': 'poi',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'water',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'transit',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'landscape',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road.highway',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'road.local',
    'stylers': [{
      'visibility': 'on'
    }]
  }, {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [{
      'visibility': 'on'
    }]
  }, {
    'featureType': 'water',
    'stylers': [{
      'color': '#84afa3'
    }, {
      'lightness': 52
    }]
  }, {
    'stylers': [{
      'saturation': -17
    }, {
      'gamma': 0.36
    }]
  }, {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#3f518c'
    }]
  }],
  "default": []
};
var defaultStyles = [{
  featureType: 'administrative.neighborhood',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'off'
  }]
}];
"use strict";

function detectMobile() {
  return $(window).width() <= 700;
}

function lnycAlert(message) {
  alert(message);
}
/** Polyfills */


Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};
"use strict";

var updateTimeout;
var Zoner = {
  polyList: [],
  names: [],
  filteredState: null,
  highlightedPoly: null,
  plot: function plot() {
    $.each(neighborhoods, function (i, zone) {
      var paths = [];

      for (var j in zone.coords) {
        var lat = zone.coords[j].lat;
        var lng = zone.coords[j].lng;
        paths.push(new google.maps.LatLng(lat, lng));
      }

      var poly = new google.maps.Polygon({
        paths: paths,
        strokeColor: '#000000',
        strokeOpacity: 0.25,
        strokeWeight: 2,
        fillColor: '#' + zone.color,
        fillOpacity: zone.color === 'FFFFFF' ? 0 : 0.4 // clickable: false

      });
      var polyZone = {
        name: zone.name,
        borough: zone.borough,
        color: zone.color,
        polyIndex: i,
        polygon: poly,
        summary: zone.summary
      };
      Zoner.polyList.push(polyZone);
      Zoner.names.push(polyZone.name);
      poly.setMap(map);

      if (!isMobile) {
        google.maps.event.addListener(poly, 'mouseover', highlight.bind(this, poly));
        google.maps.event.addListener(poly, 'mouseout', unhighlight.bind(this, poly, zone));
      }

      google.maps.event.addListener(poly, 'click', function (e) {
        updateTimeout = setTimeout(function () {
          Zoner.showInfo(e.latLng.lat(), e.latLng.lng(), null, false, true);
        }, 200);
      });
    });
    google.maps.event.addListener(map, 'dblclick', function (e) {
      clearTimeout(updateTimeout);
    });
    Zoner.names.sort(function (a, b) {
      return a.localeCompare(b);
    });

    if ('options' in document.createElement('datalist')) {
      Zoner.names.forEach(function (name) {
        $('datalist').append('<option value="' + name + '"></option>');
      });
    }
  },
  getNeighborhoods: function getNeighborhoods(lat, lng) {
    var latLng = getLatLng(lat, lng);
    return $.grep(Zoner.polyList, function (zone) {
      return google.maps.geometry.poly.containsLocation(latLng, zone.polygon);
    });
  },
  getFormattedAddress: function getFormattedAddress(locality) {
    // FIXME: use our neighborhood address, not what Google gives you
    var abbrAddress = locality.address_components[0].short_name + ' ' + locality.address_components[1].short_name;

    if (locality.address_components[2].short_name !== 'New York') {
      abbrAddress += ', ' + locality.address_components[2].short_name;
    }

    return abbrAddress;
  },
  isInNYC: function isInNYC(locality) {
    if (!locality.address_components.length) {
      return false;
    }

    for (var i = 0; i < locality.address_components.length; i++) {
      if (locality.address_components[i].types.indexOf('administrative_area_level_2') >= 0) {
        return !!locality.address_components[i].long_name.match(/New York County|Kings County|Queens County|Bronx County|Richmond County/i);
      }

      if (locality.address_components[i].types.indexOf('locality') >= 0) {
        return !!locality.address_components[i].long_name.match(/New York/i);
      }

      if (locality.address_components[i].types.indexOf('sublocality') >= 0) {
        return !!locality.address_components[i].long_name.match(/Manhattan|Brooklyn|Queens|Bronx|Staten Island/i);
      }
    }

    return false;
  },
  reset: function reset() {
    $.each(Zoner.polyList, function (index, el) {
      el.polygon.filtered = false;
      el.polygon.setMap(map);
    });
    Zoner.filteredState = null;
    updateHistory();
  },
  showBorough: function showBorough(name, lat, lng, zoom) {
    $.each(Zoner.polyList, function (index, el) {
      if (el.borough.toLowerCase().replace(/ /g, '_') === name) {
        el.polygon.filtered = true;
        el.polygon.setMap(map);
      } else {
        el.polygon.filtered = false;
        el.polygon.setMap(null);
      }
    });
    var center = boroughs[name];
    setCenter(lat || center.lat, lng || center.lng, zoom || 11);
    var $button = $(".borough-select[data-url='" + name + "']");
    $button.removeClass('hidden').siblings().addClass('hidden');
    $('#address').val($button.text());
    Zoner.filteredState = name;
    updateHistory();
  },
  showNeighborhood: function showNeighborhood(name) {
    name = name.replace(/_/g, ' ');
    $.each(Zoner.polyList, function (index, el) {
      if (el.name.toLowerCase() === name.toLowerCase()) {
        el.polygon.filtered = true;
        el.polygon.setMap(map);
      } else {
        el.polygon.filtered = false;
        el.polygon.setMap(null);
      }
    });
    var humanName = name,
        // = name is a safeguard, should always be replaced.
    infoLat,
        infoLng,
        i;

    for (i = 0; i < neighborhoods.length; i++) {
      if (neighborhoods[i].name.toLowerCase() === name.toLowerCase()) {
        infoLat = neighborhoods[i].center.lat;
        infoLng = neighborhoods[i].center.lng;
        humanName = neighborhoods[i].name;
        break;
      }
    }

    Zoner.filteredState = name.replace(/ /g, '_');
    Zoner.showInfo(infoLat, infoLng, i, true);

    if (detectMobile() && !$('.mobile-infowindow').hasClass('show')) {
      $('.mobile-infowindow').html(Templates.infowindow([neighborhoods[i]], true));
    }

    map.fitBounds(Zoner.polyList[i].polygon.getBounds());
    $('#address').val(humanName);
    updateHistory();
  },
  showInfo: function showInfo(lat, lng, highlightPolyIndex, showSummary, fromClick) {
    openedInfo.close();

    if (Zoner.highlightedPoly) {
      unhighlight(Zoner.highlightedPoly);
      Zoner.highlightedPoly = null;
    }

    var latLng = getLatLng(lat, lng);
    var matches = Zoner.getNeighborhoods(latLng);

    if (matches.length === 0) {
      if (fromClick) {
        return;
      } else if (!highlightPolyIndex) {
        return lnycAlert('Neighborhood not established!');
      }
    }

    if (Number.isInteger(highlightPolyIndex)) {
      highlight(Zoner.polyList[highlightPolyIndex].polygon);
      Zoner.highlightedPoly = Zoner.polyList[highlightPolyIndex].polygon; // Narrow down to the one that was click on.

      matches = matches.filter(function (match) {
        return match.name === Zoner.polyList[highlightPolyIndex].name;
      });
    }

    if (showSummary && matches.length === 1) {
      $('.mobile-infowindow').html(Templates.infowindow(matches, true)).addClass('show');
    }

    if (!detectMobile() || !showSummary) {
      openedInfo = new google.maps.InfoWindow({
        content: Templates.infowindow(matches, !!showSummary)
      });
      openedInfo.setPosition(latLng);
      openedInfo.open(map);
    }

    google.maps.event.addListener(openedInfo, 'domready', function () {
      $('body').off('click.infowindow').one('click.infowindow', '.zone-link', function (e) {
        Zoner.showNeighborhood($(e.target).data('key'));
      });
      $.each(matches, function (i, zone) {
        $('.zone-link[data-index=' + zone.polyIndex + ']').hover(function () {
          highlight(zone.polygon);
        }, function () {
          unhighlight(zone.polygon);
        });
      });
    });
  },
  showInfoAndZoom: function showInfoAndZoom(lat, lng) {
    var showSummary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var matches = Zoner.getNeighborhoods(lat, lng);

    if (matches.length === 1) {
      this.showNeighborhood(matches[0].name);
    } else {
      Zoner.showInfo(lat, lng, null, showSummary);
      setCenter(lat, lng);
    }
  },
  toggleZones: function toggleZones() {
    $.each(Zoner.polyList, function (index, el) {
      if (el.polygon.map) {
        el.polygon.setMap(null);
      } else if (el.polygon.filtered && Zoner.filteredState) {
        el.polygon.setMap(map);
      } else if (!Zoner.filteredState) {
        el.polygon.setMap(map);
      }
    });
    polyIsVisible = !polyIsVisible;
  }
};
"use strict";

window.Templates = {
  infowindow: function infowindow(zones, showSummary) {
    var content = '',
        shareLink = '';

    if (showSummary && zones.length === 1) {
      content = zones[0].summary || '';

      if (zones[0].polygon) {
        zones[0].miles = new Number(google.maps.geometry.spherical.computeLength(zones[0].polygon.getPath()) * 0.000621371).toFixed(2);
        zones[0].acres = new Number(google.maps.geometry.spherical.computeArea(zones[0].polygon.getPath()) / 2.59e+6 * 640).toFixed(0);
        shareLink = "\n          <br/><a class=\"share-link modal-link\" data-target=\"share-modal\" data-name=\"".concat(zones[0].name, "\" href=\"#\">\n            <img src='images/share-square-solid.svg' alt=\"Share icon\">\n            Share\n          </a>");
      }
    }

    return zones.map(function (zone) {
      var zoneSizeContent = showSummary && zone.acres && zone.miles ? "<span class='zone-size'>".concat(zone.acres, " ac, ").concat(zone.miles, " mi</span>") : '';
      return "<header class='zone-name mobile-infowindow--header'>\n                <button class=\"mobile-infowindow--close\"></button>\n                <span class='zone-icon' style='background:#".concat(zone.color, "'></span>\n                ").concat(zoneSizeContent, "\n                <span class='zone-link' data-index='").concat(zone.polyIndex, "' data-key=\"").concat(zone.name.toLowerCase().replace(/ /g, '_'), "\">").concat(zone.name, "</span>\n              </header>\n              <div class='zone-summary'>\n                ").concat(content, "\n                ").concat(shareLink, "\n              </div>");
    }).join('');
  }
};