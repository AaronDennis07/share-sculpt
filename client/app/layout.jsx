import '@/app/global.css'
import Navbar from './components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen max-h-fit w-screen bg-slate-200">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
