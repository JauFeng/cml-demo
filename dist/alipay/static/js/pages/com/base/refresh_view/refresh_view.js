var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([14],{

/***/ "./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/base/refresh_view/refresh_view.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Refresh_view = function Refresh_view() {
  _classCallCheck(this, Refresh_view);

  this.data = {
    imgGif: __webpack_require__("./src/pages/com/base/refresh_view/loading.gif"),
    texts: [0, 1, 2, 3, 4, 5, 6],
    pullingDown: false,
    pullingUp: false,
    loadingText: '上拉加载'
  };
  this.computed = {};
  this.watch = {};
  this.methods = {
    pullDownRefreshHandle: function pullDownRefreshHandle(e) {
      var _this = this;

      this.pullingDown = true;
      setTimeout(function () {
        var length = _this.texts.length;
        for (var i = length; i < length + 5; i++) {
          _this.texts.unshift(i);
        }
        _this.pullingDown = false;
      }, 2000);
    },
    pullUploadHandle: function pullUploadHandle(e) {
      var _this2 = this;

      this.pullingUp = true;
      this.loadingText = '加载中...';
      setTimeout(function () {
        _this2.loadingText = '加载完成';
        var length = _this2.texts.length;
        for (var i = length; i < length + 5; i++) {
          _this2.texts.push(i);
        }
        _this2.loadingText = '上拉加载';
        _this2.pullingUp = false;
      }, 2000);
    }
  };
};

exports.default = new Refresh_view();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/base/refresh_view/refresh_view.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/com/base/refresh_view/loading.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "./src/pages/com/base/refresh_view/refresh_view.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/base/refresh_view/refresh_view.cml");
var __cml__script = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/base/refresh_view/refresh_view.cml");


/***/ })

},["./src/pages/com/base/refresh_view/refresh_view.cml"]);