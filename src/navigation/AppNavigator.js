import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/IntroScreen';
import PokemonScreen from '../screens/PokemonScreen';
import LikedPokemonScreen from '../screens/LikedPokeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        {/* INTRO SCREEN */}
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />

        {/*  POKEMON SWIPE SCREEN */}
        <Stack.Screen
          name="Pokemon"
          component={PokemonScreen}
          options={({ navigation }) => ({
            title: 'Pokemon',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Liked')}
                style={{ paddingHorizontal: 8 }}
              >
                <Text style={{ fontSize: 18 }}>Liked</Text>
              </TouchableOpacity>
            ),
          })}
        />

        {/* LIKED POKEMON SCREEN */}
        <Stack.Screen
          name="Liked"
          component={LikedPokemonScreen}
          options={{
            title: 'Liked Pokémon',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
