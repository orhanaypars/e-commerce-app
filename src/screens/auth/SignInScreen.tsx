import { StyleSheet, Image } from "react-native";
import React from "react";
import AppSaveView from "../../views/AppSaveView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { images } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();
  return (
    <AppSaveView style={styles.container}>
      <Image source={images.appLogo} style={styles.logo} />
      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Log in"
        onPress={() => navigation.navigate("MainAppBottomTabs")}
      />
      <AppButton
        title="Sign up"
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </AppSaveView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(20),
  },
});
