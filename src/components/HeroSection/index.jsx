'use client'
import styles from '../../app/page.module.css'

const HeroSection = ({scrollToForm}) => (
  <header className={styles.hero}>
    <video autoPlay loop muted playsInline>
      <source src="//cdn.ahacdu.com/81/videos/1551740400/ketoguru.mp4" type="video/mp4" />
      <source src="//cdn.ahacdu.com/81/videos/1551740400/ketoguru.webm" type="video/webm" />
      Seu navegador não suporta a tag de vídeo.
    </video>
    <div className={styles.heroTitle}>
      <p>Po raz pierwszy w Polsce</p>
      <h1><b>TAK JESZCZE NIE</b> CHUDŁAŚ</h1>
      <p>nie musisz głodować</p>
    </div>
    <div className={styles.containerFlex}>
      <div className={styles.right}>
        <div className={styles.rightText}>
          <p>twoja keto dieta</p>
          <p>75% pożywienia - <b>TŁUSZCZE</b></p>
          <p>20% pożywienia - <b>BIAŁKA</b></p>
          <p>20% pożywienia - <b>WĘGLOWODANY</b></p>
        </div>
        <p><b>+ WeightBerry</b> Obowiązkowy składnik diety</p>
        <div className={styles.containerButton}>
          <button onClick={scrollToForm} className={styles.heroBtn}><b>otrzymać ofertę</b></button>
        </div>
      </div>
      <div className={styles.left}>
        <img alt="Weight Berry" src="product.png" />
      </div>
    </div>
  </header>
);

export default HeroSection;
