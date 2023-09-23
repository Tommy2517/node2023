

const path = require('node:path');
// const resolve = path.resolve()
function sayHello(){
    console.log('resolve',path.resolve())
    console.log('cwd',path.join(process.cwd(),'dir1'))
    console.log('dirname',__dirname)
    console.log('filename',__filename)
}
module.exports = {
    sayHello,

}