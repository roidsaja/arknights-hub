import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { GoStar } from "react-icons/go";

import { CardItemProps } from "src/components/Interfaces";
import Image from "next/image";

const Card = ({ data }: CardItemProps) => {
  return (
    <CardWrapper>
      <Link href={`/operators/${data?._id}`}>
        <a>
          {data?.art.Base ? (
            <Image src={data?.art.Base} alt={""} width={120} height={120} />
          ) : (
            <Image src="/placeholder.svg" alt={""} width={120} height={120} />
          )}
          <div className="name">{data?.name}</div>
          <div className="class">{data?.class[0]}</div>
          <div className="rarity">
            {data?.rarity === 6 ? (
              <>
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
              </>
            ) : data?.rarity === 5 ? (
              <>
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
                <GoStar color="FFBC45" />
              </>
            ) : data?.rarity === 4 ? (
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
        </a>
      </Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 1rem 1rem;

  .name {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 1rem;
    letter-spacing: 0.03rem;
    padding-top: 0.5rem;
  }
  .class {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1rem;
    letter-spacing: 0.03rem;
    padding-top: 0.5rem;
  }
  .rarity {
    display: flex;
    justify-content: center;
    font-size: 0.75rem;
    line-height: 1rem;
    padding-top: 0.5rem;
  }
`;
export default Card;
