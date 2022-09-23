import { useRouter } from 'next/router';
import SEO from '../../components/SEO';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../helpers/apiUtil';

const Events = ({ events }) => {
  const router = useRouter();

  const findEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <SEO title="All Events" description="Find a lot of great events that you can relate to." />
      <EventsSearch onSearch={findEvents} />
      <EventList events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: { events },
    revalidate: 60
  };
};

export default Events;