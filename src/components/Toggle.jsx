import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Toggle = () => {
    const [show, setShow] = useState(false);
    const [status, setStatus] =  useState('Hide');
    const changeStatus = () => {
        if(status === "Hide"){
            setStatus("Show");
            setShow(true)
        }else{
            setStatus("Hide");
            setShow(false)
        }
    }
  return (
    <View>
      {show ? "": <Text style={styles.text}>Shown</Text>}

      <Button title={status} onPress={changeStatus}/>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'white'
    }
});

export default Toggle