import { Link } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/" end>
            SharedLayout
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
