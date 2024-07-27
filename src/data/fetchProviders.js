import { useState, useEffect } from 'react';

const fetchProviders = () => {
  const url = '/api';
  const [providersData, setProvidersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url, {
          cache: 'no-cache',
          referrerPolicy: 'unsafe-url'
        });
        const response = await data.json();
        setProvidersData(
          response?.providers.map((provider) => ({
            ...provider,
            mobileOverlay: false
          }))
        );
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { providersData, setProvidersData, isLoading, error };
};

export default fetchProviders;
