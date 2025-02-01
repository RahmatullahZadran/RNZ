import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const RoadsScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [vehicleImage, setVehicleImage] = useState(null);

  const pickBackground = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setBackgroundImage(result.assets[0].uri);
    }
  };

  const addVehicle = () => {
    // For simplicity, we're using a static image here
    setVehicleImage(require('./assets/car.png'));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage ? { uri: backgroundImage } : require('./assets/default_road.jpg')}
        style={styles.background}
      >
        {vehicleImage && <Image source={vehicleImage} style={styles.vehicle} />}
      </ImageBackground>

      <Button mode="contained" onPress={pickBackground} style={styles.button}>
        Choose Background
      </Button>
      <Button mode="contained" onPress={addVehicle} style={styles.button}>
        Add Vehicle
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vehicle: {
    width: 100,
    height: 50,
    position: 'absolute',
  },
  button: {
    marginVertical: 10,
    width: '80%',
  },
});

export default RoadsScreen;