import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavMain = styled.nav`
  background-color: #000;
  border-top-right-radius:20px;
  border-top-left-radius:20px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  min-width: 90px;
  color: #000;
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  transition: all 250ms;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #fba003;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  gap:   30px;
`;
