function User(name, password){
    this._name = name;
    this._password = password;

    Object.defineProperty(this, 'name', {
        get: function(){
            return this._name.toUpperCase();
        },
        set: function(value){
            
            this._name = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
             return `abc${this._password}abc`
        },
        set: function(value){
            this._password = value;
        }
    })
    
    Object.defineProperty(this, 'kasem', {
        get: function(){
            return this._name.toUpperCase();
        }
    })
}



const chai = new User('Sharif', '12345');

console.log(chai.name);
console.log(chai.password);

console.log(chai.kasem);




// User.prototype.printMe = function(){
//      console.log(`Name : ${this.name}`);
//      console.log(`Password: ${this.password}`);
// }


// chai.printMe();
