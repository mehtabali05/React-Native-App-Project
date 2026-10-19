import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation, route}) => {
  const {username} = route.params;
  return (
    <View>
      <Text> Welcome {username} on Home Screen</Text>
      <Button title='Go to About screen' onPress={() => navigation.navigate('About')} />
    </View>
  )
}

export default Home