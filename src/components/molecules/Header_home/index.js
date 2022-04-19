import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, Pic, User_picture} from '../../../assets/icons';
import {Gap} from '../../atoms';

const Header = ({title, title2, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <Gap width={26} />
      <View style={styles.lapisan1}>
        <View>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{title2}</Text>
        </View>
        <View style={styles.pic}>
          <TouchableOpacity activeOpacity={0.7}>
            <User_picture />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 20,
    flexDirection: 'column',
  },
  lapisan1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pic: {
    paddingLeft: 100,
    paddingRight: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
  },
  back: {
    padding: 10,
  },
});
