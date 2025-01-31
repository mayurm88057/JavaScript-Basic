{
 // block is also known as compound statement
     var a =10;
     console.log(a);
}
if(true)true;

// this is example of block scope therfore the let const are block scope
// and var is global scope

{
    var a=10;
    let b =20;
    const c =30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);