import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Gap, Header} from '../../components';
import {Dodol_Amurang} from '../../assets';

const Transaksi = ({navigation}) => {
  const [nilai, rubahNilai, nilai1 = 12000] = useState(1);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Gap height={25} />
        <View style={styles.image1}>
          <Dodol_Amurang style={styles.image} />
        </View>
        <Gap height={45} />
        <View style={styles.container3}>
          <TouchableOpacity onPress={() => rubahNilai(nilai - 1)}>
            <Text style={styles.text4}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text3}>{nilai}</Text>
          <TouchableOpacity onPress={() => rubahNilai(nilai + 1)}>
            <Text style={styles.text4}>+</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={styles.tulisan}>
          <Text style={styles.text}>Dodol</Text>
          <Text style={styles.text1}>Rp. 12.000</Text>
        </View>
      </View>
      <View style={styles.container1}>
        <Gap height={15} />
        <View style={styles.container2}>
          <View style={styles.jumlah}>
            <Text style={styles.text2}>{nilai}</Text>
            <Text style={styles.text2}> Item</Text>
          </View>
          <View style={styles.jumlah}>
            <Text style={styles.text2}>Rp. </Text>
            <Text style={styles.text2}>{nilai1}</Text>
          </View>
        </View>
        <Text style={styles.garis}>
          _________________________________________________________
        </Text>
        <Gap height={40} />
        <View style={styles.tombol}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TransaksiSelesai')}
            activeOpacity={0.7}>
            <View style={styles.tombol1}>
              <Text style={styles.tulisan1}>Buy Now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            activeOpacity={0.7}>
            <View style={styles.tombol2}>
              <Text style={styles.tulisan1}>+ Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Gap height={15} />
      </View>
    </View>
  );
};

export default Transaksi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#069A8E',
    paddingHorizontal: 24,
    paddingTop: 24,
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  container1: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  container2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  container3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 110,
    borderRadius: 30,

    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    paddingHorizontal: 100,
    paddingVertical: 100,
    borderRadius: 100,
  },
  image1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },
  text1: {
    color: '#676767',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  text2: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  text3: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  text4: {
    color: '#000000',
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
  },
  tulisan: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tulisan1: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  tombol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  tombol1: {
    backgroundColor: '#069A8E',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 10,
  },
  tombol2: {
    backgroundColor: '#069A8E',
    paddingHorizontal: 45,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  garis: {
    color: '#000000',
  },
  jumlah: {
    flexDirection: 'row',
  },
});
