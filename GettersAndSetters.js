class Person {
  //Not exists private atributes in JavaScript
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    return (this._name = value);
  }
}

let user = new Person("Lucas");
console.log(user.name); //output Lucas
user.name = "Gomes";
console.log(user.name); //output Gomes
user._name = "JavaScript";
console.log(user.name); //output JavaScript
