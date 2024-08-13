import axios from 'axios';

const url =
  'https://5092fat33f.execute-api.us-east-2.amazonaws.com/orendaStage/api/v1/provider/get_providers';

function orderProviders(order, providerList) {
  const providersList = providerList ?? [];
  const providerLookup = {};
  // An object for easy lookup of names to avoid slow code.
  for (const provider of providersList) {
    providerLookup[provider['provider_name']] = {
      provider: provider,
      ordered: false
    };
  }

  // Ordering done based on the order of the names given.
  const reorderedProviders = [];
  for (const name of order) {
    if (providerLookup[name] == undefined) {
      continue;
    }
    reorderedProviders.push(providerLookup[name]['provider']);
    providerLookup[name]['ordered'] = true;
  }

  // If there is by a provider not dealt with in the previous loop we then can
  // add that one the end.
  for (const providerName in providerLookup) {
    if (!providerLookup[providerName]['ordered']) {
      reorderedProviders.push(providerLookup[providerName]['provider']);
    }
  }

  return reorderedProviders;
}
const newOrder = [
  'Rakin Rahman',
  'Tanya Monroe',
  'Ketie Saintelus',
  'Sitora Mirsoatova',
  'Angela Wandungu',
  'Anne Mongiello',
  'Kristofer Generales',
  'Jiselle Assad',
  'Michelle Krill',
  'Toni Parolisi',
  'Sevindzh Izrailova',
  'Brian Yudhistira',
  'Emmy Li',
  'Trisha Mayorga',
  'Chelsea Chaffee',
  'Natasha Dillon',
  'Cassandra Williams',
  'Theresa Levy',
  'Sheri Watson',
  'Claudia Okyere',
  'Joan Mahoney',
  'Danielle Overton-Miller',
  'Maria Lourdes Bunque',
  'Moises Liriano Fernandez',
  'Amanda Wareham',
  'Barbara Borgella',
  'Miok Im',
  'Michael Whitley',
  'Robin Blaize',
  'Allyson Cosgrove',
  'Bethany Malugin',
  'Michael Hawthorne',
  'Olga Kosichenko',
  'Jessica Chichester',
  'Ricky Luong',
  'Nerlande Celestin',
  'Lenny Gets',
  'Lori Hume',
  'Marcia Jarvis',
  'Shelley Padgett',
  'Tahara Miah',
  'Sarah Otto',
  'Mary Asiedu',
  'Jena Simon',
  'Lindon Richards',
  'Kelli Hamilton',
  'Sarah Sakirsky',
  'Nwamaka Onyeogo',
  'Diana Lankenau',
  'Perpetual Gyimah',
  'Phillip McDonald',
  'Catherine Colson',
  'Adam Jimoh',
  'Kimberly Levitt',
  'Latiema Merilus',
  'Victoria Lanzara',
  'Sharon Ostiguy',
  'William Da Silva',
  'Celeste Johnson',
  'Cheryl Kelly',
  'Daferti Afflick',
  'Dionne Joseph',
  'Kerry Callender',
  'Leah Molina',
  'Mamadou Barry',
  'Melissa Docteur',
  'Nicole Raczy',
  'Myea Meighan',
  'Trisha Joseph'
];

export const getProviders = async () => {
  const fetchedData = (await axios.get(url)).data.providers.map((item) => ({
    ...item,
    mobileOverlay: false
  }));
  return orderProviders(newOrder, fetchedData);
};

export const getProviderImages = async () => {
  const providerImages = (await axios.get(url)).data.providers.map(
    (provider) => ({
      name: provider.provider_name,
      image: provider.provider_image_url
    })
  );
  return providerImages;
};
