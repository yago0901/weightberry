"use client";
import styles from "../../app/page.module.css";
const Cetose2 = ({scrollToForm}) => (
  <section className={styles.cetose}>
    <div className={styles.containerCatose}>
      <div className={styles.cetoseLeft}>
        <div className={styles.authorityDetails}>
          <h1>BIODODATEK KETO GURU</h1>
          <p>Zwiększa poziom ketonów w organizmie dla spalania tłuszczu</p>
        </div>
      </div>
      <div className={styles.cetoseLeft}>
        <img alt="władza" src="pack.png" />
      </div>
      <div className={styles.cetoseLeft}>
        <img className={styles.faqFormImage} alt="władza" src="cetose-girl.png" />
      </div>
      <div className={styles.cetoseLeft}>
        <div className={styles.authorityDetails}>
          <p>
            <b>Minimalizacja węglowodanów w diecie</b>
          </p>
        </div>
        <div className={styles.authorityDetails}>
          <p>
            <b>Spadek glukozy we krwi</b>
          </p>
        </div>
        <div className={styles.authorityDetails}>
          <p>
            <b>Nie ma potrzeby wytwarzania insuliny</b>
          </p>
        </div>
        <div className={styles.authorityDetails}>
          <p>
            <b>Brak insuliny — brak uczucia głodu</b>
          </p>
        </div>
        <div className={styles.containerButton}>
          <button onClick={scrollToForm} className={styles.heroBtn}>
            <b>otrzymać ofertę</b>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Cetose2;
