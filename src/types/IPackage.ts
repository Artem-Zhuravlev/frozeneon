export interface IPackage {
  package: {
    name: string;
    scope?: string;
    version: string;
    description: string;
    date: Date;
    links?: {
      npm?: string;
      homepage?: string;
      repository?: string;
      bugs?: string;
    };
    author: {
      name: string;
      email: string;
    };
    publisher?: {
      username?: string;
      email?: string;
    };
    keywords: string[],
    maintainers?: Array<{
      username?: string;
      email?: string;
    }>;
  }
}
