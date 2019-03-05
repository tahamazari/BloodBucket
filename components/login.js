import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Splash from './splash.js';

class Login extends Component {
    render(){
        return(
            <View>
                <Text>This is the Login Screen</Text>
                <Button 
                    title="Register now!"
                    onPress={() => push('/register')}
                />
            </View>
        )
    }
}

export default Login;