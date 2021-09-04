import styles from './Portfolio.module.css';
import Head from 'next/head';

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
            {children}
        </div>
    );
}