import MainCarCard from '@/components/mainCarCard/MainCarCard'
import { carsData } from '@/data/mainCars'

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
        </div>
    )
}
