import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LikePokemonCard({ pokemon }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.name}>
        {pokemon.name.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    elevation: 6,
  },
  image: {
    width: '80%',
    height: 120,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
