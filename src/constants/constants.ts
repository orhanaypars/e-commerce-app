import { Platform } from "react-native";

export const IS_Android = Platform.OS === "android";
export const IS_IOS = Platform.OS === "ios";

// Cart related constants
export const shipping = 10; // Fixed shipping cost
// Tax rate as a decimal (e.g., 0.15 for 15%)
export const taxRate = 0.15;

// For backward compatibility
export const taxes = 15; // Deprecated, use taxRate instead
