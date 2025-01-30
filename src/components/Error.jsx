import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Oops..</h1>
      <h3 className="text-xl text-gray-700 mt-2">Something Went Wrong..</h3>
      <p className="mt-4 text-gray-600">
        {error.status} : {error.statusText}
      </p>
    </div>
  );
};

export default Error;
