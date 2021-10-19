import { useEffect, useState } from 'react';

const usePercent = (price, type) => {
  const [percentPrice, setPercentPrice] = useState(0);
  useEffect(() => {
    setPercentPrice((price * Number(type)) / 100);
  }, [price, type]);
  return { percentPrice };
};
export default usePercent;
