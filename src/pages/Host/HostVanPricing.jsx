import { useOutletContext } from 'react-router-dom';

export const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <div className='host-van-price'>
      ${van.price}
      <span> per/day </span>
    </div>
  );
};
