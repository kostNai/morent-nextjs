'use client'

import CheckBox from '@/components/ui/CheckBox'
import { carCapacity } from '@/data/carCapacity'
import { carTypes } from '@/data/carsTypes'
import { useState } from 'react'

export default function CarsFilters() {
    const types = carTypes
    const capacity = carCapacity

    const [selected, setSelected] = useState<string[]>([])

    const toggle = (value: string) => {
        setSelected((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        )
    }
    const min = 80
    const max = 900
    const [priceFilter, setPriceFilter] = useState(min)

    const percent = ((priceFilter - min) / (max - min)) * 100

    return (
        <aside className='bg-white px-8 pt-8 w-1/4'>
            <div>
                <h4 className='text-text-secondary-light uppercase font-semibold tracking-widest text-xs'>
                    тип
                </h4>
                <div className='flex flex-col gap-8 mt-7'>
                    {types.map((carType) => (
                        <CheckBox
                            key={carType.type}
                            title={carType.type}
                            name={carType.type}
                            checked={selected.includes(carType.type)}
                            onChange={() => toggle(carType.type)}
                            value={carType.type}
                            carsValue={carType.carsValue}
                        />
                    ))}
                </div>
            </div>
            <div className='my-14'>
                <h4 className='text-text-secondary-light uppercase font-semibold tracking-widest text-xs'>
                    місткість
                </h4>
                <div className='flex flex-col gap-8 mt-7'>
                    {capacity.map((capacity) => (
                        <CheckBox
                            key={capacity.capacity}
                            title={
                                capacity.capacity !== 8
                                    ? capacity.capacity.toString() + ' чол.'
                                    : capacity.capacity.toString() +
                                      ' чол. і більше'
                            }
                            name={capacity.capacity.toString()}
                            checked={selected.includes(
                                capacity.capacity.toString()
                            )}
                            onChange={() =>
                                toggle(capacity.capacity.toString())
                            }
                            value={capacity.capacity.toString()}
                            carsValue={capacity.carsValue}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h4 className='text-text-secondary-light uppercase font-semibold tracking-widest text-xs'>
                    ціна
                </h4>
                <div className='w-full'>
                    <input
                        type='range'
                        min={min}
                        max={max}
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(Number(e.target.value))}
                        className='w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-150 ease-out'
                        style={{
                            background: `linear-gradient(to right, #3563e9 ${percent}%, #90a3bf ${percent}%)`,
                        }}
                    />
                </div>
                <p className='mt-3 text-xl font-bold text-secondary'>
                    Макс. &#8372;{priceFilter}.00
                </p>
            </div>
        </aside>
    )
}
