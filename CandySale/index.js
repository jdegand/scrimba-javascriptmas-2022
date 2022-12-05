import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    return data.filter(el => el.type === 'sweet').map(el => {
        return {
        item: el.item, 
        price: el.price
        }
    })
};

console.log(getSaleItems(products))

/*
    let keys = Object.keys(data);
    return keys.reduce((next, key) => {
        if (data[key].type === 'sweet') {
            return { ...next, [key]: data[key] };
        } else {
            return next;
        }
      }, {});
*/
