"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = (0, express_1.default)();
exports.router = router;
router.get('/', (_, res) => {
    return res.send('Olá, start!');
});
router.get('/cidades', controllers_1.CidadesController.getAllValidation, controllers_1.CidadesController.getAll);
router.post('/cidades', controllers_1.CidadesController.createValidation, controllers_1.CidadesController.create);
router.get('/cidades/:id', controllers_1.CidadesController.getByIdValidation, controllers_1.CidadesController.getById);
router.put('/cidades/:id', controllers_1.CidadesController.updateByIdValidation, controllers_1.CidadesController.updateById);
router.delete('/cidades/:id', controllers_1.CidadesController.deleteByIdValidation, controllers_1.CidadesController.deleteById);
