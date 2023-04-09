var framework = "Angular";
var framework = "React";
console.log(framework); //RETURNS "React" but thats very bad

/*
let language = "JavaScript";
let language = "Ruby";
console.log(language); //RETURNS a error cause the variables is in the same scope
*/

/*
const PI = 3.14;
PI = 3.0;
console.log(PI);//RETURNS a error cause a CONST cannot have a new value
*/

const jsFramework = {
  name: "Angular",
};

jsFramework.name = "Vuejs";

/*
jsFramework = { 
  name: 'Vuejs' //That is not possible cause the variable (const) reference cannot be modified
               //but the properties from object can be modified  
}
*/
