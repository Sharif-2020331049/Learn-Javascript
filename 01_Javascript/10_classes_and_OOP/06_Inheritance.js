class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password){
         super(username);
         this.email = email;
         this.password = password;
    }
    addCouser(){
        console.log(`This couse is taken by ${this.username}`);
    }
}

const chai = new Teacher('Chai', 'Chai@gmail.com', '12345');
chai.addCouser();
chai.logMe();

const masalaChai = new Teacher('MasalaChai');
masalaChai.addCouser();