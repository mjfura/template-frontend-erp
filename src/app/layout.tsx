import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ThemeProvider } from '../components'
const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'MyGym',
  description: 'Plataforma para la gestión avanzada de gimnasios'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <ThemeProvider>
    <html lang="es">
      <body className={inter.className}>
        <main>
        {children}
        </main>
      </body>
    </html>
    </ThemeProvider>
  )
}
