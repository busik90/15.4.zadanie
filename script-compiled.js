'use strict';

var colors = require('colors');

// Funkcja Zadanie ..
var zadanie = function zadanie(parametr, content) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';

      colors.setTheme({
            custom: color
      });

      var zadanieNr = 'Zadanie ' + parametr + ':';
      var contentToWrite = '';

      for (var log in content) {
            contentToWrite += content[log] + '\n';
      };

      console.log(zadanieNr.blue + '\n' + contentToWrite.custom);
};

// Zadanie pierwsze
var hello = 'Hello',
    world = 'World';

zadanie('pierwsze', [hello + ' ' + world + '!']);

// Zadanie drugie
var multiply = function multiply(a, b) {
      return a * b;
};

zadanie('drugie', ['2 * 5 = ' + multiply(2, 5), '6 * 6 = ' + multiply(6, 6)]);

// Zadanie trzecie
var average = function average() {
      for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
            numbers[_key] = arguments[_key];
      }

      var result = 0;
      numbers.forEach(function (number) {
            result += number;
            return result;
      });
      return result / numbers.length;
};

zadanie('trzecie', [average(1), average(1, 3), average(1, 3, 6, 6)]);

// Zadanie czwarte
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

zadanie('czwarte', [average.apply(undefined, grades)], 'red');

// Zadanie piąte
var oddArray = [1, 4, 'Iwona', false, 'Nowak'],
    firstName = oddArray[2],
    lastName = oddArray[4];


zadanie('pi\u0105te', [firstName + ' ' + lastName]);
