import { sql } from 'drizzle-orm'
import { db } from '../db/db'
import { UsersTable } from '../db/schema'

/** @types */
import type { User } from '../interface/interfaces'

export async function getAllUsersModel(): Promise<User[]> {
  return await db.select().from(UsersTable).all()
}

export async function getOneUserModel(userId: string): Promise<User[]> {
  return await db
    .select()
    .from(UsersTable)
    .where(sql`${UsersTable.user_id} = ${userId}`)
    .all()
}

export async function postUserModel({
  username,
  email
}: Pick<User, 'username' | 'email'>): Promise<string> {
  const user_id = crypto.randomUUID()
  const user = await db
    .select()
    .from(UsersTable)
    .where(sql`${UsersTable.username} = ${username}`)
  if (user) throw new Error('User is exist.')
  await db.insert(UsersTable).values({
    user_id,
    username,
    email
  })
  return user_id
}
