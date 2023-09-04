import './globals.css'
import { roboto } from './utils/fonts';
// import { Head } from "next/document";
// import Favicon from './components/Favicon';

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
      {/* <Head>
        <meta charSet="utf-8" />
        <Favicon />
      </Head> */}
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
