type Props = {
    title: string
    name: string
    checked: boolean | undefined
    onChange: (value: string) => void
    value: string
    carsValue?: number
}

export default function CheckBox({
    title,
    name,
    checked,
    onChange,
    value,
    carsValue = 0,
}: Props) {
    return (
        <label className='relative w-fit flex items-center space-x-2 cursor-pointer'>
            <input
                type='checkbox'
                name={name}
                className='relative peer appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-primary checked:border-primary focus:outline-none'
                checked={checked}
                onChange={() => onChange(value)}
            />
            <span className='text-secondary font-semibold text-xl'>
                {title}{' '}
                <span className='text-text-secondary-light'>({carsValue})</span>
            </span>
            <svg
                className='absolute left-0.5  w-4 h-4 text-white pointer-events-none peer-checked:block hidden'
                fill='none'
                stroke='currentColor'
                strokeWidth='3'
                viewBox='0 0 24 24'
            >
                <path d='M5 13l4 4L19 7' />
            </svg>
        </label>
    )
}
