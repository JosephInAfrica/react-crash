import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
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
