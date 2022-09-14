import Button from '../ui/Button';
import styles from './resultsTitle.module.css';

const ResultsTitle = ({ date }) => {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Events in {readableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
