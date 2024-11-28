import { z } from 'zod'

const envVars = z.object({
  DATABASE_AUTH_TOKEN: z.string(),
  DATABASE_URL: z.string().url(),
  PORT: z.string().optional()
})

envVars.parse(process.env)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
