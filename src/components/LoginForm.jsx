import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Email: ", email);
        console.log("Password: ",password);

        setEmail('');
        setPassword('');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput 
        style={styles.input}
        placeholder='Enter email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='white'
      />

      <TextInput 
        style={styles.input}
        placeholder='Enter password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor='white'
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        margin: 10,
        padding: 40,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        gap: 20
    },
    input: {
        borderWidth: 2,
        paddingHorizontal: 15,
        borderColor: 'white',
        fontSize: 15,
        borderRadius: 10,
        color: 'white'
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default LoginForm