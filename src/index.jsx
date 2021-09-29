import React from 'react';
import { registerRootComponent } from 'expo';
import { Text } from 'react-native';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando....</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

registerRootComponent(App);

export default App;
