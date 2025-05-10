import { StyleSheet } from "react-native";
import AppText from "./src/components/texts/texts/AppText";
import AppSaveView from "./src/components/texts/views/AppSaveView";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function App() {
  return (
    <>
      {" "}
      <FlashMessage position="top" />
      <AppSaveView style={styles.container}>
        <AppText
          onPress={() => {
            showMessage({
              message: "Hello World",
              description: "This is a message",
              type: "success",
              icon: "success",
              duration: 3000,
            });
          }}
          variant="bold"
        >
          Hello World
        </AppText>
      </AppSaveView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
