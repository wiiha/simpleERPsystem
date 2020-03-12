interface storageDataObject {
  stockLocation: string;
  quantity: number;
}

export interface ProductStorageInfo {
  product: string;
  storageData: storageDataObject[];
}
