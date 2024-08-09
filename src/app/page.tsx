import styles from './page.module.css'
import Companies from '@/components/companies/Companies'
import CustomSelect from '@/components/select/CustomSelect'
import Hotels from '@/components/hotels/Hotels'
import { myHotels } from '@/assets/hotelsMock'

export default function Home() {

    const hotels = myHotels

    return (
        <main className={styles.main}>
            <Companies />
            <CustomSelect />
            <Hotels hotels={hotels}/>
        </main>
    )
}
