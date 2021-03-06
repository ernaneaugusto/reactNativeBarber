import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import AppStyles from "../../config/styles";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: AppStyles.grayDark },
      }}
      initialRouteName="SignIn"
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
