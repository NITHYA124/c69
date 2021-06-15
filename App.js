//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import transaction from './screens/transaction';
import search from './screens/search';

export default class App extends React.Component {
  render(){
    return(
    <AppContainer/>
    );
  }
}
const TabNavigator=createBottomTabNavigator({
  Transaction:transaction,
    Search:search
  
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
