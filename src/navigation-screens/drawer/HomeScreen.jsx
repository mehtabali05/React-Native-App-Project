import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './style';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='open drawer' onPress={() => navigation.openDrawer()} />
    </View>
  )
}

export default HomeScreen