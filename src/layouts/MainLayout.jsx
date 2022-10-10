import PropTypes from 'prop-types';
import Navigation from '../components/shared/Navigation';

function MainLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
