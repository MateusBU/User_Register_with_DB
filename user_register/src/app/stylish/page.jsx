import styles from '../../styles/Stylish.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';

//to use local css is necessary import the file and
//use className or oder tag like this one className={styles.title}

export default function Stylish(){
    return (
        <Layout title="CSS Example">
            <div className={styles.title}> 
               <h1>Style using CSS modules</h1>
            </div>
        </Layout>
    );
}