import React, { FC, useEffect } from "react";
import './protected-route.scss';
import {
  Redirect,
  Route,
  RouteProps,
  useLocation
} from "react-router-dom";
import { useSelector } from "../../utils/hooks";
import { useDispatch } from "react-redux";
import { GET_DATE_MOTHER_REQUEST, GET_DATE_MOTHER_SUCCESS } from "../../services/actions/mother/action-type-mother";

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
} & RouteProps;

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ onlyUnAuth = false, children, ...rest }) => {
  const isAuth = useSelector((store) => store.mother.isAuth);
  const location = useLocation<{ from: Location }>();
  console.log(isAuth);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: GET_DATE_MOTHER_REQUEST
  //   });
  //   dispatch({
  //     type: GET_DATE_MOTHER_SUCCESS
  //   });
  // }, []);

  if (onlyUnAuth && isAuth) {
    const { from } = location.state || { from: { pathname: "/" } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  // if (!onlyUnAuth && !isAuth) {
  //   return (
  //     <Route {...rest}>
  //       <Redirect to={{ pathname: "/main", state: { from: location } }} />
  //     </Route>
  //   );
  // };

  return <Route {...rest}>{children}</Route>;
};
