'use client'
import styles from "../../app/page.module.css";
const Form = () => (
  <section className={styles.faqForm}>
     <div className={styles.container}>
      <div className={styles.title}>
        <h1>Nie przegap promocji</h1>
      </div>
      <div className={styles.faqFormDetails}>
        <div className={styles.faqFormItem}>
          <div className={styles.containerForm}>
            <img src="product-form.png" alt="Produto" />
          </div>
        </div>
        <form className={styles.faqFormItem}>
          <div className={styles.containerForm}>
            <img className={styles.faqFormGif} src="50off.gif" alt="Produto"/>
            <img className={styles.faqFormImage} src="product.png" alt="Produto"/>
            <h2>ZŁOŻENIE ZAMÓWIENIA</h2>

            <input className="input" type="text" placeholder="Imię" required />
            <input className="input" type="tel" placeholder="Telefon" required />

            <p className={styles.price}>
              <span className={styles.oldPrice}>Stara cena: 310 PLN</span>
            </p>
            <p>
              Nowa cena: 155 PLN
            </p>
            <div className={styles.containerBtn}>
              <button type="submit" className={styles.heroBtn}><b>ZAMÓW</b></button>
            </div>
            <div className={styles.deliveryInfo}>
              <img src="delivery2.png" alt="Entrega"/>
              <span>Sprawdź koszt dostawy u operatora</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Form;
