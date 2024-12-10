export interface User {
  user_id: string
  username: string
  email: string
  create_at?: string | null
  active: number
}

export interface Image {
  image_id: string
  url: string
  format: string
  created_at?: string | null
}
