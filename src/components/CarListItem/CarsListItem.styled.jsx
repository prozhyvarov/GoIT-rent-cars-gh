import styled from 'styled-components';
import { ReactComponent as GoHeart } from 'images//heart-like.svg';

export const Item = styled.li`
  position: relative;
  border-radius: 14px;
  max-width: 474px;
  min-height: 426px;
  overflow: hidden;
  gap: 10px;
  background-color: whitesmoke;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Text = styled.p`
margin:0px;
height:24px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ImageThumb = styled.div`
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 268px;
  object-fit: contain;
  object-position: 50% 50%;
`;

export const Paragraf = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top:14px;
  margin-bottom:8px;
`;

export const Span = styled.span`
  color: #3470ff;
  margin: 0px;
  height: 24px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Descr = styled.p`
  margin: 0;
  margin-bottom: 28px;
  padding: 0 10px;
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const Btn = styled.button`
  display: flex;
  list-style: none;
  min-width: 150px;
  margin: 0px auto;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  width: 100px;
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
export const StyledHeart = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;

  top: 14px;
  right: 14px;
  cursor: pointer;
  &:hover {
  }
`;
export const StyledHeartIcon = styled(GoHeart)`
  width: 18px;
  height: 18px;
  fill: ${({ $isInFavorites }) =>
    $isInFavorites ? 'rgba(52, 112, 255, 1)' : 'transparent'};
  stroke: ${({ $isInFavorites }) =>
    $isInFavorites ? 'rgba(52, 112, 255, 1)' : 'white'};
`;
