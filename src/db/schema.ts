import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const UsersTable = sqliteTable('users', {
  user_id: text('user_id').primaryKey().notNull(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  created_at: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  active: integer('active').notNull().default(1)
})

export const ImagesTable = sqliteTable('images', {
  image_id: text('image_id').primaryKey().notNull(),
  url: text('url').notNull().unique(),
  format: text('format').notNull(),
  created_at: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
})

export const UsersImagesTable = sqliteTable('users_images', {
  user_image_id: text('user_image_id').primaryKey().notNull(),
  user_id: text('user_id').references(() => UsersTable.user_id),
  image_id: text('image_id').references(() => ImagesTable.image_id)
})
