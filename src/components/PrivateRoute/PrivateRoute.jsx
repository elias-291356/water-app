import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

import { selectIsLogin, selectToken } from "../../redux/selectors";

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <p>...Loading PRIVAT</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
