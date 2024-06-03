import "./App.css";
import { useEffect } from "react";
import { browserRouter, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./scenes/home/home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    Window.ScrollTo(0.0);
  }, [pathname]);

  return null;
};

function App() {
  return <div className="App">
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
