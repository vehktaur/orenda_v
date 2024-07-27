import { useState, useEffect } from 'react';

const fetchProviders = () => {
  const url = 'http://18.224.110.152/api/v1/provider/get_providers';
  const [providersData, setProvidersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url, {cache: 'no-cache', });   
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
