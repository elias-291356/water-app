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
      {/* <Link to="/signup">SignupPage</Link> */}
      {/* <Link to="/products">Products</Link> */}
      {/* </nav> */}

      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  );
}

export default App;
