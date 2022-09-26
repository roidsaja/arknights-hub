import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

import { SearchPanelProps } from "src/components/Interfaces";

const SearchPanel = ({ handleQueryChange }: SearchPanelProps) => {
  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        onChange={handleQueryChange}
        placeholder="Search Operator..."
      />
      <SearchIconWrapper>
        <BsSearch color="#4595ff" />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const SearchInput = styled.input`
  border: 0;
  font-size: 24px;
  padding: 0;
  &:focus-visible {
    outline-style: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;
export default SearchPanel;
