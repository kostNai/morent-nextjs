import RentalBtn from '@/components/ui/RentalBtn'
import Image from 'next/image'
import { FaStar, FaRegStarHalfStroke, FaRegStar } from 'react-icons/fa6'

type Props = {
    title: string
    rating: number
    isFavorite: boolean
    reviewsCount: number
    description: string
    carType: string
    capacity: number
    steering: string
    gasoline: number
    price: number
    discount?: number
}

export default function CarInfo({
    title,
    rating,
    isFavorite,
    reviewsCount,
    description,
    carType,
    capacity,
    steering,
    gasoline,
    price,
    discount,
}: Props) {
    return (
        <article className='flex-1/2 shrink-0 bg-white rounded-xl px-6 pt-6 pb-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <div className='mt-2 flex gap-2'>
                        <div className='flex gap-0.5'>
                            <FaStar color='#FBAD39' />
                            <FaStar color='#FBAD39' />
                            <FaStar color='#FBAD39' />
                            <FaRegStarHalfStroke color='#FBAD39' />
                            <FaRegStar color='90A3BF' />
                        </div>
                        {reviewsCount > 0 && (
                            <p className='text-secondary text-sm'>
                                {reviewsCount}+ Переглядів
                            </p>
                        )}
                    </div>
                </div>
                <Image
                    width={20}
                    height={20}
                    src='/icons/heart-fill-red.svg'
                    alt='Іконка з сердечком для додавання/знімання статусу обране'
                />
            </div>
            <div className='my-8'>
                <p className='text-secondary text-xl leading-10'>
                    {description}
                </p>
            </div>
            <div className='flex gap-11 justify-between'>
                <div className='flex-1'>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex justify-between text-xl'>
                            <h5 className='text-text-secondary-light'>
                                Тип авто
                            </h5>
                            <p className='text-secondary font-semibold'>
                                {carType}
                            </p>
                        </li>
                        <li className='flex justify-between text-xl'>
                            <h5 className='text-text-secondary-light'>
                                Керування
                            </h5>
                            <p className='text-secondary font-semibold'>
                                {steering}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex justify-between text-xl'>
                            <h5 className='text-text-secondary-light'>
                                Вмістимість
                            </h5>
                            <p className='text-secondary font-semibold'>
                                {capacity} Чол.
                            </p>
                        </li>
                        <li className='flex justify-between text-xl'>
                            <h5 className='text-text-secondary-light'>
                                Об&apos;єм баку
                            </h5>
                            <p className='text-secondary font-semibold'>
                                {gasoline} Л.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-4 justify-between items-center mt-6'>
                {discount ? (
                    <div className='flex flex-col gap-1'>
                        {discount && (
                            <p className='text-3xl font-semibold max-sm:text-xs'>
                                &#8372;{price - (price * discount) / 100}/
                                <span className='text-text-secondary-light '>
                                    день
                                </span>
                            </p>
                        )}
                        {discount && (
                            <p className='text-text-secondary-light fonst-bold line-through'>
                                &#8372;{price}
                            </p>
                        )}
                    </div>
                ) : (
                    <p className='text-3xl font-semibold max-sm:text-xs'>
                        &#8372;{price}/
                        <span className='text-text-secondary-light '>день</span>
                    </p>
                )}
                <RentalBtn title='Орендувати' />
            </div>
        </article>
    )
}
