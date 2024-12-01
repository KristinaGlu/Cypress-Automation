// var - old way
// scope - functional/local + global
// var let const


var a = 10
function test() {
var b = 30;
console.log(b)
}
console.log(a)
//console.log(b)


/*var g;
console.log(g) // underfined*/

//issue with var

/*var flag = 'Cypress'
var t1 = 4
if(t1>3)
{
    var flag='Selenium'
}   
console.log(flag); //Selenium*/

let browsr = 'chrome'
browser ='edge'
browser ='firefox'
//Reinitialization and re decralation possible

console.log(browser) 

//let - Improvment of var
// scope-block scoped

let xyz = 'Hey';
let time=4
if(time>3)
{
  let msg='how are you';
  console.log(msg)
}
//console.log(msg) //Underfined
console.log(xyz) //Hey

//var len = 4;
//var len = 5;

//console.log(len)

//let n = 6 //let can be reinitialized but cannot be re declared
//n = 8
//console.log(n)


//cont - once the value is declared, cannot be declared again

const days = 7;
//days = 10;

console.log(100*days) // Error - assignment to constant variable
