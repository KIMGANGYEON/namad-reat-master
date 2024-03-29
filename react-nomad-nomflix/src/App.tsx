import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";
import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies/:id" element={<Home />} />
          <Route path="/tv" element={<Tv />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </>
      </Routes>
    </Router>
  );
}

export default App;
