import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #000;
  flex-wrap: wrap;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TimeView = styled.View`
  width: 33%;
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const ButtonsView = styled.View`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;
