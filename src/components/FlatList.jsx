import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const FlatListScreen = () => {
    const data = [
        {id: 1, title: "Item 1"},
        {id: 2, title: "Item 2"},
        {id: 3, title: "Item 3"},
        {id: 4, title: "Item 4"},
        {id: 5, title: "Item 5"},
    ];


    const renderItem = ({item}) => (
        <View style={styles.list}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem= {renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    list: {
        marginVertical: 5,
        backgroundColor: 'white',
        padding: 5
    },
    title: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'green',
        padding: 10
    }
});

export default FlatListScreen;