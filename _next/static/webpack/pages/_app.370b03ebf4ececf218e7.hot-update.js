webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/contact/Contact_form.js":
/*!********************************************!*\
  !*** ./components/contact/Contact_form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/components/contact/Contact_form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// TODO:
// importing modules
 // defining class component

var Contact_form = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact_form, _Component);

  var _super = _createSuper(Contact_form);

  function Contact_form(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Contact_form);

    _this = _super.call(this, props);
    _this.state = {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
      statusShow: false,
      //display the form or not
      statusMsg: null
    }; // binding handlers

    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact_form, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var data = new FormData(e.target);
      fetch('https://static-email.herokuapp.com/contacto/meadowlands', {
        method: 'POST',
        body: data
      }).then(function (res) {
        console.log(res.status);

        if (res.status === 404) {
          _this2.setState(function (st) {
            return {
              statusShow: true,
              statusMsg: false
            };
          });
        } else {
          _this2.setState(function (st) {
            return {
              statusShow: true,
              statusMsg: true
            };
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
      this.setState(function (st) {
        return {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        };
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var data = this.props.data,
          fields = this.props.data.fields,
          width = this.props.width;
      var referrer = 'http://meadowlandscf.com';
      var displayNone = {
        display: "none"
      };
      var displayAll = {
        display: ""
      };
      var statusGood = 'text-success';
      var statusError = 'text-danger';
      return __jsx("section", {
        className: width ? 'Contact_form col-lg-12' : 'Contact_form col-lg-6',
        id: "form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "content row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: (this.state.statusMsg ? statusGood : statusError) + ' p-3 text-center font-weight-bold w-100 h-100 display-4',
        style: this.state.statusShow ? displayAll : displayNone,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }, this.state.statusMsg ? data.status.success : data.status.fail), __jsx("form", {
        className: "col mx-4 my-4 px-5 py-4 bg-primary rounded",
        style: this.state.statusShow ? displayNone : displayAll,
        action: "?",
        method: "POST",
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "hidden",
        name: "referrer",
        value: referrer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }), Object.keys(fields).map(function (key, i) {
        var id = fields[key].id,
            label = fields[key].label,
            placeholder = fields[key].placeholder,
            type = fields[key].type;
        return __jsx("div", {
          className: "form-group",
          key: i,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 19
          }
        }, __jsx("label", {
          className: "text-secondary font-weight-bold",
          htmlFor: id,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }
        }, label + ":"), __jsx("input", {
          className: "form-control",
          type: type,
          id: id,
          name: id,
          placeholder: placeholder,
          value: _this3.state[id],
          onChange: _this3.handleChange,
          required: true,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }
        }));
      }), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }
      }, __jsx("label", {
        className: "text-secondary font-weight-bold",
        htmlFor: data.message.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      }, data.message.label + ":"), __jsx("textarea", {
        rows: "7",
        className: "form-control",
        type: data.message.type,
        id: data.message.id,
        name: data.message.id,
        placeholder: data.message.placeholder,
        value: this.state[data.message.id],
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "g-recaptcha d-flex justify-content-center my-3 mx-auto",
        "data-sitekey": "6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }
      }), __jsx("button", {
        className: "btn btn-secondary btn-lg w-100",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }
      }, data.button.text), __jsx("div", {
        className: "p-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, "This site is protected by reCAPTCHA and the Google"), __jsx("a", {
        className: "text-danger",
        href: "https://policies.google.com/privacy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }, " Privacy Policy"), __jsx("span", {
        className: "text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }, "  and"), __jsx("a", {
        className: "text-danger",
        href: "https://policies.google.com/terms",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, " Terms of Service"), __jsx("span", {
        className: "text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, " apply."))))));
    }
  }]);

  return Contact_form;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // exporting component


/* harmony default export */ __webpack_exports__["default"] = (Contact_form);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RfZm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWN0X2Zvcm0iLCJwcm9wcyIsInN0YXRlIiwibm9tYnJlIiwiZW1haWwiLCJhc3VudG8iLCJtZW5zYWplIiwic3RhdHVzU2hvdyIsInN0YXR1c01zZyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNldFN0YXRlIiwic3QiLCJlcnIiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJ3aWR0aCIsInJlZmVycmVyIiwiZGlzcGxheU5vbmUiLCJkaXNwbGF5IiwiZGlzcGxheUFsbCIsInN0YXR1c0dvb2QiLCJzdGF0dXNFcnJvciIsInN1Y2Nlc3MiLCJmYWlsIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImkiLCJpZCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibWVzc2FnZSIsImJ1dHRvbiIsInRleHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7O0lBQ01BLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFLEVBREc7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsWUFBTSxFQUFFLEVBSEc7QUFJWEMsYUFBTyxFQUFFLEVBSkU7QUFLWEMsZ0JBQVUsRUFBRSxLQUxEO0FBS1E7QUFDbkJDLGVBQVMsRUFBRTtBQU5BLEtBQWIsQ0FGaUIsQ0FXakI7O0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixN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LGlCQUFTLEVBQUMsd0RBQWY7QUFBd0Usd0JBQWEsMENBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQVEsaUJBQVMsRUFBQyxnQ0FBbEI7QUFBbUQsWUFBSSxFQUFDLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0VHLElBQUksQ0FBQ29DLE1BQUwsQ0FBWUMsSUFBOUUsQ0FGRixFQUdFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLGlCQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQTJCLFlBQUksRUFBQyxxQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixFQUdFO0FBQU0saUJBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBSUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBMkIsWUFBSSxFQUFDLG1DQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGLEVBS0U7QUFBTSxpQkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsQ0FIRixDQXJCRixDQUZGLENBREYsQ0FERjtBQXdDRDs7OztFQS9Hd0JDLCtDLEdBa0gzQjs7O0FBQ2VwRCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM3MGIwM2ViZjRlY2VjZjIxOGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOlxuXG4vLyBpbXBvcnRpbmcgbW9kdWxlc1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gZGVmaW5pbmcgY2xhc3MgY29tcG9uZW50XG5jbGFzcyBDb250YWN0X2Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm9tYnJlOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGFzdW50bzogJycsXG4gICAgICBtZW5zYWplOiAnJyxcbiAgICAgIHN0YXR1c1Nob3c6IGZhbHNlLCAvL2Rpc3BsYXkgdGhlIGZvcm0gb3Igbm90XG4gICAgICBzdGF0dXNNc2c6IG51bGxcbiAgICB9O1xuXG4gICAgLy8gYmluZGluZyBoYW5kbGVyc1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcblxuICAgIGZldGNoKCdodHRwczovL3N0YXRpYy1lbWFpbC5oZXJva3VhcHAuY29tL2NvbnRhY3RvL21lYWRvd2xhbmRzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgICAudGhlbiggcmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3QgPT4gKHtcbiAgICAgICAgICBzdGF0dXNTaG93OiB0cnVlLFxuICAgICAgICAgIHN0YXR1c01zZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdCA9PiAoe1xuICAgICAgICAgIHN0YXR1c1Nob3c6IHRydWUsXG4gICAgICAgICAgc3RhdHVzTXNnOiB0cnVlXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHN0ID0+IChcbiAgICAgIHtcbiAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBhc3VudG86ICcnLFxuICAgICAgICBtZW5zYWplOiAnJ1xuICAgICAgfVxuICAgICkpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgICAgICBmaWVsZHMgPSB0aGlzLnByb3BzLmRhdGEuZmllbGRzLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aDtcbiAgICBjb25zdCByZWZlcnJlciA9ICdodHRwOi8vbWVhZG93bGFuZHNjZi5jb20nO1xuXG4gICAgbGV0IGRpc3BsYXlOb25lID0ge2Rpc3BsYXk6IFwibm9uZVwifVxuICAgIGxldCBkaXNwbGF5QWxsID0ge2Rpc3BsYXk6IFwiXCJ9XG4gICAgbGV0IHN0YXR1c0dvb2QgPSAndGV4dC1zdWNjZXNzJ1xuICAgIGxldCBzdGF0dXNFcnJvciA9ICd0ZXh0LWRhbmdlcidcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3dpZHRoPydDb250YWN0X2Zvcm0gY29sLWxnLTEyJzonQ29udGFjdF9mb3JtIGNvbC1sZy02J30gaWQ9J2Zvcm0nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCByb3cnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KHRoaXMuc3RhdGUuc3RhdHVzTXNnID8gc3RhdHVzR29vZCA6IHN0YXR1c0Vycm9yKSArJyBwLTMgdGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZCB3LTEwMCBoLTEwMCBkaXNwbGF5LTQnfSBzdHlsZT17dGhpcy5zdGF0ZS5zdGF0dXNTaG93ID8gZGlzcGxheUFsbDogZGlzcGxheU5vbmV9Pnt0aGlzLnN0YXRlLnN0YXR1c01zZyA/IGRhdGEuc3RhdHVzLnN1Y2Nlc3MgOiBkYXRhLnN0YXR1cy5mYWlsfTwvc3Bhbj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2NvbCBteC00IG15LTQgcHgtNSBweS00IGJnLXByaW1hcnkgcm91bmRlZCcgc3R5bGU9e3RoaXMuc3RhdGUuc3RhdHVzU2hvdyA/IGRpc3BsYXlOb25lOiBkaXNwbGF5QWxsfSBhY3Rpb249XCI/XCIgbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVmZXJyZXJcIiB2YWx1ZT17cmVmZXJyZXJ9Lz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzKS5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGZpZWxkc1trZXldLmlkLFxuICAgICAgICAgICAgICAgICAgbGFiZWwgPSBmaWVsZHNba2V5XS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gZmllbGRzW2tleV0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlID0gZmllbGRzW2tleV0udHlwZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCcga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnkgZm9udC13ZWlnaHQtYm9sZCcgaHRtbEZvcj17aWR9PntsYWJlbCArIFwiOlwifTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT17dHlwZX0gaWQ9e2lkfSBuYW1lPXtpZH0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB2YWx1ZT17dGhpcy5zdGF0ZVtpZF19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnkgZm9udC13ZWlnaHQtYm9sZCcgaHRtbEZvcj17ZGF0YS5tZXNzYWdlLmlkfT57ZGF0YS5tZXNzYWdlLmxhYmVsICsgXCI6XCJ9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI3XCIgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9e2RhdGEubWVzc2FnZS50eXBlfSBpZD17ZGF0YS5tZXNzYWdlLmlkfSBuYW1lPXtkYXRhLm1lc3NhZ2UuaWR9IHBsYWNlaG9sZGVyPXtkYXRhLm1lc3NhZ2UucGxhY2Vob2xkZXJ9IHZhbHVlPXt0aGlzLnN0YXRlW2RhdGEubWVzc2FnZS5pZF19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ctcmVjYXB0Y2hhIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTMgbXgtYXV0bycgZGF0YS1zaXRla2V5PSc2TGU3MWNzVUFBQUFBUHVlNnVyWTNabllJbEdOaE0wQTBXNGlQdlJJJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyB3LTEwMCcgdHlwZT0nc3VibWl0Jz57ZGF0YS5idXR0b24udGV4dH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMyc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5UaGlzIHNpdGUgaXMgcHJvdGVjdGVkIGJ5IHJlQ0FQVENIQSBhbmQgdGhlIEdvb2dsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJyBocmVmPVwiaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3ByaXZhY3lcIj4gUHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz4gIGFuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJyBocmVmPVwiaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3Rlcm1zXCI+IFRlcm1zIG9mIFNlcnZpY2U8L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz4gYXBwbHkuPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbi8vIGV4cG9ydGluZyBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RfZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=