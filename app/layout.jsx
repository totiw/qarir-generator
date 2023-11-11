import { Inter } from 'next/font/google'
import './globals.css'
import 'aos/dist/aos.css' // You can also use <link> for styles

// Components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BubbleChat from '@/components/BubbleChat'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QarirGenerator',
  description: 'CreateSuccess Shortcuts & Land Your Dream Job!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BubbleChat />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
