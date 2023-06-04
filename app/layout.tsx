import './globals.css'
import { roboto } from './utils/fonts';

export const metadata = {
  title: 'Bio Food',
  description: 'We make sure You eat Healthy food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
