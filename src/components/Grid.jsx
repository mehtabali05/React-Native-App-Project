import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import {userData} from '../screens/contact/userContactInfo'

const Grid = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.gridcontainer}>
        {
            userData.map((item) => 
                <View key={item.id} style= {styles.gridItem}>
                    <Text style={styles.gridText}>{item.name}</Text>
                </View>
            )
        }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    gridItem: {
        borderWidth: 2,
        borderColor: 'white',
        padding: 20,
        margin: 5,
        borderRadius: 10,
        width: '47%',
        
    },
    gridText: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    gridcontainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
});

export default Grid