const User ={
    _name: 'Sahidur Rahman',
    _email: 'sharif433743@gmail.com',

    get name(){
        return this._name.toUpperCase();
    },
    set name(value){
        this._name = value
    }
}

console.log(User.name);
