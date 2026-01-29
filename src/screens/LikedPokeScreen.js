import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import PokemonCard from '../components/LikePokemonCard'; 

export default function LikedPokemonScreen() {
  const liked = useSelector((state) => state.pokemon.liked);
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const numColumns = isTablet ? 2 : 1;

  if (liked.length === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No liked Pokemon 
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={liked}
        key={numColumns} 
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={numColumns > 1 ? styles.row : null}
        renderItem={({ item }) => (
          <View
            style={[
              styles.cardWrapper,
              { width: isTablet ? '48%' : '100%' },
            ]}
          >
            <PokemonCard pokemon={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  listContent: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  cardWrapper: {
    marginBottom: 16,
    alignSelf: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
});
