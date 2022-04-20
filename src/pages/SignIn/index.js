import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Gap, TextInput} from '../../components';
import {Logo1} from '../../assets/icons';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Logo1 />
        <Gap height={11} />
        <Text style={styles.text}>Sign In</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Gap height={46} />
        <TextInput title="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button title="Sign In" />
        <Gap height={12} />
        <View style={styles.text1}>
          <Text style={styles.text2}>Create new account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            activeOpacity={0.7}>
            <Text style={styles.text3}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
  container: {
    paddingVertical: 38,
    backgroundColor: '#069A8E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  text1: {
    fontSize: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 60,
    paddingRight: 70,
  },
  text2: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  text3: {
    color: '#175821',
    fontFamily: 'Poppins-Bold',
  },
});
