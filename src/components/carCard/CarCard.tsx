import Image from 'next/image'
import RentalBtn from '../ui/RentalBtn'

type Props = {
    title: string
    type: string
    img: string
    fuelCapacity: number
    controlType: string
    capacity: string
    price: number
    discount?: number
}

export default function CarCard({
    title,
    type,
    img,
    fuelCapacity,
    controlType,
    capacity,
    price,
    discount,
}: Props) {
    return (
        <article className='flex-[23%] min-w-60 max-w-[375px] bg-white p-6 rounded-xl max-sm:p-4'>
            <div>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-xl font-bold leading-none'>
                            {title}
                        </h3>
                        <p className='text-sm font-bold text-text-secondary-light'>
                            {type}
                        </p>
                    </div>
                    <Image
                        src='/icons/heart.svg'
                        alt='heart icon'
                        width={20}
                        height={20}
                    />
                </div>
                <div className='mt-[66px] mb-[70px] '>
                    <Image
                        src={img}
                        alt='car image'
                        width={232}
                        height={72}
                        className='my-0 mx-auto'
                    />
                </div>
                <div>
                    <ul className='flex items-center justify-between gap-4'>
                        <li className='flex items-center gap-1.5 text-text-secondary-light text-sm max-sm:text-xs'>
                            <Image
                                src='/icons/gas-station.svg'
                                alt='gas station icon'
                                width={22}
                                height={22}
                            />
                            {fuelCapacity}л
                        </li>
                        <li className='flex items-center gap-1.5 text-text-secondary-light text-sm max-sm:text-xs'>
                            <Image
                                src='/icons/steering-wheel.svg'
                                alt='gas station icon'
                                width={22}
                                height={22}
                            />
                            {controlType}
                        </li>
                        <li className='flex items-center gap-1.5 text-text-secondary-light text-sm max-sm:text-xs'>
                            <Image
                                src='/icons/two-users.svg'
                                alt='gas station icon'
                                width={22}
                                height={22}
                            />
                            {capacity}чол
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-4 justify-between mt-6'>
                <div className='flex flex-col gap-1'>
                    {discount && (
                        <p className='text-xl font-semibold max-sm:text-xs'>
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
                <RentalBtn title='Орендувати' />
            </div>
        </article>
    )
}
