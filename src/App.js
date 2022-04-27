import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/blogs/:id" element={<BlogDetails />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
