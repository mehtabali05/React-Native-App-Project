import { View, Text, Button, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

const ButtonTypes = () => {
  return (
    <View>
      <Text>ButtonTypes</Text>

      <Button title='Normal Button' />

      <TouchableOpacity style={styles.opacityButton} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Opacity Button</Text>
      </TouchableOpacity>


      <TouchableHighlight style={styles.opacityButton} onPress={() => {console.log("Nice")}} underlayColor='blue'>
        <Text style={styles.buttonText}>Highlight Button</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    opacityButton: {
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: 200,
        margin: 10,
        elevation: 5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green'
    }
});

export default ButtonTypes