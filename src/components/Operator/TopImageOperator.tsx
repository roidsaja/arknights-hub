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
        <div
          className="skin-icon-button"
          onClick={() => {
            selectSkin("Base");
          }}
        >
          <Image
            src={"/SkinIcons/base.png"}
            alt=""
            width={128}
            height={125}
          ></Image>
        </div>
        <div
          className="skin-icon-button"
          onClick={() => {
            selectSkin("Base");
          }}
        >
          <Image
            src={"/SkinIcons/E1.png"}
            alt=""
            width={128}
            height={125}
          ></Image>
        </div>

        {rarity >= 4 ? (
          <div
            className="skin-icon-button"
            onClick={() => {
              selectSkin("E2");
            }}
          >
            <Image
              src={"/SkinIcons/E2.png"}
              alt=""
              width={128}
              height={125}
            ></Image>
          </div>
        ) : (
          <Image
            src={"/SkinIcons/E2.png"}
            alt=""
            width={128}
            height={125}
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
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper.png"}
              alt={"Sniper"}
              title={"Sniper"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[0] === "Guard" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard.png"}
              alt={"Guard"}
              title={"Guard"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[0] === "Vanguard" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/vanguard.png"}
              alt={"Vanguard"}
              title={"Vanguard"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[0] === "Supporter" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/supporter.png"}
              alt={"Supporter"}
              title={"Supporter"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[0] === "Medic" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/medic.png"}
              alt={"Medic"}
              title={"Medic"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[0] === "Caster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster.png"}
              alt={"Caster"}
              title={"Caster"}
              width={128}
              height={128}
            ></Image>
          </OperatorClassIcon>
        ) : classType[0] === "Defender" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/defender.png"}
              alt={"Defender"}
              title={"Defender"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[0] === "Specialist" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist.png"}
              alt={"Specialist"}
              title={"Specialist"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : (
          <Skeleton></Skeleton>
        )}

        {classType[1] === "Flagbearer" || classType[2] === "Standard Bearer" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/vanguard_flagbearer.png"}
              alt={"Flagbearer/Standard Bearer"}
              width={128}
              height={128}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "DP-On-Kill" || classType[2] === "Charger" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/vanguard_charger.png"}
              alt={"DP-On-Kill/Charger"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Skill-DP" || classType[2] === "Pioneer" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/vanguard_pioneer.png"}
              alt={"Skill-DP/Pioneer"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Summoner" || classType[2] === "Tactician" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/vanguard_summoner.png"}
              alt={"Summoner/Tactician"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Artificer" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/supporter_artificer.png"}
              alt={"Artificer"}
              width={128}
              height={128}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Buffer" || classType[2] === "Abjurer" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/supporter_buffer.png"}
              alt={"Buffer/Abjurer"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Slower" || classType[2] === "Decel Binder" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/supporter_slower.png"}
              alt={"Slower/Decel Binder"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Debuffer" || classType[2] === "Hexer" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/supporter_hexer.png"}
              alt={"Debuffer/Hexer"}
              width={128}
              height={128}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Aura" || classType[2] === "Bard" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/supporter_bard.png"}
              alt={"Aura/Bard"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Summoner" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/supporter_summoner.png"}
              alt={"Summoner"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Subsitute" || classType[2] === "Dollkeeper" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_dollkeeper.png"}
              alt={"Substitute/Dollkeeper"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "DP-Drain" || classType[2] === "Merchant" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_merchant.png"}
              alt={"DP-Drain/Merchant"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Fast-Redeploy" || classType[2] === "Executor" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_executor.png"}
              alt={"Fast-Redeploy/Executor"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Pusher" || classType[2] === "Push Stroker" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_pusher.png"}
              alt={"Pusher/Push Stroker"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Puller" || classType[2] === "Hookmaster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_hookmaster.png"}
              alt={"Puller/Hookmaster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Ambusher" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_ambusher.png"}
              alt={"Ambusher"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Sacrificial Specialist" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_sacrificial.png"}
              alt={"Sacrificial Specialist"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Trapmaster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/specialist_trapmaster.png"}
              alt={"Trapmaster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "ST" && classType[2] === "Medic" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/medic_st.png"}
              alt={"ST/Medic"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "AoE" && classType[2] === "Multi-Target Medic" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/medic_aoe.png"}
              alt={"AoE/Multi-Target Medic"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Wide-Range" || classType[2] === "Therapist" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/medic_therapist.png"}
              alt={"Wide-Range/Therapist"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Wandering Medic" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/medic_wandering.png"}
              alt={"Wandering Medic"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Anti-Air" || classType[2] === "Marksman" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper_marksman.png"}
              alt={"Anti-Air/Marksman"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Boomstick" || classType[2] === "Spreadshooter" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper_boomstick.png"}
              alt={"Boomstick/Spreadshooter"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Aftershock" || classType[2] === "Flinger" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper_aftershock.png"}
              alt={"Aftershock/Flinger"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Close Range" ||
          classType[2] === "Heavyshooter" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper_heavyshooter.png"}
              alt={"Close Range/Heavyshooter"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Heavyweight" || classType[2] === "Besieger" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper_heavyweight.png"}
              alt={"Heavyweight/Besieger"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "AoE" && classType[2] === "Artilleryman" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper_aoe.png"}
              alt={"AoE/Artilleryman"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Long-Range" && classType[2] === "Deadeye" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/sniper_longrange.png"}
              alt={"Long-Range/Deadeye"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Ranged" || classType[2] === "Lord" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_lord.png"}
              alt={"Ranged/Lord"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Brawler" || classType[2] === "Fighter" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_brawler.png"}
              alt={"Brawler/Fighter"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "AoE" && classType[2] === "Centurion" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_centurion.png"}
              alt={"AoE/Centurion"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Duelist" && classType[2] === "Dreadnought" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_duelist.png"}
              alt={"Duelist/Dreadnought"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Support" || classType[2] === "Instructor" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_instructor.png"}
              alt={"Support/Instructor"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Enmity" && classType[2] === "Musha" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_musha.png"}
              alt={"Enmity/Musha"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Dualstrike" || classType[2] === "Swordmaster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_dualstrike.png"}
              alt={"Dualstrike/Swordmaster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Arts Fighter" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_artsfighter.png"}
              alt={"Arts Fighter"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Reaper Guard" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_reaper.png"}
              alt={"Reaper Guard"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Liberator Guard" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/guard_liberator.png"}
              alt={"Liberator Guard"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Healing" || classType[2] === "Guardian" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/defender_guardian.png"}
              alt={"Healing/Guardian"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Enmity" && classType[2] === "Juggernaut" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/defender_juggernaut.png"}
              alt={"Enmity/Juggernaut"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Normal" || classType[2] === "Protector" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/defender_protector.png"}
              alt={"Normal/Protector"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Duelist" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/defender_duelist.png"}
              alt={"Duelist"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Fortress" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/defender_fortress.png"}
              alt={"Fortress"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Arts Protector" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/defender_artsprotector.png"}
              alt={"Arts Protector"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "ST" && classType[2] === "Core Caster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster_core.png"}
              alt={"ST/Core Caster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Burninator" || classType[2] === "Blast Caster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster_burninator.png"}
              alt={"Burninator/Blast Caster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Drone" || classType[2] === "Mech-Accord" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster_drone.png"}
              alt={"Drone/Mech-Accord"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Modal" || classType[2] === "Phalanx Caster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster_phalanx.png"}
              alt={"Modal/Phalanx Caster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "AoE" && classType[2] === "Splash Caster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster_aoe.png"}
              alt={"AoE/Splash Caster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Charge" || classType[2] === "Mystic Caster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster_mystic.png"}
              alt={"Charge/Mystic Caster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
        ) : classType[1] === "Chain Caster" ? (
          <OperatorClassIcon>
            <Image
              src={"/ClassIcons/caster_chain.png"}
              alt={"Chain Caster"}
              width={128}
              height={125}
            ></Image>
          </OperatorClassIcon>
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

  @media screen and (max-width: 961px) {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
`;

const SkinIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .skin-icon-button {
    cursor: pointer;
    background: #2b2b2b;
    box-shadow: -10px -10px 30px #2b2b2b, 10px 10px 30px #aeaec007,
      inset -10px -10px 10px #2b2b2b, inset 10px 10px 10px #aeaec014;
    border-radius: 20px;
    margin: 1rem;

    ::focus {
      box-shadow: -10px -10px 30px #fff, 10px 10px 30px #aeaec040,
        inset -10px -10px 10px #aeaec025, inset 10px 10px 10px #fff;
    }
  }

  @media screen and (max-width: 961px) {
    display: flex;
    flex-direction: row;

    .skin-icon-button {
      margin: 0.5rem;
      outline: none;
    }
  }
`;

const OperatorPreview = styled.div`
  display: flex;
  flex-direction: column;
`;

const OperatorClassWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 961px) {
    display: flex;
    flex-direction: row;
  }
`;

const OperatorClassIcon = styled.div`
  cursor: pointer;
  background: #2b2b2b;
  box-shadow: -10px -10px 30px #2b2b2b, 10px 10px 30px #aeaec007,
    inset -10px -10px 10px #2b2b2b, inset 10px 10px 10px #aeaec014;
  border-radius: 20px;
  margin: 1rem;

  @media screen and (max-width: 961px) {
    margin: 2rem;
  }
`;

export default TopImageOperator;
