import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} 
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to Crimeless!</Text>
      <Text style={styles.subtitle}>Your Safety Matters</Text>
      <Text style={styles.description}>
        Crimeless is dedicated to raising awareness about potential hazards and promoting a safer environment for everyone.
      </Text>
      <Image 
        source={require('../assets/safety-icon.png')} 
        style={styles.image}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login/Register')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    width: 100, 
    height: 100, 
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
