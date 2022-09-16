import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/apiUtil';

const Home = ({ featuredEvents }) => {
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { featuredEvents },
    revalidate: 1800
  };
};

export default Home;