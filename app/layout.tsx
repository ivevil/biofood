import './globals.css'
import { roboto } from './utils/fonts';
// import { Head } from "next/document";
// import Favicon from './components/Favicon';

export const metadata = {
  title: 'Bio Food - Try out it today',
  description: 'We make sure You eat Healthy food. Every day, every night. So fast at your table.',
  keywords: ['Bio foods', 'Bio organic products', 'Bio food products', 'Bio food company', 'Bio organic shop', 'Bio about food', 'Bio for food', 'Bio products food', 'Bio food shop', 'Bio in food', 'Bio organic market', 'Bio organic store', 'Bio veggies', 'Bio food online shop', 'Bio food market'],
  openGraph: {
    images: '/bio-logo.png',
  },
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
