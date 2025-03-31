import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'About Me | Milliax',
    description: 'About Milliax Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-tw" className='overflow-x-hidden'>
            <Head>
                <meta user-scalable="no" />
            </Head>
            <Analytics />
            <body className={inter.className}>{children}</body>
        </html>
    )
}
