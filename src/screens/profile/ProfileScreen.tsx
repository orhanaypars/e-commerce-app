import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";

const ProfileScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
