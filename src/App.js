import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import { Home } from "./pages";

function App() {
  const { isLoggedIn, token } = useSelector((state) => state.user);
  console.log(isLoggedIn, "isLoggedIn", token);
  return (
    <div className="App">
      <div className="flex w-11/12 m-auto flex-col md:w-10/12">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            // element={!isLoggedIn ? <Navigate replace to="/" /> : <Home />}
            element={!isLoggedIn ? <Home /> : <Home />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
