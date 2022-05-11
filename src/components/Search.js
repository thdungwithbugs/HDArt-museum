import React from 'react';
import {SearchInput} from 'evergreen-ui';

const Search = ({search, onChange}) => {
    return (
        <SearchInput placeholder='Tìm chủ đề hoặc bức tranh bạn muốn' width='100%' height='3rem' value={search} onChange={onChange} autoFocus>
        </SearchInput>
    );
};

export default Search;