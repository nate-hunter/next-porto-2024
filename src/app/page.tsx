import { ALink } from '@/components/Links/ALink';

import styles from './page.module.css';

export default function Page() {
    return (
        <main className={styles.mainPage}>
            <header className={styles.headerContainer}>
                <h1 className={styles.identityHeader}>NATE HUNTER</h1>

                <section className={styles.identityTags}>
                    <span className={styles.identityTag}>Developer</span> <span>•</span>{' '}
                    <span className={styles.identityTag}>Designer</span> <span>•</span>{' '}
                    <span className={styles.identityTag}>Engineer</span> <span>•</span>{' '}
                    <span className={styles.identityTag}>Architect</span> <span>•</span>{' '}
                    <span className={styles.identityTag}>Craftsmen</span> <span>•</span>{' '}
                    <span className={styles.identityTag}>Builder</span>
                </section>
            </header>

            <section className={styles.aboutSection}>
                <p className={styles.aboutSectionParagraph}>
                    Currently, I am building and maintaining internal apps and design systems as a
                    full-stack developer at <ALink to="https://www.indemand.com/">iNDEMAND</ALink>.
                </p>
            </section>
        </main>
    );
}
