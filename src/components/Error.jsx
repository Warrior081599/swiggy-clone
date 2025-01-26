import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops..</h1>
      <h3>Something Went Wrong..</h3>
      <p>
        {error.status} : {error.statusText}
      </p>
    </div>
  );
};

export default Error;
