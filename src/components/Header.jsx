import { NavLink } from 'react-router-dom';

export const Header = () => {
  const activeStyles = {
    color: '#161616',
    textDecoration: 'underline',
    fontWeight: 'bold',
  };

  return (
    <header>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        className='site-logo'
        to='/'
      >
        #vanlife
      </NavLink>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to='/host'
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to='/vans'
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};
