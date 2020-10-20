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
  }, quote.page)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4158932565",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BneC93ZWJkZXYvY29tLW1lYWRvd2xhbmRzY2YvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Da0IiLCJmaWxlIjoiL2hvbWUvcGd4L3dlYmRldi9jb20tbWVhZG93bGFuZHNjZi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbW9kdWxlc1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuLy8gaW1wb3J0aW5nIG5leHRqcy9hcGlcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIGV4cG9ydGluZyBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck5hdmJhcihwcm9wcykge1xuICBjb25zdCBtZW51SXRlbXMgPSBwcm9wcy5kYXRhXG4gIGNvbnN0IHF1b3RlID0gcHJvcHMucXVvdGVcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J0hlYWRlck1pZCBiZy13aGl0ZSBzdGlja3ktdG9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItZXhwYW5kLWxnIHB5LTIgcHgtMiByb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1icmFuZCc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPScnIHNyYz0nL2ltYWdlcy9sb2dvLWhvcmkucG5nJyBhbHQ9XCJCcmFuZCBMb2dvXCIgLz48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2QWx0TWFya3VwXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48Rm9udEF3ZXNvbWVJY29uIGljb249XCJiYXJzXCIgLz48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZFwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItbmF2IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kICBhbGlnbi1pdGVtcy1jZW50ZXIgZm9udC1uZXhhJz5cbiAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxMaW5rIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtpbmRleH0+PGEgY2xhc3NOYW1lPSd0ZXh0LWNhcGl0YWxpemUgbmF2LWxpbmsgbXgtMic+e2l0ZW0ucGFnZX08L2E+PC9MaW5rPil9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZCBidG4tc20gbXgtM1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIj57cXVvdGUucGFnZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59Il19 */\n/*@ sourceURL=/home/pgx/webdev/com-meadowlandscf/components/header/HeaderNavbar.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2YmFyLmpzIl0sIm5hbWVzIjpbIkhlYWRlck5hdmJhciIsInByb3BzIiwibWVudUl0ZW1zIiwiZGF0YSIsInF1b3RlIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGluayIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7Q0FHQTs7QUFDZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMxQyxNQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsSUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBcEI7QUFFQSxTQUNFLG1FQUNFO0FBQUEsd0NBQW1CLCtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBa0IsT0FBRyxFQUFDLHVCQUF0QjtBQUE4QyxPQUFHLEVBQUMsWUFBbEQ7QUFBQSx3Q0FBZSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxDQURGLENBREYsQ0FERixFQU9FO0FBQW1DLFFBQUksRUFBQyxRQUF4QztBQUFpRCxtQkFBWSxVQUE3RDtBQUF3RSxtQkFBWSxxQkFBcEY7QUFBMEcscUJBQWMsb0JBQXhIO0FBQTZJLHFCQUFjLE9BQTNKO0FBQW1LLGtCQUFXLG1CQUE5SztBQUFBLHdDQUFrQixnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWdCLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEMsQ0FERixDQVBGLEVBV0U7QUFBOEQsTUFBRSxFQUFDLG9CQUFqRTtBQUFBLHdDQUFlLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLHFFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FBaUIsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUFqQjtBQUF1QixTQUFHLEVBQUVELEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUM7QUFBQSwwQ0FBYSwrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQThDRCxJQUFJLENBQUNHLElBQW5ELENBQW5DLENBQWpCO0FBQUEsR0FBZCxDQURILEVBRUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFxRSxtQkFBWSxPQUFqRjtBQUF5RixtQkFBWSxlQUFyRztBQUFBLHdDQUFnQyxvQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzSEwsS0FBSyxDQUFDSyxJQUE1SCxDQUZGLENBREYsQ0FYRixDQURGLENBREYsQ0FERjtBQUFBO0FBQUE7QUFBQSx5cUZBREY7QUE4QkQ7S0FsQ3VCVCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTdkM2EzOWY4Yjk1NWNjMDdhNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBtb2R1bGVzXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG4vLyBpbXBvcnRpbmcgbmV4dGpzL2FwaVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gZXhwb3J0aW5nIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyTmF2YmFyKHByb3BzKSB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IHByb3BzLmRhdGFcbiAgY29uc3QgcXVvdGUgPSBwcm9wcy5xdW90ZVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nSGVhZGVyTWlkIGJnLXdoaXRlIHN0aWNreS10b3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgcHktMiBweC0yIHJvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9Jycgc3JjPScvaW1hZ2VzL2xvZ28taG9yaS5wbmcnIGFsdD1cIkJyYW5kIExvZ29cIiAvPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjxGb250QXdlc29tZUljb24gaWNvbj1cImJhcnNcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1uYXYgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgIGFsaWduLWl0ZW1zLWNlbnRlciBmb250LW5leGEnPlxuICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gPExpbmsgaHJlZj17aXRlbS5saW5rfSBrZXk9e2luZGV4fT48YSBjbGFzc05hbWU9J3RleHQtY2FwaXRhbGl6ZSBuYXYtbGluayBteC0yJz57aXRlbS5wYWdlfTwvYT48L0xpbms+KX1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1kIGJ0bi1zbSBteC0zXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiPntxdW90ZS5wYWdlfTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9