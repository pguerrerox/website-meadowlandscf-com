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
var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/layouts/LayoutDefault.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// importing nextjs/API
 // importing components


 // importing custom bootstrap


function LayoutDefault(props) {
  var defaultTitle = 'Meadowlands Construction & Flip';
  var pageTitle = props.children.props.title;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, pageTitle ? pageTitle + ' - ' + defaultTitle : defaultTitle), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "UTF-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "favicon_180.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props.data[props.lang].header,
    lang: props.lang,
    langChange: props.langChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: props.data[props.lang].footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
    integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9MYXlvdXREZWZhdWx0LmpzIl0sIm5hbWVzIjpbIkxheW91dERlZmF1bHQiLCJwcm9wcyIsImRlZmF1bHRUaXRsZSIsInBhZ2VUaXRsZSIsImNoaWxkcmVuIiwidGl0bGUiLCJkYXRhIiwibGFuZyIsImhlYWRlciIsImxhbmdDaGFuZ2UiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtDQUdBOztBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDM0MsTUFBTUMsWUFBWSxHQUFHLGlDQUFyQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVILEtBQWYsQ0FBcUJJLEtBQXZDO0FBRUEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLFNBQVMsR0FBSUEsU0FBUyxHQUFHLEtBQVosR0FBb0JELFlBQXhCLEdBQXdDQSxZQUF6RCxDQURGLEVBSUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBUUU7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFdBQU8sRUFBQyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFXRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxXQUF0QjtBQUFrQyxRQUFJLEVBQUMsZ0JBQXZDO0FBQXdELFNBQUssRUFBQyxPQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFNLE9BQUcsRUFBQyxrQkFBVjtBQUE2QixTQUFLLEVBQUMsU0FBbkM7QUFBNkMsUUFBSSxFQUFDLGlCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERixFQXVCRSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxFQUFFRCxLQUFLLENBQUNLLElBQU4sQ0FBV0wsS0FBSyxDQUFDTSxJQUFqQixFQUF1QkMsTUFBckM7QUFBNkMsUUFBSSxFQUFFUCxLQUFLLENBQUNNLElBQXpEO0FBQStELGNBQVUsRUFBRU4sS0FBSyxDQUFDUSxVQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJGLEVBd0JHUixLQUFLLENBQUNHLFFBeEJULEVBeUJFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLEVBQUVILEtBQUssQ0FBQ0ssSUFBTixDQUFXTCxLQUFLLENBQUNNLElBQWpCLEVBQXVCRyxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJGLEVBNEJFO0FBQVEsT0FBRyxFQUFDLGtEQUFaO0FBQStELGFBQVMsRUFBQyx5RUFBekU7QUFBbUosZUFBVyxFQUFDLFdBQS9KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsRUE2QkU7QUFBUSxPQUFHLEVBQUMsc0VBQVo7QUFBbUYsYUFBUyxFQUFDLHlFQUE3RjtBQUF1SyxlQUFXLEVBQUMsV0FBbkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdCRixFQThCRTtBQUFRLE9BQUcsRUFBQyx3RUFBWjtBQUFxRixhQUFTLEVBQUMseUVBQS9GO0FBQXlLLGVBQVcsRUFBQyxXQUFyTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJGLENBREY7QUFrQ0Q7S0F0Q3VCVixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzJkYWI4MjYyZDRmNTlhMzM0ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBuZXh0anMvQVBJXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuLy8gaW1wb3J0aW5nIGN1c3RvbSBib290c3RyYXBcbmltcG9ydCBcIi4uL3N0eWxlcy9jdXN0b20uc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXREZWZhdWx0KHByb3BzKSB7XG4gIGNvbnN0IGRlZmF1bHRUaXRsZSA9ICdNZWFkb3dsYW5kcyBDb25zdHJ1Y3Rpb24gJiBGbGlwJztcbiAgY29uc3QgcGFnZVRpdGxlID0gcHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGU7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlID8gKHBhZ2VUaXRsZSArICcgLSAnICsgZGVmYXVsdFRpdGxlKSA6IGRlZmF1bHRUaXRsZX08L3RpdGxlPlxuXG4gICAgICAgIHsvKiB2aWV3cG9ydCAqL31cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cblxuICAgICAgICB7LyogZm9yIElFICovfVxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG5cbiAgICAgICAgey8qIDwhLS0gRmF2aWNvbiAtLT4gKi99XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cImZhdmljb25fNDgucG5nXCIgc2l6ZXM9XCI0OHg0OFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiZmF2aWNvbl8xODAucG5nXCIgLz5cblxuICAgICAgICB7LyogYm9vdHN0cmFwICovfVxuICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIFxuICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIFxuICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgLz4gKi99XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgZGF0YT17cHJvcHMuZGF0YVtwcm9wcy5sYW5nXS5oZWFkZXJ9IGxhbmc9e3Byb3BzLmxhbmd9IGxhbmdDaGFuZ2U9e3Byb3BzLmxhbmdDaGFuZ2V9IC8+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8Rm9vdGVyIGRhdGE9e3Byb3BzLmRhdGFbcHJvcHMubGFuZ10uZm9vdGVyfSAvPlxuXG4gICAgICB7LyogYm9vdHN0cmFwIHNjcmlwdHMgKi99XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1EZlhkejJodFBIMGxzU1NzNW5DVHB1ai96eTRDK09HcGFtb0ZWeTM4TVZCbkUrSWJiVllVZXcrT3JDWGFSa2ZqXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtT2dWUnZ1QVRQMXo3SmpITGt1T1U3WHc3MDQraDgzNUxyKzZRTDlVdllqWkUzSXB1NlRwNzVqN0JoL2tSMEpLSVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9