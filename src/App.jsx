import { AboutMe } from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Root } from "./components/Root";
import { Work } from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<AboutMe />} />
            <Route path="/work" element={<Work />} />
            <Route path="/resume" element={<Resume />} />{" "}
            {"../../Resume/resume.pdf"}
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
