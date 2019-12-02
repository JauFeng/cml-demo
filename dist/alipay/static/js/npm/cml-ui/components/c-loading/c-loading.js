var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([4],{

/***/ "./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-loading/c-loading.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getRect/index.js");

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cLoadingfunc = __webpack_require__("./node_modules/cml-ui/components/c-loading/c-loadingfunc.interface");

var _cLoadingfunc2 = _interopRequireDefault(_cLoadingfunc);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "E:/WebStormProjects/cml-demo/node_modules/cml-ui/components/c-loading/c-loading.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {},
  "interfaces": {
    "CLoadingInterface": {
      "tip": "String",
      "prefixCls": "String",
      "loading": "Boolean"
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "CLoading": ["CLoadingInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");

var CLoading = function () {
  function CLoading() {
    _classCallCheck(this, CLoading);

    this.props = {
      tip: {
        type: String,
        default: 'loading...'
      },
      prefixCls: {
        type: String,
        default: 'cml-loading'
      },
      loading: {
        type: Boolean,
        default: false
      }
    };
    this.data = {
      icon: __webpack_require__("./node_modules/cml-ui/components/c-loading/assets/img/loading.gif"),
      rectStyle: '',
      loadingWrapStyle: '',
      containerStyle: 'position: absolute; visibility: hidden',
      //由于获取位置信息在weex端为异步。so先隐藏
      loadingStyle: 'visibility: hidden'
    };
    this.watch = {
      loading: function loading(v) {
        var _this = this;

        setTimeout(function () {
          _cLoadingfunc2.default.move(_this); // 解决小程序端loading先出现在顶部问题

          _this.loadingStyle = v ? 'visibility: visible' : 'visibility: hidden';
        }, _cLoadingfunc2.default.scheduleTime);
      }
    };
    this.computed = {
      containerClassName: function containerClassName() {
        return this.prefixCls + "-container";
      },
      loadImgClassName: function loadImgClassName() {
        return this.prefixCls + "-default";
      },
      boxClassName: function boxClassName() {
        return !!this.loading ? this.prefixCls + "-box" : '';
      },
      targetClassName: function targetClassName() {
        return this.prefixCls + "-target";
      },
      loadTextClassName: function loadTextClassName() {
        return this.prefixCls + "-text";
      },
      targetMaskClassName: function targetMaskClassName() {
        return this.prefixCls + "-target-mask";
      },
      loadingClassName: function loadingClassName() {
        return "" + this.prefixCls;
      },
      loadingWrapClassName: function loadingWrapClassName() {
        return this.prefixCls + "-wrap";
      }
    };
  }

  _createClass(CLoading, [{
    key: "beforeDestory",
    value: function beforeDestory() {
      _cLoadingfunc2.default.isDestory = true;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      setTimeout(function () {
        (0, _index2.default)('mask', _this2).then(function (res) {
          if (res.width > 0 && res.height > 0) {
            _this2.rectStyle = "width:" + res.width + "cpx; height: " + res.height + "cpx;";
            _this2.loadingWrapStyle = _this2.rectStyle;
            _this2.containerStyle = _this2.rectStyle + "; visibility: visible";
          } else {
            _cLoadingfunc2.default.loadingWrapStyle(function (res) {
              _this2.loadingWrapStyle = res;
            });
            _this2.containerStyle = 'position: absolute; visibility: visible; top: 0; left: 0';
          }

          if (_this2.loading) {
            // 解决小程序端loading先出现在顶部问题
            setTimeout(function () {
              _this2.loadingStyle = 'visibility: visible';
            }, 0);
          }

          _cLoadingfunc2.default.move(_this2);
        });
      }, _cLoadingfunc2.default.scheduleTime);
    }
  }]);

  return CLoading;
}();

exports.default = __CML__WRAPPER__(new CLoading(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-loading/c-loading.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/getRect/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/px2cpx/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "E:/WebStormProjects/cml-demo/node_modules/chameleon-api/src/interfaces/getRect/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "resData": {
      "width": "Number",
      "height": "Number",
      "left": "Number",
      "top": "Number",
      "right": "Number",
      "bottom": "Number"
    },
    "CallBack": {
      "input": ["resData"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UserInfoInterface": {
      "getRect": {
        "input": ["CMLObject", "CallBack"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UserInfoInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getRect",
    value: function getRect(refObj, cb) {
      var query = my.createSelectorQuery();
      query.select("#" + refObj.id).boundingClientRect();
      query.exec(function (res) {
        var rectObj = {
          width: res[0] && (0, _index2.default)(res[0].width) || 0,
          height: res[0] && (0, _index2.default)(res[0].height) || 0,
          left: res[0] && (0, _index2.default)(res[0].left) || 0,
          top: res[0] && (0, _index2.default)(res[0].top) || 0,
          right: res[0] && (0, _index2.default)(res[0].right) || 0,
          bottom: res[0] && (0, _index2.default)(res[0].bottom) || 0
        };
        cb(rectObj);
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/getRect/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRect;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getRect/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRect(ref, context) {
  return new Promise(function (resolve, reject) {
    var refObj = (0, _utils.getRefObj)(ref, context);
    _index2.default.getRect(refObj, function (res) {
      resolve(res);
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-ui/components/c-loading/assets/img/loading.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "./node_modules/cml-ui/components/c-loading/c-loading.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-loading/c-loading.cml");
var __cml__script = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\freecloud\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-loading/c-loading.cml");


/***/ }),

/***/ "./node_modules/cml-ui/components/c-loading/c-loadingfunc.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "E:/WebStormProjects/cml-demo/node_modules/cml-ui/components/c-loading/c-loadingfunc.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "loadStyleCb": {
      "input": ["String"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "CLoadingInterface": {
      "move": {
        "input": ["CMLObject"],
        "output": "Undefined"
      },
      "loadingWrapStyle": {
        "input": ["loadStyleCb"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["CLoadingInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);

    this.scheduleTime = 50;
  }

  _createClass(Method, [{
    key: "move",
    value: function move(context) {}
  }, {
    key: "loadingWrapStyle",
    value: function loadingWrapStyle(cb) {
      cb('position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 998;');
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("./C:/Users/freecloud/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ })

},["./node_modules/cml-ui/components/c-loading/c-loading.cml"]);