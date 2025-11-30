import CarCard from '@/components/carCard/CarCard'
import MainCarCard from '@/components/mainCarCard/MainCarCard'
import SetCarLocation from '@/components/setCarLocation/SetCarLocation'
import { carsData } from '@/data/mainCars'
import Link from 'next/link'
import { TbArrowsDownUp } from 'react-icons/tb'

const carsInfo = carsData

export default function Home() {
    return (
        <div className='px-16'>
            <section className='py-8 flex gap-8'>
                {carsInfo.map((car, indx) => (
                    <MainCarCard
                        key={indx}
                        title={car.title}
                        desc={car.desc}
                        imagePath={car.imagePath}
                        bgColor={car.bgColor}
                    />
                ))}
            </section>
            <section className='flex items-center'>
                <SetCarLocation title='Забрати:' bgDotColors='#3563E9' />
                <button className='mx-11 w-fit h-fit p-[22px] bg-primary rounded-md shrink-0 cursor-pointer transition-opacity duration-300 hover:opacity-80'>
                    <TbArrowsDownUp size={18} color='white' />
                </button>
                <SetCarLocation title='Залишити:' bgDotColors='#54A6FF' />
            </section>
            <section>
                <div className='pt-12 px-5 w-full flex justify-between'>
                    <p className='text-text-secondary-light font-semibold'>
                        Популярні авто
                    </p>
                    <Link href='/' className='text-primary font-semibold'>
                        Дивитися всі
                    </Link>
                </div>
                <div className='mt-5 flex gap-8 flex-wrap'>
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                    />
                </div>
            </section>
        </div>
    )
}
