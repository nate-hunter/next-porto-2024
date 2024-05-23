import { Button } from '../components/Button';

import styles from './page.module.css';

export default function Page() {
    return (
        <main>
            <header>
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

            <section>
                <div className={styles.techContainer}>
                    <div className={styles.pillSkill}>
                        <span>O</span>
                        <span>Full Stack</span>
                    </div>
                </div>

                {/* <h3>Current Role:</h3> */}
                <p>
                    Currently, I am building and maintaining internal apps and design systems as a
                    full-stack developer at iNDEMAND.
                </p>

                <p>
                    I’m open to connect to explore opportunities or have a conversation, especially
                    about tech trends, the NBA, NFL, or the UFC, among others.
                </p>
            </section>

            <footer>
                <div>
                    <span>GitHub</span>
                    <span>LinkedIn</span>
                </div>

                <Button>Contact</Button>
            </footer>
        </main>
    );
}
