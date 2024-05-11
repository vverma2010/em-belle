import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { useSelector } from "react-redux";
import { Home, NotFound, ProductDescription, SelectedCategory } from "./pages";
import { ConfigProvider } from "antd";
import { useEffect } from "react";

function App() {
  const { isLoggedIn, token } = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            colorPrimary: "#A18A68",
            algorithm: true,
          },
          Button: {
            colorPrimary: "#A18A68",
            algorithm: true,
          },
          Switch: {
            colorPrimary: "#A18A68",
            algorithm: true,
          },
          Slider: {
            colorPrimary: "#A18A68",
            algorithm: true,
          },
          Select: {
            colorPrimary: "#A18A68",
            algorithm: true,
          },
          Rate: {
            colorPrimary: "#A18A68",
            algorithm: true,
          },
        },
      }}
    >
      <div className="App">
        <div className="flex w-11/12 max-w-screen-2xl m-auto flex-col md:w-10/12">
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              // element={!isLoggedIn ? <Navigate replace to="/" /> : <Home />}
              element={!isLoggedIn ? <Home /> : <Home />}
            />
            <Route
              exact
              path="/jewellery/:type"
              element={<SelectedCategory />}
            />
            <Route
              exact
              path="/jewellery/:type/:sku"
              element={<ProductDescription />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
