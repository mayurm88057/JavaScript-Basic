


const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Promise resolved hanlde by promise");

  },5000);
});

async function handlep() {
    console.log("Hello World")

    const val = await p1;
    console.log("namaste javascript");

    
}
handlep();
