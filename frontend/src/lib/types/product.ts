export type productTypes = {
  _id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  image: string;
  price: number;
};

export type cartProduct = {
  _id: string;
  name: string;
  quantity: number;
  image: string;
  price: number;
};

export type cartItemsForBackendType = {
  product: string;
  quantity: number;
};
