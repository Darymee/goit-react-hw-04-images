import PropTypes from 'prop-types';
import { useState } from 'react';

import { TbSearch } from 'react-icons/tb';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit, toast }) {
  const [query, setQuery] = useState('');

  const onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    setQuery(value);
  };

  const reset = () => {
    setQuery('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      toast('Please write something! 🤨');
      return;
    }

    onSubmit(query);
    reset();
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={query}
        />
        <SearchFormBtn type="submit">
          <TbSearch />
        </SearchFormBtn>
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};
