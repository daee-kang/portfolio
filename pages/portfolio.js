import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Porfolio() {
    return (
        <div>
            <div className={styles.title}>
                Here are a couple of things I have been working on:
            </div>

            <Card
                title="Poll.io"
                year="WIP"
                description="Polling app based on geographical location written in React Native"
                color={'#763AFF'}
                highlight={"#0DCD94"}
                link="/"
                image="/images/pollio.png"
                techs={["react", "typescript", "mongodb", "nodejs"]}
            />

            <Card
                title="This Site"
                year="2021"
                description="I mean I guess this portfolio counts as a project... right?"
                color={'#fca311'}
                highlight={"black"}
                link="/"
                image="/images/portfolio.png"
                techs={["nextjs", "javascript"]}
            />

            <Card
                title="Dev Blog"
                year="2021"
                description="A development blog written in Next.js and JAMstack"
                color={'#219ebc'}
                highlight={"#ffafcc"}
                link="/"
                image="/images/devblog.png"
                techs={["nextjs", "typescript"]}
            />

            <Card
                title="numbrr"
                year="2021"
                description="Typeracer clone but for numbers, numpad racer basically (that probably is a better name)"
                color={'#40916c'}
                highlight={"#ffba08"}
                link="/"
                image="/images/numbrr.png"
                techs={["react", "typescript"]}
            />

            <Card
                title="Today I learned"
                year="2020"
                description="A personal dev wiki"
                color={'#003049'}
                highlight={"#ffb703"}
                link="/"
                image="/images/til.png"
                techs={["react", "javascript", "mongodb", "nodejs"]}
            />

            <Card
                title="path finder"
                year="2020"
                description="A react website that generates mazes and visualizes pathfinding algorithms"
                color={'rgb(255, 226, 226)'}
                text={"rgb(26, 166, 183)"}
                highlight={"rgb(255, 105, 97)"}
                link="/"
                image="/images/pathfinder.png"
                techs={["react", "javascript"]}
            />

            <Card
                title="sort"
                year="2019"
                description="A react website for visualizing sorting algorithms like those cool youtube videos :-)"
                color={'black'}
                highlight={"#2a9d8f"}
                link="/"
                image="/images/sort.png"
                techs={["react", "javascript"]}
            />
        </div>
    );
}