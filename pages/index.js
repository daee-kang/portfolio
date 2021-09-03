import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Clink from '../components/Clink';
import styles from '../styles/Home.module.css';
import Div100vh from 'react-div-100vh';
import Icon from '../components/Icon';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daee Kang | Portfolio</title>
        <meta name="description" content="Daee Kang Portfolio" />
        <meta property="og:title" content="Daee Kang Portfolio" />
        <meta property="og:description" content="Daee Kang Portfolio" />
        <meta property="og:url" content="http://daee.dev/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/apercuMono.ttf" as="font" crossOrigin="" />
      </Head>

      <Div100vh className={styles.main}>
        <Image src="/images/memoji.png" alt="me" width="200" height="200" priority={true} />
        <div className={styles.title}>
          hey, my name is Daee
        </div>
        <div>
          I&lsquo;m a software engineer
        </div>
        <div className={styles.subtitle}>
          I do other things too
        </div>

        <div className={styles.links}>
          <Clink href="/portfolio" className={styles.link}>
            portfolio
          </Clink>

          <a href="/Resume.pdf" download>
            resume
          </a>
        </div>

        <div className={styles.socials}>
          <a href="http://www.github.com/daee-kang">
            <Icon icon="github" />
          </a>
          <a href="https://www.linkedin.com/in/daee-kang-270136183/">
            <Icon icon="linkedin" />
          </a>
        </div>
      </Div100vh>

    </div>
  );
}
