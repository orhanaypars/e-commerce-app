import { NavigatorScreenParams } from '@react-navigation/native';

// Auth stack parameter list
export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

// Main app bottom tabs parameter list
export type MainAppBottomTabsParamList = {
  HomeScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
  // Add other tab screens here
};

// Root navigation parameter list
export type RootStackParamList = {
  AuthScreen: NavigatorScreenParams<AuthStackParamList>;
  MainAppBottomTabs: NavigatorScreenParams<MainAppBottomTabsParamList>;
};

// Helper types for useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
