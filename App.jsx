import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AppBar from  './src/components/AppBar'
import Child from './src/components/Child'
import FlatList from './src/components/FlatList'


const App = () => {
  

  // let [num, setNum] = useState(0);

  // const incNum = () => {
  //   setNum(num++);
  //   console.log("Increased");
  // }


  // const [count, setCount] = useState(0);

  // const updateCount = () => {
  //   setCount(count + 1);
  // }



  const [name, setName] = useState('');
  return (
    <View>
      <AppBar />
      {/* <Text style={{ fontSize: 30, textAlign: 'center', padding: 25 }}>App</Text> */}

      <View style={{ width: 250 }}>
        {/* <Button title="Increase Number" onPress={incNum} />
        <Text> Number is: {num}</Text> */}



        {/* Props */}
        {/* <Button title='Increase Count' onPress={updateCount} />
        <Child count= {count} /> */}



        {/* TextInput, onChangeText */}
        {/* <TextInput placeholder='Enter your Name' style= { {fontSize: 20, borderWidth: 2, borderColor: 'white', margin: 10} } value={name} onChangeText={(value) => setName(value)} />
        <Text>{name}</Text>
        <Button title='Clear' onPress={() => setName('')} /> */}




        {/* FlatList */}
        <FlatList />
      </View>
    </View>
  );
};

export default App;