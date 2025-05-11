import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import AppColors from "../../styles/colors";

// Define the types for the props
interface AppButtonProps {
  onPress: () => void; // Callback function for onPress event
  title: string; // Title of the button
  backgroundColor?: string; // Optional background color, defaults to AppColors.primary
  textColor?: string; // Optional text color, defaults to AppColors.white
  style?: ViewStyle | ViewStyle[]; // Optional custom styles for the button
  styleTitle?: StyleProp<TextStyle>; // Correct type for text styles
  disabled?: boolean; // Optional disabled flag
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style,
  styleTitle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? AppColors.disabledGray : backgroundColor,
        },
        style,
      ]}
      disabled={disabled}
    >
      <AppText
        style={StyleSheet.flatten([
          styles.textTitle,
          { color: textColor },
          styleTitle,
        ])}
        variant="bold"
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(25),
    alignSelf: "center",
    margin: vs(5),
  },
  textTitle: {
    fontSize: s(14),
  },
});
