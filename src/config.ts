import { z } from 'zod'

const envVars = z.object({
  DATABASE_AUTH_TOKEN: z.string(),
  DATABASE_URL: z.string().url(),
  PORT: z.string().optional(),
  API_KEY: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  SECRET_SEGURITY: z.string(),
  NODE_ENV: z.string(),
  API_URL: z.string().optional()
})

envVars.parse(process.env)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
