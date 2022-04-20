import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const TopUp = ({navigation}) => {
  return (
    <View>
      <Header title="Top Up" onBack={() => navigation.goBack()} />
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({});
