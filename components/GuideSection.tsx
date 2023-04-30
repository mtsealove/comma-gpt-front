import { Fragment } from 'react';
import styles from '../styles/home.module.scss';

const GuideSection = () => (
    <Fragment>
        <header className={styles.header}>
            <h1>CommaGPT</h1>
        </header>
        <section className={styles.guideContainer}>
            <div className={styles.guide}>
                <div className={styles.guideHeader}>
                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"
                         strokeLinecap="round"
                         strokeLinejoin="round" className={styles.guideIcon} height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    Examples
                </div>
                <div className={styles.guideBox}>
                    쉼표에 대해 알려줘
                </div>
                <div className={styles.guideBox}>
                    쉼표의 저녁 메뉴는 어떤 것이고 메뉴는 뭐야?
                </div>
            </div>
            <div className={styles.guide}>
                <div className={styles.guideHeader}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" aria-hidden="true" className={styles.guideIcon}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                    </svg>
                    Capabilities
                </div>
                <div className={styles.guideBox}>
                    쉼표에 관련된 질문에 답할 수 있습니다.
                </div>
                <div className={styles.guideBox}>
                    긱블에 대한 정보를 일부 답할 수 있습니다.
                </div>
            </div>
            <div className={styles.guide}>
                <div className={styles.guideHeader}>
                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"
                         strokeLinecap="round"
                         strokeLinejoin="round" className={styles.guideIcon} height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Limitations
                </div>
                <div className={styles.guideBox}>
                    쉼표에 대해 학습했으며 정보는 2021년에 머물러 있습니다
                </div>
                <div className={styles.guideBox}>
                    너무 많은 질문을 하시면 해시의 통장이 아픕니다.
                </div>
            </div>
        </section>
    </Fragment>
);

export default GuideSection;
