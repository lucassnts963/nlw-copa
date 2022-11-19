import {
  Center,
  NativeBaseProvider,
  Text,
  VStack,
  StatusBar,
} from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { AuthContextProvider } from "./src/contexts/AuthContext";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
