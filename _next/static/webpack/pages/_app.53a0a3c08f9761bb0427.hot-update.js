webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header/HeaderContactCard.js":
/*!************************************************!*\
  !*** ./components/header/HeaderContactCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContactCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/components/header/HeaderContactCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// importing modules

/* DESC
<type> prop will determine the displayed data
<data> prop comes all the way down from the page
if there is a social prop, the component will display social app logos with links */

function HeaderContactCard(props) {
  var _this = this;

  var contactData = props.data[props.type];
  var socialIcons = ['facebook', 'instagram', 'twitter'];
  var social = props.data['social'];
  var iconStyle = {
    width: '45px',
    height: 'auto'
  };
  return props.social ? __jsx("div", {
    className: "col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2 d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-234679994" + " " + 'd-flex flex-row justify-content-center align-items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, socialIcons.map(function (x, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-234679994" + " " + 'd-flex aling-items-center px-3',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: social[x].link,
      target: "_blank",
      className: "jsx-234679994" + " " + 'awesomeIcon',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: ['fab', social[x].logo],
      style: iconStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 84
      }
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "234679994",
    __self: this
  }, ".awesomeIcon.jsx-234679994{color:darkgray;-webkit-transition:color,0.25s;transition:color,0.25s;}.awesomeIcon.jsx-234679994:hover{color:#40a7ea;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BneC93ZWJkZXYvY29tLW1lYWRvd2xhbmRzY2YvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyQ29udGFjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JzQixBQUVzQyxBQUNJLGNBQUMsQ0FEbUIsc0RBQUMiLCJmaWxlIjoiL2hvbWUvcGd4L3dlYmRldi9jb20tbWVhZG93bGFuZHNjZi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJDb250YWN0Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBtb2R1bGVzXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG4vKiBERVNDXG48dHlwZT4gcHJvcCB3aWxsIGRldGVybWluZSB0aGUgZGlzcGxheWVkIGRhdGFcbjxkYXRhPiBwcm9wIGNvbWVzIGFsbCB0aGUgd2F5IGRvd24gZnJvbSB0aGUgcGFnZVxuaWYgdGhlcmUgaXMgYSBzb2NpYWwgcHJvcCwgdGhlIGNvbXBvbmVudCB3aWxsIGRpc3BsYXkgc29jaWFsIGFwcCBsb2dvcyB3aXRoIGxpbmtzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJDb250YWN0Q2FyZChwcm9wcykge1xuICBjb25zdCBjb250YWN0RGF0YSA9IHByb3BzLmRhdGFbcHJvcHMudHlwZV1cbiAgY29uc3Qgc29jaWFsSWNvbnMgPSBbJ2ZhY2Vib29rJywgJ2luc3RhZ3JhbScsICd0d2l0dGVyJ11cbiAgY29uc3Qgc29jaWFsID0gcHJvcHMuZGF0YVsnc29jaWFsJ107XG5cbiAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgIHdpZHRoOiAnNDVweCcsXG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMuc29jaWFsXG4gICAgICA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyIHB5LTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzb2NpYWxJY29ucy5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGluZy1pdGVtcy1jZW50ZXIgcHgtMycga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtzb2NpYWxbeF0ubGlua30gY2xhc3NOYW1lPSdhd2Vzb21lSWNvbicgdGFyZ2V0PSdfYmxhbmsnPjxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCBzb2NpYWxbeF0ubG9nb119IHN0eWxlPXtpY29uU3R5bGV9IC8+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF3ZXNvbWVJY29ue2NvbG9yOiBkYXJrZ3JheTsgdHJhbnNpdGlvbjogY29sb3IsIDAuMjVzfVxuICAgICAgICAgIC5hd2Vzb21lSWNvbjpob3Zlcntjb2xvcjogIzQwYTdlYX1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgOlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RDYXJkIGNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBweS0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwJz5cbiAgICAgICAgPGEgaHJlZj17Y29udGFjdERhdGEubGlua30gY2xhc3NOYW1lPSd0ZXh0LWRlY29yYXRpb24tbm9uZSBkLWZsZXggdy0xMDAnIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGF3ZXNvbWVJY29uJz5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtjb250YWN0RGF0YS5sb2dvfSBzdHlsZT17aWNvblN0eWxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMyc+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J20tMCBwLTAgdGV4dC1kYXJrJz57Y29udGFjdERhdGEudG9wTGluZX08L2g1PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbm93cmFwJz57Y29udGFjdERhdGEuYm90TGluZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXdlc29tZUljb257Y29sb3I6IGRhcmtncmF5OyB0cmFuc2l0aW9uOiBjb2xvciwgMC4yNXN9XG4gICAgICAgICAgLmNvbnRhY3RDYXJkOmhvdmVyIC5hd2Vzb21lSWNvbntjb2xvcjogIzQwYTdlYX1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/home/pgx/webdev/com-meadowlandscf/components/header/HeaderContactCard.js */"))) : __jsx("div", {
    className: "jsx-3124364684" + " " + 'contactCard col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2 d-flex justify-content-center w-100',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: contactData.link,
    target: "_blank",
    className: "jsx-3124364684" + " " + 'text-decoration-none d-flex w-100',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3124364684" + " " + 'd-flex flex-row justify-content-center align-items-center w-100',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3124364684" + " " + 'd-flex align-items-center awesomeIcon',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: contactData.logo,
    style: iconStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-3124364684" + " " + 'pl-3',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "jsx-3124364684" + " " + 'm-0 p-0 text-dark',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, contactData.topLine), __jsx("span", {
    className: "jsx-3124364684" + " " + 'text-nowrap',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, contactData.botLine)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3124364684",
    __self: this
  }, ".awesomeIcon.jsx-3124364684{color:darkgray;-webkit-transition:color,0.25s;transition:color,0.25s;}.contactCard.jsx-3124364684:hover .awesomeIcon.jsx-3124364684{color:#40a7ea;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BneC93ZWJkZXYvY29tLW1lYWRvd2xhbmRzY2YvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyQ29udGFjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURvQixBQUVzQyxBQUNpQixjQUFDLENBRE0sc0RBQUMiLCJmaWxlIjoiL2hvbWUvcGd4L3dlYmRldi9jb20tbWVhZG93bGFuZHNjZi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJDb250YWN0Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBtb2R1bGVzXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG4vKiBERVNDXG48dHlwZT4gcHJvcCB3aWxsIGRldGVybWluZSB0aGUgZGlzcGxheWVkIGRhdGFcbjxkYXRhPiBwcm9wIGNvbWVzIGFsbCB0aGUgd2F5IGRvd24gZnJvbSB0aGUgcGFnZVxuaWYgdGhlcmUgaXMgYSBzb2NpYWwgcHJvcCwgdGhlIGNvbXBvbmVudCB3aWxsIGRpc3BsYXkgc29jaWFsIGFwcCBsb2dvcyB3aXRoIGxpbmtzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJDb250YWN0Q2FyZChwcm9wcykge1xuICBjb25zdCBjb250YWN0RGF0YSA9IHByb3BzLmRhdGFbcHJvcHMudHlwZV1cbiAgY29uc3Qgc29jaWFsSWNvbnMgPSBbJ2ZhY2Vib29rJywgJ2luc3RhZ3JhbScsICd0d2l0dGVyJ11cbiAgY29uc3Qgc29jaWFsID0gcHJvcHMuZGF0YVsnc29jaWFsJ107XG5cbiAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgIHdpZHRoOiAnNDVweCcsXG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMuc29jaWFsXG4gICAgICA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyIHB5LTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzb2NpYWxJY29ucy5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGluZy1pdGVtcy1jZW50ZXIgcHgtMycga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtzb2NpYWxbeF0ubGlua30gY2xhc3NOYW1lPSdhd2Vzb21lSWNvbicgdGFyZ2V0PSdfYmxhbmsnPjxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCBzb2NpYWxbeF0ubG9nb119IHN0eWxlPXtpY29uU3R5bGV9IC8+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF3ZXNvbWVJY29ue2NvbG9yOiBkYXJrZ3JheTsgdHJhbnNpdGlvbjogY29sb3IsIDAuMjVzfVxuICAgICAgICAgIC5hd2Vzb21lSWNvbjpob3Zlcntjb2xvcjogIzQwYTdlYX1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgOlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RDYXJkIGNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBweS0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwJz5cbiAgICAgICAgPGEgaHJlZj17Y29udGFjdERhdGEubGlua30gY2xhc3NOYW1lPSd0ZXh0LWRlY29yYXRpb24tbm9uZSBkLWZsZXggdy0xMDAnIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGF3ZXNvbWVJY29uJz5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtjb250YWN0RGF0YS5sb2dvfSBzdHlsZT17aWNvblN0eWxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMyc+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J20tMCBwLTAgdGV4dC1kYXJrJz57Y29udGFjdERhdGEudG9wTGluZX08L2g1PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbm93cmFwJz57Y29udGFjdERhdGEuYm90TGluZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXdlc29tZUljb257Y29sb3I6IGRhcmtncmF5OyB0cmFuc2l0aW9uOiBjb2xvciwgMC4yNXN9XG4gICAgICAgICAgLmNvbnRhY3RDYXJkOmhvdmVyIC5hd2Vzb21lSWNvbntjb2xvcjogIzQwYTdlYX1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/home/pgx/webdev/com-meadowlandscf/components/header/HeaderContactCard.js */"));
}
_c = HeaderContactCard;

var _c;

$RefreshReg$(_c, "HeaderContactCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyQ29udGFjdENhcmQuanMiXSwibmFtZXMiOlsiSGVhZGVyQ29udGFjdENhcmQiLCJwcm9wcyIsImNvbnRhY3REYXRhIiwiZGF0YSIsInR5cGUiLCJzb2NpYWxJY29ucyIsInNvY2lhbCIsImljb25TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFwIiwieCIsImluZGV4IiwibGluayIsImxvZ28iLCJ0b3BMaW5lIiwiYm90TGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7OztBQUllLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUMvQyxNQUFNQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXRixLQUFLLENBQUNHLElBQWpCLENBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBMEIsU0FBMUIsQ0FBcEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdMLEtBQUssQ0FBQ0UsSUFBTixDQUFXLFFBQVgsQ0FBZjtBQUVBLE1BQU1JLFNBQVMsR0FBRztBQUNoQkMsU0FBSyxFQUFFLE1BRFM7QUFFaEJDLFVBQU0sRUFBRTtBQUZRLEdBQWxCO0FBS0EsU0FDRVIsS0FBSyxDQUFDSyxNQUFOLEdBRUU7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWUsMkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJRCxXQUFXLENBQUNLLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDNUIsV0FDRTtBQUFnRCxTQUFHLEVBQUVBLEtBQXJEO0FBQUEseUNBQWUsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFFTixNQUFNLENBQUNLLENBQUQsQ0FBTixDQUFVRSxJQUFuQjtBQUFpRCxZQUFNLEVBQUMsUUFBeEQ7QUFBQSx5Q0FBbUMsYUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpRSxNQUFDLDhFQUFEO0FBQWlCLFVBQUksRUFBRSxDQUFDLEtBQUQsRUFBUVAsTUFBTSxDQUFDSyxDQUFELENBQU4sQ0FBVUcsSUFBbEIsQ0FBdkI7QUFBZ0QsV0FBSyxFQUFFUCxTQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpFLENBREYsQ0FERjtBQUtELEdBTkQsQ0FGSjtBQUFBO0FBQUE7QUFBQSxtbUhBREYsQ0FGRixHQW9CRTtBQUFBLHdDQUFlLDJGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRUwsV0FBVyxDQUFDVyxJQUFyQjtBQUF5RSxVQUFNLEVBQUMsUUFBaEY7QUFBQSx3Q0FBcUMsbUNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRVgsV0FBVyxDQUFDWSxJQUFuQztBQUF5QyxTQUFLLEVBQUVQLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFjLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNMLFdBQVcsQ0FBQ2EsT0FBL0MsQ0FERixFQUVFO0FBQUEsd0NBQWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JiLFdBQVcsQ0FBQ2MsT0FBM0MsQ0FGRixDQUpGLENBREYsQ0FERjtBQUFBO0FBQUE7QUFBQSxpb0hBckJKO0FBd0NEO0tBbER1QmhCLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTNhMGEzYzA4Zjk3NjFiYjA0MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBtb2R1bGVzXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG4vKiBERVNDXG48dHlwZT4gcHJvcCB3aWxsIGRldGVybWluZSB0aGUgZGlzcGxheWVkIGRhdGFcbjxkYXRhPiBwcm9wIGNvbWVzIGFsbCB0aGUgd2F5IGRvd24gZnJvbSB0aGUgcGFnZVxuaWYgdGhlcmUgaXMgYSBzb2NpYWwgcHJvcCwgdGhlIGNvbXBvbmVudCB3aWxsIGRpc3BsYXkgc29jaWFsIGFwcCBsb2dvcyB3aXRoIGxpbmtzICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJDb250YWN0Q2FyZChwcm9wcykge1xuICBjb25zdCBjb250YWN0RGF0YSA9IHByb3BzLmRhdGFbcHJvcHMudHlwZV1cbiAgY29uc3Qgc29jaWFsSWNvbnMgPSBbJ2ZhY2Vib29rJywgJ2luc3RhZ3JhbScsICd0d2l0dGVyJ11cbiAgY29uc3Qgc29jaWFsID0gcHJvcHMuZGF0YVsnc29jaWFsJ107XG5cbiAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgIHdpZHRoOiAnNDVweCcsXG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgcHJvcHMuc29jaWFsXG4gICAgICA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyIHB5LTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzb2NpYWxJY29ucy5tYXAoKHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGluZy1pdGVtcy1jZW50ZXIgcHgtMycga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtzb2NpYWxbeF0ubGlua30gY2xhc3NOYW1lPSdhd2Vzb21lSWNvbicgdGFyZ2V0PSdfYmxhbmsnPjxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCBzb2NpYWxbeF0ubG9nb119IHN0eWxlPXtpY29uU3R5bGV9IC8+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF3ZXNvbWVJY29ue2NvbG9yOiBkYXJrZ3JheTsgdHJhbnNpdGlvbjogY29sb3IsIDAuMjVzfVxuICAgICAgICAgIC5hd2Vzb21lSWNvbjpob3Zlcntjb2xvcjogIzQwYTdlYX1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgOlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RDYXJkIGNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBweS0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwJz5cbiAgICAgICAgPGEgaHJlZj17Y29udGFjdERhdGEubGlua30gY2xhc3NOYW1lPSd0ZXh0LWRlY29yYXRpb24tbm9uZSBkLWZsZXggdy0xMDAnIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGF3ZXNvbWVJY29uJz5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtjb250YWN0RGF0YS5sb2dvfSBzdHlsZT17aWNvblN0eWxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMyc+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J20tMCBwLTAgdGV4dC1kYXJrJz57Y29udGFjdERhdGEudG9wTGluZX08L2g1PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbm93cmFwJz57Y29udGFjdERhdGEuYm90TGluZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXdlc29tZUljb257Y29sb3I6IGRhcmtncmF5OyB0cmFuc2l0aW9uOiBjb2xvciwgMC4yNXN9XG4gICAgICAgICAgLmNvbnRhY3RDYXJkOmhvdmVyIC5hd2Vzb21lSWNvbntjb2xvcjogIzQwYTdlYX1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9