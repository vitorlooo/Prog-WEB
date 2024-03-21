"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
function appLog() {
    console.log("A API se encontra disponível no url: https://localhost:3000");
}
function hello(req, res) {
    res.send("Hello World");
}
app.get("/api/hello", hello);
app.listen(PORT, appLog);
