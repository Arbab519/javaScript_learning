class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.score=0;
    }
    login(){
        console.log(this.name + ' Login');
        return this;
    }
    logout(){
        console.log('User Logout');
        return this;
    }
    incScore(){
       console.log(++this.score);
        return this;
    }
} 
class Admin extends User{
    deleteUser(user){
        users= users.filter(u=>user.name !== u.name)
    }
    
}


const userOne = new User('Shaun' , 'shaun@gamil.com');
const userTwo = new User('andrew' , 'andrew@gamil.com');
const userThree = new User('Jim' , 'Jim@gamil.com');
const admin = new Admin();
// userOne.login().logout().incScore();
let users = [userOne,userTwo,userThree];
console.log(users);

admin.deleteUser(userOne)
console.log(users);

