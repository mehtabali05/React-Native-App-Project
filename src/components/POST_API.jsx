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

    // const handleSubmit = async () => {
    //     try {
    //         const {data} = await axios.post("http://192.168.1.2:3000/users", formData);
    //         Alert.alert('Form Data', 'Data submitted successfully');
    //         console.log("Form Data: ", data);
    //         setFormData(initialData);
    //     } catch (error) {
    //         Alert.alert('Data failed', 'Data submission failed');
    //     }
    // }


    // const handleUpdate = async () => {
    //     try {
    //         const {data} = await axios.put(`http://192.168.1.2:3000/users/${formData.id}`, {
    //             name: formData.name,
    //             email: formData.email
    //         });
    //         Alert.alert('Success', 'Data updated successfully');
    //         console.log("Updated data: ", data);
    //         setFormData(initialData);
    //     } catch (error) {
    //         Alert.alert('Error', 'Failed to update data');
    //     }
    // }

    // const handlePatch = async () => {
    //     try {
    //         const {data} = await axios.patch(`http://192.168.1.2:3000/users/${formData.id}`,{
    //             ...formData.name && {name: formData.name},
    //             ...formData.email && {email: formData.email}
    //         });

    //         console.log("Patched data: ", data);
    //         setFormData(initialData);
    //         Alert.alert('success','data updated successfully');
    //     } catch (error) {
    //         Alert.alert('Error', error.response?.data || error.message);
    //     }
    // }


    const handleDelete = async () => {
        try {
            const {data} = await axios.delete(`http://192.168.1.2:3000/users/${formData.id}`);
            Alert.alert('success','data deleted successfuly');
            console.log("Deleted data: ", data);
            setFormData(initialData);
        } catch (error) {
            Alert.alert('Error', 'failed to delete data');
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

      <Button title='Submit' 
        // onPress={handleSubmit} 
        // onPress={handleUpdate}
        // onPress={handlePatch}
        onPress={handleDelete}
      />
    </View>
  )
}

export default POST_API