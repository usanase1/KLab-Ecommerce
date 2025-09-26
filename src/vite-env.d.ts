/// <reference types="vite/client" />

import { Product } from './types/product.types';

declare module '*.json' {
  const value: Product[];
  export default value;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
