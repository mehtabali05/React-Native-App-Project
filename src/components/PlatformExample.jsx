import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'

const PlatformExample = () => {
  return (
    <View style={styles.container}>
        <StatusBar
            barStyle= 'dark-content'
            // backgroundColor= 'white'
            // translucent = {false}
         />
      <Text>{
            Platform.select({
                'android': 'Welcome to Android App',
                'ios': "Welcome to IOS Device"
            })
        }
      </Text>
      <Text>You are Android user</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? 'blue' : 'yellow'
    },

});

export default PlatformExample