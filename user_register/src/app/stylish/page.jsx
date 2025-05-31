import styles from '../../styles/Stylish.module.css';
import Link from 'next/link';

//to use local css is necessary import the file and
//use className or oder tag like this one className={styles.title}

export default function Stylish(){
    return (
        <div>
            <div className={styles.title}> 
                <Link href="/">Return</Link>
               <h1>Style using CSS modules</h1>
            </div>
        </div>
    );
}