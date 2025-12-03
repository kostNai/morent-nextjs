import CarCard from '@/components/carCard/CarCard'
import MainCarCard from '@/components/mainCarCard/MainCarCard'
import SetCarLocationSection from '@/components/setCarLocationSection/SetCarLocationSection'
import RentalBtn from '@/components/ui/RentalBtn'
import { carsData } from '@/data/mainCars'
import Link from 'next/link'

const carsInfo = carsData

export default function Home() {
    return (
        <div className='px-16 max-xl:px-6'>
            <section className='py-8 flex gap-8 max-xl:hidden'>
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
            <section className='py-8 flex gap-8  max-xl:py-16 xl:hidden'>
                <MainCarCard
                    title='Найкраща платформа для оренди автомобілів'
                    desc='Простота безпечного та надійного прокату автомобілів.Звичайно, за низькою ціною.'
                    imagePath='/images/left-car.png'
                    bgColor='#54a6ff'
                />
            </section>
            <SetCarLocationSection />
            <section className='pb-[57px]'>
                <div className='pt-12  px-5 w-full flex justify-between'>
                    <p className='text-text-secondary-light font-semibold'>
                        Популярні авто
                    </p>
                    <Link href='/cars' className='text-primary font-semibold'>
                        Дивитися всі
                    </Link>
                </div>
                <div className='mt-5 flex gap-8 flex-wrap max-sm:flex-nowrap max-sm:overflow-hidden'>
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
                <div className='pt-12  pl-5'>
                    <p className='text-text-secondary-light font-semibold'>
                        Рекомендовані авто
                    </p>
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
                </div>
                <div className='mt-[74px] w-full flex justify-center'>
                    <RentalBtn title='Показати більше' />
                </div>
            </section>
        </div>
    )
}
