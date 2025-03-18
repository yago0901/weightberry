'use client'
import styles from '../../app/page.module.css'
const BenefitsItem = ({ imgSrc, title, text, scrollToForm }) => (
  <div className={styles.benefitsFirstItem}>
    <div className={styles.benefitsFirstImage}>
      <img alt="Weight Berry" src={imgSrc} />
    </div>
    <div className={styles.benefitsFirstDetails}>
      <div className={styles.benefitsFirstTexts}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.benefitsFirstButton}>
        <button onClick={scrollToForm} className={styles.heroBtn}><b>otrzymać ofertę</b></button>
      </div>
    </div>
  </div>
);

const BenefitsSection = ({scrollToForm}) => (
  <section className={styles.benefitsFirst}>
    <div className={styles.container}>
      <div className={styles.benefitsGrid}>
        <BenefitsItem 
          imgSrc="giphy.gif" 
          title="Przyspieszone spalanie tłuszczu" 
          text="Aktywuje metabolizm i wspomaga ketozę w szybkim tempie." 
          scrollToForm={scrollToForm}
        />
        <BenefitsItem 
          imgSrc="folha.gif" 
          title="Naturalne składniki" 
          text="Bez hormonów i szkodliwych substancji syntetycznych." 
          scrollToForm={scrollToForm}
        />
      </div>
    </div>
  </section>
);

export default BenefitsSection;