import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar, Text } from 'react-native';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './navigators/TabNavigator';

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando....</Text>;
  }

  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

registerRootComponent(App);

export default App;
