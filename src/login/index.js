import * as C from "./style";
import BackgroundImage from "../assets/Background.png";
import LogoImage from "../assets/Spotify.png";
import Phone from "../assets/Phone.png";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";
import { TouchableOpacity } from "react-native";

export const Login = () => {
  return (
    <C.Container>
      <C.BackgroundImage source={BackgroundImage} alt="background" />
      <C.ContainerLogo>
        <C.Logo source={LogoImage} alt="logo" />
        <C.Typography size="26px" mrTop="4px">
          Millions of songs.
        </C.Typography>
        <C.Typography size="26px" mrTop="4px">
          Free on Spotify.
        </C.Typography>
      </C.ContainerLogo>

      <C.ButtonLogin primary>
        <C.Typography primary>Sign up free</C.Typography>
      </C.ButtonLogin>

      <C.ButtonLogin>
        <C.ImageSocial isPhone source={Phone} alt="Phone" />
        <C.Typography>Continue with phone number</C.Typography>
      </C.ButtonLogin>

      <C.ButtonLogin>
        <C.ImageSocial source={Google} alt="Google" />
        <C.Typography>Continue with Google</C.Typography>
      </C.ButtonLogin>

      <C.ButtonLogin>
        <C.ImageSocial source={Facebook} alt="Facebook" />
        <C.Typography>Continue with Facebook</C.Typography>
      </C.ButtonLogin>

      <TouchableOpacity>
        <C.Typography>Log in</C.Typography>
      </TouchableOpacity>
    </C.Container>
  );
};
