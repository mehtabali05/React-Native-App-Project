import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AppBar from  './src/components/AppBar'
import Child from './src/components/Child'


const App = () => {
  

  // let [num, setNum] = useState(0);

  // const incNum = () => {
  //   setNum(num++);
  //   console.log("Increased");
  // }


  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  }
  return (
    <View>
      <AppBar />
      {/* <Text style={{ fontSize: 30, textAlign: 'center', padding: 25 }}>App</Text> */}

      <View style={{ width: 150 }}>
        {/* <Button title="Increase Number" onPress={incNum} />
        <Text> Number is: {num}</Text> */}



        {/* Props */}
        <Button title='Increase Count' onPress={updateCount} />
        <Child count= {count} />
      </View>
    </View>
  );
};

export default App;