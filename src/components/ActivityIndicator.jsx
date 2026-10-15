import { View, Text, ActivityIndicator, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ActivityIndicatorLoader = () => {
    const [loading, setLoading] = useState(false);
    const toggleLoader = () => {
        setLoading(!loading)
    }
  return (
    <View style={style.container}>

        {
            loading && (
                <View style={style.loaderContainer}>
                    <ActivityIndicator size='large' color='green' />
                    <Text>Loading.....</Text>
                </View>
            )
        }

        <TouchableHighlight style={style.button} onPress={toggleLoader}>
            <Text style={style.buttonText}>{loading ? "Show Loader": "Hide Loader"}</Text>
        </TouchableHighlight>
 
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'green',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    loaderContainer: {
        backgroundColor: 'white',
        width: 100,
        hight: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        marginBottom: 20,
        borderRadius: 10,
        paddingVertical: 20
    }
});

export default ActivityIndicatorLoader