//STREAM
// const fs = require('fs');
// const path = require('path');
//
//
// const readStream = fs.createReadStream(path.join(__dirname, 'folder', 'text3.txt'), { highWaterMark: 10000 });
// const writeStream = fs.createWriteStream(path.join(__dirname, 'folder', 'text2.txt'));
//
// readStream.on('data', (chunk)=>{
//   console.log(chunk);
//   writeStream.write(chunk);
// });
//
// readStream.pipe(writeStream);
//
// readStream.on('error', ()=>{
//   console.log('error happened');
//   readStream.destroy();
//   writeStream.end('ERROR HAPPENED');
// })





//STREAM
// const  readStream = fs.createReadStream(path.resolve('file3.txt'),{highWaterMark:2*1024});//читает файл указанный в пути (options) - указывает какими порциями возвращать прочитанные данные
// const  writeStream = fs.createWriteStream(path.resolve('file2.txt'));//записывает содержимое аргумента в файл указанный в пути
//
// readStream.on('data',(chunk)=>{ // 'data' - метод запускающий процесс чтения указанного файла в аргумент cb функции принимаем в данные в виде чанков
//     console.log(chunk)                                  //обрабатываем данные
// // writeStream.write(chunk);                            // записываем данные в новый файл указанный в пути writeStream
// })

// readStream.pipe(writeStream); //сокращенный аналог предыдущего варианта.


// readStream.on('error',()=>{ //обработка ошибки, ловим ее тут
//     console.log('error happened'); //возвращаем в консоль свое сообщение
//     readStream.destroy();//прекращаем работу стрима
//     writeStream.write('error happened!!');//вписываем данные вместо полученных
// })