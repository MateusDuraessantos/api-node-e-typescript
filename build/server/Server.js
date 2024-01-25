"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes"); // Quando se chama a pasta routes, o node entende automáticamente que o arquivo index dentro dela deve ser referênciado  
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json()); // Informa o express que estamos trabalhando com json
server.use(routes_1.router);
