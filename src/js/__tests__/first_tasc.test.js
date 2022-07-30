import Validator from '../first_tasc';

test('Имя с цифрами', () => {
  const result = new Validator('1111');
  expect(result.validateUsername()).toBeFalsy();
});

test('Корректное имя', () => {
  const result = new Validator('ValidName');
  expect(result.validateUsername()).toBeTruthy();
});

test('Корректное имя c дефисом', () => {
  const result = new Validator('Valid-Name');
  expect(result.validateUsername()).toBeTruthy();
});

test('Не корректное имя с нижним подчеркиванием вначале', () => {
  const result = new Validator('_ValidName');
  expect(result.validateUsername()).toBeFalsy();
});

test('Не корректное имя с пятью цифрами', () => {
  const result = new Validator('Valid55555Name');
  expect(result.validateUsername()).toBeFalsy();
});
