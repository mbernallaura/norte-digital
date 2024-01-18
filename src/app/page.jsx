import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className='w-full h-full relative flex'>
            
            <div className='w-1/4 left-40 h-screen absolute justify-center flex flex-col'>
                <span className='font-openSans font-extrabold text-6xl  text-blueDark'>Lorem ipsum Design</span>
                <span className='mt-8 font-openSans font-semibold text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                <Link href='/login'>
                    <button className='mt-28 pt-4 pb-4 pl-10 pr-10 inline font-openSans font-extrabold text-white bg-blueLight'>LOGIN</button>
                </Link>
            </div>

            <div className='w-3/4 h-screen relative left-[calc(25%)]'>
                <Navbar/>
                <Image
                    src='/images/landing.png'
                    layout='fill'
                    alt='landing'
                />
            </div>
        </div>
    )
}

export default LoginPage;
