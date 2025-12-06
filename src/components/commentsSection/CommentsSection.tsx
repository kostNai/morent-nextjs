import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import CommentCard from './commentCard/CommentCard'

export default function CommentsSection() {
    return (
        <section className='mt-8 p-6 bg-white rounded-xl'>
            <div className='flex gap-3 items-center'>
                <h4 className='text-xl font-semibold'>Перегляди</h4>
                <p className='py-1.5 px-3 text-sm text-white font-bold bg-primary rounded-md'>
                    13
                </p>
            </div>
            <div className='mt-8 flex flex-col gap-6'>
                <CommentCard />
                <CommentCard />
            </div>
            <div className='mt-6 w-full flex justify-center items-center '>
                <button className='flex items-center gap-2 text-text-secondary-light cursor-pointer'>
                    Показати більше <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </section>
    )
}
