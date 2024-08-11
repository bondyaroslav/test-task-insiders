'use client'
import { useState, useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import HotelItem from '@/components/hotels/HotelItem'
import { IHotel } from '@/types/IHotel'
import Carousel from './Carousel'
import Navbar from '@/components/hotels/navbar/Navbar'
import style from './Hotels.module.css'

interface HotelsProps {
    hotels: IHotel[]
    categoryName: string
}

const Hotels = ({ hotels, categoryName }: HotelsProps) => {
    const [offset, setOffset] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(1)
    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateItemsPerPage = () => {
            const screenWidth = window.innerWidth
            if (screenWidth > 1200) {
                setItemsPerPage(4)
            } else if (screenWidth > 900) {
                setItemsPerPage(3)
            } else if (screenWidth > 600) {
                setItemsPerPage(2)
            } else {
                setItemsPerPage(1)
            }
        }

        updateItemsPerPage()
        window.addEventListener('resize', updateItemsPerPage)
        return () => window.removeEventListener('resize', updateItemsPerPage)
    }, [])

    const handleLeftClick = () => {
        const itemWidth = carouselRef.current ? carouselRef.current.offsetWidth / itemsPerPage : 0
        setOffset((currentOffset) => Math.min(currentOffset + itemWidth * itemsPerPage, 0))
    }

    const handleRightClick = () => {
        const itemWidth = carouselRef.current ? carouselRef.current.offsetWidth / itemsPerPage : 0
        const maxOffset = -(itemWidth * (hotels.length - itemsPerPage))
        setOffset((currentOffset) => Math.max(currentOffset - itemWidth * itemsPerPage, maxOffset))
    }

    return (
        <section className={style.hotels}>
            <Navbar
                categoryName={categoryName}
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
            />
            <Box className={style.hotelsWrapper} ref={carouselRef}>
                <Carousel offset={offset} itemsPerPage={itemsPerPage}>
                    {hotels.map((hotel) => (
                        <HotelItem
                            key={hotel.id}
                            id={hotel.id}
                            name={hotel.name}
                            location={hotel.location}
                            image={hotel.image}
                            pricePerNight={hotel.pricePerNight}
                            category={hotel.category}
                            amenities={hotel.amenities}
                            about={hotel.about}
                        />
                    ))}
                </Carousel>
            </Box>
        </section>
    )
}

export default Hotels
