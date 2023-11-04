import styled from 'styled-components';

export const Title = styled.p`
  margin: 0;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const Form = styled.form`
  width: 1360px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0;
  background-color: whitesmoke;
  gap: 20px;
`;

export const SubForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  gap: 20px;
`;

export const EnterText = styled.div`
  display: flex;
  gap:10px;
  min-width: 320px;
  height: 40px;
  border: none;
  align-items: flex-start;
  margin-top: 20px;

  margin: 0;
`;
export const LabelMilage1 = styled.input`
  display: flex;
  width: 160px;
  border: none;
  margin: 0;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 4px 0px 0px 4px;
  border-right: 1px solid lightgray;
  background-color: white;
  align-items: flex-start;
`;
export const LabelMilage2 = styled.input`
  display: flex;
  width: 160px;
  border: none;
  margin: 0;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 0px 4px 4px 0px;
  background-color: white;
  border-left: 1px solid lightgray;
`;
export const BtnSearch = styled.button`
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
