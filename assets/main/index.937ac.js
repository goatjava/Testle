System.register("chunks:///main.js", ['cc'], function () {
  'use strict';

  var cclegacy, _decorator, Node, Component, ProgressBar, director, tween, Sprite, SpriteFrame, Button, resources, instantiate;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      ProgressBar = module.ProgressBar;
      director = module.director;
      tween = module.tween;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Button = module.Button;
      resources = module.resources;
      instantiate = module.instantiate;
    }],
    execute: function () {
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;

        _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _class;

      cclegacy._RF.push({}, "d41d06+4/pEiKKOcNRjLETc", "c2sa6g2wer56g1e5r", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var c2sa6g2wer56g1e5r = (_dec = ccclass('c2sa6g2wer56g1e5r'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(c2sa6g2wer56g1e5r, _Component);

        function c2sa6g2wer56g1e5r() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = c2sa6g2wer56g1e5r.prototype;

        _proto.onLoad = function onLoad() {
          var _this = this;

          this.node.on(Node.EventType.TOUCH_END, function () {
            if (_this.node) {
              if (_this.node.parent) {
                if (_this.node.parent.active) {
                  _this.node.parent.active = false;
                }
              }
            }
          }, this);
        };

        return c2sa6g2wer56g1e5r;
      }(Component)) || _class);

      cclegacy._RF.pop();

      var _dec$1, _dec2, _dec3, _class$1, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "a5808rl2d5GJKZsGpt0wFRs", "fefalkj", undefined);

      var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property;
      var fefalkj = (_dec$1 = ccclass$1('fefalkj'), _dec2 = property$1(ProgressBar), _dec3 = property$1(Node), _dec$1(_class$1 = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fefalkj, _Component);

        function fefalkj() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "lklli", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loohhj", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = fefalkj.prototype;

        _proto.onLoad = function onLoad() {
          this.loohhj.on(Node.EventType.TOUCH_END, function () {
            director.loadScene("iojnhjnz");
          }, this);
          this.loohhj.active = false;
        };

        _proto.start = function start() {
          var _this2 = this;

          tween(this.lklli).to(0.35, {
            progress: 0.3
          }).to(0.55, {
            progress: 0.7
          }).to(0.75, {
            progress: 1
          }).delay(0.55).call(function () {
            _this2.loohhj.active = true;
            _this2.lklli.node.active = false;
          }).start();
        };

        _proto.update = function update(deltaTime) {};

        return fefalkj;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lklli", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loohhj", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class$1);

      cclegacy._RF.pop();

      var _dec$2, _dec2$1, _dec3$1, _class$2, _class2$1, _descriptor$1, _descriptor2$1;

      cclegacy._RF.push({}, "218ebZRJyBNaa/L4LIwzXoi", "x4wa5ge1sg84se", undefined);

      var ccclass$2 = _decorator.ccclass,
          property$2 = _decorator.property;
      var x4wa5ge1sg84se = (_dec$2 = ccclass$2('x4wa5ge1sg84se'), _dec2$1 = property$2([Sprite]), _dec3$1 = property$2([SpriteFrame]), _dec$2(_class$2 = (_class2$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(x4wa5ge1sg84se, _Component);

        function x4wa5ge1sg84se() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "ghs56eg2e6sh6se6", _descriptor$1, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bs5e9gh5er95her9", _descriptor2$1, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = x4wa5ge1sg84se.prototype;

        _proto.gwisejofwk1oegse45g4s = function gwisejofwk1oegse45g4s(hsw45e5fe) {
          var _this2 = this;

          return tween(hsw45e5fe).repeat(30, tween(hsw45e5fe).call(function () {
            var safjwandfw = Math.floor(Math.random() * _this2.bs5e9gh5er95her9.length);
            hsw45e5fe.spriteFrame = _this2.bs5e9gh5er95her9[safjwandfw];
          }).delay(0.01).start()).repeat(10, tween(hsw45e5fe).call(function () {
            var safjwandfw = Math.floor(Math.random() * _this2.bs5e9gh5er95her9.length);
            hsw45e5fe.spriteFrame = _this2.bs5e9gh5er95her9[safjwandfw];
          }).delay(0.1).start());
        };

        _proto.h54ws6e59h45er84er8 = function h54ws6e59h45er84er8(hs56ef5es5g, g1wr54hg5er41h) {
          if (hs56ef5es5g === void 0) {
            hs56ef5es5g = null;
          }

          if (g1wr54hg5er41h === void 0) {
            g1wr54hg5er41h = null;
          }

          this.gwisejofwk1oegse45g4s(this.ghs56eg2e6sh6se6[0]).start();
          this.gwisejofwk1oegse45g4s(this.ghs56eg2e6sh6se6[1]).start();
          this.gwisejofwk1oegse45g4s(this.ghs56eg2e6sh6se6[2]).delay(0.78).call(function () {
            if (hs56ef5es5g && g1wr54hg5er41h) {
              hs56ef5es5g.call(g1wr54hg5er41h);
            }
          }).start();
        };

        return x4wa5ge1sg84se;
      }(Component), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "ghs56eg2e6sh6se6", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "bs5e9gh5er95her9", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2$1)) || _class$2);

      cclegacy._RF.pop();

      var _dec$3, _dec2$2, _dec3$2, _class$3, _class2$2, _descriptor$2, _descriptor2$2;

      cclegacy._RF.push({}, "35c636gzFhJHoOX2Tl025z1", "hdndttwf", undefined);

      var ccclass$3 = _decorator.ccclass,
          property$3 = _decorator.property;
      var hdndttwf = (_dec$3 = ccclass$3('hdndttwf'), _dec2$2 = property$3(Node), _dec3$2 = property$3([x4wa5ge1sg84se]), _dec$3(_class$3 = (_class2$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(hdndttwf, _Component);

        function hdndttwf() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "gwse9ge5rhe9r5e", _descriptor$2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "hber6g52we52gwse", _descriptor2$2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = hdndttwf.prototype;

        _proto.onLoad = function onLoad() {
          this.gwse9ge5rhe9r5e.on("click", this.he4s6r1hj5etd12t6we, this);
        };

        _proto.he4s6r1hj5etd12t6we = function he4s6r1hj5etd12t6we() {
          var _this2 = this;

          this.gwse9ge5rhe9r5e.getComponent(Button).interactable = false;

          for (var saf45agagw = 0; saf45agagw < this.hber6g52we52gwse.length; ++saf45agagw) {
            var hnifmwafa = this.hber6g52we52gwse[saf45agagw];

            if (saf45agagw == this.hber6g52we52gwse.length - 1) {
              hnifmwafa.h54ws6e59h45er84er8(function () {
                _this2.gwse9ge5rhe9r5e.getComponent(Button).interactable = true;
              }, this);
            } else {
              hnifmwafa.h54ws6e59h45er84er8();
            }
          }
        };

        return hdndttwf;
      }(Component), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "gwse9ge5rhe9r5e", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "hber6g52we52gwse", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2$2)) || _class$3);

      cclegacy._RF.pop();

      var _dec$4, _dec2$3, _dec3$3, _dec4, _dec5, _dec6, _dec7, _class$4, _class2$3, _descriptor$3, _descriptor2$3, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "c7b45JP1kROsJqQcZ6gBAnx", "uuunjzn", undefined);

      var ccclass$4 = _decorator.ccclass,
          property$4 = _decorator.property;
      var uuunjzn = (_dec$4 = ccclass$4('uuunjzn'), _dec2$3 = property$4(Node), _dec3$3 = property$4(Node), _dec4 = property$4(Node), _dec5 = property$4(Node), _dec6 = property$4(Node), _dec7 = property$4(Node), _dec$4(_class$4 = (_class2$3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(uuunjzn, _Component);

        function uuunjzn() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "diario", _descriptor$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loja", _descriptor2$3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "posicao", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "outro", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "user", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btn_game", _descriptor6, _assertThisInitialized(_this));

          _this.ghwiedmwqgwshnerk = false;
          _this.wseg51e1ghser5 = false;
          return _this;
        }

        var _proto = uuunjzn.prototype;

        _proto.onLoad = function onLoad() {
          this.btn_game.on(Node.EventType.TOUCH_END, this.gameCallback, this);
          this.diario.on(Node.EventType.TOUCH_END, this.diarioCallback, this);
          this.loja.on(Node.EventType.TOUCH_END, this.lojaCallback, this);
          this.posicao.on(Node.EventType.TOUCH_END, this.posicaoCallback, this);
          this.outro.on(Node.EventType.TOUCH_END, this.outroCallback, this);
          this.user.on(Node.EventType.TOUCH_END, this.userCallback, this);
        };

        _proto.diarioCallback = function diarioCallback() {
          this.loadAndAddChildByName("diarioKuang");
        };

        _proto.lojaCallback = function lojaCallback() {
          this.loadAndAddChildByName("lojaKuang");
        };

        _proto.posicaoCallback = function posicaoCallback() {
          this.loadAndAddChildByName("posicaoKuang");
        };

        _proto.outroCallback = function outroCallback() {
          this.loadAndAddChildByName("outroKuang");
        };

        _proto.userCallback = function userCallback() {
          this.loadAndAddChildByName("userKuang");
        };

        _proto.gameCallback = function gameCallback() {
          if (this.wseg51e1ghser5) {
            return;
          }

          this.wseg51e1ghser5 = true;
          director.loadScene("jkflajfklanl");
        };

        _proto.loadAndAddChildByName = function loadAndAddChildByName(childrenname) {
          var _this2 = this;

          if (this.ghwiedmwqgwshnerk) {
            return;
          }

          var ahfijwajifw = this.node.getChildByName(childrenname);

          if (ahfijwajifw) {
            ahfijwajifw.active = true;
            return;
          }

          this.ghwiedmwqgwshnerk = true;
          resources.load(childrenname, function (err, proNode) {
            if (!err && proNode) {
              var tehniafn = instantiate(proNode);
              tehniafn.parent = _this2.node;
              tehniafn.name = childrenname;
            }

            _this2.ghwiedmwqgwshnerk = false;
          });
        };

        return uuunjzn;
      }(Component), (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "diario", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$3.prototype, "loja", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2$3.prototype, "posicao", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$3.prototype, "outro", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$3.prototype, "user", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$3.prototype, "btn_game", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$3)) || _class$4);

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map