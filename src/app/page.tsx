import styles from './page.module.css'
import Companies from '@/components/companies/Companies'
import Hotels from '@/components/hotels/Hotels'

export default function Home() {
    return (
        <main className={styles.main}>
            <Companies />
            <Hotels />
        </main>
    )
}
