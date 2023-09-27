const path = require("node:path");
const express = require('express');

const fsService = require('./fsService')
const userService = require('./user.service')

const app = express();
const PORT = 5001

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/users', async (req, res) => {
    try {
        await userService.userCreate(req, res)
    } catch (err) {
        res.status(400).json(err.message)
    }
})

app.get('/users', async (req, res) => {
    await userService.usersRead(req, res)
})

app.get('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        if (isNaN(id)) {
            throw new Error('Invalid ID')
        }
        await userService.userRead(req, res);
    } catch (e) {
        res.status(404).json(e.message)
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        if (isNaN(id)) {
            throw new Error('Invalid ID')
        }
        await userService.userUpdate(req,res)
    }catch (e) {
        res.status(400).json(e)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params

        if (isNaN(id)) {
            throw new Error('Invalid ID')
        }
            await userService.userDelete(req, res)
    } catch (e) {
        res.status(400).json(e.message)

    }
})

//запрос на удаление
app.get('/users/del/:id', async (req, res) => {
    const {id} = req.params
    const {name} = req.body
    await fetch(`http://localhost:5001/users/${id}`, {method: 'DELETE'})
    res.json(`user with id - ${id} - has been deleted`)
})

app.get('/users/reset/all', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const usersArr = users.map(user => ({ id: user.id, name: user.name, email: user.email }));
        await fsService.writeDB(usersArr);

        res.json({ message: 'Data reset successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log('SERVER STARTS')
})