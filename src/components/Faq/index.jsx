'use client'
import styles from "../../app/page.module.css";
const Faq = ({scrollToForm}) => (
  <section className={styles.how}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>JAKIEŚ PYTANIA?</h1>
        <h1>Pracujemy dla ciebie</h1>
        <p>Wsparcie klienta online 7 dni w tygodniu. Skontaktuj się z nami jeśli masz pytania.</p>
      </div>
      <div className={styles.faqFormDetails}>
        <div className={styles.faqFormItem}>
          <details>
            <summary>
              Czy produkt jest odpowiedni dla wegetarian i wegan?
            </summary>
            <div>
              Odpowiedź: Tak, WeightBerry nie zawiera żadnych składników pochodzenia zwierzęcego i jest zgodny z zasadami diety wegetariańskiej i wegańskiej. Produkt nie był
              testowany na zwierzętach.
            </div>
          </details>
          <details>
            <summary>
              Czy WeightBerry wpływa na równowagę hormonalną?
            </summary>
            <div>
              Odpowiedź: Nie, WeightBerry nie zawiera substancji, które mogłyby zaburzyć równowagę hormonalną. Jest bezpieczny do stosowania bez obaw o wpływ na hormony.
            </div>
          </details>
          <details>
            <summary>
              Jak długo powinno się stosować WeightBerry?
            </summary>
            <div>
              Odpowiedź: Rekomendujemy stosowanie WeightBerry przez 30 dni. Po tym okresie, jeśli chcesz kontynuować, możesz zrobić tygodniową przerwę, a następnie ponownie zacząć
              stosować produkt.
            </div>
          </details>
          <details>
            <summary>
              Czy dieta keto jest konieczna do osiągnięcia wyników z WeightBerry?
            </summary>
            <div>
              Odpowiedź: Choć WeightBerry wspomaga produkcję ciał ketonowych i przyspiesza spalanie tłuszczu, efekty będą bardziej zauważalne, gdy stosujesz dietę keto, gdzie ilość
              tłuszczu jest większa niż węglowodanów.
            </div>
          </details>
          <details>
            <summary>
              Jak działa WeightBerry na proces spalania tłuszczu?
            </summary>
            <div>
              Odpowiedź: WeightBerry wspomaga organizm w przejściu w stan ketozy, gdzie tłuszcz jest zamieniany na energię. Dzięki temu wspomaga efektywne spalanie tłuszczu.
            </div>
          </details>
          <details>
            <summary>
              Czy mogę stosować WeightBerry, jeśli nie jestem na diecie keto?
            </summary>
            <div>
              Odpowiedź: Tak, możesz stosować WeightBerry nawet jeśli nie jesteś na diecie keto. Niemniej jednak, dieta keto przyspiesza procesy spalania tłuszczu, więc stosowanie
              WeightBerry w połączeniu z tą dietą przynosi najlepsze efekty.
            </div>
          </details>
        </div>
        <div className={styles.containerButton}>
          <button onClick={scrollToForm} className={styles.heroBtn}><b>otrzymać ofertę</b></button>
        </div>
      </div>
    </div>
  </section>
);

export default Faq;
