let publish= [
    {'tittle':'why mac and cheese rules', 'likes':10 },
    {'tittle': '10 thigs to make eith marmites', 'likes':10}
];

 
let user ={
    "name" : "jim",
    "age" : 30,
    "email" : 'jim@gamil.com',
    'location':"berlin",
    // user.logIn();
    'blogs':publish,
    logIn(){
        console.log(this.name + ' Login');console.log(user.blogs);
        // user.logIn();
    },
    logOut(){
        console.log(this.name + ' Login');
    },
    logblogs(){
        console.log(this.name + ' Has writtn the Following blogs');
        this.blogs.forEach(blog=>{
             console.log(blog.tittle , blog.likes);   
        });
    },

}

// if we use this. with arrow function then this. refers to window object
// if we use this. with normal function then this. refers to its object



// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.location);
// console.log(user['location']);


// console.log(user.blogs);
// user.logIn();
user.logblogs();

