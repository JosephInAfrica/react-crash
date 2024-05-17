import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/about' element={<h1>My App</h1>} />)
  // createRoutesFromElements(<Route path='/' element={<h1>My App</h1>} />)

);
const App = () => {
  return <RouterProvider router={router} />
  // return (
  //   <>
  //     <Navbar />
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs />
  //     <script src="js/main.js"></script>
  //  </>
  // )
}

export default App
