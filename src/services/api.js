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
  'Kimberly Walker',
  'Michael Whitley',
  'Linda Orji',
  'Zohaib Qazi',
  'Angela Wandungu',
  'Kristofer Generales',
  'Francine Forbes',
  'Royston Ogbuagu',
  'Christine Corcoran',
  'Olga Kosichenko',
  'David Morales',
  'Galina Grapp',
  'Amanda Wareham',
  'Michael Hickey',
  'Omolola Oloyede',
  'Brian Doyle',
  'Cheryl Kelly',
  'Trisha Joseph',
  'Tanya Monroe',
  'Sitora Mirsoatova',
  'Sevindzh Izrailova',
  'Natasha Dillon',
  'Claudia Okyere',
  'Phillip McDonald',
  'Simran Kaur',
  'Sheri Watson',
  'Stephanie Nazaire',
  'Cassandra Williams',
  'Brian Yudhistira',
  'Shelley Padgett',
  'Takiysha McLeod-Ballard',
  'Daniella Otaiza',
  'Erika Simon',
  'Moises Liriano Fernandez',
  'Patrice Campbell-Marques',
  'Tammy Owens',
  'Chelsea Chaffee',
  'Anne Mongiello',
  'Barbara Borgella',
  'Bethany Malugin',
  'Ketie Saintelus',
  'Trisha Mayorga',
  'Jennifer Cox',
  'Dawn Manza',
  'Tahara Miah',
  'Beatriz Isaza',
  'Jena Simon',
  'Jessica Chichester',
  'Joan Mahoney',
  'Kerry Callender',
  'Holly Persaud',
  'Michelle Krill',
  'Lori Hume',
  'Rakin Rahman',
  'Nerlande Celestin',
  'Ricky Luong',
  'Miok Im',
  'Nicole Raczy',
  'Nwamaka Onyeogo',
  'Theresa Levy',
  'Marcia Jarvis',
  'Lenny Gets',
  'Lindon Richards',
  'Robin Blaize',
  'Sarah Sakirsky',
  'William Da Silva',
  'Emmy Li',
  'Victoria Lanzara',
  'Mamadou Barry',
  'Jiselle Assad',
  'Michael Hawthorne',
  'Maria Lourdes Bunque',
  'Melissa Docteur',
  'Mary Asiedu',
  'Latiema Merilus',
  'Danielle Overton',
  'Leah Molina',
  'Sharon Ostiguy',
  'Myea Meighan',
  'Perpetual Gyimah',
  'Diana Lankenau',
  'Daferti Afflick',
  'Stacy Humphreys',
  'Natasha Ellis',
  'Celeste Johnson',
  'Catherine Colson',
  'Tricia Robinson',
  'Allyson Cosgrove',
  'Adam Jimoh'
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
