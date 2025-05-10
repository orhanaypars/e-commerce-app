import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, View } from "react-native";
import React from "react";
import { AppColors } from "../../../styles/colors";

const AppSaveView = () => {
  return (
    <SafeAreaView style={{styles.safeArea}}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSaveView;

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    padding: 16,
  },
});
