import { IHotel } from '@/types/IHotel'
import Image from 'next/image'
import style from './HotelItem.module.css'
import { Box } from '@mui/material'

const HotelItem = ({name, location, image, pricePerNight, category, amenities, about}: IHotel) => {
    return (
        <article className={style.item}>
            <Image
                className={style.image}
                src={image}
                width={250}
                height={150}
                alt={'img'}
            />
            <Box className={style.description}>
                <Box className={style.amenities}>
                    {amenities.map((amenity, index) => (
                        <Box className={style.amenity} key={index}>{amenity}</Box>
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