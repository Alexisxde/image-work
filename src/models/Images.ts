import { sql } from "drizzle-orm"
import { db } from "../db/db"
import { ImagesTable } from "../db/schema"

import type { Image } from "../interfaces/interfaces"

export async function insertImage({ image_id, url, format, email }: Image) {
	await db.insert(ImagesTable).values({ image_id, url, format, email })
	return { image_id, url, format }
}

export async function getImages(email: string) {
	return await db
		.select()
		.from(ImagesTable)
		.where(sql`${ImagesTable.email} = ${email}`)
}
