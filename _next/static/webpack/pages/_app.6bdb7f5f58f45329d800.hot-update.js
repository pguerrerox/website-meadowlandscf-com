webpackHotUpdate_N_E("pages/_app",{

/***/ "./layouts/LayoutDefault.js":
/*!**********************************!*\
  !*** ./layouts/LayoutDefault.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutDefault; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/custom.scss */ "./styles/custom.scss");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_contact_Contact_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/contact/Contact_form */ "./components/contact/Contact_form.js");
var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/layouts/LayoutDefault.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// importing nextjs/API
 // importing components


 // import Contact_form from '../components/contact/Contact_form';
// importing custom bootstrap



function LayoutDefault(props) {
  var defaultTitle = 'Meadowlands Construction & Flip';
  var pageTitle = props.children.props.title;
  var modalData = props.data[props.lang].modal;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, pageTitle ? pageTitle + ' - ' + defaultTitle : defaultTitle), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "UTF-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "favicon_48.png",
    sizes: "48x48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "favicon_180.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props.data[props.lang].header,
    lang: props.lang,
    langChange: props.langChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), props.children, __jsx("div", {
    "class": "modal fade",
    id: "formModal",
    tabindex: "-1",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "modal-dialog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("h5", {
    "class": "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, modalData.title), __jsx("button", {
    type: "button",
    "class": "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "X"))), __jsx("div", {
    "class": "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx("div", {
    "class": "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    "class": "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, modalData.btnClose))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: props.data[props.lang].footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
    integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
}
_c = LayoutDefault;

var _c;

$RefreshReg$(_c, "LayoutDefault");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
        data: layoutData + contactFormData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9MYXlvdXREZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIkxheW91dERlZmF1bHQiLCJwcm9wcyIsImRlZmF1bHRUaXRsZSIsInBhZ2VUaXRsZSIsImNoaWxkcmVuIiwidGl0bGUiLCJtb2RhbERhdGEiLCJkYXRhIiwibGFuZyIsIm1vZGFsIiwiaGVhZGVyIiwibGFuZ0NoYW5nZSIsImJ0bkNsb3NlIiwiZm9vdGVyIiwibGlicmFyeSIsImFkZCIsImZhcyIsImZhYiIsIk15QXBwIiwic3RhdGUiLCJsYW5ndWFnZSIsImJpbmQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxheW91dERhdGEiLCJjb250YWN0Rm9ybURhdGEiLCJjdHgiLCJiYXNlcGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVwYXRoIiwiSlNPTiIsInBhcnNlIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJmaWxlcGF0aENvbnRhY3QiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7Q0FFQTtBQUVBOztBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMzQyxNQUFNQyxZQUFZLEdBQUcsaUNBQXJCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUgsS0FBZixDQUFxQkksS0FBdkM7QUFDQSxNQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ00sSUFBTixDQUFXTixLQUFLLENBQUNPLElBQWpCLEVBQXVCQyxLQUF6QztBQUVBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTixTQUFTLEdBQUlBLFNBQVMs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QUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZiZGI3ZjVmNThmNDUzMjlkODAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbmV4dGpzL0FQSVxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG4vLyBpbXBvcnQgQ29udGFjdF9mb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0X2Zvcm0nO1xuXG4vLyBpbXBvcnRpbmcgY3VzdG9tIGJvb3RzdHJhcFxuaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XG5pbXBvcnQgQ29udGFjdF9mb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0X2Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXREZWZhdWx0KHByb3BzKSB7XG4gIGNvbnN0IGRlZmF1bHRUaXRsZSA9ICdNZWFkb3dsYW5kcyBDb25zdHJ1Y3Rpb24gJiBGbGlwJztcbiAgY29uc3QgcGFnZVRpdGxlID0gcHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGU7XG4gIGNvbnN0IG1vZGFsRGF0YSA9IHByb3BzLmRhdGFbcHJvcHMubGFuZ10ubW9kYWw7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlID8gKHBhZ2VUaXRsZSArICcgLSAnICsgZGVmYXVsdFRpdGxlKSA6IGRlZmF1bHRUaXRsZX08L3RpdGxlPlxuXG4gICAgICAgIHsvKiB2aWV3cG9ydCAqL31cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cblxuICAgICAgICB7LyogZm9yIElFICovfVxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG5cbiAgICAgICAgey8qIDwhLS0gRmF2aWNvbiAtLT4gKi99XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cImZhdmljb25fNDgucG5nXCIgc2l6ZXM9XCI0OHg0OFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiZmF2aWNvbl8xODAucG5nXCIgLz5cblxuICAgICAgICB7LyogYm9vdHN0cmFwICovfVxuICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIFxuICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIFxuICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgLz4gKi99XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgZGF0YT17cHJvcHMuZGF0YVtwcm9wcy5sYW5nXS5oZWFkZXJ9IGxhbmc9e3Byb3BzLmxhbmd9IGxhbmdDaGFuZ2U9e3Byb3BzLmxhbmdDaGFuZ2V9IC8+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJmb3JtTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPnttb2RhbERhdGEudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+WDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgIHsvKiA8Q29udGFjdF9mb3JtIGRhdGE9e30gLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+e21vZGFsRGF0YS5idG5DbG9zZX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIGRhdGE9e3Byb3BzLmRhdGFbcHJvcHMubGFuZ10uZm9vdGVyfSAvPlxuXG4gICAgICB7LyogYm9vdHN0cmFwIHNjcmlwdHMgKi99XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1EZlhkejJodFBIMGxzU1NzNW5DVHB1ai96eTRDK09HcGFtb0ZWeTM4TVZCbkUrSWJiVllVZXcrT3JDWGFSa2ZqXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtT2dWUnZ1QVRQMXo3SmpITGt1T1U3WHc3MDQraDgzNUxyKzZRTDlVdllqWkUzSXB1NlRwNzVqN0JoL2tSMEpLSVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgPC8+XG4gIClcbn0iLCIvLyBpbXBvdGluZyByZWFjdCBzdHVmZlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuXG4vLyBpbXBvcnRpbmcgbm9kZSBtb2R1bGVzXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIGltcG9ydGluZyBGb250QXdlc29tZVxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFiIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cbi8vIGltcG9ydGluZyBsYXlvdXQgY29tcG9uZW50XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0RGVmYXVsdCc7XG5cbmxpYnJhcnkuYWRkKGZhcywgZmFiKTtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsYW5ndWFnZTogXCJlblwiXG4gICAgfVxuXG4gICAgLy8gYmluZGluZ1xuICAgIHRoaXMubGFuZ0NoYW5nZSA9IHRoaXMubGFuZ0NoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgIGNvbnN0IGJhc2VwYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJyk7XG4gICAgY29uc3QgZmlsZXBhdGggPSBwYXRoLmpvaW4oYmFzZXBhdGgsICdsYXlvdXQuanNvbicpO1xuICAgIGNvbnN0IGxheW91dERhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlcGF0aCwgJ3V0ZjgnKSk7XG4gICAgXG4gICAgY29uc3QgZmlsZXBhdGhDb250YWN0ID0gcGF0aC5qb2luKGJhc2VwYXRoLCAnY29udGFjdC5qc29uJyk7XG4gICAgY29uc3QgY29udGFjdEZvcm1EYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZmlsZXBhdGhDb250YWN0LCAndXRmLTgnKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0RGF0YSxcbiAgICAgIGNvbnRhY3RGb3JtRGF0YVxuICAgIH1cbiAgfVxuXG4gIGxhbmdDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKFxuICAgICAgc3RhdGUubGFuZ3VhZ2UgPT09IFwiZW5cIlxuICAgICAgICA/IHsgbGFuZ3VhZ2U6IFwiZXNcIiB9XG4gICAgICAgIDogeyBsYW5ndWFnZTogXCJlblwiIH1cbiAgICApKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGxheW91dERhdGEgPSB0aGlzLnByb3BzLmxheW91dERhdGE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBkYXRhPXtsYXlvdXREYXRhICsgY29udGFjdEZvcm1EYXRhfSAgbGFuZz17c3RhdGUubGFuZ3VhZ2V9IGxhbmdDaGFuZ2U9e3RoaXMubGFuZ0NoYW5nZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gbGFuZz17c3RhdGUubGFuZ3VhZ2V9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5cbi8vIGNvbXBpbGluZyBwYWdlIG9uIGJ1aWxkXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aCgpe1xuLy8gICBjb25zdCBzdGF0aWNQYXRoID0ge1xuLy8gICAgIHBhdGhzOiBbJy9hYm91dCcsICcvc2VydmljZXMnXSxcbi8vICAgICBmYWxsYmFjazogZmFsc2Vcbi8vICAgfVxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=