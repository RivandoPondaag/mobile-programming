import {StyleSheet, Text, View, ScrollView,ImageBackground} from 'react-native';
import React from 'react';
import {Gap} from '../../components';
import {About_US} from '../../assets';
import { Logo } from '../../assets';
const About = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.text2}>About Us</Text>
          </View>
          <View>
            <About_US />
          </View>
        </View>
        <View style={styles.contentWrapper}>
       <Logo />
          <Text style={styles.text}>
            Aplikasi Oleh-Oleh Khas Manado(OOKM) merupakan aplikasi untuk
            melakukan pemesanan makanan khas manado secara online. Dalam
            aplikasi ini pembeli dapat memilih produk yang ditawarkan kemudian
            memilih berapa banyak yang ingin di beli lalu melakukan transaksi
            sesuai pemesanan.
          </Text>
          <Gap height={10} />
          <Text style={styles.text}>
            Anggota-anggota yang secara khusus terlibat dalam pembuatan aplikasi
            ini:
          </Text>
          <Text style={styles.text1}>1. Pondaag, Rivando Morten</Text>
          <Text style={styles.text1}>2. Pala'langan, Radocen Chrisnov</Text>
          <Text style={styles.text1}>3. Topit, Alfan F. A</Text>
          <Text style={styles.text1}>4. Unenor, Marietta Ardelia Gavrila</Text>
          <Text style={styles.text1}>5. Wagey, Nariva Charline</Text>
          <Gap height={10} />
          <Text style={styles.text}>
            Dengan adanya aplikasi ini diharapkan mempermudah wisatawan baik dalam negri
            ataupun luar negri untuk membeli oleh-oleh khas manado dengan mudah dan harga yang
            termurah. Aplikasi ini adalah bentuk pengambdian kami untuk memajukan pariwisata 
            di sulawesi utara.
          </Text>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  page: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    paddingVertical: 30,
    backgroundColor: '#069A8E',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 52,
    marginTop: 24,
  },
  contentWrapper1: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
  text1: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 15,
  },
  text2: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 15,
    color: '#000000',
  },
  besar:{
    width:30,
    height:30,
  }
});