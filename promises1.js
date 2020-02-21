//Assignment 1
//Using promises
function verifyUser(username)
{
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            var name='karthik';
            if(username===name)
            {
                resolve(name);
            }
            else
            {
                reject(new Error('verification failed'));
            }
        },1000)
    })
}
// verifyUser("karthik","sarma").then(function(response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

var arr=['HR','ADMIN','MANAGER','DEVELOPER']
function getRoles(username) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            
            if(username)
            {
              resolve(arr);
            }
            else
            {
                reject(new Error('Didnt match the role'));
            }
        },1000)
    });
}
// getRoles('karthik').then(function(response) {
//     console.log(response);
// })
// .catch(function(err) {
//     console.log(err);
// });

function checkUserAccess(arr1)
{
    return new Promise(function(resolve,reject)
    {
        const t='HR'
        setTimeout(function()
        {
           for(var i=0;i<arr.length; i++){
             if(arr1[i]==t)
             {
                 resolve('success');
             }
             else
             {
                 reject(new Error('Authentication failed'));
             }
           }
        },1000);
    })
}
// checkUserAccess(arr)
// .then(function(response)
// {
//     console.log(response);
// })
// .catch(function(err)
// {
//     console.log(err)
// });

function authenticateUser(username,password)
{
  return new Promise(function(resolve,reject)
 {
   if(username==='karthik'&& password==='sarma')
   {
       resolve('karthik');
   }
   else
   {
       reject(new Error('Username and passwords doesnt match'));
   }
 })
}
authenticateUser('karthik','sarma')
.then(verifyUser)
.then(getRoles)
.then(checkUserAccess)
.then(function(response) {
   console.log(response);
})
.catch(function(err) {
    console.log('ERROR',err.message);
});
