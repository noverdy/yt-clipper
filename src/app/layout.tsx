import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'YT Clipper',
  description: 'Download YouTube Clips'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
