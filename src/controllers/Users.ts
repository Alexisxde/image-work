import {
  getAllUsersModel,
  getOneUserModel,
  postUserModel
} from '../models/Users'

/** @types */
import type { Request, Response } from 'express'

export async function getAllUsers(_: Request, res: Response): Promise<void> {
  try {
    const users = await getAllUsersModel()
    res.status(200).json(users)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export async function getOneUser(req: Request, res: Response): Promise<void> {
  try {
    const user = await getOneUserModel(req.params.id)
    if (user.length === 0) {
      res.status(400).json({ message: 'User id not found.' })
      return
    }
    res.status(200).json(user)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export async function postUser(req: Request, res: Response): Promise<void> {
  try {
    const id_user = await postUserModel(req.body)
    res.status(200).json({ id: id_user })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
