import { useOutletContext } from 'react-router-dom';

export const HostVanInfo = () => {
  const { van } = useOutletContext();
  const { name, type, description } = van;
  return (
    <div className='host-van-detail-info'>
      <h4>
        <span>Name: </span>
        {name}
      </h4>
      <h4>
        <span>Category: </span>
        {type}
      </h4>
      <h4>
        <span>Description: </span>
        {description}
      </h4>
      <h4>
        <span>Visibility: </span>
        Public
      </h4>
    </div>
  );
};
