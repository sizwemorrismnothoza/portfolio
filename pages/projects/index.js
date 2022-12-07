import React from 'react'
import styles from '../../styles/projects.module.css'
import Image from 'next/image'

const index = () => {
  return (
    <>
    <h1>Projects</h1>
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <Image className={styles.projectImage} src='/2 Search 23.png' width={200} height={250} alt='project 1' />
        <p>
          Business owners and professional service providers join the App with a monthly fee.
          Their businesses will be available for App users to browse through to find a service they are looking for.
          Search 23 does not own any of the listed businesses, we are only a platform to reduce time you’d normally spend
          looking for a service provider.
        </p>
        <a href='https://github.com/sizwemorrismnothoza/search-23' className={styles.btn}>Git Hub</a>
      </div>
      <div className={styles.gridItem}>
        <Image className={styles.projectImage} src='/ethute logo.jpg' width={200} height={250} alt='project 2' />
        <p>
          eThute is an online learning and tutoring platform. We connect learnera with tutors and provide quality content
        </p>
        <a href='https://github.com/sizwemorrismnothoza/e-Thute' className={styles.btn}>Git Hub</a>
      </div>
    </div>
  </>
  )
}

export default index