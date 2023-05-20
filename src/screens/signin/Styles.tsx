import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63C2D1;
  flex: 1;
  align-items: center;
  padding-top: 10px;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 10px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: #268596;
  margin-left: 10px;
  background: #fff
  padding: 15px;
  border-radius: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #268596;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #FFF;
`;