import styled from '@emotion/styled';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Logo from './yollerhorn.svg';

const StyledLogo = styled(Logo)`

    * {
      fill: #ffdd33;
    }
`;


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.logo}>
            <StyledLogo width={72} height={72} />
          </div>
        <h1 className={styles.title}>
          Yollerhorn
        </h1>
        <p className={styles.description}>
          Yollerhorn was a website started by Darren Caulley and Thomas Constantine Moore in 2014.
        </p>
        <p className={styles.description}>
          We envisioned a sort of IBDB for downtown theater,
          an event network for plays put on for one night only in someone's backyard in Bushwick,
          for new works and new performers.
          It was pretty cool.
        </p>
        <p className={styles.description}>
          We're working on other projects now, and they're pretty cool too.
        </p>
        <div className={styles.grid}>
          <a href="https://bend.green" className={styles.card}>
            <h2>Bend &rarr;</h2>
            <p>One-click carbon assessments</p>
          </a>
          <a href="https://network.demandstar.com/" className={styles.card}>
            <h2>DemandStar &rarr;</h2>
            <p>Deliver higher-quality projects for less</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
        <a
          href="https://github.com/thomasmost"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thomas
        </a>

        <a
          href="https://www.linkedin.com/in/darrencaulley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Darren
        </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
