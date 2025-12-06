'use client'
import { CarsSlider } from '@/components/carsSlider/CarsSlider'
import Image from 'next/image'
import { useState } from 'react'

const images = [
    '/images/car-2.png',
    '/images/car-inside-1.png',
    '/images/car-inside-2.png',
    '/images/Nissan-GT-R-Nismo-Interior-01.jpg',
]

export default function CarImages() {
    const [currentImage, setCurrrentImage] = useState<string>(images[0])
    console.log(images)

    return (
        <div className='flex-1/2 flex flex-col'>
            <div className='flex-1  flex justify-center items-center rounded-xl max-h-[300px]'>
                <div className=' w-full h-[300px] flex items-center rounded-xl'>
                    <Image
                        src={currentImage}
                        width={560}
                        height={300}
                        alt='Зображення авто'
                        className='w-full h-auto max-h-[300px] object-cover object-top rounded-xl'
                    />
                </div>
            </div>

            <div className='mt-6'>
                <CarsSlider
                    images={images}
                    setCurrrentImage={setCurrrentImage}
                />
            </div>
        </div>
    )
}
