import CarsFilters from '@/components/carsFilters/CarsFilters'

export default function CarsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='flex'>
            <CarsFilters />
            {children}
        </div>
    )
}
