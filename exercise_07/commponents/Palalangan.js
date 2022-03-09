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

//cara menggunakan State
// export default function Hello() {
//   const [Nilai, Rubah_Nilai] = useState(0);

//   return (
//     <View>
//       <TouchableOpacity onPress={() => Rubah_Nilai(Nilai + 1)}>
//         <View>
//           <Text style={{fontSize: 50, color: 'red', alignSelf: 'center'}}>
//             TAMBAH
//           </Text>
//         </View>
//       </TouchableOpacity>
//       <View>
//         <Text style={{fontSize: 100, color: 'black', alignSelf: 'center'}}>
//           {Nilai}
//         </Text>
//       </View>
//       <TouchableOpacity onPress={() => Rubah_Nilai(Nilai - 1)}>
//         <View>
//           <Text style={{fontSize: 50, color: 'blue', alignSelf: 'center'}}>
//             KURANG
//           </Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => Rubah_Nilai(0)}>
//         <View>
//           <Text
//             style={{
//               fontSize: 50,
//               color: 'white',
//               backgroundColor: 'black',
//               marginTop: 20,
//               marginHorizontal: 20,
//               paddingHorizontal: 30,

//               alignSelf: 'center',
//             }}>
//             RESET
//           </Text>
//         </View>
//       </TouchableOpacity>
//       <View>
//         //todo ini menggunakan internal StyleSheet //style jika memakai lebih
//         dari 1 style harus menggunakan []
//         <Text style={[style.tulisan, style.kotak_tulisan]}>
//           Pala'langan, Radocen Chrisnov
//         </Text>
//       </View>
//     </View>
//   );
// }

// cara menggunakan Props
// export default function Hello() {
//   return (
//     <View>
//       <Tambah props={'TAMBAH'} />
//       <Angka props={'0'} />
//       <Kurang props={'KURANG'} />
//     </View>
//   );
// }

// export function Tambah({props}) {
//   return (
//     <View>
//       <Text style={{fontSize: 50, color: 'red', alignSelf: 'center'}}>
//         {props}
//       </Text>
//     </View>
//   );
// }

// export function Kurang({props}) {
//   return (
//     <View>
//       <Text style={{fontSize: 50, color: 'blue', alignSelf: 'center'}}>
//         {props}
//       </Text>
//     </View>
//   );
// }

// export function Angka({props}) {
//   return (
//     <View>
//       <Text style={{fontSize: 50, color: 'black', alignSelf: 'center'}}>
//         {props}
//       </Text>
//     </View>
//   );
// }

//cara menggunakan styleSheet

//todo ini menggunakan internal StyleSheet
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
