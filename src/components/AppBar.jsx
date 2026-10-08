import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import style from '../css/Style'

const AppBar = () => {
  return (
    <View>
      <Text style= { {fontSize: 30, marginBlockEnd: 20} } >AppBar</Text>

      <Text style={ style.text}>App Bar</Text>
    </View>
  )
}


// const style = StyleSheet.create({
//   text: {
//     fontSize: 30,
//     margin: 10,
//     padding: 6,
//     backgroundColor: 'green',
//     color: 'white',
//     borderWidth: 2,
//     borderColor: 'white',
//     textAlign: 'center',
//     borderRadius: 20
//   }
// });

export default AppBar