import axios, { AxiosResponse } from 'axios';
import { ITradeit } from '../steam/dto/steam-tradeit.dto';

export const tradeItApi = async (steamid): Promise<AxiosResponse<ITradeit>> => {
  return await axios.post('https://tradeit.gg/api/steam/v1/steams/id-finder', {
    id: steamid,
  });
};
