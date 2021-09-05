import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function numbrr() {
    return (
        <PortfolioLayout
            title="numbrr"
            imagestub="numbrr"
            images={[
                "main",
                "slow",
                "fast",
            ]}
            techs={["react", "typescript"]}
        >
            <div className={styles.title}>
                numbrr
            </div>

            <div className={styles.description}>
                {`
                Numbrr is a typeracer clone but instead of typing alphabetic characters, it's only numbers. This became 
                a one day project after I was filling in spreadsheets and I wanted to measure how fast I could type 
                on the number pad and like a software engineer could and should, I created my own tool to measure that. 
                `}
            </div>

            <div>
                <a href="https://daee-kang.github.io/numbrr/" className={styles.link}>
                    Visit website →
                </a>
            </div>
            <div>
                <a href="https://github.com/daee-kang/numbrr" className={styles.githublink}>
                    View it on github →
                </a>
            </div>
        </PortfolioLayout>
    );
}