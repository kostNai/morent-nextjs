import SetCarLocation from '@/components/setCarLocation/SetCarLocation'
import { TbArrowsDownUp } from 'react-icons/tb'

export default function SetCarLocationSection() {
    return (
        <section className=' flex items-center max-lg:flex-col max-lg:gap-4'>
            <SetCarLocation title='Забрати:' bgDotColors='#3563E9' />
            <button className='mx-11 w-fit h-fit p-[22px] bg-primary rounded-md shrink-0 cursor-pointer transition-opacity duration-300 hover:opacity-80'>
                <TbArrowsDownUp size={18} color='white' />
            </button>
            <SetCarLocation title='Залишити:' bgDotColors='#54A6FF' />
        </section>
    )
}
