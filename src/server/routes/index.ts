import Router from 'express'
import { StatusCodes } from 'http-status-codes' // tradução dos códigos de resposta em requisições http

import { CidadesController } from "../controllers";

const router = Router()

router.get('/', (_, res) => {
    return res.send('Olá, start!')
})

router.post('/cidades', CidadesController.create)


export { router }