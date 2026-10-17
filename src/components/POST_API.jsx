import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const POST_API = () => {
    const initialData = {
        id: '',
        name: '',
        email: ''
    };

    const [formData, setFormData] = useState(initialData);

    const handleInput = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    }

    const handleSubmit = async () => {
        try {
            const {data} = await axios.post("http://192.168.1.2:3000/users", formData);
            Alert.alert('Form Data', 'Data submitted successfully');
            console.log("Form Data: ", data);
            setFormData(initialData);
        } catch (error) {
            Alert.alert('Data failed', 'Data submission failed');
        }
    }
  return (
    <View>
      <Text>POST_API</Text>

      <TextInput 
        placeholder='Enter ID' 
        value={formData.id}
        onChangeText={(value) => handleInput('id', value)}
        />
      <TextInput 
        placeholder='Enter Name' 
        value={formData.name}
        onChangeText={(value) => handleInput('name', value)}
      />
      <TextInput 
        placeholder='Enter Email' 
        value={formData.email}
        onChangeText={(value) => handleInput('email', value)}
      />

      <Button title='Submit' onPress={handleSubmit} />
    </View>
  )
}

export default POST_API