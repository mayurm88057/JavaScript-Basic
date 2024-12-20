// write a code for incremnet And Decrement with constructor function 


function Counter(){
     var count = 0 ;
     this.incrementCounter = function (){
        count ++;
        console.log(count);
     }

    this.decrementcounter =function(){
        count --;
        console.log(count);

    }
}
var counter1= new Counter();
counter1.incrementCounter();
counter1.decrementcounter();
counter1.incrementCounter();
counter1.decrementcounter();




//======================================================================================================================================================
//example for the counter function 

// function counter() {

//     var count = 0;
//    return function incrementcounter() {
//         count++;
//         console.log(count);
// }
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();

// var counter2 =counter();
// counter2();




// ----------------------------------------------------------------------------------------------------------------------------------------------------



// function counter (){
//     var count =0;
//     return function incrementcounter(){


//     count ++;
//     console.log(count);

// }
// }

// var counter1 =counter()
// counter1();
// counter1()

// var counter2 = counter();
// counter2();


// __________________________________________________________________________________________________________________________________
// this is example of closure 

// function outer(){
//     var a =100;
//     function inner(){
//         console.log(a);
// }
// return inner;
// }
// outer()();

// -------------------------------------------------------------------------------------------------------------------------------------------------

//  function outtest() {
//     var c = 20;

//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);

//         }
//         let a = 10;
//         return inner();
//     }
//     return outer;
// }
// let a = 100;
// var close = outtest()("hello mayur");
// close()()