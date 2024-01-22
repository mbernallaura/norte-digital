import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='w-full top-16 right-28 absolute z-10 flex justify-end'>
            <ul className='flex gap-8 font-openSans font-semibold text-2xl text-blueDark'>
                <li><a href="#">Content 1</a></li>
                <li><a href="#">Content 2</a></li>
                <li className='text-blueLight'><Link href='/login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
