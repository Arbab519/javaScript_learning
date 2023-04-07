class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.score=0;
    }
    login(){
        console.log(this.name + ' Login');

    }
    logout(){
        console.log('User Logout');

    }
    incScore(){
       console.log(++this.score);
    }
} 




class Admin extends User{
 constructor(name,email, title){
    super(name ,email);
    this.title = title;
 }
    deleteUser(user){
        users= users.filter(u=>user.name !== u.name)
    }
}




const userOne = new User('Jim','Jim@gmail.com');
const admin = new Admin('shark','shark@gmail.com','Admin class');

console.log(userOne.logout());


let logout = admin.logout();
console.log(admin.logout());



