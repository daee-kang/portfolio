import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Clink from '../components/Clink';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daee Kang | Portfolio</title>
        <meta name="description" content="Daee Kang Porfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/apercuMono.ttf" as="font" crossOrigin="" />
      </Head>

      <main className={styles.main}>
        <Image src="/images/memoji.png" alt="me" width="200" height="200" />
        <div className={styles.title}>
          hey, my name is Daee
        </div>
        <div>
          I&lsquo;m a software engineer
        </div>
        <div className={styles.subtitle}>
          and I do other things too
        </div>

        <div className={styles.links}>

          <Clink href="/about" className={styles.link}>
            about me
          </Clink>

          <Clink href="/portfolio" className={styles.link}>
            portfolio
          </Clink>

          <div>
            resume
          </div>
        </div>
      </main>

    </div>
  );
}
