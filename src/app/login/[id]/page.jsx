import FormNewSale from '@/components/FormNewSale';
import Title from '@/components/Title';
import Image from 'next/image';

const NewSalePage = () => {
    return (
        <main className='w-screen p-20 flex flex-col font-openSans bg-greyLight'>
            <div className='flex gap-x-4'>
                <div  className='w-16 h-20 relative'>
                    <Image
                        src='/images/pjBox.png'
                        fill
                        alt='pjBox'
                    />
                </div>
                
                <Title name={'New Sale'} sizeText={'text-4xl'} font={'font-extrabold'}/>
            </div>
            <FormNewSale/>
        </main>
    )
}

export default NewSalePage
