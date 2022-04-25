import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';

const History = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="History" />
      <View style={styles.contentWrapper}>
        <View>
          <Text style={styles.text}>20 Maret 2022</Text>
          <Gap height={15} />
          <View style={styles.row}>
            <Text style={styles.text1}>Koyabu</Text>
            <Text style={styles.text1}>1</Text>
          </View>
          <Gap height={5} />
          <View style={styles.row}>
            <Text style={styles.text1}>Sambal Roa</Text>
            <Text style={styles.text1}>2</Text>
          </View>
        </View>
        <Gap height={25} />
        <View>
          <Text style={styles.text}>25 Maret 2022</Text>
          <Gap height={15} />
          <View style={styles.row}>
            <Text style={styles.text1}>Koyabu</Text>
            <Text style={styles.text1}>2</Text>
          </View>
        </View>
        <Gap height={25} />
        <View>
          <Text style={styles.text}>30 Maret 2022</Text>
          <Gap height={15} />
          <View style={styles.row}>
            <Text style={styles.text1}>Klappertaart</Text>
            <Text style={styles.text1}>6</Text>
          </View>
        </View>
        <Gap height={25} />
        <View>
          <Text style={styles.text}>3 April 2022</Text>
          <Gap height={15} />
          <View style={styles.row}>
            <Text style={styles.text1}>Sambal Roa</Text>
            <Text style={styles.text1}>2</Text>
          </View>
          <Gap height={5} />
          <View style={styles.row}>
            <Text style={styles.text1}>Dodol</Text>
            <Text style={styles.text1}>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default History;

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: '#676767',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 20,
  },
  text1: {
    color: '#676767',
    fontSize: 20,
    fontFamily: 'Poppins-Reguler',
  },
});