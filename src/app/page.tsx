import styles from './page.module.css'
import Companies from '@/components/companies/Companies'
import CustomSelect from '@/components/select/CustomSelect'
import Hotels from '@/components/hotels/Hotels'

export default function Home() {
    return (
        <main className={styles.main}>
            <Companies />
            <CustomSelect />
            <Hotels />
        </main>
    )
}
