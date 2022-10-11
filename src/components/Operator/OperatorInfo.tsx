import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { useState } from "react";

import { OperatorInfoProps } from "../Interfaces";

const OperatorInfo = ({
  name,
  rarity,
  alter,
  artist,
  va,
  biography,
  description,
  quote,
  voicelines,
  lore,
  affiliation,
  class: opClass,
  tags,
  statistics,
  trait,
  availability,
  url,
  headhunting,
  recruitable,
  base,
  module,
}: OperatorInfoProps) => {
  return (
    <OperatorInfoWrapper>
      <h1>{name}</h1>
      <h1>{rarity}</h1>
      <h1>{alter}</h1>
      <h1>{artist}</h1>
      <h1>{va}</h1>
      <p>{biography}</p>
      <p>{description}</p>
      <p>{quote}</p>
      <p>{affiliation}</p>
      <p>{tags}</p>
      <p>{trait}</p>
      <p>Headhunting: {headhunting}</p>
      <p>Recruitable: {recruitable}</p>
      <p>Availability: {availability}</p>
      {Object.keys(voicelines).map((op, index) => (
        <p key={index}>
          {op}: {voicelines[op]}
        </p>
      ))}
      {Object.keys(lore).map((op, index) => (
        <p key={index}>
          {op}: {lore[op]}
        </p>
      ))}
    </OperatorInfoWrapper>
  );
};

const OperatorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default OperatorInfo;
