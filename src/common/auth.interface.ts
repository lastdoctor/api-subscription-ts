export interface User {
  email: string,
  password: string,
  displayName: string,
  photoURL: string,
  emailVerified?: boolean,
  disabled?: boolean
}
