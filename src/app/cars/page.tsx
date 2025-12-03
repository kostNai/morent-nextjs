import CarCard from '@/components/carCard/CarCard'
import CarsFilters from '@/components/carsFilters/CarsFilters'
import SetCarLocationSection from '@/components/setCarLocationSection/SetCarLocationSection'
import RentalBtn from '@/components/ui/RentalBtn'

export default function CarsPage() {
    return (
        <div className='flex '>
            <CarsFilters />
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
                </section>
                <div className='w-full flex justify-center my-16'>
                    <RentalBtn title='Показати більше авто' />
                </div>
            </div>
        </div>
    )
}
