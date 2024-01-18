import '@/styles/globals.css';

export const metadata = {
    title: "NorteDigital",
    description: "Prueba",
    icons: {
        icon: [
            '/next.svg',
        ],
    }
}

export default async function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    )
}