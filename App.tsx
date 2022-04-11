import React from "react";
import { Events } from "./scr/screens/Events";
import { Home } from "./scr/screens/Home";
import { Post1 } from "./scr/screens/Posts/Post01";
import AppLoading from 'expo-app-loading';
import { useFonts, Epilogue_400Regular, Epilogue_500Medium, Epilogue_600SemiBold, Epilogue_700Bold, Epilogue_800ExtraBold } from '@expo-google-fonts/epilogue';
import { ThemeProvider } from 'styled-components/native';
import THEME from './scr/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Post2 } from "./scr/screens/Posts/Post02";
import { Post3 } from "./scr/screens/Posts/Post03";
import { Post4 } from "./scr/screens/Posts/Post04";



const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular, Epilogue_500Medium, Epilogue_600SemiBold, Epilogue_700Bold, Epilogue_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={THEME}>
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen 
          name= "Home" 
          component={Home}
          />
          <Stack.Screen 
          name= "Events" 
          component={Events}/>

          <Stack.Screen
          name= "Post1"
          component={Post1}
          />
          <Stack.Screen
          name= "Post2"
          component={Post2}/>
          <Stack.Screen
          name= "Post3"
          component={Post3}/>
          <Stack.Screen
          name= "Post4"
          component={Post4}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}