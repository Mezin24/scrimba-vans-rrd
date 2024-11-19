import { useEffect, useState } from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import { customFetch } from '../../utils/axios';

export const HostVanDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    const fetchVanDetails = async () => {
      const { data } = await customFetch.get(`/vans?hostId=123&id=${id}`);
      setVan(data[0]);
    };
    fetchVanDetails();
  }, []);

  const activeStyles = {
    color: '#161616',
    textDecoration: 'underline',
    fontWeight: 'bold',
  };
  if (!van) {
    return <h1>Loading...</h1>;
  }
  const { name, price, type, imageUrl } = van;

  return (
    <section>
      <Link to='..' className='back-button' relative='path'>
        &larr; <span>Back to all vans</span>
      </Link>
      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={imageUrl} alt={name} />
          <div className='host-van-detail-info-text'>
            <i className={`van-type ${type} selected`}>{type}</i>
            <h3>{name}</h3>
            <h4>${price}/day</h4>
          </div>
        </div>
        <nav className='host-van-detail-nav'>
          <NavLink
            to='.'
            style={({ isActive }) => (isActive ? activeStyles : null)}
            end
          >
            Details
          </NavLink>
          <NavLink
            to='pricing'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to='photos'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
};
