import Image from 'next/image'
import RentalBtn from '../ui/RentalBtn'

type Props = {
    title: string
    desc: string
    imagePath: string
    bgColor: string
}

export default function MainCarCard({
    title,
    desc,
    imagePath,
    bgColor,
}: Props) {
    return (
        <article
            className='flex-1 p-6 rounded-xl'
            style={{ background: bgColor }}
        >
            <div className='max-w-[500px] text-white'>
                <h2 className=' text-[32px] font-semibold'>{title}</h2>
                <p className='mt-4 mb-5'>{desc}</p>
            </div>
            <div>
                <div>
                    <RentalBtn
                        title='Оренда автомобіля'
                        bgColor={bgColor === '#3563e9' ? '#54a6ff' : '#3563e9'}
                    />
                </div>
            </div>
            <Image
                src={imagePath}
                alt='car image'
                width={405}
                height={115}
                className='block mx-auto my-0'
            />
        </article>
    )
}
