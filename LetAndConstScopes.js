let movie = "Lord of the Rings"; //GLOBAL SCOPE
//var movie = "Batman"; RETURN a error cause movie already declared

function starWarsFan() {
  const movie = "Star Wars";
  return movie;
}

function marvelFan() {
  movie = "The Avengers";
  return movie;
}

function rockstarFan() {
  const isFan = true;
  let phrase = "GTA";

  console.log("before if: ", phrase);

  if (isFan) {
    let phrase = "intial text";
    phrase = "i got a gun";
    console.log("inside if: ", phrase);
  }

  phrase = "gimme my money!!!";
  console.log("after if: ", phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
rockstarFan();
