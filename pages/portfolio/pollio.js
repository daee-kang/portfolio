import PortfolioLayout from "../../components/PortfolioLayout/PortfolioLayout";
import styles from '../../components/PortfolioLayout/Portfolio.module.css';

export default function pollio() {
    return (
        <PortfolioLayout
            title="Poll.io"
            imagestub="pollio"
            images={[
                "prototype",
                "design1",
                "design2"
            ]}
            techs={["react", "typescript", "mongodb", "nodejs"]}

        >
            <div className={styles.title}>
                Poll.io
            </div>

            <div className={styles.description}>
                {`
                Poll.io is a polling app that lets users query and vote for polls only around their geographical location.
                The foundation of this app is to inspire people to vote in their local communities.
                `}
            </div>

            <div className={styles.description}>
                {`
                My best friend gave me this idea around the time of the presidential election of 2020 where voting really mattered. 
                I have been on and off the project due to the job searches but I am determined to have this app out in the hands of 
                users everywhere. I've created a prototype with a functional backend but I was stuck with design and the last progress
                on this app was hiring a UI/UX designer to help me bring this project to end. 
                `}
            </div>

            <div className={styles.description}>
                {`
                I have a working prototype but it's not the best looking right now 😬, but the final product will be coming out
                soon.
                `}
            </div>

            <a href="https://github.com/daee-kang/poll.io" className={styles.githublink}>
                View it on github →
            </a>
        </PortfolioLayout>
    );
}