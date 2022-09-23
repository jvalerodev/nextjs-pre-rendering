import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SEO from '../../components/SEO';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getFilteredEvents } from '../../helpers/apiUtil';

const FilteredEvents = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [filteredEvents, setFilteredEvents] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      if (slug) {
        const events = await getFilteredEvents(Number(slug[0]), Number(slug[1]));
        setFilteredEvents(events);
      }
    };

    getEvents();
  }, [slug]);


  if (!filteredEvents) {
    return (
      <>
        <SEO title="Filtered Events" description="A list of filtered events." />
        <p className="center">Loading...</p>
      </>
    );
  }

  const year = Number(slug[0]);
  const month = Number(slug[1]);

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return (
      <>
        <SEO title="Filtered Events" description={`All events for ${month}/${year}`} />

        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (filteredEvents.length === 0) {
    return (
      <>
        <SEO title="Filtered Events" description={`All events for ${month}/${year}`} />

        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <SEO title="Filtered Events" description={`All events for ${month}/${year}`} />
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEvents;