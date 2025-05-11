import { StyleSheet } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        {" "}
        <FlashMessage position="top" />
        <MainAppStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
