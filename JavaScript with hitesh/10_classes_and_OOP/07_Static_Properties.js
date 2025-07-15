class User{
    constructor(username)
    {
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createID(){
        return `1234`;
    }

}

const chai = new User('Sharif');
// chai.createID();   //-> error: static properties only accessible by class name.

class Teacher extends User{
    constructor(username,email){
          super(username);
          this.email = email;
    }

}

const iPhone = new Teacher('iphone', 'i@phone.com');
iPhone.logMe();
console.log(Teacher.createID());