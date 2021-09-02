import Image from 'next/image';
import styles from '../styles/Card.module.css';
import Clink from './Clink';
import DevIcon from 'devicon-react-svg';

export default function Card(
    {
        title,
        year,
        description,
        techs,
        color,
        highlight,
        link,
        image
    }) {

    const devStyle = {
        height: '40px',
        fill: highlight
    };

    return (
        <div
            style={{
                backgroundColor: color
            }}
            className={styles.card}>
            <Clink href={link} className={styles.link} style={{ height: '100%' }}>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <div className={styles.year} style={{ color: highlight }}>
                            {year}
                        </div>
                        <div className={styles.title}>
                            {title}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                        <div className={styles.techs}>
                            {techs.map(tech => <DevIcon key={`${tech}-icon`} icon={`${tech}`} style={devStyle} />)}
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