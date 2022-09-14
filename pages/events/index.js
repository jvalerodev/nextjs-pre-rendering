import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const Events = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={findEvents} />
      <EventList events={events} />
    </>
  );
};

export default Events;