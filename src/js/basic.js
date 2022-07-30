class Validator {
  constructor(str) {
    this.str = str;
  }

  validateUsername() {
    return /(^[a-z|A-Z]+[-|_|0-9|a-z|A-Z]+[a-z|A-Z])/.test(this.str) && !(/[0-9]{4}/).test(this.str);
  }
}

export default Validator;
