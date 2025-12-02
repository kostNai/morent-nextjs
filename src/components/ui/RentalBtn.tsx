type Props = {
    title: string
    bgColor?: string
}

export default function RentalBtn({ title, bgColor = '#3563e9' }: Props) {
    return (
        <button
            className='text-white h-fit font-semibold px-5 py-2.5 rounded-sm cursor-pointer transition-opacity duration-300 hover:opacity-80 max-sm:text-xs max-sm:py-2.5 max-sm:px-4 max-sm:font-normal'
            style={{ backgroundColor: bgColor }}
        >
            {title}
        </button>
    )
}
