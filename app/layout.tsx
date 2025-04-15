import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
import Navbar from '@/src/components/Navabar'
import Footer from "@/src/components/Footer";
 
export const metadata: Metadata = {
  title: 'IranJobs',
  description: 'Platform for job seeking',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className='min-w-[360px] '>
       <Navbar/> 
        {children}
        <Footer/>
        </body>
    </html>
  )
}