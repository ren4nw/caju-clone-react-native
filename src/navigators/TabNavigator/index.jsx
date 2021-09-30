import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/Home';
import styles from './styles';
import TabIcon from '../../component/TabIcon';

const Tab = createMaterialBottomTabNavigator();

function Cards() {
  return null;
}

function Account() {
  return null;
}

function TabNavigator() {
 
  return (
    <Tab.Navigator activeColor="#3d6fdb" barStyle={styles.barStyle}>
      <Tab.Screen name="INÍCIO" component={Home} options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="home" /> }} />
      <Tab.Screen name="CARTÕES" component={Cards} options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="credit-card" /> }} />
      <Tab.Screen name="CONTA" component={Account} options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="user" /> }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
