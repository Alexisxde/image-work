import { getOneUserModel } from '../models/Users'
import { getUserImages } from '../models/UsersImage'

/** @types */
import type { Request, Response } from 'express'

export async function getAllImages(req: Request, res: Response) {
  try {
    const [user] = await getOneUserModel(req.params.email)
    if (user) {
      const images = await getUserImages(user.user_id)
      res.status(200).json(images)
      return
    }
    res.status(404).json({ message: 'Usuario no encontrado.' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}
