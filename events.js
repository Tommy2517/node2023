//EVENTS
// const Events = require('node:events');
//
// const eventEmitter = new Events();
//
// eventEmitter.on('click', ()=>{                       //выполняется много раз
//   console.log('Click click click')
// });
//
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
//
//
// eventEmitter.once('sayHello', ()=>{                      //выполняется один раз потом исчезает
//   console.log('Hello hello hello');
// });
//
// console.log(eventEmitter.eventNames())
//
// eventEmitter.emit('sayHello') // sayHello
// eventEmitter.emit('sayHello') // event does not exist
// eventEmitter.emit('sayHello')
// eventEmitter.emit('sayHello')
//
// console.log(eventEmitter.eventNames());


///////////////////////////////////////////////////

// const Events = require('events');
// const eventEmitter = new Events();
//
//
// const evenDeclarationOn = eventEmitter.on('Login', (arg) => {
//     console.log(arg) //метод on может выполняеться неоднократно
// })
// const eventImplement = eventEmitter.emit('Login', 'Hello!!!!')
//
// const evenDeclarationOnce = eventEmitter.once('Login', (arg) => {
//     console.log(arg) //метод once может выполняеться однократно после чего исчезает.
// })
// console.log(eventEmitter.eventNames());// показывает наши имеющиеся эмитеры