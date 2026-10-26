import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './style';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button title='open drawer' onPress={() => navigation.openDrawer()} />
    </View>
  )
}

export default ProfileScreen