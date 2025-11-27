type Props = {
    title: string
    bgColor?: string
}

export default function RentalBtn({ title, bgColor = 'primary' }: Props) {
    return (
        <button
            className={`bg-${bgColor} text-white font-semibold px-5 py-2.5 rounded-sm cursor-pointer`}
        >
            {title}
        </button>
    )
}
