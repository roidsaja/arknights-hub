import { ChangeEventHandler } from "react";

export interface CardItemProps {
  data?: {
    _id?: number;
    name: string;
    rarity: number;
    class: [string];
    art: {
      Base: string;
    };
  };
}
export interface CardProps {
  data?: CardItemProps[];
}

export interface SearchItemProps {
  query: string;
}

export interface SearchPanelProps {
  handleQueryChange: ChangeEventHandler<HTMLInputElement>;
}
