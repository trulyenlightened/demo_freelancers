import React,{ Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,TextInput} from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class SetFrequency extends Component {
  render(){
  return (
    <View style={{
      height:0.80*ScreenHeight,
      width:ScreenWidth,
      flexDirection:'column',
    }}>
    <View style={{
      height:0.30*ScreenHeight,
      width:ScreenWidth,
      flexDirection:'row',
      justifyContent:'space-around'
    }}>
    <View style={{
      height:0.3 * ScreenHeight,
      flexDirection:'column',
      width:0.4 * ScreenWidth,
      justifyContent:'space-between',
      padding:10
    }}
    >
    <TextInput
    style={{
      width:150,
      borderRadius:5,
      height:48,
      borderColor:'blue',
      margin:5,
      fontSize:16,
      backgroundColor:'white'
    }}
    placeholderTextColor='black'
    placeholder='y1'

    >
    </TextInput>

    <TextInput style={{
      width:150,
      borderRadius:5,
      height:48,
      borderColor:'blue',
      margin:5,
      fontSize:16,
      backgroundColor:'white'
    }}
    placeholderTextColor='black'
    placeholder='y2'>
    </TextInput>

    <TextInput
    style={{
      width:150,
      borderRadius:5,
      height:48,
      borderColor:'blue',
      margin:5,
      fontSize:16,
      backgroundColor:'white'
    }}
    placeholderTextColor='black'
    placeholder='y3'
    >
    </TextInput>



</View>

<View style={{
  height:0.3 * ScreenHeight,
  flexDirection:'column',
  width:0.4 * ScreenWidth,
  justifyContent:'space-between',
  padding:10
}}
>
    <TextInput style={{
      width:150,
      borderRadius:5,
      height:48,
      borderColor:'blue',
      margin:5,
      fontSize:16,
      backgroundColor:'white'
    }}
    placeholderTextColor='black'
    placeholder='y1'>

    </TextInput>

    <TextInput style={{
      width:150,
      borderRadius:5,
      height:48,
      borderColor:'blue',
      margin:5,
      fontSize:16,
      backgroundColor:'white'
    }}
    placeholderTextColor='black'
    placeholder='y1'>
    </TextInput>

    <TextInput
    style={{
      width:150,
      borderRadius:5,
      height:48,
      borderColor:'blue',
      margin:5,
      fontSize:16,
      backgroundColor:'white'
    }}
    placeholderTextColor='black'
    placeholder='y3'
    >
    </TextInput>

    </View>
    </View>

    <TouchableOpacity
    
     style={{
      width:100,
      backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'center',
      height:0.04 * ScreenHeight,
      marginLeft: 30
    }}>
    <Text style={{
      color:'white',
      fontWeight:'bold',
      fontSize:18,
    }}>Go Play</Text>
    </TouchableOpacity>

    </View>
  );
 }
}


export default SetFrequency;
