import 'dotenv/config'
import './config'
import Users from './routes/Users'
import server from './server'

/** @types */
import type { NextFunction, Request, Response } from 'express'

const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const apiKeyHeader = req.headers.authorization as string
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  if (apiKeyHeader !== `Bearer ${process.env.API_KEY}`) {
    res.status(401).json({ message: 'Please obtain an API key.' })
    return
  }
  next()
}

server.use('/api/users', validateApiKey, Users)
// server.use('/api/tasks', validateApiKey, Tasks)

server.listen(process.env.PORT, () => {
  console.log(`[server]: http://localhost:${process.env.PORT ?? 3000}`)
})
