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
    searchResult: 'bootstrap',
    isLoading: false,
    isError: false,
    packages: []
  }),

  actions: {
    async getPackages () {
      try {
        this.isLoading = true;
        const { data: { objects } }: AxiosResponse = await getPackagesList(this.searchResult);
        this.packages = objects;
        console.log(this.packages);
        this.isLoading = false;

      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    }
  }
})
