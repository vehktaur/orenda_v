import axios from 'axios';

const url = 'https://5092fat33f.execute-api.us-east-2.amazonaws.com/orendaStage/api/v1/provider/get_providers';

export const getProviders = async () => {
  return (await axios.get(url)).data.providers.map((item) => ({
    ...item,
    mobileOverlay: false
  }));
};

