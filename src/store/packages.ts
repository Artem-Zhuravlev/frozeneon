import { defineStore } from 'pinia';
import { getPackagesList } from '@/http/packages';
import { AxiosResponse } from 'axios';

interface State {
  searchResult: string;
  isLoading: boolean;
  isError: boolean;
  packages: object[]
}

export const usePackagesStore = defineStore('packages', {
  state: (): State => ({
    searchResult: '',
    isLoading: false,
    isError: false,
    packages: []
  }),

  actions: {
    async getPackages () {
      try {
        this.isLoading = true;
        const { data: objects }: AxiosResponse<object[]> = await getPackagesList(this.searchResult);
        console.log(objects);
        this.packages = objects;
        this.isLoading = false;

      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    }
  }
})
