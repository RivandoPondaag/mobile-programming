import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput as TextInputRN,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  Address,
  Edit_fill,
  IconBack,
  Log_Out,
  Name,
  Password,
  Phone_Number,
} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import {showMessage} from 'react-native-flash-message';

const MyAccount = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container2}>
            <TouchableOpacity
              onPressOut={() => navigation.navigate('MyAccount')}
              activeOpacity={0.7}>
              <IconBack style={styles.IconBack} />
            </TouchableOpacity>
            <Text style={styles.text1}>Edit Account</Text>
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
          <Gap height={10} />
          <View style={styles.container3}>
            <Name style={styles.icon} />
            <View>
              <Text style={styles.text0}>Full name</Text>
              <TextInputRN
                style={styles.input}
                title="Full name"
                placeholder="Type your full name"
              />
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.container3}>
            <Address style={styles.icon} />
            <View>
              <Text style={styles.text0}>Address</Text>
              <TextInputRN
                style={styles.input1}
                title="Address"
                placeholder="Type your address"
              />
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.container3}>
            <Phone_Number style={styles.icon} />
            <View>
              <Text style={styles.text0}>Phone number</Text>
              <TextInputRN
                style={styles.input2}
                title="Phone number"
                placeholder="Type your phone number"
              />
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.container3}>
            <Password style={styles.icon} />
            <View>
              <Text style={styles.text0}>Password</Text>
              <TextInputRN
                style={styles.input3}
                title="Password"
                placeholder="Type your password"
              />
            </View>
          </View>
          <Gap height={20} />
          <Button
            style={styles.save}
            title="Save"
            onPress={() => {
              showMessage({
                message: 'Success',
                description: 'Edit Account',
                type: 'success',
              });
            }}
          />
        </View>
      </ScrollView>
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
    paddingHorizontal: 20,
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
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
    paddingHorizontal: 25,
    paddingVertical: 25,
    marginTop: 20,
  },
  icon1: {
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  text0: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 160,
  },
  input1: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 170,
  },
  input2: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 130,
  },
  input3: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 160,
  },
  Log_Out: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  Log_Out1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});