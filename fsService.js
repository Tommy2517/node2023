const path = require("node:path");
const fs = require("fs/promises");

const pathDb = path.resolve('database', 'db.json');

const readDb = async () => {
    const json = await fs.readFile(pathDb, {encoding: 'utf-8'});
    return JSON.parse(json)
}

const writeDB = async (users)=>{
    await fs.writeFile(pathDb,JSON.stringify(users));
}

module.exports = {
    readDb,
    writeDB
}