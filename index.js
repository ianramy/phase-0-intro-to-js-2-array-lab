// Write your solution here!
// Define the initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the array destructively
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function to prepend a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function to remove the last cat from the array destructively
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to remove the first cat from the array destructively
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat to the end of the array non-destructively
function appendCat(name) {
    return [...cats, name];
}

// Function to prepend a cat to the beginning of the array non-destructively
function prependCat(name) {
    return [name, ...cats];
}

// Function to remove the last cat from the array non-destructively
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

// Function to remove the first cat from the array non-destructively
function removeFirstCat() {
    return cats.slice(1);
}
