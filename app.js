const path = require("node:path");
const fs = require("fs");

// fs.writeFile(path.resolve('file1.txt'),'',(err)=>{})
// fs.mkdir(path.resolve('database'),()=>{})

const express = require('express');
const e = require("express");
const app = express();
const PORT = 5001
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log('SERVER STARTS')
})

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        fs.writeFile(path.resolve('database','db.json'),JSON.stringify(users),'utf8',(err)=>{
            if(err){
            console.log(err)
            }
        })
        console.log(users)
    })

// const func = async () => {
//
//     let users = [];
//     await fs.readFile(path.resolve('database', 'db.json'), (err, data) => {
//         users = JSON.parse(data.toString())
//     })
//
//     app.get('/users', (req, res) => {
//         res.json(users)
//     })
//
//     app.get('/users/:id', (req, res) => {
//         let {id} = req.params
//         for (const user of users) {
//             if (+user.id === +id){
//                 res.json(user)
//             }
//         }
//     })
//
//     app.post('/users',async (req,res)=>{
//         try{
//             let user = await req.body;
//             users.push(user);
//             fs.writeFile(path.resolve('database', 'db.json'), JSON.stringify(users), 'utf8', (err) => {
//                 if (err){
//                     res.json('have problem')
//                 }
//             })
//             res.json('OK')
//         }catch (err){
//                 res.json('have problem')
//         }
//     })
//
//     app.delete('/users/:id', async(req, res)=>{
//         let {id} = req.params
//         let newArray = []
//         for (const user of users) {
//             if (+user.id !== +id){
//                 newArray.push(user);
//             }
//         }
//         users = newArray
//         fs.writeFile(path.resolve('database', 'db.json'), JSON.stringify(users), 'utf8', (err) => {
//             if (err){
//                 res.json('have problem')
//             }
//         })
//         res.json('user has deleted')
//     })
//
//     fetch('http://localhost:5001/users/8',{method:'DELETE'})
//         .then(users=>users.json())
//         .then(q => console.log(q))
// }
// func().then()
