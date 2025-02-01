import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const FrontScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/default_background.png')} // Reference the image here
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Roads')}
        >
          Roads
        </Button>
        {/* Add more buttons as needed */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginVertical: 10,
    width: '80%',
  },
});

export default FrontScreen;