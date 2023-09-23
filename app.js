// main.js app.js server.js index.js //

// Modules
// const { sayHello } = require('./folder/sayHello');
// sayHello();

// Global variables
// console.log('FROM APP.JS')
// console.log('dirname', __dirname);
// console.log('filename', __filename);
// console.log('process cwd', process.cwd());

// Path
// const path = require('node:path');
// Users/l4pukhh/WebstormProjects/march-2023 - Unix systems
// D:\\l4pukhh\\WebstormProjects\\march-2023 - Windows

// const joinedPath = path.join(__dirname, 'folder', 'sayHello.js') //строит путь
// const normalizedPath = path.normalize('////test///test2///test23///////test45'); //убирает лишние слэши
// const resolvedPath = path.resolve('folder', 'sayHello.js'); //результат аналогичен process.cwd

// OS
// const os = require('os');
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.release());

// FS
const fs = require('node:fs');
const path = require('node:path');


const filePath = path.join(__dirname, 'folder2')
// fs.writeFile(filePath, 'Hello from Okten !!!', (err) => { // добавляет файл по пути(1й аргумент) и заполняет данными (2й аргумент) имеет error в колбэке (3й аргумент)
//   if (err) throw new Error(err.message);
// })
// fs.appendFile(filePath, 'hello again\n', (err)=>{ // добавляет в файл по пути (первый агумент) новые данные (второй аргумент) имеет error в колбэке (3й аргумент)
//   if (err) throw new Error(err.message);
// })
// fs.truncate(filePath, (err)=>{
//   if (err) throw new Error(err.message); //удаляет содержимое файла по пути (первый аргумент) имеет error в колбэке (2й аргумент)
// })
// fs.unlink(filePath, (err)=>{ //удаляет папку по пути (первый аргумент) имеет error в колбэке (2й аргумент)
//   if (err) throw new Error(err.message);
// });
// fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => { // читает файл (первый аргумент) указывает формат возвращаемых данных (второй аргумент) имеет error и data в колбэке (2й или 3й аргумент)
//   if (err) throw new Error(err.message);
//   console.log(data);
// })
// fs.readdir(filePath, (err, files)=>{ //читает содержимое папки по пути (первый аргумент)  имеет error и data в колбэке (2й аргумент) data возвращает массив с строками (названия файлов)
//   console.log(files);
// })
// fs.mkdir(filePath, (err)=>{}) // создает папку по пути (первый аргумент)  имеет error в колбэке (2й аргумент)
// fs.rmdir(filePath, (err)=>{})// удаляет папку по пути (первый аргумент)  имеет error в колбэке (2й аргумент)



