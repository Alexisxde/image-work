import express from 'express'
import { getAllUsers, getOneUser, postUser } from '../controllers/Users'
import ValidateAPIKEY from '../middlewares/ValidateAPIKEY'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', ValidateAPIKEY, postUser)

export default router
