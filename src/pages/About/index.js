import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const About = ({navigation}) => {
  return (
    <View>
      <Header title="About Us" onBack={() => navigation.goBack()} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
