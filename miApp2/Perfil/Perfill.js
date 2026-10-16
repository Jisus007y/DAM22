/*1. zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import {Nombre} from './Perfil/Nombre';
import {Carrera} from './Perfil/Carrera';
import {Materia} from './Perfil/Materia';
import {Cuatrimestre} from './Perfil/Cuatrimestre';

/*2. zona de main*/ 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      
      <Text>-------------------------------------------</Text>
      

      <Nombre></Nombre>
      <Nombre/>

       <Text>-------------------------------------------</Text>

       <Carrera></Carrera>
      <Carrera/>

      <Text>-------------------------------------------</Text>

       <Materia></Materia>
      <Materia/>

      <Text>-------------------------------------------</Text>

       <Cuatrimestre></Cuatrimestre>
      <Cuatrimestre/>


      <StatusBar style="auto" />
    </View>
  );
}

/*3. zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
