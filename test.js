import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Alert
} from "react-native";

const html =
`<script>
    function myFunction() {
        window.postMessage("Test Results 10 on 10");
    }
</script>
<body>
    <p>Click the button</p>
    <button style="font-size:20px;"onclick="myFunction()">Do you want to test me?</button>
</body>
`

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1,justifyContent:'center' }}>
        <WebView
          source={{
            html: html
          }}
          javaScriptEnabled={true}
          onMessage={event => {
            alert(decodeURI(decodeURI(event.nativeEvent.data)));
          }}
        />
      </View>
    );
  }
}

export default Test;
