import { StaticImageData } from 'next/image'

export interface IHotel {
    id: number
    name: string
    location: string
    image: StaticImageData
    pricePerNight: number
    category: 'Luxury' | 'Resort' | 'Boutique' | 'Business' | 'Beachfront' | 'Historic' | 'Eco-Friendly' | 'Contemporary'
    amenities: string[]
    about: string
}