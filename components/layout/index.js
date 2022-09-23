import SEO from '../SEO';
import Header from './Header';

const Layout = props => {
  return (
    <>
      <SEO title="NextJS Events" description="Find a lot of great events that you can relate to." />

      <Header />

      <main>
        {props.children}
      </main>
    </>
  );
};

export default Layout;