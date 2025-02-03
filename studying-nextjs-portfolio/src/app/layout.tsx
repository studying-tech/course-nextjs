import type { Metadata } from 'next'
import '@/globals.css'
import { SITE_TITLE, SITE_DESCRIPTION, BASE_URL } from '@/consts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  children: React.ReactNode
  params: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: { default: SITE_TITLE, template: `%s | ${SITE_TITLE}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: BASE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: `${BASE_URL}/blog-placeholder-1.jpg`, width: 1200, height: 630, alt: 'OG Image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${BASE_URL}/blog-placeholder-1.jpg`],
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='ja'>
      <head>
        <link rel='preload' href='/fonts/atkinson-regular.woff' as='font' type='font/woff' crossOrigin='anonymous' />
        <link rel='preload' href='/fonts/atkinson-bold.woff' as='font' type='font/woff' crossOrigin='anonymous' />
      </head>

      <body className='font-atkinson m-0 p-0 text-left bg-background text-text text-base leading-[1.7] break-words'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
