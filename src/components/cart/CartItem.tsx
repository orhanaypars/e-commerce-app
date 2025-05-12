import { StyleSheet, Image, View, Pressable } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import App from "../../../App";
import AppText from "../texts/AppText";
import AppColors from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";
import { AntDesign, FontAwesome } from "@expo/vector-icons";


interface ICartItem{
  title: string;
  price: string | number;
  imageURL: string;
  qty: number;
  onDeletePress: () => void;
  onIncreasePress: () => void;
  onReducePress: () => void;
}

const CartItem: FC<ICartItem> = ({title, price, imageURL, qty, onDeletePress,onIncreasePress,onReducePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
        <AppText style={styles.textPrice}>${price}</AppText>

        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton}
           onPress={onReducePress}
          >
            <FontAwesome name="minus" size={s(12)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.qtyText}>{qty}</AppText>
          <Pressable style={styles.iconButton}
           onPress={onIncreasePress}>
            <FontAwesome name="plus" size={s(12)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>

      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton} onPress={onDeletePress}>
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
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(12),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
    paddingVertical: vs(5), 
  },
  iconButton:{
    justifyContent: "center",
    alignItems: "center",
    padding: s(5),
    borderRadius: s(10),
    backgroundColor: AppColors.lightGray,
    height: s(20),
    width: s(20),
  },
  qtyText: {
    flex:1,
    textAlign: "center",  
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
});
