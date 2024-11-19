import { Link, Route, Routes } from 'react-router-dom';
import { Home, About, Vans, VanDetails } from './pages';

function App() {
  return (
    <>
      <header>
        <Link className='site-logo' to='/'>
          #vanlife
        </Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetails />} />
      </Routes>
    </>
  );
}

export default App;
