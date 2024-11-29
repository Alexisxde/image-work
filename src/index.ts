import 'dotenv/config'
import './config'
import ValidateAPIKEY from './controllers/middlewares/ValidateAPIKEY'
import Users from './routes/Users'
import server from './server'

server.get('/', (_, res) => {
  res.send({
    URL: process.env.API_URL,
    users: `/api/users`,
    tasks: `/api/tasks`
  })
})

server.use('/api/users', ValidateAPIKEY, Users)
// server.use('/api/tasks', ValidateAPIKEY, Tasks)

server.listen(process.env.PORT, () => {
  console.log(`[server]: http://localhost:${process.env.PORT ?? 3000}`)
})
