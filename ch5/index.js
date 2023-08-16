// file eyestem- promise api

//creating directory -path should be  there\

//  1---import  * as fs from  'fs/promises'

// try {

//     await fs.mkdir('demo')
//     console.log("directory created");
    
// } catch (error) {
//     console.log(error);
    
// }



//  2---   try {

//     await fs.mkdir('ch5/neha',{recursive:true})
//     console.log("directory created");
    
// } catch (error) {
//     console.log(error);
    
// }


// how to read content from directory
import  * as fs from  'fs/promises';
// try {
//     const files=await fs.readdir('ch5/test')
//     for(const file of files )
//     console.log(file);
    
   
// } catch (error) {
//    console.log(error);
   
// }


//how to remove directory
// try {
//     await fs.rmdir('ch5/test/demo')
//     console.log("directory removed");
// } catch (error) {
//     console.log(error);   
// }

//how to read and write file
// try {
//     await fs.writeFile('ch5/neha/read.html'," <h1>hi anisha </h1>")
//     console.log("file created and add  some  content"); 
// } catch (error) {  
//     console.log(error);


    
// }try {-- will replace data
//     await fs.writeFile('ch5/neha/read.html'," <h1>hi anisha </h1>")
//     console.log("file created and add  some  content");
// } catch (error) {
//     console.log(error);
// }


//  IT return buffer , but we want actual  data
//try {
//      const   data =await fs.readFile('ch5/neha/read.html')
//      console.log(data);
//  } catch (error) {
//     console.log(error);   
//  }


// try {-- for actual data we will have to encode by using utf-8
//          const   data =await fs.readFile('ch5/neha/read.html','utf-8')
//          console.log(data);
//      } catch (error) {
//         console.log(error);
//      }

//if we write some data on same file , it will replace, so solve this by append
// try {
//     await fs.appendFile('ch5/neha/read.html','\n by anisha')
//     console.log("data appended");
// } catch (error) {
//     console.log(error);
// }

//copy file-- first create them copy file at given path
// try {
//     await fs.copyFile('ch5/neha/read.html','ch5/neha/anisha.txt')
//     console.log("file copied");
// } catch (error) {
//     console.log(error);
// }


//get the file info
try {
     const stat=await fs.stat('ch5/neha')
    console.log(stat.isFile());
    console.log(stat.isDirectory());
    console.log(stat);//give you all info about file
} catch (error) {
    console.log(error);
}

