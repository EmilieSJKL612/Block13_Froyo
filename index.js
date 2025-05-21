
//goals: 1. prompt user to input flovaors  2. convert input into array  3. count each flavor's appearance  4. output to browser console


//goal 1 ->observe previous WS's bottom part (provided; not to modify part)
const input = prompt("Enter a list of froyo flavors seperated by commas:");


//goal 2 ->use the .map() learned in block 14
//learning note: 1. https://www.w3schools.com/jsref/jsref_split.asp  2. https://www.w3schools.com/jsref/jsref_trim_string.asp  3. https://www.w3schools.com/jsref/jsref_tolowercase.asp 
const flavors = input.split(",").map(flavor => flavor.trim().toLowerCase());


//goal3
const flavorCounts = {};
for (let i = 0; i < flavors.length; i ++){
    let flavor = flavors[i];

    if (flavorCounts[flavor]){
        flavorCounts[flavor] += 1;
    }
    else {
        flavorCounts[flavor] = 1;
    }
}
  

//goal4
console.log("Froyo Flavor Counts:");
for (const flavor in flavorCounts) {
  const count = flavorCounts[flavor];
  console.log(`${flavor}: ${count}`);
}

  

