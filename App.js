import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import HomeScreen from './screens/HomeScreen'; 
const Stack = createNativeStackNavigator();

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (navigation) => {
    const action = isLogin ? 'login' : 'register';
    const response = await fetch(`http://192.168.1.7/crimeless/api.php?action=${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${username}&password=${password}${!isLogin ? `&email=${email}` : ''}`
    });

    const data = await response.json();
    if (data.success) {
      Alert.alert(data.success);
     
      navigation.navigate('Home');
    } else {
      Alert.alert(data.error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login/Register" options={{ headerShown: false }}>
          {({ navigation }) => (
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']} 
              style={styles.container}
            >
              <Text style={styles.welcomeText}>Welcome to Crimeless!</Text>
              <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>
              {!isLogin && (
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                  placeholderTextColor="#ddd"
                />
              )}
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                placeholderTextColor="#ddd"
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#ddd"
              />
              <TouchableOpacity style={styles.button} onPress={() => handleSubmit(navigation)}>
                <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Register'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.switchText}>{`Switch to ${isLogin ? 'Register' : 'Login'}`}</Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF', 
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#fff', 
    marginTop: 15,
    fontSize: 16,
  },
});

export default App;