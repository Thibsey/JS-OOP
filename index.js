// Lesson 1: Introduction
// var userOneEmail = 'Thibs@awesome.com';
// var userOneName = 'Thibs';
// var userOneFriends = ['Yoshi'];

// var userTwoEmail = 'yoshi@mariocorp.com';
// var userTwoName = 'Yoshi';
// var userTwoFriends = ['Thibs', 'Mario'];

// var userThreeEmail = 'mario@mariocorp.com';
// var userThreeName = 'Mario';
// var userThreeFriends = ['Yoshi'];


// function login(email) {
//     console.log(email, 'is now online');
// }

// function logout(email) {
//     console.log(email, 'has logged out');
// }

// function logFriends(friends) {
//     friends.forEach(friend => {
//         console.log(friend);
//     });
// }

// login(userOneEmail);


// Lesson 2 & 3: Object Literals and Object Declaration.
// var userOne = {
//     email: 'thibs@awesome.com',
//     name: 'Thibs',
//     login() {
//         console.log(this.email, 'has logged in');
//     },
//     logout() {
//         console.log(this.email, 'has logged out');
//     },
//     fiends: 'none'
// };
// var userTwo = {
//     email: 'yoshi@mariocorp.com',
//     name: 'Yoshi',
//     login() {
//         console.log(this.email, 'has logged in');
//     },
//     logout() {
//         console.log(this.email, 'has logged out');
//     },
//     fiends: 'none'
// };
// var userThree = {
//     email: 'mario@mariocorp.com',
//     name: 'Mario',
//     login() {
//         console.log(this.email, 'has logged in');
//     },
//     logout() {
//         console.log(this.email, 'has logged out');
//     },
//     fiends: 'none'
// };



// Lesson 4 & 5:
// Classes and Classes Constructors.
// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
        
//     }
    
// }

// var userOne = new User('thibs@awesome.com', 'Thibs');
// var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');
// console.log(userOne);
// console.log(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method


// Lesson 6

// class User {

//     constructor(email, name) {
//         this.email = email;
//         this.name = name;

//     }

//     login(){
//         console.log(this.email, 'just logged in');
//     }

//     logout(){
//         console.log(this.email, 'just logged out');
//     }
// }

// var userOne = new User('thibs@awesome.com', 'Thibs');
// var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

// userOne.login();
// userTwo.logout();


// Lesson 7
// Method Chaining by returning
// "this" in every Method so that
// you can add a new method in a
// Chain of methodes. 

// class User {

//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }

//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }

//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }

//     updateScore () {
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }

// var userOne = new User('thibs@awesome.com', 'Thibs');
// var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

// userOne.login().updateScore().updateScore().logout();


// Lesson 8
// Inheritance of classes
// class User {

//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }

//     login() {
//         console.log(this.email, 'just logged in');
//         return this;
//     }

//     logout() {
//         console.log(this.email, 'just logged out');
//         return this;
//     }

//     updateScore() {
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }

// class Admin extends User {
    
//     deleteUser() {
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }

// var userOne = new User('mario@mariocorp.com', 'Mario');
// var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');
// var admin = new Admin('thibs@awesome.com', 'Thibs');
// userOne.login().updateScore().updateScore().logout();

// var users = [userOne, userTwo, admin];
// admin.deleteUser(userOne);
// console.log(users);


// Lesson 9
// Constructors under the hood


// function User(email, name){
//     this.email = email;
//     this.name = name;
//     this.online = false;
//     this.login = function(){
//         console.log(this.email, 'has logged in');
//     }
// }

// var userOne = new User('mario@mariocorp.com', 'Mario');
// var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');


// console.log(userOne);
// userTwo.login();


// Lesson 10
// Javascript prototypes

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
}

var userOne = new User('mario@mariocorp.com', 'Mario');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');


console.log(userOne);
userTwo.login();


