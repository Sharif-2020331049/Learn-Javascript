// const myName = 'Sharif    ';
// console.log(myName.trueLength());  // can I add new method for all instance

let myHeros = ['Thor', 'Spiderman'];

let heroPower = {
    thor: 'Hammer',
    spiderman : 'Sling',
    getSpiderman: function(){
        console.log(`Spidy Power is: ${this.spiderman}`);
    }
};

// console.log(heroPower.getSpiderman);

/*
But I want to add a method name is Sharif() which is accessible by all instance . Every instance 
goes throuh object. If I create this method in object prototype this is accessible by
every instance.
 */

// heroPower.prototype.Sharif   --> this is accessible by only heroPower instance

Object.prototype.Sharif = function(){
    console.log(`Sharif is present in all object!`);
}

// heroPower.Sharif();
// myHeros.Sharif();

Array.prototype.heySharif = function(){
    console.log(`Hey Sharif, What's up?`);
}

// myHeros.heySharif();
// heroPower.heySharif();   --> error because heroPower has not this heySharif() method



// Inheritance: 

const user = {
    name: 'Chai',
    email : 'Chai@gmai.com'
}

const Teacher = {
    makeVedio : true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,

    // old syntex for inheritance by prototyping
    __proto__: TeachingSupport
}

// another syntex:
  Teacher.__proto__ = user;

  // Modern Syntex : mostly used
  // Object.setPrototypeOf(child, parent)
  Object.setPrototypeOf(TeachingSupport, Teacher)


  // trueLength implement:
  let channelName = 'ChaiAurCode      '

  String.prototype.trueLength = function(){
    console.log(this);
    console.log(this.trim().length);
  }

  channelName.trueLength();