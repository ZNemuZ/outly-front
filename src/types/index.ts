export type Post = {
  id: number
  title: string
  content: string
  nice_count: string
  created_at: Date
}
export type CsrfToken = {
  csrf_token: string
}
export type LoginCredential = {
  email: string
  password: string
}
export type SignupCredential = {
  email: string
  userName: string
  password: string
}
