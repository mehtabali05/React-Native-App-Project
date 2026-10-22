import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
      <Button title='open drawer' onPress={() => navigation.openDrawer()} />
    </View>
  )
}

export default SettingScreen