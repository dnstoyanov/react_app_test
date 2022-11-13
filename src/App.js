import { Layout } from "./layout/Layout";
import { ContactUs } from "./pages/ContactUs";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import { About } from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contacts" element={<ContactUs />}></Route>
        <Route path="/custom-page" element={<ContactUs />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
