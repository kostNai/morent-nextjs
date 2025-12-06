import CarInfoCard from '@/components/carInfoCard/CarInfoCard'

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return (
        <div className='w-full p-8 grow-0 shrink '>
            <CarInfoCard />
        </div>
    )
}
