export interface CardItemProps {
  data: {
    _id?: number;
    name: string;
    rarity: number;
    class: string;
    art: {
      Base: string;
    };
  };
}
