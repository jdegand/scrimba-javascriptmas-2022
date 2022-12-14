function countVowelConsonant(str) {
    const regex = /[aeiou]/gi;
    
    const array = str.split('');
    let total = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i].match(regex)){
            total += 1;
        } else {
            total += 2;
        }
    }
    return total;
}
  
  
  
  /**
  * Test Suite 
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonant(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });