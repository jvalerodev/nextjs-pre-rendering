import EventContent from '../../components/eventDetail/EventContent';
import EventLogistics from '../../components/eventDetail/EventLogistics';
import EventSummary from '../../components/eventDetail/EventSummary';
import { getEventById, getFeaturedEvents } from '../../helpers/apiUtil';

const Event = ({ event }) => {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />

      <EventLogistics
        event={event}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const event = await getEventById(id);

  if (Object.keys(event).length === 0) {
    return { notFound: true };
  }

  return {
    props: { event },
    revalidate: 30
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({ params: { id: event.id } }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export default Event;