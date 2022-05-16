// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново
import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }
assert.equal(capitalize('hello'), 'Hello');

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }
assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');
