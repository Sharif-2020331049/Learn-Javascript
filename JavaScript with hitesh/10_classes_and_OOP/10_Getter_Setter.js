class User{
    constructor(email, password) {
        this.email = email;  // this line called  setter method if they define
        // set email(email) will be called

        this.password = password;
    };

    // each property of an object by default has a getter or setter method by 
    // naming (get property_name() -> method) or (set property_name() -> method)
    // If there is getter then it always have to be setter.
    
    get password(){
        return `${this._password}sharif`
    }
    
    set password(password){
        this._password = password;
    }

    get email(){
        return `Email : ${this._email}`;
    }
    set email(email){
        this._email = email;
    }

};

const sharif = new User('sharif49@gmail.com', '12345');


 // this line will be called getter if it define for password property
console.log(sharif.password);

console.log(sharif.email);