!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.io = e())
    : (t.io = e());
})(this, function () {
  return (
    (o = {}),
    (n.m = r =
      [
        function (t, e, n) {
          function r(t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var n = i(t),
              r = n.source,
              o = n.id,
              t = n.path,
              t = c[o] && t in c[o].nsps,
              o =
                e.forceNew ||
                e["force new connection"] ||
                !1 === e.multiplex ||
                t
                  ? (a("ignoring socket cache for %s", r), s(r, e))
                  : (c[o] || (a("new io instance for %s", r), (c[o] = s(r, e))),
                    c[o]);
            return (
              n.query && !e.query && (e.query = n.query), o.socket(n.path, e)
            );
          }
          var i = n(1),
            o = n(7),
            s = n(12),
            a = n(3)("socket.io-client");
          t.exports = e = r;
          var c = (e.managers = {});
          (e.protocol = o.protocol),
            (e.connect = r),
            (e.Manager = n(12)),
            (e.Socket = n(37));
        },
        function (t, e, n) {
          var r = n(2),
            o = n(3)("socket.io-client:url");
          t.exports = function (t, e) {
            var n = t;
            return (
              (e = e || ("undefined" != typeof location && location)),
              null == t && (t = e.protocol + "//" + e.host),
              "string" == typeof t &&
                ("/" === t.charAt(0) &&
                  (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t),
                /^(https?|wss?):\/\//.test(t) ||
                  (o("protocol-less url %s", t),
                  (t = void 0 !== e ? e.protocol + "//" + t : "https://" + t)),
                o("parse %s", t),
                (n = r(t))),
              n.port ||
                (/^(http|ws)$/.test(n.protocol)
                  ? (n.port = "80")
                  : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
              (n.path = n.path || "/"),
              (t = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host),
              (n.id = n.protocol + "://" + t + ":" + n.port),
              (n.href =
                n.protocol +
                "://" +
                t +
                (e && e.port === n.port ? "" : ":" + n.port)),
              n
            );
          };
        },
        function (t, e) {
          var c =
              /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            p = [
              "source",
              "protocol",
              "authority",
              "userInfo",
              "user",
              "password",
              "host",
              "port",
              "relative",
              "path",
              "directory",
              "file",
              "query",
              "anchor",
            ];
          t.exports = function (t) {
            var e = t,
              n = t.indexOf("["),
              r = t.indexOf("]");
            -1 != n &&
              -1 != r &&
              (t =
                t.substring(0, n) +
                t.substring(n, r).replace(/:/g, ";") +
                t.substring(r, t.length));
            for (var o, i = c.exec(t || ""), s = {}, a = 14; a--; )
              s[p[a]] = i[a] || "";
            return (
              -1 != n &&
                -1 != r &&
                ((s.source = e),
                (s.host = s.host
                  .substring(1, s.host.length - 1)
                  .replace(/;/g, ":")),
                (s.authority = s.authority
                  .replace("[", "")
                  .replace("]", "")
                  .replace(/;/g, ":")),
                (s.ipv6uri = !0)),
              (s.pathNames =
                ((r = s.path),
                (e = r.replace(/\/{2,9}/g, "/").split("/")),
                ("/" != r.substr(0, 1) && 0 !== r.length) || e.splice(0, 1),
                "/" == r.substr(r.length - 1, 1) && e.splice(e.length - 1, 1),
                e)),
              (s.queryKey =
                ((e = s.query),
                (o = {}),
                e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
                  e && (o[e] = n);
                }),
                o)),
              s
            );
          };
        },
        function (r, o, i) {
          (function (e) {
            "use strict";
            function t() {
              var t;
              try {
                t = o.storage.debug;
              } catch (t) {}
              return !t && void 0 !== e && "env" in e && (t = e.env.DEBUG), t;
            }
            var n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
            ((o = r.exports = i(5)).log = function () {
              return (
                "object" ===
                  ("undefined" == typeof console ? "undefined" : n(console)) &&
                console.log &&
                Function.prototype.apply.call(console.log, console, arguments)
              );
            }),
              (o.formatArgs = function (t) {
                var e,
                  n,
                  r = this.useColors;
                (t[0] =
                  (r ? "%c" : "") +
                  this.namespace +
                  (r ? " %c" : " ") +
                  t[0] +
                  (r ? "%c " : " ") +
                  "+" +
                  o.humanize(this.diff)),
                  r &&
                    ((r = "color: " + this.color),
                    t.splice(1, 0, r, "color: inherit"),
                    t[(n = e = 0)].replace(/%[a-zA-Z%]/g, function (t) {
                      "%%" !== t && (e++, "%c" === t && (n = e));
                    }),
                    t.splice(n, 0, r));
              }),
              (o.save = function (t) {
                try {
                  null == t
                    ? o.storage.removeItem("debug")
                    : (o.storage.debug = t);
                } catch (t) {}
              }),
              (o.load = t),
              (o.useColors = function () {
                return (
                  !(
                    "undefined" == typeof window ||
                    !window.process ||
                    "renderer" !== window.process.type
                  ) ||
                  (("undefined" == typeof navigator ||
                    !navigator.userAgent ||
                    !navigator.userAgent
                      .toLowerCase()
                      .match(/(edge|trident)\/(\d+)/)) &&
                    (("undefined" != typeof document &&
                      document.documentElement &&
                      document.documentElement.style &&
                      document.documentElement.style.WebkitAppearance) ||
                      ("undefined" != typeof window &&
                        window.console &&
                        (window.console.firebug ||
                          (window.console.exception &&
                            window.console.table))) ||
                      ("undefined" != typeof navigator &&
                        navigator.userAgent &&
                        navigator.userAgent
                          .toLowerCase()
                          .match(/firefox\/(\d+)/) &&
                        31 <= parseInt(RegExp.$1, 10)) ||
                      ("undefined" != typeof navigator &&
                        navigator.userAgent &&
                        navigator.userAgent
                          .toLowerCase()
                          .match(/applewebkit\/(\d+)/))))
                );
              }),
              (o.storage =
                "undefined" != typeof chrome && void 0 !== chrome.storage
                  ? chrome.storage.local
                  : (function () {
                      try {
                        return window.localStorage;
                      } catch (t) {}
                    })()),
              (o.colors = [
                "#0000CC",
                "#0000FF",
                "#0033CC",
                "#0033FF",
                "#0066CC",
                "#0066FF",
                "#0099CC",
                "#0099FF",
                "#00CC00",
                "#00CC33",
                "#00CC66",
                "#00CC99",
                "#00CCCC",
                "#00CCFF",
                "#3300CC",
                "#3300FF",
                "#3333CC",
                "#3333FF",
                "#3366CC",
                "#3366FF",
                "#3399CC",
                "#3399FF",
                "#33CC00",
                "#33CC33",
                "#33CC66",
                "#33CC99",
                "#33CCCC",
                "#33CCFF",
                "#6600CC",
                "#6600FF",
                "#6633CC",
                "#6633FF",
                "#66CC00",
                "#66CC33",
                "#9900CC",
                "#9900FF",
                "#9933CC",
                "#9933FF",
                "#99CC00",
                "#99CC33",
                "#CC0000",
                "#CC0033",
                "#CC0066",
                "#CC0099",
                "#CC00CC",
                "#CC00FF",
                "#CC3300",
                "#CC3333",
                "#CC3366",
                "#CC3399",
                "#CC33CC",
                "#CC33FF",
                "#CC6600",
                "#CC6633",
                "#CC9900",
                "#CC9933",
                "#CCCC00",
                "#CCCC33",
                "#FF0000",
                "#FF0033",
                "#FF0066",
                "#FF0099",
                "#FF00CC",
                "#FF00FF",
                "#FF3300",
                "#FF3333",
                "#FF3366",
                "#FF3399",
                "#FF33CC",
                "#FF33FF",
                "#FF6600",
                "#FF6633",
                "#FF9900",
                "#FF9933",
                "#FFCC00",
                "#FFCC33",
              ]),
              (o.formatters.j = function (t) {
                try {
                  return JSON.stringify(t);
                } catch (t) {
                  return "[UnexpectedJSONParseError]: " + t.message;
                }
              }),
              o.enable(t());
          }).call(o, i(4));
        },
        function (t, e) {
          function n() {
            throw new Error("setTimeout has not been defined");
          }
          function r() {
            throw new Error("clearTimeout has not been defined");
          }
          function o(e) {
            if (p === setTimeout) return setTimeout(e, 0);
            if ((p === n || !p) && setTimeout)
              return (p = setTimeout), setTimeout(e, 0);
            try {
              return p(e, 0);
            } catch (t) {
              try {
                return p.call(null, e, 0);
              } catch (t) {
                return p.call(this, e, 0);
              }
            }
          }
          function i() {
            l &&
              u &&
              ((l = !1),
              u.length ? (f = u.concat(f)) : (d = -1),
              f.length && s());
          }
          function s() {
            if (!l) {
              var t = o(i);
              l = !0;
              for (var e = f.length; e; ) {
                for (u = f, f = []; ++d < e; ) u && u[d].run();
                (d = -1), (e = f.length);
              }
              (u = null),
                (l = !1),
                (function (e) {
                  if (h === clearTimeout) return clearTimeout(e);
                  if ((h === r || !h) && clearTimeout)
                    return (h = clearTimeout), clearTimeout(e);
                  try {
                    h(e);
                  } catch (t) {
                    try {
                      return h.call(null, e);
                    } catch (t) {
                      return h.call(this, e);
                    }
                  }
                })(t);
            }
          }
          function a(t, e) {
            (this.fun = t), (this.array = e);
          }
          function c() {}
          var p,
            h,
            t = (t.exports = {});
          !(function () {
            try {
              p = "function" == typeof setTimeout ? setTimeout : n;
            } catch (t) {
              p = n;
            }
            try {
              h = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (t) {
              h = r;
            }
          })();
          var u,
            f = [],
            l = !1,
            d = -1;
          (t.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            f.push(new a(t, e)), 1 !== f.length || l || o(s);
          }),
            (a.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (t.title = "browser"),
            (t.browser = !0),
            (t.env = {}),
            (t.argv = []),
            (t.version = ""),
            (t.versions = {}),
            (t.on = c),
            (t.addListener = c),
            (t.once = c),
            (t.off = c),
            (t.removeListener = c),
            (t.removeAllListeners = c),
            (t.emit = c),
            (t.prependListener = c),
            (t.prependOnceListener = c),
            (t.listeners = function (t) {
              return [];
            }),
            (t.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (t.cwd = function () {
              return "/";
            }),
            (t.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (t.umask = function () {
              return 0;
            });
        },
        function (t, c, e) {
          "use strict";
          function n(t) {
            function s() {
              if (s.enabled) {
                var r = s,
                  t = +new Date(),
                  e = t - (a || t);
                (r.diff = e), (r.prev = a), (r.curr = t), (a = t);
                for (
                  var o = new Array(arguments.length), n = 0;
                  n < o.length;
                  n++
                )
                  o[n] = arguments[n];
                (o[0] = c.coerce(o[0])),
                  "string" != typeof o[0] && o.unshift("%O");
                var i = 0;
                (o[0] = o[0].replace(/%([a-zA-Z%])/g, function (t, e) {
                  if ("%%" === t) return t;
                  i++;
                  var n = c.formatters[e];
                  return (
                    "function" == typeof n &&
                      ((e = o[i]), (t = n.call(r, e)), o.splice(i, 1), i--),
                    t
                  );
                })),
                  c.formatArgs.call(r, o),
                  (s.log || c.log || console.log.bind(console)).apply(r, o);
              }
            }
            var a;
            return (
              (s.namespace = t),
              (s.enabled = c.enabled(t)),
              (s.useColors = c.useColors()),
              (s.color = (function (t) {
                var e,
                  n = 0;
                for (e in t) (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
                return c.colors[Math.abs(n) % c.colors.length];
              })(t)),
              (s.destroy = r),
              "function" == typeof c.init && c.init(s),
              c.instances.push(s),
              s
            );
          }
          function r() {
            var t = c.instances.indexOf(this);
            return -1 !== t && (c.instances.splice(t, 1), !0);
          }
          ((c = t.exports = n.debug = n.default = n).coerce = function (t) {
            return t instanceof Error ? t.stack || t.message : t;
          }),
            (c.disable = function () {
              c.enable("");
            }),
            (c.enable = function (t) {
              c.save(t), (c.names = []), (c.skips = []);
              for (
                var e = ("string" == typeof t ? t : "").split(/[\s,]+/),
                  n = e.length,
                  r = 0;
                r < n;
                r++
              )
                e[r] &&
                  ("-" === (t = e[r].replace(/\*/g, ".*?"))[0]
                    ? c.skips.push(new RegExp("^" + t.substr(1) + "$"))
                    : c.names.push(new RegExp("^" + t + "$")));
              for (r = 0; r < c.instances.length; r++) {
                var o = c.instances[r];
                o.enabled = c.enabled(o.namespace);
              }
            }),
            (c.enabled = function (t) {
              if ("*" === t[t.length - 1]) return !0;
              for (var e = 0, n = c.skips.length; e < n; e++)
                if (c.skips[e].test(t)) return !1;
              for (e = 0, n = c.names.length; e < n; e++)
                if (c.names[e].test(t)) return !0;
              return !1;
            }),
            (c.humanize = e(6)),
            (c.instances = []),
            (c.names = []),
            (c.skips = []),
            (c.formatters = {});
        },
        function (t, e) {
          function o(t, e, n) {
            if (!(t < e))
              return t < 1.5 * e
                ? Math.floor(t / e) + " " + n
                : Math.ceil(t / e) + " " + n + "s";
          }
          var i = 36e5,
            s = 864e5;
          t.exports = function (t, e) {
            e = e || {};
            var n,
              r = typeof t;
            if ("string" == r && 0 < t.length)
              return (function (t) {
                if (!(100 < (t = String(t)).length)) {
                  var e =
                    /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                      t
                    );
                  if (e) {
                    t = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return 315576e5 * t;
                      case "days":
                      case "day":
                      case "d":
                        return t * s;
                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return t * i;
                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return 6e4 * t;
                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return 1e3 * t;
                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return t;
                      default:
                        return;
                    }
                  }
                }
              })(t);
            if ("number" == r && !1 === isNaN(t))
              return e.long
                ? o((n = t), s, "day") ||
                    o(n, i, "hour") ||
                    o(n, 6e4, "minute") ||
                    o(n, 1e3, "second") ||
                    n + " ms"
                : s <= (n = t)
                ? Math.round(n / s) + "d"
                : i <= n
                ? Math.round(n / i) + "h"
                : 6e4 <= n
                ? Math.round(n / 6e4) + "m"
                : 1e3 <= n
                ? Math.round(n / 1e3) + "s"
                : n + "ms";
            throw new Error(
              "val is not a non-empty string or a valid number. val=" +
                JSON.stringify(t)
            );
          };
        },
        function (t, s, e) {
          function n() {}
          function r(t) {
            var e = "" + t.type;
            if (
              ((s.BINARY_EVENT !== t.type && s.BINARY_ACK !== t.type) ||
                (e += t.attachments + "-"),
              t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
              null != t.id && (e += t.id),
              null != t.data)
            ) {
              var n = (function (t) {
                try {
                  return JSON.stringify(t);
                } catch (t) {
                  return !1;
                }
              })(t.data);
              if (!1 === n) return y;
              e += n;
            }
            return h("encoded %j as %s", t, e), e;
          }
          function o(t, n) {
            f.removeBlobs(t, function (t) {
              var e = f.deconstructPacket(t),
                t = r(e.packet);
              (e = e.buffers).unshift(t), n(e);
            });
          }
          function i() {
            this.reconstructor = null;
          }
          function a(t) {
            var e = 0,
              n = { type: Number(t.charAt(0)) };
            if (null == s.types[n.type])
              return p("unknown packet type " + n.type);
            if (s.BINARY_EVENT === n.type || s.BINARY_ACK === n.type) {
              for (
                var r = "";
                "-" !== t.charAt(++e) && ((r += t.charAt(e)), e != t.length);

              );
              if (r != Number(r) || "-" !== t.charAt(e))
                throw new Error("Illegal attachments");
              n.attachments = Number(r);
            }
            if ("/" === t.charAt(e + 1))
              for (n.nsp = ""; ++e; ) {
                if ("," === (o = t.charAt(e))) break;
                if (((n.nsp += o), e === t.length)) break;
              }
            else n.nsp = "/";
            var o,
              i = t.charAt(e + 1);
            if ("" !== i && Number(i) == i) {
              for (n.id = ""; ++e; ) {
                if (null == (o = t.charAt(e)) || Number(o) != o) {
                  --e;
                  break;
                }
                if (((n.id += t.charAt(e)), e === t.length)) break;
              }
              n.id = Number(n.id);
            }
            if (t.charAt(++e)) {
              i = (function (t) {
                try {
                  return JSON.parse(t);
                } catch (t) {
                  return !1;
                }
              })(t.substr(e));
              if (!(!1 !== i && (n.type === s.ERROR || l(i))))
                return p("invalid payload");
              n.data = i;
            }
            return h("decoded %s as %j", t, n), n;
          }
          function c(t) {
            (this.reconPack = t), (this.buffers = []);
          }
          function p(t) {
            return { type: s.ERROR, data: "parser error: " + t };
          }
          var h = e(3)("socket.io-parser"),
            u = e(8),
            f = e(9),
            l = e(10),
            d = e(11);
          (s.protocol = 4),
            (s.types = [
              "CONNECT",
              "DISCONNECT",
              "EVENT",
              "ACK",
              "ERROR",
              "BINARY_EVENT",
              "BINARY_ACK",
            ]),
            (s.CONNECT = 0),
            (s.DISCONNECT = 1),
            (s.EVENT = 2),
            (s.ACK = 3),
            (s.ERROR = 4),
            (s.BINARY_EVENT = 5),
            (s.BINARY_ACK = 6),
            (s.Encoder = n),
            (s.Decoder = i);
          var y = s.ERROR + '"encode error"';
          (n.prototype.encode = function (t, e) {
            h("encoding packet %j", t),
              s.BINARY_EVENT === t.type || s.BINARY_ACK === t.type
                ? o(t, e)
                : e([r(t)]);
          }),
            u(i.prototype),
            (i.prototype.add = function (t) {
              var e;
              if ("string" == typeof t)
                (e = a(t)),
                  s.BINARY_EVENT === e.type || s.BINARY_ACK === e.type
                    ? ((this.reconstructor = new c(e)),
                      0 === this.reconstructor.reconPack.attachments &&
                        this.emit("decoded", e))
                    : this.emit("decoded", e);
              else {
                if (!d(t) && !t.base64) throw new Error("Unknown type: " + t);
                if (!this.reconstructor)
                  throw new Error(
                    "got binary data when not reconstructing a packet"
                  );
                (e = this.reconstructor.takeBinaryData(t)) &&
                  ((this.reconstructor = null), this.emit("decoded", e));
              }
            }),
            (i.prototype.destroy = function () {
              this.reconstructor && this.reconstructor.finishedReconstruction();
            }),
            (c.prototype.takeBinaryData = function (t) {
              if (
                (this.buffers.push(t),
                this.buffers.length !== this.reconPack.attachments)
              )
                return null;
              t = f.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), t;
            }),
            (c.prototype.finishedReconstruction = function () {
              (this.reconPack = null), (this.buffers = []);
            });
        },
        function (t, e, n) {
          function r(t) {
            if (t)
              return (function (t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t;
              })(t);
          }
          ((t.exports = r).prototype.on = r.prototype.addEventListener =
            function (t, e) {
              return (
                (this._callbacks = this._callbacks || {}),
                (this._callbacks["$" + t] =
                  this._callbacks["$" + t] || []).push(e),
                this
              );
            }),
            (r.prototype.once = function (t, e) {
              function n() {
                this.off(t, n), e.apply(this, arguments);
              }
              return (n.fn = e), this.on(t, n), this;
            }),
            (r.prototype.off =
              r.prototype.removeListener =
              r.prototype.removeAllListeners =
              r.prototype.removeEventListener =
                function (t, e) {
                  if (
                    ((this._callbacks = this._callbacks || {}),
                    0 == arguments.length)
                  )
                    return (this._callbacks = {}), this;
                  var n = this._callbacks["$" + t];
                  if (!n) return this;
                  if (1 == arguments.length)
                    return delete this._callbacks["$" + t], this;
                  for (var r, o = 0; o < n.length; o++)
                    if ((r = n[o]) === e || r.fn === e) {
                      n.splice(o, 1);
                      break;
                    }
                  return (
                    0 === n.length && delete this._callbacks["$" + t], this
                  );
                }),
            (r.prototype.emit = function (t) {
              this._callbacks = this._callbacks || {};
              for (
                var e = new Array(arguments.length - 1),
                  n = this._callbacks["$" + t],
                  r = 1;
                r < arguments.length;
                r++
              )
                e[r - 1] = arguments[r];
              if (n)
                for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r)
                  n[r].apply(this, e);
              return this;
            }),
            (r.prototype.listeners = function (t) {
              return (
                (this._callbacks = this._callbacks || {}),
                this._callbacks["$" + t] || []
              );
            }),
            (r.prototype.hasListeners = function (t) {
              return !!this.listeners(t).length;
            });
        },
        function (t, e, n) {
          var h = n(10),
            u = n(11),
            n = Object.prototype.toString,
            f =
              "function" == typeof Blob ||
              ("undefined" != typeof Blob &&
                "[object BlobConstructor]" === n.call(Blob)),
            l =
              "function" == typeof File ||
              ("undefined" != typeof File &&
                "[object FileConstructor]" === n.call(File));
          (e.deconstructPacket = function (t) {
            var e = [],
              n = t.data,
              t = t;
            return (
              (t.data = (function t(e, n) {
                if (!e) return e;
                if (u(e)) {
                  var r = { _placeholder: !0, num: n.length };
                  return n.push(e), r;
                }
                if (h(e)) {
                  for (var o = new Array(e.length), i = 0; i < e.length; i++)
                    o[i] = t(e[i], n);
                  return o;
                }
                if ("object" != typeof e || e instanceof Date) return e;
                var s,
                  o = {};
                for (s in e) o[s] = t(e[s], n);
                return o;
              })(n, e)),
              (t.attachments = e.length),
              { packet: t, buffers: e }
            );
          }),
            (e.reconstructPacket = function (t, e) {
              return (
                (t.data = (function t(e, n) {
                  if (!e) return e;
                  if (e && e._placeholder) return n[e.num];
                  if (h(e))
                    for (var r = 0; r < e.length; r++) e[r] = t(e[r], n);
                  else if ("object" == typeof e)
                    for (var o in e) e[o] = t(e[o], n);
                  return e;
                })(t.data, e)),
                (t.attachments = void 0),
                t
              );
            }),
            (e.removeBlobs = function (t, a) {
              var c = 0,
                p = t;
              (function t(e, n, r) {
                if (!e) return e;
                if ((f && e instanceof Blob) || (l && e instanceof File)) {
                  c++;
                  var o = new FileReader();
                  (o.onload = function () {
                    r ? (r[n] = this.result) : (p = this.result), --c || a(p);
                  }),
                    o.readAsArrayBuffer(e);
                } else if (h(e))
                  for (var i = 0; i < e.length; i++) t(e[i], i, e);
                else if ("object" == typeof e && !u(e))
                  for (var s in e) t(e[s], s, e);
              })(p),
                c || a(p);
            });
        },
        function (t, e) {
          var n = {}.toString;
          t.exports =
            Array.isArray ||
            function (t) {
              return "[object Array]" == n.call(t);
            };
        },
        function (t, e) {
          t.exports = function (t) {
            return (
              (n && Buffer.isBuffer(t)) ||
              (r && (t instanceof ArrayBuffer || o(t)))
            );
          };
          var n =
              "function" == typeof Buffer &&
              "function" == typeof Buffer.isBuffer,
            r = "function" == typeof ArrayBuffer,
            o = function (t) {
              return "function" == typeof ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : t.buffer instanceof ArrayBuffer;
            };
        },
        function (t, e, n) {
          function r(t, e) {
            if (!(this instanceof r)) return new r(t, e);
            t && "object" == typeof t && ((e = t), (t = void 0)),
              ((e = e || {}).path = e.path || "/socket.io"),
              (this.nsps = {}),
              (this.subs = []),
              (this.opts = e),
              this.reconnection(!1 !== e.reconnection),
              this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
              this.reconnectionDelay(e.reconnectionDelay || 1e3),
              this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
              this.randomizationFactor(e.randomizationFactor || 0.5),
              (this.backoff = new f({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
              })),
              this.timeout(null == e.timeout ? 2e4 : e.timeout),
              (this.readyState = "closed"),
              (this.uri = t),
              (this.connecting = []),
              (this.lastPing = null),
              (this.encoding = !1),
              (this.packetBuffer = []);
            t = e.parser || s;
            (this.encoder = new t.Encoder()),
              (this.decoder = new t.Decoder()),
              (this.autoConnect = !1 !== e.autoConnect),
              this.autoConnect && this.open();
          }
          var c = n(13),
            i = n(37),
            o = n(8),
            s = n(7),
            p = n(39),
            a = n(40),
            h = n(3)("socket.io-client:manager"),
            u = n(36),
            f = n(41),
            l = Object.prototype.hasOwnProperty;
          ((t.exports = r).prototype.emitAll = function () {
            for (var t in (this.emit.apply(this, arguments), this.nsps))
              l.call(this.nsps, t) &&
                this.nsps[t].emit.apply(this.nsps[t], arguments);
          }),
            (r.prototype.updateSocketIds = function () {
              for (var t in this.nsps)
                l.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
            }),
            (r.prototype.generateId = function (t) {
              return ("/" === t ? "" : t + "#") + this.engine.id;
            }),
            o(r.prototype),
            (r.prototype.reconnection = function (t) {
              return arguments.length
                ? ((this._reconnection = !!t), this)
                : this._reconnection;
            }),
            (r.prototype.reconnectionAttempts = function (t) {
              return arguments.length
                ? ((this._reconnectionAttempts = t), this)
                : this._reconnectionAttempts;
            }),
            (r.prototype.reconnectionDelay = function (t) {
              return arguments.length
                ? ((this._reconnectionDelay = t),
                  this.backoff && this.backoff.setMin(t),
                  this)
                : this._reconnectionDelay;
            }),
            (r.prototype.randomizationFactor = function (t) {
              return arguments.length
                ? ((this._randomizationFactor = t),
                  this.backoff && this.backoff.setJitter(t),
                  this)
                : this._randomizationFactor;
            }),
            (r.prototype.reconnectionDelayMax = function (t) {
              return arguments.length
                ? ((this._reconnectionDelayMax = t),
                  this.backoff && this.backoff.setMax(t),
                  this)
                : this._reconnectionDelayMax;
            }),
            (r.prototype.timeout = function (t) {
              return arguments.length
                ? ((this._timeout = t), this)
                : this._timeout;
            }),
            (r.prototype.maybeReconnectOnOpen = function () {
              !this.reconnecting &&
                this._reconnection &&
                0 === this.backoff.attempts &&
                this.reconnect();
            }),
            (r.prototype.open = r.prototype.connect =
              function (n, t) {
                if (
                  (h("readyState %s", this.readyState),
                  ~this.readyState.indexOf("open"))
                )
                  return this;
                h("opening %s", this.uri),
                  (this.engine = c(this.uri, this.opts));
                var e = this.engine,
                  r = this;
                (this.readyState = "opening"), (this.skipReconnect = !1);
                var o,
                  i,
                  s = p(e, "open", function () {
                    r.onopen(), n && n();
                  }),
                  a = p(e, "error", function (t) {
                    var e;
                    h("connect_error"),
                      r.cleanup(),
                      (r.readyState = "closed"),
                      r.emitAll("connect_error", t),
                      n
                        ? (((e = new Error("Connection error")).data = t), n(e))
                        : r.maybeReconnectOnOpen();
                  });
                return (
                  !1 !== this._timeout &&
                    ((o = this._timeout),
                    h("connect attempt will timeout after %d", o),
                    0 === o && s.destroy(),
                    (i = setTimeout(function () {
                      h("connect attempt timed out after %d", o),
                        s.destroy(),
                        e.close(),
                        e.emit("error", "timeout"),
                        r.emitAll("connect_timeout", o);
                    }, o)),
                    this.subs.push({
                      destroy: function () {
                        clearTimeout(i);
                      },
                    })),
                  this.subs.push(s),
                  this.subs.push(a),
                  this
                );
              }),
            (r.prototype.onopen = function () {
              h("open"),
                this.cleanup(),
                (this.readyState = "open"),
                this.emit("open");
              var t = this.engine;
              this.subs.push(p(t, "data", a(this, "ondata"))),
                this.subs.push(p(t, "ping", a(this, "onping"))),
                this.subs.push(p(t, "pong", a(this, "onpong"))),
                this.subs.push(p(t, "error", a(this, "onerror"))),
                this.subs.push(p(t, "close", a(this, "onclose"))),
                this.subs.push(
                  p(this.decoder, "decoded", a(this, "ondecoded"))
                );
            }),
            (r.prototype.onping = function () {
              (this.lastPing = new Date()), this.emitAll("ping");
            }),
            (r.prototype.onpong = function () {
              this.emitAll("pong", new Date() - this.lastPing);
            }),
            (r.prototype.ondata = function (t) {
              this.decoder.add(t);
            }),
            (r.prototype.ondecoded = function (t) {
              this.emit("packet", t);
            }),
            (r.prototype.onerror = function (t) {
              h("error", t), this.emitAll("error", t);
            }),
            (r.prototype.socket = function (t, e) {
              function n() {
                ~u(r.connecting, o) || r.connecting.push(o);
              }
              var r,
                o = this.nsps[t];
              return (
                o ||
                  ((o = new i(this, t, e)),
                  (this.nsps[t] = o),
                  (r = this),
                  o.on("connecting", n),
                  o.on("connect", function () {
                    o.id = r.generateId(t);
                  }),
                  this.autoConnect && n()),
                o
              );
            }),
            (r.prototype.destroy = function (t) {
              t = u(this.connecting, t);
              ~t && this.connecting.splice(t, 1),
                this.connecting.length || this.close();
            }),
            (r.prototype.packet = function (n) {
              h("writing packet %j", n);
              var r = this;
              n.query && 0 === n.type && (n.nsp += "?" + n.query),
                r.encoding
                  ? r.packetBuffer.push(n)
                  : ((r.encoding = !0),
                    this.encoder.encode(n, function (t) {
                      for (var e = 0; e < t.length; e++)
                        r.engine.write(t[e], n.options);
                      (r.encoding = !1), r.processPacketQueue();
                    }));
            }),
            (r.prototype.processPacketQueue = function () {
              var t;
              0 < this.packetBuffer.length &&
                !this.encoding &&
                ((t = this.packetBuffer.shift()), this.packet(t));
            }),
            (r.prototype.cleanup = function () {
              h("cleanup");
              for (var t = this.subs.length, e = 0; e < t; e++)
                this.subs.shift().destroy();
              (this.packetBuffer = []),
                (this.encoding = !1),
                (this.lastPing = null),
                this.decoder.destroy();
            }),
            (r.prototype.close = r.prototype.disconnect =
              function () {
                h("disconnect"),
                  (this.skipReconnect = !0),
                  (this.reconnecting = !1),
                  "opening" === this.readyState && this.cleanup(),
                  this.backoff.reset(),
                  (this.readyState = "closed"),
                  this.engine && this.engine.close();
              }),
            (r.prototype.onclose = function (t) {
              h("onclose"),
                this.cleanup(),
                this.backoff.reset(),
                (this.readyState = "closed"),
                this.emit("close", t),
                this._reconnection && !this.skipReconnect && this.reconnect();
            }),
            (r.prototype.reconnect = function () {
              if (this.reconnecting || this.skipReconnect) return this;
              var t,
                e,
                n = this;
              this.backoff.attempts >= this._reconnectionAttempts
                ? (h("reconnect failed"),
                  this.backoff.reset(),
                  this.emitAll("reconnect_failed"),
                  (this.reconnecting = !1))
                : ((t = this.backoff.duration()),
                  h("will wait %dms before reconnect attempt", t),
                  (this.reconnecting = !0),
                  (e = setTimeout(function () {
                    n.skipReconnect ||
                      (h("attempting reconnect"),
                      n.emitAll("reconnect_attempt", n.backoff.attempts),
                      n.emitAll("reconnecting", n.backoff.attempts),
                      n.skipReconnect ||
                        n.open(function (t) {
                          t
                            ? (h("reconnect attempt error"),
                              (n.reconnecting = !1),
                              n.reconnect(),
                              n.emitAll("reconnect_error", t.data))
                            : (h("reconnect success"), n.onreconnect());
                        }));
                  }, t)),
                  this.subs.push({
                    destroy: function () {
                      clearTimeout(e);
                    },
                  }));
            }),
            (r.prototype.onreconnect = function () {
              var t = this.backoff.attempts;
              (this.reconnecting = !1),
                this.backoff.reset(),
                this.updateSocketIds(),
                this.emitAll("reconnect", t);
            });
        },
        function (t, e, n) {
          (t.exports = n(14)), (t.exports.parser = n(22));
        },
        function (t, e, n) {
          function u(t, e) {
            return this instanceof u
              ? ((e = e || {}),
                t && "object" == typeof t && ((e = t), (t = null)),
                t
                  ? ((t = a(t)),
                    (e.hostname = t.host),
                    (e.secure = "https" === t.protocol || "wss" === t.protocol),
                    (e.port = t.port),
                    t.query && (e.query = t.query))
                  : e.host && (e.hostname = a(e.host).host),
                (this.secure =
                  null != e.secure
                    ? e.secure
                    : "undefined" != typeof location &&
                      "https:" === location.protocol),
                e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
                (this.agent = e.agent || !1),
                (this.hostname =
                  e.hostname ||
                  ("undefined" != typeof location
                    ? location.hostname
                    : "localhost")),
                (this.port =
                  e.port ||
                  ("undefined" != typeof location && location.port
                    ? location.port
                    : this.secure
                    ? 443
                    : 80)),
                (this.query = e.query || {}),
                "string" == typeof this.query &&
                  (this.query = c.decode(this.query)),
                (this.upgrade = !1 !== e.upgrade),
                (this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/"),
                (this.forceJSONP = !!e.forceJSONP),
                (this.jsonp = !1 !== e.jsonp),
                (this.forceBase64 = !!e.forceBase64),
                (this.enablesXDR = !!e.enablesXDR),
                (this.withCredentials = !1 !== e.withCredentials),
                (this.timestampParam = e.timestampParam || "t"),
                (this.timestampRequests = e.timestampRequests),
                (this.transports = e.transports || ["polling", "websocket"]),
                (this.transportOptions = e.transportOptions || {}),
                (this.readyState = ""),
                (this.writeBuffer = []),
                (this.prevBufferLen = 0),
                (this.policyPort = e.policyPort || 843),
                (this.rememberUpgrade = e.rememberUpgrade || !1),
                (this.binaryType = null),
                (this.onlyBinaryUpgrades = e.onlyBinaryUpgrades),
                (this.perMessageDeflate =
                  !1 !== e.perMessageDeflate && (e.perMessageDeflate || {})),
                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                this.perMessageDeflate &&
                  null == this.perMessageDeflate.threshold &&
                  (this.perMessageDeflate.threshold = 1024),
                (this.pfx = e.pfx || null),
                (this.key = e.key || null),
                (this.passphrase = e.passphrase || null),
                (this.cert = e.cert || null),
                (this.ca = e.ca || null),
                (this.ciphers = e.ciphers || null),
                (this.rejectUnauthorized =
                  void 0 === e.rejectUnauthorized || e.rejectUnauthorized),
                (this.forceNode = !!e.forceNode),
                (this.isReactNative =
                  "undefined" != typeof navigator &&
                  "string" == typeof navigator.product &&
                  "reactnative" === navigator.product.toLowerCase()),
                ("undefined" != typeof self && !this.isReactNative) ||
                  (e.extraHeaders &&
                    0 < Object.keys(e.extraHeaders).length &&
                    (this.extraHeaders = e.extraHeaders),
                  e.localAddress && (this.localAddress = e.localAddress)),
                (this.id = null),
                (this.upgrades = null),
                (this.pingInterval = null),
                (this.pingTimeout = null),
                (this.pingIntervalTimer = null),
                (this.pingTimeoutTimer = null),
                void this.open())
              : new u(t, e);
          }
          var r = n(15),
            o = n(8),
            f = n(3)("engine.io-client:socket"),
            i = n(36),
            s = n(22),
            a = n(2),
            c = n(30);
          ((t.exports = u).priorWebsocketSuccess = !1),
            o(u.prototype),
            (u.protocol = s.protocol),
            ((u.Socket = u).Transport = n(21)),
            (u.transports = n(15)),
            (u.parser = n(22)),
            (u.prototype.createTransport = function (t) {
              f('creating transport "%s"', t);
              var e = (function (t) {
                var e,
                  n = {};
                for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                return n;
              })(this.query);
              (e.EIO = s.protocol), (e.transport = t);
              var n = this.transportOptions[t] || {};
              return (
                this.id && (e.sid = this.id),
                new r[t]({
                  query: e,
                  socket: this,
                  agent: n.agent || this.agent,
                  hostname: n.hostname || this.hostname,
                  port: n.port || this.port,
                  secure: n.secure || this.secure,
                  path: n.path || this.path,
                  forceJSONP: n.forceJSONP || this.forceJSONP,
                  jsonp: n.jsonp || this.jsonp,
                  forceBase64: n.forceBase64 || this.forceBase64,
                  enablesXDR: n.enablesXDR || this.enablesXDR,
                  withCredentials: n.withCredentials || this.withCredentials,
                  timestampRequests:
                    n.timestampRequests || this.timestampRequests,
                  timestampParam: n.timestampParam || this.timestampParam,
                  policyPort: n.policyPort || this.policyPort,
                  pfx: n.pfx || this.pfx,
                  key: n.key || this.key,
                  passphrase: n.passphrase || this.passphrase,
                  cert: n.cert || this.cert,
                  ca: n.ca || this.ca,
                  ciphers: n.ciphers || this.ciphers,
                  rejectUnauthorized:
                    n.rejectUnauthorized || this.rejectUnauthorized,
                  perMessageDeflate:
                    n.perMessageDeflate || this.perMessageDeflate,
                  extraHeaders: n.extraHeaders || this.extraHeaders,
                  forceNode: n.forceNode || this.forceNode,
                  localAddress: n.localAddress || this.localAddress,
                  requestTimeout: n.requestTimeout || this.requestTimeout,
                  protocols: n.protocols || void 0,
                  isReactNative: this.isReactNative,
                })
              );
            }),
            (u.prototype.open = function () {
              var t;
              if (
                this.rememberUpgrade &&
                u.priorWebsocketSuccess &&
                -1 !== this.transports.indexOf("websocket")
              )
                t = "websocket";
              else {
                if (0 === this.transports.length) {
                  var e = this;
                  return void setTimeout(function () {
                    e.emit("error", "No transports available");
                  }, 0);
                }
                t = this.transports[0];
              }
              this.readyState = "opening";
              try {
                t = this.createTransport(t);
              } catch (t) {
                return this.transports.shift(), void this.open();
              }
              t.open(), this.setTransport(t);
            }),
            (u.prototype.setTransport = function (t) {
              f("setting transport %s", t.name);
              var e = this;
              this.transport &&
                (f("clearing existing transport %s", this.transport.name),
                this.transport.removeAllListeners()),
                (this.transport = t)
                  .on("drain", function () {
                    e.onDrain();
                  })
                  .on("packet", function (t) {
                    e.onPacket(t);
                  })
                  .on("error", function (t) {
                    e.onError(t);
                  })
                  .on("close", function () {
                    e.onClose("transport close");
                  });
            }),
            (u.prototype.probe = function (n) {
              function t() {
                var t;
                h.onlyBinaryUpgrades &&
                  ((t = !this.supportsBinary && h.transport.supportsBinary),
                  (p = p || t)),
                  p ||
                    (f('probe transport "%s" opened', n),
                    c.send([{ type: "ping", data: "probe" }]),
                    c.once("packet", function (t) {
                      p ||
                        ("pong" === t.type && "probe" === t.data
                          ? (f('probe transport "%s" pong', n),
                            (h.upgrading = !0),
                            h.emit("upgrading", c),
                            c &&
                              ((u.priorWebsocketSuccess =
                                "websocket" === c.name),
                              f(
                                'pausing current transport "%s"',
                                h.transport.name
                              ),
                              h.transport.pause(function () {
                                p ||
                                  ("closed" !== h.readyState &&
                                    (f(
                                      "changing transport and sending upgrade packet"
                                    ),
                                    a(),
                                    h.setTransport(c),
                                    c.send([{ type: "upgrade" }]),
                                    h.emit("upgrade", c),
                                    (c = null),
                                    (h.upgrading = !1),
                                    h.flush()));
                              })))
                          : (f('probe transport "%s" failed', n),
                            ((t = new Error("probe error")).transport = c.name),
                            h.emit("upgradeError", t)));
                    }));
              }
              function r() {
                p || ((p = !0), a(), c.close(), (c = null));
              }
              function e(t) {
                var e = new Error("probe error: " + t);
                (e.transport = c.name),
                  r(),
                  f('probe transport "%s" failed because of error: %s', n, t),
                  h.emit("upgradeError", e);
              }
              function o() {
                e("transport closed");
              }
              function i() {
                e("socket closed");
              }
              function s(t) {
                c &&
                  t.name !== c.name &&
                  (f('"%s" works - aborting "%s"', t.name, c.name), r());
              }
              function a() {
                c.removeListener("open", t),
                  c.removeListener("error", e),
                  c.removeListener("close", o),
                  h.removeListener("close", i),
                  h.removeListener("upgrading", s);
              }
              f('probing transport "%s"', n);
              var c = this.createTransport(n, { probe: 1 }),
                p = !1,
                h = this;
              (u.priorWebsocketSuccess = !1),
                c.once("open", t),
                c.once("error", e),
                c.once("close", o),
                this.once("close", i),
                this.once("upgrading", s),
                c.open();
            }),
            (u.prototype.onOpen = function () {
              if (
                (f("socket open"),
                (this.readyState = "open"),
                (u.priorWebsocketSuccess = "websocket" === this.transport.name),
                this.emit("open"),
                this.flush(),
                "open" === this.readyState &&
                  this.upgrade &&
                  this.transport.pause)
              ) {
                f("starting upgrade probes");
                for (var t = 0, e = this.upgrades.length; t < e; t++)
                  this.probe(this.upgrades[t]);
              }
            }),
            (u.prototype.onPacket = function (t) {
              if (
                "opening" === this.readyState ||
                "open" === this.readyState ||
                "closing" === this.readyState
              )
                switch (
                  (f('socket receive: type "%s", data "%s"', t.type, t.data),
                  this.emit("packet", t),
                  this.emit("heartbeat"),
                  t.type)
                ) {
                  case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                  case "pong":
                    this.setPing(), this.emit("pong");
                    break;
                  case "error":
                    var e = new Error("server error");
                    (e.code = t.data), this.onError(e);
                    break;
                  case "message":
                    this.emit("data", t.data), this.emit("message", t.data);
                }
              else
                f(
                  'packet received with socket readyState "%s"',
                  this.readyState
                );
            }),
            (u.prototype.onHandshake = function (t) {
              this.emit("handshake", t),
                (this.id = t.sid),
                (this.transport.query.sid = t.sid),
                (this.upgrades = this.filterUpgrades(t.upgrades)),
                (this.pingInterval = t.pingInterval),
                (this.pingTimeout = t.pingTimeout),
                this.onOpen(),
                "closed" !== this.readyState &&
                  (this.setPing(),
                  this.removeListener("heartbeat", this.onHeartbeat),
                  this.on("heartbeat", this.onHeartbeat));
            }),
            (u.prototype.onHeartbeat = function (t) {
              clearTimeout(this.pingTimeoutTimer);
              var e = this;
              e.pingTimeoutTimer = setTimeout(function () {
                "closed" !== e.readyState && e.onClose("ping timeout");
              }, t || e.pingInterval + e.pingTimeout);
            }),
            (u.prototype.setPing = function () {
              var t = this;
              clearTimeout(t.pingIntervalTimer),
                (t.pingIntervalTimer = setTimeout(function () {
                  f(
                    "writing ping packet - expecting pong within %sms",
                    t.pingTimeout
                  ),
                    t.ping(),
                    t.onHeartbeat(t.pingTimeout);
                }, t.pingInterval));
            }),
            (u.prototype.ping = function () {
              var t = this;
              this.sendPacket("ping", function () {
                t.emit("ping");
              });
            }),
            (u.prototype.onDrain = function () {
              this.writeBuffer.splice(0, this.prevBufferLen),
                (this.prevBufferLen = 0) === this.writeBuffer.length
                  ? this.emit("drain")
                  : this.flush();
            }),
            (u.prototype.flush = function () {
              "closed" !== this.readyState &&
                this.transport.writable &&
                !this.upgrading &&
                this.writeBuffer.length &&
                (f("flushing %d packets in socket", this.writeBuffer.length),
                this.transport.send(this.writeBuffer),
                (this.prevBufferLen = this.writeBuffer.length),
                this.emit("flush"));
            }),
            (u.prototype.write = u.prototype.send =
              function (t, e, n) {
                return this.sendPacket("message", t, e, n), this;
              }),
            (u.prototype.sendPacket = function (t, e, n, r) {
              "function" == typeof e && ((r = e), (e = void 0)),
                "function" == typeof n && ((r = n), (n = null)),
                "closing" !== this.readyState &&
                  "closed" !== this.readyState &&
                  (((n = n || {}).compress = !1 !== n.compress),
                  (n = { type: t, data: e, options: n }),
                  this.emit("packetCreate", n),
                  this.writeBuffer.push(n),
                  r && this.once("flush", r),
                  this.flush());
            }),
            (u.prototype.close = function () {
              function t() {
                r.onClose("forced close"),
                  f("socket closing - telling transport to close"),
                  r.transport.close();
              }
              function e() {
                r.removeListener("upgrade", e),
                  r.removeListener("upgradeError", e),
                  t();
              }
              function n() {
                r.once("upgrade", e), r.once("upgradeError", e);
              }
              var r;
              return (
                ("opening" !== this.readyState && "open" !== this.readyState) ||
                  ((this.readyState = "closing"),
                  (r = this).writeBuffer.length
                    ? this.once("drain", function () {
                        (this.upgrading ? n : t)();
                      })
                    : (this.upgrading ? n : t)()),
                this
              );
            }),
            (u.prototype.onError = function (t) {
              f("socket error %j", t),
                (u.priorWebsocketSuccess = !1),
                this.emit("error", t),
                this.onClose("transport error", t);
            }),
            (u.prototype.onClose = function (t, e) {
              ("opening" !== this.readyState &&
                "open" !== this.readyState &&
                "closing" !== this.readyState) ||
                (f('socket close with reason: "%s"', t),
                clearTimeout(this.pingIntervalTimer),
                clearTimeout(this.pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                (this.readyState = "closed"),
                (this.id = null),
                this.emit("close", t, e),
                (this.writeBuffer = []),
                (this.prevBufferLen = 0));
            }),
            (u.prototype.filterUpgrades = function (t) {
              for (var e = [], n = 0, r = t.length; n < r; n++)
                ~i(this.transports, t[n]) && e.push(t[n]);
              return e;
            });
        },
        function (t, e, n) {
          var s = n(16),
            a = n(19),
            c = n(33),
            n = n(34);
          (e.polling = function (t) {
            var e,
              n,
              r = !1,
              o = !1,
              i = !1 !== t.jsonp;
            if (
              ("undefined" != typeof location &&
                ((e = "https:" === location.protocol),
                (n = (n = location.port) || (e ? 443 : 80)),
                (r = t.hostname !== location.hostname || n !== t.port),
                (o = t.secure !== e)),
              (t.xdomain = r),
              (t.xscheme = o),
              "open" in new s(t) && !t.forceJSONP)
            )
              return new a(t);
            if (!i) throw new Error("JSONP disabled");
            return new c(t);
          }),
            (e.websocket = n);
        },
        function (t, e, n) {
          var o = n(17),
            i = n(18);
          t.exports = function (t) {
            var e = t.xdomain,
              n = t.xscheme,
              r = t.enablesXDR;
            try {
              if ("undefined" != typeof XMLHttpRequest && (!e || o))
                return new XMLHttpRequest();
            } catch (t) {}
            try {
              if ("undefined" != typeof XDomainRequest && !n && r)
                return new XDomainRequest();
            } catch (t) {}
            if (!e)
              try {
                return new i[["Active"].concat("Object").join("X")](
                  "Microsoft.XMLHTTP"
                );
              } catch (t) {}
          };
        },
        function (e, t) {
          try {
            e.exports =
              "undefined" != typeof XMLHttpRequest &&
              "withCredentials" in new XMLHttpRequest();
          } catch (t) {
            e.exports = !1;
          }
        },
        function (t, e) {
          t.exports =
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : Function("return this")();
        },
        function (t, e, n) {
          function r() {}
          function o(t) {
            var e, n;
            c.call(this, t),
              (this.requestTimeout = t.requestTimeout),
              (this.extraHeaders = t.extraHeaders),
              "undefined" != typeof location &&
                ((e = "https:" === location.protocol),
                (n = (n = location.port) || (e ? 443 : 80)),
                (this.xd =
                  ("undefined" != typeof location &&
                    t.hostname !== location.hostname) ||
                  n !== t.port),
                (this.xs = t.secure !== e));
          }
          function i(t) {
            (this.method = t.method || "GET"),
              (this.uri = t.uri),
              (this.xd = !!t.xd),
              (this.xs = !!t.xs),
              (this.async = !1 !== t.async),
              (this.data = void 0 !== t.data ? t.data : null),
              (this.agent = t.agent),
              (this.isBinary = t.isBinary),
              (this.supportsBinary = t.supportsBinary),
              (this.enablesXDR = t.enablesXDR),
              (this.withCredentials = t.withCredentials),
              (this.requestTimeout = t.requestTimeout),
              (this.pfx = t.pfx),
              (this.key = t.key),
              (this.passphrase = t.passphrase),
              (this.cert = t.cert),
              (this.ca = t.ca),
              (this.ciphers = t.ciphers),
              (this.rejectUnauthorized = t.rejectUnauthorized),
              (this.extraHeaders = t.extraHeaders),
              this.create();
          }
          function s() {
            for (var t in i.requests)
              i.requests.hasOwnProperty(t) && i.requests[t].abort();
          }
          var a = n(16),
            c = n(20),
            p = n(8),
            h = n(31),
            u = n(3)("engine.io-client:polling-xhr"),
            n = n(18);
          (t.exports = o),
            (t.exports.Request = i),
            h(o, c),
            (o.prototype.supportsBinary = !0),
            (o.prototype.request = function (t) {
              return (
                ((t = t || {}).uri = this.uri()),
                (t.xd = this.xd),
                (t.xs = this.xs),
                (t.agent = this.agent || !1),
                (t.supportsBinary = this.supportsBinary),
                (t.enablesXDR = this.enablesXDR),
                (t.withCredentials = this.withCredentials),
                (t.pfx = this.pfx),
                (t.key = this.key),
                (t.passphrase = this.passphrase),
                (t.cert = this.cert),
                (t.ca = this.ca),
                (t.ciphers = this.ciphers),
                (t.rejectUnauthorized = this.rejectUnauthorized),
                (t.requestTimeout = this.requestTimeout),
                (t.extraHeaders = this.extraHeaders),
                new i(t)
              );
            }),
            (o.prototype.doWrite = function (t, e) {
              var n = "string" != typeof t && void 0 !== t,
                n = this.request({ method: "POST", data: t, isBinary: n }),
                r = this;
              n.on("success", e),
                n.on("error", function (t) {
                  r.onError("xhr post error", t);
                }),
                (this.sendXhr = n);
            }),
            (o.prototype.doPoll = function () {
              u("xhr poll");
              var t = this.request(),
                e = this;
              t.on("data", function (t) {
                e.onData(t);
              }),
                t.on("error", function (t) {
                  e.onError("xhr poll error", t);
                }),
                (this.pollXhr = t);
            }),
            p(i.prototype),
            (i.prototype.create = function () {
              var t = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR,
              };
              (t.pfx = this.pfx),
                (t.key = this.key),
                (t.passphrase = this.passphrase),
                (t.cert = this.cert),
                (t.ca = this.ca),
                (t.ciphers = this.ciphers),
                (t.rejectUnauthorized = this.rejectUnauthorized);
              var e = (this.xhr = new a(t)),
                n = this;
              try {
                u("xhr open %s: %s", this.method, this.uri),
                  e.open(this.method, this.uri, this.async);
                try {
                  if (this.extraHeaders)
                    for (var r in (e.setDisableHeaderCheck &&
                      e.setDisableHeaderCheck(!0),
                    this.extraHeaders))
                      this.extraHeaders.hasOwnProperty(r) &&
                        e.setRequestHeader(r, this.extraHeaders[r]);
                } catch (t) {}
                if ("POST" === this.method)
                  try {
                    this.isBinary
                      ? e.setRequestHeader(
                          "Content-type",
                          "application/octet-stream"
                        )
                      : e.setRequestHeader(
                          "Content-type",
                          "text/plain;charset=UTF-8"
                        );
                  } catch (t) {}
                try {
                  e.setRequestHeader("Accept", "*/*");
                } catch (t) {}
                "withCredentials" in e &&
                  (e.withCredentials = this.withCredentials),
                  this.requestTimeout && (e.timeout = this.requestTimeout),
                  this.hasXDR()
                    ? ((e.onload = function () {
                        n.onLoad();
                      }),
                      (e.onerror = function () {
                        n.onError(e.responseText);
                      }))
                    : (e.onreadystatechange = function () {
                        if (2 === e.readyState)
                          try {
                            var t = e.getResponseHeader("Content-Type");
                            ((n.supportsBinary &&
                              "application/octet-stream" === t) ||
                              "application/octet-stream; charset=UTF-8" ===
                                t) &&
                              (e.responseType = "arraybuffer");
                          } catch (t) {}
                        4 === e.readyState &&
                          (200 === e.status || 1223 === e.status
                            ? n.onLoad()
                            : setTimeout(function () {
                                n.onError(
                                  "number" == typeof e.status ? e.status : 0
                                );
                              }, 0));
                      }),
                  u("xhr data %s", this.data),
                  e.send(this.data);
              } catch (t) {
                return void setTimeout(function () {
                  n.onError(t);
                }, 0);
              }
              "undefined" != typeof document &&
                ((this.index = i.requestsCount++),
                (i.requests[this.index] = this));
            }),
            (i.prototype.onSuccess = function () {
              this.emit("success"), this.cleanup();
            }),
            (i.prototype.onData = function (t) {
              this.emit("data", t), this.onSuccess();
            }),
            (i.prototype.onError = function (t) {
              this.emit("error", t), this.cleanup(!0);
            }),
            (i.prototype.cleanup = function (t) {
              if (void 0 !== this.xhr && null !== this.xhr) {
                if (
                  (this.hasXDR()
                    ? (this.xhr.onload = this.xhr.onerror = r)
                    : (this.xhr.onreadystatechange = r),
                  t)
                )
                  try {
                    this.xhr.abort();
                  } catch (t) {}
                "undefined" != typeof document && delete i.requests[this.index],
                  (this.xhr = null);
              }
            }),
            (i.prototype.onLoad = function () {
              var t, e;
              try {
                try {
                  e = this.xhr.getResponseHeader("Content-Type");
                } catch (t) {}
                t =
                  (("application/octet-stream" === e ||
                    "application/octet-stream; charset=UTF-8" === e) &&
                    this.xhr.response) ||
                  this.xhr.responseText;
              } catch (t) {
                this.onError(t);
              }
              null != t && this.onData(t);
            }),
            (i.prototype.hasXDR = function () {
              return (
                "undefined" != typeof XDomainRequest &&
                !this.xs &&
                this.enablesXDR
              );
            }),
            (i.prototype.abort = function () {
              this.cleanup();
            }),
            (i.requestsCount = 0),
            (i.requests = {}),
            "undefined" != typeof document &&
              ("function" == typeof attachEvent
                ? attachEvent("onunload", s)
                : "function" == typeof addEventListener &&
                  ((n = "onpagehide" in n ? "pagehide" : "unload"),
                  addEventListener(n, s, !1)));
        },
        function (t, e, n) {
          function r(t) {
            var e = t && t.forceBase64;
            (h && !e) || (this.supportsBinary = !1), o.call(this, t);
          }
          var o = n(21),
            i = n(30),
            s = n(22),
            a = n(31),
            c = n(32),
            p = n(3)("engine.io-client:polling");
          t.exports = r;
          var h = null != new (n(16))({ xdomain: !1 }).responseType;
          a(r, o),
            (r.prototype.name = "polling"),
            (r.prototype.doOpen = function () {
              this.poll();
            }),
            (r.prototype.pause = function (t) {
              function e() {
                p("paused"), (r.readyState = "paused"), t();
              }
              var n,
                r = this;
              (this.readyState = "pausing"),
                this.polling || !this.writable
                  ? ((n = 0),
                    this.polling &&
                      (p("we are currently polling - waiting to pause"),
                      n++,
                      this.once("pollComplete", function () {
                        p("pre-pause polling complete"), --n || e();
                      })),
                    this.writable ||
                      (p("we are currently writing - waiting to pause"),
                      n++,
                      this.once("drain", function () {
                        p("pre-pause writing complete"), --n || e();
                      })))
                  : e();
            }),
            (r.prototype.poll = function () {
              p("polling"),
                (this.polling = !0),
                this.doPoll(),
                this.emit("poll");
            }),
            (r.prototype.onData = function (t) {
              var r = this;
              p("polling got data %s", t);
              s.decodePayload(t, this.socket.binaryType, function (t, e, n) {
                return (
                  "opening" === r.readyState && "open" === t.type && r.onOpen(),
                  "close" === t.type ? (r.onClose(), !1) : void r.onPacket(t)
                );
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1),
                  this.emit("pollComplete"),
                  "open" === this.readyState
                    ? this.poll()
                    : p(
                        'ignoring poll - transport state "%s"',
                        this.readyState
                      ));
            }),
            (r.prototype.doClose = function () {
              function t() {
                p("writing close packet"), e.write([{ type: "close" }]);
              }
              var e = this;
              "open" === this.readyState
                ? (p("transport open - closing"), t())
                : (p("transport not open - deferring close"),
                  this.once("open", t));
            }),
            (r.prototype.write = function (t) {
              var e = this;
              this.writable = !1;
              function n() {
                (e.writable = !0), e.emit("drain");
              }
              s.encodePayload(t, this.supportsBinary, function (t) {
                e.doWrite(t, n);
              });
            }),
            (r.prototype.uri = function () {
              var t = this.query || {},
                e = this.secure ? "https" : "http",
                n = "";
              return (
                !1 !== this.timestampRequests && (t[this.timestampParam] = c()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                (t = i.encode(t)),
                this.port &&
                  (("https" == e && 443 !== Number(this.port)) ||
                    ("http" == e && 80 !== Number(this.port))) &&
                  (n = ":" + this.port),
                t.length && (t = "?" + t),
                e +
                  "://" +
                  (-1 !== this.hostname.indexOf(":")
                    ? "[" + this.hostname + "]"
                    : this.hostname) +
                  n +
                  this.path +
                  t
              );
            });
        },
        function (t, e, n) {
          function r(t) {
            (this.path = t.path),
              (this.hostname = t.hostname),
              (this.port = t.port),
              (this.secure = t.secure),
              (this.query = t.query),
              (this.timestampParam = t.timestampParam),
              (this.timestampRequests = t.timestampRequests),
              (this.readyState = ""),
              (this.agent = t.agent || !1),
              (this.socket = t.socket),
              (this.enablesXDR = t.enablesXDR),
              (this.withCredentials = t.withCredentials),
              (this.pfx = t.pfx),
              (this.key = t.key),
              (this.passphrase = t.passphrase),
              (this.cert = t.cert),
              (this.ca = t.ca),
              (this.ciphers = t.ciphers),
              (this.rejectUnauthorized = t.rejectUnauthorized),
              (this.forceNode = t.forceNode),
              (this.isReactNative = t.isReactNative),
              (this.extraHeaders = t.extraHeaders),
              (this.localAddress = t.localAddress);
          }
          var o = n(22);
          n(8)((t.exports = r).prototype),
            (r.prototype.onError = function (t, e) {
              t = new Error(t);
              return (
                (t.type = "TransportError"),
                (t.description = e),
                this.emit("error", t),
                this
              );
            }),
            (r.prototype.open = function () {
              return (
                ("closed" !== this.readyState && "" !== this.readyState) ||
                  ((this.readyState = "opening"), this.doOpen()),
                this
              );
            }),
            (r.prototype.close = function () {
              return (
                ("opening" !== this.readyState && "open" !== this.readyState) ||
                  (this.doClose(), this.onClose()),
                this
              );
            }),
            (r.prototype.send = function (t) {
              if ("open" !== this.readyState)
                throw new Error("Transport not open");
              this.write(t);
            }),
            (r.prototype.onOpen = function () {
              (this.readyState = "open"),
                (this.writable = !0),
                this.emit("open");
            }),
            (r.prototype.onData = function (t) {
              t = o.decodePacket(t, this.socket.binaryType);
              this.onPacket(t);
            }),
            (r.prototype.onPacket = function (t) {
              this.emit("packet", t);
            }),
            (r.prototype.onClose = function () {
              (this.readyState = "closed"), this.emit("close");
            });
        },
        function (t, f, e) {
          function s(t, e, n) {
            if (!e) return f.encodeBase64Packet(t, n);
            if (u)
              return (function (t, e, n) {
                if (!e) return f.encodeBase64Packet(t, n);
                var r = new FileReader();
                return (
                  (r.onload = function () {
                    f.encodePacket({ type: t.type, data: r.result }, e, !0, n);
                  }),
                  r.readAsArrayBuffer(t.data)
                );
              })(t, e, n);
            e = new Uint8Array(1);
            return (e[0] = d[t.type]), n(new m([e.buffer, t.data]));
          }
          function i(t, e, n) {
            for (
              var o = new Array(t.length), r = c(t.length, n), i = 0;
              i < t.length;
              i++
            )
              !(function (n, t, r) {
                e(t, function (t, e) {
                  (o[n] = e), r(t, o);
                });
              })(i, t[i], r);
          }
          var r,
            n = e(23),
            a = e(24),
            l = e(25),
            c = e(26),
            p = e(27);
          "undefined" != typeof ArrayBuffer && (r = e(28));
          var o =
              "undefined" != typeof navigator &&
              /Android/i.test(navigator.userAgent),
            h =
              "undefined" != typeof navigator &&
              /PhantomJS/i.test(navigator.userAgent),
            u = o || h;
          f.protocol = 3;
          var d = (f.packets = {
              open: 0,
              close: 1,
              ping: 2,
              pong: 3,
              message: 4,
              upgrade: 5,
              noop: 6,
            }),
            y = n(d),
            g = { type: "error", data: "parser error" },
            m = e(29);
          (f.encodePacket = function (t, e, n, r) {
            "function" == typeof e && ((r = e), (e = !1)),
              "function" == typeof n && ((r = n), (n = null));
            var o = void 0 === t.data ? void 0 : t.data.buffer || t.data;
            if ("undefined" != typeof ArrayBuffer && o instanceof ArrayBuffer)
              return (function (t, e, n) {
                if (!e) return f.encodeBase64Packet(t, n);
                var e = t.data,
                  r = new Uint8Array(e),
                  o = new Uint8Array(1 + e.byteLength);
                o[0] = d[t.type];
                for (var i = 0; i < r.length; i++) o[i + 1] = r[i];
                return n(o.buffer);
              })(t, e, r);
            if (void 0 !== m && o instanceof m) return s(t, e, r);
            if (o && o.base64)
              return (i = t), r("b" + f.packets[i.type] + i.data.data);
            var i = d[t.type];
            return (
              void 0 !== t.data &&
                (i += n
                  ? p.encode(String(t.data), { strict: !1 })
                  : String(t.data)),
              r("" + i)
            );
          }),
            (f.encodeBase64Packet = function (e, n) {
              var r,
                o = "b" + f.packets[e.type];
              if (void 0 !== m && e.data instanceof m) {
                var i = new FileReader();
                return (
                  (i.onload = function () {
                    var t = i.result.split(",")[1];
                    n(o + t);
                  }),
                  i.readAsDataURL(e.data)
                );
              }
              try {
                r = String.fromCharCode.apply(null, new Uint8Array(e.data));
              } catch (t) {
                for (
                  var s = new Uint8Array(e.data),
                    a = new Array(s.length),
                    c = 0;
                  c < s.length;
                  c++
                )
                  a[c] = s[c];
                r = String.fromCharCode.apply(null, a);
              }
              return (o += btoa(r)), n(o);
            }),
            (f.decodePacket = function (t, e, n) {
              if (void 0 === t) return g;
              if ("string" == typeof t) {
                if ("b" === t.charAt(0))
                  return f.decodeBase64Packet(t.substr(1), e);
                if (
                  n &&
                  !1 ===
                    (t = (function (t) {
                      try {
                        t = p.decode(t, { strict: !1 });
                      } catch (t) {
                        return !1;
                      }
                      return t;
                    })(t))
                )
                  return g;
                var r = t.charAt(0);
                return Number(r) == r && y[r]
                  ? 1 < t.length
                    ? { type: y[r], data: t.substring(1) }
                    : { type: y[r] }
                  : g;
              }
              (r = new Uint8Array(t)[0]), (t = l(t, 1));
              return (
                m && "blob" === e && (t = new m([t])), { type: y[r], data: t }
              );
            }),
            (f.decodeBase64Packet = function (t, e) {
              var n = y[t.charAt(0)];
              if (!r)
                return { type: n, data: { base64: !0, data: t.substr(1) } };
              t = r.decode(t.substr(1));
              return (
                "blob" === e && m && (t = new m([t])), { type: n, data: t }
              );
            }),
            (f.encodePayload = function (t, n, r) {
              "function" == typeof n && ((r = n), (n = null));
              var o = a(t);
              return n && o
                ? m && !u
                  ? f.encodePayloadAsBlob(t, r)
                  : f.encodePayloadAsArrayBuffer(t, r)
                : t.length
                ? void i(
                    t,
                    function (t, e) {
                      f.encodePacket(t, !!o && n, !1, function (t) {
                        e(null, (t = t).length + ":" + t);
                      });
                    },
                    function (t, e) {
                      return r(e.join(""));
                    }
                  )
                : r("0:");
            }),
            (f.decodePayload = function (t, e, n) {
              if ("string" != typeof t) return f.decodePayloadAsBinary(t, e, n);
              if (("function" == typeof e && ((n = e), (e = null)), "" === t))
                return n(g, 0, 1);
              for (var r, o, i = "", s = 0, a = t.length; s < a; s++) {
                var c = t.charAt(s);
                if (":" === c) {
                  if ("" === i || i != (r = Number(i))) return n(g, 0, 1);
                  if (i != (o = t.substr(s + 1, r)).length) return n(g, 0, 1);
                  if (o.length) {
                    if (
                      ((o = f.decodePacket(o, e, !1)),
                      g.type === o.type && g.data === o.data)
                    )
                      return n(g, 0, 1);
                    if (!1 === n(o, s + r, a)) return;
                  }
                  (s += r), (i = "");
                } else i += c;
              }
              return "" !== i ? n(g, 0, 1) : void 0;
            }),
            (f.encodePayloadAsArrayBuffer = function (t, r) {
              return t.length
                ? void i(
                    t,
                    function (t, e) {
                      f.encodePacket(t, !0, !0, function (t) {
                        return e(null, t);
                      });
                    },
                    function (t, e) {
                      var n = e.reduce(function (t, e) {
                          e = "string" == typeof e ? e.length : e.byteLength;
                          return t + e.toString().length + e + 2;
                        }, 0),
                        s = new Uint8Array(n),
                        a = 0;
                      return (
                        e.forEach(function (t) {
                          var e = "string" == typeof t,
                            n = t;
                          if (e) {
                            for (
                              var r = new Uint8Array(t.length), o = 0;
                              o < t.length;
                              o++
                            )
                              r[o] = t.charCodeAt(o);
                            n = r.buffer;
                          }
                          s[a++] = e ? 0 : 1;
                          for (
                            var i = n.byteLength.toString(), o = 0;
                            o < i.length;
                            o++
                          )
                            s[a++] = parseInt(i[o]);
                          s[a++] = 255;
                          for (r = new Uint8Array(n), o = 0; o < r.length; o++)
                            s[a++] = r[o];
                        }),
                        r(s.buffer)
                      );
                    }
                  )
                : r(new ArrayBuffer(0));
            }),
            (f.encodePayloadAsBlob = function (t, n) {
              i(
                t,
                function (t, s) {
                  f.encodePacket(t, !0, !0, function (t) {
                    var e = new Uint8Array(1);
                    if (((e[0] = 1), "string" == typeof t)) {
                      for (
                        var n = new Uint8Array(t.length), r = 0;
                        r < t.length;
                        r++
                      )
                        n[r] = t.charCodeAt(r);
                      (t = n.buffer), (e[0] = 0);
                    }
                    for (
                      var o = (
                          t instanceof ArrayBuffer ? t.byteLength : t.size
                        ).toString(),
                        i = new Uint8Array(o.length + 1),
                        r = 0;
                      r < o.length;
                      r++
                    )
                      i[r] = parseInt(o[r]);
                    (i[o.length] = 255),
                      m && ((e = new m([e.buffer, i.buffer, t])), s(null, e));
                  });
                },
                function (t, e) {
                  return n(new m(e));
                }
              );
            }),
            (f.decodePayloadAsBinary = function (t, n, r) {
              "function" == typeof n && ((r = n), (n = null));
              for (var e = t, o = []; 0 < e.byteLength; ) {
                for (
                  var i = new Uint8Array(e), s = 0 === i[0], a = "", c = 1;
                  255 !== i[c];
                  c++
                ) {
                  if (310 < a.length) return r(g, 0, 1);
                  a += i[c];
                }
                (e = l(e, 2 + a.length)), (a = parseInt(a));
                var p = l(e, 0, a);
                if (s)
                  try {
                    p = String.fromCharCode.apply(null, new Uint8Array(p));
                  } catch (t) {
                    for (
                      var h = new Uint8Array(p), p = "", c = 0;
                      c < h.length;
                      c++
                    )
                      p += String.fromCharCode(h[c]);
                  }
                o.push(p), (e = l(e, a));
              }
              var u = o.length;
              o.forEach(function (t, e) {
                r(f.decodePacket(t, n, !0), e, u);
              });
            });
        },
        function (t, e) {
          t.exports =
            Object.keys ||
            function (t) {
              var e,
                n = [],
                r = Object.prototype.hasOwnProperty;
              for (e in t) r.call(t, e) && n.push(e);
              return n;
            };
        },
        function (t, e, n) {
          var i = n(10),
            n = Object.prototype.toString,
            s =
              "function" == typeof Blob ||
              ("undefined" != typeof Blob &&
                "[object BlobConstructor]" === n.call(Blob)),
            a =
              "function" == typeof File ||
              ("undefined" != typeof File &&
                "[object FileConstructor]" === n.call(File));
          t.exports = function t(e) {
            if (!e || "object" != typeof e) return !1;
            if (i(e)) {
              for (var n = 0, r = e.length; n < r; n++) if (t(e[n])) return !0;
              return !1;
            }
            if (
              ("function" == typeof Buffer &&
                Buffer.isBuffer &&
                Buffer.isBuffer(e)) ||
              ("function" == typeof ArrayBuffer && e instanceof ArrayBuffer) ||
              (s && e instanceof Blob) ||
              (a && e instanceof File)
            )
              return !0;
            if (
              e.toJSON &&
              "function" == typeof e.toJSON &&
              1 === arguments.length
            )
              return t(e.toJSON(), !0);
            for (var o in e)
              if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o]))
                return !0;
            return !1;
          };
        },
        function (t, e) {
          t.exports = function (t, e, n) {
            var r = t.byteLength;
            if (((e = e || 0), (n = n || r), t.slice)) return t.slice(e, n);
            if (
              (e < 0 && (e += r),
              n < 0 && (n += r),
              r < n && (n = r),
              r <= e || n <= e || 0 === r)
            )
              return new ArrayBuffer(0);
            for (
              var o = new Uint8Array(t),
                i = new Uint8Array(n - e),
                s = e,
                a = 0;
              s < n;
              s++, a++
            )
              i[a] = o[s];
            return i.buffer;
          };
        },
        function (t, e) {
          function s() {}
          t.exports = function (t, n, r) {
            function o(t, e) {
              if (o.count <= 0) throw new Error("after called too many times");
              --o.count,
                t
                  ? ((i = !0), n(t), (n = r))
                  : 0 !== o.count || i || n(null, e);
            }
            var i = !1;
            return (r = r || s), 0 === (o.count = t) ? n() : o;
          };
        },
        function (t, e) {
          function a(t) {
            for (var e, n, r = [], o = 0, i = t.length; o < i; )
              55296 <= (e = t.charCodeAt(o++)) && e <= 56319 && o < i
                ? 56320 == (64512 & (n = t.charCodeAt(o++)))
                  ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
                  : (r.push(e), o--)
                : r.push(e);
            return r;
          }
          function c(t, e) {
            if (!(55296 <= t && t <= 57343)) return 1;
            if (e)
              throw Error(
                "Lone surrogate U+" +
                  t.toString(16).toUpperCase() +
                  " is not a scalar value"
              );
          }
          function p(t, e) {
            return f(((t >> e) & 63) | 128);
          }
          function i() {
            if (h <= u) throw Error("Invalid byte index");
            var t = 255 & s[u];
            if ((u++, 128 == (192 & t))) return 63 & t;
            throw Error("Invalid continuation byte");
          }
          var s,
            h,
            u,
            f = String.fromCharCode;
          t.exports = {
            version: "2.1.2",
            encode: function (t, e) {
              for (
                var n = !1 !== (e = e || {}).strict,
                  r = a(t),
                  o = r.length,
                  i = -1,
                  s = "";
                ++i < o;

              )
                s += (function (t, e) {
                  if (0 == (4294967168 & t)) return f(t);
                  var n = "";
                  return (
                    0 == (4294965248 & t)
                      ? (n = f(((t >> 6) & 31) | 192))
                      : 0 == (4294901760 & t)
                      ? (c(t, e) || (t = 65533),
                        (n = f(((t >> 12) & 15) | 224)),
                        (n += p(t, 6)))
                      : 0 == (4292870144 & t) &&
                        ((n = f(((t >> 18) & 7) | 240)),
                        (n += p(t, 12)),
                        (n += p(t, 6))),
                    n + f((63 & t) | 128)
                  );
                })(r[i], n);
              return s;
            },
            decode: function (t, e) {
              var n = !1 !== (e = e || {}).strict;
              (s = a(t)), (h = s.length), (u = 0);
              for (
                var r, o = [];
                !1 !==
                (r = (function (t) {
                  var e, n;
                  if (h < u) throw Error("Invalid byte index");
                  if (u == h) return !1;
                  if (((e = 255 & s[u]), u++, 0 == (128 & e))) return e;
                  if (192 == (224 & e)) {
                    if (128 <= (n = ((31 & e) << 6) | i())) return n;
                    throw Error("Invalid continuation byte");
                  }
                  if (224 == (240 & e)) {
                    if (2048 <= (n = ((15 & e) << 12) | (i() << 6) | i()))
                      return c(n, t) ? n : 65533;
                    throw Error("Invalid continuation byte");
                  }
                  if (
                    240 == (248 & e) &&
                    65536 <=
                      (n = ((7 & e) << 18) | (i() << 12) | (i() << 6) | i()) &&
                    n <= 1114111
                  )
                    return n;
                  throw Error("Invalid UTF-8 detected");
                })(n));

              )
                o.push(r);
              return (function (t) {
                for (var e, n = t.length, r = -1, o = ""; ++r < n; )
                  65535 < (e = t[r]) &&
                    ((o += f((((e -= 65536) >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                    (o += f(e));
                return o;
              })(o);
            },
          };
        },
        function (t, e) {
          !(function (h) {
            "use strict";
            (e.encode = function (t) {
              for (
                var e = new Uint8Array(t), n = e.length, r = "", o = 0;
                o < n;
                o += 3
              )
                (r += h[e[o] >> 2]),
                  (r += h[((3 & e[o]) << 4) | (e[o + 1] >> 4)]),
                  (r += h[((15 & e[o + 1]) << 2) | (e[o + 2] >> 6)]),
                  (r += h[63 & e[o + 2]]);
              return (
                n % 3 == 2
                  ? (r = r.substring(0, r.length - 1) + "=")
                  : n % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="),
                r
              );
            }),
              (e.decode = function (t) {
                var e,
                  n,
                  r,
                  o,
                  i = 0.75 * t.length,
                  s = t.length,
                  a = 0;
                "=" === t[t.length - 1] &&
                  (i--, "=" === t[t.length - 2] && i--);
                for (
                  var i = new ArrayBuffer(i), c = new Uint8Array(i), p = 0;
                  p < s;
                  p += 4
                )
                  (e = h.indexOf(t[p])),
                    (n = h.indexOf(t[p + 1])),
                    (r = h.indexOf(t[p + 2])),
                    (o = h.indexOf(t[p + 3])),
                    (c[a++] = (e << 2) | (n >> 4)),
                    (c[a++] = ((15 & n) << 4) | (r >> 2)),
                    (c[a++] = ((3 & r) << 6) | (63 & o));
                return i;
              });
          })(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          );
        },
        function (t, e) {
          function r(t) {
            return t.map(function (t) {
              if (t.buffer instanceof ArrayBuffer) {
                var e,
                  n = t.buffer;
                return (
                  t.byteLength !== n.byteLength &&
                    ((e = new Uint8Array(t.byteLength)).set(
                      new Uint8Array(n, t.byteOffset, t.byteLength)
                    ),
                    (n = e.buffer)),
                  n
                );
              }
              return t;
            });
          }
          function n(t, e) {
            e = e || {};
            var n = new i();
            return (
              r(t).forEach(function (t) {
                n.append(t);
              }),
              e.type ? n.getBlob(e.type) : n.getBlob()
            );
          }
          function o(t, e) {
            return new Blob(r(t), e || {});
          }
          var i =
              void 0 !== i
                ? i
                : "undefined" != typeof WebKitBlobBuilder
                ? WebKitBlobBuilder
                : "undefined" != typeof MSBlobBuilder
                ? MSBlobBuilder
                : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
            s = (function () {
              try {
                return 2 === new Blob(["hi"]).size;
              } catch (t) {
                return !1;
              }
            })(),
            a =
              s &&
              (function () {
                try {
                  return 2 === new Blob([new Uint8Array([1, 2])]).size;
                } catch (t) {
                  return !1;
                }
              })(),
            c = i && i.prototype.append && i.prototype.getBlob;
          "undefined" != typeof Blob &&
            ((n.prototype = Blob.prototype), (o.prototype = Blob.prototype)),
            (t.exports = s ? (a ? Blob : o) : c ? n : void 0);
        },
        function (t, e) {
          (e.encode = function (t) {
            var e,
              n = "";
            for (e in t)
              t.hasOwnProperty(e) &&
                (n.length && (n += "&"),
                (n += encodeURIComponent(e) + "=" + encodeURIComponent(t[e])));
            return n;
          }),
            (e.decode = function (t) {
              for (
                var e = {}, n = t.split("&"), r = 0, o = n.length;
                r < o;
                r++
              ) {
                var i = n[r].split("=");
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
              }
              return e;
            });
        },
        function (t, e) {
          t.exports = function (t, e) {
            function n() {}
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          };
        },
        function (t, e) {
          "use strict";
          function n(t) {
            for (
              var e = "";
              (e = i[t % s] + e), (t = Math.floor(t / s)), 0 < t;

            );
            return e;
          }
          function r() {
            var t = n(+new Date());
            return t !== o ? ((c = 0), (o = t)) : t + "." + n(c++);
          }
          for (
            var o,
              i =
                "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
                  ""
                ),
              s = 64,
              a = {},
              c = 0,
              p = 0;
            p < s;
            p++
          )
            a[i[p]] = p;
          (r.encode = n),
            (r.decode = function (t) {
              var e = 0;
              for (p = 0; p < t.length; p++) e = e * s + a[t.charAt(p)];
              return e;
            }),
            (t.exports = r);
        },
        function (t, e, n) {
          function r() {}
          function o(t) {
            i.call(this, t),
              (this.query = this.query || {}),
              (c = c || (a.___eio = a.___eio || [])),
              (this.index = c.length);
            var e = this;
            c.push(function (t) {
              e.onData(t);
            }),
              (this.query.j = this.index),
              "function" == typeof addEventListener &&
                addEventListener(
                  "beforeunload",
                  function () {
                    e.script && (e.script.onerror = r);
                  },
                  !1
                );
          }
          var i = n(20),
            s = n(31),
            a = n(18);
          t.exports = o;
          var c,
            p = /\n/g,
            h = /\\n/g;
          s(o, i),
            (o.prototype.supportsBinary = !1),
            (o.prototype.doClose = function () {
              this.script &&
                (this.script.parentNode.removeChild(this.script),
                (this.script = null)),
                this.form &&
                  (this.form.parentNode.removeChild(this.form),
                  (this.form = null),
                  (this.iframe = null)),
                i.prototype.doClose.call(this);
            }),
            (o.prototype.doPoll = function () {
              var e = this,
                t = document.createElement("script");
              this.script &&
                (this.script.parentNode.removeChild(this.script),
                (this.script = null)),
                (t.async = !0),
                (t.src = this.uri()),
                (t.onerror = function (t) {
                  e.onError("jsonp poll error", t);
                });
              var n = document.getElementsByTagName("script")[0];
              n
                ? n.parentNode.insertBefore(t, n)
                : (document.head || document.body).appendChild(t),
                (this.script = t),
                "undefined" != typeof navigator &&
                  /gecko/i.test(navigator.userAgent) &&
                  setTimeout(function () {
                    var t = document.createElement("iframe");
                    document.body.appendChild(t), document.body.removeChild(t);
                  }, 100);
            }),
            (o.prototype.doWrite = function (t, e) {
              function n() {
                r(), e();
              }
              function r() {
                if (c.iframe)
                  try {
                    c.form.removeChild(c.iframe);
                  } catch (t) {
                    c.onError("jsonp polling iframe removal error", t);
                  }
                try {
                  var t =
                    '<iframe src="javascript:0" name="' + c.iframeId + '">';
                  o = document.createElement(t);
                } catch (t) {
                  ((o = document.createElement("iframe")).name = c.iframeId),
                    (o.src = "javascript:0");
                }
                (o.id = c.iframeId), c.form.appendChild(o), (c.iframe = o);
              }
              var o,
                i,
                s,
                a,
                c = this;
              this.form ||
                ((i = document.createElement("form")),
                (s = document.createElement("textarea")),
                (a = this.iframeId = "eio_iframe_" + this.index),
                (i.className = "socketio"),
                (i.style.position = "absolute"),
                (i.style.top = "-1000px"),
                (i.style.left = "-1000px"),
                (i.target = a),
                (i.method = "POST"),
                i.setAttribute("accept-charset", "utf-8"),
                (s.name = "d"),
                i.appendChild(s),
                document.body.appendChild(i),
                (this.form = i),
                (this.area = s)),
                (this.form.action = this.uri()),
                r(),
                (t = t.replace(h, "\\\n")),
                (this.area.value = t.replace(p, "\\n"));
              try {
                this.form.submit();
              } catch (t) {}
              this.iframe.attachEvent
                ? (this.iframe.onreadystatechange = function () {
                    "complete" === c.iframe.readyState && n();
                  })
                : (this.iframe.onload = n);
            });
        },
        function (t, e, n) {
          function r(t) {
            t && t.forceBase64 && (this.supportsBinary = !1),
              (this.perMessageDeflate = t.perMessageDeflate),
              (this.usingBrowserWebSocket = o && !t.forceNode),
              (this.protocols = t.protocols),
              this.usingBrowserWebSocket || (f = i),
              s.call(this, t);
          }
          var o,
            i,
            s = n(21),
            a = n(22),
            c = n(30),
            p = n(31),
            h = n(32),
            u = n(3)("engine.io-client:websocket");
          if (
            ("undefined" != typeof WebSocket
              ? (o = WebSocket)
              : "undefined" != typeof self &&
                (o = self.WebSocket || self.MozWebSocket),
            "undefined" == typeof window)
          )
            try {
              i = n(35);
            } catch (t) {}
          var f = o || i;
          p((t.exports = r), s),
            (r.prototype.name = "websocket"),
            (r.prototype.supportsBinary = !0),
            (r.prototype.doOpen = function () {
              if (this.check()) {
                var t = this.uri(),
                  e = this.protocols,
                  n = {};
                this.isReactNative ||
                  ((n.agent = this.agent),
                  (n.perMessageDeflate = this.perMessageDeflate),
                  (n.pfx = this.pfx),
                  (n.key = this.key),
                  (n.passphrase = this.passphrase),
                  (n.cert = this.cert),
                  (n.ca = this.ca),
                  (n.ciphers = this.ciphers),
                  (n.rejectUnauthorized = this.rejectUnauthorized)),
                  this.extraHeaders && (n.headers = this.extraHeaders),
                  this.localAddress && (n.localAddress = this.localAddress);
                try {
                  this.ws =
                    this.usingBrowserWebSocket && !this.isReactNative
                      ? e
                        ? new f(t, e)
                        : new f(t)
                      : new f(t, e, n);
                } catch (t) {
                  return this.emit("error", t);
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                  this.ws.supports && this.ws.supports.binary
                    ? ((this.supportsBinary = !0),
                      (this.ws.binaryType = "nodebuffer"))
                    : (this.ws.binaryType = "arraybuffer"),
                  this.addEventListeners();
              }
            }),
            (r.prototype.addEventListeners = function () {
              var e = this;
              (this.ws.onopen = function () {
                e.onOpen();
              }),
                (this.ws.onclose = function () {
                  e.onClose();
                }),
                (this.ws.onmessage = function (t) {
                  e.onData(t.data);
                }),
                (this.ws.onerror = function (t) {
                  e.onError("websocket error", t);
                });
            }),
            (r.prototype.write = function (t) {
              var r = this;
              this.writable = !1;
              for (var o = t.length, e = 0, n = o; e < n; e++)
                !(function (n) {
                  a.encodePacket(n, r.supportsBinary, function (t) {
                    var e;
                    r.usingBrowserWebSocket ||
                      ((e = {}),
                      n.options && (e.compress = n.options.compress),
                      !r.perMessageDeflate ||
                        (("string" == typeof t
                          ? Buffer.byteLength(t)
                          : t.length) < r.perMessageDeflate.threshold &&
                          (e.compress = !1)));
                    try {
                      r.usingBrowserWebSocket ? r.ws.send(t) : r.ws.send(t, e);
                    } catch (t) {
                      u("websocket closed before onclose event");
                    }
                    --o ||
                      (r.emit("flush"),
                      setTimeout(function () {
                        (r.writable = !0), r.emit("drain");
                      }, 0));
                  });
                })(t[e]);
            }),
            (r.prototype.onClose = function () {
              s.prototype.onClose.call(this);
            }),
            (r.prototype.doClose = function () {
              void 0 !== this.ws && this.ws.close();
            }),
            (r.prototype.uri = function () {
              var t = this.query || {},
                e = this.secure ? "wss" : "ws",
                n = "";
              return (
                this.port &&
                  (("wss" == e && 443 !== Number(this.port)) ||
                    ("ws" == e && 80 !== Number(this.port))) &&
                  (n = ":" + this.port),
                this.timestampRequests && (t[this.timestampParam] = h()),
                this.supportsBinary || (t.b64 = 1),
                (t = c.encode(t)).length && (t = "?" + t),
                e +
                  "://" +
                  (-1 !== this.hostname.indexOf(":")
                    ? "[" + this.hostname + "]"
                    : this.hostname) +
                  n +
                  this.path +
                  t
              );
            }),
            (r.prototype.check = function () {
              return !(
                !f ||
                ("__initialize" in f && this.name === r.prototype.name)
              );
            });
        },
        function (t, e) {},
        function (t, e) {
          var r = [].indexOf;
          t.exports = function (t, e) {
            if (r) return t.indexOf(e);
            for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
            return -1;
          };
        },
        function (t, e, n) {
          function r(t, e, n) {
            (this.io = t),
              (this.nsp = e),
              ((this.json = this).ids = 0),
              (this.acks = {}),
              (this.receiveBuffer = []),
              (this.sendBuffer = []),
              (this.connected = !1),
              (this.disconnected = !0),
              (this.flags = {}),
              n && n.query && (this.query = n.query),
              this.io.autoConnect && this.open();
          }
          var o = n(7),
            i = n(8),
            s = n(38),
            a = n(39),
            c = n(40),
            p = n(3)("socket.io-client:socket"),
            h = n(30),
            u = n(24);
          t.exports = r;
          var f = {
              connect: 1,
              connect_error: 1,
              connect_timeout: 1,
              connecting: 1,
              disconnect: 1,
              error: 1,
              reconnect: 1,
              reconnect_attempt: 1,
              reconnect_failed: 1,
              reconnect_error: 1,
              reconnecting: 1,
              ping: 1,
              pong: 1,
            },
            l = i.prototype.emit;
          i(r.prototype),
            (r.prototype.subEvents = function () {
              var t;
              this.subs ||
                ((t = this.io),
                (this.subs = [
                  a(t, "open", c(this, "onopen")),
                  a(t, "packet", c(this, "onpacket")),
                  a(t, "close", c(this, "onclose")),
                ]));
            }),
            (r.prototype.open = r.prototype.connect =
              function () {
                return (
                  this.connected ||
                    (this.subEvents(),
                    this.io.reconnecting || this.io.open(),
                    "open" === this.io.readyState && this.onopen(),
                    this.emit("connecting")),
                  this
                );
              }),
            (r.prototype.send = function () {
              var t = s(arguments);
              return t.unshift("message"), this.emit.apply(this, t), this;
            }),
            (r.prototype.emit = function (t) {
              if (f.hasOwnProperty(t)) return l.apply(this, arguments), this;
              var e = s(arguments),
                n = {
                  type: (
                    void 0 !== this.flags.binary ? this.flags.binary : u(e)
                  )
                    ? o.BINARY_EVENT
                    : o.EVENT,
                  data: e,
                  options: {},
                };
              return (
                (n.options.compress =
                  !this.flags || !1 !== this.flags.compress),
                "function" == typeof e[e.length - 1] &&
                  (p("emitting packet with ack id %d", this.ids),
                  (this.acks[this.ids] = e.pop()),
                  (n.id = this.ids++)),
                this.connected ? this.packet(n) : this.sendBuffer.push(n),
                (this.flags = {}),
                this
              );
            }),
            (r.prototype.packet = function (t) {
              (t.nsp = this.nsp), this.io.packet(t);
            }),
            (r.prototype.onopen = function () {
              var t;
              p("transport is open - connecting"),
                "/" !== this.nsp &&
                  (this.query
                    ? ((t =
                        "object" == typeof this.query
                          ? h.encode(this.query)
                          : this.query),
                      p("sending connect packet with query %s", t),
                      this.packet({ type: o.CONNECT, query: t }))
                    : this.packet({ type: o.CONNECT }));
            }),
            (r.prototype.onclose = function (t) {
              p("close (%s)", t),
                (this.connected = !1),
                (this.disconnected = !0),
                delete this.id,
                this.emit("disconnect", t);
            }),
            (r.prototype.onpacket = function (t) {
              var e = t.nsp === this.nsp,
                n = t.type === o.ERROR && "/" === t.nsp;
              if (e || n)
                switch (t.type) {
                  case o.CONNECT:
                    this.onconnect();
                    break;
                  case o.EVENT:
                  case o.BINARY_EVENT:
                    this.onevent(t);
                    break;
                  case o.ACK:
                  case o.BINARY_ACK:
                    this.onack(t);
                    break;
                  case o.DISCONNECT:
                    this.ondisconnect();
                    break;
                  case o.ERROR:
                    this.emit("error", t.data);
                }
            }),
            (r.prototype.onevent = function (t) {
              var e = t.data || [];
              p("emitting event %j", e),
                null != t.id &&
                  (p("attaching ack callback to event"),
                  e.push(this.ack(t.id))),
                this.connected ? l.apply(this, e) : this.receiveBuffer.push(e);
            }),
            (r.prototype.ack = function (e) {
              var n = this,
                r = !1;
              return function () {
                var t;
                r ||
                  ((r = !0),
                  (t = s(arguments)),
                  p("sending ack %j", t),
                  n.packet({
                    type: u(t) ? o.BINARY_ACK : o.ACK,
                    id: e,
                    data: t,
                  }));
              };
            }),
            (r.prototype.onack = function (t) {
              var e = this.acks[t.id];
              "function" == typeof e
                ? (p("calling ack %s with %j", t.id, t.data),
                  e.apply(this, t.data),
                  delete this.acks[t.id])
                : p("bad ack %s", t.id);
            }),
            (r.prototype.onconnect = function () {
              (this.connected = !0),
                (this.disconnected = !1),
                this.emit("connect"),
                this.emitBuffered();
            }),
            (r.prototype.emitBuffered = function () {
              for (var t = 0; t < this.receiveBuffer.length; t++)
                l.apply(this, this.receiveBuffer[t]);
              for (
                this.receiveBuffer = [], t = 0;
                t < this.sendBuffer.length;
                t++
              )
                this.packet(this.sendBuffer[t]);
              this.sendBuffer = [];
            }),
            (r.prototype.ondisconnect = function () {
              p("server disconnect (%s)", this.nsp),
                this.destroy(),
                this.onclose("io server disconnect");
            }),
            (r.prototype.destroy = function () {
              if (this.subs) {
                for (var t = 0; t < this.subs.length; t++)
                  this.subs[t].destroy();
                this.subs = null;
              }
              this.io.destroy(this);
            }),
            (r.prototype.close = r.prototype.disconnect =
              function () {
                return (
                  this.connected &&
                    (p("performing disconnect (%s)", this.nsp),
                    this.packet({ type: o.DISCONNECT })),
                  this.destroy(),
                  this.connected && this.onclose("io client disconnect"),
                  this
                );
              }),
            (r.prototype.compress = function (t) {
              return (this.flags.compress = t), this;
            }),
            (r.prototype.binary = function (t) {
              return (this.flags.binary = t), this;
            });
        },
        function (t, e) {
          t.exports = function (t, e) {
            for (var n = [], r = (e = e || 0) || 0; r < t.length; r++)
              n[r - e] = t[r];
            return n;
          };
        },
        function (t, e) {
          t.exports = function (t, e, n) {
            return (
              t.on(e, n),
              {
                destroy: function () {
                  t.removeListener(e, n);
                },
              }
            );
          };
        },
        function (t, e) {
          var r = [].slice;
          t.exports = function (t, e) {
            if (("string" == typeof e && (e = t[e]), "function" != typeof e))
              throw new Error("bind() requires a function");
            var n = r.call(arguments, 2);
            return function () {
              return e.apply(t, n.concat(r.call(arguments)));
            };
          };
        },
        function (t, e) {
          function n(t) {
            (t = t || {}),
              (this.ms = t.min || 100),
              (this.max = t.max || 1e4),
              (this.factor = t.factor || 2),
              (this.jitter = 0 < t.jitter && t.jitter <= 1 ? t.jitter : 0),
              (this.attempts = 0);
          }
          ((t.exports = n).prototype.duration = function () {
            var t,
              e,
              n = this.ms * Math.pow(this.factor, this.attempts++);
            return (
              this.jitter &&
                ((t = Math.random()),
                (e = Math.floor(t * this.jitter * n)),
                (n = 0 == (1 & Math.floor(10 * t)) ? n - e : n + e)),
              0 | Math.min(n, this.max)
            );
          }),
            (n.prototype.reset = function () {
              this.attempts = 0;
            }),
            (n.prototype.setMin = function (t) {
              this.ms = t;
            }),
            (n.prototype.setMax = function (t) {
              this.max = t;
            }),
            (n.prototype.setJitter = function (t) {
              this.jitter = t;
            });
        },
      ]),
    (n.c = o),
    (n.p = ""),
    n(0)
  );
  function n(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { exports: {}, id: t, loaded: !1 });
    return r[t].call(e.exports, e, e.exports, n), (e.loaded = !0), e.exports;
  }
  var r, o;
});
