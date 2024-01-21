'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userValidate } from '@/validations/userValidate';
import { useRouter } from 'next/navigation';
import { norteDigital } from '@/api/api';

const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userValidate),
    });

    const onSubmit = (data) => {
        const id = norteDigital.id;
        localStorage.setItem('id', id);
        router.push(`/login/${id}`);
        // router.push(`/newSale?username=${encodeURIComponent(data.username)}`);
    };

    return (
        <main className='w-screen h-screen flex flex-col items-center justify-center gap-4 font-openSans bg-grey'>
            <div className='flex flex-col bg-blueLight p-6'>
                <span className='font-semibold text-greyLight'>Username : roberto</span>
                <span className='font-semibold text-greyLight'>Password: 1234</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-[calc(30%)] p-8 flex flex-col justify-center gap-4 bg-greyLight'>
                <span className='font-extrabold text-center text-5xl text-blueDark'>LOG IN</span>
                <div className='flex flex-col'>
                    <label htmlFor="username" className='font-semibold text-grey'>Username</label>
                    <input className='p-2' type="text" id='name' {...register('username')}/>
                    {
                        errors.username?.message && <span className='text-red-400'>{errors.username?.message}</span>
                    }
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='font-semibold text-grey'>Password</label>
                    <input className='p-2' type="password" id='password' {...register('password')} />
                    {
                        errors.password?.message && <span className='text-red-400'>{errors.password?.message}</span>
                    }
                </div>
                <div className='flex justify-center'>
                    <button className='font-semibold bg-blueLight pt-2 pb-2 pl-8 pr-8 mt-8 text-white' type='submit'>LOGIN</button>
                </div>
            </form>
        </main>
    );
};

export default LoginPage;
