import express from 'express'
import 'dotenv/config'

import './shared/services/translationsYup'
import { router } from './routes' // Quando se chama a pasta routes, o node entende automáticamente que o arquivo index dentro dela deve ser referênciado  


const server = express()

server.use(express.json()) // Informa o express que estamos trabalhando com json
server.use(router)

export { server }