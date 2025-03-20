import { Router } from "express"
import upload from "../middlewares/Multer"
import { insertImage } from "../models/Images"
import cloudinary from "../utils/Cloudinary"

const router = Router()

router.post("/upload", upload.single("image"), async (req, res) => {
	const filePath = req.file?.path
	const email = req.body?.email

	if (!email) {
		res.status(400).json({ success: false, message: "Add email" })
		return
	}

	if (!filePath) {
		res.status(400).json({ success: false, message: "No file provided" })
		return
	}

	cloudinary.uploader.upload(filePath, async (err, result) => {
		if (err || !result) {
			console.error("Error uploading file:", err)
			res.status(500).json({ success: false, message: "Error uploading file" })
			return
		}

		if (!result.public_id || !result.url || !result.format) {
			console.error("Invalid response from Cloudinary:", result)
			res
				.status(500)
				.json({ success: false, message: "Invalid Cloudinary response" })
			return
		}

		const { public_id, url, format } = result

		const image_id = await insertImage({
			image_id: public_id,
			url,
			format,
			email
		})

		res.status(200).json({ success: true, message: "Uploaded!", image_id })
	})
})

export default router
