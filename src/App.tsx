import "react-native-gesture-handler";

import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/index";
import AppStyles from "./../config/styles";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={AppStyles.grayDark} />
      <View style={{ flex: 1, backgroundColor: AppStyles.grayDark }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
