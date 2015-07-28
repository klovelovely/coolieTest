/**
 * 计算图形的面积
 * @author varcat
 */

define(function (require, exports, module) {
    'use strict';

    var calculator = require('./calculator.js');

    exports.getCircleArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };

    exports.getRectangleArea = function (length, width) {
        return calculator.multiply(length, width);
    };

});