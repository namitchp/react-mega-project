import { useEffect, useState } from 'react';

const useNetworkStatus = () => {
  const [isOnline, setOnline] = useState(true);

  const updateNetworkStatus = () => {
    setOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('load', updateNetworkStatus);
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    return () => {
      window.removeEventListener('load', updateNetworkStatus);
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, [navigator.onLine]);
  console.log(navigator.connection);
  console.log(navigator);
  console.log(isOnline);
  return (
    <>
      <h1>Hello 45{isOnline ? 'true' : 'false'}</h1>
      <h4>
        {navigator.connection.downlink > 5
          ? 'logic for good internet speeds'
          : 'logic for bad internet speeds'}
      </h4>
    </>
  );
  //   return { isOnline };
};

export default useNetworkStatus;
