let marks=[54,23,52,13,16,17,12,43];

let decen= marks.sort((a,b) => b-a);

console.log(decen);

let products=[
    {'name':'mario' ,'price':32},
    {'name':'shaun' ,'price':10},
    {'name':'jim' ,'price':143},
    {'name':'mario' ,'price':42},
    {'name':'alice' ,'price':16}
];

let assen = products.sort((a,b)=> a.price - b.price);

console.log(assen);