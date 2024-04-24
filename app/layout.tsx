import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Toaster } from 'react-hot-toast';
import Navbar from './ui/component/navbar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children} <Toaster />
        <Navbar />
      </body>
    </html>
  );
}
