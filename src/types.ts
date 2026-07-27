export interface Company {
  id: string | number;
  name: string;
  logo: string;
  city: string;
  linkedin_url: string;
  career_url: string;
}

export interface CityOption {
  name: string;
  count?: number;
}

export type ActiveTab = 'home' | 'companies' | 'about';
