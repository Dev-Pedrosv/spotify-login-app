import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #121212;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.Image`
  width: 400px;
  height: 600px;
  position: absolute;
  top: 0;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ContainerLogo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 100px;
`;

export const Typography = styled.Text`
  color: ${(props) => (props.primary ? "#000" : "#fff")};
  font-family: "Poppins_600SemiBold";
  font-size: ${(props) => props.size || "16px"};
  margin-top: ${(props) => props.mrTop || "0px"};
  text-align: center;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: ${(props) => (props.primary ? "#00d361" : "transparent")};
  border: ${(props) => (props.primary ? "" : "2px solid #b4b4b49c")};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ImageSocial = styled.Image`
  width: ${(props) => (props.isPhone ? "20px" : "30px")};
  height: 30px;
  margin-right: 16px;
`;
