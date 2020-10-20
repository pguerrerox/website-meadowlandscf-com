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
  var formData = props.formData[props.lang].form;
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
  }, __jsx(_components_contact_Contact_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: formData,
    width: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9MYXlvdXREZWZhdWx0LmpzIl0sIm5hbWVzIjpbIkxheW91dERlZmF1bHQiLCJwcm9wcyIsImRlZmF1bHRUaXRsZSIsInBhZ2VUaXRsZSIsImNoaWxkcmVuIiwidGl0bGUiLCJtb2RhbERhdGEiLCJkYXRhIiwibGFuZyIsIm1vZGFsIiwiZm9ybURhdGEiLCJmb3JtIiwiaGVhZGVyIiwibGFuZ0NoYW5nZSIsImJ0bkNsb3NlIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzNDLE1BQU1DLFlBQVksR0FBRyxpQ0FBckI7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixDQUFlSCxLQUFmLENBQXFCSSxLQUF2QztBQUNBLE1BQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVdOLEtBQUssQ0FBQ08sSUFBakIsRUFBdUJDLEtBQXpDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHVCxLQUFLLENBQUNTLFFBQU4sQ0FBZVQsS0FBSyxDQUFDTyxJQUFyQixFQUEyQkcsSUFBNUM7QUFFQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVIsU0FBUyxHQUFJQSxTQUFTLEdBQUcsS0FBWixHQUFvQkQsWUFBeEIsR0FBd0NBLFlBQXpELENBREYsRUFJRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFRRTtBQUFNLGFBQVMsRUFBQyxpQkFBaEI7QUFBa0MsV0FBTyxFQUFDLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVdFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLFdBQXRCO0FBQWtDLFFBQUksRUFBQyxnQkFBdkM7QUFBd0QsU0FBSyxFQUFDLE9BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFO0FBQU0sT0FBRyxFQUFDLGtCQUFWO0FBQTZCLFNBQUssRUFBQyxTQUFuQztBQUE2QyxRQUFJLEVBQUMsaUJBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLEVBdUJFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLEVBQUVELEtBQUssQ0FBQ00sSUFBTixDQUFXTixLQUFLLENBQUNPLElBQWpCLEVBQXVCSSxNQUFyQztBQUE2QyxRQUFJLEVBQUVYLEtBQUssQ0FBQ08sSUFBekQ7QUFBK0QsY0FBVSxFQUFFUCxLQUFLLENBQUNZLFVBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsRUF3QkdaLEtBQUssQ0FBQ0csUUF4QlQsRUEwQkU7QUFBSyxhQUFNLFlBQVg7QUFBd0IsTUFBRSxFQUFDLFdBQTNCO0FBQXVDLFlBQVEsRUFBQyxJQUFoRDtBQUFxRCx1QkFBZ0IsbUJBQXJFO0FBQXlGLG1CQUFZLE1BQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0sY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQU0sYUFBVjtBQUF3QixNQUFFLEVBQUMsbUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0RFLFNBQVMsQ0FBQ0QsS0FBMUQsQ0FERixFQUVFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTSxPQUE1QjtBQUFvQyxvQkFBYSxPQUFqRDtBQUF5RCxrQkFBVyxPQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxtQkFBWSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FGRixDQURGLEVBT0U7QUFBSyxhQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFBYyxRQUFJLEVBQUVLLFFBQXBCO0FBQThCLFNBQUssRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixFQVVFO0FBQUssYUFBTSxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU0sbUJBQTVCO0FBQWdELG9CQUFhLE9BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0VKLFNBQVMsQ0FBQ1EsUUFBaEYsQ0FERixDQVZGLENBREYsQ0FERixDQTFCRixFQTZDRSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxFQUFFYixLQUFLLENBQUNNLElBQU4sQ0FBV04sS0FBSyxDQUFDTyxJQUFqQixFQUF1Qk8sTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDRixFQWdERTtBQUFRLE9BQUcsRUFBQyxrREFBWjtBQUErRCxhQUFTLEVBQUMseUVBQXpFO0FBQW1KLGVBQVcsRUFBQyxXQUEvSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaERGLEVBaURFO0FBQVEsT0FBRyxFQUFDLHNFQUFaO0FBQW1GLGFBQVMsRUFBQyx5RUFBN0Y7QUFBdUssZUFBVyxFQUFDLFdBQW5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqREYsRUFrREU7QUFBUSxPQUFHLEVBQUMsd0VBQVo7QUFBcUYsYUFBUyxFQUFDLHlFQUEvRjtBQUF5SyxlQUFXLEVBQUMsV0FBckw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxERixDQURGO0FBc0REO0tBNUR1QmYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUxMGZiZTBmMTNjZDU4YmE3OTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbmV4dGpzL0FQSVxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgQ29udGFjdF9mb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0X2Zvcm0nO1xuXG4vLyBpbXBvcnRpbmcgY3VzdG9tIGJvb3RzdHJhcFxuaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dERlZmF1bHQocHJvcHMpIHtcbiAgY29uc3QgZGVmYXVsdFRpdGxlID0gJ01lYWRvd2xhbmRzIENvbnN0cnVjdGlvbiAmIEZsaXAnO1xuICBjb25zdCBwYWdlVGl0bGUgPSBwcm9wcy5jaGlsZHJlbi5wcm9wcy50aXRsZTtcbiAgY29uc3QgbW9kYWxEYXRhID0gcHJvcHMuZGF0YVtwcm9wcy5sYW5nXS5tb2RhbDtcbiAgY29uc3QgZm9ybURhdGEgPSBwcm9wcy5mb3JtRGF0YVtwcm9wcy5sYW5nXS5mb3JtO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZSA/IChwYWdlVGl0bGUgKyAnIC0gJyArIGRlZmF1bHRUaXRsZSkgOiBkZWZhdWx0VGl0bGV9PC90aXRsZT5cblxuICAgICAgICB7Lyogdmlld3BvcnQgKi99XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG5cbiAgICAgICAgey8qIGZvciBJRSAqL31cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuXG4gICAgICAgIHsvKiA8IS0tIEZhdmljb24gLS0+ICovfVxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCJmYXZpY29uXzQ4LnBuZ1wiIHNpemVzPVwiNDh4NDhcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cImZhdmljb25fMTgwLnBuZ1wiIC8+XG5cbiAgICAgICAgey8qIGJvb3RzdHJhcCAqL31cbiAgICAgICAgey8qIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBcbiAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBcbiAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+ICovfVxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVhZGVyIGRhdGE9e3Byb3BzLmRhdGFbcHJvcHMubGFuZ10uaGVhZGVyfSBsYW5nPXtwcm9wcy5sYW5nfSBsYW5nQ2hhbmdlPXtwcm9wcy5sYW5nQ2hhbmdlfSAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwiZm9ybU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj57bW9kYWxEYXRhLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICA8Q29udGFjdF9mb3JtIGRhdGE9e2Zvcm1EYXRhfSB3aWR0aD0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj57bW9kYWxEYXRhLmJ0bkNsb3NlfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgZGF0YT17cHJvcHMuZGF0YVtwcm9wcy5sYW5nXS5mb290ZXJ9IC8+XG5cbiAgICAgIHsvKiBib290c3RyYXAgc2NyaXB0cyAqL31cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LURmWGR6Mmh0UEgwbHNTU3M1bkNUcHVqL3p5NEMrT0dwYW1vRlZ5MzhNVkJuRStJYmJWWVVldytPckNYYVJrZmpcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1PZ1ZSdnVBVFAxejdKakhMa3VPVTdYdzcwNCtoODM1THIrNlFMOVV2WWpaRTNJcHU2VHA3NWo3Qmgva1IwSktJXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=