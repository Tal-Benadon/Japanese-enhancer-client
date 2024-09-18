import { useState } from 'react'
import styles from './styles.module.scss'
import { ANIMATION_DURATION } from '../../helpers/constants'
const menuPlaceHolders: string[] = ["Home", "About", "Services", "Contact"]

export default function Root() {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null)
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)
    const [isClosingTab, setIsClosingTab] = useState<number | null>(null)

    const handleOnClick = (index: number) => {
        if (clickedIndex === index) {
            setClickedIndex(null)
            setIsClosingTab(index)
            setTimeout(() => {
                setIsClosingTab(null)
            }, ANIMATION_DURATION);
        } else {
            setPreviousIndex(clickedIndex)
            setTimeout(() => {
                setPreviousIndex(null)
            }, ANIMATION_DURATION)
            setClickedIndex(index)
        }
    }







    return (

        <ul className={styles.menu}>
            {menuPlaceHolders.map((tab, index) => {
                return (<li key={index}
                    className={`
                     ${styles.menuItem}
                     ${clickedIndex === index ? styles.clicked : ''} 
                     ${isClosingTab === index ? styles.closing : ''}
                     ${previousIndex === index ? styles.closing : ''}
                     `}
                    onClick={() => handleOnClick(index)}
                >
                    {tab}
                </li>)
            })}

        </ul>
    )
}
