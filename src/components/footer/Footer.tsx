import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='px-15 pb-15 pt-20 bg-white max-lg:px-6'>
            <div className='pb-9 border-b border-b-solid border-b-text-secondary-light/50 flex justify-between max-lg:flex-col max-lg:gap-12'>
                <div className='max-w-[350px]'>
                    <Link
                        href='/'
                        className=' uppercase text-[32px] font-bold text-primary'
                    >
                        morent
                    </Link>
                    <p className='text-text-footer-secondary opacity-40 max-lg:mt-4'>
                        Наша мета – забезпечити зручність та сприяти збільшенню
                        вашого обсягу продажів.
                    </p>
                </div>
                <div className='flex gap-15 max-sm:flex-wrap'>
                    <div>
                        <h2 className='text-xl font-semibold'>Про нас</h2>
                        <ul className='mt-6 flex flex-col gap-8'>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Як це працює
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Особливості
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Партнерство
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Ділові відносини
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Спільнота</h2>
                        <ul className='mt-6 flex flex-col gap-8'>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Події
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Блог
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Подкаст
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Запросити друга
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Соцмережі</h2>
                        <ul className='mt-6 flex flex-col gap-8'>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Discord
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='text-text-footer-secondary opacity-40 transition-opacity duration-300 hover:opacity-80'
                                    href='/'
                                >
                                    Facebook
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-9 flex justify-between items-center gap-6 max-sm:flex-col-reverse max-sm:items-start max-sm:gap-8'>
                <div className='text-text-secondary font-semibold shrink-0 max-sm:text-xs'>
                    <p>&copy;MORENT. Усі права захищені</p>
                </div>
                <div className=' flex gap-15 max-lg:justify-end max-sm:justify-between max-sm:text-xs max-lg:w-full'>
                    <Link
                        className='text-text-secondary font-semibold'
                        href='/'
                    >
                        Конфіденційність та політика
                    </Link>
                    <Link
                        className='text-text-secondary font-semibold'
                        href='/'
                    >
                        Умови та положення
                    </Link>
                </div>
            </div>
        </footer>
    )
}
