import Image from 'next/image'
import { FaRegStar, FaStar } from 'react-icons/fa6'

export default function CommentCard() {
    return (
        <article>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <div className='relative size-14 rounded-full bg-linear-to-b from-gray-200 to-gray-900 flex justify-center items-center'>
                        <Image
                            src='/images/avatar.png'
                            fill
                            alt='Фото профілю'
                            style={{ objectFit: 'contain' }}
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h5 className='text-xl font-bold'>Іван Іванович</h5>
                        <p className='text-sm text-text-secondary-light'>
                            СЕО в Amazon
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-end gap-2'>
                    <p className='text-sm text-text-secondary-light'>
                        21 Липня 2025
                    </p>
                    <div className='flex gap-0.5'>
                        <FaStar color='#FBAD39' />
                        <FaStar color='#FBAD39' />
                        <FaStar color='#FBAD39' />
                        <FaStar color='#FBAD39' />
                        <FaRegStar color='90A3BF' />
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <p className='text-sm text-text-secondary-light leading-8'>
                    Ми дуже задоволені сервісом додатку MORENT. Morent пропонує
                    низькі ціни та великий вибір автомобілів з хорошим та
                    комфортним обладнанням. Крім того, співробітники компанії
                    дуже привітні та ввічливі.
                </p>
            </div>
        </article>
    )
}
