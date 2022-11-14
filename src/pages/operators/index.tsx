import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

import Card from "src/components/common/Card";
import SearchPanel from "src/components/common/Search/SearchPanel";
import { SearchPanelProps } from "src/components/Interfaces";
import { useOperators } from "src/utils/useOperators";

const Operators: React.FC = () => {
  const { allOperators, isLoading, isError } = useOperators();
  const [search, setSearch] = useState<string>("");

  const handleQueryChange: SearchPanelProps["handleQueryChange"] = (e) => {
    const updatedQuery = e.target.value === "" ? "" : e.target.value;
    setSearch(updatedQuery);
  };

  return !isLoading ? (
    <>
      <title>Operators</title>
      <SearchPanel handleQueryChange={handleQueryChange} />
      <WhitePanelWrapper>
        {!isError ? (
          <>
            {allOperators
              ?.filter((operator: any) => {
                if (operator === "") return operator;
                else if (
                  operator.name.toLowerCase().includes(search.toLowerCase())
                )
                  return operator;
              })
              .map((operator: any, index: number) => (
                <Card key={index} data={operator}></Card>
              ))}
          </>
        ) : (
          <div className="error">Uh Oh Looks Like There is A Problem</div>
        )}
      </WhitePanelWrapper>
    </>
  ) : (
    <SkeletonTheme baseColor="#404040" borderRadius={"2rem"}>
      <SkeletonWrapper>
        <Skeleton className="search-content" />
        <Skeleton className="content" />
      </SkeletonWrapper>
    </SkeletonTheme>
  );
};

const WhitePanelWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 4rem 5rem;
  border-style: solid;
  border-radius: 2rem;
  background-color: #fbfffe;
  color: #181818;

  .error {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  @media screen and (max-width: 961px) {
    display: flex;
    flex-direction: column;
  }
`;

const SkeletonWrapper = styled.div`
  display: block;
  justify-content: center;
  margin: 2rem 5rem;

  .search-content {
    margin-bottom: 2rem;
    width: 60%;
    height: 30px;
  }

  .content {
    width: 100%;
    height: 600px;
  }
  @media screen and (max-width: 961px) {
    .search-content {
      width: 100%;
      height: 40px;
    }
    .content {
      width: 100%;
    }
  }
`;

export default Operators;
