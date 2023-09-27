const fsService = require("./fsService");
const {writeDB} = require("./fsService");


const usersRead = async (req, res) => {
    try {
        const users = await fsService.readDb()
        if (!users) {
            throw new Error('user not found')
        }

        res.json(users)
    } catch (e) {
        res.status(404).json(e.message)
    }
}


const userRead = async (req, res) => {
    try {
        let {id} = req.params
        const users = await fsService.readDb();
        const user = users.find(user => user.id === +id)
        if (!user) {
            throw new Error('user not found')
        }
        res.json(user)
    } catch (e) {
        res.status(404).json(e.message)
    }
}

const userCreate = async (req, res) => {
    try {
        const {name, email} = req.body;

        if (!email || !email.includes('@')) {
            throw new Error('Wrong email')
        }
        if (!name || name.length < 2) {
            throw new Error('Wrong email')
        }

        const users = await fsService.readDb()
        const lastId = users[users.length - 1].id

        const newUser = {name, email, id: lastId + 1}

        await users.push(newUser);
        await writeDB(users)

        res.json('user created')
    } catch (e) {
        res.status(400).json(e.message)
    }
}

const userUpdate = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email} = req.body;

        if (!email || !email.includes('@')) {
            throw new Error('Wrong email')
        }
        if (!name || name.length < 2) {
            throw new Error('Wrong email')
        }

        const users = await fsService.readDb();
        const user = users.find(user => user.id === Number(id));

        user.name = name;
        user.email = email;

        await fsService.writeDB(users);

        res.status(200).json(`User updated : name - ${name} email - ${email}`)
    } catch (e) {
        res.status(400).json(e.message)
    }
}

const userDelete = async (req, res) => {
    try {
        let {id} = req.params
        const users = await fsService.readDb()
        const index = users.findIndex((user) => user.id === Number(id))
        users.splice(index, 1)
        if (index === -1) {
            throw new Error('User not found');
        }
        await fsService.writeDB(users)

        res.json('user has deleted')
    } catch (e) {
        res.status(404).json(e.message)
    }
}

module.exports = {
    userCreate,
    userRead,
    usersRead,
    userUpdate,
    userDelete,

}