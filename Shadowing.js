
const c =300; 
functionx()
{
    var a =10;
    let b =20;
    const c =30;
   
    console.log(a);
   
}
x();
console.log(c);
//shadowing is proccess when the var is delcred it will take the gobal socpe
// let proccess it take the local scope scope
// const is proccess where it acquire the local scope  


//ilegal shodowing

let a =20;
{
    var a =20;
}