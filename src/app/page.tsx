import styles from "./page.module.css"
import Companies from '@/components/companies/Companies'

export default function Home() {
  return (
    <main className={styles.main}>
      <Companies/>
    </main>
  )
}
