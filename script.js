const colors = require('colors');

// Funkcja Zadanie ..
const zadanie = (parametr, content, color = `white`) => {
      colors.setTheme({
            custom: color
      });

      const zadanieNr = `Zadanie ${parametr}:`;
      let contentToWrite = ``;

      for (let log in content) { contentToWrite += content[log] + `\n`; };

      console.log(`${zadanieNr.blue}\n${contentToWrite.custom}`);
}

// Zadanie pierwsze
const hello = 'Hello',
      world = 'World';

zadanie(`pierwsze`, [`${hello} ${world}!`], `yellow`);

// Zadanie drugie
const multiply = (a, b) => a * b;

zadanie(`drugie`, [`2 * 5 = ${multiply(2, 5)}`,
                   `6 * 6 = ${multiply(6, 6)}`], `green`);

// Zadanie trzecie
const average = (...numbers) => {
      let result = 0;
      numbers.forEach(number => {
            result += number;
            return result;
            }
      )
      return result / numbers.length;
}

zadanie(`trzecie`, [average(1), average(1, 3), average(1, 3, 6, 6)]);

// Zadanie czwarte
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

zadanie(`czwarte`, [average(...grades)], `red`);

// Zadanie piąte
const oddArray = [1, 4, 'Iwona', false, 'Nowak'],
      [, , firstName, , lastName] = oddArray;

zadanie(`piąte`, [`${firstName} ${lastName}`], `magenta`);