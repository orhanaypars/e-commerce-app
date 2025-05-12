import { StyleSheet, Image, ActivityIndicator, View } from "react-native";
import React, { useState } from "react";
import AppSaveView from "../../views/AppSaveView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { images } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/types";
import { useAuth } from "../../context/AuthContext";
import { showMessage } from "react-native-flash-message";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { signup } = useAuth();

  const handleSignUp = async () => {
    if (!userName || !email || !password) {
      showMessage({
        message: "Please fill in all fields",
        type: "danger",
      });
      return;
    }
    
    if (password.length < 6) {
      showMessage({
        message: "Password must be at least 6 characters long",
        type: "danger",
      });
      return;
    }
    
    setIsLoading(true);
    const success = await signup(userName, email, password);
    setIsLoading(false);
    
    if (success) {
      // The navigation will happen automatically via MainAppStack
    }
  };

  return (
    <AppSaveView style={styles.container}>
      <Image source={images.appLogo} style={styles.logo} />
      <AppTextInput 
        placeholder="User Name" 
        onChangeText={setUserName} 
        value={userName}
      />
      <AppTextInput 
        placeholder="Email" 
        onChangeText={setEmail} 
        value={email}
        keyboardType="email-address"
      />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      
      {isLoading ? (
        <View style={styles.buttonContainer}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      ) : (
        <AppButton 
          title="Create New Account" 
          onPress={handleSignUp}
        />
      )}
      
      <AppButton
        title="Sign In"
        onPress={() => navigation.navigate("SignInScreen")}
      />
    </AppSaveView>
  );
};

export default SignUpScreen;

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
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
});
