import 'dotenv/config'
import './config'
import Users from './routes/Users.route'
import server from './server'

server.get('/', (_, res) => {
  res.send({
    URL: process.env.API_URL,
    users: `/api/users`,
    tasks: `/api/tasks`
  })
})

server.use('/api/users', Users)
// server.use('/api/tasks', Tasks)

server.listen(process.env.PORT, () => {
  console.log(`[server]: http://localhost:${process.env.PORT ?? 3000}`)
})
