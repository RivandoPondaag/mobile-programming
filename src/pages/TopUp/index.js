import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';
import {showMessage} from 'react-native-flash-message';

const TopUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Top Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container1}>
              <Text style={styles.text}>Rp. 20.000</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container1}>
              <Text style={styles.text}>Rp. 50.000</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container2}>
              <Text style={styles.text}>Rp. 100.000</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container2}>
              <Text style={styles.text}>Rp. 200.000</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.container4}>
          <View style={styles.input1}>
            <TextInput
              style={styles.input}
              placeholder={'Enter Your Money'}
              keyboardType={'numeric'}
            />
            <Gap height={20} />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                showMessage({
                  message: 'Success',
                  description: 'Top Up',
                  type: 'success',
                });
              }}>
              <View style={styles.topup}>
                <Text style={styles.text1}>Top Up</Text>
              </View>
            </TouchableOpacity>
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
    marginTop: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 25,
    paddingTop: 60,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 25,
    paddingBottom: 60,
  },
  container1: {
    backgroundColor: '#FAFAFC',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 10,
  },
  container2: {
    backgroundColor: '#FAFAFC',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  container4: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  text1: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 30,
    paddingVertical: 15,
    fontSize: 19,
  },
  input1: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  topup: {
    backgroundColor: '#069A8E',
    marginHorizontal: 60,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
});