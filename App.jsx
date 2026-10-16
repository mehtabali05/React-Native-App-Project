import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AppBar from  './src/components/AppBar'
// import Child from './src/components/Child'
// import FlatList from './src/components/FlatList'
// import SectionListScreen from './src/components/SectionListScreen';
// import LoginForm from './src/components/LoginForm';
// import ContactListScreen from './src/screens/contact/ContactListScreen';
import Grid from './src/components/Grid'
import Toggle from './src/components/Toggle';
import ButtonTypes from './src/components/ButtonTypes';
import ActivityIndicator from './src/components/ActivityIndicator';
import StatusbarComponent from './src/components/StatusbarComponent';
import DialogueBox from './src/components/DialogueBox';
import AlertBox from './src/components/AlertBox';



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
    <View style={{flex: 1}}>
      {/* <AppBar /> */}
      {/* <Text style={{ fontSize: 30, textAlign: 'center', padding: 25 }}>App</Text> */}
 
      {/* <View style={{flex: 1}}> */}
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
        {/* <FlatList /> */}



        {/* SectionList */}
        {/* <SectionListScreen /> */}




        {/* Creating Login Form */}
        {/* <LoginForm /> */}



        {/* Display custom component using FlatList */}
        {/* <ContactListScreen /> */}





        {/* Create Grid with ScrollView & Map function */}
        {/* <Grid /> */}



        {/* Toggle Button */}
        {/* <Toggle /> */}




        {/* TouchableOpacity & TouchableHighlight */}
        {/* <ButtonTypes /> */}




        {/* ActivityInicatr  */}
        {/* <ActivityIndicator /> */}




        {/* StatusBar */}
        {/* <StatusbarComponent /> */}




        {/* Modal */}
        {/* <DialogueBox /> */}



        {/* Alert Box */}
        <AlertBox />
    </View>
  );
};

export default App;