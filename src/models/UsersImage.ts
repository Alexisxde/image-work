import { db } from '../db/db'
import { UsersImagesTable } from '../db/schema'

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
