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

  // If there is by a provide not dealt with in the previous loop we then can
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
  'Theresa Levy',
  'Ketie Saintelus',
  'Michelle Krill',
  'Jiselle Assad',
  'Kristofer Generales',
  'Angela Wandungu',
  'Sheri Watson',
  'Toni Parilosi',
  'Anne Mongiello',
  'Amanda Wareham',
  'Barbara Borgella',
  'Miok Im',
  'Perpetual Gyimah',
  'Sitora Mirsoatova',
  'William Da Silva',
  'Robin Blaize',
  'Bethany Malugin',
  'Moises Liriano Fernandez',
  'Sarah Sakirsky',
  'Ricky Loung',
  'Sevindzh Izrailova',
  'Brian Yudhistira',
  'Trisha Mayorga',
  'Cassandra Williams',
  'Chelsea Chaffee',
  'Nerlande Celestin',
  'Jena Simon',
  'Lindon Richards',
  'Lori Hume',
  'Mary Asiedu',
  'Jeremy Walsh',
  'Marcia Jarvis',
  'Shelley Padgett',
  'Tahara Miah',
  'Catherine Colson',
  'Derrick Adusei',
  'Jessica Chichester',
  'Kelli Hamilton',
  'Sharon Ostiguy',
  'Kimberly Levitt',
  'Latiema Merilus',
  'Sarah Otto',
  'Celeste Johnson',
  'Cheryl Kelly',
  'Victoria Lanzara',
  'Michael Hawthorne',
  'Olga Kosichenko',
  'Daferti Afflick',
  'Danielle Overton',
  'Maria Lourdes Bunque',
  'Dionne Joseph',
  'Joan Mahoney',
  'Kerry Callender',
  'Leah Molina',
  'Lenny Gets',
  'Mamadou Barry',
  'Melissa Docteur',
  'Nicole Raczy',
  'Myea Meighan',
  'Natasha Dillon',
  'Nwamaka Onyeogo',
  'Phillip McDonald',
  'Trisha Joseph'
];

export const getProviders = async () => {
  const fetchedData = (await axios.get(url)).data.providers.map((item) => ({
    ...item,
    mobileOverlay: false
  }));
  return orderProviders(newOrder, fetchedData);
};
