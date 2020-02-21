const fs=require('fs');
fs.readFile('example.html',function(err,data) {
    if(err)
    throw err;
    console.log(data.toString('utf-8'));
})

fs.writeFile('examp1.txt','Doing file operations',function(err) {
    if(err) throw err
    console.log("Writing is done and the existing content will be override."); 
})

fs.appendFile('examp1.txt','Hii this is karthik working in Berkadia.',function (err) {
    if(err) throw err               
    console.log("Content is appended");
})