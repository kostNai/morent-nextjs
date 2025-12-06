import RentalBtn from '@/components/ui/RentalBtn'
import CarCard from '@/components/carCard/CarCard'
import SetCarLocationSection from '@/components/setCarLocationSection/SetCarLocationSection'

export default function CarsPage() {
    return (
        <div className='pt-8 pb-16 px-8 flex-3/4'>
            <SetCarLocationSection />
            <section className='mt-9 flex gap-8 flex-wrap '>
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
                <CarCard
                    title='Nissan GT - R'
                    type='Sport'
                    img='/images/car.png'
                    fuelCapacity={80}
                    controlType='Ручне'
                    capacity='2'
                    price={100}
                    discount={20}
                    id='4'
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
                    id='3'
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
                    id='2'
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
            </section>
            <div className='w-full flex justify-center items-center my-16'>
                <div className='flex-1'></div>
                <RentalBtn title='Показати більше авто' />
                <p className='flex-1 text-end w-fit text-text-secondary-light text-sm'>
                    120 авто
                </p>
            </div>
        </div>
    )
}
