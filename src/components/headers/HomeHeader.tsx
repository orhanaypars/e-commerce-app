import { StyleSheet, Image, View } from "react-native";
import React from "react";
import AppColors from "../../styles/colors";
import { vs } from "react-native-size-matters";
import { images } from "../../constants/images-paths";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={images.appLogo} style={styles.logo} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(10),
  },
  logo: {
    height: vs(40),
    width: vs(40),
    tintColor: AppColors.white,
  },
});
