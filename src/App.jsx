import { Route, Routes } from 'react-router-dom';
import { Home, About, Vans, VanDetails } from './pages';
import { Layout, HostLayout } from './components';
import {
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanDetails,
  HostVanPricing,
  HostVanPhotos,
  HostVanInfo,
} from './pages/Host/';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
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
      </Route>
    </Routes>
  );
}

export default App;
