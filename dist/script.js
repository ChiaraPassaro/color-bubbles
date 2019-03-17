/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@chiarapassaro/color-palettes-range/src/js/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@chiarapassaro/color-palettes-range/src/js/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//************************//
//********Utilities********//
//************************//

function isGreaterThan(num, max){
    if(num > max){
        return true;
    }
}

function isInRange(num, min, max){
    if(num >= min && num <= max){
        return true;
    }
}

function isEven(number) {
    var even = false;

    if (number % 2 === 0){
        even = true;
    }

    return even;
}

function getIntRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function numberToHex(number) {
    var hex = number.toString(16);

    if(hex.length === 1) {
        hex = '0' + hex;
    }
    return hex;
}

function hexToNumber(hex) {
    var num = parseInt(hex, 16);
    return num;
}

function isHex(hex) {
    var isHex = false;
    var num = parseInt(hex,16);

    if(num.toString(16) === hex.toLowerCase()){
        isHex = true;
    }

    return isHex;
}

//************************//
//********Funzioni********//
//************************//

function Hsl(hue, saturation, brightness) {
    if (isNaN(hue)) throw 'Hue in Not a Number';
    if (!isInRange(hue, 0, 360)) throw 'Hue number out of range';
    if (isNaN(saturation)) throw 'Saturation in Not a Number';
    if (!isInRange(saturation, 0, 100)) throw 'Saturation number out of range';
    if (isNaN(brightness)) throw 'Brightness in Not a Number';
    if (!isInRange(brightness, 0, 100)) throw 'Brightness number out of range';

    var _degree = parseFloat(hue.toFixed(2));
    var _saturation = parseFloat(saturation.toFixed(2));
    var _brightness = parseFloat(brightness.toFixed(2));

    this.getHue = function () {
        return _degree;
    };
    this.getSaturation = function () {
        return _saturation;
    };
    this.getBrightness = function () {
        return _brightness;
    };
    this.printHsl = function () {
        return 'hsl(' + _degree + ', ' + _saturation + '%, ' + _brightness + '%)';
    };

    this.setHue = function (newHue) {
        if (isNaN(newHue)) throw 'Hue in Not a Number';
        if (!isInRange(newHue, 0, 360)) throw 'Hue number out of range';
        _degree = parseFloat(newHue.toFixed(2));
    };

    this.setSaturation = function (newSaturation) {
        if (isNaN(newSaturation)) throw 'Saturation in Not a Number';
        if (!isInRange(newSaturation, 0, 100)) throw 'Saturation number out of range';
        _saturation = parseFloat(newSaturation.toFixed(2));
    };

    this.setBrightness = function (newBrightness) {
        if (isNaN(newBrightness)) throw 'Brightness in Not a Number';
        if (!isInRange(newBrightness, 0, 100)) throw 'Brightness number out of range';
        _brightness = parseFloat(newBrightness.toFixed(2));
    };

    return this;
}

function Rgb(red, green, blue) {
    if (isNaN(red)) throw 'Red in Not a Number';
    if (!isInRange(red, 0, 255)) throw 'Red number out of range';
    if (isNaN(green)) throw 'Green in Not a Number';
    if (!isInRange(green, 0, 255)) throw 'Green number out of range';
    if (isNaN(blue)) throw 'Blue in Not a Number';
    if (!isInRange(blue, 0, 255)) throw 'Blue number out of range';

    var _red = red;
    var _green = green;
    var _blue = blue;

    this.getRed = function () {
        return _red;
    };

    this.getGreen = function () {
        return _green;
    };

    this.getBlue = function () {
        return _blue;
    };

    this.printRgb = function () {
        return 'rgb(' + _red + ', ' + _green + ', ' + _blue + ')';
    };

    this.setRed = function (newRed) {
        if (isNaN(newRed)) throw 'Red in Not a Number';
        if (!isInRange(newRed, 0, 255)) throw 'Red number out of range';
        _red = newRed;
    };

    this.setGreen = function (newGreen) {
        if (isNaN(newGreen)) throw 'Green in Not a Number';
        if (!isInRange(newGreen, 0, 255)) throw 'Green number out of range';
        _green = newGreen;
    };

    this.setBlue = function (newBlue) {
        if (isNaN(newBlue)) throw 'Blue in Not a Number';
        if (!isInRange(newBlue, 0, 255)) throw 'Blue number out of range';
        _blue = newBlue;
    };

    return this;
}

function Hex(hex) {
    var _hex = hex.replace('#', '');

    if (!isHex(_hex)) throw 'This is in Not a Hex';

    this.printHex = function () {
        return '#'+ _hex;
    };

    this.setHex = function (newHex) {
        newHex = newHex.replace('#', '');
        if (!isHex(newHex)) throw 'This is in Not a Hex';
        _hex = newHex;
    };

    return this;
}

function SetColorPalette(baseColor) {

    if (baseColor.constructor !== Hsl) throw 'Basecolor is not an object';

    var _totalDegree = 360;
    var _baseColor = baseColor;
    var _triad;
    var _complementar;
    var _analogous = {
        'allArch': null,
        'cold': null,
        'warm': null,
    };
    var _splitComplementar;
    var _square;
    var _tetradic;
    var _mono = {
        'saturation': null,
        'brightness': null,
    };
    var _randomDominant;

    this.getBasecolor = function () {
        return _baseColor;
    };

    this.updateColorPalette = function (newColor) {
        if (newColor.constructor !== Hsl) throw 'Basecolor is not an object';
        _baseColor = newColor;
    };

    this.triad = function () {
        _triad = getColors(240, 2, 60);
        return _triad;
    };

    this.getTriad = function (){
        return _triad;
    };

    this.complementar = function (numColor, stepDegree) {
        if (!isEven(numColor)) throw 'The Colors must be even';
        _complementar =  getColors(140, numColor, stepDegree, 'complementary');
        return _complementar;
    };

    this.getComplementar = function () {
        return _complementar;
    };

    this.analogous = function (typeScheme, numColor, stepDegree) {
        if (!isEven(numColor)) throw 'The Colors must be even';

        switch (typeScheme) {
            case 'allArch':
                _analogous.allArch = getColors(120, numColor, stepDegree, 'analogous');
                return _analogous.allArch;
            case 'cold':
                _analogous.cold= getColors(120, numColor, stepDegree, 'analogousCold');
                return _analogous.cold;
            case 'warm':
                _analogous.warm =  getColors(120, numColor, stepDegree, 'analogousWarm');
                return _analogous.warm;
        }

    };

    this.getAnalogous = function () {
        return _analogous;
    };

    this.splitComplementar = function () {
        _splitComplementar =  getColors(60, 2, 30, 'splitComplementary');
        return _splitComplementar;
    };

    this.getSplitComplementar = function () {
        return _splitComplementar;
    };

    this.square = function () {
        _square =  getColors(270, 3, 90, 'square');
        return _square;
    };

    this.getSquare = function () {
        return _square;
    };

    this.tetradic = function () {
        _tetradic =  getColors(330, 10, 30, 'tetradic');
        return _tetradic;
    };

    this.getTetradic = function () {
        return _tetradic;
    };

    this.mono = function (numColor, stepDegree, typeScheme) {
        if (!isEven(numColor)) throw 'The Colors must be even';

        switch (typeScheme) {
            case 'saturation':
                _mono.saturation =  getColorsMono(numColor, stepDegree, 'monoSaturation');
                return _mono.saturation;
            case 'brightness':
                _mono.brightness =  getColorsMono(numColor, stepDegree, 'monoBrightness');
                return _mono.brightness;
        }

    };

    this.getMono = function () {
        return _mono;
    };

    this.randomDominant = function (numColor, percDominant) {
        _randomDominant = getRandomColors(numColor, percDominant);
        return _randomDominant;
    };

    this.getRandomDominant = function () {
        return _randomDominant;
    };

    function getColors(rangeDegree, numColor, stepDegree, scheme) {
        var _rangeDegree = parseFloat(rangeDegree.toFixed(2));

        var _num = numColor || 2;
        _num = Math.floor(_num);

        var _step = stepDegree || 10;
        _step = parseFloat(_step.toFixed(2));

        if (_step * _num > _rangeDegree) throw 'Out of range >' + _rangeDegree;

        var _scheme = scheme || false;
        var _firstSchemeColor = parseFloat((_baseColor.getHue() + 180).toFixed(2));

        if (_scheme) {
            switch (_scheme) {
                case 'complementary':
                    _firstSchemeColor = parseFloat((_baseColor.getHue() + 180).toFixed(2));
                    break;
                case 'square':
                    _firstSchemeColor = parseFloat((_baseColor.getHue()).toFixed(2));
                    break;
                case 'tetradic':
                    _firstSchemeColor = parseFloat((_baseColor.getHue() - 30).toFixed(2));
                    break;
                case 'analogous':
                    _firstSchemeColor = parseFloat((_baseColor.getHue()).toFixed(2));
                    break;
                case 'analogousCold':
                    _firstSchemeColor = parseFloat((_baseColor.getHue()).toFixed(2));
                    break;
                case 'analogousWarm':
                    _firstSchemeColor = parseFloat((_baseColor.getHue()).toFixed(2));
                    break;
            }
        }

        if (isGreaterThan(_firstSchemeColor, _totalDegree)) {
            _firstSchemeColor = _firstSchemeColor - _totalDegree;
        }

        var _arrayColors = [_firstSchemeColor];

        for (var i = _num / 2; i >= 1; i--) {
            var _newColor = _arrayColors[_arrayColors.length - 1] - _step;
            _newColor = parseFloat(_newColor.toFixed(2));
            _arrayColors.push(_newColor);
        }

        for (var k = 0; k < (_num / 2); k++) {
            _newColor = _arrayColors[0] + _step;
            _newColor = parseFloat(_newColor.toFixed(2));
            _arrayColors.unshift(_newColor);
        }

        _arrayColors.map(function (currentValue, index) {
            if (isGreaterThan(currentValue, _totalDegree)) {
                _arrayColors[index] = parseFloat((currentValue - _totalDegree).toFixed(2));
            }

            if (currentValue < 0) {
                _arrayColors[index] = parseFloat((currentValue + _totalDegree).toFixed(2));
            }

            _arrayColors[index] = new Hsl(_arrayColors[index], _baseColor.getSaturation(), _baseColor.getBrightness());
        });

        if (!scheme || scheme === 'splitComplementary') {
            _arrayColors.splice((_num / 2), 1);
        }

        if (_scheme === 'tetradic') {
            _arrayColors.splice(1, 3);
            _arrayColors.splice(2, 1);
            _arrayColors.splice(3, 3);
        }

        if (_scheme === 'analogous') {
            _arrayColors.reverse();
        }
        if (_scheme === 'analogousCold') {
            _arrayColors.reverse();
            _arrayColors.splice((_num / 2 + 1), _arrayColors.length - 1);
        }
        if (_scheme === 'analogousWarm') {
            _arrayColors.reverse();
            _arrayColors.splice(0, (_num / 2));
        }

        return _arrayColors;
    }

    function getColorsMono(numColor, stepDegree, scheme) {

        var _totalColors = 100;

        var _num = numColor || 4;
        _num = Math.floor(_num);

        var _step = stepDegree || 10;
        _step = parseFloat(_step.toFixed(2));

        if (_step * _num > _totalColors) throw 'Out of range >' + _totalColors;

        var _scheme = scheme || false;
        var _firstSchemeColor;

        switch (_scheme) {
            case 'monoSaturation':
                _firstSchemeColor = parseFloat((_baseColor.getSaturation()).toFixed(2));
                break;
            case 'monoBrightness':
                _firstSchemeColor = parseFloat((_baseColor.getBrightness()).toFixed(2));
                break;
        }

        var _arrayColors = [_firstSchemeColor];

        for (var i = _num / 2; i >= 1; i--) {
            var _newColor = _arrayColors[_arrayColors.length - 1] - _step;
            _newColor = parseFloat(_newColor.toFixed(2));
            _arrayColors.push(_newColor);
        }

        for (var k = 0; k < (_num / 2); k++) {
            _newColor = _arrayColors[0] + _step;
            _newColor = parseFloat(_newColor.toFixed(2));
            _arrayColors.unshift(_newColor);
        }

        _arrayColors.map(function (currentValue, index) {

            if (isGreaterThan(currentValue, _totalColors)) {
                _arrayColors[index] = parseFloat((currentValue - _totalColors).toFixed(2));
            }

            if (currentValue < 0) {
                _arrayColors[index] = parseFloat((currentValue + _totalColors).toFixed(2));
            }

            switch (_scheme) {
                case 'monoSaturation':
                    _arrayColors[index] = new Hsl(_baseColor.getHue(), _arrayColors[index], _baseColor.getBrightness());
                    break;
                case 'monoBrightness':
                    _arrayColors[index] = new Hsl(_baseColor.getHue(), _baseColor.getSaturation(), _arrayColors[index]);
                    break;
            }

        });
        _arrayColors.reverse();
        return _arrayColors;
    }

    function getRandomColors (numColor, percDominant) {
        var _totalDegree = 360;
        var _num = numColor || 10;
        _num = Math.floor(_num);
        var _percDominant = percDominant;
        _percDominant = Math.floor(_percDominant);
        var _step = [];

        while(_step.length < numColor){
            var randomStep = getIntRandomNumber(0, _totalDegree);
            if(!_step.includes(randomStep)){
                _step.push(randomStep);
            }
        }

        var _firstSchemeColor =  Math.floor(_baseColor.getHue());

        var _complementary =  _firstSchemeColor + 180;

        if (_complementary < 0) {
            _complementary = Math.floor((_complementary + _totalDegree));
        }

        if (isGreaterThan(_complementary, _totalDegree)) {
            _complementary  = Math.floor((_complementary - _totalDegree));
        }

        var _arrayColors = [_firstSchemeColor];

        for (var i = 1; i < _num; i++) {
            var _newColor = _firstSchemeColor + _step[i];
            if (_newColor < 0) {
                _newColor = Math.floor((_newColor + _totalDegree));
            }

            if (isGreaterThan(_newColor, _totalDegree)) {
                _newColor  = Math.floor((_newColor - _totalDegree));
            }

            _arrayColors.push(_newColor);
        }

        var _firstSchemeColorInPerc = _firstSchemeColor * 100 / _totalDegree;

        _arrayColors.map(function (currentValue, index) {

            var thisColorInPerc = currentValue * 100 / _totalDegree;
            var _perc = (Math.abs(_firstSchemeColorInPerc - thisColorInPerc) / 100) * _percDominant;

            var _newColorInPerc;

            if(thisColorInPerc > _firstSchemeColorInPerc){
                _newColorInPerc = thisColorInPerc - _perc;
            } else {
                _newColorInPerc = thisColorInPerc + _perc;
            }

            currentValue = _newColorInPerc / 100 * _totalDegree;

            _arrayColors[index] = Math.trunc(currentValue);

            _arrayColors[index] = new Hsl(_arrayColors[index], _baseColor.getSaturation(), _baseColor.getBrightness());

        });

        return _arrayColors;

    }

    return this;
}

function HslConvert(hue, saturation, brightness) {
    if (isNaN(hue)) throw 'Hue in Not a Number';
    if (!isInRange(hue, 0, 360)) throw 'Hue number out of range';
    if (isNaN(saturation)) throw 'Saturation in Not a Number';
    if (!isInRange(saturation, 0, 100)) throw 'Saturation number out of range';
    if (isNaN(brightness)) throw 'Brightness in Not a Number';
    if (!isInRange(brightness, 0, 100)) throw 'Brightness number out of range';

    var _hue = hue;
    var _saturation = saturation/100;
    var _brightness = brightness/100;

    /*
    Frome code by
    Vahid Kazemi https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786
    */

    var c = (1 - Math.abs(2 * _brightness - 1)) * _saturation;
    var hp = _hue / 60.0;
    var x = c * (1 - Math.abs((hp % 2) - 1));
    var rgb1;

    if (isNaN(_hue)) rgb1 = [0, 0, 0];
    else if (hp <= 1) rgb1 = [c, x, 0];
    else if (hp <= 2) rgb1 = [x, c, 0];
    else if (hp <= 3) rgb1 = [0, c, x];
    else if (hp <= 4) rgb1 = [0, x, c];
    else if (hp <= 5) rgb1 = [x, 0, c];
    else if (hp <= 6) rgb1 = [c, 0, x];

    var m = _brightness - c * 0.5;

    var _r =  Math.round(255 * (rgb1[0] + m));
    var _g =   Math.round(255 * (rgb1[1] + m));
    var _b =  Math.round(255 * (rgb1[2] + m));

    /*
        End code from  Vahid Kazemi
    */

    var _rToHex = numberToHex(_r);
    var _gToHex = numberToHex(_g);
    var _bToHex = numberToHex(_b);

    this.getRgb = function () {
        return new Rgb(_r, _g, _b);
    };

    this.getRed = function () {
        return _r;
    };

    this.getGreen = function () {
        return _g;
    };

    this.getBlue = function () {
        return _b;
    };

    this.getHex = function(){
        var thisHex = '#' + _rToHex + _gToHex + _bToHex;
        return new Hex(thisHex);
    };

    return this;

}

function RgbConvert(red, green, blue) {
    if (isNaN(red)) throw 'Red in Not a Number';
    if (!isInRange(red, 0, 255)) throw 'Red number out of range';
    if (isNaN(green)) throw 'Green in Not a Number';
    if (!isInRange(green, 0, 255)) throw 'Green number out of range';
    if (isNaN(blue)) throw 'Blue in Not a Number';
    if (!isInRange(blue, 0, 255)) throw 'Blue number out of range';

    /*
      Frome code by
      Vahid Kazemi https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786
    */

    var _r = red / 255;
    var _g = green / 255;
    var _b = blue / 255;

    var max = Math.max(_r, _g, _b);
    var min = Math.min(_r, _g, _b);
    var _d = max - min;
    var _hue;

    if (_d === 0) _hue = 0;
    else if (max === _r) _hue = (_g - _b) / _d % 6;
    else if (max === _g) _hue = (_b - _r) / _d + 2;
    else if (max === _b) _hue = (_r - _g) / _d + 4;

    var _brightness = (min + max) / 2;
    var _saturation = _d === 0 ? 0 : _d / (1 - Math.abs(2 * _brightness - 1));
    _hue = _hue * 60;

    _brightness = Math.floor(_brightness * 100);
    _saturation = Math.floor(_saturation * 100);

    /*
        End code from  Vahid Kazemi
    */

    var _rToHex = numberToHex(_r);
    var _gToHex = numberToHex(_g);
    var _bToHex = numberToHex(_b);

    this.getHue = function () {
        return _hue;
    };

    this.getSaturation = function () {
        return _saturation;
    };

    this.getBrightness = function () {
        return _brightness;
    };

    this.getHsl = function () {
        return new Hsl( _hue,  _saturation, _brightness);
    };

    this.getHex = function(){
        var hex = '#' + _rToHex + _gToHex + _bToHex;
        return new Hex(hex);
    };

    return this;
}

function HexConvert(hex) {
    var _hex = hex.replace('#', '');

    if (!isHex(_hex)) throw 'This is in Not a Hex';

    var rgb = {
        'r' : '',
        'g' : '',
        'b' : ''
    };

    rgb.r = parseInt(_hex.slice(0, 2), 16);
    rgb.g = parseInt(_hex.slice(2, 4), 16);
    rgb.b = parseInt(_hex.slice(4, 6), 16);

    this.getRgb = function(){
        return new Rgb(rgb.r, rgb.g, rgb.b);
    };

    this.getRed = function () {
        return rgb.r;
    };

    this.getGreen = function () {
        return rgb.g;
    };

    this.getBlue = function () {
        return rgb.b;
    };

    var hslConvert = new RgbConvert(rgb.r, rgb.g, rgb.b);

    this.getHsl = function () {
        return hslConvert.getHsl();
    };

    this.getHue = function () {
        return hslConvert.getHue();
    };

    this.getSaturation = function () {
        return hslConvert.getSaturation();
    };

    this.getBrightness = function () {
        return hslConvert.getBrightness();
    };
}

module.exports = {
    Hsl: Hsl,
    Rgb: Rgb,
    Hex: Hex,
    SetColorPalette: SetColorPalette,
    HslConvert: HslConvert,
    RgbConvert: RgbConvert,
    HexConvert: HexConvert
};


/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//Funzione che genera un numero random
function getRandom(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
} //Funzione che controlla se un numero è pari ritorna booleano


function isEven(number) {
  var even = false;
  var number = number;

  if (number % 2 == 0) {
    even = true;
  }

  return even;
}

var ColorPalettesRange = __webpack_require__(/*! @chiarapassaro/color-palettes-range/src/js */ "./node_modules/@chiarapassaro/color-palettes-range/src/js/index.js");

var baseColor = new ColorPalettesRange.Hsl(getRandom(0, 360), getRandom(0, 70), getRandom(0, 50));
var palettes = new ColorPalettesRange.SetColorPalette(baseColor);
var numberBubbles = getRandom(10, 30);
var randomDominant;
var bubbles = [];
var intervalAnim;
$(document).ready(function () {
  init(interval);
  var $button = $('#change-color');
  $button.click(function () {
    baseColor = new ColorPalettesRange.Hsl(getRandom(0, 360), getRandom(0, 100), getRandom(0, 100));
    palettes.updateColorPalette(baseColor);
    randomDominant = palettes.randomDominant(numberBubbles, 20);
    clearInterval(intervalAnim); //fermo animazione

    bubbles.forEach(function (element) {
      element.children('.bubble').stop();
    });
  });
});

function interval(bubbles, template, $canvas) {
  console.log('interval');
  var max = bubbles.length - 1;
  var rand = getRandom(0, max);
  var $bubbleContainer = bubbles[rand];
  $bubble = $bubbleContainer.children('.bubble');
  $bubble.animate({
    opacity: 0
  }, {
    duration: 3000,
    complete: function complete() {
      console.log("animate remove");
      $bubble.stop();
      $bubbleContainer.remove();
      $bubbleContainer = createBubble(template, randomDominant, rand, $canvas);
      bubbles[rand] = $bubbleContainer;
      $canvas.append($bubbleContainer);
    }
  });
}

function init(callback) {
  var $canvas = $('#canvas');
  var template = $('.template-bubble .bubble__container');

  if (!isEven(numberBubbles)) {
    numberBubbles++;
  }

  randomDominant = palettes.randomDominant(numberBubbles, 20);

  for (var i = 0; i < numberBubbles; i++) {
    var $bubbleContainer = createBubble(template, randomDominant, i, $canvas);
    bubbles.push($bubbleContainer);
    $canvas.append($bubbleContainer);
  } //parte l'animazione solo quando sono tutte pronte


  bubbles.forEach(function (element) {
    element.children('.bubble').dequeue("bubblequeue");
  });
  intervalAnim = setInterval(callback, 3000, bubbles, template, $canvas);
}

function createBubble(template, arraycolors, i, $canvas) {
  var $bubbleContainer = template.clone();
  var $bubble = $bubbleContainer.children('.bubble');
  var widthCanvas = $canvas.width();
  var heightCanvas = $canvas.height();
  var sizeContainer = getRandom(5, 300);
  var sizeBubble = getRandom(2, sizeContainer);
  $bubbleContainer.width(sizeContainer);
  $bubbleContainer.height(sizeContainer); //console.log(arraycolors[i]);

  var thisColor = arraycolors[i].printHsl();
  $bubble.css('background-color', thisColor);
  $bubble.css('box-shadow', '0 0 30px ' + thisColor);
  $bubble.css('z-index', i);
  $bubble.width(sizeBubble);
  $bubble.height(sizeBubble);
  var coordinates = [];

  do {
    var top = getRandom(1, heightCanvas);
    var left = getRandom(1, widthCanvas);
  } while (coordinates.includes([top, left]));

  coordinates.push([top, left]);
  $bubbleContainer.offset({
    top: top,
    left: left
  }); //creo altre bolle dentro il container

  var numberSubBubble = getRandom(2, 20);

  for (var j = 0; j < numberSubBubble; j++) {
    var newBubble = template.children('.bubble').clone();
    var widthContainer = $bubble.width();
    var newBubbleSize = getRandom(10, widthContainer);
    newBubble.width(newBubbleSize);
    newBubble.height(newBubbleSize);
    var blur = getRandom(30, 100);
    newBubble.css('box-shadow', '0 0 ' + blur + 'px ' + thisColor);
    newBubble.css('background-color', thisColor);
    newBubble.css('z-index', -1);
    newBubble.offset({
      top: getRandom(0, sizeContainer + newBubbleSize),
      left: getRandom(0, sizeContainer + newBubbleSize)
    });
    $bubble.append(newBubble);
    $bubble.animate({
      opacity: getRandom(0.3, 0.5),
      'z-index': j
    }, {
      duration: 3000,
      queue: 'bubblequeue',
      complete: function complete() {
        console.log("animate");
        $canvas.append($bubbleContainer);
      }
    });
  }

  return $bubbleContainer;
}

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./script.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chiarapassaro/Sites/colors-bubble/script.js */"./script.js");


/***/ })

/******/ });