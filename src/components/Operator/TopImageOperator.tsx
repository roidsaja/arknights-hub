import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { useState } from "react";

import { TopImageProps } from "../Interfaces";

const TopImageOperator = ({ image, classType, rarity }: TopImageProps) => {
  const [skin, selectSkin] = useState("Base");
  return (
    <TopImageWrapper>
      <SkinIconsWrapper>
        <button
          type="submit"
          onClick={() => {
            selectSkin("Base");
          }}
        >
          <Image
            src={"/SkinIcons/base.png"}
            alt=""
            width={100}
            height={100}
          ></Image>
        </button>
        <button
          type="submit"
          onClick={() => {
            selectSkin("Base");
          }}
        >
          <Image
            src={"/SkinIcons/E1.png"}
            alt=""
            width={100}
            height={100}
          ></Image>
        </button>

        {rarity >= 4 ? (
          <button
            type="submit"
            onClick={() => {
              selectSkin("E2");
            }}
          >
            <Image
              src={"/SkinIcons/E2.png"}
              alt=""
              width={100}
              height={100}
            ></Image>
          </button>
        ) : (
          <Image
            src={"/SkinIcons/E2.png"}
            alt=""
            width={100}
            height={100}
          ></Image>
        )}
      </SkinIconsWrapper>

      <OperatorPreview>
        {skin === "Base" ? (
          <Image src={image.Base} alt="" width={700} height={700}></Image>
        ) : skin === "E2" && rarity >= 4 ? (
          <Image src={image.E2} alt="" width={700} height={700}></Image>
        ) : (
          <Skeleton></Skeleton>
        )}
      </OperatorPreview>

      <OperatorClassWrapper>
        {classType[0] === "Sniper" ? (
          <Image
            src={"/ClassIcons/sniper.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Guard" ? (
          <Image
            src={"/ClassIcons/guard.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Vanguard" ? (
          <Image
            src={"/ClassIcons/vanguard.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Supporter" ? (
          <Image
            src={"/ClassIcons/supporter.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Medic" ? (
          <Image
            src={"/ClassIcons/medic.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Caster" ? (
          <Image
            src={"/ClassIcons/caster.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Defender" ? (
          <Image
            src={"/ClassIcons/defender.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Specialist" ? (
          <Image
            src={"/ClassIcons/specialist.png"}
            alt={""}
            width={100}
            height={100}
          ></Image>
        ) : (
          <Skeleton></Skeleton>
        )}
      </OperatorClassWrapper>
    </TopImageWrapper>
  );
};

const TopImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SkinIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OperatorPreview = styled.div`
  display: flex;
  flex-direction: column;
`;

const OperatorClassWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default TopImageOperator;
