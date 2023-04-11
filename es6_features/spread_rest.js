// Rest Parameters

const double =(...nums)=>{
// console.log(nums);
 return nums.map(num => num*2);
}

let pass=  double(23,2,3,32,1,21,23,122,32,31,23,123,12312,312,31);
// console.log(pass);

// Spread Syntax (arrays)

let person = ['shaun','luigi','andrew'];
let members= ['Jim','steve', ...person];
let team=[person];
console.log(person);
console.log(members);
console.log(team);


