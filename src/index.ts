import 'dotenv/config'
import './config'
import { API_URL } from './config'
import Upload from './routes/Upload'
import Users from './routes/Users'
import server from './server'

const PORT = process.env.PORT ?? 3000

server.get('/', (_, res) => {
  res.send({
    url: API_URL,
    users: `/api/users`
  })
})

// ! Falta el middleware de la APIKEY.
server.use('/api/users', Users)
server.use('/api', Upload)

server.listen(PORT, () => {
  console.log(`[server]: http://localhost:${PORT}`)
})
