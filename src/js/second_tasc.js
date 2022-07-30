class PhoneNimber {
  constructor(number) {
    this.number = number;
  }

  numberValidator() {
    return this.number.replace(/\s/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/-/g, '');
  }
}
export default PhoneNimber;
