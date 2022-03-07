import { SafeAreaView, View, Text,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


// export default function App() {
//   return (
//     <SafeAreaView>
//     <Tambah props={"Tambah"}/>
//     <Nilai props={'0'}/>
//      <Kurang props={"Kurang"}/>  
//     </SafeAreaView>
//   )
// }



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


export default function App() {
const[nilai, rubahNilai]=useState(0)

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=>rubahNilai(nilai+1)}> 
      <View>
       <Text style={{ fontSize: 40, color: 'blue', alignSelf: 'center' }}> Tambah </Text>
     </View>
     </TouchableOpacity>
      <View>
       <Text style={{ fontSize: 40, color: 'black', alignSelf: 'center' }}> {nilai} </Text>
     </View>
     <TouchableOpacity onPress={()=>rubahNilai(nilai-1)}>
      <View>
       <Text style={{ fontSize: 40, color: 'blue', alignSelf: 'center' }}> Kurang</Text>
     </View>
     </TouchableOpacity>
    </SafeAreaView>
  )
}