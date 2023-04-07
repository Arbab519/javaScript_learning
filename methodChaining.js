
let products=[
    {'name':'mario' ,'price':32 ,'status':true},
    {'name':'shaun' ,'price':10 ,'status':true},
    {'name':'jim' ,'price':143 ,'status':false},
    {'name':'mario' ,'price':42,'status':false},
    {'name':'alice' ,'price':16 ,'status':true}
];

let result= products
 .filter(product=> product.status)
 .map(product=> product.price/2);

 console.log(result);