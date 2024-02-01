import {DarkModeProvider} from '@/context/DarkModeContext'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from '@/components/Head'

// export const metadata = {
//   title: 'Favour Ogbonda - Portfolio',
//   description: 'This is the portfolio site of Favour Ogbonda',
// }

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          <NavBar/>
          {children}
          <Footer/>
        </DarkModeProvider>
      </body>
    </html>
  )
}
