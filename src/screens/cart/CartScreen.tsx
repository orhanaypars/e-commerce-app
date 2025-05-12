import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useCallback, useMemo } from "react";
import AppSaveView from "../../views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import CartItem from "../../components/cart/CartItem";
import TotalsView from "../../components/cart/TotalsView";
import { useCart, Product } from "../../context/CartContext";

const CartScreen = () => {
  // Get cart state and methods from context
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * (item.qty || 1),
      0
    );
  }, [cartItems]);


  // Use the context methods
  const handleIncreaseQty = useCallback((productId: number) => {
    increaseQuantity(productId);
  }, [increaseQuantity]);

  // Handle quantity decrease
  const handleDecreaseQty = useCallback((productId: number) => {
    decreaseQuantity(productId);
  }, [decreaseQuantity]);

  // Handle item removal
  const handleRemoveItem = useCallback((productId: number) => {
    removeFromCart(productId);
  }, [removeFromCart]);

  // Render empty state
  const renderEmptyCart = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Your cart is empty</Text>
    </View>
  );

  // Render cart item
  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <CartItem
        imageURL={item.imageURL}
        title={item.title}
        price={item.price}
        qty={item.qty || 1}
        onDeletePress={() => handleRemoveItem(item.id)}
        onIncreasePress={() => handleIncreaseQty(item.id)}
        onReducePress={() => handleDecreaseQty(item.id)}
      />
    ),
    [handleDecreaseQty, handleIncreaseQty, handleRemoveItem]
  );

  // Memoized key extractor
  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  return (
    <AppSaveView style={styles.container}>
      <HomeHeader title="Shopping Cart" showBackButton />
      
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmptyCart}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={50}
        windowSize={5}
      />
      
      {cartItems.length > 0 && (
        <TotalsView total={totalPrice} onCheckout={() => {}} />
      )}
    </AppSaveView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    flexGrow: 1,
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 20,
  },
});

export default CartScreen;
