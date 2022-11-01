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

export interface skill {
  name: string;
  spcost: string;
  initialSP: string;
  chargeType: string;
  skillActivation: string;
  skillDescription: string;
}

export interface talent {
  name: string;
  value: string;
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
    missions: string[];
  };
  skills: skill[];
  talents: talent[];
  potential: talent[];
  trust: any;
  costs: {
    "Skill Summary - 1": string;
    "Damaged Device": string;
    "Skill Summary - 2": string;
    "Manganese Ore": string;
    "Skill Summary - 3": string;
    "Coagulating Gel": string;
    "Oriron Cluster": string;
    "Orirock Concentration": string;
    "White Horse Kohl": string;
    "Keton Colloid": string;
    "D32 Steel": string;
    "Incandescent Alloy Block": string;
    "Manganese Trihydrate": string;
    "Optimized Device": string;
    "Polymerization Preparation": string;
    "Grindstone Pentahydrate": string;
    "Polymerized Gel": string;
    "Specialist Chip": string;
    "Orirock Cube": string;
    "Specialist Dualchip": string;
    LMD: string;
    Polyketon: string;
    Grindstone: string;
    Oriron: string;
    Polyester: string;
    Sugar: string;
    Orirock: string;
  };
}
