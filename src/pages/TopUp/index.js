import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const TopUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Top Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>AAAA</Text>
            <Text style={styles.text1}>AAAA</Text>
          </View>
          <View style={styles.text2}>
            <Text style={styles.text}>BBBB</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
  },
  text: {
    fontSize: 50,
    backgroundColor: 'black',
    color: 'white',
  },
  text1: {
    fontSize: 50,
    backgroundColor: 'green',
    color: 'red',
  },
  text2: {
    fontSize: 50,
    backgroundColor: 'black',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
