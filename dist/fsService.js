"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writer = exports.reader = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const dbPath = node_path_1.default.join(process.cwd(), 'db.json');
const reader = async () => {
    const json = await promises_1.default.readFile(dbPath, { encoding: 'utf-8' });
    return JSON.parse(json);
};
exports.reader = reader;
const writer = async (users) => {
    await promises_1.default.writeFile(dbPath, JSON.stringify(users));
};
exports.writer = writer;
