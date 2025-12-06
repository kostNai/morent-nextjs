'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
    images: string[]
    setCurrrentImage: (image: string) => void
}

export function CarsSlider({ images, setCurrrentImage }: Props) {
    const [activeImage, setActiveImage] = useState<string>(images[0])

    useEffect(() => {
        setCurrrentImage(activeImage)
    }, [images, activeImage, setCurrrentImage])
    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className=' w-full m-0 max-w-[560px]'
        >
            <CarouselContent className='w-full flex pl-4'>
                {images.map((image, indx) => (
                    <CarouselItem
                        key={indx}
                        className='md:basis-1/2 lg:basis-1/3 p-0'
                    >
                        <div className='p-0 m-0'>
                            <div
                                className={
                                    activeImage === image
                                        ? `w-fit p-2 cursor-pointer border-2 border-solid rounded-xl border-primary `
                                        : 'w-fit p-2 cursor-pointer border-2 border-solid border-transparent'
                                }
                                onClick={() => {
                                    setActiveImage(image)
                                }}
                            >
                                <div
                                    key={indx}
                                    className='flex justify-center items-center rounded-md w-[150px] h-[120px] bg-gray-100'
                                >
                                    <Image
                                        src={image}
                                        alt='Зображення авто'
                                        width={150}
                                        height={120}
                                        className='object-contain rounded-md'
                                    />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
