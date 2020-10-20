webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/Index_about.js":
/*!*****************************************!*\
  !*** ./components/index/Index_about.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index_about; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/components/index/Index_about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// importing nextjs/api
 // importing modules

 // exporting component

function Index_about(props) {
  var _this = this;

  var data = props.data;
  var iconStyle = {
    width: '95px',
    color: '#40a7ea'
  };
  return __jsx("section", {
    className: "Index_about py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "text-center text-secondary mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, data.header), __jsx("div", {
    className: "row justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-xl-5 d-flex flex-column justify-content-center align-items-center my-xl-0 mb-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, data.leftColumn.h2), __jsx("p", {
    className: "my-xl-5 my-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, data.leftColumn.p), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.leftColumn.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn btn-primary btn-lg w-50 text-uppercase font-weight-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, data.leftColumn.button))), __jsx("div", {
    className: "col-xl-5 my-xl-0 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, data.rightColumn.map(function (item, i) {
    return (// console.log(item.img);
      __jsx("div", {
        className: "d-flex flex-row  my-3",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 19
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: item.img,
        style: iconStyle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "flex-grow w-100 ml-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 23
        }
      }, item.h4), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 23
        }
      }, item.p)))
    );
  })))));
}
_c = Index_about;

var _c;

$RefreshReg$(_c, "Index_about");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9JbmRleF9hYm91dC5qcyJdLCJuYW1lcyI6WyJJbmRleF9hYm91dCIsInByb3BzIiwiZGF0YSIsImljb25TdHlsZSIsIndpZHRoIiwiY29sb3IiLCJoZWFkZXIiLCJsZWZ0Q29sdW1uIiwiaDIiLCJwIiwibGluayIsImJ1dHRvbiIsInJpZ2h0Q29sdW1uIiwibWFwIiwiaXRlbSIsImkiLCJpbWciLCJoNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQUNlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQ3pDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsU0FBSyxFQUFFLE1BRFM7QUFFaEJDLFNBQUssRUFBRTtBQUZTLEdBQWxCO0FBS0EsU0FDRTtBQUFTLGFBQVMsRUFBQyxrQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURILElBQUksQ0FBQ0ksTUFBdEQsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixJQUFJLENBQUNLLFVBQUwsQ0FBZ0JDLEVBQXJCLENBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDTixJQUFJLENBQUNLLFVBQUwsQ0FBZ0JFLENBQWhELENBRkYsRUFHRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFUCxJQUFJLENBQUNLLFVBQUwsQ0FBZ0JHLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw2REFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRFUixJQUFJLENBQUNLLFVBQUwsQ0FBZ0JJLE1BQTVGLENBREYsQ0FIRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJVCxJQUFJLENBQUNVLFdBQUwsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ2hDLFdBQ0U7QUFDQTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBdUMsV0FBRyxFQUFFQSxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUVELElBQUksQ0FBQ0UsR0FBNUI7QUFBaUMsYUFBSyxFQUFFYixTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS1csSUFBSSxDQUFDRyxFQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlILElBQUksQ0FBQ0wsQ0FBVCxDQUZGLENBRkY7QUFGRjtBQVVELEdBWEQsQ0FGSixDQVJGLENBRkYsQ0FERixDQURGO0FBZ0NEO0tBeEN1QlQsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNjAyMjExNTdkMmRkOGZkZjhhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIG5leHRqcy9hcGlcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gaW1wb3J0aW5nIG1vZHVsZXNcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbi8vIGV4cG9ydGluZyBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4X2Fib3V0KHByb3BzKSB7XG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xuXG4gIGNvbnN0IGljb25TdHlsZSA9IHtcbiAgICB3aWR0aDogJzk1cHgnLFxuICAgIGNvbG9yOiAnIzQwYTdlYSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdJbmRleF9hYm91dCBweS01Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeSBtYi00Jz57ZGF0YS5oZWFkZXJ9PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC01IGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteS14bC0wIG1iLWxnLTQnPlxuICAgICAgICAgICAgPGgyPntkYXRhLmxlZnRDb2x1bW4uaDJ9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXkteGwtNSBteS1sZy01Jz57ZGF0YS5sZWZ0Q29sdW1uLnB9PC9wPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS5sZWZ0Q29sdW1uLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBidG4tbGcgdy01MCB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkJz57ZGF0YS5sZWZ0Q29sdW1uLmJ1dHRvbn08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC01IG15LXhsLTAgbXQtNCc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRhdGEucmlnaHRDb2x1bW4ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaW1nKTtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cgIG15LTMnIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aXRlbS5pbWd9IHN0eWxlPXtpY29uU3R5bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgdy0xMDAgbWwtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLmg0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ucH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=