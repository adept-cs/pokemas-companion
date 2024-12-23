'use strict';
define(
  'pokemas-companion/app',
  [
    'exports',
    '@ember/application',
    'ember-resolver',
    'ember-load-initializers',
    'pokemas-companion/config/environment',
  ],
  function (e, t, n, r, o) {
    function a(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || 'default');
              if ('object' != typeof r) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return ('string' === t ? String : Number)(e);
          })(e, 'string');
          return 'symbol' == typeof t ? t : t + '';
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    class i extends t.default {
      constructor(...e) {
        super(...e),
          a(this, 'modulePrefix', o.default.modulePrefix),
          a(this, 'podModulePrefix', o.default.podModulePrefix),
          a(this, 'Resolver', n.default);
      }
    }
    (e.default = i), (0, r.default)(i, o.default.modulePrefix);
  },
),
  define(
    'pokemas-companion/component-managers/glimmer',
    ['exports', '@glimmer/component/-private/ember-component-manager'],
    function (e, t) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    },
  ),
  define(
    'pokemas-companion/container-debug-adapter',
    ['exports', 'ember-resolver/container-debug-adapter'],
    function (e, t) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    },
  ),
  define(
    'pokemas-companion/data-adapter',
    ['exports', '@ember-data/debug/data-adapter'],
    function (e, t) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    },
  ),
  define(
    'pokemas-companion/helpers/app-version',
    [
      'exports',
      '@ember/component/helper',
      'pokemas-companion/config/environment',
      'ember-cli-app-version/utils/regexp',
    ],
    function (e, t, n, r) {
      function o(e, t = {}) {
        const o = n.default.APP.version;
        let a = t.versionOnly || t.hideSha,
          i = t.shaOnly || t.hideVersion,
          u = null;
        return (
          a &&
            (t.showExtended && (u = o.match(r.versionExtendedRegExp)),
            u || (u = o.match(r.versionRegExp))),
          i && (u = o.match(r.shaRegExp)),
          u ? u[0] : o
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.appVersion = o),
        (e.default = void 0);
      e.default = (0, t.helper)(o);
    },
  ),
  define(
    'pokemas-companion/helpers/page-title',
    ['exports', 'ember-page-title/helpers/page-title'],
    function (e, t) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    },
  ),
  define(
    'pokemas-companion/initializers/app-version',
    [
      'exports',
      'ember-cli-app-version/initializer-factory',
      'pokemas-companion/config/environment',
    ],
    function (e, t, n) {
      let r, o;
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0),
        n.default.APP &&
          ((r = n.default.APP.name), (o = n.default.APP.version));
      e.default = { name: 'App Version', initialize: (0, t.default)(r, o) };
    },
  ),
  define(
    'pokemas-companion/initializers/ember-data',
    ['exports', '@ember-data/request-utils/deprecation-support'],
    function (e, t) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      e.default = {
        name: 'ember-data',
        initialize(e) {
          e.registerOptionsForType('serializer', { singleton: !1 }),
            e.registerOptionsForType('adapter', { singleton: !1 });
        },
      };
    },
  ),
  define(
    'pokemas-companion/router',
    [
      'exports',
      '@ember/routing/router',
      'pokemas-companion/config/environment',
    ],
    function (e, t, n) {
      function r(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' != typeof e || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || 'default');
                if ('object' != typeof r) return r;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' == typeof t ? t : t + '';
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      class o extends t.default {
        constructor(...e) {
          super(...e),
            r(this, 'location', n.default.locationType),
            r(this, 'rootURL', n.default.rootURL);
        }
      }
      (e.default = o), o.map(function () {});
    },
  ),
  define(
    'pokemas-companion/services/page-title',
    ['exports', 'ember-page-title/services/page-title'],
    function (e, t) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return t.default;
          },
        });
    },
  ),
  define(
    'pokemas-companion/services/store',
    ['exports', '@ember/debug', 'ember-data/store'],
    function (e, t, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        });
    },
  ),
  define(
    'pokemas-companion/templates/application',
    ['exports', '@ember/template-factory'],
    function (e, t) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      e.default = (0, t.createTemplateFactory)({
        id: 'a8J+ue1m',
        block:
          '[[[1,[28,[35,0],["PokemasCompanion"],null]],[1,"\\n\\n"],[46,[28,[37,2],null,null],null,null,null],[1,"\\n\\n"],[8,[39,3],null,null,null],[1,"\\n"]],[],false,["page-title","component","-outlet","welcome-page"]]',
        moduleName: 'pokemas-companion/templates/application.hbs',
        isStrictMode: !1,
      });
    },
  ),
  define(
    'pokemas-companion/transforms/boolean',
    ['exports', '@ember/debug', '@ember-data/serializer/transform'],
    function (e, t, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return n.BooleanTransform;
          },
        });
    },
  ),
  define(
    'pokemas-companion/transforms/date',
    ['exports', '@ember/debug', '@ember-data/serializer/transform'],
    function (e, t, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return n.DateTransform;
          },
        });
    },
  ),
  define(
    'pokemas-companion/transforms/number',
    ['exports', '@ember/debug', '@ember-data/serializer/transform'],
    function (e, t, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return n.NumberTransform;
          },
        });
    },
  ),
  define(
    'pokemas-companion/transforms/string',
    ['exports', '@ember/debug', '@ember-data/serializer/transform'],
    function (e, t, n) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return n.StringTransform;
          },
        });
    },
  ),
  define('pokemas-companion/config/environment', [], function () {
    try {
      var e = 'pokemas-companion/config/environment',
        t = document
          .querySelector('meta[name="' + e + '"]')
          .getAttribute('content'),
        n = { default: JSON.parse(decodeURIComponent(t)) };
      return Object.defineProperty(n, '__esModule', { value: !0 }), n;
    } catch (r) {
      throw new Error(
        'Could not read config from meta tag with name "' + e + '".',
      );
    }
  }),
  runningTests ||
    require('pokemas-companion/app').default.create({
      name: 'pokemas-companion',
      version: '0.0.0+0de3ab7b',
    });
