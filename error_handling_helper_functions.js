console.log("TODO: Create a function that validates user input") 

function validInput(input) {
  if (input === "" || input === null || input === undefined) {
    return "Input mustnt be empty.";
  }

  if (typeof input !== "string") {
    return "Input must be a string.";
  }

  if (input.trim().length < 3) {
    return "Input must be at least 3 letter long.";
  }

  return "Valid input";
}

console.log(validInput(""));          
console.log(validInput(69));         
console.log(validInput("a"));        
console.log(validInput("Phoenix"));   
console.log("______________________________________________________________________________")

console.log("TODO: Create a function that demonstrates multiple error types")

function demonstrateErrors() {
  try {
    console.log(undeclaredVariable);

    let notAfunction = 5;
    notAfunction();

    eval("let x === 10");
  } 
  catch (error) {
    console.log("ERROR ");
    console.log("ERROR name=", error.name);
    console.log("ERROR note=", error.note);
  } finally {
    console.log("Error verification complete!");
  }
}
demonstrateErrors();
console.log("______________________________________________________________________________")

console.log("TODO: Create a collection of helper functions for string manipulation")

function capitalizeFirst(str) {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (!str || typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  if (!str || typeof str !== "string") return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function countVowels(str) {
  if (!str || typeof str !== "string") return 0;
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function toTitleCase(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .toLowerCase()
    .split(" ")
    .map(word => capitalizeFirst(word))
    .join(" ");
}
console.log(capitalizeFirst("Taaraa"));    
console.log(reverseString("Taaraa"));       
console.log(isPalindrome("kayak"));      
console.log(countVowels("Olive"));     
console.log(toTitleCase("hello Yaqoob"));   
console.log("______________________________________________________________________________")

console.log("TODO: Create helper functions for array operations")

function sum(arr) {
  if (!Array.isArray(arr)) return "Input must be an array.";
  return arr.reduce((sum, num) => sum + num, 0);
}

function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid array.";
  return sum(arr) / arr.length;
}

function max(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid array.";
  return Math.max(...arr);
}

function min(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid array.";
  return Math.min(...arr);
}

function removeCopies(arr) {
  if (!Array.isArray(arr)) return "Input must be an array.";
  return [...new Set(arr)];
}

function containsElement(arr, element) {
  if (!Array.isArray(arr)) return false;
  return arr.includes(element);
}

const numbers = [69,27,31,169,82,67];

console.log("Sum:", sum(numbers));               
console.log("Average:", average(numbers));        
console.log("Max:", max(numbers));               
console.log("Min:", min(numbers));              
console.log("No copies:", removeCopies(numbers)); 
console.log("Contains 8:", containsElement(numbers, 8));  
console.log("______________________________________________________________________________")












