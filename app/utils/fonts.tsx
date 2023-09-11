import { Roboto, Poppins } from 'next/font/google';
 
export const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});
 
export const poppins = Poppins({
  weight: ['200', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});