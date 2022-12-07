import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sizwe Mnothoza</title>
      </Head>
      <div>
        <p className={styles.title}>Welcome to my website</p>
        <p className={styles.text}>I am excited to showcase my skills and projects</p>
        <Link href="/projects/">
          <a className={styles.btn}>View Projects</a>
        </Link>
      </div>
    </>
  );
}
