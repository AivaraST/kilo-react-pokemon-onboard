/* eslint-disable react/jsx-props-no-spreading */
import Spinner from '../components/Spinner';

function withLoader(Component) {
  return function withLoaderHoc(props) {
    if (props.isLoading) {
      return <Spinner />;
    }
    return <Component {...props} />;
  };
}

export default withLoader;
