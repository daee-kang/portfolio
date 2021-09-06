import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function stockcalc() {
    return (
        <PortfolioLayout
            title="Stock Calculator"
            imagestub="stockcalc"
            images={[
                "main"
            ]}
            techs={["swift"]}
        >
            <div className={styles.title}>
                Stock Calculator
            </div>

            <div className={styles.description}>
                {`
                A stock profit calculator built in SwiftUI. I spent a few months learning SwiftUI and 
                at one point I was also trading stocks and I needed a quick solution to calculate potential
                profits within seconds as I was tired of pulling up the calculator app. This is my first production
                app that you can download and is currently sitting at a 5 star rating (mostly my friends ratings).
                `}
            </div>

            <div>
                <a href="https://apps.apple.com/ky/app/simple-stock-profit-calc/id1518002744" className={styles.link}>
                    Visit on appstore →
                </a>
            </div>
            <div>
                <a href="https://github.com/daee-kang/Stock-Calculator-SwiftUI" className={styles.githublink}>
                    View it on github →
                </a>
            </div>
        </PortfolioLayout>
    );
}