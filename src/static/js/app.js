/**
 * 入口函数
 * @author varcat
 * @create 2015-07-28 21:47:46
 */

define(function (require, exports, module) {
    'use strict';

    var calc = require('app/calculator.js');

    alert('加法：' + calc.add(314, 513));

    var shape = require('app/shape.js');

    var circle1_radius = 50;
    console.log('计算圆面积：' + shape.getCircleArea(circle1_radius));

    var rect1_lenght = 25,
        rect1_width = 80;
    console.log('计算正方形面积：' + shape.getRectangleArea(rect1_lenght, rect1_width));




});