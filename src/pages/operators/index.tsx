import styled from "styled-components";
import { useState } from "react";

import Card from "src/components/common/Card";
import SearchPanel from "src/components/common/Search/SearchPanel";
import { SearchPanelProps } from "src/components/Interfaces";
import { getOperators } from "src/utils/getOperators";

const Operators: React.FC = () => {
  const { allOperators, isLoading, isError } = getOperators();
  const [search, setSearch] = useState<string>("");

  const handleQueryChange: SearchPanelProps["handleQueryChange"] = (e) => {
    const updatedQuery = e.target.value === "" ? "" : e.target.value;
    setSearch(updatedQuery);
  };

  return !isLoading ? (
    <>
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
    <div>
      <h1>Loading...</h1>
    </div>
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

export default Operators;
