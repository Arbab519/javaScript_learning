// let marks=[54,23,52,13,16,17,12,43];

// let result = marks.reduce((acc, curr)=>{
//     if (curr >25) {
//         acc += curr;
//     }
//     return acc;
// },0);

// console.log(result);


// example 2

let products=[
    {'name':'mario' ,'price':32},
    {'name':'shaun' ,'price':10},
    {'name':'jim' ,'price':143},
    {'name':'mario' ,'price':42},
    {'name':'alice' ,'price':16}
];

let filterResult = products.reduce((acc, curr)=>{
   if(curr.name == 'mario'){
      acc += curr.price;
    }
   return {'name':curr.name, 'price':curr.price};
},0);

console.log(filterResult.price);