import { Product } from "./Product";
import { StockLocation } from "./StockLocation";

interface storageDataObject {
  stockLocation: StockLocation;
  quantity: number;
}

export interface ProductStorageInfo {
  product: Product;
  storageData: storageDataObject[];
}
