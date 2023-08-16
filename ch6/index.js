// file system --- call back api\
// import * as fs  from 'fs';-- called ecma script module
// const fs=require('node:fs'); --common js module

import * as fs from 'fs'
//create directory-----------
// fs.mkdir('call',(error)=>{
//     if(error) throw error;
//     console.log("directory created by call back, func");

// });


//create direct iniside  direct,
// fs.mkdir('new//add',{recursive:true},(error)=>{
//     if(error) throw error;
//     console.log("directory created by call back, func");

// });

//read content of directory----
// fs.readdir('new',(error, files)=>
// {if(error) throw error;
//     for(const file of files)
//     console.log(file);}

// )

//remove directory
// fs.rmdir('call',(error)=>
// {if(error) throw error;
//     console.log("removed");}

// )


//create  and write file- BUT ON CHNAG EIT WILL REPLACE THE DATA
// fs.writeFile('new/add/hello.js','CHANGED DATA',(error)=>{
//     if(error) throw error;

// })

// For  adding , we used append
// fs.appendFile('new/add/hello.js','  this is written by me  ',(error)=>{
//     if(error) throw error;

// })

//read file -- gives you buffer
// fs.readFile('new/add/hello.js',(error,data)=>{
//     if(error) throw error;
//     console.log(data);

// })

//soltion for undertstanding the data
// fs.readFile('new/add/hello.js','utf-8',(error,data)=>{
//     if(error) throw error;
//     console.log(data);

    //copy file
    // fs.copyFile('new/add/hello.js','new/copy.js',(error)=>{
    //     if(error) throw error;
    //     console.log("copied");

    // get file info
    //  fs.stat('new/add', (err, stats)=> {
    //     if(err) throw err;
    //     console.log(stats.isDirectory());
    //  })
    
//********************************************************* */
//synchronous api-------
// fs.mkdirSync('sync/synch_force',{recursive:true});
// console.log("created");

//remove 
fs.rmdirSync('sync');
console.log("removed");