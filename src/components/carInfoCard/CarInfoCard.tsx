import CarImages from './carImages/CarImages'
import CarInfo from './carInfo/CarInfo'

export default function CarInfoCard() {
    return (
        <section className='flex gap-8'>
            <CarImages />
            <CarInfo
                title={'Nissan GT - R'}
                rating={4}
                isFavorite={true}
                reviewsCount={440}
                description={
                    ' NISMO стало втіленням видатних характеристик Nissan,натхненних найсуворішим випробувальним полігоном — «гоночною трасою».'
                }
                carType={'Спорт'}
                capacity={2}
                steering={'Ручне'}
                gasoline={70}
                price={100}
                discount={20}
            />
        </section>
    )
}
