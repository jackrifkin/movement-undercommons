import { useState } from 'react';
import styles from './Navigation.module.css'
import Wordmark from '../Wordmark';
import Link from 'next/link';

const SubMenu = ({containerDisplacement, setContainerDisplacement, wordmarkDisplacement, setWordmarkDisplacement}) => {
    const handleMouseLeave = () => {
        setContainerDisplacement(140);
        setWordmarkDisplacement(-140);
    }

    return (
        <div className={styles.subFlexContainer} style={{ top: `${containerDisplacement}px`, transition: 'top 0.5s ease-in-out' }} onMouseLeave={handleMouseLeave}>
            <div className='d-flex flex-column justify-content-end align-items-end' style={{marginRight: '75px', width: '30%'}}>
                <div className={styles.subMenuTextContainer}>
                    <Link href="#" className={`${styles.subMenuText} abolitionRegular`}>Portraits</Link>
                    <Link href="#" className={`${styles.subMenuText} abolitionRegular`}>Process</Link>
                </div>
            </div>
            <div className={styles.wordmarkContainer} style={{position: 'absolute', left: '0', top: `${wordmarkDisplacement}px`, transition: 'top 0.5s ease-in-out'}}>
                <Wordmark color={'var(--temptress)'} width={'500px'} height={'78.125px'}/>
            </div>
        </div>
    )
}

export default function Navigation() {
    const [containerDisplacement, setContainerDisplacement] = useState(140);
    const [wordmarkDisplacement, setWordmarkDisplacement] = useState(-140);

    const handleMouseEnter = () => {
        setContainerDisplacement(0);
        setWordmarkDisplacement(0);
    }

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer} onMouseEnter={handleMouseEnter}>
                <div className={styles.wordmarkContainer}>
                    <Wordmark color={'var(--maize)'} width={'500px'} height={'78.125px'} style={{zIndex: '10', transition: 'fill 1s ease-in-out'}}/>
                </div>
                <div className={styles.menuTextContainer}>
                    <h1 className={`${styles.menu} abolitionRegular`}>Menu</h1>
                </div>
            </div>
            <SubMenu 
                containerDisplacement={containerDisplacement} 
                setContainerDisplacement={setContainerDisplacement} 
                wordmarkDisplacement={wordmarkDisplacement}
                setWordmarkDisplacement={setWordmarkDisplacement}
            />
        </div>
    )
}