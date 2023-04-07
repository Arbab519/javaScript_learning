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

    
}


const userOne = new User('Shaun' , 'shaun@gamil.com');
const userTwo = new User('Shaun' , 'shaun@gamil.com');
const userThree = new Admin('Shaun' , 'shaun@gamil.com');
userOne.login().logout().incScore();
