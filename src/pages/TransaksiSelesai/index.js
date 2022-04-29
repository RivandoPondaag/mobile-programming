import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Success} from '../../assets';
import {Gap} from '../../components';

const TransaksiSelesai = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Gap height={70} />
        <View style={styles.container1}>
          <Success style={styles.Success} />
          <Gap height={20} />
          <Text style={styles.successfully}>Successfully</Text>
        </View>
        <Gap height={60} />
        <View style={styles.tulisan}>
          <Text style={styles.tulisan1}>Koyabu</Text>
          <Text style={styles.tulisan1}>1</Text>
        </View>
        <Gap height={30} />
        <View style={styles.tulisan}>
          <Text style={styles.tulisan1}>Sambal Ikan Roa</Text>
          <Text style={styles.tulisan1}>2</Text>
        </View>
      </View>
    </View>
  );
};

export default TransaksiSelesai;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  successfully: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  tulisan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
  },
  tulisan1: {
    color: '#A7A7A7',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  Success: {
    borderRadius: 75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});