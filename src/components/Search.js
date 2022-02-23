import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

  const [query, setQuery] = useState('');

  const inputHandler = (e) => {
     setQuery(e.target.value);
     props.search(e.target.value);
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input placeholder="Search..." value={query} type="text" onChange={inputHandler} />
    </>
  );
}

export default Search;
