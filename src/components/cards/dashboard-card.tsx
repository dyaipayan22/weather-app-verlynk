import React from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Container from '../container';
import { setCurrentCity } from '../../features/weatherSlice';
import { MdOutlineOpenInNew } from 'react-icons/md';

interface DashboardCardProps {
  currentCity: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ currentCity }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCurrentCity(currentCity));
  };

  return (
    <Container>
      <div className="w-full flex items-center justify-center gap-4 md:px-10">
        <span className="text-3xl font-bold">{currentCity}</span>
        <MdOutlineOpenInNew
          onClick={handleClick}
          className="h-6 w-6 cursor-pointer"
        />
      </div>
    </Container>
  );
};

export default DashboardCard;
