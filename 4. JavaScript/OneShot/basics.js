// 1.  word vs Keyword

// anything which doesn't has meaning that is word.
// anything which has meaning in the language is a keyword.



// 2. Variables and constants

// variables are used to store data.
// variables means which can change/vary

// constants are also used to store data.
// constants menas which cannot change it's value.

//  var const let
// var a=12;
// a=13;

// const pi=14;
// b=15;

// var dulha="lav";
// const dulhan="sunita";
// console.log(dulhan + " weds "+dulha);
// dulha="Goku";
// console.log(dulhan + " weds "+dulha);




//3.  Hoisting   => variable and fun are hoisted which means there declaration is moved on the top of code.
//i.e whenever we declare variabels in js it will moved to top of the page so we can declare it after or before of variable initialization.

var a;
// by default value of a is undefined
console.log(a);
console.log(b);
var b;

// undefined => when we have particular value but we dont know the exact value of it.
// not-defined => when existence is not there
// console.log(ab);





// 4.  Types in Js

// 1) Primitive   2) reference

// 1) Primitive   =>  number, string , null, undefined, boolean
// 2) reference   =>  [] , {}, ()

    /*
    aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojata hai, use hum reference value kahte hai, aur jisko copy karne par real copy ho jaye wo value primitive type value hoti hai.
*/




// 5.  Conditionals  => if else ,  else-if
if(-2){
    console.log('true hai');
}
else{
    console.log('false hai');
}


// 6.  loops means repeat => for , while

// for(var i=0; i<11; i++)
// {
//     console.log(i);
// }

var a=1;
while(a<20){
    console.log('while loop');
    a++;
}






// 7.  functions   =>  set of statements
// functions are used for 3 reasons :
/*
 i) when you dont want to run your code now instead you want it to run in future.
 ii) when you want to reuse your code.
 iii) when you want to run your code everytime with different data. 
*/

function hellobolo(){
    console.log('Hello...');
}

// function call
hellobolo();

// function_Name(parameters)
function add(a,b){
    console.log('Add : '+(a+b));
}

// function call function_Name(arguments)
add(2,3);


// arguments  => variables which stores the real value while calling to funct.
// parameters  => Variables in which it stores the value passed by arguments





// 8.  Arrays  = In a variable we can store only single value but when we want to store multiple values then we use array there.

// array = group of values

var a=[12,13,45];
// console.log(arr[0]);





// 9.  push, pop, shift, unshit, splice(start,no.of.num) :

var arr=[1,2,3,4,5,6,7];
// add to last value
arr.push();

// removes last value
arr.pop();

// add in first value
arr.unshift();
// removes first value
arr.shift();

// remove from index no n to no.of.numb
var a2=[1,2,3,4,5];
a2.splice(2,2);
console.log(a2);






// 10.  Objects  => ek se jada bande ki baat ki to hua array, ek bande ke baar mein saari baat ki to hua object.


// object = ek bande ki details ko hold krna, in a key value pair.