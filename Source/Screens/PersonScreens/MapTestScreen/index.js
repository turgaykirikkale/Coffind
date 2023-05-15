import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
function MapScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
}

export default MapScreen;
