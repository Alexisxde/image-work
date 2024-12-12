import { eq, sql } from 'drizzle-orm'
import { db } from '../db/db'
import { ImagesTable, UsersImagesTable, UsersTable } from '../db/schema'

export async function insertUserImage({
  user_id,
  image_id
}: {
  user_id: string
  image_id: string
}) {
  const user_image_id = crypto.randomUUID()
  await db.insert(UsersImagesTable).values({
    user_image_id,
    user_id,
    image_id
  })
  return user_image_id
}

export async function getUserImages(user_id: string) {
  return await db
    .select({
      user_id: UsersTable.user_id,
      image_id: ImagesTable.image_id,
      url: ImagesTable.url,
      format: ImagesTable.format,
      created_at: ImagesTable.created_at
    })
    .from(UsersImagesTable)
    .where(sql`${UsersImagesTable.user_id} = ${user_id}`)
    .innerJoin(UsersTable, eq(UsersImagesTable.user_id, UsersTable.user_id))
    .innerJoin(ImagesTable, eq(UsersImagesTable.image_id, ImagesTable.image_id))
    .all()
}
