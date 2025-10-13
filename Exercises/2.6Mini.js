// Create an array of 5 of your favorite movies.

// Log the first and last movie.

// Use push() to add one, and pop() to remove one.

// Create an object profile with your name, age, and an array of 3 hobbies.

// Log your second hobby.

let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"];

console.log(movies[0]);
console.log(movies[4]);

movies.push("Fight Club");
console.log(movies);
movies.pop("The Matrix");

let profile = {
    name: "Mandy",
    age: 25,
    hobbies: ["reading", "gaming", "netflix"]
}

console.log(profile.hobbies[1]);