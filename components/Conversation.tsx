import { Fragment } from 'react';
import styles from '../styles/conversation.module.scss';

interface Props {
    conversation: Conversation;
    isLoading?: boolean;
}

const Conversation = ({ conversation, isLoading }:Props) => {
  const a = '';
  return (
        <Fragment>
            <section className={styles.wrapper}>
                <article className={styles.container}>
                    <img src='/user.png'
                         alt='' />
                    <p>{conversation.question}</p>
                </article>
            </section>
            <section className={`${styles.wrapper} ${styles.answer}`}>
                <article className={styles.container}>
                    <img src='/ic_logo.svg'
                         alt='' />
                    {isLoading ? (<img src='/ic_loading.svg'
                                       alt=''
                                       className={styles.loading}/>)
                      : <p>{conversation.answer}</p>}

                </article>
            </section>
        </Fragment>
  );
};

export default Conversation;
