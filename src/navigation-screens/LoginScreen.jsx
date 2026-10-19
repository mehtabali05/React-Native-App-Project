import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = ({navigation}) => {
    const [username,setUsername] = useState('')
  return (
    <View>
      <Text>LoginScreen</Text>
      <TextInput 
        placeholder='Enter username'
        onChangeText={setUsername}
      />
      <Button title='Login' onPress={() => navigation.navigate('Home Screen', {username})} />
    </View>
  )
}

export default LoginScreen