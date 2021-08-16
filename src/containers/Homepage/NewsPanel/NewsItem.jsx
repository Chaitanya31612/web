import styles from './newspanel.module.css';

const NewsItem = ({ title, description, date, month }) => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.newsDate}>
        <p>{date}</p>
        <p>{month}</p>
      </div>
      <div className={styles.newsContent}>
        <h4 className={styles.newsTitle}>{title}</h4>
        <p className={styles.newsDescription}>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
