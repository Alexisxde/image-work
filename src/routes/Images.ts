import express from 'express'
import { getAllImages } from '../controllers/Images'

const router = express.Router()

router.get('/:email', getAllImages)

export default router
