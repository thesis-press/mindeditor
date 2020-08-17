/* eslint-disable */
"use strict";
!(function (o, t) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = t(require("@antv/g6"));
  } else {
    if ("function" == typeof define && define.amd) {
      define(["@antv/g6"], t);
    } else {
      if ("object" == typeof exports) {
        exports.GGEditorCore = t(require("@antv/g6"));
      } else {
        o.GGEditorCore = t(o.G6);
      }
    }
  }
})(window, function (__WEBPACK_EXTERNAL_MODULE_61__) {
  return (function (e) {
    /**
     * @param {string} i
     * @return {?}
     */
    function t(i) {
      if (n[i]) {
        return n[i].exports;
      }
      var module = (n[i] = {
        i: i,
        l: false,
        exports: {}
      });
      return e[i].call(module.exports, module, module.exports, t), (module.l = true), module.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (d, name, n) {
        if (!t.o(d, name)) {
          Object.defineProperty(d, name, {
            enumerable: true,
            get: n
          });
        }
      }),
      (t.r = function (a) {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) {
          Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(a, "__esModule", {
          value: true
        });
      }),
      (t.t = function (a, b) {
        if ((1 & b && (a = t(a)), 8 & b)) {
          return a;
        }
        if (4 & b && "object" == typeof a && a && a.__esModule) {
          return a;
        }
        /** @type {!Object} */
        var d = Object.create(null);
        if (
          (t.r(d),
          Object.defineProperty(d, "default", {
            enumerable: true,
            value: a
          }),
          2 & b && "string" != typeof a)
        ) {
          var key;
          for (key in a) {
            t.d(
              d,
              key,
              function (howMany) {
                return a[howMany];
              }.bind(null, key)
            );
          }
        }
        return d;
      }),
      (t.n = function (module) {
        /** @type {function(): ?} */
        var n =
          module && module.__esModule
            ? function () {
                return module.default;
              }
            : function () {
                return module;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (o, name) {
        return Object.prototype.hasOwnProperty.call(o, name);
      }),
      (t.p = ""),
      t((t.s = 25))
    );
  })([
    function (canCreateDiscussions, b, _) {
      /**
       * @param {!Object} targetObj
       * @return {?}
       */
      function extend(targetObj) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            defineProperty(targetObj, k, o[k]);
          });
        }
        return targetObj;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {number} container
       * @param {string} fileName
       * @param {?} options
       * @return {?}
       */
      function eTruncate(container, fileName, options) {
        return container.addShape("path", {
          attrs: extend({}, options, {
            path: fileName
          })
        });
      }
      /**
       * @param {!Object} obj
       * @return {?}
       */
      function render(obj) {
        return [
          {
            x: obj.centerX,
            y: obj.minY
          },
          {
            x: obj.maxX,
            y: obj.centerY
          },
          {
            x: obj.centerX,
            y: obj.maxY
          },
          {
            x: obj.minX,
            y: obj.centerY
          }
        ];
      }
      /**
       * @param {number} e
       * @param {!Object} font
       * @return {?}
       */
      function merge(e, font) {
        var a;
        var lastTrackInfoUrl;
        var result = render(font);
        /** @type {number} */
        var best_part_step_diff = 1 / 0;
        return (
          result.forEach(function (g, trackInfoUrl) {
            var p;
            var c;
            /** @type {number} */
            var tmp_step_diff = ((p = e), (c = g), Math.sqrt(Math.pow(p.x - c.x, 2) + Math.pow(p.y - c.y, 2)));
            if (tmp_step_diff < best_part_step_diff) {
              /** @type {!Object} */
              a = g;
              /** @type {number} */
              best_part_step_diff = tmp_step_diff;
              /** @type {string} */
              lastTrackInfoUrl = trackInfoUrl;
            }
          }),
          {
            point: a,
            index: lastTrackInfoUrl
          }
        );
      }
      /**
       * @param {!NodeList} d
       * @param {number} i
       * @return {?}
       */
      function expandmove(d, i) {
        return {
          x: (d[i].x + d[i + 1].x) / 2,
          y: (d[i].y + d[i + 1].y) / 2
        };
      }
      /**
       * @param {!Object} n
       * @param {!Object} e
       * @return {?}
       */
      function onPos(n, e) {
        var c = n.point;
        var b = n.index;
        var p = e.point;
        var a = e.index;
        return c.x === p.x || c.y === p.y
          ? [c, p]
          : (2 === b && 0 === a) || (0 === b && 2 === a)
          ? [
              c,
              {
                x: c.x,
                y: (c.y + p.y) / 2
              },
              {
                x: p.x,
                y: (c.y + p.y) / 2
              },
              p
            ]
          : (2 !== b && 0 !== b) || (3 !== a && 1 !== a)
          ? (1 !== b && 3 !== b) || (2 !== a && 0 !== a)
            ? [
                c,
                {
                  x: (c.x + p.x) / 2,
                  y: c.y
                },
                {
                  x: (c.x + p.x) / 2,
                  y: p.y
                },
                p
              ]
            : [
                c,
                {
                  x: p.x,
                  y: c.y
                },
                p
              ]
          : [
              c,
              {
                x: c.x,
                y: p.y
              },
              p
            ];
      }
      /**
       * @param {!Object} val
       * @param {number} type
       * @return {?}
       */
      function push(val, type) {
        return val[type].x === val[type + 1].x;
      }
      /**
       * @param {!Object} a
       * @param {!Object} f
       * @param {number} c
       * @return {?}
       */
      function add(a, f, c) {
        return push(f, c)
          ? a.x === f[c].x && (a.y - f[c].y) * (a.y - f[c + 1].y) <= 0
          : a.y === f[c].y && (a.x - f[c].x) * (a.x - f[c + 1].x) <= 0;
      }
      /**
       * @param {number} o
       * @param {!Object} v
       * @return {?}
       */
      function f(o, v) {
        var quality;
        var refilterFunction;
        var v;
        var b;
        var a;
        /** @type {number} */
        var sanitized = 1 / 0;
        /** @type {number} */
        var m = 0;
        for (; m < v.length - 1; m++) {
          var t = push(v, m);
          var f = void 0;
          if (
            add(
              (f = t
                ? {
                    x: v[m].x,
                    y: o.y
                  }
                : {
                    x: o.x,
                    y: v[m].y
                  }),
              v,
              m
            )
          ) {
            /** @type {number} */
            var max = ((b = o), (a = f), Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
            if (sanitized > max) {
              /** @type {number} */
              sanitized = max;
              /** @type {number} */
              quality = m;
              /** @type {({x: ?, y: ?})} */
              refilterFunction = f;
              v = t;
            }
          }
        }
        return {
          verticalPoint: refilterFunction,
          index: quality,
          vertical: v
        };
      }
      /**
       * @param {!Object} h
       * @param {!Object} t
       * @param {?} i
       * @return {?}
       */
      function update(h, t, i) {
        var bounds;
        var s1;
        var bbox;
        var hd = (function (textElement) {
          if (!textElement) {
            return {
              x: void 0,
              y: void 0
            };
          }
          var layout = textElement.getBBox();
          return {
            x: layout.centerX,
            y: layout.centerY
          };
        })(t);
        var m = h.getLinkPoints(hd)[0];
        if (i) {
          var s = render(h.getBBox())[i];
          bounds = h.getBBox();
          s1 = s;
          bbox = {
            x: t.getBBox().centerX,
            y: t.getBBox().centerY
          };
          if (
            (bounds.centerX - s1.x) * (bounds.centerX - bbox.x) > 0 ||
            (bounds.centerY - s1.y) * (bounds.centerY - bbox.y) > 0
          ) {
            m = s;
          }
        }
        m = merge(m, h.getBBox());
        var files = t.getLinkPoints(m.point)[0];
        return {
          sourcePoint: m,
          targetPoint: (files = merge(files, t.getBBox()))
        };
      }
      /**
       * @param {!Object} coords
       * @param {!Object} x
       * @param {undefined} y
       * @return {?}
       */
      function calculateCoordinates(coords, x, y) {
        return push(x, y)
          ? coords.minX > x[y].x
            ? 1
            : coords.maxX < x[y].x
            ? -1
            : 0
          : coords.minY > x[y].y
          ? 1
          : coords.maxY < x.y
          ? -1
          : 0;
      }
      /**
       * @param {!Object} p
       * @param {(Object|string)} x
       * @param {undefined} y
       * @return {?}
       */
      function p(p, x, y) {
        return push(x, y)
          ? {
              x: x[y].x,
              y: p.y
            }
          : {
              x: p.x,
              y: x[y].y
            };
      }
      /**
       * @param {?} execFile_opt
       * @return {?}
       */
      function exports(execFile_opt) {
        var hashTablePair;
        switch (execFile_opt) {
          case 0:
            /** @type {number} */
            hashTablePair = 2;
            break;
          case 1:
            /** @type {number} */
            hashTablePair = 3;
            break;
          case 3:
            /** @type {number} */
            hashTablePair = 1;
            break;
          default:
            /** @type {number} */
            hashTablePair = 0;
        }
        return hashTablePair;
      }
      _.d(b, "b", function () {
        return eTruncate;
      });
      _.d(b, "c", function () {
        return render;
      });
      _.d(b, "f", function () {
        return merge;
      });
      _.d(b, "j", function () {
        return expandmove;
      });
      _.d(b, "h", function () {
        return onPos;
      });
      _.d(b, "i", function () {
        return push;
      });
      _.d(b, "l", function () {
        return add;
      });
      _.d(b, "e", function () {
        return f;
      });
      _.d(b, "d", function () {
        return update;
      });
      _.d(b, "a", function () {
        return calculateCoordinates;
      });
      _.d(b, "g", function () {
        return p;
      });
      _.d(b, "k", function () {
        return exports;
      });
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {!Object} context
       * @return {?}
       */
      function mixin(context) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            debug(context, k, o[k]);
          });
        }
        return context;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function debug(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {!Object} a
       * @param {string} s
       * @param {string} name
       * @return {?}
       */
      function log(a, s, name) {
        /** @type {!Array} */
        var args = [];
        return (
          typeUtil.isString(a) ? (args = [s, a]) : typeUtil.isArray(a) ? (a.unshift(s), (args = a)) : (args = [s]),
          name && args.unshift(name + "-base"),
          args
        );
      }
      var _ = require(7);
      var search = require(3);
      var typeUtil = require(4);
      var value = {
        getActivedStyle: function () {},
        getSelectedStyle: function () {},
        getStyle: function () {},
        getPath: function () {}
      };
      _.registerNode("page-base", mixin({}, value));
      _.registerEdge("page-base", mixin({}, value));
      _.registerGroup("page-base", mixin({}, value));
      _.registerGuide("page-base", mixin({}, value));
      /**
       * @param {?} value
       * @param {string} name
       * @param {string} a
       * @return {undefined}
       */
      search.setRegister = function (value, name, a) {
        /**
         * @param {string} node
         * @param {?} callback
         * @param {string} type
         * @return {undefined}
         */
        value.registerNode = function (node, callback, type) {
          _.registerNode(node, callback, log(type, name + "-base", a));
        };
        /**
         * @param {string} speed
         * @param {?} direction
         * @param {!Object} edge
         * @return {undefined}
         */
        value.registerEdge = function (speed, direction, edge) {
          _.registerEdge(speed, direction, log(edge, name + "-base", a));
        };
        /**
         * @param {string} group
         * @param {?} tests
         * @param {!Object} data
         * @return {undefined}
         */
        value.registerGroup = function (group, tests, data) {
          _.registerGroup(group, tests, log(data, name + "-base", a));
        };
        /**
         * @param {string} guide
         * @param {?} key
         * @param {!Object} items
         * @return {undefined}
         */
        value.registerGuide = function (guide, key, items) {
          _.registerGuide(guide, key, log(items, name + "-base", a));
        };
        /**
         * @param {string} val
         * @param {!Function} fun
         * @param {!Array} n
         * @return {undefined}
         */
        value.registerBehaviour = function (val, fun, n) {
          _.registerBehaviour(
            val,
            function (workspace) {
              var n = workspace.get("page");
              n.set("_graph", workspace);
              fun(n);
            },
            n
          );
        };
      };
      search.setRegister(search, "page");
      require(44);
      module.exports = search;
    },
    function (mixin, canCreateDiscussions, unescape) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var s_utf8 = unescape(7);
      var str = unescape(22);
      var val = unescape(63);
      var s3file = unescape(64);
      var m = (function (_style) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var object = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var o = Object.keys(object);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            o = o.concat(
              Object.getOwnPropertySymbols(object).filter(function (key) {
                return Object.getOwnPropertyDescriptor(object, key).enumerable;
              })
            );
          }
          o.forEach(function (prop) {
            _defineProperty(_style, prop, object[prop]);
          });
        }
        return _style;
      })({}, s_utf8.Util, str, val, s3file);
      mixin.exports = m;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} targetObj
       * @return {?}
       */
      function extend(targetObj) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            defineProperty(targetObj, k, o[k]);
          });
        }
        return targetObj;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} name
       * @param {string} o
       * @return {?}
       */
      function compile(name, o) {
        return !o || ("object" !== next(o) && "function" != typeof o)
          ? (function (data) {
              if (void 0 === data) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return data;
            })(name)
          : o;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} obj
       * @param {!Object} name
       * @return {?}
       */
      function wrapper(obj, name) {
        return (wrapper =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(obj, name);
      }
      var Ching = require(21);
      var exports = require(4);
      var view = require(14);
      var Account = require(34);
      var g = require(35);
      var bar = require(37);
      /** @type {!Array} */
      var targets = [Account, require(38), require(39), g, bar, require(40), require(42), require(43)];
      var mod = (function (canCreateDiscussions) {
        /**
         * @param {undefined} params
         * @return {?}
         */
        function load(params) {
          var t;
          !(function (impromptuInstance, Impromptu) {
            if (!(impromptuInstance instanceof Impromptu)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, load);
          var options = {
            defaultData: null,
            shortcut: {
              redo: true,
              undo: true,
              delete: true,
              resetZoom: true,
              autoZoom: true,
              zoomIn: true,
              zoomOut: true
            },
            _controllers: {},
            _signals: {}
          };
          return (
            exports.each(targets, function (factory) {
              exports.mix(options, factory.CFG);
            }),
            exports.mix(true, options, params),
            ((t = compile(this, fn(load).call(this, options))).isPage = true),
            (t.type = "page"),
            t._init(),
            t
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (superClass) {
              wrapper(value, superClass);
            }
          })(load, Ching),
          (Constructor = load),
          (protoProps = [
            {
              key: "getDelegation",
              value: function (array, t) {
                var m;
                if (!t) {
                  t = this.getGraph().getRootGroup();
                }
                if (1 !== array.length || array[0].isNode || array[0].isGroup) {
                  var r = exports.getTotalBBox(
                    array.map(function (comma) {
                      return comma.getBBox();
                    })
                  );
                  (m = exports.getRectByBox(r, t, view.nodeDelegationStyle)).set("capture", false);
                } else {
                  if (array[0].isEdge) {
                    m = t.addShape("path", {
                      attrs: extend(
                        {
                          path: "M0 0L 1 1"
                        },
                        view.edgeDelegationStyle
                      ),
                      capture: false
                    });
                  } else {
                    (m = exports.getRectByBox(array[0], t, view.nodeDelegationStyle)).set("capture", false);
                  }
                }
                return m;
              }
            },
            {
              key: "focusGraphWrapper",
              value: function () {
                this.getGraph().getKeyboardEventWrapper().focus();
              }
            },
            {
              key: "saveImage",
              value: function (data) {
                var selected;
                var marker;
                var item = this;
                var target = this.getGraph();
                var viewPaneSize = target.getBBox();
                var margins = target.getFitViewPadding();
                return target.saveImage(
                  extend(
                    {
                      width: viewPaneSize.width + margins[1] + margins[3],
                      height: viewPaneSize.height + margins[0] + margins[2],
                      beforeTransform: function () {
                        selected = item.getSelected().map(function (timeline_mode) {
                          return timeline_mode.id;
                        });
                        marker = item.getSelected().map(function (timeline_mode) {
                          return timeline_mode.id;
                        });
                        item.clearSelected();
                        item.clearActived();
                      },
                      afterTransform: function () {
                        item.setSelected(selected, true);
                        item.setActived(marker, true);
                      }
                    },
                    data
                  )
                );
              }
            },
            {
              key: "_init",
              value: function () {
                var r = this;
                exports.each(targets, function (system) {
                  if (system.INIT) {
                    r[system.INIT]();
                  }
                });
                this.bindEvent();
                this._cacheBBox();
              }
            },
            {
              key: "executeCommand",
              value: function (data, callback) {
                var me = this.editor;
                if (me) {
                  me.executeCommand(data, callback);
                } else {
                  data();
                }
              }
            },
            {
              key: "_cacheBBox",
              value: function () {
                var g = this.getGraph();
                this.set("bboxCache", g.getBBox());
              }
            },
            {
              key: "bindEvent",
              value: function () {
                var e = this;
                this.getGraph().on("afterchange", function () {
                  e._cacheBBox();
                });
              }
            },
            {
              key: "translateLimt",
              value: function (m) {
                var g = this.getGraph();
                var enemy = this.get("bboxCache");
                var h = g.getWidth();
                var scrollLeft = g.getHeight();
                /** @type {!Array} */
                var p = [enemy.minX, enemy.minY, 1];
                /** @type {!Array} */
                var normal = [enemy.maxX, enemy.maxY, 1];
                return (
                  exports.vec3.transformMat3(p, p, m),
                  exports.vec3.transformMat3(normal, normal, m),
                  normal[0] < 100 && exports.mat3.translate(m, m, [100 - normal[0], 0]),
                  normal[1] < 100 && exports.mat3.translate(m, m, [0, 100 - normal[1]]),
                  p[1] > scrollLeft - 100 && exports.mat3.translate(m, m, [0, scrollLeft - 100 - p[1]]),
                  p[0] > h - 100 && exports.mat3.translate(m, m, [h - 100 - p[0], 0]),
                  true
                );
              }
            },
            {
              key: "setSignal",
              value: function (field, count) {
                this.get("_signals")[field] = count;
              }
            },
            {
              key: "getSignal",
              value: function (name) {
                return this.get("_signals")[name];
              }
            },
            {
              key: "setController",
              value: function (field, count) {
                this.get("_controllers")[field] = count;
              }
            },
            {
              key: "getController",
              value: function (name) {
                return this.get("_controllers")[name];
              }
            },
            {
              key: "destroy",
              value: function () {
                var graph = this.get("_graph");
                var t = this.get("_controllers");
                exports.each(t, function (anAlertDialog) {
                  anAlertDialog.destroy();
                });
                graph.destroy();
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          load
        );
      })();
      exports.each(targets, function (factory) {
        exports.mix(mod.prototype, factory.AUGMENT);
      });
      module.exports = mod;
    },
    function (o, canCreateDiscussions, nock) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var scope = nock(6);
      var server = nock(14);
      var font = scope.createDOM("<canvas>").getContext("2d");
      o.exports = (function (_style) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var object = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var o = Object.keys(object);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            o = o.concat(
              Object.getOwnPropertySymbols(object).filter(function (key) {
                return Object.getOwnPropertyDescriptor(object, key).enumerable;
              })
            );
          }
          o.forEach(function (prop) {
            _defineProperty(_style, prop, object[prop]);
          });
        }
        return _style;
      })({}, scope, {
        getPanCanvasBehaviour: function (zoomAware) {
          return function (self) {
            var shift_pos;
            var ds;
            var layer = self.getGraph();
            layer.behaviourOn("canvas:mouseenter", function () {
              self.css({
                cursor: server.cursor.beforePanCanvas
              });
            });
            layer.behaviourOn("mouseleave", function (outline) {
              if (!outline.toShape) {
                self.css({
                  cursor: server.cursor.beforePanCanvas
                });
              }
            });
            layer.behaviourOn("mousedown", function (s) {
              if (
                (2 !== s.button && !zoomAware) ||
                !s.shape ||
                (s.item &&
                  false === s.item.dragable &&
                  "mind-root" !== s.item.shapeObj.type &&
                  !self.getSignal("dragEdge"))
              ) {
                shift_pos = {
                  x: s.domX,
                  y: s.domY
                };
                self.css({
                  cursor: server.cursor.panningCanvas
                });
                ds = layer.getMatrix();
                self.setCapture(false);
              }
            });
            layer.behaviourOn("drag", function (e) {
              if (shift_pos) {
                /** @type {number} */
                var point_light_position_x = e.domX - shift_pos.x;
                /** @type {number} */
                var point_light_position_y = e.domY - shift_pos.y;
                /** @type {!Array} */
                var u = [];
                scope.mat3.translate(u, ds, [point_light_position_x, point_light_position_y]);
                if (self.translateLimt(u)) {
                  layer.updateMatrix(u);
                  layer.draw();
                }
              }
            });
            layer.behaviourOn("mouseup", function () {
              if (shift_pos) {
                shift_pos = void 0;
                ds = void 0;
                self.setCapture(true);
                self.css({
                  cursor: server.cursor.beforePanCanvas
                });
              }
            });
          };
        },
        getLabelTextByTextLineWidth: function (text, value) {
          var total = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 320;
          /** @type {string} */
          font.font = value;
          var widthSum = font.measureText(text).width;
          if (widthSum > total) {
            /** @type {number} */
            widthSum = 0;
            /** @type {number} */
            var i = 1;
            for (; i < text.length; i++) {
              if ((widthSum = widthSum + font.measureText(text[i]).width) >= total) {
                text = text.substring(0, i) + "\n" + text.substring(i, text.length);
                /** @type {number} */
                i = i + 1;
                /** @type {number} */
                widthSum = 0;
              }
            }
          }
          return text;
        }
      });
    },
    function (mixin, canCreateDiscussions) {
      mixin.exports = {
        orbitGap: 10,
        nodeDefaultShape: "flow-node",
        edgeDefaultShape: "flow-smooth",
        groupDefaultShape: "flow-group",
        nodeActivedOutterStyle: {
          lineWidth: 0
        },
        groupSelectedOutterStyle: {
          stroke: "#E0F0FF",
          lineWidth: 2
        },
        nodeSelectedOutterStyle: {
          stroke: "#E0F0FF",
          lineWidth: 2
        },
        edgeActivedStyle: {
          stroke: "#1890FF",
          strokeOpacity: 0.92
        },
        nodeActivedStyle: {
          fill: "#F3F9FF",
          stroke: "#1890FF"
        },
        groupActivedStyle: {
          stroke: "#1890FF"
        },
        edgeSelectedStyle: {
          lineWidth: 2,
          strokeOpacity: 0.92,
          stroke: "#A3B1BF"
        },
        nodeSelectedStyle: {
          fill: "#F3F9FF",
          stroke: "#1890FF"
        },
        groupSelectedStyle: {
          stroke: "#1890FF",
          fillOpacity: 0.92
        },
        nodeStyle: {
          stroke: "#CED4D9",
          fill: "#FFFFFF",
          shadowOffsetX: 0,
          shadowOffsetY: 4,
          shadowBlur: 10,
          shadowColor: "rgba(13, 26, 38, 0.08)",
          lineWidth: 1,
          radius: 4,
          fillOpacity: 0.92
        },
        edgeStyle: {
          stroke: "#A3B1BF",
          strokeOpacity: 0.92,
          lineWidth: 1,
          lineAppendWidth: 8,
          endArrow: true
        },
        groupBackgroundPadding: [40, 10, 10, 10],
        groupLabelOffsetX: 10,
        groupLabelOffsetY: 10,
        edgeLabelStyle: {
          fill: "#666",
          textAlign: "center",
          textBaseline: "middle"
        },
        edgeLabelRectPadding: 4,
        edgeLabelRectStyle: {
          fill: "white"
        },
        nodeLabelStyle: {
          fill: "#666",
          textAlign: "center",
          textBaseline: "middle"
        },
        groupStyle: {
          stroke: "#CED4D9",
          radius: 4
        },
        groupLabelStyle: {
          fill: "#666",
          textAlign: "left",
          textBaseline: "top"
        },
        multiSelectRectStyle: {
          fill: "#1890FF",
          fillOpacity: 0.08,
          stroke: "#1890FF",
          opacity: 0.1
        },
        dragNodeHoverToGroupStyle: {
          stroke: "#1890FF",
          lineWidth: 2
        },
        dragNodeLeaveFromGroupStyle: {
          stroke: "#BAE7FF",
          lineWidth: 2
        },
        anchorPointStyle: {
          radius: 3.5,
          fill: "#fff",
          stroke: "#1890FF",
          lineAppendWidth: 12
        },
        anchorHotsoptStyle: {
          radius: 12,
          fill: "#1890FF",
          fillOpacity: 0.25
        },
        anchorHotsoptActivedStyle: {
          radius: 14
        },
        anchorPointHoverStyle: {
          radius: 4,
          fill: "#1890FF",
          fillOpacity: 1,
          stroke: "#1890FF"
        },
        nodeControlPointStyle: {
          radius: 4,
          fill: "#fff",
          shadowBlur: 4,
          shadowColor: "#666"
        },
        edgeControlPointStyle: {
          radius: 6,
          symbol: "square",
          lineAppendWidth: 6,
          fillOpacity: 0,
          strokeOpacity: 0
        },
        nodeSelectedBoxStyle: {
          stroke: "#C2C2C2"
        },
        cursor: {
          panningCanvas: "-webkit-grabbing",
          beforePanCanvas: "-webkit-grab",
          hoverNode: "move",
          hoverEffectiveAnchor: "crosshair",
          hoverEdge: "default",
          hoverGroup: "move",
          hoverUnEffectiveAnchor: "default",
          hoverEdgeControllPoint: "crosshair",
          multiSelect: "crosshair"
        },
        zIndex: {
          anchorPoint: 3,
          anchorHotsopt: 2,
          selectedBox: 1,
          controlPoint: 4
        },
        polylineEdgeStyle: {
          offset: 10,
          borderRadius: 5
        },
        addToGroupDelayTime: 400,
        outFromGroupDelayTime: 400
      };
    },
    function (context, canCreateDiscussions, parseFloat) {
      /**
       * @param {!Object} payload
       * @return {?}
       */
      function verify(payload) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            debug(payload, k, o[k]);
          });
        }
        return payload;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function debug(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var Y = parseFloat(7);
      var key = parseFloat(28);
      var value_high = parseFloat(29);
      var options = {
        whitespace: {
          9: "Tab",
          13: "Enter",
          32: "Space"
        },
        fn: {
          112: "f1 ",
          113: "f2 ",
          114: "f3 ",
          115: "f4 ",
          116: "f5 ",
          117: "f6 ",
          118: "f7 ",
          119: "f8 ",
          120: "f9 ",
          121: "f10",
          122: "f11",
          123: "f12"
        },
        letter: {
          65: "a",
          66: "b",
          67: "c",
          68: "d",
          69: "e",
          70: "f",
          71: "g",
          72: "h",
          73: "i",
          74: "j",
          75: "k",
          76: "l",
          77: "m",
          78: "n",
          79: "o",
          80: "p",
          81: "q",
          82: "r",
          83: "s",
          84: "t",
          85: "u",
          86: "v",
          87: "w",
          88: "x",
          89: "y",
          90: "z"
        },
        number: {
          48: "0",
          49: "1",
          50: "2",
          51: "3",
          52: "4",
          53: "5",
          54: "6",
          55: "7",
          56: "8",
          57: "9"
        },
        navigation: {
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown"
        },
        symbol: {
          110: "decimal point",
          186: "semi-colon",
          187: "=",
          188: "comma",
          189: "-",
          190: "period ",
          191: "/",
          192: "grave accent",
          219: "open bracket ",
          220: "back slash ",
          221: "close bracket ",
          222: "single quote "
        },
        smallNumberKey: {
          96: "numpad 0 ",
          97: "numpad 1 ",
          98: "numpad 2 ",
          99: "numpad 3 ",
          100: "numpad 4 ",
          101: "numpad 5 ",
          102: "numpad 6 ",
          103: "numpad 7 ",
          104: "numpad 8 ",
          105: "numpad 9 "
        },
        modifierKey: {
          16: "Shift",
          17: "Ctrl ",
          18: "Alt",
          20: "caps lock"
        },
        escKey: {
          8: "Backspace",
          46: "Delete",
          27: "Escape"
        },
        homeKey: {
          91: "Windows Key / Left command",
          92: "right window key ",
          93: "Windows Menu"
        },
        computeKey: {
          106: "multiply ",
          107: "add",
          109: "subtract ",
          111: "divide "
        }
      };
      var result = verify({}, Y.Util, key, {
        getNodeSize: function (node) {
          if (node) {
            if (Y.Util.isNumber(node)) {
              return [node, node];
            }
            if (Y.Util.isString(node)) {
              if (-1 === node.indexOf("*")) {
                /** @type {number} */
                var t = Number(node);
                return [t, t];
              }
              return node.split("*");
            }
            return node;
          }
          return [96, 48];
        },
        getTypeAndChar: function (year) {
          var dragType;
          var e;
          for (e in ((year = "" + year), options)) {
            var i;
            for (i in ((dragType = e), options[e])) {
              if (i === year) {
                return {
                  type: dragType,
                  character: options[e][i]
                };
              }
            }
          }
          return {};
        },
        getKeyboradKey: function (event) {
          return event.key || result.getTypeAndChar(event.keyCode).character;
        },
        getIndex: function (s) {
          return s.getParent().get("children").indexOf(s);
        },
        setId: function (type) {
          if (!type.id) {
            type.id = Y.Util.guid();
          }
        },
        pointLineDistance: function (n, s, p, g, i, k) {
          /** @type {!Array} */
          var quatA = [p - n, g - s];
          if (Y.Util.vec2.exactEquals(quatA, [0, 0])) {
            return NaN;
          }
          /** @type {!Array} */
          var lightDir = [-quatA[1], quatA[0]];
          Y.Util.vec2.normalize(lightDir, lightDir);
          /** @type {!Array} */
          var daXdb = [i - n, k - s];
          return Math.abs(Y.Util.vec2.dot(daXdb, lightDir));
        },
        getRectByBox: function (a, link, settings) {
          return link.addShape("rect", {
            attrs: verify({}, settings, {
              x: a.minX,
              y: a.minY,
              width: a.maxX - a.minX,
              height: a.maxY - a.minY
            })
          });
        },
        objectToValues: function (object) {
          var property;
          /** @type {!Array} */
          var values = [];
          for (property in object) {
            if (object.hasOwnProperty(property)) {
              values.push(object[property]);
            }
          }
          return values;
        },
        getValue: function (value) {
          return Y.Util.isFunction(value) ? value() : value;
        },
        getContrast: function (b, callback) {
          var t = {};
          return (
            Y.Util.each(callback, function (canCreateDiscussions, k) {
              t[k] = b[k];
            }),
            t
          );
        },
        arrowTo: function (color, opacity, x, x2, y, w, h) {
          /** @type {!Array} */
          var v2 = [w - x2, h - y];
          var vector2 = Y.Util.vec2.angleTo(v2, [1, 0], true);
          return (
            color.transform([
              ["r", vector2],
              ["t", opacity, x]
            ]),
            color
          );
        },
        setEndOfContenteditable: function (contentEditableElement) {
          var range;
          var sel;
          if (document.createRange) {
            (range = document.createRange()).selectNodeContents(contentEditableElement);
            range.collapse(false);
            (sel = window.getSelection()).removeAllRanges();
            sel.addRange(range);
          } else {
            if (document.selection) {
              (range = document.body.createTextRange()).moveToElementText(contentEditableElement);
              range.collapse(false);
              range.select();
            }
          }
        },
        matches: function (key, args) {
          return (
            Element.prototype.matches ||
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (type) {
              var t = (this.document || this.ownerDocument).querySelectorAll(type);
              var u = t.length;
              for (; --u >= 0 && t.item(u) !== this; ) {}
              return u > -1;
            }
          ).call(key, args);
        },
        delegateEvent: function (node, e, type, selector) {
          return result.addEventListener(node, e, function (event) {
            var item = event.target || event.srcElement;
            for (; item !== node; ) {
              if (result.matches(item, type)) {
                selector.call(item, Array.prototype.slice.call(arguments));
              }
              item = item.parentNode;
            }
          });
        },
        Palettes: value_high
      });
      context.exports = result;
    },
    function (module, n) {
      /** @type {!Object} */
      module.exports = __WEBPACK_EXTERNAL_MODULE_61__;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} pos
       * @return {?}
       */
      function fn(pos) {
        return (fn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (object) {
                return typeof object;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(pos);
      }
      /**
       * @param {!Object} data
       * @return {?}
       */
      function callback(data) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            debug(data, k, o[k]);
          });
        }
        return data;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function debug(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} out
       * @param {string} a
       * @return {?}
       */
      function add(out, a) {
        return !a || ("object" !== fn(a) && "function" != typeof a)
          ? (function (a) {
              if (void 0 === a) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return a;
            })(out)
          : a;
      }
      /**
       * @param {string} name
       * @param {string} fn
       * @param {string} value
       * @return {?}
       */
      function update(name, fn, value) {
        return (update =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (name, key, elem) {
                var component = (function (value, localNode) {
                  for (; !Object.prototype.hasOwnProperty.call(value, localNode) && null !== (value = get(value)); ) {}
                  return value;
                })(name, key);
                if (component) {
                  /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
                  var data = Object.getOwnPropertyDescriptor(component, key);
                  return data.get ? data.get.call(elem) : data.value;
                }
              })(name, fn, value || name);
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function get(type) {
        return (get = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var modules = require(7);
      var app = require(1);
      var _ = require(10);
      /** @type {!Array} */
      var d = [];
      var $ = (function (canCreateDiscussions) {
        /**
         * @param {?} item
         * @return {?}
         */
        function format(item) {
          var inserted;
          !(function (impromptuInstance, Impromptu) {
            if (!(impromptuInstance instanceof Impromptu)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, format);
          var i = {
            showHotArea: false,
            defaultData: {
              roots: [
                {
                  label: "\u601d\u7ef4\u5bfc\u56fe",
                  children: [
                    {
                      label: "\u65b0\u5efa\u8282\u70b9"
                    },
                    {
                      label: "\u65b0\u5efa\u8282\u70b9"
                    },
                    {
                      label: "\u65b0\u5efa\u8282\u70b9"
                    }
                  ]
                }
              ]
            },
            shortcut: {
              append: true,
              appendChild: true,
              collapseExpand: true,
              selectAll: true
            },
            labelEditable: true,
            graph: {
              modes: {
                default: [
                  "clickNodeSelected",
                  "keydownMoveSelection",
                  "clickCanvasSelected",
                  "keydownEditLabel",
                  "panBlank",
                  "wheelChangeViewport",
                  "panMindNode",
                  "clickCollapsedButton",
                  "clickExpandedButton",
                  "hoverButton",
                  "hoverNodeActived",
                  "dblclickItemEditLabel"
                ],
                readOnly: [
                  "clickNodeSelected",
                  "wheelChangeViewport",
                  "keydownMoveSelection",
                  "hoverNodeActived",
                  "panCanvas",
                  "clickExpandedButton",
                  "hoverButton",
                  "clickCanvasSelected"
                ]
              },
              layout: new modules.Layouts.Mindmap({
                direction: "H",
                getSubTreeSep: function (elem) {
                  return elem.children && elem.children.length > 0 ? (elem.hierarchy <= 2 ? 8 : 2) : 0;
                },
                getHGap: function (bones) {
                  return 1 === bones.hierarchy ? 8 : 2 === bones.hierarchy ? 24 : 18;
                },
                getVGap: function (bones) {
                  return 1 === bones.hierarchy ? 24 : 2 === bones.hierarchy ? 24 : 2;
                },
                getSide: function (unit) {
                  return unit.data.side ? unit.data.side : "right";
                }
              }),
              mode: "default",
              defaultIntersectBox: "rect",
              nodeDefaultShape: "mind-base",
              edgeDefaultShape: "mind-edge",
              minZoom: 0.2,
              maxZoom: 2
            },
            align: {
              item: false
            },
            rootShape: "mind-root",
            firstSubShape: "mind-first-sub",
            secondSubShape: "mind-second-sub",
            subShape: "mind-base",
            nodeDefaultShape: "mind-base",
            graphConstructor: modules.Tree,
            defaultSide: "right"
          };
          var a = {};
          return (
            _.each(d, function (factory) {
              _.mix(a, factory.CFG);
            }),
            _.mix(true, i, a, item),
            ((inserted = add(this, get(format).call(this, i))).isMind = true),
            inserted
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (p, e) {
            if ("function" != typeof e && null !== e) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            p.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: p,
                writable: true,
                configurable: true
              }
            });
            if (e) {
              action(p, e);
            }
          })(format, app),
          (Constructor = format),
          (protoProps = [
            {
              key: "_init",
              value: function () {
                var r = this;
                update(get(format.prototype), "_init", this).call(this);
                _.each(d, function (system) {
                  if (system.INIT) {
                    r[system.INIT]();
                  }
                });
                var g = this.getGraph();
                var previous = this.get("defaultData");
                var default_key = g.get("mode");
                var constrainedXY = g.getRootGroup().addGroup();
                if (
                  (this.set("hotAreaGroup", constrainedXY),
                  g.edge().shape(function (n) {
                    if (g.find(n.target).getModel().isPlaceholder) {
                      return "mind-placeholder-edge";
                    }
                  }),
                  previous && this.read(previous),
                  "default" === default_key)
                ) {
                  if (previous) {
                    var r = this.getRoot();
                    var type = g.find(r.id);
                    this.setSelected(type, true);
                  }
                } else {
                  if ("readOnly" === default_key) {
                    var commands = this.get("shortcut");
                    /** @type {boolean} */
                    commands.append = false;
                    /** @type {boolean} */
                    commands.appendChild = false;
                    /** @type {boolean} */
                    commands.selectAll = false;
                    /** @type {boolean} */
                    commands.delete = false;
                  }
                }
                if (previous) {
                  var rootNode = this.getRoot();
                  this.focus(rootNode.id);
                }
              }
            },
            {
              key: "bindEvent",
              value: function () {
                var $scope = this;
                update(get(format.prototype), "bindEvent", this).call(this);
                var slider = this.get("_graph");
                slider.on("keydown", function (event) {
                  event.domEvent.preventDefault();
                });
                slider.on("beforechange", function (data) {
                  if ("add" === data.action) {
                    $scope._beforeAdd(data);
                  } else {
                    if ("changeData" === data.action) {
                      $scope._beforeChangeData(data);
                    }
                  }
                });
                slider.on("aftersource", function () {
                  $scope._setHierarchy();
                });
                slider.on("afterchange", function () {
                  $scope._setHotArea();
                });
                slider.on("afteritemdraw", function (dragData) {
                  var data = dragData.item;
                  var parentPg = data.getModel();
                  if (data.isEdge) {
                    var input = data.getGraphicGroup();
                    _.toBack(input, input.getParent());
                    input.setSilent("capture", false);
                  }
                  if (!parentPg.parent) {
                    /** @type {boolean} */
                    data.isRoot = true;
                    /** @type {boolean} */
                    data.deleteable = false;
                    /** @type {boolean} */
                    data.collapseExpand = false;
                    /** @type {boolean} */
                    data.appendable = false;
                    /** @type {boolean} */
                    data.dragable = false;
                  }
                });
                this.on("beforedelete", function (references2) {
                  var node = references2.items[0];
                  var targetNodes = $scope._getBrothers(node);
                  var index = $scope._getNth(node);
                  if (targetNodes[index - 1]) {
                    $scope.setSelected(targetNodes[index - 1].id, true);
                  } else {
                    if (targetNodes[index + 1]) {
                      $scope.setSelected(targetNodes[index + 1].id, true);
                    } else {
                      $scope.setSelected(node.getParent(), true);
                    }
                  }
                });
                this.on("afteritemselected", function (step) {
                  $scope._tryAdjustViewport(step.item);
                });
              }
            },
            {
              key: "getRoot",
              value: function () {
                return this.getGraph().getSource().roots[0];
              }
            },
            {
              key: "_setHierarchy",
              value: function (target) {
                var _this = this.getGraph();
                var resolution = this.get("firstSubShape");
                var doc = this.get("secondSubShape");
                var color = this.get("defaultSide");
                if (target) {
                  var lApp = _this.find(target.parent);
                  if (lApp) {
                    var fsStub = lApp.getModel();
                    target.hierarchy = fsStub.hierarchy + 1;
                    if ("mind-placeholder" !== target.shape) {
                      if (2 === target.hierarchy) {
                        target.shape = resolution;
                        if (!target.side) {
                          target.side = color;
                        }
                      }
                      if (3 === target.hierarchy) {
                        target.shape = doc;
                      }
                    }
                  }
                } else {
                  /** @type {number} */
                  (target = this.getRoot()).hierarchy = 1;
                }
                _.traverseTree(
                  target,
                  function (target, options) {
                    target.hierarchy = options.hierarchy + 1;
                    if (!target.side) {
                      target.side = color;
                    }
                    if (options.side) {
                      target.side = options.side;
                    }
                    if (2 === target.hierarchy) {
                      target.shape = resolution;
                    } else {
                      if (3 === target.hierarchy) {
                        target.shape = doc;
                      }
                    }
                  },
                  function (postboard) {
                    return postboard.children;
                  }
                );
              }
            },
            {
              key: "getFirstChildrenBySide",
              value: function (color) {
                var root = this.getRoot();
                /** @type {!Array} */
                var suitesEnter = [];
                return (
                  root.children.forEach(function (input) {
                    if (input.side === color) {
                      suitesEnter.push(input);
                    }
                  }),
                  suitesEnter
                );
              }
            },
            {
              key: "_getNth",
              value: function (saveEvenIfSeemsUnchanged) {
                return this.getGraph().getNth(saveEvenIfSeemsUnchanged);
              }
            },
            {
              key: "_getBrothers",
              value: function (ancestor) {
                return ancestor.getParent().getModel().children;
              }
            },
            {
              key: "_getMoveChildModel",
              value: function (substrings) {
                if (substrings && substrings.length > 0) {
                  var length = substrings.length;
                  return substrings[parseInt(length / 2)];
                }
              }
            },
            {
              key: "_getVerticalMoveItem",
              value: function (a, f, done) {
                var lastNodeEventCount;
                var crossfilterable_layers = this.getGraph().getNodes();
                var xyz = a.getBBox();
                /** @type {!Array} */
                var queryEvents = [xyz.minX, xyz.maxX];
                /** @type {!Array} */
                var sections = [];
                /** @type {number} */
                var i = 0;
                for (; i < queryEvents.length; i++) {
                  var e = queryEvents[i];
                  /** @type {number} */
                  var layer_i = 0;
                  for (; layer_i < crossfilterable_layers.length; layer_i++) {
                    var clone = crossfilterable_layers[layer_i];
                    var context_data_val = clone.getBBox();
                    if (f(context_data_val, xyz, e)) {
                      sections.push({
                        long: done(context_data_val, xyz),
                        node: clone
                      });
                    }
                  }
                }
                return (
                  sections.length > 0 &&
                    (sections.sort(function (stop, object) {
                      return stop.long - object.long;
                    }),
                    (lastNodeEventCount = sections[0].node)),
                  lastNodeEventCount
                );
              }
            },
            {
              key: "_arrowTopItem",
              value: function (value) {
                var el = this._getBrothers(value);
                var i = this._getNth(value);
                return el[i - 1]
                  ? el[i - 1]
                  : this._getVerticalMoveItem(
                      value,
                      function (o, self, x) {
                        return o.centerY < self.centerY && x <= o.maxX && x >= o.minX;
                      },
                      function (source, target) {
                        return target.centerY - source.centerY;
                      }
                    );
              }
            },
            {
              key: "_arrowBottomItem",
              value: function (name) {
                var t = this._getBrothers(name);
                var clean = this._getNth(name);
                return t[clean + 1]
                  ? t[clean + 1]
                  : this._getVerticalMoveItem(
                      name,
                      function (state, options, n) {
                        return state.centerY > options.centerY && n <= state.maxX && n >= state.minX;
                      },
                      function (target, source) {
                        return target.centerY - source.centerY;
                      }
                    );
              }
            },
            {
              key: "_arrowLeftItem",
              value: function (w) {
                var center = _.getMindNodeSide(w);
                if (w.isRoot) {
                  var isZore = this.getFirstChildrenBySide("left");
                  return this._getMoveChildModel(isZore);
                }
                if ("left" === center) {
                  var contentTableRows = w.getModel().children;
                  return this._getMoveChildModel(contentTableRows);
                }
                return w.getParent();
              }
            },
            {
              key: "_arrowRightItem",
              value: function (w) {
                var f = _.getMindNodeSide(w);
                if (w.isRoot) {
                  var right_outputs = this.getFirstChildrenBySide("right");
                  return this._getMoveChildModel(right_outputs);
                }
                if ("right" === f) {
                  var contentTableRows = w.getModel().children;
                  return this._getMoveChildModel(contentTableRows);
                }
                return w.getParent();
              }
            },
            {
              key: "_moveItemSelection",
              value: function (params) {
                var g = this.getGraph();
                var child = this.getSelected()[0];
                if (child) {
                  var item;
                  var event = params.domEvent;
                  var module = _.getKeyboradKey(event);
                  if ("ArrowUp" !== module || child.isRoot) {
                    if ("ArrowDown" !== module || child.isRoot) {
                      if ("ArrowLeft" === module) {
                        item = this._arrowLeftItem(child);
                      } else {
                        if ("ArrowRight" === module) {
                          item = this._arrowRightItem(child);
                        }
                      }
                    } else {
                      item = this._arrowBottomItem(child);
                    }
                  } else {
                    item = this._arrowTopItem(child);
                  }
                  if (item && (item = g.find(item.id)).isVisible()) {
                    this.clearSelected();
                    this.setSelected(item, true);
                  }
                }
              }
            },
            {
              key: "showLabelEditor",
              value: function (params) {
                var event = params.domEvent;
                var percent_div = this.getSelected()[0];
                var buffer = _.getKeyboradKey(event);
                if (percent_div && 1 === buffer.length && !event.metaKey && !event.ctrlKey) {
                  var container = this.get("labelTextArea");
                  if (percent_div) {
                    this.beginEditLabel(percent_div);
                    container.innerHTML = buffer;
                    _.setEndOfContenteditable(container);
                  }
                }
              }
            },
            {
              key: "_tryAdjustViewport",
              value: function (clone) {
                var t = this.get("_graph");
                var rectXY = clone.getBBox();
                var val = {
                  x: rectXY.minX,
                  y: rectXY.minY
                };
                var o = {
                  x: rectXY.maxX,
                  y: rectXY.maxY
                };
                var pval = t.getDomPoint(val);
                var p = t.getDomPoint(o);
                var maxX = t.getWidth();
                var maxY = t.getHeight();
                if (pval.x < 0) {
                  t.translate(16 - pval.x, 0);
                }
                if (pval.y < 0) {
                  t.translate(0, 16 - pval.y);
                }
                if (p.x > maxX) {
                  t.translate(maxX - p.x - 16, 0);
                }
                if (p.y > maxY) {
                  t.translate(0, maxY - p.y - 16);
                }
              }
            },
            {
              key: "_beforeChangeData",
              value: function (json) {
                var target = json.data.roots[0];
                var resolution = this.get("rootShape");
                target.shape = resolution;
                this._setHierarchy(target);
              }
            },
            {
              key: "_beforeAdd",
              value: function (cell) {
                var model = this.get("_graph");
                var parent = cell.model;
                var store = model.find(parent.parent);
                if (store.getModel().collapsed) {
                  model.update(store, {
                    collapsed: false
                  });
                }
                this._setHierarchy(parent);
              }
            },
            {
              key: "_drawHotAreaShape",
              value: function () {
                var graph = this.get("_graph");
                var container = this.get("hotAreaGroup");
                var n = this.get("hotAreas");
                container.clear();
                n.forEach(function (o) {
                  container.addShape("rect", {
                    attrs: {
                      x: o.minX,
                      y: o.minY,
                      width: o.maxX - o.minX,
                      height: o.maxY - o.minY,
                      fill: o.color,
                      fillOpacity: 0.4
                    },
                    capture: false
                  });
                });
                graph.draw();
              }
            },
            {
              key: "_setHotArea",
              value: function () {
                /** @type {!Array} */
                var items = [];
                var graph = this.get("_graph");
                var root = this.getRoot();
                /** @type {string} */
                var x = "placeholder";
                var pki_type = this.get("showHotArea");
                var bounds = graph.find(root.id).getBBox();
                items.push({
                  minX: bounds.minX - 90,
                  minY: bounds.minY - 60,
                  maxX: (bounds.minX + bounds.maxX) / 2,
                  maxY: bounds.maxY + 60,
                  parent: root,
                  current: root,
                  id: root.id + "left" + x,
                  nth: root.children.length,
                  side: "left",
                  color: "orange"
                });
                items.push({
                  minX: (bounds.minX + bounds.maxX) / 2,
                  minY: bounds.minY - 60,
                  maxX: bounds.maxX + 90,
                  maxY: bounds.maxY + 60,
                  parent: root,
                  current: root,
                  id: root.id + "right" + x,
                  nth: root.children.length,
                  side: "right",
                  color: "pink"
                });
                _.traverseTree(
                  root,
                  function (p, context, i) {
                    var areaHelper = graph.find(p.id);
                    if (!p.isPlaceholder && areaHelper && areaHelper.isVisible()) {
                      var node = (function (cind, pokemon, elem) {
                        var children = elem.children;
                        var i = cind;
                        if (!elem.parent) {
                          for (; children[i] && children[i].side !== pokemon.side; ) {
                            i++;
                          }
                        }
                        for (; children[i] && children[i].isPlaceholder; ) {
                          i++;
                        }
                        if (children[i] && children[i].side === pokemon.side) {
                          return children[i];
                        }
                      })(i + 1, p, context);
                      var view = (function (cind, pokemon, elem) {
                        var children = elem.children;
                        /** @type {number} */
                        var i = cind;
                        if (!elem.parent) {
                          for (; children[i] && children[i].side !== pokemon.side; ) {
                            i--;
                          }
                        }
                        for (; children[i] && children[i].isPlaceholder; ) {
                          i--;
                        }
                        if (children[i] && children[i].side === pokemon.side) {
                          return children[i];
                        }
                      })(i - 1, p, context);
                      var bounds = graph.find(p.id).getBBox();
                      var children = context.children;
                      /** @type {boolean} */
                      var horz = 2 === p.hierarchy && "right" === p.side;
                      /** @type {boolean} */
                      var isVertical = 2 === p.hierarchy && "left" === p.side;
                      if (
                        (view ||
                          items.push({
                            minX: horz ? bounds.minX - 90 : bounds.minX,
                            minY: (function () {
                              var layout = view ? bounds.minY : bounds.minY - 16;
                              if (children[i - 1] && children[i - 1].isPlaceholder && children[i - 1].side === p.side) {
                                layout = graph.find(children[i - 1].id).getBBox().minY;
                              }
                              return layout;
                            })(),
                            maxX: isVertical ? bounds.maxX + 90 : bounds.maxX,
                            maxY: (bounds.minY + bounds.maxY) / 2,
                            parent: context,
                            id: (view ? view.id : void 0) + p.id + context.id + x,
                            side: p.side,
                            color: "yellow",
                            nth: i
                          }),
                        node)
                      ) {
                        var rect = graph.find(node.id).getBBox();
                        items.push({
                          minX:
                            "left" === p.side
                              ? Math.max(bounds.minX, rect.minX)
                              : horz
                              ? bounds.minX - 90
                              : bounds.minX,
                          minY: (bounds.minY + bounds.maxY) / 2,
                          maxX:
                            "right" === p.side
                              ? Math.min(bounds.maxX, rect.maxX)
                              : isVertical
                              ? bounds.maxX + 90
                              : bounds.maxX,
                          maxY: (rect.minY + rect.maxY) / 2,
                          parent: context,
                          id: p.id + (node ? node.id : void 0) + context.id + x,
                          side: p.side,
                          color: "blue",
                          nth: i + 1
                        });
                      } else {
                        items.push({
                          minX: horz ? bounds.minX - 90 : bounds.minX,
                          minY: (bounds.minY + bounds.maxY) / 2,
                          maxX: isVertical ? bounds.maxX + 90 : bounds.maxX,
                          maxY: (function () {
                            var Y = bounds.maxY + 16;
                            if (children[i + 1] && children[i + 1].isPlaceholder && children[i + 1].side === p.side) {
                              Y = graph.find(children[i + 1].id).getBBox().maxY;
                            }
                            return Y;
                          })(),
                          parent: context,
                          id: p.id + void 0 + context.id + x,
                          color: "red",
                          nth: i + 1,
                          addOrder: "push",
                          side: p.side
                        });
                      }
                      if (
                        !p.children ||
                        0 === p.children.length ||
                        (1 === p.children.length && p.children[0].isPlaceholder)
                      ) {
                        var displayName;
                        /** @type {({maxX: ?, maxY: ?, minX: ?, minY: number}|{maxX: ?, maxY: ?, minX: number, minY: number})} */
                        displayName =
                          p.x > context.x
                            ? {
                                minX: bounds.maxX,
                                minY: bounds.minY - 0,
                                maxX: bounds.maxX + 100,
                                maxY: bounds.maxY + 0
                              }
                            : {
                                minX: bounds.minX - 100,
                                minY: bounds.minY - 0,
                                maxX: bounds.minX,
                                maxY: bounds.maxY + 0
                              };
                        items.push(
                          callback({}, displayName, {
                            parent: p,
                            id: NaN + p.id + x,
                            nth: 0,
                            color: "green",
                            side: p.side,
                            addOrder: "push"
                          })
                        );
                      }
                    }
                  },
                  function (postboard) {
                    return postboard.children;
                  }
                );
                this.set("hotAreas", items);
                if (pki_type) {
                  this._drawHotAreaShape();
                }
              }
            },
            {
              key: "hideHotArea",
              value: function () {
                var graph = this.get("_graph");
                this.get("hotAreaGroup").clear();
                graph.draw();
                this.set("showHotArea", false);
              }
            },
            {
              key: "showHotArea",
              value: function () {
                this._drawHotAreaShape();
                this.set("showHotArea", true);
              }
            },
            {
              key: "getHotArea",
              value: function (a) {
                var broadcastMoved;
                return (
                  this.get("hotAreas").forEach(function (b) {
                    if (a.x > b.minX && a.x < b.maxX && a.y > b.minY && a.y < b.maxY) {
                      return (broadcastMoved = b), false;
                    }
                  }),
                  broadcastMoved
                );
              }
            },
            {
              key: "saveExpandImage",
              value: function (props) {
                var paneNodes;
                var selected;
                var marker;
                var item = this;
                var view = this.getGraph();
                var viewPaneSize = view.getBBox();
                var margins = view.getFitViewPadding();
                return view.saveImage(
                  callback(
                    {
                      width: viewPaneSize.width + margins[1] + margins[3],
                      height: viewPaneSize.height + margins[0] + margins[2],
                      beforeTransform: function () {
                        var eCfgEl = view.getNodes();
                        (paneNodes = eCfgEl
                          .filter(function (elManager) {
                            return elManager.getModel().collapsed;
                          })
                          .map(function (elManager) {
                            return elManager.getModel().id;
                          })).forEach(function (e) {
                          view.update(e, {
                            collapsed: false
                          });
                        });
                        view.layout();
                        selected = item.getSelected().map(function (timeline_mode) {
                          return timeline_mode.id;
                        });
                        marker = item.getSelected().map(function (timeline_mode) {
                          return timeline_mode.id;
                        });
                        item.clearSelected();
                        item.clearActived();
                      },
                      afterTransform: function () {
                        paneNodes.forEach(function (e) {
                          view.update(e, {
                            collapsed: true
                          });
                        });
                        item.setSelected(selected, true);
                        item.setActived(marker, true);
                      }
                    },
                    props
                  )
                );
              }
            },
            {
              key: "save",
              value: function () {
                var state = this.get("_graph").save();
                return (
                  state.roots.forEach(function (local) {
                    _.traverseTree(
                      local,
                      function (result) {
                        delete result.x;
                        delete result.y;
                        delete result.width;
                        delete result.height;
                        delete result.parent;
                        delete result.nth;
                        delete result.hierarchy;
                        delete result.index;
                        delete result.shape;
                      },
                      function (postboard) {
                        return postboard.children;
                      },
                      true
                    );
                  }),
                  state
                );
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          format
        );
      })();
      _.each(d, function (factory) {
        _.mix($.prototype, factory.AUGMENT);
      });
      app.setRegister($, "mind", "page");
      module.exports = $;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {!Function} y
       * @param {string} props
       * @return {undefined}
       */
      function t(y, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(y, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Function} x
       * @param {!Function} n
       * @param {!Function} a
       * @return {?}
       */
      function has(x, n, a) {
        return n && t(x.prototype, n), a && t(x, a), x;
      }
      var util = require(7).Util;
      var storeMixin = (function () {
        /**
         * @param {?} cfg
         * @return {undefined}
         */
        function Base(cfg) {
          !(function (value, Base) {
            if (!(value instanceof Base)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, Base);
          var time = this.getDefaultCfg();
          util.mix(true, this, time, cfg);
          this.init();
        }
        return (
          has(Base, [
            {
              key: "getDefaultCfg",
              value: function () {
                return {};
              }
            }
          ]),
          has(Base, [
            {
              key: "init",
              value: function () {}
            },
            {
              key: "destroy",
              value: function () {}
            }
          ]),
          Base
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, saveNotifs) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var flux = (function (_style) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var object = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var o = Object.keys(object);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            o = o.concat(
              Object.getOwnPropertySymbols(object).filter(function (key) {
                return Object.getOwnPropertyDescriptor(object, key).enumerable;
              })
            );
          }
          o.forEach(function (prop) {
            _defineProperty(_style, prop, object[prop]);
          });
        }
        return _style;
      })({}, saveNotifs(4), {
        getMindNodeSide: function (object) {
          var sideElement = object.getModel();
          if (sideElement.side) {
            return sideElement.side;
          }
          var store = object.getParent();
          return store ? (store.getModel().side ? store.getModel().side : flux.getMindNodeSide(store)) : void 0;
        }
      });
      module.exports = flux;
    },
    function (mixin, canCreateDiscussions, require) {
      /**
       * @param {string} pos
       * @return {?}
       */
      function fn(pos) {
        return (fn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (object) {
                return typeof object;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(pos);
      }
      /**
       * @param {!Array} current
       * @param {string} a
       * @return {?}
       */
      function compile(current, a) {
        return !a || ("object" !== fn(a) && "function" != typeof a)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(current)
          : a;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function clone(type) {
        return (clone = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} obj
       * @param {!Object} name
       * @return {?}
       */
      function f(obj, name) {
        return (f =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(obj, name);
      }
      var r = require(1);
      var delay = require(16);
      var _ = require(19);
      var m = (function (canCreateDiscussions) {
        /**
         * @param {?} item
         * @return {?}
         */
        function t(item) {
          var evaluate;
          !(function (value, t) {
            if (!(value instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, t);
          var options = {
            graph: {
              modes: {
                default: [
                  "panBlank",
                  "hoverGroupActived",
                  "keydownCmdWheelZoom",
                  "clickEdgeSelected",
                  "clickNodeSelected",
                  "clickCanvasSelected",
                  "clickGroupSelected",
                  "hoverNodeActived",
                  "hoverEdgeActived",
                  "hoverButton",
                  "clickCollapsedButton",
                  "clickExpandedButton",
                  "wheelChangeViewport",
                  "keydownShiftMultiSelected",
                  "dragNodeAddToGroup",
                  "dragOutFromGroup",
                  "panItem",
                  "hoverEdgeControlPoint",
                  "dragEdgeControlPoint"
                ],
                add: ["dragPanelItemAddNode"],
                readOnly: ["panCanvas"],
                move: ["panCanvas"],
                multiSelect: ["dragMultiSelect"]
              },
              mode: "default",
              defaultIntersectBox: "rect",
              nodeDefaultShape: "flow-base",
              edgeDefaultShape: "flow-smooth",
              groupDefaultShape: "flow-base"
            },
            linkNode: false
          };
          return (
            _.mix(true, options, {}, item),
            ((evaluate = compile(this, clone(t).call(this, options))).isFlow = true),
            evaluate
          );
        }
        return (
          (function (value, t) {
            if ("function" != typeof t && null !== t) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (t) {
              f(value, t);
            }
          })(t, delay),
          t
        );
      })();
      r.setRegister(m, "flow", "diagram");
      mixin.exports = m;
    },
    function (mixin, canCreateDiscussions, require) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (eventCallback) {
                return typeof eventCallback;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} a
       * @param {string} b
       * @return {?}
       */
      function cb(a, b) {
        return !b || ("object" !== next(b) && "function" != typeof b)
          ? (function (result) {
              if (void 0 === result) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return result;
            })(a)
          : b;
      }
      /**
       * @param {string} name
       * @param {string} fn
       * @param {string} value
       * @return {?}
       */
      function update(name, fn, value) {
        return (update =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (name, key, elem) {
                var component = (function (res, localNode) {
                  for (; !Object.prototype.hasOwnProperty.call(res, localNode) && null !== (res = fn(res)); ) {}
                  return res;
                })(name, key);
                if (component) {
                  /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
                  var data = Object.getOwnPropertyDescriptor(component, key);
                  return data.get ? data.get.call(elem) : data.value;
                }
              })(name, fn, value || name);
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var Ching = require(16);
      var op = require(1);
      var _ = require(6);
      var m = (function (canCreateDiscussions) {
        /**
         * @param {?} item
         * @return {?}
         */
        function list(item) {
          var predicate;
          !(function (value, t) {
            if (!(value instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, list);
          var options = {
            graph: {
              modes: {
                default: [
                  "panBlank",
                  "keydownCmdWheelZoom",
                  "clickEdgeSelected",
                  "clickNodeSelected",
                  "clickCanvasSelected",
                  "hoverNodeActived",
                  "hoverEdgeActived",
                  "hoverButton",
                  "wheelChangeViewport",
                  "keydownShiftMultiSelected",
                  "panItem",
                  "hoverNodeShowArrowController",
                  "hoverEdgeControlPoint",
                  "dragEdgeControlPoint",
                  "bpmnMoveEdgeController"
                ],
                add: ["dragPanelItemAddNode", "processAddEdge"],
                readOnly: ["panCanvas"],
                move: ["panCanvas"],
                multiSelect: ["dragMultiSelect"]
              },
              mode: "default",
              defaultIntersectBox: "rect",
              nodeDefaultShape: "bpmn-base",
              edgeDefaultShape: "bpmn-base"
            },
            arrowController: {
              thickness: 32,
              long: 32,
              controllers: []
            }
          };
          return (
            _.mix(true, options, {}, item),
            ((predicate = cb(this, fn(list).call(this, options))).isBPMN = true),
            predicate
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (superClass) {
              action(value, superClass);
            }
          })(list, Ching),
          (Constructor = list),
          (protoProps = [
            {
              key: "_init",
              value: function () {
                update(fn(list.prototype), "_init", this).call(this);
                this._initArrowController();
              }
            },
            {
              key: "_createArrowController",
              value: function (controlWidth, unit) {
                var self = this;
                var c = this.get("arrowController").controllers;
                var n = _.createDOM(
                  '<div class="g6-bpmn-arrow"><svg t="1543840367375" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1061" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><defs><style type="text/css"></style></defs><path d="M906.77248 512c0 4.77184-2.21184 9.2672-5.9904 12.17536l-376.5248 289.4848c-2.7648 2.11968-6.06208 3.18464-9.3696 3.18464-3.25632 0-6.5024-1.03424-9.24672-3.09248-5.50912-4.15744-7.5776-11.48928-5.03808-17.90976l75.71456-191.67232L132.58752 604.17024c-8.48896 0-15.36-6.88128-15.36-15.36l0-153.6c0-8.48896 6.87104-15.36 15.36-15.36l443.72992 0-75.71456-191.68256c-2.53952-6.42048-0.47104-13.75232 5.04832-17.90976 5.50912-4.15744 13.12768-4.13696 18.60608 0.09216l376.5248 289.4848C904.56064 502.7328 906.77248 507.22816 906.77248 512z" p-id="1062" fill="#34B7EF"></path></svg></div>',
                  {
                    visibility: "hidden",
                    width: controlWidth + "px",
                    height: unit + "px",
                    position: "absolute"
                  }
                );
                return (
                  n.setAttribute("draggable", "true"),
                  _.addEventListener(n, "dragstart", function () {
                    var p = n.hoverNode;
                    var o = {
                      shape: "bpmn-base",
                      source: p.id,
                      anchorIndex: n.getAttribute("anchorIndex")
                    };
                    var layout = p.getBBox();
                    var i = self.getDelegation([
                      {
                        isEdge: true
                      }
                    ]);
                    self.setSignal("dragEdge", true);
                    self.beginAdd("edge", o);
                    self.set("addEdgeConfig", {
                      addModel: o,
                      delegation: i,
                      startPoint: {
                        x: layout.centerX,
                        y: layout.centerY
                      },
                      sourceItem: p
                    });
                    self.hideArrowController();
                  }),
                  c.push(n),
                  n
                );
              }
            },
            {
              key: "showArrowController",
              value: function (e) {
                this.get("arrowController").controllers.forEach(function (context) {
                  context.show();
                  /** @type {!Object} */
                  context.hoverNode = e;
                });
              }
            },
            {
              key: "hideArrowController",
              value: function () {
                this.get("arrowController").controllers.forEach(function (EmptyContentCollectionOverlay) {
                  EmptyContentCollectionOverlay.hide();
                });
              }
            },
            {
              key: "_initArrowController",
              value: function () {
                var g = this.getGraph().getGraphContainer();
                var options = this.get("arrowController");
                var t = options.thickness;
                var div = options.long;
                var l = this._createArrowController(t, div);
                var btn = this._createArrowController(t, div);
                var text = this._createArrowController(div, t);
                var a = this._createArrowController(div, t);
                g.appendChild(l);
                g.appendChild(btn);
                g.appendChild(text);
                g.appendChild(a);
                options.topArrow = l;
                options.bottomArrow = btn;
                options.leftArrow = text;
                options.rightArrow = a;
              }
            },
            {
              key: "bindEvent",
              value: function () {
                var e = this;
                update(fn(list.prototype), "bindEvent", this).call(this);
                var g = this.getGraph();
                g.on("beforepanitem", function () {
                  e.hideArrowController();
                });
                g.on("afterviewportchange", function () {
                  e.hideArrowController();
                });
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          list
        );
      })();
      op.setRegister(m, "bpmn", "diagram");
      mixin.exports = m;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} t
       * @param {string} o
       * @return {?}
       */
      function callback(t, o) {
        return !o || ("object" !== next(o) && "function" != typeof o)
          ? (function (result) {
              if (void 0 === result) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return result;
            })(t)
          : o;
      }
      /**
       * @param {string} name
       * @param {string} fn
       * @param {string} value
       * @return {?}
       */
      function update(name, fn, value) {
        return (update =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (name, key, elem) {
                var component = (function (main, localNode) {
                  for (; !Object.prototype.hasOwnProperty.call(main, localNode) && null !== (main = get(main)); ) {}
                  return main;
                })(name, key);
                if (component) {
                  /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
                  var data = Object.getOwnPropertyDescriptor(component, key);
                  return data.get ? data.get.call(elem) : data.value;
                }
              })(name, fn, value || name);
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function get(type) {
        return (get = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} pos
       * @param {!Object} obj
       * @return {?}
       */
      function fn(pos, obj) {
        return (fn =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(pos, obj);
      }
      var Rickshaw = require(7);
      var lang = require(1);
      var util = require(2);
      var hello = require(65);
      var is = require(66);
      var nice = require(68);
      var ms = require(72);
      /** @type {!Array} */
      var e = [hello, require(73), ms, is, nice, require(74)];
      var mod = (function (canCreateDiscussions) {
        /**
         * @param {?} cfg
         * @return {?}
         */
        function list(cfg) {
          var value;
          !(function (EMSarray, arrMethod) {
            if (!(EMSarray instanceof arrMethod)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, list);
          var s = {
            shortcut: {
              copy: true,
              paste: true,
              selectAll: true,
              addGroup: true,
              unGroup: true
            },
            graph: {
              minZoom: 0.2,
              maxZoom: 2
            },
            graphConstructor: Rickshaw.Graph,
            noEndEdge: true
          };
          var item = {};
          return (
            util.each(e, function (factory) {
              util.mix(item, factory.CFG);
            }),
            util.mix(true, s, item, cfg),
            ((value = callback(this, get(list).call(this, s))).isFlow = true),
            value
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, e) {
            if ("function" != typeof e && null !== e) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (e) {
              fn(value, e);
            }
          })(list, lang),
          (Constructor = list),
          (protoProps = [
            {
              key: "_init",
              value: function () {
                var r = this;
                update(get(list.prototype), "_init", this).call(this);
                util.each(e, function (system) {
                  if (system.INIT) {
                    r[system.INIT]();
                  }
                });
              }
            },
            {
              key: "bindEvent",
              value: function () {
                var session = this;
                update(get(list.prototype), "bindEvent", this).call(this);
                this.on("beforeitemactived", function (object) {
                  var element = object.item;
                  var options = session.get("_graph").getShapeObj(element).getActivedOutterStyle(element);
                  if (element.isNode) {
                    session.addOutterShape(element, options);
                  }
                });
                this.on("beforeitemunactived", function (event) {
                  var record = event.item;
                  if (record.isNode || record.isGroup) {
                    session.clearOutterShape(record);
                  }
                });
                this.on("beforeitemselected", function (itemMeta) {
                  var item = itemMeta.item;
                  var defaultQueryOptions = session.get("_graph").getShapeObj(item).getSelectedOutterStyle(item);
                  if (item.isNode) {
                    session.addOutterShape(item, defaultQueryOptions);
                  } else {
                    if (item.isGroup) {
                      session.addOutterShape(item, defaultQueryOptions);
                    }
                  }
                });
                this.on("beforeitemunselected", function (event) {
                  var record = event.item;
                  if (record.isNode || record.isGroup) {
                    session.clearOutterShape(record);
                  }
                });
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          list
        );
      })();
      util.each(e, function (factory) {
        util.mix(mod.prototype, factory.AUGMENT);
      });
      lang.setRegister(mod, "diagram", "page");
      module.exports = mod;
    },
    function (scope, canCreateDiscussions) {
      scope.exports = {
        gridStyle: {
          stroke: "#A3B1BF",
          lineWidth: 0.5
        },
        cursor: {
          panningCanvas: "-webkit-grabbing",
          beforePanCanvas: "-webkit-grab"
        },
        wheelPanRatio: 0.3,
        alignLineStyle: {
          stroke: "#FA8C16",
          lineWidth: 1
        },
        nodeDelegationStyle: {
          stroke: "#1890FF",
          fill: "#1890FF",
          fillOpacity: 0.08,
          lineDash: [4, 4],
          radius: 4,
          lineWidth: 1
        },
        edgeDelegationStyle: {
          stroke: "#1890FF",
          lineDash: [4, 4],
          lineWidth: 1
        }
      };
    },
    function (mixin, canCreateDiscussions, NFA) {
      var m = NFA(18);
      NFA(32);
      NFA(33);
      mixin.exports = m;
    },
    function (mixin, canCreateDiscussions, NFA) {
      var m = NFA(13);
      NFA(75);
      NFA(80);
      mixin.exports = m;
    },
    function (mixin, canCreateDiscussions, require) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (eventCallback) {
                return typeof eventCallback;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} a
       * @param {string} b
       * @return {?}
       */
      function cb(a, b) {
        return !b || ("object" !== next(b) && "function" != typeof b)
          ? (function (result) {
              if (void 0 === result) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return result;
            })(a)
          : b;
      }
      /**
       * @param {string} name
       * @param {string} fn
       * @param {string} value
       * @return {?}
       */
      function update(name, fn, value) {
        return (update =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (name, key, elem) {
                var component = (function (res, localNode) {
                  for (; !Object.prototype.hasOwnProperty.call(res, localNode) && null !== (res = fn(res)); ) {}
                  return res;
                })(name, key);
                if (component) {
                  /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
                  var data = Object.getOwnPropertyDescriptor(component, key);
                  return data.get ? data.get.call(elem) : data.value;
                }
              })(name, fn, value || name);
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var op = require(1);
      var Ching = require(16);
      var _ = require(24);
      var m = (function (canCreateDiscussions) {
        /**
         * @param {?} item
         * @return {?}
         */
        function list(item) {
          var predicate;
          !(function (value, t) {
            if (!(value instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, list);
          var options = {
            graph: {
              modes: {
                default: [
                  "panBlank",
                  "hoverGroupActived",
                  "keydownCmdWheelZoom",
                  "clickEdgeSelected",
                  "clickNodeSelected",
                  "clickCanvasSelected",
                  "clickGroupSelected",
                  "hoverNodeActived",
                  "hoverEdgeActived",
                  "hoverButton",
                  "clickCollapsedButton",
                  "clickExpandedButton",
                  "wheelChangeViewport",
                  "keydownShiftMultiSelected",
                  "dragNodeAddToGroup",
                  "dragOutFromGroup",
                  "panItem",
                  "hoverEdgeControlPoint",
                  "dragEdgeControlPoint"
                ],
                add: ["dragPanelItemAddNode", "processAddEdge"],
                readOnly: ["panCanvas"],
                move: ["panCanvas"],
                multiSelect: ["dragMultiSelect"]
              },
              mode: "default",
              defaultIntersectBox: "circle",
              nodeDefaultShape: "koni-base",
              edgeDefaultShape: "koni-base",
              groupDefaultShape: "koni-base",
              minZoom: 0.5,
              maxZoom: 2
            },
            orbit: {
              satellite: ["forkAndLink"]
            },
            anchorLink: false,
            noEndEdge: false
          };
          return (
            _.mix(true, options, {}, item),
            ((predicate = cb(this, fn(list).call(this, options))).isKoni = true),
            predicate
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (superClass) {
              action(value, superClass);
            }
          })(list, Ching),
          (Constructor = list),
          (protoProps = [
            {
              key: "bindEvent",
              value: function () {
                update(fn(list.prototype), "bindEvent", this).call(this);
                var graph = this.getGraph();
                graph.on("afterchange", function (options) {
                  var data = options.item;
                  var mode = options.action;
                  var event = options.originModel;
                  var parameters = options.updateModel;
                  if (data && data.isEdge) {
                    if ("add" === mode || "remove" === mode) {
                      var a = data.getSource();
                      var valueWithZeroEnd = data.getTarget();
                      _.getParallelEdges(a, valueWithZeroEnd, true).forEach(function (VTodoService) {
                        VTodoService.update();
                      });
                    } else {
                      if ("update" === mode) {
                        var u = graph.find(event.source);
                        var data = graph.find(event.target);
                        /** @type {!Array} */
                        var p = [];
                        if (
                          (_.getParallelEdges(u, data, true).forEach(function (VTodoService) {
                            VTodoService.update();
                          }),
                          _.isNil(parameters.target) && !_.isNil(parameters.source))
                        ) {
                          var f = graph.find(parameters.source);
                          p = _.getParallelEdges(f, data, true);
                        } else {
                          if (!_.isNil(parameters.target) && _.isNil(parameters.source)) {
                            var data = graph.find(parameters.target);
                            p = _.getParallelEdges(u, data, true);
                          } else {
                            if (!_.isNil(parameters.target) && !_.isNil(parameters.source)) {
                              var interests = graph.find(parameters.source);
                              var data = graph.find(parameters.target);
                              p = _.getParallelEdges(interests, data, true);
                            }
                          }
                        }
                        p.forEach(function (VTodoService) {
                          VTodoService.update();
                        });
                      }
                    }
                  }
                  if ("changeData" === mode) {
                    graph.getEdges().forEach(function (VTodoService) {
                      VTodoService.update();
                    });
                  }
                  graph.draw();
                });
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          list
        );
      })();
      op.setRegister(m, "koni", "diagram");
      mixin.exports = m;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {!Object} targetObj
       * @return {?}
       */
      function extend(targetObj) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            defineProperty(targetObj, k, o[k]);
          });
        }
        return targetObj;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {!Object} element
       * @return {?}
       */
      function _activate(element) {
        return element.getCurrentPage().getSelected().length > 0;
      }
      /**
       * @param {!Object} name
       * @return {undefined}
       */
      function render(name) {
        var methods = name.getCurrentPage();
        this.snapShot = methods.save();
        this.selectedItems = methods.getSelected().map(function (timeline_mode) {
          return timeline_mode.id;
        });
        if (this.method) {
          if ($.isString(this.method)) {
            methods[this.method]();
          } else {
            this.method(name);
          }
        }
      }
      /**
       * @param {!Object} context
       * @return {undefined}
       */
      function init(context) {
        var element = context.getCurrentPage();
        element.read(this.snapShot);
        element.setSelected(this.selectedItems, true);
      }
      /**
       * @param {!Object} element
       * @return {?}
       */
      function basicChangeElementTest(element) {
        return element.getCurrentPage().getMode() !== this.toMode;
      }
      /**
       * @param {!Object} app
       * @return {undefined}
       */
      function func(app) {
        var p = app.getCurrentPage();
        this.fromMode = p.getMode();
        p.changeMode(this.toMode);
      }
      /**
       * @param {!Object} p
       * @return {undefined}
       */
      function release(p) {
        p.getCurrentPage().changeMode(this.fromMode);
      }
      /**
       * @param {!Array} dir_files
       * @return {?}
       */
      function add(dir_files) {
        var ids = {};
        /** @type {!Array} */
        var errors = [];
        return (
          dir_files.forEach(function (e) {
            var p = e.model;
            var model = $.mix(
              true,
              {},
              extend({}, p, {
                id: $.guid()
              })
            );
            ids[p.id] = model.id;
            errors.push(
              extend({}, e, {
                model: model
              })
            );
          }),
          errors.forEach(function (data) {
            var comment = data.model;
            if (comment.parent) {
              var id = ids[comment.parent];
              if (id) {
                comment.parent = id;
              } else {
                delete comment.parent;
              }
            }
          }),
          errors.sort(function (padB, padA) {
            return padB.index - padA.index;
          }),
          errors
        );
      }
      var $ = require(6);
      var self = {};
      /** @type {!Array} */
      self.list = [];
      /**
       * @param {string} name
       * @param {undefined} obj
       * @param {string} key
       * @return {undefined}
       */
      self.registerCommand = function (name, obj, key) {
        if (self[name]) {
          $.mix(self[name], obj);
        } else {
          var data = extend(
            {
              enable: function () {
                return true;
              },
              init: function () {},
              execute: render,
              back: init,
              shortcutCodes: void 0,
              executeTimes: 1,
              name: name,
              queue: true
            },
            obj
          );
          if (key && self[key]) {
            data = $.mix({}, self[key], obj);
          }
          self[name] = data;
          self.list.push(data);
        }
      };
      /**
       * @param {!Object} name
       * @param {!Object} app
       * @param {?} params
       * @return {?}
       */
      self.execute = function (name, app, params) {
        var request = $.mix(true, {}, self[name], params);
        var me = app.get("_command");
        return (
          request.enable(app) &&
            (request.init(),
            request.queue && (me.queue.splice(me.current, me.queue.length - me.current, request), (me.current += 1)),
            app.emit("beforecommandexecute", {
              command: request
            }),
            request.execute(app),
            app.emit("aftercommandexecute", {
              command: request
            }),
            app.setCommandDOMenable()),
          request
        );
      };
      /**
       * @param {!Object} type
       * @param {!Object} next
       * @return {?}
       */
      self.enable = function (type, next) {
        return self[type].enable(next);
      };
      self.registerCommand("common", {
        back: init
      });
      self.registerCommand("copyAdjacent", {
        enable: function () {
          return this.copyNode && this.copyNode.isNode && this.x && this.y;
        },
        execute: function (app) {
          var lApp = this.copyNode;
          var page = app.getCurrentPage();
          var self = page.getGraph();
          var row = lApp.getModel();
          var dest = $.clone(row);
          dest.id = $.guid();
          dest.x = this.x;
          dest.y = this.y;
          var actual = self.add("node", dest);
          var projection = self.add("edge", {
            source: row.id,
            target: dest.id
          });
          if (1 === this.executeTimes) {
            /** @type {!Array} */
            this.addIds = [actual.id, projection.id];
            this.page = page;
          }
        },
        back: function () {
          var e = this.page.getGraph();
          this.addIds.forEach(function (t) {
            e.remove(t);
          });
        }
      });
      self.registerCommand("add", {
        enable: function () {
          return this.type && this.addModel;
        },
        execute: function (app) {
          var page = app.getCurrentPage();
          var g = page.getGraph().add(this.type, this.addModel);
          if (1 === this.executeTimes) {
            this.addId = g.id;
            this.page = page;
          }
        },
        back: function () {
          this.page.getGraph().remove(this.addId);
        }
      });
      self.registerCommand("update", {
        enable: function () {
          return this.itemId && this.updateModel;
        },
        execute: function (app) {
          var page = app.getCurrentPage();
          var API = page.getGraph();
          var item = API.find(this.itemId);
          if (1 === this.executeTimes) {
            this.originModel = $.getContrast(item.getModel(), this.updateModel);
            this.page = page;
          }
          API.update(item, this.updateModel);
        },
        back: function () {
          var API = this.page.getGraph();
          var item = API.find(this.itemId);
          API.update(item, this.originModel);
        }
      });
      self.registerCommand("redo", {
        queue: false,
        enable: function (object) {
          var self = object.get("_command");
          var items = self.queue;
          return self.current < items.length;
        },
        execute: function (name) {
          var _this = name.get("_command");
          _this.queue[_this.current].execute(name);
          _this.current += 1;
        },
        shortcutCodes: [
          ["metaKey", "shiftKey", "z"],
          ["ctrlKey", "shiftKey", "z"]
        ]
      });
      self.registerCommand("undo", {
        queue: false,
        enable: function (object) {
          return object.get("_command").current > 0;
        },
        execute: function (value) {
          var actionQueue = value.get("_command");
          var callback = actionQueue.queue[actionQueue.current - 1];
          callback.executeTimes++;
          callback.back(value);
          actionQueue.current -= 1;
        },
        shortcutCodes: [
          ["metaKey", "z"],
          ["ctrlKey", "z"]
        ]
      });
      self.registerCommand("copy", {
        queue: false,
        enable: _activate,
        method: function (self) {
          var MSG_TYPES = self.getCurrentPage().getSelected();
          var instance = self.get("_command");
          var cmdName = MSG_TYPES.map(function (canCreateDiscussions) {
            return canCreateDiscussions.getGraphicGroup();
          });
          var val = $.getChildrenBBox(cmdName);
          /** @type {!Array} */
          instance.clipboard = [];
          MSG_TYPES.forEach(function (local) {
            $.traverseTree(
              local,
              function (es) {
                var jstModel = es.getModel();
                var name = es.getGraphicGroup();
                instance.clipboard.push({
                  type: es.type,
                  index: $.getIndex(name),
                  model: jstModel
                });
              },
              function (outerChild) {
                return outerChild.getChildren && outerChild.getChildren();
              },
              true
            );
          });
          self.set("copyCenterBox", extend({}, val));
        }
      });
      self.registerCommand("pasteHere", {
        enable: function (object) {
          return object.get("_command").clipboard.length > 0;
        },
        method: function (self) {
          var _self = self.getCurrentPage();
          var obj = self.get("_command");
          var r = this.pasteData ? this.pasteData : add(obj.clipboard);
          var b = this.copyCenterBox ? this.copyCenterBox : self.get("copyCenterBox");
          var a = this.contextmenuPoint ? this.contextmenuPoint : self.get("contextmenuPoint");
          _self.clearSelected();
          this.copyCenterBox = $.clone(b);
          this.pasteData = $.clone(r);
          this.contextmenuPoint = $.clone(a);
          r.forEach(function (state) {
            var right = state.model;
            if (right.x) {
              right.x += a.x - b.minX;
            }
            if (right.y) {
              right.y += a.y - b.minY;
            }
            _self.add(state.type, right);
          });
        },
        back: init
      });
      self.registerCommand("paste", {
        enable: function (object) {
          return object.get("_command").clipboard.length > 0;
        },
        method: function (self) {
          var _self = self.getCurrentPage();
          var obj = self.get("_command");
          var r = this.pasteData ? this.pasteData : add(obj.clipboard);
          _self.clearSelected();
          this.pasteData = $.clone(r);
          r.forEach(function (state) {
            var right = state.model;
            if (right.x) {
              right.x += 10;
            }
            if (right.y) {
              right.y += 10;
            }
            _self.add(state.type, right);
          });
        },
        back: init
      });
      self.registerCommand("addGroup", {
        init: function () {
          this.addGroupId = $.guid();
        },
        enable: function (element) {
          return element.getCurrentPage().getSelected().length > 1;
        },
        method: function (s) {
          s.getCurrentPage().addGroup({
            id: this.addGroupId
          });
        },
        back: init
      });
      self.registerCommand("unGroup", {
        enable: function (element) {
          var items = element.getCurrentPage().getSelected();
          return 1 === items.length && items[0].isGroup;
        },
        method: "unGroup",
        back: init
      });
      self.registerCommand("delete", {
        getDeleteItems: function (context) {
          var model = context.getCurrentPage();
          var add_leek_popup = model.getGraph();
          var eCfgEl = this.itemIds
            ? this.itemIds.map(function (e) {
                return add_leek_popup.find(e);
              })
            : model.getSelected();
          return (eCfgEl = eCfgEl.filter(function (propertyDetails) {
            return false !== propertyDetails.deleteable;
          }));
        },
        enable: function (elem) {
          return this.getDeleteItems(elem).length > 0;
        },
        method: function (element) {
          var self = element.getCurrentPage();
          var n = this.getDeleteItems(element);
          var AniJSDefaultHelper = self.getGraph();
          self.emit("beforedelete", {
            items: n
          });
          $.each(n, function (e) {
            AniJSDefaultHelper.remove(e);
          });
          self.emit("afterdelete", {
            items: n
          });
          this.itemIds = n.map(function (elManager) {
            return elManager.getModel().id;
          });
        },
        back: init,
        shortcutCodes: ["Delete", "Backspace"]
      });
      self.registerCommand("selectAll", {
        method: function (s) {
          var n = s.getCurrentPage();
          n.getGraph()
            .getItems()
            .forEach(function (value) {
              n.setSelected(value, true);
            });
        },
        back: init,
        shortcutCodes: [["metaKey", "a"]]
      });
      self.registerCommand("toBack", {
        enable: _activate,
        method: "toBack",
        back: init
      });
      self.registerCommand("toFront", {
        enable: _activate,
        method: "toFront",
        back: init
      });
      self.registerCommand("clear", {
        enable: function (element) {
          return element.getCurrentPage().getItems().length > 0;
        },
        method: "clear",
        back: init
      });
      self.registerCommand("multiSelect", {
        enable: basicChangeElementTest,
        toMode: "multiSelect",
        execute: func,
        back: release
      });
      self.registerCommand("move", {
        enable: basicChangeElementTest,
        toMode: "move",
        execute: func,
        back: release
      });
      module.exports = self;
    },
    function (module, canCreateDiscussions, factory) {
      module.exports = factory(2);
    },
    function (canCreateDiscussions, d, n) {
      /**
       * @param {!Object} params
       * @return {undefined}
       */
      function render(params) {
        var graph = params.graph;
        var card = params.bpmn;
        var event = params.ev;
        var availableConnectionSources = params.backUpCursor;
        var node = event.item;
        var container = node.model.controlPoints;
        var that = Object(p.e)(
          {
            x: event.x,
            y: event.y
          },
          container
        );
        var index = that.index;
        var vertical = that.vertical;
        if (null != index) {
          if (availableConnectionSources) {
            node._cursor = card.getGraph().getMouseEventWrapper().style.cursor;
          }
          graph.update(node, {
            hold: {
              index: index,
              vertical: vertical
            }
          });
          if (vertical) {
            card.css({
              cursor: "col-resize"
            });
          } else {
            card.css({
              cursor: "row-resize"
            });
          }
        }
      }
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      function activate(data) {
        var root = data.graph;
        var title = data.bpmn;
        var o = data.item;
        if (o._cursor) {
          title.css({
            cursor: o._cursor
          });
        }
        delete o._cursor;
        root.update(o, {
          hold: void 0
        });
      }
      /**
       * @param {?} event
       * @param {!Object} item
       * @return {undefined}
       */
      function effect_helper_image_explode(event, item) {
        var record = item.item;
        event.update(record, {
          lastMouse: {
            x: item.x,
            y: item.y
          }
        });
      }
      /**
       * @param {!Object} s
       * @return {undefined}
       */
      function setupAWSconfig(s) {
        var g = s.graph;
        var v = s.item;
        g.update(v, {
          lastMouse: void 0,
          moveDelta: void 0
        });
      }
      /**
       * @param {?} fn
       * @param {!Object} that
       * @param {!Object} event
       * @return {undefined}
       */
      function update(fn, that, event) {
        var r;
        /** @type {({x: number, y: number})} */
        r =
          that.model && that.model.hold && that.model.hold.vertical
            ? {
                x: event.x - that.model.lastMouse.x,
                y: 0
              }
            : {
                x: 0,
                y: event.y - that.model.lastMouse.y
              };
        fn.update(that, {
          edgeMoved: r,
          modifiedByMouse: true
        });
      }
      /**
       * @param {!Object} object
       * @param {string} name
       * @param {!Array} change
       * @return {?}
       */
      function set(object, name, change) {
        var ai_waypoints;
        var node = object.model;
        var index = name || node.hold.index;
        var a = node.controlPoints;
        if (null === change) {
          change = node.hold.vertical;
        }
        /** @type {!Array} */
        var args = [];
        return (
          index >= 2 &&
            (change
              ? Math.abs(a[index - 2].x - a[index].x) <= 3 &&
                ((ai_waypoints = [
                  {
                    x: a[index - 2].x,
                    y: a[index - 2].y
                  },
                  {
                    x: a[index - 2].x,
                    y: a[index + 1].y
                  }
                ]),
                args.push(index - 1, index),
                (node.hold.index = index - 2),
                (node.controlPoints[index + 1].x = a[index - 2].x))
              : Math.abs(a[index - 2].y - a[index].y) <= 3 &&
                ((ai_waypoints = [
                  {
                    x: a[index - 2].x,
                    y: a[index - 2].y
                  },
                  {
                    x: a[index + 1].x,
                    y: a[index - 2].y
                  }
                ]),
                args.push(index - 1, index),
                (node.hold.index = index - 2),
                (node.controlPoints[index + 1].y = a[index - 2].y))),
          index <= a.length - 4 &&
            (change
              ? Math.abs(a[index].x - a[index + 2].x) <= 3 &&
                (ai_waypoints
                  ? ((ai_waypoints[1] = {
                      x: a[index - 2].x,
                      y: a[index + 3].y
                    }),
                    (node.controlPoints[index + 3].x = a[index - 2].x))
                  : ((ai_waypoints = [
                      {
                        x: a[index + 3].x,
                        y: a[index].y
                      },
                      {
                        x: a[index + 3].x,
                        y: a[index + 3].y
                      }
                    ]),
                    (node.controlPoints[index].x = a[index + 3].x)),
                args.push(index + 1, index + 2))
              : Math.abs(a[index].y - a[index + 2].y) <= 3 &&
                (ai_waypoints
                  ? ((ai_waypoints[1] = {
                      x: a[index + 3].x,
                      y: a[index - 2].y
                    }),
                    (node.controlPoints[index + 3].y = a[index - 2].y))
                  : ((ai_waypoints = [
                      {
                        x: a[index].x,
                        y: a[index + 3].y
                      },
                      {
                        x: a[index + 3].x,
                        y: a[index + 3].y
                      }
                    ]),
                    (node.controlPoints[index].y = a[index + 3].y)),
                args.push(index + 1, index + 2))),
          args && args.length && a.splice(args[0], args.length),
          ai_waypoints
        );
      }
      n.r(d);
      n.d(d, "mouseEnterEdge", function () {
        return render;
      });
      n.d(d, "mouseLeaveEdge", function () {
        return activate;
      });
      n.d(d, "startMove", function () {
        return effect_helper_image_explode;
      });
      n.d(d, "endMove", function () {
        return setupAWSconfig;
      });
      n.d(d, "mouseMoveEdge", function () {
        return update;
      });
      n.d(d, "mergeLine", function () {
        return set;
      });
      var p = n(0);
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} pos
       * @return {?}
       */
      function fn(pos) {
        return (fn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (object) {
                return typeof object;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(pos);
      }
      /**
       * @param {!Array} name
       * @param {string} a
       * @return {?}
       */
      function compile(name, a) {
        return !a || ("object" !== fn(a) && "function" != typeof a)
          ? (function (data) {
              if (void 0 === data) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return data;
            })(name)
          : a;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function clone(type) {
        return (clone = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} y
       * @param {string} props
       * @return {undefined}
       */
      function t(y, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(y, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Function} x
       * @param {!Function} n
       * @param {!Function} a
       * @return {?}
       */
      function next(x, n, a) {
        return n && t(x.prototype, n), a && t(x, a), x;
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var token = require(27);
      var $ = require(6);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @param {?} opts
         * @return {?}
         */
        function t(opts) {
          var that;
          !(function (value, t) {
            if (!(value instanceof t)) {
              throw new TypeError("Cannot call a class as a function");
            }
          })(this, t);
          var options = (that = compile(this, clone(t).call(this))).getDefaultCfg();
          return (that._cfg = $.mix(true, {}, that._cfg, options, opts)), that;
        }
        return (
          (function (value, e) {
            if ("function" != typeof e && null !== e) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (e) {
              action(value, e);
            }
          })(t, token),
          next(t, [
            {
              key: "getDefaultCfg",
              value: function () {
                return {};
              }
            }
          ]),
          next(t, [
            {
              key: "get",
              value: function (p) {
                return this._cfg[p];
              }
            },
            {
              key: "set",
              value: function (property, newValue) {
                /** @type {!Object} */
                this._cfg[property] = newValue;
              }
            },
            {
              key: "destroy",
              value: function () {
                this._cfg = {};
                /** @type {boolean} */
                this.destroyed = true;
              }
            }
          ]),
          t
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var util = require(4);
      module.exports = (function (_style) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var object = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var o = Object.keys(object);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            o = o.concat(
              Object.getOwnPropertySymbols(object).filter(function (key) {
                return Object.getOwnPropertyDescriptor(object, key).enumerable;
              })
            );
          }
          o.forEach(function (prop) {
            _defineProperty(_style, prop, object[prop]);
          });
        }
        return _style;
      })({}, util, {
        getParallelEdges: function (a, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return a.getEdges().filter(function (elManager) {
            var value = elManager.getModel();
            return value.target === t.id || (n && value.source === t.id);
          });
        },
        object2array: function (obj) {
          /** @type {!Array} */
          var value = [];
          return (
            util.each(obj, function (fce) {
              value.push(fce);
            }),
            value
          );
        }
      });
    },
    function (module, canCreateDiscussions, n) {
      /**
       * @param {string} pos
       * @return {?}
       */
      function fn(pos) {
        return (fn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (object) {
                return typeof object;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(pos);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} current
       * @param {string} a
       * @return {?}
       */
      function compile(current, a) {
        return !a || ("object" !== fn(a) && "function" != typeof a)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(current)
          : a;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function wrap(type) {
        return (wrap = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var a = n(9);
      var p = n(2);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function f() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, f),
            compile(this, wrap(f).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, e) {
            if ("function" != typeof e && null !== e) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (e) {
              action(value, e);
            }
          })(f, a),
          (Constructor = f),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  name: "",
                  render: function () {
                    return "<button>satellite</button>";
                  },
                  bindEvent: function () {
                    return [];
                  }
                };
              }
            },
            {
              key: "_renderDOM",
              value: function () {
                var dom = p.createDOM(this.render(this.diagram));
                return (this.dom = dom), (dom.isSatellite = true), dom;
              }
            },
            {
              key: "getDOM",
              value: function () {
                return this.dom || this._renderDOM();
              }
            },
            {
              key: "init",
              value: function () {
                var element = this.getDOM();
                var cxmenu = this.diagram.getGraph().getGraphContainer();
                if (element) {
                  element.css({
                    position: "absolute",
                    visibility: "hidden"
                  });
                  cxmenu.appendChild(element);
                  if (element) {
                    this.bindEvent(element, this.diagram);
                  }
                }
              }
            },
            {
              key: "enable",
              value: function () {
                return true;
              }
            },
            {
              key: "show",
              value: function () {
                this.getDOM().show();
              }
            },
            {
              key: "hide",
              value: function () {
                this.getDOM().hide();
              }
            },
            {
              key: "isVisible",
              value: function () {
                return "hidden" !== this.getDOM().style.visibility;
              }
            },
            {
              key: "destroy",
              value: function () {
                var events = this.events;
                if (events) {
                  events.forEach(function (inventoryService) {
                    inventoryService.remove();
                  });
                }
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          f
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, factory) {
      module.exports = factory(2);
    },
    function (module, canCreateDiscussions, require) {
      var exports = require(26);
      var _ = require(6);
      var controller = require(15);
      require(7);
      exports.Editor = exports;
      exports.Util = _;
      exports.Diagram = require(16);
      exports.Page = require(1);
      exports.Flow = require(95);
      exports.Koni = require(102);
      exports.Mind = require(107);
      exports.Toolbar = require(121);
      exports.Contextmenu = require(122);
      exports.Command = require(15);
      exports.BPMN = require(123);
      exports.registerBehaviour = exports.Page.registerBehaviour;
      exports.registerNode = exports.Page.registerNode;
      exports.registerEdge = exports.Page.registerEdge;
      exports.registerGroup = exports.Page.registerGroup;
      exports.registerGuide = exports.Page.registerGuide;
      exports.registerCommand = controller.registerCommand;
      module.exports = exports;
    },
    function (module, canCreateDiscussions, __webpack_require__) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} s
       * @param {string} o
       * @return {?}
       */
      function compile(s, o) {
        return !o || ("object" !== next(o) && "function" != typeof o)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(s)
          : o;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var Ching = __webpack_require__(21);
      var _ = __webpack_require__(6);
      var context = __webpack_require__(15);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function t() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, t),
            compile(this, fn(t).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (superClass) {
              action(value, superClass);
            }
          })(t, Ching),
          (Constructor = t),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  _components: [],
                  _command: {
                    zoomDelta: 0.1,
                    queue: [],
                    current: 0,
                    clipboard: []
                  }
                };
              }
            },
            {
              key: "_getComponentsBy",
              value: function (e) {
                return this.get("_components").filter(e);
              }
            },
            {
              key: "_bindCommands",
              value: function (e) {
                var $scope = this;
                _.each(e, function (form) {
                  var data = form.dataset;
                  var c = data.command;
                  if (context[c]) {
                    _.addEventListener(form, "click", function () {
                      $scope.getCurrentPage().focusGraphWrapper();
                      $scope.executeCommand(c, data);
                    });
                  } else {
                    console.warn("\u8bf7\u8bbe\u7f6e\u6709\u6548\u7684\u547d\u4ee4\uff01");
                  }
                });
              }
            },
            {
              key: "getCommands",
              value: function () {
                return this.get("_command").queue;
              }
            },
            {
              key: "getCurrentCommand",
              value: function () {
                var e = this.get("_command");
                return e.queue[e.current - 1];
              }
            },
            {
              key: "executeCommand",
              value: function (method, args) {
                if (_.isString(method)) {
                  context.execute(method, this, args);
                } else {
                  context.execute(
                    "common",
                    this,
                    {
                      method: method
                    },
                    args
                  );
                }
              }
            },
            {
              key: "commandEnable",
              value: function (id) {
                return context.enable(id, this);
              }
            },
            {
              key: "setCommandDOMenable",
              value: function () {
                var callback = this;
                var toolbar = this.getComponentsByType("toolbar");
                var o = this.getComponentsByType("contextmenu");
                /** @type {!Array} */
                var r = [];
                toolbar.forEach(function (canCreateDiscussions) {
                  _.each(canCreateDiscussions.getCommandDoms(), function (e) {
                    r.push(e);
                  });
                });
                o.forEach(function (canCreateDiscussions) {
                  _.each(canCreateDiscussions.getCommandDoms(), function (e) {
                    r.push(e);
                  });
                });
                _.each(r, function (details) {
                  var value = details.dataset.command;
                  if (context.enable(value, callback)) {
                    details.classList.remove("disable");
                  } else {
                    details.classList.add("disable");
                  }
                });
              }
            },
            {
              key: "_onPageStatusChange",
              value: function () {
                this.setCommandDOMenable();
              }
            },
            {
              key: "_afterAddContextmenu",
              value: function () {
                if (this.getCurrentPage()) {
                  this.setCommandDOMenable();
                }
              }
            },
            {
              key: "_afterAddPage",
              value: function (model) {
                var form = this;
                this.setCommandDOMenable();
                model.on("statuschange", function (e) {
                  form._onPageStatusChange(e);
                });
                model.on("mousedown", function () {
                  form.getComponentsByType("contextmenu").forEach(function (EmptyContentCollectionOverlay) {
                    EmptyContentCollectionOverlay.hide();
                  });
                });
                model.on("contextmenu", function (params) {
                  var o = form.getComponentsByType("contextmenu");
                  var node = model.getGraph().getCanvas().get("el");
                  var options = _.getBoundingClientRect(node);
                  var a = {
                    x: params.x,
                    y: params.y
                  };
                  var category = params.item;
                  if (category && !category.isSelected) {
                    model.clearSelected();
                    model.setSelected(params.item, true);
                  }
                  form.set("contextmenuPoint", a);
                  params.domEvent.preventDefault();
                  o.forEach(function (b) {
                    b.show();
                    b.contextmenuPoint = a;
                    b.move(options.left + params.domX, options.top + params.domY);
                  });
                });
                model.on("statuschange", function (item) {
                  form.getComponentsByType("contextmenu").forEach(function (res) {
                    res.switch(item.status);
                  });
                });
                this._bindShortcut(model);
              }
            },
            {
              key: "_beforeAddToolbar",
              value: function (recB) {
                var artistTrack = recB.getCommandDoms();
                this._bindCommands(artistTrack);
              }
            },
            {
              key: "_beforeAddContextmenu",
              value: function (props) {
                var artistTrack = props.getCommandDoms();
                props.bindEvent();
                this._bindCommands(artistTrack);
              }
            },
            {
              key: "getComponentsByType",
              value: function (name) {
                return this._getComponentsBy(function (joint) {
                  return joint.type === name;
                });
              }
            },
            {
              key: "getCurrentPage",
              value: function () {
                var id;
                var node = this.getComponentsByType("page");
                return (
                  node.every(function (data) {
                    return !data.isActived || ((id = data), false);
                  }),
                  id || (id = node[0]),
                  id
                );
              }
            },
            {
              key: "getComponents",
              value: function () {
                return this.get("_components");
              }
            },
            {
              key: "_shortcutEnable",
              value: function (att_id, data) {
                var source_addresses = att_id.shortcutCodes;
                var u = _.getKeyboradKey(data);
                /** @type {boolean} */
                var last_v = false;
                /** @type {number} */
                var i = 0;
                for (; i < source_addresses.length; i++) {
                  var source = source_addresses[i];
                  if (_.isArray(source)) {
                    var length = source.length;
                    /** @type {boolean} */
                    var id = true;
                    /** @type {number} */
                    var index = 0;
                    for (; index < length - 1; index++) {
                      if (!data[source[index]]) {
                        /** @type {boolean} */
                        id = false;
                        break;
                      }
                    }
                    if (!((source[length - 1] !== u && source[length - 1] !== _.lowerFirst(u)) || !id)) {
                      /** @type {boolean} */
                      last_v = true;
                    }
                  } else {
                    if (source === u) {
                      /** @type {boolean} */
                      last_v = true;
                    }
                  }
                  if (last_v) {
                    break;
                  }
                }
                return last_v;
              }
            },
            {
              key: "_bindShortcut",
              value: function (result) {
                var self = this;
                var typeFilters = result.get("shortcut");
                result.getGraph().on("keydown", function (params) {
                  var o = self.getComponentsByType("contextmenu");
                  var event = params.domEvent;
                  o.forEach(function (EmptyContentCollectionOverlay) {
                    EmptyContentCollectionOverlay.hide();
                  });
                  event.preventDefault();
                  var logArrays = context.list.filter(function (specifiedType) {
                    return specifiedType.shortcutCodes && typeFilters[specifiedType.name];
                  });
                  /** @type {number} */
                  var a = 0;
                  for (; a < logArrays.length; a++) {
                    var data = logArrays[a];
                    if (self._shortcutEnable(data, event)) {
                      return self.executeCommand(data.name), false;
                    }
                  }
                });
              }
            },
            {
              key: "add",
              value: function (field) {
                var t = this.get("_components");
                var n = _.upperFirst(field.type);
                field.editor = this;
                if (this["_beforeAdd" + n]) {
                  this["_beforeAdd" + n](field);
                }
                t.push(field);
                if (this["_afterAdd" + n]) {
                  this["_afterAdd" + n](field);
                }
              }
            },
            {
              key: "destroy",
              value: function () {
                this.get("_components").forEach(function (anAlertDialog) {
                  anAlertDialog.destroy();
                });
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          t
        );
      })();
      module.exports = storeMixin;
    },
    function (record, canCreateDiscussions, aFunctionName) {
      var result;
      !(function (scope) {
        /**
         * @return {undefined}
         */
        function Random() {}
        /**
         * @param {!Array} listeners
         * @param {!Function} listener
         * @return {?}
         */
        function indexOfListener(listeners, listener) {
          var i = listeners.length;
          for (; i--; ) {
            if (listeners[i].listener === listener) {
              return i;
            }
          }
          return -1;
        }
        /**
         * @param {string} name
         * @return {?}
         */
        function alias(name) {
          return function () {
            return this[name].apply(this, arguments);
          };
        }
        var proto = Random.prototype;
        var EventEmitter = scope.EventEmitter;
        /**
         * @param {(RegExp|string)} evt
         * @return {?}
         */
        proto.getListeners = function (evt) {
          var response;
          var key;
          var events = this._getEvents();
          if (evt instanceof RegExp) {
            for (key in ((response = {}), events)) {
              if (events.hasOwnProperty(key) && evt.test(key)) {
                response[key] = events[key];
              }
            }
          } else {
            response = events[evt] || (events[evt] = []);
          }
          return response;
        };
        /**
         * @param {!Array} listeners
         * @return {?}
         */
        proto.flattenListeners = function (listeners) {
          var i;
          /** @type {!Array} */
          var flatListeners = [];
          /** @type {number} */
          i = 0;
          for (; i < listeners.length; i = i + 1) {
            flatListeners.push(listeners[i].listener);
          }
          return flatListeners;
        };
        /**
         * @param {string} evt
         * @return {?}
         */
        proto.getListenersAsObject = function (evt) {
          var response;
          var listeners = this.getListeners(evt);
          return listeners instanceof Array && ((response = {})[evt] = listeners), response || listeners;
        };
        /**
         * @param {string} evt
         * @param {!Object} listener
         * @return {?}
         */
        proto.addListener = function (evt, listener) {
          if (
            !(function isFunction(obj) {
              return (
                "function" == typeof obj ||
                obj instanceof RegExp ||
                (!(!obj || "object" != typeof obj) && isFunction(obj.listener))
              );
            })(listener)
          ) {
            throw new TypeError("listener must be a function");
          }
          var key;
          var listeners = this.getListenersAsObject(evt);
          /** @type {boolean} */
          var listenerIsWrapped = "object" == typeof listener;
          for (key in listeners) {
            if (listeners.hasOwnProperty(key) && -1 === indexOfListener(listeners[key], listener)) {
              listeners[key].push(
                listenerIsWrapped
                  ? listener
                  : {
                      listener: listener,
                      once: false
                    }
              );
            }
          }
          return this;
        };
        proto.on = alias("addListener");
        /**
         * @param {string} evt
         * @param {!Function} listener
         * @return {?}
         */
        proto.addOnceListener = function (evt, listener) {
          return this.addListener(evt, {
            listener: listener,
            once: true
          });
        };
        proto.once = alias("addOnceListener");
        /**
         * @param {(RegExp|string)} evt
         * @return {?}
         */
        proto.defineEvent = function (evt) {
          return this.getListeners(evt), this;
        };
        /**
         * @param {!NodeList} evts
         * @return {?}
         */
        proto.defineEvents = function (evts) {
          /** @type {number} */
          var i = 0;
          for (; i < evts.length; i = i + 1) {
            this.defineEvent(evts[i]);
          }
          return this;
        };
        /**
         * @param {string} evt
         * @param {!Function} listener
         * @return {?}
         */
        proto.removeListener = function (evt, listener) {
          var index;
          var key;
          var listeners = this.getListenersAsObject(evt);
          for (key in listeners) {
            if (listeners.hasOwnProperty(key) && -1 !== (index = indexOfListener(listeners[key], listener))) {
              listeners[key].splice(index, 1);
            }
          }
          return this;
        };
        proto.off = alias("removeListener");
        /**
         * @param {!Array} evt
         * @param {!Array} listeners
         * @return {?}
         */
        proto.addListeners = function (evt, listeners) {
          return this.manipulateListeners(false, evt, listeners);
        };
        /**
         * @param {!Array} evt
         * @param {!Array} listeners
         * @return {?}
         */
        proto.removeListeners = function (evt, listeners) {
          return this.manipulateListeners(true, evt, listeners);
        };
        /**
         * @param {boolean} remove
         * @param {!Array} evt
         * @param {!Array} listeners
         * @return {?}
         */
        proto.manipulateListeners = function (remove, evt, listeners) {
          var i;
          var value;
          var single = remove ? this.removeListener : this.addListener;
          var multiple = remove ? this.removeListeners : this.addListeners;
          if ("object" != typeof evt || evt instanceof RegExp) {
            i = listeners.length;
            for (; i--; ) {
              single.call(this, evt, listeners[i]);
            }
          } else {
            for (i in evt) {
              if (evt.hasOwnProperty(i) && (value = evt[i])) {
                if ("function" == typeof value) {
                  single.call(this, i, value);
                } else {
                  multiple.call(this, i, value);
                }
              }
            }
          }
          return this;
        };
        /**
         * @param {(RegExp|string)} evt
         * @return {?}
         */
        proto.removeEvent = function (evt) {
          var key;
          /** @type {string} */
          var type = typeof evt;
          var events = this._getEvents();
          if ("string" === type) {
            delete events[evt];
          } else {
            if (evt instanceof RegExp) {
              for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                  delete events[key];
                }
              }
            } else {
              delete this._events;
            }
          }
          return this;
        };
        proto.removeAllListeners = alias("removeEvent");
        /**
         * @param {string} evt
         * @param {number} args
         * @return {?}
         */
        proto.emitEvent = function (evt, args) {
          var a;
          var listener;
          var i;
          var key;
          var listeners = this.getListenersAsObject(evt);
          for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
              a = listeners[key].slice(0);
              /** @type {number} */
              i = 0;
              for (; i < a.length; i++) {
                if (true === (listener = a[i]).once) {
                  this.removeListener(evt, listener.listener);
                }
                if (listener.listener.apply(this, args || []) === this._getOnceReturnValue()) {
                  this.removeListener(evt, listener.listener);
                }
              }
            }
          }
          return this;
        };
        proto.trigger = alias("emitEvent");
        /**
         * @param {string} type
         * @return {?}
         */
        proto.emit = function (type) {
          /** @type {!Array<?>} */
          var args = Array.prototype.slice.call(arguments, 1);
          return this.emitEvent(type, args);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        proto.setOnceReturnValue = function (value) {
          return (this._onceReturnValue = value), this;
        };
        /**
         * @return {?}
         */
        proto._getOnceReturnValue = function () {
          return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
        };
        /**
         * @return {?}
         */
        proto._getEvents = function () {
          return this._events || (this._events = {});
        };
        /**
         * @return {?}
         */
        Random.noConflict = function () {
          return (scope.EventEmitter = EventEmitter), Random;
        };
        if (
          !(
            void 0 ===
            (result = function () {
              return Random;
            }.call(scope, aFunctionName, scope, record))
          )
        ) {
          record.exports = result;
        }
      })("undefined" != typeof window ? window : this || {});
    },
    function (mixin, canCreateDiscussions, require) {
      var Util = require(7).Util;
      mixin.exports = {
        getGroupIconPath: function () {
          return "M9.75,9.60000014 L3.75,9.60000014 C3.33578644,9.60000014 3,9.2865995 3,8.90000022 C3,8.51340093 3.33578644,8.20000029 3.75,8.20000029 L9.75,8.20000029 C10.1642136,8.20000029 10.5,8.51340093 10.5,8.90000022 C10.5,9.2865995 10.1642136,9.60000014 9.75,9.60000014 M3,11.6999999 C3,11.3134006 3.33578644,11 3.75,11 L6.75,11 C7.16421356,11 7.5,11.3134006 7.5,11.6999999 C7.5,12.0865992 7.16421356,12.3999999 6.75,12.3999999 L3.75,12.3999999 C3.33578644,12.3999999 3,12.0865992 3,11.6999999 M3.75,13.7999997 L6.75,13.7999997 C7.16421356,13.7999997 7.5,14.1134004 7.5,14.4999996 C7.5,14.8865989 7.16421356,15.1999996 6.75,15.1999996 L3.75,15.1999996 C3.33578644,15.1999996 3,14.8865989 3,14.4999996 C3,14.1134004 3.33578644,13.7999997 3.75,13.7999997 M16.4985,4.00000072 L1.5015,4.00000072 C0.674533504,3.99922416 0.00289396564,4.6232696 0,5.39510058 L0,16.6048994 C0.00289396564,17.3767304 0.674533504,18.0007758 1.5015,17.9999993 L16.4985,17.9999993 C17.3254665,18.0007758 17.997106,17.3767304 18,16.6048994 L18,5.39510058 C17.997106,4.6232696 17.3254665,3.99922416 16.4985,4.00000072M19,13.9999993 L19,3 L5,3 L5,1.39510058 C5.00289397,0.623269599 5.6745335,-0.00077583787 6.5015,7.23978642e-07 L21.4985,7.23978642e-07 C22.3254665,-0.00077583787 22.997106,0.623269599 23,1.39510058 L23,12.6048994 C22.997106,13.3767304 22.3254665,14.0007758 21.4985,13.9999993 L19,13.9999993 Z";
        },
        getCollapsedButtonPath: function () {
          return Util.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7";
        },
        getExpandedButtonPath: function () {
          return Util.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7M7,3L7,11";
        }
      };
    },
    function (canCreateDiscussions, exports, groupingFunction) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.presetPrimaryColors = exports.presetPalettes = exports.generate = void 0;
      var obj;
      var data = groupingFunction(30);
      var self =
        (obj = data) && obj.__esModule
          ? obj
          : {
              default: obj
            };
      var colors = {
        red: "#F5222D",
        volcano: "#FA541C",
        orange: "#FA8C16",
        gold: "#FAAD14",
        yellow: "#FADB14",
        lime: "#A0D911",
        green: "#52C41A",
        cyan: "#13C2C2",
        blue: "#1890FF",
        geekblue: "#2F54EB",
        purple: "#722ED1",
        magenta: "#EB2F96",
        grey: "#666666"
      };
      var init_list = {};
      Object.keys(colors).forEach(function (v) {
        init_list[v] = (0, self.default)(colors[v]);
      });
      exports.generate = self.default;
      exports.presetPalettes = init_list;
      exports.presetPrimaryColors = colors;
    },
    function (canCreateDiscussions, t, builder) {
      /**
       * @param {!Window} msg
       * @param {number} t
       * @param {boolean} err
       * @return {?}
       */
      function callback(msg, t, err) {
        var rot = void 0;
        return (
          (rot =
            Math.round(msg.h) >= 60 && Math.round(msg.h) <= 240
              ? err
                ? Math.round(msg.h) - angleToDraw * t
                : Math.round(msg.h) + angleToDraw * t
              : err
              ? Math.round(msg.h) + angleToDraw * t
              : Math.round(msg.h) - angleToDraw * t) < 0
            ? (rot = rot + 360)
            : rot >= 360 && (rot = rot - 360),
          rot
        );
      }
      /**
       * @param {!Object} date
       * @param {number} y
       * @param {boolean} x
       * @return {?}
       */
      function render(date, y, x) {
        if (0 === date.h && 0 === date.s) {
          return date.s;
        }
        var xSpaced = void 0;
        return (
          (xSpaced = x
            ? Math.round(100 * date.s) - i * y
            : y === auto
            ? Math.round(100 * date.s) + i
            : Math.round(100 * date.s) + rawRowLength * y) > 100 && (xSpaced = 100),
          x && y === undefined && xSpaced > 10 && (xSpaced = 10),
          xSpaced < 6 && (xSpaced = 6),
          xSpaced
        );
      }
      /**
       * @param {!Object} x
       * @param {number} y
       * @param {boolean} value
       * @return {?}
       */
      function cb(x, y, value) {
        return value ? Math.round(100 * x.v) + blipTranslate * y : Math.round(100 * x.v) - mesh_size_y * y;
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      /**
       * @param {?} params
       * @return {?}
       */
      t.default = function (params) {
        /** @type {!Array} */
        var services = [];
        var c = (0, ret.default)(params);
        /** @type {number} */
        var y = undefined;
        for (; y > 0; y = y - 1) {
          var x = c.toHsv();
          var popupService = (0, ret.default)({
            h: callback(x, y, true),
            s: render(x, y, true),
            v: cb(x, y, true)
          }).toHexString();
          services.push(popupService);
        }
        services.push(c.toHexString());
        /** @type {number} */
        var i = 1;
        for (; i <= auto; i = i + 1) {
          var x = c.toHsv();
          var popupService = (0, ret.default)({
            h: callback(x, i),
            s: render(x, i),
            v: cb(x, i)
          }).toHexString();
          services.push(popupService);
        }
        return services;
      };
      var $1;
      var event = builder(31);
      var ret =
        ($1 = event) && $1.__esModule
          ? $1
          : {
              default: $1
            };
      /** @type {number} */
      var angleToDraw = 2;
      /** @type {number} */
      var i = 16;
      /** @type {number} */
      var rawRowLength = 5;
      /** @type {number} */
      var blipTranslate = 5;
      /** @type {number} */
      var mesh_size_y = 15;
      /** @type {number} */
      var undefined = 5;
      /** @type {number} */
      var auto = 4;
    },
    function (module, t, aFunctionName) {
      var result;
      !(function (math) {
        /**
         * @param {string} color
         * @param {!Object} opts
         * @return {?}
         */
        function tinycolor(color, opts) {
          if (((opts = opts || {}), (color = color || "") instanceof tinycolor)) {
            return color;
          }
          if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
          }
          var rgb = (function (color) {
            var rgb = {
              r: 0,
              g: 0,
              b: 0
            };
            /** @type {number} */
            var a = 1;
            /** @type {null} */
            var s = null;
            /** @type {null} */
            var v = null;
            /** @type {null} */
            var l = null;
            /** @type {boolean} */
            var ok = false;
            /** @type {boolean} */
            var format = false;
            if ("string" == typeof color) {
              color = (function (color) {
                /** @type {string} */
                color = color.replace(trimLeft, "").replace(trimRightRegExp, "").toLowerCase();
                var match;
                /** @type {boolean} */
                var named = false;
                if (names[color]) {
                  color = names[color];
                  /** @type {boolean} */
                  named = true;
                } else {
                  if ("transparent" == color) {
                    return {
                      r: 0,
                      g: 0,
                      b: 0,
                      a: 0,
                      format: "name"
                    };
                  }
                }
                if ((match = matchers.rgb.exec(color))) {
                  return {
                    r: match[1],
                    g: match[2],
                    b: match[3]
                  };
                }
                if ((match = matchers.rgba.exec(color))) {
                  return {
                    r: match[1],
                    g: match[2],
                    b: match[3],
                    a: match[4]
                  };
                }
                if ((match = matchers.hsl.exec(color))) {
                  return {
                    h: match[1],
                    s: match[2],
                    l: match[3]
                  };
                }
                if ((match = matchers.hsla.exec(color))) {
                  return {
                    h: match[1],
                    s: match[2],
                    l: match[3],
                    a: match[4]
                  };
                }
                if ((match = matchers.hsv.exec(color))) {
                  return {
                    h: match[1],
                    s: match[2],
                    v: match[3]
                  };
                }
                if ((match = matchers.hsva.exec(color))) {
                  return {
                    h: match[1],
                    s: match[2],
                    v: match[3],
                    a: match[4]
                  };
                }
                if ((match = matchers.hex8.exec(color))) {
                  return {
                    r: parseHex(match[1]),
                    g: parseHex(match[2]),
                    b: parseHex(match[3]),
                    a: parseArrayElement(match[4]),
                    format: named ? "name" : "hex8"
                  };
                }
                if ((match = matchers.hex6.exec(color))) {
                  return {
                    r: parseHex(match[1]),
                    g: parseHex(match[2]),
                    b: parseHex(match[3]),
                    format: named ? "name" : "hex"
                  };
                }
                if ((match = matchers.hex4.exec(color))) {
                  return {
                    r: parseHex(match[1] + "" + match[1]),
                    g: parseHex(match[2] + "" + match[2]),
                    b: parseHex(match[3] + "" + match[3]),
                    a: parseArrayElement(match[4] + "" + match[4]),
                    format: named ? "name" : "hex8"
                  };
                }
                if ((match = matchers.hex3.exec(color))) {
                  return {
                    r: parseHex(match[1] + "" + match[1]),
                    g: parseHex(match[2] + "" + match[2]),
                    b: parseHex(match[3] + "" + match[3]),
                    format: named ? "name" : "hex"
                  };
                }
                return false;
              })(color);
            }
            if ("object" == typeof color) {
              if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
                r = color.r;
                g = color.g;
                b = color.b;
                rgb = {
                  r: 255 * bound01(r, 255),
                  g: 255 * bound01(g, 255),
                  b: 255 * bound01(b, 255)
                };
                /** @type {boolean} */
                ok = true;
                /** @type {string} */
                format = "%" === String(color.r).substr(-1) ? "prgb" : "rgb";
              } else {
                if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
                  s = convertToPercentage(color.s);
                  v = convertToPercentage(color.v);
                  rgb = (function (h, s, v) {
                    /** @type {number} */
                    h = 6 * bound01(h, 360);
                    s = bound01(s, 100);
                    v = bound01(v, 100);
                    /** @type {number} */
                    var i = math.floor(h);
                    /** @type {number} */
                    var f = h - i;
                    /** @type {number} */
                    var p = v * (1 - s);
                    /** @type {number} */
                    var q = v * (1 - f * s);
                    /** @type {number} */
                    var t = v * (1 - (1 - f) * s);
                    /** @type {number} */
                    var mod = i % 6;
                    return {
                      r: 255 * [v, q, p, p, t, v][mod],
                      g: 255 * [t, v, v, q, p, p][mod],
                      b: 255 * [p, p, t, v, v, q][mod]
                    };
                  })(color.h, s, v);
                  /** @type {boolean} */
                  ok = true;
                  /** @type {string} */
                  format = "hsv";
                } else {
                  if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
                    s = convertToPercentage(color.s);
                    l = convertToPercentage(color.l);
                    rgb = (function (h, s, l) {
                      /**
                       * @param {number} q
                       * @param {number} p
                       * @param {number} t
                       * @return {?}
                       */
                      function hue2rgb(q, p, t) {
                        return (
                          t < 0 && (t = t + 1),
                          t > 1 && (t = t - 1),
                          t < 1 / 6 ? q + 6 * (p - q) * t : t < 0.5 ? p : t < 2 / 3 ? q + (p - q) * (2 / 3 - t) * 6 : q
                        );
                      }
                      var r;
                      var g;
                      var b;
                      if (((h = bound01(h, 360)), (s = bound01(s, 100)), (l = bound01(l, 100)), 0 === s)) {
                        r = g = b = l;
                      } else {
                        /** @type {number} */
                        var p = l < 0.5 ? l * (1 + s) : l + s - l * s;
                        /** @type {number} */
                        var q = 2 * l - p;
                        r = hue2rgb(q, p, h + 1 / 3);
                        g = hue2rgb(q, p, h);
                        b = hue2rgb(q, p, h - 1 / 3);
                      }
                      return {
                        r: 255 * r,
                        g: 255 * g,
                        b: 255 * b
                      };
                    })(color.h, s, l);
                    /** @type {boolean} */
                    ok = true;
                    /** @type {string} */
                    format = "hsl";
                  }
                }
              }
              if (color.hasOwnProperty("a")) {
                a = color.a;
              }
            }
            var r;
            var g;
            var b;
            return (
              (a = boundAlpha(a)),
              {
                ok: ok,
                format: color.format || format,
                r: mathMin(255, mathMax(rgb.r, 0)),
                g: mathMin(255, mathMax(rgb.g, 0)),
                b: mathMin(255, mathMax(rgb.b, 0)),
                a: a
              }
            );
          })(color);
          /** @type {string} */
          this._originalInput = color;
          this._r = rgb.r;
          this._g = rgb.g;
          this._b = rgb.b;
          this._a = rgb.a;
          /** @type {number} */
          this._roundA = mathRound(100 * this._a) / 100;
          this._format = opts.format || rgb.format;
          this._gradientType = opts.gradientType;
          if (this._r < 1) {
            /** @type {number} */
            this._r = mathRound(this._r);
          }
          if (this._g < 1) {
            /** @type {number} */
            this._g = mathRound(this._g);
          }
          if (this._b < 1) {
            /** @type {number} */
            this._b = mathRound(this._b);
          }
          this._ok = rgb.ok;
          /** @type {number} */
          this._tc_id = tinyCounter++;
        }
        /**
         * @param {number} r
         * @param {number} g
         * @param {number} b
         * @return {?}
         */
        function rgbToHsl(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var h;
          var s;
          /** @type {number} */
          var max = mathMax(r, g, b);
          /** @type {number} */
          var min = mathMin(r, g, b);
          /** @type {number} */
          var l = (max + min) / 2;
          if (max == min) {
            /** @type {number} */
            h = s = 0;
          } else {
            /** @type {number} */
            var d = max - min;
            switch (((s = l > 0.5 ? d / (2 - max - min) : d / (max + min)), max)) {
              case r:
                /** @type {number} */
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                /** @type {number} */
                h = (b - r) / d + 2;
                break;
              case b:
                /** @type {number} */
                h = (r - g) / d + 4;
            }
            /** @type {number} */
            h = h / 6;
          }
          return {
            h: h,
            s: s,
            l: l
          };
        }
        /**
         * @param {number} r
         * @param {number} g
         * @param {number} b
         * @return {?}
         */
        function rgbToHsv(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var spacing;
          var s;
          /** @type {number} */
          var max = mathMax(r, g, b);
          /** @type {number} */
          var min = mathMin(r, g, b);
          /** @type {number} */
          var V = max;
          /** @type {number} */
          var d = max - min;
          if (((s = 0 === max ? 0 : d / max), max == min)) {
            /** @type {number} */
            spacing = 0;
          } else {
            switch (max) {
              case r:
                /** @type {number} */
                spacing = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                /** @type {number} */
                spacing = (b - r) / d + 2;
                break;
              case b:
                /** @type {number} */
                spacing = (r - g) / d + 4;
            }
            /** @type {number} */
            spacing = spacing / 6;
          }
          return {
            h: spacing,
            s: s,
            v: V
          };
        }
        /**
         * @param {?} g
         * @param {?} b
         * @param {?} r
         * @param {string} allow3Char
         * @return {?}
         */
        function rgbToHex(g, b, r, allow3Char) {
          /** @type {!Array} */
          var cssArrt = [
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16)),
            pad2(mathRound(r).toString(16))
          ];
          return allow3Char &&
            cssArrt[0].charAt(0) == cssArrt[0].charAt(1) &&
            cssArrt[1].charAt(0) == cssArrt[1].charAt(1) &&
            cssArrt[2].charAt(0) == cssArrt[2].charAt(1)
            ? cssArrt[0].charAt(0) + cssArrt[1].charAt(0) + cssArrt[2].charAt(0)
            : cssArrt.join("");
        }
        /**
         * @param {?} g
         * @param {?} r
         * @param {?} b
         * @param {?} a
         * @return {?}
         */
        function rgbaToArgbHex(g, r, b, a) {
          return [
            pad2(convertDecimalToHex(a)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(b).toString(16))
          ].join("");
        }
        /**
         * @param {string} color
         * @param {number} amount
         * @return {?}
         */
        function desaturate(color, amount) {
          amount = 0 === amount ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          return (hsl.s -= amount / 100), (hsl.s = clamp01(hsl.s)), tinycolor(hsl);
        }
        /**
         * @param {string} color
         * @param {number} amount
         * @return {?}
         */
        function saturate(color, amount) {
          amount = 0 === amount ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          return (hsl.s += amount / 100), (hsl.s = clamp01(hsl.s)), tinycolor(hsl);
        }
        /**
         * @param {string} color
         * @return {?}
         */
        function greyscale(color) {
          return tinycolor(color).desaturate(100);
        }
        /**
         * @param {string} color
         * @param {number} amount
         * @return {?}
         */
        function darken(color, amount) {
          amount = 0 === amount ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          return (hsl.l += amount / 100), (hsl.l = clamp01(hsl.l)), tinycolor(hsl);
        }
        /**
         * @param {string} color
         * @param {number} amount
         * @return {?}
         */
        function brighten(color, amount) {
          amount = 0 === amount ? 0 : amount || 10;
          var rgb = tinycolor(color).toRgb();
          return (
            (rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound((-amount / 100) * 255)))),
            (rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound((-amount / 100) * 255)))),
            (rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound((-amount / 100) * 255)))),
            tinycolor(rgb)
          );
        }
        /**
         * @param {string} color
         * @param {number} amount
         * @return {?}
         */
        function lighten(color, amount) {
          amount = 0 === amount ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          return (hsl.l -= amount / 100), (hsl.l = clamp01(hsl.l)), tinycolor(hsl);
        }
        /**
         * @param {string} color
         * @param {?} amount
         * @return {?}
         */
        function spin(color, amount) {
          var hsl = tinycolor(color).toHsl();
          /** @type {number} */
          var hue = (hsl.h + amount) % 360;
          return (hsl.h = hue < 0 ? 360 + hue : hue), tinycolor(hsl);
        }
        /**
         * @param {string} color
         * @return {?}
         */
        function complement(color) {
          var hsl = tinycolor(color).toHsl();
          return (hsl.h = (hsl.h + 180) % 360), tinycolor(hsl);
        }
        /**
         * @param {string} color
         * @return {?}
         */
        function triad(color) {
          var hsl = tinycolor(color).toHsl();
          var h = hsl.h;
          return [
            tinycolor(color),
            tinycolor({
              h: (h + 120) % 360,
              s: hsl.s,
              l: hsl.l
            }),
            tinycolor({
              h: (h + 240) % 360,
              s: hsl.s,
              l: hsl.l
            })
          ];
        }
        /**
         * @param {string} color
         * @return {?}
         */
        function tetrad(color) {
          var hsl = tinycolor(color).toHsl();
          var h = hsl.h;
          return [
            tinycolor(color),
            tinycolor({
              h: (h + 90) % 360,
              s: hsl.s,
              l: hsl.l
            }),
            tinycolor({
              h: (h + 180) % 360,
              s: hsl.s,
              l: hsl.l
            }),
            tinycolor({
              h: (h + 270) % 360,
              s: hsl.s,
              l: hsl.l
            })
          ];
        }
        /**
         * @param {string} color
         * @return {?}
         */
        function splitcomplement(color) {
          var hsl = tinycolor(color).toHsl();
          var h = hsl.h;
          return [
            tinycolor(color),
            tinycolor({
              h: (h + 72) % 360,
              s: hsl.s,
              l: hsl.l
            }),
            tinycolor({
              h: (h + 216) % 360,
              s: hsl.s,
              l: hsl.l
            })
          ];
        }
        /**
         * @param {string} color
         * @param {number} results
         * @param {number} slices
         * @return {?}
         */
        function analogous(color, results, slices) {
          results = results || 6;
          slices = slices || 30;
          var hsl = tinycolor(color).toHsl();
          /** @type {number} */
          var part = 360 / slices;
          /** @type {!Array} */
          var ret = [tinycolor(color)];
          /** @type {number} */
          hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360;
          for (; --results; ) {
            /** @type {number} */
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
          }
          return ret;
        }
        /**
         * @param {string} color
         * @param {number} results
         * @return {?}
         */
        function monochromatic(color, results) {
          results = results || 6;
          var that = tinycolor(color).toHsv();
          var hash = that.h;
          var state = that.s;
          var v = that.v;
          /** @type {!Array} */
          var ret = [];
          /** @type {number} */
          var modification = 1 / results;
          for (; results--; ) {
            ret.push(
              tinycolor({
                h: hash,
                s: state,
                v: v
              })
            );
            /** @type {number} */
            v = (v + modification) % 1;
          }
          return ret;
        }
        /**
         * @param {number} a
         * @return {?}
         */
        function boundAlpha(a) {
          return (a = parseFloat(a)), (isNaN(a) || a < 0 || a > 1) && (a = 1), a;
        }
        /**
         * @param {number} n
         * @param {number} max
         * @return {?}
         */
        function bound01(n, max) {
          if (
            (function (a) {
              return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a);
            })(n)
          ) {
            /** @type {string} */
            n = "100%";
          }
          var processPercent = (function (a) {
            return "string" == typeof a && -1 != a.indexOf("%");
          })(n);
          return (
            (n = mathMin(max, mathMax(0, parseFloat(n)))),
            processPercent && (n = parseInt(n * max, 10) / 100),
            math.abs(n - max) < 1e-6 ? 1 : (n % max) / parseFloat(max)
          );
        }
        /**
         * @param {?} val
         * @return {?}
         */
        function clamp01(val) {
          return mathMin(1, mathMax(0, val));
        }
        /**
         * @param {string} start
         * @return {?}
         */
        function parseHex(start) {
          return parseInt(start, 16);
        }
        /**
         * @param {string} num
         * @return {?}
         */
        function pad2(num) {
          return 1 == num.length ? "0" + num : "" + num;
        }
        /**
         * @param {number} n
         * @return {?}
         */
        function convertToPercentage(n) {
          return n <= 1 && (n = 100 * n + "%"), n;
        }
        /**
         * @param {?} d
         * @return {?}
         */
        function convertDecimalToHex(d) {
          return math.round(255 * parseFloat(d)).toString(16);
        }
        /**
         * @param {string} value
         * @return {?}
         */
        function parseArrayElement(value) {
          return parseHex(value) / 255;
        }
        /**
         * @param {?} color
         * @return {?}
         */
        function isValidCSSUnit(color) {
          return !!matchers.CSS_UNIT.exec(color);
        }
        /** @type {!RegExp} */
        var trimLeft = /^\s+/;
        /** @type {!RegExp} */
        var trimRightRegExp = /\s+$/;
        /** @type {number} */
        var tinyCounter = 0;
        /** @type {function(?): number} */
        var mathRound = math.round;
        /** @type {function(...?): number} */
        var mathMin = math.min;
        /** @type {function(...?): number} */
        var mathMax = math.max;
        /** @type {function(): number} */
        var mathRandom = math.random;
        tinycolor.prototype = {
          isDark: function () {
            return this.getBrightness() < 128;
          },
          isLight: function () {
            return !this.isDark();
          },
          isValid: function () {
            return this._ok;
          },
          getOriginalInput: function () {
            return this._originalInput;
          },
          getFormat: function () {
            return this._format;
          },
          getAlpha: function () {
            return this._a;
          },
          getBrightness: function () {
            var rgb = this.toRgb();
            return (299 * rgb.r + 587 * rgb.g + 114 * rgb.b) / 1e3;
          },
          getLuminance: function () {
            var a;
            var b;
            var n;
            var rgb = this.toRgb();
            return (
              (a = rgb.r / 255),
              (b = rgb.g / 255),
              (n = rgb.b / 255),
              0.2126 * (a <= 0.03928 ? a / 12.92 : math.pow((a + 0.055) / 1.055, 2.4)) +
                0.7152 * (b <= 0.03928 ? b / 12.92 : math.pow((b + 0.055) / 1.055, 2.4)) +
                0.0722 * (n <= 0.03928 ? n / 12.92 : math.pow((n + 0.055) / 1.055, 2.4))
            );
          },
          setAlpha: function (a) {
            return (this._a = boundAlpha(a)), (this._roundA = mathRound(100 * this._a) / 100), this;
          },
          toHsv: function () {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return {
              h: 360 * hsv.h,
              s: hsv.s,
              v: hsv.v,
              a: this._a
            };
          },
          toHsvString: function () {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            /** @type {number} */
            var v = mathRound(360 * hsv.h);
            /** @type {number} */
            var l = mathRound(100 * hsv.s);
            /** @type {number} */
            var h = mathRound(100 * hsv.v);
            return 1 == this._a
              ? "hsv(" + v + ", " + l + "%, " + h + "%)"
              : "hsva(" + v + ", " + l + "%, " + h + "%, " + this._roundA + ")";
          },
          toHsl: function () {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return {
              h: 360 * hsl.h,
              s: hsl.s,
              l: hsl.l,
              a: this._a
            };
          },
          toHslString: function () {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            /** @type {number} */
            var h = mathRound(360 * hsl.h);
            /** @type {number} */
            var l = mathRound(100 * hsl.s);
            /** @type {number} */
            var v = mathRound(100 * hsl.l);
            return 1 == this._a
              ? "hsl(" + h + ", " + l + "%, " + v + "%)"
              : "hsla(" + h + ", " + l + "%, " + v + "%, " + this._roundA + ")";
          },
          toHex: function (allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
          },
          toHexString: function (allow3Char) {
            return "#" + this.toHex(allow3Char);
          },
          toHex8: function (allow4Char) {
            return (function (left, g, r, a, allow4Char) {
              /** @type {!Array} */
              var cssArrt = [
                pad2(mathRound(left).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(r).toString(16)),
                pad2(convertDecimalToHex(a))
              ];
              if (
                allow4Char &&
                cssArrt[0].charAt(0) == cssArrt[0].charAt(1) &&
                cssArrt[1].charAt(0) == cssArrt[1].charAt(1) &&
                cssArrt[2].charAt(0) == cssArrt[2].charAt(1) &&
                cssArrt[3].charAt(0) == cssArrt[3].charAt(1)
              ) {
                return cssArrt[0].charAt(0) + cssArrt[1].charAt(0) + cssArrt[2].charAt(0) + cssArrt[3].charAt(0);
              }
              return cssArrt.join("");
            })(this._r, this._g, this._b, this._a, allow4Char);
          },
          toHex8String: function (allow4Char) {
            return "#" + this.toHex8(allow4Char);
          },
          toRgb: function () {
            return {
              r: mathRound(this._r),
              g: mathRound(this._g),
              b: mathRound(this._b),
              a: this._a
            };
          },
          toRgbString: function () {
            return 1 == this._a
              ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")"
              : "rgba(" +
                  mathRound(this._r) +
                  ", " +
                  mathRound(this._g) +
                  ", " +
                  mathRound(this._b) +
                  ", " +
                  this._roundA +
                  ")";
          },
          toPercentageRgb: function () {
            return {
              r: mathRound(100 * bound01(this._r, 255)) + "%",
              g: mathRound(100 * bound01(this._g, 255)) + "%",
              b: mathRound(100 * bound01(this._b, 255)) + "%",
              a: this._a
            };
          },
          toPercentageRgbString: function () {
            return 1 == this._a
              ? "rgb(" +
                  mathRound(100 * bound01(this._r, 255)) +
                  "%, " +
                  mathRound(100 * bound01(this._g, 255)) +
                  "%, " +
                  mathRound(100 * bound01(this._b, 255)) +
                  "%)"
              : "rgba(" +
                  mathRound(100 * bound01(this._r, 255)) +
                  "%, " +
                  mathRound(100 * bound01(this._g, 255)) +
                  "%, " +
                  mathRound(100 * bound01(this._b, 255)) +
                  "%, " +
                  this._roundA +
                  ")";
          },
          toName: function () {
            return 0 === this._a
              ? "transparent"
              : !(this._a < 1) && (hexNames[rgbToHex(this._r, this._g, this._b, true)] || false);
          },
          toFilter: function (secondColor) {
            /** @type {string} */
            var imagescreate = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            /** @type {string} */
            var environmentNewImageButtonHref = imagescreate;
            /** @type {string} */
            var gradientType = this._gradientType ? "GradientType = 1, " : "";
            if (secondColor) {
              var s = tinycolor(secondColor);
              /** @type {string} */
              environmentNewImageButtonHref = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
            }
            return (
              "progid:DXImageTransform.Microsoft.gradient(" +
              gradientType +
              "startColorstr=" +
              imagescreate +
              ",endColorstr=" +
              environmentNewImageButtonHref +
              ")"
            );
          },
          toString: function (format) {
            /** @type {boolean} */
            var loadHyphenator = !!format;
            format = format || this._format;
            /** @type {boolean} */
            var formattedString = false;
            /** @type {boolean} */
            var r = this._a < 1 && this._a >= 0;
            return loadHyphenator ||
              !r ||
              ("hex" !== format &&
                "hex6" !== format &&
                "hex3" !== format &&
                "hex4" !== format &&
                "hex8" !== format &&
                "name" !== format)
              ? ("rgb" === format && (formattedString = this.toRgbString()),
                "prgb" === format && (formattedString = this.toPercentageRgbString()),
                ("hex" !== format && "hex6" !== format) || (formattedString = this.toHexString()),
                "hex3" === format && (formattedString = this.toHexString(true)),
                "hex4" === format && (formattedString = this.toHex8String(true)),
                "hex8" === format && (formattedString = this.toHex8String()),
                "name" === format && (formattedString = this.toName()),
                "hsl" === format && (formattedString = this.toHslString()),
                "hsv" === format && (formattedString = this.toHsvString()),
                formattedString || this.toHexString())
              : "name" === format && 0 === this._a
              ? this.toName()
              : this.toRgbString();
          },
          clone: function () {
            return tinycolor(this.toString());
          },
          _applyModification: function (fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            return (this._r = color._r), (this._g = color._g), (this._b = color._b), this.setAlpha(color._a), this;
          },
          lighten: function () {
            return this._applyModification(darken, arguments);
          },
          brighten: function () {
            return this._applyModification(brighten, arguments);
          },
          darken: function () {
            return this._applyModification(lighten, arguments);
          },
          desaturate: function () {
            return this._applyModification(desaturate, arguments);
          },
          saturate: function () {
            return this._applyModification(saturate, arguments);
          },
          greyscale: function () {
            return this._applyModification(greyscale, arguments);
          },
          spin: function () {
            return this._applyModification(spin, arguments);
          },
          _applyCombination: function (fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
          },
          analogous: function () {
            return this._applyCombination(analogous, arguments);
          },
          complement: function () {
            return this._applyCombination(complement, arguments);
          },
          monochromatic: function () {
            return this._applyCombination(monochromatic, arguments);
          },
          splitcomplement: function () {
            return this._applyCombination(splitcomplement, arguments);
          },
          triad: function () {
            return this._applyCombination(triad, arguments);
          },
          tetrad: function () {
            return this._applyCombination(tetrad, arguments);
          }
        };
        /**
         * @param {string} color
         * @param {!Object} opts
         * @return {?}
         */
        tinycolor.fromRatio = function (color, opts) {
          if ("object" == typeof color) {
            var conf_shortcuts_icon = {};
            var i;
            for (i in color) {
              if (color.hasOwnProperty(i)) {
                conf_shortcuts_icon[i] = "a" === i ? color[i] : convertToPercentage(color[i]);
              }
            }
            color = conf_shortcuts_icon;
          }
          return tinycolor(color, opts);
        };
        /**
         * @param {string} color1
         * @param {string} color2
         * @return {?}
         */
        tinycolor.equals = function (color1, color2) {
          return !(!color1 || !color2) && tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        /**
         * @return {?}
         */
        tinycolor.random = function () {
          return tinycolor.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
          });
        };
        /**
         * @param {boolean} value
         * @param {string} name
         * @param {number} a
         * @return {?}
         */
        tinycolor.mix = function (value, name, a) {
          a = 0 === a ? 0 : a || 50;
          var from = tinycolor(value).toRgb();
          var to = tinycolor(name).toRgb();
          /** @type {number} */
          var ratio = a / 100;
          return tinycolor({
            r: (to.r - from.r) * ratio + from.r,
            g: (to.g - from.g) * ratio + from.g,
            b: (to.b - from.b) * ratio + from.b,
            a: (to.a - from.a) * ratio + from.a
          });
        };
        /**
         * @param {string} color1
         * @param {string} color2
         * @return {?}
         */
        tinycolor.readability = function (color1, color2) {
          var c1 = tinycolor(color1);
          var c2 = tinycolor(color2);
          return (
            (math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
            (math.min(c1.getLuminance(), c2.getLuminance()) + 0.05)
          );
        };
        /**
         * @param {string} color1
         * @param {string} color2
         * @param {!Object} wcag2
         * @return {?}
         */
        tinycolor.isReadable = function (color1, color2, wcag2) {
          var wcag2Parms;
          var out;
          var readability = tinycolor.readability(color1, color2);
          switch (
            ((out = false),
            (wcag2Parms = (function (parms) {
              var level;
              var size;
              level = (
                (parms = parms || {
                  level: "AA",
                  size: "small"
                }).level || "AA"
              ).toUpperCase();
              /** @type {string} */
              size = (parms.size || "small").toLowerCase();
              if ("AA" !== level && "AAA" !== level) {
                /** @type {string} */
                level = "AA";
              }
              if ("small" !== size && "large" !== size) {
                /** @type {string} */
                size = "small";
              }
              return {
                level: level,
                size: size
              };
            })(wcag2)).level + wcag2Parms.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              /** @type {boolean} */
              out = readability >= 4.5;
              break;
            case "AAlarge":
              /** @type {boolean} */
              out = readability >= 3;
              break;
            case "AAAsmall":
              /** @type {boolean} */
              out = readability >= 7;
          }
          return out;
        };
        /**
         * @param {string} baseColor
         * @param {!Array} colorList
         * @param {!Object} args
         * @return {?}
         */
        tinycolor.mostReadable = function (baseColor, colorList, args) {
          var _builderInputModifiedDate;
          var includeFallbackColors;
          var level;
          var sizeStr;
          /** @type {null} */
          var bestColor = null;
          /** @type {number} */
          var _maxBuilderInputModifiedDate = 0;
          includeFallbackColors = (args = args || {}).includeFallbackColors;
          level = args.level;
          sizeStr = args.size;
          /** @type {number} */
          var i = 0;
          for (; i < colorList.length; i++) {
            if (
              (_builderInputModifiedDate = tinycolor.readability(baseColor, colorList[i])) >
              _maxBuilderInputModifiedDate
            ) {
              _maxBuilderInputModifiedDate = _builderInputModifiedDate;
              bestColor = tinycolor(colorList[i]);
            }
          }
          return tinycolor.isReadable(baseColor, bestColor, {
            level: level,
            size: sizeStr
          }) || !includeFallbackColors
            ? bestColor
            : ((args.includeFallbackColors = false), tinycolor.mostReadable(baseColor, ["#fff", "#000"], args));
        };
        var names = (tinycolor.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        });
        var hexNames = (tinycolor.hexNames = (function (names) {
          var glyph_name_to_id = {};
          var i;
          for (i in names) {
            if (names.hasOwnProperty(i)) {
              /** @type {string} */
              glyph_name_to_id[names[i]] = i;
            }
          }
          return glyph_name_to_id;
        })(names));
        var CSS_UNIT;
        var PERMISSIVE_MATCH3;
        var PERMISSIVE_MATCH4;
        var matchers =
          ((PERMISSIVE_MATCH3 =
            "[\\s|\\(]+(" +
            (CSS_UNIT = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            CSS_UNIT +
            ")[,|\\s]+(" +
            CSS_UNIT +
            ")\\s*\\)?"),
          (PERMISSIVE_MATCH4 =
            "[\\s|\\(]+(" +
            CSS_UNIT +
            ")[,|\\s]+(" +
            CSS_UNIT +
            ")[,|\\s]+(" +
            CSS_UNIT +
            ")[,|\\s]+(" +
            CSS_UNIT +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          });
        if (module.exports) {
          /** @type {function(string, !Object): ?} */
          module.exports = tinycolor;
        } else {
          if (
            !(
              void 0 ===
              (result = function () {
                return tinycolor;
              }.call(t, aFunctionName, t, module))
            )
          ) {
            module.exports = result;
          }
        }
      })(Math);
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      /**
       * @param {!Object} target
       * @return {undefined}
       */
      function leave(target) {
        var me = target.getCurrentPage();
        this.matrixCache = me.getMatrix().slice(0);
        this._zoom(target);
        me.updateStatus();
      }
      /**
       * @param {!Object} context
       * @return {undefined}
       */
      function createBlock(context) {
        context.getCurrentPage().updateMatrix(this.matrixCache);
      }
      var $ = require(18);
      $.registerCommand("zoomTo", {
        _zoom: function (s) {
          s.getCurrentPage().zoom(Number(this.zoom));
        },
        queue: false,
        execute: leave,
        back: createBlock
      });
      $.registerCommand("zoomIn", {
        enable: function (element) {
          var map = element.getCurrentPage();
          var valueB = map.getMaxZoom();
          var undefined = map.getMinZoom();
          var valueA = map.getZoom();
          return valueA < valueB || valueA === undefined;
        },
        _zoom: function (self) {
          var me = self.getCurrentPage();
          var data = self.get("_command");
          var iaview = me.getZoom();
          var minZoom = me.getMaxZoom();
          var zoom = iaview + data.zoomDelta;
          if (zoom >= minZoom) {
            zoom = minZoom;
          }
          me.zoom(zoom);
        },
        queue: false,
        execute: leave,
        back: createBlock,
        shortcutCodes: [
          ["metaKey", "="],
          ["ctrlKey", "="]
        ]
      });
      $.registerCommand("zoomOut", {
        enable: function (element) {
          var map = element.getCurrentPage();
          var sortLast = map.getMaxZoom();
          var valB = map.getMinZoom();
          var valA = map.getZoom();
          return valA > valB || valA === sortLast;
        },
        _zoom: function (self) {
          var me = self.getCurrentPage();
          var precision = me.getZoom();
          var maxZoom = me.getMinZoom();
          /** @type {number} */
          var zoom = precision - self.get("_command").zoomDelta;
          if (zoom <= maxZoom) {
            zoom = maxZoom;
          }
          me.zoom(zoom);
        },
        queue: false,
        execute: leave,
        back: createBlock,
        shortcutCodes: [
          ["metaKey", "-"],
          ["ctrlKey", "-"]
        ]
      });
      $.registerCommand("autoZoom", {
        enable: function () {
          return true;
        },
        _zoom: function (s) {
          s.getCurrentPage().autoZoom();
        },
        queue: false,
        execute: leave,
        back: createBlock
      });
      $.registerCommand("resetZoom", {
        enable: function () {
          return true;
        },
        _zoom: function (s) {
          s.getCurrentPage().resetZoom();
        },
        queue: false,
        execute: leave,
        back: createBlock,
        shortcutCodes: [
          ["metaKey", "0"],
          ["ctrlKey", "0"]
        ]
      });
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      var $ = require(18);
      $.registerCommand("collapseExpand", {
        getItem: function (element) {
          var model = element.getCurrentPage();
          var API = model.getGraph();
          return this.itemId ? API.find(this.itemId) : model.getSelected()[0];
        },
        enable: function (e) {
          var input = this.getItem(e);
          return input && false !== input.collapseExpand && input.getChildren().length > 0;
        },
        execute: function (key) {
          var model = key.getCurrentPage();
          var view = model.getGraph();
          var item = this.getItem(key);
          if (item.getModel().collapsed) {
            view.update(item, {
              collapsed: false
            });
            if (item.getInnerEdges) {
              item.getInnerEdges().forEach(function (VTodoService) {
                VTodoService.update();
              });
            }
            /** @type {boolean} */
            this.toCollapsed = false;
          } else {
            view.update(item, {
              collapsed: true
            });
            /** @type {boolean} */
            this.toCollapsed = true;
          }
          model.clearSelected();
          model.setSelected(item, true);
          if (1 === this.executeTimes) {
            this.itemId = item.id;
          }
        },
        back: function (value) {
          var model = value.getCurrentPage();
          var view = model.getGraph();
          var item = this.getItem(value);
          if (this.toCollapsed) {
            view.update(item, {
              collapsed: false
            });
          } else {
            view.update(item, {
              collapsed: true
            });
          }
          model.clearSelected();
          model.setSelected(item, true);
        },
        shortcutCodes: [
          ["metaKey", "/"],
          ["ctrlKey", "/"]
        ]
      });
      $.registerCommand(
        "collapse",
        {
          enable: function (e) {
            var input = this.getItem(e);
            return (
              input && false !== input.collapseExpand && input.getChildren().length > 0 && !input.getModel().collapsed
            );
          }
        },
        "collapseExpand"
      );
      $.registerCommand(
        "expand",
        {
          enable: function (e) {
            var input = this.getItem(e);
            return (
              input && false !== input.collapseExpand && input.getChildren().length > 0 && input.getModel().collapsed
            );
          }
        },
        "collapseExpand"
      );
    },
    function (module, canCreateDiscussions, dataToPlotX) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var l = dataToPlotX(4);
      var Group = {
        INIT: "_initGraph"
      };
      Group.AUGMENT = {
        _initGraph: function () {
          var ports = this.get("graph");
          var t = new (this.get("graphConstructor"))(
            (function (_style) {
              /** @type {number} */
              var i = 1;
              for (; i < arguments.length; i++) {
                var object = null != arguments[i] ? arguments[i] : {};
                /** @type {!Array<string>} */
                var o = Object.keys(object);
                if ("function" == typeof Object.getOwnPropertySymbols) {
                  /** @type {!Array<?>} */
                  o = o.concat(
                    Object.getOwnPropertySymbols(object).filter(function (key) {
                      return Object.getOwnPropertyDescriptor(object, key).enumerable;
                    })
                  );
                }
                o.forEach(function (prop) {
                  _defineProperty(_style, prop, object[prop]);
                });
              }
              return _style;
            })(
              {
                page: this
              },
              ports
            )
          );
          t.draw();
          this.set("_graph", t);
        },
        changeMode: function (mode) {
          this.get("_graph").changeMode(mode);
        },
        updateMatrix: function (t) {
          this.get("_graph").updateMatrix(t);
        },
        getMode: function () {
          return this.get("_graph").get("mode");
        },
        getMatrix: function () {
          return this.get("_graph").getMatrix();
        },
        getZoom: function () {
          return this.get("_graph").getMatrix()[0];
        },
        getMaxZoom: function () {
          return this.get("_graph").get("maxZoom");
        },
        getMinZoom: function () {
          return this.get("_graph").get("minZoom");
        },
        getGraph: function () {
          return this.get("_graph");
        },
        getItems: function () {
          return this.get("_graph").getItems();
        },
        getNodes: function () {
          return this.get("_graph").getNodes();
        },
        translate: function (v, t) {
          return this.get("_graph").translate(v, t);
        },
        getEdges: function () {
          return this.get("_graph").getEdges();
        },
        getGroups: function () {
          return this.get("_graph").getGroups();
        },
        render: function () {
          return this.get("_graph").render(), this;
        },
        add: function (obj, val) {
          return this.get("_graph").add(obj, val), this;
        },
        focusPointByDom: function (e) {
          return this.get("_graph").focusPointByDom(e), this;
        },
        focusPoint: function (settings) {
          return this.get("_graph").focusPoint(settings), this;
        },
        find: function (b) {
          return this.get("_graph").find(b);
        },
        focus: function (leaf) {
          var graph = this.get("_graph");
          var region = graph.find(leaf);
          if (region) {
            var length = region.getCenter();
            graph.focusPoint(length);
          }
          return this;
        },
        save: function () {
          return this.get("_graph").save();
        },
        read: function (value) {
          this.get("_graph").read(value);
        },
        clear: function () {
          this.get("_graph").clear();
        },
        remove: function (fn) {
          return this.get("_graph").remove(fn), this;
        },
        update: function (b, s) {
          return this.get("_graph").update(b, s), this;
        },
        zoom: function (type, pixels) {
          return this.get("_graph").zoom(type, pixels), this;
        },
        getDomPoint: function (expr) {
          return this.get("_graph").getDomPoint(expr);
        },
        getPoint: function (i) {
          return this.get("_graph").getPoint(i);
        },
        zoomByDom: function (i, x) {
          var canvas = this.get("_graph");
          var value = canvas.getPoint(i);
          return canvas.zoom(value, x), this;
        },
        autoZoom: function () {
          return this.get("_graph").autoZoom(), this;
        },
        resetZoom: function () {
          var e = this.get("_graph");
          var ux2 = e.getWidth();
          var uy1 = e.getHeight();
          return (
            e.zoomByDom(
              {
                x: ux2 / 2,
                y: uy1 / 2
              },
              1
            ),
            this
          );
        },
        css: function (prop) {
          var hideString = this.get("_graph").getMouseEventWrapper();
          l.modifyCSS(hideString, prop);
        },
        setCapture: function (a) {
          this.get("_graph").getRootGroup().set("capture", a);
        },
        destroy: function () {
          this.get("_graph").destroy();
        },
        delete: function () {
          var selected = this.getSelected();
          var graph = this.get("_graph");
          l.each(selected, function (e) {
            graph.remove(e);
          });
        }
      };
      module.exports = Group;
    },
    function (module, canCreateDiscussions, __webpack_require__) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var Buffer = __webpack_require__(36);
      var _base = __webpack_require__(4);
      var storeMixin = {
        CFG: {
          grid: void 0
        },
        INIT: "_initGrid"
      };
      storeMixin.AUGMENT = {
        _initGrid: function () {
          var data = this.get("grid");
          var graph = this.get("_graph");
          if (data) {
            var InventoryBuffer = new Buffer(
              (function (_style) {
                /** @type {number} */
                var i = 1;
                for (; i < arguments.length; i++) {
                  var object = null != arguments[i] ? arguments[i] : {};
                  /** @type {!Array<string>} */
                  var o = Object.keys(object);
                  if ("function" == typeof Object.getOwnPropertySymbols) {
                    /** @type {!Array<?>} */
                    o = o.concat(
                      Object.getOwnPropertySymbols(object).filter(function (key) {
                        return Object.getOwnPropertyDescriptor(object, key).enumerable;
                      })
                    );
                  }
                  o.forEach(function (prop) {
                    _defineProperty(_style, prop, object[prop]);
                  });
                }
                return _style;
              })(
                {
                  page: this,
                  graph: graph
                },
                data
              )
            );
            this.setController("grid", InventoryBuffer);
          }
        },
        showGrid: function (data) {
          var graph = this.get("_graph");
          var controller = this.getController("grid");
          if (!controller) {
            if (data) {
              if (_base.isObject(data)) {
                this.set("grid", data);
              }
            } else {
              this.set("grid", true);
            }
            this._initGrid();
          }
          (controller = this.getController("grid")).show();
          graph.draw();
        },
        hideGrid: function () {
          var graph = this.get("_graph");
          var grids = this.getController("grid");
          if (grids) {
            grids.hide();
          }
          graph.draw();
        },
        getGridCell: function () {
          return this.getController("grid").getCell();
        }
      };
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} s
       * @param {string} o
       * @return {?}
       */
      function compile(s, o) {
        return !o || ("object" !== next(o) && "function" != typeof o)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(s)
          : o;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var Ching = require(9);
      var message = require(14);
      var _ = require(4);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function t() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, t),
            compile(this, fn(t).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (superClass) {
              action(value, superClass);
            }
          })(t, Ching),
          (Constructor = t),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  cell: 16,
                  line: message.gridStyle,
                  type: "point",
                  visible: true
                };
              }
            },
            {
              key: "init",
              value: function () {
                this._draw();
                this._onViewPortChange();
                if (!this.visible) {
                  this.hide();
                }
              }
            },
            {
              key: "_onViewPortChange",
              value: function () {
                var prevPageButtonSprite = this;
                var graph = this.graph;
                graph.on("afterviewportchange", function () {
                  prevPageButtonSprite.update();
                });
                graph.on("beforechangesize", function () {
                  prevPageButtonSprite.update();
                });
              }
            },
            {
              key: "_draw",
              value: function () {
                var node = this.graph;
                var path = this._getPath();
                var container = node.getRootGroup();
                var context = _.mix({}, this.line);
                var o = node.getMatrix();
                var propertyName = this.type;
                /** @type {number} */
                var buttonStrokeSize = "line" === propertyName ? 1 / o[0] : 2 / o[0];
                if ("point" === propertyName) {
                  /** @type {null} */
                  context.lineDash = null;
                }
                /** @type {number} */
                context.lineWidth = buttonStrokeSize;
                context.path = path;
                var el = container.addShape("path", {
                  attrs: context,
                  capture: false,
                  zIndex: 0
                });
                _.toBack(el, container);
                this.gridEl = el;
              }
            },
            {
              key: "show",
              value: function () {
                this.gridEl.show();
                /** @type {boolean} */
                this.visible = true;
              }
            },
            {
              key: "hide",
              value: function () {
                this.gridEl.hide();
                /** @type {boolean} */
                this.visible = false;
              }
            },
            {
              key: "_getLinePath",
              value: function () {
                var graph = this.graph;
                var audioOffsetX = graph.get("width");
                var height2 = graph.get("height");
                var containerSize = graph.getPoint({
                  x: 0,
                  y: 0
                });
                var bb = graph.getPoint({
                  x: audioOffsetX,
                  y: height2
                });
                var length = this.cell;
                /** @type {number} */
                var offset = Math.ceil(containerSize.x / length) * length;
                /** @type {number} */
                var x = Math.ceil(containerSize.y / length) * length;
                /** @type {!Array} */
                var path = [];
                /** @type {number} */
                var start = 0;
                for (; start <= bb.x - containerSize.x; start = start + length) {
                  var x = offset + start;
                  path.push(["M", x, containerSize.y]);
                  path.push(["L", x, bb.y]);
                }
                /** @type {number} */
                var i = 0;
                for (; i <= bb.y - containerSize.y; i = i + length) {
                  var r = x + i;
                  path.push(["M", containerSize.x, r]);
                  path.push(["L", bb.x, r]);
                }
                return path;
              }
            },
            {
              key: "_getPointPath",
              value: function () {
                var item = this.graph;
                var audioOffsetX = item.get("width");
                var height2 = item.get("height");
                var c = item.getPoint({
                  x: 0,
                  y: 0
                });
                /** @type {number} */
                var ConstPS = 2 / item.getMatrix()[0];
                var b = item.getPoint({
                  x: audioOffsetX,
                  y: height2
                });
                var scale = this.getCell();
                /** @type {number} */
                var start = Math.ceil(c.x / scale) * scale;
                /** @type {number} */
                var w = Math.ceil(c.y / scale) * scale;
                /** @type {!Array} */
                var path = [];
                /** @type {number} */
                var i = 0;
                for (; i <= b.x - c.x; i = i + scale) {
                  var p = start + i;
                  /** @type {number} */
                  var x = 0;
                  for (; x <= b.y - c.y; x = x + scale) {
                    var r = w + x;
                    path.push(["M", p, r]);
                    path.push(["L", p + ConstPS, r]);
                  }
                }
                return path;
              }
            },
            {
              key: "getCell",
              value: function () {
                var cell = this.cell;
                var width = this.graph.getMatrix()[0];
                return cell * width < 9.6 ? 9.6 / width : cell;
              }
            },
            {
              key: "_getPath",
              value: function () {
                var type = this.type;
                return this["_get" + _.upperFirst(type) + "Path"]();
              }
            },
            {
              key: "update",
              value: function (l) {
                _.mix(this, l);
                var target = this._getPath();
                var _this = this.gridEl;
                var r = this.graph.getMatrix();
                /** @type {number} */
                var e = "line" === this.type ? 1 / r[0] : 2 / r[0];
                _this.attr("lineWidth", e);
                _this.attr("path", target);
              }
            },
            {
              key: "destroy",
              value: function () {
                var exMap = this.gridEl;
                if (exMap) {
                  exMap.remove();
                }
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          t
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions) {
      /**
       * @param {!Object} e
       * @param {!Object} target
       * @param {string} name
       * @return {undefined}
       */
      function addListener(e, target, name) {
        e.on(name, function (e) {
          target.emit(name, e);
        });
        e.on("node:" + name, function (e) {
          target.emit("node:" + name, e);
        });
        e.on("edge:" + name, function (e) {
          target.emit("edge:" + name, e);
        });
        e.on("group:" + name, function (e) {
          target.emit("group:" + name, e);
        });
        e.on("anchor:" + name, function (e) {
          target.emit("anchor:" + name, e);
        });
      }
      var State = {};
      /** @type {string} */
      State.INIT = "_initEvent";
      State.AUGMENT = {
        _initEvent: function () {
          var self = this;
          var element = this.get("_graph");
          addListener(element, this, "click");
          addListener(element, this, "dblclick");
          addListener(element, this, "mouseenter");
          addListener(element, this, "mouseleave");
          addListener(element, this, "mousedown");
          addListener(element, this, "mouseup");
          addListener(element, this, "contextmenu");
          element.on("keydown", function (imageInfoItem) {
            self.emit("keydown", imageInfoItem);
          });
          element.on("keyup", function (imageInfoItem) {
            self.emit("keyup", imageInfoItem);
          });
          element.on("beforechange", function (imageInfoItem) {
            self.emit("beforechange", imageInfoItem);
          });
          element.on("afterchange", function (imageInfoItem) {
            self.emit("afterchange", imageInfoItem);
          });
          element.on("afterviewportchange", function (activity) {
            self.emit("afterviewportchange", activity);
            if (activity.updateMatrix[0] !== activity.originMatrix[0]) {
              self.emit("afterzoom", activity);
            }
          });
          element.on("beforeviewportchange", function (activity) {
            self.emit("beforeviewportchange", activity);
            if (activity.updateMatrix[0] !== activity.originMatrix[0]) {
              self.emit("beforezoom", activity);
            }
          });
        }
      };
      module.exports = State;
    },
    function (module, canCreateDiscussions, require) {
      var util = require(4);
      var storeMixin = {
        CFG: {
          selectable: true,
          multiSelectable: true,
          _selectedCache: {}
        },
        INIT: "_initSelected"
      };
      storeMixin.AUGMENT = {
        _initSelected: function () {
          var _self = this;
          var graph = this.get("_graph");
          graph.on("afteritemdraw", function (itemMeta) {
            var item = itemMeta.item;
            if (item.isSelected) {
              _self.setItemSelected(item);
            }
          });
          graph.on("beforeitemdestroy", function (event) {
            _self.clearItemSelected(event.item);
          });
        },
        setItemSelected: function (data) {
          var attrs = this.get("_graph").getShapeObj(data).getSelectedStyle(data);
          var $token = data.getKeyShape();
          /** @type {!Object} */
          this.get("_selectedCache")[data.id] = data;
          if (attrs) {
            $token.attr(attrs);
          }
          if (data.isEdge) {
            if (data.startArrow) {
              data.startArrow.attr({
                fill: attrs.stroke
              });
            }
            if (data.endArrow) {
              data.endArrow.attr({
                fill: attrs.stroke
              });
            }
          }
        },
        clearItemSelected: function (data) {
          var graph = this.get("_graph");
          var TestRunErrorFormattableAdapter = data.getKeyShape();
          var s = graph.getShapeObj(data);
          var selected = s.getStyle(data);
          var name = s.getSelectedStyle(data);
          var c = this.get("_selectedCache");
          var node = util.getContrast(selected, name);
          TestRunErrorFormattableAdapter.attr(node);
          if (data.isEdge) {
            if (data.startArrow) {
              data.startArrow.attr({
                fill: node.stroke
              });
            }
            if (data.endArrow) {
              data.endArrow.attr({
                fill: node.stroke
              });
            }
          }
          delete c[data.id];
        },
        setSelected: function (data, checked) {
          var values;
          var _self = this;
          var isSelectable = this.get("selectable");
          var graph = this.get("_graph");
          if (isSelectable) {
            values = util.isArray(data) ? data : [data];
            util.each(values, function (item) {
              if (util.isString(item)) {
                item = graph.find(item);
              }
              if (item && !item.destroyed) {
                if (checked) {
                  _self.emit("beforeitemselected", {
                    item: item
                  });
                  _self.setItemSelected(item);
                  _self.emit("afteritemselected", {
                    item: item
                  });
                } else {
                  _self.emit("beforeitemunselected", {
                    item: item
                  });
                  _self.clearItemSelected(item);
                  _self.emit("afteritemunselected", {
                    item: item
                  });
                }
                /** @type {boolean} */
                item.isSelected = checked;
                _self.updateStatus();
                graph.draw();
              }
            });
          }
        },
        getSelected: function () {
          var val = this.get("_selectedCache");
          return util.objectToValues(val);
        },
        clearSelected: function () {
          var tm = this;
          var graph = this.get("_graph");
          var search = this.get("_selectedCache");
          util.each(search, function (data) {
            if (data.isSelected) {
              tm.setSelected(data, false);
            }
          });
          graph.draw();
        }
      };
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, require) {
      var util = require(4);
      var storeMixin = {
        CFG: {
          activeable: true,
          _activedCache: {}
        },
        INIT: "_initActived"
      };
      storeMixin.AUGMENT = {
        _initActived: function () {
          var _self = this;
          var graph = this.get("_graph");
          graph.on("afteritemdraw", function (itemMeta) {
            var item = itemMeta.item;
            if (item.isActived) {
              _self.setItemActived(item);
            }
          });
          graph.on("beforeitemdestroy", function (event) {
            _self.clearItemActived(event.item);
          });
        },
        setItemActived: function (data) {
          var t = this.get("_graph").getShapeObj(data);
          var cacheSeen = this.get("_activedCache");
          var r = t.getActivedStyle(data);
          var group_circle_box = data.getKeyShape();
          /** @type {!Object} */
          cacheSeen[data.id] = data;
          if (r) {
            group_circle_box.attr(r);
          }
          if (data.isEdge) {
            if (data.startArrow) {
              data.startArrow.attr({
                fill: r.stroke
              });
            }
            if (data.endArrow) {
              data.endArrow.attr({
                fill: r.stroke
              });
            }
          }
        },
        clearItemActived: function (data) {
          var graph = this.get("_graph");
          var $token = data.getKeyShape();
          var s = graph.getShapeObj(data);
          var body = s.getStyle(data);
          var _scenarios = this.get("_activedCache");
          var type = s.getActivedStyle(data);
          var attrs = util.getContrast(body, type);
          $token.attr(attrs);
          if (data.isEdge) {
            if (data.startArrow) {
              data.startArrow.attr({
                fill: attrs.stroke
              });
            }
            if (data.endArrow) {
              data.endArrow.attr({
                fill: attrs.stroke
              });
            }
          }
          delete _scenarios[data.id];
        },
        setActived: function (id, e) {
          var structure;
          var _self = this;
          var pki_type = this.get("activeable");
          var graph = this.get("_graph");
          if (pki_type) {
            structure = util.isArray(id) ? id : [id];
            util.each(structure, function (item) {
              if (util.isString(item)) {
                item = graph.find(item);
              }
              if (item && !item.destroyed) {
                if (e) {
                  _self.emit("beforeitemactived", {
                    item: item
                  });
                  _self.setItemActived(item);
                  _self.emit("afteritemactived", {
                    item: item
                  });
                } else {
                  _self.emit("beforeitemunactived", {
                    item: item
                  });
                  _self.clearItemActived(item);
                  _self.emit("afteritemunactived", {
                    item: item
                  });
                }
                /** @type {boolean} */
                item.isActived = e;
              }
            });
            graph.draw();
          }
        },
        getActived: function () {
          var val = this.get("_activedCache");
          return util.objectToValues(val);
        },
        clearActived: function () {
          var tab = this;
          var graph = this.get("_graph");
          var n = this.get("_activedCache");
          util.each(n, function (item) {
            if (item.isActived) {
              tab.setActived(item, false);
            }
          });
          graph.draw();
        }
      };
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, _$$mdAnimate_) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var VDocumentFragment = _$$mdAnimate_(41);
      var vm = {
        CFG: {
          align: {}
        },
        INIT: "_initAlign"
      };
      vm.AUGMENT = {
        _initAlign: function () {
          var align = this.get("align");
          var graph = this.get("_graph");
          var vdomDocFragment = new VDocumentFragment(
            (function (_style) {
              /** @type {number} */
              var i = 1;
              for (; i < arguments.length; i++) {
                var object = null != arguments[i] ? arguments[i] : {};
                /** @type {!Array<string>} */
                var o = Object.keys(object);
                if ("function" == typeof Object.getOwnPropertySymbols) {
                  /** @type {!Array<?>} */
                  o = o.concat(
                    Object.getOwnPropertySymbols(object).filter(function (key) {
                      return Object.getOwnPropertyDescriptor(object, key).enumerable;
                    })
                  );
                }
                o.forEach(function (prop) {
                  _defineProperty(_style, prop, object[prop]);
                });
              }
              return _style;
            })(
              {
                flow: this,
                graph: graph
              },
              align
            )
          );
          this.setController("align", vdomDocFragment);
        },
        align: function (date, step, unit) {
          return this.getController("align").align(date, step, unit);
        },
        clearAlignLine: function () {
          return this.getController("align").clearAlignLine();
        }
      };
      module.exports = vm;
    },
    function (module, canCreateDiscussions, factory) {
      /**
       * @param {string} pos
       * @return {?}
       */
      function fn(pos) {
        return (fn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (object) {
                return typeof object;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(pos);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} current
       * @param {string} a
       * @return {?}
       */
      function compile(current, a) {
        return !a || ("object" !== fn(a) && "function" != typeof a)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(current)
          : a;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function wrap(type) {
        return (wrap = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      /**
       * @param {string} path
       * @param {!Object} a
       * @return {?}
       */
      function callback(path, a) {
        return {
          line: path,
          point: a,
          dis: ctx.pointLineDistance(path[0], path[1], path[2], path[3], a.x, a.y)
        };
      }
      var a = factory(9);
      var feature = factory(14);
      var ctx = factory(4);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function f() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, f),
            compile(this, wrap(f).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, e) {
            if ("function" != typeof e && null !== e) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (e) {
              action(value, e);
            }
          })(f, a),
          (Constructor = f),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  line: feature.alignLineStyle,
                  item: true,
                  grid: false,
                  tolerance: 5,
                  _horizontalLines: {},
                  _verticalLines: {},
                  _alignLines: []
                };
              }
            },
            {
              key: "init",
              value: function () {
                if (this.item) {
                  this._cacheBoxLine();
                }
              }
            },
            {
              key: "_cacheBoxLine",
              value: function () {
                var graph = this.graph;
                var ret = this._horizontalLines;
                var n = this._verticalLines;
                var undefined = this.item;
                graph.on("afteritemdraw", function (result) {
                  var value = result.item;
                  if (!ctx.isEdge(value)) {
                    var bounds = value.getBBox();
                    if (true === undefined || "horizontal" === undefined) {
                      /** @type {!Array} */
                      ret[value.id + "tltr"] = [bounds.minX, bounds.minY, bounds.maxX, bounds.minY, value];
                      /** @type {!Array} */
                      ret[value.id + "lcrc"] = [bounds.minX, bounds.centerY, bounds.maxX, bounds.centerY, value];
                      /** @type {!Array} */
                      ret[value.id + "blbr"] = [bounds.minX, bounds.maxY, bounds.maxX, bounds.maxY, value];
                    } else {
                      if ("center" === undefined) {
                        /** @type {!Array} */
                        ret[value.id + "lcrc"] = [bounds.minX, bounds.centerY, bounds.maxX, bounds.centerY, value];
                      }
                    }
                    if (true === undefined || "vertical" === undefined) {
                      /** @type {!Array} */
                      n[value.id + "tlbl"] = [bounds.minX, bounds.minY, bounds.minX, bounds.maxY, value];
                      /** @type {!Array} */
                      n[value.id + "tcbc"] = [bounds.centerX, bounds.minY, bounds.centerX, bounds.maxY, value];
                      /** @type {!Array} */
                      n[value.id + "trbr"] = [bounds.maxX, bounds.minY, bounds.maxX, bounds.maxY, value];
                    } else {
                      if ("center" === undefined) {
                        /** @type {!Array} */
                        n[value.id + "tcbc"] = [bounds.centerX, bounds.minY, bounds.centerX, bounds.maxY, value];
                      }
                    }
                  }
                });
                graph.on("beforeitemdestroy", function (context) {
                  var draggedItem = context.item;
                  delete ret[draggedItem.id + "tltr"];
                  delete ret[draggedItem.id + "lcrc"];
                  delete ret[draggedItem.id + "blbr"];
                  delete n[draggedItem.id + "tlbl"];
                  delete n[draggedItem.id + "tcbc"];
                  delete n[draggedItem.id + "trbr"];
                });
              }
            },
            {
              key: "align",
              value: function (name, t) {
                var aggFuncNames = ctx.mix({}, name);
                var remote = this.flow.getController("grid");
                return (
                  this.grid && remote && remote.visible && this._gridAlign(name, t),
                  this.item && this._itemAlign(name, t, aggFuncNames),
                  name
                );
              }
            },
            {
              key: "_gridAlign",
              value: function (canvas, jObj) {
                var flow = this.flow;
                var g = this.grid;
                var scale = flow.getGridCell();
                if ("cc" === g) {
                  /** @type {number} */
                  var x = Math.round((canvas.x + jObj.width / 2) / scale) * scale;
                  /** @type {number} */
                  var y = Math.round((canvas.y + jObj.height / 2) / scale) * scale;
                  /** @type {number} */
                  canvas.x = x - jObj.width / 2;
                  /** @type {number} */
                  canvas.y = y - jObj.height / 2;
                } else {
                  /** @type {number} */
                  canvas.x = Math.round(canvas.x / scale) * scale;
                  /** @type {number} */
                  canvas.y = Math.round(canvas.y / scale) * scale;
                }
              }
            },
            {
              key: "_itemAlign",
              value: function (w, d, props) {
                var r = this._horizontalLines;
                var o = this._verticalLines;
                var maxDistance = this.tolerance;
                var f = {
                  x: props.x + d.width / 2,
                  y: props.y
                };
                var distance = {
                  x: props.x + d.width / 2,
                  y: props.y + d.height / 2
                };
                var style = {
                  x: props.x + d.width / 2,
                  y: props.y + d.height
                };
                var s = {
                  x: props.x,
                  y: props.y + d.height / 2
                };
                var root = {
                  x: props.x + d.width,
                  y: props.y + d.height / 2
                };
                /** @type {!Array} */
                var features = [];
                /** @type {!Array} */
                var result = [];
                /** @type {null} */
                var settings = null;
                if (
                  (this.clearAlignLine(),
                  ctx.each(r, function (p) {
                    if (p[4].isVisible()) {
                      features.push(callback(p, f));
                      features.push(callback(p, distance));
                      features.push(callback(p, style));
                    }
                  }),
                  ctx.each(o, function (results) {
                    if (results[4].isVisible()) {
                      result.push(callback(results, s));
                      result.push(callback(results, distance));
                      result.push(callback(results, root));
                    }
                  }),
                  features.sort(function (a, b) {
                    return a.dis - b.dis;
                  }),
                  result.sort(function (a, b) {
                    return a.dis - b.dis;
                  }),
                  0 !== features.length && features[0].dis < maxDistance)
                ) {
                  w.y = features[0].line[1] - features[0].point.y + props.y;
                  settings = {
                    type: "item",
                    horizontals: [features[0]]
                  };
                  /** @type {number} */
                  var i = 1;
                  for (; i < 3; i++) {
                    if (features[0].dis === features[i].dis) {
                      settings.horizontals.push(features[i]);
                    }
                  }
                }
                if (0 !== result.length && result[0].dis < maxDistance) {
                  w.x = result[0].line[0] - result[0].point.x + props.x;
                  if (settings) {
                    /** @type {!Array} */
                    settings.verticals = [result[0]];
                  } else {
                    settings = {
                      type: "item",
                      verticals: [result[0]]
                    };
                  }
                  /** @type {number} */
                  var lang = 1;
                  for (; lang < 3; lang++) {
                    if (result[0].dis === result[lang].dis) {
                      settings.verticals.push(result[lang]);
                    }
                  }
                }
                if (settings) {
                  /** @type {!Object} */
                  settings.bbox = d;
                  this._addAlignLine(settings);
                }
              }
            },
            {
              key: "clearAlignLine",
              value: function () {
                var e = this._alignLines;
                ctx.each(e, function (inventoryService) {
                  inventoryService.remove();
                });
                /** @type {!Array} */
                this._alignLines = [];
              }
            },
            {
              key: "_addAlignLine",
              value: function (params) {
                var size = params.bbox;
                var container = this.graph.getRootGroup();
                var l = this.line;
                var atomInfos = this._alignLines;
                if ("item" === params.type) {
                  if (params.horizontals) {
                    ctx.each(params.horizontals, function (packet) {
                      var relX1;
                      var bg_size;
                      var current = packet.line;
                      var c = packet.point;
                      /** @type {number} */
                      var arrowPos = (current[0] + current[2]) / 2;
                      if (c.x < arrowPos) {
                        /** @type {number} */
                        relX1 = c.x - size.width / 2;
                        /** @type {number} */
                        bg_size = Math.max(current[0], current[2]);
                      } else {
                        relX1 = c.x + size.width / 2;
                        /** @type {number} */
                        bg_size = Math.min(current[0], current[2]);
                      }
                      var atomInfo = container.addShape("line", {
                        attrs: ctx.mix(
                          {
                            x1: relX1,
                            y1: current[1],
                            x2: bg_size,
                            y2: current[1]
                          },
                          l
                        ),
                        capture: false
                      });
                      atomInfos.push(atomInfo);
                    });
                  }
                  if (params.verticals) {
                    ctx.each(params.verticals, function (_ref) {
                      var yDest;
                      var calc1;
                      var extent = _ref.line;
                      var end = _ref.point;
                      /** @type {number} */
                      var key1Top = (extent[1] + extent[3]) / 2;
                      if (end.y < key1Top) {
                        /** @type {number} */
                        yDest = end.y - size.height / 2;
                        /** @type {number} */
                        calc1 = Math.max(extent[1], extent[3]);
                      } else {
                        yDest = end.y + size.height / 2;
                        /** @type {number} */
                        calc1 = Math.min(extent[1], extent[3]);
                      }
                      var atomInfo = container.addShape("line", {
                        attrs: ctx.mix(
                          {
                            x1: extent[0],
                            y1: yDest,
                            x2: extent[0],
                            y2: calc1
                          },
                          l
                        ),
                        capture: false
                      });
                      atomInfos.push(atomInfo);
                    });
                  }
                }
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          f
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, require) {
      var $ = require(4);
      var storeMixin = {
        CFG: {
          labelEditable: false
        },
        INIT: "_initLabelEditor"
      };
      storeMixin.AUGMENT = {
        _initLabelEditor: function () {
          var followers_ids_list = this;
          if (this.get("labelEditable")) {
            var file9 = this.getGraph();
            var list = $.createDOM(
              '<div contenteditable="true" role="textbox" tabindex="1" class="g6-label-editor"></div>',
              {
                position: "absolute",
                visibility: "hidden",
                "z-index": "2",
                padding: "0px 2px 0px 0px",
                resize: "none",
                width: "auto",
                height: "auto",
                outline: "none",
                border: "1px solid #1890FF",
                "transform-origin": "left top",
                "max-width": "320px",
                background: "white",
                "box-sizing": "content-box"
              }
            );
            file9.getGraphContainer().appendChild(list);
            list.on("blur", function (event) {
              event.stopPropagation();
              if (!file9.destroyed) {
                followers_ids_list.endEditLabel();
              }
            });
            list.on("keydown", function (e) {
              e.stopPropagation();
              var k = $.getKeyboradKey(e);
              if ((e.metaKey && "s" === k) || (e.ctrlKey && "s" === k)) {
                e.preventDefault();
              }
              if (!("Enter" !== k && "Escape" !== k)) {
                followers_ids_list.endEditLabel();
              }
            });
            this.set("labelTextArea", list);
            file9.on("beforeviewportchange", function () {
              if (list.focusItem) {
                followers_ids_list.setLabelEditorBeginPosition(list.focusItem);
              }
            });
          }
        },
        _getLabelTextAreaBox: function (elem, selectable) {
          var bits = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0];
          if (selectable) {
            elem.attr("text", selectable);
          }
          var navCommonStyle = this.getGraph().getRootGroup();
          var value = $.getBBox(elem, navCommonStyle);
          return {
            minX: value.minX - bits[1],
            minY: value.minY - bits[0],
            maxX: value.maxX + bits[1],
            maxY: value.maxY + bits[0]
          };
        },
        setLabelEditorBeginPosition: function (item) {
          var target = this.get("labelTextArea");
          var $this = item.getLabel();
          if ($this) {
            var o = this._getLabelTextAreaBox($this);
            var lineHeight = $this.attr("lineHeight");
            var labelFont = $this.attr("fontSize");
            var pannedRect = {
              x: o.minX,
              y: o.minY - lineHeight / 4 + labelFont / 4 - 1,
              width: o.maxX - o.minX,
              height: o.maxY - o.minY
            };
            target.css({
              top: pannedRect.y + "px",
              left: pannedRect.x + "px"
            });
            target.labelPoint = pannedRect;
          } else {
            var height = this.getGraph().getRootGroup();
            var child = item.getKeyShape();
            var bounds = $.getBBox(child, height);
            var d = {
              x: bounds.minY + (bounds.maxY - bounds.minY - target.height()) / 2,
              y: (bounds.minX + bounds.maxX) / 2
            };
            target.css({
              top: d.x + "px",
              left: d.y + "px"
            });
            target.labelPoint = d;
          }
        },
        beginEditLabel: function (element) {
          var me = this.get("labelTextArea");
          var area = this.getGraph();
          if (($.isString(element) && (element = area.find(element)), element && !element.destroyed && me)) {
            this.setSignal("preventWheelPan", true);
            var button = element.getModel();
            var $this = element.getLabel();
            var a = area.getZoom();
            if (((me.focusItem = element), $this)) {
              var lineHeight = $this.attr("lineHeight");
              var o = this._getLabelTextAreaBox($this);
              /** @type {number} */
              var editMinWidth = (o.maxX - o.minX) / a;
              /** @type {number} */
              var editMinHeight = (o.maxY - o.minY + lineHeight / 4) / a;
              me.innerHTML = button.label;
              me.innerHTML = button.label;
              me.css({
                "min-width": editMinWidth + "px",
                "min-height": editMinHeight + "px",
                visibility: "visible",
                "font-family": $this.attr("fontFamily"),
                "line-height": lineHeight + "px",
                "font-size": $this.attr("fontSize") + "px",
                transform: "scale(" + a + ")"
              });
            } else {
              /** @type {string} */
              me.innerHTML = "";
              me.css({
                "min-width": "auto",
                "min-height": "auto"
              });
            }
            this.setLabelEditorBeginPosition(element);
            me.css({
              visibility: "visible"
            });
            me.focus();
            document.execCommand("selectAll", false, null);
          }
        },
        endEditLabel: function () {
          var node = this.get("labelTextArea");
          if ((this.setSignal("preventWheelPan", false), node)) {
            var item = node.focusItem;
            if (item) {
              var link = item.getModel();
              var me = this.editor;
              if (link.label !== node.textContent) {
                me.executeCommand("update", {
                  action: "updateLabel",
                  itemId: item.id,
                  updateModel: {
                    label: node.textContent
                  }
                });
              }
              node.hide();
              node.focusItem = void 0;
              this.focusGraphWrapper();
            }
          }
        }
      };
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions) {
      var storeMixin = {
        AUGMENT: {
          updateStatus: function () {
            var statusMock;
            var items = this.getSelected();
            if (0 === items.length) {
              /** @type {string} */
              statusMock = "canvas-selected";
            } else {
              if (1 === items.length) {
                if (items[0].isNode) {
                  /** @type {string} */
                  statusMock = "node-selected";
                } else {
                  if (items[0].isEdge) {
                    /** @type {string} */
                    statusMock = "edge-selected";
                  } else {
                    if (items[0].isGroup) {
                      /** @type {string} */
                      statusMock = "group-selected";
                    }
                  }
                }
              } else {
                /** @type {string} */
                statusMock = "multi-selected";
              }
            }
            this.emit("statuschange", {
              status: statusMock
            });
          }
        }
      };
      module.exports = storeMixin;
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(45);
      saveNotifs(46);
      saveNotifs(47);
      saveNotifs(48);
      saveNotifs(49);
      saveNotifs(50);
      saveNotifs(51);
      saveNotifs(52);
      saveNotifs(53);
      saveNotifs(54);
      saveNotifs(55);
      saveNotifs(56);
      saveNotifs(57);
      saveNotifs(58);
      saveNotifs(59);
      saveNotifs(60);
      saveNotifs(61);
      saveNotifs(62);
    },
    function (canCreateDiscussions, isSlidingUp, floor) {
      var startYNew = floor(3);
      var startXNew = floor(4);
      startYNew.registerBehaviour("panBlank", startXNew.getPanCanvasBehaviour(true));
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("hoverButton", function (card) {
        card.getGraph().behaviourOn("mouseenter", function (boundingshape) {
          if (!card.getSignal("panningItem")) {
            if (boundingshape.shape && boundingshape.shape.isButton) {
              card.css({
                cursor: "pointer"
              });
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, floor) {
      var startYNew = floor(3);
      var startXNew = floor(4);
      startYNew.registerBehaviour("panCanvas", startXNew.getPanCanvasBehaviour());
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      var frontEndModuleConfig = require(3);
      var canvas = require(14);
      var exports = require(4);
      frontEndModuleConfig.registerBehaviour("wheelChangeViewport", function (self) {
        var _takingTooLongTimeout;
        var target = self.getGraph();
        target.behaviourOn("wheel", function (event) {
          event.domEvent.preventDefault();
        });
        target.behaviourOn(
          "wheel",
          exports.throttle(function (params) {
            if (self.getSignal("preventWheelPan")) {
              return;
            }
            var event = params.domEvent;
            var c = self.getSignal("wheelZoom");
            if (!_takingTooLongTimeout) {
              self.setCapture(false);
            }
            if (c) {
              var delta = event.wheelDelta;
              if (Math.abs(delta) > 10) {
                var speed = target.getMatrix()[0];
                if (delta > 0) {
                  target.zoom(
                    {
                      x: params.x,
                      y: params.y
                    },
                    1.05 * speed
                  );
                } else {
                  target.zoom(
                    {
                      x: params.x,
                      y: params.y
                    },
                    speed * (1 / 1.05)
                  );
                }
              }
            } else {
              /** @type {!Array} */
              var l = [];
              var ds = target.getMatrix();
              exports.mat3.translate(l, ds, [
                event.wheelDeltaX * canvas.wheelPanRatio,
                event.wheelDeltaY * canvas.wheelPanRatio
              ]);
              if (self.translateLimt(l)) {
                target.updateMatrix(l);
              }
            }
            if (_takingTooLongTimeout) {
              clearTimeout(_takingTooLongTimeout);
            }
            /** @type {number} */
            _takingTooLongTimeout = setTimeout(function () {
              self.setCapture(true);
              _takingTooLongTimeout = void 0;
            }, 50);
          }, 16)
        );
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("processPanItem", function ($this) {
        var t = $this.getGraph();
        t.behaviourOn("mousemove", function (e) {
          var stripesSelection = $this.get("panItemDelegation");
          if (stripesSelection) {
            var orthogonal = $this.get("panItemStartPoint");
            var data = $this.get("panItemStartBox");
            /** @type {number} */
            var deltaX = e.x - orthogonal.x;
            /** @type {number} */
            var y = e.y - orthogonal.y;
            var markerCoord = $this.align(
              {
                x: data.minX + deltaX,
                y: data.minY + y
              },
              {
                width: data.width,
                height: data.height
              }
            );
            stripesSelection.attr({
              x: markerCoord.x,
              y: markerCoord.y
            });
            t.emit("itempanning", e);
            t.draw();
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("startPanItem", function (store) {
        var self = store.getGraph();
        var trials = self.getRootGroup();
        self.behaviourOn("dragstart", function (me) {
          if (2 !== me.button && me.item && (me.item.isNode || me.item.isGroup)) {
            var json;
            var element = me.item;
            if (
              (json = (json = element.isSelected ? store.getSelected() : [element]).filter(function (record) {
                return record.isNode || record.isGroup;
              }))[0] &&
              false !== json[0].dragable
            ) {
              self.emit("beforepanitem", {
                items: json
              });
              self.emit("beforeshowdelegation", {
                items: json
              });
              var o = store.getDelegation(json, trials);
              var shouts = o.getBBox();
              store.setSignal("panningItem", true);
              store.set("panItems", json);
              store.set("panItemDelegation", o);
              store.set("panItemStartBox", shouts);
              store.set("panItemStartPoint", {
                x: me.x,
                y: me.y
              });
              self.draw();
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("endPanItem", function (store) {
        var t = store.getGraph();
        t.behaviourOn("panitemend", function () {
          var exMap = store.get("panItemDelegation");
          if (exMap) {
            exMap.remove();
            t.draw();
          }
          store.setSignal("panningItem", false);
          store.set("panItemDelegation", void 0);
          store.set("panItemStartPoint", void 0);
          store.set("panItemStartBox", void 0);
          store.set("panItems", void 0);
        });
        t.behaviourOn("canvas:mouseleave", function () {
          if (store.get("panItems")) {
            store.clearAlignLine();
            t.emit("panitemend");
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("dblclickItemEditLabel", function (store) {
        store.getGraph().behaviourOn("node:dblclick", function (action) {
          if (action.shape && !action.shape.isButton) {
            store.beginEditLabel(action.item);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("clickCanvasSelected", function (model) {
        var subLink = model.getGraph();
        subLink.behaviourOn("click", function (boundingshape) {
          if (!boundingshape.shape) {
            model.clearSelected();
            model.clearActived();
            model.updateStatus();
          }
        });
        subLink.behaviourOn("contextmenu", function (boundingshape) {
          if (!boundingshape.shape) {
            model.clearSelected();
            model.clearActived();
            model.updateStatus();
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("clickCollapsedButton", function (store) {
        var view = store.getGraph();
        view.behaviourOn("click", function (o) {
          var e = o.item;
          var s = o.shape;
          if (e && s && s.isCollapsedButton) {
            var items = store.editor;
            if (items) {
              items.executeCommand("collapseExpand", {
                itemId: e.id
              });
            } else {
              view.update(e, {
                collapsed: true
              });
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("clickEdgeSelected", function (model) {
        model.getGraph().behaviourOn("edge:click", function (t) {
          if (model.get("multiSelectable") && true === model.getSignal("shiftKeyDown")) {
            model.setSelected(t.item.id, true);
          } else {
            model.clearActived();
            model.clearSelected();
            model.setSelected(t.item.id, true);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("clickExpandedButton", function (store) {
        var view = store.getGraph();
        view.behaviourOn("click", function (o) {
          var e = o.item;
          var s = o.shape;
          if (e && s && s.isExpandedButton) {
            var items = store.editor;
            if (items) {
              items.executeCommand("collapseExpand", {
                itemId: e.id
              });
            } else {
              view.update(e, {
                collapsed: false
              });
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("clickGroupSelected", function (model) {
        model.getGraph().behaviourOn("group:click", function (t) {
          if (model.get("multiSelectable") && true === model.getSignal("shiftKeyDown")) {
            model.setSelected(t.item.id, true);
          } else {
            model.clearActived();
            model.clearSelected();
            model.setSelected(t.item.id, true);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("clickNodeSelected", function (model) {
        model.getGraph().behaviourOn("node:click", function (t) {
          if (model.get("multiSelectable") && true === model.getSignal("shiftKeyDown")) {
            model.setSelected(t.item.id, true);
          } else {
            model.clearActived();
            model.clearSelected();
            model.setSelected(t.item.id, true);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("hoverNodeActived", function (item) {
        var path;
        var n = item.getGraph();
        n.behaviourOn("node:mouseenter", function (event) {
          if (false !== event.item.getShapeObj().panAble) {
            item.css({
              cursor: "move"
            });
          }
          if (!(item.getSignal("panningItem") || item.getSignal("dragEdge") || (event.item && event.item.isSelected))) {
            path = event.item;
            item.setActived(path, true);
          }
        });
        n.behaviourOn("node:mouseleave", function (item) {
          var type = item.toShape;
          if (path) {
            if (!((type && type.isAnchor && type.getItem() === path) || item.getSignal("dragEdge"))) {
              if (!path.isSelected) {
                item.setActived(path, false);
              }
              path = void 0;
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("hoverGroupActived", function (item) {
        var $passwordList = item.getGraph();
        $passwordList.behaviourOn("mouseenter", function (scope) {
          if (!(item.getSignal("panningItem") || (scope.item && scope.item.isSelected) || item.getSignal("dragEdge"))) {
            if (scope.shape && scope.shape.isGroupKeyShape) {
              item.css({
                cursor: "move"
              });
              item.setActived(scope.item, true);
            }
          }
        });
        $passwordList.behaviourOn("group:mouseleave", function (position) {
          if (position.item.isActived && !position.item.isSelected) {
            item.setActived(position.item, false);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("hoverEdgeActived", function (model) {
        var t = model.getGraph();
        t.behaviourOn("edge:mouseenter", function (data) {
          if (!(model.getSignal("panningItem") || (data.item && data.item.isSelected) || model.getSignal("dragEdge"))) {
            model.setActived(data.item, true);
          }
        });
        t.behaviourOn("edge:mouseleave", function (object) {
          model.setActived(object.item, false);
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(3).registerBehaviour("keydownCmdWheelZoom", function (n) {
        var fakeInputElement = n.getGraph();
        fakeInputElement.behaviourOn("keydown", function (event) {
          if (91 === event.domEvent.keyCode) {
            n.setSignal("wheelZoom", true);
          }
        });
        fakeInputElement.behaviourOn("keyup", function (event) {
          if (91 === event.domEvent.keyCode) {
            n.setSignal("wheelZoom", false);
          }
        });
      });
    },
    function (mixin, canCreateDiscussions, bem) {
      var tree = bem(22);
      mixin.exports = {
        dragingEdgeEndPoint: function (options) {
          var x = options.endPointType;
          var t = options.edgeModel;
          var graph = options.graph;
          var o = options.delegation;
          var length = options.startPoint;
          var c = options.ev;
          var pattern = options.source;
          var u = options.target;
          var i = c.item;
          /** @type {!Array} */
          var customPoints = "source" === x ? [c, length] : [length, c];
          if (i) {
            if ("source" === x) {
              u = i;
            } else {
              pattern = i;
            }
          }
          var item = graph.getShapeObj("edge", t).getPathByPoints({
            points: customPoints,
            source: pattern,
            target: u
          });
          o.attr("path", item);
          graph.draw();
        },
        panGroup: function (p, n, t, o) {
          var options = p.getModel();
          tree.traverseTree(
            p,
            function (record) {
              if ("node" === record.type) {
                var options = record.getModel();
                o.update(record, {
                  x: options.x + n,
                  y: options.y + t
                });
              }
              if (p.getCrossEdges) {
                p.getCrossEdges().forEach(function (VTodoService) {
                  VTodoService.update();
                });
              }
            },
            function (value) {
              return "group" === value.type ? value.getChildren() : [];
            }
          );
          o.update(p, {
            x: options.x + n,
            y: options.y + t
          });
        },
        dropUpdateEdge: function (e) {
          var event = e.ev;
          var pubDateEl = e.endPointType;
          var record = e.model;
          var editor = e.diagram;
          var i = editor.get("noEndEdge");
          var alignConstraint = editor.get("linkAnchor");
          var REACT013 = editor.get("linkNode");
          var node = event.item;
          var template = event.shape;
          var l = event.x;
          var d = event.y;
          if ((editor.getGraph().emit("beforedropedge"), template)) {
            if (alignConstraint && template.isAnchor && template.hasHotspot) {
              var node = template;
              var message = node.getItem();
              return "target" === pubDateEl
                ? ((record.target = message.id), (record.targetAnchor = node.getIndex()), true)
                : ((record.source = message.id), (record.sourceAnchor = node.getIndex()), true);
            }
            if (REACT013 && node && node.isNode) {
              return "target" === pubDateEl ? ((record.target = node.id), true) : ((record.source = node.id), true);
            }
          } else {
            if (i) {
              return "target" === pubDateEl
                ? ((record.target = {
                    x: l,
                    y: d
                  }),
                  true)
                : ((record.source = {
                    x: l,
                    y: d
                  }),
                  true);
            }
          }
          return false;
        }
      };
    },
    function (mixin, canCreateDiscussions) {
      mixin.exports = {
        rectRectCrossAlgorithm: function (t, d) {
          /** @type {number} */
          var lfReceivedUnread = Math.max(t.minX, d.minX);
          /** @type {number} */
          var lfReceivedRead = Math.max(t.minY, d.minY);
          /** @type {number} */
          var containerScrollHeightNoMargin = Math.min(t.maxX, d.maxX);
          /** @type {number} */
          var bodyScrollHeightNoMargin = Math.min(t.maxY, d.maxY);
          return lfReceivedUnread > containerScrollHeightNoMargin || lfReceivedRead > bodyScrollHeightNoMargin;
        },
        euclideanDistance: {
          pointPoint: function (e, t) {
            /** @type {number} */
            var sqsum = Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2);
            return Math.sqrt(sqsum);
          }
        }
      };
    },
    function (module, canCreateDiscussions, payloadReader) {
      var Map = {};
      var item = payloadReader(2);
      Map.AUGMENT = {
        changeAddEdgeModel: function (isLiveReload) {
          this.set("addEdgeModel", isLiveReload);
        },
        cancelAdd: function () {
          this.set("addType", void 0);
          this.set("addModel", void 0);
          this.changeMode("default");
        },
        beginAdd: function (line, file) {
          this.set("addType", line);
          this.set("addModel", file);
          this.changeMode("add");
        },
        endAdd: function () {
          this.set("addType", void 0);
          this.set("addModel", void 0);
          this.changeMode("default");
        },
        delete: function () {
          var selected = this.getSelected();
          var graph = this.get("_graph");
          item.each(selected, function (e) {
            graph.remove(e);
          });
        },
        toBack: function () {
          var selected = this.getSelected();
          var r1 = this.get("_graph");
          selected.sort(function (canCreateDiscussions, isSlidingUp) {
            var val = canCreateDiscussions.getGraphicGroup();
            var query = isSlidingUp.getGraphicGroup();
            return item.getIndex(query) - item.getIndex(val);
          });
          selected.forEach(function (n1) {
            r1.toBack(n1);
          });
        },
        toFront: function () {
          var selected = this.getSelected();
          var me = this.get("_graph");
          selected.sort(function (canCreateDiscussions, isSlidingUp) {
            var query = canCreateDiscussions.getGraphicGroup();
            var val = isSlidingUp.getGraphicGroup();
            return item.getIndex(query) - item.getIndex(val);
          });
          selected.forEach(function (fromMousedown) {
            me.toFront(fromMousedown);
          });
        },
        addGroup: function (config) {
          var o;
          var me = this.get("_graph");
          var selected = this.getSelected();
          /** @type {boolean} */
          var i = true;
          if (0 !== selected.length) {
            if (!config) {
              config = {
                label: "\u65b0\u5efa\u5206\u7ec4"
              };
            }
            item.setId(config);
            me.add("group", config);
            me.toFront(config.id);
            var els = me.find(config.id);
            if (
              (selected.forEach(function (enumValueDeclaration) {
                var n = enumValueDeclaration.getParent();
                if (n) {
                  if (o) {
                    if (o !== n) {
                      /** @type {boolean} */
                      i = false;
                    }
                  } else {
                    o = n;
                  }
                }
              }),
              i)
            ) {
              if (o) {
                config.parent = o.getModel().id;
              }
              selected.forEach(function (t) {
                me.update(t, {
                  parent: config.id
                });
              });
              var pipelets = els.getInnerEdges();
              els.deepEach(function (fromMousedown) {
                me.toFront(fromMousedown);
              });
              pipelets.forEach(function (fromMousedown) {
                me.toFront(fromMousedown);
              });
            } else {
              console.warn("add group elements must have the same parent");
            }
          }
        },
        unGroup: function () {
          var graph = this.get("_graph");
          var table = this.getSelected();
          var root = table[0];
          if (1 === table.length && item.isGroup(root)) {
            root.getChildren().forEach(function (node) {
              graph.update(node, {
                parent: void 0
              });
              if (!node.collapsedParent) {
                node.show();
              }
              if (node.isGroup) {
                node.deepEach(function (node) {
                  if (!node.collapsedParent) {
                    node.show();
                  }
                });
              }
            });
            graph.remove(root);
          }
        },
        newGroup: function (group) {
          this.addGroup(group);
        }
      };
      module.exports = Map;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var File = require(67);
      var $ = require(2);
      var storeMixin = {
        CFG: {
          anchor: {}
        },
        INIT: "_initAnchor"
      };
      storeMixin.AUGMENT = {
        _initAnchor: function () {
          var p = this.get("anchor");
          var graph = this.get("_graph");
          if (p) {
            var initScriptFile = new File(
              (function (_style) {
                /** @type {number} */
                var i = 1;
                for (; i < arguments.length; i++) {
                  var object = null != arguments[i] ? arguments[i] : {};
                  /** @type {!Array<string>} */
                  var o = Object.keys(object);
                  if ("function" == typeof Object.getOwnPropertySymbols) {
                    /** @type {!Array<?>} */
                    o = o.concat(
                      Object.getOwnPropertySymbols(object).filter(function (key) {
                        return Object.getOwnPropertyDescriptor(object, key).enumerable;
                      })
                    );
                  }
                  o.forEach(function (prop) {
                    _defineProperty(_style, prop, object[prop]);
                  });
                }
                return _style;
              })(
                {
                  diagram: this,
                  graph: graph
                },
                p
              )
            );
            this.setController("anchor", initScriptFile);
          }
        },
        showAnchor: function (e, element, accountForDocScroll) {
          this.getController("anchor").showAnchor(e, element, accountForDocScroll);
        },
        clearAnchor: function (newChild) {
          this.getController("anchor").clearAnchor(newChild);
        },
        setHotspotActived: function (b, prune) {
          this.getController("anchor").setHotspotActived(b, prune);
        },
        hoverShowAnchor: function (x) {
          var eventsService = this;
          var pipelets = x.getAnchorPoints();
          /** @type {!Array} */
          var r = [];
          pipelets.forEach(function (targetAnchors, o) {
            var args = {
              anchor: targetAnchors,
              item: x
            };
            eventsService.emit("hovernode:beforeshowanchor", args);
            if (!args.cancel) {
              r.push(o);
            }
          });
          this.showAnchor(x, r);
        },
        anchorHasBeenLinked: function (node, val) {
          var pipelets = node.getEdges();
          /** @type {!Array} */
          var parent = [];
          return (
            pipelets.forEach(function (elManager) {
              var e = elManager.getModel();
              if (!(e.source !== node.id || $.isNil(e.sourceAnchor))) {
                parent.push(e.sourceAnchor);
              }
              if (!(e.target !== node.id || $.isNil(e.targetAnchor))) {
                parent.push(e.targetAnchor);
              }
            }),
            $.isObject(val) ? -1 !== parent.indexOf(val.index) : -1 !== parent.indexOf(val)
          );
        },
        dragEdgeBeforeShowAnchor: function (type, value, cell) {
          var r = this;
          this.getGraph()
            .getNodes()
            .forEach(function (link) {
              var oe;
              /** @type {!Array} */
              var a = [];
              var pipelets = link.getAnchorPoints();
              if (type.isNode) {
                var varWikidataTypes = type.getAnchorPoints();
                pipelets.forEach(function (canCreateDiscussions, bT) {
                  /** @type {({dragEndPointType: ?, source: ?, sourceAnchor: ?, target: ?, targetAnchor: ?})} */
                  oe =
                    "target" === cell
                      ? {
                          source: type,
                          sourceAnchor: varWikidataTypes[value],
                          target: link,
                          targetAnchor: canCreateDiscussions,
                          dragEndPointType: cell
                        }
                      : {
                          target: type,
                          targetAnchor: varWikidataTypes[value],
                          source: link,
                          sourceAnchor: canCreateDiscussions,
                          dragEndPointType: cell
                        };
                  r.emit("dragedge:beforeshowanchor", oe);
                  if (!oe.cancel) {
                    a.push(bT);
                  }
                });
              } else {
                pipelets.forEach(function (canCreateDiscussions, bT) {
                  a.push(bT);
                });
              }
              if (link === type && link.isAnchorShow) {
                a.forEach(function (last) {
                  var isLastQuote = link.getAnchor(last);
                  if (value !== last && isLastQuote) {
                    isLastQuote.showHotspot();
                  }
                });
              } else {
                r.showAnchor(link, a, true);
              }
            });
        }
      };
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, get) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} targetObj
       * @return {?}
       */
      function extend(targetObj) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            defineProperty(targetObj, k, o[k]);
          });
        }
        return targetObj;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} name
       * @param {string} o
       * @return {?}
       */
      function compile(name, o) {
        return !o || ("object" !== next(o) && "function" != typeof o)
          ? (function (data) {
              if (void 0 === data) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return data;
            })(name)
          : o;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} obj
       * @param {!Object} name
       * @return {?}
       */
      function f(obj, name) {
        return (f =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(obj, name);
      }
      var m = get(9);
      var options = get(5);
      var l = get(2);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function t() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, t),
            compile(this, fn(t).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, t) {
            if ("function" != typeof t && null !== t) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (t) {
              f(value, t);
            }
          })(t, m),
          (Constructor = t),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  _anchorItemCache: {}
                };
              }
            },
            {
              key: "init",
              value: function () {
                var lang = this;
                var graph = this.graph;
                graph.on("afteritemdraw", function (i18n) {
                  if (i18n.item.isAnchorShow) {
                    lang.showAnchor(i18n.item);
                  }
                });
                graph.on("beforeitemdestroy", function (i18n) {
                  lang._clearAnchor(i18n.item);
                });
                graph.on("afteritemhide", function (model) {
                  if (model.item.isNode) {
                    lang._clearAnchor(model.item);
                  }
                });
              }
            },
            {
              key: "_updateAnchor",
              value: function (e) {
                var graph = this.graph;
                e.anchorShapes.forEach(function (handler) {
                  handler.updatePosition();
                });
                graph.draw();
              }
            },
            {
              key: "_drawAnchor",
              value: function (result, $, conn, fn) {
                var picks = result.getAnchorPoints();
                this._clearAnchor(result);
                l.each(picks, function (coords, i) {
                  if (!conn || -1 !== conn.indexOf(i)) {
                    var elem;
                    var item = $.addShape("marker", {
                      attrs: extend(
                        {
                          symbol: "circle"
                        },
                        options.anchorPointStyle,
                        {
                          x: coords.x,
                          y: coords.y
                        }
                      ),
                      freezePoint: coords,
                      item: result,
                      index: i,
                      eventPreFix: "anchor",
                      isItemChange: function () {},
                      zIndex: options.zIndex.anchorPoint
                    });
                    item.toFront();
                    /** @type {string} */
                    item.eventPreFix = "anchor";
                    /**
                     * @return {undefined}
                     */
                    item.showHotspot = function () {
                      elem = $.addShape("marker", {
                        attrs: extend(
                          {
                            symbol: "circle"
                          },
                          options.anchorHotsoptStyle,
                          {
                            x: coords.x,
                            y: coords.y
                          }
                        ),
                        freezePoint: coords,
                        capture: false,
                        zIndex: options.zIndex.anchorHotsopt
                      });
                      result.anchorShapes.push(elem);
                      /** @type {boolean} */
                      item.hasHotspot = true;
                      elem.toFront();
                      item.toFront();
                    };
                    /**
                     * @return {?}
                     */
                    item.getIndex = function () {
                      return i;
                    };
                    /**
                     * @return {?}
                     */
                    item.getItem = function () {
                      return result;
                    };
                    /**
                     * @return {?}
                     */
                    item.getPoint = function () {
                      return coords;
                    };
                    /**
                     * @return {undefined}
                     */
                    item.updatePosition = function () {
                      var t = result.getAnchorPoints()[i];
                      item.attr(t);
                    };
                    /**
                     * @return {undefined}
                     */
                    item.setActived = function () {
                      item.attr(options.anchorPointHoverStyle);
                    };
                    /**
                     * @return {undefined}
                     */
                    item.clearActived = function () {
                      item.attr(options.anchorPointStyle);
                    };
                    /** @type {boolean} */
                    item.isAnchor = true;
                    /**
                     * @param {?} text
                     * @return {undefined}
                     */
                    item.setHotspotActived = function (text) {
                      if (elem) {
                        if (text) {
                          elem.attr(options.anchorHotsoptActivedStyle);
                        } else {
                          elem.attr(options.anchorHotsoptStyle);
                        }
                      }
                    };
                    if (fn) {
                      item.showHotspot();
                    }
                    result.anchorShapes.push(item);
                    /**
                     * @return {?}
                     */
                    result.getAllAnchors = function () {
                      return result.anchorShapes.filter(function (object) {
                        return object.isAnchor;
                      });
                    };
                    /**
                     * @param {!Object} name
                     * @return {?}
                     */
                    result.getAnchor = function (name) {
                      return result.anchorShapes.find(function (appNgModules) {
                        return appNgModules.get("index") === name;
                      });
                    };
                  }
                });
              }
            },
            {
              key: "_clearAnchor",
              value: function (e) {
                if (e.anchorShapes) {
                  e.anchorShapes.forEach(function (inventoryService) {
                    inventoryService.remove();
                  });
                }
                /** @type {!Array} */
                e.anchorShapes = [];
              }
            },
            {
              key: "setHotspotActived",
              value: function (commit, message) {
                var barline = this.diagram.getGraph();
                commit.setHotspotActived(message);
                barline.draw();
              }
            },
            {
              key: "showAnchor",
              value: function (child, size, color) {
                if (child.isVisible()) {
                  var graph = this.graph;
                  var leftChildren = this._anchorItemCache;
                  var i = graph.getRootGroup();
                  this._drawAnchor(child, i, size, color);
                  /** @type {boolean} */
                  child.isAnchorShow = true;
                  /** @type {!Object} */
                  leftChildren[child.id] = child;
                }
              }
            },
            {
              key: "clearAnchor",
              value: function (str) {
                var touchSystem = this;
                var graph = this.graph;
                var colorByStr = graph.get("itemCache");
                var o = this._anchorItemCache;
                /** @type {(Object|boolean)} */
                var msg = str;
                msg = l.isObject(str) ? [str] : l.isString(str) ? [colorByStr[str]] : o;
                l.each(msg, function (e) {
                  touchSystem._clearAnchor(e);
                  /** @type {boolean} */
                  e.isAnchorShow = false;
                  delete o[e.id];
                });
                graph.draw();
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          t
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, _$$mdAnimate_) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var VDocumentFragment = _$$mdAnimate_(69);
      var storeMixin = {
        CFG: {
          orbit: null
        },
        INIT: "_initOrbit"
      };
      storeMixin.AUGMENT = {
        _initOrbit: function () {
          var sortedValueType = this.get("orbit");
          if (sortedValueType) {
            var vdomDocFragment = new VDocumentFragment(
              (function (_style) {
                /** @type {number} */
                var i = 1;
                for (; i < arguments.length; i++) {
                  var object = null != arguments[i] ? arguments[i] : {};
                  /** @type {!Array<string>} */
                  var o = Object.keys(object);
                  if ("function" == typeof Object.getOwnPropertySymbols) {
                    /** @type {!Array<?>} */
                    o = o.concat(
                      Object.getOwnPropertySymbols(object).filter(function (key) {
                        return Object.getOwnPropertyDescriptor(object, key).enumerable;
                      })
                    );
                  }
                  o.forEach(function (prop) {
                    _defineProperty(_style, prop, object[prop]);
                  });
                }
                return _style;
              })(
                {
                  diagram: this
                },
                sortedValueType
              )
            );
            this.setController("orbit", vdomDocFragment);
          }
        },
        showOrbit: function (termOrder) {
          this.getController("orbit").show(termOrder);
        },
        hideOrbit: function () {
          this.getController("orbit").hide();
        },
        layoutOrbit: function (e, i) {
          this.getController("orbit").layout(e, i);
        }
      };
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function debug(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} s
       * @param {string} o
       * @return {?}
       */
      function compile(s, o) {
        return !o || ("object" !== next(o) && "function" != typeof o)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(s)
          : o;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var Ching = require(9);
      var elementRect = require(5);
      var Model = require(70);
      var glm = require(2);
      var vec2 = glm.vec2;
      var success = glm.isString;
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function t() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, t),
            compile(this, fn(t).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (superClass) {
              action(value, superClass);
            }
          })(t, Ching),
          (Constructor = t),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  satellite: [],
                  satelliteCache: []
                };
              }
            },
            {
              key: "init",
              value: function () {
                var modVSelf = this;
                var pipelets = this.satellite;
                var diagram = this.diagram;
                var data = {
                  diagram: diagram
                };
                diagram.getGraph().addBehaviour("orbit");
                pipelets.forEach(function (i) {
                  if (success(i)) {
                    modVSelf.satelliteCache.push(new Model[i](data));
                  } else {
                    modVSelf.satelliteCache.push(
                      new Model(
                        (function (e) {
                          /** @type {number} */
                          var i = 1;
                          for (; i < arguments.length; i++) {
                            var o = null != arguments[i] ? arguments[i] : {};
                            /** @type {!Array<string>} */
                            var oKeys = Object.keys(o);
                            if ("function" == typeof Object.getOwnPropertySymbols) {
                              /** @type {!Array<?>} */
                              oKeys = oKeys.concat(
                                Object.getOwnPropertySymbols(o).filter(function (key) {
                                  return Object.getOwnPropertyDescriptor(o, key).enumerable;
                                })
                              );
                            }
                            oKeys.forEach(function (k) {
                              debug(e, k, o[k]);
                            });
                          }
                          return e;
                        })({}, data, i)
                      )
                    );
                  }
                });
              }
            },
            {
              key: "layout",
              value: function (clone, options) {
                var diagram = this.diagram;
                var stripesSelection = diagram.getGraph();
                var eCfgEl = this.satelliteCache;
                var layout = clone.getBBox();
                var x = layout.centerX;
                var y = layout.centerY;
                var numberOfHeadersToCount = diagram.getZoom();
                /** @type {number} */
                var averageDistanceBetweenHeaders = elementRect.orbitGap / numberOfHeadersToCount;
                var pipelets = eCfgEl.filter(function (errorManager) {
                  return errorManager.isVisible();
                });
                /** @type {!Array} */
                var x_sub_q = [options.x - x, options.y - y];
                var x_sub_q_len = vec2.length(x_sub_q);
                /** @type {number} */
                var D = layout.width / 2 + averageDistanceBetweenHeaders;
                var parentXY = vec2.scale([], x_sub_q, D / x_sub_q_len);
                pipelets.forEach(function (_) {
                  var copy_arrow = _.getDOM();
                  /** @type {number} */
                  var size_2 = copy_arrow.width() / 2;
                  var newPosition = stripesSelection.getDomPoint({
                    x: parentXY[0] + x,
                    y: parentXY[1] + y
                  });
                  copy_arrow.css({
                    top: newPosition.y - size_2 + "px",
                    left: newPosition.x - size_2 + "px"
                  });
                });
              }
            },
            {
              key: "show",
              value: function (result) {
                this.satelliteCache.forEach(function (t) {
                  if (t.enable()) {
                    /** @type {string} */
                    t.item = result;
                    t.show();
                  }
                });
              }
            },
            {
              key: "hide",
              value: function () {
                this.satelliteCache.forEach(function (EmptyContentCollectionOverlay) {
                  EmptyContentCollectionOverlay.hide();
                });
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          t
        );
      })();
      module.exports = storeMixin;
    },
    function (mixin, canCreateDiscussions, require) {
      var m = require(23);
      m.forkAndLink = require(71);
      mixin.exports = m;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function debug(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} s
       * @param {string} o
       * @return {?}
       */
      function compile(s, o) {
        return !o || ("object" !== next(o) && "function" != typeof o)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(s)
          : o;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function fn(type) {
        return (fn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var Ching = require(23);
      var event = require(2);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function t() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, t),
            compile(this, fn(t).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, superClass) {
            if ("function" != typeof superClass && null !== superClass) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (superClass) {
              action(value, superClass);
            }
          })(t, Ching),
          (Constructor = t),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  name: "forkAndLink",
                  render: function () {
                    return '\n          <div style="\n            width: 11px;\n            height: 11px;\n            cursor: copy;\n            background-image: url(https://gw.alipayobjects.com/zos/rmsportal/yWAiQOmucbYMCpwkvTBP.svg)\n          "></div>\n        ';
                  },
                  bindEvent: function (e, self) {
                    var _props2 = this;
                    var engine = self.getGraph();
                    var unexpandedFeatureDirectoryPaths = engine.getRootGroup();
                    return (
                      e.setAttribute("draggable", "true"),
                      [
                        event.addEventListener(e, "dragstart", function () {
                          var item = _props2.item;
                          var a = (function (e) {
                            /** @type {number} */
                            var i = 1;
                            for (; i < arguments.length; i++) {
                              var o = null != arguments[i] ? arguments[i] : {};
                              /** @type {!Array<string>} */
                              var oKeys = Object.keys(o);
                              if ("function" == typeof Object.getOwnPropertySymbols) {
                                /** @type {!Array<?>} */
                                oKeys = oKeys.concat(
                                  Object.getOwnPropertySymbols(o).filter(function (key) {
                                    return Object.getOwnPropertyDescriptor(o, key).enumerable;
                                  })
                                );
                              }
                              oKeys.forEach(function (k) {
                                debug(e, k, o[k]);
                              });
                            }
                            return e;
                          })({}, self.get("addEdgeModel"), {
                            source: item.id
                          });
                          var layout = item.getBBox();
                          var unexpandedSupportCodeFilePaths = self.getDelegation(
                            [
                              {
                                isEdge: true
                              }
                            ],
                            unexpandedFeatureDirectoryPaths
                          );
                          self.setSignal("dragEdge", true);
                          self.beginAdd("edge", a);
                          self.set("addEdgeConfig", {
                            addModel: a,
                            delegation: unexpandedSupportCodeFilePaths,
                            startPoint: {
                              x: layout.centerX,
                              y: layout.centerY
                            },
                            sourceItem: item
                          });
                          e.hide();
                        }),
                        event.addEventListener(e, "click", function (ev) {
                          var mx = ev.clientX;
                          var curY = ev.clientY;
                          var fm = self.editor;
                          var value = _props2.item;
                          var e = engine.getPointByClient({
                            x: mx,
                            y: curY
                          });
                          var me = value.getBBox();
                          var q = value.getModel();
                          /** @type {!Array} */
                          var p = [e.x - me.centerX, e.y - me.centerY];
                          var m = event.vec2.length(p);
                          if ((event.vec2.scale(p, p, 160 / m), fm)) {
                            fm.executeCommand("copyAdjacent", {
                              copyNode: value,
                              x: e.x + p[0],
                              y: e.y + p[1]
                            });
                          } else {
                            var b = event.clone(q);
                            b.x = e.x + p[0];
                            b.y = e.y + p[1];
                            engine.add(value.type, b);
                          }
                        })
                      ]
                    );
                  }
                };
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          t
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {!Object} comment
       * @return {undefined}
       */
      function callback(comment) {
        if (comment.controlPointShapes) {
          util.each(comment.controlPointShapes, function (inventoryService) {
            inventoryService.remove();
          });
        }
        /** @type {!Array} */
        comment.controlPointShapes = [];
        /** @type {boolean} */
        comment.isControlPointShow = false;
      }
      var util = require(2);
      var shape = require(5);
      var State = {};
      /** @type {string} */
      State.INIT = "_initResize";
      State.CFG = {
        nodeResizeable: false,
        edgeResizeable: true
      };
      State.AUGMENT = {
        _initResize: function () {
          var lang = this;
          var graph = this.get("_graph");
          var n = this.get("nodeResizeable");
          var pki_type = this.get("edgeResizeable");
          if (n) {
            graph.on("afteritemdraw", function (evt) {
              if ("node" === evt.item.type && evt.item.isVisible()) {
                lang.drawControlPoints(evt.item);
              }
            });
          }
          if (pki_type) {
            graph.on("afteritemdraw", function (evt) {
              if ("edge" === evt.item.type && evt.item.isVisible()) {
                lang.drawControlPoints(evt.item);
              }
            });
          }
          graph.on("afteritemhide", function (event) {
            var data;
            if (event.item.isControlPointShow) {
              if ((data = event.item).controlPointShapes) {
                util.each(data.controlPointShapes, function (EmptyContentCollectionOverlay) {
                  EmptyContentCollectionOverlay.hide();
                });
              }
              /** @type {boolean} */
              data.isControlPointShow = false;
            }
          });
          graph.on("afteritemshow", function (event) {
            var data;
            if (!event.item.isControlPointShow) {
              if ((data = event.item).controlPointShapes) {
                util.each(data.controlPointShapes, function (commonModal) {
                  commonModal.show();
                });
              }
              /** @type {boolean} */
              data.isControlPointShow = true;
            }
          });
          graph.on("beforeitemdestroy", function (event) {
            if (event.item.isControlPointShow) {
              callback(event.item);
            }
          });
        },
        drawControlPoints: function (ctx) {
          var value;
          var container;
          var a;
          var val;
          var len;
          var data;
          var linesLen;
          var d;
          var options;
          var domContainer = this.get("_graph").getRootGroup();
          var simulatedPath = this.get("nodeResizeable");
          var pki_type = this.get("edgeResizeable");
          if ("node" === ctx.type) {
            if (simulatedPath) {
              (function (content, container) {
                var bounds = content.getBBox();
                /** @type {!Array} */
                var i = [
                  {
                    x: bounds.minX,
                    y: bounds.minY
                  },
                  {
                    x: bounds.maxX,
                    y: bounds.minY
                  },
                  {
                    x: bounds.minX,
                    y: bounds.maxY
                  },
                  {
                    x: bounds.maxX,
                    y: bounds.maxY
                  }
                ];
                callback(content);
                var boundingBox = container.addShape("rect", {
                  attrs: util.mix({}, shape.nodeSelectedBoxStyle, {
                    symbol: "square",
                    x: bounds.minX,
                    y: bounds.minY,
                    width: bounds.maxX - bounds.minX,
                    height: bounds.maxY - bounds.minY
                  })
                });
                content.controlPointShapes.push(boundingBox);
                util.each(i, function (markerCoord) {
                  var placemark = container.addShape("marker", {
                    attrs: util.mix({}, shape.nodeControlPointStyle, {
                      symbol: "square",
                      x: markerCoord.x,
                      y: markerCoord.y
                    }),
                    freezePoint: {
                      x: markerCoord.x,
                      y: markerCoord.y
                    },
                    item: content
                  });
                  content.controlPointShapes.push(placemark);
                });
              })(ctx, domContainer);
            }
          } else {
            if ("edge" === ctx.type && pki_type) {
              container = domContainer;
              a = (value = ctx).getKeyShape().attr("path");
              val = a[0];
              len = val.length;
              data = a[a.length - 1];
              linesLen = data.length;
              /** @type {!Array} */
              d = [
                {
                  x: val[len - 2],
                  y: val[len - 1]
                },
                {
                  x: data[linesLen - 2],
                  y: data[linesLen - 1]
                }
              ];
              options = value.getModel();
              callback(value);
              util.each(d, function (markerCoord, type) {
                var data = container.addShape("marker", {
                  attrs: util.mix({}, shape.edgeControlPointStyle, {
                    x: markerCoord.x,
                    y: markerCoord.y
                  }),
                  freezePoint: {
                    x: markerCoord.x,
                    y: markerCoord.y
                  },
                  item: value
                });
                /** @type {string} */
                data.eventPreFix = "edgeControlPoint";
                /**
                 * @return {?}
                 */
                data.getSourcePoint = function () {
                  return d[0];
                };
                /**
                 * @return {?}
                 */
                data.getTargetPoint = function () {
                  return d[d.length - 1];
                };
                /**
                 * @return {?}
                 */
                data.getItem = function () {
                  return value;
                };
                /**
                 * @return {?}
                 */
                data.isSourceEndPoint = function () {
                  return options.source && 0 === type;
                };
                /**
                 * @return {?}
                 */
                data.isTargetEndPoint = function () {
                  return options.target && type === d.length - 1;
                };
                value.controlPointShapes.push(data);
              });
            }
          }
          /** @type {boolean} */
          ctx.isControlPointShow = true;
        }
      };
      module.exports = State;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {!Object} targetObj
       * @return {?}
       */
      function extend(targetObj) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            defineProperty(targetObj, k, o[k]);
          });
        }
        return targetObj;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var shape = require(2);
      var BinaryBundle = {};
      BinaryBundle.AUGMENT = {
        addOutterShape: function (obj, options) {
          this.clearOutterShape(obj);
          var lw = options.lineWidth;
          var _this = obj.getKeyShape();
          var container = obj.getGraphicGroup();
          var geometry = _this.attr();
          var label = _this.get("type");
          var px = _this.attr("lineWidth");
          var object = shape.clone(geometry);
          delete object.fillStyle;
          delete object.strokeStyle;
          delete object.matrix;
          var value = container.addShape(label, {
            attrs: extend(
              {},
              object,
              {
                fill: null
              },
              options
            )
          });
          shape.toBack(value, container);
          var bounds = value.getBBox();
          /** @type {number} */
          var padding = bounds.maxX - bounds.minX;
          /** @type {number} */
          var rp = bounds.maxY - bounds.minY;
          /** @type {number} */
          var p = (bounds.minX + bounds.maxX) / 2;
          /** @type {number} */
          var m = (bounds.minY + bounds.maxY) / 2;
          value.transform([
            ["t", -p, -m],
            ["s", (lw + padding + px) / padding, (lw + rp + px) / rp],
            ["t", p, m]
          ]);
          /** @type {boolean} */
          value.isOutter = true;
          obj.outterShape = value;
        },
        clearOutterShape: function (count) {
          if (count.outterShape) {
            count.outterShape.remove();
          }
        }
      };
      module.exports = BinaryBundle;
    },
    function (module, canCreateDiscussions) {
      var storeMixin = {
        CFG: {
          linkNode: true,
          linkAnchor: true
        },
        INIT: "_initLink",
        AUGMENT: {
          _initLink: function () {
            var Dyno = this;
            var self = this.getGraph();
            var n = this.get("linkAnchor");
            var link = this.get("linkNode");
            var mode = self.get("mode");
            if (n) {
              this.on("beforeitemactived", function (event) {
                var record = event.item;
                if (record.isNode) {
                  Dyno.hoverShowAnchor(record);
                }
              });
              this.on("beforeitemunactived", function (itemMeta) {
                var item = itemMeta.item;
                if (item.isNode || item.isGroup) {
                  Dyno.clearAnchor(item);
                }
              });
              this.on("beforeitemselected", function (itemMeta) {
                var item = itemMeta.item;
                if (item.isNode) {
                  Dyno.hoverShowAnchor(item);
                } else {
                  if (item.isGroup) {
                    Dyno.hoverShowAnchor(item);
                  }
                }
              });
              this.on("beforeitemunselected", function (itemMeta) {
                var item = itemMeta.item;
                if (item.isNode || item.isGroup) {
                  Dyno.clearAnchor(item);
                }
              });
              self.addBehaviour("dragAnchorAddEdge", "add");
              self.addBehaviour("hoverAnchorActived", "default");
              self.changeMode(mode);
            }
            if (link) {
              self.addBehaviour("hoverNodeAddOutter", "add");
              self.addBehaviour("hoverNodeAddOutter", "default");
              self.changeMode(mode);
            }
          }
        }
      };
      module.exports = storeMixin;
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(76);
      saveNotifs(77);
      saveNotifs(78);
      saveNotifs(79);
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      /**
       * @param {!Object} query
       * @return {?}
       */
      function defaults(query) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            debug(query, k, o[k]);
          });
        }
        return query;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function debug(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var store = require(13);
      var $ = require(2);
      var options = require(5);
      store.registerNode("diagram-base", {
        getSize: function (value) {
          var t = value.getModel();
          return $.getNodeSize(t.size);
        },
        defaultFillPalette: 0,
        defaultStrokePalette: 3,
        activedFillPalette: 0,
        activedStrokePalette: 5,
        selectedFillPalette: 2,
        selectedStrokePalette: 5,
        getDefaulStyle: function () {
          return options.nodeStyle;
        },
        getDefaulActivedStyle: function () {
          return options.nodeActivedStyle;
        },
        getDefaulSelectedtyle: function () {
          return options.nodeSelectedStyle;
        },
        getStyle: function (node) {
          var t;
          var c;
          var ts = node.getModel();
          var value = ts.color;
          if (value) {
            var idx = $.Palettes.generate(value);
            t = idx[this.defaultFillPalette];
            c = idx[this.defaultStrokePalette];
          }
          return $.mix(
            true,
            {},
            this.getDefaulStyle(),
            {
              fill: t,
              stroke: c
            },
            ts.style
          );
        },
        getPath: function (node) {
          var call = this.getSize(node);
          var p = this.getStyle(node);
          return $.getRectPath(-call[0] / 2, -call[1] / 2, call[0], call[1], p.radius);
        },
        getActivedOutterStyle: function () {
          return options.nodeActivedOutterStyle;
        },
        getActivedStyle: function (selectedItem) {
          var cont = selectedItem.getModel();
          var data = this.getDefaulActivedStyle(selectedItem);
          var colorArray = cont.color;
          if (colorArray) {
            var colors = $.Palettes.generate(colorArray);
            return defaults({}, data, {
              fill: colors[this.activedFillPalette],
              stroke: colors[this.activedStrokePalette]
            });
          }
          return data;
        },
        getSelectedStyle: function (prop) {
          var cont = prop.getModel();
          var val = this.getDefaulSelectedtyle(prop);
          var colorArray = cont.color;
          if (colorArray) {
            var colors = $.Palettes.generate(colorArray);
            return defaults({}, val, {
              fill: colors[this.selectedFillPalette],
              stroke: colors[this.selectedStrokePalette]
            });
          }
          return val;
        },
        getSelectedOutterStyle: function (selectedItem) {
          var color = selectedItem.getModel().color;
          if (color) {
            var colors = $.Palettes.generate(color);
            return defaults({}, options.nodeSelectedOutterStyle, {
              stroke: colors[1],
              fill: colors[1]
            });
          }
          return options.nodeSelectedOutterStyle;
        },
        anchor: [
          [0.5, 0],
          [1, 0.5],
          [0.5, 1],
          [0, 0.5]
        ]
      });
      store.registerNode("capsule", {
        getPath: function (file) {
          var call = this.getSize(file);
          return $.getRectPath(-call[0] / 2, -call[1] / 2, call[0], call[1], call[1] / 2);
        }
      });
      store.registerNode("circle", {
        getPath: function (type) {
          var size = this.getSize(type);
          var canvasHeight = size[0];
          var canvasWidth = size[1];
          return $.getEllipsePath(0, 0, canvasHeight / 2, canvasWidth / 2);
        }
      });
      store.registerNode("rhombus", {
        getPath: function (type) {
          var size = this.getSize(type);
          var canvasHeight = size[0];
          var canvasWidth = size[1];
          /** @type {!Array} */
          var parseTemplet = [
            {
              x: 0,
              y: 0 - canvasWidth / 2
            },
            {
              x: 0 + canvasHeight / 2,
              y: 0
            },
            {
              x: 0,
              y: 0 + canvasWidth / 2
            },
            {
              x: 0 - canvasHeight / 2,
              y: 0
            },
            {
              x: 0,
              y: 0 - canvasWidth / 2
            }
          ];
          return $.pointsToPolygon(parseTemplet);
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      var Y = require(13);
      var $ = require(2);
      var utils = require(5);
      Y.registerEdge("diagram-base", {
        getPath: function (item) {
          var customPoints = item.getPoints();
          var existingSynapseBloodhound = item.getSource();
          var $submenuTarget = item.getTarget();
          return this.getPathByPoints({
            points: customPoints,
            source: existingSynapseBloodhound,
            target: $submenuTarget,
            item: item
          });
        },
        getPathByPoints: function (params) {
          var sets = params.points;
          return $.pointsToPolygon(sets);
        },
        getStyle: function (node) {
          var me = node.getModel();
          return $.mix(
            true,
            {},
            utils.edgeStyle,
            {
              stroke: me.color
            },
            me.style
          );
        },
        getActivedStyle: function () {
          return utils.edgeActivedStyle;
        },
        getSelectedStyle: function () {
          return utils.edgeSelectedStyle;
        },
        getActivedOutterStyle: function () {},
        getSelectedOutterStyle: function () {}
      });
    },
    function (canCreateDiscussions, isSlidingUp, $) {
      /**
       * @param {!Object} targetObj
       * @return {?}
       */
      function extend(targetObj) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            defineProperty(targetObj, k, o[k]);
          });
        }
        return targetObj;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var doh = $(13);
      var grayscale = $(5);
      var self = $(2);
      var u = self.getGroupIconPath();
      var apexRestPath = self.getCollapsedButtonPath();
      var pathConstant_41 = self.getExpandedButtonPath();
      var settings = {
        fill: "#CED4D9"
      };
      var style = {
        stroke: "#697B8C",
        fill: "#fff",
        fillOpacity: 0
      };
      var attrs = {
        stroke: "#697B8C",
        fill: "#fff",
        fillOpacity: 0
      };
      var options = {
        fill: "#000000",
        textBaseline: "top",
        textAlign: "left"
      };
      var opts = {
        stroke: "#CED4D9",
        fill: "#F2F4F5",
        radius: 4
      };
      var value = grayscale.groupBackgroundPadding;
      /** @type {number} */
      var r = 40;
      /** @type {number} */
      var t = 13;
      /** @type {number} */
      var px = 12;
      /** @type {number} */
      var RectEnd = 12;
      /** @type {number} */
      var TILE_HEIGHT = 8;
      /** @type {number} */
      var scaleFontSize = 12;
      /** @type {number} */
      var x = 184 - value[1] - value[3];
      /** @type {number} */
      var val = 40 - value[0] - value[2];
      doh.registerGroup("diagram-base", {
        draw: function (element) {
          var item = element.getModel();
          var options = element.getGraphicGroup();
          var o = element.getChildrenBBox();
          var style = this.getStyle(element);
          var type = item.collapsed;
          var p = item.padding ? item.padding : value;
          if (
            (o.minX === 1 / 0 && ((o.minX = item.x), (o.maxX = item.x + x), (o.minY = item.y), (o.maxY = item.y + val)),
            type && ((o.minX = o.maxX - x), (o.maxY = o.minY + val)),
            o.maxX - o.minX < x)
          ) {
            var _ = x - o.maxX + o.minX;
            o.minX -= _ / 2;
            o.maxX += _ / 2;
          }
          var r = (function (src, name) {
            return src.minX - name[3];
          })(o, p);
          var name = (function (src, name) {
            return src.minY - name[0];
          })(o, p);
          var e = (function (range, charsetPart) {
            return range.maxX - range.minX + charsetPart[3] + charsetPart[1];
          })(o, p);
          var key = (function (range, charsetPart) {
            return range.maxY - range.minY + charsetPart[0] + charsetPart[2];
          })(o, p);
          var content = (function (addedRenderer, container, apexRestPath, to) {
            var extendedClass = container.addShape("path", {
              attrs: extend({}, to, {
                path: apexRestPath
              })
            });
            return (extendedClass.isGroupKeyShape = true), extendedClass;
          })(0, options, self.getRectPath(r, name, e, key, style.radius), style);
          return (
            (function (s, container, c, v) {
              var value = self.mix(true, {}, options, {
                x: c + r,
                y: v + t
              });
              if (self.isString(s)) {
                /** @type {string} */
                value.text = s;
              } else {
                self.mix(value, s);
              }
              container.addShape("text", {
                attrs: value
              });
            })(self.isNil(item.label) ? "\u65b0\u5efa\u5206\u7ec4" : item.label, options, r, name),
            (function (apexRestPath, container, scrollX, scrollY) {
              var ctx = container.addShape("path", {
                attrs: extend(
                  {
                    path: apexRestPath
                  },
                  settings
                )
              });
              var cameraVolume = ctx.getBBox();
              ctx.translate(scrollX - cameraVolume.minX + TILE_HEIGHT, scrollY - cameraVolume.minY + scaleFontSize);
            })(self.isNil(item.icon) ? u : item.icon, options, r, name),
            ((function (deltaType, container, start, width, count) {
              var child;
              if (deltaType) {
                var range = (child = container.addShape("path", {
                  attrs: extend(
                    {
                      path: pathConstant_41
                    },
                    attrs
                  )
                })).getBBox();
                /** @type {number} */
                var RectBegin = range.maxX - range.minX;
                /** @type {boolean} */
                child.isExpandedButton = true;
                child.translate(start + count - range.minX - RectBegin - RectEnd, width - range.minY + px);
              } else {
                var range = (child = container.addShape("path", {
                  attrs: extend(
                    {
                      path: apexRestPath
                    },
                    style
                  )
                })).getBBox();
                /** @type {number} */
                var RectBegin = range.maxX - range.minX;
                /** @type {boolean} */
                child.isCollapsedButton = true;
                child.translate(start + count - range.minX - RectBegin - RectEnd, width - range.minY + px);
              }
              return (child.isButton = true), child;
            })(type, options, r, name, e).item = element),
            (item.x = o.minX),
            (item.y = o.minY),
            content
          );
        },
        getStyle: function (node) {
          var settings = node.getModel();
          return self.mix(
            true,
            {},
            opts,
            {
              fill: settings.color,
              stroke: settings.color
            },
            settings.style
          );
        },
        getActivedStyle: function () {
          return grayscale.groupActivedStyle;
        },
        getSelectedStyle: function () {
          return grayscale.groupSelectedStyle;
        },
        getSelectedOutterStyle: function () {
          return grayscale.groupSelectedOutterStyle;
        },
        getActivedOutterStyle: function () {},
        intersectBox: "rect"
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(13).registerGuide("diagram-base");
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(81);
      saveNotifs(82);
      saveNotifs(83);
      saveNotifs(84);
      saveNotifs(85);
      saveNotifs(86);
      saveNotifs(87);
      saveNotifs(88);
      saveNotifs(89);
      saveNotifs(90);
      saveNotifs(91);
      saveNotifs(92);
      saveNotifs(93);
      saveNotifs(94);
    },
    function (canCreateDiscussions, isSlidingUp, floor) {
      var startYNew = floor(1);
      var c = floor(2);
      startYNew.registerBehaviour(
        "panItem",
        function (self) {
          var t = self.getGraph();
          t.behaviourOn("drop", function () {
            /**
             * @return {undefined}
             */
            function init() {
              deprecatedStylingMethods.forEach(function (e) {
                var item = t.find(e);
                var pixel = item.getModel();
                if (item.isGroup) {
                  c.panGroup(item, l, h, t);
                } else {
                  t.update(item, {
                    x: pixel.x + l,
                    y: pixel.y + h
                  });
                  t.toFront(item);
                }
              });
              if (1 === deprecatedStylingMethods.length) {
                self.clearSelected();
                self.setSelected(selected, true);
              }
            }
            var devices = self.get("panItems");
            if (devices) {
              var d = devices[0];
              var deprecatedStylingMethods = devices.map(function (timeline_mode) {
                return timeline_mode.id;
              });
              var dayOutline = self.get("panItemDelegation");
              var point = self.get("panItemStartBox");
              var selected = d.id;
              /** @type {number} */
              var l = dayOutline.attr("x") - point.minX;
              /** @type {number} */
              var h = dayOutline.attr("y") - point.minY;
              t.emit("afterpanitemdrop", {
                panItems: devices
              });
              self.clearAlignLine();
              var editor = self.editor;
              t.emit("panitemend");
              if (!editor || self.getSignal("dragaddnodetogroup")) {
                init();
              } else {
                editor.executeCommand(init);
              }
            }
          });
        },
        ["startPanItem", "processPanItem", "endPanItem"]
      );
    },
    function (canCreateDiscussions, isSlidingUp, n) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var end = n(1);
      var s = n(5);
      end.registerBehaviour("hoverAnchorActived", function (self) {
        var barline = self.getGraph();
        barline.behaviourOn("anchor:mouseenter", function (boundingshape) {
          if (!self.getSignal("panningItem") && !self.getSignal("dragEdge")) {
            var _self = boundingshape.shape;
            var menuItem = _self.getItem();
            var newParentLayerNode = menuItem.getModel();
            var u = (function (_style) {
              /** @type {number} */
              var i = 1;
              for (; i < arguments.length; i++) {
                var object = null != arguments[i] ? arguments[i] : {};
                /** @type {!Array<string>} */
                var o = Object.keys(object);
                if ("function" == typeof Object.getOwnPropertySymbols) {
                  /** @type {!Array<?>} */
                  o = o.concat(
                    Object.getOwnPropertySymbols(object).filter(function (key) {
                      return Object.getOwnPropertyDescriptor(object, key).enumerable;
                    })
                  );
                }
                o.forEach(function (prop) {
                  _defineProperty(_style, prop, object[prop]);
                });
              }
              return _style;
            })({}, self.get("addEdgeModel"), {
              source: newParentLayerNode.id
            });
            var args = {
              anchor: _self.getPoint(),
              item: menuItem
            };
            self.emit("hoveranchor:beforeaddedge", args);
            if (args.cancel) {
              self.css({
                cursor: s.cursor.hoverUnEffectiveAnchor
              });
            } else {
              self.css({
                cursor: s.cursor.hoverEffectiveAnchor
              });
              if (!_self.get("destroyed")) {
                _self.setActived();
              }
              self.beginAdd("edge", u);
              barline.draw();
            }
          }
        });
        barline.behaviourOn("anchor:mouseleave", function (_props) {
          if (!self.getSignal("dragEdge") && !self.getSignal("panningItem")) {
            var value = _props.shape;
            var ad = value.getItem();
            self.css({
              cursor: s.cursor.beforePanCanvas
            });
            if (!ad.isSelected) {
              self.clearAnchor(ad);
              self.setActived(ad, false);
            }
            if (!value.get("destroyed")) {
              value.clearActived();
            }
            self.cancelAdd();
            barline.draw();
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, n) {
      var end = n(1);
      var s = n(5);
      end.registerBehaviour("hoverEdgeControlPoint", function (card) {
        card.getGraph().behaviourOn("edgeControlPoint:mouseenter", function (symbolProxy) {
          if (!card.getSignal("dragEdge") && !card.getSignal("panningItem")) {
            var symbolProxyShape = symbolProxy.shape;
            if (symbolProxyShape.isTargetEndPoint() || symbolProxyShape.isSourceEndPoint()) {
              card.css({
                cursor: s.cursor.hoverEdgeControllPoint
              });
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, createElement) {
      var csHere = createElement(1);
      var o = createElement(5);
      var controls = createElement(2);
      csHere.registerBehaviour(
        "dragEdgeControlPoint",
        function (self) {
          /**
           * @param {!Object} fn
           * @return {undefined}
           */
          function link(fn) {
            if (UserCol) {
              var s = {};
              doc.getNodes().forEach(function (t) {
                self.clearAnchor(t);
              });
              self.css({
                cursor: o.cursor.beforePanCanvas
              });
              UserCol.remove();
              var m = controls.dropUpdateEdge({
                ev: fn,
                endPointType: response ? "target" : "source",
                model: s,
                diagram: self
              });
              doc.show(data);
              var item = data.id;
              if (m) {
                var editor = self.editor;
                if (editor) {
                  editor.executeCommand("update", {
                    itemId: item,
                    updateModel: s
                  });
                } else {
                  doc.update(item, s);
                }
              }
              self.setSignal("dragEdge", false);
              response = void 0;
              placeholder = void 0;
              UserCol = void 0;
              _currentPathStepNumber = void 0;
              own = void 0;
              u = void 0;
              end = void 0;
              target = void 0;
              data = void 0;
              src = void 0;
            }
          }
          var response;
          var placeholder;
          var UserCol;
          var _currentPathStepNumber;
          var own;
          var u;
          var end;
          var target;
          var data;
          var src;
          var doc = self.getGraph();
          var options = doc.getRootGroup();
          doc.behaviourOn("edgeControlPoint:mousedown", function (item) {
            if (2 !== item.button) {
              var value = item.shape;
              if (value.isTargetEndPoint()) {
                data = value.getItem();
                src = data.getModel();
                response = value;
                _currentPathStepNumber = value.getSourcePoint();
                own = data.getSource();
                end = src.sourceAnchor;
              } else {
                if (value.isSourceEndPoint()) {
                  data = value.getItem();
                  src = data.getModel();
                  placeholder = value;
                  _currentPathStepNumber = value.getTargetPoint();
                  u = data.getTarget();
                  target = src.targetAnchor;
                }
              }
              if (data) {
                UserCol = self.getDelegation([data], options);
                if (own) {
                  self.dragEdgeBeforeShowAnchor(own, end, "target");
                } else {
                  if (u) {
                    self.dragEdgeBeforeShowAnchor(u, target, "source");
                  }
                }
                doc.hide(data);
                self.setSignal("dragEdge", true);
              }
            }
          });
          doc.behaviourOn("mousemove", function (fn) {
            if (UserCol) {
              controls.dragingEdgeEndPoint({
                endPointType: own ? "target" : "source",
                edgeModel: src,
                graph: doc,
                delegation: UserCol,
                startPoint: _currentPathStepNumber,
                ev: fn,
                originSource: own,
                originTarget: u
              });
            }
          });
          doc.behaviourOn("edgeControlPoint:mouseleave", function (outline) {
            if (!(response || placeholder || outline.toShape)) {
              self.css({
                cursor: o.cursor.beforePanCanvas
              });
            }
          });
          doc.behaviourOn("mouseup", link);
          doc.behaviourOn("canvas:mouseleave", link);
        },
        ["dragHoverAnchorHotspot"]
      );
    },
    function (canCreateDiscussions, isSlidingUp, getPoint) {
      var end = getPoint(1);
      var p = getPoint(2);
      end.registerBehaviour(
        "dragPanelItemAddNode",
        function (self) {
          /**
           * @return {undefined}
           */
          function testPageTranslation() {
            self.setSignal("panningItem", false);
            self.set("panItemDelegation", void 0);
            self.set("panItemStartBox", void 0);
            self.set("panItemStartPoint", void 0);
            form = void 0;
            img_options = void 0;
            d = void 0;
            c = void 0;
          }
          var bounds;
          var form;
          var img_options;
          var d;
          var c;
          var a = self.getGraph();
          var iframe = a.getRootGroup();
          a.behaviourOn("canvas:mouseenter", function (pt) {
            if (!form && ((d = self.get("addType")), (c = self.get("addModel")), (c = p.clone(c)), "node" === d)) {
              /** @type {number} */
              var sz = (img_options = p.getNodeSize(c.size))[0] / 2;
              /** @type {number} */
              var margin = img_options[1] / 2;
              bounds = {
                minX: pt.x - sz,
                minY: pt.y - margin,
                maxX: pt.x + sz,
                maxY: pt.y + margin,
                width: img_options[0],
                height: img_options[1]
              };
              form = self.getDelegation([bounds], iframe);
              self.setSignal("panningItem", true);
              self.set("panItemDelegation", form);
              self.set("panItemStartBox", bounds);
              self.set("panItemStartPoint", {
                x: pt.x,
                y: pt.y
              });
            }
          });
          a.behaviourOn("mouseup", function (b) {
            if (form) {
              c.x = b.x;
              c.y = b.y;
              var scroll = d;
              p.setId(c);
              var editor = self.editor;
              form.remove();
              self.endAdd();
              self.clearAlignLine();
              self.clearSelected();
              self.focusGraphWrapper();
              if (editor) {
                editor.executeCommand("add", {
                  type: "node",
                  addModel: c
                });
              } else {
                a.add(scroll, c);
              }
              self.setSelected(a.find(c.id), true);
              testPageTranslation();
            }
          });
          a.behaviourOn("canvas:mouseleave", function () {
            if (form) {
              self.clearAlignLine();
              form.remove();
              a.draw();
              self.cancelAdd();
              testPageTranslation();
            }
          });
        },
        ["processPanItem"]
      );
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(1).registerBehaviour("dragHoverAnchorHotspot", function (seriesModel) {
        var t = seriesModel.getGraph();
        t.behaviourOn("anchor:dragenter", function (value) {
          if (seriesModel.getSignal("dragEdge")) {
            var shape = value.shape;
            seriesModel.setHotspotActived(shape, true);
          }
        });
        t.behaviourOn("anchor:dragleave", function (value) {
          if (seriesModel.getSignal("dragEdge")) {
            var shape = value.shape;
            seriesModel.setHotspotActived(shape, false);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, n) {
      var end = n(1);
      var next = n(2);
      end.registerBehaviour(
        "dragAnchorAddEdge",
        function (self) {
          var t = self.getGraph();
          var unexpandedFeatureDirectoryPaths = t.getRootGroup();
          t.behaviourOn("anchor:dragstart", function (settings) {
            if (2 !== settings.button) {
              var layout = settings.shape;
              var markerCoord = layout.get("freezePoint");
              var object = layout.getItem();
              var json = next.clone(self.get("addModel"));
              var u = layout.getIndex();
              json.source = object.id;
              json.sourceAnchor = u;
              var startPoint = {
                x: markerCoord.x,
                y: markerCoord.y
              };
              var unexpandedSupportCodeFilePaths = self.getDelegation(
                [
                  {
                    isEdge: true
                  }
                ],
                unexpandedFeatureDirectoryPaths
              );
              self.setSignal("dragEdge", true);
              self.dragEdgeBeforeShowAnchor(object, u, "target");
              self.set("addEdgeConfig", {
                addModel: json,
                delegation: unexpandedSupportCodeFilePaths,
                startPoint: startPoint,
                sourceItem: object
              });
            }
          });
        },
        ["processAddEdge", "dragHoverAnchorHotspot", "hoverAnchorActived"]
      );
    },
    function (canCreateDiscussions, isSlidingUp, n) {
      var end = n(1);
      var s = n(5);
      end.registerBehaviour("dragMultiSelect", function (self) {
        /**
         * @return {undefined}
         */
        function getInnerZoomStyle() {
          self.css({
            cursor: s.cursor.beforePanCanvas
          });
          bbox = void 0;
          rect = void 0;
        }
        var bbox;
        var rect;
        var me = self.getGraph();
        var container = me.getRootGroup();
        self.css({
          cursor: s.cursor.multiSelect
        });
        me.behaviourOn("dragstart", function (event) {
          if (2 !== event.button) {
            bbox = {
              x: event.x,
              y: event.y
            };
            rect = container.addShape("rect", {
              attrs: s.multiSelectRectStyle
            });
          }
        });
        me.behaviourOn("drag", function (bounds) {
          if (rect) {
            rect.attr({
              x: Math.min(bbox.x, bounds.x),
              y: Math.min(bbox.y, bounds.y),
              width: Math.abs(bounds.x - bbox.x),
              height: Math.abs(bounds.y - bbox.y)
            });
            me.draw();
          }
        });
        me.behaviourOn("dragend", function () {
          /**
           * @return {undefined}
           */
          function start() {
            self.clearSelected();
            pipelets.forEach(function (opts) {
              var name = me.find(opts);
              var a = name.getBBox();
              if (a.minX > b.minX && a.minY > b.minY && a.maxX < b.maxX && a.maxY < b.maxY) {
                self.setSelected(name, true);
              }
            });
          }
          if (rect) {
            var pipelets = me.getNodes().map(function (timeline_mode) {
              return timeline_mode.id;
            });
            var b = rect.getBBox();
            var cli = self.editor;
            if (cli) {
              cli.executeCommand(start);
            } else {
              start();
            }
            rect.remove();
            self.changeMode("default");
            self.updateStatus();
            me.draw();
            getInnerZoomStyle();
          }
        });
        me.behaviourOn("canvas:mouseleave", function () {
          if (rect) {
            rect.remove();
            me.draw();
            getInnerZoomStyle();
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(1).registerBehaviour("keydownShiftMultiSelected", function (n) {
        var fakeInputElement = n.getGraph();
        fakeInputElement.behaviourOn("keydown", function (event) {
          if (event.domEvent.shiftKey) {
            n.setSignal("shiftKeyDown", true);
          }
        });
        fakeInputElement.behaviourOn("keyup", function (event) {
          if (!event.domEvent.shiftKey) {
            n.setSignal("shiftKeyDown", false);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, floor) {
      var startYNew = floor(1);
      var start = floor(5);
      startYNew.registerBehaviour("dragNodeAddToGroup", function (self) {
        /**
         * @return {undefined}
         */
        function X() {
          self.setSignal("dragaddnodetogroup", false);
          removed = void 0;
          item = void 0;
        }
        var removed;
        var item;
        var doc = self.getGraph();
        doc.behaviourOn("dragenter", function (changeDetails) {
          if (self.getSignal("panningItem")) {
            var property = self.get("panItems");
            if (
              property[0] &&
              property[0].isNode &&
              1 === property.length &&
              changeDetails.item &&
              changeDetails.item.isGroup &&
              property[0].getParent() !== changeDetails.item
            ) {
              removed = property[0];
              item = changeDetails.item;
              doc.update(item, {
                padding: start.groupBackgroundPadding.map(function (canCreateDiscussions) {
                  return canCreateDiscussions + 4;
                }),
                style: start.dragNodeHoverToGroupStyle
              });
            }
          }
        });
        doc.behaviourOn("dragleave", function () {
          if (item && removed) {
            doc.update(item, {
              padding: void 0,
              style: void 0
            });
          }
        });
        doc.behaviourOn("drop", function (res) {
          /**
           * @return {undefined}
           */
          function action() {
            doc.update(i, {
              parent: a
            });
          }
          if (item && removed && item === res.item) {
            self.setSignal("dragaddnodetogroup", true);
            var i = removed.id;
            var a = item.id;
            doc.update(a, {
              padding: void 0,
              style: void 0,
              collapsed: false
            });
            var editor = self.editor;
            if (editor) {
              editor.executeCommand(action);
            } else {
              action();
            }
          }
        });
        doc.behaviourOn("dragend", function () {
          X();
        });
        doc.behaviourOn("canvas:mouseleave", function () {
          if (item) {
            doc.update(item, {
              padding: void 0,
              style: void 0
            });
            X();
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, floor) {
      var startYNew = floor(1);
      var option = floor(5);
      var end = floor(2);
      startYNew.registerBehaviour("dragOutFromGroup", function (chordSeries) {
        /**
         * @return {undefined}
         */
        function _drawSymGrps() {
          clearTimeout(_takingTooLongTimeout);
          if (item) {
            self.update(item, {
              padding: void 0,
              style: void 0
            });
          }
          /** @type {boolean} */
          c = false;
          p = void 0;
          item = void 0;
        }
        var p;
        var item;
        var _takingTooLongTimeout;
        var self = chordSeries.getGraph();
        /** @type {boolean} */
        var c = false;
        self.behaviourOn("drag", function (boundingshape) {
          if (chordSeries.getSignal("panningItem") && !c) {
            clearTimeout(_takingTooLongTimeout);
            /** @type {number} */
            _takingTooLongTimeout = setTimeout(function () {
              var contents = chordSeries.get("panItems");
              if (contents) {
                if (
                  ((p = contents[0]),
                  (item = contents[0].getParent()),
                  p && 1 === contents.length && item && !boundingshape.shape)
                ) {
                  var matrix = chordSeries.get("panItemDelegation").getBBox();
                  var result = item.getBBox();
                  if (end.rectRectCrossAlgorithm(matrix, result)) {
                    self.update(item, {
                      padding: option.groupBackgroundPadding.map(function (canCreateDiscussions) {
                        return canCreateDiscussions - 8;
                      }),
                      style: option.dragNodeLeaveFromGroupStyle
                    });
                    /** @type {boolean} */
                    c = true;
                  }
                }
                if (!c) {
                  p = void 0;
                  item = void 0;
                }
              }
            }, option.outFromGroupDelayTime);
          }
        });
        self.behaviourOn("dragenter", function (res) {
          if (p && item) {
            if (item === res.item) {
              self.update(item, {
                padding: option.groupBackgroundPadding.map(function (canCreateDiscussions) {
                  return canCreateDiscussions + 4;
                }),
                style: option.dragNodeHoverToGroupStyle
              });
            }
            /** @type {boolean} */
            c = false;
          }
        });
        self.on("drop", function (boundingshape) {
          if (item && p && !boundingshape.shape) {
            self.update(p, {
              parent: void 0
            });
            self.update(item, {
              style: void 0
            });
            _drawSymGrps();
          }
        });
        self.on("dragend", function () {
          _drawSymGrps();
        });
        self.behaviourOn("canvas:mouseleave", function () {
          _drawSymGrps();
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, $) {
      var $realtime = $(1);
      var self = $(2);
      var workspace = $(5);
      $realtime.registerBehaviour("processAddEdge", function (item) {
        /**
         * @return {undefined}
         */
        function testPageTranslation() {
          item.setSignal("dragEdge", false);
          item.set("addEdgeConfig", {
            addModel: void 0,
            delegation: void 0,
            startPoint: void 0,
            sourceItem: void 0
          });
        }
        var graph = item.getGraph();
        graph.behaviourOn("mousemove", function (fn) {
          var $scope = item.get("addEdgeConfig");
          if ($scope) {
            var $scopeId = $scope.addModel;
            var imageChanges = $scope.delegation;
            var startPoint = $scope.startPoint;
            var sourceItem = $scope.sourceItem;
            if (imageChanges) {
              self.dragingEdgeEndPoint({
                endPointType: "target",
                edgeModel: $scopeId,
                graph: graph,
                delegation: imageChanges,
                startPoint: startPoint,
                ev: fn,
                sourceItem: sourceItem
              });
            }
          }
        });
        graph.behaviourOn("mouseup", function (fn) {
          var $scope = item.get("addEdgeConfig");
          if ($scope) {
            var c = $scope.addModel;
            var _article = $scope.delegation;
            var data = $scope.sourceItem;
            var editor = item.editor;
            if (_article) {
              graph.getNodes().forEach(function (t) {
                item.clearAnchor(t);
              });
              item.clearAnchor(data);
              item.setActived(data, false);
              item.setSelected(data, false);
              item.css({
                cursor: workspace.cursor.beforePanCanvas
              });
              _article.remove();
              if (
                self.dropUpdateEdge({
                  ev: fn,
                  endPointType: "target",
                  model: c,
                  diagram: item
                })
              ) {
                if (editor) {
                  editor.executeCommand("add", {
                    type: "edge",
                    addModel: c
                  });
                } else {
                  graph.add("edge", c);
                }
              }
              graph.draw();
              item.endAdd();
              testPageTranslation();
            } else {
              testPageTranslation();
            }
          }
        });
        graph.behaviourOn("canvas:mouseleave", function () {
          var params = item.get("addEdgeConfig");
          if (params) {
            var $sorter = params.delegation;
            var i = params.sourceItem;
            if ($sorter) {
              graph.getNodes().forEach(function (t) {
                item.clearAnchor(t);
              });
              item.setActived(i, false);
              item.clearAnchor(i);
              $sorter.remove();
              item.cancelAdd();
              graph.draw();
              testPageTranslation();
            } else {
              testPageTranslation();
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(1).registerBehaviour("hoverNodeAddOutter", function (n) {
        var type;
        var chordSeries = n.getGraph();
        chordSeries.behaviourOn("node:mouseenter", function (block) {
          var value = block.item;
          if (n.getSignal("dragEdge")) {
            type = value;
            n.addOutterShape(value, {
              stroke: "#52C41A",
              strokeOpacity: 0.45,
              lineWidth: 4
            });
          }
        });
        chordSeries.behaviourOn("node:mouseleave", function () {
          if (type) {
            n.clearOutterShape(type);
          }
        });
        chordSeries.behaviourOn("beforedropedge", function () {
          if (type) {
            n.clearOutterShape(type);
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      var assert = require(1);
      var a2 = require(5);
      var TagHourlyStat = require(2);
      assert.registerBehaviour("orbit", function (model) {
        var end;
        var child = model.getGraph();
        child.behaviourOn("beforepanitem", function () {
          model.hideOrbit();
        });
        child.behaviourOn("node:mouseenter", function (snnm) {
          var i = snnm.item;
          if (!(model.getSignal("panningItem") || model.getSignal("dragEdge"))) {
            end = i;
            model.showOrbit(i);
          }
        });
        child.on("beforeviewportchange", function () {
          model.hideOrbit();
        });
        child.behaviourOn("mousemove", function (a) {
          var i = a.item;
          var r = a.x;
          var by = a.y;
          if (end) {
            var layout = end.getBBox();
            var matchIdx = TagHourlyStat.euclideanDistance.pointPoint(
              {
                x: layout.centerX,
                y: layout.centerY
              },
              {
                x: r,
                y: by
              }
            );
            var d = child.getMatrix()[0];
            if (i !== end && matchIdx > layout.width / 2 + a2.orbitGap / d) {
              model.hideOrbit();
              end = void 0;
            }
            if (end) {
              model.layoutOrbit(end, {
                x: r,
                y: by
              });
            }
          }
        });
      });
    },
    function (mixin, canCreateDiscussions, NFA) {
      var m = NFA(11);
      NFA(96);
      mixin.exports = m;
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(97);
      saveNotifs(98);
      saveNotifs(99);
      saveNotifs(100);
      saveNotifs(101);
    },
    function (canCreateDiscussions, isSlidingUp, $) {
      var yy = $(11);
      yy.registerNode("flow-base", {});
      yy.registerNode("flow-html", {}, ["html"]);
      yy.registerNode("flow-rect", {}, "flow-base");
      yy.registerNode("flow-capsule", {}, "capsule");
      yy.registerNode("flow-circle", {}, "circle");
      yy.registerNode("flow-rhombus", {}, "rhombus");
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(11).registerEdge("flow-base", {});
    },
    function (canCreateDiscussions, isSlidingUp, floor) {
      /**
       * @param {string} r
       * @param {string} b
       * @param {string} g
       * @param {number} v
       * @return {?}
       */
      function callback(r, b, g, v) {
        /** @type {number} */
        var n = v ? v / 2 : 30;
        /** @type {number} */
        var i = v;
        if ((r <= b && b <= g) || (r >= b && b >= g)) {
          /** @type {number} */
          var w = (g - b) / 2;
          /** @type {number} */
          var len = Math.abs(w);
          if (0 === w) {
            return r === b ? 0 : ((b - r) / Math.abs(b - r)) * n;
          }
          if (len > i) {
            /** @type {number} */
            var heading = (w / len) * i;
            return Math.abs(heading) < n ? (w / len) * n : heading;
          }
          return len < n ? (w / len) * n : w;
        }
        /** @type {number} */
        var result = n;
        return (
          (result = Math.abs(b - g) < 2 * Math.abs(b - r) ? (v * Math.abs(b - g)) / (2 * Math.abs(b - r)) : v) > i &&
            (result = i),
          result < n && (result = n),
          b > r ? result : -result
        );
      }
      /**
       * @param {!Object} parent
       * @param {!Object} options
       * @param {!Object} args
       * @param {!Object} obj
       * @return {?}
       */
      function extend(parent, options, args, obj) {
        var r;
        var n;
        var opts = parent.bbox;
        var l = (function (e, o) {
          /** @type {number} */
          var w = Math.abs(e.x - o.centerX);
          /** @type {number} */
          var h = Math.abs(e.y - o.centerY);
          return w / o.width > h / o.height;
        })(options, opts);
        /** @type {number} */
        r = n = 0;
        /** @type {number} */
        var index = Math.min(opts.height, opts.width);
        return (
          obj && obj.bbox && (index = Math.min(index, obj.bbox.height, obj.bbox.width)),
          l
            ? (r = callback(opts.centerX, options.x, args.x, index))
            : (n = callback(opts.centerY, options.y, args.y, index)),
          {
            x: options.x + r,
            y: options.y + n
          }
        );
      }
      /**
       * @param {!Object} val
       * @param {!Object} obj
       * @return {?}
       */
      function clone(val, obj) {
        var x = val.x;
        var y = val.y;
        var b = obj.x;
        var v = obj.y;
        return {
          x: x + (b - x) * f,
          y: y + (v - y) * f
        };
      }
      /**
       * @param {!Object} positions
       * @param {!Object} options
       * @param {!Object} index
       * @return {?}
       */
      function render(positions, options, index) {
        var x = positions[0];
        var item = positions[positions.length - 1];
        /** @type {!Array} */
        var overflow = ["M", x.x, x.y];
        var p = (function (value, data, options, obj) {
          return [
            options && options.bbox ? extend(options, value, data, obj) : clone(value, data),
            obj && obj.bbox ? extend(obj, data, value, options) : clone(data, value)
          ];
        })(x, item, options, index);
        /** @type {!Array} */
        var map = ["C"];
        /** @type {!Array} */
        var bodyOverflowPropNames = [overflow];
        return (
          w.each(p, function (options) {
            map.push(options.x, options.y);
          }),
          map.push(item.x, item.y),
          bodyOverflowPropNames.push(map),
          bodyOverflowPropNames
        );
      }
      var w = floor(19);
      var startYNew = floor(11);
      /** @type {number} */
      var f = 0.1;
      startYNew.registerEdge(
        "flow-smooth",
        {
          getPathByPoints: function (params) {
            return render(params.points, params.source, params.target);
          }
        },
        "flow-edge"
      );
    },
    function (canCreateDiscussions, isSlidingUp, $) {
      /**
       * @param {?} cb
       * @return {?}
       */
      function next(cb) {
        return (next =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (init) {
                return typeof init;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(cb);
      }
      /**
       * @param {?} userId
       * @param {number} doc
       * @return {?}
       */
      function link(userId, doc) {
        return (
          (function (res) {
            if (Array.isArray(res)) {
              return res;
            }
          })(userId) ||
          (function (values, object) {
            /** @type {!Array} */
            var result = [];
            /** @type {boolean} */
            var _n = true;
            /** @type {boolean} */
            var o = false;
            var i = void 0;
            try {
              var info;
              var __$0 = values[Symbol.iterator]();
              for (
                ;
                !(_n = (info = __$0.next()).done) && (result.push(info.value), !object || result.length !== object);
                _n = true
              ) {}
            } catch (contactCapacity) {
              /** @type {boolean} */
              o = true;
              i = contactCapacity;
            } finally {
              try {
                if (!(_n || null == __$0.return)) {
                  __$0.return();
                }
              } finally {
                if (o) {
                  throw i;
                }
              }
            }
            return result;
          })(userId, doc) ||
          (function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          })()
        );
      }
      /**
       * @param {!Object} t
       * @param {!Object} input
       * @return {?}
       */
      function s(t, input) {
        /** @type {number} */
        var minX = Math.min(t.minX, input.minX);
        /** @type {number} */
        var minY = Math.min(t.minY, input.minY);
        /** @type {number} */
        var maxX = Math.max(t.maxX, input.maxX);
        /** @type {number} */
        var maxY = Math.max(t.maxY, input.maxY);
        return {
          centerX: (minX + maxX) / 2,
          centerY: (minY + maxY) / 2,
          minX: minX,
          minY: minY,
          maxX: maxX,
          maxY: maxY,
          height: maxY - minY,
          width: maxX - minX
        };
      }
      /**
       * @param {?} target
       * @param {?} source
       * @return {?}
       */
      function distance(target, source) {
        return (
          2 * Math.abs(target.centerX - source.centerX) < target.width + source.width &&
          2 * Math.abs(target.centerY - source.centerY) < target.height + source.height
        );
      }
      /**
       * @param {!Object} a
       * @return {?}
       */
      function clone(a) {
        var x = a.x;
        var y = a.y;
        return {
          centerX: x,
          centerY: y,
          minX: x,
          minY: y,
          maxX: x,
          maxY: y,
          height: 0,
          width: 0
        };
      }
      /**
       * @param {!Object} b
       * @param {number} margin
       * @return {?}
       */
      function contains(b, margin) {
        return 0 === b.width && 0 === b.height
          ? b
          : {
              centerX: b.centerX,
              centerY: b.centerY,
              minX: b.minX - margin,
              minY: b.minY - margin,
              maxX: b.maxX + margin,
              maxY: b.maxY + margin,
              height: b.height + 2 * margin,
              width: b.width + 2 * margin
            };
      }
      /**
       * @param {!Object} rect
       * @param {!Object} x
       * @return {?}
       */
      function render(rect, x) {
        return (function (e, rect) {
          /** @type {number} */
          var width = Math.abs(e.x - rect.centerX);
          /** @type {number} */
          var height = Math.abs(e.y - rect.centerY);
          return width / rect.width > height / rect.height;
        })(x, rect)
          ? {
              x: x.x > rect.centerX ? rect.maxX : rect.minX,
              y: x.y
            }
          : {
              x: x.x,
              y: x.y > rect.centerY ? rect.maxY : rect.minY
            };
      }
      /**
       * @param {!Object} p
       * @return {?}
       */
      function extend(p) {
        var mx = p.minX;
        var y = p.minY;
        var maxX = p.maxX;
        var maxY = p.maxY;
        return [
          {
            x: mx,
            y: y
          },
          {
            x: maxX,
            y: y
          },
          {
            x: maxX,
            y: maxY
          },
          {
            x: mx,
            y: maxY
          }
        ];
      }
      /**
       * @param {!Object} p
       * @param {!Object} c
       * @return {?}
       */
      function pointInTri(p, c) {
        var x = p.x;
        var y = p.y;
        return x < c.minX || x > c.maxX || y < c.minY || y > c.maxY;
      }
      /**
       * @param {!Object} s
       * @param {!Object} t
       * @param {!Object} p
       * @param {!Object} c
       * @return {?}
       */
      function f(s, t, p, c) {
        /** @type {number} */
        var h = t.x - s.x;
        /** @type {number} */
        var w = t.y - s.y;
        /** @type {number} */
        var b = c.x - p.x;
        /** @type {number} */
        var v = c.y - p.y;
        /** @type {number} */
        var u = (-w * (s.x - p.x) + h * (s.y - p.y)) / (-b * w + h * v);
        /** @type {number} */
        var e = (b * (s.y - p.y) - v * (s.x - p.x)) / (-b * w + h * v);
        return u >= 0 && u <= 1 && e >= 0 && e <= 1;
      }
      /**
       * @param {!Object} a
       * @param {!Object} b
       * @param {!Object} item
       * @return {?}
       */
      function set(a, b, item) {
        if ((item.width === item.height) === 0) {
          return false;
        }
        var x = link(extend(item), 4);
        var obj = x[0];
        var h = x[1];
        var p = x[2];
        var d = x[3];
        return f(a, b, obj, h) || f(a, b, obj, d) || f(a, b, h, p) || f(a, b, p, d);
      }
      /**
       * @param {!Array} value
       * @return {?}
       */
      function setTimeout(value) {
        return (value = handler(value));
      }
      /**
       * @param {!Object} instance
       * @param {!Object} obj
       * @return {?}
       */
      function done(instance, obj) {
        return [
          instance,
          {
            x: instance.x,
            y: obj.y
          },
          obj
        ];
      }
      /**
       * @param {!Array} type
       * @return {?}
       */
      function handler(type) {
        /** @type {!Array} */
        var pathComps = [];
        var params = {};
        return (
          type.forEach(function (options) {
            /** @type {string} */
            var tab = (options.id = "".concat(options.x, "-").concat(options.y));
            /** @type {!Object} */
            params[tab] = options;
          }),
          can.each(params, function (inWeb) {
            pathComps.push(inWeb);
          }),
          pathComps
        );
      }
      /**
       * @param {!Object} t
       * @param {!Object} s
       * @return {?}
       */
      function d(t, s) {
        return Math.abs(t.x - s.x) + Math.abs(t.y - s.y);
      }
      /**
       * @param {!Object} a
       * @param {!Object} id
       * @param {!Object} index
       * @param {!Object} url
       * @param {!Object} dimensions
       * @return {?}
       */
      function callback(a, id, index, url, dimensions) {
        return (
          d(a, id) +
          d(a, index) +
          (function (source, wrappersTemplates) {
            /** @type {number} */
            var value = 0;
            return (
              wrappersTemplates.forEach(function (t) {
                if (t) {
                  if (source.x === t.x) {
                    value = value + -2;
                  }
                  if (source.y === t.y) {
                    value = value + -2;
                  }
                }
              }),
              value
            );
          })(a, [id, index, url, dimensions])
        );
      }
      /**
       * @param {!Array} args
       * @param {!Object} model
       * @param {!Object} i
       * @param {!Object} fn
       * @param {!Object} context
       * @param {!Object} x
       * @param {!Object} y
       * @return {?}
       */
      function insert(args, model, i, fn, context, x, y) {
        /** @type {!Array} */
        var u = [];
        /** @type {!Array} */
        var domain = [model];
        var obj = {};
        var data = {};
        var result = {};
        /** @type {number} */
        data[model.id] = 0;
        result[model.id] = callback(model, i, model);
        var ranges = {};
        args.forEach(function (range) {
          /** @type {string} */
          ranges[range.id] = range;
        });
        /**
         * @return {?}
         */
        var create = function () {
          var arg;
          var text;
          var p;
          var m = void 0;
          /** @type {number} */
          var max = 1 / 0;
          if (
            (domain.forEach(function (match) {
              if (result[match.id] < max) {
                max = result[match.id];
                /** @type {!Object} */
                m = match;
              }
            }),
            m === i)
          ) {
            /** @type {!Array} */
            var fvalue = [];
            return (
              (function extend(arr, obj, attrs, id) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                arr.unshift(obj[id]);
                if (attrs[id] && attrs[id] !== id && i <= 100) {
                  extend(arr, obj, attrs, attrs[id], i + 1);
                }
              })(fvalue, ranges, obj, i.id),
              {
                v: fvalue
              }
            );
          }
          text = m;
          if ((p = (arg = domain).indexOf(text)) > -1) {
            arg.splice(p, 1);
          }
          u.push(m);
          (function (argStrings, b, data, i) {
            /** @type {!Array} */
            var definitions = [];
            return (
              argStrings.forEach(function (a) {
                if (a !== b) {
                  if (!((a.x !== b.x && a.y !== b.y) || set(a, b, data) || set(a, b, i))) {
                    definitions.push(a);
                  }
                }
              }),
              handler(definitions)
            );
          })(args, m, fn, context).forEach(function (v) {
            if (-1 === u.indexOf(v)) {
              if (-1 === domain.indexOf(v)) {
                domain.push(v);
              }
              var travis_job = result[m.id] + d(m, v);
              if (!(data[v.id] && travis_job >= data[v.id])) {
                obj[v.id] = m.id;
                data[v.id] = travis_job;
                result[v.id] = data[v.id] + callback(v, i, model, x, y);
              }
            }
          });
        };
        for (; domain.length; ) {
          var obj = create();
          if ("object" === next(obj)) {
            return obj.v;
          }
        }
        return console.error("cannot find path: ", args, model, i), [model, i];
      }
      /**
       * @param {!Object} c
       * @param {!Object} item
       * @param {!Object} options
       * @param {!Object} obj
       * @param {number} x
       * @return {?}
       */
      function run(c, item, options, obj, x) {
        var path = options && options.bbox ? options.bbox : clone(c);
        var event = obj && obj.bbox ? obj.bbox : clone(item);
        if (distance(path, event)) {
          return setTimeout(done(c, item));
        }
        var a = contains(path, x);
        var b = contains(event, x);
        if (distance(a, b)) {
          return setTimeout(done(c, item));
        }
        var val = render(a, c);
        var e = render(b, item);
        var top = (function () {
          var pipelets = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          /** @type {!Array} */
          var x = [];
          /** @type {!Array} */
          var ys = [];
          pipelets.forEach(function (d) {
            x.push(d.x);
            ys.push(d.y);
          });
          /** @type {number} */
          var minX = Math.min.apply(Math, x);
          /** @type {number} */
          var maxX = Math.max.apply(Math, x);
          /** @type {number} */
          var minY = Math.min.apply(Math, ys);
          /** @type {number} */
          var maxY = Math.max.apply(Math, ys);
          return {
            centerX: (minX + maxX) / 2,
            centerY: (minY + maxY) / 2,
            maxX: maxX,
            maxY: maxY,
            minX: minX,
            minY: minY,
            height: maxY - minY,
            width: maxX - minX
          };
        })([val, e]);
        var h = (s(a, b), s(a, top));
        var res = s(b, top);
        /** @type {!Array} */
        var result = [];
        result = (result = result.concat(extend(h))).concat(extend(res));
        var startP1 = {
          x: (c.x + item.x) / 2,
          y: (c.y + item.y) / 2
        };
        [top, h, res].forEach(function (pPackageDeps) {
          result = result.concat(
            (function (obj, p1) {
              return (function (xyz, x) {
                return x < xyz.minX || x > xyz.maxX
                  ? []
                  : [
                      {
                        x: x,
                        y: xyz.minY
                      },
                      {
                        x: x,
                        y: xyz.maxY
                      }
                    ];
              })(obj, p1.x).concat(
                (function (d, Y) {
                  return Y < d.minY || Y > d.maxY
                    ? []
                    : [
                        {
                          x: d.minX,
                          y: Y
                        },
                        {
                          x: d.maxX,
                          y: Y
                        }
                      ];
                })(obj, p1.y)
              );
            })(pPackageDeps, startP1).filter(function (p) {
              return pointInTri(p, a) && pointInTri(p, b);
            })
          );
        });
        [
          {
            x: val.x,
            y: e.y
          },
          {
            x: e.x,
            y: val.y
          }
        ].forEach(function (p) {
          if (pointInTri(p, a) && pointInTri(p, b)) {
            result.push(p);
          }
        });
        result.unshift(val);
        result.push(e);
        var data = insert((result = handler(result)), val, e, path, event, c, item);
        return data.unshift(c), data.push(item), setTimeout(data);
      }
      /**
       * @param {!Object} args
       * @param {number} element
       * @return {?}
       */
      function execute(args, element) {
        /** @type {!Array} */
        var outChance = [];
        var opts = args[0];
        return (
          outChance.push("M".concat(opts.x, " ").concat(opts.y)),
          args.forEach(function (id, iurl) {
            var p = args[iurl + 1];
            var t = args[iurl + 2];
            if (p && t) {
              if (
                (function (source, t, b) {
                  return !((source.x === t.x) === b.x || (source.y === t.y) === b.y);
                })(id, p, t)
              ) {
                var a = link(
                  (function (e, o, r, c) {
                    var v = d(e, o);
                    var s = d(r, o);
                    return (
                      v < c && (c = v),
                      s < c && (c = s),
                      [
                        {
                          x: o.x - (c / v) * (o.x - e.x),
                          y: o.y - (c / v) * (o.y - e.y)
                        },
                        {
                          x: o.x - (c / s) * (o.x - r.x),
                          y: o.y - (c / s) * (o.y - r.y)
                        }
                      ]
                    );
                  })(id, p, t, element),
                  2
                );
                var attrs = a[0];
                var node = a[1];
                outChance.push("L".concat(attrs.x, " ").concat(attrs.y));
                outChance.push("Q".concat(p.x, " ").concat(p.y, " ").concat(node.x, " ").concat(node.y));
                outChance.push("L".concat(node.x, " ").concat(node.y));
              } else {
                outChance.push("L".concat(p.x, " ").concat(p.y));
              }
            } else {
              if (p) {
                outChance.push("L".concat(p.x, " ").concat(p.y));
              }
            }
          }),
          outChance.join("")
        );
      }
      var can = $(19);
      var relativeUrlImg = $(11);
      /** @type {number} */
      var undefined = 16;
      /** @type {number} */
      var firstDisplayed = 5;
      relativeUrlImg.registerEdge("flow-polyline", {
        getPathByPoints: function (params) {
          var sets = params.points;
          var data = params.source;
          var cb = params.target;
          /** @type {number} */
          var left = undefined;
          var result = run(sets[0], sets[sets.length - 1], data, cb, left);
          return can.pointsToPolygon(result);
        }
      });
      relativeUrlImg.registerEdge("flow-polyline-round", {
        getPathByPoints: function (params) {
          var sets = params.points;
          var data = params.source;
          var t = params.target;
          /** @type {number} */
          var callback = undefined;
          /** @type {number} */
          var i = firstDisplayed;
          return execute(setTimeout(run(sets[0], sets[sets.length - 1], data, t, callback)), i);
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(11).registerGroup("flow-base", {});
    },
    function (mixin, canCreateDiscussions, NFA) {
      var m = NFA(17);
      NFA(103);
      mixin.exports = m;
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(104);
      saveNotifs(105);
      saveNotifs(106);
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(17).registerNode(
        "koni-base",
        {
          defaultFillPalette: 5,
          defaultStrokePalette: 5,
          activedFillPalette: 4,
          activedStrokePalette: 6,
          selectedFillPalette: 5,
          selectedStrokePalette: 6,
          anchor: null
        },
        "circle"
      );
    },
    function (canCreateDiscussions, isSlidingUp, makeBuffer) {
      var outwindow = makeBuffer(17);
      var window = makeBuffer(24);
      var vec3 = window.vec2;
      outwindow.registerEdge("koni-base", {
        getDefaultLabelRectPadding: function () {
          return window.toAllPadding([0, 2]);
        },
        getPathByPoints: function (c) {
          var p = c.points;
          var b = c.source;
          var i = c.target;
          var data = c.item;
          if (b && i) {
            var eq = window.getParallelEdges(i, b);
            var x = window.getParallelEdges(b, i);
            var s = x.indexOf(data);
            return b === i
              ? ((s = (x = x.filter(function (elManager) {
                  var a = elManager.getModel();
                  return a.source === b.id && a.target === i.id;
                })).indexOf(data)),
                (function (amount, n32) {
                  var pendingAnimations = amount.getBBox();
                  /** @type {!Array} */
                  var p = [pendingAnimations.centerX, pendingAnimations.centerY];
                  /** @type {number} */
                  var r = pendingAnimations.width / 2;
                  /** @type {number} */
                  var escaped = 50 * (n32 + 1) + 50;
                  /** @type {!Array} */
                  var o = [p[0] - r / 2, p[1] - (Math.sqrt(3) / 2) * r];
                  /** @type {!Array} */
                  var start = [o[0] - p[0], o[1] - p[1]];
                  var childStartView2 = vec3.scale([], start, (r + escaped) / r);
                  /** @type {!Array} */
                  var l = [p[0] + childStartView2[0], p[1] + childStartView2[1]];
                  /** @type {!Array} */
                  var vec2 = [p[0] + r / 2, p[1] - (Math.sqrt(3) / 2) * r];
                  /** @type {!Array} */
                  var c2 = [vec2[0] - p[0], vec2[1] - p[1]];
                  var s = vec3.scale([], c2, (r + escaped) / r);
                  /** @type {!Array} */
                  var g = [p[0] + s[0], p[1] + s[1]];
                  return [
                    ["M", o[0], o[1]],
                    ["C", l[0], l[1], g[0], g[1], vec2[0], vec2[1]]
                  ];
                })(b, s))
              : (0 === eq.length && s--,
                (function (o, t, n32) {
                  var self = o.getBBox();
                  var ret = t.getBBox();
                  var offsetX = self.centerX;
                  var offsetY = self.centerY;
                  /** @type {number} */
                  var angMove = 20 * (n32 + 1);
                  /** @type {!Array} */
                  var s = [0.5 * (ret.centerX + offsetX) - offsetX, 0.5 * (ret.centerY + offsetY) - offsetY];
                  /** @type {!Array} */
                  var light_direction = [-s[1], s[0]];
                  var angFactor = vec3.length(light_direction);
                  vec3.scale(light_direction, light_direction, angMove / angFactor);
                  var f = {
                    x: s[0] + light_direction[0] + offsetX,
                    y: s[1] + light_direction[1] + offsetY
                  };
                  var xhair = o.getLinkPoints(f)[0];
                  var deltaCoordinate = t.getLinkPoints(f)[0];
                  return [
                    ["M", xhair.x, xhair.y],
                    ["Q", f.x, f.y, deltaCoordinate.x, deltaCoordinate.y]
                  ];
                })(b, i, s));
          }
          return window.pointsToPolygon(p);
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(17).registerGroup("koni-base", {});
    },
    function (mixin, canCreateDiscussions, require) {
      var m = require(8);
      m.Util = require(10);
      require(108);
      require(112);
      require(120);
      mixin.exports = m;
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(109);
      saveNotifs(110);
      saveNotifs(111);
    },
    function (canCreateDiscussions, isSlidingUp, floor) {
      var startYNew = floor(1);
      var start = floor(10);
      startYNew.registerBehaviour(
        "panMindNode",
        function (self) {
          /**
           * @return {undefined}
           */
          function init() {
            node.nth = linker;
            var name = api.add("node", node);
            self.setSelected(name, true);
            if (obj) {
              api.remove(obj.id);
            }
          }
          /**
           * @return {undefined}
           */
          function call_user_is_writing() {
            api.emit("panitemend");
            node = void 0;
            obj = void 0;
            linker = void 0;
          }
          var node;
          var linker;
          var obj;
          var api = self.getGraph();
          api.behaviourOn("beforeshowdelegation", function () {
            self.clearSelected();
            self.clearActived();
          });
          api.behaviourOn("node:dragstart", function (state) {
            if (2 !== state.button) {
              var template = state.item;
              if (
                !(node = template.getModel()).parent ||
                state.shape.isCollapsedButton ||
                state.shape.isExpandedButton
              ) {
                call_user_is_writing();
              } else {
                linker = api.getNth(template);
                api.remove(template);
              }
            }
          });
          api.behaviourOn("itempanning", function (view) {
            if (!view.shape || !view.shape.isPlaceholder) {
              var result = self.getHotArea(view);
              var newOembed = self.getRoot();
              if (
                (obj && (result ? obj.id !== result.id && api.remove(api.find(obj.id)) : api.remove(api.find(obj.id))),
                (obj = result),
                result)
              ) {
                var r = result.parent;
                if (!api.find(result.id)) {
                  var data = {
                    id: result.id,
                    parent: r.id,
                    isPlaceholder: true,
                    parentModel: r,
                    baseline: obj.parent.id === newOembed.id ? "center" : void 0,
                    shape: "mind-placeholder",
                    nth: result.nth
                  };
                  if (result.side) {
                    data.side = result.side;
                  }
                  api.add("node", data);
                }
              }
            }
          });
          api.behaviourOn("drop", function () {
            if (node) {
              if (obj) {
                var u = start.clone(node);
                api.remove(obj.id);
                self.executeCommand("moveMindNode", {
                  model: u,
                  newParentId: obj.parent.id,
                  newNth: obj.nth,
                  newSide: obj.side,
                  originParentId: node.parent,
                  originNth: linker,
                  originSide: node.side
                });
              } else {
                init();
              }
            }
            call_user_is_writing();
          });
          api.behaviourOn("canvas:mouseleave", function () {
            if (node) {
              init();
              call_user_is_writing();
            }
          });
        },
        ["startPanItem", "processPanItem", "endPanItem"]
      );
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(1).registerBehaviour("keydownMoveSelection", function (n) {
        n.getGraph().on("keydown", function (srcRegister) {
          n._moveItemSelection(srcRegister);
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(1).registerBehaviour("keydownEditLabel", function (n) {
        n.getGraph().behaviourOn("keydown", function (srcRegister) {
          n.showLabelEditor(srcRegister);
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(113);
      saveNotifs(114);
      saveNotifs(115);
      saveNotifs(116);
      saveNotifs(117);
      saveNotifs(118);
      saveNotifs(119);
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      /**
       * @param {!Object} targetObj
       * @return {?}
       */
      function extend(targetObj) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            defineProperty(targetObj, k, o[k]);
          });
        }
        return targetObj;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var BUI = require(8);
      var ctx = require(10);
      var json = {
        fill: "#000",
        textAlign: "left",
        textBaseline: "top"
      };
      var style = {
        stroke: "#959EA6",
        strokeOpacity: 0,
        fill: "#959EA6",
        cursor: "pointer"
      };
      var attrs = {
        stroke: "#434B54",
        fill: "#fff",
        cursor: "pointer"
      };
      BUI.registerNode("mind-base", {
        dy: 4,
        afterDraw: function (edge) {
          var nodeStructure = edge.getModel();
          if (nodeStructure.children && nodeStructure.children.length > 0 && nodeStructure.collapsed) {
            this.drawExpandedButton(edge);
          }
        },
        debugDrawLayoutPoint: function (elManager) {
          var markerCoord = elManager.getModel();
          elManager.getGraphicGroup().addShape("circle", {
            attrs: {
              x: markerCoord.x,
              y: markerCoord.y,
              r: 5,
              fill: "red"
            }
          });
        },
        drawExpandedButton: function (edge) {
          var t = edge.getKeyShape().getBBox();
          var group = edge.getGraphicGroup().addGroup();
          var child = group.addShape("path", {
            attrs: extend(
              {
                path: ctx.getRectPath(0, 0, 16, 7, 3)
              },
              style
            )
          });
          var url = child.getBBox();
          var length = ctx.getMindNodeSide(edge);
          var config = this.getButtonPositon(t, url, length);
          var attrs = {
            fill: "white",
            r: 1
          };
          group.addShape("circle", {
            attrs: extend({}, attrs, {
              x: 4,
              y: 3.5
            }),
            capture: false
          });
          group.addShape("circle", {
            attrs: extend({}, attrs, {
              x: 8,
              y: 3.5
            }),
            capture: false
          });
          group.addShape("circle", {
            attrs: extend({}, attrs, {
              x: 12,
              y: 3.5
            }),
            capture: false
          });
          child.attr("lineAppendWidth", 20);
          group.translate(config.x, config.y);
          /** @type {boolean} */
          child.isExpandedButton = true;
          /** @type {boolean} */
          child.isButton = true;
        },
        drawCollapsedButton: function (edge) {
          var input = edge.getKeyShape().getBBox();
          var item = edge.getGraphicGroup().addShape("path", {
            attrs: extend(
              {
                path: ctx.getCollapsedButtonPath()
              },
              attrs
            )
          });
          var C = item.getBBox();
          var id = ctx.getMindNodeSide(edge);
          var that = this.getButtonPositon(input, C, id);
          item.translate(that.x, that.y);
          /** @type {boolean} */
          item.isCollapsedButton = true;
          /** @type {boolean} */
          item.isButton = true;
        },
        getButtonPositon: function (n, a, el) {
          return "right" === el
            ? {
                x: n.maxX + 2,
                y: n.maxY - (a.maxY - a.minY) / 2
              }
            : {
                x: n.minX - (a.maxX - a.minX) - 2,
                y: n.maxY - (a.maxY - a.minY) / 2
              };
        },
        getLabel: function (row) {
          return row.getModel().label;
        },
        getPadding: function () {
          return [4, 8, 4, 8];
        },
        getSize: function (element) {
          var stat = element.getModel();
          var doc = element.getGraphicGroup();
          var result = stat.size;
          if (stat.size) {
            if (ctx.isArray(result)) {
              return result;
            }
            if (ctx.isNumber(result)) {
              return [result, result];
            }
          }
          var o = doc.findByClass("label")[0];
          var padding = this.getPadding(element);
          var groupRect = o.getBBox();
          return [groupRect.width + padding[1] + padding[3], groupRect.height + padding[0] + padding[2]];
        },
        getPath: function (node) {
          var size = this.getSize(node);
          var style = this.getStyle(node);
          return ctx.getRectPath(-size[0] / 2, -size[1] / 2 + this.dy, size[0], size[1], style.radius);
        },
        drawLabel: function (item) {
          var assert = item.getGraphicGroup();
          var label = this.getLabel(item);
          var height = this.getLabelStyle(item);
          if (!label) {
            /** @type {string} */
            label = " ";
          }
          var data = ctx.mix(true, {}, json, height, {
            x: 0,
            y: 0
          });
          if (ctx.isObject(label)) {
            ctx.mix(data, label);
          } else {
            data.text = label;
          }
          var n = assert.addShape("text", {
            class: "label",
            attrs: data
          });
          return this.adjustLabelText(n), this.adjustLabelPosition(item, n), n;
        },
        adjustLabelText: function (g) {
          var r = g.attr("text");
          var range = g.getBBox();
          if (range.maxX - range.minX > 400) {
            var height = g.attr("font");
            r = ctx.getLabelTextByTextLineWidth(r, height);
            g.attr("text", r);
          }
        },
        adjustLabelPosition: function (content, t) {
          var size = this.getSize(content);
          var padding = this.getPadding();
          var canvasHeight = size[0];
          var cssChanges = t.getBBox();
          t.attr({
            x: -canvasHeight / 2 + padding[3],
            y: -cssChanges.height / 2 + this.dy
          });
        },
        getLabelStyle: function () {
          return {
            fill: "rgba(38,38,38,0.85)",
            lineHeight: 18,
            fontSize: 12
          };
        },
        getStyle: function () {
          return {
            fill: "#ccc",
            fillOpacity: 0,
            radius: 4,
            lineWidth: 2
          };
        },
        getActivedStyle: function () {
          return {
            stroke: "#44C0FF",
            lineWidth: 2
          };
        },
        getSelectedStyle: function () {
          return {
            stroke: "#1AA7EE",
            lineWidth: 2
          };
        },
        anchor: [
          [0, 1],
          [1, 1]
        ]
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(8).registerNode("mind-first-sub", {
        dy: 0,
        getPadding: function () {
          return [6, 12, 8, 12];
        },
        getLabelStyle: function () {
          return {
            fill: "rgba(38,38,38,0.85)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 20
          };
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(8).registerNode("mind-second-sub", {
        dy: 0,
        getPadding: function () {
          return [8, 4, 8, 4];
        },
        getLabelStyle: function () {
          return {
            fill: "rgba(38,38,38,0.85)",
            fontSize: 12,
            lineHeight: 20
          };
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, $) {
      var t = $(8);
      var ctx = $(10);
      t.registerNode(
        "mind-root",
        {
          adjustLabelPosition: function (value2, t) {
            var cssChanges = t.getBBox();
            t.attr({
              x: -cssChanges.width / 2,
              y: -cssChanges.height / 2 - 1
            });
          },
          getPath: function (node) {
            var size = this.getSize(node);
            var style = this.getStyle(node);
            return ctx.getRectPath(-size[0] / 2, -size[1] / 2, size[0], size[1], style.radius);
          },
          getButtonPositon: function (range, n, el) {
            return "right" === el
              ? {
                  x: range.maxX + 2,
                  y: (range.maxY + range.minY) / 2 - (n.maxY - n.minY) / 2
                }
              : {
                  x: range.minX - (n.maxX - n.minX) - 2,
                  y: (range.maxY + range.minY) / 2 - (n.maxY - n.minY) / 2
                };
          },
          getPadding: function () {
            return ctx.toAllPadding([12, 24]);
          },
          getStyle: function () {
            return {
              fill: "#587EF7",
              stroke: "#587EF7",
              fillOpacity: 1,
              radius: 4
            };
          },
          getLabelStyle: function () {
            return {
              fontSize: 20,
              fill: "white",
              lineHeight: 28
            };
          },
          drawExpandedButton: function () {},
          drawCollapsedButton: function () {},
          panAble: false,
          anchor: [
            [0.45, 0.5],
            [0.55, 0.5]
          ]
        },
        "mind-first-sub"
      );
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      var $ = require(8);
      var ctx = require(10);
      $.registerNode("mind-placeholder", {
        afterDraw: function (edge) {
          /** @type {boolean} */
          edge.getKeyShape().isPlaceholder = true;
        },
        getPath: function (node) {
          var e;
          var fsStub = node.getModel().parentModel;
          var style = this.getStyle(node);
          /** @type {number} */
          var i = 0;
          return (
            fsStub.hierarchy <= 2 ? (e = 28) : ((e = 20), (i = 4)),
            ctx.getRectPath(-27.5, -e / 2 + i, 55, e, style.radius)
          );
        },
        getStyle: function () {
          return {
            fill: "#91D5FF",
            radius: 4,
            lineWidth: 3
          };
        },
        drawExpandedButton: function () {},
        drawCollapsedButton: function () {},
        anchor: function () {
          return [
            [0, 1],
            [1, 1]
          ];
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(8).registerEdge("mind-edge", {
        getEdetal: function (elem) {
          return elem.children && elem.children.length > 0 && !elem.collapsed ? (2 === elem.hierarchy ? 24 : 18) : 0;
        },
        getPath: function (e) {
          var minima = e.getPoints();
          var classNameG = e.getSource();
          var mgr = e.getTarget();
          var opts = classNameG.getBBox();
          var options = mgr.getBBox();
          var elem = mgr.getModel();
          /** @type {number} */
          var halfitem = 14;
          /** @type {number} */
          var width = 4;
          if ((2 === elem.hierarchy && ((halfitem = 66), (width = 30)), minima[0].y === minima[1].y)) {
            /** @type {number} */
            var sinHalfOffset = 3 === elem.hierarchy ? 24 : 18;
            var x = this.getEdetal(elem);
            return opts.centerX < options.centerX
              ? [
                  ["M", minima[0].x + sinHalfOffset, minima[0].y],
                  ["L", options.maxX + x, options.maxY]
                ]
              : [
                  ["M", minima[0].x + 2, minima[0].y],
                  ["L", options.minX - x, options.maxY]
                ];
          }
          if (elem.hierarchy >= 3) {
            /** @type {number} */
            var r = 3 === elem.hierarchy ? 24 : 18;
            var x = this.getEdetal(elem);
            if (opts.centerX < options.centerX) {
              var address = minima[0].x + r;
              return [
                ["M", minima[0].x, minima[0].y],
                ["M", address, minima[0].y],
                ["C", address + width, minima[0].y, options.minX - halfitem, options.maxY, options.minX, options.maxY],
                ["L", options.maxX + x, options.maxY]
              ];
            }
            /** @type {number} */
            var startX = minima[0].x - r;
            return [
              ["M", minima[0].x, minima[0].y],
              ["M", startX, minima[0].y],
              ["C", startX - width, minima[0].y, options.maxX + halfitem, options.maxY, options.maxX, options.maxY],
              ["L", options.minX - x, options.maxY]
            ];
          }
          var x = this.getEdetal(elem);
          return opts.centerX < options.centerX
            ? [
                ["M", minima[0].x, minima[0].y],
                [
                  "C",
                  minima[0].x + width,
                  minima[0].y,
                  options.minX - halfitem,
                  options.maxY,
                  options.minX,
                  options.maxY
                ],
                ["L", options.maxX + x, options.maxY]
              ]
            : [
                ["M", minima[0].x, minima[0].y],
                [
                  "C",
                  minima[0].x - width,
                  minima[0].y,
                  options.maxX + halfitem,
                  options.maxY,
                  options.maxX,
                  options.maxY
                ],
                ["L", options.minX - x, options.maxY]
              ];
        },
        getStyle: function (item) {
          var lApp = item.getTarget();
          /** @type {number} */
          var lineWidth = 1;
          if (lApp) {
            var fsStub = lApp.getModel();
            /** @type {number} */
            lineWidth = fsStub.hierarchy <= 3 ? 3 : fsStub.hierarchy <= 5 ? 2 : 1;
          }
          return {
            stroke: "#959EA6",
            lineWidth: lineWidth
          };
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function set(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      saveNotifs(8).registerEdge("mind-placeholder-edge", {
        getOriginShapeObject: function (n) {
          return n.getGraph().getShapeObj("edge", {
            shape: "mind-edge"
          });
        },
        getPath: function (value) {
          return this.getOriginShapeObject(value).getPath(value);
        },
        getStyle: function (node) {
          return (function (value) {
            /** @type {number} */
            var i = 1;
            for (; i < arguments.length; i++) {
              var obj = null != arguments[i] ? arguments[i] : {};
              /** @type {!Array<string>} */
              var o = Object.keys(obj);
              if ("function" == typeof Object.getOwnPropertySymbols) {
                /** @type {!Array<?>} */
                o = o.concat(
                  Object.getOwnPropertySymbols(obj).filter(function (key) {
                    return Object.getOwnPropertyDescriptor(obj, key).enumerable;
                  })
                );
              }
              o.forEach(function (prop) {
                set(value, prop, obj[prop]);
              });
            }
            return value;
          })({}, this.getOriginShapeObject(node).getStyle(node), {
            stroke: "#91D5FF"
          });
        }
      });
    },
    function (canCreateDiscussions, isSlidingUp, require) {
      /**
       * @param {?} model
       * @param {!Object} obj
       * @param {string} i
       * @return {?}
       */
      function update(model, obj, i) {
        var _ = model.getGraph();
        var panel42 = obj.getModel();
        var els = model.getFirstChildrenBySide("left");
        var id = els[0] && _.find(els[0].id);
        return _.add("node", {
          id: i,
          parent: obj.id,
          label: "\u65b0\u5efa\u8282\u70b9",
          side: panel42.children.length > 2 ? "left" : "right",
          nth: id ? _.getNth(id) : void 0
        });
      }
      var _ = require(15);
      var $ = require(10);
      _.registerCommand("append", {
        enable: function (element) {
          var userDashboards = element.getCurrentPage();
          var expRecords = userDashboards.getSelected();
          return userDashboards.isMind && 1 === expRecords.length;
        },
        getItem: function (element) {
          var model = element.getCurrentPage();
          var filteredView = model.getGraph();
          return this.selectedItemId ? filteredView.find(this.selectedItemId) : model.getSelected()[0];
        },
        execute: function (key) {
          var node;
          var model = key.getCurrentPage();
          var logger = model.getGraph();
          var panel42 = model.getRoot();
          var item = this.getItem(key);
          var self = item.getModel();
          var hi = self.hierarchy;
          var parentArticle1 = item.getParent();
          if (item.isRoot) {
            node = update(model, item, this.addItemId);
          } else {
            var itemNew = logger.getNth(item);
            node = logger.add("node", {
              id: this.addItemId,
              parent: parentArticle1.id,
              side: 2 === hi && 3 === panel42.children.length ? "left" : self.side,
              label: "\u65b0\u5efa\u8282\u70b9",
              nth: "left" === self.side && 2 === hi ? itemNew : itemNew + 1
            });
          }
          model.clearSelected();
          model.clearActived();
          model.setSelected(node, true);
          if (1 === this.executeTimes) {
            this.selectedItemId = item.id;
            this.addItemId = node.id;
            model.beginEditLabel(node);
          }
        },
        back: function (context) {
          var model = context.getCurrentPage();
          model.getGraph().remove(this.addItemId);
          model.clearSelected();
          model.clearActived();
          model.setSelected(this.selectedItemId, true);
        },
        shortcutCodes: ["Enter"]
      });
      _.registerCommand("appendChild", {
        enable: function (element) {
          var userDashboards = element.getCurrentPage();
          var expRecords = userDashboards.getSelected();
          return userDashboards.isMind && expRecords.length > 0;
        },
        getItem: function (element) {
          var model = element.getCurrentPage();
          var filteredView = model.getGraph();
          return this.selectedItemId ? filteredView.find(this.selectedItemId) : model.getSelected()[0];
        },
        execute: function (name) {
          var item;
          var model = name.getCurrentPage();
          var _ = model.getGraph();
          var options = this.getItem(name);
          item = options.isRoot
            ? update(model, options, this.addItemId)
            : _.add("node", {
                id: this.addItemId,
                parent: options.id,
                label: "\u65b0\u5efa\u8282\u70b9"
              });
          model.clearSelected();
          model.clearActived();
          model.setSelected(item, true);
          if (1 === this.executeTimes) {
            this.selectedItemId = options.id;
            this.addItemId = item.id;
            model.beginEditLabel(item);
          }
        },
        back: function (context) {
          var model = context.getCurrentPage();
          model.getGraph().remove(this.addItemId);
          model.clearSelected();
          model.clearActived();
          model.setSelected(this.selectedItemId, true);
        },
        shortcutCodes: ["Tab"]
      });
      _.registerCommand("moveMindNode", {
        enable: function (element) {
          var currCMDs = element.getCurrentPage();
          var typedCmds = currCMDs.get("panItems");
          return currCMDs.isMind && typedCmds && typedCmds.length > 0;
        },
        execute: function (app) {
          var model = app.getCurrentPage();
          var $scope = model.getGraph();
          var instanceOne = this.newParentId;
          var nth = this.newNth;
          var materialSideRow = this.newSide;
          var data = $.clone(this.model);
          delete data.shape;
          delete data.side;
          $scope.remove(data.id);
          $.mix(data, {
            parent: instanceOne,
            nth: nth,
            side: materialSideRow
          });
          var value = $scope.add("node", data);
          model.clearSelected();
          model.setSelected(value, true);
        },
        back: function (context) {
          var model = context.getCurrentPage();
          var $scope = model.getGraph();
          var instanceOne = this.originParentId;
          var nth = this.originNth;
          var materialSideRow = this.originSide;
          var data = $.clone(this.model);
          delete data.shape;
          delete data.side;
          $scope.remove(data.id);
          $.mix(data, {
            parent: instanceOne,
            nth: nth,
            side: materialSideRow
          });
          var value = $scope.add("node", data);
          model.clearSelected();
          model.setSelected(value, true);
        }
      });
    },
    function (module, canCreateDiscussions, n) {
      /**
       * @param {string} pos
       * @return {?}
       */
      function fn(pos) {
        return (fn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (object) {
                return typeof object;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(pos);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} current
       * @param {string} a
       * @return {?}
       */
      function compile(current, a) {
        return !a || ("object" !== fn(a) && "function" != typeof a)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(current)
          : a;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function wrap(type) {
        return (wrap = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var r = n(6);
      var a = n(9);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function f() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, f),
            compile(this, wrap(f).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, e) {
            if ("function" != typeof e && null !== e) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (e) {
              action(value, e);
            }
          })(f, a),
          (Constructor = f),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  type: "toolbar",
                  container: null
                };
              }
            },
            {
              key: "init",
              value: function () {
                this._initContainer();
              }
            },
            {
              key: "_initContainer",
              value: function () {
                var el = this.container;
                if (!el) {
                  throw new Error("please set the container for the toolbar !");
                }
                if (r.isString(el)) {
                  /** @type {(Element|null)} */
                  el = document.getElementById(el);
                }
                var commands = el.getElementsByClassName("command");
                this.commands = commands;
              }
            },
            {
              key: "getCommandDoms",
              value: function () {
                return this.commands;
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          f
        );
      })();
      module.exports = storeMixin;
    },
    function (module, canCreateDiscussions, require) {
      /**
       * @param {string} pos
       * @return {?}
       */
      function fn(pos) {
        return (fn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (object) {
                return typeof object;
              }
            : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(pos);
      }
      /**
       * @param {!Object} target
       * @param {number} props
       * @return {undefined}
       */
      function defineProperties(target, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      /**
       * @param {!Array} current
       * @param {string} a
       * @return {?}
       */
      function compile(current, a) {
        return !a || ("object" !== fn(a) && "function" != typeof a)
          ? (function (n) {
              if (void 0 === n) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return n;
            })(current)
          : a;
      }
      /**
       * @param {(!Function|string)} type
       * @return {?}
       */
      function wrap(type) {
        return (wrap = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(type);
      }
      /**
       * @param {!Function} e
       * @param {!Object} obj
       * @return {?}
       */
      function action(e, obj) {
        return (action =
          Object.setPrototypeOf ||
          function (origin, proto) {
            return (origin.__proto__ = proto), origin;
          })(e, obj);
      }
      var $ = require(6);
      var a = require(9);
      var storeMixin = (function (canCreateDiscussions) {
        /**
         * @return {?}
         */
        function f() {
          return (
            (function (value, t) {
              if (!(value instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, f),
            compile(this, wrap(f).apply(this, arguments))
          );
        }
        var Constructor;
        var protoProps;
        var staticProps;
        return (
          (function (value, e) {
            if ("function" != typeof e && null !== e) {
              throw new TypeError("Super expression must either be null or a function");
            }
            /** @type {!Object} */
            value.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: value,
                writable: true,
                configurable: true
              }
            });
            if (e) {
              action(value, e);
            }
          })(f, a),
          (Constructor = f),
          (protoProps = [
            {
              key: "getDefaultCfg",
              value: function () {
                return {
                  type: "contextmenu",
                  container: null
                };
              }
            },
            {
              key: "init",
              value: function () {
                this._initContainer();
              }
            },
            {
              key: "_initContainer",
              value: function () {
                var el = this.container;
                if (!el) {
                  throw new Error("please set the container for the tontextmenu !");
                }
                if ($.isString(el)) {
                  /** @type {(Element|null)} */
                  el = document.getElementById(el);
                }
                var commands = el.getElementsByClassName("command");
                /** @type {string} */
                el.style.position = "absolute";
                /** @type {number} */
                el.style["z-index"] = 2;
                /** @type {string} */
                el.style.top = "0px";
                /** @type {string} */
                el.style.left = "0px";
                this.commands = commands;
                this.containerDom = el;
              }
            },
            {
              key: "bindEvent",
              value: function () {
                var $trashTreeContextMenu = this;
                var commands = this.commands;
                $.each(commands, function (t) {
                  $.addEventListener(t, "click", function () {
                    if (-1 === t.className.indexOf("disable")) {
                      $trashTreeContextMenu.hide();
                    }
                  });
                });
              }
            },
            {
              key: "switch",
              value: function (x) {
                var menus = this.containerDom.getElementsByClassName("menu");
                $.each(menus, function (t) {
                  if (t.dataset.status === x) {
                    /** @type {string} */
                    t.style.display = "block";
                  } else {
                    /** @type {string} */
                    t.style.display = "none";
                  }
                });
              }
            },
            {
              key: "getCommandDoms",
              value: function () {
                return this.commands;
              }
            },
            {
              key: "show",
              value: function () {
                var boxChild = this.containerDom;
                this.editor.getCurrentPage().setSignal("preventWheelPan", true);
                /** @type {string} */
                boxChild.style.display = "block";
              }
            },
            {
              key: "hide",
              value: function () {
                var boxChild = this.containerDom;
                this.editor.getCurrentPage().setSignal("preventWheelPan", false);
                /** @type {string} */
                boxChild.style.display = "none";
              }
            },
            {
              key: "move",
              value: function (x, length) {
                var element = this.containerDom;
                var dim = $.getBoundingClientRect(element);
                /** @type {number} */
                var offset = parseFloat($.getStyle(element, "top"));
                /** @type {number} */
                var t = parseFloat($.getStyle(element, "left"));
                /** @type {string} */
                element.style.left = t + (x - dim.left) + "px";
                /** @type {string} */
                element.style.top = offset + (length - dim.top) + "px";
              }
            }
          ]) && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          f
        );
      })();
      module.exports = storeMixin;
    },
    function (mixin, canCreateDiscussions, NFA) {
      var m = NFA(12);
      NFA(124);
      NFA(127);
      mixin.exports = m;
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(125);
      saveNotifs(126);
    },
    function (canCreateDiscussions, isSlidingUp, $) {
      /**
       * @param {!Object} context
       * @return {?}
       */
      function mixin(context) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {};
          /** @type {!Array<string>} */
          var oKeys = Object.keys(o);
          if ("function" == typeof Object.getOwnPropertySymbols) {
            /** @type {!Array<?>} */
            oKeys = oKeys.concat(
              Object.getOwnPropertySymbols(o).filter(function (key) {
                return Object.getOwnPropertyDescriptor(o, key).enumerable;
              })
            );
          }
          oKeys.forEach(function (k) {
            debug(context, k, o[k]);
          });
        }
        return context;
      }
      /**
       * @param {!Object} obj
       * @param {string} key
       * @param {!Object} value
       * @return {?}
       */
      function debug(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              })
            : (obj[key] = value),
          obj
        );
      }
      var result;
      var menuItem;
      var self = $(20);
      var app = self.mouseEnterEdge;
      var onInspectIconClick = self.startMove;
      var collection = self.mouseLeaveEdge;
      var c = self.mouseMoveEdge;
      var template = self.endMove;
      $(12).registerBehaviour(
        "bpmnMoveEdgeController",
        function (_) {
          /**
           * @return {undefined}
           */
          function testPageTranslation() {
            _.set("panItemDelegation", void 0);
            _.set("panItemStartBox", void 0);
            _.set("panItemStartPoint", void 0);
            val = void 0;
          }
          var val;
          var self = _.getGraph();
          var spaces = self.getRootGroup();
          self.behaviourOn("edge:mouseenter", function (me) {
            if (!result && me.item) {
              menuItem = me.item;
              app({
                graph: self,
                bpmn: _,
                ev: me,
                backUpCursor: true
              });
            }
          });
          self.behaviourOn("edge:mousedown", function (e) {
            var v = e.item;
            onInspectIconClick(self, e);
            result = v;
          });
          self.behaviourOn("mouseup", function () {
            if (result) {
              template({
                graph: self,
                item: result
              });
              result = void 0;
            }
          });
          self.behaviourOn("mousemove", function (module) {
            if (result) {
              c(self, result, module);
            } else {
              if (menuItem) {
                app({
                  graph: self,
                  bpmn: _,
                  ev: mixin({}, module, {
                    item: menuItem
                  }),
                  backUpCursor: false
                });
              }
            }
          });
          self.behaviourOn("edge:mouseleave", function () {
            if (!result) {
              if (menuItem) {
                collection({
                  graph: self,
                  bpmn: _,
                  item: menuItem
                });
                menuItem = void 0;
              }
            }
          });
          self.behaviourOn("node:dragstart", function (c) {
            var str = c.item.getBBox();
            val = _.getDelegation([str], spaces);
            _.set("bpmnNodePanDelegation", val);
            _.set("bpmnNodePanStartBox", str);
            _.set("bpmnNodePanStartPoint", {
              x: c.x,
              y: c.y
            });
            _.set("bpmnNodePanStartItem", c.item);
          });
          self.behaviourOn("node:dragend", function (p2) {
            var exMap = _.get("bpmnNodePanDelegation");
            var p1 = _.get("bpmnNodePanStartPoint");
            var obj = _.get("bpmnNodePanStartItem");
            if (obj) {
              obj.getEdges().forEach(function (t) {
                self.update(t, {
                  nodeMoved: {
                    item: obj.id,
                    start: p1,
                    delta: {
                      x: p2.x - p1.x,
                      y: p2.y - p1.y
                    }
                  }
                });
              });
            }
            exMap.remove();
            testPageTranslation();
          });
        },
        ["startPanItem", "processPanItem", "endPanItem"]
      );
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(12).registerBehaviour("hoverNodeShowArrowController", function (controller) {
        var target;
        var topo = controller.getGraph();
        var options = controller.get("arrowController");
        var height = options.long;
        var width = options.thickness;
        topo.on("node:mouseenter", function (event) {
          if (!controller.getSignal("panningItem") && !controller.getSignal("dragEdge")) {
            var d = options.topArrow;
            var element = options.bottomArrow;
            var $this = options.leftArrow;
            var caption = options.rightArrow;
            var bounds = (target = event.item).getBBox();
            var pos = topo.getDomPoint({
              x: bounds.centerX,
              y: bounds.minY
            });
            var frameCoords = topo.getDomPoint({
              x: bounds.minX,
              y: bounds.centerY
            });
            var changes = topo.getDomPoint({
              x: bounds.centerX,
              y: bounds.maxY
            });
            var coords = topo.getDomPoint({
              x: bounds.maxX,
              y: bounds.centerY
            });
            d.css({
              top: pos.y - (height + 10) + "px",
              left: pos.x - width / 2 + "px",
              transform: "rotate(-90deg)"
            });
            element.css({
              top: changes.y + 10 + "px",
              left: changes.x - width / 2 + "px",
              transform: "rotate(90deg)"
            });
            $this.css({
              top: frameCoords.y - width / 2 + "px",
              left: frameCoords.x - (height + 10) + "px",
              transform: "rotate(180deg)"
            });
            caption.css({
              top: coords.y - width / 2 + "px",
              left: coords.x + 10 + "px"
            });
            d.setAttribute("anchorIndex", 0);
            element.setAttribute("anchorIndex", 2);
            $this.setAttribute("anchorIndex", 3);
            caption.setAttribute("anchorIndex", 1);
            controller.showArrowController(target);
          }
        });
        topo.behaviourOn("mousemove", function (clipMode) {
          var x = clipMode.x;
          var y = clipMode.y;
          if (target) {
            var node1 = target.getBBox();
            var radius = height + 10;
            /** @type {number} */
            var alignX = node1.minX - radius;
            /** @type {number} */
            var alignY = node1.minY - radius;
            var centerX = node1.maxX + radius;
            var maxY = node1.maxY + radius;
            if (x < alignX || y < alignY || x > centerX || y > maxY) {
              controller.hideArrowController();
              target = void 0;
            }
          }
        });
      });
    },
    function (canCreateDiscussions, isSlidingUp, saveNotifs) {
      saveNotifs(128);
      saveNotifs(12).registerNode("bpmn-base", {
        anchor: null
      });
    },
    function (canCreateDiscussions, context, $) {
      /**
       * @param {!Object} e
       * @return {?}
       */
      function render(e) {
        var b = e.bbox;
        var key = e.shape;
        var newElKey = void 0 === key ? "ROUNDED_RECT" : key;
        var a = e.point;
        var v = e.vertical;
        /** @type {boolean} */
        v = !!v;
        var status = {
          true: "x",
          false: "y"
        };
        var types = {
          true: "minX",
          false: "minY"
        };
        var variables = {
          true: "maxX",
          false: "maxY"
        };
        switch (newElKey) {
          case "ROUNDED_RECT":
            if (a[status[v]] >= b[types[v]] + 4 && a[status[v]] <= b[variables[v]] - 4) {
              return {
                added: void 0,
                joint: {
                  x: v ? a.x : a.x > b.centerX ? b.maxX : b.minX,
                  y: v ? (a.y > b.centerY ? b.maxY : b.minY) : a.y
                }
              };
            }
            if (a[status[v]] >= b[types[v]] && a[status[v]] < b[types[v]] + 4) {
              return {
                added: void 0,
                joint: {
                  x: v
                    ? a.x
                    : a.x > b.centerX
                    ? b.maxX - 4 + Math.sqrt(16 - Math.pow(b.minY + 4 - a.y, 2))
                    : b.minX + 4 - Math.sqrt(16 - Math.pow(b.minY + 4 - a.y, 2)),
                  y: v
                    ? a.y > b.centerY
                      ? b.maxY - 4 + Math.sqrt(16 - Math.pow(b.minX + 4 - a.x, 2))
                      : b.minY + 4 - Math.sqrt(16 - Math.pow(b.minX + 4 - a.x, 2))
                    : a.y
                }
              };
            }
            if (a[status[v]] >= b[variables[v]] - 4 && a[status[v]] <= b[variables[v]]) {
              return {
                added: void 0,
                joint: {
                  x: v
                    ? a.x
                    : a.x > b.centerX
                    ? b.maxX - 4 + Math.sqrt(16 - Math.pow(a.y - b.maxY + 4, 2))
                    : b.minX + 4 - Math.sqrt(16 - Math.pow(a.y - b.maxY + 4, 2)),
                  y: v
                    ? a.y > b.centerY
                      ? b.maxY - 4 + Math.sqrt(16 - Math.pow(a.x - b.maxX + 4, 2))
                      : b.minY + 4 - Math.sqrt(16 - Math.pow(a.x - b.maxX + 4, 2))
                    : a.y
                }
              };
            }
            break;
          case "CIRCLE":
            if (a[status[v]] >= b[types[v]] && a[status[v]] <= b[variables[v]]) {
              return {
                added: void 0,
                joint: {
                  x: v
                    ? a.x
                    : a.x > b.centerX
                    ? b.centerX + Math.sqrt(16 - Math.pow(b.centerY - a.y))
                    : b.centerX - Math.sqrt(16 - Math.pow(b.centerY - a.y)),
                  y: v
                    ? a.y > b.centerY
                      ? b.centerY + Math.sqrt(16 - Math.pow(b.centerX - a.x))
                      : b.centerY - Math.sqrt(16 - Math.pow(b.centerX - a.x))
                    : a.y
                }
              };
            }
            break;
          case "RHOMEBUS":
            if (a[status[v]] >= b[types[v]] && a[status[v]] <= b[variables[v]]) {
              return {
                added: void 0,
                joint: {
                  x: v
                    ? a.x
                    : a.x > b.centerX
                    ? a.y < b.centerY
                      ? ((a.y - b.minY) * (b.maxX - b.centerX)) / (b.centerY - b.minY) + b.centerX
                      : ((b.maxY - a.y) * (b.maxX - b.centerX)) / (b.maxY - b.centerY) + b.centerX
                    : a.y < b.centerY
                    ? b.centerX - ((a.y - b.minY) * (b.centerX - b.minX)) / (b.centerY - b.minY)
                    : b.centerX - ((b.maxY - a.y) * (b.centerX - b.minX)) / (b.maxY - b.centerY),
                  y: v
                    ? a.y > b.centerY
                      ? a.x < b.centerX
                        ? ((a.x - b.minX) * (b.maxY - b.centerY)) / (b.centerX - b.minX) + b.centerY
                        : ((b.maxX - a.x) * (b.maxY - b.centerY)) / (b.maxX - b.centerX) + b.centerY
                      : a.x < b.centerX
                      ? b.centerY - ((a.x - b.minX) * (b.centerY - b.minY)) / (b.centerX - b.minX)
                      : b.centerY - ((b.maxX - a.x) * (b.centerY - b.minY)) / (b.maxX - b.centerX)
                    : a.y
                }
              };
            }
            break;
          case "RECT":
          default:
            if (a[status[v]] >= b[types[v]] && a[status[v]] <= b[variables[v]]) {
              return {
                added: void 0,
                joint: {
                  x: v ? a.x : a.x > b.centerX ? b.maxX : b.minX,
                  y: v ? (a.y > b.centerY ? b.maxY : b.minY) : a.y
                }
              };
            }
        }
        return v
          ? a.x < b.centerX
            ? {
                added: {
                  x: a.x,
                  y: b.centerY
                },
                joint: {
                  x: b.minX,
                  y: b.centerY
                }
              }
            : {
                added: {
                  x: a.x,
                  y: b.centerY
                },
                joint: {
                  x: b.maxX,
                  y: b.centerY
                }
              }
          : a.y < b.centerY
          ? {
              added: {
                x: b.centerX,
                y: a.y
              },
              joint: {
                x: b.centerX,
                y: b.minY
              }
            }
          : {
              added: {
                x: b.centerX,
                y: a.y
              },
              joint: {
                x: b.centerX,
                y: b.maxY
              }
            };
      }
      $.r(context);
      var filename = $(12);
      var req = $.n(filename);
      var options = $(0);
      var domain = $(20);
      req.a.registerEdge("bpmn-base", {
        getPath: function (self) {
          var cur;
          var item = self.getSource();
          var target = self.getTarget();
          var o = self.model;
          if (o.edgeMoved && o.lastMouse) {
            var ref$;
            var value;
            var val;
            var u;
            var id;
            var args = o.controlPoints;
            var i = o.hold.index;
            /** @type {!Array} */
            var p = [
              {
                x: args[i].x + o.edgeMoved.x,
                y: args[i].y + o.edgeMoved.y
              },
              {
                x: args[i + 1].x + o.edgeMoved.x,
                y: args[i + 1].y + o.edgeMoved.y
              }
            ];
            var q = Object(options.j)(p, 0);
            if (item) {
              var input = render({
                bbox: item.getBBox(),
                point: q,
                vertical: o.hold.vertical,
                shape: item.model.shape
              });
              value = input.added;
              val = input.joint;
            }
            if (
              (0 === i && item && ((p[0] = val), value && (p.splice(1, 0, value), (self.model.hold.index += 1))),
              target)
            ) {
              var result = render({
                bbox: target.getBBox(),
                point: q,
                vertical: o.hold.vertical,
                shape: target.model.shape
              });
              u = result.added;
              id = result.joint;
            }
            if (i === args.length - 2 && target) {
              if (value && 0 === i) {
                p[2] = id;
                if (u) {
                  p.splice(2, 0, u);
                }
              } else {
                p[1] = id;
                if (u) {
                  p.splice(1, 0, u);
                }
              }
            }
            (ref$ = o.controlPoints).splice.apply(ref$, [i, 2].concat(p));
            if (item && Object(options.l)(val, args, o.hold.index)) {
              args.splice(0, o.hold.index);
              /** @type {number} */
              o.hold.index = 0;
              args[0] = val;
            }
            if (target && Object(options.l)(id, args, o.hold.index)) {
              o.controlPoints.splice(o.hold.index + 1);
              args[o.hold.index + 1] = id;
            }
            cur = Object(domain.mergeLine)(self, i);
            (function (me, subItem, cell) {
              var segPoints = me.controlPoints;
              if (subItem) {
                var o = Object(options.f)(segPoints[0], subItem.getBBox());
                var c = o.point;
                var index = o.index;
                me.sourceJoint = {
                  index: index,
                  delta: {
                    x: segPoints[0].x - c.x,
                    y: segPoints[0].y - c.y
                  }
                };
              }
              if (cell) {
                var _ref3 = Object(options.f)(segPoints[segPoints.length - 1], cell.getBBox());
                var p = _ref3.point;
                var index = _ref3.index;
                me.targetJoint = {
                  index: index,
                  delta: {
                    x: segPoints[segPoints.length - 1].x - p.x,
                    y: segPoints[segPoints.length - 1].y - p.y
                  }
                };
              }
            })(o, item, target);
            o.lastMouse = {
              x: o.lastMouse.x + o.edgeMoved.x,
              y: o.lastMouse.y + o.edgeMoved.y
            };
          } else {
            if (o.modifiedByMouse && o.nodeMoved) {
              !(function (me, link, shape) {
                if (me.nodeMoved) {
                  /** @type {boolean} */
                  var reverse = me.nodeMoved.item === link.id;
                  /** @type {boolean} */
                  var o = me.nodeMoved.item === shape.id;
                  var self = reverse ? link.getBBox() : shape.getBBox();
                  var dO = me.nodeMoved.delta;
                  var layout = {
                    minX: self.minX - dO.x,
                    maxX: self.maxX - dO.x,
                    centerX: self.centerX - dO.x,
                    minY: self.minY - dO.y,
                    maxY: self.maxY - dO.y,
                    centerY: self.centerY + dO.y,
                    height: self.height,
                    width: self.width
                  };
                  var i = me.controlPoints;
                  if (2 === i.length) {
                    var cache = Object(options.d)(link, shape);
                    var e = cache.sourcePoint;
                    var prev = cache.targetPoint;
                    if (me.sourceJoint && e.index === me.sourceJoint.index) {
                      e.point = Object(options.c)(link.getBBox())[e.index];
                      e.point.x += me.sourceJoint.delta.x;
                      e.point.y += me.sourceJoint.delta.y;
                    }
                    if (me.targetJoint && prev.index === me.targetJoint.index) {
                      prev.point = Object(options.c)(shape.getBBox())[prev.index];
                      prev.point.x += me.targetJoint.delta.x;
                      prev.point.y += me.targetJoint.delta.y;
                    }
                    var angle = Object(options.h)(e, prev);
                    me.controlPoints = angle;
                  } else {
                    var n;
                    /** @type {number} */
                    n = reverse ? 1 : i.length - 3;
                    var ret = Object(options.i)(i, n);
                    var text = Object(options.a)(layout, i, n);
                    var value = Object(options.a)(self, i, n);
                    var step = reverse ? me.sourceJoint : me.targetJoint;
                    if (text === value) {
                      var spaceClick = Object(options.c)(self)[step.index];
                      var d = {
                        x: spaceClick.x + step.delta.x,
                        y: spaceClick.y + step.delta.y
                      };
                      var value = Object(options.g)(d, i, n);
                      if (reverse) {
                        me.controlPoints.splice(0, 2, d, value);
                      } else {
                        if (o) {
                          me.controlPoints.splice(n + 1, 2, value, d);
                        }
                      }
                    } else {
                      if (0 === value) {
                        if (3 === i.length) {
                          var linkView = Object(options.d)(link, shape);
                          var pointList = linkView.sourcePoint;
                          var sourceBBox = linkView.targetPoint;
                          var controlPoints = Object(options.h)(pointList, sourceBBox);
                          me.controlPoints = controlPoints;
                        } else {
                          var index;
                          var s = Object(options.j)(i, n);
                          /** @type {number} */
                          index = ret ? (s.y < self.centerY ? 0 : 2) : s.x < self.centerX ? 3 : 1;
                          var item = Object(options.c)(self)[index];
                          if (reverse) {
                            var end = Object(options.g)(item, i, n + 1);
                            me.controlPoints.splice(0, 3, item, end);
                            me.sourceJoint = {
                              index: index,
                              delta: {
                                x: 0,
                                y: 0
                              }
                            };
                          } else {
                            if (o) {
                              var color = Object(options.g)(item, i, n - 1);
                              me.controlPoints.splice(n, 3, color, item);
                              me.targetJoint = {
                                index: index,
                                delta: {
                                  x: 0,
                                  y: 0
                                }
                              };
                            }
                          }
                        }
                      } else {
                        var key = Object(options.k)(step.index);
                        var B = Object(options.c)(self)[key];
                        var value = Object(options.g)(B, i, n);
                        if (reverse) {
                          me.controlPoints.splice(0, 2, B, value);
                          me.sourceJoint = {
                            index: key,
                            delta: {
                              x: 0,
                              y: 0
                            }
                          };
                        } else {
                          if (o) {
                            me.controlPoints.splice(n + 1, 2, value, B);
                            me.targetJoint = {
                              index: key,
                              delta: {
                                x: 0,
                                y: 0
                              }
                            };
                          }
                        }
                      }
                    }
                  }
                }
              })(o, item, target);
            } else {
              if (!o.modifiedByMouse) {
                var pctiles = o.anchorIndex;
                var d = Object(options.d)(item, target, !o.initialed && pctiles);
                var points = d.sourcePoint;
                var model = d.targetPoint;
                var controlPoints = Object(options.h)(points, model);
                self.model.controlPoints = controlPoints;
              }
            }
          }
          return (
            (o.nodeMoved = void 0),
            {
              path: this.getPathByPoints({
                points: o.controlPoints
              }),
              helpLine: cur
            }
          );
        },
        draw: function (s) {
          var container = s.getGraphicGroup();
          var data = s.model;
          var result = this.getPath(s);
          var output = result.path;
          var gistname = result.helpLine;
          var width = this.getStyle(s);
          var wrapper = Object(options.b)(container, output, width);
          if (null != data.hold) {
            var markerCoord = Object(options.j)(data.controlPoints, data.hold.index);
            container.addShape("circle", {
              attrs: {
                x: markerCoord.x,
                y: markerCoord.y,
                r: 3,
                fill: "rgb(0,182,239)"
              }
            });
          }
          return (
            gistname && ((data.helpLine = gistname), (data.helpLineTime = new Date().getTime())),
            !gistname &&
              new Date().getTime() - data.helpLineTime >= 150 &&
              ((data.helpLine = void 0), (data.helpLineTime = void 0)),
            data.helpLine &&
              container.addShape("path", {
                attrs: {
                  path: [
                    ["M", data.helpLine[0].x, data.helpLine[0].y],
                    ["L", data.helpLine[1].x, data.helpLine[1].y]
                  ],
                  lineAppendWidth: 8,
                  lineWidth: 1,
                  strokeOpacity: 0.92,
                  stroke: "rgba(255,139,48)"
                }
              }),
            wrapper
          );
        }
      });
    }
  ]);
});
