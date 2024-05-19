import { Route, Routes } from "react-router-dom";
import "./index.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import HomePage from "./pages/HomePage/HomePage";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/" element={<HomePage />} /> */}
          </Route>

          <Route element={<PublicRoute />}>
            <Route index element={<WelcomePage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="signin" element={<SigninPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
