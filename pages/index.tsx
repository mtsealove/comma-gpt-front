import {
  useEffect, useState, useRef, useMemo,
} from 'react';
import { NextSeo } from 'next-seo';
import styles from '../styles/home.module.scss';
import GuideSection from '../components/GuideSection';
import Conversation from '../components/Conversation';
import API from '../libs/API';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [question, setQuestion] = useState<string>('');
  const containerRef = useRef<HTMLDivElement|null>(null);
  const regenerateEnabled = useMemo<boolean>(
    () => conversations.length !== 0 && (!isLoading),
    [conversations, isLoading],
  );
  const sendQuestion = () => {
    // 질문 내용이 없거나 로딩 중일때는 수행 X
    if (question.length === 0 || isLoading) {
      return;
    }
    const c: Conversation = {
      question,
    };
    setConversations([...conversations, c]);
    setQuestion('');
  };
  // 최하단으로 스크롤
  const scrollEnd = () => {
    const { current } = containerRef;
    if (current) {
      const { scrollHeight } = current;
      current.scrollTo({ top: scrollHeight, behavior: 'smooth' });
    }
  };
  // 답변 생성
  const generateAnswer = (q: string, targetIdx: number) => {
    setIsLoading(true);
    API.getAnswer(q)
      .then((res) => {
        const { data } = res;
        const newC: Conversation[] = conversations.map((c, idx) => {
          if (idx === targetIdx) {
            c.answer = data;
          }
          return c;
        });
        setIsLoading(false);
        setConversations(newC);
      }).catch(() => {
        const newC: Conversation[] = conversations.map((c, idx) => {
          if (idx === targetIdx) {
            c.answer = '죄송합니다. 오류가 발생하였습니다.';
          }
          return c;
        });
        setIsLoading(false);
        setConversations(newC);
      });
  };
  const regenerate = () => {
    if (conversations.length !== 0) {
      const lastIdx = conversations.length - 1;
      const conv = conversations[lastIdx];
      generateAnswer(conv.question, lastIdx);
    }
  };
  useEffect(() => {
    for (let i = 0; i < conversations.length; i += 1) {
      const conv = conversations[i];
      if (!conv.answer) {
        generateAnswer(conv.question, i);
      }
    }
    scrollEnd();
  }, [conversations]);
  return (
        <main>
            <NextSeo title='쉼표GPT'
                     description='A conversational AI system for Geekble Comma'
                     openGraph={{
                       title: '쉼표GPT',
                       description: 'A conversational AI system for Geekble Comma',
                     }}
            />
            {conversations.length === 0 ? (
                <GuideSection/>
            ) : (
                <div className={styles.container}
                     ref={containerRef}>
                    {conversations.map((c, idx) => (
                        <Conversation conversation={c}
                                      key={`conversation ${idx}`}
                                      {... idx === conversations.length - 1 && { isLoading }}
                        />
                    ))}
                </div>
            )}
            <div className={styles.bottomWrapper}>
                <section className={styles.bottom}>
                    {regenerateEnabled && (
                        <div className={styles.regenerateWrapper}>
                            <button className={styles.regenerate}
                                    onClick={regenerate}>
                                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round"
                                     strokeLinejoin="round" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="1 4 1 10 7 10"></polyline>
                                    <polyline points="23 20 23 14 17 14"></polyline>
                                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                                </svg>
                                다시 생성하기
                            </button>
                        </div>
                    )}
                    <div className={styles.sendContainer}>
                        <div className={styles.send}>
                            <input placeholder='메시지를 보내세요'
                                   value={question}
                                   onChange={(e) => setQuestion(e.target.value)}
                                   onKeyUp={(e) => {
                                     if (e.key === 'Enter') {
                                       sendQuestion();
                                     }
                                   }}
                            />
                            <svg stroke="#8E8EA0" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                                 strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em"
                                 onClick={sendQuestion}
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </div>
                        {regenerateEnabled && (
                            <button className={styles.regenerateIcon}
                                    onClick={regenerate}>
                                <svg stroke="rgb(217, 217, 217)" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round"
                                     strokeLinejoin="round" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="1 4 1 10 7 10"></polyline>
                                    <polyline points="23 20 23 14 17 14"></polyline>
                                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                    <p className={styles.notice}>
                        <a>CommaGPT June 1 Version</a>.
                        Free Use For Geekbler.
                        CommaGPT introduce Geekble's Comma workshop.
                    </p>
                </section>
            </div>
        </main>
  );
};

export default HomePage;
