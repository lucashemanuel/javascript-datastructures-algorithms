interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name);
}

const lucas = { name: "Lucas", age: 21 };
const mary = { name: "Mary", age: 22, phone: "+990012345-6789" };

printName(lucas);
printName(mary);
