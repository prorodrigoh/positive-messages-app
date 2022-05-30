import { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
// import { ImageBackground } from 'react-native';
// import {styles} from './src/styles'
import Home from './src/scenes/Home.js';
import AddNew from './src/scenes/AddNew.js';
// import bkgimg from './assets/good-vibes-bkg.jpeg'

const Stack = createNativeStackNavigator()
export const NewVibeContext = createContext(null)


export default function App() {

  const [vibesUpdated, setVibesUpdated] = useState()
  
  return (
<>
    <NewVibeContext.Provider value={{vibesUpdated, setVibesUpdated}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ title: 'Good Vibes'}}/>
            <Stack.Screen name='AddNew' component={AddNew} options={{ title: 'Add Good Vibe'}}/>
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
    </NewVibeContext.Provider>
</>
  );

}