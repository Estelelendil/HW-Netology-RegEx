import PhoneNimber from '../second_tasc';

test(' Удаление пробелов из номера', () => {
  const result = '89033555588';
  const userPhone = new PhoneNimber('8 903 355 5588');
  expect(result).toBe(userPhone.numberValidator());
});

test(' Удаление скобок из номера', () => {
  const result = '89033555588';
  const userPhone = new PhoneNimber('8(903)355 5588');
  expect(result).toBe(userPhone.numberValidator());
});

test(' Удаление дефисов из номера', () => {
  const result = '89033555588';
  const userPhone = new PhoneNimber('8-903-355-55-88');
  expect(result).toBe(userPhone.numberValidator());
});
