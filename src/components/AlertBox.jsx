import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const AlertBox = () => {
    const showAlert = () => {
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log("Cancel"),
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => console.log("Ok"),
                }
            ],
            {cancelable: true}
        );
    }
  return (
    <View>
      <Text>AlertBox</Text>

      <Button title='Show Alert' onPress={showAlert} />
    </View>
  )
}

export default AlertBox