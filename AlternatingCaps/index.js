/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    let arr = str.split('');
                           
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr[i] = arr[i].toUpperCase();
      }
    }
  return arr.join('');
}

console.log(altCaps("I'm so happy it's Monday"));

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
