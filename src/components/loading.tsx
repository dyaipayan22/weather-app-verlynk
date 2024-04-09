import { AiOutlineLoading } from 'react-icons/ai';
const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <AiOutlineLoading className="h-8 w-8 animate-spin" />
      <span className="text-lg font-medium">Loading</span>
    </div>
  );
};

export default Loading;
