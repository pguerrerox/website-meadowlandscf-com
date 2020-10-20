webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _layouts_LayoutDefault__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../layouts/LayoutDefault */ "./layouts/LayoutDefault.js");









var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// impoting react stuff

 // importing node modules


 // importing FontAwesome



 // importing layout component


_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["fab"]);

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    _this = _super.call(this, props);
    _this.state = {
      language: "en"
    }; // binding

    _this.langChange = _this.langChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "langChange",
    value: function langChange() {
      return this.setState(function (state) {
        return state.language === "en" ? {
          language: "es"
        } : {
          language: "en"
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var state = this.state;
      var layoutData = this.props.layoutData;
      return __jsx(_layouts_LayoutDefault__WEBPACK_IMPORTED_MODULE_16__["default"], {
        data: layoutData,
        formData: contactFormData,
        lang: state.language,
        langChange: this.langChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        lang: state.language,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var basepath, filepath, layoutData, filepathContact, contactFormData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                basepath = path__WEBPACK_IMPORTED_MODULE_12___default.a.join(process.cwd(), 'data');
                filepath = path__WEBPACK_IMPORTED_MODULE_12___default.a.join(basepath, 'layout.json');
                layoutData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_11___default.a.readFileSync(filepath, 'utf8'));
                filepathContact = path__WEBPACK_IMPORTED_MODULE_12___default.a.join(basepath, 'contact.json');
                contactFormData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_11___default.a.readFileSync(filepathContact, 'utf-8'));
                return _context.abrupt("return", {
                  layoutData: layoutData,
                  contactFormData: contactFormData
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp); // compiling page on build
// export async function getStaticPath(){
//   const staticPath = {
//     paths: ['/about', '/services'],
//     fallback: false
//   }
// }

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiZmFiIiwiTXlBcHAiLCJwcm9wcyIsInN0YXRlIiwibGFuZ3VhZ2UiLCJsYW5nQ2hhbmdlIiwiYmluZCIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibGF5b3V0RGF0YSIsImNvbnRhY3RGb3JtRGF0YSIsImN0eCIsImJhc2VwYXRoIiwicGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZXBhdGgiLCJKU09OIiwicGFyc2UiLCJmcyIsInJlYWRGaWxlU3luYyIsImZpbGVwYXRoQ29udGFjdCIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBQSwwRUFBTyxDQUFDQyxHQUFSLENBQVlDLHNFQUFaLEVBQWlCQyx1RUFBakI7O0lBRU1DLEs7Ozs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQUFFO0FBREMsS0FBYixDQUZpQixDQU1qQjs7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLHlHQUFsQjtBQVBpQjtBQVFsQjs7OztpQ0FnQlk7QUFDWCxhQUFPLEtBQUtDLFFBQUwsQ0FBYyxVQUFBSixLQUFLO0FBQUEsZUFDeEJBLEtBQUssQ0FBQ0MsUUFBTixLQUFtQixJQUFuQixHQUNJO0FBQUVBLGtCQUFRLEVBQUU7QUFBWixTQURKLEdBRUk7QUFBRUEsa0JBQVEsRUFBRTtBQUFaLFNBSG9CO0FBQUEsT0FBbkIsQ0FBUDtBQUtEOzs7NkJBRVE7QUFBQSx3QkFDMEIsS0FBS0YsS0FEL0I7QUFBQSxVQUNDTSxTQURELGVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxTQURaLGVBQ1lBLFNBRFo7QUFFUCxVQUFNTixLQUFLLEdBQUcsS0FBS0EsS0FBbkI7QUFDQSxVQUFNTyxVQUFVLEdBQUcsS0FBS1IsS0FBTCxDQUFXUSxVQUE5QjtBQUVBLGFBQ0UsTUFBQywrREFBRDtBQUFRLFlBQUksRUFBRUEsVUFBZDtBQUEwQixnQkFBUSxFQUFFQyxlQUFwQztBQUFzRCxZQUFJLEVBQUVSLEtBQUssQ0FBQ0MsUUFBbEU7QUFBNEUsa0JBQVUsRUFBRSxLQUFLQyxVQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxTQUFELHlGQUFlSSxTQUFmO0FBQTBCLFlBQUksRUFBRU4sS0FBSyxDQUFDQyxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FERjtBQUtEOzs7OytOQWhDNEJRLEc7Ozs7OztBQUNyQkMsd0IsR0FBV0MsNENBQUksQ0FBQ0MsSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixDO0FBQ1hDLHdCLEdBQVdKLDRDQUFJLENBQUNDLElBQUwsQ0FBVUYsUUFBVixFQUFvQixhQUFwQixDO0FBQ1hILDBCLEdBQWFTLElBQUksQ0FBQ0MsS0FBTCxDQUFXQywwQ0FBRSxDQUFDQyxZQUFILENBQWdCSixRQUFoQixFQUEwQixNQUExQixDQUFYLEM7QUFFYkssK0IsR0FBa0JULDRDQUFJLENBQUNDLElBQUwsQ0FBVUYsUUFBVixFQUFvQixjQUFwQixDO0FBQ2xCRiwrQixHQUFrQlEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLDBDQUFFLENBQUNDLFlBQUgsQ0FBZ0JDLGVBQWhCLEVBQWlDLE9BQWpDLENBQVgsQztpREFFakI7QUFDTGIsNEJBQVUsRUFBVkEsVUFESztBQUVMQyxpQ0FBZSxFQUFmQTtBQUZLLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkJTYSxnRDs7QUE4Q0x2QixvRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZjM2NDc4ZDc4YzQ1NTU4OTQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3RpbmcgcmVhY3Qgc3R1ZmZcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcblxuLy8gaW1wb3J0aW5nIG5vZGUgbW9kdWxlc1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBpbXBvcnRpbmcgRm9udEF3ZXNvbWVcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG4vLyBpbXBvcnRpbmcgbGF5b3V0IGNvbXBvbmVudFxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dERlZmF1bHQnO1xuXG5saWJyYXJ5LmFkZChmYXMsIGZhYik7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGFuZ3VhZ2U6IFwiZW5cIlxuICAgIH1cblxuICAgIC8vIGJpbmRpbmdcbiAgICB0aGlzLmxhbmdDaGFuZ2UgPSB0aGlzLmxhbmdDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICBjb25zdCBiYXNlcGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScpO1xuICAgIGNvbnN0IGZpbGVwYXRoID0gcGF0aC5qb2luKGJhc2VwYXRoLCAnbGF5b3V0Lmpzb24nKTtcbiAgICBjb25zdCBsYXlvdXREYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZmlsZXBhdGgsICd1dGY4JykpO1xuICAgIFxuICAgIGNvbnN0IGZpbGVwYXRoQ29udGFjdCA9IHBhdGguam9pbihiYXNlcGF0aCwgJ2NvbnRhY3QuanNvbicpO1xuICAgIGNvbnN0IGNvbnRhY3RGb3JtRGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVwYXRoQ29udGFjdCwgJ3V0Zi04JykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dERhdGEsXG4gICAgICBjb250YWN0Rm9ybURhdGFcbiAgICB9XG4gIH1cblxuICBsYW5nQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHN0YXRlID0+IChcbiAgICAgIHN0YXRlLmxhbmd1YWdlID09PSBcImVuXCJcbiAgICAgICAgPyB7IGxhbmd1YWdlOiBcImVzXCIgfVxuICAgICAgICA6IHsgbGFuZ3VhZ2U6IFwiZW5cIiB9XG4gICAgKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsYXlvdXREYXRhID0gdGhpcy5wcm9wcy5sYXlvdXREYXRhO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgZGF0YT17bGF5b3V0RGF0YX0gZm9ybURhdGE9e2NvbnRhY3RGb3JtRGF0YX0gIGxhbmc9e3N0YXRlLmxhbmd1YWdlfSBsYW5nQ2hhbmdlPXt0aGlzLmxhbmdDaGFuZ2V9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGxhbmc9e3N0YXRlLmxhbmd1YWdlfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuXG4vLyBjb21waWxpbmcgcGFnZSBvbiBidWlsZFxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGgoKXtcbi8vICAgY29uc3Qgc3RhdGljUGF0aCA9IHtcbi8vICAgICBwYXRoczogWycvYWJvdXQnLCAnL3NlcnZpY2VzJ10sXG4vLyAgICAgZmFsbGJhY2s6IGZhbHNlXG4vLyAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9