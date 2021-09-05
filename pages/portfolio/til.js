import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function til() {
    return (
        <PortfolioLayout
            title="TIL"
            imagestub="til"
            images={[
                "home",
                "post",
                "edit"
            ]}
            techs={["react", "javascript", "mongodb", "nodejs"]}
        >
            <div className={styles.title}>
                Today I learned
            </div>

            <div className={styles.description}>
                {`
                A react website where I'd be able to write any notes on any new software development skills. This was also
                my first time working with a database in a personal project, I created the backend with nodejs, express and mongodb. 
                I also spent a lot of time with styling to make it responsive for any device.
                `}
            </div>

            <div className={styles.description}>
                {`
                Once upon a time this website was hosted through AWS but I got my account hacked some time ago and the customer
                service was so terrible that I ended up closing my account altogether and I never bothered to host this site again.
                But it was super cool while it lasted 🪦 🪦 🪦 
                `}
            </div>

            <div>
                <a href="https://github.com/daee-kang/til" className={styles.githublink}>
                    View it on github →
                </a>
            </div>
        </PortfolioLayout>
    );
}