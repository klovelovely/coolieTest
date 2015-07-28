/**
 * 数字运算
 * @author varcat
 */

define(function (require, exports, module) {
    'use strict';

    exports.add = function (number1, number2) {
        if(isNaN(number1) || isNaN(number1)) {
            return alert('参数不是一个数字');
        }

        return number1 + number2;
    };


    exports.minus = function (number1, number2) {
        if(isNaN(number1) || isNaN(number1)) {
            return alert('参数不是一个数字');
        }
        return number1 - number2;
    };


    exports.multiply = function (number1, number2) {
        if(isNaN(number1) || isNaN(number1)) {
            return alert('参数不是一个数字');
        }
        return number1 * number2;
    };


    exports.divide = function (number1, number2) {
        if(isNaN(number1) || isNaN(number1)) {
            return alert('参数不是一个数字');
        }
        return number1 / number2;
    };

});