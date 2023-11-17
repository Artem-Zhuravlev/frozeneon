import algoliasearch, { SearchIndex, SearchClient  } from 'algoliasearch';
import { ALGOLIA_CONFIG } from '@/config';
import { IPackageResult } from './interfaces/algolia/IPackageResult';
import { ISearchOptions } from './interfaces/algolia/ISearchOptions';

const { applicationID, apiKey } = ALGOLIA_CONFIG;
const client: SearchClient = algoliasearch(applicationID, apiKey);
const index: SearchIndex = client.initIndex('npm-search')

const defaultSearchOptions = {
  attributesToRetrieve: [
    'version',
    'keywords',
    'owner',
    'description',
    'name',
    'homepage',
    'license'
  ]
}

async function searchPackages (
  query: string,
  page: number = 0,
  hitsPerPage: number = 10
): Promise<{ hits: IPackageResult[] }> {
  const options: ISearchOptions = { ...defaultSearchOptions, page, hitsPerPage }

  try {
    const result = await index.search<IPackageResult>(query, options);
    return result;
  } catch (error: any) {
    console.error('Error during Algolia search:', error.message);
    throw new Error('Unable to retrieve package list at the moment.');
  }
}

export { searchPackages };
