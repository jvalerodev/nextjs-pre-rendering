import { useRouter } from 'next/router';
import EventContent from '../../components/eventDetail/EventContent';
import EventLogistics from '../../components/eventDetail/EventLogistics';
import EventSummary from '../../components/eventDetail/EventSummary';
import { getEventById } from '../../dummy-data';
import ErrorAlert from '../../components/ui/ErrorAlert';

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  const event = getEventById(id);

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

export default Event;