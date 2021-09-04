import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function devBlog() {
    return (
        <PortfolioLayout title="dev blog">
            <div className={styles.title}>
                Dev Blog
            </div>

            <div className={styles.description}>
                {`
                This is a website built with next.js with the sole purpose of being my development
                blog. I spend a lot of my time looking at other people's posts about things they are doing
                or technologies they are learning and that inspired me that hey, I can create content like that
                too and maybe someone will see it.
                `}
            </div>

            <div className={styles.description}>
                {`
                I also wanted to learn next.js and really a development blog was the perfect example to
                use it for. I learned about SEO and content management as well, it's also been set up on
                netlify for continuous integration. It's also fast as heck.  
                `}
            </div>

            <div className={styles.description}>
                {`
                There's not a lot of content right now as I've been pretty busy with job searches and
                building my portfolio but I definitely plan to fill it in the future.  
                `}
            </div>

            <a href="https://daeedev.netlify.app/" className={styles.link}>
                Visit website →
            </a>
        </PortfolioLayout>
    );
}