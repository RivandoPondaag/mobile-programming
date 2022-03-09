import React, {useState, Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const Palalangan = () => {
  const [text, onChangeText] = React.useState({
    Email: 'default',
    Username: 'default',
    Password: 'default',
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={val =>
          onChangeText({
            Email: val !== '' ? val : 'default',
            Username: text.Username,
            Password: text.Password,
          })
        }
        placeholder="Enter the Email here"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.input}
        onChangeText={val =>
          onChangeText({
            Email: text.Email,
            Username: val !== '' ? val : 'default',
            Password: text.Password,
          })
        }
        placeholder="Enter the Username here"
        placeholderTextColor="grey"
      />

      <TextInput
        style={styles.input}
        onChangeText={val =>
          onChangeText({
            Email: text.Email,
            Username: text.Username,
            Password: val !== '' ? val : 'default',
          })
        }
        placeholder="Enter the Password here"
        placeholderTextColor="grey"
        secureTextEntry={true}
      />

      <Button color="black" title="Button" onPress={() => console.log(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Palalangan;

const style = StyleSheet.create({
  tulisan: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  kotak_tulisan: {
    backgroundColor: 'grey',
    marginTop: 50,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
});
