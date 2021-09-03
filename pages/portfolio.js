import { motion } from 'framer-motion';
import Card from '../components/Card';
import Clink from '../components/Clink';
import styles from '../styles/Home.module.css';

export default function Porfolio() {
    const cards = [
        {
            title: "Poll.io",
            year: "WIP",
            description: "Polling app based on geographical location written in React Native",
            color: '#763AFF',
            highlight: '#0DCD94',
            link: "/",
            image: '/images/pollio.png',
            techs: ["react", "typescript", "mongodb", "nodejs"]
        },
        {
            title: "This Site",
            year: "2021",
            description: "I mean I guess this portfolio counts as a project... right?",
            color: '#fca311',
            highlight: 'black',
            link: "/",
            image: '/images/portfolio.png',
            techs: ["nextjs", "javascript"]
        },
        {
            title: "Dev Blog",
            year: "2021",
            description: "A development blog written in Next.js and JAMstack",
            color: '#219ebc',
            highlight: "#ffafcc",
            link: "/",
            image: '/images/devblog.png',
            techs: ["nextjs", "typescript"]
        },
        {
            title: "numbrr",
            year: "2021",
            description: "Typeracer clone but for numbers, numpad racer basically (that probably is a better name)",
            color: '#40916c',
            highlight: "#ffba08",
            link: "/",
            image: '/images/numbrr.png',
            techs: ["react", "typescript"]
        },
        {
            title: "Today I learned",
            year: "2020",
            description: "A personal dev wiki",
            color: '#003049',
            highlight: "#ffb703",
            link: "/",
            image: "/images/til.png",
            techs: ["react", "javascript", "mongodb", "nodejs"]
        },
        {
            title: "Simple stock profit calc",
            year: "2020",
            description: "A simple app to calculate potential stock market earnings made with SwiftUI",
            color: '#447a9c',
            highlight: "#ee6b4d",
            link: "/",
            image: "/images/stockapp.png",
            techs: ["swift"]
        },
        {
            title: "path finder",
            year: "2020",
            description: "A react website that generates mazes and visualizes pathfinding algorithms",
            color: 'rgb(255, 226, 226)',
            text: "rgb(26, 166, 183)",
            highlight: "rgb(255, 105, 97)",
            link: "/",
            image: "/images/pathfinder.png",
            techs: ["react", "javascript"],
        },
        {
            title: "sort",
            year: "2019",
            description: "A react website for visualizing sorting algorithms like those cool youtube videos :-)",
            color: 'black',
            highlight: "#2a9d8f",
            link: "/",
            image: "/images/sort.png",
            techs: ["react", "javascript"]
        }
    ];

    return (
        <div>
            <div className={styles.aboutme}>
                <Clink className={styles.back} href="/">
                    ← back
                </Clink>
                <p>
                    Hey, my name is <span style={{ color: '#fca311', fontSize: '2rem', textDecoration: 'underline' }}>Daee Kang</span> and I&lsquo;m a software engineer. I currently expertise
                    in react and react native development, although I have experience with C++,C#.
                    I love working with new frameworks and creating things that are fun to look at and use.
                    I graduated from University of Nevada Las Vegas in 2020 and I&lsquo;m ready for any and all
                    opportunities.
                </p>
                <div style={{ borderBottom: '1px solid rgb(216, 215, 215)', marginTop: 60 }} />
                <div className={styles.title} style={{ marginTop: 40 }}>
                    Anyways, here are a couple of things I have been working on:
                </div>
            </div>

            <div className={styles.cardContainer}>
                {

                    cards.map((card, index) => {
                        return <Card
                            title={card.title}
                            year={card.year}
                            description={card.description}
                            color={card.color}
                            highlight={card.highlight}
                            text={card.text}
                            link={card.link}
                            image={card.image}
                            techs={card.techs}
                            key={`card-${card.title}`}
                        />;
                    })
                }
            </div>

            <div className={styles.backtop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                back to the top
            </div>
        </div >
    );
}