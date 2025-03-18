import styles from "../../app/page.module.css";
const How = () => (
  <section className={styles.how}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>PRACUJEMY 7 DNI W TYGODNIU OD <b>10 </b>DO <b>22</b></h2>
      </div>
      <div className={styles.howDetails}>
        <div className={styles.howItem}>
          <img alt="władza" src="how-list1.png" />
          <div>
            <h1> Złożenie zamówienia </h1>
            <p>Natychmiast po zgłoszeniu skontaktuje się z tobą nasz manager, aby ustalić szczegóły zamówienia.</p>
          </div>
        </div>
        <div className={styles.howItem}>
          <img alt="władza" src="how-list2.png" />
          <div>
            <h1> Dostawa </h1>
            <p>Termin dostawy zależy od regionu, ale nie przekracza 14 dni.Nie martw się o swoje zamówienie!</p>
          </div>
        </div>
        <div className={styles.howItem}>
          <img alt="władza" src="how-list3.png" />
          <div>
            <h1> Opłata </h1>
            <p>Za zamówienie możesz w wygodny sposób zapłacić online kartą bądź paypal. Lub przy odbiorze gotówką i kartą</p>
          </div>
        </div>
        <div className={styles.howItem}>
          <img alt="władza" src="how-list4.png" />
          <div>
            <h1> Gwarancja </h1>
            <p>Dokonując zakupu w naszym sklepie internetowym można być pewnym wysokiej jakości towaru.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default How;
