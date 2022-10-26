import PropTypes from 'prop-types';
import { Component } from 'react';
import { TbSearch } from 'react-icons/tb';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = { query: '' };

  onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    this.setState({ query: value });
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query) {
      this.props.toast('Please write something! 🤨');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.query}
          />
          <SearchFormBtn type="submit">
            <TbSearch />
          </SearchFormBtn>
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};
