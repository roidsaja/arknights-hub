import { useRouter } from "next/router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import OperatorInfo from "src/components/Operator/OperatorInfo";
import TopImageOperator from "src/components/Operator/TopImageOperator";
import { useOperator } from "src/utils/useOperators";

const OperatorName = () => {
  const router = useRouter();
  const { operator, isLoading, isError } = useOperator(router.query.name);
  return !isLoading ? (
    <>
      <TopImageOperator
        image={operator.art}
        classType={operator.class}
        rarity={operator.rarity}
      />
      <OperatorInfo
        name={operator.name}
        rarity={operator.rarity}
        alter={operator.alter}
        artist={operator.artist}
        va={operator.va}
        biography={operator.biography}
        description={operator.description}
        quote={operator.quote}
        voicelines={operator.voicelines}
        lore={operator.lore}
        affiliation={operator.affiliation}
        class={operator.class}
        tags={operator.tags}
        statistics={operator.statistics}
        trait={operator.trait}
        availability={operator.availability}
        url={operator.url}
        headhunting={operator.headhunting}
        recruitable={operator.recruitable}
        base={operator.base}
        module={operator.module}
        skills={operator.skills}
        talents={operator.talents}
        potential={operator.potential}
        trust={operator.trust}
        costs={operator.costs}
      />
    </>
  ) : (
    <>
      <SkeletonTheme baseColor="#404040" borderRadius={"2rem"}>
        <Skeleton height={"100vw"}></Skeleton>
      </SkeletonTheme>
    </>
  );
};

export default OperatorName;
