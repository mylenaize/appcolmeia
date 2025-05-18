import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Infos from "../pages/infos";
import Questions from "../pages/questions";
import Details from "../pages/details";
import Perfil from "../pages/perfil";

// ✅ Tipagem das rotas e seus parâmetros
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Infos: undefined;
  Questions: undefined;
  Perfil: undefined;
  Details: {
    result?: string;
    user?: {
      name?: string;
      age?: string;
      city?: string;
      state?: string;
      plan?: string;
      accessibility?: string;
    };
  };
};



// ✅ Criar o stack com a tipagem
const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}
