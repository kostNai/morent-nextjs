import CarCard from '@/components/carCard/CarCard'
import CarInfoCard from '@/components/carInfoCard/CarInfoCard'
import CommentsSection from '@/components/commentsSection/CommentsSection'
import Link from 'next/link'

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return (
        <div className='w-full p-8 grow-0 shrink '>
            <CarInfoCard />
            <CommentsSection />
            <section className='pt-10'>
                <div className='flex justify-between items-center'>
                    <p className='text-text-secondary-light font-semibold'>
                        Рекомендовані авто
                    </p>
                    <Link href='/cars' className='text-primary font-bold'>
                        Переглянути всі
                    </Link>
                </div>
                <div className='mt-4 flex flex-wrap gap-8'>
                    <CarCard
                        title='Nissan GT - R'
                        type='Sport'
                        img='/images/car.png'
                        fuelCapacity={80}
                        controlType='Ручне'
                        capacity='2'
                        price={100}
                        discount={20}
                        id='1'
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
                        id='1'
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
                        id='1'
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
                        id='7'
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
                        id='6'
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
                        id='5'
                    />
                </div>
            </section>
        </div>
    )
}
