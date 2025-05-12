import React, { FC, useMemo } from 'react';
import { StyleSheet, View, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { vs, ms } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import AppColors from '../../styles/colors';
import { shipping, taxRate } from '../../constants/constants';

interface ITotalsView {
  total: number;
  onCheckout: () => void;
}

const TotalsView: FC<ITotalsView> = ({ total, onCheckout }) => {
  const { subtotal, tax, shippingCost, orderTotal } = useMemo(() => {
    const subtotal = total;
    const tax = subtotal * taxRate;
    const shippingCost = subtotal > 0 ? shipping : 0;
    const orderTotal = subtotal + tax + shippingCost;
    
    return {
      subtotal,
      tax,
      shippingCost,
      orderTotal,
    };
  }, [total]);

  const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={styles.row}>
          <AppText style={styles.textTitle}>Subtotal:</AppText>
          <AppText style={styles.textPrice}>{formatCurrency(subtotal)}</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.textTitle}>Tax ({(taxRate * 100).toFixed(0)}%):</AppText>
          <AppText style={styles.textPrice}>{formatCurrency(tax)}</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.textTitle}>Shipping:</AppText>
          <AppText style={styles.textPrice}>
            {shippingCost > 0 ? formatCurrency(shippingCost) : 'Free'}
          </AppText>
        </View>
        <View style={styles.separator} />
        <View style={[styles.row, styles.totalRow]}>
          <AppText style={styles.totalText}>Order Total:</AppText>
          <AppText style={styles.totalText}>{formatCurrency(orderTotal)}</AppText>
        </View>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={onCheckout}
        activeOpacity={0.8}
        testID="checkout-button"
      >
        <AppText style={styles.checkoutButtonText}>Proceed to Checkout</AppText>
      </TouchableOpacity>
    </View>
  );
};

// Define styles with TypeScript types
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderTopWidth: 1,
    borderTopColor: AppColors.divider,
    padding: ms(16),
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  } as ViewStyle,
  summaryContainer: {
    marginBottom: vs(16),
  } as ViewStyle,
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vs(4),
  } as ViewStyle,
  totalRow: {
    marginTop: vs(8),
  } as ViewStyle,
  textTitle: {
    flex: 1,
    fontSize: ms(14),
    color: AppColors.textSecondary,
  } as TextStyle,
  textPrice: {
    fontSize: ms(14),
    color: AppColors.primary,
    fontWeight: '500',
  } as TextStyle,
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: AppColors.divider,
    marginVertical: vs(12),
  } as ViewStyle,
  totalText: {
    fontSize: ms(16),
    fontWeight: '600',
    color: AppColors.textPrimary,
  } as TextStyle,
  checkoutButton: {
    backgroundColor: AppColors.primary,
    borderRadius: 8,
    paddingVertical: vs(14),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vs(8),
  } as ViewStyle,
  checkoutButtonText: {
    color: AppColors.white,
    fontSize: ms(16),
    fontWeight: '600',
  } as TextStyle,
} as const);

export default TotalsView;