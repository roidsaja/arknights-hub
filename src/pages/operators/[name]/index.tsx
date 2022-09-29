import { useRouter } from "next/router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
      <h1>{operator.name}</h1>
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
