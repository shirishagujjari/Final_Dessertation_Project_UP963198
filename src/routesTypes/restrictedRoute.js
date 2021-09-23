import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../Context";

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
  const { Auth } = useContext(LoginContext);
  console.log(Auth);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        Auth && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
