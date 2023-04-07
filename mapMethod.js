let marks=[54,23,52,13,16,17,12,43];

let half =marks.map(mark=> mark/2)

console.log(half[2]);

let products=[
    {'name':'mario' ,'price':32},
    {'name':'shaun' ,'price':10},
    {'name':'jim' ,'price':143},
    {'name':'bill' ,'price':42},
    {'name':'alice' ,'price':16}
];


let sale =products.map(product=> {
        if(product.price > 20){
            return {'name':product.name,'price':product.price/2};
        }
});

console.log(sale);


// Other way

let filtered= products.filter(prdct=>prdct.price > 20);

console.log(filtered);
let saleAfterFilter =filtered.map(product=> {return {'name':product.name,'price':product.price/2};});

console.log(saleAfterFilter);
