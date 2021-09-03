import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Clink from '../../components/Clink';
import styles from '../../styles/Home.module.css';
import cards from '../../components/portdata';

export default function Porfolio() {
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