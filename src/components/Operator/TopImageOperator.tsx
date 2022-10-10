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
            alt={"Sniper"}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Guard" ? (
          <Image
            src={"/ClassIcons/guard.png"}
            alt={"Guard"}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Vanguard" ? (
          <Image
            src={"/ClassIcons/vanguard.png"}
            alt={"Vanguard"}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Supporter" ? (
          <Image
            src={"/ClassIcons/supporter.png"}
            alt={"Supporter"}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Medic" ? (
          <Image
            src={"/ClassIcons/medic.png"}
            alt={"Medic"}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Caster" ? (
          <Image
            src={"/ClassIcons/caster.png"}
            alt={"Caster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Defender" ? (
          <Image
            src={"/ClassIcons/defender.png"}
            alt={"Defender"}
            width={100}
            height={100}
          ></Image>
        ) : classType[0] === "Specialist" ? (
          <Image
            src={"/ClassIcons/specialist.png"}
            alt={"Specialist"}
            width={100}
            height={100}
          ></Image>
        ) : (
          <Skeleton></Skeleton>
        )}

        {classType[1] === "Flagbearer" || classType[2] === "Standard Bearer" ? (
          <Image
            src={"/ClassIcons/vanguard_flagbearer.png"}
            alt={"Flagbearer/Standard Bearer"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "DP-On-Kill" || classType[2] === "Charger" ? (
          <Image
            src={"/ClassIcons/vanguard_charger.png"}
            alt={"DP-On-Kill/Charger"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Skill-DP" || classType[2] === "Pioneer" ? (
          <Image
            src={"/ClassIcons/vanguard_pioneer.png"}
            alt={"Skill-DP/Pioneer"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Summoner" || classType[2] === "Tactician" ? (
          <Image
            src={"/ClassIcons/vanguard_summoner.png"}
            alt={"Summoner/Tactician"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Artificer" ? (
          <Image
            src={"/ClassIcons/supporter_artificer.png"}
            alt={"Artificer"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Buffer" || classType[2] === "Abjurer" ? (
          <Image
            src={"/ClassIcons/supporter_buffer.png"}
            alt={"Buffer/Abjurer"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Slower" || classType[2] === "Decel Binder" ? (
          <Image
            src={"/ClassIcons/supporter_slower.png"}
            alt={"Slower/Decel Binder"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Debuffer" || classType[2] === "Hexer" ? (
          <Image
            src={"/ClassIcons/supporter_hexer.png"}
            alt={"Debuffer/Hexer"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Aura" || classType[2] === "Bard" ? (
          <Image
            src={"/ClassIcons/supporter_bard.png"}
            alt={"Aura/Bard"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Summoner" ? (
          <Image
            src={"/ClassIcons/supporter_summoner.png"}
            alt={"Summoner"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Subsitute" || classType[2] === "Dollkeeper" ? (
          <Image
            src={"/ClassIcons/specialist_dollkeeper.png"}
            alt={"Substitute/Dollkeeper"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "DP-Drain" || classType[2] === "Merchant" ? (
          <Image
            src={"/ClassIcons/specialist_merchant.png"}
            alt={"DP-Drain/Merchant"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Fast-Redeploy" || classType[2] === "Executor" ? (
          <Image
            src={"/ClassIcons/specialist_executor.png"}
            alt={"Fast-Redeploy/Executor"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Pusher" || classType[2] === "Push Stroker" ? (
          <Image
            src={"/ClassIcons/specialist_pusher.png"}
            alt={"Pusher/Push Stroker"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Puller" || classType[2] === "Hookmaster" ? (
          <Image
            src={"/ClassIcons/specialist_hookmaster.png"}
            alt={"Puller/Hookmaster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Ambusher" ? (
          <Image
            src={"/ClassIcons/specialist_ambusher.png"}
            alt={"Ambusher"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Sacrificial Specialist" ? (
          <Image
            src={"/ClassIcons/specialist_sacrificial.png"}
            alt={"Sacrificial Specialist"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Trapmaster" ? (
          <Image
            src={"/ClassIcons/specialist_trapmaster.png"}
            alt={"Trapmaster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "ST" && classType[2] === "Medic" ? (
          <Image
            src={"/ClassIcons/medic_st.png"}
            alt={"ST/Medic"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "AoE" && classType[2] === "Multi-Target Medic" ? (
          <Image
            src={"/ClassIcons/medic_aoe.png"}
            alt={"AoE/Multi-Target Medic"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Wide-Range" || classType[2] === "Therapist" ? (
          <Image
            src={"/ClassIcons/medic_therapist.png"}
            alt={"Wide-Range/Therapist"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Wandering Medic" ? (
          <Image
            src={"/ClassIcons/medic_wandering.png"}
            alt={"Wandering Medic"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Anti-Air" || classType[2] === "Marksman" ? (
          <Image
            src={"/ClassIcons/sniper_marksman.png"}
            alt={"Anti-Air/Marksman"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Boomstick" || classType[2] === "Spreadshooter" ? (
          <Image
            src={"/ClassIcons/sniper_boomstick.png"}
            alt={"Boomstick/Spreadshooter"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Aftershock" || classType[2] === "Flinger" ? (
          <Image
            src={"/ClassIcons/sniper_aftershock.png"}
            alt={"Aftershock/Flinger"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Close Range" ||
          classType[2] === "Heavyshooter" ? (
          <Image
            src={"/ClassIcons/sniper_heavyshooter.png"}
            alt={"Close Range/Heavyshooter"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Heavyweight" || classType[2] === "Besieger" ? (
          <Image
            src={"/ClassIcons/sniper_heavyweight.png"}
            alt={"Heavyweight/Besieger"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "AoE" && classType[2] === "Artilleryman" ? (
          <Image
            src={"/ClassIcons/sniper_aoe.png"}
            alt={"AoE/Artilleryman"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Long-Range" && classType[2] === "Deadeye" ? (
          <Image
            src={"/ClassIcons/sniper_longrange.png"}
            alt={"Long-Range/Deadeye"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Ranged" || classType[2] === "Lord" ? (
          <Image
            src={"/ClassIcons/guard_lord.png"}
            alt={"Ranged/Lord"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Brawler" || classType[2] === "Fighter" ? (
          <Image
            src={"/ClassIcons/guard_brawler.png"}
            alt={"Brawler/Fighter"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "AoE" && classType[2] === "Centurion" ? (
          <Image
            src={"/ClassIcons/guard_centurion.png"}
            alt={"AoE/Centurion"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Duelist" && classType[2] === "Dreadnought" ? (
          <Image
            src={"/ClassIcons/guard_duelist.png"}
            alt={"Duelist/Dreadnought"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Support" || classType[2] === "Instructor" ? (
          <Image
            src={"/ClassIcons/guard_instructor.png"}
            alt={"Support/Instructor"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Enmity" && classType[2] === "Musha" ? (
          <Image
            src={"/ClassIcons/guard_musha.png"}
            alt={"Enmity/Musha"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Dualstrike" || classType[2] === "Swordmaster" ? (
          <Image
            src={"/ClassIcons/guard_dualstrike.png"}
            alt={"Dualstrike/Swordmaster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Arts Fighter" ? (
          <Image
            src={"/ClassIcons/guard_artsfighter.png"}
            alt={"Arts Fighter"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Reaper Guard" ? (
          <Image
            src={"/ClassIcons/guard_reaper.png"}
            alt={"Reaper Guard"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Liberator Guard" ? (
          <Image
            src={"/ClassIcons/guard_liberator.png"}
            alt={"Liberator Guard"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Healing" || classType[2] === "Guardian" ? (
          <Image
            src={"/ClassIcons/defender_guardian.png"}
            alt={"Healing/Guardian"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Enmity" && classType[2] === "Juggernaut" ? (
          <Image
            src={"/ClassIcons/defender_juggernaut.png"}
            alt={"Enmity/Juggernaut"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Normal" || classType[2] === "Protector" ? (
          <Image
            src={"/ClassIcons/defender_protector.png"}
            alt={"Normal/Protector"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Duelist" ? (
          <Image
            src={"/ClassIcons/defender_duelist.png"}
            alt={"Duelist"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Fortress" ? (
          <Image
            src={"/ClassIcons/defender_fortress.png"}
            alt={"Fortress"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Arts Protector" ? (
          <Image
            src={"/ClassIcons/defender_artsprotector.png"}
            alt={"Arts Protector"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "ST" && classType[2] === "Core Caster" ? (
          <Image
            src={"/ClassIcons/caster_core.png"}
            alt={"ST/Core Caster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Burninator" || classType[2] === "Blast Caster" ? (
          <Image
            src={"/ClassIcons/caster_burninator.png"}
            alt={"Burninator/Blast Caster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Drone" || classType[2] === "Mech-Accord" ? (
          <Image
            src={"/ClassIcons/caster_drone.png"}
            alt={"Drone/Mech-Accord"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Modal" || classType[2] === "Phalanx Caster" ? (
          <Image
            src={"/ClassIcons/caster_phalanx.png"}
            alt={"Modal/Phalanx Caster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "AoE" && classType[2] === "Splash Caster" ? (
          <Image
            src={"/ClassIcons/caster_aoe.png"}
            alt={"AoE/Splash Caster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Charge" || classType[2] === "Mystic Caster" ? (
          <Image
            src={"/ClassIcons/caster_mystic.png"}
            alt={"Charge/Mystic Caster"}
            width={100}
            height={100}
          ></Image>
        ) : classType[1] === "Chain Caster" ? (
          <Image
            src={"/ClassIcons/caster_chain.png"}
            alt={"Chain Caster"}
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
  flex-direction: column;
`;

export default TopImageOperator;
