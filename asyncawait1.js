//  Assignment 3
//  Async and await  
function verifyUser(username) {
        return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
               if(username==='karthik')
               {
                   resolve(username);
               }
               else{
                   reject(new Error('Verification failed'));
               }
            },2000);
        });
}
var arr=['HR','DEVELOPER','ADMIN','MANAGER']
function getRoles(username) 
{
        return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
               if(username=='karthik')
               {
                   resolve(arr);
               }
               else{
                   reject(new Error('Did not get the roles'));
               }
            },2000);
        });
}
function checkUserAccess(arr)
{
return new Promise((resolve,reject)=>
{
const t='HR'
setTimeout(()=>
{
for(var i=0;i<arr.length;i++)
{
    if(arr[i]===t)
    {
      resolve('success');
    }
    else{
        reject(new Error('Authentication failed'));
    }
}
},2000);
});
}
function authenticateUser(username, passwrd)
{
return new Promise((resolve,reject)=>
 {
   setTimeout(()=> 
   {
    if(username==='karthik'&& passwrd==='sarma')
    {
        resolve(username);
    }
    else{
        reject(new Error('Username and Password doesnt match'));
    }
   },2000);
});
}
async function displayoutput()
{
try{
const c1=await authenticateUser('karthik','sarma');
const c2=await verifyUser(c1);
const c3=await getRoles(c2);
const c4=await checkUserAccess(c3);
console.log(c4);
}
catch(err)
{
    console.log('ERROR',err.message);
}
}
displayoutput();