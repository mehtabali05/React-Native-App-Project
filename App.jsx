// import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
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
import GET_API from './src/components/GET_API';
import POST_API from './src/components/POST_API';
import PlatformExample from './src/components/PlatformExample';
import SearchExample from './src/components/SearchExample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/navigation-screens/Home';
import About from './src/navigation-screens/About';
import LoginScreen from './src/navigation-screens/LoginScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/navigation-screens/drawer/HomeScreen';
import ProfileScreen from './src/navigation-screens/drawer/ProfileScreen';
import SettingScreen from './src/navigation-screens/drawer/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/navigation-screens/tab-navigation/Home';
import Profile from './src/navigation-screens/tab-navigation/Profile';
import Setting from './src/navigation-screens/tab-navigation/Setting';
import Icon from '@react-native-vector-icons/ionicons';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const getTabBarIcon = (routeName,focused,color,size) => {
    let iconName;
    if(routeName === 'Home'){
      iconName = focused ? 'home' : 'home-outline';
    }
    else if(routeName === 'Profile'){
      iconName = focused ? 'person' : 'person-outline';
    }
    else if(routeName === 'Settings'){
      iconName = focused ? 'settings' : 'settings-outline';
    }

    return <Icon name={iconName} size={size} color={color} />;
  }
  

  // let [num, setNum] = useState(0);

  // const incNum = () => {
  //   setNum(num++);
  //   console.log("Increased");
  // }


  // const [count, setCount] = useState(0);

  // const updateCount = () => {
  //   setCount(count + 1);
  // }

  // const Stack = createNativeStackNavigator();

  // const headerTitle = () => <Button title='one' />;
  // const headerRight = () => <Button title='two' />;




  

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
        {/* <AlertBox /> */}



        {/* Creating API using josn-server */}
        {/* <GET_API /> */}



        {/* Post API */}
        {/* <POST_API /> */}


        {/* Platform Component */}
        {/* <PlatformExample /> */}



        {/* Search functionality */}
        {/* <SearchExample /> */}



        {/* Stack Navigators */}
        {/* <NavigationContainer>
          <Stack.Navigator  
            // initialRouteName='Home'
            screenOptions={{
              headerStyle: styles.header,
              headerTitleStyle: styles.title,
              headerTintColor: 'white',
              contentStyle: styles.screen
            }}
          >
            <Stack.Screen 
              name='LoginScreen' 
              component={LoginScreen} 
              options={{
                title: '',
                // headerTitle: headerTitle,
                headerRight: headerRight,

              }}
            />
            <Stack.Screen 
              name='Home Screen' 
              component={Home} 
              // options={{headerShown: false}} 
              // options={{
              //   contentStyle: {
              //     backgroundColor: 'lightgreen'
              //   },
              //   headerTintColor: 'white',
              //   headerStyle: {
              //     backgroundColor: 'green'
              //   },
              //   headerTitleStyle: {
              //     fontSize: 22,
              //     fontWeight: 'bold',
              //   }
              // }}
              options={{
                title: '',
                HeaderTitle: headerTitle,
                HeaderRight: headerRight,

              }}
            />
            <Stack.Screen name='About' component={About} />
          </Stack.Navigator>
        </NavigationContainer> */}





        {/* Drawer Navigation */}
       {/* <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
        */}





        {/* Bottom Tab Navigation */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => getTabBarIcon(route.name, focused, color, size),
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'lightgreen',
              tabBarStyle: {
                paddingBottom: 5,
                height: 60
              }
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Setting} />
          </Tab.Navigator>
        </NavigationContainer>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green'
  },
  title: {
    // color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  screen: {
    backgroundColor: 'lightgreen'
  }
});

export default App;