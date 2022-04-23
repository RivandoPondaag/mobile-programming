import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const About = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* <ScrollView> */}
      <Header title="About Us" />
      <View style={styles.contentWrapper}>
        <Text></Text>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 52,
    marginTop: 24,
  },
});
