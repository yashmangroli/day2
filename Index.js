const fs=require('fs');

// fs.writeFile('read.txt', 'good',(err)=>{
//     console.log('success..');
// })

// fs.appendFile('read.txt', ' morning' ,(err)=>{
//     console.log('success');
// });

// fs.readFile('read.txt' , (err,data)=>{
// console.log(data.toString());
// });

fs.unlink('read.txt',(err)=>{
    console.log('success..');
})

