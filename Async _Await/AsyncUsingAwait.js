//Async and Await combo is used to handle promise ?
// Await can only ne used inseide the Aysnc function only 


const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved handle promise");
    },5000);
});

    1
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved handle promise");
    },10000);
   

});
async function  handlepromise() {
    console.log("Hello world")

    const val = await p1;
    console.log("Namasate JavaScript");
    console.log(val);
  

const val2 = await p2 ;
console.log("Namaste Javascript 2");
console.log(val2);
}

handlepromise();
 
// /*function getdata(){
//     p.then(res => console.log(res));
//     console.log("Namaste javascript");
// }

// getdata();
// 