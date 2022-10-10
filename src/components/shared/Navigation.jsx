import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/hocs">Hocs</Link>
        </li>
        <li>
          <Link to="/refs">Refs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
