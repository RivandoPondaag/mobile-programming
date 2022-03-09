import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";


//Komponen fuctional hanyalah fungsi java script yang biasa menerima props sebagai argument dan mengembalikan element react

// export default function App() {
//   return (
//     <SafeAreaView>
//     <Tambah props={"Tambah"}/>
//     <Nilai props={'0'}/>
//      <Kurang props={"Kurang"}/>
//     </SafeAreaView>
//   )
// }
 // Cara Menggunakan Props
 // Props kebalikan dari state, dimana props dapat berpindah component tetapi nilainya tetap tidak bisa berubah 
// export function Tambah({props}) {
//   return (
//     <View>
//       <Text style={{fontSize:20, color:'blue', alignSelf:'center'}}> {props}</Text>
//     </View>
//   )
// }

// export function Kurang({props}) {
//   return (
//     <View>
//       <Text style={{fontSize:20, color:'blue', alignSelf:'center'}}> {props}</Text>
//     </View>
//   )
// }

// export function Nilai({props}) {
//   return (
//     <View>
//       <Text style={{fontSize:40, color:'black', alignSelf:'center'}}> {props}</Text>
//     </View>
//   )
// }
//  menambahkan comment
export default function App() {
  //cara menggunakan state
  //state tidak dapat berpindah component tetapi bisa berubah nilai
  const [nilai, rubahNilai] = useState(0);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => rubahNilai(nilai + 1)}>
        <View>
          <Text style={{ fontSize: 40, color: "blue", alignSelf: "center" }}>
            {" "}
            Tambah{" "}
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 40, color: "black", alignSelf: "center" }}>
          {" "}
          {nilai}{" "}
        </Text>
      </View>
      <TouchableOpacity onPress={() => rubahNilai(nilai - 1)}>
        <View>
          <Text style={{ fontSize: 40, color: "blue", alignSelf: "center" }}>
            {" "}
            Kurang
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
