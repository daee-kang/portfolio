import Image from 'next/image';
import styles from '../styles/Card.module.css';
import Clink from './Clink';

export default function Card(
    {
        title,
        year,
        description,
        techs,
        color,
        link,
        image
    }) {
    return (
        <div
            style={{
                backgroundColor: color
            }}
            className={styles.card}>
            <Clink href={link} className={styles.link} style={{ height: '100%' }}>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <div className={styles.year}>
                            {year}
                        </div>
                        <div className={styles.title}>
                            {title}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                        <div className={styles.techs}>

                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <Image src={image} alt="image" height={550} width={700} />
                        </div>
                    </div>
                </div>
            </Clink>
        </div >
    );
};;;;