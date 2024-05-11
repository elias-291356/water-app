import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";

function App() {
  return (
    <>
      {/* <nav>
          <Link to="/"></Link> */}
      {/* <Link to="/sign-up">SignupPage</Link> */}
      {/* <Link to="/products">Products</Link> */}
      {/* </nav> */}

      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
      </Routes>
    </>
  );
}

export default App;
