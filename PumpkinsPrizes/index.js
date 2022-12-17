const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
 return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten)
  ? flatten(toFlatten) : toFlatten), []);
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));