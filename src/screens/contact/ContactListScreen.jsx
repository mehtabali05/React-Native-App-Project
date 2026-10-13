import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'

import{ userData} from './userContactInfo'
import ContactItem from '../../components/ContactItem'
import {styles} from './style'

const ContactListScreen = () => {
    const renderItem = ({item}) => 
        <ContactItem name={item.name} email={item.email} />
  return (
    <ScrollView >
        <FlatList 
            data={userData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
            ListHeaderComponent={<Text style={styles.heading}>Contact</Text>}
        />
    </ScrollView>
  )
}

export default ContactListScreen