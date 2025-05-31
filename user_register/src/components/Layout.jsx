import Link from "next/link"
import styles from "../styles/Layout.module.css"
import Header from "./Header"
export default function Layout(props){
    return(
        <div lassName={styles.layout}>
            <div className={styles.header}>
                <Header title={props.title ?? 'One more example'}></Header>
                <Link href="/">Return</Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}