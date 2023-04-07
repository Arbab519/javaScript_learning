let marks=[54,23,52,13,16,17,12,43];


let lessthen20= marks.filter(mark=>mark > 20); 

console.log(lessthen20);


let users=[
    {'name':'mario' ,'status':true},
    {'name':'shaun' ,'status':false},
    {'name':'jim' ,'status':true},
    {'name':'bill' ,'status':false}
];

let trueUsers = users.filter(user=> user.status);
let falseUsers = users.filter(user=> user.status== false);

console.log(trueUsers);
console.log(falseUsers);