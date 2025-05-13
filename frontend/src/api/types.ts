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
  totalItems?: number;
  profilePic?: string;
  backgroundImage?: string;
  inventory?: ProfileItem[];
  keys: UserKey[];
};

export type ProfileItem = {
  id: number;
  name: string;
  type: string;
  sellPrice: number;
  quantity: number;
  img: string;
  rarity: string;
  owned: boolean;
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

export type UserKey = {
  keyType: "Meme" | "Superhero";
  count: number;
  nextRegenerateTime: string | null;
};