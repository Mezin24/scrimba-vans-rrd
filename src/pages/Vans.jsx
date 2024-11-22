import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../utils/getVans';

export const Vans = () => {
  const [vans, setVans] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        console.log('Something went wrong');
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  const filterTypes = [...new Set(vans.map((van) => van.type))];
  if (typeFilter) {
    filterTypes.push('all vans');
  }

  // const filters = filterTypes.map((item) => (
  //   <Link
  //     className={`van-type ${item === 'all vans' ? 'clear-filters' : item} ${
  //       typeFilter === item ? 'selected' : null
  //     }`}
  //     key={item}
  //     to={item === 'all vans' ? '.' : `.?type=${item}`}
  //   >
  //     {item}
  //   </Link>
  // ));

  const filters = filterTypes.map((item) => (
    <button
      className={`van-type ${item === 'all vans' ? 'clear-filters' : item} ${
        typeFilter === item ? 'selected' : null
      }`}
      key={item}
      to={item === 'all vans' ? '.' : `.?type=${item}`}
      onClick={() => setSearchParams(item === 'all vans' ? {} : { type: item })}
    >
      {item}
    </button>
  ));

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const renderVans = filteredVans.map((van) => (
    <article key={van.id} className='van-tile'>
      <Link to={van.id} state={{ search: searchParams.toString() }}>
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
