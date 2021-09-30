import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator barStyle={styles.tabContainer}>
      <Tab.Screen name="Início" component={Home} options={{ tabBarIcon: () => <FontAwesome5 name="user" /> }} />
      <Tab.Screen name="Cartões" component={() => null} />
      <Tab.Screen name="Conta" component={() => null} />
    </Tab.Navigator>
  )
}

export default TabNavigator;
