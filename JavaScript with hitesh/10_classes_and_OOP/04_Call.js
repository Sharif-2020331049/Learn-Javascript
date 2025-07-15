function userName(username){
    this.username = username;
}

function createUser(username, email, password){

    /*
    By calling just like userName(username),  instance reference not pass that means there is not 
    any meaning of `this` keyword in userName() method. In unserName() method , this.username 
    properties treated as a global variable.

    when you call `userName(username)`, the `this` keyword inside `userName` does not refer to
    the newly created `createUser` object but rather to the global object (in non-strict mode)
    or undefined (in strict mode). 
    This happens because userName is called as a regular function, not as a method on the `createUser` instance.
    
    */
    // userName(username);

    // to fix : have to pass this contex reference:first argument this.
    userName.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser('Chai', 'Chai@fb.com', '1234');

console.log(chai);
