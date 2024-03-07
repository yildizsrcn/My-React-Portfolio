import { AboutMe } from "./components/AboutMe"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import { Root } from "./components/Root"
import { Work } from "./components/Work"
import Resume  from "./components/Resume";
import Contact from "./components/Contact";

function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<AboutMe/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/resume" element={<Resume /> }/> {'../../Resume/resume.pdf'}
      <Route path="/contact" element={<Contact /> }/> 
    </Route>

  )
);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App
