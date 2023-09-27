const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    { id: 1, name: 'Іван', email: 'ivan@example.com' },
    { id: 2, name: 'Марія', email: 'maria@example.com' },
    { id: 3, name: 'Петро', email: 'petro@example.com' },
    { id: 4, name: 'Ольга', email: 'olga@example.com' },
    { id: 5, name: 'Андрій', email: 'andriy@example.com' },
    { id: 6, name: 'Наталія', email: 'natalia@example.com' },
    { id: 7, name: 'Максим', email: 'maxim@example.com' },
    { id: 8, name: 'Софія', email: 'sofia@example.com' },
    { id: 9, name: 'Анна', email: 'anna@example.com' },
    { id: 10, name: 'Олександр', email: 'oleksandr@example.com' }
];

app.get('/users', (req, res)=>{
    res.json({
        data: users,
    })
})

app.get('/users/:id', (req, res)=>{
    const { id } = req.params;

    res.json({
        data: users[+id - 1],
    })
})

app.post('/users', (req, res)=>{
    users.push(req.body);

    res.status(201).json({
        message: "User created",
    });
})

app.delete('/users/:id', (req, res)=>{
    const { id } = req.params;

    users.splice(+id - 1, 1);

    res.sendStatus(204);
})

app.put('/users/:id', (req, res)=>{
    const { id } = req.params;

    users[id] = req.body;

    res.json({
        message: 'User updated',
    })
})

const PORT = 5001;

app.listen(PORT, ()=>{
    console.log(`Server has successfully started on PORT ${PORT}`);
})

let qwerty = 'qwerty';
// CRUD c - create, r - read, u - update, d - delete


// HW2 – закінчити з CRUD операціями.
//
//     Створити базу юзерів в db.json, при створенні записувати туди нових юзерів через fs
//
// При створенні зробити валідацію на ім'я і вік, ім'я повинно бути більше 3 символів, вік – не менше нуля
//
// На get, put, delete юзерів перевірити чи такий юзер є.
//     Це домашка від Костянтина з чату лекції2