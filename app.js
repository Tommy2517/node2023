// modules
const {sayHello} = require('./dir1/dir2/dir3/file');
const path = require("node:path");
const fs = require("fs");
sayHello()


// console.log(__dirname)
// console.log(__filename)
// console.log(process.cwd())


// const pathJoined = path.join(__dirname,'dir1','dir2','dir3','file.js')
// console.log(pathJoined)
//
// const resolve = path.resolve()
// console.log(resolve);

const dir2 = path.join(__dirname, 'dir1', 'dir2')
fs.readdir(dir2,(err,arr)=>{
    console.log(arr)
})



