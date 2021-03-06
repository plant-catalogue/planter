import styles from './layout.module.css'
import Link from 'next/link'
import NavigationBar from './navigation'

export const siteTitle = 'Planters'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <NavigationBar/>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
