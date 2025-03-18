import styles from '../../app/page.module.css'
const ReviewItem = ({ imgSrc, children }) => (
  <div className={styles.reviewsItem}>
    <img alt="Weight Berry" src={imgSrc} />
    <p>{children}</p>
  </div>
);

const ReviewsSection = () => (
  <section className={styles.reviews}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h1><b>CO MÓWIĄ KOBIETY</b></h1>
      </div>
      <div className={styles.reviewsDetails}>
        <ReviewItem imgSrc="review1.jpg">
          <b>" WeightBerry</b> było dla mnie ratunkiem! Nigdy nie wierzyłam, że mogę jeść to, co lubię, i chudnąć. Miałam 95 kg przy 29 latach...
        </ReviewItem>
        <ReviewItem imgSrc="review2.jpg">
          " Zawsze byłam na diecie – głodówki, problemy ze snem i skórą to była codzienność..."
        </ReviewItem>
        <ReviewItem imgSrc="review3.jpg">
          " Jak mało wiemy o swoim organizmie. <b>Jestem leniwa</b> i zamiast na siłownię, wybierałam głodówki..."
        </ReviewItem>
      </div>
    </div>
  </section>
);

export default ReviewsSection;