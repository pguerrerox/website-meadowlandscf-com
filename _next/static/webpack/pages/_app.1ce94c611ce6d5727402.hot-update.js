webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header/HeaderNavbar.js":
/*!*******************************************!*\
  !*** ./components/header/HeaderNavbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderNavbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/components/header/HeaderNavbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// importing modules
 // importing nextjs/api

 // exporting component

function HeaderNavbar(props) {
  var _this = this;

  var menuItems = props.data;
  var quote = props.quote;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-4158932565" + " " + 'HeaderMid bg-white sticky-top',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + 'container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "jsx-4158932565" + " " + 'navbar navbar-expand-lg py-2 px-2 row',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + 'navbar-brand',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/logo-hori.png",
    alt: "Brand Logo",
    className: "jsx-4158932565" + " " + '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 20
    }
  })))), __jsx("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNavAltMarkup",
    "aria-controls": "navbarNavAltMarkup",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-4158932565" + " " + "navbar-toggler",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-4158932565" + " " + "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 53
    }
  }))), __jsx("div", {
    id: "navbarNavAltMarkup",
    className: "jsx-4158932565" + " " + "collapse navbar-collapse justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + 'navbar-nav d-flex justify-content-end  align-items-center font-nexa',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, menuItems.map(function (item, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: item.link,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 49
      }
    }, __jsx("a", {
      className: "jsx-4158932565" + " " + 'text-capitalize nav-link mx-2',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 84
      }
    }, item.page));
  }), __jsx("button", {
    type: "button",
    "data-toggle": "modal",
    "data-target": "#exampleModal",
    className: "jsx-4158932565" + " " + "btn btn-primary btn-md btn-sm mx-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, quote.page), __jsx("div", {
    "class": "modal fade",
    id: "exampleModal",
    tabindex: "-1",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "modal-dialog",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, __jsx("div", {
    "class": "modal-content",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "modal-header",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }, __jsx("h5", {
    "class": "modal-title",
    id: "exampleModalLabel",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "Modal title"), __jsx("button", {
    type: "button",
    "class": "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 27
    }
  }, "\xD7"))), __jsx("div", {
    "class": "modal-body",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }
  }, "..."), __jsx("div", {
    "class": "modal-footer",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, __jsx("button", {
    type: "button",
    "class": "btn btn-secondary",
    "data-dismiss": "modal",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Close"), __jsx("button", {
    type: "button",
    "class": "btn btn-primary",
    className: "jsx-4158932565",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "Save changes")))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4158932565",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BneC93ZWJkZXYvY29tLW1lYWRvd2xhbmRzY2YvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEa0IiLCJmaWxlIjoiL2hvbWUvcGd4L3dlYmRldi9jb20tbWVhZG93bGFuZHNjZi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbW9kdWxlc1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuLy8gaW1wb3J0aW5nIG5leHRqcy9hcGlcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIGV4cG9ydGluZyBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck5hdmJhcihwcm9wcykge1xuICBjb25zdCBtZW51SXRlbXMgPSBwcm9wcy5kYXRhXG4gIGNvbnN0IHF1b3RlID0gcHJvcHMucXVvdGVcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J0hlYWRlck1pZCBiZy13aGl0ZSBzdGlja3ktdG9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItZXhwYW5kLWxnIHB5LTIgcHgtMiByb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1icmFuZCc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPScnIHNyYz0nL2ltYWdlcy9sb2dvLWhvcmkucG5nJyBhbHQ9XCJCcmFuZCBMb2dvXCIgLz48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2QWx0TWFya3VwXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48Rm9udEF3ZXNvbWVJY29uIGljb249XCJiYXJzXCIgLz48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZFwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItbmF2IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kICBhbGlnbi1pdGVtcy1jZW50ZXIgZm9udC1uZXhhJz5cbiAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxMaW5rIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtpbmRleH0+PGEgY2xhc3NOYW1lPSd0ZXh0LWNhcGl0YWxpemUgbmF2LWxpbmsgbXgtMic+e2l0ZW0ucGFnZX08L2E+PC9MaW5rPil9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZCBidG4tc20gbXgtM1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIj57cXVvdGUucGFnZX08L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5Nb2RhbCB0aXRsZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/home/pgx/webdev/com-meadowlandscf/components/header/HeaderNavbar.js */"));
}
_c = HeaderNavbar;

var _c;

$RefreshReg$(_c, "HeaderNavbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2YmFyLmpzIl0sIm5hbWVzIjpbIkhlYWRlck5hdmJhciIsInByb3BzIiwibWVudUl0ZW1zIiwiZGF0YSIsInF1b3RlIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGluayIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7Q0FHQTs7QUFDZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMxQyxNQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsSUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBcEI7QUFFQSxTQUNFLG1FQUNFO0FBQUEsd0NBQW1CLCtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBa0IsT0FBRyxFQUFDLHVCQUF0QjtBQUE4QyxPQUFHLEVBQUMsWUFBbEQ7QUFBQSx3Q0FBZSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxDQURGLENBREYsQ0FERixFQU9FO0FBQW1DLFFBQUksRUFBQyxRQUF4QztBQUFpRCxtQkFBWSxVQUE3RDtBQUF3RSxtQkFBWSxxQkFBcEY7QUFBMEcscUJBQWMsb0JB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QlQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFjZTk0YzYxMWNlNmQ1NzI3NDAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbW9kdWxlc1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuLy8gaW1wb3J0aW5nIG5leHRqcy9hcGlcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIGV4cG9ydGluZyBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck5hdmJhcihwcm9wcykge1xuICBjb25zdCBtZW51SXRlbXMgPSBwcm9wcy5kYXRhXG4gIGNvbnN0IHF1b3RlID0gcHJvcHMucXVvdGVcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J0hlYWRlck1pZCBiZy13aGl0ZSBzdGlja3ktdG9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItZXhwYW5kLWxnIHB5LTIgcHgtMiByb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1icmFuZCc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPScnIHNyYz0nL2ltYWdlcy9sb2dvLWhvcmkucG5nJyBhbHQ9XCJCcmFuZCBMb2dvXCIgLz48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2QWx0TWFya3VwXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48Rm9udEF3ZXNvbWVJY29uIGljb249XCJiYXJzXCIgLz48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZFwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItbmF2IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kICBhbGlnbi1pdGVtcy1jZW50ZXIgZm9udC1uZXhhJz5cbiAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxMaW5rIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtpbmRleH0+PGEgY2xhc3NOYW1lPSd0ZXh0LWNhcGl0YWxpemUgbmF2LWxpbmsgbXgtMic+e2l0ZW0ucGFnZX08L2E+PC9MaW5rPil9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZCBidG4tc20gbXgtM1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIj57cXVvdGUucGFnZX08L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5Nb2RhbCB0aXRsZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=