import { View, Text, FlatList } from 'react-native'
import React from 'react'

import{ userData} from './userContactInfo'
import ContactItem from '../../components/ContactItem'
import {styles} from './style'

const ContactListScreen = () => {
    const renderItem = ({item}) => 
        <ContactItem name={item.name} email={item.email} />
  return (
    <View >
        <FlatList 
            data={userData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
            ListHeaderComponent={<Text style={styles.heading}>Contact</Text>}
        />
    </View>
  )
}

export default ContactListScreen