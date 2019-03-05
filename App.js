
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './components/splash';
import Login from './components/login';
import Register from './components/register';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    show_splash: true
  }

  componentDidMount(){
      setTimeout(function() { //Start the timer
        this.setState({show_splash: false}) //After 1 second, set render to true
    }.bind(this), 3000)
  }



  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator ({
  Login: { screen: Login }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
