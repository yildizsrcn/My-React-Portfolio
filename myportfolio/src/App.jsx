import { AboutMe } from "./components/AboutMe"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import { Root } from "./components/Root"
import { Work } from "./components/Work"

function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<AboutMe/>}/>
      <Route path="/work" element={<Work/>}/>
    </Route>

  )
)
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
