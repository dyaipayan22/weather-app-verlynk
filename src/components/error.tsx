const Error = ({ message }: { message: string }) => {
  return (
    <div className="capitalize text-center font-semibold text-xl">
      {message}
    </div>
  );
};

export default Error;
