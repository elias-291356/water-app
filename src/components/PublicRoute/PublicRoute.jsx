import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { selectIsLogin, selectToken } from "../../redux/selectors";

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);
  if (!isLogin && token) {
    return <p>...Loading PUBLIC</p>;
  }

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
