// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import DetailView from "./components/DetailView";

const App = () => (
  <Router>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details/:date" element={<DetailView />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
