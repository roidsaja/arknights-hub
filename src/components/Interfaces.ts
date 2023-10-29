import { ChangeEventHandler } from "react";

export interface CardItemProps {
  data: {
    _id: number;
    name: string;
    rarity: number;
    class: string[];
    art: string;
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
    },
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
  art: [
    {
      name: string;
      link: string;
      line?: string;
    },
  ];
  costs: {
    "Skill Summary - 1": string;
    "Skill Summary - 2": string;
    "Skill Summary - 3": string;
    "Sugar Substitute"?: string;
    "Integrated Device"?: string;
    "Damaged Device"?: string;
    "Optimized Device"?: string;
    "Manganese Ore"?: string;
    "Manganese Trihydrate"?: string;
    "Oriron Shard"?: string;
    "Oriron Cluster"?: string;
    "Oriron Block"?: string;
    "Loxic Kohl"?: string;
    "White Horse Kohl"?: string;
    "Keton Colloid"?: string;
    "D32 Steel"?: string;
    "Incandescent Alloy"?: string;
    "Incandescent Alloy Block"?: string;
    "Polymerization Preparation"?: string;
    "Grindstone Pentahydrate"?: string;
    "Coagulating Gel"?: string;
    "Polymerized Gel"?: string;
    "Orirock Cube"?: string;
    "Orirock Cluster"?: string;
    "Orirock Concentration"?: string;
    "RMA70-12"?: string;
    "RMA70-24"?: string;
    "Bipolar Nanoflake"?: string;
    "Crystalline Component"?: string;
    "Crystalline Circuit"?: string;
    "Crystalline Electronic Unit"?: string;
    "Compound Cutting Fluid"?: string;
    "Cutting Fluid Solution"?: string;
    "Refined Solvent"?: string;
    "Semi-Synthetic Solvent"?: string;
    "Specialist Chip"?: string;
    "Specialist Dualchip"?: string;
    "Defender Chip"?: string;
    "Defender Dualchip"?: string;
    "Guard Chip"?: string;
    "Guard Dualchip"?: string;
    "Supporter Chip"?: string;
    "Supporter Dualchip"?: string;
    "Sniper Chip"?: string;
    "Sniper Dualchip"?: string;
    "Medic Chip"?: string;
    "Medic Dualchip"?: string;
    "Caster Chip"?: string;
    "Caster Dualchip"?: string;
    "Vanguard Chip"?: string;
    "Vanguard Dualchip"?: string;
    LMD: string;
    Ester?: string;
    Polyketon?: string;
    Aketon?: string;
    Grindstone?: string;
    Oriron?: string;
    Polyester?: string;
    Sugar?: string;
    Orirock?: string;
    Diketon?: string;
    Device?: string;
  };
}
