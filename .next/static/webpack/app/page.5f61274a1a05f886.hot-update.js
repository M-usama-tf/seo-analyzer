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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reportUrls, setReportUrls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        speed: null,\n        seo: null,\n        fullSeo: null,\n        xlsxReportUrl: null\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"speed\"); // Default tab\n    // Handle the input change\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    // Function to generate the SEO report by calling the API route\n    const generateSeoReport = async ()=>{\n        if (!inputValue) {\n            alert(\"Please enter a valid URL.\");\n            return;\n        }\n        setLoading(true); // Start loading\n        try {\n            // Send a POST request to the API route in Next.js\n            const response = await fetch(\"/api/generate-report\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    url: inputValue\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                setReportUrls({\n                    speed: data.speedReportUrl || null,\n                    seo: data.seoReportUrl || null,\n                    fullSeo: data.fullSeoReportUrl || null,\n                    xlsxReportUrl: data.xlsxReportUrl || null\n                });\n            } else {\n                alert(\"Error generating the report. Please try again.\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            alert(\"Error generating the report. Please try again.\");\n        } finally{\n            setLoading(false); // Stop loading\n        }\n    };\n    // Handle tab selection\n    const handleTabClick = (tab)=>{\n        setSelectedTab(tab);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-center font-bold mb-6\",\n                children: \"Site SEO Data Generator\"\n            }, void 0, false, {\n                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"seo-input\",\n                                className: \"block text-sm font-medium mb-2\",\n                                children: \"Enter Site URL:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"seo-input\",\n                                type: \"text\",\n                                className: \"border-2 border-black p-2 rounded-md w-full\",\n                                value: inputValue,\n                                onChange: handleInputChange,\n                                placeholder: \"e.g. https://example.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: generateSeoReport,\n                            className: \"bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-700 transition-colors\",\n                            disabled: loading,\n                            children: loading ? \"Generating Report...\" : \"Generate the Report\"\n                        }, void 0, false, {\n                            fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    reportUrls.speed && reportUrls.seo && reportUrls.fullSeo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4 mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded-md \".concat(selectedTab === \"speed\" ? \"bg-blue-500 text-white\" : \"bg-gray-200\"),\n                                        onClick: ()=>handleTabClick(\"speed\"),\n                                        children: \"Speed Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded-md \".concat(selectedTab === \"seo\" ? \"bg-blue-500 text-white\" : \"bg-gray-200\"),\n                                        onClick: ()=>handleTabClick(\"seo\"),\n                                        children: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded-md \".concat(selectedTab === \"fullSeo\" ? \"bg-blue-500 text-white\" : \"bg-gray-200\"),\n                                        onClick: ()=>handleTabClick(\"fullSeo\"),\n                                        children: \"Full SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this),\n                            selectedTab === \"seo\" && reportUrls.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-2 border-gray-300 rounded-md mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold\",\n                                        children: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        src: reportUrls.seo,\n                                        width: \"100%\",\n                                        height: \"600px\",\n                                        title: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 15\n                            }, this),\n                            selectedTab === \"fullSeo\" && reportUrls.fullSeo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-2 border-gray-300 rounded-md mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold\",\n                                        children: \"Full SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 17\n                                    }, this),\n                                    reportUrls.xlsxReportUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"Download Full SEO Report as XLSX:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                                    lineNumber: 170,\n                                                    columnNumber: 23\n                                                }, this),\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: reportUrls.xlsxReportUrl,\n                                                    target: \"_blank\",\n                                                    className: \"text-blue-600 hover:text-blue-800\",\n                                                    download: true,\n                                                    children: \"Download XLSX\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                                    lineNumber: 171,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                            lineNumber: 169,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lR68TaidKjQB9oWayZHFvqb6ypQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNYixlQUFlO2tEQUMvQjs7Ozs7Ozs7Ozs7OzRCQWtCRnhCLGdCQUFnQixTQUFTUixXQUFXRyxHQUFHLGtCQUN0Qyw4REFBQytCO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQXdCOzs7Ozs7a0RBQ3RDLDhEQUFDYTt3Q0FDQ0MsS0FBS2pELFdBQVdHLEdBQUc7d0NBQ25CK0MsT0FBTTt3Q0FDTkMsUUFBTzt3Q0FDUEMsT0FBTTs7Ozs7Ozs7Ozs7OzRCQUtYNUMsZ0JBQWdCLGFBQWFSLFdBQVdJLE9BQU8sa0JBQzlDLDhEQUFDOEI7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFBd0I7Ozs7OztvQ0FHckNuQyxXQUFXSyxhQUFhLGtCQUN2Qiw4REFBQzZCO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDa0I7OzhEQUNDLDhEQUFDQzs4REFBTzs7Ozs7O2dEQUEyQzs4REFDbkQsOERBQUNDO29EQUNDQyxNQUFNeEQsV0FBV0ssYUFBYTtvREFDOUJPLFFBQU87b0RBQ1B1QixXQUFVO29EQUNWc0IsUUFBUTs4REFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFldkI7R0ExTHdCNUQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVtYWNzdG9yZS9Eb2N1bWVudHMvY29kZXMvVGVjaGZyb250aWVycy9zZW8vc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3JlcG9ydFVybHMsIHNldFJlcG9ydFVybHNdID0gdXNlU3RhdGU8e1xuICAgIHNwZWVkOiBzdHJpbmcgfCBudWxsO1xuICAgIHNlbzogc3RyaW5nIHwgbnVsbDtcbiAgICBmdWxsU2VvOiBzdHJpbmcgfCBudWxsO1xuICAgIHhsc3hSZXBvcnRVcmw6IHN0cmluZyB8IG51bGw7XG4gIH0+KHtcbiAgICBzcGVlZDogbnVsbCxcbiAgICBzZW86IG51bGwsXG4gICAgZnVsbFNlbzogbnVsbCxcbiAgICB4bHN4UmVwb3J0VXJsOiBudWxsLFxuICB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJzcGVlZFwiKTsgLy8gRGVmYXVsdCB0YWJcblxuICAvLyBIYW5kbGUgdGhlIGlucHV0IGNoYW5nZVxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBTRU8gcmVwb3J0IGJ5IGNhbGxpbmcgdGhlIEFQSSByb3V0ZVxuICBjb25zdCBnZW5lcmF0ZVNlb1JlcG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpOyAvLyBTdGFydCBsb2FkaW5nXG5cbiAgICB0cnkge1xuICAgICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgQVBJIHJvdXRlIGluIE5leHQuanNcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlLXJlcG9ydFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1cmw6IGlucHV0VmFsdWUgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFJlcG9ydFVybHMoe1xuICAgICAgICAgIHNwZWVkOiBkYXRhLnNwZWVkUmVwb3J0VXJsIHx8IG51bGwsXG4gICAgICAgICAgc2VvOiBkYXRhLnNlb1JlcG9ydFVybCB8fCBudWxsLFxuICAgICAgICAgIGZ1bGxTZW86IGRhdGEuZnVsbFNlb1JlcG9ydFVybCB8fCBudWxsLFxuICAgICAgICAgIHhsc3hSZXBvcnRVcmw6IGRhdGEueGxzeFJlcG9ydFVybCB8fCBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgZ2VuZXJhdGluZyB0aGUgcmVwb3J0LiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICBhbGVydChcIkVycm9yIGdlbmVyYXRpbmcgdGhlIHJlcG9ydC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTdG9wIGxvYWRpbmdcbiAgICB9XG4gIH07XG5cbiAgLy8gSGFuZGxlIHRhYiBzZWxlY3Rpb25cbiAgY29uc3QgaGFuZGxlVGFiQ2xpY2sgPSAodGFiOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZFRhYih0YWIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHAtNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBtYi02XCI+XG4gICAgICAgIFNpdGUgU0VPIERhdGEgR2VuZXJhdG9yXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgey8qIElucHV0IGFuZCBMYWJlbCAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlby1pbnB1dFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbWItMlwiPlxuICAgICAgICAgICAgRW50ZXIgU2l0ZSBVUkw6XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwic2VvLWlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFjayBwLTIgcm91bmRlZC1tZCB3LWZ1bGxcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gaHR0cHM6Ly9leGFtcGxlLmNvbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEJ1dHRvbiB0byBnZW5lcmF0ZSB0aGUgcmVwb3J0ICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlU2VvUmVwb3J0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBtdC0yIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfSAvLyBEaXNhYmxlIGJ1dHRvbiB3aGVuIGxvYWRpbmdcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bG9hZGluZyA/IFwiR2VuZXJhdGluZyBSZXBvcnQuLi5cIiA6IFwiR2VuZXJhdGUgdGhlIFJlcG9ydFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRGlzcGxheSB0aGUgdGFicyAqL31cbiAgICAgICAge3JlcG9ydFVybHMuc3BlZWQgJiYgcmVwb3J0VXJscy5zZW8gJiYgcmVwb3J0VXJscy5mdWxsU2VvICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTQgbWItNFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIHJvdW5kZWQtbWQgJHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFiID09PSBcInNwZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKFwic3BlZWRcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcGVlZCBSZXBvcnRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWIgPT09IFwic2VvXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKFwic2VvXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU0VPIFJlcG9ydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gXCJmdWxsU2VvXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKFwiZnVsbFNlb1wiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEZ1bGwgU0VPIFJlcG9ydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRGlzcGxheSB0aGUgc2VsZWN0ZWQgcmVwb3J0XG4gICAgICAgICAgICB7c2VsZWN0ZWRUYWIgPT09IFwic3BlZWRcIiAmJiByZXBvcnRVcmxzLnNwZWVkICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+U3BlZWQgUmVwb3J0PC9oMj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICBzcmM9e3JlcG9ydFVybHMuc3BlZWR9IC8vIFVzZSB0aGUgcmV0dXJuZWQgVVJMIGZvciBTcGVlZCByZXBvcnRcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MDBweFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlNwZWVkIFJlcG9ydFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSAqL31cblxuICAgICAgICAgICAge3NlbGVjdGVkVGFiID09PSBcInNlb1wiICYmIHJlcG9ydFVybHMuc2VvICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbXQtNFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5TRU8gUmVwb3J0PC9oMj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICBzcmM9e3JlcG9ydFVybHMuc2VvfSAvLyBVc2UgdGhlIHJldHVybmVkIFVSTCBmb3IgU0VPIHJlcG9ydFxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjYwMHB4XCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU0VPIFJlcG9ydFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2VsZWN0ZWRUYWIgPT09IFwiZnVsbFNlb1wiICYmIHJlcG9ydFVybHMuZnVsbFNlbyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+RnVsbCBTRU8gUmVwb3J0PC9oMj5cblxuICAgICAgICAgICAgICAgIHsvKiBMaW5rIHRvIHRoZSBYTFNYIGZpbGUgKi99XG4gICAgICAgICAgICAgICAge3JlcG9ydFVybHMueGxzeFJlcG9ydFVybCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Eb3dubG9hZCBGdWxsIFNFTyBSZXBvcnQgYXMgWExTWDo8L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3JlcG9ydFVybHMueGxzeFJlcG9ydFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBYTFNYXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgey8qIFlvdSBjYW4gYWRkIG90aGVyIGRldGFpbHMgb3IgcmVwb3J0cyBiZWxvdyAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJyZXBvcnRVcmxzIiwic2V0UmVwb3J0VXJscyIsInNwZWVkIiwic2VvIiwiZnVsbFNlbyIsInhsc3hSZXBvcnRVcmwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdlbmVyYXRlU2VvUmVwb3J0IiwiYWxlcnQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwib2siLCJkYXRhIiwianNvbiIsInNwZWVkUmVwb3J0VXJsIiwic2VvUmVwb3J0VXJsIiwiZnVsbFNlb1JlcG9ydFVybCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRhYkNsaWNrIiwidGFiIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJoMiIsImlmcmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJwIiwic3Ryb25nIiwiYSIsImhyZWYiLCJkb3dubG9hZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});