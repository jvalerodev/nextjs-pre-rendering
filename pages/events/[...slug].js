import ErrorAlert from '../../components/ui/ErrorAlert';
import Button from '../../components/ui/Button';
import ResultsTitle from '../../components/events/ResultsTitle';
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../helpers/apiUtil';

const FilteredEvents = ({ hasError, filteredEvents, date }) => {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const { year, month } = date;
  const dateEvent = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={dateEvent} />
      <EventList events={filteredEvents} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const year = Number(slug[0]);
  const month = Number(slug[1]);

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return {
      props: { hasError: true }
    };
  }

  const filteredEvents = await getFilteredEvents(year, month);

  return {
    props: {
      filteredEvents,
      date: { year, month }
    }
  };
};

export default FilteredEvents;