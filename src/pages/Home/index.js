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
} from '../../assets/icons';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Header_home
          onPress={() => navigation.navigate('MyAccount')}
          title="Choose the"
          title2="favorite you love"
        />
      </View>
      <ScrollView>
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
            <TouchableOpacity activeOpacity={0.7}>
              <Dodol_Amurang />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
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
            <TouchableOpacity activeOpacity={0.7}>
              <Koyabu />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
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
    paddingVertical: 38,
    backgroundColor: '#069A8E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
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
});