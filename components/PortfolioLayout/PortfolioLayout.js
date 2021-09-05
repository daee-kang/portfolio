import styles from './Portfolio.module.css';
import Head from 'next/head';
import Back from '../Back';
import Image from 'next/dist/client/image';
import Icon from '../Icon';

export default function PortfolioLayout(
    {
        children,
        title,
        imagestub,
        images,
        techs
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
                <div className={styles.techs}>
                    {techs.map(tech => <Icon key={`${tech}-icon`} icon={`${tech}`} />)}
                </div>
                <div>

                </div>
                {children}
            </div>

            <div>
                {images.map(image => {
                    return <div className={styles.imageContainer} key={`port-${image}`}>
                        <Image src={`/images/${imagestub}/${image}.png`} alt={image} height={1000} width={1100} layout="responsive" className={styles.image} />
                    </div>;
                })}
            </div>

            <div className={styles.backtop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                back to the top
            </div>
        </div>
    );
}