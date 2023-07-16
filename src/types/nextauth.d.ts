// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      email:string,
      name:string
      id:string
    }
    accessToken:string
  }
  // eslint-disable-next-line no-unused-vars
  interface User {
    token:string,
      email:string,
      id:string,
      name:string
  }

}
