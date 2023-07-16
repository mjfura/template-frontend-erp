import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      type: 'credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        correo: { type: 'text' },
        password: { type: 'password' },
        idEmpresa: { type: 'text' }
      },
      async authorize (credentials, req) {
        try {
          if (credentials == null) { throw new Error('No se proporcionó las credenciales') }
          const { correo, password, idEmpresa } = credentials
          // const data = await login({ email: correo, password })
          console.log('data auth', correo, password, idEmpresa)
          return {
            email: 'micorreo@gmail.com',
            token: 'sds',
            name: 'jhon doe',
            id: '1'
          }
        } catch (err) {
          console.log('error ', err)
          const error = err as Error

          throw new Error(error.message || 'No se pudo autenticar')
        }
      }
    })
  ],

  callbacks: {
    async jwt ({ user, token, account }) {
      console.log('token', token)
      if (account && user) {
        return {
          ...token,
          email: user.email,
          name: user.name,
          id: user.id,
          accessToken: user.token
        }
      }
      return token
    },
    async session ({ session, token }) {
      const payload = token as {
                email: string
                accessToken: string
                id: string
                name: string
            }
      session.accessToken = payload.accessToken
      session.user = {
        ...session.user,
        email: payload.email,
        name: payload.name,
        id: payload.id
      }
      console.log('session', session)
      return session
    }
  }
}
const handler = NextAuth({
  ...authOptions
})

export { handler as GET, handler as POST }
