import Image from "next/image";
import styled from "styled-components";
import { GoStar } from "react-icons/go";

import { OperatorInfoProps } from "../Interfaces";
import CollapseIcon from "./CollapseIcon";

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
  skills,
  talents,
  potential,
  trust,
  costs,
}: OperatorInfoProps) => {
  return (
    <OperatorInfoWrapper>
      <NameRatingWrapper>
        <title>{name}</title>
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
        <div className="affiliation">
          <h3>Affiliation</h3>
          {affiliation.map((op, index) => (
            <p key={index}>{op}</p>
          ))}
        </div>
      </SecondRowWrapper>

      <MainContentWrapper>
        <CollapseIcon title={"Biography"}>{biography}</CollapseIcon>
        <CollapseIcon title={"Description"}>{description}</CollapseIcon>
        <CollapseIcon title={"Quote"}>{quote}</CollapseIcon>
        <CollapseIcon title={"Trait"}>{trait}</CollapseIcon>
        <CollapseIcon title={"Lore"}>
          {Object.keys(lore).map((op, index) => (
            <p key={index}>
              <span className="op-label">{op}:</span> {lore[op]}
            </p>
          ))}
        </CollapseIcon>
        <CollapseIcon title={"Voicelines"}>
          {Object.keys(voicelines).map((op, index) => (
            <p key={index}>
              <span className="op-label">{op}:</span> {voicelines[op]}
            </p>
          ))}
        </CollapseIcon>
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

        <div className="stats-row1">
          <div>
            <h2>Module</h2>
            {module != null ? (
              <div className="module">
                <p>{module.name}</p>
                <p>{module.level}</p>
                <p>{module.trust}</p>
                <p>{module.availability}</p>
                <p>{module.trait}</p>
                <p>{module.missions}</p>
              </div>
            ) : null}
          </div>
          <div>
            <h2>Potential</h2>
            {potential.map((op, index) => (
              <div key={index} className="potential">
                <p>
                  {op.name}: {op.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h2>Trust</h2>
            {Object.keys(trust).map((op, index) => (
              <div key={index} className="trust">
                <p>
                  {op}: {trust[op]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h2>Base Skills</h2>
        <div className="skills-base">
          {base &&
            base.map((op, index) => (
              <div key={index} className="skills-base-item">
                <p>{op.name}</p>
                <p>{op.level}</p>
                <p>{op.effects}</p>
                <p>{op.building}</p>
              </div>
            ))}
        </div>

        <h2>Operator Skills</h2>
        <div className="skills-operator">
          {skills &&
            skills.map((op, index) => (
              <div key={index} className="skills-operator-item">
                <p>Name: {op.name}</p>
                <p>SP: {op.spcost}</p>
                <p>Initial SP: {op.initialSP}</p>
                <p>Charge Type: {op.chargeType}</p>
                <p>Activation: {op.skillActivation}</p>
                <p>Description: {op.skillDescription}</p>
              </div>
            ))}
        </div>

        <div>
          <h2>Talents</h2>
          {talents.map((op, index) => (
            <div key={index} className="talents">
              <p>
                {op.name}: {op.value}
              </p>
            </div>
          ))}
        </div>

        <h2>Total Cost</h2>
        <div className="cost">
          {/* Essential materials */}
          <p>
            <Image
              src="/CostIcons/lmd.png"
              width={100}
              height={80}
              alt={costs.LMD}
            />
            {costs.LMD}
          </p>
          <p>
            <Image
              src="/CostIcons/skill_sum_1.png"
              width={80}
              height={80}
              alt={costs["Skill Summary - 1"]}
            />
            {costs["Skill Summary - 1"]}
          </p>
          <p>
            <Image
              src="/CostIcons/skill_sum_2.png"
              width={80}
              height={80}
              alt={costs["Skill Summary - 2"]}
            />
            {costs["Skill Summary - 2"]}
          </p>
          <p>
            <Image
              src="/CostIcons/skill_sum_3.png"
              width={80}
              height={80}
              alt={costs["Skill Summary - 3"]}
            />
            {costs["Skill Summary - 3"]}
          </p>

          {/* Materials depending on operator */}
          {costs.Ester != null ? (
            <p>
              <Image
                src="/CostIcons/ester.png"
                width={80}
                height={80}
                alt={costs.Ester}
              />
              {costs.Ester}
            </p>
          ) : null}
          {costs.Polyketon != null ? (
            <p>
              <Image
                src="/CostIcons/polyketon.png"
                width={80}
                height={80}
                alt={costs.Polyketon}
              />
              {costs.Polyketon}
            </p>
          ) : null}
          {costs.Aketon != null ? (
            <p>
              <Image
                src="/CostIcons/aketon.png"
                width={80}
                height={80}
                alt={costs.Aketon}
              />
              {costs.Aketon}
            </p>
          ) : null}
          {costs.Grindstone != null ? (
            <p>
              <Image
                src="/CostIcons/grindstone.png"
                width={80}
                height={80}
                alt={costs.Grindstone}
              />
              {costs.Grindstone}
            </p>
          ) : null}
          {costs.Polyester != null ? (
            <p>
              <Image
                src="/CostIcons/polyester.png"
                width={80}
                height={80}
                alt={costs.Polyester}
              />
              {costs.Polyester}
            </p>
          ) : null}
          {costs.Orirock != null ? (
            <p>
              <Image
                src="/CostIcons/orirock.png"
                width={80}
                height={80}
                alt={costs.Orirock}
              />
              {costs.Orirock}
            </p>
          ) : null}
          {costs.Sugar != null ? (
            <p>
              <Image
                src="/CostIcons/sugar.png"
                width={80}
                height={80}
                alt={costs.Sugar}
              />
              {costs.Sugar}
            </p>
          ) : null}
          {costs.Diketon != null ? (
            <p>
              <Image
                src="/CostIcons/diketon.png"
                width={80}
                height={80}
                alt={costs.Diketon}
              />
              {costs.Diketon}
            </p>
          ) : null}
          {costs.Device != null ? (
            <p>
              <Image
                src="/CostIcons/device.png"
                width={80}
                height={80}
                alt={costs.Device}
              />
              {costs.Device}
            </p>
          ) : null}
          {costs["Sugar Substitute"] != null ? (
            <p>
              <Image
                src="/CostIcons/sugar_substitute.png"
                width={80}
                height={80}
                alt={costs["Sugar Substitute"]}
              />
              {costs["Sugar Substitute"]}
            </p>
          ) : null}
          {costs["Integrated Device"] != null ? (
            <p>
              <Image
                src="/CostIcons/integrated_device.png"
                width={80}
                height={80}
                alt={costs["Integrated Device"]}
              />
              {costs["Integrated Device"]}
            </p>
          ) : null}
          {costs["Damaged Device"] != null ? (
            <p>
              <Image
                src="/CostIcons/damaged_device.png"
                width={80}
                height={80}
                alt={costs["Damaged Device"]}
              />
              {costs["Damaged Device"]}
            </p>
          ) : null}
          {costs["Optimized Device"] != null ? (
            <p>
              <Image
                src="/CostIcons/optimized_device.png"
                width={80}
                height={80}
                alt={costs["Optimized Device"]}
              />
              {costs["Optimized Device"]}
            </p>
          ) : null}
          {costs["Manganese Ore"] != null ? (
            <p>
              <Image
                src="/CostIcons/manganese_ore.png"
                width={80}
                height={80}
                alt={costs["Manganese Ore"]}
              />
              {costs["Manganese Ore"]}
            </p>
          ) : null}
          {costs["Manganese Trihydrate"] != null ? (
            <p>
              <Image
                src="/CostIcons/manganese_trihydrate.png"
                width={80}
                height={80}
                alt={costs["Manganese Trihydrate"]}
              />
              {costs["Manganese Trihydrate"]}
            </p>
          ) : null}
          {costs["Oriron Shard"] != null ? (
            <p>
              <Image
                src="/CostIcons/oriron_shard.png"
                width={80}
                height={80}
                alt={costs["Oriron Shard"]}
              />
              {costs["Oriron Shard"]}
            </p>
          ) : null}
          {costs.Oriron != null ? (
            <p>
              <Image
                src="/CostIcons/oriron.png"
                width={80}
                height={80}
                alt={costs.Oriron}
              />
              {costs.Oriron}
            </p>
          ) : null}
          {costs["Oriron Cluster"] != null ? (
            <p>
              <Image
                src="/CostIcons/oriron_cluster.png"
                width={80}
                height={80}
                alt={costs["Oriron Cluster"]}
              />
              {costs["Oriron Cluster"]}
            </p>
          ) : null}
          {costs["Oriron Block"] != null ? (
            <p>
              <Image
                src="/CostIcons/oriron_block.png"
                width={80}
                height={80}
                alt={costs["Oriron Block"]}
              />
              {costs["Oriron Block"]}
            </p>
          ) : null}
          {costs["Loxic Kohl"] != null ? (
            <p>
              <Image
                src="/CostIcons/loxic_kohl.png"
                width={80}
                height={80}
                alt={costs["Loxic Kohl"]}
              />
              {costs["Loxic Kohl"]}
            </p>
          ) : null}
          {costs["White Horse Kohl"] != null ? (
            <p>
              <Image
                src="/CostIcons/white_horse_kohl.png"
                width={80}
                height={80}
                alt={costs["White Horse Kohl"]}
              />
              {costs["White Horse Kohl"]}
            </p>
          ) : null}
          {costs["Keton Colloid"] != null ? (
            <p>
              <Image
                src="/CostIcons/keton_colloid.png"
                width={80}
                height={80}
                alt={costs["D32 Steel"]}
              />
              {costs["Keton Colloid"]}
            </p>
          ) : null}
          {costs["D32 Steel"] != null ? (
            <p>
              <Image
                src="/CostIcons/d32_steel.png"
                width={80}
                height={80}
                alt={costs["D32 Steel"]}
              />
              {costs["D32 Steel"]}
            </p>
          ) : null}
          {costs["Incandescent Alloy"] != null ? (
            <p>
              <Image
                src="/CostIcons/incandescent_alloy.png"
                width={80}
                height={80}
                alt={costs["Incandescent Alloy"]}
              />
              {costs["Incandescent Alloy"]}
            </p>
          ) : null}
          {costs["Incandescent Alloy Block"] != null ? (
            <p>
              <Image
                src="/CostIcons/incandescent_alloy_block.png"
                width={80}
                height={80}
                alt={costs["Incandescent Alloy Block"]}
              />
              {costs["Incandescent Alloy Block"]}
            </p>
          ) : null}
          {costs["Polymerization Preparation"] != null ? (
            <p>
              <Image
                src="/CostIcons/polymerization_preparation.png"
                width={80}
                height={80}
                alt={costs["Polymerization Preparation"]}
              />
              {costs["Polymerization Preparation"]}
            </p>
          ) : null}
          {costs["Grindstone Pentahydrate"] != null ? (
            <p>
              <Image
                src="/CostIcons/grindstone_pentahydrate.png"
                width={80}
                height={80}
                alt={costs["Grindstone Pentahydrate"]}
              />
              {costs["Grindstone Pentahydrate"]}
            </p>
          ) : null}
          {costs["Coagulating Gel"] != null ? (
            <p>
              <Image
                src="/CostIcons/coagulating_gel.png"
                width={80}
                height={80}
                alt={costs["Coagulating Gel"]}
              />
              {costs["Coagulating Gel"]}
            </p>
          ) : null}
          {costs["Polymerized Gel"] != null ? (
            <p>
              <Image
                src="/CostIcons/polymerized_gel.png"
                width={80}
                height={80}
                alt={costs["Polymerized Gel"]}
              />
              {costs["Polymerized Gel"]}
            </p>
          ) : null}
          {costs["Orirock Cube"] != null ? (
            <p>
              <Image
                src="/CostIcons/orirock_cube.png"
                width={80}
                height={80}
                alt={costs["Orirock Cube"]}
              />
              {costs["Orirock Cube"]}
            </p>
          ) : null}
          {costs["Orirock Cluster"] != null ? (
            <p>
              <Image
                src="/CostIcons/orirock_cluster.png"
                width={80}
                height={80}
                alt={costs["Orirock Cluster"]}
              />
              {costs["Orirock Cluster"]}
            </p>
          ) : null}
          {costs["Orirock Concentration"] != null ? (
            <p>
              <Image
                src="/CostIcons/orirock_concentration.png"
                width={80}
                height={80}
                alt={costs["Orirock Concentration"]}
              />
              {costs["Orirock Concentration"]}
            </p>
          ) : null}
          {costs["RMA70-12"] != null ? (
            <p>
              <Image
                src="/CostIcons/rma7012.png"
                width={80}
                height={80}
                alt={costs["RMA70-12"]}
              />
              {costs["RMA70-12"]}
            </p>
          ) : null}
          {costs["RMA70-24"] != null ? (
            <p>
              <Image
                src="/CostIcons/rma7024.png"
                width={80}
                height={80}
                alt={costs["RMA70-24"]}
              />
              {costs["RMA70-24"]}
            </p>
          ) : null}
          {costs["Bipolar Nanoflake"] != null ? (
            <p>
              <Image
                src="/CostIcons/bipolar_nanoflake.png"
                width={80}
                height={80}
                alt={costs["Bipolar Nanoflake"]}
              />
              {costs["Bipolar Nanoflake"]}
            </p>
          ) : null}
          {costs["Crystalline Component"] != null ? (
            <p>
              <Image
                src="/CostIcons/crystalline_component.png"
                width={80}
                height={80}
                alt={costs["Crystalline Component"]}
              />
              {costs["Crystalline Component"]}
            </p>
          ) : null}
          {costs["Crystalline Circuit"] != null ? (
            <p>
              <Image
                src="/CostIcons/crystalline_circuit.png"
                width={80}
                height={80}
                alt={costs["Crystalline Circuit"]}
              />
              {costs["Crystalline Circuit"]}
            </p>
          ) : null}
          {costs["Crystalline Electronic Unit"] != null ? (
            <p>
              <Image
                src="/CostIcons/crystalline_electronic_unit.png"
                width={80}
                height={80}
                alt={costs["Crystalline Electronic Unit"]}
              />
              {costs["Crystalline Electronic Unit"]}
            </p>
          ) : null}
          {costs["Compound Cutting Fluid"] != null ? (
            <p>
              <Image
                src="/CostIcons/compound_cutting_fluid.png"
                width={80}
                height={80}
                alt={costs["Compound Cutting Fluid"]}
              />
              {costs["Compound Cutting Fluid"]}
            </p>
          ) : null}
          {costs["Cutting Fluid Solution"] != null ? (
            <p>
              <Image
                src="/CostIcons/cutting_fluid_solution.png"
                width={80}
                height={80}
                alt={costs["Cutting Fluid Solution"]}
              />
              {costs["Cutting Fluid Solution"]}
            </p>
          ) : null}
          {costs["Refined Solvent"] != null ? (
            <p>
              <Image
                src="/CostIcons/refined_solvent.png"
                width={80}
                height={80}
                alt={costs["Refined Solvent"]}
              />
              {costs["Refined Solvent"]}
            </p>
          ) : null}
          {costs["Semi-Synthetic Solvent"] != null ? (
            <p>
              <Image
                src="/CostIcons/semi_synthetic_solvent.png"
                width={80}
                height={80}
                alt={costs["Semi-Synthetic Solvent"]}
              />
              {costs["Semi-Synthetic Solvent"]}
            </p>
          ) : null}

          {/* Specific to class upgrade chips */}
          {costs["Specialist Chip"] != null ? (
            <p>
              <Image
                src="/CostIcons/specialist_chip.png"
                width={80}
                height={80}
                alt={costs["Specialist Chip"]}
              />
              {costs["Specialist Chip"]}
            </p>
          ) : null}
          {costs["Specialist Dualchip"] != null ? (
            <p>
              <Image
                src="/CostIcons/specialist_dualchip.png"
                width={80}
                height={80}
                alt={costs["Specialist Dualchip"]}
              />
              {costs["Specialist Dualchip"]}
            </p>
          ) : null}
          {costs["Guard Chip"] != null ? (
            <p>
              <Image
                src="/CostIcons/guard_chip.png"
                width={80}
                height={80}
                alt={costs["Guard Chip"]}
              />
              {costs["Guard Chip"]}
            </p>
          ) : null}
          {costs["Guard Dualchip"] != null ? (
            <p>
              <Image
                src="/CostIcons/guard_dualchip.png"
                width={80}
                height={80}
                alt={costs["Guard Dualchip"]}
              />
              {costs["Guard Dualchip"]}
            </p>
          ) : null}
          {costs["Caster Chip"] != null ? (
            <p>
              <Image
                src="/CostIcons/caster_chip.png"
                width={80}
                height={80}
                alt={costs["Caster Chip"]}
              />
              {costs["Caster Chip"]}
            </p>
          ) : null}
          {costs["Caster Dualchip"] != null ? (
            <p>
              <Image
                src="/CostIcons/caster_dualchip.png"
                width={80}
                height={80}
                alt={costs["Caster Dualchip"]}
              />
              {costs["Specialist Dualchip"]}
            </p>
          ) : null}
          {costs["Medic Chip"] != null ? (
            <p>
              <Image
                src="/CostIcons/medic_chip.png"
                width={80}
                height={80}
                alt={costs["Medic Chip"]}
              />
              {costs["Medic Chip"]}
            </p>
          ) : null}
          {costs["Medic Dualchip"] != null ? (
            <p>
              <Image
                src="/CostIcons/medic_dualchip.png"
                width={80}
                height={80}
                alt={costs["Medic Dualchip"]}
              />
              {costs["Medic Dualchip"]}
            </p>
          ) : null}
          {costs["Supporter Chip"] != null ? (
            <p>
              <Image
                src="/CostIcons/supporter_chip.png"
                width={80}
                height={80}
                alt={costs["Supporter Chip"]}
              />
              {costs["Supporter Chip"]}
            </p>
          ) : null}
          {costs["Supporter Dualchip"] != null ? (
            <p>
              <Image
                src="/CostIcons/supporter_dualchip.png"
                width={80}
                height={80}
                alt={costs["Supporter Dualchip"]}
              />
              {costs["Supporter Dualchip"]}
            </p>
          ) : null}
          {costs["Vanguard Chip"] != null ? (
            <p>
              <Image
                src="/CostIcons/vanguard_chip.png"
                width={80}
                height={80}
                alt={costs["Vanguard Chip"]}
              />
              {costs["Vanguard Chip"]}
            </p>
          ) : null}
          {costs["Vanguard Dualchip"] != null ? (
            <p>
              <Image
                src="/CostIcons/vanguard_dualchip.png"
                width={80}
                height={80}
                alt={costs["Vanguard Dualchip"]}
              />
              {costs["Vanguard Dualchip"]}
            </p>
          ) : null}
          {costs["Sniper Chip"] != null ? (
            <p>
              <Image
                src="/CostIcons/sniper_chip.png"
                width={80}
                height={80}
                alt={costs["Sniper Chip"]}
              />
              {costs["Sniper Chip"]}
            </p>
          ) : null}
          {costs["Sniper Dualchip"] != null ? (
            <p>
              <Image
                src="/CostIcons/sniper_dualchip.png"
                width={80}
                height={80}
                alt={costs["Sniper Dualchip"]}
              />
              {costs["Sniper Dualchip"]}
            </p>
          ) : null}
        </div>
      </StatisticsWrapper>
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
    display: flex;
    align-items: center;
    text-align: center;
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

    &-row1 {
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      align-items: center;
      justify-items: center;
      text-align: center;
    }
  }

  .skills {
    &-base {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      &-item {
        display: flex;
        flex-direction: column;
      }
    }

    &-operator {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      &-item {
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .cost {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 1rem;
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
