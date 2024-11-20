import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { customFetch } from '../utils/axios';

export const Vans = () => {
  const [vans, setVans] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

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

  const filterTypes = [...new Set(vans.map((van) => van.type)), 'all vans'];

  const filters = filterTypes.map((item) => (
    <Link
      className={`van-type ${item === 'all vans' ? 'clear-filters' : item} ${
        typeFilter === item ? 'selected' : null
      }`}
      key={item}
      to={item === 'all vans' ? '.' : `.?type=${item}`}
    >
      {item}
    </Link>
  ));

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const renderVans = filteredVans.map((van) => (
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
      <div className='van-list-filter-buttons'>{filters}</div>
      <div className='van-list'>{renderVans}</div>
    </div>
  );
};
