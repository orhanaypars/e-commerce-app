import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <Text style={{ fontFamily: "Nunito-Medium" }}>HomeScreen</Text>
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
