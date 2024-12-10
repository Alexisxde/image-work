import { drizzle } from 'drizzle-orm/libsql/node'
import { DATABASE_AUTH_TOKEN, DATABASE_URL } from '../config'

export const db = drizzle({
  connection: {
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN
  }
})
