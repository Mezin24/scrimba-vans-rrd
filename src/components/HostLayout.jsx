import { Outlet, NavLink } from 'react-router-dom';

export const HostLayout = () => {
  return (
    <>
      <nav className='host-nav'>
        <NavLink
          to='.'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Income
        </NavLink>
        <NavLink
          to='vans'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
