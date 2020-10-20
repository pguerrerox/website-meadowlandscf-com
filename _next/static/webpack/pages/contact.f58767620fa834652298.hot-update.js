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
        className: width ? 'Contact_form col-lg-12' : 'col-lg-6',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RfZm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWN0X2Zvcm0iLCJwcm9wcyIsInN0YXRlIiwibm9tYnJlIiwiZW1haWwiLCJhc3VudG8iLCJtZW5zYWplIiwic3RhdHVzU2hvdyIsInN0YXR1c01zZyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNldFN0YXRlIiwic3QiLCJlcnIiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJ3aWR0aCIsInJlZmVycmVyIiwiZGlzcGxheU5vbmUiLCJkaXNwbGF5IiwiZGlzcGxheUFsbCIsInN0YXR1c0dvb2QiLCJzdGF0dXNFcnJvciIsInN1Y2Nlc3MiLCJmYWlsIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImkiLCJpZCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibWVzc2FnZSIsImJ1dHRvbiIsInRleHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7O0lBQ01BLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFLEVBREc7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsWUFBTSxFQUFFLEVBSEc7QUFJWEMsYUFBTyxFQUFFLEVBSkU7QUFLWEMsZ0JBQVUsRUFBRSxLQUxEO0FBS1E7QUFDbkJDLGVBQVMsRUFBRTtBQU5BLEtBQWIsQ0FGaUIsQ0FXakI7O0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixN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aUJBQVMsRUFBQyx3REFBZjtBQUF3RSx3QkFBYSwwQ0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBUSxpQkFBUyxFQUFDLGdDQUFsQjtBQUFtRCxZQUFJLEVBQUMsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrRUcsSUFBSSxDQUFDb0MsTUFBTCxDQUFZQyxJQUE5RSxDQUZGLEVBR0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBMkIsWUFBSSxFQUFDLHFDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLEVBR0U7QUFBTSxpQkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUEyQixZQUFJLEVBQUMsbUNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkYsRUFLRTtBQUFNLGlCQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixDQUhGLENBckJGLENBRkYsQ0FERixDQURGO0FBd0NEOzs7O0VBL0d3QkMsK0MsR0FrSDNCOzs7QUFDZXBELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuZjU4NzY3NjIwZmE4MzQ2NTIyOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86XG5cbi8vIGltcG9ydGluZyBtb2R1bGVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBkZWZpbmluZyBjbGFzcyBjb21wb25lbnRcbmNsYXNzIENvbnRhY3RfZm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub21icmU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgYXN1bnRvOiAnJyxcbiAgICAgIG1lbnNhamU6ICcnLFxuICAgICAgc3RhdHVzU2hvdzogZmFsc2UsIC8vZGlzcGxheSB0aGUgZm9ybSBvciBub3RcbiAgICAgIHN0YXR1c01zZzogbnVsbFxuICAgIH07XG5cbiAgICAvLyBiaW5kaW5nIGhhbmRsZXJzXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuXG4gICAgZmV0Y2goJ2h0dHBzOi8vc3RhdGljLWVtYWlsLmhlcm9rdWFwcC5jb20vY29udGFjdG8vbWVhZG93bGFuZHMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGFcbiAgICB9KVxuICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzLnN0YXR1cylcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdCA9PiAoe1xuICAgICAgICAgIHN0YXR1c1Nob3c6IHRydWUsXG4gICAgICAgICAgc3RhdHVzTXNnOiBmYWxzZVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0ID0+ICh7XG4gICAgICAgICAgc3RhdHVzU2hvdzogdHJ1ZSxcbiAgICAgICAgICBzdGF0dXNNc2c6IHRydWVcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoc3QgPT4gKFxuICAgICAge1xuICAgICAgICBub21icmU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGFzdW50bzogJycsXG4gICAgICAgIG1lbnNhamU6ICcnXG4gICAgICB9XG4gICAgKSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhLFxuICAgICAgICAgIGZpZWxkcyA9IHRoaXMucHJvcHMuZGF0YS5maWVsZHMsXG4gICAgICAgICAgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoO1xuICAgIGNvbnN0IHJlZmVycmVyID0gJ2h0dHA6Ly9tZWFkb3dsYW5kc2NmLmNvbSc7XG5cbiAgICBsZXQgZGlzcGxheU5vbmUgPSB7ZGlzcGxheTogXCJub25lXCJ9XG4gICAgbGV0IGRpc3BsYXlBbGwgPSB7ZGlzcGxheTogXCJcIn1cbiAgICBsZXQgc3RhdHVzR29vZCA9ICd0ZXh0LXN1Y2Nlc3MnXG4gICAgbGV0IHN0YXR1c0Vycm9yID0gJ3RleHQtZGFuZ2VyJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17d2lkdGg/J0NvbnRhY3RfZm9ybSBjb2wtbGctMTInOidjb2wtbGctNid9IGlkPSdmb3JtJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQgcm93Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyh0aGlzLnN0YXRlLnN0YXR1c01zZyA/IHN0YXR1c0dvb2QgOiBzdGF0dXNFcnJvcikgKycgcC0zIHRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LWJvbGQgdy0xMDAgaC0xMDAgZGlzcGxheS00J30gc3R5bGU9e3RoaXMuc3RhdGUuc3RhdHVzU2hvdyA/IGRpc3BsYXlBbGw6IGRpc3BsYXlOb25lfT57dGhpcy5zdGF0ZS5zdGF0dXNNc2cgPyBkYXRhLnN0YXR1cy5zdWNjZXNzIDogZGF0YS5zdGF0dXMuZmFpbH08L3NwYW4+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjb2wgbXgtNCBteS00IHB4LTUgcHktNCBiZy1wcmltYXJ5IHJvdW5kZWQnIHN0eWxlPXt0aGlzLnN0YXRlLnN0YXR1c1Nob3cgPyBkaXNwbGF5Tm9uZTogZGlzcGxheUFsbH0gYWN0aW9uPVwiP1wiIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZmVycmVyXCIgdmFsdWU9e3JlZmVycmVyfS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkcykubWFwKChrZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBmaWVsZHNba2V5XS5pZCxcbiAgICAgICAgICAgICAgICAgIGxhYmVsID0gZmllbGRzW2tleV0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IGZpZWxkc1trZXldLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgdHlwZSA9IGZpZWxkc1trZXldLnR5cGU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RleHQtc2Vjb25kYXJ5IGZvbnQtd2VpZ2h0LWJvbGQnIGh0bWxGb3I9e2lkfT57bGFiZWwgKyBcIjpcIn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9e3R5cGV9IGlkPXtpZH0gbmFtZT17aWR9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gdmFsdWU9e3RoaXMuc3RhdGVbaWRdfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RleHQtc2Vjb25kYXJ5IGZvbnQtd2VpZ2h0LWJvbGQnIGh0bWxGb3I9e2RhdGEubWVzc2FnZS5pZH0+e2RhdGEubWVzc2FnZS5sYWJlbCArIFwiOlwifTwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiN1wiIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB0eXBlPXtkYXRhLm1lc3NhZ2UudHlwZX0gaWQ9e2RhdGEubWVzc2FnZS5pZH0gbmFtZT17ZGF0YS5tZXNzYWdlLmlkfSBwbGFjZWhvbGRlcj17ZGF0YS5tZXNzYWdlLnBsYWNlaG9sZGVyfSB2YWx1ZT17dGhpcy5zdGF0ZVtkYXRhLm1lc3NhZ2UuaWRdfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnLXJlY2FwdGNoYSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBteS0zIG14LWF1dG8nIGRhdGEtc2l0ZWtleT0nNkxlNzFjc1VBQUFBQVB1ZTZ1clkzWm5ZSWxHTmhNMEEwVzRpUHZSSSc+PC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgdy0xMDAnIHR5cGU9J3N1Ym1pdCc+e2RhdGEuYnV0dG9uLnRleHR9PC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTMnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+VGhpcyBzaXRlIGlzIHByb3RlY3RlZCBieSByZUNBUFRDSEEgYW5kIHRoZSBHb29nbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcicgaHJlZj1cImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS9wcml2YWN5XCI+IFByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+ICBhbmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcicgaHJlZj1cImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS90ZXJtc1wiPiBUZXJtcyBvZiBTZXJ2aWNlPC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+IGFwcGx5Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG4vLyBleHBvcnRpbmcgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBDb250YWN0X2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9