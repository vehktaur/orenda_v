import axios from 'axios';

const url = 'http://18.224.110.152/api/v1/provider/get_providers';

export const getProviders = async () => {
  return (await axios.get(url)).data.providers.map((item) => ({
    ...item,
    mobileOverlay: false
  }));
};
