'use client'
import Image from 'next/image'
import Link from 'next/link'
import Bell from '../../../public/icons/bell.svg'
import Heart from '../../../public/icons/heart-fill.svg'
import Settings from '../../../public/icons/settings.svg'
import { FaUser } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header className='relative w-full pl-15 pr-8 py-10 flex justify-between gap-4 max-lg:px-6 max-sm:pb-24 border border-border-secondary border-solid'>
            <div>
                <Link
                    href='/'
                    className='text-primary text-[32px] font-bold uppercase '
                >
                    Morent
                </Link>
            </div>
            <div className='max-lg:w-full max-sm:absolute max-sm:bottom-6 max-sm:left-0  '>
                <div className='relative w-full  max-sm:px-6'>
                    <input
                        type='text'
                        className='w-[495px] py-2.5 pl-16 rounded-4xl border-2 border-solid border-gray-200 text-secondary font-medium text-sm focus:border-secondary focus:outline-0 max-lg:w-full max-sm:rounded-xl'
                        placeholder='Пошук...'
                    />
                    <CiSearch
                        size={26}
                        className='absolute top-2 left-5 text-secondary max-sm:left-12'
                    />
                </div>
            </div>
            <div className=' flex items-center  justify-end shrink-0'>
                <Link
                    href='/'
                    className='flex items-center justify-center rounded-full p-3 border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 max-lg:hidden'
                >
                    <Image src={Bell} alt='heart icon' width={20} height={20} />
                </Link>
                <Link
                    href='/'
                    className='relative flex items-center justify-center rounded-full mx-5 p-3 border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 max-lg:hidden'
                >
                    <Image
                        src={Heart}
                        alt='notifications ison'
                        width={20}
                        height={20}
                    />
                    <div className='absolute top-0.5 -right-1 w-3 h-3 rounded-full bg-notifications'></div>
                </Link>
                <Link
                    href='/'
                    className='flex items-center justify-center rounded-full p-3 mr-5 border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 max-lg:hidden'
                >
                    <Image
                        src={Settings}
                        alt='settings icon'
                        width={20}
                        height={20}
                    />
                </Link>
                <div className='relative flex z-20 items-center justify-center bg-white rounded-full p-3 border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 max-lg:hidden'>
                    <FaUser
                        className='text-secondary relative z-50 '
                        size={20}
                    />
                </div>
                <div className='relative'>
                    <div className='relative flex z-20 items-center justify-center bg-white rounded-full p-3 border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 lg:hidden'>
                        <FaUser
                            className='text-secondary relative z-50 '
                            size={20}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                    {isMenuOpen && (
                        <div className='absolute -top-3 left-0 pt-16 pb-3  flex flex-col gap-5 lg:hidden'>
                            <Link
                                href='/'
                                className='mt-3 flex items-center justify-center rounded-full p-3 bg-white border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 '
                            >
                                <Image
                                    src={Bell}
                                    alt='heart icon'
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link
                                href='/'
                                className='relative z-0 flex items-center justify-center rounded-full p-3 bg-white border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 '
                            >
                                <Image
                                    src={Heart}
                                    alt='notifications ison'
                                    width={20}
                                    height={20}
                                />
                                <div className='absolute top-0.5 -right-1 w-3 h-3 rounded-full bg-notifications'></div>
                            </Link>
                            <Link
                                href='/'
                                className='flex items-center justify-center rounded-full p-3 bg-white border-2 border-solid border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-200 '
                            >
                                <Image
                                    src={Settings}
                                    alt='settings icon'
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
