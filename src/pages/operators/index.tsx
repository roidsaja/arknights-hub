import styled from "styled-components";
import useSWR from "swr";

import Card from "src/components/common/Card";
import SearchPanel from "src/components/common/Search/SearchPanel";
import { SearchPanelProps } from "src/components/Interfaces";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const url =
  "https://cors-anywhere-image-mltl3mrpia-an.a.run.app/https://rhodesapi.herokuapp.com/api/rhodes/operator";

const fetcher = async (url: RequestInfo | URL) =>
  await fetch(url).then((res) => res.json());

const Operators: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(query, 1000);
  const { data, error } = useSWR(url, fetcher);
  const [op, setOp] = useState(data);

  const handleQueryChange: SearchPanelProps["handleQueryChange"] = (e) => {
    const updatedQuery = e.target.value === "" ? "" : e.target.value;
    setQuery(updatedQuery);
  };

  return data ? (
    <>
      <SearchPanel handleQueryChange={handleQueryChange} />
      <WhitePanelWrapper>
        {!error ? (
          <>
            {data?.map((operator: any, index: number) => (
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
