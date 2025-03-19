import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string().default('3000'),
  DATABASE_AUTH_TOKEN: z.string(),
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.string().default('development'),
  API_URL: z.string().default('http://localhost:3000'),
  API_KEY: z.string(),
  CLOUDINARY_CLOUD_NAME: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string()
})

const { error, success, data } = envSchema.safeParse(process.env)

if (!success) {
  console.error('❌ Error en las variables de entorno: ', error.format())
  process.exit(1)
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export const {
  PORT,
  DATABASE_AUTH_TOKEN,
  DATABASE_URL,
  API_KEY,
  API_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  NODE_ENV
} = data
