import React,{ Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class GetFrequency extends Component {
  render(){
  return (
    <View style={{
      height:0.80*ScreenHeight,
      width:ScreenWidth,
      justifyContent:'center',
      alignItems:'center'
    }}>

      <Text>
      This is Getting Page
      </Text>

    </View>
  );
 }
}


export default GetFrequency;
