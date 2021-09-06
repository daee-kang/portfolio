import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function sort() {
    return (
        <PortfolioLayout
            title="Sort"
            imagestub="sort"
            images={[
                "main",
                "bubble",
                "quick"
            ]}
            techs={["react", "javascript"]}
        >
            <div className={styles.title}>
                Sort
            </div>

            <div className={styles.description}>
                {`
                Sometime in the year 2018, I was in one of my youtube deep dives and I got 
                caught watching sorting videos and I thought it was cool. 
                So I made my own with react.
                `}
            </div>

            <div>
                <a href="https://www.youtube.com/watch?v=kPRA0W1kECg" className={styles.link} style={{ color: '#e63946' }}>
                    The youtube video →
                </a>
            </div>
            <div>
                <a href="https://master.d5w72wcawve7f.amplifyapp.com/" className={styles.link}>
                    Visit website →
                </a>
            </div>
            <div>
                <a href="https://github.com/daee-kang/sort" className={styles.githublink}>
                    View it on github →
                </a>
            </div>
        </PortfolioLayout>
    );
}