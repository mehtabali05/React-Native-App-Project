import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GET_API = () => {
    const [data, setData] = useState([]);
  useEffect(() => {

    axios.get("http://192.168.1.2:3000/users").then((result) => {

        setData(result.data);
        console.log("Data: ",result.data)
    });

  }, []);
  return (
    <View>
      <Text>GET_API</Text>
        {
            data.map((user) => (
                <Text key={user.id}>{user.name}</Text>
            ))
        }
      
    </View>
  )
}

export default GET_API