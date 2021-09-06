import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function pathfinder() {
    return (
        <PortfolioLayout
            title="Path Finder"
            imagestub="pathfinder"
            images={[
                "main",
                "maze",
                "search"
            ]}
            techs={["react", "javascript"]}
        >
            <div className={styles.title}>
                Path Finder
            </div>

            <div className={styles.description}>
                {`
                Sometime at this year, I was taking a course on algorithms and learning about 
                dijkstra's algorithm, I wanted to create a website on visualizing sorting so I made this
                with react and the at the time new context API. 
                `}
            </div>

            <div>
                <a href="https://youthful-wiles-f7c747.netlify.app/" className={styles.link}>
                    Visit website →
                </a>
            </div>
            <div>
                <a href="https://github.com/daee-kang/pathfinder" className={styles.githublink}>
                    View it on github →
                </a>
            </div>
        </PortfolioLayout>
    );
}