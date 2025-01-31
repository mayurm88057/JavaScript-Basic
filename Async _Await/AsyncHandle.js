// old method of hanlding error

const Api_link="https://api.github.com/users/mayurm88057";


async function handlepromise() {
    const data =await fetch(Api_link);
    const jsonvalue =await data.json();
    console.log(jsonvalue);

    
}
handlepromise().catch((err)=> console.log(err));

// new way of handling error


// const api_call="file:JAVASCRIPT/First/Namstejavascipt/Async%20_Await/index.html";


// async function hanldeP() {

//     try{
//         const data = await fetch(Api_call);

//         const jsonval = await data.json();
    
//         console.log(jsonval);


//     }catch (err){
//         console.log(err);

//     }

   
// }
// handlepromise();