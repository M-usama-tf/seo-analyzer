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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_text_generate_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/text-generate-effect */ \"(app-pages-browser)/./src/components/ui/text-generate-effect.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reportUrls, setReportUrls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        speed: null,\n        seo: null,\n        fullSeo: null,\n        xlsxReportUrl: null\n    });\n    const words = \"Your website's SEO performance has been evaluated, and we recommend focusing on optimizing keywords, improving page speed, and enhancing mobile responsiveness to boost rankings and drive more organic traffic.\\n\";\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"speed\"); // Default tab\n    // Handle the input change\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    // Function to generate the SEO report by calling the API route\n    const generateSeoReport = async ()=>{\n        if (!inputValue) {\n            alert(\"Please enter a valid URL.\");\n            return;\n        }\n        setLoading(true); // Start loading\n        try {\n            // Send a POST request to the API route in Next.js\n            const response = await fetch(\"/api/generate-report\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    url: inputValue\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                setReportUrls({\n                    speed: data.speedReportUrl || null,\n                    seo: data.seoReportUrl || null,\n                    fullSeo: data.fullSeoReportUrl || null,\n                    xlsxReportUrl: data.xlsxReportUrl || null\n                });\n            } else {\n                alert(\"Error generating the report. Please try again.\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            alert(\"Error generating the report. Please try again.\");\n        } finally{\n            setLoading(false); // Stop loading\n        }\n    };\n    // Handle tab selection\n    const handleTabClick = (tab)=>{\n        setSelectedTab(tab);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl text-center font-bold mb-6\",\n                children: \"Site SEO Data Generator\"\n            }, void 0, false, {\n                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"seo-input\",\n                                type: \"text\",\n                                className: \" shadow-lg border border-gray-200 p-2 rounded-md w-1/2\",\n                                value: inputValue,\n                                onChange: handleInputChange,\n                                placeholder: \"e.g. https://example.com\",\n                                disabled: loading\n                            }, void 0, false, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: generateSeoReport,\n                                    className: \"bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-700 transition-colors\",\n                                    disabled: loading,\n                                    children: loading ? \"Generating Report...\" : \"Generate the Report\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/2\",\n                                children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_text_generate_effect__WEBPACK_IMPORTED_MODULE_2__.TextGenerateEffect, {\n                                    words: words,\n                                    className: \"text-sm\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    reportUrls.speed && reportUrls.seo && reportUrls.fullSeo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4 mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded-md \".concat(selectedTab === \"speed\" ? \"bg-blue-500 text-white\" : \"bg-gray-200\"),\n                                        onClick: ()=>handleTabClick(\"speed\"),\n                                        children: \"Speed Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 rounded-md \".concat(selectedTab === \"seo\" ? \"bg-blue-500 text-white\" : \"bg-gray-200\"),\n                                        onClick: ()=>handleTabClick(\"seo\"),\n                                        children: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            \"Display the selected report\",\n                            selectedTab === \"speed\" && reportUrls.speed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-2 border-gray-300 rounded-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold\",\n                                        children: \"Speed Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        src: reportUrls.speed,\n                                        width: \"100%\",\n                                        height: \"600px\",\n                                        title: \"Speed Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, this),\n                            selectedTab === \"seo\" && reportUrls.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-4 border-2 border-gray-300 rounded-md mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold\",\n                                        children: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 156,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        src: reportUrls.seo,\n                                        width: \"100%\",\n                                        height: \"600px\",\n                                        title: \"SEO Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/themacstore/Documents/codes/Techfrontiers/seo/src/app/page.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lR68TaidKjQB9oWayZHFvqb6ypQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBRU5vQyxTQUFTLElBQU1aLGVBQWU7a0RBQy9COzs7Ozs7Ozs7Ozs7NEJBYUc7NEJBRUx4QixnQkFBZ0IsV0FBV1QsV0FBV0UsS0FBSyxrQkFDMUMsOERBQUNpQztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNVO3dDQUFHVixXQUFVO2tEQUF3Qjs7Ozs7O2tEQUN0Qyw4REFBQ1c7d0NBQ0NDLEtBQUtoRCxXQUFXRSxLQUFLO3dDQUNyQitDLE9BQU07d0NBQ05DLFFBQU87d0NBQ1BDLE9BQU07Ozs7Ozs7Ozs7Ozs0QkFJWDFDLGdCQUFnQixTQUFTVCxXQUFXRyxHQUFHLGtCQUN0Qyw4REFBQ2dDO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1U7d0NBQUdWLFdBQVU7a0RBQXdCOzs7Ozs7a0RBQ3RDLDhEQUFDVzt3Q0FDQ0MsS0FBS2hELFdBQVdHLEdBQUc7d0NBQ25COEMsT0FBTTt3Q0FDTkMsUUFBTzt3Q0FDUEMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0J4QjtHQTFMd0J0RDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3RoZW1hY3N0b3JlL0RvY3VtZW50cy9jb2Rlcy9UZWNoZnJvbnRpZXJzL3Nlby9zcmMvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dEdlbmVyYXRlRWZmZWN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvdGV4dC1nZW5lcmF0ZS1lZmZlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3JlcG9ydFVybHMsIHNldFJlcG9ydFVybHNdID0gdXNlU3RhdGU8e1xuICAgIHNwZWVkOiBzdHJpbmcgfCBudWxsO1xuICAgIHNlbzogc3RyaW5nIHwgbnVsbDtcbiAgICBmdWxsU2VvOiBzdHJpbmcgfCBudWxsO1xuICAgIHhsc3hSZXBvcnRVcmw6IHN0cmluZyB8IG51bGw7XG4gIH0+KHtcbiAgICBzcGVlZDogbnVsbCxcbiAgICBzZW86IG51bGwsXG4gICAgZnVsbFNlbzogbnVsbCxcbiAgICB4bHN4UmVwb3J0VXJsOiBudWxsLFxuICB9KTtcbiAgY29uc3Qgd29yZHMgPSBgWW91ciB3ZWJzaXRlJ3MgU0VPIHBlcmZvcm1hbmNlIGhhcyBiZWVuIGV2YWx1YXRlZCwgYW5kIHdlIHJlY29tbWVuZCBmb2N1c2luZyBvbiBvcHRpbWl6aW5nIGtleXdvcmRzLCBpbXByb3ZpbmcgcGFnZSBzcGVlZCwgYW5kIGVuaGFuY2luZyBtb2JpbGUgcmVzcG9uc2l2ZW5lc3MgdG8gYm9vc3QgcmFua2luZ3MgYW5kIGRyaXZlIG1vcmUgb3JnYW5pYyB0cmFmZmljLlxuYDtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGU8c3RyaW5nPihcInNwZWVkXCIpOyAvLyBEZWZhdWx0IHRhYlxuXG4gIC8vIEhhbmRsZSB0aGUgaW5wdXQgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIFNFTyByZXBvcnQgYnkgY2FsbGluZyB0aGUgQVBJIHJvdXRlXG4gIGNvbnN0IGdlbmVyYXRlU2VvUmVwb3J0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7IC8vIFN0YXJ0IGxvYWRpbmdcblxuICAgIHRyeSB7XG4gICAgICAvLyBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBBUEkgcm91dGUgaW4gTmV4dC5qc1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGUtcmVwb3J0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVybDogaW5wdXRWYWx1ZSB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0UmVwb3J0VXJscyh7XG4gICAgICAgICAgc3BlZWQ6IGRhdGEuc3BlZWRSZXBvcnRVcmwgfHwgbnVsbCxcbiAgICAgICAgICBzZW86IGRhdGEuc2VvUmVwb3J0VXJsIHx8IG51bGwsXG4gICAgICAgICAgZnVsbFNlbzogZGF0YS5mdWxsU2VvUmVwb3J0VXJsIHx8IG51bGwsXG4gICAgICAgICAgeGxzeFJlcG9ydFVybDogZGF0YS54bHN4UmVwb3J0VXJsIHx8IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJFcnJvciBnZW5lcmF0aW5nIHRoZSByZXBvcnQuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZ2VuZXJhdGluZyB0aGUgcmVwb3J0LiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFN0b3AgbG9hZGluZ1xuICAgIH1cbiAgfTtcblxuICAvLyBIYW5kbGUgdGFiIHNlbGVjdGlvblxuICBjb25zdCBoYW5kbGVUYWJDbGljayA9ICh0YWI6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkVGFiKHRhYik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgcC02XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIG1iLTZcIj5cbiAgICAgICAgU2l0ZSBTRU8gRGF0YSBHZW5lcmF0b3JcbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICB7LyogSW5wdXQgYW5kIExhYmVsICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInNlby1pbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgc2hhZG93LWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC0yIHJvdW5kZWQtbWQgdy0xLzJcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gaHR0cHM6Ly9leGFtcGxlLmNvbVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHctMS8yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlU2VvUmVwb3J0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIG10LTIgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ30gLy8gRGlzYWJsZSBidXR0b24gd2hlbiBsb2FkaW5nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJHZW5lcmF0aW5nIFJlcG9ydC4uLlwiIDogXCJHZW5lcmF0ZSB0aGUgUmVwb3J0XCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgIDxUZXh0R2VuZXJhdGVFZmZlY3Qgd29yZHM9e3dvcmRzfSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogQnV0dG9uIHRvIGdlbmVyYXRlIHRoZSByZXBvcnQgKi99XG4gICAgICAgIHsvKiBEaXNwbGF5IHRoZSB0YWJzICovfVxuICAgICAgICB7cmVwb3J0VXJscy5zcGVlZCAmJiByZXBvcnRVcmxzLnNlbyAmJiByZXBvcnRVcmxzLmZ1bGxTZW8gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBtYi00XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWIgPT09IFwic3BlZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soXCJzcGVlZFwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwZWVkIFJlcG9ydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gXCJzZW9cIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soXCJzZW9cIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTRU8gUmVwb3J0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYiA9PT0gXCJmdWxsU2VvXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKFwiZnVsbFNlb1wiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEZ1bGwgU0VPIFJlcG9ydFxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIERpc3BsYXkgdGhlIHNlbGVjdGVkIHJlcG9ydFxuICAgICAgICAgICAge3NlbGVjdGVkVGFiID09PSBcInNwZWVkXCIgJiYgcmVwb3J0VXJscy5zcGVlZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPlNwZWVkIFJlcG9ydDwvaDI+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXBvcnRVcmxzLnNwZWVkfSAvLyBVc2UgdGhlIHJldHVybmVkIFVSTCBmb3IgU3BlZWQgcmVwb3J0XG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjAwcHhcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTcGVlZCBSZXBvcnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gXCJzZW9cIiAmJiByZXBvcnRVcmxzLnNlbyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+U0VPIFJlcG9ydDwvaDI+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXBvcnRVcmxzLnNlb30gLy8gVXNlIHRoZSByZXR1cm5lZCBVUkwgZm9yIFNFTyByZXBvcnRcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MDBweFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlNFTyBSZXBvcnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiB7c2VsZWN0ZWRUYWIgPT09IFwiZnVsbFNlb1wiICYmIHJlcG9ydFVybHMuZnVsbFNlbyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+RnVsbCBTRU8gUmVwb3J0PC9oMj5cblxuICAgICAgICAgICAgICAgIHtyZXBvcnRVcmxzLnhsc3hSZXBvcnRVcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RG93bmxvYWQgRnVsbCBTRU8gUmVwb3J0IGFzIFhMU1g6PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtyZXBvcnRVcmxzLnhsc3hSZXBvcnRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgWExTWFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUZXh0R2VuZXJhdGVFZmZlY3QiLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJyZXBvcnRVcmxzIiwic2V0UmVwb3J0VXJscyIsInNwZWVkIiwic2VvIiwiZnVsbFNlbyIsInhsc3hSZXBvcnRVcmwiLCJ3b3JkcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2VuZXJhdGVTZW9SZXBvcnQiLCJhbGVydCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJvayIsImRhdGEiLCJqc29uIiwic3BlZWRSZXBvcnRVcmwiLCJzZW9SZXBvcnRVcmwiLCJmdWxsU2VvUmVwb3J0VXJsIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlVGFiQ2xpY2siLCJ0YWIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwiaWQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwiaWZyYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJ0aXRsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});