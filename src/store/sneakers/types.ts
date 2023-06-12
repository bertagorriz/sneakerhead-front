export interface SneakerStructure {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  colors: string[];
  features: FeaturesSneakerStructure;
  user: string;
}

export interface FeaturesSneakerStructure {
  description: string;
  description2?: string;
  isAvailable: boolean;
}

export interface SneakersStateStructure {
  sneakers: SneakerStructure[];
  limit: number;
}

export interface SneakerAddStructure {
  name: string;
  brand: string;
  image: string;
  price: number;
  colors: string[];
  features: FeaturesSneakerStructure;
}
