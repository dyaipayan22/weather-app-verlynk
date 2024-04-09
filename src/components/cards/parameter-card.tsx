import { IconType } from 'react-icons';

interface ParameterProps {
  label: string;
  value: number;
  unit?: string;
  icon?: IconType;
}

const Parameter: React.FC<ParameterProps> = ({
  label,
  value,
  unit,
  icon: Icon,
}) => {
  return (
    <div className="w-full flex items-center justify-between rounded-lg p-4 gap-6 bg-white/30">
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-xl font-bold">{value}&nbsp;</span>
          <span className="font-semibold">{unit}</span>
        </div>
        <h1 className="text-lg font-semibold">{label}</h1>
      </div>
      {Icon && <Icon className="h-10 w-10" />}
    </div>
  );
};

export default Parameter;
