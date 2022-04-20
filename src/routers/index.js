import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  SignIn,
  SignUp,
  Home,
  Cart,
  History,
  About,
  MyAccount,
  TopUp,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
