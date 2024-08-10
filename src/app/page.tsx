'use client'
import styles from './page.module.css'
import Companies from '@/components/companies/Companies'
import CustomSelect from '@/components/select/CustomSelect'
import Hotels from '@/components/hotels/Hotels'
import { myHotels } from '@/assets/hotelsMock'
import { IHotel } from '@/types/IHotel'
import { useState } from 'react'

const groupByCategory = (hotels: IHotel[]): Record<string, IHotel[]> => {
    return hotels.reduce((acc, hotel) => {
        if (!acc[hotel.category]) {
            acc[hotel.category] = []
        }
        acc[hotel.category].push(hotel)
        return acc
    }, {} as Record<string, IHotel[]>)
}

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    const filteredHotels = selectedCategory
        ? myHotels.filter(hotel => hotel.category === selectedCategory)
        : myHotels

    const hotelsByCategory = groupByCategory(filteredHotels)

    return (
        <main className={styles.main}>
            <Companies />
            <CustomSelect onCategoryChange={handleCategoryChange} />
            {Object.entries(hotelsByCategory).map(([category, hotels]) => (
                <Hotels key={category} hotels={hotels} categoryName={category} />
            ))}
        </main>
    )
}
