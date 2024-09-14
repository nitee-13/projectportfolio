import Sidebar from '../components/Sidebar'
import 'antd/dist/reset.css'  // Import Ant Design styles
import '../styles/globals.css'  // Your global styles

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your portfolio description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: '20px' }}>{children}</main>
        </div>
      </body>
    </html>
  )
}