import axios from './axios';
import { AxiosResponse } from 'axios';

/**
 * Get npm packages list.
 *
 * @param {string} text - Search result.
 * @returns {Promise<AxiosResponse>} A promise that resolves to the packages information.
 * @throws {Error} Throws an error if the request fails.
 */

export const getPackagesList = async (text: string): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios.get(`/search`, { params: { text } });
    return response;
  } catch (error) {
    console.error('Error fetching package information:', error);
    throw error;
  }
}
