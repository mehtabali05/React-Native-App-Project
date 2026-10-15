import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

const StatusbarComponent = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle= {'auto'}
        // hidden={false}
        // backgroundColor={'white'}
        // translucent={false}
        />

        <Text style={styles.text}>StatusbarComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    text: {
        color: 'white',
        fontSize: 24,
    }
});

export default StatusbarComponent