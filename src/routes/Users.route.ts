import express from 'express'
import {
  getAllUsers,
  getOneUser,
  postUser
} from '../controllers/Users.controller'
import ValidateAPIKEY from '../middlewares/ValidateAPIKEY.middleware'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', ValidateAPIKEY, postUser)

export default router
