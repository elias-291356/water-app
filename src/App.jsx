import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">SharedLayout</Link>
          {/* <Link to="/sign-up">SignupPage</Link> */}
          {/* <Link to="/products">Products</Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route path="/sign-up" element={<SignupPage />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
