import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 80px;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  color: #fff;
  background-image: linear-gradient(60deg, #ffe998, #57370d);
  box-shadow: 0px 20px 66px 3px rgba(0, 0, 0, 0.62);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }

  & > svg {
    width: 20px;
    height: 20px;
    stroke: #57370d;
  }
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  color: #57370d;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
