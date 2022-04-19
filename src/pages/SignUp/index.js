import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Gap, Button, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <Header title="Sing Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <View style={styles.addPhoto}>
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput title={'Full name'} placeholder="Type your full name" />
        <Gap height={6} />
        <TextInput title={'Address'} placeholder="Type your address" />
        <Gap height={6} />
        <TextInput title={'Phone Number'} placeholder="Type your number" />
        <Gap height={6} />
        <TextInput title={'Password'} placeholder="Type your password" />
        <Gap height={17} />
        <Button
          title={'Continue'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#069A8E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontSize: 14,
    fontFamily: 'Poppins-light',
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
    justifyContent: 'center',
  },
});