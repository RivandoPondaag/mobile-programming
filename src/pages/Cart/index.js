import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';
import {Koyabu, Sambal_Ikan_Roa} from '../../assets';

const Cart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Shopping Cart" />
      <View style={styles.contentWrapper}>
        <Gap height={10} />
        <View style={styles.produk}>
          <Koyabu />
          <View style={styles.tulisanProduk}>
            <Text style={styles.produkText}>Koyabu</Text>
            <Text style={styles.produkText1}>Rp. 12.000</Text>
            <View style={styles.tulisanProduk1}>
              <Text style={styles.produkText2}>X1</Text>
            </View>
          </View>
        </View>
        <Gap height={30} />
        <View style={styles.produk}>
          <Sambal_Ikan_Roa />
          <View style={styles.tulisanProduk}>
            <Text style={styles.produkText}>Sambal Ikan Roa</Text>
            <Text style={styles.produkText1}>Rp. 12.000</Text>
            <View style={styles.tulisanProduk1}>
              <Text style={styles.produkText2}>X2</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.text0}>Total Payment</Text>
          <Text style={styles.text}>Rp. 52.000</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('TransaksiSelesai')}
            activeOpacity={0.7}>
            <View style={styles.order}>
              <Text style={styles.text1}>Order</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 100,
    marginTop: 24,
  },
  contentWrapper1: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    marginTop: 24,
  },
  container: {
    paddingVertical: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text0: {
    color: '#273B4A',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  text: {
    color: '#D9435E',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },
  text1: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  order: {
    backgroundColor: '#069A8E',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  produk: {
    flexDirection: 'row',
  },
  tulisanProduk: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingHorizontal: 10,
  },
  tulisanProduk1: {
    marginLeft: 200,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  produkText: {
    color: '#000000',
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
  },
  produkText1: {
    color: '#A7A7A7',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
  produkText2: {
    color: '#A7A7A7',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
});