/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();



const Stack = createStackNavigator();

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './screens/Home/Home';
import About from './screens/About/About';
import Menu from './screens/Menu/Menu';
import SpecialFoodDetails from './components/SpecialFoodDetails';
import MenuPage from './screens/Menu/MenuPage';

function Homes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SpecialFoodDetails" component={SpecialFoodDetails} />
        </Stack.Navigator>
    );
}

function Menus() {
    return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="MenuPage" component={MenuPage} />
        </Stack.Navigator>
    );
}

function MyTabs() {
  return (
    <Tab.Navigator  style={{backgroundColor: ''}} 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
            // return <Icon name="cutlery" size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#05c46b',
        inactiveTintColor: '#ffffff',
        style: {
          backgroundColor: '#111',//color you want to change,
          borderTopColor: "transparent"
        },
        bottomTabs: { hideShadow: true },
        indicatorStyle: { backgroundColor: 'transparent', }
      }}
    >
      <Tab.Screen name="Home" component={Homes} />
      <Tab.Screen name="Menu" component={Menus} />
      <Tab.Screen name="About" component={About} />
      {/* <Tab.Screen name="SpecialFoodDetails" component={SpecialFoodDetails} /> */}
    </Tab.Navigator>
  );
}



const App = () => {
  return (
    <>
      <NavigationContainer>

      {/* <Stack.Navigator 
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: {
                          backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen 
                        options={{ 
                            title: 'Home',
                            headerRight: ({navigation}) => (
                                <Button
                                  onPress={() => {navigation.navigate('TodoList')}}
                                  title="Info"
                                  color="#fff"
                                />
                            )
                        }} 
                        options={({ navigation, route }) => ({
                            headerRight: () => (
                                <Button
                                  onPress={() => {navigation.navigate('TodoList')}}
                                  title="Info"
                                  color="#fff"
                                />
                            ),
                        })}
                        name="Home" 
                        component={Home} 
                    />
                </Stack.Navigator> */}
                {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator> */}
    <MyTabs />
      </NavigationContainer>
    </>
  );
};



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
