import React,{ Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import { Actions } from "react-native-router-flux";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class Home extends Component {
  render(){
  return (
    <View style={{
      height:ScreenHeight,
      width:ScreenWidth,
    }}>

      <View>
        <TouchableOpacity
        onPress={()=>{
          Actions.getFrequency();
        }}
         style={{
          width:ScreenWidth,
          backgroundColor:'blue',
          alignItems:'center',
          justifyContent:'center',
          height:0.04 * ScreenHeight
        }}>
        <Text style={{
          color:'white',
          fontWeight:'bold',
          fontSize:18,

        }}>GET FREQUENCY</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          Actions.setFrequency();
        }}
         style={{
          width:ScreenWidth,
          backgroundColor:'blue',
          alignItems:'center',
          justifyContent:'center',
          height:0.04 * ScreenHeight
        }}>
        <Text style={{
          color:'white',
          fontWeight:'bold',
          fontSize:18,
        }}>SET FREQUENCY</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
 }
}


export default Home;
