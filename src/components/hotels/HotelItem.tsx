'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Box, Button } from '@mui/material'
import { IHotel } from '@/types/IHotel'
import style from './HotelItem.module.css'
import heart from '../../assets/hotels/icons/defaultHeart.svg'
import redHeart from '../../assets/hotels/icons/redHeart.svg'

const HotelItem = ({name, location, image, pricePerNight, amenities, about}: IHotel) => {
    const [isAdded, setIsAdded] = useState(false)

    const handleButtonClick = () => {
        setIsAdded(!isAdded)
    }

    return (
        <article className={style.item}>
            <Box className={style.imageWrapper}>
                <Image
                    className={style.image}
                    src={image}
                    width={250}
                    height={150}
                    alt={'img'}
                />
                <Button className={style.button} onClick={handleButtonClick}>
                    <Image src={isAdded ? redHeart : heart} alt={'img'} style={{ margin: 5 }} />
                    LÄGG TILL
                </Button>
            </Box>
            <Box className={style.description}>
                <Box className={style.amenities}>
                    {amenities.map((amenity, index) => (
                        <Box className={style.amenity} key={index}>
                            {amenity}
                        </Box>
                    ))}
                </Box>
                <h3 className={style.name}>{name.toUpperCase()}</h3>
                <p className={style.about}>{about}</p>
                <Box className={style.priceAndLocation}>
                    <p className={style.location}>{location}</p>
                    <h4 className={style.price}>{pricePerNight} $</h4>
                </Box>
            </Box>
        </article>
    )
}

export default HotelItem