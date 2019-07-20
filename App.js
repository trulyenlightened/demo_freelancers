import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import test from "./test";

class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="home" component={test} initial={true} title="Home" />
        </Scene>
      </Router>
    );
  }
}




export default App;
