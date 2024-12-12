import { sql } from 'drizzle-orm'
import { db } from '../db/db'
import { UsersTable } from '../db/schema'

/** @types */
import type { User } from '../interfaces/interfaces'

export async function getAllUsersModel() {
  return await db.select().from(UsersTable).all()
}

export async function getOneUserModel(username: string) {
  return await db
    .select()
    .from(UsersTable)
    .where(sql`${UsersTable.username} = ${username}`)
    .all()
}

export async function postUserModel({
  username,
  email
}: Pick<User, 'username' | 'email'>) {
  const user_id = crypto.randomUUID()
  const user = await db
    .select()
    .from(UsersTable)
    .where(sql`${UsersTable.username} = ${username}`)
  if (user.length !== 0) throw new Error('User is exist.')
  await db.insert(UsersTable).values({
    user_id,
    username,
    email
  })
  return user_id
}

export async function isUser({ username }: Pick<User, 'username'>) {
  const user = await db
    .select()
    .from(UsersTable)
    .where(sql`${UsersTable.username} = ${username}`)
  return user[0].user_id
}
