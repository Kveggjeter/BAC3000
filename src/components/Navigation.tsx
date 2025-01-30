import styles from '../assets/styles/navigation.module.css';
import compassLogo from '../assets/images/compass.png';
import aboutUs from '../assets/images/aboutUs.png';
import news from '../assets/images/news.png';
import signIn from '../assets/images/signIn.png';
import filter from '../assets/images/filter.png';

export default function Navigation() {

    return (
        <div id="main-content" className={styles.mainContent}>
            <nav className={styles.navBar}>
                <div className={styles.navContent}>
                    <div className={styles.title}>
                        <img className={styles.logo} id="compassLogo" src={compassLogo} />
                        <a>News compass</a>
                    </div>
                    <ul className={styles.navLinks}>
                        <li className={styles.navItem} id="signIn">
                            <img className={styles.logo} id="signInLogo" src={signIn} />
                            <a href="/" className={styles.signInText}>Sign in</a>
                        </li>
                        <li className={styles.navItem} id="news">
                            <img className={styles.logo} id="newsLogo" src={news} />
                            <a href="/news" className={styles.newsText}>News</a>
                        </li>
                        <li className={styles.navItem} id="aboutUs">
                            <img className={styles.logo} id="aboutUsLogo" src={aboutUs} />
                            <a href="/about" className={styles.aboutUsText}>About us</a>
                        </li>
                        <li className={styles.navItem} id="filer">
                            <img className={styles.logo} id="filterLogo" src={filter} />
                            <a href="/login" className={styles.filterText}>Filter</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
