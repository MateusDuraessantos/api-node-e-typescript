import Router from 'express'
import { StatusCodes } from 'http-status-codes' // tradução dos códigos de resposta em requisições http

const router = Router()

router.get('/', (req, res) => {
    return res.send('Olá, start!')
})

router.post('/teste', (req, res) => {
    console.log(req.cookies)
    
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body) // res.json() faz o express tratar os headers na resposta para o frontend poder trabalhar melhor
})


export { router }