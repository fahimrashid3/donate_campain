import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>something is wrong</p>
      <NavLink to="/">Go to home</NavLink>
    </div>
  );
};

export default ErrorPage;
