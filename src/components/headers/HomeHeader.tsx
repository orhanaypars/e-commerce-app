import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppColors from "../../styles/colors";
import { vs, ms } from "react-native-size-matters";
import { images } from "../../constants/images-paths";
import { Ionicons } from "@expo/vector-icons";

interface HomeHeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  title = "",
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {showBackButton && (
          <TouchableOpacity 
            onPress={onBackPress} 
            style={styles.backButton}
            testID="back-button"
          >
            <Ionicons name="arrow-back" size={24} color={AppColors.white} />
          </TouchableOpacity>
        )}
        
        {title ? (
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        ) : (
          <Image source={images.appLogo} style={styles.logo} />
        )}
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    paddingBottom: vs(10),
    paddingTop: vs(10),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(16),
    minHeight: vs(50),
  },
  backButton: {
    marginRight: ms(12),
    padding: ms(4),
  },
  title: {
    color: AppColors.white,
    fontSize: ms(18),
    fontWeight: '600',
    flex: 1,
    marginRight: vs(40), // To balance the back button space when not present
  },
  logo: {
    height: vs(40),
    width: vs(40),
    tintColor: AppColors.white,
  },
});
