// what is fetch is response body is reable stream
// fetch function give response in response body 
// fetch is  


const Api_URl="https://api.github.com/users/mayurm88057";


async function handlepromise() {
    
    const data = await fetch(Api_URl);
   const jsonvalue = await data.json();

   console.log(jsonvalue); 
}
handlepromise();
