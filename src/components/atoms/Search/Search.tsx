import React from "react";
import { GetProps, Input } from "antd";

const { Search: ADSearch } = Input;

export type ADSearchProps = GetProps<typeof Input.Search>;

interface SearchProps {
  isLoading: boolean;
  onSearch: ADSearchProps["onSearch"];
}

const Search: React.FC<SearchProps> = ({ isLoading, onSearch }) => (
  <ADSearch
    allowClear
    loading={isLoading}
    onSearch={onSearch}
    placeholder="Search contact"
  />
);

export default Search;
