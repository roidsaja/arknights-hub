import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { useState } from "react";
import { GoStar } from "react-icons/go";

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
      <NameRatingWrapper>
        <h1 className="name">{name}</h1>
        <div className="rarity">
          {rarity === 6 ? (
            <>
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
            </>
          ) : rarity === 5 ? (
            <>
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
            </>
          ) : rarity === 4 ? (
            <>
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
            </>
          ) : (
            <>
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
              <GoStar color="FFBC45" />
            </>
          )}
        </div>
      </NameRatingWrapper>
      <SecondRowWrapper>
        <div className="alter">Alter: {alter}</div>
        <div className="artist">Artist: {artist}</div>
        <div className="va">VA: {va}</div>
        <span>
          {tags.map((op, index) => (
            <div key={index} className="tags">
              {op}
            </div>
          ))}
        </span>
      </SecondRowWrapper>

      <p>{biography}</p>
      <p>{description}</p>
      <p>{quote}</p>
      <p>{affiliation}</p>
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
      <p>Trait: {trait}</p>
    </OperatorInfoWrapper>
  );
};

const OperatorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const NameRatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin: 0.5rem;

  .name {
    font-size: clamp(18px, 5vw, 48px);
  }
  .rarity {
    font-size: clamp(15px, 5vw, 48px);
  }
`;

const SecondRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  margin: 0.5rem;

  .tags {
    margin: 0.25rem;
    padding: 0 0.5rem;
    background-color: #4b3fd7;
  }
`;

export default OperatorInfo;
