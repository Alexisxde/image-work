import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const UsersTable = sqliteTable('users', {
  user_id: text('user_id').primaryKey().notNull(),
  username: text('username').notNull().unique(),
  email: text('email'),
  created_at: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  active: integer('active').notNull().default(1)
})

export const TasksTable = sqliteTable('tasks', {
  task_id: text('task_id').primaryKey().notNull(),
  description: text('description').notNull(),
  user_id: text('user_id').references(() => UsersTable.user_id),
  color: text('color'),
  create_task: text('create_task').default(sql`(CURRENT_TIMESTAMP)`)
})
