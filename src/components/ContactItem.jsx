import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../screens/contact/style'

const ContactItem = ({name,email}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{name}</Text>
      <Text style={styles.listText}>{email}</Text>
    </View>
  )
}

export default ContactItem