import { StyleSheet, TextInput, KeyboardTypeOptions } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppColors from "../../styles/colors";

type AppTextInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  style?: any;
};

const AppTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}: AppTextInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input].concat(
        style ? (Array.isArray(style) ? style : [style]) : []
      )}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: vs(35),
    borderRadius: s(25),
    borderWidth: s(1),
    borderColor: AppColors.borderColor,
    paddingHorizontal: s(15),
    marginStart: s(15),
    fontSize: s(13),
    backgroundColor: AppColors.white,
    width: "90%",
    marginBottom: vs(10),
    marginTop: vs(10),
  },
});
