export interface Img {
  src: string;
  className?: string;
  alt: string;
}

export interface Engine {
  type: string;
  power: string;
  price: string | number;
}

export interface Version {
  name: string;
  options: string[];
  price: string | number;
}

export interface Color {
  name: string;
  value: string;
}

export interface Upholstery {
  name: string;
  price: string | number;
}

export interface AdditionalOption {
  name: string;
  options: string[];
  standards: string[];
  price: number;
}

export interface Model {
  name: string;
  price: number;
  img: Img;
  engines: {
    categoryName: string;
    Fields: Engine[];
  };
  versions: {
    categoryName: string;
    Fields: Version[];
  };
  colors: {
    categoryName: string;
    Fields: Color[];
  };
  upholsteries: {
    categoryName: string;
    Fields: Upholstery[];
  };
  additionalOptions: {
    categoryName: string;
    Fields: AdditionalOption[];
  };
}

export interface Data {
  models: {
    categoryName: string;
    Fields: Model[];
  };
}
