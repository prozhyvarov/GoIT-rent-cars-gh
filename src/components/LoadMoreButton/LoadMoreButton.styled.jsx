import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
margin-top:20px;
margin-bottom:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  width: 120px;
  border: solid 1px;
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  background-color: #fba003;
  transition: all 250ms;

  &:hover,
  &:focus {
    border: 1px solid #000000;
    cursor: pointer;
    transform: scale(1.1);
  }
`;