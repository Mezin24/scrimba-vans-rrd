import { useOutletContext } from 'react-router-dom';

export const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <img
        src={van.imageUrl}
        className='host-van-detail-image'
        alt={van.name}
      />
    </div>
  );
};
