import { Product } from './product.types';

declare module '*.json' {
  const value: Product[];
  export default value;
}
