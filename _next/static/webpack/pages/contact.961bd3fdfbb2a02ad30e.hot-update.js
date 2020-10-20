webpackHotUpdate_N_E("pages/contact",{

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
          fields = this.props.data.fields;
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
        className: "Contact_form col-lg-6",
        id: "form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "content row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: (this.state.statusMsg ? statusGood : statusError) + ' p-3 text-center font-weight-bold w-100 h-100 display-4',
        style: this.state.statusShow ? displayAll : displayNone,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
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
          lineNumber: 81,
          columnNumber: 11
        }
      }, __jsx("input", {
        type: "hidden",
        name: "referrer",
        value: referrer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
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
            lineNumber: 91,
            columnNumber: 19
          }
        }, __jsx("label", {
          className: "text-secondary font-weight-bold",
          htmlFor: id,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
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
            lineNumber: 93,
            columnNumber: 21
          }
        }));
      }), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx("label", {
        className: "text-secondary font-weight-bold",
        htmlFor: data.message.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
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
          lineNumber: 100,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "g-recaptcha d-flex justify-content-center my-3 mx-auto",
        "data-sitekey": "6Le71csUAAAAAPue6urY3ZnYIlGNhM0A0W4iPvRI",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 15
        }
      }), __jsx("button", {
        className: "btn btn-secondary btn-lg w-100",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }
      }, data.button.text), __jsx("div", {
        className: "p-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, "This site is protected by reCAPTCHA and the Google"), __jsx("a", {
        className: "text-danger",
        href: "https://policies.google.com/privacy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, " Privacy Policy"), __jsx("span", {
        className: "text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }, "  and"), __jsx("a", {
        className: "text-danger",
        href: "https://policies.google.com/terms",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }, " Terms of Service"), __jsx("span", {
        className: "text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RfZm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWN0X2Zvcm0iLCJwcm9wcyIsInN0YXRlIiwibm9tYnJlIiwiZW1haWwiLCJhc3VudG8iLCJtZW5zYWplIiwic3RhdHVzU2hvdyIsInN0YXR1c01zZyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNldFN0YXRlIiwic3QiLCJlcnIiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJyZWZlcnJlciIsImRpc3BsYXlOb25lIiwiZGlzcGxheSIsImRpc3BsYXlBbGwiLCJzdGF0dXNHb29kIiwic3RhdHVzRXJyb3IiLCJzdWNjZXNzIiwiZmFpbCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpIiwiaWQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm1lc3NhZ2UiLCJidXR0b24iLCJ0ZXh0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUdBOztJQUNNQSxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxFQURHO0FBRVhDLFdBQUssRUFBRSxFQUZJO0FBR1hDLFlBQU0sRUFBRSxFQUhHO0FBSVhDLGFBQU8sRUFBRSxFQUpFO0FBS1hDLGdCQUFVLEVBQUUsS0FMRDtBQUtRO0FBQ25CQyxlQUFTLEVBQUU7QUFOQSxLQUFiLENBRmlCLENBV2pCOztBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFB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QUVFO0FBQVEsaUJBQVMsRUFBQyxnQ0FBbEI7QUFBbUQsWUFBSSxFQUFDLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0VHLElBQUksQ0FBQ21DLE1BQUwsQ0FBWUMsSUFBOUUsQ0FGRixFQUdFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLGlCQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFERixFQUVFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQTJCLFlBQUksRUFBQyxxQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixFQUdFO0FBQU0saUJBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBSUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBMkIsWUFBSSxFQUFDLG1DQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGLEVBS0U7QUFBTSxpQkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsQ0FIRixDQXJCRixDQUZGLENBREYsQ0FERjtBQXdDRDs7OztFQTlHd0JDLCtDLEdBaUgzQjs7O0FBQ2VuRCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0Ljk2MWJkM2ZkZmJiMmEwMmFkMzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOlxuXG4vLyBpbXBvcnRpbmcgbW9kdWxlc1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gZGVmaW5pbmcgY2xhc3MgY29tcG9uZW50XG5jbGFzcyBDb250YWN0X2Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm9tYnJlOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGFzdW50bzogJycsXG4gICAgICBtZW5zYWplOiAnJyxcbiAgICAgIHN0YXR1c1Nob3c6IGZhbHNlLCAvL2Rpc3BsYXkgdGhlIGZvcm0gb3Igbm90XG4gICAgICBzdGF0dXNNc2c6IG51bGxcbiAgICB9O1xuXG4gICAgLy8gYmluZGluZyBoYW5kbGVyc1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcblxuICAgIGZldGNoKCdodHRwczovL3N0YXRpYy1lbWFpbC5oZXJva3VhcHAuY29tL2NvbnRhY3RvL21lYWRvd2xhbmRzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgICAudGhlbiggcmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3QgPT4gKHtcbiAgICAgICAgICBzdGF0dXNTaG93OiB0cnVlLFxuICAgICAgICAgIHN0YXR1c01zZzogZmFsc2VcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdCA9PiAoe1xuICAgICAgICAgIHN0YXR1c1Nob3c6IHRydWUsXG4gICAgICAgICAgc3RhdHVzTXNnOiB0cnVlXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHN0ID0+IChcbiAgICAgIHtcbiAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBhc3VudG86ICcnLFxuICAgICAgICBtZW5zYWplOiAnJ1xuICAgICAgfVxuICAgICkpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgICAgICBmaWVsZHMgPSB0aGlzLnByb3BzLmRhdGEuZmllbGRzO1xuICAgIGNvbnN0IHJlZmVycmVyID0gJ2h0dHA6Ly9tZWFkb3dsYW5kc2NmLmNvbSc7XG5cbiAgICBsZXQgZGlzcGxheU5vbmUgPSB7ZGlzcGxheTogXCJub25lXCJ9XG4gICAgbGV0IGRpc3BsYXlBbGwgPSB7ZGlzcGxheTogXCJcIn1cbiAgICBsZXQgc3RhdHVzR29vZCA9ICd0ZXh0LXN1Y2Nlc3MnXG4gICAgbGV0IHN0YXR1c0Vycm9yID0gJ3RleHQtZGFuZ2VyJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nQ29udGFjdF9mb3JtIGNvbC1sZy02JyBpZD0nZm9ybSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50IHJvdyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsodGhpcy5zdGF0ZS5zdGF0dXNNc2cgPyBzdGF0dXNHb29kIDogc3RhdHVzRXJyb3IpICsnIHAtMyB0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkIHctMTAwIGgtMTAwIGRpc3BsYXktNCd9IHN0eWxlPXt0aGlzLnN0YXRlLnN0YXR1c1Nob3cgPyBkaXNwbGF5QWxsOiBkaXNwbGF5Tm9uZX0+e3RoaXMuc3RhdGUuc3RhdHVzTXNnID8gZGF0YS5zdGF0dXMuc3VjY2VzcyA6IGRhdGEuc3RhdHVzLmZhaWx9PC9zcGFuPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nY29sIG14LTQgbXktNCBweC01IHB5LTQgYmctcHJpbWFyeSByb3VuZGVkJyBzdHlsZT17dGhpcy5zdGF0ZS5zdGF0dXNTaG93ID8gZGlzcGxheU5vbmU6IGRpc3BsYXlBbGx9IGFjdGlvbj1cIj9cIiBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWZlcnJlclwiIHZhbHVlPXtyZWZlcnJlcn0vPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZHMpLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZmllbGRzW2tleV0uaWQsXG4gICAgICAgICAgICAgICAgICBsYWJlbCA9IGZpZWxkc1trZXldLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBmaWVsZHNba2V5XS5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBmaWVsZHNba2V5XS50eXBlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LXNlY29uZGFyeSBmb250LXdlaWdodC1ib2xkJyBodG1sRm9yPXtpZH0+e2xhYmVsICsgXCI6XCJ9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB0eXBlPXt0eXBlfSBpZD17aWR9IG5hbWU9e2lkfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IHZhbHVlPXt0aGlzLnN0YXRlW2lkXX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LXNlY29uZGFyeSBmb250LXdlaWdodC1ib2xkJyBodG1sRm9yPXtkYXRhLm1lc3NhZ2UuaWR9PntkYXRhLm1lc3NhZ2UubGFiZWwgKyBcIjpcIn08L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjdcIiBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT17ZGF0YS5tZXNzYWdlLnR5cGV9IGlkPXtkYXRhLm1lc3NhZ2UuaWR9IG5hbWU9e2RhdGEubWVzc2FnZS5pZH0gcGxhY2Vob2xkZXI9e2RhdGEubWVzc2FnZS5wbGFjZWhvbGRlcn0gdmFsdWU9e3RoaXMuc3RhdGVbZGF0YS5tZXNzYWdlLmlkXX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZy1yZWNhcHRjaGEgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktMyBteC1hdXRvJyBkYXRhLXNpdGVrZXk9JzZMZTcxY3NVQUFBQUFQdWU2dXJZM1puWUlsR05oTTBBMFc0aVB2UkknPjwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIHctMTAwJyB0eXBlPSdzdWJtaXQnPntkYXRhLmJ1dHRvbi50ZXh0fTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0zJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPlRoaXMgc2l0ZSBpcyBwcm90ZWN0ZWQgYnkgcmVDQVBUQ0hBIGFuZCB0aGUgR29vZ2xlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInIGhyZWY9XCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vcHJpdmFjeVwiPiBQcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPiAgYW5kPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInIGhyZWY9XCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vdGVybXNcIj4gVGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPiBhcHBseS48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuLy8gZXhwb3J0aW5nIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdF9mb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==