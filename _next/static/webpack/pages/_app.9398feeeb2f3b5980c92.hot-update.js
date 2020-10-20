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
/* harmony import */ var _components_contact_Contact_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact/Contact_form */ "./components/contact/Contact_form.js");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/custom.scss */ "./styles/custom.scss");
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/layouts/LayoutDefault.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// importing nextjs/API
 // importing components



 // importing custom bootstrap


function LayoutDefault(props) {
  var defaultTitle = 'Meadowlands Construction & Flip';
  var pageTitle = props.children.props.title;
  var modalData = props.data[props.lang].modal;
  var formData = props.formData[props.lang];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9MYXlvdXREZWZhdWx0LmpzIl0sIm5hbWVzIjpbIkxheW91dERlZmF1bHQiLCJwcm9wcyIsImRlZmF1bHRUaXRsZSIsInBhZ2VUaXRsZSIsImNoaWxkcmVuIiwidGl0bGUiLCJtb2RhbERhdGEiLCJkYXRhIiwibGFuZyIsIm1vZGFsIiwiZm9ybURhdGEiLCJoZWFkZXIiLCJsYW5nQ2hhbmdlIiwiYnRuQ2xvc2UiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDM0MsTUFBTUMsWUFBWSxHQUFHLGlDQUFyQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVILEtBQWYsQ0FBcUJJLEtBQXZDO0FBQ0EsTUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNNLElBQU4sQ0FBV04sS0FBSyxDQUFDTyxJQUFqQixFQUF1QkMsS0FBekM7QUFDQSxNQUFNQyxRQUFRLEdBQUdULEtBQUssQ0FBQ1MsUUFBTixDQUFlVCxLQUFLLENBQUNPLElBQXJCLENBQWpCO0FBRUEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFMLFNBQVMsR0FBSUEsU0FBUyxHQUFHLEtBQVosR0FBb0JELFlBQXhCLEdBQXdDQSxZQUF6RCxDQURGLEVBSUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBUUU7QUFBTSxh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RjtBQUF5SyxlQUFXLEVBQUMsV0FBckw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxERixDQURGO0FBc0REO0tBNUR1QmQsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkzOThmZWVlYjJmM2I1OTgwYzkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbmV4dGpzL0FQSVxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgQ29udGFjdF9mb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0X2Zvcm0nO1xuXG4vLyBpbXBvcnRpbmcgY3VzdG9tIGJvb3RzdHJhcFxuaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dERlZmF1bHQocHJvcHMpIHtcbiAgY29uc3QgZGVmYXVsdFRpdGxlID0gJ01lYWRvd2xhbmRzIENvbnN0cnVjdGlvbiAmIEZsaXAnO1xuICBjb25zdCBwYWdlVGl0bGUgPSBwcm9wcy5jaGlsZHJlbi5wcm9wcy50aXRsZTtcbiAgY29uc3QgbW9kYWxEYXRhID0gcHJvcHMuZGF0YVtwcm9wcy5sYW5nXS5tb2RhbDtcbiAgY29uc3QgZm9ybURhdGEgPSBwcm9wcy5mb3JtRGF0YVtwcm9wcy5sYW5nXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwYWdlVGl0bGUgPyAocGFnZVRpdGxlICsgJyAtICcgKyBkZWZhdWx0VGl0bGUpIDogZGVmYXVsdFRpdGxlfTwvdGl0bGU+XG5cbiAgICAgICAgey8qIHZpZXdwb3J0ICovfVxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuXG4gICAgICAgIHsvKiBmb3IgSUUgKi99XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cblxuICAgICAgICB7LyogPCEtLSBGYXZpY29uIC0tPiAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiZmF2aWNvbl80OC5wbmdcIiBzaXplcz1cIjQ4eDQ4XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCJmYXZpY29uXzE4MC5wbmdcIiAvPlxuXG4gICAgICAgIHsvKiBib290c3RyYXAgKi99XG4gICAgICAgIHsvKiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgXG4gICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgXG4gICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXG4gICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPEhlYWRlciBkYXRhPXtwcm9wcy5kYXRhW3Byb3BzLmxhbmddLmhlYWRlcn0gbGFuZz17cHJvcHMubGFuZ30gbGFuZ0NoYW5nZT17cHJvcHMubGFuZ0NoYW5nZX0gLz5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cImZvcm1Nb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+e21vZGFsRGF0YS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5YPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgey8qIDxDb250YWN0X2Zvcm0gZGF0YT17fSAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj57bW9kYWxEYXRhLmJ0bkNsb3NlfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgZGF0YT17cHJvcHMuZGF0YVtwcm9wcy5sYW5nXS5mb290ZXJ9IC8+XG5cbiAgICAgIHsvKiBib290c3RyYXAgc2NyaXB0cyAqL31cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LURmWGR6Mmh0UEgwbHNTU3M1bkNUcHVqL3p5NEMrT0dwYW1vRlZ5MzhNVkJuRStJYmJWWVVldytPckNYYVJrZmpcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1PZ1ZSdnVBVFAxejdKakhMa3VPVTdYdzcwNCtoODM1THIrNlFMOVV2WWpaRTNJcHU2VHA3NWo3Qmgva1IwSktJXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=