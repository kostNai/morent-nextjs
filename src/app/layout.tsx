import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const jakarta = Plus_Jakarta_Sans({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Morent',
    description: 'App for cars rent',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${jakarta.variable}  antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main className='flex-1 bg-background-main'>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
