import { useNavigate } from 'react-router-dom';
import DashboardCard from '../components/cards/dashboard-card';
import Button from '../components/ui/button';
import { useAppSelector } from '../hooks/useAppSelector';

const Dashboard = () => {
  const navigate = useNavigate();
  const { cities } = useAppSelector((state) => state.dashboard);

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <>
      {cities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4">
          {cities.map((city, index) => (
            <DashboardCard city={city} key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="font-bold text-2xl">
            No cities in your dashboard
          </span>
          <Button label="Go back Home" onClick={navigateToHome} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
