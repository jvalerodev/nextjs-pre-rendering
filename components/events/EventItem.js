import Image from 'next/image';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import Button from '../ui/Button';
import styles from './eventItem.module.css';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const EventItem = ({ event }) => {
  const { title, image, date, location, id } = event;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={styles.item}>
      <Image
        src={image}
        alt={title}
        width={256}
        height={224}
      />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>

          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>

          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;