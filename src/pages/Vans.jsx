import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { customFetch } from '../utils/axios';

export const Vans = () => {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await customFetch.get('/vans');
      setVans(data);
    };
    fetchData();
  }, []);

  if (!vans) {
    return <h1>Loading...</h1>;
  }

  const renderVans = vans.map((van) => (
    <article key={van.id} className='van-tile'>
      <Link to={`${van.id}`}>
        <img alt={van.name} src={van.imageUrl} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </article>
  ));

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      {/* <div className='van-list-filter-buttons'>{filters}</div> */}
      <div className='van-list'>{renderVans}</div>
    </div>
  );
};
