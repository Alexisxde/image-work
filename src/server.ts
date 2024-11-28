import cors from 'cors'
import express, { json } from 'express'

const server = express()
server.use(json())
server.use(cors())

export default server
