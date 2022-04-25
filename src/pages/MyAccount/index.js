import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack} from '../../assets';

const MyAccount = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            onPressOut={() => navigation.navigate('MainApp')}
            activeOpacity={0.7}>
            <IconBack style={styles.IconBack} />
          </TouchableOpacity>
          <Text style={styles.text1}>My Account</Text>
        </View>
        <View>
          <View style={styles.container1}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>Add Photo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Text>Page My Account</Text>
      </View>
    </View>
  );
};

export default MyAccount;

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
  container: {
    paddingVertical: 20,
    paddingTop: 30,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  container1: {
    paddingVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPhoto: {
    height: 130,
    width: 130,
    backgroundColor: '#069A8E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontSize: 20,
    fontFamily: 'Poppins-light',
    maxWidth: 70,
    textAlign: 'center',
  },
  text1: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingLeft: 20,
  },
  IconBack: {
    paddingLeft: 20,
  },
});
