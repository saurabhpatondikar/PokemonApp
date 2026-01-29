import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {
  getPokemon,
  likePokemon,
  dislikePokemon,
} from '../redux/pokemonSlice';
import SwipePokemonCard from '../components/SwipePokemonCard';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export default function PokemonScreen() {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);
  
  return (
    <SafeAreaView style={styles.safe}>
    <View>
      {list.length > 0 && list
      .slice(0, 3)
      .reverse()
        .map((pokemon) => (
          <SwipePokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onLike={() => dispatch(likePokemon(pokemon))}
            onDislike={() => dispatch(dislikePokemon(pokemon))}
          />
        ))}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }
});

