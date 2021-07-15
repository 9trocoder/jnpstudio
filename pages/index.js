import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home__gallery}>
        <div className={styles.img}>
          <img src="/1.jpg"/>
          <p>Linda uzak</p>
        </div>
        <div className={styles.img}>
          <img src="/2.jpg"/>
          <p>Naso Ibi</p>
        </div>
        <div className={styles.img}>
          <img src="/3.jpg"/>
          <p>Nawebi Dat</p>
        </div>
        <div className={styles.img}>
          <img src="/4.jpg"/>
          <p>Savas Orca</p>
        </div>
        <div className={styles.img}>
          <img src="/5.jpg"/>
          <p>Okan Vocano</p>
        </div>
        <div className={styles.img}>
          <img src="/6.jpg"/>
          <p>Sun Dshade</p>
        </div>
        <div className={styles.img}>
          <img src="/7.jpg"/>
          <p>Whatsdat name</p>
        </div>
        <div className={styles.img}>
          <img src="/8.jpg"/>
          <p>James jnpstudio</p>
        </div>
       
      </div>
    </div>
  )
}
