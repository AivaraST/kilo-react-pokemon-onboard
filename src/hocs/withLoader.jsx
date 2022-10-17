/* eslint-disable react/jsx-props-no-spreading */
import Spinner from '../components/Spinner';

function withLoader(Component) {
  return function withLoaderHoc(props) {
    if (props.loading) {
      return <Spinner />;
    }

    return <Component {...props} />;
  };
}

export default withLoader;
