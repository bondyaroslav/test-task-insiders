import { IHotel } from '@/types/IHotel'
import hotel1 from '../assets/hotels/hotel1.jpg'
import hotel2 from '../assets/hotels/hotel2.jpg'
import hotel3 from '../assets/hotels/hotel3.jpg'
import hotel4 from '../assets/hotels/hotel4.jpg'

export const myHotels: IHotel[] = [
    {
        id: 1,
        name: 'Grand Palace Hotel',
        location: 'Kyiv, Ukraine',
        image: hotel1,
        pricePerNight: 150,
        category: 'Luxury',
        amenities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Restaurant'],
    },
    {
        id: 2,
        name: 'Sunset Resort',
        location: 'Odesa, Ukraine',
        image: hotel2,
        pricePerNight: 120,
        category: 'Resort',
        amenities: ['Beach Access', 'Free Breakfast', 'Fitness Center', 'Spa'],
    },
    {
        id: 3,
        name: 'Mountain View Lodge',
        location: 'Yaremche, Ukraine',
        image: hotel3,
        pricePerNight: 100,
        category: 'Boutique',
        amenities: ['Mountain View', 'Hiking Trails', 'Free Parking'],
    },
    {
        id: 4,
        name: 'City Center Hotel',
        location: 'Lviv, Ukraine',
        image: hotel4,
        pricePerNight: 130,
        category: 'Business',
        amenities: ['Free Wi-Fi', 'Conference Room', 'Bar'],
    },
]
