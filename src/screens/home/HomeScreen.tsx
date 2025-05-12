import { StyleSheet } from "react-native";
import React from "react";
import AppSaveView from "../../views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/products";
import ProductCard from "../../components/cards/ProductCard";
import { vs } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            onAddToCartPress={() => {}}
            imageURL={item.imageURL}
            title={item.title}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "center",
          marginBottom: vs(10),
          gap: vs(10),
        }}
        contentContainerStyle={{
          paddingHorizontal: vs(15),
        }}
      />
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
