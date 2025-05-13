import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import { useAuth } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import CheckoutScreen from "../screens/cart/CheckoutScreen";

const Stack = createStackNavigator();

export default function MainAppStack() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isAuthenticated ? "MainAppBottomTabs" : "AuthScreen"}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="AuthScreen" component={AuthStack} />
      ) : (
        <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      )}
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
