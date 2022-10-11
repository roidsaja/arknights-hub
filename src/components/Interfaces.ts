import { ChangeEventHandler } from "react";

export interface CardItemProps {
  data?: {
    _id?: number;
    name: string;
    rarity: number;
    class: string[];
    art: {
      Base: string;
    };
  };
}
export interface CardProps {
  data?: CardItemProps[];
}

export interface SearchPanelProps {
  handleQueryChange: ChangeEventHandler<HTMLInputElement>;
}

export interface TopImageProps {
  image: {
    Base: string;
    E2: string;
  };
  classType: string[];
  rarity: number;
}
export interface stats {
  hp: string;
  atk: string;
  def: string;
  resist: string;
  redeploy: string;
  cost: string;
  block: string;
  interval: string;
}
export interface OperatorInfoProps {
  name: string;
  rarity: number;
  alter: string;
  artist: string;
  va: string;
  biography: string;
  description: string;
  quote: string;
  voicelines: any;
  lore: any;
  affiliation: string[];
  class: string[];
  tags: string[];
  statistics: {
    base: stats;
    e0max: stats;
    e1max: stats;
    e2max: stats;
  };
  trait: string;
  availability: string;
  url: string;
  headhunting: string;
  recruitable: string;
  base: [
    {
      name: string;
      level: string;
      effects: string;
      building: string;
    }
  ];
  module: {
    name: string;
    level: string;
    trust: string;
    availability: string;
    trait: string;
    mission: string[];
  };
}
