type Props = {
    title: string
    bgDotColors: string
}

export default function SetCarLocation({ title, bgDotColors }: Props) {
    return (
        <article className='flex-1 flex py-6 px-12 flex-col gap-4 bg-white'>
            <div className='flex items-center gap-2 '>
                <div className='relative w-fit h-fit'>
                    <div
                        className='relative size-4 rounded-full z-0'
                        style={{ opacity: '30%', backgroundColor: bgDotColors }}
                    ></div>
                    <div
                        className='absolute top-1 left-1 flex size-2 rounded-full z-10 opacity-100'
                        style={{ backgroundColor: bgDotColors }}
                    ></div>
                </div>
                <h3 className='font-semibold text-text-secondary'>{title}</h3>
            </div>
            <div>
                <ul className='flex justify-between'>
                    <li className='flex-1 flex flex-col items-center'>
                        <div className='w-full'>
                            <h4 className='font-bold'>Локація</h4>
                            <label
                                htmlFor=''
                                className='text-xs text-text-secondary-light mt-2'
                            >
                                Оберіть ваше місто
                                <select name='' id=''></select>
                            </label>
                        </div>
                    </li>
                    <li className='flex-1 shrink-0 flex flex-col  items-center border-x-2 border-x-solid border-x-gray-200'>
                        <div>
                            <h4 className='font-bold'>Дата</h4>
                            <label
                                htmlFor=''
                                className='text-xs text-text-secondary-light mt-2'
                            >
                                Оберіть дату
                                <select name='' id=''></select>
                            </label>
                        </div>
                    </li>
                    <li className='flex-1 flex flex-col items-end'>
                        <div>
                            <h4 className='font-bold'>Час</h4>
                            <label
                                htmlFor=''
                                className='text-xs text-text-secondary-light mt-2'
                            >
                                Оберіть час
                                <select name='' id=''></select>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    )
}
