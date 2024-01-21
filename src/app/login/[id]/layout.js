'use client';
import Sidebar from '@/components/Sidebar'
import { RecoilRoot } from 'recoil'

export default async function RootLayout({ children }) {

    return (
        <RecoilRoot>
            <html lang="en">
                <body className='flex'>
                    <Sidebar/>
                    { children }
                </body>
            </html>
        </RecoilRoot>
    )
}