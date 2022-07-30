import Validator from './js/first_tasc';
import PhoneNimber from './js/second_tasc';

const user = new Validator();
console.log(user.validateUsername());

const userPhone = new PhoneNimber('8 903 355 5588');
console.log(userPhone.numberValidator());
