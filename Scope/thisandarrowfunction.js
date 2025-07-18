//THIS function...

const user={
    name:"Rahul",
    price: 999,
    welcomeMessage: function(){
        console.log(this);
                            //         {
                            //   name: 'Raghav',
                            //   price: 1999,
                            //   welcomeMessage: [Function: welcomeMessage]
                            // }
        console.log(`${this.name}, Welcome to website..! Your course price is ${this.price} `) //'this' function
    }
}
user.welcomeMessage() //Rahul, Welcome to website..! Your course price is 999 
user.name="Raghav"
user.price=1999
user.welcomeMessage() //Raghav, Welcome to website..! Your course price is 1999 

console.log(this); //{} --> Empty object

//But when we run "console.log(this)" in windows/browser we get --> "Window {window: Window, self: Window, document: document, name: '', location: Location, …}"

//This is the basic difference between "node" and "browser" in case of "THIS" function...




//ARROW function..

// function code(){
//     console.log(this);   
// }
// code()


// function code(){
//     let username="Rahul"
//     console.log(this.username);   //undefined
// }
// code()


// const code=function(){
//     let username="Rahul"
//     console.log(this.username); //undefined
// }
// code()


// const code=()=>{ //ARROW function
//     let username="Rahul"
//     console.log(this); //{}
//     console.log(this.username); //undefined
// }
// code()

// const variable () => {} //Basic syntax of arrow function


//A simple arrow function...

//Method-1: Explicit Return
const add=(num1,num2) => {
    return num1+num2
}
console.log(add(99,1)) //100

//Method-2: Implicit Return
const addition=(num1,num2) => num1+num2 //No need to use 'return' keyword if we aren't using {}
console.log(addition(99,1)) //100

const name_arrow=(user)=>({Username:"Hi"});
console.log(name_arrow("Raghav")); //{ Username: 'Hi' }

const myarray=[1,2,3,4,5,6,7,8,9,10] //For array arrow function is very helpful























