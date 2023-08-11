//url module----------------------------------------------------------
// import {URL} from 'url';
// const myURL=new URL("https://www.youtube.com/watch?v=OPrP_ge9xpE&list=PLbGui_ZYuhiiSVvVP_9w57-aU7kx_H9bu&index=14");
// // console.log(myURL.hash);
// // console.log(myURL.host);
// // console.log(myURL.hostname);
// // console.log(myURL.href);
// // console.log(myURL.pathname);
// // console.log(myURL.port);
// // console.log(myURL.protocol);
// // console.log(myURL.search);
// // console.log(myURL.searchParams);
// console.log(myURL.toString());
// console.log(myURL.toJSON());

//event module------------------------------------------------------
// import EventEmitter from 'events';
//EventEmitter is an class- --- for calling on method( for even registered), we need object of that  class--- we will extend EventEmitter class and create  our new class

//creating class
// class MyEmitter  extends EventEmitter{};

//creating onject of Class MyEmitter
// const myEmitter = new MyEmitter();
// //.exmp-1
// //register event  listerner- by myEmitter object we can call the on(), this is called listening the event
// myEmitter.on('event',()=>{
//     console.log("Event is fired");
// })

// //2-event  emit / trigger
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');module.exports=nm;

// const myEmitter2 = new MyEmitter();
// //.exmp-2 , event is called once only
// //register event  listerner- by myEmitter object we can call the on(), this is called listening the event
// myEmitter2.once('event',()=>{
//     console.log("Event is fired");
// })

// //2-event  emit / trigger
// myEmitter2.emit('event');
// myEmitter2.emit('event');
// myEmitter2.emit('event');



//exp-3
// let m=0;
// const myEmitter = new MyEmitter();
// //.exmp-1
// //register event  listerner- by myEmitter object we can call the on(), this is called listening the event
// myEmitter.on('event',()=>{
//     console.log(++m);
// })

// //2-event  emit / trigger
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');

//http module---------------------------------------------------------------------------------
//by using this module , how to craete the server- so that we use create server
//static port-----------

// import http  from 'http';
// const server=http.createServer((req,res)=>{
//     res.setHeader('content-Type','text/plain');
//    res.end('response  from server')
// }).listen(8000,'localhost',()=>{
//     console.log("server running at http://localhost:8000");
// });


//for dynamic port------

// import { error } from 'console';
// import fs from 'fs';

// import http  from 'http';
// console.log(http);
// const PORT=process.env.PORT || 8000;
// const HOST='localhost';
// const server=http.createServer((req,res)=>{

//     //routing-
//     if(req.url==="/")
//     {module.exports=nm;
//         fs.readFile('home.html',(error,data)=>{
//             if(error) throw error
//             res.end(data)
    
//         })

// }
  

    // if(req.url==="/about")
    // {
    //     res.end('<h1>About page</h1>')
    // }


//     else if(req.url==="/about")
//     {
//         fs.readFile('about.html',(error,data)=>{
//             if(error) throw error
//             res.end(data)
    
//         })

// }
  
//     else{
//         res.end('404 page not found')
//     }
    // if(req.url!='/favicon.ico')
    // {
    // console.log(req.url);
    // }
    // console.log(req.method);




    // res.statusCode=300;
    // res.statusMessage='multiple choices';
    // res.setHeader('content-Type','text/plain');
 
    //all above 93 94 95 lines can be written in one line using writehead
    //res.writeHead(200,"good ",{'content-Type':'text/plain'})
//    res.end('response  from auto  server by me ....jhaah')
//res.end('response  from auto  server by me ....jhaah')

// res.writeHead(200,"ok",{'Content-Type':'text/html'})

//    console.log("server started");

// }).listen(PORT,HOST,()=>{
//     console.log("server running at http://localhost:8000");
// })

//properties of http  module(req and res)
//get-fetch data
//post- to create data
//put-to update data
//delete-delete dara
//patch- parisal update

//dns module---------------------------------------------------------------------

// import dns from 'dns';
// for lookup
// dns.lookup('geekyshows.com',(error,address,family)=>{
//     if(error) throw error;
//     console.log("address is",address);
//     console.log("family is",family);
// })

// //for resolve
// dns.resolve('geekyshows.com','NS',(error,records)=>{
//     if(error) throw error;
//     console.log("records  is",records);

// })
// const nm= require('student.js')
// console.log(nm);

  export const nm="neha mishra"
