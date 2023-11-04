import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1400px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 60px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Text = styled.h2`
  margin: 0;
  color: #121214;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 20px;
  text-transform: none;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 140px;
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
