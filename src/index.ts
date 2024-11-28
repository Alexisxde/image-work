import 'dotenv/config'
import './config'
import server from './server'

/** @types */
import type { Request, Response } from 'express'

server.get('/', async (_: Request, res: Response) => {
  res.json({ id: '1' })
})

server.listen(process.env.PORT, () => {
  console.log(`[server]: http://localhost:${process.env.PORT ?? 3000}`)
})
