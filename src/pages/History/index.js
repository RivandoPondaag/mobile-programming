import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const History = ({navigation}) => {
  return (
    <View>
      <Header title="History" onBack={() => navigation.goBack()} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
