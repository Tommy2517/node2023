// ДЗ
// Створіть папку
// В тій папці створіть 5 папок і 5 файлів
// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
// FILE: {fileName}
// FOLDER: {folderName}

const path = require("node:path");
const fs = require("fs");
const folder = path.resolve('folder')


// 1й вариант
// Створіть папку
// fs.mkdir(folder,(err)=>{
//     if (err){
//         console.log(err.message)
//     }
// })



// В тій папці створіть 5 папок і 5 файлів
// for (let i = 0; i < 5; i++) {
    // fs.mkdir(`${folder}/folder${i + 1}`,  (err) => {
    //     if (err) throw new Error(err.message)
    // })

    // fs.writeFile(`${folder}/file.txt${i+1}`, '',(err) => {
    //     if (err) throw new Error(err.message)
    //
    // })

    // fs.rmdir(`${folder}folder${i+1}`,(err)=>{ //тут я видалив випадково створенi папки
    //     if (err) throw new Error(err.message)
    //
    // })
    // fs.unlink(`${folder}/file${i+1}`,(err)=>{ //тут я видалив випадково створенi файли
    //     if (err) throw new Error(err.message)
    //
    // })
// }



// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
// fs.readdir(folder,(err,data)=>{ // считываю содержимое папки - получаю массив строк
//     data.forEach((file)=>{ //перебираю каждый элемент полученного массива
//
//         fs.stat(`${folder}/${file}`,(err,stats)=>{ //добавляю фунцию stat, в аргументе указываю путь к проверяемой папке и добавляю/ название элемента. stat находит файл возвращает объект с статами файла
//             if (err) {
//                 console.log(err.message)
//             }
//
//             if (stats.isFile()){ //проверяю является ли объект файлом с помощью метода .isFile()
//             console.log(`FILE: ${file}`) //показываю результат проверки
//             }
//             else if (stats.isDirectory()){ //проверяю является ли объект папкой с помощью метода .isDirectory()
//                 console.log(`FOLDER: ${file}`)
//             }
//         })
//
//     })
// })



// 2й вариант


// ДЗ
// Створіть папку
// В тій папці створіть 5 папок і 5 файлів
// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
// FILE: {fileName}
// FOLDER: {folderName}


// let inspector = async ()=>{
//
//     await fs.readdir(folder,(err, files)=>{
//
//          files.forEach(file=>{
//
//              fs.stat(path.join(folder, file,),(err, stats)=>{
//                  if (err) console.log(err.message);
//                 if (stats.isFile()){
//                     console.log(`FILE: ${file}`)
//                 }
//                 else if (stats.isDirectory()){
//                     console.log(`FOLDER: ${file}`)
//                 }
//             })
//         })
//     })
// }
// inspector().then()