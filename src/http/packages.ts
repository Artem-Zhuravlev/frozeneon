import axios from './axiosInstance';
import { AxiosResponse } from 'axios';

/**
 * Get npm packages list.
 *
 * @param {string} packageName - The name of the npm package.
 * @returns {Promise<AxiosResponse>} A promise that resolves to the packages information.
 * @throws {Error} Throws an error if the request fails.
 */

export const getPackagesList = async (packageName: string): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios.get(`/package/npm/${packageName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching package information:', error);
    throw error;
  }
}
