import { Login } from "./src/login";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  return fontsLoaded ? <Login /> : <AppLoading />;
}
