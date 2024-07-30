import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="bg-home-clr h-full">
      <NavigationBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact-us" Component={ContactUs} />
      </Routes>
    </div>
  );
}

export default App;
