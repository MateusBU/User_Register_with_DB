import Link from "next/link"
import styles from "../styles/Layout.module.css"
import Header from "./Header"
export default function Layout(props){
    console.log(props.color);
    return(
        <div className={styles.layout}>
            <div className={styles.header} style={{background: `linear-gradient(to right, black, ${props.color})`}} >
                <Header title={props.title ?? 'One more example'}></Header>
                <Link href="/">Return</Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}