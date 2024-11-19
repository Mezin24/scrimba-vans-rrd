import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { customFetch } from '../utils/axios';

export const VanDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await customFetch.get(`/vans/${id}`);
      setVan(data);
    };

    fetchData();
  }, [id]);

  return (
    <div className='van-detail-container'>
      {/* <Link to={`..${search}`} className='back-button' relative='path'>
        &larr; <span>Back to {backTo} vans</span>
      </Link> */}
      {van ? (
        <div className='van-detail'>
          <img alt={van.name} src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
