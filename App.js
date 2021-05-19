import { StatusBar } from 'expo-status-bar';
import React from 'react';
import PlacesNavigation from './navigation/PlacesNavigation'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <PlacesNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
