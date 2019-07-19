import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
  Dimensions,
  AppState
} from "react-native";
import { Scene, Router, ActionConst } from "react-native-router-flux";
import Home from "./Home";

class RouterComponent extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
        <Scene
          key="home"
          component={Home}
          initial={true}
        />
        </Scene>
      </Router>

    );
  }
}

export default RouterComponent;
