import { View, Text, SectionList } from 'react-native'
import React from 'react'

const listItems = [
    {
        title: 'Fruits',
        data: [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Banana'},
            {id: 3, name: 'Orange'}
        ],
    },
    {
        title: 'Vegitable',
        data: [
            {id: 1, name: 'Potato'},
            {id: 2, name: 'Tomato'},
            {id: 3, name: 'Mirchi'}
        ],
    }
];

const SectionListScreen = () => {
    const renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    );

    const renderSectionHeader = ({section}) => (
        <View>
            <Text>{section.title}</Text>
        </View>
    );
  return (
    <View>
      <SectionList 
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default SectionListScreen