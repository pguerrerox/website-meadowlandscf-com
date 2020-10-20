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
    width: '100px',
    height: 'auto',
    color: '#40a7ea'
  };
  return __jsx("section", {
    className: "Index_about py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "text-center text-secondary mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.header), __jsx("div", {
    className: "row justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-xl-5 d-flex flex-column justify-content-center align-items-center my-xl-0 mb-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, data.leftColumn.h2), __jsx("p", {
    className: "my-xl-5 my-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, data.leftColumn.p), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.leftColumn.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn btn-primary btn-lg w-50 text-uppercase font-weight-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, data.leftColumn.button))), __jsx("div", {
    className: "col-xl-5 my-xl-0 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, data.rightColumn.map(function (item, i) {
    return (// console.log(item.img);
      __jsx("div", {
        className: "d-flex my-3",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 19
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: item.img,
        style: iconStyle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "ml-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 23
        }
      }, item.h4), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9JbmRleF9hYm91dC5qcyJdLCJuYW1lcyI6WyJJbmRleF9hYm91dCIsInByb3BzIiwiZGF0YSIsImljb25TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJoZWFkZXIiLCJsZWZ0Q29sdW1uIiwiaDIiLCJwIiwibGluayIsImJ1dHRvbiIsInJpZ2h0Q29sdW1uIiwibWFwIiwiaXRlbSIsImkiLCJpbWciLCJoNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQUNlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQ3pDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsU0FBSyxFQUFFLE9BRFM7QUFFaEJDLFVBQU0sRUFBRSxNQUZRO0FBR2hCQyxTQUFLLEVBQUU7QUFIUyxHQUFsQjtBQU1BLFNBQ0U7QUFBUyxhQUFTLEVBQUMsa0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxpQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlESixJQUFJLENBQUNLLE1BQXRELENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0wsSUFBSSxDQUFDTSxVQUFMLENBQWdCQyxFQUFyQixDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ1AsSUFBSSxDQUFDTSxVQUFMLENBQWdCRSxDQUFoRCxDQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRVIsSUFBSSxDQUFDTSxVQUFMLENBQWdCRyxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsNkRBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0RVQsSUFBSSxDQUFDTSxVQUFMLENBQWdCSSxNQUE1RixDQURGLENBSEYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSVYsSUFBSSxDQUFDVyxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNoQyxXQUNFO0FBQ0E7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsV0FBRyxFQUFFQSxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUVELElBQUksQ0FBQ0UsR0FBNUI7QUFBaUMsYUFBSyxFQUFFZCxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLWSxJQUFJLENBQUNHLEVBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUgsSUFBSSxDQUFDTCxDQUFULENBRkYsQ0FGRjtBQUZGO0FBVUQsR0FYRCxDQUZKLENBUkYsQ0FGRixDQURGLENBREY7QUFnQ0Q7S0F6Q3VCVixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxOGIyMzJiN2EzNTM3NGY3YWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbmV4dGpzL2FwaVxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG4vLyBpbXBvcnRpbmcgbW9kdWxlc1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuLy8gZXhwb3J0aW5nIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhfYWJvdXQocHJvcHMpIHtcbiAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGE7XG5cbiAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGNvbG9yOiAnIzQwYTdlYSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdJbmRleF9hYm91dCBweS01Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeSBtYi00Jz57ZGF0YS5oZWFkZXJ9PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC01IGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteS14bC0wIG1iLWxnLTQnPlxuICAgICAgICAgICAgPGgyPntkYXRhLmxlZnRDb2x1bW4uaDJ9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXkteGwtNSBteS1sZy01Jz57ZGF0YS5sZWZ0Q29sdW1uLnB9PC9wPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS5sZWZ0Q29sdW1uLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBidG4tbGcgdy01MCB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkJz57ZGF0YS5sZWZ0Q29sdW1uLmJ1dHRvbn08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC01IG15LXhsLTAgbXQtNCc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRhdGEucmlnaHRDb2x1bW4ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaW1nKTtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggbXktMycga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpdGVtLmltZ30gc3R5bGU9e2ljb25TdHlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5oNH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnB9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9