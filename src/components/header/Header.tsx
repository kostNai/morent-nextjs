import Image from 'next/image'
import Link from 'next/link'
import Bell from '../../../public/icons/bell.svg'
import Heart from '../../../public/icons/heart-fill.svg'
import Settings from '../../../public/icons/settings.svg'
import { FaUser } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'

export default function Header() {
    return (
        <header className='pl-15 pr-8 py-10 flex justify-between'>
            <div>
                <Link
                    href='/'
                    className='text-primary text-[32px] font-bold uppercase '
                >
                    Morent
                </Link>
            </div>
            <div>
                <div className='relative'>
                    <input
                        type='text'
                        className='w-[495px] py-2.5 pl-16 rounded-4xl border-2 border-solid border-gray-200 text-secondary font-medium text-sm focus:border-secondary focus:outline-0'
                        placeholder='Пошук...'
                    />
                    <CiSearch
                        size={26}
                        className='absolute top-2 left-5 text-secondary'
                    />
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex items-center justify-center rounded-full p-3 border-2 border-solid border-gray-200'>
                    <Image src={Bell} alt='heart icon' width={20} height={20} />
                </div>
                <div className='relative flex items-center justify-center rounded-full p-3 border-2 border-solid border-gray-200'>
                    <Image
                        src={Heart}
                        alt='notifications ison'
                        width={20}
                        height={20}
                    />
                    <div className='absolute top-0.5 -right-1 w-3 h-3 rounded-full bg-notifications'></div>
                </div>
                <div className='flex items-center justify-center rounded-full p-3 border-2 border-solid border-gray-200'>
                    <Image
                        src={Settings}
                        alt='settings icon'
                        width={20}
                        height={20}
                    />
                </div>
                <div className='flex items-center justify-center rounded-full p-3 border-2 border-solid border-gray-200'>
                    <FaUser className='text-secondary' size={20} />
                </div>
            </div>
        </header>
    )
}
