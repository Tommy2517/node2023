"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fsService = __importStar(require("./fsService"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/users', async (req, res) => {
    const users = await fsService.reader();
    res.json(users);
});
app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        const users = await fsService.reader();
        const lastId = users[users.length - 1].id;
        const newUser = { name, email, id: lastId + 1 };
        users.push(newUser);
        await fsService.writer(users);
        await res.status(201).json(newUser);
    }
    catch (e) {
        await res.status(400).json(e.message);
    }
});
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await fsService.reader();
        const user = users.find((user) => user.id === Number(id));
        if (!user) {
            throw new Error('User not found');
        }
        await res.json(user);
    }
    catch (e) {
        await res.status(404).json(e.message);
    }
});
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await fsService.reader();
        const index = users.findIndex((user) => user.id === Number(id));
        if (index === -1) {
            throw new Error('User not found');
        }
        users.splice(index, 1);
        await fsService.writer(users);
        res.sendStatus(204);
    }
    catch (e) {
        res.status(404).json(e.message);
    }
});
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        if (!name || name.length < 2) {
            throw new Error('Wrong name');
        }
        if (!email || !email.includes('@')) {
            throw new Error('Wrong email');
        }
        const users = await fsService.reader();
        const user = users.find((user) => user.id === Number(id));
        if (!user) {
            throw new Error('User not found');
        }
        user.email = email;
        user.name = name;
        await fsService.writer(users);
        res.status(201).json(user);
    }
    catch (e) {
        res.status(404).json(e.message);
    }
});
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server has successfully started on PORT ${PORT}`);
});
