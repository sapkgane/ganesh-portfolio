exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 6600:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3702))

/***/ }),

/***/ 3702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const navItems = [
    [
        "/",
        "Home"
    ],
    [
        "/professional",
        "Work"
    ],
    [
        "/projects",
        "Projects"
    ],
    [
        "/about",
        "About"
    ],
    [
        "/contact",
        "Contact"
    ]
];
function Navbar() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-opacity-90 shadow-lg backdrop-blur-md",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/logo.png",
                            alt: "Logo",
                            width: 36,
                            height: 36
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-white font-semibold text-lg tracking-wide font-serif",
                            children: "Ganesh Sapkota"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex gap-6 text-sm sm:text-base",
                    children: navItems.map(([path, label])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: path,
                            className: `${pathname === path ? "text-yellow-400 underline" : "text-gray-300 hover:text-yellow-300"} transition font-medium`,
                            children: label
                        }, path))
                })
            ]
        })
    });
}


/***/ }),

/***/ 8996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(398);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(7814);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/ganeshsapkota/Desktop/Portfolio/full_nextjs_portfolio_project/src/components/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx
// app/layout.tsx




const metadata = {
    title: "Ganesh Sapkota Portfolio",
    description: "QA Architect \xb7 Automation Specialist \xb7 Entrepreneur"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} bg-black text-white`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "pt-24 px-6 sm:px-12",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;