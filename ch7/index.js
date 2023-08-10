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
import EventEmitter from 'events';
//EventEmitter is an class- --- for calling on method( for even registered), we need object of that  class--- we will extend EventEmitter class and create  our new class

//creating class
class MyEmitter  extends EventEmitter{};

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
// myEmitter.emit('event');

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
let m=0;
const myEmitter = new MyEmitter();
//.exmp-1
//register event  listerner- by myEmitter object we can call the on(), this is called listening the event
myEmitter.on('event',()=>{
    console.log(++m);
})

//2-event  emit / trigger
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');



