import React,{Component} from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { Scene, Router, ActionConst } from "react-native-router-flux";
import Home from "./Home";
import GetFrequency from './GetFrequency';
import SetFrequency from './SetFrequency';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
class App extends Component {
  render(){
  return (
    <Router hideNavBar='true'>
    <Scene key="root">
    <Scene
      key="home"
      component={Home}
      initial={true}
      title='Home'
    />
    <Scene
      key="getFrequency"
      component={GetFrequency}
      title='Get Frequency'
    />

    <Scene
      key="setFrequency"
      component={SetFrequency}
      title='Set Frequency'
    />
    </Scene>
    </Router>
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

export default App;
