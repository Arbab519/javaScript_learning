let arr=['bob','jim','fin','allen','jos'];
let data= [
    {user:'Mutahir',id:1,moneyspent:50}, 
    {user:'Jawad',id:2,moneyspent:10},
    {user:'Zeeshan',id:3,moneyspent:70},
     {user:'Fahad',id:4,moneyspent:8},
    {user:'Omaid',id:5,moneyspent:20} 
];
//{total budget, min spent, max spent, avg spent, min spent by, max by}
// arr.forEach(array => console.log(array));
let totalspent=0;
let maxspent =0;
let minSpent =data[0].moneyspent;
data.forEach(person =>{    
   let moneyspent=person.moneyspent;
    totalspent += Number(moneyspent); 
    if (moneyspent>maxspent) {
        maxspent=moneyspent;
    }
    if(moneyspent<minSpent){
        minSpent=moneyspent;
    }

    
    
    
});
console.log('Total Spent :',totalspent);
console.log('Max Spent :',maxspent);
console.log('Min Spent :',minSpent);





// callbacks

// let myfun =(val,callbackfunc)=> {
//     let value=val;
//     callbackfunc(value);
// }

// myfun(arr,function(value){
// console.log(value);
// })
