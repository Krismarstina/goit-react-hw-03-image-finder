import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '31776527-1126c48cb32ce6f9faff22d13';

export const getImages = async (page, image) => {
  const options = {
    params: {
      q: image,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
  const response = await axios.get('/', options);
  const data = await response.data;
  const dataHits = data.hits;
  return dataHits;
};

// const API_KEY = '31776527-1126c48cb32ce6f9faff22d13';
// const BASIC_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;
// const searchParams = '&image_type=photo&orientation=horizontal';

// export const getImages = async (page, image) => {
//   const serverDataURL = `${BASIC_URL}${image}${searchParams}&page=${page}&per_page=12`;
//   try {
//     const server = await axios.get(serverDataURL);
//     const data = await server.data;
//     const dataHits = data.hits;
//     console.log(dataHits);
//     return dataHits;
//   } catch (error) {
//     console.log(error);
//   }
// };
