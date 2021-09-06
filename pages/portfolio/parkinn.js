import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function parkinn() {
    return (
        <PortfolioLayout
            title="Park Inn"
            imagestub="parkinn"
            images={[
                "main",
                "draw",
                "lots"
            ]}
            techs={["react", "javascript", "nodejs", "mongodb"]}
        >
            <div className={styles.title}>
                ParkInn
            </div>

            <div className={styles.description}>
                {`
                ParkInn was my senior design project at UNLV, as a whole, it was designed to be a 
                software as a service for business to manage parking lots, this would also allow 
                clients to view availability of parking lot spaces in real time.
                `}
            </div>

            <div className={styles.description}>
                {`
                Along with other small tasks, my main part of the project was to create a tool in 
                the site to allow owners to draw parking lots with labeled parking spots. I also
                created a serialization algorithm that allowed us to save the parking lot data in 
                a mongo database that would then be grabbed by our iOS app to be re-rendered.
                `}
            </div>

            <div>
                <a href="https://github.com/daee-kang/parkInn" className={styles.githublink}>
                    View it on github →
                </a>
            </div>
        </PortfolioLayout>
    );
}