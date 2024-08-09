'use client'

import { useState, useRef } from 'react'
import { Box } from '@mui/material'
import HotelItem from '@/components/hotels/HotelItem'
import { IHotel } from '@/types/IHotel'
import Carousel from './Carousel'
import Navbar from '@/components/hotels/Navbar'
import style from './Hotels.module.css'

const Hotels = ({ hotels }: { hotels: IHotel[] }) => {
    const [offset, setOffset] = useState(0)
    const carouselRef = useRef(null)

    const handleLeftClick = () => {
        setOffset(currentOffset => Math.min(currentOffset + 250, 0))
    }

    const handleRightClick = () => {
        const maxOffset = -(250 * (hotels.length - 1))
        setOffset(currentOffset => Math.max(currentOffset - 250, maxOffset))
    }

    return (
        <section className={style.hotels}>
            <Navbar
                categoryName='category'
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
            />
            <Box className={style.hotelsWrapper} ref={carouselRef}>
                <Carousel offset={offset}>
                    {hotels.map(h => (
                        <HotelItem
                            key={h.id}
                            id={h.id}
                            name={h.name}
                            location={h.location}
                            image={h.image}
                            pricePerNight={h.pricePerNight}
                            category={h.category}
                            amenities={h.amenities}
                            about={h.about}
                        />
                    ))}
                </Carousel>
            </Box>
        </section>
    )
}

export default Hotels
