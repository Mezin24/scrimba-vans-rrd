import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HostLayout, Layout } from './components';
import { About, Home, NotFound, VanDetails, Vans } from './pages';
import {
  Dashboard,
  HostVanDetails,
  HostVanInfo,
  HostVanPhotos,
  HostVanPricing,
  HostVans,
  Income,
  Reviews,
} from './pages/Host/';
import { loader as vansLoader } from './pages/Vans';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} loader={vansLoader} />
      <Route path='vans/:id' element={<VanDetails />} />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='vans' element={<HostVans />} />
        <Route path='vans/:id' element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path='photos' element={<HostVanPhotos />} />
          <Route path='pricing' element={<HostVanPricing />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
