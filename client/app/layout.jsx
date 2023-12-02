import '@/app/global.css'
import Navbar from './components/Navbar'

import AuthProvider from './context/AuthProvider'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen max-h-fit w-screen bg-slate-200">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
