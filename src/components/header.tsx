import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-16 shadow-md flex items-center justify-between px-8">
      <Link to="/">
        <h1 className="text-2xl font-bold tracking-wide">WeatherNow</h1>
      </Link>
      <Link to="/dashboard">
        <span className="font-semibold">Dashboard</span>
      </Link>
    </div>
  );
};

export default Header;
