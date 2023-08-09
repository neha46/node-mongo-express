// file eyestem- promise api
// const fs=require('fs/promises')
// import fs from 'fs'
// console.log(fs);
//creating directory -path should be  there
//await fs.mkdir('../Desktop/server/ch5/demo')
import  * as fs from  'fs/promises'

try {

    await fs.mkdir('demo')
    console.log("directory created");
    
} catch (error) {
    console.log(error);
    
}








