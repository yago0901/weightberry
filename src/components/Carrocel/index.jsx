'use client'
import styles from '../../app/page.module.css'
const Carrocel = () => (
  <section className={styles.carrocel}>
     <div className={styles.container}>
      <div className={styles.title}>
        <h1>Składniki aktywne WeightBerry</h1>
        <p>legendarnych pomocników w walce z nadwagą, aktywujących proces ketozy w 40 minut</p>
      </div>
      <div className={styles.carrocelDetails}>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="władza" src="ingred1.png" />
            <h2>Ananas</h2>
          </div>
          <div>Przyspiesza odchudzanie dzięki bromelainie – enzymowi spalającemu tłuszcze, poprawia trawienie i obniża cholesterol.</div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="władza" src="ingred2.png" />
            <h2>Barberina</h2>
          </div>
          <div>normalizuje procesy trawienne, przyspiesza metabolizm, zawiera dużą ilość składników odżywczych</div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="władza" src="ingred3.png" />
            <h2>Zielona kawa</h2>
          </div>
          <div>aktywizuje metabolizm, pomaga białkom szybciej się rozkładać i jednocześnie nie zamieniać się w tłuszcze</div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="władza" src="ingred4.png" />
            <h2>Guarana</h2>
          </div>
          <div>źródło niezbędnych mikro- i makroelementów, wywołuje uczucie sytości, sprzyja delikatnemu oczyszczaniu jelit.</div>
        </div>
      </div>
    </div>
  </section>
);

export default Carrocel;