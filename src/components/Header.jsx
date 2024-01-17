import styles from '../css/header.module.css'

function Heading() {
    return <span>Hello</span>
}

export function Paragraph() {
    return <p>This is a paragraph.</p>
}

export default function Header() {
    return <h1 className={styles.h1}>This is weird!</h1>
}