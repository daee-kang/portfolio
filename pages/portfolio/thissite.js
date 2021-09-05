import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function pollio() {
    return (
        <PortfolioLayout
            title="This Site"
            imagestub="thissite"
            images={[
                "home",
                "lighthouse",
                "portfolio",
                "detail",
            ]}
            techs={["nextjs", "javascript"]}
        >
            <div className={styles.title}>
                This Site
            </div>

            <div className={styles.description}>
                {`
                Yeah I mean this portfolio was actually a super cool project to work on. This site was built with next.js, this
                portfolio was another perfect use case for next.js, it loads instantly and it's super responsive. The lighthouse
                score for this site is also nearly perfect! 
                `}
            </div>

            <div className={styles.description}>
                {`
                This portfolio really reflects a lot of the design choices I make with my websites and apps and also reflects my 
                personality as well. I also put a lot of time into the code to make it eloquent and used all the best practices I know
                so that it's not just a portfolio of my works but also a showcase of my code as well.
                `}
            </div>

            <div>
                <a href="https://daee.dev" className={styles.link}>
                    Visit website (even though you are already here) →
                </a>
            </div>
            <div>
                <a href="https://github.com/daee-kang/portfolio" className={styles.githublink}>
                    View it on github →
                </a>
            </div>
        </PortfolioLayout>
    );
}