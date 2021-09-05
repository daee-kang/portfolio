import styles from './Portfolio.module.css';
import Head from 'next/head';
import Clink from '../Clink';
import Back from '../Back';
import Image from 'next/dist/client/image';

export default function PortfolioLayout(
    {
        children,
        title,
        images
    }
) {
    return (
        <div>
            <Head>
                <title>Portfolio | {title}</title>
                <meta name="description" content="Daee Kang Portfolio" />
                <meta property="og:title" content="Daee Kang Portfolio" />
                <meta property="og:description" content="Daee Kang Portfolio" />
                <meta property="og:url" content="http://daee.dev/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload" href="/fonts/apercuMono.ttf" as="font" crossOrigin="" />
            </Head>

            <div className={styles.body}>
                <Back href="/portfolio" />
                {children}
            </div>

            <div>
                <div className={styles.imageContainer}>
                    <Image src="/images/devblog/home.png" alt="home" height={1000} width={1100} layout="responsive" className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/devblog/posts.png" alt="posts" height={1000} width={1100} layout="responsive" className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/devblog/title.png" alt="title" height={1000} width={1100} layout="responsive" className={styles.image} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/devblog/body.png" alt="body" height={1000} width={1100} layout="responsive" className={styles.image} />
                </div>
            </div>

            <div className={styles.backtop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                back to the top
            </div>
        </div>
    );
}