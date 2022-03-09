import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {style} from './assets/style';
import Palalangan from './commponents/Palalangan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Palalangan />
      </View>
    );
  }
}

export default App;
