import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Hello from './components/hello';
import Goodbye from './components/goodbye';
import { Constants } from 'expo';


const Tabs = TabNavigator({
  Hello: {
    screen: Hello
  },
  Goodbye: {
    screen: Goodbye
  },
},
{

});

function MyStatusBar({backgroundColor, ...props}) {
    return(
        <View style={{backgroundColor, height:Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    ) 
}

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
            <MyStatusBar backgroundColor={'blue'} barStyle='light-content' />
            <Tabs/> 
        </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
