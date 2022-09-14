import AddressIcon from '../icons/AddressIcon';
import DateIcon from '../icons/DateIcon';
import LogisticsItem from './LogisticsItem';
import styles from './eventLogistics.module.css';

const EventLogistics = ({ event, imageAlt }) => {
  const { date, location, image } = event;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const addressText = location.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={image} alt={imageAlt} />
      </div>

      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{readableDate}</time>
        </LogisticsItem>

        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;