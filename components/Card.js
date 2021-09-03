import Image from 'next/image';
import styles from '../styles/Card.module.css';
import Clink from './Clink';
import Icon from '../components/Icon';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Card(
    {
        title,
        year,
        description,
        techs,
        text,
        color,
        highlight,
        link,
        image
    }) {

    const { width } = useWindowDimensions();

    return (
        <div
            style={{
                backgroundColor: color,
                color: text !== undefined ? text : "white"
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
                            {techs.map(tech => <Icon key={`${tech}-icon`} icon={`${tech}`} />)}
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <Image
                                src={image}
                                alt="image"
                                height={width < 500 ? 300 : 500}
                                width={width < 500 ? 330 : 550}
                            />
                        </div>
                    </div>
                </div>
            </Clink>
        </div >
    );
};;;;