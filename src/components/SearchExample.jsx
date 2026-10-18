import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'

const SearchExample = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const data = [
        {id: 1, name: 'Ali'},
        {id: 2, name: 'Khan'},
        {id: 3, name: 'Bahadur'},
        {id: 4, name: 'Shah'},
        {id: 5, name: 'Zafar'}
    ];

    const filteredData = data.filter((user) => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search User</Text>

      <TextInput 
        placeholder='Search user'
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />

      <FlatList 
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: 'white'
    }
});

export default SearchExample