import { StyleSheet, Image, View, Pressable } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import App from "../../../App";
import AppText from "../texts/AppText";
import AppColors from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import { AntDesign } from "@expo/vector-icons";

const tempItem = {
  id: 1,
  price: 1199,
  title: "iPhone 16 Pro Max",
  imageURL:
    "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
};

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: tempItem.imageURL,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{tempItem.title}</AppText>
        <AppText style={styles.textPrice}>${tempItem.price}</AppText>
      </View>

      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color={AppColors.redColor} />
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  image: {
    height: s(80),
    width: s(80),
    borderRadius: s(5),
  },
  textTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginVertical: vs(5),
  },
  deleteText: {
    marginLeft: 7,
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    fontSize: s(12),
    marginTop: vs(3),
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});
