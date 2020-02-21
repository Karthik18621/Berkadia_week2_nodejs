//Assignment 2
//Using callbacks 
function verifyUser(username,callback)
{
    setTimeout(()=>
    {
        if(username==='karthik')
        {
            callback('karthik');
        }
    });
}
var arr=['HR','MANAGER','DEVELOPER','CLIENT']
function getRoles(user,callback)
 {    
     setTimeout(()=>{
     if(user==='karthik')
     {
           callback(arr)
     }
     },1000);
 }
function checkUserAccess(arr,callback)
{
    //console.log(arr);
    const t='DEVELOPER';
    setTimeout(()=>
    {
        for(var i=0;i<arr.length;i++)
        {
            if(t===arr[i])
            {
                callback('success');
            }
        }
    },1000);
}
function authenticateUser(username,password,callback)
{
    setTimeout(()=>{
        if(username==='karthik'&&password==='sarma')
        {
            callback('karthik');
        }
    },1000);
}
authenticateUser('karthik','sarma',function(res1)
{
    verifyUser(res1,function(res2)
    {
        getRoles(res2,function(res3) 
        {
            checkUserAccess(res3,function(res4)
            {
            console.log(res4);
             });
        });
    });
});
