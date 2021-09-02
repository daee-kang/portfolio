import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Porfolio() {
    return (
        <div>
            <div className={styles.title}>
                Here are a couple of things I have been working on:
            </div>

            <Card
                title="Today I learned"
                year="2020"
                description="A personal dev wiki"
                color={'gray'}
                highlight={"#ffb703"}
                link="/"
                image="/images/til.png"
                techs={["react", "mongodb", "nodejs"]}
            />
        </div>
    );
}