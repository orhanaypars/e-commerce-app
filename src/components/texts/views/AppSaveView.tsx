import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import React from "react";
import { AppColors } from "../../../styles/colors";

import { ViewStyle } from "react-native";
import { IS_Android } from "../../../constants/constants";

interface AppSaveViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const AppSaveView: React.FC<AppSaveViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSaveView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: IS_Android ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
