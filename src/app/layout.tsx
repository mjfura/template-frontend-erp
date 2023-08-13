import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ThemeProvider } from '../components'
import { NextAuthSessionProvider } from './contexts'
const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'Enterprise Manager',
  description: 'Plataforma para la gestión avanzada de inventariado'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>
      <ThemeProvider>
        <NextAuthSessionProvider>
        {children}
        </NextAuthSessionProvider>
    </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
