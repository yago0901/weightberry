"use client";
import styles from "../../app/page.module.css";
const Cetose = ({scrollToForm}) => (
  <section className={styles.cetose}>
    <div className={styles.containerCatose}>
      <div className={styles.cetoseRight}>
        <img className={styles.cetoseImg} alt="władza" src="block_2-paint.png" />
      </div>
      <div className={styles.cetoseLeft}>
        <div className={styles.authorityDetails}>
          <h1>
            <b>CO MÓWIĄ EKSPERCI</b> O WeightBerry:
          </h1>
          <div>
            <p>
              <b>Tomasz Andrzejewski</b> dietetyk centrum medycznego "Żywienie,
              Zdrowie i Uroda"
            </p>
            <p>
              Podczas ketozy tłuszcze dzielą się na kwasy tłuszczowe i
              glicerynę, które następnie są przekształcane w ciała ketonowe.
              <b>
                Jednak ketoza uruchamia się tylko w przypadku całkowitego
                wyczerpania zapasów glikogenu w wątrobie i tkance mięśniowej,
              </b>
              co zazwyczaj dzieje się w ciągu 7 - 10 dni.
            </p>
            <p>
              Aby przyspieszyć ten proces, a tym samym spalanie tłuszczu polecam
              swoim pacjentom <b> biododatek WeightBerry.</b> Ten środek
              doskonale wzmacnia organizm podczas
              <b>WeightBerryy:</b>wzbogaca w witaminy, hamuje uczucie głodu,
              usuwa zmęczenie i niepokój.Ale główną właściwością WeightBerry
              jest blokowanie wchłaniania węglowodanów, które rozkładają się do
              glukozy (cukru), są wchłaniane do krwi i prowadzą do nadwagi.
            </p>
          </div>
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

export default Cetose;
