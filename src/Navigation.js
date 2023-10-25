import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import About from './components/About';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PokemonStack = () => (
   <Stack.Navigator
      screenOptions={() => ({
         headerTitleAlign: 'center',
      })}
   >
      <Stack.Screen 
         name='Pokemon List' 
         component={ListScreen}
         options={() => ({
            headerTitle: 'Pokemons',
         })}  
      />
      <Stack.Screen 
         name='Details' 
         component={DetailsScreen}   
      />
   </Stack.Navigator>
);

const AppNavigation = () =>(
   <NavigationContainer>
      <Tab.Navigator
         screenOptions={() => ({
            tabBarLabelPosition: 'beside-icon',
            tabBarLabelStyle: { fontSize: 16 },
            tabBarIconStyle: { display: 'none' },
         })}
      >
         <Tab.Screen 
            name='Pokemons' 
            component={PokemonStack}
            options={() => ({
               headerShown: false,
            })}
         />
         <Tab.Screen 
            name='About' 
            component={About}
            options={() => ({
               headerTitle: 'About This App',
               headerTitleAlign: 'center',
            })}
        />
      </Tab.Navigator>
   </NavigationContainer>
);

export default AppNavigation;