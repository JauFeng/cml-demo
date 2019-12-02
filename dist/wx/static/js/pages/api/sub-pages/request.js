var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([51],{

/***/ "./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/request.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: {
    title: '',
    subtitle: '网络请求',
    respones: [],
    cell: {
      title: '网络请求',
      list: [{
        title: '',
        btnText: '点击发起'
      }]
    },
    map: {
      get: '以 cml.get 发起请求',
      post: '以 cml.post 发起请求',
      request: '以 cml.request 发起 put 请求'
    },
    isShowLoading: false
  },
  beforeCreate: function beforeCreate(res) {
    this.method = res.method;
    this.title = ['cml', this.method].join(".");
  },
  created: function created() {
    this.cell.list[0].title = this.map[this.method];
  },

  methods: {
    onBtnClicked: function onBtnClicked(e) {
      var _this = this;

      var method = this.method;
      this.showLoading();
      method === 'get' && _cmlTtApi2.default.get({
        url: 'https://m.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=wise&from=wise_web&sugsid=126120,100806,133335,131887,133676,120188,132909,133045,131247,132440,130762,132378,131518,118879,118866,118847,118828,118800,107318,133158,132782,133351,132553,129655,134433,132250,128968,133472,133838,133847,132551,134463,134320,134656,134213,129643,131423,133781,133009,133191,134049,134722,110085,134525,134153,127969,131296,127417,134151,133573,134351&net=&os=1&sp=null&rm_brand=0&wd=bian%27se%27lon&pwd=bian%27se%27l&lid=7765373915710683512&_=1565093019110'
      }).then(function (res) {
        _this.respones = _this.flatResponses(res);
        _this.hideLoading();
      });
      method === 'post' && _cmlTtApi2.default.post({
        url: 'https://ufosdk.baidu.com',
        data: {
          name: 'cml'
        }
      }).then(function (res) {
        _this.respones = _this.flatResponses(res);
        _this.hideLoading();
      });
      method === 'request' && _cmlTtApi2.default.request({
        url: 'https://ufosdk.baidu.com',
        data: {
          name: 'cml'
        },
        method: 'PUT'
      }).then(function (res) {
        _this.respones = _this.flatResponses(res);
        _this.hideLoading();
      });
    },
    flatResponses: function flatResponses(res) {
      var results = [];
      if (!!res) {
        // Object.keys(res).filter(key => ~['args', 'headers', 'url', 'data'].indexOf(key)).forEach((key) => {
        //   if (typeof res[key] === 'string') {
        //     results.push({
        //       name: key,
        //       value: res[key]
        //     });
        //   }
        //   if (typeof res[key] === 'object') {
        //     results.push({
        //       name: key,
        //       child: Object.entries(res[key]).map((pairs) => pairs.join(":"))
        //     });
        //   }
        // });
        results = JSON.stringify(res, null, 2);
      }
      return results;
    },
    showLoading: function showLoading() {
      this.isShowLoading = true;
    },
    hideLoading: function hideLoading() {
      this.isShowLoading = false;
    }
  }
};


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/request.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/api/sub-pages/request.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/request.cml");
var __cml__script = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/request.cml");


/***/ })

},["./src/pages/api/sub-pages/request.cml"]);