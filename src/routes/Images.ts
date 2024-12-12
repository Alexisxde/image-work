import express from 'express'
import { getAllImages } from '../controllers/Images'

const router = express.Router()

router.get('/:username', getAllImages)

export default router
