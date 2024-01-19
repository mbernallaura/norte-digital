import Sidebar from '@/components/Sidebar'

export default async function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className='flex'>
                <Sidebar/>
                { children }
            </body>
        </html>
    )
}