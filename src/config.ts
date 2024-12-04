import { z } from 'zod'

const envVars = z.object({
  PORT: z.string().default('3000'),
  DATABASE_AUTH_TOKEN: z.string(),
  DATABASE_URL: z.string().url(),
  API_URL: z.string().default('http://localhost:3000'),
  API_KEY: z.string()
})

envVars.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}

export const { PORT, DATABASE_AUTH_TOKEN, DATABASE_URL, API_KEY, API_URL } =
  process.env
