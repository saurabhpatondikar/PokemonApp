import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import PokemonCard from './Pokemoncard';

const { width, height } = Dimensions.get('window');

export default function SwipePokemonCard({
  pokemon,
  onLike,
  onDislike,
}) {
  if (!pokemon) return null;
  const onLikePress = () => {
    onLike()
  }

  const onDislikePress = () => {
    onDislike()
  }
  return (
    <View style={styles.container}>
      <Swiper
        key={pokemon.id}
        cards={[pokemon]}           
        renderCard={(card) =>
          card ? <PokemonCard 
          pokemon={card}
          onLikePress = {onLikePress}
          onDislikePress = {onDislikePress}
           /> : null
        }
        onSwipedRight={() => onLike()}
        onSwipedLeft={() => onDislike()}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={1}
        disableTopSwipe
        disableBottomSwipe
        animateCardOpacity
        swipeBackCard
        cardVerticalMargin={0}
        horizontalSwipe={true}
        verticalSwipe={false}
        cardStyle={styles.card}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.9,
    height: height * 0.65,
    alignSelf: 'center',
  },
});
