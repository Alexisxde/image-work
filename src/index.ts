import server from './server'

/** @config */
import 'dotenv/config'
import './config'
import { API_URL } from './config'

/** @middlewares */
import validateApiKey from './middlewares/ValidateAPIKEY'

/** @routes */
import Images from './routes/Images'
import Upload from './routes/Upload'
import Users from './routes/Users'

const PORT = process.env.PORT ?? '3000'

server.get('/', (_, res) => {
  res.status(200).json({
    url: API_URL,
    users: '/api/users',
    images: '/api/images',
    upload: '/api/upload'
  })
})

server.use('/api/users', validateApiKey, Users)
server.use('/api/images', validateApiKey, Images)
server.use('/api', validateApiKey, Upload)

server.listen(PORT, () => {
  console.log(`[server]: http://localhost:${PORT}`)
})
