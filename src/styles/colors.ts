const AppColors = {
  // Brand colors
  primary: "#000",
  primaryLight: "#333333",
  primaryDark: "#000000",
  
  // Grayscale
  white: "#FFFFFF",
  lightGray: "#F5F5F5",
  mediumGray: "#E0E0E0",
  gray: "#9E9E9E",
  darkGray: "#424242",
  black: "#212121",
  
  // Semantic colors
  success: "#4CAF50",
  error: "#F44336",
  warning: "#FFC107",
  info: "#2196F3",
  
  // UI colors
  background: "#FAFAFA",
  surface: "#FFFFFF",
  disabled: "#E0E0E0",
  disabledText: "#9E9E9E",
  border: "#E0E0E0",
  divider: "#EEEEEE",
  
  // Legacy colors (kept for backward compatibility)
  disabledGray: "#D3D3D3",
  blueGray: "#E6E8EA",
  medGray: "#939393",
  borderColor: "#CCCCCC",
  redColor: "#F44336",
  
  // Text colors
  textPrimary: "#212121",
  textSecondary: "#757575",
  textHint: "#9E9E9E",
  textDisabled: "#BDBDBD",
  
  // Status colors
  successLight: "#E8F5E9",
  errorLight: "#FFEBEE",
  warningLight: "#FFF8E1",
  infoLight: "#E3F2FD",
} as const;

export type AppColorsType = keyof typeof AppColors;
export default AppColors;
