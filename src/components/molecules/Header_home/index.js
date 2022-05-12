import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, Pic_dua} from '../../../assets/icons';
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
          <Text style={styles.text_2}>{title2}</Text>
        </View>
        <View style={styles.pic}>
          <Pic_dua />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  text_2: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  back: {
    padding: 10,
  },
  pic: {
    paddingLeft: 110,
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  lapisan1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
