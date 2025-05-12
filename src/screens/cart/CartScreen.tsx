import { StyleSheet } from "react-native";
import React from "react";
import AppSaveView from "../../views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";

const CartScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <CartItem />
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
