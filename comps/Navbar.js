import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href='/'>
                    <Image className={styles.profile} src='/sizwe-profile-pic.jpg' width={100} height={100} alt='profile' />
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/About"><a>About</a></Link>
            <Link href='/projects'><a>Projects</a></Link>
            <Link href="/Contact"><a>Contact</a></Link>
        </nav>
    )
}

export default Navbar