import './globals.css'
import { roboto } from './utils/fonts';
// import { Head } from "next/document";
// import Favicon from './components/Favicon';

export const metadata = {
  title: 'Bio Food - Try out it today',
  description: 'We make sure You eat Healthy food. Every day, every night. So fast at your table.',
  keywords: ['Bio food online shop', 'Bio food', 'Biological food', 'Bio diets', 'Food bio', 'Bio vegetables', 'Bio organic food', 'Bio produce', 'Bio food products', 'Bio food company', 'Bio food delivery', 'Bio farm organic eggs', 'Bio products food', 'Bio organic protein', 'Bio healthy food', 'Bio veggie company'],
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
