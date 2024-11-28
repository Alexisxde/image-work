import express from 'express'
import { getAllUsers, getOneUser, postUser } from '../controllers/Users'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', postUser)

export default router
