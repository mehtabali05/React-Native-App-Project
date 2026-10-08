import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  return (
    <View>
      <Text style={ {fontSize: 30} }>Number: {props.count}</Text>
    </View>
  )
}

export default Child