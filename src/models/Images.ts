import { db } from '../db/db'
import { ImagesTable } from '../db/schema'

import type { Image } from '../interfaces/interfaces'

export async function insertImage({ image_id, url, format }: Image) {
  await db.insert(ImagesTable).values({
    image_id,
    url,
    format
  })
  return image_id
}
