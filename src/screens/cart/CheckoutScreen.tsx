import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vs, ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AppText from '../../components/texts/AppText';
import AppColors from '../../styles/colors';

interface FormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const CheckoutScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    const { fullName, email, address, city, zipCode, country, cardNumber, expiryDate, cvv } = formData;
    return (
      fullName.trim() !== '' &&
      email.trim() !== '' && 
      email.includes('@') &&
      address.trim() !== '' &&
      city.trim() !== '' &&
      zipCode.trim() !== '' &&
      country.trim() !== '' &&
      cardNumber.replace(/\s/g, '').length === 16 &&
      expiryDate.trim().length === 5 &&
      cvv.trim().length === 3
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      // Process payment here
      Alert.alert(
        'Order Confirmed',
        'Thank you for your purchase! Your order has been placed successfully.',
        [
          { 
            text: 'OK', 
            onPress: () => navigation.navigate('MainAppBottomTabs', { screen: 'HomeScreen' })
          }
        ]
      );
    } else {
      Alert.alert('Invalid Form', 'Please fill all fields correctly');
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (value: string) => {
    const formatted = formatCardNumber(value);
    handleChange('cardNumber', formatted);
  };

  const handleExpiryDateChange = (value: string) => {
    // Format as MM/YY
    let formatted = value.replace(/[^0-9]/g, '');
    if (formatted.length > 2) {
      formatted = `${formatted.substring(0, 2)}/${formatted.substring(2, 4)}`;
    }
    handleChange('expiryDate', formatted);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <AppText style={styles.backButtonText}>← Back</AppText>
            </TouchableOpacity>
            <AppText style={styles.headerTitle}>Checkout</AppText>
          </View>

          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Shipping Information</AppText>
            
            <View style={styles.inputContainer}>
              <AppText style={styles.label}>Full Name</AppText>
              <TextInput
                style={styles.input}
                value={formData.fullName}
                onChangeText={(text) => handleChange('fullName', text)}
                placeholder="John Doe"
                placeholderTextColor={AppColors.textSecondary}
              />
            </View>

            <View style={styles.inputContainer}>
              <AppText style={styles.label}>Email</AppText>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
                placeholder="example@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={AppColors.textSecondary}
              />
            </View>

            <View style={styles.inputContainer}>
              <AppText style={styles.label}>Address</AppText>
              <TextInput
                style={styles.input}
                value={formData.address}
                onChangeText={(text) => handleChange('address', text)}
                placeholder="123 Main St"
                placeholderTextColor={AppColors.textSecondary}
              />
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputContainer, styles.halfInput]}>
                <AppText style={styles.label}>City</AppText>
                <TextInput
                  style={styles.input}
                  value={formData.city}
                  onChangeText={(text) => handleChange('city', text)}
                  placeholder="New York"
                  placeholderTextColor={AppColors.textSecondary}
                />
              </View>

              <View style={[styles.inputContainer, styles.halfInput]}>
                <AppText style={styles.label}>Zip Code</AppText>
                <TextInput
                  style={styles.input}
                  value={formData.zipCode}
                  onChangeText={(text) => handleChange('zipCode', text)}
                  placeholder="10001"
                  keyboardType="numeric"
                  placeholderTextColor={AppColors.textSecondary}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <AppText style={styles.label}>Country</AppText>
              <TextInput
                style={styles.input}
                value={formData.country}
                onChangeText={(text) => handleChange('country', text)}
                placeholder="United States"
                placeholderTextColor={AppColors.textSecondary}
              />
            </View>
          </View>

          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Payment Details</AppText>
            
            <View style={styles.inputContainer}>
              <AppText style={styles.label}>Card Number</AppText>
              <TextInput
                style={styles.input}
                value={formData.cardNumber}
                onChangeText={handleCardNumberChange}
                placeholder="4242 4242 4242 4242"
                keyboardType="numeric"
                maxLength={19} // 16 digits + 3 spaces
                placeholderTextColor={AppColors.textSecondary}
              />
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputContainer, styles.halfInput]}>
                <AppText style={styles.label}>Expiry Date</AppText>
                <TextInput
                  style={styles.input}
                  value={formData.expiryDate}
                  onChangeText={handleExpiryDateChange}
                  placeholder="MM/YY"
                  keyboardType="numeric"
                  maxLength={5} // MM/YY
                  placeholderTextColor={AppColors.textSecondary}
                />
              </View>

              <View style={[styles.inputContainer, styles.halfInput]}>
                <AppText style={styles.label}>CVV</AppText>
                <TextInput
                  style={styles.input}
                  value={formData.cvv}
                  onChangeText={(text) => handleChange('cvv', text.replace(/[^0-9]/g, ''))}
                  placeholder="123"
                  keyboardType="numeric"
                  maxLength={3}
                  secureTextEntry
                  placeholderTextColor={AppColors.textSecondary}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.placeOrderButton, !isFormValid() && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!isFormValid()}
          >
            <AppText style={styles.placeOrderButtonText}>Place Order</AppText>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(16),
    paddingVertical: vs(12),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.divider,
  },
  backButton: {
    paddingVertical: vs(8),
    paddingHorizontal: ms(8),
  },
  backButtonText: {
    fontSize: ms(16),
    color: AppColors.primary,
  },
  headerTitle: {
    flex: 1,
    fontSize: ms(18),
    fontWeight: '600',
    color: AppColors.textPrimary,
    textAlign: 'center',
    marginRight: ms(40), // To offset the back button and center the title
  },
  section: {
    paddingHorizontal: ms(16),
    paddingVertical: vs(16),
  },
  sectionTitle: {
    fontSize: ms(18),
    fontWeight: '600',
    color: AppColors.textPrimary,
    marginBottom: vs(16),
  },
  inputContainer: {
    marginBottom: vs(16),
  },
  label: {
    fontSize: ms(14),
    color: AppColors.textSecondary,
    marginBottom: vs(6),
  },
  input: {
    height: vs(48),
    borderWidth: 1,
    borderColor: AppColors.divider,
    borderRadius: 8,
    paddingHorizontal: ms(12),
    fontSize: ms(16),
    color: AppColors.textPrimary,
    backgroundColor: AppColors.lightGray,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  placeOrderButton: {
    backgroundColor: AppColors.primary,
    borderRadius: 12,
    paddingVertical: vs(16),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ms(16),
    marginTop: vs(16),
    marginBottom: vs(32),
  },
  disabledButton: {
    backgroundColor: AppColors.divider,
  },
  placeOrderButtonText: {
    color: AppColors.white,
    fontSize: ms(16),
    fontWeight: '600',
  },
});