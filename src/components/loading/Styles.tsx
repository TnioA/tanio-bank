import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%
  height: 100%;
`;

export const BlockTouch = styled.SafeAreaView`
  background-color: #000;
  display: flex
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120%;
  opacity: 0.3;
`;