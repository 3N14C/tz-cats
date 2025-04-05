import { apiPublic } from '@/configs';
import { ICat } from '@/shared/types';

class CatsService {
  getRandomCat = async (): Promise<ICat[]> => {
    try {
      const response = await apiPublic.get<ICat[]>('images/search');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching random cat: ${error}`);
    }
  };
}

export const catsService = new CatsService();
