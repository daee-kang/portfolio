import Image from 'next/image';
import styles from '../styles/Card.module.css';
import Clink from './Clink';
import Icon from '../components/Icon';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        image,
        delay
    }) {

    const { width } = useWindowDimensions();
    const [hw, setHw] = useState({ height: 500, width: 550 });

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('enter');
        }
    }, [controls, inView]);

    useEffect(() => {
        if (width < 800) {
            setHw({ height: 600, width: 660 });
        }
        if (width < 550) {
            setHw({ height: 400, width: 440 });
        }
    }, [width]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ type: 'linear', delay: 0.2, duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, x: -100, y: 0, scale: 1 },
                enter: { opacity: 1, x: 0, y: 0, scale: 1 },
            }}
            className={styles.motion}
        >
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
                                    height={hw.height}
                                    width={hw.width}
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </Clink>
            </div >
        </motion.div>

    );
};;;;