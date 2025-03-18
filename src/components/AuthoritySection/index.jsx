'use client'
import styles from '../../app/page.module.css'
const AuthoritySection = ({scrollToForm}) => (
  <section className={styles.authority}>
    <div className={styles.containerFlex}>
      <div className={styles.right}>
        <div className={styles.authorityDetails}>
          <h1><b>CO MÓWIĄ EKSPERCI</b> O WeightBerry:</h1>
          <div>
            <p><b>Tomasz Andrzejewski</b> dietetyk centrum medycznego "Żywienie, Zdrowie i Uroda"</p>
            <p>Podczas ketozy tłuszcze dzielą się na kwasy tłuszczowe i glicerynę, które następnie są przekształcane w ciała ketonowe...</p>
          </div>
        </div>
        <div className={styles.containerButton}>
          <button onClick={scrollToForm} className={styles.heroBtn}><b>otrzymać ofertę</b></button>
        </div>
      </div>
      <div className={styles.left}>
        <img alt="władza" src="doctor3.png" />
      </div>
    </div>
  </section>
);

export default AuthoritySection;