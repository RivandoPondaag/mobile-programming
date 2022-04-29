import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Gap, Header_home} from '../../components';
import {
  Dodol_Amurang,
  Klappertaart,
  Koyabu,
  Sambal_Ikan_Roa,
  Top_up,
  User_picture,
  Abon_Tuna,
  Bagea_Kenari,
  Cakalang_Fufu,
  Kacang_Goyang,
  Kue_Lampu_lampu,
  Pala_Manis,
  Panada,
  Pia_Amurang,
  Pinende,
  Saguer,
} from '../../assets/icons';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Choose the</Text>
            <Text style={styles.text}>favorite you love</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyAccount')}
              activeOpacity={0.7}>
              <User_picture />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentWrapper1}>
            <View>
              <Text style={styles.text1}>Balance</Text>
              <Text style={styles.text2}>Rp. 500.000</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('TopUp')}>
                <Top_up />
              </TouchableOpacity>
            </View>
          </View>
          <Gap height={22} />
          <View style={styles.gambar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Dodol_Amurang />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Sambal_Ikan_Roa />
            </TouchableOpacity>
          </View>
          <Gap height={6} />
          <View style={styles.tulisan}>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Dodol</Text>
              <Text style={styles.tulisan2}>Amurang</Text>
            </View>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Sambal</Text>
              <Text style={styles.tulisan2}>Ikan Roa</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.gambar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Koyabu />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Klappertaart />
            </TouchableOpacity>
          </View>
          <Gap height={6} />
          <View style={styles.tulisan3}>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Koyabu</Text>
            </View>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Klappertaart</Text>
            </View>
          </View>
          <View style={styles.gambar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Kacang_Goyang />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Pala_Manis />
            </TouchableOpacity>
          </View>
          <Gap height={6} />
          <View style={styles.tulisan9}>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Kacang</Text>
              <Text style={styles.tulisan2}>Goyang</Text>
            </View>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Pala</Text>
              <Text style={styles.tulisan2}>Manis</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.gambar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Bagea_Kenari />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Cakalang_Fufu />
            </TouchableOpacity>
          </View>
          <Gap height={6} />
          <View style={styles.tulisan8}>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Bagea</Text>
              <Text style={styles.tulisan2}>kenari</Text>
            </View>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Cakalang</Text>
              <Text style={styles.tulisan2}>Fufu</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.gambar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Panada />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Abon_Tuna />
            </TouchableOpacity>
          </View>
          <Gap height={6} />
          <View style={styles.tulisan7}>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Panada</Text>
            </View>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Abon Tuna</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.gambar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Saguer />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Pinende />
            </TouchableOpacity>
          </View>
          <Gap height={6} />
          <View style={styles.tulisan6}>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Saguer</Text>
            </View>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Pinende</Text>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.gambar}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Kue_Lampu_lampu />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              activeOpacity={0.7}>
              <Pia_Amurang />
            </TouchableOpacity>
          </View>
          <Gap height={6} />
          <View style={styles.tulisan5}>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Kue</Text>
              <Text style={styles.tulisan2}>Lampu-Lampu</Text>
            </View>
            <View style={styles.tulisan1}>
              <Text style={styles.tulisan2}>Pia</Text>
              <Text style={styles.tulisan2}>Amurang</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    paddingVertical: 60,
    backgroundColor: '#069A8E',
    alignItems: 'center',
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
  },
  contentWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    margin: 18,
    marginTop: 10,
    paddingTop: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,

    //shadow container Balance
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  text1: {
    fontSize: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  gambar: {
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tulisan: {
    paddingLeft: 70,
    paddingRight: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tulisan1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tulisan2: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  tulisan3: {
    paddingLeft: 77,
    paddingRight: 57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  tulisan9: {
    paddingLeft: 73,
    paddingRight: 81,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tulisan8: {
    paddingLeft: 78,
    paddingRight: 67,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tulisan7: {
    paddingLeft: 74,
    paddingRight: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tulisan6: {
    paddingLeft: 78,
    paddingRight: 73,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tulisan5: {
    paddingLeft: 49,
    paddingRight: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
});