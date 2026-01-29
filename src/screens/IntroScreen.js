import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IntroScreen({ navigation }) {
  const { width, height } = useWindowDimensions();

  const isTablet = width >= 768;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View
          style={[
            styles.card,
            {
              width: isTablet ? width * 0.6 : width * 0.9,
              paddingVertical: height * 0.05,
              paddingHorizontal: width * 0.06,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              { fontSize: isTablet ? 36 : 28 },
            ]}
          >
            Pokemon
          </Text>

          <Text
            style={[
              styles.text,
              { fontSize: isTablet ? 18 : 16 },
            ]}
          >
            Discover Pokemon and swipe to like your favorites!
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Pokemon')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    marginBottom: 28,
    color: '#444',
  },
  button: {
    backgroundColor: '#FF5252',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
