"use client";
import { useState } from "react";
import styles from "../../app/page.module.css";
import formatPolishPhone from "../../utils/validationPhone";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (formData.name.length < 4) {
      alert("Nazwa musi składać się z co najmniej 4 liter");
      return;
    }

    const formattedPhone = formatPolishPhone(formData.phone);

    if (!formattedPhone) {
      alert("Nieprawidłowy numer telefonu, wymagane 9 cyfr.");
      return;
    }

    try {
      const res = await fetch("/api/forms", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formData.name, phone: formData.phone }),
      });

      const data = await res.json();

      setResponseMessage(data.message || data.error);

      if (res.ok) {
        alert("Pedido enviado com sucesso!");
        setFormData({ name: "", phone: "" });
      } else {
        alert(`Erro: ${data.error}`);
      }
    } catch (error) {
      alert("Błąd wysyłania zamówienia. Spróbuj ponownie.");
    }
  };

  return (
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
          <form className={styles.faqFormItem} onSubmit={handleSubmit}>
            <div className={styles.containerForm}>
              <img
                className={styles.faqFormGif}
                src="50off.gif"
                alt="Produto"
              />
              <img
                className={styles.faqFormImage}
                src="product.png"
                alt="Produto"
              />
              <h2>ZŁOŻENIE ZAMÓWIENIA</h2>

              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Imię"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <p className={styles.price}>
                <span className={styles.oldPrice}>Stara cena: 310 PLN</span>
              </p>
              <p>Nowa cena: 155 PLN</p>
              <div className={styles.containerBtn}>
                <button type="submit" className={styles.heroBtn}>
                  <b>ZAMÓW</b>
                </button>
              </div>
              <div className={styles.deliveryInfo}>
                <img src="delivery2.png" alt="Entrega" />
                <span>Sprawdź koszt dostawy u operatora</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
