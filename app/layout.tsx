import '@/app/ui/global.css';
import {iranyekan} from '@/app/fonts'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${iranyekan.className}`}>{children}</body>
    </html>
  );
}
