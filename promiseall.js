// Sample program to illustrate the Promise.all()

const i=new Promise((resolve)=>
{
    setTimeout(()=>
    {
        console.log("Asynchronous function 1");
        resolve(1);
    },1000);
});

const j=new Promise((resolve)=>
{
    setTimeout(()=>
    {
        console.log("Asynchronous function 2");
        resolve(2);
    },1000);
});

Promise.all([i,j])
.then(result=>console.log(result))
.catch(err=>console.log('Error',err.message));

// Promise.race([i,j])
// .then(result=>console.log(result))
// .catch(err=>console.log('Error',err.message));