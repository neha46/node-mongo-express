//to create http server--------->
// const http=require('http')

// function data(req,res){

//     res.write("<h1>hiiiii</h1>")
//     res.end();
// }
// const server=http.createServer(data)

// server.listen(2000)
// //ch1
// console.log("hello ansiha mishra");



//ch2-//wrapper module--------
// (function(exports,require,module,__dirname,__filename)
// {

// });
// console.log("hi  Neha")
// console.log(__dirname); --/ return directory name
// console.log(__filename);--/return file path 
// console.log(module); --/ return onject



//ch3-- (path module)--------------
// const  path=require('path');
// console.log(path.basename('Desktop/servers/index.js')); 
// console.log(path.basename(__filename,'.js'));//basename  returns last portion of path
// console.log(path.dirname('Desktop/servers/index.js')); //gives  you directory of path
// console.log(path.extname('Desktop/servers/index.js')); //-- gives you extention
// console.log(path.join("search/","oops","course"));// join and create a path
// console.log(path.join("search/","oops","course/",".."));//gives you one level back of direc path


// console.log(path.join(__dirname,"code","node js module"));

//normalize-(---gives you normalize / optimize path)
// console.log(path.normalize("c\\foo\\\\\\\hii\\neha\\..\\"));
// console.log(path.normalize("c:\\//neha//code\\temp\\..\\"));
//console.log(path.win32.normalize("c:\\//neha//code\\temp\\..\\"));

//parse--- return you object
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);

// //is absloute- gives  boolean val , that path is absloute or not
// console.log(path.isAbsolute("c\\foo\\\\\\\hii\\neha\\..\\"));
// console.log(path.isAbsolute('\/bar\\baz'))