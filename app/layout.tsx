import './globals.css'
import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

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
