import { IHotel } from '@/types/IHotel'
import hotel1 from '../assets/hotels/hotel1.jpg'
import hotel2 from '../assets/hotels/hotel2.jpg'
import hotel3 from '../assets/hotels/hotel3.jpg'
import hotel4 from '../assets/hotels/hotel4.jpg'

export const myHotels: IHotel[] = [
    { id: 1, name: 'Grand Palace Hotel', location: 'Kyiv, Ukraine', image: hotel1, pricePerNight: 150, category: 'Luxury', amenities: ['Swimming Pool'], about: 'Elegant and grand experience' },
    { id: 2, name: 'Sunset Resort', location: 'Odesa, Ukraine', image: hotel2, pricePerNight: 120, category: 'Resort', amenities: ['Beach Access'], about: 'Relax by the beach' },
    { id: 3, name: 'Mountain View Lodge', location: 'Yaremche, Ukraine', image: hotel3, pricePerNight: 100, category: 'Boutique', amenities: ['Mountain View'], about: 'Scenic mountain retreat' },
    { id: 4, name: 'City Center Hotel', location: 'Lviv, Ukraine', image: hotel4, pricePerNight: 130, category: 'Business', amenities: ['Free Wi-Fi'], about: 'Central and convenient location' },
    { id: 5, name: 'Riverside Inn', location: 'Dnipro, Ukraine', image: hotel1, pricePerNight: 140, category: 'Luxury', amenities: ['Spa'], about: 'Luxurious and stylish stay' },
    { id: 6, name: 'Ocean Breeze Hotel', location: 'Kherson, Ukraine', image: hotel2, pricePerNight: 110, category: 'Resort', amenities: ['Fitness Center'], about: 'Perfect for a family getaway' },
    { id: 7, name: 'Forest Retreat', location: 'Kremenchuk, Ukraine', image: hotel3, pricePerNight: 115, category: 'Boutique', amenities: ['Free Parking'], about: 'Charming and cozy atmosphere' },
    { id: 8, name: 'Techno Suites', location: 'Zaporizhzhia, Ukraine', image: hotel4, pricePerNight: 125, category: 'Business', amenities: ['Conference Room'], about: 'Modern amenities and comfort' },
    { id: 9, name: 'Lakeside Lodge', location: 'Poltava, Ukraine', image: hotel1, pricePerNight: 135, category: 'Luxury', amenities: ['Spa'], about: 'Great for business travelers' },
    { id: 10, name: 'Sunny Palms Resort', location: 'Mykolaiv, Ukraine', image: hotel2, pricePerNight: 140, category: 'Resort', amenities: ['Free Breakfast'], about: 'Quaint and peaceful retreat' },
    { id: 11, name: 'Hilltop Manor', location: 'Chernihiv, Ukraine', image: hotel3, pricePerNight: 100, category: 'Boutique', amenities: ['Mountain View'], about: 'Excellent service and dining' },
    { id: 12, name: 'Urban Heights Hotel', location: 'Vinnytsia, Ukraine', image: hotel4, pricePerNight: 120, category: 'Business', amenities: ['Bar'], about: 'Ideal for romantic escapes' },
    { id: 13, name: 'Seaside Villa', location: 'Mariupol, Ukraine', image: hotel1, pricePerNight: 125, category: 'Luxury', amenities: ['Swimming Pool'], about: 'Trendy and vibrant setting' },
    { id: 14, name: 'Cottage Grove', location: 'Uzhhorod, Ukraine', image: hotel2, pricePerNight: 110, category: 'Resort', amenities: ['Beach Access'], about: 'Prime location and amenities' },
    { id: 15, name: 'Heritage Lodge', location: 'Ternopil, Ukraine', image: hotel3, pricePerNight: 130, category: 'Boutique', amenities: ['Hiking Trails'], about: 'Spacious and serene environment' },
    { id: 16, name: 'Skyline Hotel', location: 'Khmelnytskyi, Ukraine', image: hotel4, pricePerNight: 140, category: 'Business', amenities: ['Free Wi-Fi'], about: 'Boutique experience with charm' },
    { id: 17, name: 'Palace of Dreams', location: 'Sumy, Ukraine', image: hotel1, pricePerNight: 150, category: 'Luxury', amenities: ['Restaurant'], about: 'Exclusive and high-end stay' },
    { id: 18, name: 'Sunset Beach Resort', location: 'Lutsk, Ukraine', image: hotel2, pricePerNight: 105, category: 'Resort', amenities: ['Free Breakfast'], about: 'Great value for luxury' },
    { id: 19, name: 'Mountain Haven', location: 'Chernivtsi, Ukraine', image: hotel3, pricePerNight: 115, category: 'Boutique', amenities: ['Free Parking'], about: 'Comfortable and accessible' },
    { id: 20, name: 'Downtown Inn', location: 'Brovary, Ukraine', image: hotel4, pricePerNight: 130, category: 'Business', amenities: ['Conference Room'], about: 'Stylish with great views' },
    { id: 21, name: 'Majestic Hotel', location: 'Dnipro, Ukraine', image: hotel1, pricePerNight: 140, category: 'Luxury', amenities: ['Free Wi-Fi'], about: 'Convenient city center stay' },
    { id: 22, name: 'Beachfront Resort', location: 'Odesa, Ukraine', image: hotel2, pricePerNight: 125, category: 'Resort', amenities: ['Fitness Center'], about: 'Relaxing and rejuvenating stay' },
    { id: 23, name: 'Countryside Lodge', location: 'Rivne, Ukraine', image: hotel3, pricePerNight: 135, category: 'Boutique', amenities: ['Hiking Trails'], about: 'Elegant with exceptional service' },
    { id: 24, name: 'Metropolitan Hotel', location: 'Kyiv, Ukraine', image: hotel4, pricePerNight: 145, category: 'Business', amenities: ['Bar'], about: 'Comfortable for extended stays' },
    { id: 25, name: 'Cozy Cottage', location: 'Kharkiv, Ukraine', image: hotel1, pricePerNight: 110, category: 'Luxury', amenities: ['Swimming Pool'], about: 'Unique and picturesque location' },
    { id: 26, name: 'Harborview Hotel', location: 'Mykolaiv, Ukraine', image: hotel2, pricePerNight: 115, category: 'Resort', amenities: ['Free Breakfast'], about: 'Perfect for weekend getaways' },
    { id: 27, name: 'Summit Lodge', location: 'Lviv, Ukraine', image: hotel3, pricePerNight: 125, category: 'Boutique', amenities: ['Mountain View'], about: 'Chic and modern design' },
    { id: 28, name: 'Central Plaza Hotel', location: 'Vinnytsia, Ukraine', image: hotel4, pricePerNight: 135, category: 'Business', amenities: ['Free Wi-Fi'], about: 'Prime location for sightseeing' },
    { id: 29, name: 'Elegance Inn', location: 'Poltava, Ukraine', image: hotel1, pricePerNight: 145, category: 'Luxury', amenities: ['Spa'], about: 'Luxury with a personal touch' },
    { id: 30, name: 'Sunny Days Resort', location: 'Zaporizhzhia, Ukraine', image: hotel2, pricePerNight: 120, category: 'Resort', amenities: ['Beach Access'], about: 'Great for corporate events' }
]
