import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

import { SearchPanelProps } from "src/components/Interfaces";

const SearchPanel = ({ handleQueryChange }: SearchPanelProps) => {
  return (
    <SearchWrapper>
      <SearchOutline>
        <SearchIcon type="submit">
          <BsSearch color="white" />
        </SearchIcon>
        <SearchInput
          type="text"
          onChange={handleQueryChange}
          placeholder="Search Operator..."
        />
      </SearchOutline>
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
  display: block;
  width: calc(
    100% - 24px
  ); /*20px [ left & Right ] padding + 4px border [ left & Right ] */
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: white;
  padding: 10px;
  border: 2px solid transparent;
  background: #404040;
  &:focus-visible {
    outline-style: none;
  }
`;

const SearchOutline = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  justify-content: center;
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50px;
  background: transparent;
  border: transparent;
  font-size: 20px;
  cursor: pointer;
  outline: 0;
`;
export default SearchPanel;
