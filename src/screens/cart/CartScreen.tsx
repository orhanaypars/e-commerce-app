import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";

const CartScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
