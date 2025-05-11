export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  msg: string;
};

export type Inventory = {
  coin: number;
  keys: {
    key: {
      type: string;
    };
    quantity: number;
  }[];
  items: {
    item: {
      name: string;
      type: string;
      sellPrice: number;
    };
    quantity: number;
  }[];
};

export type User = {
  id: number;
  username: string;
  coin: number;
};

export type ProfileItem = {
  name: string;
  type: string;
  sellPrice: number;
  quantity: number;
  img: string;
};

export type UserPic = {
  username: string;
  profilePic: string;
  backgroundImage: string;
};


export type Item = {
  id: number;
  name: string;
  type: string;
  sellPrice: number;
  img: string;
  rarity: string;
};
