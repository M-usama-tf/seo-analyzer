"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reportUrls, setReportUrls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        speed: null,\n        seo: null,\n        fullSeo: null,\n        xlsxReportUrl: null\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"speed\"); // Default tab\n    // Handle the input change\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    // Function to generate the SEO report by calling the API route\n    const generateSeoReport = async ()=>{\n        if (!inputValue) {\n            alert(\"Please enter a valid URL.\");\n            return;\n        }\n        setLoading(true); // Start loading\n        try {\n            // Send a POST request to the API route in Next.js\n            const response = await fetch(\"/api/generate-report\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    url: inputValue\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                setReportUrls({\n                    speed: data.speedReportUrl || null,\n                    seo: data.seoReportUrl || null,\n                    fullSeo: data.fullSeoReportUrl || null,\n                    xlsxReportUrl: data.xlsxReportUrl || null\n                });\n            } else {\n                alert(\"Error generating the report. Please try again.\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            alert(\"Error generating the report. Please try again.\");\n        } finally{\n            setLoading(false); // Stop loading\n        }\n    };\n    // Handle tab selection\n    const handleTabClick = (tab)=>{\n        setSelectedTab(tab);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-center font-bold mb-6\",\n                children: \"Site SEO Data Generator\"\n            }, void 0, false, {\n                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"seo-input\",\n                            type: \"text\",\n                            className: \"border-2 border-black p-2 rounded-md w-1/2\",\n                            value: inputValue,\n                            onChange: handleInputChange,\n                            placeholder: \"e.g. https://example.com\"\n                        }, void 0, false, {\n                            fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: generateSeoReport,\n                            className: \"bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-700 transition-colors\",\n                            disabled: loading,\n                            children: loading ? \"Generating Report...\" : \"Generate the Report\"\n                        }, void 0, false, {\n                            fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    reportUrls.speed && reportUrls.seo && reportUrls.fullSeo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4 mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded-md \".concat(selectedTab === \"speed\" ? \"bg-blue-500 text-white\" : \"bg-gray-200\"),\n                                        onClick: ()=>handleTabClick(\"speed\"),\n                                        children: \"Speed Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded-md \".concat(selectedTab === \"seo\" ? \"bg-blue-500 text-white\" : \"bg-gray-200\"),\n                                        onClick: ()=>handleTabClick(\"seo\"),\n                                        children: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this),\n                            \"Display the selected report\",\n                            selectedTab === \"speed\" && reportUrls.speed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-2 border-gray-300 rounded-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold\",\n                                        children: \"Speed Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        src: reportUrls.speed,\n                                        width: \"100%\",\n                                        height: \"600px\",\n                                        title: \"Speed Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, this),\n                            selectedTab === \"seo\" && reportUrls.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-2 border-gray-300 rounded-md mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold\",\n                                        children: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        src: reportUrls.seo,\n                                        width: \"100%\",\n                                        height: \"600px\",\n                                        title: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lR68TaidKjQB9oWayZHFvqb6ypQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBd0I7Ozs7OztrREFDdEMsOERBQUNXO3dDQUNDQyxLQUFLL0MsV0FBV0UsS0FBSzt3Q0FDckI4QyxPQUFNO3dDQUNOQyxRQUFPO3dDQUNQQyxPQUFNOzs7Ozs7Ozs7Ozs7NEJBSVgxQyxnQkFBZ0IsU0FBU1IsV0FBV0csR0FBRyxrQkFDdEMsOERBQUMrQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNVO3dDQUFHVixXQUFVO2tEQUF3Qjs7Ozs7O2tEQUN0Qyw4REFBQ1c7d0NBQ0NDLEtBQUsvQyxXQUFXRyxHQUFHO3dDQUNuQjZDLE9BQU07d0NBQ05DLFFBQU87d0NBQ1BDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCeEI7R0FsTHdCckQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVtYWNzdG9yZS9Eb2N1bWVudHMvY29kZXMvVGVjaGZyb250aWVycy9zZW8vc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3JlcG9ydFVybHMsIHNldFJlcG9ydFVybHNdID0gdXNlU3RhdGU8e1xuICAgIHNwZWVkOiBzdHJpbmcgfCBudWxsO1xuICAgIHNlbzogc3RyaW5nIHwgbnVsbDtcbiAgICBmdWxsU2VvOiBzdHJpbmcgfCBudWxsO1xuICAgIHhsc3hSZXBvcnRVcmw6IHN0cmluZyB8IG51bGw7XG4gIH0+KHtcbiAgICBzcGVlZDogbnVsbCxcbiAgICBzZW86IG51bGwsXG4gICAgZnVsbFNlbzogbnVsbCxcbiAgICB4bHN4UmVwb3J0VXJsOiBudWxsLFxuICB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJzcGVlZFwiKTsgLy8gRGVmYXVsdCB0YWJcblxuICAvLyBIYW5kbGUgdGhlIGlucHV0IGNoYW5nZVxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBTRU8gcmVwb3J0IGJ5IGNhbGxpbmcgdGhlIEFQSSByb3V0ZVxuICBjb25zdCBnZW5lcmF0ZVNlb1JlcG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpOyAvLyBTdGFydCBsb2FkaW5nXG5cbiAgICB0cnkge1xuICAgICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgQVBJIHJvdXRlIGluIE5leHQuanNcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlLXJlcG9ydFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1cmw6IGlucHV0VmFsdWUgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFJlcG9ydFVybHMoe1xuICAgICAgICAgIHNwZWVkOiBkYXRhLnNwZWVkUmVwb3J0VXJsIHx8IG51bGwsXG4gICAgICAgICAgc2VvOiBkYXRhLnNlb1JlcG9ydFVybCB8fCBudWxsLFxuICAgICAgICAgIGZ1bGxTZW86IGRhdGEuZnVsbFNlb1JlcG9ydFVybCB8fCBudWxsLFxuICAgICAgICAgIHhsc3hSZXBvcnRVcmw6IGRhdGEueGxzeFJlcG9ydFVybCB8fCBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgZ2VuZXJhdGluZyB0aGUgcmVwb3J0LiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICBhbGVydChcIkVycm9yIGdlbmVyYXRpbmcgdGhlIHJlcG9ydC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTdG9wIGxvYWRpbmdcbiAgICB9XG4gIH07XG5cbiAgLy8gSGFuZGxlIHRhYiBzZWxlY3Rpb25cbiAgY29uc3QgaGFuZGxlVGFiQ2xpY2sgPSAodGFiOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZFRhYih0YWIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHAtNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBtYi02XCI+XG4gICAgICAgIFNpdGUgU0VPIERhdGEgR2VuZXJhdG9yXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgey8qIElucHV0IGFuZCBMYWJlbCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJzZW8taW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHAtMiByb3VuZGVkLW1kIHctMS8yXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGh0dHBzOi8vZXhhbXBsZS5jb21cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBCdXR0b24gdG8gZ2VuZXJhdGUgdGhlIHJlcG9ydCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVTZW9SZXBvcnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIG10LTIgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9IC8vIERpc2FibGUgYnV0dG9uIHdoZW4gbG9hZGluZ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJHZW5lcmF0aW5nIFJlcG9ydC4uLlwiIDogXCJHZW5lcmF0ZSB0aGUgUmVwb3J0XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBEaXNwbGF5IHRoZSB0YWJzICovfVxuICAgICAgICB7cmVwb3J0VXJscy5zcGVlZCAmJiByZXBvcnRVcmxzLnNlbyAmJiByZXBvcnRVcmxzLmZ1bGxTZW8gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBtYi00XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWIgPT09IFwic3BlZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soXCJzcGVlZFwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwZWVkIFJlcG9ydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gXCJzZW9cIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soXCJzZW9cIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTRU8gUmVwb3J0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gXCJmdWxsU2VvXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKFwiZnVsbFNlb1wiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEZ1bGwgU0VPIFJlcG9ydFxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIERpc3BsYXkgdGhlIHNlbGVjdGVkIHJlcG9ydFxuICAgICAgICAgICAge3NlbGVjdGVkVGFiID09PSBcInNwZWVkXCIgJiYgcmVwb3J0VXJscy5zcGVlZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPlNwZWVkIFJlcG9ydDwvaDI+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXBvcnRVcmxzLnNwZWVkfSAvLyBVc2UgdGhlIHJldHVybmVkIFVSTCBmb3IgU3BlZWQgcmVwb3J0XG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjAwcHhcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTcGVlZCBSZXBvcnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gXCJzZW9cIiAmJiByZXBvcnRVcmxzLnNlbyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+U0VPIFJlcG9ydDwvaDI+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXBvcnRVcmxzLnNlb30gLy8gVXNlIHRoZSByZXR1cm5lZCBVUkwgZm9yIFNFTyByZXBvcnRcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MDBweFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlNFTyBSZXBvcnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiB7c2VsZWN0ZWRUYWIgPT09IFwiZnVsbFNlb1wiICYmIHJlcG9ydFVybHMuZnVsbFNlbyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+RnVsbCBTRU8gUmVwb3J0PC9oMj5cblxuICAgICAgICAgICAgICAgIHtyZXBvcnRVcmxzLnhsc3hSZXBvcnRVcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RG93bmxvYWQgRnVsbCBTRU8gUmVwb3J0IGFzIFhMU1g6PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtyZXBvcnRVcmxzLnhsc3hSZXBvcnRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgWExTWFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJyZXBvcnRVcmxzIiwic2V0UmVwb3J0VXJscyIsInNwZWVkIiwic2VvIiwiZnVsbFNlbyIsInhsc3hSZXBvcnRVcmwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdlbmVyYXRlU2VvUmVwb3J0IiwiYWxlcnQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwib2siLCJkYXRhIiwianNvbiIsInNwZWVkUmVwb3J0VXJsIiwic2VvUmVwb3J0VXJsIiwiZnVsbFNlb1JlcG9ydFVybCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRhYkNsaWNrIiwidGFiIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJoMiIsImlmcmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});