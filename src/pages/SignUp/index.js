import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput as TextInputRN,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');

  const [hasPhoto, setHasPhoto] = useState(false);

  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxHeight: 200,
      maxWidth: 200,
      includeBase64: true,
    });

    if (result.didCancel) {
      setHasPhoto(false);
      showMessage({
        message: 'Upload foto dibatalkan',
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
      showMessage({
        message: 'Foto telah terupload',
        type: 'default',
        backgroundColor: '#55CB95',
        color: 'white',
      });
    }
  };

  return (
    <View style={styles.Page}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <TouchableOpacity onPress={getPhoto} activeOpacity={0.7}>
              {!hasPhoto && (
                <View style={styles.addPhoto}>
                  <Text style={styles.addPhotoText}>Add Photo</Text>
                </View>
              )}
              {hasPhoto && (
                <Image source={{uri: photo}} style={styles.avatar} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TextInput title={'Full name'} placeholder="Type your full name" />
        <Gap height={6} />
        <TextInput title={'Address'} placeholder="Type your address" />
        <Gap height={6} />
        <Text style={styles.text0}>Phone Number</Text>
        <TextInputRN
          style={styles.input}
          title="Phone Number"
          placeholder="Type your phone number"
          keyboardType="phone-pad"
        />
        <Gap height={6} />
        <Text style={styles.text0}>Password</Text>
        <TextInputRN
          style={styles.input}
          title="Password"
          placeholder="Type your password"
          secureTextEntry={true}
        />
        <Gap height={30} />
        <Button
          title={'Continue'}
          onPress={() => navigation.navigate('MainApp')}
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
  avatar: {
    height: 90,
    width: 90,
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
  text0: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
  },
});
