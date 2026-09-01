import { NavLink, useNavigate, useNavigation, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigation = useNavigate();

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}
      {/* <NavLink to="/"> */}
        <button onClick={() => navigation(-1)}>Go Back</button>
      {/* </NavLink> */}
    </div>
  );
};
