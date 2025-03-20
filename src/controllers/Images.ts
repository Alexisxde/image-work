import { getImages } from "../models/Images"

/** @types */
import type { Request, Response } from "express"

export async function getAllImages(req: Request, res: Response) {
	try {
		const images = await getImages(req.params.email)
		res.status(200).json(images)
	} catch (error: any) {
		res.status(500).json({ message: error.message })
	}
}
