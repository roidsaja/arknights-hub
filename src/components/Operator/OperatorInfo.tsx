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
        <div className="alter">
          <h3>Alter</h3>
          <p>{alter}</p>
        </div>
        <div className="artist">
          <h3>Artist</h3>
          <p>{artist}</p>
        </div>
        <div className="va">
          <h3>VA</h3>
          <p>{va}</p>
        </div>
        <div className="headhunting">
          <h3>Headhunting</h3>
          <p>{headhunting}</p>
        </div>
        <div className="recruitable">
          <h3>Recruitable</h3>
          <p>{recruitable}</p>
        </div>
        <div className="availability">
          <h3>Availability</h3>
          <p>{availability}</p>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          {tags.map((op, index) => (
            <div key={index} className="tags-name">
              {op}
            </div>
          ))}
        </div>
        <div>
          <h3>Affiliation</h3>
          <p>{affiliation}</p>
        </div>
      </SecondRowWrapper>

      <MainContentWrapper>
        <div>
          <h2>Biography</h2>
          <p>{biography}</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>{description}</p>
        </div>
        <div>
          <h2>Quote</h2>
          <p>{quote}</p>
        </div>
        <div>
          <h2>Trait</h2>
          <p>{trait}</p>
        </div>
        <div>
          <h2>Lore</h2>
          {Object.keys(lore).map((op, index) => (
            <p key={index}>
              <span className="op-label">{op}:</span> {lore[op]}
            </p>
          ))}
        </div>
        <div>
          <h2>Voicelines</h2>
          {Object.keys(voicelines).map((op, index) => (
            <p key={index}>
              <span className="op-label">{op}:</span> {voicelines[op]}
            </p>
          ))}
        </div>
      </MainContentWrapper>

      <StatisticsWrapper>
        <h2 className="stats-title">Statistics</h2>
        <div className="stats">
          <div>
            <h2>Base</h2>
            <p>
              <span>HP : </span>
              {statistics.base.hp}
            </p>
            <p>
              <span>ATK : </span>
              {statistics.base.atk}
            </p>
            <p>
              <span>DEF : </span>
              {statistics.base.def}
            </p>
            <p>
              <span>RES : </span>
              {statistics.base.resist}
            </p>
            <p>
              <span>REDEPLOY : </span>
              {statistics.base.redeploy}
            </p>
            <p>
              <span>COST : </span>
              {statistics.base.cost}
            </p>
            <p>
              <span>BLOCK : </span>
              {statistics.base.block}
            </p>
            <p>
              <span>INT : </span>
              {statistics.base.interval}
            </p>
          </div>
          <div>
            <h2>E0 [Maxed]</h2>
            <p>
              <span>HP : </span>
              {statistics.e0max.hp}
            </p>
            <p>
              <span>ATK : </span>
              {statistics.e0max.atk}
            </p>
            <p>
              <span>DEF : </span>
              {statistics.e0max.def}
            </p>
            <p>
              <span>RES : </span>
              {statistics.e0max.resist}
            </p>
            <p>
              <span>REDEPLOY : </span>
              {statistics.e0max.redeploy}
            </p>
            <p>
              <span>COST : </span>
              {statistics.e0max.cost}
            </p>
            <p>
              <span>BLOCK : </span>
              {statistics.e0max.block}
            </p>
            <p>
              <span>INT : </span>
              {statistics.e0max.interval}
            </p>
          </div>
          <div>
            <h2>E1 [Maxed]</h2>
            <p>
              <span>HP : </span>
              {statistics.e1max.hp}
            </p>
            <p>
              <span>ATK : </span>
              {statistics.e1max.atk}
            </p>
            <p>
              <span>DEF : </span>
              {statistics.e1max.def}
            </p>
            <p>
              <span>RES : </span>
              {statistics.e1max.resist}
            </p>
            <p>
              <span>REDEPLOY : </span>
              {statistics.e1max.redeploy}
            </p>
            <p>
              <span>COST : </span>
              {statistics.e1max.cost}
            </p>
            <p>
              <span>BLOCK : </span>
              {statistics.e1max.block}
            </p>
            <p>
              <span>INT : </span>
              {statistics.e1max.interval}
            </p>
          </div>
          <div>
            <h2>E2 [Maxed]</h2>
            <p>
              <span>HP : </span>
              {statistics.e2max.hp}
            </p>
            <p>
              <span>ATK : </span>
              {statistics.e2max.atk}
            </p>
            <p>
              <span>DEF : </span>
              {statistics.e2max.def}
            </p>
            <p>
              <span>RES : </span>
              {statistics.e2max.resist}
            </p>
            <p>
              <span>REDEPLOY : </span>
              {statistics.e2max.redeploy}
            </p>
            <p>
              <span>COST : </span>
              {statistics.e2max.cost}
            </p>
            <p>
              <span>BLOCK : </span>
              {statistics.e2max.block}
            </p>
            <p>
              <span>INT : </span>
              {statistics.e2max.interval}
            </p>
          </div>
        </div>
      </StatisticsWrapper>

      <div>
        <h2>Module</h2>
        {module ? (
          <div>
            <p>{module.name}</p>
            <p>{module.level}</p>
            <p>{module.trust}</p>
            <p>{module.availability}</p>
            <p>{module.trait}</p>
            <p>{module.missions}</p>
          </div>
        ) : (
          <p>No Module Found</p>
        )}
      </div>

      <div>
        <h2>Base Skills</h2>
        {base.map((op, index) => (
          <div key={index}>
            <p>{op.name}</p>
            <p>{op.level}</p>
            <p>{op.effects}</p>
            <p>{op.building}</p>
          </div>
        ))}
        {base[0].name}
        {base[0].level}
        {base[0].building}
        {base[0].effects}
      </div>
    </OperatorInfoWrapper>
  );
};

const OperatorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: clamp(2rem, 10vw, 5rem);
  margin-right: clamp(2rem, 10vw, 5rem);
`;

const NameRatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin-top: clamp(0.5rem, 10vw, 0.75rem);
  margin-bottom: clamp(0.5rem, 10vw, 0.75rem);

  .name {
    font-size: clamp(24px, 5vw, 48px);
  }
  .rarity {
    font-size: clamp(20px, 5vw, 48px);
  }
`;

const SecondRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  margin-top: clamp(0.5rem, 10vw, 0.75rem);
  margin-bottom: clamp(0.5rem, 10vw, 0.75rem);
  background-color: #262626;
  padding: 0.5rem;

  h3 {
    text-align: center;
    font-size: clamp(14px, 10vw, 18px);
    color: #fdba74;
  }

  p {
    text-align: center;
    font-size: clamp(12px, 10vw, 16px);
  }
  .tags {
    display: flex;
    flex-direction: column;
    text-align: center;
    &-name {
      margin: 0.25rem;
      padding: 0.25rem 0.5rem;
      background-color: #4b3fd7;
    }
  }

  @media screen and (max-width: 961px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: clamp(0.5rem, 10vw, 0.75rem);
  margin-bottom: clamp(0.5rem, 10vw, 0.75rem);
  background-color: #262626;
  padding: 0.5rem;

  h2 {
    color: #fdba74;
  }
  .op-label {
    color: #fdba74;
  }
  @media screen and (max-width: 961px) {
    max-width: 961px;
  }
`;

const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #262626;
  padding: 0.5rem;
  margin-top: clamp(0.5rem, 10vw, 0.75rem);
  margin-bottom: clamp(0.5rem, 10vw, 0.75rem);

  h2,
  span {
    color: #fdba74;
  }
  .stats-title {
    display: flex;
    justify-content: center;
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  @media screen and (max-width: 961px) {
    max-width: 961px;

    .stats {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default OperatorInfo;
