import EventContent from '../../components/eventDetail/EventContent';
import EventLogistics from '../../components/eventDetail/EventLogistics';
import EventSummary from '../../components/eventDetail/EventSummary';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getEventById, getAllEvents } from '../../helpers/apiUtil';

const Event = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
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

  return {
    props: { event }
  };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();
  const paths = events.map(event => ({ params: { id: event.id } }));

  return {
    paths,
    fallback: false
  };
};

export default Event;