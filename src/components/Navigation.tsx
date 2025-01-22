import styles from '../assets/styles/navigation.module.css';

export default function Navigation() {
    const today: string = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return (
        <div id="main-content" className={styles.mainContent}>
            <nav className={styles.navBar}>
                <div className={styles.navContent}>
                    <div className={styles.dto}>
                        <a>{today}</a>
                    </div>
                    <ul className={styles.navLinks}>
                        <li><a href="/" className={styles.navItem}>Home</a></li>
                        <li><a href="/news" className={styles.navItem}>News</a></li>
                        <li><a href="/about" className={styles.navItem}>About us</a></li>
                        <li><a href="/login" className={styles.navItem}>Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
